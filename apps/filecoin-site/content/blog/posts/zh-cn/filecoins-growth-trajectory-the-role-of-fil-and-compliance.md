---
title: Filecoin发展轨迹：Fil+与合规的作用
excerpt: >-
  当Filecoin网络开始发展时，Filecoin Plus (Filecoin
  +)作为有别于核心协议的可选层被引入，为社区成员提供数据加载的替代途径，同时激励那些帮助将用户数据加载到网络中的存储提供者。如今，该计划提供了将数据上载至网络的不同途径和工具。随着数据持续通过Fil+上载，该计划专注于确保交易分发和交易过程中的可检索合规性，从而提升网络的完整性和有效性。
share_image: /uploads/FilecoinPlus.webp
image:
  url: /uploads/FilecoinPlus.webp
date: 2023-09-11T16:00:00.000Z
categories:
  - updates
dim_image: true
---

当Filecoin网络开始发展时，[Filecoin Plus (Filecoin +)](https://filplus.storage/)作为有别于核心协议的可选层被引入，为社区成员提供数据加载的替代途径，同时激励那些帮助将用户数据加载到网络中的存储提供者。如今，该计划提供了将数据上载至网络的不同途径和工具。随着数据持续通过Fil+上载，该计划专注于确保交易分发和交易过程中的可检索合规性，从而提升网络的完整性和有效性。

## Fil+为何要求合规

在Filecoin这样的点对点分布式网络中，激励合规框架对于确定参与规则至关重要。随着网络发展，检测合规性和识别激励机制滥用风险的自动化和客观工具变得十分必要。在Filecoin上，我们可以期待多种形式的交易。缺乏解决集中风险的机制，如将数据存储在单一区域或使用少数存储提供者（SP），可能会导致我们在Web2存储系统中看到的类似挑战。作为一个社会信任层，Fil+采用了激励-合规机制，通过DataCap （DC）对数据用户进行激励，确保数据以分布式方式存储并在最近实现了开放数据集检索的合规性。

如今，Filecoin网络拥有[PoSt](https://spec.filecoin.io/algorithms/pos/post/)和[PoRep](https://spec.filecoin.io/algorithms/pos/porep/)等证明，可以解决数据完整性的风险，但并不能解决集中式风险。为促进分布式，Fil+鼓励用户复制数据，并与多个SP合作分发数据。有了Fil+这样的激励-合规配对机制，就能鼓励SP以分布式方式存储数据，并始终满足用户的初始要求，例如可检索性，从而确保用户在网络上保持强势地位。

Web3系统并不排斥市场运作的基本要素。定义此类市场的参与规则并确保被遵守，是确保其可持续发展和保护具有不同风险承受能力的各利益相关者利益的关键。Fil+项目已启用社区驱动流程，并且确定了应受激励的交易类型以及必须确保的合规形式，从而保证Filecoin网络的完整性。该计划通过提供不同的DC路径，如[Glif](https://verify.glif.io/)、[client Onboarding](https://github.com/filecoin-project/filecoin-plus-client-onboarding)、[Large Dataset Notary](https://github.com/filecoin-project/filecoin-plus-large-datasets) (LDN)计划和[Enterprise Fil+](https://efilplus.super.site/) (E-Fil+)，不断发展并引入新用户用例。随着新用例的引入，该计划将需要创建新路径，定义新参与规则并随之建立合规阈值和机制。

## 改进合规机制

虽然Fil+是Filecoin网络上的一个重要层，但社区提出，人工干预和检查通常很麻烦。为通过自动化和不同工具来增强系统以支持DataCap流程，我们部署了[CID检查机器人](https://github.com/data-preservation-programs/filplus-checker)和[检索机器人](https://github.com/data-preservation-programs/RetrievalBot)来帮助识别与合规有关的特定用户和SP活动。CID检查机器人提供有关用户分布和正在使用的存储提供者数据复制的信息，检索机器人提供关于执行检索测试框架的信息。根据质量仪表盘，自CID检查机器人和检索机器人推出以来，图表数据显示交易分布和可检索性呈上升趋势。随着新工具的不断开发以及项目在合规方面的自动化进程，[综合合规（AC）机器人](https://github.com/filecoin-project/notary-governance/issues/976)也将推出，它将结合以上两个机器人并添加更多条件来支持尽职调查过程。AC机器人将汇总来自多个系统不同来源的数据，保证接收DC的用户合规性。这一工具将帮助该计划向更无需许可且高效的工作流程迈进。欲知更多关于AC机器人的信息，请在此了解(https://github.com/filecoin-project/notary-governance/issues/976)。

## 综述

虽然生态系统研究和试验了强大的替代机制来解决数据存储集中化风险，但Fil+作为一种激励-合规机制对Filecoin的增长仍然至关重要。Fil+不仅仅是一个社交层，它还能提供可靠、高效的分布式存储解决方案。通过强调合规性，确保数据在需要时可用并使网络保持稳健和可信。

若您想了解Filecoin Plus治理团队的最新内容，请访问[Medium](https://medium.com/filecoin-plus)页面。此外，欢迎社区成员不断提出和讨论有关让合规跟踪更加开放和客观的各种想法，欢迎随时向我们反馈。如需了解更多实例，请阅读[此处](https://github.com/filecoin-project/notary-governance/discussions)。

联系团队或参与更多，请参考下方地址：

[# fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX)

[# fil-plus-enterprise-wg](https://filecoinproject.slack.com/archives/C03MHVAABFV)

[# fil-plus-trust-wg](https://filecoinproject.slack.com/archives/C0405HANNBT)

[# fil-network-announcements](https://filecoinproject.slack.com/archives/C01AC6999KQ)

[# fil-lobby](https://filecoinproject.slack.com/archives/CEHTVSEG6)
