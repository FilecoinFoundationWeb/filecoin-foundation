---
aliases:
  - /zh-cn/blog/roadmap-update-february-2020
author: ""
categories:
  - updates
cover_feature: false
date: "2020-02-19T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  在此篇博客文章中，我们将介绍测试网第一阶段上线以来的最新进展，以及更新有关测试网第二阶段和主网上线的路线图。请查看我们2019年第四季度路线图更新和测试网第二阶段更新
  （按此顺序）来获取更多内容。
image:
  alt: February Roadmap Update
  url: /uploads/feb2020-roadmap-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/feb2020-roadmap-update-english-social.webp
title: 2020年2月Filecoin路线图更新
_template: blog_detail_ch
---

在此篇博客文章中，我们将介绍测试网第一阶段上线以来的最新进展，以及更新有关测试网第二阶段和主网上线的路线图。请查看我们[2019年第四季度路线图更新](https://filecoin.io/blog/roadmap-update-2019-q4/)和[测试网第二阶段更新](https://filecoin.io/zh-cn/blog/roadmap-update-february-2020/) （按此顺序）来获取更多内容。

## 我们目前的进展

提醒大家，我们于2019年12月11日启动了[测试网第一阶段](https://filecoin.io/blog/filecoin-testnet-is-live/)，截至本文撰写之时，测试网已经拥有**3.6PiB+** 的存储容量。尽管我们期望Filecoin主网会更加的重量级，但这是一个很好的开端，让我们继续成长！

![查看最新的Filecoin测试网数据请点击](https://filecoin.io/vintage/images/blog/testnet-stats-feb-2020.jpg)

自启动测试网第一阶段的两个月以来，我们为在迈向测试网第二阶段的路上取得重大进展，以下是一些要点：

- **🏗️ 开发方面:**
- 在此期间，我们在代码库的测试和优化上投入大量时间。
- **➕ 网络升级。** 我们发现了漏洞和网络攻击，并且已经解决了这些问题，并通过分叉升级做出了更改。感谢参与发现漏洞和分叉后重新加入网络的社区成员们！
- **⚖️ 链的稳定性。** 我们提高了链的同步速度和稳定性。这些优化显著改善了现有的和新加入的网络参与者的测试网体验。
- **🌐 其他实施方案。** 我们宣布了Filecoin协议的其他两个实施方案——[**fuhon**](https://github.com/filecoin-project/cpp-filecoin) （由Soramitsu用C ++实现）和 [**forest**](https://github.com/chainsafe/forest) (由ChainSafe在Rust中进行)。 我们很高兴[Soramitsu](https://soramitsu.co.jp/)) 和 [ChainSafe](https://chainsafe.io/)) 作为发展Filecoin生态中的早期合作伙伴！
- **🔗 实现互操作。** 对于我们来说，让Filecoin主网上具有多个可互操作的实施方案是实现网络安全的重要目标。**lotus**和**go-filecoin**即将完全实现互操作，我们计划在未来几周内推出这两种实施方案的互操作网络。在我们启动**lotus**和**go-filecoin**的第一个互操作网络后的几周，**fuhon**和**forest**也将准备在网络上实现互操作。
- **🏃‍♀️ 优化复制证明。** 我们对*复制证明机制*(PoRep)的实施方案进行了重大改进。我们开发了Rust中Poseidon哈希函数)的高效实施方案，并将其集成到我们的协议和库中。我们还在SNARK证明中进行了逻辑电路的优化，从而使验证速度提高了**两倍**。最终，这些优化提高了我们SDR复制证明实施方案的速度和性能。
- **🍥 协议方面:**
- **🧬 可执行的参与者规范。** 我们用Go语言为Filecoin协议的参与者编写了完全可执行的规范（规范位于[**specs-actors**](https://github.com/filecoin-project/specs-actors))）。除了实现此规范外，我们还对代码库进行了广泛的测试，以测试不同参与者的功能并验证其正确性。**lotus**和**go-filecoin**现在也直接集成到**specs-actors**库中，极大地增强了我们对实施方案参与者正确性和安全性的信心，而这也是协议的重要安全组件。
- **📈 经济模型。** 我们在加密经济构建上取得了重大进展，缩小了机制和参数的范围使他们能够与网络的长期发展保持一致。在[Cryptoecon Placeholders](https://filecoin-project.github.io/specs/#algorithms__cryptoecon)下的协议规范中列出了经济模型需要考虑的因素，我们正在运行广泛的模拟来验证和确定最终的构建结构。
- **🛡️ 协议安全审核。** Filecoin研究团队深入研究了协议的安全审核，非常仔细地研究了Filecoin的证明、共识和市场设计等等。我们致力于启动一个安全的网络，在启动测试网第二阶段之前，我们将解决本次安全审核提出的所有主要问题。
- **👨‍👩‍👧‍👦 生态亮点:**
- **🌟 Textile.** [Textile](https://textile.io/)团队最近推出了“像123一样简单”的工具用来开发由Filecoin网络支持的应用程序。我们预计这项工作将降低开发新人的进入门槛，增加启动后和未来发布的应用程序的种类和质量。
- **🔥 Terminal.co.** Terminal已在近期上线，使得在IPFS上开发和托管网站更加容易。团队[表示他们的路线图中具有Filecoin的功能](https://twitter.com/terminaldotco/status/1227770882904424449)。我们期待使用Terminal来托管备份在Filecoin的IPFS网站。
- **🛳️ filscan.io.** 查看[Filscan](https://filscan.io)，这是一个Filecoin测试网的区块浏览器！您可以使用Filscan来获取链的进展、查看区块内容、查看消息和每个矿工开采的区块数量以及更多信息！这是探索Filecoin网络的好方法。该项目获得了Filecoin开发者资助计划的第一批款项，我们很高兴看到这些有价值的社区资源能够在测试网上得到积极地投入应用。
- **😎 Ledger Filecoin app.** 本周，[Zondax](https://zondax.ch/)团队推出了[正在进行中的Ledger Filecoin app的repo](https://github.com/Zondax/ledger-filecoin)。此外，Open Work Labs 正在构建一个非托管的Web钱包，该钱包集成了Ledger Filecoin的代码库，[发布的快照](https://twitter.com/openworklabs/status/1225882262291378176)显示了Ledger上Filecoin的本地版本。尽管这项工作仍在进行中，但我们为其未来的发展感到兴奋，希望很快能在Ledger上看到Filecoin!
- **❄️ Trustwallet.** [Trustwallet合并了对Filecoin的支持](https://github.com/trustwallet/wallet-core/pull/811)。该应用程序能够在主网上线时支持Filecoin代币。
- **💾 更多矿工!** 本周我们看到一些挖矿团队在Filecoin主网启动之前的挖矿配置的视频和图片。请看下面的一些配置! ![Filecoin 社区挖矿平台](https://filecoin.io/vintage/images/blog/mining-rigs.jpg)
- **👟 开发者资助。** 我们最近刚刚结束了[Filecoin开发者资助](https://filecoin.io/grants/)的第二批申请。非常感谢社区成员提出的富有创意的建议！我们将很快宣布资助的获得者。如果您错过了这一批，请不要担心，我们正在接受第三批申请，第三批在**2020年3月31日**截止。我们期待看到您的申请！

## 测试网第二阶段：日期更新

提醒大家，我们接下来主要的里程是：

- **测试网第二阶段:** 我们测试网第二阶段将以*多种安全、可互操作的实施方案*启动。从我们[上次路线图更新](https://filecoin.io/blog/roadmap-update-2019-q4/)中，“测试网第二阶段会冻结功能，并在**至少2个月**的时间内进行正式的测试、确认和安全审核。注意，我们主网启动最关键的要求是Filecoin是安全的，我们不会启动不安全的网络。如果我们发现任何安全方面的重要问题，我们将延长这一阶段。” 我们还将在测试网第二阶段中启动一系列的“**生态计划**”，包括我们的可信配置仪式的下一阶段。
- **主网上线:** 我们将有一个月的上线窗口期来完成上线的准备工作来启动主网。

我们的团队正在为启动主网第二阶段火力全开。虽然我们会努力尽快启动测试网第二阶段和主网，**我们有责任确保Filecoin在启动时是安全的。** 我们团队需要更多时间来完成协议的开发、交互、内部的协议安全审核并完善我们的经济模型结构。

此外，引起我们关心的是，目前我们中国社区由于新型冠状病毒的影响，一些中国的社区成员想让我们再等两到三周他们可以安全地复工之时再启动测试网第二阶段。我们听到了这些声音，你们的安全是我们的重中之重！

我们将测试网第二阶段启动延迟**约6周**，以便有足够的时间来进行最终的协议融合和功能冻结。要查看最新的时间安排信息，请访问我们的[Filecoin 甘特路线图](https://app.instagantt.com/shared/s/1152992274307505/latest)。与往常一样，这些日期是我们的“最优估计”，并且可能随时发生变化。我们正在尽力提供准确的时间安排信息，但请大家理解这些信息不是不变的，我们希望这6周的发布延迟能够为中国的疫情情况改善提供足够的时间，并使我们全球的所有社区都可以在不影响安全的前提下参与该网络。

## 下一步的计划

从现在起到测试网第二阶段启动之间我们的重中之重是：

- **启动我们第一个互操作网络。** 如上所述，启动具有多种安全实施方案的网络是我们网络安全策略的关键组成部分。在启动测试网第二阶段之前，我们将启动可互操作的网络，从我们两个内部的实施方案[**lotus**](https://github.com/filecoin-project/lotus) 和 [**go-filecoin**](https://github.com/filecoin-project/go-filecoin)开始。几周后，[**forest**](https://github.com/chainsafe/forest) 和 [**fuhon**](https://github.com/filecoin-project/cpp-filecoin) 将在测试网上实现互操作。要启动我们第一个互操作网络，将需要重启网络并使用**lotus**和**go-filecoin**的最新版本。重置此网络后，任何人都应该能够运行任一实施方案来参与Filecoin测试网。这是一个巨大的里程碑，我们预计在未来几周内启动互操作网络。
- **协议安全审核。** 在启动测试网第二阶段之前，我们将完成内部的协议安全审核并解决所有出现的问题。我们预计协议的安全性审核和问题解决方案将持续进行一个月。

我们正在竭尽全力地使Filecoin网络能够安全启动，像这样的时刻让我们想到了更重要的前景：安全不仅仅是我们协议的功能，**我们深入关心的是使我们的生态如此的人们的安全。** 我们非常感激我们社区一直以来的支持，并很高兴能够与您一起建立这个生态。

加油向前！
