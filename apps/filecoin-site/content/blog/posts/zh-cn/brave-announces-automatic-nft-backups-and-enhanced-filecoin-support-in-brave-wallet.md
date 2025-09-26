---
title: Brave宣布在Brave钱包推出自动化NFT备份及增强Filecoin支持功能
excerpt: >-
  Filecoin社区很高兴宣布Brave正式在Brave浏览器和钱包推出新特性，通过Filecoin和星际文件系统(IPFS)来支持web3的发展、落地和使用。这些新特性包括将NFT锚定到IPFS上，以及整合Filecoin虚拟机来访问dApps应用，还有通过Brave钱包利用Filecoin网络的其他功能。
share_image: /uploads/04.webp
image:
  url: /uploads/brave-announces-automatic-nft-hero.webp
date: 2023-05-02T16:00:00.000Z
categories:
  - updates
dim_image: true
---

Filecoin社区很高兴宣布Brave正式在Brave浏览器和钱包推出新特性，通过Filecoin和星际文件系统(IPFS)来支持web3的发展、落地和使用。这些新特性包括将NFT锚定到IPFS上，以及整合Filecoin虚拟机来访问dApps应用，还有通过Brave钱包利用Filecoin网络的其他功能。

Brave和协议实验室从2021年1月开始展开合作，当时[Brave在其桌面浏览器宣布支持IPFS](https://brave.com/brave-integrates-ipfs/) ，为日常用户解锁了web的独特新体验。在同一年的晚些时候，[Brave钱包整合了Filecoin](https://brave.com/1.40-release/)，旨在协助用户在去中心化web网络上存储、访问和分发数据。现在，我们正与Brave一起，让人们在这个日渐增长的去中心化网络里，可以发现参与和贡献的新途径。

## Brave钱包自动使用IPFS备份NFTs

Brave桌面版v1.51引入自动的NFT锚定（Pinning）功能，让Brave的原生钱包可以通过[InterPlanetary File System (IPFS)](https://ipfs.tech/)确保其支持的NFTs的元数据安全性。“Pinning”即告诉IPFS无限期在一个特定位置存储文件，这样就可以长期进行检索。通过将一个文件锚定到多个位置，这个文件的安全性、可检索性及永续性就更上一层楼，这样长期的稳健性也会提升。

虽然很多人相信NFT元数据（如图像和描述）是全部存储在区块链上的，但这通常不是事实。相反，大多数的数字藏品都将其元数据存储在IPFS或其他去中心化存储解决方案里。还有一些甚至会将NFT元数据存放在Web 2.0时代的服务器上，这样还会有数据丢失或审查风险。如果你有兴趣了解更多，可查看[这篇关于NFT.Storage去中心化的博客文章](https://blog.nft.storage/posts/2022-01-20-decentralizing-nft-storage)。

_“Brave现在能通过简单几下点击，就将NFTs锚定到你的本地IPFS节点，确保它们在IPFS网络上的持续可用性，_ Brave联合创始人及首席技术官Brian Bondy说道。

![Brave NFT Gallery](/uploads/brave-announces-automatic-nft-gallery.webp)

即便在不了解IPFS的情况下，Brave钱包用户都可以在本地将NFTs锚定到IPFS上，避免NFT元数据的永久丢失，降低相关忧虑。这确保了用户能妥善备份其NFTs的资源和元数据，让其持续可访问。在Brave里开启对IPFS的支持非常简单，几分钟内就可以完成。在配置好后，符合资格的NFTs就会自动被锚定。值得注意，这不意味着NFTs能因此防御黑客入侵或被盗风险，只是说与其相关的数据会通过多个分布式副本，来确保持续在线的状态。

![Brave NFT钱包细节](/uploads/brave-announces-automatic-nft-details.webp)

这个锚定功能会最先对基于以太坊的ERC-721 tokens可用，后续有计划扩展对其他链和token标准的支持。你甚至可以锚定其他钱包地址拥有的NFTs，包括在硬件钱包里持有的（哪怕它没有连接到Brave钱包）。要这样做的话，你只需要手动输入token的细节数据，那么Brave钱包就会显示和备份这个NFT相关的数据。这意味着即便你不拥有一个NFT藏品，也可以支持改善它的数据健康度和安全性。

## 通过Brave钱包在Filecoin EVM虚拟机上搭建应用

Brave在钱包里增加了对Filecoin EVM（FEVM）的支持，从而简化了访问FVM虚拟机的方式。相关内容重温：

- FVM虚拟机运行时将智能合约带到了Filecoin，让任何人都能进行编程。
- FEVM是一个以太坊虚拟机(EVM)运行时，让以太坊和Solidity开发者在少许修改（甚至无需修改）的情况下，就在FVM上运行其智能合约。

FEVM将现有的以太坊工具和基础设施带到了Filecoin虚拟机上，让人们更容易体验Filecoin的潜力。作为开源项目Filecoin背后的团队之一，协议实验室预期跨链合约调用会有很大进行，可以从其他区块链上执行存储流程。他们还预期去中心化金融、社交、游戏等领域会产生一些尝试，创造出新的交集。

_“在Brave钱包和浏览器支持增加对史上最大的开放存储网络的支持，解锁了web领域的全新应用潜力，将控制权直接交到了终端用户的手上。”_ 协议实验室浏览器及平台主管Dietrich Ayala说道。
