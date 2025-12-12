---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-04-07T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 在5月底前，FVM M1里程碑 & 漏洞赏金计划持续开放
image:
  alt: ""
  url: /uploads/fvm-bug-bounty.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvm-bug-bounty.webp
title: Filecoin虚拟机(FVM) M1里程碑 & 漏洞赏金计划和审计介绍
_template: blog_detail_ch
---

在[上周的FVM里程碑M0.5进展更新](https://filecoin.io/blog/posts/fvm-milestone-0.5-is-complete/)发布后，我们很高兴宣布[FVM虚拟机漏洞赏金计划](https://fvm.filecoin.io/#fvm-bug-bounty-program-7)并邀请漏洞猎手和社区开发者帮助寻找FVM M1里程碑代码基础的漏洞，以帮助作为[Filecoin网络升级v16 Skyr](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151)特性的5月份的FVM M1里程碑实施。

Filecoin虚拟机（FVM）正通过几个里程碑的阶段加入到Filecoin的主网里。作为M1里程碑的一部分，Filecoin网络将会切换到只使用Filecoin虚拟机的状态。在所有的客户端实施方案上，从以前的虚拟机到采用基于基于Wasm的全新FVM参考架构，这是一个重大的改变。

这还会包含一个新的gas模型，能够计算Wasm执行的耗费。现在，只有[Rust的内建actors](https://github.com/filecoin-project/builtin-actors)会在M1里程碑中支持，而9月份（预计）会在M2里程碑中支持用户可编程actors.

由于这是一个全新的代码基础，我们关注的主要方面有邀请外部开发者来在各种实施方案中审计潜在漏洞。另外，我们希望让Filecoin有机会探索我们的[FVM参考实施方案](https://github.com/filecoin-project/ref-fvm) 和更新后的[内建actors v8](https://github.com/filecoin-project/builtin-actors)，来将他们的方案反馈给我们。

除了通过这个项目激励漏洞赏金猎手外，首次通过的内部审计方案已由Filecoin贡献团队的成员执行，我们还启动了由外部安全专家进行的审计。其他几个强化方案也在进行中。

## **FVM M1漏洞赏金的范围**

1. [FVM参考架构](https://github.com/filecoin-project/ref-fvm) (ref-fvm)

   - Filecoin VM的参考实施方案 ([规格](https://github.com/filecoin-project/fvm-project)).
   - 它以Rust语言书写，旨在通过FFI整合到非Rust客户端，或直接整合到Rust客户端。

2. [Lotus - FVM参考架构整合](https://github.com/filecoin-project/lotus/pull/8293)

   - 通过FFI将FVM参考架构整合到Lotus客户端。
   - 以Go语言书写。
   - (这个Pull Request链接只是访问代码基础的入口，但范围并不局限于此。请查看在master分支及其他分支下的Pull Request）

3. [Lotus - Filecoin FFI](https://github.com/filecoin-project/filecoin-ffi/pull/217)

   - FFI胶水代码。
   - 以Go和Rust语言书写。
   - （如上，该Pull Request链接只是入口，但相关范围并不局限于此）

4. [内建Actors](https://github.com/filecoin-project/canonical-actors)

   - 以Rust语言书写并用Wasm编译的内建actors正被所有Filecoin客户端使用。
   - 可以参考为actors写的[actors规格](https://spec.filecoin.io/systems/filecoin_vm/actor/) 和[测试向量](https://github.com/filecoin-project/specs-actors/tree/master/test-vectors) 。
   - 一个以Go语言书写的可执行规格可在[filecoin-project/specs-actors](https://github.com/filecoin-project/specs-actors)找到，它们它们在FVM时代之前支撑了Filecoin网络。
   - 注意，对actors进行审计通常需要有Filecoin领域的专业知识。

## **奖励以及不在范围的内容**

FVM团队想在M1里程碑到来之前，从社区找到最多的代码审计帮助。不过，有一些领域的加强已经在进行了。为此，他们维护了一个列表，上面列出了 **_应该排除掉的汇报内容（包括已知问题）_** [点击Github链接查看](https://github.com/filecoin-project/ref-fvm/issues/428)，这链接会持续更新。只有它们从列表中被剃除后，才能有资格得到赏金。

汇报FVM M1里程碑漏洞的奖励，跟往常在Filecoin安全计划（Security Program）里的[赏金奖励](https://security.filecoin.io/bug-bounty/#rewards)一样。类似的还有，往常的Filecoin安全计划的[规则](https://security.filecoin.io/bug-bounty/#rules) 也适用于这里，包括[不在范围内的](https://security.filecoin.io/bug-bounty/#out-of-scope)界定。

在Filecoin实施方案(Lotus, Venus, Forest, Fuhon)和Filecoin Proofs库里的漏洞在往常的[Filecoin Security Program scope](https://security.filecoin.io/bug-bounty/#scope)和奖励计划里涵盖了。最后，以前的Filecoin审计结果可以在[Filecoin Specs](https://spec.filecoin.io/appendix/audit_reports/)的审计一栏找到。

## **测试工具**

[Filecoin测试向量](https://github.com/filecoin-project/test-vectors/)支持不同节点实施方案之间的互操作测试，基于此，[FVM测试向量](https://github.com/filecoin-project/fvm-test-vectors) 特别针对FVM设计并涵盖全部功能。社区的一个开发团队也在设计[集成测试框架](https://github.com/filecoin-project/devgrants/issues/492) 来测试FVM正确性。FVM的不同组件会被进行模糊化测试。

## **漏洞汇报**

如果要汇报漏洞，请联系security@filecoin.io，这样才有资格参与赏金计划。你可以查看[保密汇报准则](https://security.filecoin.io/#vulnerability-reporting)。另外，FVM漏洞赏金计划也在Gitcoin [上线](https://gitcoin.co/issue/filecoin-project/community/504/100028707)，还会在ImmuneFi上分享。

请**不要**提交一个公开的问题单，或在Slack和Twitter等公共场所讨论漏洞，否则就没资格参与奖项。

## **展望未来**

希望在五月底之前，我们现有的开发者社区和新来的外部开发者，会帮助找到FVM M1里程碑的潜在漏洞，尽早在FVM M2里程碑加入用户可编程性和EVM兼容性之前提出来。

这将是Filecoin协议最值得兴奋的更新之一。通过定制的actors, 开发者将可以利用Filecoin能提供的广泛用例，这包括可编程存储到DeFi、DAOs、服务订阅、保险等等。查看[FVM网站](https://fvm.filecoin.io/)以了解更多机会。

为了准备M2里程碑的发布，FVM团队会针对即将来到的M2代码基础启动更多的安全审计和另一轮赏金项目，这可能在7月进行。我们还邀请了不同的开发者群体来尝试初期的FVM，这是通过为早期建造者设计的[FVM Foundry项目](https://fvm.filecoin.io/foundry) 来进行的，具体包括了开发者工作流、工具和早期dapps.

**_请在这个夏天保持关注M2里程碑的FVM漏洞赏金项目！_**
