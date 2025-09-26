---
aliases: []
author: ""
categories:
  - updates
  - interviews
date: "2021-03-30T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin Box能满足开发者入门去中心化NFT存储和市场的全部需求，由Truffle Ganache提供技术支持。
image:
  alt: ""
  url: /uploads/filecoin-blog-1207x635-4.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-1207x635-4.webp
title: Truffle Suite推出了包含NFT开发模板的Filecoin Box
_template: blog_detail_ch
---

Filecoin Box已经在Truffle上线！有了Filecoin Box，开发者就可以开始打造去中心化艺术长廊。

## [体验Filecoin Box](https://www.trufflesuite.com/boxes/filecoin)

[Ganache](https://www.trufflesuite.com/ganache) （Truffle Suite的一员）是为开发者提供了私人的、可本地运行的区块链案例的一款模拟器。开发者可以利用Ganache，在安全真实的环境中搭建、部署、测试去中心化应用，再将应用发布至公共网络。Filecoin Box是运用Filecoin Ganache和Ethereum Ganache两大模拟器创建、部署、交易NFT的模板工具。凭借Filecoin Box，Truffle为开发者解决NFT存储问题以及为连接以太坊，IPFS和Filecoin生态奠定了基础。

Filecoin Box让开发者能够在测试环境中搭建去中心化艺术长廊。除了以太坊节点，还有Lotus和IPFS节点用来部署基于ERC-721标准的NFT。此外，Filecoin Box包含一个可以查看资产的前端环境。

长期以来，NFT创作者和持有者依赖有风险的中心化存储解决方案，或是已出现[rug-pull问题](https://cointelegraph.com/news/opensea-collector-pulls-the-rug-on-nfts-to-highlight-arbitrary-value)的地址寻址方式。而Filecoin和IPFS基于其安全性，正快速成为NFT存储的标准。Filecoin为买家和创作者实现分布式数据存储，而IPFS用内容寻址取代传统的https://地址寻址，内容寻址通过加密散列而非地址确认内容。IPFS甚至能让创作者通过简单的命令行应用Minty来铸造并存储 NFTs。Filecoin和IPFS因此引领着NFT的安全存储。

**工作原理**

运行Filecoin Box会生成10个账户，每个账户包含100个FIL。每个账户都可以在模拟环境中创建存储交易、铸造NFT、上传/检索NFT。存储交易是用户（在Ganache中客户即开发者）与存储矿工间的协议，矿工需将数据存储于Filecoin网络（此处指ERC-721资产）。在公共Filecoin网络中，这些交易需通过“OTC”完成，也就是说要先与矿工达成交易，才能存储数据。在Filecoin Box中，交易会自动达成，以模拟一个活跃的存储市场。

通过访问存储市场、向账户充值、创建NFT标准和前端用户界面，开发者可以创建和测试多种Filecoin和以太坊的交互，检验存储和检索过程，持续创造稳健的去中心化应用，支持分布式存储生态。
