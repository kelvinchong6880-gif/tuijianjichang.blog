// 全站共用的站点信息。每次更新套餐数据后，修改 UPDATED 即可同步全站“最后更新”日期与结构化数据。
export const SITE_NAME = '机场推荐数据库';
export const SITE_URL = 'https://tuijianjichang.blog';
export const UPDATED = '2026-10-04';
export const UPDATED_ISO = `${UPDATED}T00:00:00+08:00`;
export const UPDATED_LABEL = (() => {
  const [y, m, d] = UPDATED.split('-').map(Number);
  return `${y}年${m}月${d}日`;
})();
export const UPDATED_MONTH = (() => {
  const [y, m] = UPDATED.split('-').map(Number);
  return `${y}年${m}月`;
})();
export const EDITOR = '机场推荐数据库编辑部';
export const UPDATED_MONTH_SHORT = `${Number(UPDATED.split('-')[1])}月`;
