---
aliases:
  - /zh-cn/blog/了解Filecoin流通供应机制
author: Filecoin Project
categories:
  - updates
  - interviews
date: "2020-12-10T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 本文旨在解读Filecoin代币是如何进入流通供应的，并提供更多关于各种利益相关者如何参与其经济的见解、阐明人们应该如何对待和思考Filecoin代币经济。
image:
  alt: ""
  url: /uploads/filecoin-circulating-supply-header-2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-circulating-supply-header-2.webp
title: "了解Filecoin流通供应机制 "
---

本文旨在解读Filecoin代币是如何进入流通供应的，并提供更多关于各种利益相关者如何参与其经济的见解、阐明人们应该如何对待和思考Filecoin代币经济。本可配合阅读[Filecoin经济](/2020-engineering-filecoins-economy-en.pdf)论文和[Filecoin 技术规范](https://spec.filecoin.io/#)中概述的详细机制。

## Filecoin 生态

Filecoin生态中不断增长的动力是所有Filecoin利益相关者的使用场景、工具和基础设施。 自2020年10月15日[发布Filecoin主网](https://filecoin.io/blog/posts/the-journey-to-filecoin-mainnet-liftoff/)以来，该网络目前已经完成了许多重要的里程碑。

- 网络上已经有来自700多名矿工超过1EiB的存储容量。
- 由90多个项目组成的生态，不断在网络上创建应用程序、开发者工具和基础设施。
- 200多个新项目通过[黑客松和加速营](https://hub.fil.org/events/)进入生态。
- 超过5400名开发者为项目的GitHub库做出了贡献。
- 目前开发的使用场景包括消费者存储应用、档案存储、DeFi、[分布式视频](https://file.video/)等。

想要了解更多内容，可查看主网启动周的[Filecoin生态](https://www.youtube.com/watch?v=FHqtIX4FPP4)深度剖析，或者查看2020年10月的近期[网络回顾](/blog/journey-to-liftoff/)。

## 作为功能型代币的Filecoin

Filecoin是一种功能型代币，目的是为了让代币持有者拥有使用网络的权利。 我们可以把Filecoin看作是一个[海岛经济](/2020-engineering-filecoins-economy-en.pdf)，在这里，参与者聚集在一起生产有价值的存储商品和服务，并向全世界进行输出。 在网络上，人们期望看到具有特色的存储提供者、智能合约系统、借贷服务、多样化的使用场景等等。 其中每一个板块都可能成为具有特色的业务。 网络的整体效用体现在参与者在网络中生产商品和服务的吸引力上。

Filecoin经济的首要目标是通过矿工、开发者、研究者、用户和代币持有者，高效地生产有吸引力的存储相关商品和服务，并能向外部世界输出。可以更高效地生产具有价值商品的经济体能够促进对商品的更多需求和对网络代币的更多需求。经济体内参与者购买力的提高将促使经济体扩大和改进业务，为世界提供更好、性价比更优的服务。

![Filecoin参与者](/vintage/images/blog/filecoin-circulating-supply-participants.png)

## 代币铸造：使矿工铸币曲线和网络效用保持一致

作为一种将参与者的激励措施与网络的长期目标和愿景相对应的功能型代币，Filecoin的铸造曲线与网络的整体效用保持一致。这意味着，只有当网络实现大幅度增长和达到效用目标时，供应的大部分Filecoin才会被铸造出来。

与其他大多数区块链网络不同，Filecoin创新性地采用了[混合铸币模型](https://spec.filecoin.io/#section-systems.filecoin_token.minting_model)：简单铸造和基准铸造：

- **[基准铸造](https://spec.filecoin.io/#section-systems.filecoin_token.block_reward_minting.baseline-minting)**。有高达7.7亿枚FIL代币，即存储挖矿分配的大部分代币，是根据网络的性能铸造的。 这就为网络合作达成存储容量目标创造了强大的动力，最终将存储人类最重要的大部分信息。 只有当Filecoin网络在20年内达到Yottabyte的存储容量时，这些代币才会被完全释放。 根据一些分析师的说法，如今数据中心存储的数据还不到一个Zettabyte（虽然目前增长迅速），所以这个目标比现如今的云存储估计要大1000倍。

- **[简单铸造](https://spec.filecoin.io/#section-systems.filecoin_token.block_reward_minting.simple-minting)**。还有3.3亿枚FIL代币根据时间以6年的指数衰减期发行。 6年的指数衰减期意味着这些代币的97%将在大约30年的时间内被释放。这部分小的但有意义的数量是独立于机构的行为而铸造的，以对抗冲击风险。

- **[挖矿储备金](https://spec.filecoin.io/#section-systems.filecoin_token.token_allocation)**。有3亿枚FIL代币被保留下以激励未来不同类型的挖矿。 这将由社区决定如何释放这些代币，以及应该激励哪些利益相关者，但目前总供应量中的这部分代币被保留了下来。

因此，从挖矿中获得的有效代币的铸造权掌握在社区手中，并落在图1中两条线之间的任意地方。图2提供了一个网络需要增长多少才能达到最大铸币量的示例。虽然社区可能会一起更新网络的基准，但达到基准需要所有利益相关者、研究者、矿工、开发者、代币持有者、生态合作伙伴和存储用户之间的竞争与合作。

![图1: 存储挖矿的最小和最大铸币量。](/vintage/images/blog/filecoin-circulating-supply-minting.png)

_图1: 存储挖矿的最小和最大铸币量。_

![图2: 对数刻度上的最大基准铸造线对应的网络存储基准。](/vintage/images/blog/filecoin-circulating-supply-baseline.png)

_图2: 对数刻度上的最大基准铸造线对应的网络存储基准。_

您可以在Filecoin技术规范中查看更多内容。

## 代币释放：使利益相关者与其长期行为保持一致

另一个激励长期调整、引导参与者远离短期投机、鼓励所有利益相关者共同努力提高Filecoin网络长效用的核心原则和机制是利益相关者代币释放。

这适用于Filecoin的每个核心利益相关者，包括：

1. **挖矿奖励**。所有挖矿奖励都要经过[不同形式的释放](https://spec.filecoin.io/#section-systems.filecoin_mining.miner_collaterals.block-reward-collateral)，以鼓励长期的网络调整。例如，矿工赚取的75%区块奖励在180天内线性释放，而25%的奖励会立即提供给矿工，以改善矿工现金流和盈利能力。当然，如下所述在整个区块的生命周期内，所有赚取的奖励都会不断减少。不可靠的存储会降低网络的实用性，因此这些扇区赚取的区块奖励将被削减和烧毁。
2. **SAFT投资者**。所有SAFT持有者收到的FIL均受6个月、1年、2年和3年线性锁定条款的限制，从网络启动开始。大多数购买的SAFT代币在3年内线性释放。
   - 58%的SAFT代币在3年内线性释放。
   - 5%的SAFT代币在2年内线性释放。
   - 15%的SAFT代币在1年内线性释放。
   - 22%的SAFT代币在6个月内线性释放。
3. **Filecoin基金会**。Filecoin基金会的1亿枚FIL从网络启动开始在6年内线性释放。
4. **协议实验室**。协议实验室的3亿枚 FIL从网络启动开始在6年内线性释放。当协议实验室通过与重要合作者的资助鼓励生态发展时，这些资助通常也会在6年内释放。

这些代币持有者的长期释放时间表有助于确保参与者利益共享风险共担，并对其在网络上的行为进行长期观察。

## 抵押品与惩罚机制： 使参与者与可靠存储保持一致

像Filecoin这样的区块链网络通过奖励来激励良好行为，通过惩罚来减少来不良行为。**惩罚**来自于参与者必须质押抵押品，或者是参与者可能获得的潜在奖励。Filecoin有很多这样的机制以激励高质量、可靠、长期的存储。

从向网络提供存储容量到满足用户的存储需求，矿工必须锁定Filecoin代币以实现共识安全、存储可靠性和合约保障。Filecoin代币作为[质押抵押品](https://spec.filecoin.io/#section-systems.filecoin_mining.miner_collaterals.initial-pledge-collateral)被锁定，为网络带来存储供应，作为[交易抵押和支付](https://spec.filecoin.io/#section-systems.filecoin_mining.miner_collaterals.storage-deal-collateral)来满足存储需求。

当然，被锁在抵押品里的Filecoin代币和因不良行为而被烧毁的Filecoin代币是由社区决定的：

- 在网络层面，锁定的质押抵押品数量取决于承诺进入网络的存储能力和承诺时网络的流通供应量。在个人层面，质押抵押品由矿工将获得的预计区块奖励决定，以确保质押抵押品不会太高。只要Filecoin上有存储，在任何时间点都会有Filecoin代币被锁定。
- 锁定用于交易抵押和支付的代币是所有参与者集体努力的结果，使Filecoin上的存储商品和服务更具吸引力。
- 抵押品和矿工赚取的所有奖励在扇区的整个生命周期内都有可能减少。不可靠的存储会降低网络的效用，因此，这些扇区赚取的区块奖励将被[削减和烧毁](https://spec.filecoin.io/#section-systems.filecoin_mining.sector.sector-faults)。

## Filecoin Plus: 使参与者与有用的存储保持一致

Filecoin是一个由区块链技术促成的全球市场。由于没有可靠的方式通过算法将真实有用的数据与随机生成的数据区分开来，Filecoin网络创新性地、务实地在技术层之上引入了一层社会信任，[Filecoin Plus](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0003.md)。Filecoin Plus将权力交到了存储用户手中，存储这些用户交易的矿工，经过网络验证，可以获得10倍的存储算力，从而获得10倍的网络区块奖励份额。

这种机制激励所有参与者专注于业务开发，寻找有用的数据和使用场景，提高Filecoin的易用性。当矿工赚取10倍的区块奖励份额时，他们还需要拿出10倍的抵押品与10倍的惩罚，以确保激励机制的一致性。这也是社区治理和去中心化加密经济学的一大进步，所有的运营和管理流程都通过[公开](https://github.com/filecoin-project/notary-governance)社区进行。

## 网络交易费用：使代币供应与网络效用相一致

只要网络上有任何行动或效用，Filecoin代币就会被[消耗](/blog/filecoin-features-gas-fees/)，以补偿链上消息消耗的计算和存储资源。与矿工的代币铸造速度类似，代币的消耗速度也掌握在社区手中，因为参与者在争夺链上资源。

截至目前，Filecoin每天的代币消耗已攀升至18万枚FIL/天，这是经济繁荣的标志。

## 结论

Filecoin协议中含有的经济机制确保网络活动和利益相关者与网络的长期健康发展相对应。 基于网络增长的可调整铸造模式、释放结构、代币消耗、抵押品要求等机制使参与者的激励和动机与网络的长期成功保持一致。

让Web3成为主流需要所有生态参与者的努力。Filecoin协议的激励措施必须平衡所有利益相关者、存储用户、矿工、开发者、代币持有者和生态合作伙伴的利益。繁荣的经济有利于网络中的每一个人，并使所有参与者的长期激励机制保持一致。而最重要的是，Filecoin的未来掌握在其社区的手中。

## 附录：流通供应机制定义

上文详细介绍了一些流通供应机制的细节。 本附录概述了协议实验室的API中使用的两种不同流通供应机制计算方式。

### API #1: Filecoin协议定义

Filecoin协议的参考实施方案（[Lotus](http://github.com/filecoin-project/lotus)）公开了当前网络流通供应的API调用：[StateCirculatingSupply](https://github.com/filecoin-project/lotus/blob/2d3b61675b93b977b299eae29945599c26f38cd2/api/api_full.go#L411)。该API将从总代币流入量中减去总代币流出量的结果返回到流通供应量。总代币流入量包括挖矿奖励、释放的SAFT代币、已发放的挖矿储备金以及最初由Filecoin基金会和协议实验室拥有的解锁代币。代币流出总量包括链上程序化锁定的代币或程序化烧毁的代币，这些代币在调用时是不可转让的。例如，抵押品、锁定的区块奖励、尚未释放的代币等都不在此计算范围内。这个API被各类社区成员使用，包括不同的Filecoin区块浏览器。

### API #2: 用于加密货币价格和市值网站使用的API

许多加密货币价格和市值网站使用自己对流通供应量的特定定义，以保持不同项目之间的比较尽可能标准化。这有时会与特定网络使用的流通供应量定义相背离。例如，像[CoinMarketCap](https://support.coinmarketcap.com/hc/en-us/articles/360043396252-Supply-Circulating-Total-Max-)和[CoinGecko](https://www.coingecko.com/en/glossary/circulating-supply)这样的网站认为，只有当项目团队(如Filecoin基金会、协议实验室和项目团队成员)的既得代币从其原始钱包中移动时，这些代币才是流通供应的一部分。

虽然Filecoin在发布时只实施了API #1，但该网络正在实施第二个API（"API #2"），以适应这些加密货币价格和市值网站使用的定义。为了重申两者的区别，API #1 _包括_ 来自Filecoin基金会、协议实验室和项目团队成员的所有既得代币的流通供应，而API #2 _不包括_ 这些代币，直到它们离开原始钱包，此时它们成为流通供应的一部分。 因此，加密货币价格和市值网站所定义的Filecoin流通供应量有时可能低于原生Filecoin协议API返回的内容。

截至2020年12月14日，API #1产生的流通供应量为5400万FIL，而API #2将产生3100万FIL。某些加密货币价格和市值网站之前使用的是Filecoin的API #1公式，未来将改用使用了不同公式的API #2。为了确保这些网站从第一个公式切换到第二个公式时的平稳过渡，我们已经暂停了这些特定网站正在使用的API上的流通供应数字（约为4400万FIL），直到API #2计算出的数字达到这个数字为止，届时这些网站将继续使用API #2公式。

社区成员可出于特定目的使用每个不同的 API/公式计算流通供应量。 例如，Lotus将使用API #1来执行各种协议级别的计算。 其他加密资产网站将使用API #2，以确保与用于计算其他加密网络流通供应量计算结果的可比性。 这两个选项将免费提供给社区使用。
