---
aliases:
  - /zh-cn/blog/update-2018-q1-q2
author: ""
categories:
  - updates
cover_feature: false
date: "2018-08-28T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin 2018 第一、二季度更新
image:
  alt: Filecoin 2018 第一、二季度更新
  url: /uploads/2018-q1q2-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/2018-q1q2-update-english-social.webp
title: Filecoin 2018 第一、二季度更新
_template: blog_detail_ch
---

## 1. Filecoin 开发进展

开宗明义: 到目前为止，Filecoin项目中最令人兴奋的事情是构建了第一个协议的实施: go-Filecoin。几个月来，我们一直为此而努力，以下成果的取得让我们感到非常高兴:

- (1) 实现了区块链数据结构（结构化为[IPLD](https://ipld.io/)）
- (2) 节点可以建立彼此之间的安全连接（[libp2p](https://libp2p.io/)）
- (3) 信息和区块可以通过[libp2p](https://libp2p.io/) pubsub传播
- (4) 矿工可以组装区块
- (5) 节点可以验证区块并在最重的链上达成共识
- (6) 信息（交易）调用和执行参与者（actors）（包括智能合约、虚拟机等）
- (7) 参与者的内存被限制和隔离在状态树（vm）上
- (8) 账户、支付和代币可以基本运行
- (9) 存储市场的主要特点已经实现（请求、竞标、交易、存储文件）
- (10) 客户可以雇佣矿工，存储文件，并在以后检索（！）
- (11) 诸如支付通道这样的参与者也可以运行，但尚不完善

您可以在[这个工作文档](https://docs.qq.com/doc/DVlRhV0pRbm1NWHVU)中更仔细地查看go-filecoin各个部分的完成状态。

### 1.1 开发进度/go-filecoin 演示

随着这次更新，我们也在此发布3个go-filecoin的演示。这些演示程序是很基础的，但它们显示了在go-filecoin节点中工作的许多复杂组件。从演示中，可以看到基本的区块链操作，例如区块的挖掘，通过网络传播，以及主链对最优的下一个区块达成共识；可以看到由此产生的区块链数据，包括状态树、参与者的内部数据存储、钱包余额、钱包支付事务等；还可以看到可运行的、去中心化的和可验证的存储市场，并执行了报价、请求和处理存储文件等操作。在未来，我们将制作和发布更多的功能演示视频。

#### 演示1：go-filecoin 和测试网络模拟

该演示视频介绍了其他几个演示使用的工具，展示了如何设立一个本地测试网络，生成几个go-filecoin节点，在这些节点上随机运行指令，然后检查因此产生的区块链数据。具体展示如下

- go-filecoin 命令行工具，以及filecoin节点运行情况
- 设立一个本地测试网络调度工具，运行众多go-filecoin节点，并且发出许多随机行动
- 手动发出大量命令，通过命令行运行节点
- 演示了go-filecoin的API互动应用程序和各种命令行输出
- 浏览区块链数据结构、市场订单、钱包余额等

#### 演示2: 网络的可视化和区块浏览器

在该演示视频中，可以看到本地测试网络和其节点所有活动的可视化情况，还可以看到一个区块浏览器及如下活动：

- 区块被挖出、进行传播，并被添加到链上
- 网络达成共识
- 将货币从一个账户发送到另一个账户的支付交易
- 存储市场订单被添加（询价&报价），以及市场深度图表
- 交易达成，以及文件被传输
- 内部数据存储

#### 演示3：存储市场基本功能

在该演示视频中，我们介绍了存储市场运营的一系列基本功能：

- 矿工添加询价
- 客户添加报价
- 客户导入文件
- 客户向矿工发送文件
- 客户和矿工达成交易
- 其他客户检索已经存储的文件

### 1.2 开发进展 / 代码库开放情况

**目前（Filecoin）仍然是非公开的代码库。** 我们一直在以非公开的方式开发（Filecoin的代码库）。这不是我们典型的工作方式——几乎我们所有的工作都是从第一次提交开始就完全公开的（如IPFS、LibP2P、IPLD等等）。关于决定不公开Filecoin的代码库，我们做出了艰难的选择，主要是为了避免分心和可以迅速行动。

- **避免分心：** 开放、公开的代码库会导致大量的问题、请求和其他的互动，所有这些集成起来都需要耗费开发者的大量时间。对于一个十分引人注目的项目而言，如果这些分散注意力的事情非常频繁，将会大量消耗我们团队的时间。
- **迅速行动：** 在早期阶段，像go-filecoin这样的项目需要对接口和方法进行实验，尝试不同的东西，并迅速调整。这对于一个备受关注的大规模项目来说是很困难的——用户倾向于在代码还在编写的时候观察代码、提出问题，甚至可能开始针对它开发应用程序。

**我们即将开放代码库和社区论坛！** 我们已经度过了需要将代码文件保密的关键时期，在下一个阶段，开放（Filecoin）代码库将带来更多的好处。因此，我们计划在未来几个月发布代码库。这将是一个令人兴奋的时刻，让大家可以参与进来！到那时，所有感兴趣的人都可以来了解Filecoin，帮助构建其组成部分，并在此基础上进行开发。

- **与IPFS和libp2p类似：** 我们期望Filecoin项目可以与IPFS和libp2p类似的方式运作
- **许可与开源软件安全：**我们很有可能对Filecoin签发MIT许可，或其他的开源软件许可协议
- **讨论论坛：** 我们计划对用户、矿工以及客户开放一个论坛 （有可能和IPFS及Zcash一样，使用Discourse平台）

**组织社区：** 我们希望在为分布式网络构建基础设施的过程中，培养出一种协作的和有坚韧毅力的文化。我们的讨论论坛可以回答问题，代码库则可以是记录问题的地方。此外，我们正在建立一些组织形式，可以实现规模化，且较容易地组织大家之间的协助:

- **工作组：** 我们使用工作组（类似于IPFS），这是一种可以规模化组织人员并履行职责的方法。有兴趣的贡献者可以加入不同的工作组，或者建立新的工作组。
- **OKRs：** 我们使用“目标和关键结果”（Objective and Key Results）来进行规模化的规划，并评估进度。Protocol Labs一直通过IPFS、LibP2P和更多的方式，开创性地探索开源领域。我们发现，“目标和关键结果”是个跨工作组进行规划的好办法，可以在小组自治和跨小组协调之间取得很好的平衡。
- **社区管理：**我们正在准备，以满足广泛的、充满活力的社区的各种需求。

## 2. Filecoin 研究进展

Filecoin研究小组的工作重点在于以下几个方面。这只是一个简要的概述，在今后的更新中我们将深入探讨。

- **支持Filecoin实施的工作：**我们的重点是为主网启动(Network Launch)完成第一个Filecoin的实现——go-filecoin。
- **加密文库：**我们所需要的大多数加密协议都是以可移植的方式实现的，因此许多Filecoin的实现可以共享关键代码。这包括复制证明（Proof-of-Replication）和时空证明（Proof-of-Spacetime）等算法。有了这样的基础代码库，将极大简化今后长期的开发和维护任务。
- **优化复制证明（Proof-of-Replication）：**近几个月来，复制证明（PoReps）有了极大的改进。我们构建了[坚实的基础](https://eprint.iacr.org/2018/678.pdf)，获得了[安全证明](https://eprint.iacr.org/2018/678.pdf)，并实现了[效率更高的构建效率](https://eprint.iacr.org/2018/702.pdf)。这些对 Filecoin的发展 极为有利！因为PoReps的关键属性已被正式证明是安全的，这对所有用户都是有益的。新的构建还极大提高了关键功能的效率，这对矿工非常有益。
- **复制证明（Proof-of-Replication）子域在成长：**很多伟大的研究人员一直在思考和撰写关于复制证明的文章。几个新的构建方式正在开发；有些已经出版。我们的RFP项目已经资助了其中一些工作。
- **RFP项目：**今年早些时候，[协议实验室启动了500万美元的RFP项目](https://protocol.ai/blog/ann-research-rfp/)，以加快研究，解决与我们的协议相关的关键问题。第一个RFP项目寻求改进Filecoin组件的性能。这些都是改进，并不是最终发布所必需的。该项目的成功可以极大地改善性能特性，增加安全性，或简化协议。所有这些方向都非常值得研究。
- **解决其它问题：**我们的团队也一直在致力于解决一些对Filecoin的未来非常重要的问题，尽管这些问题并不像网络发布那样优先。其中包括:（a）完全链下市场订单、（b）使用证明进行链的压缩、（c）用户定义的文件合同、（d）可扩展共识、等等。

## 3. Filecoin 项目路线图

随着这次更新，我们将发布一个更详细的项目路线图和一个粗略的、较乐观的时间表。我们计划在[本文档](https://docs.qq.com/doc/DVlRhV0pRbm1NWHVU)中持续更新这份路线图

### 3.1 路线图/较乐观的时间表

**在这个时间表里我们不能承诺任何具体的时间点，**但我们会对目前状态、下一步做什么，和下一个里程碑什么时间到达给出进程提示。我们不能对一些具体完成日期做出承诺，而日后被证明过于乐观或者食言，我们也不能什么都不公开，让我们的社区陷入未知状态。因此，我们发布这个乐观版的路线图。与典型的主流软件和产品开发理念不同，我们的目的是提供一些里程碑事件的预计日期，并有计划的根据需要修正这个时间表。这样做的好处是：规划方法更清晰和透明，更容易协调整个社区，让大家随着里程碑的临近而有心理准备。缺点是：时间表将不可避免的进行调整—有些事情会比最初预期的时间发生的更早或更晚。

### 3.2 路线图/目前状态

总体来说，下面这张图显示了我们现在的开发进度状态（注：各个阶段并不一定等长）

![](https://filecoin.io/vintage/images/blog/filecoin%E9%A1%B9%E7%9B%AE%E8%B7%AF%E7%BA%BF%E5%9B%BE2018%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6.png)

### 3.3. 路线图/未来里程碑事件

即将到来的里程碑如下：

- **发布go-filecoin的演示（2018年第三季度）**
  - 作为此次更新的一部分，我们发布一系列演示视频，演示go-filecoin关键特点。
- **go-filecoin 合作者、贡献者预览 （预计2018年第四季度）**
  - 在我们公开Filecoin的代码库之前，我们将邀请一些合作者和项目贡献者预览这些代码；如感兴趣，[可以在此注册](https://goo.gl/forms/LHWWjW6mzFkUXbB42)。
  - 预览的主要目标是改善文字记录，提出并解读初步问题，并为代码库发布做好准备。
  - 预览将有助于我们将知识传递给更多的贡献者，他们可以帮助我们一起应答大量的疑问、处理各种问题，并做好公关推广。
- **公开go-filecoin的代码库 （预计2018年第四季度/2019年第一季度）**
  - 我们将开放go-filecoin 实现和相关工具代码的GitHub库
  - 这将是社区参与的重要时间点，我们大力鼓励对Filecoin开发以及对相应应用开发有兴趣的开发者积极参与。
  - 从短期来看，代码的公开有可能放慢我们的开发进度，因为我们的团队将面临着开源维护者的责任，还需要花费时间回答广大开发者在学习代码过程中出现的问题。
  - 从长远来看，这将增加代码贡献者的人数，从而推动我们的开发进度。
- **上线首个公开的Filecoin测试网络（预计2018年第四季度/2019年第一季度）**
  - 距离我们发布第一个公开的Filecoin测试网络的时间越来越近了。
  - 这将是 **go-filecoin** 节点的测试网络，并将逐渐形成规模-将从上百个节点开始，节点数量将逐步提升到数千个、数万个，以及更多。
  - 我们将在尽可能接近真实的情况下运行测试网络，将为测试网络的矿工输送大规模的数据。
  - 我们将帮助填写过表格（[矿工表格](https://docs.google.com/forms/d/e/1FAIpQLSfdFpWhJj8OIGA2iXrT3bnLgVK9bgR_1iLMPdAcXLxr_1d-pw/viewform)、[早起用户表格](https://docs.google.com/forms/d/e/1FAIpQLSdCOjMenUU7WtT54zeAivCS2nnaWYQIgaXh0eRdIdpi6Pwkew/viewform)）的矿工和客户适职。如果你已经填写了表格，请静候佳音。
- **矿工测试（10PB+）（预计2019年第一季度）**
  - 我们很快将进行针对大型矿工的首次测试。
  - 我们将从[已经注册的矿工](https://docs.google.com/forms/d/e/1FAIpQLSfdFpWhJj8OIGA2iXrT3bnLgVK9bgR_1iLMPdAcXLxr_1d-pw/viewform)中选择测试对象。
- **go-filecoin 1.0.0 版本的功能锁定 （预计2019年第一季度/第二季度）**
  - 在正式发布之前，我们将锁定 **go-filecoin** 的功能。此后，直到发布之前，只会进行漏洞修复和代码优化。
  - 在这期间，我们将展开代码检查和审计，为上线做好各方面准备。
- **安全检查和审核（预计2019年第一/二季度）**
  - 在我们正式发布之前，我们需要对我们的代码库进行全面的安全检查，并进行外部审计。
  - 这对于软件的加密系统安全，是至关重要的一步。
  - 如果你有兴趣检查并审计我们的代币，请联系我们。
- **Filecoin主网上线（预计2019年第二/三季度）**
  - 一旦我们确认可以安全上线，将设定一个主网上线日期
- **主网的扩容（2019年以后）**
  - 一旦主网上线，我们将与期望加入的矿工密切合作
  - 我们将完善技术，实现扩容，其中包括解决普遍性的区块链扩容问题（链下、分片、以及分区容差问题等）
- **增加网络的使用率（2019年以后）**
  - 一旦主网上线，我们将与希望使用Filecoin的客户紧密合作。
  - 我们将整合和支持各类应用，以促进Filecoin更为广泛的使用。
- **网络优化（2019年以后）**
  - 我们已经在研究，寻求显著优化Filecoin以及一般性区块链网络的方法。
  - 我们将通过标准的开源优化提议过程，持续优化Filecoin网络。
- **建立Filecoin基金会（2019年以后）**
  - 建立并开启Filecoin基金会，来保证Filecoin网络安全和治理等。
  - 基金会对于区块链网络是至关重要的机构，我们对自己的基金会有很高的期望。如果你有兴趣与我们一起探讨关于治理、推动Filecoin 在未来的研究和使用、公共存储设备等相关问题，请联系我们。
- **更多**
  - 我们还有很多其他的计划，但我们首先将关注点集中在以上列出的这些里程碑事件上。

## 4. Filecoin 公开讲座和媒体发布

在过去的一年里，我们基本上离开了公众的视野，转而集中精力进行代码开发；我们只进行了一些公开演讲，拜访了一些研究团队。接下来，这些活动也将保持目前规模，直到主网正式上线

- **公开演讲** _有些提供了视频链接_
  - 2018-01: Filecoin: protocol overview, the important results, and new open problems (Juan Benet, BPASE 2018)
  - 2018-01: Proof of Replication using Depth Robust Graphs (Ben Fisch, BPASE 2018)
  - 2018-03: [Filecoin: a robust foundation for human knowledge](https://www.youtube.com/watch?v=6h2WNxEV8q4) (Juan Benet, Blockstack Berlin 2018)
  - 2018-04: [Filecoin and the Rise of Open Services](https://www.youtube.com/watch?v=IfLIoOr4p0A) (Juan Benet, MIT Bitcoin Club 2018)
  - 2018-06: [Good SNARKs are here needed](https://www.youtube.com/watch?v=QII1xq9J7NY) (Nicola Greco, Zcon0)
  - 2018-07: Filecoin as a user of libp2p (Juan Benet, libp2p dev meetings)
  - _如邀请我们在相关会议发表演讲，_[请联系](https://goo.gl/forms/xQQRSnWibbC6DTt22)
- **大学、研究团队和社区活动** _按时间顺序_
  - [Security Lab](https://seclab.stanford.edu/) @ Stanford CS
  - [Decentralized Information Group](http://dig.csail.mit.edu/) @ MIT CSAIL ([visit](https://www.csail.mit.edu/event/help-us-decentralize-web-overview-ipfs-libp2p-ipld-and-filecoin))
  - Cryptoeconomics Lab @ MIT Sloan
  - [Digital Currency Initiative](https://dci.mit.edu/) @ MIT Media Lab
  - [FilecoinClub Beijing Community Meetup](https://www.youtube.com/watch?v=95p5fJ6_wLY)
  - [CS294-144](https://berkeley-blockchain.github.io/cs294-144-s18/) @ UC Berkeley
  - University College London (UCL)
  - Stanford Graduate School of Business (GSB)
  - Harvard Business School (HBS)
  - [IMDEA Software Institute](https://software.imdea.org/)
  - [Center for Blockchain Research](https://cbr.stanford.edu/) @ Stanford CS
  - Filecoin Demo @ Decentralized Web Summit 2018
  - _希望Filecoin 团队拜访贵实验室进行交流？_ [_请告知我们_](https://goo.gl/forms/BJHIg6r5nJGF5sQ72)

## 5. 与Filecoin相关的libp2p更新

libp2p 也是协议实验室主导的项目之一，Filecoin 构建于 [libp2p](https://libp2p.io/) 之上，并在很大程度上依赖于 libp2p 。以下我们简要提供一些该项目与Filecoin相关的更新信息：

- **什么是libp2p？:** 一个模块化点对点网络库。查看[该网址](https://libp2p.io/)和[视频](https://www.youtube.com/watch?v=U1RSNIFyzWE)了解更多。
- **与IPFS分离:** libp2p也是IPFS的一个组成部分，我们过去曾讨论过将libp2p绑定到IPFS中。今后，我们将单独讨论libp2p，以展示它给Filecoin和其他区块链项目带来的作用。
- **浏览器支持：** libp2p具有强大的浏览器支持，能够全部在浏览器上，或通过[WebSockets](https://en.wikipedia.org/wiki/WebSocket)和[WebRTC](https://en.wikipedia.org/wiki/WebRTC)等协议运行。这将使Filecoin网络及其数据从一开始，就可以在不依赖可信的第三方的情况下，被浏览器访问——这对许多去中心化应用程序和区链应用程序是至关重要的。
- **其它传输方式：**libp2p最近增加了[对Quic的支持](https://www.youtube.com/watch?v=4FvMed5iCb4)和对Tor传输协议的支持，这意味着Filecoin将可以利用这些协议。[Quic](https://en.wikipedia.org/wiki/QUIC)可以快速建立起加密连接，这对于诸如检索市场（Retrieval Market）这样的协议而言是至关重要的，因为这类协议对延时比较敏感。[Tor](<https://en.wikipedia.org/wiki/Tor_(anonymity_network)>) 提高了网络流量的匿名性和隐私性——这意味着使用Tor传输的Filecoin用户在存储和检索文件时，能够获得更强的安全性和隐私性。对于不同的用户群来说，这些是很重要的功能。
- **Rust语言的实施：** libp2p已经在[GO](https://github.com/libp2p/go-libp2p)和[JavaScript](https://github.com/libp2p/js-libp2p)语言中实现，现在则可以在[Rust](https://github.com/libp2p/rust-libp2p)语言中实现。这意味着用这些语言编写Filecoin的实施，会容易很多。Rust语言在移动端、嵌入式设备和其他语言通过C绑定进行编程方面非常成功。协议实验室启动了GO和JavaScript实现，Parity启动了Rust语言的实现。你可以[在这里看到关于这个主题的讨论](https://www.youtube.com/watch?v=HqSXFlCwgMY)。谢谢!
- **Polkadot选择了libp2p！** Polkadot最近在其网络堆栈中采用了libp2p。对于libp2p来说，这是一个重要的时刻，因为这意味着另一个非常重要的区块链和整个区块链生态系统将共享这个堆栈。Polkadot团队最近发布了PoC-2，[这里是关于此次发布的介绍](https://medium.com/polkadot-network/polkadot-poc-2-is-here-parachains-runtime-upgrades-and-libp2p-networking-7035bb141c25)。这会极大鼓励其他支持者把libp2p 应用在其他区块链（如以太坊）中。
- **在区块链应用程序上使用libp2p：** 包括 OpenBazaar, [Livepeer](https://livepeer.org/), [Keep Network](https://blog.keep.network/introduction-to-libp2p-57ce6527babe), Paratii在内，所有人都在使用[IPFS](https://ipfs.tech/)。

## 6. 与Filecoin相关的IPFS更新

[IPFS](https://ipfs.tech/) 也是协议实验室主导的项目之一，Filecoin 构建于 IPFS之上，并在很大程度上依赖于IPFS 。许多IPFS的用户也希望成为Filecoin的用户。因此，IPFS 的性能和用例会极大有益于Filecoin。以下，我们简要提供一些IPFS与Filecoin相关的更新信息

- **什么是IPFS？:** 一个内容寻址的超媒体分发协议。[查看这个网站](https://ipfs.tech/)了解更多。
- **IPFS对浏览器的支持：** IPFS具有强大的浏览器支持，能够完全通过[js-ipfs](https://js.ipfs.tech/)和[ipfs-companion](https://github.com/ipfs-shipyard/ipfs-companion)在浏览器中工作。这让编写使用Filecoin的网页应用程序变得非常容易。
- **浏览器对IPFS的支持：** IPFS协议处理程序（如ipfs://）已被添加到Brave和Firefox Nightly中。这些来自主流企业的支持，将使去中心化技术更有可能被主流用户接触到。
- **大量更新发布：** go-ipfs 已经发布了[三个版本](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md): [v0.4.15](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0415-2018-05-09)、 [v0.4.16](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0416-rc3-2018-07-09)、 [v0.4.17](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0417-2018-07-27)；而js-ipfs已经发布了[19个版本](https://github.com/ipfs/js-ipfs/releases)，包括: [v0.28.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.28.0)、 [v0.29.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.29.0)、 [v0.30.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.30.0)、 [v0.31.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.31.0)。 可以查看这些链接，里面有关于新功能摘要和更新日志的全部内容。
- **IPFS明星项目：**
  - [DTube - decentralized video platform](https://d.tube/)
  - [JanusVR viewer for Decentraland (content from ipfs)](https://www.youtube.com/watch?v=841vXBopH68)
  - [Textile Photos - a digital wallet for your photos, end-to-end encrypted](https://www.textile.photos/)
  - Paratii - distributed curation protocol and streaming engine
  - [Peergos - end-to-end encrypted, p2p file storage and sharing](https://peergos.org/)
- **社区讲座、文章和教程：**
  - _文章_: [Textile: Adding the next million peers to IPFS](https://medium.com/textileio/adding-the-next-million-peers-to-ipfs-76d356352d14)
  - _文章_: [Decentralized code distribution for the future of open source](https://medium.com/textileio/decentralized-code-distribution-for-the-future-of-open-source-2dc58f1153b2)
  - _讲座_: [Real serverless with CRDTs and IPFS (scalarconf)](https://www.youtube.com/watch?v=EscG2aytq10)
  - _讲座_: IPFS Lightning Talks at DWeb Summit
  - _教程_: [Building an interplanetary ĐApp from scratch](https://medium.com/textileio/building-an-interplanetary-%C4%91app-from-scratch-51f9b8be5a74)
  - _教程_: [IPFS Cluster Peer Installer for EC2](https://medium.com/textileio/tutorial-series-setting-up-an-ipfs-peer-4056e6c69612)
  - _教程_: [Code a simple P2P blockchain in Go](https://medium.com/@mycoralhealth/code-a-simple-p2p-blockchain-in-go-46662601f417)
  - _教程_: [From Zero to Interplanetary Hero (browser-based ĐApps with IPFS)](https://medium.freecodecamp.org/from-zero-to-interplanetary-hero-7e62f7d4427)

## 7. 博客和更新的变动

我们正在对我们的博客和更新做一些调整。在[上次更新中](https://filecoin.io/blog/update-2017-q4/)，我们计划每季度至少发布一次更新。我们很遗憾没有达到这个目标——我们知道，对社区中的一些成员来说，这令人失望。因此，本次更新比通常的更新更加丰富。此外，我们正在进行以下改进：

- （1）我们将改变为一系列持续的短小更新，这意味着我们的更新频率不再以季度为单位。
- （2）我们将不再要求我们的更新“代表整个项目”，从而避免因审查而被延迟。我们打算采取更加去中心化的方式，让我们的工作组和每个团队开始通过该博客发布他们自己的更新。
- （3）我们计划发布关于Filecoin各方面的短小文章。这将使我们能够深入地写出Filecoin网络中那些令人激动的特点或组件。
- （4）我们计划扩大作者圈，以此展示我们新的团队成员做出的众多杰出贡献和成功开发。

## 8. 提请注意和声明

**请矿工注意：** 我们觉察到有些公司正在生产和销售“Filecoin矿机”或“Filecoin挖矿硬件”。请注意：我们尚未发布有关Filecoin 挖矿硬件的官方规范，因此这些系统可能会不甚理想或者过度复杂。一旦我们对主网启动（Network Launch）的最优结构有了明确的理解，我们就会发布系统要求的具体规范，以及需要考虑的取舍和硬件推荐。我们建议在发布这些规范之前，不要购买特定用于Filecoin的硬件。

_为什么我们还不发布关于挖矿的硬件需求？_ 我们的目标是尽可能广泛的兼容最少的系统需求。我们希望现有的存储系统能够在最少调整（理想为零调整）的情况下，即可接近最佳的Filecoin矿机。最近对复制证明（目前需要SNARKs）等核心组件的改进极大减少了这些系统管理资源的消耗，同时改进了这些系统的权衡方案。我们可能在短期内还会有更多改进。

**请投资者注意：** 在Filecoin代币销售期间和之后，我们收到了一些报告，有人声称出售Filecoin SAFT或代币，欺骗投资者。我们也知道一些肆无忌惮的交易所声称会挂牌Filecoin和Filecoin衍生产品。请记住，Filecoin代币在网络启动之前无法生效，而SAFT的所有交易限制和其他条款仍然适用。因此，任何挂牌或提供Filecoin、IPFS代币及相关衍生品的交易所和卖方都可能存在欺诈行为。一旦Filecoin网络和代币正式上线，我们将在[官方博客](https://filecoin.io/blog)上宣布。在此之前，我们强烈建议投资者们远离任何声称购买、销售或交易Filecoin代币及衍生品的交易所和实体。

**法律免责声明：** 此更新列出了我们目前的项目计划。随着进一步发展，未来实际发生的情况可能与此不同。请勿依赖任何根据本文作出的推测。

## 非常感谢

感谢您现在和将来的支持！并欢迎和感谢您的推荐、意见和建议。您的帮助加快了我们的发展。

Filecoin 团队
Protocol Labs
