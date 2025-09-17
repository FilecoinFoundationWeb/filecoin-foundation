---
aliases: []
author: ""
categories:
  - updates
date: "2021-05-27T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  今天，我们很高兴地宣布 Filecoin
  HyperDrive网络升级将在接下来的几周内进行，存储效率将获得10—25倍的增长，这都要归功于Filecoin证明系统的创新！
image:
  alt: ""
  url: /uploads/fil-blog-hyperdrive-wormhole.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-hyperdrive-wormhole.webp
title: Filecoin v13 HyperDrive网络升级，存储效率可提高近10-25倍
_template: blog_detail_ch
---

今天，我们很高兴地宣布 [Filecoin v13 HyperDrive网络升级](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228) 将在接下来的几周内进行，存储效率将获得 _10—25倍_ 的增长，这都要归功于Filecoin证明系统的创新！ (_\*具体取决于存储提供者如何利用最新的集成限制)_

在Filecoin主网启动周后短短7个月的时间里，已有超过2300名每周为Filecoin网络提供上千PiB的有效存储的活跃矿工。然而，这惊人的增长率对Filecoin矿工贡献的网络容量来说也只是 _沧海一粟_。

由于Filecoin网络提供的服务要满足大量需求，早在主网发布之前，存储增长速度就受限于Filecoin链容量。区块目前被新容量证明、存储交易和进行中的存储验证 （Window PoSts）所占用，限制了矿工可落地到Filecoin上的新存储以及由于此而导致影响其他所有链上其他交易，如发布存储交易的高昂Gas费！

![](/uploads/screen-shot-2021-05-24-at-3-10-22-pm.webp)

这就是为什么[CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/)自网络发布后就在争分夺秒地增加链容量，提高Filecoin网络增长率。提高链容量有几大好处：

- 让现有矿工以更快速度更低成本封装额外存储容量💸
- 新矿工加入并扩大经营至PiB（甚至EiB）级别存储容量创造空间📈
- 为进行中的存储验证，交易，新存储交易等关键功能提高链带宽🔏
- 降低封装新存储交易的Gas费，用Filecoin存储有用数据会更加实惠🤝

Filecoin是**有用的存储网络**，其使命是为人类信息打造一个去中心化、高效、稳健的基础设施，这意味着存储容量需要以指数级增长才能跟上全球数据增长速度。相比并不实用的工作量证明区块链，Filecoin的[存储证明](https://spec.filecoin.io/algorithms/pos/)包含复制证明和时空证明，通过大量的去中心化数据中心来存储人类数据，让挖矿过程为所有人产生价值。这也是Filecoin’s v13 HyperDrive网络升级的意义所在—— **人类宝贵信息的可验证存储容量将增长10—25倍**🚀。

## Filecoin v13 HyperDrive网络升级对矿工的意义

计划于六月中旬进行的HyperDrive升级与Filecoin网络所有参与者息息相关。存储用户以及应用开发者可以享受消息吞吐量提升带来的好处，进而提高整体网络效用，不过，Filecoin存储提供者会最明显地感到升级效果，从新的规模效应和更高的容量封装速率中获益。容量增长率的提高为新存储提供者加入并成为Filecoin网络的中坚力量创造了机会。💪

在此之前，大型存储提供者的资源和硬件或许已经可以实现每天封装100PiB存储容量到Filecoin，可因为链带宽限制只能遵循40PiB/天的总存储封装上限，与其他矿工争夺有限的链空间用于新存储证明。现在，有了HyperDrive的多项改进，这样的大型矿工可以集成存储承诺减少链上消息，既快速增加网络算力又节省链上空间。当所有矿工这样操作时，目前的存储封装速率（目前>100%链容量）将低于新链容量的5%！🎉

这对矿工来说意义重大：升级一方面是提高收益的机会，矿工能获得更多Fielcoin网络区块奖励，目前挖矿奖励铸币速度上限为[约370,000 FIL](https://filfox.info/en/)/天；一方面是挑战，矿工要争取更有效地利用优化。无法快速适应新经营手段的矿工获得的奖励份额可能会落后于同伴，所以别💤错过这次机会！

为帮助矿工调整经营（并准备好快速封装潜在容量！）首个有证明集成容量的lotus RC将在2021-05-31这一周上线，届时还会有Calibration测试网更新，之后，矿工就可以测试新证明集成流程和加密经济效果。关注[lotus v1.10.0 发布公告讨论](https://github.com/filecoin-project/lotus/discussions/6283)获取发布时间最新消息，以及[Filecoin v13 HyperDrive网络升级公告](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)了解网络（校准网和主网）升级的区块高度。相关消息也会在[Filecoin Project Slack](https://filecoin.io/slack)的 **#fil-announcements** 和 **#fil-lotus**话题下发布。

## 通过SnarkPack提高Filecoin链容量

Filecoin v13 HyperDrive Network Upgrade的实现离不开Filecoin证明系统的创新。过去几个月里，[CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) 和 [CyptoComputeLab](https://research.protocol.ai/groups/cryptocomputelab/)对Filecoin证明机制进行了设计和实施以解锁更高的可扩展性和减轻网络拥堵。团队的努力促成了两项备受期待的FIP（Filecoin改进提案），Filecoin将获得显著可扩展性提升：

- [FIP-0013: 增加ProveCommitAggregated方法以改善链上拥堵](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)
- [FIP-0008: 增加矿工批量扇区pre-commit的方法](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0008.md)

上述FIP的核心在于要求集成以及缩减多个证明验证（以[SNARKs](https://z.cash/technology/zksnarks/)形式上链）以形成占用链带宽更少的集成消息，截至目前，Filecoin网络是**最大**的运行中的SNARK系统，每天可生成并验证（大约）超过1300万SNARK证明。为满足迫切的可扩展性需求，CryptoNetLab隆重推出[**SnarkPack**](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)，利用聚合扩容SNARK证明的新策略。SnarkPack基于[Bünz et al](https://eprint.iacr.org/2019/1177)的Inner Pairing Product，并迅速实现产品化以服务于Filecoin证明系统。除了明显的性能优化，SnarkPack还使用创新承诺方案，无需额外可信配置就可以实现集成——是可轻松部署在运行中的Filecoin网络上的更新！欲知更多SnarkPack相关信息，可访问[SnarkPack deep dive](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)或[Cryptology ePrint](https://eprint.iacr.org/2021/529)！

![](/uploads/image-10.webp)

SnarkPack为[FIP0013](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)提供了一个解决方案——添加[ProveCommitAggregate](https://github.com/filecoin-project/specs-actors/blob/51145815bc17542f4731e1ac08d914d9d39a81ed/actors/builtin/miner/miner_actor.go#L860)方法，让矿工将多个扇区`ProveCommit`收据集成为一条链上消息。新方法无需一些冗余且昂贵的检查，Gas费可由多个扇区摊销，显著减少每个扇区的证明大小和验证时间。为确保小型矿工也能从优化中受益，提交`PreCommit`和`ProveCommit`消息的窗口期将被[延长](https://github.com/filecoin-project/specs-actors/issues/1400) ，这样小型矿工可集成窗口期内所有证明，生成一条链上消息。

截至目前，性能指标表现良好——使用 32核和64线程AMD锐龙 Threadripper CPU运行时SnarkPack可在8秒内集成8192个SNARK证明，生成的证明大小是原来的1/38，验证只需33毫秒，包含反序列化在内！通过这个新功能，矿工可以为[819个](https://github.com/filecoin-project/specs-actors/blob/51145815bc17542f4731e1ac08d914d9d39a81ed/actors/builtin/miner/policy.go#L286)扇区的证明承诺提交一条`ProveCommitAggregate`消息。

{{< youtube id="GRaR8N380h0" title="Scaling zkSNARKs to meet the demands of Filecoin" >}}

除了FIP0013，[FIP0008](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0008.md)也会融入HyperDrive网络升级，矿工能够为多个扇区提交批量预承诺。这一新增`PreCommitSectorBatch`方法可省去一些冗余且昂贵的检查，让多个扇区分摊成本。

## 升级的时间线和其他特点

除了FIP0013和FIP0008， [Actors v5](https://github.com/filecoin-project/specs-actors/issues/1391)（在HyperDrive网络升级中同时更新）还包括[FIP-0012: DataCap Top up for FIL+ Client Addresses](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0012.md)等有用的改进，这使得Filecoin Plus验证的用户可以继续申请DataCap。以前，每个新的DataCap分配请求都需要针对一个独特的地址，在更新该计划开始以来所服务的数百个DataCap分配请求时产生了操作费用。有了[FIP0012](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0012.md)，FIL+ clients将能够收到他们现有地址的额外DataCap，这将改善用户和矿工的交易体验。由于正在努力[将FIL+的DataCap分配扩展到大规模的数据集](https://github.com/filecoin-project/filecoin-plus-large-datasets)——这些改进将会持续使Filecoin成为更有用的存储网络，来存储人类依赖的所有重要数据。

主网实施的核心开发人员- lotus([v1.10.0](https://github.com/filecoin-project/lotus/issues/6185))、venus和forest都在全力冲刺HyperDrive网络的升级行动，目前计划在6月中旬进行（具体升级时间待定）。这是Filecoin网络的一次大规模（且高度令人期待）升级，需要彻底地进行端到端测试以确保平稳进行。 [这里](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)有最新消息和升级时间表。如有关于升级的问题，欢迎在[社区讨论](https://github.com/filecoin-project/community/discussions/155)留言，或在[讨论](https://github.com/filecoin-project/lotus/discussions/6296)留下对新lotus版本的反馈。

## 未来工作

展望未来，为了让Filecoin成为存储供应者和用户的最佳存储网络，还有许多工作尚待完成。虽然HyperDrive是链容量的巨大飞跃，但[CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) 继续推动改进以达到完全指数级的扩展能力，并扩大Filecoin’s PoRep计划，以实现用用户提交的交易来升级承诺的容量扇区，而不需要**重新封装**！🤩

在短期内，网络级证明聚合器节点也有明显的机会，它将来自许多不同矿工的消息捆绑起来，以进一步提高吞吐量。这些聚合器可以在 _不同_ 的矿工之间批量处理许多`ProveCommit`消息，加快聚合速度，确保封装资源有限的小矿工能够充分利用聚合优化。在随后的网络升级中，请注意类似这样的额外改进！
