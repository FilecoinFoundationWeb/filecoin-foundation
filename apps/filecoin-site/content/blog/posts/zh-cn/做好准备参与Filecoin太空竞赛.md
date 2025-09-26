---
aliases:
  - /zh-cn/blog/getting-ready-testnet-incentives
author: ""
categories:
  - updates
  - events
date: "2020-07-14T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 随着主网启动临近，我们下一个里程碑是发布Filecoin测试网奖励计划——也称为太空竞赛。本次竞赛旨在对网络进行压力测试，鼓励世界各地的参与者参与，并帮助矿工做好运行世界上规模最大的分布式网络的准备。
image:
  alt: ""
  url: /uploads/space-race-welcome-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/getting-ready-space-race-1.webp
title: 做好准备参与Filecoin太空竞赛
---

随着我们进入了主网启动的最后准备阶段，[Lotus](https://lotus.filecoin.io/) （Filecoin实施方案）正在快速发展。仅在过去的两周内，团队就对Filecoin市场的实施方案进行了[数据传输的重大改进](https://github.com/filecoin-project/go-data-transfer/pull/55)，完成了用于[验证](https://github.com/filecoin-project/go-fil-markets/pull/304) 和[快速检索](https://github.com/filecoin-project/lotus/pull/2323)交易的整个扇区生命周期性能提升，并[升级了承诺容量扇区](https://github.com/filecoin-project/lotus/pull/2220)和为 [Filecoin 参与者](https://github.com/filecoin-project/specs-actors/releases)带来了巨大改进。矿工社区也正在迅速发展，全球各地的矿工已将PB级的存储提交到Filecoin测试网上，本周达到**20PB存储**的新里程碑。 🎉

![测试网数据](https://filecoin.io/vintage/images/blog/testnet-stats-jul-14.jpg)

随着主网启动，我们下一个里程碑是发布[Filecoin测试网奖励计划](https://filecoin.io/blog/announcing-testnet-incentives/) ——也称为太空竞赛。本次竞赛旨在对网络进行压力测试，鼓励世界各地的参与者参与，并帮助矿工做好运行世界上规模最大的分布式网络的准备。在为期3周的竞赛中，矿工将竞争存储网络上尽可能多的存储容量。全球排名前100位的矿工以及各大洲排名前50位的矿工将根据竞赛期间在Filecoin网络上的存储量来获取Filecoin奖励。除了竞赛优胜者获得奖励之外，太空竞赛里的filecoin代币还致力于帮助矿工在Filecoin主网上更快地提高其存储量，并进行其他的优化工作以保证过程顺利运行。有关竞赛规则和参赛要求，请参考我们的[博客公告](https://filecoin.io/blog/announcing-testnet-incentives/)。

## 最新区块奖励计划

除了提高存储容量外，验证Filecoin网络作为*为人类信息社会奠定分布式的、高效且强大的基础*能够真正成功的重要部分就是 - 来测试Filecoin区块链中的实际挖出区块总量。一旦主网启动，这将成为矿工通过运行网络获得奖励的主要方式之一。因此，为了确保测试网激励计划能准确模拟主网动态，我们很高兴地宣布，将**额外奖励10万枚FIL**按比例分配给20名获得最多区块奖励的参与者。额外奖励池将遵守与太空竞赛相同的[规则与要求](https://filecoin.io/blog/announcing-testnet-incentives/#rules)，并将拥有自己的排行榜。

请加入[Filecoin slack](https://filecoin.io/slack) 上的**#space-race**频道获取最新动态！

## Filecoin 漏洞赏金计划

运行测试网奖励计划是主网启动前迈出的关键一步，以便我们在主网启动前发现并修复所有漏洞或重要安全问题。因此，我们**强烈鼓励**太空竞赛的参与者在使用测试网时进行评估并报告他们在Filecoin协议或实施方案中发现的任何潜在攻击、问题或漏洞。**请对网络进行压力测试，并尝试攻击，向我们报告您遇到的任何问题！**

为了更好地起到帮助，我们将通过 [**Filecoin漏洞赏金计划**](https://bounty.filecoin.io/) 对帮助网络发展的参与者进行奖励。如果您有兴趣发现并解决漏洞获得奖励，请详细阅读！我们将在太空竞赛之前在[漏洞赏金网站](https://bounty.filecoin.io/)上公布其他目标和赏金。

## 最新奖励计划校准期

我们一直计划在7月20日发布我们的测试网奖励计划，但[收到来自社区的强烈要求](https://filecoinproject.slack.com/archives/CPFTWMY7N/p1594401718461200)，希望我们为竞赛参与者创建一个窗口期，以让他们调试参与竞赛拥有最新功能的挖矿配置和真实环境下的排行榜、存储和检索交易评估系统和最新的经济参数。在过去几周内，发生了很多改进，矿工和开发者都希望在竞赛前进行良好的测试。

因此，我们将在3周的竞赛之前增加为期2周的校准期。在2周的校准期内（7月20日至8月2日），矿工可以在真实竞赛环境下进行调试校准，并查看其成绩如何影响比赛排名。这些将在具有所有最新功能和优化的新的开发网上运行。我们将重置Filecoin测试网并在8月3日正式开启为期3周的竞赛。

在2周的校准期内，我们强烈鼓励矿工将精力关注于太空竞赛的开发网上，以便在竞赛开始前发现并解决配置中的任何问题。请加入[Filecoin slack](https://filecoin.io/slack)的 **#space-race**频道，我们将于下周分享有关竞赛入门的说明！

太空竞赛还将为参与者举办一系列活动：

- 开幕式和闭幕式
- 与竞赛组织者的AMA，将回答有关网络奖励、竞赛架构和资格规则等问题
- 为帮助矿工更好地了解Filecoin加密经济参数的最近更新、最近几周Lotus的新功能和如何高效地对大型挖矿进行配置以充分参与竞赛等内容，我们将举办相关的研讨会等等
- 与Filecoin 社区参与者的AMA
- 给参与团队展示其配置的机会
- 以及更多其他活动!

## 路线图更新

尽管我们很高兴能给矿工社区（还有开发者们）更多时间来充分参与本次竞赛，但我们无法缩短太空竞赛与主网启动之间的时间。这是测试网奖励计划之后进行关键漏洞修复、设置运行时间和优化最终参数的关键窗口期。因此我们将主网启动窗口期更新为**8月31日至9月21日**以保证额外的校准期。

如往常一样，我们将保持更新[公开项目路线图甘特表](https://app.instagantt.com/shared/s/1152992274307505/latest)来反映接下来的里程碑的估计时间。请记住，这些日期仍然是根据社区要求我们尽力而为的乐观估计。它们不是任何承诺、保守估计或任何形式的保证。如果出现安全漏洞或其他主要问题，我们将确保在主网启动前花费必要的时间来充分解决问题，我们衷心地希望这些不会发生，但这是我们致力于启动安全的区块链网络的必要组成部分。

我们很高兴并且很感激与您同在。 🛠️
