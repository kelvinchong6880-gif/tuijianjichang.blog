export interface SourceRecord {
  type: 'official' | 'user' | 'third_party';
  /** 网址，或资料名称（如“XX官网套餐页”） */
  urlOrFile: string;
  sourceDate: string | null;
  recordedDate: string | null;
  verifiedDate: string | null;
  supportedFacts: string[];
}

export type BillingType = 'Monthly' | 'Quarterly' | 'Yearly' | 'One-Time' | 'Other';

export interface Plan {
  name: string;
  price: number;
  /** 标价与官网正文不一致时标记，页面会显示“待核实”并排除出价格排序 */
  priceConflict?: boolean;
  /** 付款周期不明确时标记 */
  paymentCycleConflict?: boolean;
  currency: string;
  billingType: BillingType;
  /** Subscription = 周期订阅；Permanent = 不限时（流量永久有效） */
  validity: 'Subscription' | 'Permanent' | string;
  /** 每月流量（GB）；不限时套餐为总流量；未知为 null */
  traffic: number | null;
  trafficDisplay: string;
  deviceLimit?: string | null;
  /** 官方标称速率，如 “2.5Gbps (峰值)” */
  speedLimit?: string | null;
  nodes?: string | null;
  lineType: string | null;
  streaming: boolean | null;
  ai: boolean | null;
  features?: string[];
  sourceNotes?: string | null;
}

export interface Provider {
  id: string;
  name: string;
  aliases?: string[];
  slug: string;
  logo: string | null;
  promoCode?: string | null;
  /** 优惠码的折扣力度或使用限制，如 “新用户 8 折” */
  promoNote?: string | null;
  /** 编辑推荐排名（1–12：前 8 名进 Top 8，9 名以后为备选推荐），不在榜单为 null */
  editorialRank: number | null;
  editorialPick: boolean;

  /** 最低月付价格（不含定制套餐） */
  entryPrice: number;
  monthlyEntryPrice: number;
  currency: string;

  trafficMin: number;
  trafficMax: number;
  trafficDisplay: string;

  lineClaims: string[];

  hasNoExpiry: boolean;
  streamingClaim: boolean | null;
  aiClaim: boolean | null;
  nodeRegions?: string;

  affiliateUrl: string | null;
  lastVerified: string;
  sourceNotes?: string | null;

  plans: Plan[];
  sources?: SourceRecord[];
}
