---
aliases:
  - >-
    /blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-3-10x-increase-in-storage-onboarding
author: ""
categories:
  - updates
date: "2021-05-27T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Today, we’re excited to announce that the Filecoin v13 ‘HyperDrive’ Network
  upgrade coming in just a few weeks will unlock a 10-25x increase in storage
  onboarding rate* due to innovations in Filecoin Proofs system (*depending on
  how miners take advantage of the new aggregation limits) !
image:
  alt: ""
  url: /uploads/fil-blog-hyperdrive-wormhole.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-hyperdrive-wormhole.webp
title: >-
  Filecoin v13 ‘HyperDrive’ Network Upgrade Unlocks 10-25x Increase in Storage
  Onboarding
_template: blog_detail
---

Today, we’re excited to announce that the [Filecoin v13 ‘HyperDrive’ Network upgrade](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228) coming in just a few weeks will unlock a 10-25x increase in storage onboarding rate<sup>1</sup> due to innovations in Filecoin Proofs system!

<sup>1</sup> Depending on how storage providers take advantage of the new aggregation limits

With only 7 months since Filecoin Mainnet Liftoff, there are now more than 2300 active miners providing hundreds of pebibytes of useful storage on the Filecoin Network every week. However, this amazing growth rate is actually a _small fraction_ of the total capacity Filecoin storage providers are ready to add to the network.

Due to massive demand in providing services on the Filecoin Network, storage growth has been rate-limited by Filecoin chain capacity since well before mainnet launch. Blocks are currently full of new capacity proofs, storage deals, and ongoing storage verification (Window PoSts) - limiting the new storage that miners can commit to Filecoin, and making all other on-chain transactions like publishing storage deals more expensive due to gas fees!

![](/uploads/screen-shot-2021-05-24-at-3-10-22-pm.webp)

That’s why the [CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) and [CyptoComputeLab](https://research.protocol.ai/groups/cryptocomputelab/) have been hard at work since network launch - racing to increase chain capacity and unblock the Filecoin Network’s growth rate. Increasing chain capacity has many benefits:

- Allow current storage providers to onboard additional storage capacity more quickly and cheaply 💸
- Create space for new storage providers to come onboard and quickly scale their operations to many PiB (or EiB!) of storage capacity 📈
- Increase chain bandwidth for other critical functions like ongoing storage verification, transactions, and creating new accounts 🔏
- Decrease gas fees for onboarding new storage deals - making it even cheaper to store useful data on Filecoin! 🤝

Filecoin is a **useful storage network**, and its mission - to create a decentralized, efficient, robust foundation for humanity’s information - requires growing storage capacity exponentially to keep up with global data growth. Instead of a wasted proof-of-work blockchain, Filecoin’s [Proofs of Storage](https://spec.filecoin.io/algorithms/pos/), which includes Proofs of Replication and SpaceTime, are focused on making the mining process _useful_ to the world by amassing a massive decentralized data center to store humanity’s data. That’s why the changes in Filecoin’s v13 HyperDrive Network upgrade are so important - **it allows humanity to provably store 10-25x more of our most valuable information**. 🚀

## Filecoin v13 HyperDrive Upgrade: What it Means for Storage Providers

Scheduled for mid-June, the HyperDrive upgrade is a big deal for all Filecoin Network participants. Storage clients and application developers will benefit from increased message throughput, improving overall network utility - but the most notable improvement comes for Filecoin storage providers, who will benefit from new economies of scale and faster capacity onboarding rates. The higher capacity growth rate also creates opportunities for new storage providers to come onboard and quickly establish themselves as major players within the Filecoin network. 💪

Previously, a large storage provider may have had the resources and hardware to onboard 100PiB of storage capacity onto Filecoin per day, but been constrained by chain bandwidth limitations to stay within the [\~40PiB / day collective storage onboarding limit](https://spacegap.github.io/#/) - competing with other miners for limited chain space for new storage proofs. Now, with the improvements landing in HyperDrive, such a storage provider could aggregate their prove commits into orders of magnitude fewer on-chain messages - growing their network power quickly while saving chain space. If all miners followed this practice, the current storage onboarding rate (currently >100% of chain capacity) could take up less than 5% of new chain capacity! 🎉

This has significant implications for miners: both an opportunity to up their earnings by increasing their share of the Filecoin network block rewards, which currently mints [~370,000 FIL](https://filfox.info/en/) / day in mining rewards - and a challenge to keep up with their peers in taking advantage of these new optimizations. Miners that adjust slowly to the new operational practices may see their allocations shrink relative to their peers - so don’t 💤 on this opportunity!

To help storage providers prime their operations (and start preparing their latent capacity for rapid onboarding!), the first lotus RC with proofs aggregation capabilities should be available the week of 2021-05-31 along with an upgrade of the Calibration testnet - after which miners can test the new proofs aggregation flow and its cryptoeconomic results. Follow the [lotus v1.10.0 release announcement discussion](https://github.com/filecoin-project/lotus/discussions/6283) for release timing updates, and [Filecoin v13 HyperDrive Upgrade announcement](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228)s for the networks’ (calibration net and mainnet) upgrade epochs. Corresponding updates will also be posted in **#fil-announcements** and **#fil-lotus** in [Filecoin Project Slack](https://filecoin.io/slack).

## Growing Filecoin Chain Capacity through SnarkPack

The Filecoin v13 HyperDrive Network Upgrade is possible thanks to innovations in Filecoin Proofs system. Over the past few months, [CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) and [CyptoComputeLab](https://research.protocol.ai/groups/cryptocomputelab/) have designed and implemented significant improvements to Filecoin’s proof mechanism to unlock increased scalability and relieve network congestion. Their hard work resulted in two highly anticipated FIPs (Filecoin Improvement Proposals) that will bring significant scalability improvements to Filecoin:

- [FIP-0013: Add ProveCommitAggregated method to reduce on-chain congestion](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)
- [FIP-0008: Add miner batched sector pre-commit method](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0008.md)

The core of these FIPs requires aggregating and condensing multiple proof verifications (which land on-chain in the form of [SNARKs](https://z.cash/technology/zksnarks/)) into a single aggregated message that takes up less chain bandwidth. To date, the Filecoin Network is the **largest** SNARK system in production, producing and verifying over 5 million SNARKs on a daily basis! To meet these significant scalability requirements, the CryptoNetLab is proud to release [**SnarkPack**](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/), a novel strategy to scale SNARK proofs through aggregation. SnarkPack was built on the Inner Pairing Product work of [Bünz et al.](https://eprint.iacr.org/2019/1177), and was rapidly and rigorously productionized for Filecoin’s proofs system. In addition to significant performance optimizations, SnarkPack also uses a novel commitment scheme to enable proof aggregation without an additional trusted setup - making it an easy upgrade to deploy on the live Filecoin Network. You can read more about how SnarkPack works in the [SnarkPack deep dive](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/) or the [Cryptology ePrint](https://eprint.iacr.org/2021/529).

![](/uploads/image-10.webp)

SnarkPack provides a solution for [FIP0013](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md) by adding a method, [ProveCommitAggregate](https://github.com/filecoin-project/specs-actors/blob/51145815bc17542f4731e1ac08d914d9d39a81ed/actors/builtin/miner/miner_actor.go#L860), for a miner to aggregate several sector `ProveCommit` receipts into a single on-chain message. With this new method, some redundant but costly checks are removed and others can now be amortized across multiple sectors, drastically reducing per-sector proof size and verification times. To ensure that small miners can also take advantage of these optimizations, the window for submitting `PreCommit` and `ProveCommit` messages has been [extended](https://github.com/filecoin-project/specs-actors/issues/1400) so that small miners can aggregate all proofs within that window into a single on-chain message.

Performance benchmarks so far are impressive - SnarkPack can aggregate 8192 SNARK proofs in 8 seconds on a 64-thread/32-core AMD Ryzen™ Threadripper CPU, producing a proof which is 38x smaller in size and can be verified in 33ms, including deserialization! With this new feature, miners will be able to submit one `ProveCommitAggregate` message for up to [819 sectors’](https://github.com/filecoin-project/specs-actors/blob/51145815bc17542f4731e1ac08d914d9d39a81ed/actors/builtin/miner/policy.go#L286) prove-commitments.

{{< youtube id="GRaR8N380h0" title="Scaling zkSNARKs to meet the demands of Filecoin" >}}

Along with FIP0013, [FIP0008](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0008.md) will also be landing in the HyperDrive Network upgrade, which adds a method for a miner to submit batched pre-commitments for multiple sectors. The new `PreCommitSectorBatch` method will remove some redundant and costly checks and amortize costs across multiple sectors.

## Upgrade Timeline & Other Features

In addition to FIP0013 and FIP0008, [Actors v5](https://github.com/filecoin-project/specs-actors/issues/1391) (shipping in the Filecoin v13 HyperDrive Network upgrade) also includes useful improvements like [FIP-0012: DataCap Top up for FIL+ Client Addresses](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0012.md), which enables topping up DataCap for Filecoin Plus verified clients. Previously, each new DataCap allocation request needed to target a _unique_ address, creating operational overhead with renewing the hundreds of DataCap allocation requests serviced since the start of the program. With [FIP0012](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0012.md), FIL+ clients will be able to receive additional DataCap to their existing addresses, improving the deal making experience for clients and miners. With significant efforts in the works [to scale FIL+ DataCap allocations to large-scale datasets](https://github.com/filecoin-project/filecoin-plus-large-datasets) - these improvements will continue making Filecoin a more useful storage network for the important data humanity relies on.

Core Devs across mainnet implementations - lotus([v1.10.0](https://github.com/filecoin-project/lotus/issues/6185)), venus, and forest - are all sprinting towards the Filecoin v13 HyperDrive Network upgrade currently scheduled for mid-June (exact upgrade epoch TBD). This is a massive (and highly-anticipated) upgrade to the Filecoin network, and requires thorough end-to-end testing to ensure a smooth upgrade. You can find the latest updates and timeline for the upgrade [on GitHub](https://github.com/filecoin-project/community/discussions/74#discussioncomment-707228). If you have any questions with regards to the upgrade, leave your comments in this [community discussion](https://github.com/filecoin-project/community/discussions/155), or add feedback for the new lotus release in this [discussion](https://github.com/filecoin-project/lotus/discussions/6296).

## Future Work

Going forward, there is still a lot of work that can be done to make Filecoin the best storage network for both storage providers and users. While the Filecoin v13 HyperDrive Upgrade is a huge leap forward in chain capacity, the [CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) continues to push on improvements to reach full exponential scaling capabilities and augment Filecoin’s PoRep scheme to enable upgrading committed capacity sectors with user-submitted deals **without resealing**! 🤩

In the shorter term, there is also a clear opportunity for network-level proof aggregator nodes which bundle messages from many different miners to increase throughput even further. These aggregators could batch many `ProveCommit` messages across _different_ miners, speeding up the aggregation rate and ensuring small miners with limited sealing resources can fully utilize the aggregation optimizations. Look out for additional improvements like this in subsequent network upgrades!
