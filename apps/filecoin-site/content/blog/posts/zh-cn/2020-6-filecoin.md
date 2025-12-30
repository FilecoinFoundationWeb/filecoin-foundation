---
aliases:
  - /zh-cn/blog/roadmap-update-june-2020
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-24T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "免责声明:将技术概念从一种语言完美地翻译到另一种语言是困难的，因此请注意，我们不能保证这个翻译的准确性。 原文可以在这里找到。"
image:
  alt: ""
  url: /uploads/updates-security-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/roadmap-update-june-2020.webp
title: 2020年6月Filecoin路线图更新
_template: blog_detail_ch
---

免责声明:将技术概念从一种语言完美地翻译到另一种语言是困难的，因此请注意，我们不能保证这个翻译的准确性。 [原文可以在这里找到。](https://filecoin.io/blog/roadmap-update-june-2020/)

我们2020年6月路线图更新涵盖了自[上次路线图更新](https://filecoin.io/blog/roadmap-update-april-2020/)以来取得的进展，并介绍了Filecoin进入主网启动最后时刻的下一步计划。

## 我们当前的进度

在过去两个月里，我们项目取得了重大进展。生态中发生了很多变化——感谢所有贡献实施方案、参与测试网、开发应用程序和构建工具与服务的人们！

以下是一些亮点：

### 💾 测试网亮点

- **2️⃣ 测试网第二阶段。** 根据核心实施团队与社区建议选择的“方案二”时间，我们于5月14日启动了[Filecoin测试网第二阶段](https://filecoin.io/blog/filecoin-testnet-phase-2-is-here/)。主要的里程碑包括两个可互操作的Filecoin实施方案([**go-filecoin**](https://github.com/filecoin-project/go-filecoin) 和 [**lotus**](https://github.com/filecoin-project/lotus/))、WinningPoSth和WindowPoSt（我们在协议中使用两种形式的Filecoin _时空证明_）和Drand（分布式随机信标网络）作为共识的外部信标来源。测试网第二阶段还包括我们对参与者和存储市场对重大改进以及[加密经济模型的完善](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/)。关于如何进行测试网请查阅我们的[最新文档](https://filecoin.io/zh-cn/blog/roadmap-update-june-2020/)。
- ✨**Filecoin测试网第二阶段达到了9PB存储。** 测试网第二阶段在近1个月的时间内达到了9PB的数据，这几乎是我们之前设定的高水位线的两倍。我们于上周重置了测试网以使用最新的Lotus和证明结构的优化。至此，我们已看到随着网络以15GB/s的速度有超过6PB的数据落地，近乎每天1.2PB。 ![测试网状态](https://filecoin.io/vintage/images/blog/fil-testnet-stats.jpg)
- **💸测试网奖励。** 本月初，我们宣布了[测试网奖励](https://filecoin.io/blog/announcing-testnet-incentives/)的规则与硬件推荐。为期3周的合作比赛旨在对网络进行压力测试，鼓励世界各地的参与并为矿工提供在主网启动之前在测试网测试的机会。矿工需要成功地完成真实存储和检索交易，并执行扇区的整个生命周期——创建承诺容量扇区、升级并存储真实数据以及终止，才能获得奖励。加入我们本周五(6⁄26)在[filecoin.io/slack](https://filecoin.io/slack)进行的Filecoin Q&A直播以了解更多信息。

### 🧬 Filecoin实施方案要点

- **🏃‍♀️性能与可靠性改进。** 自测试网第二阶段开始以来我们的工作重心一直是加强和提高我们核心实施方案子系统的效率。我们修复了在启动测试网第二阶段之后不久就出现的与封装有关的问题。我们还通过[进行PoRep验证](https://github.com/filecoin-project/specs-actors/pull/340)大大缩短同步时间，允许并行执行。现在，如果同步在到达目标高度之前被中断，它将从[中断处继续进行](https://github.com/filecoin-project/lotus/pull/1705)而不是从创世区块从头开始。感谢参与测试网发现漏洞并帮助修复漏洞的社区成员们——特别感谢[@hayeah](https://github.com/hayeah)的同步改进！
- **🔋主网启动时的硬件规格与复制证明。** Filecoin将使用 **SDR _复制证明算法_** 进行我们的测试网奖励和主网启动。 **请注意:** 矿工应了解Filecoin在主网启动之后会定期升级其证明。尽管Filecoin团队不对硬件规格做任何的特定推荐，但我们共享了我们进行各种测试期间[使用的部分配置](https://filecoin.io/blog/announcing-testnet-incentives/#hardware)。但其实有更多更加高效的配置方案，因此我们强烈推荐矿工进行测试与试验来找到最佳组合方式。
- **⚖️ Filecoin的加密经济模型。** 我们在定义和巩固Filecoin加密经济模型方面取得了重大进展，以确保该网络可以满足用户的长期需求，并为Filecoin的主网启动奠定坚实的基础。尽管我们仍在进行广泛的建模和测试以确定最终参数，但[此概述](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/)描述了Filecoin加密经济模型将如何创建拥有易用的网络、可靠的云存储服务和蓬勃发展的分布式经济支持的公链。
- 🤝 **离线数据传输。** 对于PB级数据或更大的数据传输，最明智的解决方案都会涉及硬盘传输。Filecoin的[离线数据传输功能](https://filecoin.io/blog/offline-data-transfer-for-large-scale-data/)允许拥有大型数据集的用户离线完成数据传输（例如通过将硬盘从用户运送到存储矿工）并按原计划进行链上存储和检索交易。
- **💇‍♀️证明的有效性和内存利用率的改进。** 我们对数据封装方式进行了改进，从而显著提高了内存使用率和封装的性能。与此类似，Neptune（我们针对Filecoin的Poseidon哈希函数的Rust实施方案）现在允许在GPU上构建merkle树。这些性能的改进使Filecoin更加高效和使更多的矿工易于接入使用。
- **🔐 第二阶段可信配置环节。** 测试网第二阶段可信配置环节已经在第一组逻辑电路中开始，接下来几周会有更多参与者加入。在准备过程中，我们大大减少了“大型电路”的所需内存，这可以让小型硬件参与测试网第二阶段可信配置环节。社区参与将于6月29日开始，所以[今天开始注册](https://forms.gle/XxLgsHmxdPjb7jJa9)加入我们吧。

### 👨‍👩‍👧‍👦 生态亮点

- **🔍 Filecoin Discover。** [Filecoin Discover](https://filecoin.io/blog/intro-filecoin-discover/)的目的是帮助Filecoin成为人类社会重要信息数据集的集聚地并他人可以访问。数据集包括：[ENCODE](https://www.encodeproject.org/)、1000 基因组、[古腾堡项目](https://www.gutenberg.org/)、伯克利的自动驾驶数据等等。自5月7日以来，Filecoin矿工已经注册存储了**数十**PB的重要数据。
- 🥳 **Textile Powergate。** 随着接下来的黑客松活动，[Textile Powergate](https://docs.textile.io/powergate/)和 [Buckets](https://docs.textile.io/hub/buckets/)是在Filecoin上进行搭建的易用工具。上周的教程介绍了如何在后台使用Powergate创建存储集和将数据存储到Filecoin网络上。如果您想在Powergate上搭建应用，还可以参考JS用户教程来了解。Textile Hub，是托管IPFS、Filecoin和ThreadsDB节点并使开发者可以轻松让节点落地在Textile上的集合，除此之外，它还将在接下来的几周增加对Filecoin的支持。查看IPFS Pinning Summit来了解更多有关这些对开发者易用的工具信息。
- 🧠 **存储开发项目展示。** 6月23日，Filecoin社区成员举行了存储开发者的第二次“项目展示”通话，在Filecoin生态中开发项目的团队聚在一起，演示他们的项目、相互交流。演示团队包括[Fleek](https://fleek.co/)、Open Work Labs和[Textile](https://textile.io/)。很高兴看到这些团队搭建使Filecoin更加易用的工具！
- **👫 Filecoin社区线上见面会。** 6月16日周四，Filecoin团队举办了首次社区线上见面会！我们的社区见面会是一次认识Filecoin生态中正在搭建工具和创建项目背后的人们的好机会。如果您错过了这次，可以在[此处的博客回顾](https://filecoin.io/blog/filecoin-virtual-community-meetup-recap/)中找到见面会的信息回顾。希望在下次7月14日的线上见面会上与您相见！
- **📞 矿工社区通话。** 我们于5月底举行了[Filecoin矿工社区第二次通话](https://filecoin.io/blog/miner-community-call-may-2020/) —— 非常感谢所有[提问](https://filecoin.io/blog/mining-community-call-thank-you/)的人们！此次通话包括了我们不断发展的矿工生态、已验证用户、Filecoin Discover和测试网奖励等内容。点击[这里](https://filecoin.io/blog/mining-community-call-thank-you/)查看摘要并加入我们第三季度的矿工社区通话。
- 🌟 **托管支持。** 代币托管方 [Gemini](https://gemini.com/blog/upcoming-support-for-filecoin)、 [Anchorage](https://medium.com/anchorage/anchorage-to-support-custody-and-unlocking-contracts-for-filecoin-at-launch-b4f514012793)都宣布在主网启动时支持Filecoin代币托管。Anchorage还将在启动时支持解锁Filecoin合约。如果您打算持有Filecoin，请查看这些托管支持方来了解更多信息。
- 🛳️ **Filecoin第三批开发者资助。** 我们收到了社区成员对[第三批 RFPs](https://github.com/filecoin-project/devgrants/tree/master?tab=readme-ov-file#requests-for-proposals-rfps)包括44项提案（仅关于PB级矿工测试提案就收到了额外48条建议）的巨大反响。我们正在通知获得者并且即将发布完整获得者列表。获得第三批资助的提案包括为Filecoin设计的MetaMask SNAP插件、为博物馆和相关机构的专业档案管理人员设计的用户研究、数据CID状态查看器和存储预言机、Filecoin云存储图像、支持数据转发使用场景的代理重加密服务和链接其他项目的多链API。第四批Filecoin开发者资助将于7月1日截止——[点击此处开始申请](https://filecoin.io/grants/)！
- ✏️ **Filecoin社区亮点系列。** Filecoin博客介绍了一些Filecoin的应用和在Filecoin网络上搭建重要的工具和服务的开发者。我们希望这些故事能够激发其他人加入我们为分布式网络构建世界一流的工具的使命中来。我们最新的亮点包括[Small Data Industries](https://filecoin.io/blog/community-ben-fino-radin-sdi/)和[Open Work Labs](https://filecoin.io/blog/community-jonathan-schwartz-owl/)。敬请期待更多亮点！
- 🙋 **5月与胡安的Q&A环节。** 测试网第二阶段启动之后，我们举行了与Filecoin项目创始人胡安的在线问答环节。在1个小时的环节中，我们回答了来自全球1400多名社区成员的数百个问题。问题包括从路线图和时间更新到已验证用户、硬件要求和最新的测试网奖励等！您可以点击[此处](https://filecoin.io/blog/may-q-and-a-thank-you/)回顾内容。我们下一次Q&A环节将于6月26日周五进行，加入我们[Slack](https://filecoin.io/slack)上的 **#fil-ama** 频道来了解更多相关信息！

## 下一步计划

我们正朝着主网路线图快速前进。请点击[此处](https://app.instagantt.com/shared/s/1152992274307505/latest)查看我们的项目公开路线图（甘特表）。我们会着重标出即将到来的里程碑。

**(1) Go-Filecoin将由社区维护。** 正如我们[之前解释的那样](https://filecoin.io/blog/announcing-lotus/#why-multiple-implementations)，使用多个独立的Filecoin协议实施方案对于Filecoin网络的长期安全和稳定十分重要。在过去的几个月里，4个Filecoin实施方案都取得了长足的进步：

- 4月，我们发布了我们第一个节点可在 [**lotus**](https://github.com/filecoin-project/lotus) 和 [**go-filecoin**](https://github.com/filecoin-project/lotus) 上互操作的网络。此后不久，我们启动了包括可互操作的实施方案和更新后的 _时空证明_ 的[测试网第二阶段](https://filecoin.io/blog/filecoin-testnet-phase-2-is-here/)。
- [**Fuhon**](https://github.com/filecoin-project/cpp-filecoin)，是Soramitsu完成的Filecoin的C++版本实施方案，其一直在致力于增加完全的互操作性。该团队取得了良好的进展并在接下来的几周内加入测试网。
- [**Forest**](https://github.com/ChainSafe/forest)，是由ChainSafe完成的Filecoin的Rust版本实施方案，最近更新了证明和市场参与者并积极地进行了链同步和数据传输——包括IPFS的数据同步算法[Bitswap](https://github.com/ipfs/specs/blob/main/BITSWAP.md)的Rust版本实施方案。

现在我们正迈向主网启动，我们很高兴 [**go-filecoin**](https://github.com/filecoin-project/go-filecoin) 将由社区维护。由不同的团队来管理和改进Filecoin的4种实施方案，可以使每个团队都有重点和独立性来满足我们不断壮大的Filecoin网络长期去中心化和安全的需要。

至此，我们为有兴趣维护**go-filecoin**发展的团队提供了[第四批开发者资助RFP](https://github.com/filecoin-project/devgrants/issues/140)。**go-filecoin**近乎功能完善，主网启动之后将会为维护这个项目的团队创造未来很多机会。比如，在高度优化之后它将成为矿工的优秀产品，**go-filecoin**将成为Filecoin社区大部分人首选的实施方案。此外，在理解和构建Filecoin节点方面积累深厚的专业知识可以解锁其他业务，比如节点托管服务或构建Layer 2 产品和为更好的Filecoin生态创建解决方案。**如果您感兴趣请在** [**GitHub**](https://github.com/filecoin-project/devgrants/issues/140)**与我们取得联系！**

随着主网临近，Filecoin的4种实施方案的功能都在越来越完善。这是Filecoin协议主要部分进展的快照：

<!-- markdownlint-disable MD060 -->

|                | lotus | go-filecoin | forest | fuhon |
| -------------- | ----- | ----------- | ------ | ----- |
| 1. 节点        | ✅    | ✅          | ✅     | ✅    |
| 2. 文档 & 数据 | ✅    | 🔶          | 🔶     | ✅    |
| 3. 虚拟机VM    | ✅    | ✅          | 🔶     | 🔶    |
| 4. VM Actors   | 🔶    | 🔶          | 🔶     | 🔶    |
| 5. 区块链      | ✅    | ✅          | ✅     | ✅    |
| 6. 代币        | ✅    | ✅          | ✅     | ✅    |
| 7. 存储挖矿    | ✅    | 🔄          | 🔄     | 🔄 🔶 |
| 8. 市场        | ✅    | ✅          | 🔄     | ✅    |

<!-- markdownlint-enable MD060 -->

_✅ :实施方案功能完善 | 🔄 :再使用另一个实施方案的组件 | 🔶 :实施方案部分完成_

**(2) Filecoin Ignite。** 为了帮助快速发展的Filecoin生态，我们很高兴发布[Filecoin启动点燃计划(Filecoin Ignite)](https://hub.fil.org/events/)来使社区团结起来参加一系列黑客松和学习活动。目前我们有6个主要活动，其中包含：[太空竞赛(SpaceRace)](https://filecoin.io/blog/announcing-testnet-incentives/) —— Filecoin矿工的全球比赛和[HackFS](https://hackfs.com/) —— 与ETHGlobal合作于7月6日开始的为期30天的线上黑客松活动。我们也参与了[Spark University黑客松活动](https://filecoin.io/blog/spark-university-hackathon/) —— 一场汇聚了来自世界各地大学的开发者们为期8周的基于Filecoin的线上比赛。

如果您想举办一场Ignite活动，[请与我们取得联系](https://forms.gle/yhGiSC8rRcAY9YvE8)！分布在各个活动中的奖励高达400万个FIL和25万美元，现在正是开始在Filecoin上进行开发的好时机！🚀

**(3) 可信配置环节。** [我们测试网第二阶段的可信配置环节](https://filecoin.io/blog/trusted-setup-update/) —— 来自世界各地的参与者在此贡献自己的资源以帮助生成Filecoin网络的安全参数以及可供任何人验证的公开证明，目前已经在第一组逻辑电路上开始了。在接下来的几周，将有更多的参与者加入，社区参与开始于6月29日。如果您想参与请填写[此表](https://forms.gle/XxLgsHmxdPjb7jJa9)并加入[Slack](https://filecoin.io/slack)上 **#fil-trustedsetup**会议室，我们将在那里与参与者进行协调。感谢你们的支持！

**(4) 测试网奖励计划。** [测试网奖励计划](https://filecoin.io/blog/announcing-testnet-incentives/) (也被称为 [太空竞赛](http://ignite.fil.eth.link/))是一场为期3周的合作比赛以鼓励大家积极参与Filecoin测试网。**我们打算于7月20日开始比赛**_(取决于最终功能、测试和比赛的准备)_！矿工需要成功完成真实的存储和检索交易，并完成扇区的整个生命周期，才有资格获得总计**高达400万个FIL**的全球和区域奖励池的奖励（将于主网启动后颁发且有一定的锁定期）。加入我们本周五在[Slack](https://filecoin.io/slack)的 **#fil-ama**频道举行的Filecoin Q&A直播以了解更多信息。

## 我们在启动的最后时刻

随着Filecoin临近主网启动，整个项目也正在蒸蒸日上。我们路线图现在位于主网启动窗口期的末尾。与以前一样，我们将根据接下来的里程碑——包括Filecoin Ignite、太空竞赛（我们的测试网比赛）和可信配置环节的最新估计来更新[项目公开路线图甘特表](https://app.instagantt.com/shared/s/1152992274307505/latest)。请注意这些日期仍是社区要求我们尽力而为的**乐观估计**。它们不是承诺、保守估计或任何形式的保证。如果出现安全漏洞或其他主要问题，我们将确保在主网启动之前花费必要的时间来重复解决这些问题。我们衷心希望这些不会发生，但这也是我们致力于启动安全的区块链网络的必要组成部分。

我们不断提醒自己构建区块链就像构建软件火箭-从根本上讲这很困难，我们必须格外小心以确保我们发布的内容安全可靠。我们将尽力尽责全力以赴。每天有越来越多参与到生态中的机会，因此请在我们的[论坛](http://discuss.filecoin.io/)或在[Slack](https://filecoin.io/slack)上加入社区来帮助和与社区取得联系！我们非常感谢您一直以来的陪伴与关注。🛠️

向前!
