---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - events
date: "2022-02-23T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  2月17日，Filecoin社区参与了任意问答环节（AMA），探讨Filecoin网络里达成交易提议的事宜。我们涵盖了从SnapDeals到Boost
  Alpha版本等方面的问题。
image:
  alt: ""
  url: /uploads/1327-filecoin-blog-post-header-deal-making-ama-recap.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/1327-filecoin-blog-post-header-deal-making-ama-recap.webp
title: 回顾Filecoin Deal Making AMA
_template: blog_detail_ch
---

2月17日，Filecoin社区参与了任意问答环节（AMA），探讨Filecoin网络里达成交易提议的事宜。我们涵盖了从[SnapDeals](https://youtu.be/YIYfKlt2NhE)[Boost](https://github.com/filecoin-project/boost#readme)Alpha版本等方面的问题。

可以阅读下面的文章来了解活动上提出及得到解答的问题。下次记得关注[Slack](https://filecoin.io/slack)、[WeChat](https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF)或[推特](https://twitter.com/Filecoin)等渠道来加入讨论。

## Q & A

_为了可读性，部分问题和答案已经过编辑。_

**Q: 就算力而言，要封装一个32GB大小的扇区时，常规的封装（sealing)管道（PC1 and PC2/C2）与SnapDeals有什么不同？**

A: 在[GitHub](https://github.com/filecoin-project/lotus/discussions/8127) 有SnapDeals性能问题上的讨论，你可以去看一下。注意，32和64 GiB大小的SnapDeal花费的时间是差不多的，如果出现了差别，那应该是不同硬件产生的影响。

**Q: 除了为已经验证的交易提议增加抵押外，对现有已投入容量扇区（Committed Capacity sectors进行“snapping”交易提议还有什么额外的FIL开销吗？**

A: 这个信息需要耗费gas。此外，如果升级的扇区抵押的价值高于已投入容量扇区抵押的价值，差额部分需要被锁定。当已验证交易提议被包含到SnapDeals升级时，这就是很可能发生的情况。

**Q: 在相同的分区进行迁移时，存储提供者是不是要准备双倍的扇区空间？如果你有存储提供者是有多个磁盘路径来做长期存储的话，升级的扇区可以放在原来“封装了”的文件外的其他磁盘吗？**

A: 是的，在复制升级（replica update）期间你会同时保留现有扇区数据和新计算出来的数据。保留原来已投入容量扇区的原因，是正如[_WinningPoSt _](https://filecoin.io/blog/posts/a-guide-to-filecoin-storage-mining/#proof-of-spacetime)所述，它可能会在900个epochs的期间受到挑战和检查。

这两部分文件并不局限于同样的磁盘上，总的来说它们可以放在不同的磁盘。具体说，如果有“封装完”文件的worker没有可用磁盘空间了，那么扇区管理者可以将对应的“更新”文件放在另一个磁盘上。

Lotus文档的实用[指南](https://lotus.filecoin.io/docs/storage-providers/custom-storage-layout/#custom-location-for-storing)讲述了指定存储位置的方法。

**Q: 如果设置了快速取回，SnapDeal会正确将未封装的文件放在该目录里吗？**

A: 是的。

**Q: Boost保留了与Lotus mining子系统一样的接口吗？**

A: 是的，Boost保留了与Lotus mining子系统一样的接口。它应该可以直接替代正在运行市场机制的lotus-miner。

**Q: Boost会支持多个市场节点的扩展吗？**

A: 我们目前还没有研究扩展到多个市场或Boost节点的工作，不过这在未来肯定是有可能的。我们的工作已经想到了这点，不过还没将它提上目前的路线图。

**Q: 什么地方可以测试Boost的Alpha版本发布？**

A: 你可以在Github的Boost [页面](https://github.com/filecoin-project/boost)访问源代码。在Alpha版本发布后，我们会升级README.md并增加文档来描述测试方法及替代现有市场流程的信息。

**Q: 如果有用户或存储提供者怀疑其他人滥用其DataCap限额，** [**Filecoin+**](https://docs.filecoin.io/store/filecoin-plus/) 委员会有什么正式的争议解决机制？

A: 当前的流程框架可在Github上的公证治理（Notary Governance） [版块](https://github.com/filecoin-project/notary-governance/#dispute--audit-framework)查看。不过，我们还在完善和进一步定义这个部分。正式的争议解决机制可以实行公证状态的撤销、移除DataCap限额分配，还有FIP-0028来从用户地址移除剩余的DataCap余额。

社区在活跃及持续地讨论如何改善这个流程。如果你有想法或建议，请在公证治理（Notary Governance）的Github repo里开个新话题，或加入我们将要开启的治理会议！

**Q: 目前交易提议协商是离线进行的。以后会可能在链上进行吗？如果可以，会由什么规则来治理？**

A: 当前，交易提议数据的传输可以是在线或离线的。不过，所有的交易提议会通过PublishStorageDeals消息来发布到链上。

我觉得你是想问有没有在线的机制来对客户的数据和存储提供者进行匹配。我们希望这可能在Filecoin网络状态机上实现，方法是使用[FVM虚拟机](https://fvm.filecoin.io/)支持的智能合约。相关规则会由该智能合约的作者、机构或社区来决定。
