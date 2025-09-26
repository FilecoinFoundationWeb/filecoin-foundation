---
aliases: []
author: Filecoin Project
categories:
  - updates
  - interviews
  - events
date: "2020-12-15T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 来自12月11日由Filecoin和ETH Global主办的存储市场峰会的要点。
image:
  alt: ""
  url: /uploads/sms-header-2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sms-header-2.webp
title: Filecoin资源合作与风险管理
---

12月11日上周，ETH Global和Filecon共同举办了存储市场峰会（SMS），并在当日的活动中专门讨论了Filecoin生态中的资源合作和风险管理。以下是此部分讨论的演讲回顾与结论提要。

您可在此处浏览[议程](https://sms.ethglobal.co/)并查看[资源合作和风险管理部分的完整内容](https://www.youtube.com/watch?v=leJHrvz-YY8&t=1h34m41s)。

## 从质量指标到声誉系统

_以下是BlockScience首席执行官兼联合创始人Michael Zargham在SMS上的演讲总结。_[_请在此观看完整记录_](https://youtu.be/leJHrvz-YY8#t=1h48m08s)_。_

Filecoin网络存储大量数据的同时也产生了大量数据。在所有的分布式异构数据中，我们需要研究如何将这些数据运用到工作中，使生态更加丰富和强大。我们正在解决如何在Filecoin网络内获得质量指标和声誉的问题。

当我们将来自网络的数据用于辅助决策时，这其中的过程会很多，需要把原始的、低层级的数据提升到网络中的参与者可以解释和应用到实际中的水平。

Filecoin的棘手之处在于，在传统的Web2或企业环境中，有高度专业化的团队来开发和维护数据基础设施，尤其是那些生产的数据量如Filecoin网络一样的公司。那么，我们的问题就是： 我们如何才能在开放网络上实现公共数据的相同性能和质量？我们需要网络参与者能够根据他们从网络中获得的数据进行**解释**并**应用**到实践中。我们已经知道某些情况下这一点至关重要：

- **贷款人**根据**交易核查情况**决定**借出**多少FIL。
- **承兑商**根据故障分布决定承兑哪些贷款。
- **存储用户**决定以正常**运行时间**为条件与哪些矿工**进行交易**。
- **矿工**制定策略以通过**交易量增长提高投资回报率**。
- **保险公司**根据**存储容量的波动性**决定为哪些矿工投保。

所有这些决策都应该以数据为驱动。在存储或说明层面，没有任何一方拥有数据，因此我们希望看到不断增长的此类数据分析提供者。其中一个例子就是**声誉评分**系统。

我们要确保声誉系统不是那种像信用打分那样的 "上帝之眼"，即如果你做得不好，就失败了，这类信用打分过于主观决断。声誉系统要推动普通人对网络使用。消费者想要使用网络上的数据，但不需要（或不想）知道Filecoin网络上的低级信息。他们可以相信它能为他们提供服务和决策支持。

## Codefi存储 & DeFi转接桥

_以下是ConsenSys Codefi的Corbin Page和Mike Alonso在SMS上的演讲总结。_[_请在此观看完整记录_](https://youtu.be/leJHrvz-YY8#t=2h08m14s)_。_

### Codefi网络: 存储

ConsenSys Codefi在ConsenSys产品组件中创建了金融应用程序。我们的产品模块之一，Codefi Networks，专注于帮助分布式网络在主网启动后的几个月内起步。在起步阶段，任何新市场都在努力找出最佳的定价和细分市场。在Filecoin生态中，其中一些细分市场是Filecoin、Filecoin Plus、声誉、矿工历史等。我们创建Filecoin存储应用产品来促进价格发现的过程。

存储市场上的声誉由以下几个方面组成：存储规模（容量）、故障数量、存储的一般定价以及成功交易的数量。我们把声誉系统作为一种进化系统。我们看到了矿工和网络参与者的评论，因此正在根据存储提供商的需求进行迭代。声誉系统将继续发展，我们也将看到什么是最适合大家的。

Codefi在Filecoin的存储应用将推出以下功能：

- 存储价格发现
- 存储提供者的声誉
- 存储提供者的交易历史
- 顶级网络指标
- 可通过API访问。

### Codefi DeFi转接桥

DeFi转接桥帮助将FIL与DeFi生态及其在以太坊区块链上的功能桥接起来。DeFi转接桥允许用户将FIL转换为以太坊上的映射FIL。最近，我们与RenVM一起推出了renFIL。用户将FIL发送到存款地址，等待确认，然后在你的钱包中收到renFIL，反之亦然。他们可以在去中心化市场上借用renFIL，并将其转换为FIL在Filecoin网络上使用。

我们的目标是将FIL与现货市场、借贷市场、衍生品市场等连接起来，为FIL持有人提供更多的选择权。特别是我们希望让FIL进入以太坊上的去中心化借贷市场，为矿工等需要更多资金的网络参与者提供更广泛的FIL使用。

Codefi为Filecoin创建的DeFi转接桥推出了以下功能：

- 将Filecoin转换为映射Filecoin (renFIL)
- 将renFIL转换为Filecoin
- 借renFIL
- 贷renFIL
- renFIL DeFi市场API
- 向**任意**DeFi用户开放

## 为矿工提供资产兑换服务

_以下是DARMA Capital联合创始人James Slazas在SMS上的演讲总结。_[_请在此观看完整的记录_](https://youtu.be/leJHrvz-YY8#t=1h55m47s)_。_

DARMA Capital（数字资产风险管理顾问）是一家大宗商品资金池运营商和大宗商品交易顾问及掉期公司。DARMA在美国大宗商品期货交易委员会（CFTC）注册，是NFA的成员。我们（DARMA）真正想表达的是DARMA目前已经创建了Filecoin FIL资产兑换功能。我们的目标是让矿工——无论是大矿工还是小矿工避免借款市场中存在的一些非常高的借贷利率，从而让矿工都能获得FIL代币。

资产兑换是两个交易方签订的衍生品合同。双方交换的要么是现金流，要么是资产，掉期协议始终是平衡的。

如今，借贷市场从能够每天从1%甚至到100%的年化利率借贷fil。为了帮助生态的发展，我们与协议实验室和基金会合作，来提供这个产品。我们基本上认为这是一个“低于市场”利率水平的产品，只是为了鼓励Filecoin网络的更多增长和更多容量。

我们正在与矿工建立关系，以更好地了解他们的商业模式，并继续提供对他们和Filecoin网络有利的服务。我们提供Filecoin资产兑换服务的两个目标是：

1. 减少或消除矿工在试图获得 FIL 时面临的昂贵借贷问题。我们希望降低该成本的波动性以有助于他们的业务运营。
2. 与不同的团体合作，鼓励小矿工和大矿工共同建立稳健和可持续的业务。

如果您是矿工，有兴趣了解更多关于FIL兑换的信息，请联系DARMA，[info@darma.capital](mailto:info@darma.capital)。

存储市场峰会于2020年12月11日结束。[在YouTube上观看完整的记录](https://www.youtube.com/watch?v=leJHrvz-YY8)。

_免责声明:_

- _以上演讲中不含有关投资建议的内容。_
- _演讲中的任何模型均基于许多假设，不应作为真理的来源。不能依靠任何仅用于说明目的的估测信息，您应根据代码和Filecoin规范建立自己的模型。_
