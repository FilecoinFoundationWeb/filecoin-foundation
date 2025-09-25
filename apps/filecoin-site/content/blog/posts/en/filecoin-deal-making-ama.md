---
aliases: []
author: ""
categories:
  - updates
  - events
date: "2022-02-23T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On February 17th, the Filecoin community was engaged in an Ask Me Anything
  session about deal making in the Filecoin Network. We covered topics ranging
  from SnapDeals to the Boost Alpha release.
image:
  alt: ""
  url: /uploads/1327-filecoin-blog-post-header-deal-making-ama-recap.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/1327-filecoin-blog-post-header-deal-making-ama-recap.webp
title: Filecoin Deal Making AMA Recap
_template: blog_detail
---

On February 17th, the Filecoin community was engaged in an Ask Me Anything session about deal making in the Filecoin Network. We covered topics ranging from [SnapDeals](https://youtu.be/YIYfKlt2NhE) to the [Boost](https://github.com/filecoin-project/boost#readme) Alpha release.

{{< youtube id="_9fgQHVMuVA" title="Filecoin Deal Making AMA" >}}

Read this post for a summary of the questions that came up and the answers provided. Be sure to join the conversation next time by tuning in on [Slack](https://filecoin.io/slack), [WeChat](https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF), or [Twitter](https://twitter.com/Filecoin).

## Q & A

_Some questions and answers have been edited for readability._

**Q: In terms of computing power, how would you compare the effort required for a 32GB sector between a regular sealing pipeline (PC1 and PC2/C2) with SnapDeals?**

A: There’s a detailed discussion about SnapDeals performance on [GitHub](https://github.com/filecoin-project/lotus/discussions/8127) you can check out. Note that 32 and 64 GiB SnapDeal times should be roughly the same, the discrepancy is probably due to differing hardware.

**Q: Are there any additional costs in FIL for “snapping” in deals to existing Committed Capacity sectors other than collateral top-up for verified deals?**

A: There are gas costs for the message. Also, in the event the upgraded sector has a pledge value higher than the CC sector’s pledge, the difference must be locked. This is likely the case when verified deals are included in the SnapDeals upgrade.

**Q: Is the Storage Provider expected to have the disk space available for twice the size of the updated sectors during the transition on the same partition? If you have a Storage Provider with multiple disk paths for long-term storage, can the “update” sectors files be located on a different disk than the original “sealed” file?**

A: Yes, during the replica update you will be keeping existing data for the sectors along with the newly computed data. The reason to keep the original CC sector is that [_WinningPoSt _](https://filecoin.io/blog/posts/a-guide-to-filecoin-storage-mining/#proof-of-spacetime)could be challenged for 900 epochs.

These two files are not constrained to be on the same disk, they can be located on different disks in general. In particular, if the worker with the “sealed” file is out of disk space, the sector manager can put the corresponding “update” file on another disk.

The Lotus documentation has a useful [guide](https://lotus.filecoin.io/docs/storage-providers/custom-storage-layout/#custom-location-for-storing) on how to specify custom storage locations.

**Q: If fast retrieval is set, will the SnapDeal properly place the unsealed file in the directory?**

A: Yes.

**Q: Does Boost maintain the same interface to the Lotus mining subsystem?**

A: Yes, Boost maintains the same interface to the lotus mining subsystem. It should be a direct replacement of lotus-miner that is running “markets.”

**Q: Will Boost allow scaling multiple market nodes?**

A: We are not actively working on scaling to multiple markets or Boost nodes, but this will certainly be possible in the future. We are building with this in mind, but this is not on the direct roadmap right now.

**Q: Where can you apply to test the Alpha release of Boost?**

A: You can access the source code on the GitHub [page](https://github.com/filecoin-project/boost) for Boost. When Alpha is released, we’ll update the README.md and add documentation on how to try it out and replace the existing markets process.

**Q: Has there been any formal dispute method agreed by the** [**Filecoin+**](https://docs.filecoin.io/store/filecoin-plus/) **committee for clients or SPs that suspect others of abusing their DataCap?**

A: The framework for the current process can be viewed on GitHub in the Notary Governance [section](https://github.com/filecoin-project/notary-governance/#dispute--audit-framework). However, we are still working on improving and further defining this. Formal disputes can result in revoking of notary status, removal of DataCap for allocation, and with FIP-0028, the option to remove remaining DataCap balance from a client address.

Improving this process is an active and ongoing conversation in the community. If you have ideas or suggestions for this, please open up a Discussion topic in the Notary Governance repo or join us at an upcoming governance call!

**Q: Deal making takes place offline at the moment. Will it ever be on-chain? If so, what rules would govern onchain deal making?**

A: Currently, deal data transfer can be both online or offline. However, all the deals are being published on-chain via the PublishStorageDeals message.

I think what you are asking about is there being an on-chain mechanism to match client data and Storage Providers. We hope this will be possible to build on the Filecoin Network state machine using [FVM](https://fvm.filecoin.io/)-enabled smart contracts. The rules will be up to the author, organization or community that develops such a smart contract.
