---
aliases: []
author: ""
categories:
  - updates
date: "2021-06-16T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: OpenSea近期推出了“冻结”NFT元数据的功能，使NFT创建者能够通过IPFS和Filecoin正确地将NFT去中心化。
image:
  alt: ""
  url: /uploads/filecoin-ipfs-x-opensea.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-ipfs-x-opensea.webp
title: OpenSea使用IPFS和Filecoin存储NFT
_template: blog_detail_ch
---

[OpenSea](https://opensea.io/)近期[推出](https://opensea.io/blog/announcements/decentralizing-nft-metadata-on-opensea/)“冻结”NFT元数据的功能，使NFT创建者能够通过IPFS和Filecoin正确地将NFT去中心化。OpenSea为如今数百万的NFT创造了市场，是web3领域最大的NFT市场之一。有了IPFS和Filecoin，使用OpenSea的NFT创建者现在可以通过IPFS 的[内容寻址](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/)和Filecoin的[可证明和去中心化存储](https://blog.ipfs.tech/2021-06-03-ipfs-filecoin-content-persistence/)创建不可篡改的NFT元数据。

![](/uploads/screen-shot-2021-06-17-at-1-38-49-pm.webp)

## 回顾：NFT剖析

NFT是一种存在于像以太坊这样区块链上的代币，且可在生态内自由交易。一个NFT通常是通过引用元数据创建而成，元数据包括该代币所代表“内容”的各种细节，例如NFT的名称、描述以及对原始NFT资产本身的引用（图像、视频、音频等）。如今可看到NFT的各种有趣应用-从[财产契约](https://www.theverge.com/2021/4/16/22388177/nft-house-real-estate-opensea-thousand-oaks-california)到[艺术](https://ipfsgateway.makersplace.com/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA)以及更多！

## 为何使用IPFS？

当NFT创建者制作NFT时，要选择如何引用原始NFT资产……将存在于区块链上的代币和可能存在于世界其他地方的相关数据建立一个链接。过去，创建者可能会使用位置寻址URL去指向存储该信息的中心化服务器。不幸的是，这些看似“正常”的URL不够稳定，会出现诸如链接损坏、404错误或一些NFT会出现[“rug pulls”](https://twitter.com/neitherconfirm/status/1369285946198396928?lang=en)有关问题。

值得庆幸的是，IPFS可以解决！IPFS使用[内容寻址](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/)来引用数据。当NFT创建者通过IPFS引用数据时，会创建内容本身的唯一指纹（称为CID）。这个独特的指纹可取代传统URL-任何人都可以通过使用CID来请求数据，以找到与此指纹相关的数据。当在NFT元数据中使用IPFS内容寻址URL时，创建者可以确保其内容有一个“不可变链接”嵌入区块链。

## 为何使用Filecoin？

对NFT元数据进行可快速恢复的内容寻址引用，只是解决方案的一部分。此外，内容需要持久地存储并可供任何人长期检索。这正是[创建Filecoin来解决的问题](https://blog.ipfs.tech/2021-06-03-ipfs-filecoin-content-persistence/)。

Filecoin在**分布式网络**上提供**可验证** **存储**。由于Filecoin的加密证明和经济机制，Filecoin存储提供者被激励在用户需要的时候存储用户数据，确保像NFT此类的珍贵数据得到**保护、永不丢失、长期高度可用**。

## OpenSea的去中心化和不可变NFT元数据

有了OpenSea的[新“元数据冻结”功能](https://opensea.io/blog/announcements/decentralizing-nft-metadata-on-opensea/)，NFT创建者可立刻从IPFS内容寻址、Filecoin去中心化和可验证存储中受益！创建者可以将内容无缝推送到IPFS和Filecoin中，以创建与NFT元数据的不可变链接，并确保内容被永久存储。

欲知更多关于OpenSea的去中心化元数据功能，以及他们如何运用IPFS和Filecoin，请访问[OpenSea播客](https://opensea.io/blog)！

我们很高兴能看到这个功能、以及去中心化不可变存储的浪潮持续震撼NFT市场和Web3。

## 更多资源

若你想开始使用IPFS和Filecoin打造你的NFT项目，请查看我们的资源清单：

- [使用NFT.Storage的免费存储](https://nft.storage)
- [使用IPFS存储NFT数据的最佳实践](https://docs.ipfs.tech/how-to/best-practices-for-nft-data/#types-of-ipfs-links-and-when-to-use-them)
- [用IPFS铸造NFT](https://ipfs.us4.list-manage.com/track/click?u=25473244c7d18b897f5a1ff6b&id=bcae62b60f&e=7fccf7a909)
- [在IPFS上存储NFT](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/)
- [IPFS、Filecoin和内容持久性](https://blog.ipfs.tech/2021-06-03-ipfs-filecoin-content-persistence/)
