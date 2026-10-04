import type { Provider, Plan } from './schema';
import { providers } from './providers';

/** 把 GB 数值格式化为 “150GB / 1TB / 1.5TB” */
export function fmtGB(g: number | null | undefined): string {
  if (g === null || g === undefined) return '未说明';
  if (g % 1024 === 0 && g >= 1024) return `${g / 1024}TB`;
  if (g >= 1000) return `${+(g / 1000).toFixed(2)}TB`;
  return `${+g.toFixed(1)}GB`;
}

export function fmtPrice(n: number): string {
  return `¥${+n.toFixed(2)}`;
}

/** 定制 / 独享类套餐不参与普通用户的价格分析 */
export function isCustomPlan(pl: Plan): boolean {
  return /定制|独享|私人/.test(pl.name) || (pl.billingType === 'Monthly' && pl.price >= 500);
}

export const consumerPlans = (p: Provider) => p.plans.filter((pl) => !isCustomPlan(pl));
export const monthlyPlans = (p: Provider) =>
  consumerPlans(p).filter((pl) => pl.billingType === 'Monthly').sort((a, b) => a.price - b.price);
export const yearlyPlans = (p: Provider) =>
  consumerPlans(p).filter((pl) => pl.billingType === 'Yearly').sort((a, b) => a.price - b.price);
export const quarterlyPlans = (p: Provider) =>
  consumerPlans(p).filter((pl) => pl.billingType === 'Quarterly').sort((a, b) => a.price - b.price);
export const oneTimePlans = (p: Provider) =>
  consumerPlans(p).filter((pl) => pl.billingType === 'One-Time').sort((a, b) => a.price - b.price);

/** 折合每月价格（一次性套餐返回 null） */
export function monthlyEquivalent(pl: Plan): number | null {
  if (pl.billingType === 'Monthly') return pl.price;
  if (pl.billingType === 'Quarterly') return pl.price / 3;
  if (pl.billingType === 'Yearly') return pl.price / 12;
  return null;
}

/** 每 GB 成本：周期套餐按“每月价格 ÷ 每月流量”，一次性套餐按“总价 ÷ 总流量” */
export function perGB(pl: Plan): number | null {
  if (typeof pl.traffic !== 'number' || pl.traffic <= 0) return null;
  const m = monthlyEquivalent(pl);
  return (m ?? pl.price) / pl.traffic;
}

/** 选出满足流量需求的最便宜周期套餐（月付优先） */
export function pickForNeed(p: Provider, needGB: number): Plan | null {
  const periodic = consumerPlans(p).filter(
    (pl) => pl.billingType !== 'One-Time' && typeof pl.traffic === 'number' && pl.traffic! >= needGB,
  );
  if (!periodic.length) return null;
  return periodic.sort((a, b) => (monthlyEquivalent(a) ?? 1e9) - (monthlyEquivalent(b) ?? 1e9))[0];
}

export function bestValuePlan(p: Provider): Plan | null {
  const list = consumerPlans(p).filter((pl) => pl.billingType !== 'One-Time' && perGB(pl) !== null);
  if (!list.length) return null;
  return list.sort((a, b) => perGB(a)! - perGB(b)!)[0];
}

/** 套餐流量范围，如 “60GB–1TB” */
export function trafficRange(p: Provider): string {
  const t = p.plans.map((x) => x.traffic).filter((x): x is number => typeof x === 'number');
  if (!t.length) return p.trafficDisplay || '未说明';
  const min = Math.min(...t);
  const max = Math.max(...t);
  return min === max ? fmtGB(min) : `${fmtGB(min)}–${fmtGB(max)}`;
}

export function validityLabel(v: string | null | undefined): string {
  if (v === 'Permanent') return '永久有效';
  if (v === 'Subscription') return '每 30 天重置';
  return v || '官网未说明';
}

export function lineLabel(p: Provider): string {
  return p.lineClaims.length ? p.lineClaims.join(' / ') : '官网未标注';
}

export function billingLabel(pl: Plan): string {
  return (
    { Monthly: '月付', Quarterly: '季付', Yearly: '年付', 'One-Time': '一次性（不限时）', Other: '其他' } as const
  )[pl.billingType];
}

export const avgEntryPrice =
  providers.reduce((a, p) => a + p.entryPrice, 0) / Math.max(providers.length, 1);

export function ranked(): Provider[] {
  return providers
    .filter((p) => p.editorialPick)
    .sort((a, b) => (a.editorialRank ?? 99) - (b.editorialRank ?? 99));
}

/** 起步价最接近的同类机场 */
export function competitors(p: Provider, n = 3): Provider[] {
  return providers
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => {
      const da = Math.abs(a.entryPrice - p.entryPrice) - (a.editorialPick ? 0.5 : 0);
      const db = Math.abs(b.entryPrice - p.entryPrice) - (b.editorialPick ? 0.5 : 0);
      return da - db;
    })
    .slice(0, n);
}

const hasPremiumLine = (p: Provider) => p.lineClaims.some((l) => l === 'IPLC' || l === 'IEPL');

export function prosCons(p: Provider): { pros: string[]; cons: string[] } {
  const pros: string[] = [];
  const cons: string[] = [];
  const mon = monthlyPlans(p);
  const yr = yearlyPlans(p);
  const ot = oneTimePlans(p);
  const best = bestValuePlan(p);

  if (hasPremiumLine(p)) pros.push(`官网标注 ${lineLabel(p)} 专线，晚高峰比普通直连线路更稳`);
  else cons.push(`线路为 ${lineLabel(p)}，不是 IPLC/IEPL 专线，对延迟敏感的用户需留意`);

  if (mon.length) {
    if (mon[0].price <= avgEntryPrice) pros.push(`月付 ${fmtPrice(mon[0].price)} 起，低于本站收录机场的平均起步价（约 ${fmtPrice(avgEntryPrice)}）`);
    else cons.push(`月付起步价 ${fmtPrice(mon[0].price)}，略高于收录机场平均水平（约 ${fmtPrice(avgEntryPrice)}）`);
  } else {
    cons.push('没有标准月付套餐，首次购买需要一次付季度或年度费用');
  }
  if (yr.length) {
    const y = yr[0];
    pros.push(`有 ${fmtPrice(y.price)}/年 的年付小包，折合每月约 ${fmtPrice(y.price / 12)}，适合轻度用户`);
  }
  if (ot.length) pros.push(`提供 ${ot.length} 款不限时流量包（${fmtPrice(ot[0].price)} 起），流量用完为止、不会过期`);
  else cons.push('没有不限时（一次性）流量包，不适合只想留作备用的用户');
  if (p.streamingClaim && p.aiClaim) pros.push('官网声明支持 Netflix 等流媒体与 ChatGPT 等 AI 工具');
  else if (p.streamingClaim === null || p.aiClaim === null) cons.push('官网没有写明流媒体或 AI 解锁情况，购买前可先问客服');
  if (p.trafficMax < 500) cons.push(`最高档只有 ${fmtGB(p.trafficMax)}/月，重度下载或多人共用可能不够`);
  if (best && perGB(best)! <= 0.12) pros.push(`${best.name} 每 GB 约 ${fmtPrice(perGB(best)!)}，单价在同类里偏低`);
  if (consumerPlans(p).some((pl) => /不限/.test(pl.deviceLimit ?? '') || /Unlimited/i.test(pl.deviceLimit ?? ''))) {
    pros.push('不限制同时在线设备数，手机、电脑、路由器可以一起用');
  }
  return { pros: pros.slice(0, 5), cons: cons.slice(0, 4) };
}

export const USAGE_TIERS = [
  { key: 'light', label: '轻度使用', need: 50, desc: '查资料、用 ChatGPT、刷社交软件，每月约 50GB 以内' },
  { key: 'daily', label: '日常使用', need: 150, desc: '每天看 1–2 小时 YouTube / 短视频，每月约 150GB' },
  { key: 'video', label: '追剧党', need: 300, desc: '经常看 1080P/4K 剧集、偶尔下载，每月约 300GB' },
  { key: 'heavy', label: '重度 / 多人共用', need: 600, desc: '全家多设备、大文件下载或 4K 重度观影，每月 600GB 以上' },
] as const;

export function faqFor(p: Provider): { q: string; a: string }[] {
  const mon = monthlyPlans(p);
  const yr = yearlyPlans(p);
  const ot = oneTimePlans(p);
  const out: { q: string; a: string }[] = [];
  const name = p.name;
  if (mon.length) {
    out.push({
      q: `${name}最便宜的月付套餐多少钱？`,
      a: `${name}最便宜的月付套餐是「${mon[0].name}」，${fmtPrice(mon[0].price)}/月，每月 ${fmtGB(mon[0].traffic)} 流量。${
        yr.length ? `如果用量很小，也可以选 ${fmtPrice(yr[0].price)}/年 的「${yr[0].name}」，折合每月约 ${fmtPrice(yr[0].price / 12)}。` : ''
      }`,
    });
  } else if (consumerPlans(p).length) {
    const c = [...consumerPlans(p)].sort((a, b) => a.price - b.price)[0];
    out.push({ q: `${name}最便宜的套餐多少钱？`, a: `${name}目前最低价的套餐是「${c.name}」，${fmtPrice(c.price)}（${billingLabel(c)}），流量 ${fmtGB(c.traffic)}。` });
  }
  out.push({
    q: `${name}是什么线路？稳定吗？`,
    a: hasPremiumLine(p)
      ? `${name}官网标注为 ${lineLabel(p)} 专线。专线不经过公网拥堵的国际出口，晚高峰通常比普通中转更稳定，但实际体验仍受你本地运营商影响，建议先买月付试用。`
      : `${name}官网标注为 ${lineLabel(p)} 线路。BGP 线路价格更友好，日常使用足够；如果你对晚高峰延迟要求很高，可以对比本站的 IPLC/IEPL 专线机场。`,
  });
  out.push({
    q: `${name}能看 Netflix、用 ChatGPT 吗？`,
    a:
      p.streamingClaim && p.aiClaim
        ? `可以。${name}官网声明支持 Netflix、Disney+ 等流媒体，以及 ChatGPT 等 AI 工具。个别节点解锁情况会变化，遇到问题可以换节点或联系客服。`
        : p.streamingClaim
          ? `${name}官网声明支持主流流媒体；AI 工具（如 ChatGPT）官网没有单独写明，购买前建议先问客服。`
          : `${name}官网没有写明流媒体与 AI 解锁情况，如果这是你的主要需求，建议优先看本站的「AI / ChatGPT 机场」与「流媒体机场」两个榜单。`,
  });
  out.push({
    q: `${name}有不限时套餐吗？`,
    a: ot.length
      ? `有。${name}共有 ${ot.length} 款不限时流量包：${ot.map((x) => `${fmtGB(x.traffic)} ${fmtPrice(x.price)}`).join('、')}。一次购买、流量不过期，用完为止，适合当备用机场。`
      : `没有。${name}目前只提供周期订阅套餐，流量每 30 天重置一次，不用完会清零。`,
  });
  if (p.promoCode) {
    out.push({
      q: `${name}优惠码是什么？`,
      a: `${name}优惠码是「${p.promoCode}」。在官网下单结算页填入即可，具体折扣以结算页显示为准。`,
    });
  }
  return out;
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
