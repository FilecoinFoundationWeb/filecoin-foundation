---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-08-05T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  我们很高兴地宣布，Chainlink和Filecoin正在发起联合资助计划，以加快在单个应用中整合Chainlink分布式预言机和Filecoin分布式存储的混合式智能合约。
image:
  alt: ""
  url: /uploads/chainlink-filecoin.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/chainlink-filecoin.webp
title: Chainlink-Filecoin联合资助，面向结合分布式存储和预言机的dApp
_template: blog_detail_ch
---

我们很高兴地宣布，[Chainlink](http://chain.link/)和[Filecoin](https://filecoin.io/)正在发起联合资助计划，以加快在单个应用中整合Chainlink分布式预言机和Filecoin分布式存储的[混合式智能合约](https://blog.chain.link/hybrid-smart-contracts-explained/)。

混合式智能合约同时使用区块链上运行的代码（链上）和区块链之外的数据和计算（链下）。这种混合式架构带来更先进的经济和社会协调方式，既能保留区块链防篡改和不变性的特征，同时通过安全的链下预言机服务获得更好的扩展性、保密性、与现实世界数据源的连接能力。

通过结合Filecoin和Chainlink，开发者得以构建端到端的去中心化应用，并让应用拥有低价格的不可变数据存储能力，并能与外部资源有通用且安全的连接。

这次资助计划的推出紧跟着Filecoin和Chainlink社区的几项其他联合行动。例如，Chainlink和Filecoin正在打造[Chainlink外部适配器](https://filecoin.io/blog/posts/filecoin-and-chainlink-integration/)，用于两个项目之间的双向通讯。另外，Chainlink Labs团队在Filecoin Launchpad加速营中担任第二批项目的顾问，帮助加速营参与者使用预言机扩展应用功能。

Filecoin还赞助了参与者众多的2021年春季Chainlink黑客松，数个同时使用Filecoin和Chainlink的项目进入Filecoin Launchpad加速营，如 Tamago、Nifty Royale、[CryptOrchids](https://cryptorchids.io/)。

新的联合资助计划旨在通过鼓励开发者创建直接结合这两个网络的工作流，来支持和促进Chainlink和Filecoin之间更深层次的集成。使用专门打造的[Chainlink外部适配器](https://docs.chain.link/docs/external-adapters/)，实现集成的几种主要方式有：

1. **智能合约输入** - 使用Chainlink预言机，Filecoin上存储的经过密码学验证的数据可以接入区块链中。这些数据可以作为输入，用来触发诸如以太坊等平台上智能合约的运行。
2. **智能合约输出** - 让智能合约把输出发给Filecoin，作为数据存储指令。使用Chainlink预言机来连接两个环境。
3. **智能合约自动化** - 用Chainlink Keepers根据预定义的条件（如时间间隔或市场活动）触发预言机作业。

随着混合式的快速发展，可以想见会有大量数据被生成消费，这需要更大的存储，并同时保持区块链的防篡改和可用性保证。Chainlink中间件提供的双向通讯能力能让应用在Filecoin和外部区块链之间通讯，扩展了智能合约的不可变数据存储能力。

## 申请Chainlink和Filecoin联合资助

Chainlink和Filecoin联合资助计划支持多达五个团队构建更好的混合式智能合约应用。这些应用将有防篡改文件存储和通用连接的能力。总之，联合资助是为将Web3.0技术栈从链上计算扩展至分布式链下计算、数据、和存储的开发者们准备的。

以下是一些可能的混合式智能合约应用的例子，但不局限于此，我们鼓励所有整合Chainlink和Filecoin的提案：

- **Filecoin存储提供者保险** - Chainlink预言机能在某Fileccoin存储提供者不稳定时通知外部智能合约。如果预言机无法从存储中获取数据或是确定存储提供者已下线，则向该链上的投保人自动理赔。
- **数据赏金** - 智能合约可以筹集资金来存储特定数据，该数据由其唯一内容标识（CID）确定。在Chainlink预言机转发Filecoin网络的存储证明之后，就能触发支付。
- **永久存储** - 基于Chainlink双向连接，各区块链上的智能合约可以为Filecoin上的存储付费和验证。合约可以部署在诸如以太坊的网络上，任何人都可以定期参与支付Filecoin上的存储。
- **DeFi数据** - 智能合约可以使用Chainlink预言机在Filecoin上存储大量金融数据并保证数据不被篡改。这些数据能及时传至各区块链上的智能合约，以促成更好的多链互操作。

如果你想参与Chainlink-Filecoin Grant项目，请于2021年9月17日前申请。最多会有五个团队获得该联合资助，用于项目的未来开发。
