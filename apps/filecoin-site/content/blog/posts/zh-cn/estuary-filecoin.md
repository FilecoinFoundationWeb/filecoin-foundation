---
aliases: []
author: ""
categories:
  - updates
date: "2022-05-24T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 这个服务的功能持续增加，已存储超过6亿个数据对象
image:
  alt: ""
  url: /uploads/estuary-update.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/estuary-update.webp
title: Estuary是所有Filecoin用户的好伙伴
_template: blog_detail_ch
---

自Estuary的Github[代码库](https://github.com/application-research/estuary)首次有代码提交后，已经超过一年时间了。现在，项目背后的建设者们成功地帮助了世界使用去中心化存储服务，他们很高兴分享对未来的计划。

Estuary是一个开源的去中心化数据存储服务，它基于一些关键的去中心化web协议（如Filecoin和IPFS）搭建。为了确保数据的存续性，Estuary使用Filecoin网络，来确保任何时候都有最多6份副本被存储。这个服务持续追踪世界范围内的数百个存储提供者，他们愿意为任何人存储公开数据。这让在Filecoin上存储数据变得轻松起来。

## 为什么使用Estuary？

像Estuary这样的服务是很有用的，因为从头搭建Filecoin基础设施需要大量的时间、硬件和经费投入。虽然资金充裕的机构能够负担这方面的基础设施投资，但缺乏资源的开发者和用户则会有很大压力。

对于这个问题，Estuary为开发者或用户提供了免费的解决方案。这个服务的维护者仅仅要求这些数据是用于公共场所，且存储目的是让世界变得更美好。

截至2022年5月，Estuary的用户已经向这个服务上传了6亿个数据对象，这个数字还没包括其他网络运营者在自己架设的Estuary服务中存储的内容。通过Estuary节点向Filecoin网络上传的数据接近1 petabyte 的大小。团队很高兴看到全球用户利用好了Filecoin和IPFS的功能。

## Estuary正在做什么？

**SDK组件和库**

Estuary可通过HTTP协议访问其API接口。当然了，在软件开发工具包和针对特定语言的支持上，这个服务除了Go和Python语言外，还在扩展其开发者工具支持。该开发团队正准备增加Rust、Java、JavaScript/TypeScript和C#语言的SDK组件支持。团队认为编程语言的选择不应限制开发者与Estuary API接口互动的能力。

**自动检索**

这项服务很快会规划一个全新的自动检索（auto-retrieval）功能。如果一个IPFS节点中不存在正被检索的内容标识，那么Estuary的自动化软件会在Filecoin网络中生成一个检索交易提议，并恢复缺失的内容标识CID。这提供了低成本的优化方案，给Filecoin带来了一个好用且高效的检索用例，并为存储提供者参与到网络提供了新机会。

**更多的数据，更多的存储**

Estuary服务今年的数据规模将超过数个petabytes。解决方案架构师正与全球客户互动，寻找大量有用的科学数据用于机器学习和研究。由于这个服务可以存储petabytes规模的数据，任何个体如果想运行自己的节点，都可以参考Estuary的例子来实现类似的效果。解决方案架构师会确保相关的文档教程就绪。

**日志和信誉机制**

今年，衡量服务绩效和分享日志变得很重要。Estuary有一个为存储提供者设计的内部信誉机制系统，它会进一步向公众开放。正在运行自己Estuary节点的网络运作者，将能通过[storage.market](https://storage.market/)等一系列资源，来找到能合作的存储提供者。团队会向公众分享dashboard看板，这样开源社区可以跟进项目进展。随着Filecoin网络的规模增长，这些资源、日志和看板将会持续更新。

**整合**

去年，Estuary与10家公司的项目进行了功能整合。今年，这个项目会接入更多的产品。鉴于开发者们想确保自己对基础设施的全盘控制，Estuary有意加大对想运行自己Estuary节点的团队和个人的支持。

项目的进展还有很多。这个服务的开发与Filecoin有紧密联系，因为它是一个持续改进的工具链和网络。项目团队有意打造更多功能来展示技术潜力，同时确保Estuary的服务持续提升。
