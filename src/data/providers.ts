import type { Provider } from './schema';

// 全部机场与套餐数据。改价格/流量/优惠码只需要改这里，首页、排行榜、评测页会自动同步。
// 改完后运行 npm run build：src/data/verify.ts 会在构建时检查数据，发现问题会直接报错。
export const providers: Provider[] = [
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "aliases": [
      "edgenova"
    ],
    "slug": "edgenova",
    "logo": "/images/providers/edgenova-logo.webp",
    "promoCode": "xk808",
    "promoNote": "新客首次 8 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 15,
    "monthlyEntryPrice": 15,
    "currency": "CNY",
    "trafficMin": 45,
    "trafficMax": 1024,
    "trafficDisplay": "45GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "affiliateUrl": "https://work.edgenovaaff.cc/#/?code=k7VCKPvN",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "EdgeNova 入门月付",
        "price": 15,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 50,
        "trafficDisplay": "50GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "EdgeNova 45GB 年付",
        "price": 108,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 45,
        "trafficDisplay": "45GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "EdgeNova 120GB 月付",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 120,
        "trafficDisplay": "120GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "EdgeNova 250GB 月付",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 250,
        "trafficDisplay": "250GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "EdgeNova 499GB 月付",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 499,
        "trafficDisplay": "499GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "EdgeNova 1TB 月付",
        "price": 200,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1024,
        "trafficDisplay": "1TB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "EdgeNova官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-09-15",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "aliases": [
      "firefly"
    ],
    "slug": "firefly",
    "logo": "/images/providers/firefly-logo.webp",
    "promoCode": "firefly",
    "promoNote": "新用户 8 折",
    "editorialRank": 7,
    "editorialPick": true,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1000,
    "trafficDisplay": "60GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 49 个节点（核对时 47 个在线）",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=8nDg6OEY",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "Firefly年付版",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "Firefly Lite",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "Firefly Plus",
        "price": 45,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "Firefly Blaze",
        "price": 85,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 600,
        "trafficDisplay": "600GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "Firefly Nova",
        "price": 150,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "Firefly不限时",
        "price": 100,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区",
          "流媒体与 AI 解锁"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "萤火虫套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "sogo-yun",
    "name": "SOGO云",
    "aliases": [
      "sogo 云"
    ],
    "slug": "sogo-yun",
    "logo": "/images/providers/sogo-yun-logo.webp",
    "promoCode": "sogo10000",
    "promoNote": "新用户 9 折",
    "editorialRank": 1,
    "editorialPick": true,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1100,
    "trafficDisplay": "60GB–1.1TB",
    "lineClaims": [
      "IEPL",
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×10、日本×10、新加坡×10、美国×10，另有马来西亚、英国、法国、德国、土耳其、泰国、巴西等地区",
    "affiliateUrl": "https://wzjc.sogoyunaff.cc/#/?code=BC2BL855",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "小包-年付版",
        "price": 98,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "需一次性支付¥98年费",
          "折合月价约¥8.17，每30天刷新"
        ]
      },
      {
        "name": "基础版",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "VLESS 协议"
        ]
      },
      {
        "name": "优选版",
        "price": 45,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 350,
        "trafficDisplay": "350GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "VLESS 协议"
        ]
      },
      {
        "name": "强化版",
        "price": 80,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 550,
        "trafficDisplay": "550GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "VLESS 协议"
        ]
      },
      {
        "name": "顶配版",
        "price": 150,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1100,
        "trafficDisplay": "1.1TB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP"
        ]
      },
      {
        "name": "SOGO基础餐不限时版",
        "price": 120,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 120,
        "trafficDisplay": "120GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "不自动重置"
        ]
      },
      {
        "name": "SOGO优选餐不限时版",
        "price": 220,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 250,
        "trafficDisplay": "250GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "不自动重置"
        ]
      },
      {
        "name": "SOGO强化餐不限时版",
        "price": 450,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 500,
        "trafficDisplay": "500GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "不自动重置"
        ]
      },
      {
        "name": "SOGO至尊餐不限时版",
        "price": 850,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 1000,
        "trafficDisplay": "1TB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "2.5Gbps (峰值)",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "features": [
          "原生IP",
          "不自动重置"
        ]
      }
    ],
    "sources": [
      {
        "type": "official",
        "urlOrFile": "https://sogocloud.world/",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "IEPL/IPLC 专线与 VLESS 协议",
          "套餐价格与流量",
          "不限速、不限设备",
          "优惠码 sogo10000 新用户 9 折",
          "付款方式：USDT(TRC20)、微信支付、支付宝",
          "无免费试用"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "FFQ.LA 公开测速截图（辽宁移动 1Gbps、8 线程，60 个节点）",
        "sourceDate": "2026-04-13",
        "recordedDate": "2026-10-30",
        "verifiedDate": null,
        "supportedFacts": [
          "60 个节点平均下载速度",
          "Netflix、YouTube、ChatGPT 解锁检测"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "SOGO云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-10-04",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "不限时套餐",
          "节点分布"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "https://www.haiwailab.com/reviews/sogoyun/",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": [
          "63 节点快照",
          "该历史测试中的香港节点下载速度"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "https://rocketnode.org/reviews/sogoyun/",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": [
          "63 节点快照的另一页面披露的高度重合数据"
        ]
      }
    ]
  },
  {
    "id": "u1s1",
    "name": "u1s1",
    "slug": "u1s1",
    "logo": null,
    "promoCode": "U1S1",
    "promoNote": "新人 85 折，¥96 年包不适用",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1500,
    "trafficDisplay": "60GB–1.5TB",
    "lineClaims": [
      "IEPL"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、日本、新加坡、美国等，共 67 个节点（核对时 63 个在线）",
    "affiliateUrl": "https://pkdj7.vipaff.cc/#/?code=YUCKdFlR",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "u1s1 · 就是好用包",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "u1s1 · 普通人真够了包",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 120,
        "trafficDisplay": "120GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "u1s1 · 你以为用不到包",
        "price": 40,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "u1s1 · 瘾大就拉满包",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 700,
        "trafficDisplay": "700GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "u1s1 · 我全都要包",
        "price": 180,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1500,
        "trafficDisplay": "1.5TB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "u1s1 · 定制包",
        "price": 600,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": null,
        "trafficDisplay": "未说明 / 30天",
        "lineType": null,
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "u1s1官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "yifanyun",
    "name": "一翻云",
    "slug": "yifanyun",
    "logo": "/images/providers/yifanyun-logo.webp",
    "promoCode": "1FLYYUN",
    "editorialRank": 10,
    "editorialPick": true,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1200,
    "trafficDisplay": "60GB–1.2TB",
    "lineClaims": [
      "IEPL"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、新加坡、日本、美国等，共 72 个 IEPL 专线节点（核对时全部在线）",
    "affiliateUrl": "https://wzjc.1flyunaff.cc/#/?code=0tH3Mmch",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "轻享版",
        "sourceNotes": "长期付费价：季付 ¥55、半年付 ¥98、年付 ¥168",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "舒享版",
        "price": 35,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 350,
        "trafficDisplay": "350GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "尊享版",
        "price": 55,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 600,
        "trafficDisplay": "600GB / 30天",
        "deviceLimit": "不限",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "极致版",
        "price": 95,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1200,
        "trafficDisplay": "1.2TB / 30天",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "98¥ · 年付小包",
        "price": 98,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "轻享版 · 不限时包",
        "price": 100,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "舒享版 · 不限时包",
        "price": 200,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 250,
        "trafficDisplay": "250GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "尊享版 · 不限时包",
        "price": 400,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 500,
        "trafficDisplay": "500GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区",
          "长期付费价格"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "一翻云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "ermaoyun",
    "name": "二猫云",
    "slug": "ermaoyun",
    "logo": "/images/providers/ermaoyun-logo.webp",
    "promoCode": "ermao888",
    "editorialRank": 5,
    "editorialPick": true,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 850,
    "trafficDisplay": "60GB–850GB",
    "lineClaims": [
      "IEPL"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×5、日本×10、新加坡×10，另有美国、德国等地区，共 60 个节点（核对时全部在线）",
    "affiliateUrl": "https://wzjc.2maoyunaff.cc/#/?code=bvsFDmSt",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "二猫云 · 100G不限时",
        "price": 99,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "二猫年付小包",
        "price": 89,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "二猫云 · 白猫套餐",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 130,
        "trafficDisplay": "130GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "二猫云 · 黑猫重度用户版",
        "price": 160,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 850,
        "trafficDisplay": "850GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "二猫云 · 橘猫畅玩版",
        "price": 40,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 230,
        "trafficDisplay": "230GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "二猫云 · 牛奶猫尊享版",
        "price": 80,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 430,
        "trafficDisplay": "430GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "二猫云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "slug": "guangnianti",
    "logo": null,
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 18,
    "monthlyEntryPrice": 18,
    "currency": "CNY",
    "trafficMin": 50,
    "trafficMax": 900,
    "trafficDisplay": "50GB–900GB",
    "lineClaims": [
      "IPLC",
      "IEPL"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "affiliateUrl": "https://ggmq.gntaff.com/#/?code=EVc1gLc9",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "年付限时套餐",
        "price": 89,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 50,
        "trafficDisplay": "50GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "光年梯 入门版",
        "price": 18,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 110,
        "trafficDisplay": "110GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "光年梯 晋级版",
        "price": 34,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 220,
        "trafficDisplay": "220GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "光年梯 专业版",
        "price": 68,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 450,
        "trafficDisplay": "450GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "光年梯 至尊版",
        "price": 130,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 900,
        "trafficDisplay": "900GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "独享私人专线节点",
        "price": 680,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "官网推广链接"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "光年梯官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-09-15",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "guangsuyun",
    "name": "光速云",
    "slug": "guangsuyun",
    "logo": "/images/providers/guangsuyun-logo.webp",
    "promoCode": "AMM",
    "promoNote": "8 折",
    "editorialRank": 8,
    "editorialPick": true,
    "entryPrice": 23,
    "monthlyEntryPrice": 23,
    "currency": "CNY",
    "trafficMin": 59,
    "trafficMax": 1000,
    "trafficDisplay": "59GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等，共 69 个节点（核对时 67 个在线）",
    "affiliateUrl": "https://mdlky.gsyaff.com/#/?code=5PLKd4WN",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "光速云 · 轻量版",
        "price": 99,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 59,
        "trafficDisplay": "59GB / 30天",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "光速云 · 极速版",
        "price": 23,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 138,
        "trafficDisplay": "138GB / 30天",
        "lineType": "IPLC",
        "features": [
          "半年付 9 折、年付 8 折、两年付 75 折"
        ],
        "streaming": true,
        "ai": true
      },
      {
        "name": "光速云 · 流光版",
        "price": 34,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 238,
        "trafficDisplay": "238GB / 30天",
        "lineType": "IPLC",
        "features": [
          "半年付 9 折、年付 8 折、两年付 75 折"
        ],
        "streaming": true,
        "ai": true
      },
      {
        "name": "光速云 · 量子版",
        "price": 68,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 450,
        "trafficDisplay": "450GB / 30天",
        "lineType": "IPLC",
        "features": [
          "半年付 9 折、年付 8 折、两年付 75 折"
        ],
        "streaming": true,
        "ai": true
      },
      {
        "name": "光速云 · 无界版",
        "price": 130,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 900,
        "trafficDisplay": "900GB / 30天",
        "lineType": "IPLC",
        "features": [
          "半年付 9 折、年付 8 折、两年付 75 折"
        ],
        "streaming": true,
        "ai": true
      },
      {
        "name": "光速云 · 不限时套餐",
        "price": 680,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 1000,
        "trafficDisplay": "1TB（永久有效）",
        "lineType": null,
        "streaming": null,
        "ai": null
      },
      {
        "name": "光速云 · 定制套餐",
        "price": 680,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IPLC",
        "features": [
          "半年付 9 折、年付 8 折、两年付 75 折"
        ],
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区",
          "长期付费折扣"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "光速云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "kexinyun",
    "name": "可信云",
    "slug": "kexinyun",
    "logo": "/images/providers/kexinyun-logo.webp",
    "promoCode": "kxy80",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 15,
    "monthlyEntryPrice": 15,
    "currency": "CNY",
    "trafficMin": 50,
    "trafficMax": 1200,
    "trafficDisplay": "50GB–1.2TB",
    "lineClaims": [
      "IEPL"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "港/台/新/日/美等（60+ 专线节点）",
    "affiliateUrl": "https://work.kosingaff.com/#/?code=k7T1sOyG",
    "lastVerified": "2026-10-04",
    "plans": [
      {
        "name": "可信云年付小包",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "可信云月付小包",
        "price": 15,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": null
      },
      {
        "name": "基础版（Basic）",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "标准版（Standard）",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "专业版（Pro）",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 600,
        "trafficDisplay": "600GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "旗舰版（Ultimate）",
        "price": 200,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1200,
        "trafficDisplay": "1.2TB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "可信云轻量不限时",
        "price": 50,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 50,
        "trafficDisplay": "50GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "official",
        "urlOrFile": "可信云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "weituyun",
    "name": "唯兔云",
    "slug": "weituyun",
    "logo": "/images/providers/weituyun-logo.webp",
    "promoCode": "rabbit",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 19.9,
    "monthlyEntryPrice": 19.9,
    "currency": "CNY",
    "trafficMin": 45,
    "trafficMax": 1000,
    "trafficDisplay": "45GB–1TB",
    "lineClaims": [
      "IEPL",
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、日本、新加坡、美国等，共 71 个节点（核对时 67 个在线）",
    "affiliateUrl": "https://fast.v2yunvipaff.com/#/?code=nbBJVFQP",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "唯兔云 · 年付加强专线",
        "price": 120,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 75,
        "trafficDisplay": "75GB / 30天",
        "speedLimit": "None",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "唯兔云 · 年付版限量款",
        "price": 79.9,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 45,
        "trafficDisplay": "45GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 普通版",
        "price": 19.9,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 进阶版",
        "price": 29.9,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 200,
        "trafficDisplay": "200GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 专业版",
        "price": 59.9,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 至尊版",
        "price": 119.9,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 永久不限时 100GB",
        "price": 100,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 永久不限时 200GB",
        "price": 160,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 200,
        "trafficDisplay": "200GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "唯兔云 · 永久不限时 500GB",
        "price": 340,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 500,
        "trafficDisplay": "500GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "唯兔云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "weifeng",
    "name": "微风",
    "slug": "weifeng",
    "logo": "/images/providers/weifeng-logo.webp",
    "promoCode": "weifeng90",
    "promoNote": "全场 7 折",
    "editorialRank": 4,
    "editorialPick": true,
    "entryPrice": 27,
    "monthlyEntryPrice": 27,
    "currency": "CNY",
    "trafficMin": 100,
    "trafficMax": 1200,
    "trafficDisplay": "100GB–1.2TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": null,
    "aiClaim": null,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 60+ 个节点",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=hM8APccJ",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "清风",
        "price": 137,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 100,
        "trafficDisplay": "100GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "乘风",
        "price": 27,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 200,
        "trafficDisplay": "200GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "破风",
        "price": 57,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "御风",
        "price": 127,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1200,
        "trafficDisplay": "1.2TB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "信风 ·不限时",
        "price": 200,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 270,
        "trafficDisplay": "270GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "长风·不限时",
        "price": 370,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 570,
        "trafficDisplay": "570GB（永久有效）",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "微风套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "kuaili",
    "name": "快狸",
    "slug": "kuaili",
    "logo": "/images/providers/kuaili-logo.webp",
    "promoCode": "kuaili996",
    "promoNote": "9 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 15,
    "monthlyEntryPrice": 15,
    "currency": "CNY",
    "trafficMin": 30,
    "trafficMax": 1000,
    "trafficDisplay": "30GB–1TB",
    "lineClaims": [
      "IEPL"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "affiliateUrl": "https://work.kuailicloud.cc/#/?code=azB6yNBW",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "主推套餐",
        "price": 120,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 30,
        "trafficDisplay": "30GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "月狸月付小套餐",
        "price": 15,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 50,
        "trafficDisplay": "50GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "小狸基础版",
        "price": 22,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 100,
        "trafficDisplay": "100GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "灵狸标准版",
        "price": 35,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 250,
        "trafficDisplay": "250GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "夜狸强化版",
        "price": 95,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "天狸顶配版",
        "price": 180,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1000GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "套餐流量"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "快狸官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-09-15",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "wuyou",
    "name": "无忧",
    "slug": "wuyou",
    "logo": "/images/providers/wuyou-logo.webp",
    "promoCode": "wuyou",
    "editorialRank": 11,
    "editorialPick": true,
    "entryPrice": 19,
    "monthlyEntryPrice": 19,
    "currency": "CNY",
    "trafficMin": 40,
    "trafficMax": 1000,
    "trafficDisplay": "40GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 49 个节点（核对时 36 个在线、13 个离线）",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=s1kH64A8",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "MINI链接",
        "price": 79,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 40,
        "trafficDisplay": "40GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "舒心链接",
        "price": 19,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 100,
        "trafficDisplay": "100GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "省心链接",
        "price": 33,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 200,
        "trafficDisplay": "200GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "随心链接",
        "price": 77,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "忘忧链接",
        "price": 117,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "100G永久不限时 无忧链接",
        "price": 108,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      },
      {
        "name": "300G永久不限时 无忧链接",
        "price": 298,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 300,
        "trafficDisplay": "300GB（永久有效）",
        "lineType": "IPLC",
        "streaming": null,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "无忧套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "logo": "/images/providers/xingdaomeng-logo.webp",
    "promoCode": "nmw888",
    "editorialRank": 9,
    "editorialPick": true,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1000,
    "trafficDisplay": "60GB–1TB",
    "lineClaims": [
      "IPLC",
      "IEPL"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×10、日本×10、新加坡×10、美国×10、韩国×2、阿根廷×2、马来西亚、越南、菲律宾、泰国、印度、德国、法国、英国等，共 69 个节点（核对时 63 个在线）",
    "affiliateUrl": "https://kfccbb.xingdaomeng.com/#/?code=0YcwWgSw",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "星岛梦 · 贴心小包",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 超量150G",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 进阶300G",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 闪光500G",
        "price": 70,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 旗舰1T版",
        "price": 130,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 永久不限时100",
        "price": 100,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 永久不限时300",
        "price": 300,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 300,
        "trafficDisplay": "300GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 永久不限时1TB",
        "price": 600,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 1000,
        "trafficDisplay": "1TB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星岛梦 · 定制套餐",
        "price": 680,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "星岛梦官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "muguang",
    "name": "暮光",
    "slug": "muguang",
    "logo": "/images/providers/muguang-logo.webp",
    "promoCode": "mm88",
    "editorialRank": 3,
    "editorialPick": true,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 70,
    "trafficMax": 1500,
    "trafficDisplay": "70GB–1.5TB",
    "lineClaims": [
      "BGP"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、日本、新加坡、美国等主流地区，共 60+ 个节点",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=2ILQOoYB",
    "lastVerified": "2026-10-30",
    "sourceNotes": "Protocol was not present in source; HTTPS availability verified during data normalization.",
    "plans": [
      {
        "name": "暮光 · 基础版",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 120,
        "trafficDisplay": "120GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "暮光 · 标准版",
        "price": 40,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 240,
        "trafficDisplay": "240GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "暮光 · 旗舰版",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 700,
        "trafficDisplay": "700GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "暮光 · 至尊版",
        "price": 180,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1500,
        "trafficDisplay": "1.5TB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "暮光 · 年付轻量版",
        "price": 109,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 70,
        "trafficDisplay": "70GB / 30天",
        "lineType": null,
        "streaming": null,
        "ai": null
      },
      {
        "name": "暮光 · 不限时轻量包",
        "price": 219,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 150,
        "trafficDisplay": "150GB（永久有效）",
        "lineType": null,
        "streaming": null,
        "ai": true
      },
      {
        "name": "暮光 · 不限时标准包",
        "price": 529,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 400,
        "trafficDisplay": "400GB（永久有效）",
        "lineType": null,
        "streaming": null,
        "ai": true
      },
      {
        "name": "暮光 · 不限时大容量包",
        "price": 959,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 800,
        "trafficDisplay": "800GB（永久有效）",
        "lineType": null,
        "streaming": null,
        "ai": true
      },
      {
        "name": "独享私人定制节点",
        "price": 600,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": null,
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "暮光官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "slug": "jilianyun",
    "logo": "/images/providers/jilianyun-logo.webp",
    "promoCode": "JLY888",
    "promoNote": "全场 8 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 18,
    "monthlyEntryPrice": 18,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1000,
    "trafficDisplay": "60GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×10、日本×10、新加坡×10、美国×10、马来西亚、泰国、德国、法国、英国、土耳其、韩国等，共 66 个节点（核对时 60 个在线）",
    "affiliateUrl": "https://kdjhao.jlyvipaff.com/#/?code=N0n7rZyp",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "限时年付套餐体验",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "极连云 · 基础套餐",
        "price": 18,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 100,
        "trafficDisplay": "100GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "极连云 · 进阶套餐",
        "price": 32,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 200,
        "trafficDisplay": "200GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "极连云 · 旗舰套餐",
        "price": 61,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "极连云 · 尊享套餐",
        "price": 122,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "极连云 · 不限时套餐",
        "price": 399,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 600,
        "trafficDisplay": "600GB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "官网推广链接",
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "极连云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "lingdong",
    "name": "灵动",
    "slug": "lingdong",
    "logo": "/images/providers/lingdong-logo.webp",
    "promoCode": "zq88",
    "promoNote": "年付及以上周期 8 折；年付以下周期请用 zq85，享 85 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 79,
    "trafficMax": 1500,
    "trafficDisplay": "79GB–1.5TB",
    "lineClaims": [
      "BGP"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、日本、新加坡、美国等，共 60 个节点（核对时全部在线）",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=HDiWuF7L",
    "lastVerified": "2026-10-30",
    "sourceNotes": "Protocol was not present in source; HTTPS availability verified during data normalization.",
    "plans": [
      {
        "name": "灵动 · 拂风",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 100,
        "trafficDisplay": "100GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动 · 驭浪",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动 · 破晓",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 700,
        "trafficDisplay": "700GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动 · 凌霄",
        "price": 180,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1500,
        "trafficDisplay": "1.5TB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动 · 穿云",
        "price": 99,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 79,
        "trafficDisplay": "79GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": null,
        "ai": null
      },
      {
        "name": "灵动 · 闲云（小流量包）",
        "price": 199,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 150,
        "trafficDisplay": "150GB（永久有效）",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动 · 惊云（标准流量包）",
        "price": 499,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 400,
        "trafficDisplay": "400GB（永久有效）",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵动 · 飞云（精英流量包）",
        "price": 899,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 800,
        "trafficDisplay": "800GB（永久有效）",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true
      },
      {
        "name": "灵动云 · 至尊私人定制",
        "price": 620,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "灵动官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "lingmao",
    "name": "灵猫",
    "slug": "lingmao",
    "logo": "/images/providers/lingmao-logo.webp",
    "promoCode": "LM80",
    "promoNote": "8 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 45,
    "trafficMax": 300,
    "trafficDisplay": "45GB–300GB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 50 个节点（核对时 49 个在线）",
    "affiliateUrl": "https://edp01.civetaff.com/#/?code=CYg7QSJo",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "灵猫·年付小包",
        "price": 85,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 45,
        "trafficDisplay": "45GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵猫·年付Small",
        "price": 195,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵猫·年付Big",
        "price": 295,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵猫·季付Big",
        "price": 125,
        "currency": "CNY",
        "billingType": "Quarterly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵猫·月付Small",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "灵猫·月付Big",
        "price": 45,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "灵猫套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "kuajieyun",
    "name": "跨界",
    "slug": "kuajieyun",
    "logo": "/images/providers/kuajieyun-logo.webp",
    "promoCode": "kuajie",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1800,
    "trafficDisplay": "60GB–1.8TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 49 个节点（核对时 43 个在线）",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=hh3QezsW",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "跨界年付版",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "轻云 Lite",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 120,
        "trafficDisplay": "120GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "跃云 Leap",
        "price": 40,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 330,
        "trafficDisplay": "330GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "凌云 Soar",
        "price": 90,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 830,
        "trafficDisplay": "830GB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "无界 Infinity",
        "price": 130,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1800,
        "trafficDisplay": "1.8TB / 30天",
        "deviceLimit": "不限",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "跨界套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "slug": "shanyue",
    "logo": "/images/providers/shanyue-logo.webp",
    "promoCode": "shanyue",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 24,
    "monthlyEntryPrice": 24,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1000,
    "trafficDisplay": "60GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": false,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、美国、新加坡、马来西亚、日本等，共 48 个节点（核对时 46 个在线）",
    "affiliateUrl": "https://wep01.flashleapaff.com/#/?code=cs0ekCMG",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "闪跃年付版",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      },
      {
        "name": "闪动 (Flicker)",
        "price": 24,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "飞跃 (Leap)",
        "price": 44,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "瞬移 (Teleport)",
        "price": 84,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 600,
        "trafficDisplay": "600GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      },
      {
        "name": "跃迁 (Warp)",
        "price": 134,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "闪跃套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "flyv",
    "name": "飞V",
    "slug": "flyv",
    "logo": "/images/providers/flyv-logo.webp",
    "promoCode": "fly20",
    "promoNote": "新手 8 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 65,
    "trafficMax": 1800,
    "trafficDisplay": "65GB–1.8TB",
    "lineClaims": [
      "IPLC",
      "BGP"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=XsiIuDgj",
    "lastVerified": "2026-10-30",
    "sourceNotes": "Protocol was not present in source; HTTPS availability verified during data normalization.",
    "plans": [
      {
        "name": "FlyV 年付标准轻量版",
        "price": 99,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 65,
        "trafficDisplay": "65GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": null,
        "ai": null,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 入门方案",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 进阶方案",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 380,
        "trafficDisplay": "380GB / 30天",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 高端方案",
        "price": 110,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 800,
        "trafficDisplay": "800GB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 商业方案",
        "price": 190,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1800,
        "trafficDisplay": "1.8TB / 30天",
        "speedLimit": "None",
        "lineType": "BGP",
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 单次轻量版 · 小流量包",
        "price": 189,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 130,
        "trafficDisplay": "130GB（永久有效）",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 单次轻量版 · 标准流量包",
        "price": 479,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 380,
        "trafficDisplay": "380GB（永久有效）",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 单次轻量版 · 精英流量包",
        "price": 799,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 600,
        "trafficDisplay": "600GB（永久有效）",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed"
      },
      {
        "name": "FlyV 原生IP·独享黄金专线",
        "price": 600,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "speedLimit": "None",
        "lineType": null,
        "streaming": true,
        "ai": true,
        "sourceNotes": "Parsed manually from source during reconciliation"
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "套餐流量"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "飞V官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-09-15",
        "verifiedDate": "2026-09-15",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期",
          "线路类型"
        ]
      }
    ]
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "slug": "feimaoyun",
    "logo": "/images/providers/feimaoyun-logo.webp",
    "promoCode": "flycat888",
    "editorialRank": 2,
    "editorialPick": true,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 50,
    "trafficMax": 1000,
    "trafficDisplay": "50GB–1TB",
    "lineClaims": [
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×10、日本×10、新加坡×10、美国×10、韩国×3、马来西亚、越南、菲律宾、泰国、印度、英国、法国、德国、阿根廷等，共 63 个节点（核对时 60 个在线）",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=w5lO9fqB",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "飞猫 · 学生版",
        "price": 84,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 50,
        "trafficDisplay": "50GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 星耀版",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 150,
        "trafficDisplay": "150GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 星环版",
        "price": 45,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 银河版",
        "price": 85,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 600,
        "trafficDisplay": "600GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 宇宙版",
        "price": 150,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1000,
        "trafficDisplay": "1TB / 30天",
        "deviceLimit": "不限",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 不限时套餐",
        "price": 680,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 1000,
        "trafficDisplay": "1TB（永久有效）",
        "speedLimit": "None",
        "lineType": "IPLC",
        "streaming": true,
        "ai": true
      },
      {
        "name": "飞猫 · 定制套餐",
        "price": 550,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "lineType": "IPLC",
        "streaming": null,
        "ai": null
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "飞猫云套餐价格.txt",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量",
          "线路宣称",
          "计费周期"
        ]
      },
      {
        "type": "third_party",
        "urlOrFile": "待补",
        "sourceDate": null,
        "recordedDate": "2026-09-18",
        "verifiedDate": null,
        "supportedFacts": []
      }
    ]
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "logo": null,
    "promoCode": "qq88",
    "promoNote": "新人 8 折",
    "editorialRank": null,
    "editorialPick": false,
    "entryPrice": 20,
    "monthlyEntryPrice": 20,
    "currency": "CNY",
    "trafficMin": 59,
    "trafficMax": 1500,
    "trafficDisplay": "59GB–1.5TB",
    "lineClaims": [
      "BGP"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港、台湾、日本、新加坡、美国等，共 68 个节点（核对时 62 个在线）",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=SHjBKSgm",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "不限时轻量包",
        "price": 100,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 100,
        "trafficDisplay": "100GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "不限时标准包",
        "price": 360,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 400,
        "trafficDisplay": "400GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "不限时大容量包",
        "price": 700,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 800,
        "trafficDisplay": "800GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "轻量版（年付）",
        "price": 99,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 59,
        "trafficDisplay": "59GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "入门方案",
        "price": 20,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 120,
        "trafficDisplay": "120GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "进阶方案",
        "price": 40,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "高端方案",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 700,
        "trafficDisplay": "700GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "商业方案",
        "price": 180,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1500,
        "trafficDisplay": "1.5TB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      },
      {
        "name": "独享私人专线节点",
        "price": 680,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 500,
        "trafficDisplay": "500GB / 30天",
        "deviceLimit": "不限",
        "lineType": "BGP",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "优惠码与折扣",
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "全球云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-10-04",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期"
        ]
      }
    ]
  },
  {
    "id": "yuzhouyun",
    "name": "宇宙云",
    "slug": "yuzhouyun",
    "logo": null,
    "promoCode": "YUZHOU553",
    "promoNote": "新用户 8 折",
    "editorialRank": 6,
    "editorialPick": true,
    "entryPrice": 25,
    "monthlyEntryPrice": 25,
    "currency": "CNY",
    "trafficMin": 60,
    "trafficMax": 1500,
    "trafficDisplay": "60GB–1.5TB",
    "lineClaims": [
      "IEPL",
      "IPLC"
    ],
    "hasNoExpiry": true,
    "streamingClaim": true,
    "aiClaim": true,
    "nodeRegions": "香港×20、台湾×5、日本×10、新加坡×10、美国×10，另有马来西亚、德国等，共 70+ 个专线节点",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=IWowgER5",
    "lastVerified": "2026-10-30",
    "plans": [
      {
        "name": "星云年付小包",
        "price": 96,
        "currency": "CNY",
        "billingType": "Yearly",
        "validity": "Subscription",
        "traffic": 60,
        "trafficDisplay": "60GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "行星基础版",
        "price": 25,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 160,
        "trafficDisplay": "160GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "恒星标准版",
        "price": 50,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 300,
        "trafficDisplay": "300GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "星系专业版",
        "price": 100,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 700,
        "trafficDisplay": "700GB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "寰宇旗舰版",
        "price": 200,
        "currency": "CNY",
        "billingType": "Monthly",
        "validity": "Subscription",
        "traffic": 1500,
        "trafficDisplay": "1.5TB / 30天",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "行星基础版（不限时）",
        "price": 110,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 120,
        "trafficDisplay": "120GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      },
      {
        "name": "恒星标准版（不限时）",
        "price": 220,
        "currency": "CNY",
        "billingType": "One-Time",
        "validity": "Permanent",
        "traffic": 200,
        "trafficDisplay": "200GB（永久有效）",
        "deviceLimit": "不限",
        "lineType": "IEPL",
        "streaming": true,
        "ai": true
      }
    ],
    "sources": [
      {
        "type": "user",
        "urlOrFile": "编辑部整理的机场官网资料汇总",
        "sourceDate": "2026-10-30",
        "recordedDate": "2026-10-30",
        "verifiedDate": "2026-10-30",
        "supportedFacts": [
          "节点数量与地区"
        ]
      },
      {
        "type": "official",
        "urlOrFile": "宇宙云官网套餐页",
        "sourceDate": null,
        "recordedDate": "2026-10-04",
        "verifiedDate": "2026-10-04",
        "supportedFacts": [
          "价格",
          "流量额度",
          "计费周期"
        ]
      }
    ]
  }
];
