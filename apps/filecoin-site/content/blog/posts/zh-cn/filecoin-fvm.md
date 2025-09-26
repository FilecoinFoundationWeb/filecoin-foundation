---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-11-11T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin虚拟机(FVM)让统一的计算和存储互操作环境成为现实。
image:
  alt: ""
  url: /uploads/fil-blog-2021-11-02-fvm-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-11-02-fvm-1.webp
title: Filecoin虚拟机(FVM)介绍
_template: blog_detail_ch
---

Filecoin网络是一个稳健的平台，以可验证的方式存储NFT、公共数据集、Web3和元宇宙资源等并提供访问服务。我们可以将其视为web3的I/O层，不过这只是其中一方面。通过向Filecoin网络引入可编程性，还能解锁更多惊人的价值和潜力。在存储之上增加计算层，也会为不依赖于信任的跨链互操作性和整合性开创新的维度。

最近，Protocol Labs研究员[Raúl Kripalani](https://twitter.com/raulvk)向Filecoin社区介绍了[Filecoin虚拟机](https://www.youtube.com/watch?v=Vw9syGiG31c&list=PL_0VrY55uV1_HE_bE-frkYUPGybjYHbNz&index=7)，这是分布式存储生态下一个演变方向的核心支柱。

## 为什么要在Filecoin上增加智能合约

智能合约（在Filecoin里我们称为智能角色——actors）可以创造出在web2技术时代很难实现的智能和动态的存储解决方案。例如：

- 基于Filecoin上存储的数据进行分布式计算（在数据的存储位置进行计算，而无需将其先移动）
- 众筹式的数据集保存计划（如任何人都可以资助存储一些对社会很重要的数据，如犯罪数据或环境变暖相关数据）
- 智能存储市场（如根据每天不同时段、复制层级、在某区域内的可及性动态调整存储费率）
- 几代人级别的存储和永续的托管（如存储数据，让经历几代人都还能使用）
- 数据DAO或token化数据集（如将数据的价值作为token建模并组建DAO以协调和交易在其之上进行的计算）。
- 本地存储的NFTs（如与跟踪NFT的注册记录一起协同定位NFT内容）
- 时间锁式数据取回（如只有在公司的记录公开后才解锁相关的数据集）
- 抵押贷款（如向存储提供者发放确定目的贷款，像是接纳来自特定用户的FIL+交易提议，或在确定时间窗口增加容量）
- 还有更多

它们也让开发者可以创造跨链互操作桥，作为分享流动性的方式；也可以整合已部署到其他链（如Ethereum, NEAR, Polygon, Solana, Flow）的应用，并由Filecoin网络提供存储容量和能力。

继续阅读，以了解Filecoin虚拟机如何撼动web3生态的互操作存储和计算范式。

## 作为Layer 0的存储

现在，Filecoin平台注重于数据的存取。我们将这两个特性视为协议的Layer 0组成部分。

![](/uploads/fvm-storage-as-layer-0.webp)

这样的系统是很简洁明了的，但对那些寻求使用可编程智能合约打造更复杂应用和解决方案的开发者来说，功能是远远不够。

在这层之上，还可以加设一个Layer 1层，来实施智能合约可编程性。现在，Filecion网络的逻辑是硬编码到系统定义的角色里，这意味着用户只能通过外部桥连接到其他可编程区块链（如Ethereum和NEAR），才能实现可编程性。这类桥解决方案有Textile 和Bridges等。Filecoin虚拟机向Filecoin网络引入了原生的用户定义角色。

## 兼容Ethereum的Filecoin虚拟机

相关最新的技术讨论开始于2021年6月，可以参见[Filecoin改进提议113](https://github.com/filecoin-project/FIPs/issues/113)。Filecoin虚拟机(FVM)旨在支持多种语言，这是从[Hypervisors](https://en.wikipedia.org/wiki/Hypervisor)支持多种虚拟机中得到的启发。期间考虑过很多方案，包括了直接采用EVM，还有LLVM-IR、eBPF、Secure EcmaScript等。

从核心看，FVM虚拟机的运行时（runtime）是[WASM](https://webassembly.org/)。我们相信WASM在区块链领域有明朗的前景。这个选择让人们能以任何可编译为WASM的编程语言，来编写原生的角色程序。（不过并非任何语言都合适；参考用的SDK是以Rust语言构建）。这个特性让web3开发者更容易上手web3，因为可以让他们使用早已掌握的知识，绕过与特定语言相关的学习曲线。

![](/uploads/fvm-wasm.webp)

另外，我们还增加了对 *外部运行时（foreign runtimes）*　的模仿支持，首个功能则是Ethereum虚拟机(EVM)，这个选择是Filecoin开发者社区的请求下做出的，实现了FVM对EVM/Solidity的支持，而无需在源代码上做出太大的变更（甚至不用改）。在这里查看[当前的规格](https://github.com/filecoin-project/fvm-project/pull/39)。

![](/uploads/fvm-evm.webp)

我们看着Ethereum社区打造了一个大规模的实用、经审计、经实战测试的智能合约资源库，如ERC-20 tokens、NFTs、DAOs、闪电贷款等。直接重用这些合约的能力，会让Filecoin的创新和可组合解决方案进入寒武纪般的爆发期。还有，让Solidity开发者通过桥和预言机连接不同链上的解决方案，只会增强他们的集体价值和能力。

还需要注意，EVM兼容性是在字节码（bytecode）层实现的，因此保留了在Filecoin环境里利用成熟Ethereum工具链的能力。除了部署现有的智能合约外，开发者还可以用Solidity快速编写新的角色合约，或升级来使用原生的角色合约来实现性能优化。

## 扩大Filecoin网络的形象

通过FVM，Filecoin网络在现有的存储能力之上还获得了计算能力。我们预期Filecoin网络上运行两类计算：链上的状态计算，和链下的数据计算。在这两个方向里，EVM都不可或缺。

![](/uploads/fvm-dataverse.webp)

我们很希望在Filecoin看到的用例包括：

- **以数据为中心的数据DAO:** 通过集结个人和组织的资源，人们将可以激励公共数据集的保管、收集、强化和处理、数据DAOs使用tokens和NFTs作为价值单位，并用于交易服务、访问权等。
- **数据复制用户**: 自动化的机器人，在用户定义的策略下，依据激励机制来确保Filecoin网络中数据复制达到足够多的次数。
- **另类存储市场：** 基于拍卖或赏金等方式，存储市场可以将更正代码应用到数据里，确保在数据损坏时能够回恢复。这也可以包括自动重试的交易提议，来确保数据的送达。
- **抵押贷款：** 向存储提供者发放不依赖于的，且/或限定于特定目的的抵押贷款。如贷款仅能用于为特定客户接受交易提议时使用。
- **在数据上进行计算：** 大规模计算中的一个很大的问题是数据的转移，这为每一次操作增加了成本和延迟。通过将计算任务转移至数据托管的存储提供者那里，并为协调节点提供奖励，让它们规划任务在Filecoin的执行，就可以高效执行[极具并行性](https://en.wikipedia.org/wiki/Embarrassingly_parallel) 的任务，然后将结果存储回去Filecoin网络，让进一步的计算任务成为可能。

此外，FVM首次让Layer 2解决方案在Filecoin网络上提交其状态到Layer 1，这带来了更安全可追踪及具覆盖性的网络。内容分发网络(CDNs)、信誉系统和支付通道网络是我们很希望在Filecoin上看到的一些L2解决方案。

如果你是有兴趣尝试搭建这些用例原型的开发者，请与我们联系！

## 开发路线图

近期的FVM开发阶段路线图如下：

- **阶段 0:** 主网上暂时不可编程FVM的金丝雀版本发布，这是在参考实施方案（Lotus）上用预定的功能标识参数或分叉来启用，暂时只会运行系统角色。与现有的链兼容，不需要进行协议更新。这个阶段计划在2021年第四完成。
- **阶段 1**: 在实现用户可编程性之前，对协议进行分叉以引入准备的变更。这包括gas计费标准和架构调整。在这个阶段结束时。整个网络应该可以运行FVM支持的系统角色。这个阶段计划在2022年第一季度开展。
- **阶段 2:** 用户可编程性在原生和外部EVM角色上引入。这个阶段计划在2022年第二季度开展。
- **阶段 3:** 重新设计系统角色（actors）,深入更改协议，让在系统角色上编程更容易。这个阶段计划在2022第二季度开展。

![](/uploads/fvm-roadmap.webp)

如果你对帮助FVM的开发感兴趣，或者想进一步了解这个项目，可以在Github上跟踪[filecoin-project/fvm-project](https://github.com/filecoin-project/fvm-project)，或在[Filecoin Slack](http://filecoin.io/slack)上关注#fvm频道。
