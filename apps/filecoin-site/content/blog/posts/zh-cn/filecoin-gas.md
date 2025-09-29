---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-10-08T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Gas费可以被认为是Filecoin区块链的上的燃料，就像汽车的燃料一样。在您开始一次公路旅行之前，你必须为行驶和为发动机上下坡提供动力时消耗的汽油付费。同样，Filecoin上的消息发送者也要为在Filecoin区块链上执行消息的
  "算力 "或 "燃料 "支付Gas费。
image:
  alt: ""
  url: /uploads/filecoin-features-gas-fees.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-features-gas-fees.webp
title: Filecoin功能特色：Gas费
_template: blog_detail_ch
---

_这是我们强调Filecoin网络上独特功能特色的系列文章最新部分。本文深入探讨了Gas费——它们是如何运作的，以及为什么它们对Filecoin网络很重要。_

Filecoin是参与者在分布式网络上进行交易的区块链经济。网络状态通过矿工记录以及处理他们挖出的区块中的消息来更新。消息有很多种，其中包括存储入库、存储交易、持续证明、代币交易等。

然而，由于链的性能、可扩展性和验证时间的限制，一个区块中可以处理的消息数量是有限的。因此，在任何特定时间，网络上只有一部分消息可以打包进一个区块。

此外，执行消息会消耗网络上的计算和存储资源。这就是 "Gas "作为衡量消息消耗的资源的作用。消息所消耗的Gas量直接影响到发送者将该消息提交到区块链所支付的成本。而一个区块中所有消息的总耗气量是有限制的。

Gas费可以被认为是Filecoin区块链的上的燃料，就像汽车的燃料一样。在您开始一次公路旅行之前，你必须为行驶和为发动机上下坡提供动力时消耗的汽油付费。同样，Filecoin上的消息发送者也要为在Filecoin区块链上执行消息的 "算力 "或 "燃料 "支付Gas费。

## Filecoin如何使用Gas费

Gas费最初是在以太坊区块链上作为衡量一条消息所消耗的计算和存储资源来实现的。这就是 "GasUnit "这一短语的起源。历史上在其他区块链中，矿工以本币为单位指定一个Gas费，然后根据消息消耗的Gas数量向区块矿工支付优先费用。

但Gas的消耗是整个网络应承担的成本，因为网络上的每个节点都要花费存储和计算资源来验证每条消息，并保持网络的一致状态。因此，根据某条消息的Gas成本来燃烧相当的Gas费来补偿网络。如果不摊销这个成本，就会造成激励不均，因为挖出区块的矿工可能会以牺牲其他矿工的利益为代价，免费打包一个计算成本很高的消息。

基础费是以太坊[EIP1559](https://www.google.com/url?q=https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md&sa=D&ust=1602170727749000&usg=AFQjCNG0LWmEPqw9dGWF0XA0X7bD6e6UqQ)提出的一个概念。基础费乘以Gas用量就是被“烧毁”的部分。“烧毁”意味着它被发送到一个不可恢复的地址，并从网络上的流通中移除。它是根据特定时刻对网络带宽的需求动态调整的，随着网络的拥堵而上升，这样价值低于网络基础费的消息发送者将持有并等待，直到拥堵消除。基础费的变化率被设计成很快，以快速增加潜在的DOS攻击，并随着网络变得不那么繁忙而快速减少。因此这就导致让网络变得更加拥堵的消息发送者也会通过支付更高的费用来内化成本。烧毁本身也会促进缓慢的通货紧缩，使所有网络参与者受益。

回到我们的公路旅行，想想看，Gas就像你车里的汽油，而网络就像平时的交通道路。如果道路拥堵，例如在高峰期，交通是走走停停的，你的车会消耗更多的汽油。在这些情况下，等待一段时间再继续你的行驶可能比较好。同样的理论也适用于Filecoin网络——当网络交通拥堵时，Gas费会很高，等一下再回来继续会比较好。

除来烧毁部分费用来补偿网络之外，消息发送者还要付一个给区块矿工的优先费用，这个费用与消息消耗的Gas量无关，这就是所谓的Gas优先费，它也可以在协议外进行。

## Gas费实用指南

为了帮助读者更好地理解Gas机制，下面介绍有关消息的Gas费概念及其交互。这些字段可以由消息发送者设置，但目前在lotus中是自动设置的，可以开发更多的工具来改进。

**GasLimit** —— 对消息执行过程中可消耗的Gas量的限制，由消息发送者估测和指定。一个区块中包含所有消息的GasLimit总和不得超过BlockGasLimit。这里是以GasUnit为单位的。

**GasUsage** —— 消息执行过程中实际消耗的Gas量。目前的协议不知道一个消息在执行前到底会消耗多少Gas。这里是以GasUnit为单位的。

**GasFeeCap** —— 发送者愿意为在区块中包含某条消息而为每个GasUnit支付的最大代币金额。消息发送者在发送消息时，必须满足GasFeeCap乘以GasLimit的最低余额，即使不会全部消耗掉。这是以attoFIL/GasUnit为单位的。

**GasPremium** —— 每单位GasLimit支付给区块矿工的优先费用。该费用最高不超过GasFeeCap，BaseFee具有更高的优先权。这里是以attoFIL/GasUnit为单位的，可以低至1 attoFIL/GasUnit。

**BaseFee** —— 一个全网变量，根据前一个提示集中所有消息的GasLimit总和进行动态调整。当总的GasLimit超过某个区块的目标GasLimit时，它将增加，低于时则减少。这是以attoFIL/GasUnit为单位的。

消息发送者只需为每条消息指定一个GasFeeCap和GasLimit。GasUsage乘以BaseFee将在消耗链上资源时被烧毁。从GasFeeCap减去BaseFee将产生GasPremium。GasPremium乘以GasLimit将作为优先费用给区块生产矿工。GasLimit和GasUsage之间的部分差额将作为高估罚款被烧掉，剩余的将退还给消息发送者。

目前，默认的实现方式是矿工根据GasFeeCap/GasLimit来选择消息，以在给定区块GasLimit的情况下实现预期收益最大化。当网络拥堵且BaseFee较高时，矿工可以自行选择打包区块，从而减少GasLimit总量以降低BaseFee，但可能会牺牲一些GasPremium。

## 未来计划

研究和工程团队正在努力降低上链的不同消息的资源消耗，以减少Gas使用量，并提高网络性能以增加容量。然而，目前Filecoin上有一些消息（如SubmitWindowedPoSt）必须在一个相对较短的窗口内提交到链上，否则会产生罚款。我们正在不断致力于改善经济结构，使这些类型的消息能够得到有质量保证的服务。Filecoin网络作为一个由用户、矿工、开发者、合作伙伴和代币持有者组成的群体，将继续齐心协力将网络向更好的方向发展。未来的改进请关注[Filecoin Lotus docs](https://github.com/filecoin-project/lotus)和[Filecoin Improvement Protocol](https://github.com/filecoin-project/FIPs)。
