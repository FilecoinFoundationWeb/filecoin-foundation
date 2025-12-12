---
aliases: []
author: ""
categories:
  - updates
date: "2023-02-15T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 使用开箱即用的工具和仪表盘监控Boost进程。
image:
  alt: ""
  url: /uploads/boost_1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/boost_1.webp
title: 面向存储提供者的产品介绍：Boost监控栈
_template: blog_detail_ch
---

Boost是存储提供者在Filecoin网络上管理数据入库和检索的工具。它用一个独立的二进制文件取代了lotus中的“go-fil-markets”包，与lotus守护程序以及lotus存储提供者一起运行。

Boost公开了用于进行存储和检索交易的libp2p接口，用于管理存储交易的web接口，以及用于访问和更新实时交易信息的GraphQL接口。

## 使用开箱即用的工具和仪表盘监控Boost进程

自2022年6月中旬首次发布[Boost](https://boost.filecoin.io/)以来，越来越多的存储提供者迁移至Boost来管理存储交易。随着新生态系统项目和程序的引入，大家对Filecoin的额外存储和检索选项的需求持续增强。基于生态系统的反馈，我们增加了booster-http和booster-bitswap，这使得存储提供者可以通过额外的数据传输协议直接向检索客户提供内容。

这些检索功能的引入增加了许多与主Boost进程一起运行的新进程。作为存储提供者，在其他运营和管理工作外，还要监控各种Boost进程，这非常有挑战性。为解决这一难点，在此很高兴地与大家分享，我们已经为Boost构建了一个监控栈，存储提供者可以开箱即用。

该监控栈包括以下内容：

- Grafana 为所有指标和轨迹提供可视化工具和仪表盘
- Prometheus 收集指标并为Grafana仪表盘提供动力
- Tempo 收集轨迹并在Grafana中使用Jaeger为轨迹搜索提供动力

通过使用监控栈，存储提供者将能够轻松监控内存使用情况，并对特定进程进行额外观察(例如不同检索请求的成功和失败)。

![](/uploads/screenshot-2023-01-25-at-15-08-31.webp)

开始之前，请确保您已更新到Boost最新版本([v1.5.0](https://github.com/filecoin-project/boost/releases/tag/v1.5.0))，即可使用开箱即用的监控栈。您可以按照Boost文档中关于[设置监控栈](https://boost.filecoin.io/tutorials/setting-up-a-monitoring-stack-for-boost)的说明进行操作。

欲知Boost最新相关信息，请关注我们的[GitHub](https://github.com/filecoin-project/boost)。为帮助塑造项目的未来方向，您还可通过[Boost讨论区](https://github.com/filecoin-project/boost/discussions)来提供反馈和需求，您的意见正是项目不断进步和发展的关键。期待您的回复！
