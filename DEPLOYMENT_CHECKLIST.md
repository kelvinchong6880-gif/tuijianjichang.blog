# 最终部署与发布清单 (Deployment Checklist)

本项目已完成全站静态生成重构、SEO审计、断链清理与外链测试，准备在 Cloudflare Pages 平台进行首次部署。

## 1. 待部署的文件边界
- **应提交的网站源码与依赖**：
  - `src/` (Astro组件、页面、数据字典 `providers.ts`、`customContent.ts`)
  - `public/` (静态资源、图片)
  - `package.json`, `package-lock.json`, `tsconfig.json`, `astro.config.mjs`
  - `.gitignore` (确保屏蔽临时测试产物)
- **应进入发布的文档**：
  - `README.md`, `BING_TOP8_READINESS.md`, `AUDIT_REPORT.md`, `EXTERNAL_LINKS_AUDIT.json`, `DEPLOYMENT_CHECKLIST.md` 
- **【阻断清单】不应被推送到线上仓库的文件**：
  - `dist/` (将由 Cloudflare CI 在线构建)
  - `node_modules/`
  - 所有带有 `.cjs`, `.js`, `.ts` 的一次性本地审计脚本 (如 `audit_ext_deep.cjs`, `fix_*.cjs` 等数十个辅助文件)
  - 所有带有 `.png` 的 Puppeteer 浏览器截屏快照 (已被 `.gitignore` 排除)
  - `.env` 或任何含本机绝对路径的临时报告

## 2. 线上 Git 与 Cloudflare 托管参数
部署方案已确认为 GitHub 保存源码，Cloudflare Pages 通过 Git 集成构建托管：
- **仓库地址**: `kelvinchong6880-gif/tuijianjichang.blog`
- **生产分支 (Production Branch)**: `main`
- **框架预设 (Framework preset)**: Astro
- **构建命令 (Build command)**: `npm run build`
- **输出目录 (Build output directory)**: `dist`
- **环境变量 (Environment Variables)**: `NODE_VERSION` = `22` (或者与本地开发匹配的高版本 Node.js)
- **正式域名**: `tuijianjichang.blog`

## 3. SOGO 等推广码追踪的遗留事项 (需要站长自行跟进)
在真实的终端跳转审计中，我们保留了原样的推广入口。但部分中转页面跳转完成后，参数会剥离，导致无法仅凭 URL 确认返佣归因（如 SOGO 云）。
请站长在业务侧向官方商务人员确认以下事宜（我们不在代码层面代替您发送请求）：
1. 当前的跳转入口能否成功给新注册的用户打上 `code` Cookie？跳转后参数丢失是否影响分成记录？
2. SOGO 官方是否存在无需经过防墙中转页、或是能直达面板并显式携带推广参数的备用分发链接？
3. (同理适用于其他中转后跳转、被标记为“返佣归因未确认”的合作商)。

## 4. 上线后验证 (Post-Launch Checks)
- 验证域名 `https://tuijianjichang.blog` 正常打开。
- 验证 `www` 前缀已 301 重定向至主域名。
- 在 Bing Webmaster Tools 添加 `https://tuijianjichang.blog/sitemap-index.xml`。
- 测试移动端排版无横向溢出。
