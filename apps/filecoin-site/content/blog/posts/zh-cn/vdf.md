---
aliases:
  - /zh-cn/blog/collaboration-on-vdfs
author: ""
categories:
  - updates
cover_feature: false
date: "2019-04-19T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  今日，Protocol Labs宣布与以太坊基金会达成研究合作，致力于设计和开发出至少一个安全、高效、可用的可验证延迟函数（Verifiable Delay
  Function，以下简称VDF）框架。
image:
  alt: 与以太坊基金会在可验证延迟函数（VDF）上的合作
  url: /uploads/ethereum-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/ethereum-english-social.webp
title: 与以太坊基金会在可验证延迟函数（VDF）上的合作
_template: blog_detail_ch
---

今日，Protocol Labs宣布与以太坊基金会达成研究合作，致力于设计和开发出至少一个安全、高效、可用的可验证延迟函数（Verifiable Delay Function，以下简称VDF）框架。

VDF是最近对密码学原语集合的补充，首次框架于2018年6月发布。从高层次来讲，VDF是一类函数，它至少需要花费一定的时间，即“延迟”，才能**产生**输出（即使你增加了很多处理器），但是其输出能够被轻松迅速的**验证**。对于那些有兴趣深入学习的人来说，[这里](https://reading.supply/@whyrusleeping/a-vdf-explainer-5S6Ect)是一篇对VDF简洁明了的解读，[这里](https://www.youtube.com/watch?v=dN-1q8c50q0&list=PLaM7G4Llrb7y075mVXGmSABDP9Nb_PsBq)是一段描述VDF和一些候选框架的视频。

尽管VDF相对较新，但它已经在区块链研究方面广泛应用。VDF已用于副本证明机制、一致性算法中的主节点选举、随机信标和其他应用中。更重要的是，安全可用的VDF框架设计与研发将是密码学应用和分布式系统的重大突破，其适用性甚至远远超出区块链技术。

然而，为了设计可应用、安全高效的VDF框架，还需要进行其他研究。专用硬件的提速成为安全领域必须解决的关键问题。对于当今大部分VDF框架来说，拥有访问自定义硬件权限的参与者能以比所需理想速度更快的速度生成VDF输出，而这可能会破坏对依赖VDF框架的协议的安全性。

显然，VDF作为加密原语将非常有用。但实现VDF未来在应用方面的潜力，还有很多工作要做。Filecoin和以太坊都将探索VDF在各自协议上的应用，但除了应用于Filecoin, 这也是一项投资，旨在构建公开可验证随机性和VDF，为密码学家和去中心化项目的需求提供新型工具。

## 关于合作的其他事项

Protocol Labs与以太坊基金会正评估和资助那些致力于为运行VDF框架构建优化ASIC体系的初步研究。

对于任何VDF框架，基于速度的延迟时间和用于产生输出的硬件质量都存在可知的不确定性。此次合作的目的是通过预先研发和优化VDF硬件和共享硬件设计来减少这种不确定性。若基于以上的初步努力有效，未来将致力于以下几点：

- 开展竞赛以协作优化VDF框架的实施运行
- 进行多方安全计算以生成必要的VDF安全参数
- 研发优化硬件以运行VDF框架

您可以通过访问 [vdfresearch.org](https://vdfresearch.org/)持续关注并参与此项研究。我们对与其他研究团队和组织的合作非常感兴趣，并将很快宣布初步研究的资助项目。敬请关注！
