---
title: Filecoin数据工具（FDT）简介
excerpt: >-
  Filecoin生态已经开始使用Filecoin数据工具（Filecoin Data
  Tools,FDT），为大规模客户数据上载需求提供服务。这个平台已经通过三个试点计划证明了其易用性，能让用户快速、无缝上载数据。现在，它已经准备好开始支持Filecoin生态系统内越来越多的客户。
share_image: /uploads/FDT-Header.webp
image:
  url: /uploads/FDT-Header.webp
date: 2023-05-30T02:25:28.060Z
categories:
  - updates
dim_image: true
---

Filecoin生态已经开始使用Filecoin数据工具—— [Filecoin Data Tools (FDT)](https://filecoindata.tools/)，为大规模客户数据上载需求提供服务。这个平台已经通过三个试点计划证明了其易用性，能让用户快速、无缝上载数据。现在，它已经准备好开始支持Filecoin生态内越来越多的客户。

这一进展很符合我们生态下一步的进化逻辑：为生态系统相关公司赋能，向全球开发者提供实用的云DX/UX（开发者体验/用户体验）。

## FDT是什么？

FDT（Filecoin Data Tools）是一套建立在Filecoin网络之上的计算和存储技术。Filecoin网络是一个去中心化的存储网络，内置了网络创收机制和激励机制。我们意识到，云架构有很好的开发者体验，因此，我们的雄心壮志是要在去中心化网络所能提供的透明和开源的激励层之上，实现媲美云平台级别的开发者体验。

这个技术栈包括各种组件，如计算、存储和网络资源，可供开发者用来构建去中心化的应用程序。事实上，有许多团队已经用Filecoin Data Tools提供的组件构建了有趣的软件，这些组件的设计是可扩展的、灵活的和安全的，使得该产品适用于广泛的使用案例。

## FDT产品展示

## [Estuary](https://filecoindata.tools)

尽管Estuary的内部架构发生了很大的变化，但它仍然作为一个产品继续存在。此外，Estuary Dashboard仪表盘提供了一个用户友好的界面来监控和管理网络上的存储交易提议。Estuary将继续提供各种开发者工具和API，如Estuary API，它使开发者能够在Filecoin的基础上建立存储应用程序；以及Estuary SDK，它提供了一系列的网络集成相关库和工具。

## [Delta技术栈](https://filecoindata.tools)

这个技术栈为生态系统里的产品（如Estuary等工具）赋能。Delta技术栈 是一套用于创建和管理Filecoin存储交易提议的开源工具。这包括Delta Deal Making Engine（交易提议协商引擎）、用于大型数据集的Delta Dataset Manager（数据集管理器）和用于存储和伺服非封装副本（unsealed copies）的Edge-UR Gateway网关。

### Delta技术栈详解

Delta技术栈可简化Filecoin网络上准备和管理存储交易提议的流程。Delta技术栈可用于管理数据，包括版本管理，元数据管理，以及存储交易状态跟踪。这些功能都让用户更容易在Filecoin网络上发布他们的数据。

Delta交易协商引擎使用户能够指定存储交易提议的条款，如需要的存储空间数量、价格和交换条件。然后，该平台使用Filecoin网络上的智能合约来执行存储交易的条款并促成交易。

![](/uploads/FDT-Delta.webp)

Delta技术栈可简化在Filecoin网络上准备存储交易提议的复杂性，并为希望在去中心化存储网络上复制数据副本的用户提供无缝体验。

特性：

- 存储交易议案（proposal）的准备和公布
- Piece commitment计算和优化
- E2E/导入支持 （在线/离线）
- 自动/手动修复和更新存储交易提议
- 钱包分配
- 存储提供者的分配和选择
- Blockstore清理
- 交易状态管理
- 副本复制管理

### Delta数据集管理器

Delta数据集管理器（Delta DM）是一个管理和追踪存储交易副本复制的工具，通过导入存储交易提议（也称为带外out-of-band工作流程）来为Filecoin网络数据集上载流程服务。这为快速达成涉及海量数据的存储交易提供了一个解决方案，在这种情况下，带外传输数据的处理效果更好。

Delta DM平台通过一个直观的网络界面实现了数据集的简化管理。它跟踪副本复制情况以及DataCap数据配额的使用，并通过存储交易提议拉取（pull）机制为客户服务提供者（Client Service Providers）提供自助服务。

它不依赖于数据准备和数据传输流程，可以独立于Boost或Lotus运行。这意味着Delta DM + Delta可以作为一个完全独立的解决方案运行。

### Delta Importer(导入器)

Delta Importer是一个独立库，旨在运行在存储提供者基础设施上。它将从文件系统导出CAR文件并导入到Boost的过程自动化了。通过与Delta DM数据集管理器整合从自助服务API导入存储交易提议，Delta Importer导入器实现了完全自动的存储交易协商和存储交易导入流水线。Delta DM数据集管理器多种运作模式，覆盖了一系列不同的数据导入策略。

即将到来：

- 端对端存储交易提议追踪
- 存储交易提议追踪命令行界面
- 失败存储交易提议重试导入机制

## [Edge-UR](https://filecoindata.tools)

Edge-UR是一个简单的解决方案，为需要访问自己数据（即便数据是在Filecoin网络上）的用户提供高可用性的服务。Edge-UR是一个专用节点，使客户能够使用相同的API密钥在Estuary上传和检索用户内容。每个客户都被分配了自己的节点，可切换上传协议以获得无缝体验。虽然这个模式下，数据仍然需要通过HTTP上传，但Edge-UR节点促成了为达成存储交易提议而将文件传输到Delta节点的过程。

使用edge提供的廉价温检索层(warm retrieval layer)与Filecoin的免费冷归档层(cold archival layer)相结合，企业可以为自己节省大量的存储成本。节省的成本可以应用于IT预算的其他领域，使团队能够建立更强大的IT环境。

总的来说，Edge-UR简化了在Estuary上传和检索数据的过程，同时保持对用户内容的安全性和控制力。

特性：

- 轻量级IPFS节点，可与其他IPFS节点组成对等网络。
- 上传和检索——用户将能够上传文件并随即检索。
- 使用Delta来实现异步的存储交易协商过程。
- 保持对内容及其相关交易的跟踪。

## [Ptolemy](https://filecoindata.tools)

Ptolemy旨在作为一个编排引擎，用于处理通常局限于S3存储桶或类似文件系统的大型数据集。Ptolemy可以将整个文件系统结构打包成CAR文件，用于处理存储交易提议。Ptolemy的目标是为存储提供者和终端用户简化围绕数据准备的繁琐流程。

特性：

- 对整个文件系统进行快速扫描和容器化（即将支持S3存储桶）
- 为car文件进行Commp和Root CID内容标识计算。
- 将人类可读的文件名称索引到相应的根CIDs上
- 通过增加Ptolemy workers来进行横向扩展

## [FDI](https://filecoindata.tools)

Filecoin数据基础设施（Filecoin Data Infrastructure）又向去中心化迈出了一步。它作为一个低成本、可靠的计算和存储蓝本，为存储交易提议协商引擎和其他Filecoin技术和服务赋能，让Filecoin网络向前迈进。它是一个可扩展的计算集群、存储系统和虚拟化集群，它包括高可用性设计和Kubernetes等组件。

FDI也是一套开放的自动化工具和基础设施即代码（infrastructure-as-code)工具，可用于建立你自己的“类FDI工具”，并在自己的硬件和条件下运行企业级Filecoin客户端基础设施。这个开源工具可以适应不同的硬件和软件，它的特性都是可插拔的。

除了其他功能外，FDI还能支持客户供应基础设施（Customer Provisioned Infrastructure)的供应，允许工程团队代表客户运行基础设施，以换取法定货币(这是首次实现）。我们正在帮助Filecoin生态系统中的团队节省成本，他们也在继续将有意义的数据加入到网络中。这项工作将在未来几周内进行更详细的讨论。

## [Storage Market](https://data.storage.market/)

Storage.market作为数据存储产品的信息枢纽，为用户提供存储市场的分析和与数据存储相关的最新新闻。这个平台对希望了解行业趋势并对存储产品和服务做出明智决定的企业和个人特别有用。

## 客户互动

为了将数据上载到Filecoin网络，用户需要使用特定的工具和应用程序，使他们能够与网络互动并执行各种操作，如上传、检索和管理数据。这就是Filecoin Data Tools的作用——我们的工程团队一直在与一些客户合作，他们正在使用我们团队提供的工具和专业知识，建立解决方案，将数据上传到Filecoin网络。

在这类项目上与多个客户合作可能具有挑战性，因为每个客户都有独特的要求、用例和技术能力。然而，通过利用我们对Filecoin网络的架构、协议和功能的了解，以及客户的需求和期望，我们可以开发定制的解决方案，满足他们的要求，帮助他们利用去中心化存储的好处。

## 与Radiant Earth合作

Radiant Earth是一个创新组织，致力于通过使用机器学习和地球观测（EO）技术促进积极的全球影响。他们提供一系列高质量的开放资源，受到世界各地的专业人士和研究人员的信任。

Radiant Earth的核心任务之一是培养一个实践社区，可以围绕地球观测的机器学习制定标准。这涉及到将机器学习、地球观测和相关领域的专家聚集在一起，进行合作，分享知识，并制定以负责任、有效的方式使用这些技术的最佳实践标准。

作为我们与Radiant Earth合作的一部分，我们使用自己的技术栈将他们的机器学习和EO数据的一小部分上传到了Filecoin网络。我们了解实现这一目标的必要步骤，通过我们的工具，我们确保他们的数据被适当地格式化，安全地存储，并易于访问。

用到的工具

- Ptolemy
- Delta Dataset Manager（数据集管理器）
- Delta Deal Making Engine（存储交易协商引擎）
- Delta Importer（导入器）

挑战:

- 对于一个相对较小的数据集来说，有大量的小文件（大约为771.9万个），手动将它们适配到car文件里需要很长的时间。
- 小文件的I/O操作可能是非常麻烦的，所以优化car文件的生成很重要。
- 作为PoC概念验证要求的一部分，终端用户寻求一个无缝的下载体验（已经实现）。

## 与SUCHO合作

[SUCHO](https://www.sucho.org/)是一个令人印象深刻的倡议组织，由来自世界各地的1500多名志愿者推动，他们在网上一起工作，对Ukraine的文化遗产进行数字化和保护。为了应对Ukraine正在发生的冲突，SUCHO已经采取行动，保护属于Ukraine文化机构的5000多个网站和~40TB的数据，目的是通过全球5个不同的存储提供者防止这些宝贵的资源丢失或下线。

用到的工具：

- Ptolemy
- Delta Dataset Manager（数据集管理器）
- Delta Deal Making Engine（存储交易协商引擎）
- Delta Importer（导入器）

挑战:

- 这涉及的各类文件大小参数健康度较高，但有几个文件的大小超过了1 TiB，那么将它们高效地打包在32 GiB的扇区中并不是一件小事。
- 免费的AWS S3服务的带宽限制，使得在限流的连接上获得数据集成为一个漫长的过程。

## 与Encloud合作

Encloud专注于数据安全，他们知道使用Filecoin来提高其安全性并为用户提供自由访问的重要性。

我们正与Encloud就这方面展开合作，已经向他们在线Edge-UR节点访问，用于测试其概念验证模型。

用到的工具：

- Delta
- Edge-UR

## 联系我们

一起了解下相关活动！

Filecoin Slack频道：[Filecoin Slack](http://filecoinproject.slack.com/) (Channel #ecosystem-dev)

Github链接:

[应用——研究](https://github.com/application-research) |[Delta](https://github.com/application-research/delta) |[Delta-DM](https://github.com/application-research/delta-dm) |[Estuary](https://github.com/application-research/estuary)

产品页面：

[FilecoinDT](https://filecoindata.tools/)|[Storage.market](https://storage.market/)
