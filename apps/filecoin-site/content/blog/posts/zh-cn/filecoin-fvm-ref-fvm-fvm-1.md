---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-01-19T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 在此公布Filecoin虚拟机通往Milestone 1里程碑的三个主要更新。
image:
  alt: ""
  url: /uploads/fvm-brand-and-website.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvm-brand-and-website.webp
title: Filecoin虚拟机（FVM）最新更新：ref-fvm参考实施方案介绍、新的FVM虚拟机网站以及早期创建者计划
_template: blog_detail_ch
---

自从我们在2021年11月宣布[引入Filecoin虚拟机](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/)后，就一直处于忙碌状态。今天，我们很高兴地宣布三个消息。首先，我们在本周早前[开源了](https://github.com/filecoin-project/ref-fvm) FVM虚拟机参考实施方案(ref-fvm)。其次，我们发布了全新的[FVM虚拟机网站](https://fvm.filecoin.io/) 。最后，我们启动了[FVM虚拟机早期创建者计划](https://fvm.filecoin.io/foundry)来将处于前沿的成员带到FVM Foundry计划里。请继续阅读以了解更多信息。

## **开源FVM虚拟机参考实施方案**

首先，我们开源了[ref-fvm](https://github.com/filecoin-project/ref-fvm)，这是Filecoin虚拟机的参考实施方案。

ref-fvm是由Rust语言打造的，使用了[Wasmtime](https://wasmtime.dev/) 作为WASM语言引擎（不过引擎的可插拔性也在计划中），并实施了在 [FVM架构规格](https://github.com/filecoin-project/fvm-project/blob/main/01-architecture.md)里的核心想法。这主要包括外部及内核边界(各自对应节点 <> FVM虚拟机、 FVM虚拟机 <> actor角色接口）、syscall范式、IPLD 接口、call manager和调用容器（invocation container）的概念等。

ref-fvm目前处于pre-alpha v0阶段，（在这里可以查看 [完全成熟的路线图](https://github.com/filecoin-project/ref-fvm#maturity-roadmap)）。它向前支持Filecoin actors v6和网络 version 14版本。它通过了100%的 [一致性测试模型](https://github.com/filecoin-project/fvm-test-vectors)。这涵盖了超过2000个测试模型，而在下周我们会进一步提升测试覆盖率，利用 [tvx](https://github.com/filecoin-project/lotus/tree/master/cmd/tvx) 工具在主网上直接提取测试模型。

ref-fvm v0参考实施方案旨在成为可编程FVM虚拟机的一个基础。目前它只支持内置的actors角色，而在v1版本会支持用户部署的actors角色。

内置actors角色的逻辑分叉自[Forest实施方案](https://github.com/ChainSafe/forest/)，并做了适配以在FVM虚拟机上运作。我们目前还在优化字节码（bytecode）的体积及性能。

当这些内置的actors角色被视为达到稳定状态后，Filecoin核心开发者会决定是否将其分开到一个单独的程序库里，提升其状态到"canonical actors"（范例actors角色），在所有的实施方案中作为通用的成果采用。

## **搭建强大的FVM生态**

这个揭示也标志着FVM虚拟机项目内部的大调整。

我们正从最初的 _孵化器_ 走出来，正向完全公开的方向工作。我们知道搭建有参与度的强大社区对FVM虚拟机的未来是很重要的。

通过[开源代码库repo](https://github.com/filecoin-project/ref-fvm)，以及[新网站](https://fvm.filecoin.io/)的发布，我们希望邀请各位加入这个旅程并量力贡献。

如果你是（或将成为）一名Rust开发者，希望与我们一起写代码，一种比较好的方式就是在Github上查看[带有hint/good-first-issue标记的事项](https://github.com/filecoin-project/ref-fvm/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Ahint%2Fgood-first-issue) 。

如果你对WASM虚拟机、gas、IPLD, 及其他相关话题有建议或意见，或正思考用例并期待得到指引，可以在[fvm-specs程序库](https://github.com/filecoin-project/fvm-specs/)进行讨论，在[Filecoin Slack](https://filecoin.io/slack/)的 #fvm频道也可以。

## **FVM网站发布**

为了配合这个重要的发展阶段，我们刚发布了[fvm.filecoin.io](https://fvm.filecoin.io/)，这是Filecoin虚拟机项目的正式网站。大家可以从中了解FVM提供的潜能和机会和得到启发，了解路线图，并第一时间得到所有的开发者资源。

![https://fvm.filecoin.io/](/uploads/fvm-website.webp "https://fvm.filecoin.io/")

## **FVM Foundry招募早期创建者**

我们也在发起[FVM Foundry和早期创建者计划](https://fvm.filecoin.io/foundry)。

FVM Foundry是一个长期的协作关系，它将web3的开发者与FVM虚拟机团队核心开发者带到一起分享信息，推动Filecoin网络上的寒武纪式创新大爆发，并确保FVM符合开发者们未来搭建的app、系统、平台的技术要求。

我们正寻找有兴趣、有经验的智能合约、大规模数据、数据计算、数据DAO（Data DAO）的开发者，希望他们在FVM Foundry里以早期创建者的身份成为先锋人物。

Foundry的早期创建者计划周期是2022年4月到6月。我们预期FVM早期建设者每月参加FVM团队的workshop，参与解决方案构思和设计、早期测试以及开发者经验反馈。

早期建设者会收到一次性的FIL津贴，后续的工作也可能继续获得津贴和开发资助奖励。

马上在[fvm.filecoin.io](https://fvm.filecoin.io/foundry)上申请吧。

## **下一步如何走？**

我们正积极通往[Milestone 1里程碑的路上](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/)，时间大约是2022年3月。

Milestone 1里程碑代表主网从目前内置的虚拟机到基于WASM语言的参考架构FVM虚拟机的原子级切换。它带有全新的gas模型，为实际的WASM执行开销服务。Milestone 1里程碑为用户可编程性奠定了基础，后者将在Milestone 2里程碑（2022年6月）引入。

在接下来几周有下面的一些期待：

1. 完成Lotus客户端（Filecoin的参考客户端）里的FVM虚拟机整合。
2. 在主网上部署Lotus FVM金丝雀发布节点。
3. 通过主网上提取的更多测试模型，来提升测试覆盖率。
4. 提出一个Filecoin改进计划(FIP)来正式将FVM虚拟机引入主网。
5. 提出另一个FIP来引入gas模型变更。
6. Forest、Venus和Fuhon将FVM虚拟机作为其执行相关的运行时（runtime）。
7. 部署一条测试链，用来准备Milestone 1里程碑升级。

## **致谢**

Protocol Labs的FVM团队想公开感谢ChainSafe的Forest团队、Fission团队、ARG团队、Filecoin基金会、Alex Wade、以及Venus和Fuhon团队，以对他们在这个里程碑实现过程中的支持和配合致谢，还有Protocol Labs的很多人也在这段旅程的不同阶段与我们并肩工作。这只是一个开始！
