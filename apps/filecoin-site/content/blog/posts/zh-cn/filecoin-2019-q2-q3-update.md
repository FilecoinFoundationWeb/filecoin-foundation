---
aliases:
  - /zh-cn/blog/update-2019-q2-q3
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
cover_feature: false
date: ""
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  此次更新中最重要的新闻是，我们的网络即将上线。我们推迟了之前定的上线时间，但是-正如你之后将读到的 -
  我们在各个方面都取得了巨大进步！我们现在已有足够准备，可以决定以下上线时间了：
image:
  alt: Filecoin 2019 Q2 & Q3 Update
  url: /uploads/q2q3-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/q2q3-update-english-social.webp
title: Filecoin 2019 Q2 & Q3 Update
_template: blog_detail_ch
---

目录

1. [上线：12月11日测试网上线，2020年第一季度主网上线](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#1-%E4%B8%8A%E7%BA%BF-12%E6%9C%8811%E6%97%A5%E6%B5%8B%E8%AF%95%E7%BD%91%E4%B8%8A%E7%BA%BF-2020%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%B8%BB%E7%BD%91%E4%B8%8A%E7%BA%BF)
2. [TL; DR：2019年的亮点](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#2-tldr-2019%E5%B9%B4%E7%9A%84%E4%BA%AE%E7%82%B9)
3. [路线图更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#3-%E8%B7%AF%E7%BA%BF%E5%9B%BE%E6%9B%B4%E6%96%B0)
4. [开发更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#4-%E5%BC%80%E5%8F%91%E6%9B%B4%E6%96%B0)
5. [研究更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#5-%E7%A0%94%E7%A9%B6%E6%9B%B4%E6%96%B0)
6. [社区更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#6-%E7%A4%BE%E5%8C%BA%E6%9B%B4%E6%96%B0)
7. [政策方面更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#7-%E6%94%BF%E7%AD%96%E6%96%B9%E9%9D%A2%E6%9B%B4%E6%96%B0)
8. [公共演讲和媒体宣传](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#8-%E5%85%AC%E5%85%B1%E6%BC%94%E8%AE%B2%E5%92%8C%E5%AA%92%E4%BD%93%E5%AE%A3%E4%BC%A0)
9. [libp2p 对 Filecoin 的更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#9-libp2p-%E5%AF%B9-filecoin-%E7%9A%84%E6%9B%B4%E6%96%B0)
10. [IPFS 对 Filecoin 的更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#10-ipfs-%E5%AF%B9-filecoin-%E7%9A%84%E6%9B%B4%E6%96%B0)
11. [注意事项](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#11-%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

## 1. 上线: 12月11日测试网上线, 2020年第一季度主网上线

此次更新中最重要的新闻是，我们的网络即将上线。我们推迟了之前定的上线时间，但是-正如你之后将读到的 - 我们在各个方面都取得了巨大进步！我们现在已有足够准备，可以决定以下上线时间了：

- Alphanet：2019年9月25日
- 测试网：2019年12月11日
- 主网：2020年3月

注意：当然这些时间是最佳的预计日期，可能会变动。我们的社区多次地希望我们给出更快、更准确的日期更新，即使日期最终可能会变动，而不是保守地将上线日期定在未来。

## 2. TL;DR: 2019年的亮点

我们倾向于每两个季度发布一次非常详细的项目更新（请参阅我们的 [Q1 / 2 2018 更新](https://filecoin.io/zh-cn/blog/update-2018-q1-q2/)和 [Q3 / 4 2018 更新](https://filecoin.io/zh-cn/blog/update-2018-q3-q4/)作为示例）。有些社区读者喜欢深入研究细节，而另一些社区读者只是想快速总结一下项目中要注意的最重要部分。因此，我们在此更新中试用 TL; DR（too long 过长；didn’t read 未读）部分。

以下是2019年的主要亮点：

- 🚀 **新的上线日期。** 新的上线日期。我们将在今年12月11日启动测试网，然后在2020年第一季度启动主网。 可以在第三部分[路线图更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#3-%E8%B7%AF%E7%BA%BF%E5%9B%BE%E6%9B%B4%E6%96%B0)中了解有关此内容的更多信息。
- 🌐 **启动开发网。** 今年年初，我们为社区成员[启动了开发网络](https://github.com/filecoin-project/go-filecoin/wiki/Devnets)，以开始测试 Filecoin 网络和协议。在我们的网络统计信息中心上，我们已经看到连接到我们的测试网的节点在峰值为**500个，保证的存储容量为17PB**！对于一个非常早期的实验性网络而言，这是巨大的数字。这个网络每天都变得越来越稳定-如果有兴趣连接到我们的网络，请按照[本指南](https://github.com/filecoin-project/go-filecoin/wiki/Devnets)进行操作。

📖 **开源 Filecoin 代码库。** 经过几个月的封闭开发，我们于今年初[开源了 Filecoin 代码库](https://filecoin.io/blog/opening-filecoin-project-repos/)。从此，我们看到了许多来自社区的贡献，并且每天活跃的贡献者的数量不断增长。

- 🛫 **以稳定的节奏发布了多个 go-filecoin。** 启动我们的第一个开发网之后，我们开始了 go-filecoin 的更正式的[发布过程](https://github.com/filecoin-project/go-filecoin/releases)。该过程产生了4个主要版本（0.1.4、0.2.4、0.3.2、0.4.6），每个版本都有主要功能，重构和 UX 改进。有关每个版本的更多详细信息，请参见 [CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md)。我们希望在以后的版本的测试阶段吸引更多的社区参与。如果想为我们提供帮助，请按照[此处](https://github.com/filecoin-project/go-filecoin/wiki/Devnets#staging-for-infra-and-pre-release-testing)操作！[_阅读更多相关内容_](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/##41-%E5%BC%80%E5%8F%91%E6%9B%B4%E6%96%B0--go-filecoin)
- 💯 **预期共识的模拟和验证。** Filecoin 使用一种新颖的共识协议，称为“预期共识”。我们已经用几个月严格的安全分析和仿真建模来验证和改进我们的构造。[阅读预期共识规范中的最新构造](https://github.com/filecoin-project/consensus/tree/master/specs)。[_阅读更多相关内容_](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#5-%E7%A0%94%E7%A9%B6%E6%9B%B4%E6%96%B0)
- 👩‍💻 **PoRep优化。** 在过去的两个季度中，我们对复制证明的构造和实现进行了许多优化，包括[批量处理 SNARK 验证技术（ZEXE）](https://github.com/filecoin-project/rust-fil-proofs/pull/835)，[在 GPU 上进行 SNARK 验证](https://github.com/filecoin-project/bellman/pull/4)和 [Merkle 树摊销](https://github.com/filecoin-project/rust-fil-proofs/pull/864)。如果想对 PoRep 做出自己的贡献，请[玩复制游戏](https://github.com/filecoin-project/replication-game)或在 [**rust-fil-proofs**](https://github.com/filecoin-project/rust-fil-proofs) 作出贡献！[_阅读更多相关内容_](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#42-%E5%BC%80%E5%8F%91%E6%9B%B4%E6%96%B0--rust-fil-proofs)
- ❤️ **Filecoin 开发津贴。** 我们最近启动了 [Filecoin 津贴计划](https://filecoin.io/grants)！我们有对于项目开发的建议书请求 (RFPs), 希望社区成员参与其中，并为所有社区提出的想法提供津贴。我们很高兴能够为 Filecoin 生态系统中的大量杰出的社区工作提供资金。欢迎申请！[_分阅读更多相关内容…_](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#6-%E7%A4%BE%E5%8C%BA%E6%9B%B4%E6%96%B0)
- 🌎 **加强 Filecoin 社区。** 今年早些时候，我们举行了一个[矿业社区电话会议](https://github.com/filecoin-project/community/blob/master/community-calls/mining-calls/mining-calls.md)，有 600 多名与会者参加了会议，与我们在中国的一些社区进行了会谈，启动了我们的官方微信帐户，在1000多人参加的去中心化存储峰会上发表了讲话，并继续通过 [Chat](https://github.com/filecoin-project/community/#chat) 和[论坛](https://discuss.filecoin.io/)和我们的社区进行热烈的对话。我们最近还启动了 [Filecoin Shipyard](https://github.com/filecoin-shipyard)，这是一个提供给我们生态系统中项目的空间 – 如果希望将你的项目放在Shipyard中，请通过Chat/论坛与我们联系！[_分阅读更多相关内容_](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#6-%E7%A4%BE%E5%8C%BA%E6%9B%B4%E6%96%B0)
- 🦋 **开发中更多的算法实现。** 团队现在正在实现并且寻找更多Filecoin协议的计划。如果你有兴趣构建 Filecoin 实现，请在[此处](https://github.com/filecoin-project/devgrants/issues/43)查看我们的 Dev Grants repo。

以下是我们准备的更详细的更新，如果想了解有关上述任何内容的更多信息，请继续阅读。

## 3. 路线图更新

在上一次[重大更新中](https://filecoin.io/blog/update-2018-q3-q4/#2-filecoin-project-roadmap-update)，我们宣布了对[路线图](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/)的一些修订。目前我们对路线图进行了又一次修订，以包括最近取得的进展和最新的上线日期。

到目前为止，在2019年，我们取得了以下进展 🎉🎉🎉：

- 在 2019 年第一季度**开放了** go-filecoin 代码库
- 在 2019 年第一季度**发布了第一个 Filecoin 开放网**
- 截至2019年9月，我们**在开发中有多种实现**

从年初起，我们一直专注于：

- 完善我们的协议设计
- 完成我们的密码学证明构造
- 启动长期运行的测试网络
- 发展我们的社区

对于团队来说，这是重要的一年。（人们说构建一个区块链就像制造软件火箭一样是有原因的！）经过几个月的研究和工程开发，我们正在着手于满足我们对于安全性，可扩展性和性能要求的协议的构建，并且正在由我们的开发团队积极实施。

随着我们逐步接近发布，我们完善了我们的里程碑并宣布了几个激动人心的日期:

- 将于**2019年9月25日**启动 alphanet（长期运行的 Filecoin 网络）
- 将于**2019年12月11日**启动测试网
- 主网启动日期尚未宣布，但是我们预计将在测试网启动之后的1-2个季度，即2020年第一季度发布确切的启动日期

我们已对里程碑进行了如下调整： | --- | --- | --- |
| 里程碑 | 旧的预期完成时间 | 新的预期完成时间 |
| 启动长期运行的 alphanet: | 无 | 2019年9月25日 |
| 启动第一个 Filecoin 测试网: | 2019 第二季度 | 2019年12月11日 |
| 使用大量矿机进行测试: | 2019 第二季度 | 2019 第四季度 |
| 安全审查和审核: | 2019 第二和三季度 | 2019 第四季度 |
| go-filecoin v1.0.0功能冻结: | 2019 第二和三季度 | 2020 第一季度 |
| 启动 Filecoin 主网: | 2019 第三和四季度 | 2020 第一季度 | 2019年10月，我们将在我们的博客上发布开发路线图的链接。本文档将包含测试网和主网启动相关的剩余的工作量，以便社区可以跟进我们在实现这些目标方面的进展。如上所述，我们还根据这些新的里程碑的预计更新了[路线图文档](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit)。

请记住我们所有的预计和时间表都是相对乐观的，并且可能会发生变化。我们旨在在博客上发布有关我们进度的更新。到目前为止，掌握项目活动的最佳方法是直接关注我们的 GitHub 代码库。

## 4. 开发更新

在 2019 年到目前为止，我们已经发布了 4 个主要的 [**go-filecoin 版本**](https://github.com/filecoin-project/go-filecoin/releases)和 6 个主要的 [**rust-fil-proofs 版本**](https://github.com/filecoin-project/rust-fil-proofs/releases)。我们还启动并正在维护社区的开发网，并即将推出 alphanet – 这是我们完全公开测试网之前的最后一个中期里程碑！你可以在 [**go-filecoin** CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md) 关注版本发布的说明和更详尽的开发更新。我们的发展[路线图](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.ao6yxxg3c0tn)也已更新，包括测试网和主网上线的开发工作，以及达成这些里程碑所经历的过程。

### 4.1 开发更新 / [go-filecoin](https://github.com/filecoin-project/go-filecoin)

今年，我们一直专注于取得**重大的开发进展**并**吸引 Filecoin 社区**。

- **🏇 存储市场协议的实现。** 我们要求矿工定期提交PoSt证明，以确保他们一直在正确存储客户的数据。如果发现他们有过错 - 即如果他们没有及时提交所需的信息 - 他们将受到处罚。故障处理和罚款对于确保Filecoin系统的可验证存储至关重要。我们已对延迟或不正确的PoSt提交（存储市场协议的重要部分）实施了故障处理和处罚措施。
- **🤝 交易争议解决。** 我们使用支付渠道来让（存储和检索）客户向（存储和检索）矿工进行支付。如果存储矿工在某项存储交易中发生故障，则客户可以提出“索赔”，称该交易已被破坏。如果协议发现交易确实中断，则支付渠道将被取消，矿工的一部分资金将被削减。这种纠纷解决机制使用片段包含证明来显示特定数据是否存储在矿机上。我们实行了交易纠纷解决方案，并能够使用片段包含证明（PIPs）来取消付款渠道（有关PIPs的更多信息，请参见文章 4.2 部分 [**rust-fil-proofs** 更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#42-%E5%BC%80%E5%8F%91%E6%9B%B4%E6%96%B0--rust-fil-proofs)）。
- **🔗 _时空证明_的部署。** 我们已将_时空证明_（PoSt）证明过程部署到 **go-filecoin** 代码库中。矿工现在定期计算获得可继续存储的证明，并将这些证明发布到链上。一旦完成PoSt构建，部署最终的PoSt将非常简单。
- **🌳 网络升级。** 为了给将长期运行的 alphanet 和测试网做准备，我们一直在为顺利的网络升级奠定基础。一些实现该目标的工作包括实现能够命名网络，让节点检查网络名称以及显示协议版本的功能。
- **🍄 数据存储迁移。** 除了保密的客户端数据外，Filecoin 节点还在磁盘上存储其他数据，例如配置，区块，交易状态和加密密钥。随着开发的进行，我们需要一种方法来安全地更改此数据的类型和架构。我们已经设计并实现了文件系统存储库迁移，以便节点在生产环境中运行时可以无缝更新。
- **⌛ 更快的区块链同步。** 更快的区块链同步是 Filecoin 的重要软件 UX 功能。如果没有优化的区块链同步软件，则可能需要几天的时间才能检索仅1个月历史的区块链。我们的团队朝着这个目标取得了重大进展，通过 [Graphsync](https://github.com/ipfs/go-graphsync) 的IPLD DAG遍历协议实现了更快的区块链同步。
- **🖇️ 区块标题 vs 区块。** 现在，我们有了能够指向消息和消息回执的区块标题，而不是将所有消息和回执直接存储在区块中。这极大地减小了区块的大小，从而增加了区块传播速度。
- **✉️ 更可靠的消息池。** 我们实现了发送消息队列和消息到期之类的功能，以使消息发送和随机数生成更加可靠。
- **📬 改进了消息池。** 我们的邮件池现已实施验证规则，邮件限制，并执行了随机数跟踪，以确保不重播邮件。
- **💠 体系结构和模块化。** 我们在内部架构，模块化和可测试性方面进行了重大改进，还将会有更多改进！我们的目标是使代码库尽可能地模块化，以便于升级组件和让社区成员做出自己贡献。
- **📈 Filecoin自动化和系统工具包（FAST）。** FAST 是我们为自动集成和系统测试而构建的工具。在发布测试期间，这曾经是一个巨大的痛点，并且自从引入 FAST 以来已大大改善。我们使用 FAST 开发了 localnet，localnet 是一种新工具，可快速轻松地设置用于测试，调试，开发等等的局域网。
- **🏡 开源！** 我们于 2019 年 2 月开放了 [**go-filecoin** 代码库](https://github.com/filecoin-project/go-filecoin)。此后，我们开始将我们的[项目管理工具](https://app.zenhub.com/workspaces/filecoin-5ab0036a12f8e82ae4ed60f0/board?repos=113219518&showPipelineDescriptions=false)和[开发设计文档](https://github.com/filecoin-project/designdocs)默认为公开。在接下来的几个月中，我们将继续保持开源，以提供更好的支持并扩大我们的开源社区。

### 4.2 开发更新 / [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs)

- **👪 多种扇区大小。** 扇区是一个矿工从存储交易数据中收集并密封的连续字节数组，协议在其上执行时空证明。换句话说，扇区是使矿工开始赚取Filecoin的数据单位。在整个网络中，扇区以前只能是一种大小。现在，rust-fil-proofs支持许多不同的扇区的大小，从而使矿工在配置存储操作方面更具灵活性。
- **⚽ 片段包含证明。** 片段包含证明（PIPs）证明存储交易中指定的一条数据存储在特定扇区中（其承诺在链上）。 第一个 PIPs 已经在 **rust-fil-proofs** 实现，并已部署到 **go-filecoin** 中。
- **🧠 减少内存需求。** 矿工必须密封一个扇区才能来开始证明他们正确存储了数据。密封过程必须是计算密集型的，以便抵御一类会降低协议安全性的攻击。为了满足这些安全性要求，密封以前消耗了非常多的内存，即扇区大小的几倍！最近的优化使用于密封的内存需求降低了8倍，因此所需的内存（以GiB为单位）与矿机的扇区大小相同。重点：这项优化将显着降低所有矿工的硬件成本！
- **🔭 证明元建模。** 随着[系统](https://github.com/filecoin-project/specs/)复杂性和规模的显着增长，人们越来越难以得出不同的协议参数，它们之间的相互关系以及它们最终如何影响系统的安全性，可扩展性和性能要求。我们创建了一种元建模语言和称为 [Orient](https://github.com/filecoin-project/orient/) 的后端，以对我们不断发展的系统的所有参数和约束进行建模。我们的目标是使用此系统来帮助我们使用计算机思考出更好的方案，因为我们选择的参数可以针对系统范围的需求进行优化。
- **🖥️ 接近最终的硬件要求。** 我们的证明优化仍在进行中，但即将完成。诸如减少内存需求之类的优化对于矿工来说是个好消息，非常值得期待！我们正在努力准备最终对于矿工的硬件要求，并将尽快将其发布在此博客上。在我们共享这些规格之前，请不要购买任何采矿硬件。

## 5. 研究更新

- **🎪 预期共识建设的改善。** 在过去的几个月中，我们对预期共识（Expected Consensus, EC）进行了彻底的安全性分析，从而导致了结构的重大改进和独立[规范](https://github.com/filecoin-project/consensus/tree/master/specs)。在测试网期间，我们将调整与网络相关的不同EC参数。此外：
- 我们创建了[仿真模拟](https://github.com/filecoin-project/consensus/tree/master/code/other-sims)，以确认预期共识EC在各种针对区块链质量和收敛性方面的模型中的对抗能力。
- 在进行最终性分析时，我们的计算表明，要达到 Filecoin 的最终性水平，类似于推荐的比特币的 6 区块（1 小时）确认时间，用户只需等待 2 分钟，这是一个巨大的进步。
- 我们指定了分叉选择规则[加权功能](https://github.com/filecoin-project/consensus/issues/71)，最终参数在测试网中确定。
- EC 相对于传统的权益证明共识协议，已经提高了安全性，特别是通过限制无权益攻击的对抗能力以及增强了对远程攻击的抵抗力。相关文章即将上线。
- **💻 _复制证明_ 优化.** 我们一直在为_复制证明（PoRep）_ 构造探索四类优化，并且在所有这些方面都取得了长足的进步：（1）使用GPU改善SNARK的证明时间和效率，（2）通过批量验证（ZEXE）减少SNARK的证明大小，（3）通过许多工程优化来减少复制时间和内存消耗，以及（4）通过构造级别的优化来减少证明的大小（例如，混合和摊销的Merkle树）。我们通过这些优化已经接近完成，并计划在未来1-2个月内完成PoRep的最终构建。
- **🔮 _时空证明_ 构造。** 我们已经完善了我们选择的*时空证明（PoSt）*结构，称为有理（rational） PoSt。我们目前正在执行安全性分析，以确保我们的有理 PoSt 结构符合系统的安全性要求。
- **🌌 论文和演讲。** 请参阅文章下面的[公开演讲和媒体](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#8-%E5%85%AC%E5%85%B1%E6%BC%94%E8%AE%B2%E5%92%8C%E5%AA%92%E4%BD%93%E5%AE%A3%E4%BC%A0)。

## 6. 社区更新

对于Filecoin社区来说，2019年是非常重要的一年！以下是我们按时间顺序排列的一些主要社区活动。请注意，此列表并不包括我们的所有演讲和演示文稿（而是在文章下面[公开演讲和媒体](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/#8-%E5%85%AC%E5%85%B1%E6%BC%94%E8%AE%B2%E5%92%8C%E5%AA%92%E4%BD%93%E5%AE%A3%E4%BC%A0)部分列出）。

- **🌐 启动开发网。** 今年年初，我们为社区成员[启动了开发网络](https://github.com/filecoin-project/go-filecoin/wiki/Devnets)，以开始测试 Filecoin 网络和协议。在我们的网络统计信息中心上我们经看到连接到我们的测试网的节点在峰值为500个，保证的存储容量为17PB！对于一个非常早期的实验性网络而言，这是巨大的数字。这个网络每天都变得越来越稳定-如果有兴趣连接到我们的网络，请按照[本指南](https://github.com/filecoin-project/go-filecoin/wiki/Devnets)进行操作
- **📖 开源 Filecoin 代码库。** 经过几个月的封闭开发，我们于今年初开源了 [Filecoin 代码库](https://filecoin.io/blog/opening-filecoin-project-repos/)。从此，我们看到了许多来自社区的贡献，并且每天活跃的贡献者的数量不断增长。
- **💬 创建社区论坛和聊天。** 我们的社区成员正在我们的[讨论论坛](https://discuss.filecoin.io/)和[社区聊天](https://github.com/filecoin-project/community#chat)中就各种 Filecoin 主题进行对话。这些不同的沟通渠道有大约 900 个社区成员。非常感谢许多回答彼此的复杂的问题的社区成员！
- **☎️ ️主持了我们的第一个挖矿社区电话会议。** 在2019年5月，我们举办了有史以来的首次挖矿[社区电话会议](https://www.youtube.com/watch?v=bpKKgkPmA_w)。我们收到了来自 55 个国家/地区的 1000 多个注册，与会者有大约 600 名。在电话会议中，我们提供了 Filecoin 项目的总体概述，包括 Filecoin 的价值主张，早期使用案例，路线图等。我们还提供了简短的研究更新和有关如何设置开始挖矿并参与其中的更新。我们还在电话会议上主持了实时问答，与会者提出了 180 多个问题。
- **🗞️ 推出Filecoin新闻。** 为了响应社区对更频繁更新的要求，我们发布了一个每月简报，称为 Filecoin 新闻。到目前为止，我们已经发布了3期简报。我们听取了关于更多更新的要求，并正在努力提供更多更新。点击[订阅 Filecoin 新闻](https://filecoin.io/#community)！
- **✈️ ️Filecoin 团队中国之旅。** 2019年7月，Filecoin团队成员访问了中国以参加社区活动，并在深圳和上海与社区成员会面。我们很荣幸能够有机会拜访中国的许多社区成员，了解他们的需求，获得有关开发网的反馈，等等。 1200 多名社区成员参加了一系列会议和聚会，约 30 名社区志愿者就他们在 Filecoin 和 IPFS 生态系统中做的项目进行了介绍。目前，我们还没有计划进行任何针对社区的访问，但是如果情况有所变化，我们将在[社区 repo](https://github.com/filecoin-project/community) 中发布！
- **🚢 Filecoin Shipyard。** [Filecoin Shipyard](https://github.com/filecoin-shipyard) GitHub 组织包含有助于发展 Filecoin 生态系统的项目。如果有任何对 Shipyard 应有哪些特色的想法，直接在我们的论坛上发帖，主持人将为你进行设置！
- **❤️ Filecoin开发津贴。** 我们最近启动了 [Filecoin 开发津贴计划](https://filecoin.io/grants/)！每个季度，我们将向提交有助于开发Filecoin生态系统的工作提案的团体/个人提供津贴。我们已经确定了项目提案的范围和开放津贴的类别。我们的下一个津贴截止日期是9月30日！[请立即申请](https://github.com/filecoin-project/devgrants#-how-to-apply)！
- **🤝 合作:** 我们非常高兴能够支持一些正在进行的合作。
- **和以太坊基金会的VDF研究。** 正如我们在[此博客文章](https://filecoin.io/blog/collaboration-on-vdfs/)中宣布的那样，我们正在与以太坊基金会合作，共同研究VDF的硬件加速研究。尽管我们目前在Filecoin对安全性要求高的应用程序中均未使用VDF，但我们将来可能会使用。为了我们和整个行业，我们希望确保VDF易于理解和安全。
- **Coinlist SNARK 挑战赛。** 正如我们在[这里](https://filecoin.io/blog/announcing-the-snark-challenge/)宣布的那样，我们很荣幸赞助最近结束的Coinlist SNARK挑战赛。挑战赛的总冠军使Groth16 SNARK证明者的速度提高了3.6倍，并已将其解决方案开源（[在此](https://github.com/CodaProtocol/gpu-groth16-prover-3x)处可见）。
- **斯坦福区块链中心。** 我们很荣幸能成为[斯坦福区块链中心](https://cbr.stanford.edu/sbc19/)的持续合作伙伴，包括作为今年初举行的斯坦福区块链会议的赞助商。
- 我们已迫不及待能够通过Filecoin Research，Filecoin开发津贴计划和Filecoin Shipyard开始更多的合作！

## 7. 政策方面更新

- **在去中心化网络空间中支持优秀思考者和倡导者。** 我们继续与区块链协会（Blockchain Association）和通证中心（Coin Center）合作，他们两个都在教育政策制定者和在美国推广更好的加密政策中起领导作用。 我们对 Coin Center 向政策制定者提供有关[开放加密网络的主要区别特征](https://coincenter.org/entry/the-differences-between-bitcoin-and-libra-should-matter-to-policymakers)的教育，以及区块链协会（Blockchain Association）对受行业影响的法律案件的深入分析，以及他们对监管机构关于[开源软件的好处](https://medium.com/@BlockchainAssoc/open-blockchain-networks-are-incredibly-transparent-and-its-good-public-policy-to-support-them-be1288a74ecd)的讨论感到非常兴奋。
- **帮助其他人了解 Filecoin 的潜力。**. 我们正在与更广泛的行业团体合作，以将去中心化网络概念和文化带给更广泛的受众。 最近，我们已成为[网络基础设施联盟](https://www.i2coalition.com/)和[消费者技术协会](https://www.cta.tech/)的创始成员。

## 8. 公共演讲和媒体宣传

- **讲座:** _视频/帖子已链接（如果有）_
- 2019-02-03. [VDFs and Filecoin](https://www.youtube.com/watch?v=GZZ2G9bPXsM&list=PLaM7G4Llrb7y075mVXGmSABDP9Nb_PsBq) (Jeromy Johnson)
- 2019-02-09. [Consensus Day 1 Talks](https://www.youtube.com/playlist?list=PLhuBigpl7lqtG6LgQ0FiiR4Pbrph9nocn) (Juan Benet, Henri Stern, Brian Vohaska, Evan Miyazono)
- 2019-02-12. Filecoin: Open Problems Building Storage-based Consensus Systems (Henri Stern)
- 2019-07-11. Verifiable Resource Commitments and Hybrid Models for Consensus (Henri Stern)
- 2019-07-19. [zkSNARKs and the beauty of math](https://www.zeroknowledge.fm/86) (Ariel Gabizon)
- 2019-08-21. Building Web3 (Juan Benet)
- **研究论文:** 在过去的几个月中，我们团队的成员发表并展示了以下论文：
- Gabizon, A. (2019). AuroraLight: Improved prover efficiency and SRS size in a Sonic-like system. Retrieved from [https://eprint.iacr.org/2019/601.pdf](https://eprint.iacr.org/2019/601.pdf "https://eprint.iacr.org/2019/601.pdf").
- Gabizon, Ariel, Zachary J Williamson, and Oana Ciobotaru. (2019). “PLONK: Permutations over Lagrange-Bases for Oecumenical Noninteractive Arguments of Knowledge.” Retrieved from [https://eprint.iacr.org/2019/953.pdf](https://eprint.iacr.org/2019/953.pdf "https://eprint.iacr.org/2019/953.pdf").
- Goldfeder, S., & Nizzardo, L. (2019). Composing hash functions for mining. IEEE Security and Privacy on the Blockchain (IEEE S&B). Stockholm, Sweden.
- Olivier, B., Kolad, B., Gailly, N., Liochon, N. (2019). Handel: Practical Multi-Signature Aggregation for Large Byzantine Committees. Retrieved from [https://arxiv.org/abs/1906.05132](https://arxiv.org/abs/1906.05132 "https://arxiv.org/abs/1906.05132").
- Ransil, Alan, and Chhi’mèd Künzang. 2019. “A Dual-Process Approach for Automated Knowledge Creation.” In Metascience 2019, \[poster\]. Stanford, CA, USA.

## 9. libp2p 对 Filecoin 的更新

Filecoin 建立在 [libp2p](https://libp2p.io/) 的基础之上，并且在很大程度上依赖于 libp2p 的组件，该项目也是由 Protocol Labs 领导的。 libp2p 项目在 2019 年取得了令人难以置信的成就，技术稳定增长，采用率不断提高，社区不断壮大。这是 libp2p 的压缩的更新，专门针对 Filecoin 进行了调整。

- **什么是 libp2p？** 模块化的点对点网络库。查看[此网站](https://libp2p.io/)或[此视频](https://www.youtube.com/watch?v=CRe_oDtfRLw&index=2&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s)或[此视频](https://www.youtube.com/watch?v=xqVmEzsin3Y)。
- **Libp2p路线图和愿景。** Libp2p 制定了他们的 2019 年[路线图](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit?ts=5bff9514#)，将优先级放在巩固和继续向前发展堆栈。
- **🤝 以太坊采用 libp2p。** libp2p 方面最重要的新闻可能是 libp2p 正式被用作[以太坊 2.0 网络规范](https://github.com/ethereum/eth2.0-specs/pull/1328)的网络层。以太坊 2.0 是下一代的以太坊。满足如此大规模区块链的要求将使 libp2p 更稳定，更具可扩展性，并促成新功能的开发，从而使 Filecoin 受益。
- **🔗 大量新的可互操作的libp2p实现。** 去年，我们看到了 libp2p 的几种新的可互操作的实现，它们以多种语言出现：\[C++\]()、 \[Nim\]()、 \[Kotlin (JVM)\]()、 和 [Python](https://github.com/libp2p/py-libp2p)。这是我们在 [Go](https://github.com/libp2p/go-libp2p) 和 [JS](https://github.com/libp2p/js-libp2p) 中由 Protocol Labs 维护的实现的补充。
- **📜 大大改善的规格。** 在过去的几个月中，我们付出了巨大的努力，以改进和完善我们的 [libp2p 协议规范](https://github.com/libp2p/specs)。我们介绍了规范在不同周期不同阶段的分类，并提供了文档化的审查和改进流程。现在，我们在新规范中涵盖了现有协议的70％左右，并计划在下一季度内达到 100％！
- **❤️ 津贴和赏金计划。** libp2p 项目已启动了[开发津贴计划](https://github.com/libp2p/devgrants)。该计划的最初启动已经促成社区实现了几个重要功能，包括 [Noice handshakes in Go](https://github.com/libp2p/devgrants/blob/master/004-noise-handshake-implementations.md) 和 [Lua Wireshark dissectors](https://github.com/ethberlinzwei/Bounties/issues/20)。参与赏金计划是参与 libp2p 项目的非常好的方法。[请在 GitHub 上查看相关内容](https://github.com/libp2p/devgrants)！
- **⛓️ 自动中继。** 在2019年，我们添加了自动中继（AutoRelay），该功能可确保任何用户都可以轻松启动Filecoin节点，而无需打开路由器上的端口或进行任何技术上复杂的改变。中继节点将处理流量的中继。从中继连接到直接连接的自动升级也即将推出。
- **📣 会议和演讲。** libp2p 核心团队的成员在今年的各种会议上进行了演讲，包括 [EthCC 2](https://www.youtube.com/watch?v=yPOROKQRFPQ)，Web3 2019，EthBerlin Zwei 等。

## 10. IPFS 对 Filecoin 的更新

Filecoin 建立在IPFS的基础之上，并且在很大程度上依赖于 [IPFS](https://ipfs.tech/) 的组成部分，该项目也是由Protocol Labs领导的。 IPFS的许多用户希望也成为Filecoin的用户，因此IPFS的功能和用例会极大地影响Filecoin。这是IPFS专门针对Filecoin进行调整的压缩的更新。

- **什么是 IPFS？** 内容寻址的超媒体分发协议。[参看这个网站](https://ipfs.tech/)。
- **IPFS 路线图和 2019 年重点。** [该博客文章中](https://blog.ipfs.tech/78-ipfs-2019-roadmap/)介绍了 IPFS 项目任务，愿景和 2019 年路线图，以将我们这一年的工作重点放在对 IPFS 网络的有高度影响的改进上。
- **举行了第一届IPFS训练营。** 来自 22 个国家/地区的 160 名社区成员于 6 月在巴塞罗那举行了有史以来的首次 IPFS 训练营。内容包括对 IPFS 堆栈重要组成部分的[深入探讨](https://blog.ipfs.tech/2019-08-12-great-calamity-circumvention-assembly-at-ipfs-camp/)和发布会，IPFS 社区中项目的[演讲](https://blog.ipfs.tech/2019-07-22-ipfs-camp-content-first-batch/)，以及向参与者传授 IPFS 工作原理的[讲习班和课程](https://blog.ipfs.tech/2019-09-18-ipfs-camp-course-videos/)。查看[摘要](https://blog.ipfs.tech/2019-07-08-ipfs-camp-recap/)，了解更多信息或去 [YouTube 上观看记录](https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew/featured)！
- **创建了 ProtoSchool。** [ProtoSchool](https://blog.ipfs.tech/63-ipfs-weekly-25/) 是一个教育计划，通过在线教程和本地分会活动向网络上的用户教授去中心化的网络协议和工具。到目前为止，全球有20多个 ProtoSchool 分会以及一个越来越多的研讨会和工具库。
- **🛳 生态系统中大量版本上线。**
- 查看链接以获取新功能摘要和完整的变更日志!
- **go-ipfs** 有 [4 个版本上线](https://github.com/ipfs/go-ipfs/releases) 包括 [v0.4.19](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.19)、 [v0.4.20](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.20)、 [v0.4.21](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.21)、 和 [v0.4.22](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.22).
- Go-ipfs 还通过其定期的六周的间隔和广泛的测试来[改进其发布过程](https://blog.ipfs.tech/2019-08-14-ipfs-release-process/) 以确保我们根据需要提供更高保真度的功能和更快的补丁程序。
- **js-ipfs** 有 [13 个版本](https://github.com/ipfs/js-ipfs/releases), 包括: [v0.35.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.35.0)、 [v0.36.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.36.0)、 [v0.37.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.37.0)。
- **ipfs-cluster** 有 [4个版本](https://github.com/ipfs/ipfs-cluster/releases/), 包括: [v0.9.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.9.0)、 [v0.10.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.10.0)、 [v0.11.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.11.0)。
- **ipfs-companion** 有 [28 个版本](https://github.com/ipfs-shipyard/ipfs-companion/releases), 包括: [v2.8.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.0)、 [v2.8.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1)、 [v2.8.2](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.2)、 [v2.8.3](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.3)、 和 [v2.8.4](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.4)。
- **ipfs-desktop** 有 [7 个版本](https://github.com/ipfs-shipyard/ipfs-desktop/releases), 包括: [v0.7.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.7.0)、 [v0.8.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.8.0)、 [v0.9.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0)。
- **✨ 很棒的功能亮点。**
- **go-ipfs** 可以进行文件流传输以有效地处理大文件；对bitswap，pubsub，datastore和DHT的性能/可靠性方面的巨大改进；更好的连接管理和内存分配； TLS1.3和OpenSSL支持；和默认情况下以base32编码的v1 CID。还有对CoreAPI的相当重要的重构。
- **js-ipfs** 大大加快了DAG节点和向IPFS添加了内容的速度（1.5倍！）；委托对等和内容路由； HAMT对MFS的支持； mDNS发现更新；更快的流多路复用； Pubsub消息签名；捆束大小减少50％； DAG HTTP API端点，默认情况下递归DNS链接查找； v1 CID的base32编码。再加上全新的构造函数！
- 程序包管理工作组发布了许多实验和演示，以调查使用IPFS进行程序包管理的机会和痛点，包括：npm-on-ipfs，apt-on-ipfs和ipfs-npm-republish-以及一些[社区原型和项目](https://github.com/ipfs/package-managers/tree/master/package-managers)。
- Ipfs-cluster 的 CRDT 共识层取代了 RAFT 实现
- [Go-graphsync](https://github.com/ipfs/go-graphsync) 是一种新的内容同步协议，可以更快地访问大型目录（如深度嵌套的区块链）中的文件
- 全新改进的 [IPFS WebUI](https://github.com/ipfs-shipyard/ipfs-webui#ipfs-web-ui) 允许您连接到特定的另一方，查看针脚，移除针脚，添加新针脚，导航到任何 /ipfs/ QmHash 或 /ipns/domain.com 路径，并以前所未有的方式探索 IPFS 世界。
- 查看[更多](https://ipfs.tech/blog/)!
- **🛠 几个很棒的新工具。**
- [IPFS-deploy](https://github.com/ipfs-shipyard/ipfs-deploy) - 轻松将静态网站部署到 IPFS
- [IPFS-cohost](https://github.com/olizilla/ipfs-cohost#ipfs-cohost-) - 用于共同托管发布到 IPFS 的网站的工具
- [Peerpad.net](http://peerpad.net/) - 基于 IPFS 和 peer-base 的协作编辑器！
- **🌟 最近的IPFS用户亮点**
- [Microsoft ION](https://techcommunity.microsoft.com/t5/Azure-Active-Directory-Identity/Toward-scalable-decentralized-identifier-systems/ba-p/560168) - 在比特币和 IPFS 上运行的基于 Sidetree 的 DID 网络
- [Subdomain-based Cloudflare Gateway](https://blog.cloudflare.com/continuing-to-improve-our-ipfs-gateway/) - 为 dapps 提供了一个安全的场所，以保持用户数据的不变性
- [Radicle](https://radicle.xyz/) - 用于代码协作的点对点堆栈
- [IPSE](https://ipse.io/) - IPFS 网络的搜索引擎
- [Matters.news](https://matters.news/) - 分布式新闻平台（中文）
- [Tupelo](https://medium.com/@tobowers/under-the-hood-tupelo-uses-ipld-libp2p-and-it-also-makes-use-of-bitswap-2d8007ba664c) - 基于 IPFS 和 IPLD 构建的 DLT
- [Peergos](https://peergos.org/) - 私有的端到端加密文件存储平台
- **🤝 社区讲座，文章，教程。**
- [如何使用 IPFS + ENS 托管 Dapp 并通过 EthDNS 访问它](https://medium.com/the-ethereum-name-service/how-to-host-your-dapp-with-ipfs-ens-and-access-it-via-ethdns-c96046059d87) - Ethereum Name Service
- [持续改进我们的 IPFS 网关](https://blog.cloudflare.com/continuing-to-improve-our-ipfs-gateway/) - Cloudflare
- [IPFS 对等节点如何在分布式 Web 上彼此识别](https://medium.com/@carsonfarmer/how-ipfs-peer-nodes-identify-each-other-on-the-distributed-web-8b5b6476aa5e) - Textile
- [我们为 IPFS 集群制作了一个面板，希望大家试用](https://medium.com/towardsblockchain/we-made-a-dashboard-for-ipfs-clusters-and-now-we-want-you-to-check-it-out-a87234629908) - Towards Blockchain
- [使网络能够脱机工作](https://www.youtube.com/watch?list=PLuhRWgmPaHtRdiy0HKNy4UZ4dKVUVL_KG&time_continue=7&v=VllPpxVNH5k) - by Molly Mackinlay
- [Azure 中的 IPFS](https://learn.microsoft.com/en-us/answers/questions/381556/integrate-azure-blockchain-workbench-with-ipfs) - Block Talk
- [IPFS 手动教程](https://www.youtube.com/watch?v=KIEq2FyMczs) - Polycode
- Merkle 树如何赋能去中心化网站！ - by Tara Vancil

## 11. 注意事项

- 这不是测试网或主网启动的公告。尽管我们在提高开发网的可靠性方面已取得了长足的进步，但我们仍无法保证性能，稳定性或安全性。
- 没有任何一种经济模型是上线的，涉及的所有代币仅用于测试。代币尚无法申领，出售或购买。矿工无法获得实际的区块奖励。
- 当前声称能够交易 Filecoin 或 Filecoin 期货的交易所要么是欺诈性的或是非常混乱的。不得以任何形式买卖 Filecoin。
- 没有人应该根据开发网中的任何规范对采矿硬件进行投资，因为这些规范可能会发生变化。
- 请根据与上述相反的主张，提防任何地方的任何潜在骗局。不幸的是，我们听说过亚洲一些国家存在一些潜在的欺诈活动。请查看[反欺诈声明](https://filecoin.io/zh-cn/blog/china-antifraud/)，该声明强烈建议您避免在亚洲此刻声称自己与Filecoin项目（或IPFS或Protocol Labs）建立商业或正式关系。
- 请查看 [Filecoin 常见问题解答](https://docs.filecoin.io/basics/project-and-community/filecoin-faq/).

## 非常感谢

感谢大家现在和将来的所有支持！在此先感谢大家的推荐，想法和建议。大家的帮助将加速我们的进步。

Filecoin 团队

协议实验室 Protocol Labs
