const fs = require('fs'), path = require('path');
const base = path.resolve('dist'), origin = 'https://tuijianjichang.blog';
const walk = d => fs.readdirSync(d, {withFileTypes:true}).flatMap(e => e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const decode = s => s.replace(/&amp;/g,'&');
const attr = (s,n) => {const m=s.match(new RegExp('\\b'+n+'\\s*=\\s*["\x27]([^"\x27]*)["\x27]','i'));return m?decode(m[1]):null;};
const pages = walk(base).filter(f=>f.endsWith('.html')).map(file=>({file,url:'/'+path.relative(base,file).replace(/\\/g,'/').replace(/index\.html$/,''),html:fs.readFileSync(file,'utf8')}));
const byUrl = new Map(pages.map(p=>[p.url,p])), broken=[], resources=[], meta=[], external=new Set();
const graph=new Map(), contentGraph=new Map();
function target(url){let f=path.join(base,decodeURIComponent(url.pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');return f;}
for(const p of pages){
  graph.set(p.url,new Set());contentGraph.set(p.url,new Set());
  for(const m of p.html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)){
    const href=attr(m[0],'href');if(href===null)continue;
    if(!href||href==='#'){broken.push({from:p.url,href,reason:'empty'});continue;}
    let u;try{u=new URL(href,origin+p.url);}catch{broken.push({from:p.url,href,reason:'invalid URL'});continue;}
    if(!['https:','http:'].includes(u.protocol))continue;
    if(u.origin!==origin){external.add(u.href);continue;}
    const f=target(u);if(!fs.existsSync(f)){broken.push({from:p.url,href,reason:'missing local target'});continue;}
    if(u.hash&&f.endsWith('.html')){const h=fs.readFileSync(f,'utf8');const ids=[...h.matchAll(/<[^>]+>/g)].map(x=>attr(x[0],'id'));if(!ids.includes(decodeURIComponent(u.hash.slice(1))))broken.push({from:p.url,href,reason:'missing anchor'});}
    const dest=pages.find(x=>x.file===f);if(dest){graph.get(p.url).add(dest.url);const start=p.html.indexOf('<main'),end=p.html.indexOf('</main>');if(start>=0&&m.index>start&&m.index<end)contentGraph.get(p.url).add(dest.url);}
  }
  for(const m of p.html.matchAll(/<(?:img|script|link)\b[^>]*>/gi)){const raw=attr(m[0],'src')||attr(m[0],'href');if(!raw)continue;const u=new URL(raw,origin+p.url);if(u.origin===origin&&!fs.existsSync(target(u)))resources.push({from:p.url,resource:raw});}
  const title=p.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'';
  const tags=[...p.html.matchAll(/<meta\b[^>]*>/gi)].map(m=>m[0]);
  const description=attr(tags.find(t=>attr(t,'name')==='description')||'','content');
  const canonical=attr([...p.html.matchAll(/<link\b[^>]*>/gi)].map(m=>m[0]).find(t=>attr(t,'rel')==='canonical')||'','href');
  const h1=[...p.html.matchAll(/<h1\b/gi)].length;
  let jsonErrors=0;for(const m of p.html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){try{JSON.parse(m[1]);}catch{jsonErrors++;}}
  meta.push({url:p.url,title,description,h1,canonical,jsonErrors});
}
const indexable=pages.filter(p=>p.url!=='/404.html');
const distances=new Map([['/',0]]),queue=['/'];for(let i=0;i<queue.length;i++)for(const dest of graph.get(queue[i])||[]){if(!distances.has(dest)){distances.set(dest,distances.get(queue[i])+1);queue.push(dest);}}
const inbound=(g,u)=>[...g].filter(([from,to])=>from!==u&&to.has(u)).map(([from])=>from);
const duplicates=key=>[...new Set(meta.map(m=>m[key]))].filter(v=>v&&meta.filter(m=>m[key]===v).length>1).map(v=>({value:v,pages:meta.filter(m=>m[key]===v).map(m=>m.url)}));
const xmls=walk(base).filter(f=>f.endsWith('.xml'));const sitemapUrls=xmls.flatMap(f=>[...fs.readFileSync(f,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>decode(m[1]))).filter(u=>!u.endsWith('.xml'));
const result={htmlPages:pages.length,indexableCandidates:indexable.length,broken,resources,metadataIssues:meta.filter(m=>!m.title||!m.description||m.jsonErrors||(m.url!=='/404.html'&&(m.h1!==1||m.canonical!==origin+m.url))),duplicateTitles:duplicates('title'),duplicateDescriptions:duplicates('description'),sitemapUrls:sitemapUrls.length,sitemapMissing:indexable.filter(p=>!sitemapUrls.includes(origin+p.url)).map(p=>p.url),orphanPages:indexable.filter(p=>inbound(graph,p.url).length===0).map(p=>p.url),unreachable:indexable.filter(p=>!distances.has(p.url)).map(p=>p.url),contentOrphans:indexable.filter(p=>p.url!=='/'&&inbound(contentGraph,p.url).length===0).map(p=>p.url),keyPages:['/recommend/','/airport/sogo-yun/','/scenario/value/'].map(url=>({url,depth:distances.get(url),inbound:inbound(graph,url).length,contentInbound:inbound(contentGraph,url)})),externalUrls:[...external]};
fs.writeFileSync('docs/link-audit-2026-09-18.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({...result,externalUrls:result.externalUrls.length},null,2));
