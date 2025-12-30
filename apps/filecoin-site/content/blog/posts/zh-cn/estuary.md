---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-09-02T08:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Estuary是一个开源软件，仅需要简单地将公共数据发送至Filecoin网络，便可从任何地方进行检索。
image:
  alt: ""
  url: /uploads/estuary.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/estuary.webp
title: Estuary概览
_template: blog_detail_ch
---

_Estuary是一个开源软件，仅需要简单地将公共数据发送至Filecoin网络，便可从任何地方进行检索。_

## 什么是Estuary?

Estuary可以将大量公开许可数据发送至Filecoin网络，以便为公共利益检索数据。这是一个由Protocol Labs 应用研究小组(ARG)构思的开源项目，它的存在让Filecoin存储像上传文件一样简单，新用户无需技术背景或了解底层技术便可直接使用。

任何软件或脚本都可以使用[ARG托管的Estuary节点](https://estuary.tech)的API，在去中心化的Filecoin网络上存储公共数据，然后即可在全球各地的任何机器上进行检索。截至今年8月，用户已上传了超过600万份文件，并成功进行了超过11,000笔存储交易。

数据可以存储在由ARG托管的Estuary节点上，也可以存储在由开发商或网络运营商创建的任何Estuary节点上。究竟什么是Estuary节点？请随我们一起深入了解。

Estuary节点能够按照IPFS托管标准将CID托管至IPFS，并根据参与Filecoin网络的存储提供者列表进行自动化存储交易，这就是去中心化存储的两个基本组成部分。

每个Estuary节点通过简单的解决方案解决大规模的数据传输和检索问题，除了可靠的硬件外，用户不再需要额外的基础设施。

## 背景

ARG小组认为需要开源的端到端堆栈来证明Filecoin在应用层如何端到端工作，另外，向Filecoin生态提供范本也很重要，这样刚接触Filecoin的开发人员便可直接利用这个可行的解决方案。

每次将文件上传至Estuary节点时，都会执行以下步骤：

为确认用户想要进行存储交易，提供交易回执。

每笔交易的提议期限至少为一年(以_fil-epochs_为单位)，则成为已验证用户交易。

为了提供高水平的冗余度和保证，交易算法将持续进行交易，直到六个存储交易均活跃且被封装，并在Filecoin网络上与其六个不同的存储提供者进行链上交易。

Filecoin存储交易回执将提供持续时间、存储提供者、当下存储数据的提供者以及如何访问或检索数据的相关信息。

## Estuary vs 中心化云存储

传统的云存储将信息存储在全球的数据中心。但在本系统设计中，此类数据中心的一部分服务器充当主控服务器，而另一部分服务器则纯粹用于存储。这些服务器互相连接，根据存储需求和使用量来相应计费。公司是否以透明和诚实的方式经营数据中心以及如何处理数据还需信任。

Estuary为用户提供了一个简单的方式使用Filecoin。Filecoin是一个点对点的去中心化存储网络，通过开放的源代码和内置的经济激励机制来确保文件被长期可靠存储。存储在Filecoin上的数据在任何时候都可互操作、可验证和可证明。

在Filecoin中，用户付费将文件存储至存储提供者，存储提供者是负责存储数据并证明其进行了存储操作的计算机。如今，全球各地用户都可以在Filecoin网络上存储文件。

Filecoin和传统云存储的主要区别之一在于其可用存储和存储价格不由单一公司控制。相反，Filecoin推动了任何人都可以参与的存储和检索文件的开放市场形成。

此外，以上功能的所有机制都完全开源，这一点于传统云存储提供者而言绝不可能发生。如今，Filecon生态系统中有成千上万的提供者，而且每年还有源源不断的参与者加入其中。

## 合作

Estuary是任何人都可以在任何时候使用且不受限制的开源软件。现有的生态合作者包括了[Textile](https://www.textile.io/)、([Miner Index](https://docs.textile.io/filecoin/miner-index/))、Fission (Filecoin集成支付自己的交易)、QRI以及Filecoin存储提供商社区中的许多其他合作者。个人贡献者也在快速增长，目前已有超过10个开源存储库。

## 如何使用Estuary

{{< youtube id="AHAMHbpioGw" title="Estuary: Getting Started" >}}

若你有一个有意义的公共数据集，打算使用[estuary.tech](https://estuary.tech)进行Filecoin存储交易，你需要先申请一个邀请码，再开设一个账户，这些操作均可在Estuary网站上完成。
邀请申请流程 是为了确保拟提交的数据集经过审查，并达到一定质量标准，Estuary团队会在上述审查过程完成后发送邀请码。

在使用邀请码设置账户完成后，便可以立即开始通过图形用户界面向ARG托管的Estuary节点上传文件，还可以生成API密钥，直接用代码访问Estuary。对于想建立自己节点的用户，Estuary包含了本地管理的控制面板。

此外，Estuary还会对Filecoin网络以及存储提供商的性能指标进行分析。截至本文写作时间，Estuary已有超过11,000笔验证交易，其中有14.6 TiB的持久托管数据和74 TiB的Filecoin备份数据。

目前，所有通过HTTP或CURL上传的数据都在北美的Estuary节点上，但我们希望能很快看到更多地点。

## 文档

你可以通过API访问Estuary几乎所有的网站功能，此文档网站将随着社区的需求而持续完善。若你有意见或问题，请填写文档上的反馈表。

## 考量

ARG的Estuary节点被设计用来存储公开许可且满足ARG规定质量水平的数据，该节点有可能被用于私有数据，但任何数据的加密都必须由用户完成，因为Estuary本身不负责执行加密操作。

## 总结

Filecoin网络是去中心化存储网络在基础设施和协议方面的突破。目前互联网上有许多存储解决方案，但在去中心化和透明度方面，很少有像Filecoin如此先进的存在。

通过Estuary，社区如今已可以自由使用开源堆栈来存储Filecoin上的公共数据。若你有兴趣参与，请联系[Twitter @aresearchgroup](https://twitter.com/aresearchgroup)。
