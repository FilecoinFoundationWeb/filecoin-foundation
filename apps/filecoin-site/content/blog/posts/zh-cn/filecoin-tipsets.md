---
aliases:
  - /zh-cn/blog/tipsets-family-based-approach-to-consensus
author: ""
categories:
  - updates
cover_feature: false
date: "2020-01-13T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  协议实验室旨在突破常规。我们推出了IPFS，以推动网络更加快速、安全和开放。现在，借助Filecoin，我们正在建立一个基于区块链的分布式存储市场，用户可以在其中出租额外的存储空间。
image:
  alt: Tipsets
  url: /uploads/tipsets-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/tipsets-english-social.webp
title: 细谈Filecoin区块架构 —— Tipsets
_template: blog_detail_ch
---

协议实验室旨在突破常规。我们推出了IPFS，以推动网络更加快速、安全和开放。现在，借助Filecoin，我们正在建立一个基于区块链的分布式存储市场，用户可以在其中出租额外的存储空间。

区块链是建立在区块之上的，区块包含着由独特加密哈希来代表的大量信息并且被永久地记录在区块链上。这些信息块串联在一起，构成了区块链，并携带了一组对状态进行编码的既定系统更新。区块链使用共识协议来决定如何扩展其账本，包括可以更新／扩展区块链的各方以及他们被选择出来的方法。

就像有许多不同的区块链一样，世界上存在着许多共识协议，无论是BFT还是Nakamoto-style，最长的链还是权重最大的链，工作量证明或是时空证明或是某种全新的体系。其工作原理有所差别。但是，许多共识协议的总体目标是建立一个可扩展的、安全的、分布式的网络，通过矿工的竞争与参与推动自身的成长。

比特币建立在简单的线性区块链上。每个区块权重相同且仅被计数一次。可以把比特币区块链想象成君主制的网络——根据与创世区块的直接关系来传递和扩展权力。鼓励矿工在最长的链上进行挖矿，即区块最多的那条链。

在撰写本文之时，比特币区块链的长度已经超过600,000个区块（自创世以来，约每10分钟出一个块）。有时候，两个区块的（暂时）挖矿时间相对较近。比特币的最长链规则和10分钟出块的时间使大部分网络暗示地“投票”选择了他们想要使用哪条链。这种选择取决于多种因素，例如矿工最先收到哪个区块以及区块中包含的交易。这由矿工决定，重要的是，网络中的大多数人会最终统一意见挖哪个区块和放弃哪个区块。废弃的区块被称为孤块，下表中的紫色部分表示孤块。

[![orphan blocks](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-1.jpg)](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-1.jpg)上面紫色的即是孤块。

孤块是有效的区块但是不影响链的长度和稳定性。其他的区块链，例如以太坊，会奖励挖到这些区块的矿工，这些区块称为“叔块”。矿工在挖矿过程中即使这些块未被包括在最终的链中，矿工也会获得奖励。这有助于消除矿工由于网络延迟而面临的潜在不利因素并且不鼓励网络的中心化，单个矿工或者连接不佳的矿工也可以获得补偿。

[![uncle blocks](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-2.jpg)](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-2.jpg)叔块，不像比特币是使用最长的链，Filecoin的共识是寻找最大化利用权重最大的链的算法。
(来源于 [https://vas3k.com/blog/ethereum/#scroll240](https://vas3k.com/blog/ethereum/#scroll240 "https://vas3k.com/blog/ethereum/#scroll240"))

随着2015年《比特币中的安全高速交易处理》(Sompolinsky, Zohar)的发布，区块链的思想不再是链本身，而是有向无环图（DAGs）。用此方式来看，就不再是简单的查看最长的链，而是查看拥有最大权重的DAG（或GHOST - Greedy Heaviest-Observed SubTree 贪婪最重可观察子树协议），它拥有最多的区块。Filecoin就是这样一种协议，使用区块总数以及贡献的存储算力来决定选择哪条链。

GHOSTy协议让矿工记录过去所有被观察到的区块，以增加其区块链的权重。Filecoin的共识机制建立在这些综合之上，叫做tipsets。 如果比特币是靠最长和最有效的链的竞赛来运作，那么Filecoin的期望共识就是基于选举，在指定回合中可以选举多个矿工作为领导者。这就意味着可以在每个区块中创建多个有效的同级区块，**在每个新的纪元（epoch），新一代的家谱发展出来，称之为tipset，这也是我们网络中独特的系统。**

Filecoin中的区块按纪元（epoch）排序，每个新的区块都引用上一个纪元（epoch）中产生的至少一个块（父块）。一个tipset集是具有相同父块且在同一个纪元（epoch）中挖到的有效区块组成。

下图，为了简化没有将存储算力考虑在内，用不同颜色表示的3个来自相同祖父块的tipsets。让我们来计算一下这些tipsets的权重。

![](/uploads/1-tipset-in-epoch-2.webp)

下面第一个图表中， “**祖块+父块+子块**” 给纪元2中的第一个tipset赋予总权重为5.

![](/uploads/3-tipsets-epoch-2.webp)

最后一个tipset(第三张表）拥有总权重为3（一个祖块、一个父块、一个子块）

![](/uploads/3rd-tipset-in-epoch-2.webp)
The final chart offers a comprehensive view of this chain, where the top 1st tipset in epoch 2 wins, although this is not confirmed until the next epoch.

最后的表提供了该链的全面视角，在纪元2里第一个tipset赢了, 尽管到下一个纪元才会被确认。

![](/uploads/all-tipsets.webp)
与以太坊一样，该系统通过确保不浪费任何工作量来激励协作并从总体来提高链上的吞吐量。此外，由于tipset要求严格，所有的块都必须来自相同的父块，并且在相同的高度被开采，因此在分叉的情况下，该链可以实现“_快速收敛_”。

**最终，Filecoin会赋予提供更多存储算力的区块以权重，因为它的核心是存储网络。随着时间的流逝，矿工会聚集在权重最大的链上来创造价值**，而权重小的链将成为孤块。

Filecoin矿工存储的数据越多，则矿工存储算力就增长的越多，网络上的存储算力就越强，矿工就更有可能生成新的区块并赢得区块奖励。要了解有关Filecoin权重系统更多的信息，请查看[this testnet mining post](https://filecoin.io/blog/filecoin-testnet-mining/)，其中概述了Filecoin的存储证明系统
