---
aliases: []
author: "2021年6月22日 12:00 PM"
categories:
  - updates
date: ""
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 纵观Lotus节点的过去、现在和未来，就在检索市场创建者峰会。
image:
  alt: ""
  url: /uploads/fil-retrieval-market-lotus-sm.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-retrieval-market-lotus-sm.webp
title: Lotus节点的进化之路
_template: blog_detail_ch
---

## Lotus以及检索市场创建者峰会

该峰会的召开是为了聚集检索市场解决方案的创建者，盘点取得的进展，确定多个系统该如何协作，为网络用户提升检索交易的效用、效率和可靠性。

所有[峰会上的发言可在Filecoin Channel获取](https://www.youtube.com/playlist?list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2)。

在[4月检索市场创建者峰会](https://www.youtube.com/watch?v=QuE_NotFCXs&list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2)上，[Raul Kripalani](https://github.com/raulk) （libp2p以及Filecoin核心开发者）解析了Lotus节点的架构以及计划中的改变，特别是针对lotus-miner节点的改变。改变是为了更好地满足存储提供者和网络参与者的需求。完整发言[点击观看](https://www.youtube.com/watch?v=cmrLfnqzflk)。发言指出了为实现检索交易对Lotus上的存储提供者来说高度可靠且可扩展所需要的工作——确保Filecoin检索市场建立在稳健的基础上。

[Lotus](https://github.com/filecoin-project/lotus)是Go语言的Filecoin网络实施方案。作为Filecoin首个实施方案，Lotus为整体网络搭建了可靠强大的基础。支持有用信息的存储和*检索* 是所有Filecoin节点都具备的关键功能，这也为在Filecoin网络上建立稳健的检索市场奠定了基础。

## Lotus节点的进化之路

Filecoin生态正快速发展，诸如Lotus的生态工具也在不断进化，满足网络需求，探索新机遇。其中，检索市场将为Filecoin网络引入新能力，例如：索引、CDN、公共检索等。

我们发现的问题是，检索网络的新能力离不开稳健的存储提供者基础，而目前，Lotus上的存储提供者会在工作中*避开*他们认为不稳定和不可盈利的功能。以长远的眼光看，其做法有积极作用，能推动Lotus实施计划进化，满足存储提供者需求。如果网络参与者选择绕过特定功能，说明软件本身应该为用户提供更高的灵活性和模块性。

基于上述观察，我们意识到Lotus的 *单体二进制* 阻碍了Lotus上存储提供者的灵活稳健地运营，并提出了解决这一问题的几个方向。

![](/uploads/pl_lotus1.webp)

### 单体二进制

截至目前，Lotus节点基本是单体式架构。Lotus有两种进入点：1)全节点2)存储提供者。然而除此之外，网络参与者无法自由选择并承担存储生命周期中的任务。比如说，存储提供者的任务包括运营节点，提供存储，达成交易等等。这些任务有本质区别，但目前的lotus-miner架构将它们打包在一起。

### 单体架构的问题

总的来说，在单体架构下，存储无法将资源有效分配给互不关联的任务。要求存储提供者承担全部任务与存储提供者的核心动力形成了冲突，实现利润最大化和运营风险最小化才是存储提供者的核心动力。具体来说，单体二进制会带来几大问题。

**脆弱性:** 架构内部缺少隔离时，一个区域的故障可能泄漏从而影响其他关键进程。难以区隔关键和非关键进程，所有系统进程都面临崩溃的风险。

**攻击面扩大:** 当一位Lotus上存储提供者的进程需要公开公共端点时，可能会暴露相关部分系统漏洞。单体架构下一个公共端点有可能危害整个系统。

**功能复杂:** 依照Filecoin的使命，存储提供者不仅储存并服务于原始数据，还在此基础上提供其他服务，如索引、发现。在单一进程中添加过多存储提供者端功能会加剧存储提供者思想顾虑和运营风险。

**难以扩展:** 不同能力需要不同功能和升级步骤来实现。在单体系统中管理不同能力十分困难，导致迭代和增长缓慢。

**缺少粒度控制:** 由于存储提供者无法自主选择或放弃功能，他们会利用现有机制进行规避，例如拒绝交易，设置高价抑制交易甚至复制代码库。

**迭代放缓:** 对单体架构进行测试和创新难度更高，试验性功能无法通过简易方式隔离或选择性加入，只能加入整个系统。

### 迈向模块化存储提供者架构

在后台观察Lotus存储提供者的职责，可发现它们分为两大类：提供存储和市场。这两层任务需要截然不同的服务和SLA。举例来说，提供存储对Lotus存储提供者带来的经济效益最高，同时是非公开行为。而市场运营是公开行为，盈利机制也不相同。

![](/uploads/pl_lotus2.webp)

[*lotus miners的其他职责*](https://github.com/protocol/web3-dev-team/blob/main/proposals/lotus-miner-runtime-segregation.md#context)

通过这一初步分类，迈向模块化存储提供者架构的第一步就是解决单体架构暴露出的劣势：*将Lotus miner进程分割为1)Lotus市场进程和 2)Lotus存储提供者进程。*

区隔市场和挖矿后，Lotus节点架构对存储提供者来说功能将更明确，存储提供者可根据自身能力和盈利偏好承担相应任务。

![](/uploads/pl_lotus3.webp)

### 设计原则

在向更为模块化的存储提供者架构转变时，Lotus会继续坚持一系列设计原则：

**避免微服务架构的复杂度:** 明确避开相互依赖性强的复杂网络，这类网络容易发展成错综复杂的意面状网络，只有服务网格之类的特殊工具才能管理和调适。这种复杂程度不适用于Lotus。秩序和层级仍是必要的，各进程仍属于一个内聚单元。

**简单轴辐架构:** Lotus正在向轴辐架构过渡，该架构由管理进程控制。管理者了解部署提供了哪些能力，存在于哪些节点，同时作为集合体外部API的进入点。

![](/uploads/pl_lotus4.webp)

**值得投资:** 新Lotus架构必须具备投资价值。在盈利之外，投资回报因素还包括可靠性、安全性、开发者敏捷性和稳健性。

**稳健的分布式进程生命周期管理:** 模块化架构并非完全孤立的架构。当某环节的故障可能导致下游服务异常，整个系统应有能力注意并反应。

为设计这一新运行环境，我们从Erlang/OTP以及面向参与者的编程模式中汲取了灵感（例如：JVM环境中的Akka）,也借鉴了服务网格和容器编排中的特定概念和抽象思维，但没有完全照搬相关框架。

## 更多资源

进一步了解Lotus以及Lotus将如何迈向模块化存储提供者架构，请参考：

[Lotus GitHub](https://github.com/filecoin-project/lotus)

[提议：区隔存储提供者运行环境](https://github.com/protocol/web3-dev-team/blob/main/proposals/lotus-miner-runtime-segregation.md)

[草拟原型](https://github.com/filecoin-project/lotus/pull/5983)
