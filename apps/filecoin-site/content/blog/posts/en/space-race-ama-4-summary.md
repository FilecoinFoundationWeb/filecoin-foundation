---
aliases:
  - /blog/space-race-ama-4-summary/
author: ""
categories:
  - updates
date: "2020-09-28T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As a part of the Space Race events program, the Filecoin team are hosting
  weekly live AMA’s with the Filecoin community.
image:
  alt: "Space Race AMA #4 Summary"
  url: /uploads/sr-live-ama-header-4.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sr-live-ama-social-4.webp
title: "Space Race AMA #4 Summary"
_template: blog_detail
---

As a part of the Space Race events program, the Filecoin team are hosting weekly live AMA’s with the Filecoin community. On September 23rd our team hosted our fourth AMA answering 20+ questions on Space Race 2 and Filecoin mining.

A summary of the answers from our Q&A is below. We look forward to hosting more sessions like this as mainnet launch approaches! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on [Wechat (Filecoin-Official)](https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

Most questions and answers are quoted directly, some are edited for readability.

**Will there be a specific reward structure for the SR2 Orbital Burn and Slingshot?**

Yes, we will have a specific reward structure for both tracks of Space Race 2.

For Slingshot, there will be a prize pool distributed among all storage participants who are eligible for rewards. The size of the Slingshot prize pool is determined by the total amount of data stored on the network. The more data we all store collectively, the greater the size of the prize pool that will be unlocked. The final prizes will be distributed proportionally among all Slingshot participants according to the amount of data stored by each project.

For Orbital Burn, the primary mechanism for miner rewards will be (1) storage power, in the form of sectors transferred/preloaded into mainnet and (2) FIL, in the form of pledge collateral covered for the transferred sectors.

**Will the Filecoin team address the concerns that have been raised about big miners in SR1 having faked their location to reap the majority of rewards?**

We’ve addressed this a few times before (see a description of the Space Race location verification procedures [on Slack](https://filecoinproject.slack.com/archives/C0179RNEMU4/p1599227081117000)). We won’t publicly comment on individual miners, but everyone gets the exact same treatment. Remember that the Filecoin team has requested and received substantial documentation and conducted out of band verification to verify many miners.

**What are the specific rules of SR2 - Orbital Burn?What proportion of the reward will be transferred to the mainnet**

The specific selection of sectors is not yet finalized. Toward the end of SR2, we will confirm the process for pre-loading sectors sealed during testnet into Mainnet.

**I want to accept deals from Slingshot participants but my deal filter for bots is in place. What do you recommend so I don’t get bad deals that spoil sectors?**

During SR1, testnet FIL was very easy to obtain, which caused gas fee inflation and subsequent DDoS. The FIL adjustments made partway through SR1 should make it much more expensive (and therefore less attractive) to send messages at that volume.

During SR2, for miners who wish to accept Slingshot deals, we recommend removing the dealbot filters.

We are instructing storage clients to treat their testnet FIL very carefully as well, as a scarce resource. Because of this, it’s unlikely you’re going to get bad deals from Slingshot participants.

**I ran 3 small miners and combined them under the Space Race. Will I be able to transfer my sectors as a single combined miner to main-net?**

“Combining miners” was an off-chain convenience to make it easier to rank & distribute rewards. If you ran 3 separate miners during SR1, their sectors (& corresponding power) cannot be transferred or combined into a single miner for mainnet.

**Can miners unlock the pledge collateral covered after mainnet launches if they aren’t willing to mine any more?**

No, if you stop mining, your pledge collateral will eventually be consumed by sector fault fees. The pledge collateral incentive is intended to ease early collateral requirements for mainnet mining.

**Can I seal hard drives that are already entirely filled with data?**

The protocol currently requires empty disks for Committed Capacity sectors, so you’d need to clear your drives first. However, it is possible a future upgrade could enable you to use disks with existing data for committing capacity.

**How did you calculate the reward for mining? Depending on the region a miner who uploaded 1pib earned more FIL than somebody who uploaded 20 pib.**

Space Race rewards were designed to incentivize Filecoin’s big-picture goals: to create a robust, decentralized, and global storage network. In some cases, that means miners in regions with less-established mining capacity were rewarded for their contributions to building a balanced network.

**Will the rewards of the space race be cashed out?**

All FIL rewards from Space Race will vest over 6 months, starting at Mainnet Liftoff.
