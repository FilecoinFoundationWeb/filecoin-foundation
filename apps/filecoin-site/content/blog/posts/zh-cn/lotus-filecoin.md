---
aliases:
  - /zh-cn/blog/announcing-lotus
author: ""
categories:
  - updates
cover_feature: false
date: "2019-10-16T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: ""
image:
  alt: "Lotus, our first alternate Filecoin implementation"
  url: /uploads/lotus-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/lotus-english-social.webp
title: 介绍 Lotus - 我们第一个备用 Filecoin 实现
_template: blog_detail_ch
---

我们最重要的目标之一是使 Filecoin 主网尽可能地安全并且具有弹性。我们网络安全策略的一部分是启动具有多种实现方式的 Filecoin 网络。今天，我们很高兴地宣布我们的第一个备用 Filecoin 实现, [**lotus**](https://github.com/filecoin-project/lotus)。

[几个月以来](https://filecoin.io/blog/update-2019-q2-q3/#3-roadmap-update)，我们一直在努力构建最初的实现, [**go-filecoin**](https://github.com/filecoin-project/go-filecoin)，同时还与其他团队合作构建 [Filecoin 协议规范](https://github.com/filecoin-project/specs/)的其他多个实现。这项构建不会改变我们的测试网和主网的时间线，但是会使 Filecoin 主网更加安全和灵活。 Lotus 是即将推出的众多实现中的第一个！

具体来说，今天我们宣布：

1. **Lotus** 代码库的开放
2. **Lotus** 开发网的发布

让我们开始介绍！

## 为什么要有多个实现？

正如我们在[其他地方提到的](https://filecoin.io/blog/update-2019-q2-q3/#3-roadmap-update)，构建一个区块链就像构建一个软件火箭。我们正努力确保我们的协议和软件实施的安全性 – 我们拥有内部的协议安全团队，并且正在执行内部实现的安全审核和外部安全审核等等。但是，无论我们为保护系统和各个节点付出多大的努力，始终都有可能某个实现的错误会出现并给网络带来非常不利的后果。

拥有可在同一网络上交互操作的多个软件实现，可以大大降低这种风险。尽管每个实现都有自己的一些漏洞，但是所有实现都不太可能具有完全相同的安全问题 - 尤其是在这些实现不共享对于安全性至关重要的软件组件的情况下。因此，启动具有多种实现方式的加密货币网络可降低发生灾难性漏洞的可能性，这些漏洞可能会对整个 Filecoin 网络产生不利影响，甚至使整个Filecoin网络陷入瘫痪。

多种实现方式还具有其他好处，例如可以增强与不同的开发者社区互动的能力以及探索不同实现架构的机会（这可能会提供不同的性能和其他优化）。自从以太坊推出了 Geth 和 Parity 以来，我们已经看到越来越多的加密网络采用多种软件实现来启动。

由于多种实现对于网络安全性，弹性和社区参与非常重要，因此我们已定下目标，要在2020年3月Filecoin 主网上线时推出具有2种以上可交互操作的协议的实现。截止到今天，我们正在开发一系列 Filecoin 的实现 - **go-filecoin**，**lotus** 和其他即将正式推出的实现。我们正在寻找更多有才华的团队来构建 Filecoin 实现。如果有兴趣，请按照[此处](http://filecoin.io/grants)的说明申请我们的[津贴](https://github.com/filecoin-project/devgrants/issues/43)，以构建其他实现方案！

## 更多关于 **lotus** 的信息

[**Lotus**](https://github.com/filecoin-project/lotus) 是 [Filecoin 协议规范](https://github.com/filecoin-project/specs/)的最简且具有实验性的实现，用 Go 语言编写。该代码库尚未完成功能，但是已经实现了几个核心 Filecoin 协议功能，包括：

- **挖矿。** 矿工现在可以在 Lotus 开发网上开始挖矿并开始获得存储能力。 Lotus 还实现了多种扇区大小，因此具有许多不同存储配置的矿工可以在网络上进行挖矿。 Lotus 集成了 [**rust-fil-proofs**](https://github.com/filecoin-project/rust-fil-proofs/)，因此矿工可以按时提交时空证明，以免遭到削减。而且，存储挖矿功能是作为一个单独的模块实现的，因此高级矿工可以根据自己的特定硬件配置优化其挖矿过程。
- **存储。** 存储客户可以与矿工建立交易，为矿工建立支付渠道，传输数据进行存储以及为正确存储其数据的矿工付费。
- **检索。** 检索客户可以付费从存储矿工那里检索他们的数据（即检索 [v0](https://filecoin-project.github.io/specs/#retrieval-v0-libp2p-services)）。
- 还有更多功能！在[此处](https://github.com/filecoin-project/lotus)查看 GitHub 上的代码库！

除了开放 **lotus** 代码库外，今天我们还宣布启动第一个公开 **lotus** 开发网络。设置 **lotus** 节点后，您可以连接到开发网并与其他节点一起开始存储数据或开始挖矿。有关更多详细信息，请阅读下面的 [**lotus** 入门](https://filecoin.io/zh-cn/blog/announcing-lotus/#lotus-%E5%85%A5%E9%97%A8)部分。

一些非常重要的注意事项：

- **lotus** 代码库仍然是 Filecoin 协议的最简且实验性的实现，从现在到我们计划在2019年12月11日发布的测试网之间它将快速发展。
- 从现在到测试网启动，lotus 开发网将被多次重置。在2019年12月11日启动测试网之前不要期望网络稳定。
- 我们计划在2020年3月启动具有 **go-filecoin**，**lotus**和至少一个其他实现的 Filecoin 主网络。
- **lotus** 开发网和 go-filecoin alphanet 当前不是同一网络。在 **go-filecoin** 和 **lotus** 节点可以交互操作之前，它们将继续是不同的网络。此次交互操作将在我们于2020年3月主网启动之前进行，但确切日期仍待定。

## **Lotus** 入门

我们鼓励矿工，客户和开发者从今天开始尝试 **lotus**！我们希望您的参与将有助于我们在2019年12月11日启动测试网之前增强 **lotus** 代码库和网络的安全性。

对于矿工和用户来说，现在主要有 4 种方法可以参与 **lotus**：

1. 在本地下载，安装和运行 **lotus**（[此处说明](https://github.com/filecoin-project/lotus#building)）
2. 连接到 Lotus 开发网（[此处说明](https://github.com/filecoin-project/lotus#devnet)）
3. 为 **lotus** 代码库做出贡献（[此处](https://github.com/filecoin-project/lotus/issues)有未解决的问题 (open issues)）

具有探索精神的开发者可以开始探索 [**lotus** RPC API](https://github.com/filecoin-project/lotus/blob/master/api/api_full.go)，以开始在 **lotus** 开发网（最终是 testnet）上构建应用程序。请注意，在测试网之前，**lotus** 将持续发展变化，因此请做好应对变化的准备。

在尝试所有这些步骤过程中，我们希望您能报告遇到的问题来帮助我们。发现问题有助于我们更快地实现安全目标，因此我们非常喜欢漏洞报告。🙏 您可以发布问题或浏览其他人在以下主题发布的内容：

- [Lotus 帮助讨论论坛](https://github.com/filecoin-project/community/discussions)
- [社区聊天](https://github.com/filecoin-project/community#chat)中的 ＃fil-lotus 频道
- [社区聊天](https://github.com/filecoin-project/community#chat)中的 ＃fil-help 频道（请务必提及您需要有关 **lotus** 的帮助）
- [**lotus repo** 上的 GitHub issues](https://github.com/filecoin-project/lotus/issues)

## 非常感谢

与往常一样，非常感谢您对 Filecoin 项目的持续支持。我们很高兴继续与您一起，为人类信息建立一个强大的，去中心化和高效的基础。

前进！
