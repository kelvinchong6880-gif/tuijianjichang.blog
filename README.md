# tuijianjichang.blog · 机场推荐数据库

Astro 静态站点，部署在 Cloudflare Pages（GitHub 仓库 `kelvinchong6880-gif/tuijianjichang.blog`，分支 `main`，构建命令 `npm run build`，输出目录 `dist`）。

## 目录说明

| 位置 | 作用 |
| --- | --- |
| `src/data/providers.ts` | 全部机场与套餐数据（价格、流量、计费周期、线路、优惠码、推广链接） |
| `src/data/site.ts` | 站点名、域名、**最后更新日期 `UPDATED`** |
| `src/data/analysis.ts` | 自动计算：最低价、每 GB 成本、优缺点、按用量推荐、FAQ |
| `src/data/customContent.ts` | 需要手写额外内容的品牌（目前只有 SOGO云） |
| `src/components/BrandReview.astro` | 每个机场评测页的正文模板（由数据自动生成） |
| `src/pages/index.astro` | 首页，主攻关键词“机场推荐” |
| `src/pages/recommend/` | Top 8 机场排行榜 |
| `src/pages/airport/[slug].astro` | 每家机场的评测页 |

## 每月更新流程

1. 在 `src/data/providers.ts` 里改价格、流量、优惠码；新增机场就照现有格式加一条。
2. 把 `src/data/site.ts` 的 `UPDATED` 和 `astro.config.mjs` 的 `LASTMOD` 改成当天日期。
3. `npm run build` 确认构建通过，推送到 GitHub，Cloudflare 会自动部署。
4. 部署完成后执行 `npm run indexnow`，把更新的网址推送给 Bing。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装依赖 |
| `npm run dev` | 本地预览 `localhost:4321` |
| `npm run build` | 构建到 `dist/` |
| `npm run indexnow` | 通过 IndexNow 向 Bing 提交 sitemap 中的全部网址（需先 build） |
