---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-01T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "Boost以更优质的存储和检索工具取代了go-fil-market。 "
image:
  alt: ""
  url: >-
    /uploads/1386-blog-header-for-boost-project-announcement-on-blog-filecoin.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/1386-blog-header-for-boost-project-announcement-on-blog-filecoin.webp
title: 推出Boost：推出面向市场的新功能，包括HTTP传输、Web UI等。
_template: blog_detail_ch
---

我们很高兴宣布推出Boost！一个可替代现有Lotus市场流程、全新且独立运行的产品即将问世。本周我们将开始与存储提供商进行预发布测试，并将于今年4月正式发布。

那么，什么是Boost？它会有什么新功能？Boost是存储提供商在Filecoin上管理数据存储和检索的工具。它用一个独立的二进制文件取代了Lotus中的go-fil-market包，与Lotus daemon和Lotus miner一起运行。Boost公开了用于进行存储和检索交易的libp2p接口，用于管理存储交易的web接口以及用于访问和更新实时交易信息的graphql接口。

## 扩展存储交易能力

虽然Boost将完全向后兼容，但也将引入一种新的存储协议，其中包括对指定数据传输方式的支持。Boost将支持两个新的传输协议，包括HTTP和libp2p上的HTTP。对于那些通过像S3这样的服务进行离线交易和传输CAR文件的用户来说，现在可以与运行Boost的存储提供商进行交易，并直接指定文件的URL，Boost将自动检索！

## 简化存储用户交易

为了让存储用户更容易提出交易，Boost还将提供一个轻量级客户端来进行交易，它可以指向公共的Filecoin API进行链上操作，因此不需要同步Filecoin链。Boost附带的客户端目前支持为http检索提出交易，以及生成CAR文件和commp的实用程序。同时我们正着手于对[Estuary](https://github.com/application-research/estuary)和[filclient](https://github.com/application-research/filclient)进行更新，以便其在发布时使用新的Boost功能!

## 提升存储提供商用户体验

除对处理交易的内部结构进行全面改革（将通过后续文章进行深入介绍）以外，我们还努力提升存储提供商管理系统的可见性和用户体验。为展示更多可见性，Boost提供了一个用户界面，使存储提供商能快速访问管理交易，查看正在进行中的数据传输、磁盘利用率、密封管道以及更多内容！在准备发布的过程中，我们将分享更多关于用户界面的演练和演示来展示可用的关键功能。请持续关注后续更新！

若您是运行Lotus的存储提供商，您可以通过确保[拆分Lotus进程](https://lotus.filecoin.io/storage-providers/configure/split-markets-miners/)来为Boost做好准备。Boost将为完成此项工作的提供商提供迁移支持。

您可以在[Filecoin Slack](https://filecoin.io/slack/)上的# Boost频道或[Boost Github讨论区](https://github.com/filecoin-project/boost/discussions)中关注Boost的启动准备工作。
