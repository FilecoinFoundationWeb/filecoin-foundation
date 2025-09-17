---
aliases:
  - /zh-cn/blog/filecoin-testnet-phase-2-is-here
author: ""
categories:
  - updates
  - events
date: "2020-05-14T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
draft: true
excerpt: 今天对于Filecoin项目来说是重要的一天。六个月前，我们启动了Filecoin测试网的第一阶段。从那时起，我们一直在进行bug的修复，协议审查，对协议和产品进行重要的改善，执行优化以及努力运行具有多个可互操作节点的网络。现在，我们已经做好准备启动测试网第二阶段。
image:
  alt: ""
  url: /uploads/testnet-phase-2-launch-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/testnet-phase-2-launch.webp
title: Filecoin测试网第二阶段现已启动!
---

今天对于Filecoin项目来说是重要的一天。六个月前，我们启动了 [Filecoin测试网](https://filecoin.io/blog/filecoin-testnet-is-live/)的第一阶段。从那时起，我们一直在进行bug的修复，协议审查，对协议和产品进行重要的改善，执行优化以及努力运行具有多个可互操作节点的网络。现在，我们已经做好准备启动测试网第二阶段。

## 第二阶段都包括什么？

测试网第二阶段是主网启动之前的最后一个主要里程碑。我们看一下它主要包括了哪些部分。

测试网第二阶段包括:

- **两个可互操作的Filecoin实现:** [**go-filecoin**](https://github.com/filecoin-project/go-filecoin) 和 [**lotus**](https://github.com/filecoin-project/lotus/) 这两个实现用户都可以使用它们来加入测试网第二阶段。通过多个实现一起来启动一个安全的网络是[网络安全策略的重要部分](https://filecoin.io/blog/announcing-lotus#why-multiple-implementations)，我们很兴奋能够有两个可互操作的实现为这次启动做好准备。
- **安全证明(WinningPoSt和WindowPoSt) :** Filecoin时空证明(PoSt)机制的之前版本是依靠概率论来证明理性的矿工将维护其所有扇区并在相应的时间正确地存储用户数据。经过分析，我们无法证明这种机制能够为基于安全存储算力的共识和可验证的存储市场提供保障。因此Filecoin协议和实施方案现在使用*WinningPoSt* 和 _WindowPoSt_，这要求矿工要定期演示其声明的所有扇区的可用性。此机制用于消除在测试网第一阶段中使用ElectionPoSt机制的需要。这样反而大大减少了运行节点所需的扇区样本总量，最终降低了成本并提高了Filecoin存储的可靠性。您很快就能在[Filecoin协议规范](https://filecoin-project.github.io/specs/)中阅读WinningPoSt 和WindowPoSt的详细说明。
- **Drand:** [Drand](https://github.com/drand/drand) 是一个分布式随机信标网络。Drand网络上的节点共同工作，使用双线性对和阈值密码，以固定的间隔生成集体的，可公开验证的，公正的和不可预测的随机值。 这些随机值可用于像Filecoin这样需要无偏随机性源的应用程序。现在Filecoin实现用Drand作为领导人选举的外部随机性源，来降低压迫攻击和其他共识攻击的风险。目前, **go-filecoin** 和 **lotus** 会从Drand测试网中提取Drand值。对于启动主网，我们计划与多个团队合作，以启动支持主网的Drand网络。我们希望这个可公开验证的随机信标可以对需要无偏随机性的其他协议带来帮助。
- **加密经济结构:** Filecoin结合使用了现有的加密经济模型和许多新的结构，以满足网络的独特要求。我们在博客上发布了一个 [这个结构的总体概览](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/)。对于测试网第二阶段的启动，Filecoin的实现现在包括了一个混合的指数衰减函数，用于区块奖励，承诺的容量扇区，根据质量调整过的存储能力以及改善了的抵押担保机制。这些机制旨在鼓励存储矿工提高网络的长期健康和服务质量。在测试网第二阶段，我们将测试和完善这些机制，并更新我们的加密经济参数。
- **新的文档网址:** [我们的新的文档网址](http://docs.filecoin.io/) 将成为开发人员，客户和存储矿工的文档资源。它包括Filecoin协议中关键概念的解释，还提供有关如何运行**go-filecoin**，**lotus**，以及如何加入测试网第二阶段的指南。
- **安全审查:** 除了Filecoin团队成员进行的全面而持续的审查外，我们已经开始与世界上最好的安全公司合作，在发布前审核十几个Filecoin的关键的库和系统。

测试网第二阶段的启动包含功能接近完整的实现。在接下来的几周中，我们将完成 **go-filecoin** 和 **lotus** 上的功能开发工作，升级我们的复制证明（PoRep），并继续测试，错误bug以及性能改进。在接下来的几个月里，我们还会有网络升级和几次网络重置，因为我们将努力确保Filecoin可以在几个月后启动主网。

## 如何参加测试网第二阶段

**加入我们的网络!** 无论你是一位存储矿工、用户或者开发者，理解Filecoin如何运作以及它能够如何支持你的用例的最好的方式就是运行一个Filecoin实现来加入我们的网络。请访问[Filecoin文档网站](https://docs.filecoin.io/)来了解更多关于如何运行 **go-filecoin** 或者 **lotus** 来加入测试网第二阶段。

**攻破网络并报告bug:** 你可以帮我们找到bug来更好地帮助我们！

- 如果你找到了协议中的一些问题，请在此提交:[specs repo on GitHub](https://github.com/filecoin-project/specs/issues)
- 如果你在lotus中发现bug，请在此提交:[lotus repo on GitHub](https://github.com/filecoin-project/lotus/issues)
- 如果你在go-filecoin中发现bug，请在此提交:[go-filecoin repo on GitHub](https://github.com/filecoin-project/go-filecoin/issues)
- 如果你需要报告一个协议或实现里的安全隐患，请参考[公布规范](https://github.com/filecoin-project/community#security-issues-and-disclosures)

**开始创建吧！** 每周，我们都会看到新的开发人员探索并使用Filecoin作为其应用程序的存储平台。我们一直在Filecoin社区亮点系列介绍社区中的一些用例和开发人员，他们正在构建基本工具和服务。比如，[Textile](https://filecoin.io/blog/community-andrew-hill-textile/)正在为Filecoin应用开发者开发plug-and-play工具以及 [Small Data Industries](https://filecoin.io/blog/community-ben-fino-radin-sdi/)正在运用Filecoin网络创建一些工具来归档和保存世界上的艺术品记录。

如果你是一位感兴趣在Filecoin网络开发的开发者，希望你快来和我们交流！请来这里联系我们 [filecoin-collab@protocol.ai](mailto:filecoin-collab@protocol.ai).

## 还有其他问题？

**欢迎参加测试网第二阶段和胡安贝尼的问答活动。**

在**周二, 五月十九日, 北京时间上午十点**，欢迎来参加和Filecoin项目创始人胡安贝尼的线上问答活动。一小时的时间里，胡安和其他几位Filecoin开发者会在线上回答大家关于测试网第二阶段和主网上线的问题。

如何参加:

- 在[Filecoin项目Slack页面](https://filecoinproject.slack.com/) [注册一个账号](https://filecoin.io/#community)。
- 你需要Sli.do链接进入活动页面来提出问题。在五月十九日上午十点，我们会把活动链接发在Slack的 **#fil-ama** 频道还有微信中。
- 请在参加问答之前阅读 [Filecoin社区行为准则](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md)。请大家在活动中互相尊重。
- 这是一个提出有关Filecoin技术和测试网第二阶段的问题的机会–请不要讨论投机性话题，例如代币价格，交易所等。
- 在活动期间，我们将尽可能多地回答问题，但是根据问题的数量，我们可能无法回答所有人的问题。
- 活动结束后，我们会在Filecoin [博客](https://filecoin.io/blog) 上发布问答环节的摘要。

期待大家的参加！

## 感谢

感谢在过去的几个月中，耐心地测试和改进Filecoin的数千矿工，开发人员，客户和测试人员。您为改善Filecoin网络和协议的安全和性能做出了宝贵的贡献。

最终，Filecoin的使命是为人类信息创建一个分布式的，高效且强大的基础。感谢大家的努力以及Filecoin的研究和工程团队的努力，我们比以往任何时候都更接近启动一个由有价值的服务，可靠的存储服务和繁荣的分布式经济赋能的公链。

感谢您加入这个全球化的社区。我们期待着与您继续建设这一技术和生态系统。
