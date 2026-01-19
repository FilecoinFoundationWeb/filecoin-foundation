---
aliases: []
author: ""
categories:
  - updates
date: "2022-11-22T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "即将推出的Filecoin v17网络升级，代号为“Shark \U0001F988”，将会有一系列改进和简化。存储交易和提供者交互的智能合约，将为可编程存储奠定基础。"
image:
  alt: ""
  url: /uploads/sharknv17.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sharknv17.webp
title: "Filecoin v17 Shark \U0001F988网络升级"
_template: blog_detail_ch
---

即将推出的Filecoin v17网络升级，代号为“Shark 🦈”，将会有一系列改进和简化。存储交易和提供者交互的智能合约，将为可编程存储奠定基础。目前预计这将是FEVM网络v18(EVM在[FVM]上的运行时间(https://fvm.filecoin.io/))于2月份发布之前的最后一次升级。自2022年3月以来，我们一直在设计和开发这些可编程性的改进，很高兴能够向前迈出这一步。v17网络升级拟于2022年11月30日(大约UTC 14:00在纪元2383680)启动，并已在校准网络上部署，更多细节请参见[此链接](https://github.com/filecoin-project/community/discussions/74?sort=top#discussioncomment-3825422)。

在v17中激活的FIP完整列表可在本文末尾查看。您可以从[7月起的PL EngRes全员深度探索](https://www.youtube.com/watch?v=oQTPUE4MN_4&list=PLhuBigpl7lqtkWt7koiW6SvQKzT_O4bvY&index=13)和10月的Lotus nv17概述中了解更多信息（详见下文）。

<iframe width="560" height="315" src="https://www.youtube.com/embed/10TVAH_bseY" title="Introducing Shark - Filecoin Network Version 17" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

本次升级亮点

[FIP-0029](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)规定了一个不同于其所有者的存储提供者**受益人地址**。该受益人拥有从链上存储提供者提取资金的唯一权利，但不得超过一定的金额和时间限制。该受益人是固定的，直到达到期限或限额，或受益人同意更改。这是存储提供者质押抵押品的资金借贷机制的关键促成因素，包括链下和链上借贷市场。贷方可以对提供者的链上参与者进行财务控制，而将运营控制权留给运营商。

[FIP-0044](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0044.md)为参与者指定了一种**标准化认证**的方法。这扩大了可以验证部分数据的实体范围，从拥有加密私钥（通过签名进行验证）的实体扩展到任何链上的参与者或智能合约。直接的好处是参与者和智能合约将能够进行存储交易🎉。存储协议建议通常由交易用户签署，但是智能合约不能有私钥，所以他们不能签署任何东西。通过FIP-0044，内置存储市场参与者将在链上咨询交易用户，不再要求它是一个带有加密私钥的账户。[数据DAOs](https://filecoin.io/blog/posts/the-future-of-datadaos/)，我们来了！

[FIP-0045](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)是其中最大的变化，它将Filecoin Plus验证的注册表参与者从内置存储市场中分离出来。由此带来的好处，存储提供者将能够立即享受到：

- 不再稀释QA-power——获得扇区承诺生命周期的10倍提升
- 默认情况下，比交易期限多出90天的QA-power
- 对愿意协调延长期限的用户，每笔交易最多可获得5年的完整QA-power授权——这并不完全是交易续约，但几乎一样好。

在协议层面，我们将获得：

- 简化质量调整功率的计算，允许更灵活的存储
- 消除重复使用存储容量的障碍，即对同一扇区进行重复的ReplicaUpdate，预计明年初扇区重新“[Snap](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s)”
- 分离单一参与者(从而降低风险)，最终将市场参与者完全从共识关键集合中移除。

请查看Lotus团队Zenground0的[详解视频](https://www.youtube.com/watch?v=4UaFN-w_OzM)进行深入了解。

FIP-0045是实现**替代性存储市场**所需的两大变革之一：在用户和提供者之间进行交易的智能合约。内置存储市场参与者目前垄断了中介交易，但我们希望向用户编程参与者和智能合约开放该领域，以改善并扩展交易能力和政策。内置市场简单、有限，只能通过不频繁的全网络升级来改善(这令人沮丧)。对替代性市场的支持将为实现交易扩展、多扇区交易、复制、重新谈判、未来产能协议、奖金和拍卖、保险等功能开辟道路！这个领域的创新应当也将会对开发者开放，而不限于网络共识。

如下是v17中的所有FIP：

- [FIP-0029](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)：存储提供者的受益人地址
- [FIP-0034](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md)：设置独立于扇区内容的预承诺存款
- [FIP-0041](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0041.md)：PreCommit和ReplicaUpdate的向前兼容性
- [FIP-0044](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0044.md)：Actors标准认证方法
- [FIP-0045](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)：从市场上分离已验证注册表

若您想了解更多信息，或有打算为未来的协议改进出一份力，请加入[GitHub上的FIP论坛](https://github.com/filecoin-project/FIPs/discussions)，或[Filecoin Slack](http://filecoin.io/slack)上的# filp -fips讨论组。
