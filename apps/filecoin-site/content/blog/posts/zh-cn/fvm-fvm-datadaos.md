---
aliases: []
author: ""
categories:
  - updates
date: "2023-02-01T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 现在有了FVM虚拟机为存储带来的可编程性，DataDAO很有机会解锁有价值的数据解决方案和服务。
image:
  alt: ""
  url: /uploads/fvm-imaginarium-datadaos.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvm-imaginarium-datadaos.webp
title: "FVM用例探索之旅: 用FVM虚拟机让DataDAOs迈出新一步"
_template: blog_detail_ch
---

_Filecoin虚拟机(FVM)临近发布，但一些精彩的项目已经迫不及待了。FVM Imaginarium活动正为这样的项目提升曝光度——它们在搭建非常好的用例，为FVM虚拟机带来新机会和新概念。_

去中心化自治组织(DAOs)是分布式的实体，通过链上活动和参与者来实现所有权和治理。Filecoin作为一个能够存储大量数据的网络，在如今的数据时代有重大意义，而DAO在存储数据这个领域有很多的机会。这类应用被称为DataDAO，能够收集、治理、使用和分发有用的数据。现在有了FVM虚拟机为存储带来的可编程性，DataDAO很有机会解锁有价值的数据解决方案和服务。

## Lagrange DAO

Lagrange DAO是专注于[数据价值实现](http://lagrangedao.org/)和去中心化科学(DeSci)的DAO. 它为DeSci提供数据共享和分析空间。Lagrange Spaces让研究人员可以利用Web3公共基础设施，来更公平、平等地存储、分享、创建、奖励和传播科学知识。

它由四部分组成：数据集、模型、空间和收入分享机制。在Lagrange DAO里，研究人员可以上传数据集和模型到自己的工作空间里并与社区分享。用户可以与数据和模型的贡献者分享收益。

据这个团队说，他们“旨在提供由社区驱动的自我持续数据生态系统。”

## GlacierDAO

GlacierDAO正寻求解决[源代码保存](https://github.com/joaosantos15/glacierdao)的问题。该团队旨在搭建一个DAO，用于为Git库里含有公共价值的代码库制作副本。此外，它会让聚集资金，以在Filecoin网络上完成这项任务。它还有一个额外的激励机制——对那些与社区价值一致的用户，它会赋予其更高的投票权，让其可以参与决定收集哪些程序库。

GlacierDAO计划完全在Filecoin网络上通过智能合约的形式运行，不会设有管理员账户。因此，程序库的收集、存储交易提议处理和奖励分发都会完全由该智能合约完成。

## SPN DAO

SPN DAO是一个DataDAO，[能让用户将信用卡交易数据](https://github.com/SPN-DAO)转化为资产，从而直接控制和变现自己的数据。（如卖给想要信用卡交易数据的银行）。

DAO成员贡献的数据会加密后上传到IPFS上。IPFS的内容标识（CID）在链上加密，并在一个灵魂绑定token(SBT)的元数据里被引用，它代表了DAO的成员资格。只有由一个DAO管理员钱包拥有的“admin NFT”才能被授权解密这些通过IPFS获取的数据内容。Filecoin或Polygon形式的付款会在解密后马上发送到DAO成员SBT的持有者账户里。

该团队正试图通过未来的开发迭代，来解决数据加密可靠性等挑战。这包括了稍后的一个计划，它将能够在Gnosis多签机制上存储一个解密钥匙，并在解密时要求获得足够数量的签名才会授权操作。

## Kangaroo

Kangaroo是一个[DataDAO快速上手套件](https://github.com/kangaroo-data-dao/)，让任何人都可以创建一个DAO并向其成员分发ERC-20标准的token。这些成员还能投票决定数据和文件集的保存决策——成员可以将其 token放置stake机制中，投票决定保存特定数据集，或提交数据集让其他成员投票，还可以向存储提供者支付治理token。此外，它还可以投票决定存储提供者的持续运作问题（同时可以提供激励）。

这个团队称Kangaroo的目标是成为“Filecoin区块链上创建DataDAOs的事实标准。我们致力于将这个项目带得更远，让不同DAOs可以利用我们的智能合约来支持去中心化文件持久存储的治理问题。”

## Shale

Shale想将云计算带到Filecoin上，并让存储提供者利用现有的存储能力支持计算，直接与其他云计算提供者（如亚马逊和谷歌云）竞争。公共用户会有机会从存储提供者手上租用计算资源实例，并通过本地网络访问Filecoin+存储交易提议。

该团队希望吸引AI公司和研究人员利用“存储提供者网络里的廉价GPU资源和存储交易提议里的大量数据”。 Shale在FEVM虚拟机上通过离线协议和SDK库来实现一个二层（L2）市场机制。

## 在Filecoin上搭建你的首个DataDAO

那些想在Filecoin搭建DataDAO的人，[可以参考这个模板](https://github.com/rk-rishikesh/DataDAO) ，来马上尝试Filecoin兼容以太坊的虚拟机。要获取FVM虚拟机的最新进展，记得关注[Filecoin推特](https://twitter.com/Filecoin)，并留意FVM Imaginarium的动态。
