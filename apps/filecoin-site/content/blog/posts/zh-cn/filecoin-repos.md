---
aliases:
  - /zh-cn/blog/getting-started-with-filecoin-repos-and-devnets
author: ""
categories:
  - updates
cover_feature: false
date: "2019-02-14T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  今天，我们很高兴能在GitHub上开放几个repos，并邀请大家在GitHub上加入我们。来吧！来了解Filecoin、使用代码、并为开发做出贡献。正如在之前的更新中所描述的，为了避免干扰和加快开发进展，我们做出了艰难的选择，不公开的开始了我们的repos。
image:
  alt: 开放Filecoin项目Repos
  url: /uploads/mining-community-call-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/opening-repos-cover.webp
title: 开放Filecoin项目Repos
_template: blog_detail_ch
---

今天，我们很高兴能在GitHub上开放几个repos，并邀请大家在GitHub上加入我们。来吧！来了解Filecoin、使用代码、并为开发做出贡献。正如在[之前的更新中](https://filecoin.io/blog/update-2018-q1-q2/)所描述的，为了避免干扰和加快开发进展，我们做出了艰难的选择，不公开的开始了我们的repos。现在，我们已经到达了[下一个里程碑](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.b17ldb17wszo)。如果你是一名开发者、研究者、喜欢冒险的矿工或用户，或者只是想支持我们的努力，在这个令人兴奋的时刻，来参与我们吧！

请注意:Filecoin正在大量开发中。代码每天都在发生着巨大的变化。目前阶段，repos、devnets和其他资源全部用于开发。本发布面向愿意帮助开发Filecoin的开发者、研究者和社区成员。寻求使用Filecoin的矿工和用户应等待未来的发布(可能是[testnet里程碑](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.b17ldb17wszo))。请阅读我们的[入门指南](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/)了解详情。

## 本发布包括什么内容？

几个小时前，我们在GitHub上发布了[Filecoin项目repos](https://github.com/filecoin-project)、开发网络([用户和每日构建的devnets](https://github.com/filecoin-project/go-filecoin/wiki/Devnets))、聊天频道([Slack](https://join.slack.com/t/filecoinproject/shared_invite/enQtNTUwNTI1Mzk5MDYwLTI2MmMxNzNjYjhlYWM3YjQxM2E4MThmM2ZhY2JkYWIxNGVjMGVmNTg3Y2VhZjQ3OGM5ZTc1OGFmZGZhMzZmMTI)、[Matrix](https://riot.im/app/#/group/+filecoin:matrix.org)、[IRC即将发布](https://github.com/filecoin-project/community/issues/4))、[论坛](https://discuss.filecoin.io/)和[项目管理工具](https://app.zenhub.com/workspace/o/filecoin-project/go-filecoin/)。这说明：

- 你可以进入我们的代码库([go-filecoin](https://github.com/filecoin-project/go-filecoin)，[rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs))
- 你可以通过提交issues和PRs来为Filecoin项目作出贡献
- 你可以在[论坛](https://discuss.filecoin.io/)上提出任何问题，并与其他人协作建设Filecoin项目
- 你可以阅读并全程参与我们的研究和开发团队在聊天频道上的所有对话
- 你可以[安装go-filecoin](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started)并设置一个Filecoin节点进行测试
- 你可以[连接到devnet](https://github.com/filecoin-project/go-filecoin/wiki/Devnets)，并与该devnet上的其他节点进行实验性的交易
- 你可以在自己的机器上测试和[基准测试Filecoin的复制证明](https://github.com/filecoin-project/rust-fil-proofs#examples) (PoReps)
- 你可以参与[复制证明优化竞赛](https://github.com/filecoin-project)

**即将开放的几个值得关注的repos:**

- [filecoin-project/go-filecoin](https://github.com/filecoin-project/go-filecoin): Filecoin协议的首个实现
- [filecoin-project/specs](https://github.com/filecoin-project/specs): Filecoin协议软件需求说明
- [filecoin-project/rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs): 复制证明和其他密码学模块
- [filecoin-project/replication-game](https://github.com/filecoin-project/replication-game): 复制证明优化竞赛
- [filecoin-project/research](https://github.com/filecoin-project/research): 还在讨论中的问题、想法和讨论
- 还有[更多](https://github.com/filecoin-project)

并且，正如我们在更广泛的[Q3/Q4更新](https://filecoin.io/blog/update-2018-q3-q4/)中所解释的，还有很多很多。

## 重要提示

**这不是Filecoin 主网启动**。repos和devnets项目主要用于开发者和研究者的测试。矿工**不应**基于当前的任何规格或实现而投资挖掘硬件，因为它们肯定会发生变化。我们将在2019年第一季度末为矿工举办一个问答会议，并在确定日期/时间后通知社区。请在[矿工测试表](https://docs.google.com/forms/d/e/1FAIpQLSfdFpWhJj8OIGA2iXrT3bnLgVK9bgR_1iLMPdAcXLxr_1d-pw/viewform?c=0&w=1)上注册，以便当功能准备好被未来的矿工测试时得到通知。
