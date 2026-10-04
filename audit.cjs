const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(filePath));
    } else { 
      if (filePath.endsWith('.html') || filePath.endsWith('.xml')) results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = walk('dist').filter(f => f.endsWith('.html'));

let missingTitles = [];
let missingH1 = [];
let duplicateTitles = {};
let missingCanonical = [];
let wrongCanonical = [];
let unparseableJsonLd = [];
let missingAssets = [];
let missingInternalLinks = [];

const allHtmlPaths = new Set(htmlFiles.map(f => {
  const rel = f.replace(/^dist[\\\/]/, '').replace(/\\/g, '/').replace(/index\.html$/, '');
  return '/' + rel;
}));
// also include /404.html
allHtmlPaths.add('/404.html');

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) missingTitles.push(file);
  else {
    const t = titleMatch[1];
    duplicateTitles[t] = (duplicateTitles[t] || 0) + 1;
  }
  
  // H1
  const h1Match = content.match(/<h1.*?>(.*?)<\/h1>/);
  if (!h1Match && !file.includes('404')) missingH1.push(file); // 404 might not have H1
  
  // Canonical
  const canonMatch = content.match(/<link rel="canonical" href="(.*?)"/);
  if (!canonMatch) missingCanonical.push(file);
  else {
    const c = canonMatch[1];
    const expected = 'https://tuijianjichang.blog' + file.replace(/^dist[\\\/]/, '/').replace(/\\/g, '/').replace(/index\.html$/, '');
    if (c !== expected && !file.includes('404.html')) wrongCanonical.push(`${file} -> ${c} expected ${expected}`);
  }
  
  // JSON-LD
  const ldMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ldMatch) {
    try {
      JSON.parse(ldMatch[1]);
    } catch(e) {
      unparseableJsonLd.push(file);
    }
  }
  
  // Internal Links & Assets
  const hrefMatches = [...content.matchAll(/href="(\/.*?)"/g)].map(m => m[1]);
  const srcMatches = [...content.matchAll(/src="(\/.*?)"/g)].map(m => m[1]);
  
  hrefMatches.forEach(h => {
    if (h.startsWith('/')) {
      let check = h.split('#')[0];
      if (check.endsWith('.css') || check.endsWith('.svg') || check.endsWith('.png') || check.endsWith('.jpg') || check.endsWith('.xml')) {
         if (!fs.existsSync(path.join('dist', check))) missingAssets.push(`${file} -> ${h}`);
      } else {
        if (!allHtmlPaths.has(check)) missingInternalLinks.push(`${file} -> ${h}`);
      }
    }
  });
  
  srcMatches.forEach(s => {
    if (s.startsWith('/')) {
      let check = s.split('#')[0];
      if (!fs.existsSync(path.join('dist', check))) missingAssets.push(`${file} -> ${s}`);
    }
  });
});

const sitemapContent = fs.existsSync('dist/sitemap-0.xml') ? fs.readFileSync('dist/sitemap-0.xml', 'utf8') : '';
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replace('https://tuijianjichang.blog', ''));

const report = `
# 上线前本地静态审计报告 (Pre-launch Static Audit)

本次审计通过读取并解析 \`dist/\` 目录下生成的 HTML 及 XML 文件进行。
不包括：真实线上状态 (DNS/HTTPS/301)、爬虫引擎实际抓取效果、第三方外部资源状态。

## 一、页面结构统计
- HTML 文件总数：${htmlFiles.length}
- Sitemap 收录数量：${sitemapUrls.length} （注：404 页面被自动排除）

## 二、基础 SEO 指标检查
1. **Title / H1 完整性**
   - 缺失 Title 的页面：${missingTitles.length === 0 ? '无' : missingTitles.join(', ')}
   - 缺失 H1 的核心页面：${missingH1.length === 0 ? '无' : missingH1.join(', ')}
   - 是否存在大面积重复的 Title：${Object.values(duplicateTitles).some(v => v > 1) ? '部分相同' : '无'}
2. **Canonical 标签校验**
   - 缺失 Canonical 的页面：${missingCanonical.length === 0 ? '无' : missingCanonical.join(', ')}
   - Canonical URL 与自身不匹配的异常页面：${wrongCanonical.length === 0 ? '无' : wrongCanonical.join(', ')}
3. **JSON-LD 结构化数据**
   - 无法解析 JSON 的异常页面：${unparseableJsonLd.length === 0 ? '无' : unparseableJsonLd.join(', ')}

## 三、链接与资源可达性 (仅测本地产物)
- 死链/失效内部页面：${missingInternalLinks.length === 0 ? '无' : Array.from(new Set(missingInternalLinks)).join(', ')}
- 丢失的静态资源 (图片/CSS)：${missingAssets.length === 0 ? '无' : Array.from(new Set(missingAssets)).join(', ')}

## 四、数据一致性说明
- 场景页（如性价比、大流量等）均完全通过 \`providers.ts\` 动态数组过滤生成，因此数据逻辑及“待核实状态”在列表和场景过滤中已达到同步。
- **需同步维护的静态数据**：部分 \`customContent.ts\` 内嵌的文章正文及长篇简述（如品牌介绍中关于“起步价 ¥X”的描述）当前尚未转化为 100% 动态读取。已修复了已知的“飞猫云”绝对结论，但后续服务商改价时，可能仍需人工同步修改这部分自定义点评。

## 五、浏览器验收结果
- 已尝试通过 Playwright/Puppeteer 执行，但受限于沙盒代理与隔离环境的安全限制，目前未成功对 390px / 桌面端执行页面滚动的真实 DOM 渲染快照。视觉检查暂未执行。

## 六、待上线事项 (Pending)
1. 将 \`dist/\` 文件部署至主机或 CDN。
2. 验证真实域名的 DNS 与 SSL 证书状态，配置规范化的强制 HTTPS 和 无 www 重定向。
3. 若具备条件，向搜索引擎 (IndexNow / Bing / Google Search Console) 提交 \`sitemap-index.xml\`。
`;

fs.writeFileSync('AUDIT_REPORT.md', report);
console.log('Generated audit report.');
