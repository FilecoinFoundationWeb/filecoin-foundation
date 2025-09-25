---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-26T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 下文概述了开发人员要如何着手使用Filecoin作为其项目的分布式存储解决方案。
image:
  alt: ""
  url: /uploads/consumerapps.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/consumerapps.webp
title: 使用Filecoin构建消费者应用程序的工具
_template: blog_detail_ch
---

如今，将Filecoin整合到应用程序中变得日益简单。大多数寻找分布式存储解决方案的开发人员会发现，他们无需再了解网络的细枝末节、如何构建以及如何设置Lotus节点来使用。

现在有很多服务，通过专注于研究使消费者应用程序快速有效启动和运行的严格必要条件，而简化了开发过程。毕竟，他们的应用程序将主要利用Filecoin完成三个关键任务：存储数据、查找数据或检索数据，这将其与网络的交互降低至少许几个命令。

每个用例都需要不同的解决方案。如下是建设者目前正在使用的一些应用程序。

[**Powergate**](https://docs.filecoin.io/build/powergate/#how-to-use-powergate)：这个基于API的分层存储解决方案由[Textile](https://linktr.ee/textileio)构建。它是一组运行在Lotus节点上的模块，负责处理与Filecoin网络进行交易的底层细节，并通过复制因子、交易续签和存储提供者选择器等选项管理数据流。

**Bridges**：该项目同样也由Textile构建，目前正在被开发为Filecoin和重要的Layer 1和Layer 2网络（例如Ethereum、NEAR、和Polygon）之间的无权限桥梁。这将允许该网络技术和本地token同步至Filecoin上。

应用研究小组(ARG)也专注于创建工具，使开发人员更容易与Filecoin网络交互。让我们看看其中一些如何提供帮助。

[**Estuary**](https://github.com/application-research/estuary)：一个建立在IPFS和Filecoin等关键去中心化协议上的去中心化数据存储服务。其用户可以使用IPFS快速存储和检索内容，使用遵循IPFS托管服务API规范的IPFS API，并通过提议收据和成功交易收据在Filecoin上存储内容。任何存储在[Estuary节点](https://estuary.tech/)上的的数据也会同样存储在Filecoin上。

[**Filclient**](https://github.com/application-research/filclient)：一个用于与Filecoin网络交互的最小库。它抽象了存储和检索交易中的关键过程，如询价、构建和签署提案以及获取数据等。

[**Origin**](https://github.com/application-research/origin)：一个简化Web3应用程序开发过程的轻量级工具包。它能够以快速的热重载时间向浏览器提供ESmodules模块，并与 [templates](https://github.com/application-research/origin-playground)一起被设计用于最佳实践。

[**Autoretrieve**](https://github.com/application-research/autoretrieve)：一个向Bitswap客户端提供Filecoin数据的CLI工具，它使用来自Estuary或索引器的检索信息。

[**Rclone**](https://github.com/application-research/rclone)：一个可以从不同的云存储提供者处同步文件和目录的CLI工具，包括AWS、Dropbox、Google Drive等。

回顾ARG的路线图，看看在2022年有将有哪些改善Filecoin开发人员体验的新方法。

如果您已经在Filecoin、IPFS或Libp2p上迈出了开发应用程序的第一步，请务必查看[下阶段小额资助计划](https://github.com/filecoin-project/devgrants/blob/master/Program%20Resources/Microgrants%20README.md)，这是一个会让其更进一步的好方法。对生态做出重大贡献且更有雄心的项目也可以在[开放资助](https://github.com/filecoin-project/devgrants/tree/master?tab=readme-ov-file#open-grant)项目中找到支持。
