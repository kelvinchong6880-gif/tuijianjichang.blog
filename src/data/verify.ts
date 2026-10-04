import type { Provider } from './schema';

/**
 * 构建时的数据检查（由首页在构建时调用）。
 * 任何一条不通过，`npm run build` 都会直接失败并指出是哪家机场、哪个套餐出了问题，
 * 避免把错误价格、重复排名或坏链接发布上线。
 */
export function verifyProviders(list: Provider[]): void {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const ranks = new Map<number, string>();
  const billing = new Set(['Monthly', 'Quarterly', 'Yearly', 'One-Time', 'Other']);

  for (const p of list) {
    const where = `${p.name}（${p.slug}）`;
    if (!/^[a-z0-9-]+$/.test(p.slug)) errors.push(`${where}: slug 只能包含小写字母、数字和横线`);
    if (slugs.has(p.slug)) errors.push(`${where}: slug 重复`);
    slugs.add(p.slug);

    if (p.editorialPick) {
      if (!p.editorialRank) errors.push(`${where}: 编辑推荐必须有 editorialRank`);
      else if (ranks.has(p.editorialRank)) errors.push(`${where}: 排名 #${p.editorialRank} 与 ${ranks.get(p.editorialRank)} 重复`);
      else ranks.set(p.editorialRank, p.name);
    }
    if (p.affiliateUrl && !/^https:\/\//.test(p.affiliateUrl)) errors.push(`${where}: 推广链接必须以 https:// 开头`);
    if (!p.plans.length) errors.push(`${where}: 没有任何套餐`);

    for (const pl of p.plans) {
      const at = `${where} / ${pl.name}`;
      if (!(pl.price > 0)) errors.push(`${at}: 价格必须大于 0`);
      if (!billing.has(pl.billingType)) errors.push(`${at}: 计费周期 ${pl.billingType} 无效`);
      if (pl.traffic !== null && !(pl.traffic > 0)) errors.push(`${at}: 流量必须大于 0 或为 null`);
      if (pl.billingType === 'One-Time' && pl.validity !== 'Permanent') errors.push(`${at}: 一次性套餐的 validity 应为 Permanent`);
    }
  }

  const picks = [...ranks.keys()].sort((a, b) => a - b);
  if (picks.some((r, i) => r !== i + 1)) errors.push(`编辑推荐排名必须从 1 开始连续：当前为 ${picks.join(', ')}`);

  if (errors.length) {
    throw new Error(`providers.ts 数据检查未通过：\n- ${errors.join('\n- ')}`);
  }
}
