---
aliases: []
author: ""
categories:
  - updates
date: "2021-05-03T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 2021年4月29日，Filecoin网络已升级至v12
image:
  alt: ""
  url: /uploads/filecoin-blog-purple-light-room-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-purple-light-room-1.webp
title: Filecoin网络v12
_template: blog_detail_ch
---

2021年4月29日，Filecoin网络已升级至v12。本次升级引入了[specs-actors实现](https://github.com/filecoin-project/specs-actors)的[v4](https://github.com/filecoin-project/specs-actors/releases/tag/v4.0.0)，这是具体规定了Filecoin协议规则的一组内置actors。新版specs-actors设计显著提升了性能，所以能缩短区块验证时间。来自[lotus](https://github.com/filecoin-project/lotus)、[venus](https://github.com/filecoin-project/venus)和[forest](https://github.com/Chainsafe/forest)的核心开发者在短短几周之内共同开发并发布了这一升级。分布在不同时区的节点运营方也积极响应，快速地将这些性能改进部署到全网。

## 动机

对所有区块链项目来说，确保验证一个区块所需的时间小于产生区块的时间是很重要的。在Filecoin网络中，每30秒出块，所以验证区块耗时要远远小于30秒。当然，验证区块的耗时取决于多个因素：节点的硬件规格、链上数据的大小、节点上运行的其他程序等。

在v12升级之前，按运行质量排中间的节点运行平稳，区块验证时间远低于30秒。但是，较慢的节点，保存链上完整历史的（因此有很大的数据库）节点验证区块耗时较高。这些节点在验证较慢时会有无法同步的风险。尽管大多数矿工有着高性能硬件和较小的数据库，不会受此影响。但作为生态中的重要成员，包括交易所和存档节点，有出现运行太慢和偶发的同步问题 —— 这对全网健康状况有负面影响。

同步缓慢的原因之一在于，actors代码处理新矿工时，效率不高。在过去的几个月里，网络中有好几波垃圾信息在链上创建了矿工，即创建了大量空矿工条目。这为显著改进性能提供了一个简单的方法，即减少处理空矿工的耗时，就能加快区块验证。在v12版的网络中加入这一改进，也及时确保虚增矿工的垃圾信息不会成为针对网络中较慢节点的攻击方式。

## 性能改进

为了理解v12中引入的性能改进，我们需要了解一些系统细节。位于f03地址的Filecoin cron actor是网络定时在每个epoch运行的系统actor。它负责状态转换，让Filecoin网络得以平稳正确运转。cron actor会每60个epoch（30分钟）处理矿工actor，以验证矿工是否正确证明其负责的扇区存储部分。正是通过cron actor的运转，才确保Filecoin协议的核心：整个网络每24小时遍及一次所有在Filecoin上的存储，自动发现并惩罚丢失或损坏数据的情况。

在网络的第12版之前，cron actor会对每一个矿工actor处理。Filecoin v12做了改进，cron actor只对有需要的矿工actor处理。只有当矿工在证明存储时才需要这样的cron处理。具体说，符合如下标准之一的矿工则需要每60个epoch的cron处理：1）有活动的PreCommit， 2）有活动的扇区，3）在奖励分配表中有奖励。如果一个矿工不满足上述标准的任何一项，在一次cron中则没有需要的处理，完全可以跳过。特别的是，新创建的矿工无需cron处理，只有第一次向网络承诺存储后，才对其进行处理。

在此优化生效之后，Filecoin网络每60 epoch需要处理的矿工从37.5万减少至2000多。这使区块的平均同步速度近乎翻倍，每日状态快照减少20GB以上，几乎翻倍的提升！节点运营方已能看到平均及最大区块同步时间的显著下降。大型存档节点同步失败的情况几乎完全消除了。

v12升级后减少的同步时间：

![](/uploads/image-7.webp)

v12升级后减少的不同步的实例（以epoch为单位）：

![](/uploads/lotus-fullnode-sync-latency-post-upgrade.webp)

## 部署升级

网络v12升级，引入[v4 actors](https://github.com/filecoin-project/specs-actors/releases/tag/v4.0.0)，在[Lotus v1.8.0](https://github.com/filecoin-project/lotus/releases/tag/v1.8.0) 和 [Venus v0.9.5](https://github.com/filecoin-project/venus/discussions/4407)中发布。Lotus团队发布版本的时间，距离升级时间很紧，从发布到网络升级时限只有大约48小时，这是截止日期，所有节点运营方必须此之前升级。Filecoin社区能快速执行升级，这非常重要。因为一旦遇到关键安全问题，需要在短时间内完成修复。为了对此情况做准备，网络在2020年9月，主网上线前，太空竞赛活动中开展了“战争游戏”的场景模拟。

在48小时的时间窗口内，社区能够无缝升级到v12版本，继续证明了我们能在紧急情况下快速升级的能力。如此迅速的运转速度有赖于Filecoin协议实现团队和各节点运营方（包括存储矿工、存储用户和交易所）之间的有效沟通渠道。为了让所有人都能参与，Filecoin社区工程师先在[社区论坛](https://github.com/filecoin-project/community/discussions/74#discussioncomment-642326)发布了升级详细信息，包括升级要点，升级epoch以及指向新版本实现发布时间表的链接，接着更新了[Filecoin网络状态页面](https://status.filecoin.io/incidents/n5m3x2w07x7k)并附带可订阅的通知。开发团队提供了及时的响应支持，确保所有人在多渠道（包括[论坛](https://github.com/filecoin-project/lotus/discussions/6082)，[Slack频道](https://filecoin.io/slack)等）支持下完成升级。

在如此短时间内完成新版本的实现，也需要严格的测试和发布流程。Lotus团队使用了近几个月内新完善的发布清单，来完善流程。另外，在响应社区反馈方面，Lotus团队确保此次强制升级版本中不会引入未经测试的可选功能。网络升级相关的改动是基于[Lotus v1.6.0](https://github.com/filecoin-project/lotus/releases/tag/v1.6.0)开发的，这是Lotus最近的稳定和经过测试的版本。对更愿意冒险的用户，提供[Lotus v1.9.0-rc1](https://github.com/filecoin-project/lotus/releases/tag/v1.9.0-rc1)版本作为发布候选，此版本中包含网络升级和其他新功能。

## 感谢

能够完成如此迅速的升级，并带来显著的性能提升，并非易事！感谢过去几个月里的来自社区的反馈和改进，核心开发者才能实现、测试、并发布高质量的代码来改进Filecoin网络。此外，Filecoin社区中节点运营方持续的参与、用心的支持和快速的响应也贡献了巨大力量，这保证了在一旦有需要时，确保网络可以快速升级。感谢大家！
