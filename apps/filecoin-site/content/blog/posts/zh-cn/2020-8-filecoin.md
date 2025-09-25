---
aliases: []
author: Filecoin Project
categories:
  - updates
  - events
date: ""
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 我们8月的路线图更新涵盖了自上次路线图更新以来取得的进展——值得庆祝的是我们的测试网奖励比赛——Filecoin太空竞赛于今日正式启动。
image:
  alt: ""
  url: /uploads/update-august-2020.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/update-august-2020.webp
title: 2020年8月Filecoin路线图更新
_template: blog_detail_ch
---

我们8月的路线图更新涵盖了自上次路线图更新以来取得的进展——值得庆祝的是我们的测试网奖励比赛——Filecoin太空竞赛于今日正式启动。在过去的两个月中，该项目取得了长足的进展，以下是一些要点：

## 太空竞赛

💸 **太空竞赛**。我们于今日正式启动了[Filecoin太空竞赛](https://filecoin.io/blog/welcome-to-space-race)，这是一场为期3周的协作比赛，旨在对网络进行压力测试、鼓励世界各地的参与者参与，并为矿工提供在主网启动之前测试Filecoin的机会。对于Filecoin而言，这是一个重要的里程碑——标志着这是我们在主网启动前最后一次重大更新，以及通过我们数月艰苦努力使Filecoin协议和Lotus实施方案进入“可支持主网启动”的状态。随着矿工对网络进行压力测试并帮助发现问题，我们将会在竞赛中取得许多进步。

🎛 **校准开发网络**。我们为期一个月的校准期将帮助矿工通过成功完成实际存储并执行扇区的完整生命周期来进行太空竞赛准备。在此期间，我们发现矿工在检索交易中的成功率达到97%，并且前50名矿工中有24名矿工在存储交易中达到了 **_100%_** 的成功率。

![校准开发网络中的成功率](/vintage/images/blog/update-success-rates.png)

⛏ **挖矿**。随着PB级的数据被来自世界各地的矿工存储在Filecoin测试网上，挖矿社区也继续发展壮大。在过去的一个月里，可靠存储达到了25PB以上的新高——与上一次路线图更新相比，提高了近3倍！校准开发网络还看到极快的封装速度——每日超过5PB！测试网已在今日下午3点（太平洋时间）(下午10点 国际标准时间 | 上午6点 北京时间) 更新为太空竞赛的最新代码——矿工们对竞赛做好了准备！🎉

![存储数据](/vintage/images/blog/update-storage-stats.jpg)

## 主网性能

💪 **主网性能不断强化**。我们工作的主要重点是加强Filecoin区块链中存储和检索交易的生命周期——包括通过实际存储升级的承诺容量、将多个交易存储在一个扇区中、通过纯文本的副本向矿工请求[快速检索](https://github.com/filecoin-project/lotus/pull/2323)以及通过支付通道为成功的交易交换filecoin（这带来了巨大的改进）。我们还向虚拟机中引入了“真实”的Gas费⛽——包括实施了[EIP1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md)。详细内容请查看[Lotus 0.5.0 release](https://github.com/filecoin-project/lotus/releases/tag/v0.5.0)。

💎 **主网上的Drand**。Filecoin网络使用Drand（生产级别的分布式随机信标网络）作为达成共识的外部随机资源。自Drand主网启动以来，该随机性网络获得League of Entropy参与者们的参与，例如Cloudflare、Ethereum、Chainsafe、EPFS、UCL、Truffle等等。点击[此处](https://drand.love/blog/2020/08/10/drand-launches-v1-0/)阅读有关drand的更多内容，并在[此处](https://filecoin.io/blog/distributed-randomness-and-leader-elections/)了解Filecoin如何使用drand的知识。

🔐 **可信配置的第二阶段**。我们完成了[可信配置环节的第二阶段](https://filecoin.io/blog/trusted-setup-update/)——来自世界各地的参与者贡献他们的资源以帮助生成Filecoin网络的安全参数和可供任何人验证的公开证明。每条逻辑电路我们有15-25名唯一的参与者（总共6条逻辑电路），其中包括以太坊基金会、Consensys、Supranational、Ocean Protocol、IPFSMain、Sigma Prime等等组织。我们即将推出第三方验证可信配置输出的说明。

🔋 **主网证明的最终确定**。基于可信配置第二阶段的输出，我们发布了用于主网启动的SDR复制证明参数的最终版。这些证明已经通过了准确性、完整性和稳定性审核。您可以在[https://proofs.filecoin.io](https://proofs.filecoin.io)上查看。
**请注意**：矿工需要知道Filecoin在主网启动后也会定期升级其证明。

⚖️ **Filecoin加密经济模型**。我们在Filecoin加密经济模型的定义与构造方面进行了重大改进——包括更新了最新开发网络中的实时代码。其中一部分是我们创建了一个关于Filecoin经济如何运行的深度解释器，我们将在太空竞赛期间组织一场 _深入探讨CryptoEcon_ 的活动来与矿工共享该文件。我们仍在进行扩展建模和测试以确定最终参数，并希望能对主网启动带来更多的改进。

## 生态要点

👨‍👩‍👧‍👦 **Filecoin生态。** 测试网上已经有70多个有意义的组织建立和合作了。以下是最近更新：

- **Textile’s Powergate:** [Powergate](https://docs.textile.io/powergate/) 是API驱动型解决方案，用于把基于IPFS和Fileocin的多层存储部署到系统和应用程序中。开发者可以将数据保留在Filecoin上、确保IPFS的可用性、通过访问控制来管理一个或多个Filecoin地址、监控长期交易、使用可支持多个用户和库等等！
- **Truffle:** Truffle宣布了[与Filecoin开始合作](https://www.trufflesuite.com/blog/announcing-collaboration-with-filecoin)，并发布了`truffle preserve`，该命令允许开发者保留Truffle CLI中的应用程序数据。下一步就是推出[Filecoin-flavored Ganache](https://github.com/trufflesuite/ganache-filecoin-alpha-cli)，开发者可以使用它来启动Filecoin模拟器。只需一个命令您就可以同时获得自动配置的一个Filecoin节点（模拟Lotus）和一个IPFS服务器进行使用。您可以用此模拟器替代实际的Lotus节点或Powergate的localnet以加快开发和单元测试速度。即将推出更多更新！

- **Space:** Fleek团队发布了他们的最新产品——Space, 这是一个基于分布式网络的开源文件存储、共享和协作平台。您可以将Space V1视为像dropbox或者谷歌云盘的私有加密p2p版本，并且可以像使用这些产品一样使用Space。与其他产品相比，使用Space的最大好处就是您无需允许云服务公司监控和控制您的文件或数据来牺牲您的隐私，有了Space，您的文件都会是归属您私有的、点对点、端口到端口加密的！
- **检索市场:** Chainsafe在HackFS期间演示了[检索市场的初步实施方案](https://www.youtube.com/watch?v=eUcsZ1JS9pM&feature=youtu.be&t=7977)。他们的检索工具将Lotus节点合并到基于libp2p [gossipsub](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub)的网络中，该网络允许用户从点对点网络或者Lotus节点请求文件。您可以在GitHub上查看[他们的代码](https://github.com/ChainSafe/fil-secondary-retrieval-markets)。

- **托管支持 :** 代币托管方[Gemini](https://gemini.com/blog/upcoming-support-for-filecoin)、 [Anchorage](https://medium.com/anchorage/anchorage-to-support-custody-and-unlocking-contracts-for-filecoin-at-launch-b4f514012793)在主网启动之时都将支持Filecoin的代币托管。Anchorage还将在主网启动时支持解锁合约。如果您打算持有Filecoin, 请查看这些托管方以了解更多信息。

🔥 **Filecoin Ignite**。[Filecoin Ignite](https://hub.fil.org/events/)将继续为社区提供一系列黑客松和学习活动以促进和支持快速发展的Filecoin生态。HackFS是我们取得巨大成功的首个活动。

- **HackFS**: HackFS是与ETHGlobal共同举办的为期30天的线上黑客松活动，目前已帮助130多个项目加入分布式网络。共有来自19个时区的50多个国家的470多名开发者参与了本次活动。您可以深入了解参加黑客松的[10个](/blog/hackfs-teams-vol-1/)[团](/blog/hackfs-teams-vol-2/)[队](/blog/hackfs-teams-vol-3/)背后的故事、回顾[HackFS Finale](https://filecoin.io/blog/hackfs-finale/)、看看哪些团队获得了大奖，或者可以在HackFS Showcase上了解有关所有134个项目的更多内容。

- **Spark University Hackathon**: 是由Encode Club举办的为期6周的线上黑客松活动，[Encode Club](https://www.encode.club/)是一个由大学生、学者和开发者在区块链上创建的线上社区。来自全球各大高校的50支团队响应啦Filecoin发起的两项挑战，获奖者将在8月31日（下周一）的现场决赛中宣布。
- **Apollo**: [APOLLO](https://gitcoin.co/blog/apollo/)是由Gitcoin设计的为期6周、旨在为Filecoin生态中的创建者和贡献者提供社区服务的项目。可以把它视为是为顶级InterPlanetary Filecoin开发者创造的跨空间和时间的任务控制！将有150多名优秀的开发者有机会成为Filecoin和Web 3生态的开拓者。本次申请将于8月28日周五关闭——点击[此处](https://gitcoin.co/hackathon/filecoin/onboard)今日注册！
- **Filecoin Launchpad**: [Filecoin Launchpad Accelerator](https://tachyon.xyz/)是完全远程和全职的、专门用于指导为分布式和去中心化网络进行创建的初始团队的计划。将有15-20个团队加入该计划，并将历经12周的时间进行资助、指导和围绕业务以及与区块链相关的事件进行编程，最后以最终展示日为结尾。团队们将获得在ConsenSys和协议实验室网络方面的专业知识，本次参与者将涵盖从企业家、法律顾问到开拓性技术研究人员。每个团队将获得8万美元的投资。申请截止日现已延长至8月28日！
- 如果您想举办一场Ignite的活动请与我们取得联系！超过400万枚FIL和25万美元的奖励在各个活动中等着您，现在是开始在Filecoin上进行创建的最佳时机。🚀

![随机性峰会](/vintage/images/blog/update-randomness-summit.jpg)

🎲 **随机性峰会**。为了庆祝League of Entropy生产级别随机信标drand的发布，[随机性峰会](https://randomness2020.com/)将于8月13日举行。演讲者包括Bryan Ford、Joseph Boneau、Justin Drake、Kelly Olson和Vitalik Buterin，以及LoE合作伙伴Cloudflare、Kudelski Security、协议实验室、智利大学等，演讲的范围从随机性的基础到可验证延迟函数VDF的未来。协议实验室将在YouTube上提供完整的[峰会内容回顾](https://www.youtube.com/watch?v=661hUozi9oo)。

🛳️ **Filecoin第四波开发者资助**。我们收到了社区成员对[第四波RFP](https://github.com/filecoin-project/devgrants/tree/master?tab=readme-ov-file#requests-for-proposals-rfps)的积极反馈，截至目前第四波RFP已收到28份申请。随着我们即将启动主网，还将继续滚动接受新的RFP。我们即将发布所有资助获得者名单，目前RFP里包括Snarks作为矿工服务、与Ceramic Protocol和OrbitDB的集成、为Filecoin地址提供ENS支持和可在Filecoin上搜索及保存国家立法文件等等。目前正在审核其他的RFP。Filecoin第五波开发者资助将于10月1日截止，之后将发布第五波的RFP。点击[此处](https://filecoin.io/grants/)即可申请！

📞 **社区活动。** 社区将定期举行活动以分享各种新的想法和进展。在过去的两个月中，Dapp开发者、矿工和生态内的用户举办了许多活动：

- **存储开发Show & Tell**: 在Filecoin的第三次“存储开发 Show & Tell”中，我们进行了来自生态内的各种演示。BlockRocket团队向我们展示了NFT Snapshot Bot、MetaMask展示了Filecoin Snap，我们还了解到Filecoin已被添加到Ocean Protocol的公共市场中并且我们已经可以看到太空竞赛的仪表板和机器人了。Leandro Barbosa给我们演示了IPFS和Filecoin上的Voodfy视频转码，还有OpenBazaa演示了他们的Filecoin钱包——您可以在Youtube上Filecoin 频道获取[存储开发 Show & Tell的记录回顾](https://youtu.be/EPG-Y9Gkg0w)。

- **Filecoin社区线上见面会**: Filecoin社区线上见面会是汇聚Filecoin社区成员、展示人们在生态中创建的工具和项目的绝佳机会。在本月的见面会上，Figment Networks团队谈到了Hubble，这是一种用于验证者的信誉系统。Datahub 可以帮助开发者更快地在区块链上开始创建。Fleek团队展示了 Space 存储，这是新的重点关注隐私的文件存储、共享与协作平台。Gitcoin也向我们阐述了APOLLO计划以及您与Filecoin社区中的创建者进行互动时的任务控制器。本次见面会以Mosh概述太空竞赛为结尾。您可以Youtube的Filecoin频道上[回顾所有展示](https://youtu.be/CxH58f9OIvo).

- **矿工社区通话**: 在上个月的矿工社区通话中，我们收到了来自Filecoin团队的信息。Colin分享了生态的最近更新，并概述了自上次5月的社区通话以来取得的所有进展。Ian 和Molly针对如何准备太空竞赛进行了讨论，太空竞赛是即将在本周开始的测试网奖励比赛，我们也完成了Aayush主持的问答环节。您可以在Youtube上的Filecoin频道回顾[矿工社区通话的内容](https://youtu.be/jhRQkEAHofA)。

- **Filecoin 指导课程**: 我们在8月17日开始了Filecoin指导课程系列，演示了[如何使用Slate API](https://www.youtube.com/watch?v=Rknj2GqvJtg&t=6s)。指导课程系列的第二课将介绍如何使用Fleek的Space Daemon创建分布式应用程序，包括现场演示。[点击此处报名参与](https://www.eventbrite.com/e/filecoin-master-class-registration-118042974715?ref=estw)。

- **中国社区的活动**: Colin和Keren在中国的多个区块链社区活动中进行了演讲，包括在杭州举行的[IPFS生态产业峰会](https://play.yunxi.tv/livestream/flash?id=e1eecab932304450b9e332502dbbf490#/)、深圳的[2020 Cointelegraph中文大湾区·国际区块链周](https://mp.weixin.qq.com/s/7SbCX1JfOXTPfEiAHNJM2A)和上海的。Colin向我们展示了社区的最新动态，并探讨了Filecoin Ignite计划，包括太空竞赛、HackFS、Apollo计划等等。Keren分享了对Filecoin项目的概述、我们最近取得的成就以及社区成员加入Filecoin生态的各种渠道。当前生态中的项目包括Textile、Truffle、Fleek和获得Filecoin开发者资助的项目也在期间展示了他们的产品和最新进展。

## 主网启动即将到来

众望所归！我们最后一个里程碑就是即将在9月中下旬进行的**Filecoin主网启动**！

像之前一样，我们将通过推算最终的步骤和最新估计来更新[公开项目路线图甘特表](https://app.instagantt.com/shared/s/1152992274307505/latest)。在过去的一个月里，整个Filecoin取得了 _非凡_ 的进展——矿工们在校准开发网络期间保持每周更新、Filecoin Ignite的黑客松中正在开发数百个令人称赞的项目，还有大量的活动和改进工具！

众多团队已成为Filecoin网络迈入新阶段的一份子，在此非常感谢：

- 在过去的一年半时间里，许多**矿工社区**在开发网络和测试网中帮助测试和改进Filecoin。

- 诸如Textile、Open Work Labs、Fleek、Truffle、Figment、Zondax、Digital Mob等等的**生态开发者**，你们创建了使Filecoin网络更强大、更易于开发的工具与基础设施。
- 像Chainsafe和Soramitsu这样的**Filecoin实施团队**，他们的[Forest](https://github.com/ChainSafe/forest)和[Fuhon](https://github.com/filecoin-project/cpp-filecoin)实施方案实现了与Lotus的完全互操作性。
- 使用Filecoin创建绝佳的应用程序以进行分布式存储的**网络用户和合作伙伴们**，例如[Starling](https://starlingstorage.io/)、Space、 [Slate](https://github.com/filecoin-project/slate)和HackFS中所有令人称赞的项目。

- 像EthGlobal、Gitcoin、Tachyon、Encode Club这样的**社区组织者**，他们将社区汇聚在一起，并帮助了许多新贡献者。

- 当然，还有**更广泛的社区朋友们**，他们以多种方式（通过文档、联系渠道、社区支持等）帮助和改进了Filecoin。

正是因为你们，Filecoin网络才不断发展壮大——我们很荣幸能与你们携手同行。🛠️
