---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-07-26T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 为提升Web3的互操作性，Filecoin和Hedera Hashgraph于今日发布一项联合行动。
image:
  alt: ""
  url: /uploads/fil-blog-2021-xx-xx-hedera.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-xx-xx-hedera.webp
title: Filecoin和Hedera Hashgraph联合为提升Web3互操作性发布奖励计划
_template: blog_detail_ch
---

为提升Web3的互操作性，Filecoin和[Hedera Hashgraph](https://hedera.com/)于今日发布一项合作计划。该合作由20万美元的奖励计划和NFT用例的初始演示实现启动，其长期愿景是结合两个网络的优势，打造全方位的分布式账本技术解决方案，包括去中心化共识、存储和智能数据应用。

Hedera公共网络是为大批量的使用而设计的一种快速、低成本和环保的分布式账本技术（DLT），常应用于供应链、[数据可验证证明](https://hedera.com/users/hala-systems)、[支付](https://hedera.com/blog/eftpos-pioneers-new-ecommerce-micropayments-solution-using-hedera-hashgraph)、[广告](https://hedera.com/users/adsdax)、[资产代币化](https://hedera.com/users/toko-by-dla-piper)等。Hedera网络具有令人难以置信的效率和轻量级，但由于成本限制，它不是存储大文件或对象数据的理想选择。

Filecoin和Hedera曾在多个项目中有过技术合作经历。Hedera高效的DLT功能和Filecoin强大且灵活的大规模存储层相结合，为验证交易及其基础数据的来源、所有权和有效性带来了更多可能。

## 为Hedera NFT提供去中心化存储

Hedera改进提案10 ([HIP-10](https://github.com/hashgraph/hedera-improvement-proposal/blob/master/HIP/hip-10.md))为NFT元数据提供了一个生态系统标准。为加强此新功能，Filecoin (尤其是[NFT.storage](http://nft.storage/) 服务)能分散存储包含这些NFT性能和多媒体或本地化数据的JSON模式。

Filecoin和Hedera的合作带来了一个真正的去中心化NFT体验。Filecoin作为Hedera网络上NFT的去中心化存储层，确保了游戏内资产、艺术、音乐、供应链、金融应用等方面的最大信任度。

开源参考实现和演示将指导你如何在Heder上发行NFT，并使用NFT.storage API在Filecoin上存储以上数据：[https://github.com/hashgraph/hedera-hts-demo/](https://github.com/hashgraph/hedera-hts-demo/ "https://github.com/hashgraph/hedera-hts-demo/")。

## Starling Lab: Filecoin和Hedera的真实使用情况

[数据完整性的Starling框架](https://hedera.com/users/starling)由南加州大学Shoah基金会和斯坦福大学电子工程系联合开发。该方案旨在创建一套供非营利组织、新闻机构和行业专家使用的工具和准则，以解决在当下媒体的不确定性和保护真相的长期努力中出现的各类挑战。Starling通过运用包括Filecoin和Hedera在内的多种去中心化技术，来存储和验证原始媒体资产及其基础元数据。

## 不仅仅是存储：解锁Filecoin上的无限商机

通过引入周期性证明的大规模存储并使存储更接近计算，Filecoin为Web3生态系统带来了独特的创建模块。

- **内容可寻址数据—** Filecoin是一个建立在Web3核心的内容可寻址数据上的去中心化存储网络。
- **可验证存储和证明 —** Filecoin区块链每24小时验证其全部数据被持续存储在网络上；关于此点的证明可以和其他智能合约系统衔接。
- **规模化去中心化存储 —** Filecoin网络每小时都会有超过1PiB的存储容量加入。
- **灵活存储选项—** 全球性的存储供应商网络，每个供应商都提供不同的功能和本地优化，允许最大的可组合性出现。

在Filecoin和智能合约系统（如Hedera）的合作中会出现诸多新的互动、应用和商业模式。点击此处可了解更多关于[本演讲中Filecoin的商业机会](https://www.youtube.com/watch?v=5CPUSPUGOZ0)。

## 为Filecoin + Hedera应用开发提供奖励金

Filecoin和Hedera为如下两个方向的开发者提供20万美元的奖励金：

### Hedera的去中心化存储SDK和演示应用

我们希望让使用Filecoin和Hedera Token Service (HTS)的建设者能够轻松地将这两者整合至其应用程序中。这笔奖金将被授予一个可无缝整合现有Filecoin和Hedera工具链的SDK，它应当实现不可伪造的代币化，并允许在Filecoin网络上存储与HTS代币相关的较大文件（如数字艺术、音乐、JSON元数据等）。Filecoin存储可以通过工具或服务访问，诸如[Estuary](https://estuary.tech/)、 [Fleek Space Daemon](https://github.com/FleekHQ/space-daemon)、[NFT.storage](https://nft.storage/)或 [Textile Powergate.](https://github.com/textileio/powergate/)。

随附的演示应用程序应当使用该SDK建立一个开源的端到端NFT市场演示应用程序，以求达到如下效果：一、展示去中心化存储SDK的功能，二、被社区的其他开发者用作参考架构。该演示程序应包括：

1．在Hedera上创建的NFT；
2．与存储在Filecoin上的NFT相关的多媒体；
3．与Filecoin上的NFT相关的[JSON元数据模式](https://github.com/hashgraph/hedera-improvement-proposal/blob/master/HIP/hip-10.md)；
4．接受HBAR和FIL（最低限度）用于支付NFT。

**_[奖励金: 75,000美元\]_**

### 真实世界的应用

此项奖励金将授予同时运用[Hedera Token Service (HTS)](http://hedera.com/token-service)和Filecoin去中心化存储的现实世界应用提案。开发者可以随心所欲地发挥想象—对应用或用例的类型并没有严格要求，但必须同时运用Hedera HTS和Filecoin。Filecoin存储可通过工具或服务访问，诸如[Estuary](https://estuary.tech/)、[Fleek Space Daemon](https://github.com/FleekHQ/space-daemon)、[NFT.storage](https://nft.storage/)或 [Textile Powergate.](https://github.com/textileio/powergate/)。

**_[一等奖：50,000美元；二等奖：40,000美元；三等奖：20,000美元；四等奖： 10,000美元；五等奖：5,000美元；\]_**

请通过[Filecoin奖励计划](https://github.com/filecoin-project/devgrants/tree/master)申请。为获得优先考虑，请于2021年8月30日前提交提案。
