---
aliases:
  - /zh-cn/blog/存储提供者经济模型
author: ""
categories:
  - updates
date: "2022-04-05T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 让我们看看存储提供者在Filecoin经济中的角色。得益于EAPS的存储提供者Bootcamp，大家可以看到关于这个话题的完整展示。
image:
  alt: ""
  url: /uploads/the-economics-of-storage-providing.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/the-economics-of-storage-providing.webp
title: 存储提供者经济模型
_template: blog_detail_ch
---

成为Filecoin网络的存储提供者，是参与到保留人类最有价值信息的一种方式。Filecoin社区是快速增长的存储提供者生态的家园，不管它们来自哪里，规模如何。这些存储提供者的大部分都已经成功采用不同的策略和运作机制，成为有财务可行性的业务。

要理解这种可能性，重要的是理解Filecoin网络里存储提供者的经济模型。我们将先解读存储提供者应当熟悉的一些基本概念，这是他们成为Filecoin经济的活跃成员时必须知悉的。

## FIL Token

Filecoin的[_island economy_](https://filecoin.io/blog/posts/filecoin-s-island-economy/)经济模型包括5种不同领域参与者之间的互动：用户、开发者、token持有者、生态伙伴，以及存储提供者（对我们而言最重要）。这些互动需要使用FIL这种功能型token，存储提供者也不例外。因此，网络里发生的这些经济互动是由这个token计价的。这是赋予持有者使用网络权利的方式。

## Filecoin存储提供者的收入与支出

存储提供者在Filecoin网络中有两种主要的收入来源：他们可向终端用户收取数据的存取费用，而且有机会得到FIL形式的区块奖励。

第一种是对所有存储提供者开放的，只要他们满足参与网络所需的[硬件需求](https://docs.filecoin.io/storage-providers/skills/storage#general-hardware-requirements) 。这些费用是Filecoin经济的关键环节，因为它们是由每一个存储提供者决定的，并创造了一个数据存取市场，为大大小小的参与者提供了竞争机会。

第二种是只对成为网络共识节点的存储提供者开放的。要做到这一点，它们必须最少达成10 TiB的投入（committed）存储容量。这一点让他们可以验证Filecoin网络中的下一个区块以获取回报，这跟miner从工作量证明网络里获取Coinbase交易（一种特殊交易类型）以获得报酬很类似。他们获得这种奖励的机会与其投入到网络中可用的总[存储力（Storage Power）](https://filecoin.io/blog/filecoin-guide-to-storage-mining/#storage-power) 是成比例的。

就成本而言，存储提供者要考虑很多要素：购买和维护有竞争力的硬件设备、优化销售和营销活动，用电成本，以及在有需要的时候借入FIL的产生的其他成本和利息。其中一些费用，如硬件设备和用电成本，是可以通过协商调整的。

![](/uploads/pl-_-the-economics-of-storage-providers.webp)

## 质押品

质押品是另一个需要理解的经济概念。这实际上就是存储提供者需要锁定的FIL数量，以确保他们会善意行事，以及他们的动机与经济体的其他成员是相容的。如果他们无法履行其对网络的责任，那么他们的质押品就会被 _slashed_，即会损失一部分FIL.

在计算收支的成本时，质押品是分开考虑的，因为所投入的FIL会在成功的存储和交易协议后返还。不过，它还是一个重要的考虑因素，毕竟也算是初始投资的一部分。

质押品有三种类型：

- **初始投入的质押品：** 这是参与Filecoin经济需要投入的FIL数量。它相当于7日价值的扇区错误费用（Sector fault fees）再加上一个扇区错误检测费用。查看[Filecoin 规格说明](https://spec.filecoin.io/#section-systems.filecoin_mining) 以了解更多。
- **作为质押品的区块奖励：** 在共识过程中提交一个区块后存储提供者能获得的FIL数量。这个数量的75%可以在6个月期间内解锁，如果一个扇区在到期日前被终结，那么就会受到 _slashing_ （没收质押品）的惩罚。
- **存储提供者交易协议质押品：** 如果一个交易协议被终止，那么就会 _slashed_ （没收）一定数量的FIL。更高的质押品可能意味着对潜在客户的更高可靠性。

## 准入门槛

Filecoin社区致力于让网络及其经济对所有参与者都是开放的。这首先就是从其非许可型的社的设计开始。潜在的准入门槛（如高额质押）是由纳入每一个存储提供者的总存储容量作为考虑因素来调节的。不过，有一些方面，如最小的硬件需求和架设节点所需的陡峭学习成本还是让很多潜在的存储提供者望而却步。

社区已经用不同的方式去应对这些问题，这包括了关于优化小型和个人硬件设施的[教育材料](https://www.youtube.com/watch?v=LKMjCgo-fkA)。另外，参与到[ESPA的存储提供者Bootcamp](https://www.web3espa.io/?utm_source=PL&utm_medium=blog&utm_campaign=highlight) 也是学习成为存储提供者所需技能和准备的好方法。

## 工具

鉴于Filecoin网络在不断变化和扩展，像存储提供者成本、区块奖励数量和FIL的价格也在频繁变化。存储提供者社区可以依靠一系列重要工具来决定其是否适合参与到Filecoin经济里。

[Filfox](https://filfox.info/en) 等网站是重要的信息来源，能帮助存储提供者的决策流程。Filfox会追踪广泛的深度指标，包括存储供应的实时成本、账户抵押品和gas费用等关键数据。

新的[存储提供者网站](https://sp.filecoin.io/)也是潜在的存储提供者可以参考的优秀信息来源。在上面你可以找到信息量很大的视频、问答内容和收益计算器，以及如何与Filecoin专家建立联系的方式等！

## 进一步的阅读材料

要学习更多Filecoin存储提供者的经济模型，可以查看其他重要的资源，如[设计Filecoin经济（Engineering Filecoin’s Economy）论文](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf)，以及[Filecoin的加密经济学构造）（Filecoin’s Cryptoeconomic Constructions）](https://filecoin.io/blog/posts/filecoin-s-cryptoeconomic-constructions/)。此外，确保在[Slack](https://filecoin.io/slack)和[Twitter](https://twitter.com/FilecoinSP?s=20&t=Cied9srtVmuumV69dT7NSA)上加入社区。
