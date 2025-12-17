---
aliases: []
author: ""
categories:
  - updates
  - events
date: "2021-03-03T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 欢迎来到Filecoin News 13！
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog-filecoin-news.webp
title: Filecoin News 13
_template: blog_detail_ch
---

![](/uploads/00836d4e-221d-44b2-a867-6d47ff775cfc.webp)

## 创建

![Filecoin Launchpad Accelerator](/uploads/aa9da583-59a2-44cc-a131-7913efbd460b.webp)

### Filecoin Launchpad加速营

来自11个国家的33位创始人参加了为期12周的沉浸式计划，将IPFS、Filecoin和以太坊社区连接起来。点击Filecoin博客了解更多关于创建者及其初创公司的信息。

- [用于媒体、视频、游戏等领域的Filecoin](https://filecoin.io/blog/posts/filecoin-for-media-video-gaming-and-more/)
- [用于内容、运维、可信等领域的Filecoin](https://filecoin.io/blog/posts/filecoin-for-content-devops-trust-and-more/)
- [用于国债、遗嘱、金融存取等领域的Filecoin](https://filecoin.io/blog/posts/filecoin-for-treasuries-wills-financial-access-and-more/)

![NFT黑客马拉松](/uploads/c2f9cdfc-a335-4ab1-b0fe-adbe819004ed.webp)

### NFT黑客马拉松：3月19日至21日

NFTHack将于3月19日至21日在ETHGlobal的支持下召集一群充满激情的创意人员和工程师，举行周末NFT黑客马拉松和峰会。该活动是探索令人兴奋的新事物的绝佳机会。将有来自Zora、Rarible、以太坊、Filecoin、IPFS等的挑战!奖品包括限量版NFT、独家体验和超过1万美元的奖励。[**点击了解更多并注册参与**]（https://nft.ethglobal.co/）。

## 存储

![](/uploads/248952c2-a22e-4425-805c-6d556b5f5df7.webp)

### Space的beta测试版来了

Space 是一个基于开放和分布式网络上开源的、可以由用户控制、加密的文件存储和共享平台。Fleek团队宣布推出Space的Beta版，其特点是在IPFS与Filecoin上提供个人和分布式文件存储和共享的应用。这个版本是开发者如何利用 **Web 3.0协议** 创建平台的一个例子，在这个平台上，用户而不是应用本身，可以对他们的账户和存储享有专属控制权。

## 挖矿

![](/uploads/49082bd0-a1b4-49a5-91e5-db9ce189f068.webp)

### ChainSafe团队关于Forest的最新情况

我们很高兴地宣布，Filecoin的Rust实现Forest现在可以与Filecoin主网进行互操作了！为了达到这个里程碑，我们首先专注于更新到Actors v2，并通过了所有的[**互操作性测试向量**](https://github.com/filecoin-project/test-vectors)。在准备好这些以后，为了发现任何可能存在的共识差异，我们开始尝试与主网进行同步，并修复了可能出现的问题。在这一点上，我们已经有一个节点与Filecoin网络保持同步数周了，并且没有出现任何问题。

我们现在专注于实施网络版本10（包括Actor v3），这样即使完成之后的网络升级，我们也能保持互操作性。也就是说，Forest还未在生产环境中；我们目前正专注于在做安全审计之前改进我们的代码库。请[**查看我们的Github**](https://github.com/ChainSafe/forest)或[**在Discord上联系我们**](https://discord.gg/Q6A3YA2)了解更多信息。

## ⚙️ 开发升级

Lotus v1.5.0是引入了Filecoin网络的第五次升级的一个强制性版本。网络升级发生在区块高度550321，在此之前，所有节点必须更新到这个版本（或更高版本）。在此高度，[**v3 specs-actors**](https://github.com/filecoin-project/specs-actors/releases/tag/v3.0.0)将生效，进而实现以下两个FIP：

- [**FIP-0007 h/amt-v3**](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0007.md)，提高了Filecoin HAMT和AMT的性能。
- [**FIP-0010链下Window PoSt验证**](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0010.md)，通过优化地接受Window PoSt证明而不进行验证，并允许链下验证者稍后对其提出异议，大大降低了SubmitWindowedPoSt消息的Gas消耗。

请注意，V3角色的整合已经在[**1.4.2**](https://github.com/filecoin-project/lotus/releases/tag/v1.4.2)中完成。这次升级只是设置了升级的epoch。要了解更多关于disputer和变化的信息，请参见[**the GitHub release**](https://github.com/filecoin-project/lotus/releases/tag/v1.5.0)。

![Filscan.io & Filwallet.co](/uploads/4e34038d-eafa-416e-bd7a-a46b629ede54.webp)

### Filscan.io & Filwallet.co 已更新

[**Filscan.io**](http://filscan.io/)现在提高了速度、改进了用户界面并进行了可视化分析，包括：24小时的Base Fee变化，FIL分布，扇区比率，幸运值，以及交易列表的细节。[**点击此处查看Filscan**](https://filscan.io/#/home)。

Filwallet.co现在的特点是所有者、矿工和控制者之间的交易更加顺畅，同时使语言之间实现无缝转换。您还可以发现新用户的教程和更多关于矿工节点监控的功能。[**点击此处探索网站的所有最近更新**](https://filwallet.co/)。

## 社区

Filecoin社区见面会计划

Filecoin社区见面会是一个认识Filecoin生态中许多工具和项目背后的人的机会。如果您错过了二月份的见面会，请[**观看记录回顾**](https://www.youtube.com/watch?v=fpGvQtUoHaw)，并确保在3月9日下午1点（太平洋时间）加入我们的下一次线上见面会--[**点击此处注册**](https://www.meetup.com/Filecoin-San-Francisco/events/276425691/)。此外，如果您有兴趣在3月的见面会上就您的项目做一个简短的演示，请[**在此处注册**](https://docs.google.com/forms/d/e/1FAIpQLSc5Ol4Q_FpdnM61gQRQ10DLLrRAy8-j6YrfWUBEbcVVkNQ4mQ/viewform)。

![DI2F研讨会](/uploads/33a29e46-4fc2-44a3-916f-b51988547a3b.webp)

### DI2F研讨会在IFIP Networking 2021举行：利用IPFS和Filecoin实现互联网的去中心化

第一届DI2F研讨会将在首要的网络会议上举行，来自学术界、工业界、Filecoin和IPFS生态以及更广泛的分布式网络社区的与会者将齐聚一堂。研讨会欢迎正在进行中的论文以及立场声明和项目演示的参与。其中巅峰竞赛部分将为与会者提供在IPFS和Filecoin基础上进行开发的机会，并可以赢得奖金。论文、演示和竞赛项目的征集截止到**3月19日**。要了解更多信息并提交注册材料，请查看[**IFIP Networking 2021网站上的投稿征集**](https://networking.ifip.org/2021/workshops/di2f-decentralising-the-internet-with-ipfs-and-filecoin.html)。

{{< youtube id="JQ5YwYgFCv0" title="Data DAOs - Olaf Carlson Wee" >}}

## DeFi与Filecoin的未来

Filecoin正在努力通过扩大应用程序可以处理的数据量，让DeFi投资变得更容易。健全的投资是基于数据的，但直到现在[**还无法在以太坊**](https://www.youtube.com/watch?v=JQ5YwYgFCv0)这样的分布式网络上存储大型数据集。DeFi投资者对市场的清晰洞察能力一直受到限制。但Filecoin允许在区块链原生的去中心化平台上分析大量数据。这为DeFi投资者提供了获取他们在这个新兴领域明智投资所需的洞察力的能力。[**点击此处观看视频**](https://www.youtube.com/watch?v=JQ5YwYgFCv0)。

## ✊ 参与进来

您可以前往 [**GitHub上的Filecoin项目**](https://github.com/filecoin-project)，并一定要查看 [**社区资源**](https://github.com/filecoin-project/community)。在 [**Filecoin Slack**](http://filecoin.io/slack)中提问，在 [**社区论坛**](https://discuss.filecoin.io/)中讨论问题或新想法，或 [**在 Twitter 上关注 @Filecoin**](https://twitter.com/Filecoin)，将您的想法发送给我们。

如果您刚刚开始关注我们，[**The Filecoin blog**](https://filecoin.io/blog/)和我们的[**YouTube频道**](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA)也是很好的信息来源。如果其他方法都失败了，请发送回复到这封邮件，我们将帮助你找到答案。
