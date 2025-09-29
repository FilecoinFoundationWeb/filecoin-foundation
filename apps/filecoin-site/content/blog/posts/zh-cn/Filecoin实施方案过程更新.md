---
aliases: []
author: Protocol Labs
categories:
  - updates
  - awards
  - events
date: "2020-10-20T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin的启动目标之一一直是拥有多个独立的协议实施方案来帮助保护网络安全。本次更新详细介绍了最近在实施方案方面的进展以及四个主要实施方案的下一步计划。
image:
  alt: ""
  url: /uploads/fil-implementations.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-implementations.webp
title: Filecoin实施方案过程更新
---

Filecoin的启动目标之一[一直是](https://filecoin.io/blog/announcing-lotus/#why-multiple-implementations)拥有多个独立的协议实施方案来帮助保护网络安全。本次更新详细介绍了最近在实施方案方面的进展以及四个主要实施方案的下一步计划：由Chainsafe开发的[Forest](https://github.com/ChainSafe/forest)、Soramitsu开发的[Fuhon](https://github.com/filecoin-project/cpp-filecoin)、IPFSForce开发的[Venus (之前叫做go-filecoin)](https://github.com/filecoin-project/venus)以及协议实验室创建的[Lotus](https://github.com/filecoin-project/lotus)。

## Forest

[Forest](https://github.com/ChainSafe/forest)是ChainSafe开发的Filecoin实施方案的Rust 版本。该项目目前专注于两个主要目标，其中最重要的是与主网的同步和互操作性。团队的目标是分阶段实现的，首先实现链的直接导入，然后发展到通过网络同步链。该团队正在努力实现作为次要目标的全节点功能。

最近在实现这些目标方面取得的进展包括：

- 集成[spec actors release 0.9.3](https://github.com/filecoin-project/specs-actors/releases/tag/v0.9.3)中的矿工行为变化。
- 发布完整的存储矿工实施方案
- 引入消息池变化，包括消息的重新发布、回复和筛选逻辑。
- 更新一致性测试，以发现和解决不兼容问题。
- 过完成状态管理人和Chain store的审阅，以确定自实施方案以来发生的变化。
- 创建本地开发网
- 测试和重构[AMT](https://spec.filecoin.io/#section-systems.filecoin_vm.state_tree.state-tree)实施方案。

Forest是最近创建的[测试向量一致性测试](https://github.com/filecoin-project/test-vectors)的首批用户之一，该测试旨在确保不同Filecoin实施方案和[Filecoin规范](https://spec.filecoin.io/)之间的兼容性和正确性。这帮助团队非常迅速地实现了全面的互操作性，主要归功于不同的消息、技巧集和链级向量的资料库--他们也帮助修改和改进了这些资料库。

Forest团队在测试[go-fil-markets界面](https://github.com/filecoin-project/go-fil-markets)之前，正在寻求在未来几周内整合存储和检索市场。

## Fuhon

[Fuhon](https://github.com/filecoin-project/cpp-filecoin)是由Soramitsu开发的Filecoin实施方案的C++版本。Fuhon团队正在努力建立一个独立的开发网，目前正在完成存储矿工实施方案工作。目前，Fuhon矿机和节点已经兼容[lotus 0.5.4](https://github.com/filecoin-project/lotus/releases/tag/v0.5.4)。该项目也在准备实现和运行一致性测试，以确保互操作性。特别值得注意的变化是最近TLS的修复，它可以实现Lotus和Forest节点之间的连接。

## Venus (之前叫做go-filecoin)

此实施方案最初由协议实验室开发，[go-filecoin](https://github.com/filecoin-project/venus)--现在的代号为Venus--在6月“毕业”后开始由社区维护，我们很高兴地欢迎负责此项目管理的IPFSForce。

该项目的关注点是与过去四个月内的引入规范和Lotus 变化齐头并进。同步太空竞赛的链将作为实现这一目标的第一个里程碑。迄今为止的进展包括：

- 创世块的分析与引入
- 更新数据结构以反映最近变化
- 更新选举逻辑(引入[WinCount](https://spec.filecoin.io/#section-algorithms.expected_consensus.expected-consensus))
- 更新项目依赖关系(如用于随机性的[DRAND](https://spec.filecoin.io/#section-libraries.drand.drand))
- 修复测试代码

在撰写本文时，该团队已经可以部分同步太空竞赛的链，其中有几项改进，尤其是围绕性能的改进非常突出。新团队的目标是在一个月内实现与Lotus的互操作性——非常紧迫的时间安排，如果有人能实现这个目标，那就是这个团队!

## Lotus

目前，[Lotus](https://github.com/filecoin-project/lotus) 仍然是最成熟的Filecoin实施方案。就在昨天，Lotus根据上周的主网启动，发布了[v1.0.0](https://github.com/filecoin-project/lotus/releases)版本。

此前，该实施方案的重点是为[规范的升级](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0)做准备和测试，以为状态突破升级和开发[lotus-lite](https://github.com/filecoin-project/lotus/issues/3532#)基于网关的节点创建灵活的框架，该节点没有Chain store，通过远程节点实现功能。这样就提供了一个可直接与矿工对接的钱包，而无需维护同步Chain store等重量级组件。这项工作的最终目的是拥有一个可以在手机上运行的用户端!

接下来，团队将致力于[FIP-0004](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0004.md)的状态升级，上周所有四个实施方案都通过了这一升级，并看到了挖矿社区的大力支持。他们还在对存储矿工代码进行重大改进，计划在未来几周内逐步改进交付。
