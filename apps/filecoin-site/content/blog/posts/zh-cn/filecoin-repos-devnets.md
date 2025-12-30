---
aliases:
  - /zh-cn/blog/opening-filecoin-project-repos
author: ""
categories:
  - updates
cover_feature: false
date: "2019-02-14T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "免责声明:将技术概念从一种语言完美地翻译到另一种语言是困难的，因此请注意，我们不能保证这个翻译的准确性。 原文可以在这里找到。"
image:
  alt: ""
  url: /uploads/gofc-022-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/getting-started-with-repos-devnets.webp
title: 开始入门 Filecoin Repos 和 Devnets
_template: blog_detail_ch
---

免责声明:将技术概念从一种语言完美地翻译到另一种语言是困难的，因此请注意，我们不能保证这个翻译的准确性。 [原文可以在这里找到。](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/)

正如我们在[这里](https://filecoin.io/zh-cn/blog/opening-filecoin-project-repos/)宣布的，我们最近在 [GitHub](https://github.com/filecoin-project)上开放了 Filecoin 项目 repos。你可以访问 GitHub repos 来探索代码库、开发工具、社区资源等等。如果你准备好直接跳进去，这里有一些方法可以让你了解更多。

1. [设置 Filecoin 节点并连接到 devnet](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#1-%E8%AE%BE%E7%BD%AE-filecoin-%E8%8A%82%E7%82%B9%E5%B9%B6%E8%BF%9E%E6%8E%A5%E5%88%B0-devnet)
2. [可视化网络](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#2-%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BD%91%E7%BB%9C)
3. [改进 Filecoin 协议规范](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#3-%E6%94%B9%E8%BF%9B-filecoin-%E5%8D%8F%E8%AE%AE%E8%A7%84%E8%8C%83)
4. [与我们合作解决开放式研究问题](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#4-%E4%B8%8E%E6%88%91%E4%BB%AC%E5%90%88%E4%BD%9C%E8%A7%A3%E5%86%B3%E5%BC%80%E6%94%BE%E5%BC%8F%E7%A0%94%E7%A9%B6%E9%97%AE%E9%A2%98)
5. [在复制游戏中竞争](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#5-%E5%9C%A8%E5%A4%8D%E5%88%B6%E6%B8%B8%E6%88%8F%E4%B8%AD%E7%AB%9E%E4%BA%89)
6. [加入社区](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#6-%E5%8A%A0%E5%85%A5%E7%A4%BE%E5%8C%BA)
7. [在 Filecoin 之上构建](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#7-%E5%9C%A8-filecoin-%E4%B9%8B%E4%B8%8A%E6%9E%84%E5%BB%BA)
8. [加入团队](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#8-%E5%8A%A0%E5%85%A5%E5%9B%A2%E9%98%9F)
9. [结束时的思考](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#%E7%BB%93%E6%9D%9F%E6%97%B6%E7%9A%84%E6%80%9D%E8%80%83)

## 1. 设置 Filecoin 节点并连接到 devnet

到目前为止，任何人都可以设置 Filecoin 节点并连接到 devnet。这是探索当前命令行界面和 Filecoin 去中心化存储市场的最佳方法。

请注意，Filecoin 项目和网络尚未启用。整个项目仍在进行中，因此我们无法对性能、稳定性或安全性做出任何保证。

目前有一个 Filecoin 协议的参考实现: [go-filecoin](https://github.com/filecoin-project/go-filecoin)。go-filecoin 的实现已经取得了巨大的进展。你可以在[这里](https://filecoin.io/zh-cn/blog/update-2018-q3-q4/)获得 go-filecoin 的全部开发更新。

你可以连接到两个devnet之一：

- **用户 devnet:** 长时间运行的devnet，可以在任意时间重启。适合大多数用户测试和操作
- **每日构建（nightly） devnet:** 每天在 0600 UTC 重新部署和重新启动。用于 go-filecoin 贡献者的开发和测试

在 devnet 上，你可以存储数据，而成为存储客户，还可以尝试成为 Filecoin 的挖掘矿工。对于那些希望在 Filecoin 协议之上构建应用程序或在去中心化存储市场上存储数据的人来说，devnets 是一个重要的开发工具。虽然这离生产系统还很远，但是你可以开始了解 Filecoin 协议支持的不同工作流，以及如何将它们集成到你的应用程序中。

你可以访问 [go-filecoin repo 维基](https://github.com/filecoin-project/go-filecoin/wiki)，查看全部的 go-filecoin 安装说明以及如何连接到 devnet 的详细信息。

## 2. 可视化网络

网络数据仪表板 显示了用户 devnet 活动的高级概览。仪表板聚合自我报告的信息，并显示网络上的总存储容量、网络利用率、节点的地理分布、流通中的代币和其他有用信息。

如果你连接到用户 devnet，你可以将你的节点活动流到这个仪表板，以查看你自己在更广泛的网络中的活动。连接到 devnet 和你的节点流化活动的全部说明在 [go-filecoin 维基](https://github.com/filecoin-project/go-filecoin/wiki)上。

## 3. 改进 Filecoin 协议规范

Filecoin 协议规范可以在 GitHub 上的 [filecoin-project/specs](https://github.com/filecoin-project/specs) repo 找到。

我们非常欢迎对规范的评论、提问和贡献。你可以在 [GitHub 上的 specs repo 问题 (issues)](https://github.com/filecoin-project/specs/issues) 中找到这些议题。

我们欢迎规范的拉入请求 (Pull Requests)。这是为构建 Filecoin 网络做出贡献的最有价值的方法之一。改进协议规范使协议的多种实现能够按照类似的标准构建规模性和安全性。不过请注意: 如果不深入了解协议规范的工作原理，就很难编写协议规范。澄清问题，审查和评论草案，充实细节，这些都是开始的好方法。那些想要通过从头开始编写一个部分来做出贡献的人，将需要更深入的知识和与我们团队的密切合作。来和我们聊天吧 (参见下面的[加入社区](https://filecoin.io/zh-cn/blog/getting-started-with-filecoin-repos-and-devnets/#6-%E5%8A%A0%E5%85%A5%E7%A4%BE%E5%8C%BA)部分)！

## 4. 与我们合作解决开放式研究问题

Filecoin 研究团队已经发布了[更新的路线图](https://github.com/filecoin-project/research#filecoin-research-endeavours)和[开放研究问题列表](https://github.com/filecoin-project/research/blob/master/open-problems.md)。如果你对解决这些问题感兴趣，可以直接与我们的团队合作。请通过[research@filecoin.org](mailto:research@filecoin.org)联系我们。

通过协议实验室的提案申请 (RFP) 项目，还可以为加密和分布式系统提供一些开放的 RFP。更多信息，请查看 [RFP 的全部列表](https://github.com/protocol/research-RFPs)以及[如何申请 RFP](https://github.com/protocol/research-grants/blob/master/FAQ.md)。

## 5. 在复制游戏中竞争

协议使用复制验证 (proofs-of-replication, PoReps) 来确保存储挖掘程序正确地存储客户端数据。因此，PoReps 是 Filecoin 协议操作的基础。

复制游戏是一种竞赛，其中个人竞争的方法是提交最快的复制和 PoRep 证明生成时间。在复制游戏中击败其他人(并告诉我们你是如何做到的)是帮助优化和改进现有 PoRep 结构的好方法。这是对 Filecoin 协议和网络的宝贵贡献，因为它可以帮助创建更好、更快、更安全的证明系统。

关于如何在复制游戏中竞争的全部细节可以在 [GitHub](https://github.com/filecoin-project/replication-game) 上找到。你还可以观看[演示视频](https://youtu.be/2NAKGL0ydiE) (嵌入下面)，了解如何参与复制游戏，并查看当前的排行榜。

## 6. 加入社区

来加入讨论吧! 你可以参与我们在 Filecoin 聊天上的研究和开发对话，在讨论论坛上请求帮助解决安装问题，并访问我们的[社区 repo](https://github.com/filecoin-project/community) 以获得关于会议、电话和其他社区资源的信息！

- **聊天渠道:** 我们使用跨越多个平台的聊天渠道。作为一个分布式社区，这些渠道是我们主要的交流通信场所。在聊天上发帖之前，请阅读[行为准则](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md)。
- _Matrix:_ [Filecoin 社区](https://riot.im/app/#/group/+filecoin:matrix.org) (包含到所有桥接通道的链接)
- _Slack:_ [在这里](https://join.slack.com/t/filecoinproject/shared_invite/enQtNTUwNTI1Mzk5MDYwLTI2MmMxNzNjYjhlYWM3YjQxM2E4MThmM2ZhY2JkYWIxNGVjMGVmNTg3Y2VhZjQ3OGM5ZTc1OGFmZGZhMzZmMTI)创建一个帐户
- _IRC:_ [即将来临](https://github.com/filecoin-project/community/issues/4)
- [**讨论论坛**](https://discuss.filecoin.io/):我们使用论坛来回答更长期存在的问题。如果有疑问，你可以随时在这里发帖。

## 7. 在 Filecoin 之上构建

我们很感兴趣与在去中心化 web 上构建具有巨大影响力的应用程序开发人员合作。如果你有兴趣探索潜在的合作机会，你可以直接在[论坛](https://discuss.filecoin.io/)上发帖。它们在默认情况下是开放的。作为第二个选项，你可以通过电子邮件[filecoin-collab@protocol.ai](mailto:filecoin-collab@protocol.ai)发送邮件。

## 8. 加入团队

Filecoin 团队正在成长。

今天，Filecoin 团队受雇于 Protocol Labs (PL)。PL 正在招聘的职位跨越多种职能，包括软件工程、分布式系统研究、密码学研究、社区、业务、UX设计等等。请看看这些 空缺职位。

还有其他组织也参与了 Filecoin 的开发，假以时日，我们将会听到更多的公开发布。我们还希望围绕 Filecoin 形成许多新的团体、公司和团队。这是先驱者开始探索的大好时机。请随意通过论坛进行协调，如果需要我们的帮助，请联系我们。将来，我们会举办活动，把社区凝聚在一起，建立一个更大、联系更紧密的团队。

## 结束时的思考

好了! 有很多方法可以让你了解 Filecoin 项目，了解过去几个月我们一直在做什么，以及我们希望在 2019 年实现什么。建立 Filecoin 去中心化存储市场已经并将继续具有极其重要的意义。我们很高兴你和我们一起踏上这段旅程。

如果你有任何问题，请不要犹豫，加入我们的社区 [GitHub](https://github.com/filecoin-project)，[讨论论坛](https://discuss.filecoin.io/)，或[聊天](https://join.slack.com/t/filecoinproject/shared_invite/enQtNTUwNTI1Mzk5MDYwLTI2MmMxNzNjYjhlYWM3YjQxM2E4MThmM2ZhY2JkYWIxNGVjMGVmNTg3Y2VhZjQ3OGM5ZTc1OGFmZGZhMzZmMTI)。
