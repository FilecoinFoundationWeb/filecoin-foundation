---
aliases:
  - /zh-cn/blog/Filecoin-测试网挖矿
  - /zh-cn/blog/filecoin-testnet-mining
author: ""
categories:
  - updates
date: "2019-12-10T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 成为 Filecoin 矿工是社区成员帮助存储和保存人类最重要信息的机会。通过提供网络安全和基础设施，Filecoin 矿工帮助建立一个更开放、更有弹性、更值得信任的互联网。
image:
  alt: ""
  url: /uploads/filecoin-testnet-mining-blog-header-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-testnet-mining-blog-header.webp
title: Filecoin 测试网挖矿
---

_更新日期为2019年12月13日_

成为 Filecoin 矿工是社区成员帮助存储和保存人类最重要信息的机会。通过提供网络安全和基础设施，Filecoin 矿工帮助建立一个更开放、更有弹性、更值得信任的互联网。

Filecoin 挖掘是一个通过巨大的网络为客户提供数据存储和检索服务而获得收入的新机会。矿工通过在 Filecoin 网络上存储和获取客户信息来赚取费用。**Filecoin 矿工存储的客户端数据越多，它的存储能力增长得就越多。网络上更多的存储能力意味着一个特定的矿工更有可能产生区块并获得区块奖励。矿工可以选择是否参与存储权力协商、存储挖掘和/或检索挖掘。** 我们预期许多矿工将在这些类别中提供重点的专门服务。

您放在 Filecoin 网络上的挖掘硬件除了提供网络安全和区块生产之外，还将为客户端提供有用的数据存储服务。这将 Filecoin 网络上的挖掘与传统的_工作证明_网络区分开来。

重新分配多余的存储容量来运行 Filecoin 节点，将您曾经潜在的存储资产转变为安全的存储服务。矿工提供的区块生产、存储和检索服务对 Filecoin 的生态系统非常有价值。通过将许多矿工和存储供应商聚集在一个去中心化的网络中，Filecoin 将存储供应商联合在第一个用于租用数据存储的算法市场中。

准备好听更多了吗?继续阅读，了解如何开始。

## 如何加入 Filecoin 测试网

要加入即将到来的 Filecoin 测试网，您需要适当的硬件，并安装和设置 [lotus](https://github.com/filecoin-project/lotus/blob/master/README.md) 实现。有关安装和设置的更多信息，请参阅 [lotus docs](https://lotus.filecoin.io/)。

接下来，您需要以 filecoin 令牌作为抵押来设置您的矿工。“质押抵押品”是作为存储矿工加入网络所需的初始 filecoin 数量。随着时间的推移，矿工在与客户进行每一笔额外的存储交易时，都必须存放更多的“交易抵押品”。抵押品被部署在网络上，以确保矿工行为得当，并以 FIL 令牌计价。关于抵押品的细节将在未来几周的 Filecoin 规范中最终确定。在测试网期间，您可以从我们的网络水龙头中检索 测试 filecoin，作为开始挖掘的抵押品。测试 filecoin 没有任何价值 —— 官方的 filecoin 令牌在主网启动之前不会发布。

## Protocol Labs 的标准硬件测试配置

## (请仔细阅读)

**注意：本节描述了 Protocol Labs 团队用于在 Lotus 实现上测试 Filecoin 存储挖掘的标准测试配置。无法保证此测试配置将适用于主网启动时的 Filecoin 存储挖掘。如果您需要购买新硬件以加入 Filecoin 测试网，建议您购买的硬件数量不要超过测试所需的数量。**

**我们的标准测试配置是 Filecoin 测试网挖掘的众多可能性之一。我们希望测试网矿工能够找到其他硬件组合，其中一些可能比下面描述的测试配置更有效。如果您使用其他硬件配置来运行 Lotus，请运行** [**Lotus 基准测试工具，**](https://lotus.filecoin.io/storage-providers/operate/benchmarks/)**并将结果发布到此** [**thread**](https://github.com/filecoin-project/lotus/issues/839) **中。**

开采区块所需的扇区大小和最低保证存储量是影响硬件决策的两个非常重要的 Filecoin 测试网参数。我们将在测试网期间继续完善这些参数（以及其他证明参数）。 **因此，我们针对 Filecoin 主网的标准测试配置可能会更改。**

**扇区大小：** 如果您选择购买硬件以在 Filecoin 测试网上进行测试，我们建议您购买支持密封 32GiB 扇区的计算硬件。 测试网将暂时支持 1GiB “测试扇区”，以便矿工可以轻松地加入网络。这样小的扇区大小对于主网来说是不现实的。在测试网启动后，我们将进行一次分叉升级，以停止对 1GiB “测试扇区”的支持，并将在我们的博客上宣布升级的时间和机制。

**矿工规模：** 要有资格在测试网期间进行区块挖掘（不仅仅是接受存储交易），矿工必须保证至少 **512GiB 的磁盘存储空间。 Filecoin 主网的这一要求可能会增加。** 如果您只想参与存储交易，则可以以较少的存储空间加入网络。但是，如果您当前对网络的质押品不足 512GiB，那么您经过验证的存储将不会计入总网络能量，也将无法使您获得大量奖励。

下面是我们测试过的用于密封 Lotus 上 32GiB 扇区的配置。该配置基于 Filecoin 挖掘过程中所需的步骤。 **我们在标准测试配置中进行了与计算能力相关的特定权衡（即，我们为 GPU 分配资源而不是更多的 CPU 能力）。可以使用其他配置在测试网上进行挖掘，但是由于我们尚未测试所有配置，因此在本文中我们将不讨论其可行性或性能。**

## Storage

## 存储

Filecoin 奖励矿工为网络提供存储。 **矿工应该能够使用大多数商用 HDD，SSD 或其他类型的磁盘来为网络提供大容量存储** ，并且构建一个允许扩展添加硬盘的系统，这对矿工来说是有利的。

Filecoin 接受网络的任何存储形式，但需要重申，在选举时空证明 （Election PoSt）期间，用于向网络提供存储的存储介质 **将被读取**。因此，我们建议选择一种可以快速执行读取的存储介质（即不是冷库）。

当前，在我们的测试配置中，商用硬盘驱动器提供了足够的读取速度，以适合 ElectionPoSt 时间窗口。矿工应考虑为选举时间分配的时间预算，并根据其网络速度和计算资源推算出自己的要求。有关 Election PoSt 的更多信息，请参见时空证明 。

![Storage](https://filecoin.io/vintage/images/blog/dark-servers-center-room-with-computers-storage-systems_117023-894.jpg)

## 复制证明 (Proof-of-Replication)

我们正在测试功能强大的 CPU（至少具有8个内核），以便在**复制证明**期间复制客户端数据。强大的 CPU 使矿工可以更快地处理数据并更快地生成复制证明，从而在网络上获得能量。

复制过程利用快速磁盘将数据从内存卸载到磁盘上。为此，我们已经测试了 SSD（512GB），该 SSD 可以用作大型缓存，以存储未密封的传输中扇区（在复制证明的预提交和提交阶段），并在密封过程中进行缓存。

我们的标准配置还可以在大量 RAM（128GB）下运行。需要 RAM 来计算内存中的数据复制，当前与扇区大小有 2-3 倍的关系。我们设计用于在复制证明和时空证明的 SNARK 生成过程中运行的电路非常大，并且会消耗大量 RAM。这些大型电路最大程度地减少了 SNARK 证明输出的占用空间，以实现高效的链上提交。

我们还使用强大的 GPU 功能以更省时，更经济的方式生成 SNARK。在每个密封副本的复制证明上生成 SNARK，并将 SNARK 输出提交到链中。我们特别注意到 Lotus 实现是为 **NVIDIA 制造的** GPU 芯片设计的，但是，我们预计将来还会有其他制造商的支持卡。随着我们继续调整证明参数，我们预计主网电路比测试网电路需要更多的计算能力。

我们在测试中观察到，让多个“密封机”在一个存储范围内工作比在单个计算机上运行整个 Filecoin 挖掘过程（密封和时空证明）效率更高。这使矿工可以一次高效地运行多个流程。

有关复制证明过程如何与挖掘硬件相关的更多信息，请参见下面的图：

[![PoRep](https://filecoin.io/vintage/images/blog/porepgraphicv2-watermark.png)](https://filecoin.io/vintage/images/blog/porepgraphicv2-watermark.png)

## 时空证明

我们的测试配置考虑了存储开销 - 我们目前估计开销是承诺存储的2倍，但是对于主网来说可能有所变化。我们目前在密封存储区的磁盘存储中运行着约 1.5TB 的存储空间，但我们认为，有更有效的方法来配置密封存储区以减少开销。我们还在测试对密封扇区的快速并行磁盘访问，以生成选举票来赢得**选举时空证明** (_Election Proof-of-Spacetime_ 或 “ElectionPost”）中的区块奖励。

在运行时空证明流程时，由于频繁读取提交时空证明的数据，我们当前的测试配置将密封扇区存储在硬盘上，该扇区可以连续运行（24/7）。

**_只有当_ 矿工在给定时期内因赢得大区块奖励而获得了选举票时， _才_ 在 _选举时空证明_ （“ ElectionPoSt”）中运行 SNARK。**每当矿工赢得选举票时，我们的配置就使用 GPU 的功能来计算 PoSt SNARK 的输出结果，准确计算出每个纪元周期（约20秒）内的 PoSt SNARK。时空证明所需的 GPU 功能在很大程度上取决于矿工在任何给定时期拥有多少张获胜选举票，这与他们在网络中的存储比例有关。

我们还建议使用较低延迟的网络连接来按时提交时空证明。如果矿工多次未能按时提交时空证明，则可能导致赢得较少的区块奖励，并增加被削减的风险。

有关与挖矿硬件相关的 ElectionPoSt 流程的更多信息，请参见下图：

[![邮寄](https://filecoin.io/vintage/images/blog/testnet-mining-epost-watermark.png)](https://filecoin.io/vintage/images/blog/testnet-mining-epost-watermark.png)

## Filecoin 挖掘不是工作量证明 GPU 挖掘

**请记住，Filecoin 挖矿基于存储能力共识：** **在网络上** 拥有 **更多功能** （经过验证的存储）与赢得更多区块奖励直接相关。 **矿工在网络上的电量与矿工在网络上存储的数量成线性关系，而不是与矿机运行的 GPU 数量成线性关系。相比之下，在 _工作量证明_ GPU 挖掘中，矿工必须以 GPU 的能力进行竞争才能赢得区块奖励。在Filecoin 挖掘中，矿工在存储能力共识而非 GPU 能力上竞争。矿工只有在赢得选举票时才在 ElectionPoSt 中使用 GPU。**赢得权力的最佳和最便宜的方法是向 Filecoin 网络添加更多有用的存储。

如果您是较小的矿工，担心 GPU 的成本，请放心，我们正在努力使矿工将 SNARK 计算安全地外包给第三方服务提供商。

现在您已经了解了工具，准备将其投入使用！您将有机会很快加入 Lotus 测试网。

如果您想了解有关 Filecoin 网络组件的更多详细信息，请查看 [Filecoin 规范](https://filecoin-project.github.io/specs) 。对本文讨论的主题有疑问吗？请在我们的[论坛](https://discuss.filecoin.io/)中通过适当的分类项询问。有关设置节点，连接 Filecoin 测试网等的实时故障排除，请使用 Filecoin [聊天](https://filecoin.io/#community)中的帮助渠道。

感谢您对我们团队的支持！
