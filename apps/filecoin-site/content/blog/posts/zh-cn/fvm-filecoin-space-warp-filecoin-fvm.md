---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-12-08T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 通过Space Warp，在FVM虚拟机上部署项目吧！
image:
  alt: ""
  url: /uploads/filecoin-blog-post_-spacewarp.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-post_-spacewarp.webp
title: FVM（Filecoin虚拟机)发布Space Warp项目：Filecoin主网启动FVM的旅程
_template: blog_detail_ch
---

[Filecoin虚拟机](https://fvm.filecoin.io/)的EVM运行时 (FEVM)在2023年2月即将到来，它将是Filecoin网络上 **_最具有创新性的更新之一_** 。开发者能将首次在Filecoin的区块链和存储网络上部署用户定义的智能合约，并能用[Solidity语言](https://soliditylang.org/)编写和部署到众多兼容EVM虚拟机的开发者工具当中（很多Web3建设者早就熟悉这些工具了）。

今年7月份的[nv16 Skyr网络升级](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/)后启动的FVM虚拟机M1里程碑打下的基础，将分阶段在Filecoin主链上引入可编程性（运行定制智能合约的能力）。从那之后，FVM虚拟机团队密锣紧鼓地开始研究期望已久的M2.1里程碑 ([roadmap](https://fvm.filecoin.io/#roadmap-4))，它将会是预计在2023年2月推出的Filecoin [nv18 Hygge网络升级](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-4313888) 中的一部分。就这个里程碑的工作来说，团队在被hypervisor启发的FVM虚拟机设计里加入了一个EVM运行时，它将让多种虚拟机在Filecoin上共存。

随着Filecoin EVM ("FEVM")的打造，早期创建者可以在最新的\[Wallaby测试网(https://github.com/filecoin-project/testnet-wallaby)上尝试每周推出的新特性。现在，相关的特性接近完成，而[最终的FEVM虚拟机Carbonado更新](https://github.com/filecoin-project/ref-fvm/issues/692) 很快会就绪。这个在12月晚些时间推出的更新将启动新的**Hyperspace** **测试网**，它是为FVM虚拟机开发者准备的长期稳定运行的测试网。在未来的道路上，它是也最关注开发者需求的测试网。

## Space Warp项目介绍

为了启发开发者们试用新的FEVM虚拟机并解锁其巨大潜能，如今我们启动了 [**Space Warp**](https://spacewarp.fvm.dev/)项目。它旨在帮助创建者社区加速开发赋能应用，目标是将这些应用部署在明年2月的FEVM主网启动后的网络上。

加入我们为创建者打造的**Space Warp**项目吧：

- 从 **12月8日开始**: **FVM相关的下一步小微资助项目（Next Step Microgrant）将开放申请。**

  [在这里提交申请](https://github.com/filecoin-project/devgrants/blob/master/Program%20Resources/Microgrants%20README.md)，就有机会获得价值5000美元的Next Step Microgrant来在FEVM虚拟机上搭建项目（或将FEVM整合到你的项目中）。还有10万美元的资金池会持续推出。申请将在2023年1月19日结束。

- 即将在 **2023年1月开始（日期尚待确定）**: **FEVM** **Bulletproofing**

  在安全审计开展期间，Filecoin社区成员和安全专家将被邀请参加FEVM代码库的压力测试和早期漏洞寻找计划。符合要求的早期漏洞汇报，将能分享10万美元的奖金池。请保持关注以了解相关的范围和条件。

- 从**2023年1月20日到2月10日**: **Space Warp黑客松**

  Space Warp黑客松会与更广泛的Web3开发者社区互动，以在FEVM虚拟机上部署更有价值的Filecoin应用。

- **1月早期：建造者社区影响评估者排行榜**

  所有的创建者都有资格参与社区影响评估者轮，其中创建者可以对杰出的FVM虚拟机项目进行投票，分享7.5万美元的奖金池，并在FVM建造者排行榜占有一席之地！

- **Space Warp项目后:** **Space Warp建造者案例展示和FEVM启动派对**:

  我们邀请所有人在明年3月初加入创建者的案例展示活动（线上和线下活动都有），以了解他们的FEVM项目以及未来生态的更多机会。

- **March 2023**: **FEVM-focused Accelerators**

  创建者团队将可以申请加入多个专注FEVM的加速器项目，它们会在2023年3月启动，将能为初创团队提供导师和资金支持的机会。

请在[**spacewarp.fvm.dev**](https://spacewarp.fvm.dev)登记信息，我们将会让你收到相关的更新消息，这样你就能了解相关的活动，并获得未来数周将要公布的FVM虚拟机相关新闻机会。

## 进一步了解FVM虚拟机：参与数据经济

Filecoin网络的EVM版本尤为重要，因为它能让开发者通过搭建围绕Filecoin网络（地球上最大的开放存储网络）的token驱动产品和服务，来**参与** **万亿美元的数据经济**。

FVM虚拟机解锁了以Web3原生方式编写软件的能力，这样的软件可以**自动化存储、检索和最终转变数据**。这样的方式能降低我们对少数垄断了市场的云存储公司的依赖。这能让更多用户参与到数据价值的创建和捕获当中。

例如，不同的群体可以有动力参与到**组建DataDAOs当中，围绕重要数据集的创建和保存展开活动 。** 这可以利用一系列新的精彩产品和服务（如FVM虚拟机解锁的Defi和NFT），在token化数据集之上的增值服务持续为新型市场提供资金和创建服务的支持。

Filecoin还有个独特的[岛屿经济（island economy）](https://filecoin.io/blog/posts/filecoin-s-island-economy/) ，其中有来自全球的4000多名存储提供者向网络提供存储能力，其中有大量的价值被锁定为抵押品并持续在收取网络奖励。FVM虚拟机将为**DeFi金融流动和市场**提供更多机会，来进一步发展这个有价值的经济体。

要想了解FVM虚拟机的潜能，可以观看[最近的FIL里斯本演讲](https://www.youtube.com/watch?v=EqLlyJ13DLY)，或通过[FVM文档、教程和资源入口](http://spacewarp.fvm.dev/#resources)学习。

## FVM和Filecoin路线图

明年，待FEVM在主网部署后，还会增加一个**WebAssembly FVM虚拟机运行时**，未来还可能有更多的虚拟机选项。那样，开发者将可以使用Rust、AssemblyScript、Go等语言编写定制智能合约并编译成字节码，甚至可以使用其他能进行隐私保护的编程语言（如类型zk-SNARKs特性的[Lurk](https://filecoin.io/blog/posts/introducing-lurk-a-programming-language-for-recursive-zk-snarks/)。

FVM虚拟机仅仅是2023年Filecoin众多重要更新的其中一环。Filecoin网络正在[open services](https://medium.com/tldrfilecoin/state-and-direction-of-filecoin-summarized-4b90c59e3cca)之上搭建去中心化互联网的基础，而内建于协议的开源设计和激励机制将推动众多高质量服务的开发。

Filecoin已经打造了拥有15EiB容量的文件存储网络， 2023年将是激动人心的一年，它将会带来Filecoin的[检索市场](https://retrieval.market/)、 数据计算和 [星际共识](https://research.protocol.ai/groups/consensuslab/)。还有更多精彩的开发服务能力和市场会被加入这个网络里，而通过互操作的跨链和L2二层解决方案，还有机会让Filecoin强大的存储原语与其他网络的能力进行互补。你可以在[TL;DR Filecoin博客](https://medium.com/tldrfilecoin/state-and-direction-of-filecoin-summarized-4b90c59e3cca)了解项目的未来发展方向。

让我们来一起打造未来吧！
