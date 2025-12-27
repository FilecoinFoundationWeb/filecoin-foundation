---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-09-10T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 详解选择Estuary、Web3.storage和NFT.storage的不同原因
image:
  alt: ""
  url: >-
    /uploads/decentralized-storage_hu560acc3b2bf52f5c764723e70a83f8f7_318054_1500x0_resize_q90_linear.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: >-
  /uploads/decentralized-storage_hu560acc3b2bf52f5c764723e70a83f8f7_318054_1500x0_resize_q90_linear.webp
title: 了解去中心化存储的不同产品：Estuary、Web3.storage和NFT.storage
_template: blog_detail_ch
---

## Filecoin和IPFS

Filecoin是用于备份的去中心化存储体系，不过，存储在Filecoin区块链上的数据是哪里来的？其实，数据先是被添加到一个IPFS节点，让人们可以与存储服务提供者商议有关将信息存储在Filecoin上的事宜。

IPFS是一个分布式的系统，用于存储和访问文件、数据和应用。文件系统通常的工作原理就是通过对数据的组织实现对其的访问。例如，FAT文件系统使用文件分配表来寻找数据，而NFTS文件系统使用硬链接和数据流，IPFS则使用内容ID（CID）.当一个开发者需要访问存储在IPFS网络上的应用程序或数据时，他们需要获得对应的CID标识。

不过，由于浏览器并没有对IPFS的原生支持，因此使用一个中介服务是访问这些数据的唯一方式。IPFS网关为开发者和用途提供这种功能。任何人都可以通过CID标识访问存储在IPFS网络上的数据。CID标识让这些数据更具弹性。

例如，当一个节点因各种原因下线时，在其他节点上的信息则可作为备份被访问。IPFS网络可以简单地从通过CID标识从另一个备份节点载入数据并进行访问。

人们可以将FIlecoin视为一个租赁系统，开发者或用户可以Filcoin区块链租用长期的文件存储空间，并付费来存储其数据。区块链只是简单地作为交易提议达成和保证安全性的机制。存储服务提供者会尊重所达成的交易提议，将其存储空间提供给开发者和用户，让他们在区块链上保留其IPFS数据，从而保持在长期的可用性。

要了解Filecoin和IPFS的互动机制，可以从各类网关系统开始，如[**Estuary**](http://estuary.tech)**，** [**Web3.storage**](http://web3.storage)**，** 和[**NFT.storage**](http://nft.storage)**.**

## 为什么有三种不同的存储产品？

实际上，这三种网关所做的事情是相似的。它们作为中介接收将要存储到IPFS系统上的数据，收集CID标识，并为用户创造合约提供渠道以让其存储数据到Filecoin链上。

如果它们提供的功能是相同的，为什么我们需要三类产品呢？其实，每一种解决方案都是为特定目的和受众设计的。为了真正了解各自的功能，我们需要详细检视。

### Estuary

[Estuary](http://estuary.tech)是一种让开发者自动化往IPFS网络和Filecoin网络上投入存储空间的方式。它是一个整合了Filecoin库的简单IPFS节点，让人们更容易使用与IPFS和Filecoin区块链互动所需的功能。Estuary专注于达成Filecoin网络上的大体量存储交易提议，同时又支持IPFS开发者所知晓的开发者体验。

Estuary旨在为有需要存储大量数据的客户服务。当前，它的特性支持每小时最高600笔交易提议，每一个Estuary节点的存储容量都在推动生态系统的能力上限。

你其实可以走这个繁琐的步骤：访问IPFS节点，协商存储交易提议，然后与存储服务提供者交流以手动将数据存储在Filecoin区块链上。不过，这样做是很繁琐的，尤其是有大量文件需要存储的时候。Estuary提供了简易的方式，让你可以作为开发者存储文件和协商合约，这让事情变得更轻松了。

Estuary的前端界面让用户通过数次点击就能登录和上传文件到IPFS. Estuary会联系存储服务提供者并与其中的6个协商已验证的交易提议。你可以直接在Estuary上检查交易提议的内容。如果数据体积低于3.57 GiB，你的数据将会临时保持在一个准备区，而交易提议的协商将会在几小时内处理，从而将数据（以及其他包）作为一个区块添加到网络上。

在交易提议创建后，你会得到CID标识的链接。你可以在你的app或网站上使用这个CID标识以从任何公开的IPFS网关取回数据，毕竟你的数据现在可以从一个分布式的全球网络上访问了。即便你的数据仍在Estuary的准备区而尚未备份到Filecoin上，你还是可以从任何IPFS网关取回CID标识，这让你可以无缝进行开发，而无需担心数据是否已经被添加到FIlecoin生态系统。

Estuary使用IPFS pinning标准，因此切换到现有的其他解决方案是很容易的。对任何需要传输大量各种体积文件的软件开发者来说，Estuary的功能是很完美的。Estuary并不需要特定的编程语言，因此你可以用最习惯的方式来使用它。因为其直观的性质，推出app和网站可以是毫不费劲的。

[可以探索Estuary](https://estuary.tech/)或[了解更多](https://filecoin.io/blog/posts/taking-a-look-at-estuary/)。

### Web3.storage

[Web3.storage](http://web3.storage)是另一类用于与IPFS网络和Filecoin区块链互动的网关类型。与Estuary类似，这个服务提供了在IPFS系统上存储数据的方式。它为用户提供了访问IPFS网络、存储数据和免费取回数据的方式。

IPFS与Estuary的整合需要一些准备措施，不过Web3.storage为用户提供了快速使用IPFS网络和Filecoin所提供的存储空间的机会，而无需深入研究相关的整合事宜。

就如Estuary，你将需要一个API秘钥来访问该系统。不过，那只需要创立一个免费账号和上传一个文件而已。当你处理完这个文件后，你可以使用API秘钥来在curl命令行或浏览器里直接访问这个文件。

为了更容易搭建一个web app，可以在你的代码里使用几行代码，来利用直接的JavaScript接口使用IPFS. 搭建IPFS节点的脚本需要API秘钥才能工作，不过它可以从网站的文档上直接复制黏贴。

你可以通过文件的CID标识来直接访问，并简化你的JavaScript app使用IPFS网络上所存储数据的方式。这种简单的使用方式，对那些希望使用Web3.storage来直接存取文件的JavaScript应用程序开发者来说，是一个很理想的存储解决方案。

[访问web3.storage](http://web3.storage)或[了解更多](https://filecoin.io/blog/posts/introducing-web3-storage/)。

### NFT.storage

虽然非同质代币（NFT）已经成为当前互联网的最热话题，但在网上存储NFT对用户来说还是挺麻烦的。[NFT.storage](http://nft.storage)是一个在IPFS网络上存储NFT的专用接口，它会自动将内容复制到Filecoin区块链上。

与前面所提及的网关相比，NFT.storage的独特之处在于它保留了买卖NFT过程必要的元数据。由于NFT是区块链环境里的艺术品或收藏品，元数据对决定这些数字资产的当前所有权和历史流转过程是很重要的。NFT需要长期的可存活性，而像IPFS这样的去中心化存储系统可以免费提供这点。

NFT.storage使用了Estuary和Web3.storage这类服务的很多存储细节特性。它提供了已上传文件的CID标识，让用户查看其在Filecoin区块链上的存储交易提议状态。任何通过NFT.storage存储的NFT都可以通过其内容ID来在任何IPFS网关上访问。由于API的简便性和开发环境整合的快速性，NFT.storage对那些希望简单快捷地在区块链上存储工作成果的NFT创造者来说是很理想的。

有几家知名的NFT市场已经通过IPFS和Filecoin支持它们的系统了。在这个领域里最出名的两个，就是[Palm](https://palm.io/)和VideoCoin，它们使用了IPFS来存取内容。不过，NFT.storage为用户提供了无需中介直接与IPFS网络互动的方式。它为NFT创作者赋能，让他们获得IPFS这样健壮的去中心化存储网络所提供的存储弹性。

[探索nft.storage](http://nft.storage)或[了解更多](https://filecoin.io/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts/)。

## 如何选择？

![Estuary vs. Web3.storage vs. NFT.storage](/uploads/nftstorage-web3storage-estuary-comparison.webp)

这取决于你在搭建什么。如果你是一名熟悉JavaScript的web开发者，你可能会觉得[Web3.storage](http://web3.storage)更容易使用，而且更能满足你的开发需求。如果你在开发去中心化应用，又想实现更多的数据存储控制方式，则[Estuary](http://estuary.tech)能满足这点，不过它的后端可能会更为复杂。如果你是一名NFT创作者，希望实现对上传作品的更多控制，则[NFT.storage](https://docs.google.com/document/d/1T8LCur4nqDHRrW-4RScV9TNyCDkl2efVBSlctpmLKOk/edit#heading=h.g7e5xa6zn616)或许能满足你的需求。这三种工具提供的功能有很多相似之处，不过每一种都为特定用例而设计。无论你选择哪个，都可以深入探索并享受其乐趣！
