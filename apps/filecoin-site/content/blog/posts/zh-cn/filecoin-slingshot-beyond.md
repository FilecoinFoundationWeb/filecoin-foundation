---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-10-16T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  过去的三周里，Filecoin社区成员参与了Slingshot竞赛的第一阶段，在网络上进行了35万笔交易和存储了450+TiB的数据。为了支持比赛中的项目，许多Filecoin成员就在Filecoin上进行存储和创建等不同主题进行了演讲。
image:
  alt: ""
  url: /uploads/slingshot-and-beyond.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/slingshot-and-beyond.webp
title: 了解如何在Filecoin上存储数据：Slingshot和Beyond
_template: blog_detail_ch
---

过去的三周里，Filecoin社区成员参与了[Slingshot 竞赛](https://slingshot.filecoin.io/)的第一阶段，在网络上进行了35万笔交易和存储了450+TiB的数据。为了支持比赛中的项目，许多Filecoin成员就在Filecoin上进行存储和创建等不同主题进行了演讲。这些演讲的价值不仅仅是有关Slingshot，同样适用于想要使用Filecoin的任何人！

本文将重新介绍其中的一些演讲和圆桌讨论，以帮助您可以快速地在Filecoin上进行存储和创建。您可以在此处查看Filecoin活动（包括已经举办的和未来将要举办）的全部记录。

## [精品课程: Powergate简介](https://www.youtube.com/watch?v=synHYG4AnJk&feature=youtu.be)

[Textile](http://textile.io/)的联合创始人兼CEO [Andrew Hill](https://www.linkedin.com/in/andrewxhill/)主持了本次课程。Textile为开发者提供了可以更快、更轻松地在IPFS和Filecoin上创建分布式应用程序的工具。在精品课程中，Andrew讨论了如何使用[Textile Powergate](https://docs.textile.io/powergate/)，该库管理了跨Filecoin和IPFS网络的存储和检索。

您可以在自己的计算机上运行Powergate或者使用Textile的托管用例，您仅需几个命令就可以将单个数据存储到IPFS和Filecoin网络中。它还会在两个网络之间对数据检索请求进行分类，其中IPFS通常更适于比较频繁的“热”存储，而Filecoin通常适合不太频繁的“冷”存储。

一般来说，Powergate是在Filecoin上进行存储的最简单方法之一，它处理了许多进行Filecoin交易的细节，拥有Javascript和Golang两种版本，社区也开发了Python用户端。您可点击[此处](https://docs.textile.io/powergate/)查看文档。

Textile还有[Buckets](https://docs.textile.io/buckets/)，这是一种具有Filecoin功能的类似S3的云存储解决方案。您可以在[此处](https://www.youtube.com/watch?v=Id4SRT9_2CM&list=PL_0VrY55uV19nu6orLLCaGCGocsjvpiGZ&index=5)观看Textile简介的Buckets精品课程。

### 使用Powergate的好处

- 确保存储在Filecoin上的数据可在IPFS网络上轻松访问和快速检索。
- 处理长期存储交易管理，包括自动续订和修复。
- 利用网络索引来改善矿工筛选和交易创建。
- 管理一个或多个用户的Filecoin钱包地址。
- 可一键配置、连接和部署Powergate、Lotus和IPFS。

### Andrew 使用Powergate的几个小技巧

1. **从Localnet开始**。您可以在5分钟内开始使用Filecoin测试您的想法。无需FIL即可在一分钟内进行没有网络问题的端到端交易。

2. **学习先行者**。有许多很棒的团队已经在Powergate上进行开发和创建。他们非常乐于助人，对于早期团队来说，这可能是非常有价值的。

3. **从小处着手**。离开Localnet并开始在实时的网络上进行交易后，请注意不要在第一时间就进行全部交易，可以先选择进行部分GiB开始进行交易、检查生命周期，然后继续进行更大的交易。

## [精品课程: 为Filecoin存储准备大量的数据](https://www.youtube.com/watch?v=q2-HuBCBWo4&feature=youtu.be)

[Rod Vagg](https://www.linkedin.com/in/rvagg/)、[Mikeal Rogers](https://www.linkedin.com/in/mikealrogers/)和[Chris Hafey](https://www.linkedin.com/in/chafey/)是协议实验室的[IPLD](https://docs.ipld.io/)团队成员，他们与Slingshot参与者进行了交流，探讨了如何将大型数据集存储到Filecoin上。IPLD是[Filecoin的重要组成部分](https://docs.filecoin.io/project/related-projects/#ipld)，有助于跨内容寻址网络的数据结构进行互操作。

Rod首先给出了IPLD的基本入门知识，即“具有IPLD的内容寻址数据结构”。他还讨论了Merkle树、DAG、CIDS、编解码器、可变性以及其他支持Filecoin和许多其他内容可寻址数据结构的关键概念。

Chris和Mikael的演讲《使用Dumbo Drop为Filecoin存储大量数据集做准备》介绍了Filecoin Dumbo Drop项目的一般方法、体系结构和经验教训。 Dumbo Drop的目标是在短时间内为Filecoin处理大量开放数据。到目前为止，该项目已经处理了超过3PB的数据。

### 通过他们的课程可以了解

1. AWS在这种规模程度上不是100％可靠的-会发生随机故障！

2. 在这种情况下，有一些关于使用S3的特殊技巧。 S3限制了基于前缀的性能，而S3列表对象对于大量对象而言是缓慢且不可靠的。

3. 与EC2相比，Lambda可以更加灵活和易于使用。 Lambda不断变得性价比高和更容易获得。但是，自定义Lambda可能很棘手。

4. 计算很便宜，但存储昂贵。

### 为Filecoin使用者提供几个小技巧

1. **Rod** ：“了解数据原语，了解IPLD的基础知识以及在Merkle DAG数据结构中蕴藏的巨大潜力。”

2. **Chris** ：“考虑从IPFS / Lotus使用的相同库中构建自己的流程。”

3. **Mikael** ：“您可以存储的不仅仅是文件：)”

## [我们如何创建了：Filecoin上的包管理器托管](https://www.youtube.com/watch?v=ZoD0HvBM-bo&feature=youtu.be)

OB1的联合创始人兼CEO[Brian Hoffman](https://www.linkedin.com/in/brianchoffman/)讨论了他们团队的5MB项目，该项目用于存储和检索Filecoin上的包管理器托管。2015年OB1起初由一个当时在工作小团队在空闲时间里成立。他们看到了去中心化交易在比特币社区获得了热情的支持，因而决定接受风险投资来建立公司并招募开发团队将OpenBazaar打造成可以彻底改变电子商务现状的项目。

Brian讨论了构建5MB的动机和过程。他介绍了在Filecoin上存储不同版本的数据和小文件以及创建用于浏览数据的UI时项目必须解决的技术上的细微差别。

Brain还向我们介绍了5MB的系统架构，该系统架构使用了Textile Powergate：

- **阶段1**：提取。其中5MB将包存储库提取到Amazon EBS中，并且数据被划分为不同的数据集以进行下一步处理；

- **阶段2**：处理。其中Golang处理服务器将数据分段发送到IPFS，然后评估数据的大小和结构，并将目录对象分解到buckets。

- **阶段3**：存档和检索。其中数据buckets通过Powergate接入Filecoin，并可以通过UI（IPFS GUI的修正版本）进行访问。

### Brian在Filecoin上进行创建的三个主要原因

1. **可持续的数据生态系统**：我们需要一种可以使可靠的大规模数据集以可持续的方式激励数据存储基础架构的方法。

2. **所需的工具和应用程序**：开发人员需要更好、更多样化的工具来充分利用网络，用户希望使用易用的应用程序来帮助他们访问所需的数据。

3. **IPFS已有良好的信誉**：我们使用IPFS已有多年，并且了解其优缺点。该技术是切实有效的，我们对Filecoin感到兴奋。

## [我们是如何创建Slate的](https://www.youtube.com/watch?v=XofZP6YEkhg)

Slate是一种存储应用程序和Filecoin网络用户端，可让您通过界面或API存储图像、音频、视频和数据。Slate联合创始人之一[Jim Lee](https://twitter.com/wwwjim?lang=en)讨论了什么是Slate、它从简单的Filecoin用户端发展到强大的媒体共享产品的演变过程以及未来。他希望分享早期在Filecoin上创建应用程序的经验教训和见解。

产品的设计在一定程度上考虑了隐私性；没有人可以看到从Slate上传到Filecoin网络的CID，并且在上传数据之前，存储文件的bucket就已经加密。团队计划创建离线模式，其中您的文件都是私有的。

Jim在介绍开发和创新过程的背景同时也介绍了目前应用程序的状态。他谈到了早期使用Filecoin的感觉，使用Textile技术如何使事情变得更加轻松、团队的想法和产品开发以及他在尖端协议上创建应用程序的经验。

Jim还展示了Slate的基础知识（例如，上传到浏览器的基本文件是如何工作的），并展示了Slate等应用程序的潜在使用场景，演示了如何使用Slate创建简单的应用程序来存储数据。他还使用Powergate和Slate组件创建了一个非常简单的可以发送和接收Filecoin的应用程序。

## [圆桌：通向万能之路](https://www.youtube.com/watch?v=MXmH5JjtGFk&feature=youtu.be)

在Filecoin上存储数据的项目正在加入Web3生态。尽管Web3尚处于起步阶段，但许多人认为它与当今的Web相比提供了固有的优势，现在是实践并获取先发优势的好时机。 Slingshot也举办了Web3生态的专家圆桌会议，他们讨论了如何考虑用户采纳以及如何扩展Web3产品的市场。

参与本次圆桌有Longhash风投的COO [Shi Khai Wei](https://www.linkedin.com/in/shikhai/)、Tachyon加速器的执行总监[Gabriel Anderson](https://www.linkedin.com/in/gabrielkanderson/)和Filecoin生态负责人[Colin Evran](https://www.linkedin.com/in/colin-evran-9819761)，Filecoin产品负责人[Pooja Shah](https://www.linkedin.com/in/pooja01/)主持了本次圆桌。

Web3是软件开发领域的一次改革，应用程序正在从基于中心化基础设施创建转变为分布式协议。建立在Web3体系结构上的应用程序没有中心化控制，通过消除中介带来许多好处。 Filecoin是Web3生态的关键，它允许将文件存储在愿意将其硬件投入网络的任何人那里，并从中进行检索。

Web3生态已经走了很长一段路，在这个领域有许多有潜力的项目。我们圆桌参与者从为技术着想而创建很酷的技术转化到为用户创建实用的产品，鼓励潜在的开发者开始注重从市场的角度出发进行思考。

### 圆桌参与者的一些见解

**Gabriel Anderson:** “我们处于Web3生命周期的早期，现在一些应用程序开始萌发，并且我们看到了一些真正创新的早期用例。例如，不管您是否知道，每个人都有数字资产，并且在继承数字资产方面存在一定的问题。一家公司正在为人们传承其数字资产创造无缝体验。还有一个为视频转录服务的整个市场，通过极高性价比解决了延迟问题。”

**Colin Evran:** “我们不应该忽视早鸟精神在Web3中的强大作用。这些在同一个领域工作的早鸟们所催化的那种创新氛围是令人难以置信的。”

**Shi Khai:** “作为开发者，我们需要专注于建立将与我们一直在一起的真正用户和社区。寻找能够为您提供真实反馈的真正用户社区，而不是仅仅因为是新事物而觉得很酷的人。”

## 

感谢所有参与Slingshot活动的演讲者和参与者！当我们进入比赛第一阶段的最后一周时，我们很高兴看到团队开始利用他们从这些赛事中学到的知识。我们期待看到更多的开发者在Filecoin上进行存储和创建。
