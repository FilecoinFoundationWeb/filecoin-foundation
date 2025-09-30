---
aliases:
  - /zh-cn/blog/主网启动的矿工指南
author: Filecoin Project
categories:
  - updates
date: "2020-10-14T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "目前距离主网启动只有不到24小时了，是不是听起来很疯狂! \U0001F92F  随着太空竞赛2：Orbital Burn最后几个小时的倒计时，以下是一些有用的提示和常见问题解答来帮助矿工顺利过渡到主网。"
image:
  alt: ""
  url: >-
    /uploads/journey-to-liftoff-header_hu31d7f1473b1207cbfd5bee7808f31b82_271861_1500x0_resize_q90_linear_2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: >-
  /uploads/journey-to-liftoff-header_hu31d7f1473b1207cbfd5bee7808f31b82_271861_1500x0_resize_q90_linear_2.webp
title: 主网启动的矿工指南
_template: blog_detail_ch
---

目前距离主网启动只有不到24小时了，是不是听起来很疯狂! 🤯 随着太空竞赛2：Orbital Burn最后几个小时的倒计时，以下是一些有用的提示和常见问题解答来帮助矿工顺利过渡到主网。

在[太空竞赛2：Orbital Burn](/blog/space-race-2/#introduction-space-race-2)期间，矿工们的存储速度比以往任何时候都快。目前网络存储已达530 PiB——相当于超过 _100亿_ 个YouTube视频! Orbital Burn的主要目标是模拟真实主网网络动态的测试条件，这样矿工们就可以继续积累操作经验，而协议开发者们也可以分析和改进网络在真实条件下的性能。

在SR1结束后的过去4周内，我们看到了在[8个主要的lotus版本发布](https://github.com/filecoin-project/lotus/releases)的过程中，网络运营、稳定性、效率和弹性方面的巨大改进。这些版本包括[我们的第一个Filecoin改进提案(FIP)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0002.md)，用来减少Window PoSt故障费用([lotus 0.8.0](https://github.com/filecoin-project/lotus/releases/tag/v0.8.0))，一个重大的迁移，使Filecoin内部的核心行为者逻辑更容易升级([lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0))，甚至我们的第一个状态突破的热修复([lotus 0.10.0](https://github.com/filecoin-project/lotus/releases/tag/v0.10.0))。矿工们也在他们的存储挖矿稳定性、可升级性和效率方面做出了关键性的改进——同时作为[Slingshot](http://slingshot.filecoin.io/)的一部分，也对交易本身进行了压力测试。总的来说，[SR2：Orbital Burn](https://filecoin.io/blog/space-race-2/#introducing-space-race-2) 取得了巨大的成功，在不到一个月的时间里，又落地了 _**300PiB**_ 的存储!

![太空竞赛1 仪表板](/vintage/images/blog/SP2-dashboard.jpg)

## Orbital Burn奖励

SR2的奖励：Orbital Burn的奖励是为了模拟真实世界的网络条件而设计的，在整个比赛过程中跟踪存储的扇区、承诺的抵押品以及收取的区块和Gas费。参加SR1和SR2的矿工只需要在10月15日主网过渡期间继续运行他们的矿机就有机会获得奖励。

作为主网纪元的一部分：

1. 所有承诺扇区将迁移到主网，并拥有相应的权力——帮助矿工立即开始出新块并获得奖励。

2. 矿工还将获得所有迁移扇区的质押抵押品作为奖励，当矿工的扇区到期时（默认为封装后540天），这些抵押品将解锁给矿工。

3. 太空竞赛期间获得的区块奖励将在出块后180天内线性解锁。(注：如果我们在主网启动后不久[FIP-0004](https://github.com/filecoin-project/FIPs/blob/fip-0004/FIPS/fip-0004.md)提案等待社区批准通过，未来的存储挖矿奖励将使奖励的25%可以立即使用无须等待解锁。)
4. 参加Slingshot的矿工还将收到存储和检索交易的用户付款。

这些奖励是对过去几个月来帮助压力测试和改进网络的大小矿工做出巨大贡献的认可。也是Filecoin网络发展的一个关键性和收获高成效的时期。非常感谢你们让Filecoin网络和社区变得更加强大! 💪

## 水龙头&报销

在太空竞赛期间，我们已经运行了各种测试网FIL水龙头来让为矿工测试存储和正常的网络操作报销。在为主网做准备时，为了限制滥用和乱用，我们现在已停止使用我们的自动故障报销服务和我们的质押报销服务（昵称为PCR机器人），它们帮助测试和报销了PreCommit & ProveCommit消息。从主网启动开始——将由矿工靠自己出资继续发展，并全权负责管理矿工的可用余额、所有者、控制权和工作者余额。

为了帮助解决这个问题，我们已经对所有负余额的矿工执行了 _一次性_ 补偿——将他们充值到可用余额为**0**，这样所有矿工就可以无负债地进入主网。除此之外，我们还向所有在过去一周内太空竞赛2中积极存储的矿工发放了 _一次性_ **100枚 FIL奖励**。通常情况下，我们会避免发放鼓励人们创建sybil节点的奖励——然而，对于这个一次性的“超越”奖励，我们特别想表彰那些在整个SR1&2期间努力达到10TiB最低矿工规模以赚取区块奖励的小矿工们。感谢你们为帮助Filecoin变得更好而进行的压力测试、问题报告和漏洞修复! 🙏

[太空竞赛2：Orbital Burn](/blog/space-race-2/#introduction-space-race-2)在我们过渡到主网之际圆满结束，但是[Slingshot](http://slingshot.filecoin.io/)的竞赛还在进行中! 为了支持参与Slingshot的矿工在网络上存储有价值的数据，我们计划在网络稳定后继续运行一些小型水龙头，比如PublishDeals和WindowPoSt报销机器人。如果你有兴趣加入Slingshot可以点击[此处](https://slingshot.filecoin.io/)申请。

## 主网启动FAQ

**Filecoin主网什么时候启动?**

- 官方主网启动时间是在第148888个区块高度（大约在UTC时间下午3点）。

**作为矿工在主网启动时我需要做什么？?**

- 作为存储矿工，您可以通过提交新的ProveCommits向网络提交新的存储容量，可以通过PublishingDeals为存储用户存储数据，您也可以通过WindowPoSts继续证明您现有的已承诺存储。

**如果我在参与太空竞赛，需要更改我的挖矿配置吗?**

- 不需要，从[lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0)升级开始，所有矿工都已经过渡到主网f0xxxx地址。您的账户和矿工地址在主网过渡期间将保持不变。

**从操作安全角度来说，在主网启动之前需要我改变什么配置吗？?**

- 从[lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0)开始，会有一个新的CLI来管理您的矿工所有者地址。与所有者地址相关联的钱包应被设计为冷钱包离线保存，因为冷钱包不应被频繁使用，且冷钱包对保障矿工的资金安全至关重要。在生产环境中，我们强烈建议将所有者地址和工作者地址分开。详见[此处](https://lotus.filecoin.io/tutorials/lotus-miner/run-a-miner/#setup-wallets-for-the-miner)指南。

**如何在主网启动过渡期间保障矿工稳定?**

- 我们建议所有矿工设置一个[单独控制地址](https://lotus.filecoin.io/tutorials/lotus-miner/run-a-miner/#setup-wallets-for-the-miner)，用于向链上提交window PoSt，以避免在mpool中卡住关键的以及对时间敏感的消息。为了减轻Gas相关的问题，调整您设置的费用上限也很重要。阅读此篇[博客文章](/blog/filecoin-features-gas-fees/)来了解更多信息。

**如果在主网启动期间我停掉了矿机会怎样?**

- 如果您关闭矿机，并停止主动证明您在网络上承诺的存储和交易，您的矿机将在第一次错过提交证明时失去效力，并在约24小时后开始因错过证明窗口期而被罚款。每错过一个提交证明的期限，您就会有更多的罚款。如果您没有在14天内缴纳您的罚款和恢复存储交易，您矿机的存储算力将被从网络中永久删除，所有等待释放的奖励将被烧毁。

**鉴于原测试网正在向主网过渡，是否会有一个新的测试网?**

- 我们计划用不同的配置运行许多测试网。[校准网](https://network.filecoin.io/#calibration)已经被设置为一个新的可长期运行的测试网，我们计划用它来测试新版本和状态升级，然后再在主网中进行。除了增加了支持512 MiB扇区以加快测试速度以外，它的参数与主网相同。我们鼓励大家在重大升级之前可以在校准网运行矿机！
