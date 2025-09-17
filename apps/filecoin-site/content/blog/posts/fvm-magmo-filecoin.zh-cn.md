---
aliases: []
author: ""
categories:
  - updates
date: "2023-01-05T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 通过状态通道和小额支付功能，Filecoin检索市场将在交易成本和时间方面得到大幅改善。
image:
  alt: ""
  url: /uploads/filecoin_blog_header__fvm_imaginarium__magmo.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin_blog_header__fvm_imaginarium__magmo.webp
title: FVM用例探索之旅：Magmo将状态通道引入Filecoin虚拟机
_template: blog_detail_ch
---

_Filecoin虚拟机（FVM）发布即近，但目前已有惊艳的项目正在开发中。FVM Imaginarium活动将焦点放在那些正在构建令人惊喜的用例并将新机会和新概念引入FVM的团队上。_

Filecoin虚拟机（FVM）将于2023年2月推出，这将释放出一波新的可能性，包括可编程存储原语，如存储奖励和拍卖、跨链互操作性桥、以数据为中心的DAO、Layer 2解决方案（信誉系统、计算结构等）以及更多方面。

FEVM一旦在主网上启动，以太坊虚拟机(EVM)上的Solidity智能合约将能够通过调用内置actor来访问Filecoin功能，现有的以太坊工具也将与Filecoin兼容。

FVM社区的参与度持续增长，对于这些新功能可以为Filecoin网络和Web3解锁什么，很多创建者正带着新想法进入GitHub repo和代码库。

新推出的[Space Warp](http://spacewarp.fvm.dev)项目正在帮助创建者社区加速开发Filecoin网络上的应用程序。此外，随着网络准备通过[FVM路线图](https://fvm.filecoin.io/#roadmap-4)中详述的时间表来推进工作，开发团队已经加入了FVM Foundry早期创建者计划。在FVM核心团队的密切指导下，他们正在FEVM测试网上打造有价值的项目。

## Magmo

[Magmo](https://magmo.com/)是在FEVM建设的团队之一，它是一个开发工作室和研究团队，是Consensys Mesh的一部分。Magmo专注于为关键基础设施系统打造分布式Web3可扩展性解决方案。

Magmo曾参与过[状态通道](https://statechannels.org/)和[SAFE](https://github.com/statechannels/SAFE-protocol/blob/main/doc/SAFE.md)等项目。由于FEVM的推出，团队目前正致力于将状态通道引入FVM，并使网络的可扩展性得到关键改善。

## 状态通道

状态通道扩展了点对点区块链交互，是“[一种通过L2网络实现超低成本、接近零延迟的加密资产有条件传输的技术]”(https://docs.statechannels.org/)。换言之，它可以极大减少双方的交易成本和时间。

交易成本和时间成本是转账或发行NFT这样简单操作的两个主要痛点，用户往往不得不面对交易费用和等待时间，而这些并不能很好地转化为现实世界中的交互。

状态通道解决这些问题的方法类似于一个选项卡栏。与另一方建立关系，其中一方或双方将在一次性交易中锁定数字资产。在此之后，双方能够以点对点的方式进行交互，而无需在区块链上播放其后续交易。

这种机制允许用户即时结算大量交易，而无需支付gas费或等待存储提供。一旦“选项卡”关闭，各方将依赖加密签名的消息来统一区块链上的帐户状态。在Magmo的内部测试中，状态通道目前能实现的**首次支付时间仅为100毫秒**。

## Filecoin上的状态通道

状态通道将从根本上改善[Filecoin检索市场](https://retrieval.market/)的工作方式。除了存储交易，Filecoin用户端还通过检索交易与网络交互。在检索交易中，他们向检索提供者支付一定数量的FIL换取数据访问权限。Magmo的状态通道解决方案将通过小额支付来提高交易效率。

由于状态通道的低延迟和零成本交易，客户将能够持续不断地向存储提供者支付少量FIL。这是很具有吸引力的替代方案，因为在目前的网络能力中，他们需要专门用大额操作来结算交易，以避免提高交易成本。

## 状态通道的前景

Magmo的解决方案已在[Wallaby测试网](https://github.com/filecoin-project/testnet-wallaby)上部署，其中FEVM功能是实时的且在不断改进，它已经能够从EVM上无缝移植。团队依靠在EVM上发现的相同依赖项的可用性，来构建针对Filecoin检索市场优化的状态通道解决方案。

一旦主网启动，带有状态通道的小额支付将会让使用Filecoin作为分布式存储基础设施的内容分发新模式成为可能。他们可以引入诸如按分钟付费的流媒体服务和其他模式，客户和用户就能够更细化地控制数据检索需求以及和存储提供者的交易方式。

## 参与其中

状态通道是一个开放的项目，欢迎积极参与。团队组织了一个以研究为重点的论坛，您可以在此参与当前在Filecoin上构建的工作。您还可以在项目[博客](https://blog.statechannels.org/)或[GitHub](https://github.com/statechannels)上了解更多关于状态通道的信息。

Magmo是FVM Foundry早期创建者计划的受益者。第一批相关FEVM用例将持续至2023年2月。同样地，若您想通过Next Step Micro Grant(小额开发者资助)增值的Filecoin应用，请务必查看[Space Warp](https://spacewarp.fvm.dev/)项目。

在[GitHub](https://github.com/filecoin-project/ref-fvm)上深入探索FVM，并查看相关[说明](https://docs.filecoin.io/fvm)，了解EVM如何映射至FVM。若您有任何问题或想法，请与社区[分享](https://filecoin.io/slack)！
