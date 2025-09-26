---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-24T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  我们很高兴地宣布，全球最大的开源分布式存储网络Filecoin正集成行业领先的去中心化预言机方案Chainlink，在Filecoin网络和以太坊等智能合约区块链之间双向传输数据。
image:
  alt: ""
  url: /uploads/filecoin_banner_v1-jpg.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin_banner_v1-jpg.webp
title: Filecoin和Chainlink预言机联手为Web3.0开发者推出高级的分布式存储方案
_template: blog_detail_ch
---

我们很高兴地宣布，全球最大的开源分布式存储网络[Filecoin](https://filecoin.io/)正集成行业领先的去中心化预言机方案[Chainlink](https://chain.link)，在Filecoin网络和以太坊等智能合约区块链之间双向传输数据。接入Chainlink预言机后，智能合约开发者将拥有完整的web3.0技术架构，其中包括链上合约逻辑和状态变更；Chainlink预言机的链下交互和运算功能；以及Filecoin的分布式存储和数据解决方案。

Chainlink与Filecoin生态的集成，将前所未有地实现一系列双向智能合约功能。比如通过Chainlink将Filecoin上的加密验证数据传输至外部智能合约系统，并触发链上应用执行；或触发智能合约在Filecoin上自动储存数据。集成了Chainlink预言机后，当Filecoin网络上的NFT内容不可获取时，用户可触发保险智能合约；基于dApp设置的频率将链下数据作为历史索引存储在Filecoin上；以及检索存储在Filecoin上的金融市场数据集，触发DeFi市场结算等。

Chainlink预言机已在主网上线，并且在安全性和可靠性方面都经受了实践的检验，因此是智能合约开发者最理想的预言机解决方案，能够为他们在Filecoin和外部系统之间自动传输数据。Chainlink网络中拥有众多经过安全评估的节点，并且具有抗女巫攻击能力。这些节点可以灵活组成去中心化预言机网络，为用户保障网络稳定运行且预言机服务数据无法被篡改。除此之外，Chainlink还能兼容任何区块链和API接口，因此可以将Filecoin网络接入任何智能合约区块链或链下资源。这将极大丰富开发者创建的应用类型。

![](/uploads/filecoin-diagram_v1.webp)

## 利用Filecoin-Chainlink预言机打造创新的数据存储场景

随着智能合约应用越来越先进，产生的数据越来越多，Web 3.0开发者希望使用Filecoin进行分布式数据存储的需求越来越多。实现这一点需要Filecoin和外部系统（如其他区块链和传统的Web 2.0系统）之间的安全可靠的通信协议。

Chainlink可以为Filecoin提供一系列稳健且完备的预言机功能，打通Filecoin生态和其他智能合约生态。Chainlink目前是市场上最主流的预言机解决方案，横跨DeFi、保险、游戏以及其他区块链等各个市场，保障着超过150亿美元的链上资产。

## 结合Filecoin、Chainlink和区块链打造出完全去中心化的高级应用

Chainlink为Filecoin实现了双向数据传输能力，可以获取链下数据，在Filecoin区块链上触发存储功能；也可以获取Filecoin上的存储状态数据，在其他网络中触发执行。而这一切都是通过定制化的[Chainlink外部适配器](https://docs.chain.link/docs/external-adapters)实现的，Chainlink外部适配器可以读写Filecoin网络中的数据。

在集成初期，将开发Filecoin外部适配器，让Chainlink预言机读取Filecoin上的存储状态数据。之后还会结合其他外部适配器，将数据储存在外部网络中。除此之外，还可以实现许多其他的应用场景，比如直接将其他区块链的数据储存在Filecoin中。

以下是一些初步应用场景，希望为大家带来启发：

1. Filecoin矿工保险：Chainlink预言机可以监控Filecoin矿工的当前状态。如果矿工下线或无法成功检索存储的数据，其他区块链上的智能合约就会收到报警，自动向受保人理赔。比如，存储在在Filecoin上的NFT数据，如果没有及时地被检索到，则会在链上进行相应处罚。

2. DataDAO：DataDAO是指专门持有各种数据集的DAO，其中包括历史价格数据或研究数据等。DataDAO可以在Filecoin上存储数据集，并通过Chainlink预言机将一部分数据传输至其他区块链上的智能合约，以创造新的收入来源。

3. 数据赏金任务：Filecoin上的智能合约基于其独特的CID请求数据集。数据集在Filecoin上通过验证并使用Chainlink传输至外部系统，最后触发支付。

4. DeFi数据：Chainlink可以将大量金融市场数据长期储存在Filecoin上，降低数据存储成本，并将数据按需传输至其他区块链，以开发更多高级的DeFi应用。

5. 自动存储：智能合约可以接入Chainlink预言机，在Filecoin上自动存储数据，并灵活设置存储频率，建立高效且不可篡改的数据归档机制。比如，付款安排和联合曲线等数据可以每隔n个区块在Filecoin上储存一次，这些数据可以为投资者提供关键的决策，但往往需要占用大量存储空间。
