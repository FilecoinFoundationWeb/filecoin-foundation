---
aliases:
  - /zh-cn/blog/发布主网点火和启动阶段
  - /zh-cn/blog/mainnet-ignition
author: ""
categories:
  - updates
  - " events"
date: "2020-10-27T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 在过去的几个月中，Filecoin网络取得了惊人的进步：
image:
  alt: 发布主网点火和启动阶段
  url: /uploads/sr-live-ama-header-7.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/mainnet-liftoff-social.webp
title: 发布主网点火和启动阶段
_template: blog_detail_ch
---

在过去的几个月中，Filecoin网络取得了惊人的进步：

1. **🛠 核心协议功能**。8月，我们完成主网证明[可信配置的第二阶段](https://filecoin.io/blog/trusted-setup-complete/)、与Cloudflare和以太坊等合作伙伴一起推出了[drand主网](https://filecoin.io/blog/distributed-randomness-and-leader-elections/)、发布了[对Filecoin加密经济深度解读的文章](https://filecoin.io/blog/introducing-the-filecoin-economy/)，并交付了全功能的，可用于主网启动的Filecoin实现[lotus 0.5.0](https://github.com/filecoin-project/lotus/releases/tag/v0.5.0)——不仅支持存储挖矿，还支持存储和检索交易。
2. **👨‍👩‍👧‍👦 生态发展**。目前有至少85个组织正在Filecoin网络上进行协作——创建应用程序、开发者工具、基础设施等等。[Filecoin点燃计划](https://hub.fil.org/events/)黑客松系列活动和加速器吸引了成千上万的社区成员参与，他们在Filecoin网络上学习、构建和启动他们的的项目。活动包括[HackFS黑客松](https://hackfs.com/)（由EthGlobal主办）、[Spark University黑客松](https://filecoin.io/blog/spark-challenge-two/)（由En\[code\] Club主办）、[阿波罗](https://gitcoin.co/hackathon/filecoin/onboard) (由Gitcoin主办)和[Filecoin Launchpad](https://tachyon.xyz/) (由Tachyon主办)——共同在Filecoin上培育了230多个新项目以及1000多名才华横溢的开发者。
3. **📑 存储用户**。作为[太空竞赛:Slingshot](https://slingshot.filecoin.io/)的一份子，许多存储用户已经在Filecoin网络上落地——包括Slate这样的用户，允许其用户和应用程序存储和检索文件。这些用户基于Filecoin开发者API和像Fleek’s Storage Daemon、[Textile的Powergate](https://docs.textile.io/powergate/)和[Pinata即将推出的由IPFS支持的Filecoin检索服务](https://docs.filecoin.io/build/filecoin-pinning-services/)这样的工具上进行创建。
4. **⛏ 存储矿工**。在过去的四周内，横跨六大洲34个国家和地区的400多个矿工将**325+PiB的存储容量**上传至Filecoin网络。这足以容纳9000万部1080p的电影、1400多份维基百科副本或人类社会自古以来所有书面作品的7倍。这的确是一个非凡的成就。互联网历史上从未有一个社区可以协调地在一个无信任分布式存储网络中有如此大的存储容量。🙇‍♀️

![数据仪表板上的325PiB](https://filecoin.io/vintage/images/blog/ignition-stats-dashboard.jpg)

## 过渡到主网点火

今天，当我们进入主网点火阶段并已经为Filecoin主网启动做好准备之际，很高兴能够与大家分享[Filecoin启动的阶段与时间表](https://app.instagantt.com/shared/s/1152992274307505/latest)。启动区块链是复杂而漫长的过程，像许多其他网络（如[波卡](https://polkadot.network/launch-roadmap/)、[NEAR](https://near.org/blog/mainnet-roadmap/)等等）一样，Filecoin采用分段式方法来启动主网，在阶段性的时间内将不同群体和社区加入到网络中直至主网启动。

![启动阶段](https://filecoin.io/vintage/images/blog/mainnet-launch-process.jpg)

在接下来的几周内，Filecoin社区的各个群体——包括矿工、用户、托管方、应用程序、网络服务等等将在主网启动完毕之前加入网络。这个预启动阶段我们称为主网点火阶段，使网络参与者有时间进行初始化、学习、设置他们的系统和优化他们的部署。我们都在倒计时主网启动，但这并不意味着所有工作已经完成。我们依然还需进行很多准备工作以保证网络实现精彩的启动：

- **存储矿工** - 在点火阶段继续向网络添加存储，并为主网启动做好运营准备以及对存储和检索交易进行压力测试。
- **用户&应用程序** - 参与我们正在进行的太空竞赛——[Slingshot](https://slingshot.filecoin.io/)，目的是利用Filecoin的分布式存储能力来提供可用、有弹性的数据存储。
- **托管方&生态伙伴** - 利用这段时间将运营和利益相关者接入网络。
- **SAFT持有者** - 请查看CoinList和您选择的托管方的电子邮件以了解如何在主网点火之前和主网过渡阶段在网络上进行设置。如果遇到任何问题，请联系[team@coinlist.co](mailto:team@coinlist.co)或[investor-support@protocol.ai](mailto:investor-support@protocol.ai)。
- **实施方案开发者** - 加强Filecoin不同实施方案之间的测试、强化和互操作性，包括[lotus](https://github.com/filecoin-project/lotus)\[PL\]、[forest](https://github.com/ChainSafe/forest)\[ChainSafe\]、[fuhon](https://github.com/filecoin-project/cpp-filecoin)\[Soramitsu\]和[go-filecoin](https://github.com/filecoin-project/go-filecoin)\[原力区\]。

主网点火阶段也是巩固Filecoin社区参与网络改进以及进行决策的良好时机。存储矿工、社区领袖、开发者、用户和生态伙伴都可以通过开放的[Filecoin Improvement Process](https://github.com/filecoin-project/FIPs)参与增强网络，并通过在[每两周举行一次的核心开发会议](https://github.com/filecoin-project/core-devs)的实施方案交叉讨论进行升级，以及通过[矿工间的共识](https://spec.filecoin.io/#algorithms__expected_consensus)批准新的变更。Filecoin具有完整的功能，但我们希望社区可以在主网启动之后也通过进行不断更新软件来继续发展和改进Filecoin网络。

## 过渡到主网

在过去的一个月中，整个Filecoin生态完全专注于太空竞赛-我们的多赛道测试网奖励比赛。这是Filecoin项目对网络进行调整和升级来为主网启动做准备的关键阶段——整个生态通过大规模的实时压力测试来积累有价值的知识和运营经验。在整场太空竞赛中，超过500名矿工在 Orbital Burn 中落地了超过325PiB的存储，其中有265个用户应用程序在[Slingshot](https://slingshot.filecoin.io/)中进行了超过40,000次存储和检索交易，并共同对网络的功能、安全性和弹性进行了全面的测试。

我们很高兴能够基于太空竞赛的坚实基础来启动Filecoin网络。大家投入了大量的工作（人力和机器！）来增加存储容量，来使得Filecoin网络更安全并且更分布式。早期矿工投入了大量资金来查找漏洞、积累运营知识以及为网络投入大量封装和存储硬件奠定基础。太空竞赛测试网将继续运行，并在接下来的3周内通过协议升级和状态转换逐步进入主网，而不是从头开始进行设置（这样会失去所有存储容量）。在主网启动后，我们仍然需要进行一些改进和状态转换的工作，但是我们会将其构建在链的升级中而不是硬性重置。如果您是矿工并想加入 Filecoin网络，[第二轮太空竞赛: Orbital Burn](https://filecoin.io/blog/space-race-2/)是您现在开始的最佳途径！

## 主网启动倒计时

我们所有努力的顶峰即将到来。Filecoin主网将在epoch 148888正式开启! 我们预期将在10月15日左右到达这个epoch，然后我们将开始一段时间的监控和解决问题来保证过渡后网络的正常运行（与预期相符）。几天之后，我们将举行**Filecoin主网启动：10月19日至10月23日为期一周的Filecoin启动活动。🚀**

![Filecoin主网启动](https://filecoin.io/vintage/images/blog/mainnet-liftoff-launch.jpg)

从尖端的密码学研究到复杂的协议设计和开发讨论，再到太空竞赛时调试实时网络期间的许多不眠之夜-我们在过去3年中共同创造了惊人的成果。启动一个区块链就像发射软件火箭一样，需要整个星际社区共同努力达到这一目标。感谢您参与这次史诗般的旅程！

我们知道Filecoin主网启动是一个备受期待的里程碑，因此我们想给社区一些时间让其变得更有意义。您对Filecoin感到期待吗？本周是举行在线会议，聚会和活动来庆祝启动并共同探索Filecoin网络未来的绝佳时机。我们迫不及待想要参加社区为庆祝Filecoin的成功未来想举办的所有活动。🥂🍾如果您要举办当地的聚会或活动（在区域健康卫生法规允许的情况下），请与我们取得联系！

计划围绕Filecoin启动新产品，应用程序或服务？主网启动期是突显加入网络的优秀项目的好时机！考虑在启动期间的会议或聚会上发布，或者举办自己的发布活动！如果我们可以帮助宣传您的活动或分享您的故事，请联系我们[contact@filecoin.io](mailto:contact@filecoin.io)。

## 展望启动后的未来

就像任何火箭发射一样，升空仅仅是个开始。火箭的最大动压是离开地面之后，而不是之前。同样，作为社区我们最大的挑战是之后我们致力于升级协议，支持要求更高的用例，以及在实现中添加新的功能。为了抵御主网上线之后的压力，我们必须仔细规划升级的路径，动态响应问题，并组成一个多元化的社区，共同定义Filecoin网络的精神，文化和未来。我们有一个坚固的发射台，现在由我们来决定如何在星空中前进。✨

与大家一起构建这枚火箭是一个重大的壮举-让我们现在为启动做好准备！😎 🚀

_🚨注意： 许多生态都在启动的时候发现了一些骗局-请保持警惕！请对在主网启动时任何买卖Filecoin的行为都保持格外警惕-测试网FIL**不是**主网FIL！任何人都不应当要求您提供私钥或者钱包恢复密码，也不能要求您为获得“赠予的币”的资格付费。在启动过程中，将仅通过官方Filecoin Twitter和博客来发布信息。如有疑问，请先通过多种渠道进行验证。_
