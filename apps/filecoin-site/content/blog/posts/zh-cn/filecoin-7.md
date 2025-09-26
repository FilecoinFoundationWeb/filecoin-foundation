---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-08-12T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  本文是Filecoin网络特有功能亮点系列文章的最新一期。Filecoin将成为生产级别drand网络的首个知名用户。本文深入探讨了drand是什么以及其工作原理。
image:
  alt: ""
  url: /uploads/drand-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/drand-header.webp
title: "Filecoin特色: 分布式随机性 & 领导人选举"
_template: blog_detail_ch
---

_本文是Filecoin网络特有功能亮点系列文章的最新一期。Filecoin将成为生产级别drand网络的首个知名用户。本文深入探讨了drand是什么以及其工作原理。_

致力于提供可公开验证和无偏随机性作为基础互联网服务的联盟组织——League of Entropy在本月将升级到提供生产级别的服务，该服务将用作Filecoin 的链下随机性来源。Drand 将来可为许多区块链系统和应用程序提供可靠且公正的随机性来源。本文探讨了 Drand 的历史和价值以及它对互联网未来的意义。

## 为什么随机性很重要？

随机系统产生的结果是[均匀概率分布](https://en.wikipedia.org/wiki/Discrete_uniform_distribution)且相互[随机独立](<https://en.wikipedia.org/wiki/Independence_(probability_theory)>)的。我们在每次掷骰子和掷硬币时都会遇到随机性：当您掷出一枚正常的硬币时，正面和反面的概率相同或一致（即均匀分布），并且您无法根据过去的结果来预测任何单个抛硬币的结果（即随机独立）。

但随机性不光可以用来确定抛硬币和掷骰子的统计数据。实际上，[加密](https://www.design-reuse.com/articles/27050/true-randomness-in-cryptography.html)、[网络安全](https://blog.cloudflare.com/why-randomness-matters/)、[选举审核](https://theconversation.com/using-randomness-to-protect-election-integrity-74139)和 线上博彩 等都依赖随机性。

因为随机性可以防止某些数字化过程被操控。比如，任何加密系统只有在其密钥难以破解的情况下才能防止欺诈和黑客攻击。而且只有用于生成密钥的源值是随机的，才难以破解密钥。换句话说，加密安全的基础是随机性。

但并非所有随机性都是相同的。例如，当生成1 -10 之间的随机整数时，您会有十分之一的几率猜出正确数字。但是，如果您的随机性生成器出现偏差或定式，则正确猜出数字的几率可能会大于十分之一。换句话说，就是使用了“可预测”的生成器。可预测的随机性再次为欺诈行为和黑客打开了大门。我们不仅需要随机性，还需要良好的随机性。好的随机性比您想象的要难生成。

随机性的质量是通过其不可预测性来衡量的，这种不可预测性是被称为“熵”的随机性。由于计算机是确定性系统，因此使用计算机算法来创建真正的高熵随机性[在算法上是不可能的](https://engineering.mit.edu/engage/ask-an-engineer/can-a-computer-generate-a-truly-random-number/)。但是，即使物理随机性是由单一来源生成的，也很容易产生偏差。如果您可以控制、操纵或以其他方式影响随机性的来源，那么您就可以生成具有明显偏向性的随机结果，从而对您有利，例如最近发生的[备受关注的彩票欺诈案](https://www.nytimes.com/interactive/2018/05/03/magazine/money-issue-iowa-lottery-fraud-mystery.html)就说明得很清楚。对于许多随机性的使用场景，例如选举审核和加密，您还需要随机性才能公开验证。随机数生成器具有只传达给用户的方式。如果您无法验证接收到数字是随机的，那么您的系统可能会受到攻击和操纵。

具有高熵性、无偏性和可公开验证的随机性很难找到。多年来，没有任何服务可以大规模产生这种随机性。但是现在出现了一个新的项目可以完成这项任务。它被称为 Drand （分布式随机性的缩写）， Filecoin 也将它用作其随机性来源。

## 什么是drand?

[Drand](https://github.com/drand/drand) 也被称为随机信标，一种可供第三方使用的、可公开访问的随机性服务。尽管随机信标已经存在了一段时间，但 drand 的独特之处在于它通过结合独立运行的服务器网络贡献来生成随机性。这意味着 drand 将分布式网络的强健性、安全性和弹性纳入随机性生成的过程中。**这使 Drand在许多地方成为行业第一的“随机即服务”。**

Drand是在全球网络[League of Entropy](https://blog.cloudflare.com/league-of-entropy/)上运行的开源软件，由许多组织进行维系，包括[协议实验室](https://protocol.ai/)、[C4DT](https://www.c4dt.org/)、[ChainSafe](https://chainsafe.io/)、[cLabs](https://celo.org/)、[Cloudflare](https://www.cloudflare.com/)、[Emerald Onion](https://emeraldonion.org/)、[EPFL](https://www.epfl.ch/en/) [DEDIS](https://www.epfl.ch/labs/dedis/)、[Ethereum Foundation](https://ethereum.foundation/)、[IC3](https://www.initc3.org/)、[Kudelski Security](https://www.kudelskisecurity.com/)、[PTisp](https://ptisp.pt/)、[智利大学](https://www.uchile.cl/)、[Tierion](https://tierion.com/)和[伦敦大学学院](https://www.ucl.ac.uk/)。**因为 Drand 网络分布在多个服务器节点上，所以不会由于中心化引起故障，这意味着 Drand 不会受到偏见影响，也无法被单个内部人员或单个网络合作伙伴所破坏。** 而且，作为一个开源项目，Drand 直接受到其用户的支持，从而确保该协议始终是一个能够满足其社区需求的、不断发展的项目。

Drand 的主要功能是生成可供所有人使用的公开可用随机性。为了安全地执行此功能，drand 网络中的所有节点在规定的时间间隔内（称为“回合”）共同协作生成随机性。在每一回合随机性的生成中，drand 为随机性提供了三个不同的属性：不可预测性、无偏性和可验证性。这就意味着每一回合随机性的生成：（1）都不能由参与随机性生产过程的任何一方预测（2）是一致随机且无偏的（3）可以通过验证单个签名来验证是真正随机的。

Drand 提供了迄今为止最可靠的、高熵的公共随机性。这就是我们为什么在 Filecoin 网络中 使用drand 生成随机性的原因。

## Filecoin 如何使用 Drand

许多加密货币和基于区块链的网络需要良好的随机性才能安全有效地运行。Filecoin也不例外。Filecoin 依靠良好的随机性值来维持“活跃度”，即保持所有客户对 Filecoin 区块链正确历史的共识。Filecoin 使用随机性来进行领导人选举以确定哪个矿工挖出新块。

领导人选举是 Filecoin 区块链增长的方式。Filecoin 区块链中的区块按纪元（epoch）排列，每个纪元都有可能选举出多个领导人。在领导人选举中，会按照矿工向Filecoin网络贡献算力的权重从一组矿工中至少选出一名领导人。被选出的矿工通过在区块链上生成下一个区块并获得该区块的奖励来开始一个新纪元。

领导人选举记录了 Filecoin 区块链的历史，领导人选举过程的不可篡改性、公正性、不可预测性及公平至关重要。为了确保选举的公平公正，Filecoin 需要良好的随机性。同时，Filecoin 需要它所使用的随机性可以公开验证，因为当选的领导人需要某种方式向其他矿工证明他们是真实被选举出的。

Drand 为领导人选举的公平性与安全性精确地提供了其所需要的高熵、无偏和可公开验证的随机值。其独特的功能确保 Filecoin 的领导人选举具有与 drand 一样的容错能力、无偏性以及防止被操纵。通过使用 drand 作为随机值的来源，Filecoin 网络可以保证其活跃度。

## drand的未来

Drand 是一个快速发展的项目且具有广阔的增长空间。随着 drand 的发展，我们可能会以新的方式看到满足不断增长的行业需求并适应新技术的网络扩展，例如密码学和量子计算的进步。但drand 已经是一项可以为包括 Filecoin 网络在内的许多数字项目贡献重要力量的前沿技术了。

要了解有关 drand 的更多信息，请加入我们在 8 月 13 日星期四进行的由协议实验室和 ETHGlobal 主办的[随机性峰会](https://randomness2020.com/)。随机性峰会是为期一天的线上会议，主要面向分布式系统和主要基础设施爱好者，共同探讨随机信标的研究和部署状态。[点击此处可查看会议全程](<[https://randomness2020.com/](https://randomness2020.com/)>)。
