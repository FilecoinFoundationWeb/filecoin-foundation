---
title: Lotus推出Lotus Slasher和Lotus Disputer服务
draft: true
excerpt: Lotus团队很高兴与我们的朋友StorSwift合作推出全新Lotus Slasher和增强型Lotus Disputer！
share_image: /uploads/decentralized-social-media.webp
image:
  url: /uploads/0-CC-Sector.webp
date: 2023-08-16T16:00:00.000Z
categories:
  - updates
dim_image: true
---

Lotus团队很高兴与我们的朋友StorSwift合作推出全新Lotus Slasher和增强型Lotus Disputer！Filecoin协议提供的这两项基本服务在维护网络完整性、预防恶意活动和奖励活跃参与者方面发挥着至关重要的作用。

## Lotus Slasher

Filecoin协议对区块生产者可能犯下的三种共识错误设置了惩罚机制。通过Lotus Slasher服务，任何运行Lotus节点用户都可以检测并报告这些错误。该服务会认真监控所有进入的区块是否存在潜在共识错误，并通过调用相应存储提供者actor上的ReportConsensusFaultmethod方法采取行动。

当Lotus Slasher成功识别共识错误时：

- 对错误负责的出块者将被罚款，罚款金额相当于当前epoch区块奖励值的5倍。
- 在900个epoch的最后期限内，他们将被禁止生产更多区块。
- 在此期间，违规的出块者也不得预先提交或恢复存储。
- 成功的Lotus Slasher操作者将获得相当于当前epoch区块奖励值25%的奖励。

## Lotus Disputer

WindowPoST是每日提交的重要证明，用于确保Filecoin网络上所有数据的持续存储。为减少存储提供者和网络带宽的负担，这些证明在链外被接受和记录。Lotus Disputer服务允许第三方Lotus节点操作者使用DisputeWindowedPoSt功能在链外验证已接受的WindowPoST证明。

如果 Lotus Disputer 成功挑战乐观接受的 Window PoST：

- 对错误证明负有责任的存储提供者将根据其从每个错误证明扇区中获得的预期区块奖励比例被罚款。
- 所有证明错误的扇区都被标记为错误。
- 成功的Lotus Disputer操作者将获得固定DisputeReward，目前设定为4FIL。

Slasher和Disputer服务的设计都非常高效和轻便，确保不会对Lotus节点的性能带来不利影响。

请查看Lotus Slasher和Lotus Disputer的全新视频教程[点击此处](https://www.youtube.com/watch?v=akJd6-2kR3Q)！

更多详细信息、配置和设置说明，请访问[官方文档](https://lotus.filecoin.io/lotus/manage/slasher-and-disputer/)。
