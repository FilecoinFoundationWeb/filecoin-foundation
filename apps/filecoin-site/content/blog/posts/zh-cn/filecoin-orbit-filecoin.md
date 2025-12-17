---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-10-15T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: 在短短12个月的时间里，Filecoin网络及其周边生态的力量已经达成了如今的成就。
image:
  alt: ""
  url: /uploads/filecoin-orbit.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-orbit.webp
title: Filecoin Orbit：Filecoin主网上线一周年回顾
_template: blog_detail_ch
---

Filecoin主网在2020年10月15日上线后，启动了分布式存储的新纪元，催生了一个专门为存储人类最重要的信息而设计的网络。这实在是忙碌的一年。在短短12个月的时间里，Filecoin网络及其周边生态增长到如今的 **_庞大_** 规模。

从指标来看，这样的成就是很惊人的：

- 整个网络的存储能力达到12 EiB
- 3,362名Filecoin存储提供者
- 230+组织在网络上搭建应用
- 465+新项目进入了这个生态
- 7,500+名项目贡献者在Github上作贡献
- 10,000+名开发者参与到黑客松活动

我们的社区成员在幕后的贡献，是上述成绩得以达成的原因，而Filecoin和IPFS生态以惊人的速率成长，出现了很多新计划、新项目和新合作。

让我们回顾一下过去，庆祝一下这些令人赞叹的进展，并展望未来的可能性，这将是非常重要的。

请继续阅读Filecoin生态在第一年的精彩成绩！

## 研究 & 开发

在过去一年，Filecoin协议和网络有了重大的进展，这包括了超过8次协调网络升级，整合了13次Filecoin改进提议（FIPs），并在主网上实施了两个实现（Venus和Forest）。

自从主网启动后，Filecoin在存储提供者的稳健性、易用性、链的容量和带宽等方面做出了重大的升级，将每日的容量增加速率提升了一倍。

![](/uploads/hyperdrive-1.webp)

## Hyperdrive升级

在2021年6月，仅仅是在主网发布后的8个月,Filecoin v13 ‘HyperDrive’ 网络升级在存储增加能力上就带来了10-25倍的提升。Filecoin作为首个主要的L1层链就实现了显著的链带宽增长。从那以后，每日存储容量增长率翻倍到超过60PiB/日，预计到2021年末网络容量会达到 \~20EiB .

这个升级的完成得益于Filecoin证明系统的创新。从主网上线开始，Filecoin网络一直工作在最大的容量，这要归因于庞大的存储提供者需求，这让Filecoin最大的SNARK零知识证明系统（以处于生产状态中的系统为准），每日产出和验证超过500万次SNARKs证明。

从2020年12月到2021年4月，CryptoNetLab和CyptoComputeLab设计和实施了[SnarkPack](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)，这是一个通过聚合来扩展SNARK证明的新型策略，带来了可扩展性的提升，并缓和了网络堵塞的问题。 SnarkPack在[改进提议FIP13](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)里实施，为Filecoin网络带来了10-25倍的链容量扩展。

## 检索市场（Retrieval Markets）

检索市场是Filecoin之上搭建的最激动人心的平台之一，因为它以去中心化方式提供了类似CDN网络的体验，在上面人们可以一起提供为终端用户提供带宽和地理位置。

今年，一个专注于探索检索市场的可能性及机会的深入研究研讨会（Research Workshop）诞生了。有20多名研究人员在线上聚会，探讨和设计新的数据分发计量方案（Data Delivery Metering），Graph Forming, Opportunistic Deployments和检索市场加密经济学。

在4月举办了首个检索市场创建者峰会（Retrieval Market Builders Summit），参与者包括Lotus, PegaSys, Myel, Digital Mob, Textile, Chainsafe, Protocol Labs, IPFS, FilSwan, ResNetLab和Estuary团队等。

现在，有几个团队正搭建检索市场解决方案的不同实现方法。你可以每两周在[检索市场演示日——Retrieval Markets Demo Days](https://docs.google.com/document/d/1IrNbBm2_P79Xi2fXFj9YUfQ0PjWjreGdPYFjFntD1QM/edit#heading=h.akao8aspby4f)查看他们的进展。

## Filecoin实现方案

![](/uploads/lotus-2.webp)

### Lotus

Lotus是Filecoin的首个替代实现方案，[它在2019年发布](https://filecoin.io/blog/posts/announcing-lotus-our-first-alternate-filecoin-implementation/)，差不多早于主网上线一年时间。在去年，[Filecoin Lotus实现方案](https://github.com/filecoin-project/lotus)有了明显的改进。

现在，Lotus Miner的变更(MRA)能让主要的存储提供者和市场服务过程分割开来，通过将网络关键的操作与交易提议流程隔离来实现更高的弹性。

让Lotus对存储提供者更具可扩展性的努力也有明显的投入。分片存储(sharded store)项目[Dagstore](https://github.com/filecoin-project/dagstore)旨在将大型的IPLD graphs封装成位置透明的可附加CAR文件（location-transparent attachable CAR files）。还有splitstore的一个实验版本提供了将单一的blockstore分割到冷和热存储区的选项。

Lotus还支持了20多个FIP改进提议所带来的8个网络升级、实现方案和规格工作，最近还有加速的三周发布周期。

### Forest

[Forest](https://github.com/ChainSafe/forest)是由[ChainSafe](https://medium.com/chainsafe-systems)推出的Rust Filecoin实现方案，在今年也有很多的改进。现在，它已提供完整的兼容性，并与Filecoin主网的最新版本同步。该团队计划在10月末发布和分享这个实现方案。

这个带有最小可用功能的版本的功能包括信息池、状态管理器、链、钱包命令行功能、Prometheus指标和JSONRPC服务器。在Sigma Prime审计阶段存在的漏洞现在也已经修复。

### Venus

在去年10月主网上线前，IPFSForce团队负责了go-filecoin实现方案的维护和开发，将其重命名为[Venus](https://filecoin.io/blog/posts/welcome-venus-to-the-filecoin-mainnet/)项目。

在去年12月，首个可用的版本在Calibration网络上线运行，并与Filecoin的规格相兼容，成功与Lotus客户端实现互操作。首个Venus节点于2021年1月份在Filecoin主网上发布。

很快，分布式Filecoin存储池（Storage Pool）架构设计就完成了。分布式存储池套件的首个版本已经发布，而首个池则在Filecoin主网启动了。

在夏天，与Filecoin基金会联合发起的Filecoin存储提供者孵化项目（Storage Provider Incubation Program）旨在帮助中小规模的存储提供者加入这个生态。

现在，为了鼓励更多的存储提供者采用Venus，有以下的计划正在进行：为分布式存储池设计的分享奖励机制提议，一个更强大的存储池市场，以及Venus Master计划。

### Fuhon

2020年1月，[由Soramitsu提供的Filecoin C++实现方案](https://filecoin.io/blog/posts/announcing-filecoin-implementations-in-rust-and-c/) 正式公开。从那时候开始，Fuhon这个项目完成了节点开发（包含测试），现正进行节点API开发、市场整合、存储提供者整合以及节点互操作性测试。该团队在原生的cpp-actors开发上取得了明显的进展，不过actors还未进入生产就绪的阶段。

总的来说，Fuhon在去年有了显著的性能和可扩展性方面的提升，目前正处于最近的测试阶段。在Fuhon团队的帮助下，Cpp-libp2p被提升到生产就绪的级别。今年的主要目标则是让节点进入生产阶段，并吸吸引早期用户。

![](/uploads/snarks.webp)

### 证明提升 & zk-SNARKs世界网站

非互动零知识证明（Non-interactive zero-knowledge proofs，zk-SNARKs）是一种密码学技术，它能让证明者说服验证者自己知道某项信息，而无需揭露这项信息的内容。

[Filecoin的ZK Snarks行动](https://filecoin.io/blog/posts/filecoin-zk-snarks-zero-knowledge-but-a-lot-of-zero-knowledge/) 项目已持续两年时间，甚至早于主网上线。不过，过去12个月的进展有很多，包括了一个专门的[zk-SNARKs for the World世界网站](https://research.protocol.ai/sites/snarks/)网站，上面有更多的信息。

最近的升级包括了：让存储提供者在中断后恢复sealing封装操作的能力，部署分布式Window PoSt的能力，multicore-SDR（优化/快速sealing），整合新的Bls12-381实现方案，以及整体的性能提升。重新编写GPU tree也带来了巨大的性能提升（如将近50%的增速）。

总的来说，代码基础的重构是为了更好的模块化和可读性，并增加了ARM64和Apple M等架构的支持，以及增加了API用于证明聚合（proof aggregation）。zk-SNARK生成的效率提升了超过80%.

### 可验证延迟函数（VDF）

Protocol Labs、Ethereum基金会、Filecoin基金会、Electric Coin公司(ECC)和Supranational开展了一项协作计划，其目标是提供一个高效和符合成本效益的计算VDF(可验证延迟函数Verifiable Delay Function）。这涉及到快速评估（顺序计算）和证明（并行计算）。

这个计划的目标是开发优化的CPU处理器（评估）,GPU图形处理器（证明），甚至是专用集成电路ASIC（评估和证明）实现方案。目前正探索两种证明系统：由EDD发布的Halo2，以及微软研究院发布的Nova。

通用的ASIC证明和GPU优化有望改善通用证明（不止是VDF证明）的经济成本，在这些系统的改善幅度将达5-10倍。

Protocol Labs Cryptosat正协作探索一种“太空VDF”的可能性。一种高层级的想法是利用光速作为通信延迟中“无法突破的速度限制”，正可能让我们实现更好的A<sub>max</sub>值（攻击者的最大优势）(，这会比基于计算机速度的算法和硬件优化所能带来的最大理论提升都要强。

在这种模式中，延迟是根据可验证位置里的不同卫星之间的最小通讯时间算出来的。

![](/uploads/drand.webp)

### Drand

[Drand](https://drand.love/)是[Filecoin的领导人选举](https://filecoin.io/blog/posts/filecoin-features-distributed-randomness-leader-elections/)使用的分布式随机信标，它在今年早期[庆祝了其一周年](https://drand.love/blog/2021/08/10/drand-celebrates-one-year-as-a-randomness-service/)，并完成了100万轮无间断的服务。

Drand的背后是其合作伙伴网络[League of Entropy](https://blog.cloudflare.com/league-of-entropy/) (LoE)在支持。从Filecoin在去年10月启动开始，这个组织已经有了扩展，并增加了两名新成员：[ZenGo](http://zengo.com/)和[对抗量子账本（Quantum Resistant Ledger）](https://www.theqrl.org/) (QRL)。

LoE目前正在扩张，寻求新成员的加入。如果你准备好贡献到“让drand成为基础性的互联网协议”的使命，[请与他们取得联系](mailto:leagueofentropy@googlegroups.com)。

为了支持更广泛的应用，Drand正升级一些新的特性。时间锁加密（Time Lock Encryption）会有效地应对与最大可提取价值（Maximal Extractable Value）相关的威胁。这种威胁类似Ethereum上的MEV攻击或DeFI里的抢跑攻击（front running attacks）。

Drand很快会支持更高频率的随机信标，与现有的30秒信标并行运作。这个升级能让drand被更广泛的web3和web2用例利用。

### ConsensusLab & ConsensusDays

[ConsensusLab](https://research.protocol.ai/groups/consensuslab/)是最新的Protocol Labs研究小组，它在2021年7月成立，旨在成为推动可扩展去中心化共识机制认知的协作中心。它的当前目标是Filecoin下一代的共识机制。

它的启动活动[ConsensusDays 21](https://research.protocol.ai/sites/consensusday21/)包括了24场演讲，有共识和相关领域的前沿研究人员参与，这为未来的大规模协作奠定了基础。

### 产品用例

自从Filecoin启动后，开发者工具有了很大的进步，而很多新的用例也可以利用Filecoin提供的密码学验证、稳健和分布式存储的独特价值。

在去年，有30PB+的有价值数据被上传到Filecoin网络，其中有一些是世界上最有价值的数据，包括数百万个NFT，增长中的web3应用数据，科学和文化领域的重要数据集，以及治理提案等。

约有10,000名开发者正在IPFS和Filecoin技术栈上搭建应用，而很多用户也在使用这个产品。这年对Filecoin的采用和开发者社区的成长来说实在意义非凡。Filecoin的第2年应该能看到更为激动人心的开发活动。

![](/uploads/nft-storage.webp)

#### NFT.Storage

[NFT.Storage](https://nft.storage/) [在2021年4月启动](https://filecoin.io/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts/)，它以免费的简单服务提供了链下NFT元数据存储功能。上传到NFT.Storage的HTTP endpoint的数据在Filecoin上持久化了，并在公开的IPFS网络可以访问。

这个服务也为用户提供了妥当格式的IPFS统一资源标识符（URI），用于在其智能合约引用自己的元数据，这是重要的步骤——这才能确保自己的NFT真的永久性地引用到目标数据上。

自从发布开始，该产品得到了飞速的发展，已经有了5500名用户，以及600万个NFT被存储到Filecoin上。这些NFT有一些是来自这个领域里的最大规模的市场和铸造服务，包括了OpenSea、OneOf、 Makersplace、Jigstack和Curio等。

![](/uploads/web3-storage.webp)

#### Web3.Storage

[Web3.Storage](https://web3.storage) [在2021年8月启动](https://filecoin.io/blog/posts/introducing-web3-storage/)，它为开发者提供了简单的界面，用于从IPFS和Filecoin上存取数据。这是一个免费的服务，它提供了熟悉的存储接口（包括JS客户端库和HTTP API），是开发者上传数据到Filecoin的最简单方式。它在背后承担了与去中心化存储直接互动的复杂性。

从启动开始，Web3.Storage项目快速增长到2000多名用户和500万笔上传。这样，新进入web3领域的开发者正亲身体验内容寻址和无需信任的存储方式，是如何带来更轻量的后端基础设施、更去中心化结构和更小的用户锁定效应，而有经验的web3开发者则可以快速将IPFS和Filecoin与其现有生产级别的dapps结合。

#### Textile

Textile公司一直推出各种工具，让开发者更快更容易在IPFS和Filecoin上搭建去中心化应用。它在Ethereum、[Polygon](https://polygon.technology/)和[NEAR](https://near.org/)上发起了无需许可的[Filecoin存储桥](https://eth.storage/docs/)。它还推出了一个Filecoin交易提议拍卖试验项目（Deal Auctions pilot），让客户高效地向网络上传输大量的数据集。这个项目当前每天达到2TiB的能力，每周增长\~25%．从10月1日起，这个实验项目的活跃Filecoin交易提议达到了205TB.

![](/uploads/estuary-1.webp)

### Estuary

在3月，[Estuary](https://estuary.tech)发起，从那时候开始已[成长为一个可靠的可扩展接入Filecoin网络解决方案](https://filecoin.io/blog/posts/taking-a-look-at-estuary/)。 Estuary节点有自己的libp2p技术栈和完整的IPFS及Filecoin特性，能帮助任何人达成多种Filecoin存储交易提议。Estuary已经成功达成了23,000笔存储交易提议，存储了超过150 TiB大小的文件，与Filecoin生态的很多公司和组织合作过，并与全球100多个存储提供者进行了数据存储。

#### Web2用例

##### 互联网存档

[互联网存档项目（Internet Archive）](https://archive.org/)是一个数字博物馆，其使命是提供对所有知识的访问。在2021年4月，[互联网存档项目宣布与Protocol Labs合作](https://blog.archive.org/2021/04/01/filecoin-foundation-grants-50000-fil-to-the-internet-archive/) ，将其数字资源传送到这个去中心化网络里。在7月，基金会开始了最初的概念验证项目，。将2016年的web存档数据集（约200TiB大小）上传到Filecoin。

现在，这些数据集已经成功上传到网络上。该项目计划在年底前完成，还有更多的互联网存档数据集等待上传到Filecoin上。

#### Slate项目

Slate在2020年9月发起，最初是一个情绪收集板（moodboarding）网站，后来经历了几次转型，成为了一个一站式的平台，用于保存用户的书签、文件，并与这些内容进行互动。现有的一些存储选项虽然可以增强用户的记忆，但却没用心改善存取记录的能力。

Slate将自动化保存、功能强大的查找功能和快速的组织能力结合起来，创造了一个帮助用户更好使用其数据的产品。

Slate的用户数已经达到了14000名，存储的文件已经达到了81000个，这些数字还在增长中。它为用户提供了一个消费级和相仿于web2的体验，让用户使用IPFS和Filecoin存储并享受相关的好处。

## 生态系统

分布式网络的长期增长只能通过培育和赋能广泛的利益相关者来达成，需要将他们与IPFS、Filecoin、libp2p和其他项目的成功联系起来。与主要的伙伴的互动，对展示新用例、连接到其他web3生态和web2用户都是非常重要的。

新的开发者通过黑客松、教育和支持进入Filecoin生态，而他们也会通过资助计划和加速器创建新项目和业务。增长资本和支持也能帮助公司加速其增长。

在整个生态的支持下，Web3存储提供者可以在全球范围成长、繁荣和扩展。

![](/uploads/hackathons.webp)

### 黑客松

自从其在7月举办的首次[HackFS](https://filecoin.io/blog/posts/hackfs-what-s-next/)活动后，[Filecoin和IPFS黑客松项目](https://fil.org/events)触及和链接了全球的１万多名开发者和企业家。

现在，团队每月参与5个黑客松活动，这些活动为期数天到数周不等，也经常与整个Filecoin生态的协作者合作。

通过专门的导师支持、一系列高质量教育课程以及刺激的挑战奖项，开发者和企业家被成功鼓舞和赋能，努力解决显著的问题，带来创新的应用，并重塑未来的网络让其更去中心化、稳健和安全。

过去活动的参与者已经成功筹集到数百万美元的投资，他们在黑客松上提交的题目也摇身一变，成为下一代的web3重大项目。我们欢迎下一代的建造者参加未来的黑客松活动。请点击[hackathons.filecoin.io](http://hackathons.filecoin.io)以了解更多，并注册到我们的邮件列表里。

### Web3协作

Filecoin持续在成长，作为web3领域实际上的存储层被应用。开发者持续在这个协议提供的可能性上探索和拓展机会。

这几个月在Web3社区达成的合作关系都很令人高兴。这些合作是多角度的，包括了为开发者提供的联合资助计划、Filecoin存储桥、联合黑客松和投资等。

通过智能合约系统，Filecoin现在已经与Ethereum、[Polygon](https://filecoin.io/blog/posts/announcing-filecoin-polygon-bridge-and-free-storage-for-developers/)、 [NEAR](https://filecoin.io/blog/posts/filecoin-launches-collaboration-with-near-to-accelerate-the-growth-of-the-web3-stack/)、[Hedera Hashgraph](https://filecoin.io/blog/posts/filecoin-and-hedera-hashgraph-announce-grant-program-to-propel-web3-interoperability/)、[Flow](https://filecoin.io/blog/posts/filecoin-launches-collaboration-with-dapper-labs-to-propel-the-future-of-the-nft-and-gaming-metaverse/)等项目实现了整合，还有更多的项目正在路上。这些生态的开发者已经发现了Filecoin在数据存储方面的易用性。

区块链预言机Chainlink是一个关键的协作伙伴，在5月份实现了[与Filecoin的整合](https://filecoin.io/blog/posts/filecoin-and-chainlink-integration/)。 [Chainlink最近发起了一个广泛的联合赞助计划](https://blog.chain.link/announcing-the-chainlink-and-filecoin-joint-grant-program/)以催生新应用的开发，如数据赏金和存储提供者保险等。其他激动人心的视频协作成果包括[Livepeer with a co-mining initiative](https://filecoin.io/blog/posts/livepeer-x-filecoin-co-mining-pilot/)和[Videocoin on video NFTS](https://filecoin.io/blog/posts/videocoin-and-filecoin-to-power-the-video-nft-market/)。

在2021年9月，Filecoin作为web3技术栈的基础和关键驱动被加入到[Web3索引网站](https://web3index.org/)，而Filecoin流动性也在持续进步。

### 生态的新初创企业

在去年，约有50家初创企业从我们的合作伙伴提供的加速器项目毕业。它们的创始人有很多都在Filecoin生态活动的期间参与了黑客松活动或得到了赞助。在我们的生态中实在有太多令人惊叹的创始人，Filecoin很高兴支持他们。

在2021年2月，Filecoin Launchpad在他们的演示日接纳了来自全球11个国家的13个团队，这些团队来自一个为期12周的沉浸式加速器项目，旨在将IPFS、Filecoin和Ethereum社区连接到一起。

[第一届活动的团队所给出的展示](https://www.youtube.com/playlist?list=PL_0VrY55uV19AJ9uqZODM16cL8oj3uAO-),以及参与了第二届活动 的20个团队（来自13个国家）的展示可以在线观看。Tachyon 6冬季营目前正接受申请。

[Filecoin与LongHash Ventures合作](https://filecoin.io/blog/posts/filecoin-frontier-accelerator-launched-by-longhash-ventures/)启动了[Filecoin Frontier加速器](https://longhash.vc/accelerator/)。你可以阅读[这里](https://longhash.vc/accelerator/)了解细节，并观看4月的首个演示日里展示的 [11个令人赞叹的团队演示](https://www.youtube.com/watch?v=-lwttk-HsoQ)。

Filecoin也在[与Outlier Ventures合作](https://outlierventures.io/outlier-ventures-launches-filecoin-base-camp/)启动[Filecoin Base Camp加速器](https://outlierventures.io/base-camp/filecoin-base-camp/)，以催化新的生态项目的增长——这些项目应在建设能够推动web3采用的下一代应用程序。

Techstars Filecoin加速器是一项激动人心的协作，旨在推动新的初创企业成长。现在，正在建设web3未来的公司可以申请加入该计划。

### 存储提供者

从一开始，Filecoin网络就以远超于最初预计的速率增加存储空间，很快在4月达到了最大的 [基准线（baseline）](https://medium.com/block-science/sustainability-goal-achieved-filecoin-network-crosses-baseline-target-cec13a3ed8f) 铸造水平（minting level）。从那开始，网络的能力日益强大起来。

在7月，Filecoin社区同意批准了一个新的 [FIP提议](https://github.com/filecoin-project/FIPs/issues/127)，以将以往局限性较大的术语改成更合适的“存储提供者”。在下一阶段，将会有更多的Filecoin存储用户加入，这样的重构能够帮助向企业客户强调这个网络的实用性和价值。

自从网络启动开始，全球上线的存储提供者数量有了惊人的增长。今天，有3,300个Filecoin系统在运行，每天还新增5到10个。

现在每天新增的容量达到了60PiB，有大量空间可供存储有用数据。现在，鉴于Filecoin网络上的可用容量这么多，在它上面存储数据的成本几乎是免费的。

在6月，存储提供者社区一起组建了一个新的[北美及亚洲存储提供者工作组](https://github.com/filecoin-project/community/tree/master/Storage%20Provider%20Working%20Group)。这个工作组的首项工作就是支持社区创建更好的文档和工具的努力。

在8月，我们创建了一个新的Filecoin [赏金计划](https://github.com/filecoin-project/community/tree/master/storage-provider-bounty-program)用于支持该项努力。从那起，外部的专家一直在参与带来最佳实践标准。我们持续欢迎在[公告板](https://github.com/filecoin-project/community/projects)上发表新想法和需求。

### 应用研究组(ARG)

在2月，应用研究组（The Application Research Group） (ARG) 开始使用Filecoin、IPFS、libp2p和IPLD进行原型实验。现在，应用研究组已经创建了一个[开源框架](https://github.com/application-research/origin)，主要以开箱即用的方式建造与IPFS兼容的网站，以及与知名的生态合作伙伴（如Textile）推出的开发者案例 ，还有一些高保真的原型（如离线的Filecoin+Ledger钱包。

在3月，应用研究组创建了[Estuary](https://estuary.tech)，旨在帮助改善[达成Filecoin存储交易](https://filecoin.io/blog/posts/taking-a-look-at-estuary/)的体验。在不久的将来，时间范围内的网络运营者可能也会运行[Estuary节点](https://github.com/application-research/estuary)，并最大限度为更多有意义的数据达成Filecoin存储交易提议。

![](/uploads/ahs.webp)

### 在亚洲的扩展

亚洲是Filecoin/IPFS生态的重要扩展领域，在主网上线后的第一年，该地区的几个重要国家就已经带来了持续的增长。今年也出现了几个重要的项目是专注于该地区的。

亚洲黑客松赛季（Asia Hackathon Season）是一个为期数月的黑客松系列活动，旨在发现、加速和突出展示亚洲的初创团队和开发者在Filecoin和IPFS开发工作的创新成果。Filecoin与Wanxiang、Polygon、Dapper Labs和其他主要的地区协作者一起举办了2021年首个赛季。这个项目仍在进行，已经看到了该地区的贡献者提交了很多激动人心的作品。

为了扩展Filecoin在韩国和日本社区的影响力，在8月份，这两个国家里都开展了本地化语言推广和社区建设活动，还有相关的见面会以让这些社区了解Filecoin的更多知识。

另一个值得注意的计划则是存储提供者的地理位置分散到其他国家，并在亚洲范围内建设战略性的关系，如[NFTStar](https://www.prnewswire.com/news-releases/the9-limited-polygon-and-protocol-labs-announced-ecosystem-collaboration-on-nftstar-and-gamefi-play-to-earn-projects-301383501.html)等。
![](/uploads/brave-1.webp)

### 浏览器

将旧的web网络带到web3的转型中是一个艰巨的任务，不过浏览器产品正带来相关进展。

2021年的开始也带来了[Brave浏览器在其桌面产品中实现了运行一个完整的IPFS节点的支持](https://brave.com/brave-integrates-ipfs/) ，这是首次有主流的浏览器这么做。在接下来的春天,Brave浏览器实现了对安卓的支持。Brave浏览器正庆祝其超过3000万名月活跃用户，而在原生钱包实现对Filecoin的支持正在开展中。

同样在春天，[Opera在其iOS浏览器实现了IPFS的支持](https://blog.ipfs.tech/2021-02-08-opera-ios-and-ipfs/)——Opera Touch———这完成了它们在其顶级浏览器产品线的IPFS寻址支持。在Chromium浏览器最终实现IPFS支持仍是一个关键目标，[Igalia正协商在代码基础里引入重大的重构](https://blog.ipfs.tech/2021-01-15-ipfs-and-igalia-collaborate-on-dweb-in-browsers/)，以让其更容易添加非HTTP类协议。

在移动端，[Puma Browser](https://www.pumabrowser.com/)对IPFS的支持正在路上，而[Berty](https://berty.tech/)将要发布一个libp2p transport工具，主要为近场通讯（如MDNS和蓝牙LE）服务，这将会解锁IPFS在本地和个人协作场景的应用潜力——这是web应用的一个重要新角度。

夏天的结束伴随了[Browsers 3000](https://fil.org/events/#past-events/)活动，这是一个为期6周的黑客松，它将web3领域正为web平台带来改变的人们带到了一起。 [Browsers 3000 summit](https://www.youtube.com/playlist?list=PLuhRWgmPaHtR2MDeMaiUcsBmBqpIBqFEP) 活动上，有13个项目分享了它们对web的愿景，大奖得主为[NetSepio](https://devpost.com/software/netsepio)，这是一个分布式的网络恶意软件、钓鱼软件和其他危险因素的汇报和通知系统。

## 展望FilecoinOrbit的第二年

得益于社区的贡献，Filecoin网络在头一年就取得了重大的进步。

尽管如此，未来还有很多工作需要进行，力图让Filecoin成为存储提供者、用户、开发者、企业家和Web3远见者眼中最好的存储网络。这样，我们会一起创造新的分布式系统，用于存储我们最有价值的数字资产、敏感数据和无法替代的知识。

![#filecoinorbit](/uploads/filecoinorbit.webp "Filecoin一周年庆祝！")
