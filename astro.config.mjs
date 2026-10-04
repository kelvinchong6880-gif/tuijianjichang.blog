// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 与 src/data/site.ts 中的 UPDATED 保持一致：更新数据后两处一起改
const LASTMOD = new Date('2026-10-04T00:00:00+08:00');

// https://astro.build/config
export default defineConfig({
  site: 'https://tuijianjichang.blog',
  // 把 CSS 直接内联进每个页面：首屏不再等待额外的样式文件请求
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
    serialize(item) {
      const path = new URL(item.url).pathname;
      item.lastmod = LASTMOD.toISOString();
      if (path === '/') {
        item.priority = 1.0;
        item.changefreq = 'daily';
      } else if (path === '/recommend/') {
        item.priority = 0.9;
        item.changefreq = 'weekly';
      } else if (path.startsWith('/airport/')) {
        item.priority = 0.8;
        item.changefreq = 'weekly';
      } else {
        item.priority = 0.7;
        item.changefreq = 'weekly';
      }
      return item;
    },
  })]
});
