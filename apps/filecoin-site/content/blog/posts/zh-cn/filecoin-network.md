---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-02-27T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 存储提供者是Filecoin Network的有机组成部分。本文将全面阐述存储提供者生态。
image:
  alt: ""
  url: /uploads/a-deep-dive-into-the-storage-provider-ecosystem.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/a-deep-dive-into-the-storage-provider-ecosystem.webp
title: Filecoin Network存储提供者生态详解
_template: blog_detail_ch
---

**2022年3月2日**
[**欢迎参与**](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187) **Filecoin存储提供者训练营线上开营活动。训练营由** [**企业存储提供者加速器 （ESPA）**](https://www.web3espa.io/?utm_source=PL&utm_medium=blog&utm_campaign=highlight)**主办。开营活动为潜在的Filecoin存储提供者准备了丰富资源、指南、演示及资讯，详解如何利用Filecoin Network进行商业运营，还有为期6个月的ESPA加速器计划作为进阶选择。** [**开放报名中！**](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187)

许多行业都放弃了专有服务，使用分布式解决方案，存储空间也不例外。Web2.0下的商业模式以中心化服务器为基础，而点对点网络将这些商业模式转化为Web3.0中的开放式服务，通过激励社区实现运转。

Filecoin Network基于IPFS协议创造了一个算法的市场，在现存的云服务之外另辟蹊径，提供了开放式服务选项。该市场是一个分布式的存储网络，解决了定价过高、服务商捆绑、对手风险等用户端常见问题，同时降低了服务提供商的准入壁垒。

为此，Filecoin Network需要调和各类独立的网络参与者。用户、开发者、token持有者、生态伙伴与存储提供者共同组成了Filecoin [海岛经济](https://filecoin.io/blog/posts/filecoin-s-island-economy/)。

## 存储提供者的作用

存储提供者（SP）对Filecoin Network来说至关重要。他们以分布式和去信任方式在网络中出借闲置的存储空间。

Filecoin里的SP与其他区块链中的“miner”有 [相似性](https://docs.filecoin.io/storage-provider/how-providing-works/)。任何人都可以加入Filecoin成为SP，负责网络中的关键任务，而重中之重就是增加存储容量——网络的首要资源。

当SP提供的存储达到10 PiB，便可以提议添加新区块来记录数据存储和检索交易。与区块链的工作量证明相似，网络将奖励添加新区块的提议。（不过，Filecoin的共识是通过*有用* 工作量证明达成的，后文将解释这一选择的意义。）

SP参与存储与检索交易的能力与其运作能力同样重要。存储与检索交易是SP与用户的触发点，SP通过为链上添加存储空间获得报酬。

总的来说，SP构成了Filecoin分布式存储市场的基石，SP的经营活动也是衡量网络稳健性的标准之一。想了解Filecoin Network的价值、路线以及分布式存储的未来发展，就必须理解SP生态。

## 存储提供者相关数据

主网上线以来，Filecoin Network面向用户的[存储力](https://filecoin.io/blog/filecoin-guide-to-storage-mining/#storage-power)稳步提升。SP数量已达3,876，其中头部SP提供了147.65 PiB存储空间。目前网络总存储力超过[15.6](https://dashboard.starboard.ventures/storage) EiB。

![](/uploads/image6.webp)*过去一年Filecoin的存储力增长情况 （来源：* [*https://filscan.io/statistics/power*](https://filscan.io/statistics/power "https://filscan.io/statistics/power")*）*

网络存储的信息量也有相应提升，现有[36.95 PiB](https://dashboard.starboard.ventures/deals)在用存储分布于1,623,282笔活跃交易。[Filecoin+](https://www.youtube.com/watch?v=-kxNpRiEd_c)交易的信息存储量尤为突出，达到16.1 PiB，接近总量的半数。（Filecoin+是社区治理项目，当认证客户通过交易存储真实数据，SP会收到倍数奖励。）

![](/uploads/image4.webp)*2021年7月以来Filecoin Network成功存储交易数量增长情况 （来源： Protocol Labs）*

这样的成绩离不开全球各地大大小小存储提供者的活跃表现。

![](/uploads/image3.webp)*全球Filecoin SP分布集中区域（来源：Protocol Labs）*

## 存储提供者的规模

SP生态的参与者种类繁多，这也符合网络设计之初的理念。Filecoin是无准入限制网络，向所有人开放，企业级SP和小型及个人SP都可以从中找到发展机会。

这是因为网络采用存储证明共识算法取代单纯的哈希率，所以使用有用资源可获得奖励。这一算法使Filecoin区别于传统工作量证明网络，在后者的框架下，部分miner可能掌握过多算力，在工作量证明过程中占比过高。

为解决这一问题，Filecoin综合运用[复制证明](https://spec.filecoin.io/#section-algorithms.pos.porep)加密机制和[时空证明](https://spec.filecoin.io/#section-algorithms.pos.post)加密机制。二者结合使得SP可以向客户证明数据得到了高冗余度且持续的存储。加密机制对SP生态多样性的主要贡献在于它将SP纳入了区块奖励机制，奖励与SP通过封装和维护交易为网络增加的存储力成正比。

如此一来，各种规模的SP可在健康的生态环境中和谐共存，满足不同用户群的存储需求。诚然，拥有大量存储资源的SP有一定优势，但经营效果不完全取决于存储资源体量，因为只要交易容量满足最低要求，SP就可以达成交易。

## 小型及个人存储提供者

一般消费者配置无法达到Filecoin SP所需[硬件要求](https://docs.filecoin.io/storage-providers/skills/storage#general-hardware-requirements)。但是，成为小型或个人SP是切实可行的。Filecoin文档中有许多[案例](https://docs.filecoin.io/storage-provider/storage-provider-architectures/#protocol-labs-example-architecture)可作为参考。在这两段视频 [教程](https://www.youtube.com/watch?v=LKMjCgo-fkA)中，存储提供者Benjamin Hoesjbo分享了他作为个人SP的运作方法。

本着同样的理念，Filecoin鼓励多种参与网络的方式，每种方式对资源的要求不同。没有达到10 TiB承诺容量[要求](https://docs.filecoin.io/networks/)的个人及小型SP，也可参与共识过程从而成为网络的一份子。

他们也可以从存储和检索交易中获得奖励并扩大经营。BigChungus就沿这一路线从SP转型为共识节点，详情见[视频](https://www.youtube.com/watch?v=e71Jb8QAg7E)。

Filecoin社区还推出了其他工具和项目，让个人SP与大规模SP共同发展。

- [SnapDeals](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s)
  是一项新上线的拓展功能，客户数据存储更快捷。它能将平均6小时的存储上链时间压缩为1小时，减轻小型SP的初期计算开销。
- 前文的Filecoin+项目允许小型SP专注于已验证用户，与这些用户成功达成交易后，SP的存储力评分将有十倍的增长（即提高了参与区块奖励共识过程的几率）。
- 有了SnapDeals和Filecoin+，小型和个人SP可以通过Filecoin+交易快速升级现有存储扇区，从奖励倍数中获益。
- [Filecoin Storage ProviderX奖学金计划](https://filecoin.io/blog/posts/filecoin-minerx-fellowship-program/)也是针对全球小型SP推出的支持项目。

SnapDeals的出现，以及Filecoin市场中Filecoin+交易的增加表明网络中不同体量的SP享有同等机遇。与此同时，Filecoin MinerX奖学金计划将选出有利于SP社区的项目，促进SP生态进一步发展。

## 大型及企业级存储提供者

能够满足海量存储需求的参与者也是Filecoin存储提供者生态的重要成员。他们为USC Shoah Foundation、Wikipedia、Internet Archive等信赖Filecoin Network以信息立身的组织提供持久性存储。

曾经，海量数据集的保存完全依赖云服务等中心化存储提供者。Filecoin带来了更具韧性和性价比的[方案](https://www.youtube.com/watch?v=sL1N88QbWNI)，而让这种服务成为可能的就是SP社区。

目前这个生态已汇集规模各异的SP，能够充分满足客户需求。

![](/uploads/image5.webp)*SP生态存储力一览，以PiB为单位（来源：Protocol Labs）*

随着[Project Gravity](https://filecoin.io/blog/posts/filecoin-project-gravity-a-sales-referral-program/)的出现，能处理海量数据集的存储力会面临需求增长。Project Gravity是一个裂变项目，为Filecoin Network吸收此类新用户的社区成员将获得奖励。

## 存储提供者的支持生态

SP拥有分布式大规模生态圈，为参与者打造了稳健的工具，软件和框架，与参与者建立了互利关系。Filecoin对开源的坚持孕育了这套SP支持体系，实现了SP与开发者共同发展。

- [**Lotus**](https://lotus.filecoin.io/)**:** 由Protocol Labs开发，是Filecoin SP主引用节点，SP的必备工具之一。
- [**FilRep**](https://filrep.io/)**:** 有助于提升透明度，它能为任何有需求的人验证SP的历史表现和其他重要指标，比如平均交易价格、承诺容量以及可再生能源购买记录。
- [**Filecoin Green**](https://filecoin.energy/)**:** Filecoin选择有用工作证明作为共识的基础，这一做法比使用工作量证明的区块链更为环保。网络也运用其他特性，比如FilRep体系让SP的运营更清洁，最终实现网络碳中和甚至负排放。

Filecoin Green的开源主页也是提高能源使用透明度的工具，它通过SP的专属标识了解各个SP的能源使用情况，还可以整合全网数据。

![](/uploads/image2.webp)*Filecoin Green主页总结的年初至今月度能源总消耗量（来源:* [*https://filecoin.energy*](https://filecoin.energy "https://filecoin.energy")*）*

- [**PiKNiK**](https://www.piknik.com/): 简化了提供存储的流程，为不具备技术背景的SP提供架设启动全套解决方案。PiKNiK刚刚发布了企业级SP加速器([ESPA](https://www.web3espa.io/))计划，协助企业级SP顺利加入网络。
- *如有兴趣加入线上训练营与同业交流，获取资源和训练模块并与行业领袖对话，*
  [*现在注册*](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187) *2022年3月2日ESPA线上活动。*

- [**CIDGravity**](https://www.cidgravity.com/): 一款由Filecoin社区开发，轻巧且安全的工具，为SP提供定价与客户管理方案，设置方便快速，操作界面简洁。
- [**Bitbot**](https://github.com/textileio/bidbot): 一款SP可选用的增值应用，能够处理存储拍卖相关内容。
- **其他Filecoin区块浏览器，数据整合和分析工具**: [Filscan](https://filscan.io/)、Fileapp、Grafana、[Filecoin Network Health Dashboard](https://dashboard.starboard.ventures/) 等站点通过可视化、数据点提供关于Filecoin Network及其状态的分析洞见，大多包含SP和交易专题。

## 欢迎存储提供者的加入

主网发布后，存储提供者生态在短期内迅速成长，树立了分布式存储的里程碑。在Filecoin Network提升全球覆盖和容量的过程中，SP发挥着重要作用。世界各地所有网络参与者都会感受到Filecoin社区的互助性和凝聚力，社区将携手迈向去中心化的互联网。

## 资源

有意加入SP生态，成为Filecoin Network存储提供者，无需顾虑自身体量和地理位置，不妨从核心文档开始了解，不断发现更多优质资源。

关于Filecoin存储提供者的更多资讯：

- Filecoin [白皮书](https://filecoin.io/filecoin.pdf)
- SP相关内容，来自Filecoin [技术参数](https://spec.filecoin.io/#section-systems.filecoin_mining)
- Filecoin [官方文档](https://docs.filecoin.io/storage-provider) on Storage Providers
- Lotus [官方文档](https://lotus.filecoin.io/docs/getting-started/what-is-lotus/)
- Filecoin SP [研讨会](https://www.youtube.com/watch?v=rwz8XIs6miE&t=1944s)，Magik6k主持
- Filecoin SP特别[播放列表](https://youtube.com/playlist?list=PL_0VrY55uV1_Z83vRQq5DsSI20X1YWO4q)
- ProtoSchool出品，Filecoin验证存储[教程](https://proto.school/verifying-storage-on-filecoin)
- 设计Filecoin经济[论文](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf)
- 指南：
  - [Filecoin存储提供者指南](https://filecoin.io/blog/posts/a-guide-to-filecoin-storage-mining/)
  - [Filecoin的海岛经济](https://filecoin.io/blog/posts/filecoin-s-island-economy/)
  - [Filecoin的加密经济建设](https://filecoin.io/blog/posts/filecoin-s-cryptoeconomic-constructions/)

**探索与互动平台：**

- [Website](https://filecoin.io/provide)
- [GitHub](https://github.com/filecoin-project)
- [Slack](https://filecoin.io/slack)
- [Twitter](https://twitter.com/Filecoin)
