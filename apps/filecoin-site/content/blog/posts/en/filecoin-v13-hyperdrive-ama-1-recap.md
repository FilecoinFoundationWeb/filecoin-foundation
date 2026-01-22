---
aliases: []
author: ""
categories:
  - events
date: "2021-06-14T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On June 8th, Filecoin hosted an AMA answering 25+ questions on the network
  upgrade, sealing, onboarding new storage deals and more.
image:
  alt: ""
  url: /uploads/fil-blog-hyperdrive-5.webp
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-hyperdrive-5.webp
title: Filecoin v13 HyperDrive AMA 1 Recap
_template: blog_detail
---

_Since the_ [_Filecoin v13 ‘HyperDrive’ Network upgrade announcement_](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)_, the Filecoin community has been curious about what this upgrade means for the network as a whole. On June 8th, Filecoin hosted an AMA answering 25+ questions on the network upgrade, sealing, onboarding new storage deals and more._

_A summary of the answers from the Q&A is below. We look forward to hosting more sessions like this as the v13 HyperDrive network upgrade approaches, so join us on Tuesday, June 22nd at 6pm PT for a HyperDrive Deep Dive. In the meantime, stay tuned for updates on the_ [_Filecoin community forum_](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)_,_ [_Filecoin Community Slack_](https://filecoin.io/slack)_. You can also find us on Wechat (Filecoin-Official), and_ [_Twitter_](https://twitter.com/Filecoin)_._

**Q: When is the specific network upgrade time?**

A: The core devs have not agreed on a specific upgrade epoch yet, but it is expected to be in the last week of June. The calibration test network was upgraded on Jun 11th at epoch 351519. Follow [this discussion](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228) for the latest updates!

**Q: If a part of a batched** `PreCommit` **or a part of aggregated** `ProveCommit` **message fails the whole batch/aggregate fails as it is with batched publish messages?**

A: For `PreCommitSectorBatch`, yes. For `ProveCommitAggregate`, it depends on the failure. If the aggregate includes pre commits that have already expired there is an eight hour window during which the message will successfully commit the non-expired `PreCommits`. Other individual failures will cause the message to fail.

**Q: The way `BatchGasCharge` is calculated seems to be heuristic? What's the thought process behind the equation and how did a coefficient like 65733296.73 come up?**

A: The constant comes from the average `GasUsage` of pre committing and prove committing one sector. This number will always be an inexact approximation because different miner state configurations naturally have different associated `GasUsage` based on things like number of queued `PreCommits`, size of `AllocatedSectors` bitfield etc.

**Q: To balance between gas reduction and benefit loss caused by delayed (maybe for days) submit, will there be a detailed suggestion about how to set up the policy?**

A: For lotus miners, you will be able to set the min/max number of `PreCommit` to batch or `ProveCommit` to aggregate in the lotus miner config file. You can also configure how long to wait before submitting a batch after crossing the minimum size - which is used to ensure that batched sectors are submitted before the deals/sectors expire. See the configuration instruction preview [on GitHub](https://github.com/filecoin-project/filecoin-docs/pull/898) and default values in lotus can be found in [def.go](https://github.com/filecoin-project/lotus/blob/f9596dd730cdb70e3465450b66299606953c7785/node/config/def.go#L275).

Miners should change these configurations based on their own operation or preferences. Here are some potential inputs that may influence a miner’s decision: current network `BaseFee`, missed revenue in waiting, sealing throughput.

**Q: Does the v13 upgrade affect sealing times of sectors?**

A: No. The expected sealing time stays the same. However, sectors can now wait longer if they are to be aggregated with other sectors for `Pre/ProveCommit` messages.

**Q: Are there any changes to** `SubmitProveCommit` **messages or the timing of them? Will they still be sent for each individual sector?**

A: There is a new `ProveCommitAggregate` message that can `ProveCommit` multiple sectors at once. The message takes an aggregated set of proofs, thus reducing the size of the message, which is a cost saving for miners and reduces the growth of the datastore size. A prove-commitment must be submitted **within 30 days** after the pre-commit has landed on the chain.

**Q: Are the** `ProveCommitAggregate` **and** `BatchPreCom`**'s messages fully optional to their existing per-sector messages?**

A: Yes both `PreCommitSector` and `ProveCommitSector` will remain available to use unchanged after the upgrade. It is not necessary to use the new methods to commit storage to the network, though they are expected to be cheaper in terms of total fees.

**Q: What estimated % decrease is there in gas fees for onboarding new storage deals after the Filecoin Hyperdrive Network upgrade?**

A: GasFees for `PublishStorageDeals` depend on `GasUsage` \* `BaseFee` While HyperDrive does not change `GasUsage` much for `PublishStorageDeals` (the team is working hard on it!), it significantly increases the supply of network bandwidth (or TPS). All else equal, `BaseFee` is likely to decrease. However, the extent to which the decrease may happen depends on latent demand for using the network (using the network for storage onboarding included!). This in turn depends on how much participants leverage the performance improvement through aggregation. Overall, a drop in gas fees for onboarding storage deals is expected compared to the levels today, but the exact manifestation and amount is to be determined.

**Q: Is there a time limit for how long a SnarkPack can stay aggregated?**

A: There is no time limit associated with SnarkPack. However, there is still an expiration associated with `PreCommits`. This expiration is being set to 30 days in the HyperDrive upgrade. Thus, `ProveCommits` can only be aggregated for a little under 30 days before the message must be sent on-chain.

**Q: What is the gas saving for 32gib sectors and 64 gib sectors?**

A: `GasUsage` savings will be similar for 32 and 64 GiB sectors. 64 GiB sectors will see a slightly greater `GasUsage` savings because aggregate verification is faster for 64 GiB sectors, [see here](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#32-gib-gas-cost). For both 32 and 64 GiB sectors `GasUsage` savings depend largely on the number of proofs being aggregated. `GasUsage` of a 6 sector aggregate is estimated to be reduced by 1.5x while `GasUsage` of a 819 sector aggregate is estimated to be reduced by 30x.

**Q: How much more storage onboarding does Hyperdrive allow?**

A: We expect to see a 10x to 25x increase in storage onboarding, depending on how miners use aggregation. We could see the network grow from onboarding 40 PiB/day now to as much as 1 EiB/day. This would be a great increase!

**Q: What is the network doing to incentivize all miners to upgrade existing CC sectors to store real data from clients? Are there any WIP FIPs**

A: To upgrade the CC sectors with deals, follow the steps [in the Filecoin documentation](https://docs.filecoin.io/mine/lotus/sector-pledging/#upgrading-pledged-sectors). Miners can earn FIL for storing client’s deals. If the deal is a Filecoin Plus verified deal with datacap, the miner will get 10x adjusted power.

**Q: Is there an upper limit for the max gas used / gas limit for the two new messages or can the new messages be maxed out up to a blocks gas limit?**

A: The new messages can use up to the block gas limit. This upgrade does not introduce new per-messages restrictions. However gas estimates based on tests with simplified miner state put the `GasUsage` of these messages well below the block limit. `ProveCommitAggregate` messages with the max size of 819 sectors are estimated to have a `GasUsage` below 1.5 billion gas units. `PreCommitAggregate` messages with the max size of 256 sectors are estimated to have a `GasUsage` below 400 million gas units.

**Q: How much can we expect** `BaseFee` **to drop?**

A: Currently, the network is growing at maximum capacity (\~40PiB / day), with a `BaseFee` at \~1 nFIL over the past month. After the HyperDrive upgrade, the network could grow at a 10-25x storage onboarding rate of >400PiB / day with a **lower** `BaseFee` (since blocks would be less full due to aggregated proofs). However, the amount `BaseFee` may drop depends on the actions of miners (using the aggregate prove commit message) and the latent demand for the network (including storage onboarding). Ex, if there is more than 10-25x latent demand, `BaseFee` may not decrease because blocks would still be full to capacity! See the detailed cryptoeconomics in [FIP-13](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-incentive-alignment).

**Q: How does aggregation impact miner competition for block rewards?**

A: Aggregation enables 10x - 25x more storage onboarding, so many miners are going to greatly increase their storage onboarding, and take a larger share of the block reward. We expect that many miners will take advantage of aggregation and greatly increase their storage deployments, earning more revenue.

**Q: Does Hyperdrive mean that miners have a strong incentive to add a lot more storage?**

A: Yes - miners always have a strong incentive to add a lot more storage to take a larger share of the block reward. HyperDrive emphasizes this existing incentive by enabling much greater storage onboarding. It also encourages greater use of FIL+ deals.

**Q: How should miners respond to other miners increasing their storage onboarding rate?**

A: As with Bitcoin and other block reward blockchains, Miners who wish to maintain or increase their share of the block reward will need to stay competitive.

**Q: Does Hyperdrive mean that storage onboarding could reach 1 EiB per day?**

A: Yes -- Hyperdrive should make it possible for the network to reach a storage onboarding rate of 1 EiB/day or more.

**Q: Does the storage rate increase come from speeding up individual proof phases, or enabling more network throughput as a whole due to aggregated messages**

A: The storage rate increase comes from more network throughput as a whole due to aggregated messages. The individual proof phases are not sped up.

**Q: How do aggregate gas parameters differ when aggregating 10 sectors vs 1000 sectors? What's the motivation for miners to aggregate more sectors in one proof?**

A: Hyperdrive increases the overall storage onboarding throughput of the network, so miners will be able to onboard much more storage. Aggregated proofs will incur a discounted Gas Charge, so overall it will be less gas usage than the same number of proofs on chain, but a minimum fee will apply. See FIP-13 for more details about how gas usage changes. Comparing aggregating 10 proofs vs 1000 proofs: it is _cheaper per proof_ to aggregate more proofs into a single aggregate message. So if a miner wants to onboard more storage, it is cheaper to aggregate more proofs into a single message.

**Q: Can you list some of the FIL lending facilities for miners?**

A: Existing loan providers include: Anchorage, CoinList, Darma and more to come! See this discussion for a running list: [https://github.com/filecoin-project/community/discussions/184](https://github.com/filecoin-project/community/discussions/184 "https://github.com/filecoin-project/community/discussions/184")

**Q: What is the maximum storage size growth of PiB that can be supported per day in a realistic scenario? What is the estimated Gas charge for the whole network?**

A: This depends on predictions of realistic distributions of pre commit and prove commit batch and aggregate sizes. In the absolute best case with all miners always using max aggregate sizes the network will see about 30x `GasUsage` reduction so with current onboarding of 40PiB per day that would be 1,200 PiB per day. This is the maximum the network can support after this upgrade. It is unlikely we will hit this maximum since it is unlikely all miners will post aggregates of maximum size at least at first. It is ultimately up to the mining ecosystem as a whole to determine how close to this we get.

**Q: What are `BatchBalancer` and `BatchDiscount`?**

A: `BatchBalancer` and `BatchDiscount` are parameters used in the `BatchGasCharge` associated with `ProveCommitAggregate`. The `BatchDiscount` is a gas use discount factor that makes aggregated proofs cheaper in principle than `SingleProofGasUsage`. (Eg 1/20 as expensive). The `BatchBalancer` is a minimum gas fee for the `GasCharge`. This parameter regulates usage of `ProveCommitAggregate` and gas fees, ensures large scale storage onboarding pays the network, establishes a threshold of utility, and seeks to maintain a lower `BaseFee` for other network operations (eg `PublishStorageDeals`). When the `BaseFee` is below `BatchBalancer` _`BatchDiscount`, it is likely cheaper to submit single proofs. When the `BaseFee` is well above `BatchBalancer`_ `BatchDiscount`, it is likely cheaper to submit aggregate proofs. These parameters are set to support a wide range of onboarding rates, from \~30 PiB/day to \~2 EiB/day. See [https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-gas-charge](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-gas-charge "https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md#batch-gas-charge")

**Q: Is there a plan to add EVM to Filecoin?**

A: There is a lot of interest in adding the EVM to Filecoin, and many people are working towards this. Show your support by adding a reaction or comment on this issue: [https://github.com/filecoin-project/FIPs/issues/113](https://github.com/filecoin-project/FIPs/issues/113 "https://github.com/filecoin-project/FIPs/issues/113")

**Q: When storing data on the Filecoin network, can it be automatically distributed to different miners?**

A: The core Filecoin protocol allows one client to store and retrieve data from one miner. Tools or Layer 2 protocols can be built on top of this to automatically do this for different miners. Check out ARG’s Estuary [https://docs.filecoin.io/store/tools/estuary/](https://docs.filecoin.io/store/tools/estuary/ "https://docs.filecoin.io/store/tools/estuary/") and Textile’s Powergate as examples [https://docs.textile.io/powergate/](https://docs.textile.io/powergate/ "https://docs.textile.io/powergate/")
