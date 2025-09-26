---
aliases:
  - /zh-cn/blog/announcing-alphanet
author: ""
categories:
  - updates
cover_feature: false
date: "2019-09-25T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: ""
image:
  alt: Alphanet launch
  url: /uploads/alphanet-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/alphanet-english-social.webp
title: go-filecoin 初始测试网（go-filecoin alphanet）上线
_template: blog_detail_ch
---

昨日，我们发布了 **go-filecoin** 初始测试网（go-filecoin alphanet），[**go-filecoin** 0.5.6版本](https://github.com/filecoin-project/go-filecoin/releases/tag/0.5.6)（比[原定计划](https://filecoin.io/blog/update-2019-q2-q3/#1-launches-testnet-on-dec-11-mainnet-in-2020-q1)早了一天），正如我们之前在[2019年第二和第三季度更新](https://filecoin.io/blog/update-2019-q2-q3/)中所讲，这是我们将在2019年12月发布最终测试网之前最后一个值得纪念第里程碑。

**go-filecoin** 初始测试网集成了许多重要的协议功能，但最重要的功能之一就是，它是一个可长期运行的网络。我们今年早些时候[发布了我们第一个开发网络(devnets)](https://filecoin.io/blog/opening-filecoin-project-repos/) ，但由于我们的 devnets 还未包含用于无缝网络链接更新的完整设备，因此，每当我们想发布一个新的 go-filecoin 功能模块到devnets时，不得不触发网络重置。除非使用老版本 go-filecoin 的节点下载了最新版本并重新设置，不然它们无法连接到 devnets。随着 go-filecoin 初始测试网的上线，我们已经实现了用于无缝网络连接更新的许多功能模块，尽管我们仍可以在必要时进行网络重置，但是不需要向网络节点再发布一遍新功能了，这是一项对我们早期网络的真实性和用户体验的重大改进。

发布的初始测试网也包括一些重要协议功能的改进，如： - 我们更新了时空证明机制 (PoSt) 框架 – Rational PoSt - 改进了我们预期共识算法的实现 - 同步速度更快，使用 [Graphsync](https://github.com/ipfs/go-graphsync) 的IPLD DAG-traversal协议 - 新的 [HTTP API 设计](https://github.com/filecoin-project/filecoin-http-api)(依旧是WIP) - 更多惊喜！

您可以在我们的 [go-filecoin CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md)中了解此次发布中重大更新的细节描述。（注意：编写本文之时，发布0.5.6版本的更新，比如初始alphanet的上线，依然是 [go-filecoin repo 的公开 PR](https://github.com/filecoin-project/go-filecoin/pull/3490/files)，应该会很快合并）

现在是开始测试 Filecoin 协议和网络的最佳时机，以下是入门指南： - 请按照[入门指南](https://docs.filecoin.io/get-started/) 在我们最新的文档地址下载最新版本来接入初始测试网。 - 在我们的 网络数据信息中心 查阅我们的活动。 - 加入我们的[社区互动](https://github.com/filecoin-project/community#chat) 来提出问题、与社区的其他人进行互动和进行项目协作。 - 如果你是想要为 Filecoin 生态构建项目的开发人员，请到我们的[论坛](https://github.com/orgs/filecoin-project/projects?query=is%3Aopen) 添加项目至 Filecoin Shipyard 或者申请 [Filecoin 开发者资助](https://filecoin.io/grants/)。最近一批的资助申请的截止日期是2019年9月30日下午11:59（北美太平洋时间）。

来吧！我们很高兴您接入 Filecoin 初始测试网！
