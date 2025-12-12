---
aliases: []
author: ""
categories:
  - updates
date: "2022-06-01T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: "06/01/2022 12:00 PM"
image:
  alt: ""
  url: /uploads/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
title: 存储提供者(SP)Filecoin数据聚合器概览
_template: blog_detail_ch
---

Filecoin生态有一套范围广泛的工具，用于提供网络相关的准确信息，并让参与者以更有效的方式活跃起来。其中大部分是由社区独立开发和维护，并服务于Filecoin岛屿经济不同部分的特定需求。

对于存储提供者来说，分析和数据整合是重要资源。有此资源，存储提供者则可以根据其在数据存储市场的竞争地位做出重要决策、评估当前用户的偏好并查看Gas费用和网络的整体状况。

## 通用指标

虽然有许多可用资源来提供特定信息，但也有普遍存在的通用指标。让我们来看看这些标准指标的含义：

**总存储功率:** 当前网络中所有可用的质量调整存储空间的总和。

**链上存储提供者:** 当前在网络中活跃并提供存储能力的存储提供者数量。

**24小时平均区块奖励:** 最近24小时的平均FIL值，即调整后的存储功率对应的总区块奖励比例。

**基本费用:** 使用Filecoin网络所收取和消耗FIL的实时费率。

**承诺质押总量:** 存储提供者承诺并质押的FIL总量，作为其承诺能力的保证。

**平均出块时间:** 最近24小时内Filecoin网络中存储提供区块之间的平均时间。

**区块高度:** 网络中存储提供的区块数量。

## 不同数据聚合器一览

除了这些通用指标，每个分析工具和数据聚合器还可以更细化并提供更具体的信息，可供存储提供者选择的一些选项如下：

Filecoin Stats:该基本工具是基于Grafana开源分析和可视化应用程序建立，可以查看所有主要数据点，包括总存储功率、链上存储提供者、Gas费用和当前顶级存储提供者列表。

[Filecoin信誉系统](https://filrep.io/): Filecoin的设计初衷是要让网络上的每个交互都在链上被记录，让参与者具有彻底的透明度。对于存储提供者来说，这意味着其商业行为的重要信息都可以被跟踪，从而为客户的存储交易决策提供参考，其中包括了承诺容量和平均存储交易价格以及可再生能源消耗。这些信息的汇总构建了每个存储提供者在网络上声誉的有效图景。

[Filecoin网络健康仪表板](https://dashboard.starboard.ventures/):对存储提供者可能特别感兴趣的Filecoin 网络某些指标，该工具提供了的更详细的信息。其中包括按方法细分的行业入门解析、存储交易发布的平均Gas费用以及不同的每日活跃交易细分。此仪表盘由Starboard Ventures构建和维护，该团队专注于Web3数据经济和网络分析。

[Filecoin存储提供者声誉仪表盘](https://dashboard.starboard.ventures/dashboard):该工具类似于Filecoin信誉系统，是Starboard Ventures为存储提供者提供的声誉聚合器。除了能提供个别存储提供者交易和检索的信息，此工具还可以查看一些有趣的指标，例如产能增长、Gas效率和存储可靠性。通过汇总以上信息可以确定存储提供者的总得分。Starboard还设计了一个比较工具，用于并列评估不同的存储提供者。

[Filscan](https://filscan.io/):所有关于Filecoin网络的基本数据都可以在Filscan上获取。除此之外，该网络浏览器还提供了重要的统计数据，比如全球存储提供者地图、Gas基本费用变化和网络整体FIL分配情况。对于存储提供者来说，更重要的是，Filscan是通过专门的存储提供者部分来提供分析工具以及用于确定存储奖励的计算器。

[Filfox](https://filfox.info/en):这款适合移动设备的网络浏览器提供了Filecoin区块链的网络概述，以及其他常见指标，如存储提供者排名、Gas统计和交易列表等。它是Filecoin数据服务的一站式易用平台。

Filscout:这个 IPFS联盟的工具提供了Filecoin网络重要部分的详细信息和可视化信息。它通过孤块列表和大额转账记录，以及Gas成本趋势统计和FIL流通分析，对其他聚合器的功能进行了扩展。

无论您是刚开始还是准备继续Filecoin存储提供者之旅，请务必熟悉以上工具。关于如何应用这些工具的更多信息，请阅读存储提供者[生态](https://filecoin.io/blog/posts/a-deep-dive-into-the-storage-provider-ecosystem/)或存储提供者[经济学知识](https://filecoin.io/blog/posts/the-economics-of-storage-providers/)。
