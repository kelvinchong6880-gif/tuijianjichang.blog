// 品牌页的“额外内容”。
// 所有品牌页的结论、优缺点、选购表、FAQ 都由 src/components/BrandReview.astro 根据 providers.ts 自动生成，
// 数据改了文章会自动同步，不会再出现正文与表格数字对不上的问题。
// 只有需要额外手写内容的品牌（如主推的 SOGO云）才在这里补充。
export interface CustomContent {
  title?: string;
  desc?: string;
  h1?: string;
  /** 出现在页面顶部（套餐表之前）的手写导语 */
  intro?: string;
  /** 出现在自动生成内容之前的手写深度内容 */
  extra?: string;
}

export const customContent: Record<string, CustomContent> = {
  'sogo-yun': {
    title: 'SOGO云怎么样？2026 SOGO云机场评测：套餐价格、IEPL线路与优惠码',
    desc: 'SOGO云机场评测（2026年10月更新）：月付¥25起150GB，全IEPL/IPLC专线、单节点峰值2.5Gbps、晚高峰不降速，原生IP解锁Netflix与ChatGPT。9个套餐对比、长期付费折扣与优惠码sogo10000。',
    h1: 'SOGO云怎么样？2026 SOGO云机场评测与套餐选购指南',
    intro: `
      <div class="custom-editorial">
        <h2>SOGO云怎么样？一句话结论</h2>
        <p><strong>SOGO云是本站 2026 年 10 月的首推机场。</strong>它的月付套餐全部走 <a href="/compare/iplc-vs-iepl/">IEPL 专线</a>，年付小包和不限时流量包走 IPLC 专线，官方标称单节点峰值 2.5Gbps、所有节点 1 倍率、晚高峰不降速，并且使用原生 IP 解锁 Netflix、Disney+、ChatGPT 与 TikTok。价格方面，<strong>¥25/月就有 150GB</strong>，同时提供 ¥98/年 的 60GB 小包和 4 款流量永不过期的不限时包，从轻度用户到家庭共用都能找到合适档位。</p>
        <p>如果你不想花时间比较几十家机场，直接从 SOGO云 的 ¥25 基础版月付开始用，是目前最省心的选择。下单时填写优惠码 <code>sogo10000</code>，具体折扣以结算页显示为准。</p>
      </div>
    `,
    extra: `
      <div class="custom-editorial">
        <h2>为什么 SOGO云 排在机场推荐第一？</h2>
        <h3>1. 月付套餐全部是 IEPL 专线</h3>
        <p>很多低价机场只有贵的档位才给专线，SOGO云 从 ¥25 的基础版开始就是全 IEPL 专线。IEPL 是跨境以太网专线，不经过拥堵的公网国际出口，晚高峰（晚上 8–11 点）掉速、断流的概率比普通中转线路小得多。</p>

        <h3>2. 节点多、地区全</h3>
        <p>官方节点分布为：香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2，另有英国、法国、德国、土耳其、泰国、巴西等地区。日常看 YouTube 选香港/日本，用 ChatGPT 选美国/新加坡，追日剧选日本，都有充足的节点可以切换。</p>

        <h3>3. 长期付费折扣大</h3>
        <p>SOGO云 的月付套餐支持 年付 8 折、两年付 7 折、三年付 6 折。以 150GB 的基础版为例：</p>
        <ul>
          <li>月付：¥25/月</li>
          <li>年付：¥240/年，折合 ¥20/月</li>
          <li>三年付：¥540/三年，折合 ¥15/月</li>
        </ul>
        <p>建议先买一个月试用，确认稳定后再改成年付，能省下 20% 以上。</p>

        <h3>4. 不限时流量包适合备用</h3>
        <p>SOGO云 有 120GB（¥120）、250GB（¥220）、500GB（¥450）、1TB（¥850）四款不限时流量包，一次购买、流量永久有效，用完为止。适合一个月只用几次的人，或者给主力机场配一个备用。注意不限时包不参与年付/多年付折扣。</p>

        <h3>5. 第三方测速参考</h3>
        <p><a href="https://www.haiwailab.com/reviews/sogoyun/" target="_blank" rel="nofollow noopener">HaiwaiLab</a> 在 2026 年 8 月发布的测试中（珠海联通 5Gbps 宽带、32 线程）记录到：SOGO云 日本 10 个节点平均速度 71–106MB/s，美国 10 个节点 50–86MB/s。测速结果会随你的本地运营商和时段变化，仅供参考。</p>

        <h2>SOGO云 9 个套餐一览</h2>
        <ul>
          <li><strong>小包-年付版</strong>：¥98/年，每月 60GB，全 IPLC 专线（折合约 ¥8.2/月）——查资料、用 AI、轻度社交</li>
          <li><strong>基础版</strong>：¥25/月，150GB，全 IEPL 专线——每天 1–2 小时视频的普通用户</li>
          <li><strong>优选版</strong>：¥45/月，350GB——经常追剧、偶尔下载</li>
          <li><strong>强化版</strong>：¥80/月，550GB——4K 观影、多设备</li>
          <li><strong>顶配版</strong>：¥150/月，1050GB——全家共用、小团队</li>
          <li><strong>不限时版</strong>：120GB ¥120 / 250GB ¥220 / 500GB ¥450 / 1TB ¥850，全 IPLC 专线，流量永久有效</li>
        </ul>
        <p>所有套餐都不限制同时在线设备数，电脑、手机、路由器可以一起用。</p>
      </div>
    `,
  },
};
