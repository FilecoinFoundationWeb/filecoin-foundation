---
aliases: []
author: ""
categories:
  - events
date: "2021-06-14T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 6月8日， Filecoin举行了一次AMA，回答了25+关于网络升级、封装、存储订单等相关的问题。
image:
  alt: ""
  url: /uploads/fil-blog-hyperdrive-5.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-hyperdrive-5.webp
title: 回顾Filecoin v13 HyperDrive 问答活动
_template: blog_detail_ch
---

_自从_ [_Filecoin v13 HyperDrive 网络升级公告发布以来_](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)_， Filecoin社区很好奇此次升级对于网络整体会有什么影响。因此在6月8日， Filecoin举行了一次AMA，回答了25+关于网络升级、封装、存储订单等相关的问题。_

_以下内容总结了Q&A答复。在Filecoin v13 HyperDrive网络临近之时我们很期待举行更多类似这样的活动，因此欢迎参与将在6月23日北京时间上午九点举办的HyperDrive深入了解研讨！与此同时，关注_[_Filecoin 社区论坛_](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)_，_[_Filecoin slack_](https://filecoin.io/slack)_，微信公众号（Filecoin-Official）及_[_推特账号_](https://twitter.com/Filecoin)_等获取更多最新信息！_

**Q: 能提供一下具体的网络升级时间吗?**

A: 核心开发者们仍未就具体的升级计划达成一致，但预期会是在6月的最后一周里。 校准测试网已在6月11日epoch 351519升级。关注这个[讨论](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)获取最新消息！

**Q: 如果一条批量`PreCommit`信息的某个部分或`Provecommit`聚合信息的某个部分失败了，那整个批量或聚合都会失败吗？（毕竟这是批量发布信息的）**

A: 对`PreCommitSectorBatch` 信息而言确实是这样的。但对`ProveCommitAggregate` 信息而言就要看失败的具体原因。如果一个聚合包含了已经过期的`PreCommits`，那会有一个8小时的时间窗口，在这期间信息会成功提交没有过期的`Crecommits`。其他类型的错误会导致整个信息的失败。

**Q:`BatchGasCharge`的计算方法好像是启发式的？背后的思路是怎样的？像 65733296.73这样的系数是怎么算出来的？**

A: 这个常数是来自对一个扇区进行pre committing和 prove committing操作时的平均 `GasUsage`值。这个数字总是不精确的接近值，因为不同的矿工state参数， 比如在等候的`PreCommit`数量，`AllocatedSector`的bitfield大小等，自然会有不同的`GasUsage`值。

**Q: 为了在gas费用降低和延迟提交（可能以天计算）导致的收入损失之间达到平衡，有没有设定具体策略的详细建议?**

A: 对lotus矿工来说，你可以在其参数文件里设定 `PreCommits`的最大/最小批量值或 `ProveCommits`的最大/最小聚合值。你也可以设定达到最少提交批量提交的等待时间——这是为了确保在存储订单/扇区证明过期前，批量扇区都被提交上去了。详情请看相关[文档概览](https://github.com/filecoin-project/filecoin-docs/pull/898)及lotus的默认值可以在[def.go](https://github.com/filecoin-project/lotus/blob/f9596dd730cdb70e3465450b66299606953c7785/node/config/def.go#L275)找到。不过，矿工应该根据自己的实际情况或需求来更改这些配置。以下是可能影响矿工决定的潜在因素：当前网络的BaseFee，因为等待而错失的收入，封装的吞吐量。

**Q: v13升级会影响扇区封装的时间吗?**

A: 不会。预期的封装时间会保持不变，如果扇区在`Pre/ProveCommit` 信息中与其他扇区聚合，那么就可以等待更长的时间。

**Q: `SubmitProveCommit`信息有何新改变吗以及它们的上链时间？它们依旧会为每一个扇区发送吗？**

A: 有一种新的`ProveCommitAggregate`信息，可以同时对多个`ProveCommit`操作。这种信息会使用聚合的证明，因此降低了消息大小，为矿工节省了成本，也降低了存储这些消息所需空间的增长。通常Provecommitment信息要在PreCommit上链后**30天内**提交。

**Q: `ProveCommitAggregate`和`BatchPreCom`信息会与现有的单一扇区信息机制同时共存吗**

A: 是的，`PreCommitSector`和`ProveCommitSector`在这次升级后依然能够使用。在向网络提交数据存储时，并不一定要使用这些新的方法。不过就总费用而言，使用这些新方法预计是会更便宜的。

**Q: 在 Filecoin的 Hyperdrive网络升级后，提交新增存储交易提议的gas fee预计会降低多少？**

A: `PublishStorageDeals`操作所需的GasFees会取决于`GasUsage` \* `BaseFee`。HyperDrive并没有对 `PublishStroageDeals`的 `GasUsage` 作出很大更改（团队正努力探索！），但它显著地增加了网络带宽（或TPS）的供应。其他条件不变的情况下，BaseFee值很可能会降低。不过，降低的幅度取决于网络使用的潜在需求（包括用网络存储数据）。这又取决于有多少参与者会利用聚合信息提供的性能改善。总的来说，与今天的数值相比，新的存储订单总消耗gas费用会有所降低，但具体的方式和数量仍有待观察。

**Q: SnarkPack保持在聚合状态的时间限制是多少**

A: SnarkPack并没有时间限制的设定。不过 `PreCommits`仍有过期失效的机制。在HyperDrive升级中，过期失效的时间是30天。因此，在信息必须上链之前，`ProveCommits`最多只能在30天内聚合。

**Q: 对 32 GiB 和64 GiB扇区而言，gas费用节省多少?**

A: `GasUsage`节省量在32和64 GiB扇区上都是相似的。你可以在64 GiB扇区上看到少许更多的 `GasUsage`节省量，因为在64 Gib扇区上进行聚合验证的速度更快： [点击此处了解更多信息](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#32-gib-gas-cost)。对32 和64 GiB扇区而言，`GasUsage`节省量主要取决于聚合证明的数量。６个扇区聚合的`GasUsage`预计会节省1.5倍，而 819 个扇区的聚合预计会节省30倍。

**Q: Hyperdrive 现在允许落地多少存储?**

A: 我们希望看到落地的存储能够增加10倍到25倍，这取决于矿工如何使用聚合。我们可以看到网络从现在的40PiB/天增长到高达1EiB/天。这将是一个巨大的增长!

**Q: 网络有什么机制，去鼓励所有的矿工升级现有的CC扇区以存储来自用户的真实数据？有没有相关的FIP改进提议？**

A: 如果要升级到包含交易提议的CC扇区，可以遵循[此处](https://docs.filecoin.io/mine/lotus/sector-pledging/#upgrading-pledged-sectors)的步骤。矿工可以通过存储用户的交易订单来赚取FIL。如果这个交易订单是Filecoin Plus 验证的带datacap配额的订单，那么矿工就会获得10倍的质量乘数调整后的算力（adjusted power）。

**Q: 在两种新的信息类型里，有没有gas used / gas limit的上限？或者这些新型的信息能不能达到区块gas limit的上限?**

A: 这些新型的信息能够使用直至到区块gas limit的上限。这次升级并没有引入对每个信息的新限制。不过基于简化的矿工state的测试表明，这些信息的 `GasUsage` 远低于区块限制。 `ProveCommitAggregate`信息（最大体积819个扇区）预计的 `GasUsage`是低于15亿 gas units，而 `PreCommitAggregate`信息（最大体积256个扇区）预计的 `GasUsage`是低于４亿gas units.

**Q: 我们能预期 `BaseFee`下降多少?**

A: 在过去一个月的时间里，网络以最大速率(\~40PiB / 天)的节奏增长，`BaseFee`约等于 1 nFIL。在HyperDrive升级后，网络可以有10-25倍的存储增长实现大于400PiB/天的速率，并有**更低**的`BaseFee`（因为聚合证明的使用，区块就不会那么拥挤了） 。不过，`BaseFee`下降的幅度取决于矿工的行为（使用聚合证明提交信息）和网络的潜在需求（包括存储增长）。例如，如果有超过10-25倍的潜在需求，`BaseFee`可能不会降低（因为区块会仍然满载）。可以在[FIP-13](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-incentive-alignment)里的加密经济学了解更多信息。

**Q: Hyperdrive允许多少的存储增量?**

A: 根据矿工使用聚合操作的情况，我们预期能看到10-25倍的增长，因此许多矿工将大大增加他们的存储容量，并从区块奖励中获得更大的份额。我们预计，许多矿工将利用聚合的优势，大大增加他们的存储部署以赚取更多收入。

**Q: Hyperdrive意味着矿工有更强的意愿去增加更多的存储空间吗?**

A: 是的，矿工们总是有很强的意愿去大幅增加存储空间以分享更多的区块奖励。HyperDrive通过大幅增加存储能力来强化现有的激励机制。它也鼓励更多使用Fil和deals（交易）。

**Q: 网络上的其他矿工都在快速增加存储量时，个体的矿工应如何应对?**

A: 就如比特币及其他带有区块奖励的区块链那样，矿工若想保持或增加在区块奖励中占据的份额，就得保持竞争力。

**Q: Hyperdrive是否意味着新增的存储量会达到1 EiB/天?**

A: 是的。Hyperdrive应该能让网络达到每天1 Eib或更多的新增存储量。

**Q: 存储速率的提升，到底是来自独立的证明阶段的提速，还是因为聚合信息而提供的更大网络吞吐量？**

A: 存储速率的提升来自聚合信息而提供的更大网络吞吐量。独立的证明阶段并没有被提速。

**Q: 在聚合10个扇区与1000个扇区时，聚合gas参数会怎么变化？对矿工而言，有什么动力去在一个证明里聚合更多的扇区?**

A: Hyperdrive提高了网络的整体存储新增吞吐量，这样矿工就能够提供更多的存储量。聚合证明会引入一个折扣的Gas收费费率，这样就会比同样数量的链上证明所花费的gas更少，但这里面会有一个最低费用。可以看一下FIP-13改进提议去了解更多有关gas费率变化的信息。如果要对比聚合10个证明和聚合1000个证明的费用：那就是当越多的证明被聚合到一个单独的信息里，每一个证明的花费会更低廉。因此，如果矿工想增加更多的存储量，那将更多的证明聚合到单一的信息里会更便宜。

**Q: 能列举一些为矿工提供服务的Fil借贷机构吗?**

A: 现有的借贷提供商包括: Anchorage, CoinList, Darma等等。在这个讨论区可以看到动态的更新： [https://github.com/filecoin-project/community/discussions/184](https://github.com/filecoin-project/community/discussions/184)。

**Q: 在现实场景下，每天能支撑多少的存储体积增长（以PiB为单位）？怎么预期整个网络的Gas收费的变化?**
A: 这取决于对`PreCommit`和`ProveCommit` 的批量和聚合体积的实际分布预测。在理想状态下，所有矿工如果总是使用最大的聚合体积值，那我们将可以看到约30倍的GasUsage降低，那以现在40PiB/天的存储增长量算，那就是增加到1200 Pib/天。这是在这次升级后网络能支撑的最大值。不过现在不太可能会实际增长到这个最大值，毕竟并不是所有的矿工都会发布最大体积的聚合信息（至少在一开始不会这样）。最终就是整体的矿工生态系统决定我们离这潜力有多近了。

**Q: `BatchBalancer` 和 `BatchDiscount`是什么?**

A: `BatchBalancer`和`BatchDiscount`是与 `ProveCommitAggregate`相关的 `BatchGasCharge`中使用的参数。`BatchDiscount`是一个gas费用折扣因子，在原则上会让聚合证明的费用比单一的证明所使用的gas费用（SingleProofGasUsage）便宜（如只需1/20的费用）。`BatchBalancer`是`GasCharge`的最小gas费用。这个参数调节着 `ProveCommitAggregate`和gas fee的使用，确保大范围的存储增加会向网络支付费用，建立了实用性的门槛，并寻求为其他网络操作（如`PublishStorageDeals`）维持一个更低的 `BaseFee`费用水平。当 `BaseFee`低于`BatchBalancer` _`BatchDiscount`时，提交单一的证明就会更便宜。当`BaseFee`明显高于`BatchBalancer`_ `BatchDiscount`时，提交聚合证明就会更便宜。这些参数是用于支撑大范围的存储速率增长，从 ～30 PiB/日到～2 EiB/日。可以看[https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-gas-charge](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-gas-charge) 了解更多。

**Q: 是否考虑将EVM虚拟机合并到Filecoin?**

A: 人们往Filecoin上增加EVM虚拟机的兴趣不小，相关的努力正在开展中。可以在这个事项讨论里增加你的看法或评论来表达支持：[https://github.com/filecoin-project/FIPs/issues/113](https://github.com/filecoin-project/FIPs/issues/113)

**Q: 在Filecoin网络上存储数据的时候，会自动地分布式存储于不同的矿工里吗?**

A: Filecoin核心协议允许一个用户从一个矿工那存取数据。不同的工具或二层（layer 2）协议可以自动在不同矿工之间展开这个操作。可以看一下ARG的Estuary([https://docs.filecoin.io/store/estuary](https://docs.filecoin.io/store/tools/estuary/) )和Textile的Powergate(https://docs.textile.io/powergate/)作为参照例子。
