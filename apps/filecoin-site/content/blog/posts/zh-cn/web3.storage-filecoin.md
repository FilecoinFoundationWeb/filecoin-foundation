---
aliases: []
author: ""
categories:
  - updates
date: "2021-08-02T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Protocol Labs推出Web3.Storage，这是一款可供任何开发人员在其应用程序中使用Filecoin分布式存储网络的免费产品。
image:
  alt: ""
  url: /uploads/web3-storage-card.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/web3-storage-card.webp
title: Web3.Storage：让Filecoin存储更简单易用
_template: blog_detail_ch
---

Protocol Labs推出[Web3.Storage](https://web3.storage/)，这是一个可供开发人员在Filecoin去中心化网络中存储和检索数据的简单界面！无限期免费的Web3.Storage，为开发人员使用冗余的分布式存储和安全的内容地址数据来创建应用程序指了一条明路。通过处理与分布式存储直接交互的大量复杂性，它已成为所有开发人员（从Web3新手到IPFS老手）与Filecoin存储接轨的最佳方式之一。[**点此体验Web3.Storage**](https://web3.storage/)

Web3.Storage有以下两大组成部分：

- 跨多个存储提供者和公共IPFS网络冗余存储数据的服务，可提供数据存储位置信息并按CID检索数据。
- 用于与服务交互的HTTP端点、Javascript客户端和web UI。

![](/uploads/image-8.webp)

以下是组成部分简介：

## 如何运行？

在后台，发送至Web3.Storage的内容被持久地[存储](https://web3.storage/)在Filecoin的存储提供者网络上，且在IPFS上冗余托管。因此，Filecoin和IPFS携手给内容、数据和应用程序带来了[_内容可寻址性_](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/)和 [_持久性_](https://filecoin.io/blog/posts/ipfs-filecoin-and-content-persistence/)*两大特性。_内容可寻址性_ 生成基于内容本身（CIDs）的不可篡改链接，确保在不留下可追踪篡改记录的情况下，信息无法被更改、编辑或破坏。*持久性\_ 保证通过该服务存储的数据将保持完整可用-由Filecoin强大的[经济模型](https://filecoin.io/blog/posts/introducing-the-filecoin-economy/)和存储数据完整性的可验证证明支撑。

![](/uploads/image-5.webp)

更具体地说，发送至Web3.Storage的数据被立即固定在Protocol Labs 托管的三个地理分布节点的IPFS集群上。它们由此排队存储在Filecoin网络中。在此队列里，它与Filecoin交易中的其他数据打包，然后被存储在至少五个地理分布的存储提供者中。同时它还会被其他IPFS托管服务如Pinata托管，以获得额外的冗余度和可用性！

## 如何交互？

至此，你最大的疑惑，是不是如何真正使用Web3.Storage？很简单！Web3.Storage有公开的HTTP端点，你可以通过web UI或者Javascript客户端库来存储数据。

你可以在web UI上创建账户和API令牌、上传文件，并查看存储的所有文件列表及其存储位置。

客户端库使用的语法和大家熟知的网络API类似，例如[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)和[File](https://developer.mozilla.org/en-US/docs/Web/API/File)。只需编辑几行代码就能在Filecoin上存储数据-仅需构建客户端并使用*put()*方法即可。

![](/uploads/image-6.webp)

_浏览器中使用put（）方法存储数据示例_

数据一旦被发送至Web3.Storage，便可使用查询API检查其状态。通过传递CID，即可获得此数据被持久化存储的位置信息。

![](/uploads/image-7.webp)

_查询API的输出示例_

数据被存储后应当如何检索？给定的数据在IPFS和Filecoin网络中的持久性意味着数据可以通过多种方式访问-例如IPFS网关、个人IPFS节点、Web3.Storage本身或者Filecoin检索。多种选择的存在也为应用程序带来了灵活性，且无论采用何种检索方式，任何人都可通过其独特的CID请求给定数据！点击 Web3.Storage相关文件，了解更多不同检索项。

## 自由存储的设计

此刻，你一定在想这项服务怎么可能免费？虽然运行Web3.Storage需要运行一些基础设施，但Protocol Labs可以免费为用户提供服务，因为Filecoin的存储提供者不向Web3.Storage收取存储用户数据的费用。这是由于[Filecoin Plus](https://docs.filecoin.io/store/filecoin-plus/)机制的经济性造成，当Filecoin存储提供者存储用户数据时，该机制会给予丰厚奖励。

简单探讨下个中经济原理……

Filecoin存储提供者将其硬盘容量贡献投入到Filecoin网络，并因此获得可观的区块奖励。这将转化为存储提供者的现实利润，从而激励他们继续向Filecoin网络提供额外的硬盘空间。

然而，当存储提供者存储来自Filecoin用户的数据时，他们赢得区块奖励的可能性会大大增加——10倍！这对Filecoin存储提供者来说是一个强大的激励，他们会更愿意提供免费存储和检索服务，来获得这个区块的倍数奖励。

因此，大多数存储提供者如今都在Filecoin上提供免费存储和检索，而且只要区块奖励持续成为一个强大的激励因素，他们就会继续这样做。这种情况应该会持续很长一段时间。

![](/uploads/web3-storage-fil-plus-gif-1.gif)

## Web3.Storage的下阶段部署

我们欣喜于推出Web3.Storage并与大家一起迭代，致力于打造出可以同Filecoin和IPFS完美融合的易使用界面。目前，产品路线图中未来计划上线的功能还包括支持DAG（不仅仅是文件），完全的文档化HTTP API，支持[IPFS托管服务API](https://ipfs.github.io/pinning-services-api-spec/)，限定范围的认证令牌和基于网络钱包的认证等。若你有想在web3存储中看到的功能，请在我们的[GitHub repo](https://github.com/web3-storage/web3.storage)中提出你的宝贵建议！

还在等什么？今天就开始体验 [Web3.Storage](http://web3.storage/)，并在[IPFS Discord](https://discord.gg/4zEkFVqwms) 或[Filecoin Slack](https://app.slack.com/client/TEHTVS1L6/C027XP5BTGB/thread/G01KU7G441Y-1616053098.177800)的web3-storage频道中加入社区！
