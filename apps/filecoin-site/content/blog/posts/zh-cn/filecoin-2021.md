---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-01-13T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 2021年对Filecoin网络及其社区来说都是重要的一年！
image:
  alt: ""
  url: /uploads/fil-blog-2022-01-05-review-v3.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2022-01-05-review-v3.webp
title: Filecoin 2021年回顾：指数级增长的一年
_template: blog_detail_ch
---

在全球3600多名存储提供者的帮助下，Filecoin网络的存储容量超过了14+ EiB. 7000多人的Filecoin开发者也给社区带来了400多个新应用。这仅仅是主网上线后一年出头的时间而已！

![](/uploads/2021-in-review-stats.webp)

![](/uploads/image-1.webp)

![](/uploads/image-2.webp)

不过，数字并不能反映全貌。这一年的非凡增长也给Filecoin生态系统带来了重要的进展，其中一些重要的里程碑如下：

## 研究与开发

在去年，Filecoin协议和网络有了很大的进展，这包括了五次主网升级的协调和执行，12次的[Filecoin改进提议](https://github.com/filecoin-project/FIPs) (FIPs)的整合，以及将两个额外的Filecoin协议实施方案(Venus and Forest)带到了主网，与Lotus客户端并行存在。其中的亮点包括了时空证明（Proofs of SpaceTime）的链下验证，为聚合证明（proof aggregations）提供的SnarkPack，还包含承诺容量扇区（Committed Capacity sectors）的简易升级机制，以容纳真实世界的数据（预计2月份会在主网上线！）。

从主网发布后，Filecoin进行了重要的升级，改善了存储提供者稳健性、易用性、链容量和带宽，将每天的新增存储容量速率翻了一倍多！

## Filecoin实施方案

### Lotus

在主网发布后，作为Filecoin协议的参考实施方案以及主要的市场实施方案之一，Lotus发布了26个更新版本，支持了11次网络升级，并整合了18个Filecoin网络改进提议（FIPs）。2021年的新特性包括[市场运行时（runtime）架构（将存储提供者与市场节点分开）](https://lotus.filecoin.io/docs/storage-providers/split-markets-miners/)以及v1版本的API，对封装调度器（sealing scheduler）的改进，优化封装的流水线，以及更快/更好地达成存储和取回的交易提议（含有用户可配置的资源控制）。得益于这些改进以及其他努力，Lotus正为存储提供者奉上一个强大、易用的基础设施，让它们往Filecoin网络投入更多存储容量，为用户提供更稳健的存储服务，从而持续增加其能力。 可以查看 [lotus版本发布](https://github.com/filecoin-project/lotus/releases)的亮点了解更多信息！

## 证明机制升级和zk-SNARKs

非交互式零知识证明(zk-SNARKs)是一种密码学技术，让证明者在不提供信息原文的情况下向验证者证明自己知道这个信息。

[Filecoin的zk-SNARKs计划（zk-SNARKs initiative for Filecoin）](https://filecoin.io/blog/posts/filecoin-zk-snarks-zero-knowledge-but-a-lot-of-zero-knowledge/)项目已经发展了两年，甚至早于Filecoin的主网发布，不过很多的进展是在过去12个月里出现的，这包括了专门的信息发布网站[zk-SNARKs for the World](https://research.protocol.ai/sites/snarks/)。

最近的升级还包括了让存储提供者在封装（sealing）被中断后恢复的能力，以及部署分布式Window PoSt和multicore-SDR的能力（优化/快速封存），Bls12-381实施方案的整合，以及整体的性能提升。重写GPU树的工作带来了重大的性能提升（如将近50%的加速）。

整体来说，代码库已为更好的模块性和可读性重构，并增加了对ARM64和Apple M等架构的支持，还为聚合证明增加了API. zk-SNARK的生成已优化了80%以上。

## Hyperdrive升级

2021年6月，Filecoin v13 ‘HyperDrive’ 网络升级解锁了10-25倍的新增存储容量，让Filecoin成为首个部署巨量链带宽升级的L1区块链，这仅仅是主网发布后的8个月而已。从那之后，每日的新增存储容量翻倍到60 PiB/日以上，让其通往2021年末超过20 EiB的快车道。

这个升级得益于Filecoin证明机制的创新。在主网发布早前，因为大量的存储提供者需求，Filecoin网络就已经工作在满载状态，让Filecoin成为最大的SNARK证明系统（处于生产状态中的），每日可生成并验证超过500万次SNARKs证明。

从2020年12月到2021年4月，CryptoNetLab和CyptoComputeLab设计并实施了[SnarkPack](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)，这是通过聚合来扩展SNARK证明的新型机制，极大地提升了可扩展性，并减轻了网络拥堵的情况。SnarkPack在[FIP13改进提议](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)里得到整合，为Filecoin网络带来了10-25倍的整体链性能提升。

## 数据检索市场（Retrieval Markets）

数据检索市场（Retrieval Markets）是在Filecoin网络上最耀眼的平台之一。它以完全去中心化的方式提供类似于CDN（内容分发网络）的体验，用户可以加入并根据地理位置为终端用户提供带宽。

这一年以一场深入的研究工作坊为开端，旨在探索数据读取市场的潜力和机遇。超过20个研究人员在线上中见面，讨论和设计新型的数据分发计量（Data Delivery Metering）、Graph Forming,、Opportunistic Deployments以及数据检索市场加密经济学（Retrieval Market CryptoEconomics）。

在4月，社区举办了首个数据检索市场开发者峰会（Retrieval Market Builders Summit），Lotus、PegaSys、Myel、Digital Mob、Textile、Chainsafe、Protocol Labs、IPFS、FilSwan、ResNetLab和Estuary等团队都有参加。现在，有几个团队正搭建各自的数据检索市场解决方案，你可以在每隔两周查看[Retrieval Markets演示日](https://docs.google.com/document/d/1IrNbBm2_P79Xi2fXFj9YUfQ0PjWjreGdPYFjFntD1QM/edit#heading=h.akao8aspby4f)来了解其进展。

## NFT.Storage

在2021年4月上线的[NFT.Storage](https://nft.storage/) [launched in April 2021](https://filecoin.io/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts/)为链下存储NFT元数据及资源提供了免费的简易服务。通过HTTP服务上传到NFT.Storage的数据在Filecoin上存储并对公开的IPFS网络可用。该服务可免费试用，其最终愿景是去中心化方式提供永续的NFT数据，将此作为公益服务。

该服务还为用户提供标准化格式的IPFS URIs链接，以让其在智能合约中引用元数据。这是关键的一步，可以确保他们的NFT真的可以永久引用底层的对应数据。它使用了使用形如 “ipfs://”格式的索引，而不是“http://”，后者毕竟是中心化的，如果服务关闭、域名解析服务中断或数据位置改变都能引起故障。

自从发布后，这个产品很快成长起来，现在已经为16000多名用户上传了超过2100万份数据。这些NFTs有来自一些大型市场和铸造服务提供商的，如OpenSea、OneOf、NFTPort、 Makersplace、Jigstack和Curio等。

现在有很多新特性正在开发，包括更快的HTTP终端服务用于访问IPFS上存储的NFT数据，为1万个NFT空投设计的大型目录上传app，为市场和SDK开发库设计的授权验证机制以让终端用户直接上传到NFT.Storage。今年稍后的时间里，团队希望利用去中心化技术的突破（如智能合约和DAO），开拓产品的视野，以去中心化的方式永久存储NFT数据。团队也正在研究 niftysave，这个项目希望为所有的NFT建立索引并将其元数据和资源存储到Filecoin上，以确保NFT数据不会丢失。

## Filecoin Green

在2021年，[Filecoin Green](https://filecoin.io/blog/posts/filecoin-green/)这个崭新项目所带来的重大进展，为Filecoin成为世界上最具有可验证生态持续性的区块链贡献了新力量！

该团队与存储提供者合作，希望更好了解网络上的能源消耗情况，并开发了开源的[能源使用模型](https://github.com/redransil/filecoin-energy-estimation)，发布了[filecoin.energy](https://filecoin.energy/)仪表盘。这个工具让任何人都可以轻松预计网络整体或特定存储提供者的能源使用情况。

该团队也开发了为存储提供者匹配可再生能源（如风能和太阳能）的能力。Filecoin Green与Filrep团队合作，[将能源购买情况整合](https://filrep.io/?columns=energy&order=desc&sortBy=energy)到信誉系统中，并用户Energy Web foundation基金会合作在其区块链上记录可再生能源购买情况 。这让存储客户不仅能看到其选择的存储提供者的能源消耗情况，还能验证为了存储这些文件所购买的可再生能源（精确到单个太阳能或风能发电站）！

随着这些努力的进展，Filecoin Green已被社区认为是加密生态里的可验证持续性领导者。[Coindesk报道了](https://www.coindesk.com/tech/2021/12/02/filecoin-might-have-a-way-for-bitcoin-to-fight-its-energy-critics-if-miners-use-it/)这些策略可能让Filecoin和其他区块链变得更“绿色”。Energy Web foundation基金会的主管[发推文称](https://twitter.com/ja_morris/status/1436001899124166658?s=20) Filecoin是加密领域可持续性的领头羊。

这个网络分享了其[可持续性策略](https://medium.com/@filecoingreen/introducing-the-filecoin-energy-dashboard-46d2cbe14d39)和[验证工作](https://medium.com/energy-web-insights/protocol-labs-and-energy-web-complete-first-showcase-of-an-open-source-solution-to-decarbonize-1a8c22ac02f5)，以及在 #fil-green频道建立了存储提供者和开发者社区。

## FVM虚拟机

Filecoin虚拟机([FVM](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/)) 正为Filecoin网络带来智能合约。这个重要的技术进展会让Filecoin上建立原生的去信任可编程存储成为现实。作为一个[基于WASM的多语言支持虚拟机](https://github.com/filecoin-project/fvm-project/blob/main/01-architecture.md)，它可以在原生的Filecoin运行时（Runtime）上运行原生的[EVM智能合约](https://github.com/filecoin-project/fvm-project/blob/main/04-evm-mapping.md)，所需的适配工作非常少，这是得益于EVM外部运行时的支持。

FVM虚拟机为这个网络带来了无限可能。最值得激动的应用包括：数据DAOs、分布式计算、另类存储市场、永续及众筹存储，L2解决方案\\跨连桥、抵押贷款项目等。如果你对这些挑战有兴趣，欢迎联系！

FVM虚拟机的引入是渐进的过程。Protocol Labs的FVM团队正完成Milestone 0里程碑，它是内部测试和实验阶段，希望在主网的Lotus节点上完成金丝雀发布，在FVM上运行内建的actors角色.

下一步的Milestone 1里程碑会正式将主网的执行层转移到FVM虚拟机上。这预期在2022年一季度末完成，其范围会局限于内建的actors角色。Milestone 2里程碑则会引入用户定义合约的能力，支持原生的actors角色和EVM智能合约，这预期在2022年第二季度末完成。

接下来的里程碑将会关注将Filecoin功能渐进地从系统区移植到用户区，以提供更大的定制性、创新性和易用编程性。 _因为很多因素的限制，时间表可能会改变。_

## 可验证延迟函数（VDF）

Protocol Labs、以太坊基金会、Filecoin基金会、Electric Coin公司(ECC)和Supranational发起的协作旨在生成高效及具备成本效益的计算可验证延迟函数（VDF，Verifiable Delay Function）。这将包括开发快速求值（顺序计算）及证明（平行计算）。

项目的目标是开发优化的CPU（求值）、GPU（证明），最终实现专用集成电路（ASIC）的求值和证明实施方案。目前正探索两种证明机制：ECC发布的Halo2，以及微软研究发布的Nova.

通用性的证明专用集成电路和GPU优化预计会改善通用证明的经济成本（不只是VDF证明），效率提升可达5到10倍。

Protocol Labs和Cryptosat也在共同探索空间VDF的可能性。其中一个顶层的想法是将光速视为通讯延迟的“硬性速度上限”，这可能让Protocol Labs有机会实现比算法和硬件优化的理论上限更强的Amax（攻击者的最大优势），毕竟算法和硬件优化是基于计算能力的。

在这个模式下，延迟是基于可验证位置里的卫星之间的最短通讯时间。

## 分布式随机信标（Drand）

[Drand](https://drand.love/)是一个分布式随机信标，在[Filecoin的领导者选举](https://filecoin.io/blog/posts/filecoin-features-distributed-randomness-leader-elections/)被使用。它在今年早期[庆祝了一周年](https://drand.love/blog/2021/08/10/drand-celebrates-one-year-as-a-randomness-service/)，完成了100多万轮的无中断服务。

Drand是由网络中的独立伙伴 [League of Entropy](https://blog.cloudflare.com/league-of-entropy/) (LoE联盟)支持的，在Filecoin主网上线后进行了拓展，并新增了两个成员。

LoE联盟目前正在扩展，并寻找新成员加入使命。

Drand也在升级新特性以服务更多的应用。Drand会部分签名的“unchained”随机生成方法，这让开发者能搭建支持时间锁加密（Time Lock Encryption）的客户端，并能减轻与MEV（以太坊上的）及抢跑攻击（front running attacks）相关的攻击压力。

Drand将很快提供高频随机信标，与现有30秒随机信标并行运作。这将让Drand被更广泛的Web2和Web3用例采用。

## Web3.Storage

[Web3.Storage](https://web3.storage/) [在2021年8月发布](https://filecoin.io/blog/posts/introducing-web3-storage/)，旨在让开发者更容易将IPFS和Filecoin整合到自己的项目里。他们不需要运行任何基础设施，并可以使用简单的接口（包括一个JS客户端库及HTTP API接口）。

自从发布后，Web3.Storage快速增长，已有超过5000名用户和900万次上传。因此，Web3领域的新开发者正亲身体验内容寻址和去信任存储提供的轻量后端基础设施、去中心化和更少的锁定效应，同时有经验的Web3开发者可以快速将IPFS和Filecoin整合到其生产状态的Dapps里。

这个产品的雄心是解锁应用、用户和数据互动的新范式和新模式，同时持续提供直观的用户体验。因此，保持关注吧！

## Estuary

[Estuary](https://estuary.tech/)的工作从2021年3月启动，已成为如今参与Filecoin网络的[可靠及可扩展的方案](https://filecoin.io/blog/posts/taking-a-look-at-estuary/)。Estuary节点有自己的libp2p栈及完整的IPFS和Filecoin特性，为所有人提供达成Filecoin存储提议的多种方式。

Estuary已经成功达成超过86,750笔存储提议，注册了5亿多个对象，存储了784.22 TiB容量的文件，与Filecoin生态系统的很多公司和组织合作，并在全球超过143个存储提供者存储数据。

## Textile

Textile公司正推出工具，让开发者快速简单地在IPFS和Filecoin上搭建去中心化应用。它在以太坊、[Polygon](https://polygon.technology/)和[NEAR](https://near.org/)上发布了无需许可的[Filecoin存储桥](https://eth.storage/docs/)。一项让用户往网络快速上传大量数据集的Filecoin提议拍卖试验项目（Deal Auctions pilot）目前实现了每日2TiB的能力，并每周增长 \~25%.　在2021年10月1日，该试验项目达成的活跃Filecoin存储提议达到了205TB。

## 黑客松

在2021年，[Filecoin和IPFS黑客松项目](https://fil.org/events/)触达联结了世界范围内11,000+的开发者和企业家。在过去12个月里有5000多人在Filecoin和IPFS黑客松里搭建了项目。

Filecoin生态参加了30多场活动，包括2021年早期的[HackFS](https://filecoin.io/blog/posts/hackfs-what-s-next/)和[Scaling Ethereum](https://ethglobal.medium.com/scaling-ethereum-a-focus-on-the-future-36d635d9161b)，以及由[ETHGlobal](https://ethglobal.com/)和[Chainlink](https://chain.link/hackathon)赞助的其他项目（旨在让开发者和企业家来搭建应用）。黑客松项目还尝试了多场活动的Filecoin亚洲黑客松赛季并参与了Polygon BUIDL IT ，以及几场由学生举办的活动、这些活动有很多都带来了几百名注册参赛者和项目。

Filecoin和IPFS希望持续帮助联结、搭建和催化有希望的项目增长，这是通过不断增长的资助（Grant）和加速器项目实现的。其中一些惊叹的项目获得了数百万美元的资金（资助或种子轮）。以下是一些最佳案例：

1. Arlequin 是一个完全由社区驱动的元宇宙，带有画画赚取回报功能。用户可以收集可爱的3D动物（Arlee），它们是Flow区块链支撑的NFT，并使用IPFS（通过web3.storage）来存储其视觉特性。
2. [Geo Web](https://www.geoweb.network/) 一个开源协议及产权机制的集合，用于将数字内容锚定到物理地块。它会将数字媒体、游戏、数据、商业和NFT带到物理世界，作为共享的体验（而非孤岛式的应用）
3. img8 是一个去中心化的图像处理及优化协议，专门为去中心化存储网络设计。它为Web3建造者和设计者赋能，让他们方便存取图像，安全性、速度和图像分辨率都有所提升。

我们很快会发布所有的黑客松得奖项目列表，请保持关注！

团队每月会举办5个或以上的黑客松活动，越来越关注持续数周的活动（那些有利于教育开发者并将其引入Web3领域的活动），经常与Filecoin生态社区的协作者展开合作。

可以访问[hackathons.filecoin.io](http://hackathons.filecoin.io/) 了解2022年的更多建造机会，记得注册邮件列表。

## Web3合作伙伴

Filecoin持续增长，成为了Web3领域事实上的存储层，开发者持续探索和扩展这个协议所提供的机会。。

最近几个月，与Web3社区的协作非常激动人心。这些协作是多面的，包括了联合开发者赞助计划、Filecoin存储桥及投资等。

通过智能合约系统，Filecoin正与Ethereum、[Polygon](https://filecoin.io/blog/posts/announcing-filecoin-polygon-bridge-and-free-storage-for-developers/)、[NEAR](https://filecoin.io/blog/posts/filecoin-launches-collaboration-with-near-to-accelerate-the-growth-of-the-web3-stack/)、[Hedera Hashgraph](https://filecoin.io/blog/posts/filecoin-and-hedera-hashgraph-announce-grant-program-to-propel-web3-interoperability/)和[Flow](https://filecoin.io/blog/posts/filecoin-launches-collaboration-with-dapper-labs-to-propel-the-future-of-the-nft-and-gaming-metaverse/)等项目整合，后续还有更多的项目。这些生态的开发者已经发现Filecoin在数据存储上的易用性。

区块链预言机服务Chainlink是一个关键的协作者，在5月份[与Filecoin进行了整合](https://filecoin.io/blog/posts/filecoin-and-chainlink-integration/)。这个网络最近[发布了](https://blog.chain.link/announcing-the-chainlink-and-filecoin-joint-grant-program/)一个深度的联合资助计划，以促进新应用的开发（如数据赏金和存储提供者保险）。

其他值得兴奋的合作者包括：Livepeer的联合存储提供者[行动](https://filecoin.io/blog/posts/livepeer-x-filecoin-co-mining-pilot/)和Videocoin的[视频NFTs](https://filecoin.io/blog/posts/videocoin-and-filecoin-to-power-the-video-nft-market/).

得益于这些持续的协作努力，作为Web3栈的基础和关键推动力，Filecoin在2021年9月被添加到[数据经济索引（Data Economy Index）](https://medium.com/indexcoop/index-cooperative-launches-data-economy-index-data-in-collaboration-with-ren-fe59312504e7) (使用RenFIL代表)。

## Filecoin生态的新初创公司

端对端的创建者通道（Builders Funnel）正快速扩张：Filecoin生态与全球创建者合作，送达从黑客松到扩展阶段的无缝体验。

通过将综合性的黑客松和资助项目与快速扩展的加速器项目（Techstars, Tachyon, DeFi Alliance, Outlier Ventures）等结合，初创公司正得到强大动能。

在去年，大约60家初创团队从合作伙伴加速器项目毕业，其中很多的创始人在Filecoin黑客松中成长，或在Builders Funnel里收到了专门的赞助金。生态系统中有大量的杰出创始人，而Filecoin很高兴在他们扩展的过程中提供资金和资源支持。

在2021年2月，Filecoin Launchpad举办了演示日。来自11个国家的13支团队参加了这个为期12周的沉浸式加速器项目，旨在联结IPFS、Filecoin和以太坊社区。[点击此处查看第一营的活动](https://www.youtube.com/playlist?list=PL_0VrY55uV19AJ9uqZODM16cL8oj3uAO-)，第二营的活动则请查看此处。第二营有来自13个国家的20支团队参加。Tachyon 6冬季营正在接受。

[Filecoin与LongHash Ventures](https://filecoin.io/blog/posts/filecoin-frontier-accelerator-launched-by-longhash-ventures/)合作发起[Filecoin Frontier加速器](https://longhash.vc/accelerator/)。你可以[在这里了解](https://longhash.vc/accelerator/)并观看[4月份首个演示日的11支优秀团队的展示](https://www.youtube.com/watch?v=-lwttk-HsoQ)。

Filecoin [与Outlier Ventures](https://outlierventures.io/outlier-ventures-launches-filecoin-base-camp/)合作发起[Filecoin Base Camp 加速器](https://outlierventures.io/base-camp/filecoin-base-camp/)，以催化新型的生态社区项目增长，这些项目是有望推动Web3采用的下一代应用建造者。

2022年早期将会目睹Techstars Filecoin加速器，[DeFi联盟](https://www.defialliance.co/)以及与Tachyon的重大合作。这些项目都在完成其应用。如果你是个建造者：联系funding@protocol.ai，马上加入来搭建Web3的未来，或分享你的愿景。

## 存储提供者

从一开始，Filecoin网络投入的存储容量就比原先预计的速率更快，在4月份很快达到了最大的[基线](https://medium.com/block-science/sustainability-goal-achieved-filecoin-network-crosses-baseline-target-cec13a3ed8f)铸造水平。从那后，网络越来越强大了。

在2021年7月，Filecoin社区同意了一个新的[FIP改进提议](https://github.com/filecoin-project/FIPs/issues/127) 来将存储服务提供者的术语固定下来，以取代在原来的狭义称谓。在引入更多Filecoin存储用户的过程中，这样的术语重构有助于强调网络对企业用户的用途和价值。

从这个术语被采纳后，世界范围内有大量的存储提供者增长。现在，有3500多套Filecoin系统在运行，每日有5到10套新系统在上线。

随着每日新增30-60 PiB的容量，有大量的空间可用于存储有用数据。现在可用的空间太多了，在Filecoin上存储数据的成本几乎接近于免费。

在6月，存储提供者社区成立了新的[北美及亚洲存储提供者工作组](https://github.com/filecoin-project/community/tree/master/Storage%20Provider%20Working%20Group)。该工作组的首个动作就是支持社区创建更好的工具和文档。从那后，我们在欧洲、北美、亚洲（韩国日本等）搭建了工作组。

在8月，一个新的Filecoin[赏金项目](https://github.com/filecoin-project/community/tree/master/storage-provider-bounty-program)上线了，用于支持该项工作。从那后，外部专家们在致力带来最新的最佳实践。该公告板[board](https://github.com/filecoin-project/community/projects)一直欢迎新的想法和要求。

为了支持生态带来更多存储提供者的努力，我们带来了新的加速器项目致力于每年培训和引入50名新的存储提供者。在[https://www.web3espa.io](https://www.web3espa.io "https://www.web3espa.io")就可以马上申请了！

## ARG

在2月，应用研究组 (ARG)使用Filecoin、IPFS、libp2p和IPLD开展了原型研究。至今，应用研究组已创建了一个[开源框架](https://github.com/application-research/origin)，提供了开箱即用的IPFS兼容网站搭建能力，还有与Textile等知名生态伙伴推出的开发者示例，以及高保真度的原型，如的Filecoin+Ledger钱包。

在3月，应用研究组创建了[Estuary](https://estuary.tech/)帮助提升[达成Filecoin存储提议](https://filecoin.io/blog/posts/taking-a-look-at-estuary/)的体验。在不久的将来，世界上的很多网络运作者将会运行[Estuary节点](https://github.com/application-research/estuary)并尽力为更多有意义的公共数据达成存储提议。

## 亚洲拓展

亚洲是Filecoin和IPFS生态的重要拓展领域，主网上线的一年里，几个关键国家里都在持续增长。今年会有专门为这个区域而设计的新行动。

亚洲黑客松赛季（Asia Hackathon Season）是一个为期数月的黑客松系列，旨在发现、加速和关注亚洲初创企业和开发者所带来的Filecoin和IPFS开发活动。Filecoin与Wanxiang Blockchain Labs、Polygon、Dapper Labs和其他地区伙伴合作举办了2021年首个赛季。这个项目仍在继续，但已经看到了该地区贡献者提交的积极成果。

为了拓展Filecoin在韩国和亚洲的社区，在8月份推出了这两个国家本地语言拓展及社区建设计划，社区举办了几次见面会和活动（作为[Filecoin Orbit](https://orbit.filecoin.io/)的一部分）。

其他值得注意的亮点还包括存储提供者地理分布的多样性，以及在亚洲搭建关键战略伙伴，如[NFTStar](https://www.prnewswire.com/news-releases/the9-limited-polygon-and-protocol-labs-announced-ecosystem-collaboration-on-nftstar-and-gamefi-play-to-earn-projects-301383501.html)等。

## 还有更多精彩的

2020年Filecoin主网正式上线。在上线后的一年多期间，社区已经形成了生气勃勃的生态，产出了各种应用、工具、用例和实施方案。这仅仅是个开端！创建者、企业家、创始人、设计师、思想家、创意工作者、开发者都有无限的发挥空间。我们将一起为世界搭建新范式。加入[Filecoin社区频道](https://filecoin.io/slack/)并与全世界的人一起搭建分布式技术的未来吧！
