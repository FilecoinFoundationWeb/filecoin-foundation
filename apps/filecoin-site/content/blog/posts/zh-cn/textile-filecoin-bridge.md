---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-10-21T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin开发的最新进展之一是创建NEAR bridge。
image:
  alt: ""
  url: /uploads/textile-filecoin-bridge.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/textile-filecoin-bridge.webp
title: Textile：走进Filecoin Bridge
_template: blog_detail_ch
---

[_HackFS 2021_](https://ethglobal.com/showcase "HackFS 2021") 是一场为期三周的线上黑客松活动，专注于构建去中心化和无信任的数字世界。以下是来自[_Textile_](https://textile.io "Textile") 的[_Carson Farmer_](https://twitter.com/carsonfarmer?lang=en "Carson Farmer")对Filecoin Bridge的探索。在此观看[_完整记录_](https://www.youtube.com/watch?v=aV8-v-kHZfY&list=PLXzKMXK2aHh5iq_crvYF76EmPsZgcgLki&index=5 "Textile: Introduction to the Filecoin Bridge")

## 链上或链下：如何选择？

如今，在互联网上做任何事都需要考虑存储。过去，托管公司会向客户提供存储空间，客户将被托管的数据发布至互联网以供他人访问，这便需要支付费用。

去中心化互联网有其独到的处理存储供应的方法。在分布式存储的愿景中，存储提供商将与用户进行交互并达成交易，帮助用户在区块链上获取数据。

但很遗憾，链上存储较为昂贵，链下存储又比较脆弱。该如何在日常互联网的使用中找到折中的办法？

IPFS应运而生。将数据存储至IPFS网络，则是分布在多个存储提供商之间，而非像如今的网站托管公司那样将数字资产存储在硬盘上。

与引用文件不同，IPFS开发了[content ID (CID)系统](https://docs.ipfs.tech/concepts/content-addressing/ "IPFS Content addressing and CIDs")，允许任何人使用网关并访问给定CID的内容。IPFS通过将数据存储在链下，但将CID存储在链上，降低了数据的存储成本。这种通过IPFS网关访问文件的方法和来自多个服务器的内容寻址创造了弹性和冗余。

存储提供商的奖励取决于其在存储方面对网络的贡献。Textile和托管公司类似，因为它提供对这些CID所代表内容的访问。

由于这种激励机制的存在，热度更高的内容将为存储提供商带来更高收益。那这是否意味着热度较低的内容在未来分布式存储系统中没有一席之地？这也不见得。

小文件或低热度文件可以使用[pinning服务](https://docs.ipfs.tech/concepts/persistence/ "IPFS Persistence, permanence, and pinning")来将数据 “托管”至网络。此方法的缺点是文件并非去中心化，因为需要托管服务才可访问。

Filecoin的加密经济激励机制为小文件或低热度文件的存储提供了一种更易实现的方式。主要通过批处理来实现：将多个文件收集汇总并作为批处理上载到文件系统，如此批次的大小足以引起存储提供商的兴趣，但仍然包含有自己内容ID的较小文件。

## Bridge是什么？和存储有何关系？

Bridge是一种复杂的创造，它从一个区块链获取数据并创建路径用于另一个区块链，路径即为“桥”。NEAR bridge利用NEAR的区块链技术和代币在Filecoin网络上支付交易费用。

这种交互是突破性的改变，因为它允许NEAR主网的用户利用Filecoin的存储优势，使用本地NEAR代币来支付费用——这在以往绝不可能。NEAR bridge是正在开发的桥之一，目前正处于演示阶段。

其他跨链桥还包括一个[连接Ethereum主网](https://filecoin.io/blog/posts/bridging-the-filecoin-and-ethereum-communities/)和一个连接比特币区块链的桥。桥之所以有用，是因为其自带的优势，如下：

**便利性** 桥可以帮助进行批处理、交易和编译文件，使其更容易与Filecoin交互。与手动评估合同和交易不同，桥将此类过程自动化，为用户打造更加友好和简洁的前端。唯一的顾虑是成本。

**缓存:** 批量上传通常会有缓存周期。在此周期内，用户在上传文件至Filecoin网络时还可以继续保持访问。缓存还有助于快速访问文件，减少从一个链跳转至另一个链所花费的时间。

**其他服务:** 根据桥的构建方式，甚至还可以提供额外的服务，如内容索引和映射。

## NEAR Bridge在行动

在HackFS上，Carson 主持了[NEAR bridge](https://near.org/blog/filecoin-launches-collaboration-with-near-to-accelerate-the-growth-of-the-web3-stack/ "Filecoin Launches Collaboration with NEAR to Accelerate the Growth of the Web3 Stack") 的[演示](https://www.youtube.com/watch?v=aV8-v-kHZfY&list=PLXzKMXK2aHh5iq_crvYF76EmPsZgcgLki&index=5)，现场展示了一些令人印象深刻的功能。NEAR bridge目前在测试网上运行，但已在上传文件和与链上钱包交互方面表现出了相当大的潜力。

现场编码会议展示了一个简单的应用程序，它可以连接至钱包并从执行来自NEAR主网的文件上传，所有费用都通过NEAR代币支付。结果是一个上传到Filecoin网络的文件，带有一个可以通过网关（如Textile）访问该文件的内容ID。

与NEAR主网上web3应用程序的无缝集成，可能很快就能利用Filecoin分布式存储系统的优势，其他桥梁还可以在不同网络的用户之间开辟更广泛的分布式存储应用。

## 还需等待多久？

HackFS上的演示表明其基本前提可行，但尚有需解决的问题。团队正致力于实现其他桥接，跨链功能是其首要目标。

虽然Filecoin的桥接开发还处于早期阶段，但就目前看到的演示而言，我们认为距离可工作的主网原型可能不必等待太久。能看到如此集成发生在眼前非常振奋人心。

允许分布式存储的多链桥，整体潜力巨大，并且正在能力范围内改变着世界。
