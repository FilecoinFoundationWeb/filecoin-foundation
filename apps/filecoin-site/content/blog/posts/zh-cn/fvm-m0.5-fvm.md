---
aliases: []
author: ""
categories:
  - updates
date: "2022-03-31T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 好消息：你现在可以使用Filecoin虚拟机来同步Filecoin区块链。
image:
  alt: ""
  url: /uploads/fvmbloghead.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvmbloghead.webp
title: "FVM M0.5: 开始运行你自己的FVM节点！"
_template: blog_detail_ch
---

[Filecoin虚拟机](https://github.com/filecoin-project/fvm-specs)是基于WASM的IPLD执行环境，Filecoin区块链正对此进行整合。它旨在支持原生的Filecoin actors，这些actors所使用的的语言可编译为WASM(目前有的是 [Rust内置actors](https://github.com/filecoin-project/builtin-actors))以及为外部运行时（runtimes）[以太坊虚拟机 (EVM)](https://ethereum.org/en/developers/docs/evm/)编写的智能合约。要了解更多，可查看[Filecoin虚拟机介绍](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/) 。

最新的FVM M0.5里程碑增加了对[Fuhon](https://github.com/filecoin-project/cpp-filecoin)、[Forest](https://github.com/ChainSafe/forest)、[Lotus](https://github.com/filecoin-project/lotus)和[Venus](https://github.com/filecoin-project/venus)实现方案的支持，可以使用FVM来同步现有的Filecoin主网([网络版本v15 OhSnap](https://github.com/filecoin-project/community/discussions/74#discussioncomment-1922550))。根据[FVM路线图](https://fvm.filecoin.io/#roadmap-4)，这让项目迈过了“M0”里程碑，因此我们将其称为M0.5.

![](/uploads/fvmblog.webp)

还有，核心开发者们已经预计在下一个[代号为Skyr的网络升级 (v16)](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151)里部署即将来临的M1里程碑。这个版本会将网络升级到*单独*使用FVM和[基于Rust的内置actors](https://github.com/filecoin-project/builtin-actors)。请查看[路线图](https://github.com/filecoin-project/lotus/discussions/8347)了解更多。

## 现在怎么在主网上使用FVM？

欢迎想尝鲜的节点运营者们使用以下的实现方案使用FVM：

- **Fuhon:** 任何有兴趣的人可以使用[实验性的FVM分支](https://github.com/filecoin-project/cpp-filecoin/tree/experimental/fvm)并设置env `FUHON_USE_FVM_EXPERIMENTAL=1`来启用FVM。
- **Forest:** 即将到来，请在Filecoin的Slack频道关注#fil-forest-announcements 以了解最新信息。
- **Lotus:** 使用[Lotus 1.15.1](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1-rc4)的版本，你可以使用`LOTUS_USE_FVM_EXPERIMENTAL=1` 环境变量来启用FVM功能。参见[发布笔记](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1-rc2) 获取更多信息，并关注这个[FVM 0.5升级讨论](https://github.com/filecoin-project/lotus/discussions/8347) 链接或[Filecoin Slack](https://filecoin.io/slack)频道的#fil-lotus-announcement 来获取最新信息。
- **Venus:** 即将到来，请在Filecoin Slack关注#fil-venus-announcements以获取最新信息。

**请注意，虽然FVM的主网支持已经测试了几周，但这个功能还是实验性的。** 不建议用户在关键的生产环境中启用这个功能。

很欢迎所有的FVM测试者和早期用户给出反馈。如果你发现任何漏洞，请[在ref-fvm的程序库提交一个issue单](https://github.com/filecoin-project/ref-fvm/issues)。还可以在[社区讨论区](https://github.com/filecoin-project/lotus/discussions/8334)分享各种想法和评论。我们特别有兴趣了解使用FVM节点的区块验证时间和内存消耗情况。

## 未来规划

如前述，我们正努力在主网上落地M1里程碑，预计目标是在 [Filecoin网络v16 Skyr 升级](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151)上实现，初步打算在5月上线Filecoin主网上。目前的工作流涉及[原子性地切换到FVM](https://github.com/filecoin-project/lotus/pull/8209), [完成gas参数设计](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0032.md), [测试内建 actors](https://github.com/filecoin-project/builtin-actors/issues/22)等等。

这个更新涉及的代码变化量相当大（不过大部分用户能看到的变化会是M2里程碑里的用户可编程智能合约）。为了做好准备，很多Filecoin核心开发者正强化和审计整个FVM及其依赖库，以确保安全性和正确性。

### 参与漏洞赏金计划

除了内部和外部审计外，我们还需要你帮助，在FVM运行时（runtime）及[rust内建actors](https://github.com/filecoin-project/builtin-actors)里寻找漏洞和攻击维度！在接下来几周，我们将会公开邀请Filecoin社区来进行自己的审计，并通过安全的渠道汇报漏洞和问题，还有机会赢取[Filecoin漏洞赏金计划](https://security.filecoin.io/bug-bounty/)下的奖项。**请保持关注相关公告！**

### M2里程碑：通往用户可编程性

开发者们很渴望在Filecoin网络上部署定制的actors！为此，我们将M2里程碑分解成两个更细化的子里程碑，可以同步开展。

- **M2.1里程碑** 专注让用户部署Wasm actors，它们可以与Filecoin协议深度整合；以及专注创建能部署外部运行时的框架。
- **M2.2里程碑** 实现首个外部运行时——EVM运行时。请留意一个即将到来的提案请求（Request For Proposals，RFP），它号召精通EVM、Rust和Wasm的人来挑起这个任务。我们已经发布了[EVM <> FVM映射规格](https://github.com/filecoin-project/fvm-specs/blob/main/04-evm-mapping.md)来作为参考的起点。

## 参与其中

还有，如果你有兴趣直接参与FVM的落地工作，并确保它满足用户需求，请考虑加入团队！

感谢你对FVM项目的持续兴趣以及提供的支持！随着这项工作的推进和上线，未来几个月Filecoin社区将有很多精彩的时刻。请在[Filecoin Slack](https://filecoin.io/slack)频道加入#fvm并关注这段旅程！
