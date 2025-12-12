---
aliases: []
author: ""
categories:
  - updates
date: "2022-06-23T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Boost v1.0.0已经正式发布了！它是一个全新的独立模块，用于替代现有的Lotus
  Markets流程，能让你往Filecoin上传数据的速度快20倍，并能自动重试暂停的交易提议，观察交易提议传输速率，直接从新的Web界面查看日志，还有其他很多新功能。
image:
  alt: ""
  url: /uploads/175128330-428270c0-6b0c-4fb5-8d0e-d93acce401d5.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/175128330-428270c0-6b0c-4fb5-8d0e-d93acce401d5.webp
title: 用Boost v1.0达成闪电存储交易
_template: blog_detail_ch
---

[Boost v1.0.0](https://github.com/filecoin-project/boost/releases/tag/v1.0.0)已经正式发布了！它是一个全新的独立模块，用于替代现有的Lotus Markets流程，能让你往Filecoin上传数据的速度快20倍，并能自动重试暂停的交易提议，观察交易提议传输速率，直接从新的Web界面查看日志，还有其他很多新功能。除了新特性和可靠性的提升外，将Boost做成独立的模块让我们可以从Lotus的发布时间线里解耦，改善我们发布Markets功能相关的特定升级时间周期，这样就能提升发布更新的频次。

那么，Boost有什么不一样？

## 新版的存储交易提议协商协议

Boost引入了[v1.2.0 Storage Deal Proposal Protocol（存储交易提议协商协议，SDPP）](https://boost.filecoin.io/boost-architecture/libp2p-protocols#propose-storage-deal-protocol) ，让存储用户能指定用哪种传输类型来发送自己的数据。之前的v1.1.0版协议只支持Graphsync，这是如今Filecoin上默认的（也是唯一的）数据传输协议。与v1.2.0 SDPP协议一起发布的，还有对HTTP、[libp2p-http](https://github.com/libp2p/go-libp2p-http)和 Graphsync数据传输的支持，让存储客户端有更多选项来满足自己特定的需求。Boost仍然保留了对v1.1.0版协议的支持，因此存储提供者在升级后，依然可以与现有的v1.1.0版客户端达成存储交易提议。

对HTTP传输任务而言，用户可以将自己的CAR文件放置在一个公共服务器上，并将该url地址写入存储交易提议中。Boost有一个客户端及一些功能性的命令，可以简化这个流程。你可以查看[boost.filecoin.io 上提供的教程](https://boost.filecoin.io/tutorials/how-to-store-files-with-boost-on-filecoin) 来了解更多信息。对Textile的Auctioneer用户而言，Bidbot[已经发布了](https://github.com/textileio/bidbot/releases/tag/v0.1.14) 相关的支持，在Boost可用的情况下能自动使用HTTP传输，但在Boost不可用时也会自动回退到现有的API接口上。在[早期测试中](https://github.com/filecoin-project/boost/discussions/403)，存储提供者使用了新的Boost http客户端后，数据传输速率有了20倍的提升。

如[Estuary](https://estuary.tech/)这样的存储用户，如果想继续使用libp2p来以流的方式传输数据，可以利用libp2p-http协议，它提供了能够传输数据的最小化libp2p协议。Estuary和[filclient](https://github.com/application-research/filclient)库已经升级来支持新的SDPP协议了，并附带了自动回退到v1.1.0版的功能。

## 为什么存储提供者应该升级？

除了新的SDPP协议和数据传输协议外，Boost还在内部重构了存储交易的管理机制，重点改进了幂等性、弹性和可视性。目前，只有v1.2.0版的存储交易提议会通过Boost内部的新型交易提议状态机来处理，而所有的v1.1.0版交易提议会依赖传统的go-fil-markets代码库（我们正慢慢将其从Boost里面移除）。

**更好的交易提议状态转移功能**

我们在重构交易提议管理机制时，想到的是改进提议协商过程中出现可恢复错误的重试机制，这些错误包括数据传输错误或抵押资金不足等。Boost在这方面的做法是追踪一个存储交易提议的上一个良好状态，并只在成功出现状态转移后才进行变更。错误是无可避免的，因此我们希望Boost在恢复那些可被恢复的存储交易提议上变得更具弹性。

**提升了可视性**

在现有的Markets流程里，我们经常面对的一项挑战是调试和识别错误，因为存储提供者并不总能轻易将我们需要的查错信息提供出来。通过Boost，我们一直试图将更多的这类数据发掘出来。Boost带有一个[GraphQL endpoint](https://boost.filecoin.io/graphql-api)，与[Boost WebUI界面配合后，](https://boost.filecoin.io/features#web-ui)，就可以提供更高的可视性，来查看sealing过程的状态、存储空间、资金分配、数据传输速率、交易提议日志等多种信息。

**各种Aggregators（聚合器）和工具现在就可以利用Boost了！**

如前所述，Estuary和Bidbot已经发布了向后兼容的Boost支持功能，因此你在使用Estuary和Bidbot时，就可以从Boost处理v1.2.0版存储交易提议的功能上受益。而v.1.1.0版的SDPP交易提议会照样如常运作。

[CID gravity](https://www.cidgravity.com/) 早就进行升级来匹配Boost了，我们期待与这个团队的进一步合作，来提供更多的参数，以提升存储交易提议制定过程的可扩展控制。

## Boost有什么未来计划？

这些更新仅仅是个开始。我们已经启动了Boost的[可扩展性](https://github.com/filecoin-project/boost/discussions/555)研究，来满足存储提供者对存储和检索数据的大规模需求。我们也在研究提供一个独立的http服务来让检索完整的CAR文件变得更容易，此外还有一个[doctor command](https://github.com/filecoin-project/boost/issues/582)来帮助存储提供者更高效在自己的系统里查错。

你想在Boost里看到什么功能？请将你的反馈和要求发表到[Boost讨论区](https://github.com/filecoin-project/boost/discussions)，从而帮助定义这个项目的未来方向。
