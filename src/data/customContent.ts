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
    title: 'SOGO云怎么样？2026 SOGO云机场评测：套餐价格、IEPL/IPLC专线与优惠码',
    desc: 'SOGO云机场评测（2026年10月更新）：月付¥25起150GB，全IEPL/IPLC专线、VLESS协议、不限速不限设备，原生IP解锁Netflix与ChatGPT。9个套餐对比、60节点测速截图与新用户9折优惠码sogo10000。',
    h1: 'SOGO云怎么样？2026 SOGO云机场评测与套餐选购指南',
    intro: `
      <div class="custom-editorial">
        <h2>SOGO云怎么样？一句话结论</h2>
        <p><strong>SOGO云是本站 2026 年 10 月的首推机场。</strong>全部套餐走 <a href="/compare/iplc-vs-iepl/">IEPL/IPLC 专线</a>（月付套餐为 IEPL，不限时包为 IPLC），使用 VLESS 协议，全节点不限速、不限制客户端和设备数量，节点提供原生 IP，支持 Netflix、YouTube、Disney+、HBO 等流媒体和 ChatGPT、Gemini、Claude 等 AI 服务。价格方面，<strong>¥25/月就有 150GB</strong>，同时提供 ¥98/年 的 60GB 小包和 4 款流量永不过期的不限时包，从轻度用户到家庭共用都能找到合适档位。</p>
        <p>如果你不想花时间比较几十家机场，直接从 SOGO云 的 ¥25 基础版月付开始用，是目前最省心的选择。新用户下单时填写优惠码 <code>sogo10000</code> 可享 9 折，具体以结算页显示为准。</p>
      </div>
    `,
    extra: `
      <div class="custom-editorial">
        <h2>SOGO云 基本资料</h2>
        <ul>
          <li><strong>官网</strong>：sogocloud.world（支持免翻墙访问，方便获取订阅和售后）</li>
          <li><strong>官方频道</strong>：Telegram @sogocloudzxjc</li>
          <li><strong>成立时间</strong>：2026 年，技术和运营团队有 8 年行业经验，并有海外技术团队维护线路</li>
          <li><strong>线路与协议</strong>：IEPL/IPLC 专线 · VLESS 协议</li>
          <li><strong>限制</strong>：全节点不限速，不限制客户端和设备数量</li>
          <li><strong>付款方式</strong>：支付宝、微信支付、USDT（TRC20）</li>
          <li><strong>免费试用</strong>：无，建议先买一个月基础版试用</li>
          <li><strong>其他</strong>：提供企业定制方案</li>
        </ul>

        <h2>为什么 SOGO云 排在机场推荐第一？</h2>
        <h3>1. 全部套餐都是专线</h3>
        <p>很多低价机场只有贵的档位才给专线，SOGO云 从 ¥25 的基础版到 ¥98 的年付小包、再到不限时流量包，全部走专线：月付套餐是 IEPL，不限时包是 IPLC。两者都是跨境专线，不经过拥堵的公网国际出口，晚高峰（晚上 8–11 点）掉速、断流的概率比普通中转线路小得多。</p>

        <h3>2. 节点多、地区全</h3>
        <p>主力节点为香港×20、台湾×10、日本×10、新加坡×10、美国×10，另有马来西亚、英国、法国、德国、土耳其、泰国、巴西等地区。日常看 YouTube 选香港/日本，用 ChatGPT 选美国/新加坡/日本，追日剧选日本，都有充足的节点可以切换。</p>

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

        <h3>5. 测速参考：60 个节点实测截图</h3>
        <p>下面两张是 FFQ.LA 公开测速平台在 2026 年 4 月 13 日对 SOGO云 60 个节点（香港 20、台湾 10、日本 10、新加坡 10、美国 10）的两轮测试，测试环境为辽宁移动 1Gbps 宽带、8 线程：</p>
        <ul>
          <li><strong>速度</strong>：大部分节点平均下载速度在 45–55MB/s（约 360–440Mbps），单节点最高 60–67MB/s；每轮有 1–4 个节点测速为 0 或明显偏低，使用时换一个同地区节点即可。</li>
          <li><strong>延迟</strong>：日本节点 TLS RTT 约 80–110ms，香港、台湾、新加坡约 130–180ms，美国约 205–265ms。</li>
          <li><strong>流媒体</strong>：60 个节点全部解锁 Netflix 和 YouTube；香港、台湾节点可看 B 站港澳台内容。</li>
          <li><strong>AI</strong>：日本、新加坡、美国、台湾节点全部解锁 ChatGPT（香港地区 OpenAI 不提供服务，属正常情况）。</li>
        </ul>
        <figure>
          <img src="/images/speedtest/sogo-yun-speedtest-1.webp" alt="SOGO云 60 个节点测速截图（第一轮）：平均速度、延迟与 Netflix、ChatGPT 解锁结果" width="808" height="1280" loading="lazy" decoding="async" />
          <figcaption>第一轮测速（2026-04-13 17:32，辽宁移动 1Gbps）</figcaption>
        </figure>
        <figure>
          <img src="/images/speedtest/sogo-yun-speedtest-2.webp" alt="SOGO云 60 个节点测速截图（第二轮）：平均速度、延迟与流媒体解锁结果" width="808" height="1280" loading="lazy" decoding="async" />
          <figcaption>第二轮测速（2026-04-13 17:33，辽宁移动 1Gbps）</figcaption>
        </figure>
        <p>另外，<a href="https://www.haiwailab.com/reviews/sogoyun/" target="_blank" rel="nofollow noopener">HaiwaiLab</a> 在 2026 年 8 月发布的测试中（珠海联通 5Gbps 宽带、32 线程）记录到：SOGO云 日本 10 个节点平均速度 71–106MB/s，美国 10 个节点 50–86MB/s。测速结果会随你的本地运营商和时段变化，仅供参考。</p>

        <h2>SOGO云 9 个套餐一览</h2>
        <ul>
          <li><strong>小包-年付版</strong>：¥98/年，每月 60GB（折合约 ¥8.2/月）——查资料、用 AI、轻度社交</li>
          <li><strong>基础版</strong>：¥25/月，150GB——每天 1–2 小时视频的普通用户</li>
          <li><strong>优选版</strong>：¥45/月，350GB——经常追剧、偶尔下载</li>
          <li><strong>强化版</strong>：¥80/月，550GB——4K 观影、多设备</li>
          <li><strong>顶配版</strong>：¥150/月，1.1TB——全家共用、小团队</li>
          <li><strong>不限时版</strong>：120GB ¥120 / 250GB ¥220 / 500GB ¥450 / 1TB ¥850，流量永久有效</li>
        </ul>
        <p>以上套餐全部是 IEPL/IPLC 专线，都不限制同时在线设备数，电脑、手机、路由器可以一起用。新用户使用优惠码 <code>sogo10000</code> 享 9 折。</p>
      </div>
    `,
  },
};
