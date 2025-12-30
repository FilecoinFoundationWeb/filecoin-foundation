---
aliases: []
author: ""
categories: []
date: "2022-09-27T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin网络即将迎来智能合约及基于数据计算的功能。想象一下在上面能构建什么吧！
image:
  alt: ""
  url: /uploads/image.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/image.webp
title: FVM虚拟机解锁的新机会
_template: blog_detail_ch
---

目前，Filecoin被视为分布式的数据存储及检索网络。通过全球数千个存储提供者，它为世界提供了超过18 EiB的分布式数据存储能力。

不过，存储能力只是一个开始。[最近推出的](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/) Filecoin v16网络升级版本Skyr完成了启动Filecoin虚拟机（FVM）的首个里程碑。当这个流程完成后，建造者们将可以计算和分析Filecoin上存储的数据！

_FVM = 可证明的存储 + 智能合约。_

FVM虚拟机能让你部署自己的智能合约（在Filecoin生态里，智能合约被称为 _actors_），它们可以就Filecoin网络里的状态数据展开链上计算。这确实是一个非常强大的功能。这种让用户在可证明的分布式存储上编程进行链上计算的方式，能促成很多链上链下的下游用例和应用。

你可以将存储和检索功能视为Filecoin的Layer 0架构，而执行链上计算的功能正将Layer 1的能力带到Filecoin的技术栈上。

## Filecoin新用例

那么，这意味着什么？为什么它很重要？它会解锁什么样的可能性？FVM虚拟机可以用于创建新型的Web3 dApps去中心化应用，其中的很多应用有能力为网络的功能（和其他层面）带来十倍以上的改进。

Filecoin社区成员已经对这些新能力可以建造的项目充满期待。以下是正在讨论的一些话题：

### Token化的数据集和数据DAOs

想象一下，可以搭建一个数据集经济，在里面你可以捕获和代表这些数据集的社会价值。你甚至可以在节点间交换这些数据token，请求在这些数据上执行计算服务，如验证数据、联合数据、分析数据、特征检测和抽取，从而用于机器学习。

### 去信任的信誉机制

想象一下，可以打造一个节点网络，能够在Filecoin网络上巡逻，随机与存储提供者达成存储交易提议，以监测其服务等级、性能、网络延迟和区域细节。这些节点就可以将这些存储提供者的信誉度放到链上，让其可追溯和验证，同时可以让用户决定自己数据应在存储提供者那里获得的服务条件。

### 数据副本操作

想象一下，任何人都可以写一个新的智能合约，它能自动签订新的存储交易提议，来在网络中维持某个数据集的特定副本数据等级。你可以设定数据的自动存储副本数量，来确保自己数据的弹性。

通过这个智能合约，你也可以只在Filecoin上存储一次数据，然后让一个不依赖于信任的actor复制和发送_n_ 次到多个存储地点。你甚至可以创建一个该数据集必须遵守的用户自定义协议规则，如指定存储区域和地点、网络响应延迟值甚至是价格。这些都可以在FVM虚拟机的智能合约工作流里搭建。

### 更智能的存储市场

想象一下，存储市场可以加入更丰富的功能，如自动更新存储交易提议或自主修复的存储交易提议（在遭遇扇区问题时）。其他的可能性还包括时间锁或事件驱动的数据存储交易提议——检索只在特定时间段或事件触发时发生。

### 用例层出不穷

FVM虚拟机能够解锁很多的用例，而开发者的想象力是唯一的局限。社区可以研究的一些话题包括：

- 在同一个环境里铸造、交易和存储NFTs
- 存储赏金和拍卖机制
- 促成L2桥
- 以DeFi形式构造的存储期货和衍生品
- 基于扇区投入承诺的有条件贷款

## 实现路径

FVM虚拟机是在WASM核心上搭建的，而参考SDK库是用Rust编写的。社区里还有一些杰出的建设者，为FVM虚拟机搭建其他SDK库，如AssemblyScript SDK和实验性的TinyGo SDK.

为FVM实现开箱即用的EVM兼容性也在[开发中](https://github.com/filecoin-project/ref-fvm/issues/692)。这意味着目前EVM上的所有用例都可以拿到Filecoin上使用，从而利用其存储层的好处。与此类似，开发者也可以利用现有的Solidity语言能力，以及用现有的以太坊生态工具（如Hardhat开发环境或各种钱包）来为FVM的建设出力。

## 路线图

用户自定义的智能合约一直是Filecoin开发路线图的一部分。

不过，我们的优先级还是打造一个稳健、安全和非许可的分布式存储网络，即作为Layer 0层的Filecoin.

现在，社区已经准备好推进网络的下一阶段开发。你可以在[FVM路线图](https://fvm.filecoin.io/#roadmap-4)里查看启动这些L1层能力的详细计划。

在完成Skyr升级带来的M1里程碑后，Filecoin引入了暂不可编程的WASM版FVM虚拟机。目前，代码已完成审计。这意味着M2里程碑（原生FVM和兼容EVM的FVM虚拟机可编程性）正在徐徐展开。

## 成为FVM社区的建设者

如果你是一个团队或建设者，想帮助塑造FVM虚拟机的未来，有几种方式可以参与其中：

你可以在[GitHub](https://github.com/filecoin-project/ref-fvm)上帮助丰富FVM虚拟机的技术细节，也可以加入#fvm的[Slack](https://filecoin.io/slack)频道讨论。这个程序库和相关的[FIP改进提议](https://github.com/filecoin-project/FIPs)能提供FVM架构设计的更多信息。

如果你很希望搭建某个用例或工具，可以加入[FVM虚拟机早期建设者](https://fvm.filecoin.io/foundry)计划。你可以与生态系统里的其他杰出的建设者协作，如Zondax、Bloxico、Polyphene、Venus团队和Glif。最新的一期计划在9月开启。

你还可以申请专注于FVM虚拟机基础设施和工具项目的[FVM RFP资助计划](https://github.com/filecoin-project/devgrants/blob/master/rfps/fvm-open-tools-infra.md)。目前已经有一些团队提交了项目提议，如搭建高层级的Rust SDK库、汇编脚本（AssemblyScript）和TinyGo的SDK库，以及一个名为FilHack的“FVM虚拟机版Hardhat开发环境”。不过，我们还需要更多FVM虚拟机工具和基础设施项目提议。例如，可以做一个Open Zeppelin程序库，或为_ata wallets_提出一些新想法。

如果你想先了解FVM虚拟机，可以观看该项目的[视频讲解](https://www.youtube.com/watch?v=Vw9syGiG31c&t=10s)。
