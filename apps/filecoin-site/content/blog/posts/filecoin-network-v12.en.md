---
aliases: []
author: ""
categories:
  - updates
date: "2021-05-04T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: "On April 29th, 2021, the Filecoin network upgraded to version 12."
image:
  alt: ""
  url: /uploads/filecoin-blog-purple-light-room-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-purple-light-room.webp
title: Filecoin Network v12
_template: blog_detail
---

On April 29th, 2021, the Filecoin network upgraded to version 12. The upgrade introduced [version 4](https://github.com/filecoin-project/specs-actors/releases/tag/v4.0.0) of the [specs-actors implementation](https://github.com/filecoin-project/specs-actors), the set of built-in actors that specify the rules of the Filecoin protocol. The new version of specs-actors was designed to be significantly more performant, thus speeding up block validation times. Filecoin core devs from [lotus](https://github.com/filecoin-project/lotus), [venus](https://github.com/filecoin-project/venus), and [forest](https://github.com/Chainsafe/forest) came together to implement and ship this upgrade within mere weeks - and node operators across time zones demonstrated their responsive upgrade times to rapidly bring these performance improvements to the whole network.

## Motivation

It is important for all blockchain projects to ensure that the time it takes to validate a block is less than the frequency at which blocks are produced. On the Filecoin network, blocks are produced every 30 seconds, so it is crucial that block validation takes significantly less than 30 seconds. Block validation is, of course, dependent on various factors: the hardware specs of the node, the size of the chain database, what other processes are running on the node, etc.

Before the v12 upgrade, the median quality node was running smoothly, with block validations well under 30 seconds. However, slower nodes, and nodes that preserved full chain history (and so have very large databases) had higher validation times, putting them at risk of falling out of sync in the event of a slowdown. Although most miners with fast hardware and smaller chain databases weren’t impacted, other important members of the ecosystem, including exchanges and archival nodes, were starting to experience some slowdown and occasional sync issues - negatively impacting full network health.

One of the causes of this slow sync times came from some inefficiencies in the actors code around handling newly created miners. Over the past few months, the network had experienced some waves of spam messages creating miners on-chain - creating an excess of empty miner entries. This provided an easy opportunity for a significant performance improvement, since reducing the time spent processing empty miners could provide a large speed up for block validation times. Rolling this improvement out in the v12 network upgrade also proactively prevented future CreateMiner spam from turning from a nuisance into an attack vector for slower nodes.

## Performance improvements

To understand the performance improvement introduced in version 12, we need to understand some details of the system. The Filecoin cron actor, found at address f03, is a system actor run by the network every epoch. It exists to run state transformations that keep the filecoin network running smoothly and correctly. The cron actor processes miner actors every 60 epochs (30 minutes) to validate that miners have correctly proven storage of the portion of their sectors due to be checked. It is through the cron actor’s processing that the Filecoin protocol can ensure its central guarantee: that the network, as a whole, checks the entirety of the storage on Filecoin every 24 hours, and automatically detects and penalizes any lost or corrupted data.

Until network version 12, the cron actor would do this processing for every single miner actor. Filecoin version 12 changed the cron actor to only do this processing for miner actors that needed it. A miner actor “needs” a cron job if it is actively proving storage. Specifically, any of these criteria necessitate a cron job every 60 epochs: 1) having an active PreCommit 2) having an active sector 3) having any vesting rewards locked in the vesting table. A miner actor not meeting any of these criteria will have no essential work to be done during cron jobs and can safely be skipped. In particular, a newly created miner will **not** immediately request a cron job, it will only get one when it first starts to pledge storage to the network.

After this optimization came into effect, the Filecoin network has gone from processing around 375,000 miners every 60 epochs to a little over 2,000. This has resulted in an average block sync time that is about twice as fast and a daily state snapshot size reduced by over 20 GB, a nearly 2x improvement! Node operators have seen a significant reduction in average and max block sync times, and an almost complete elimination of instances of large archival nodes falling out of sync.

Reduced sync times after v12 upgrade:

![](/uploads/image-7.webp)

Reduced instances of falling out of sync (measured in epochs) after v12 upgrade:

![](/uploads/lotus-fullnode-sync-latency-post-upgrade.webp)

## Rolling out the Upgrade

The network v12 upgrade, which introduced [v4 actors](https://github.com/filecoin-project/specs-actors/releases/tag/v4.0.0), was released in [Lotus v1.8.0](https://github.com/filecoin-project/lotus/releases/tag/v1.8.0) and [venus v0.9.5](https://github.com/filecoin-project/venus/discussions/4407). The Lotus team shipped the release on a somewhat short timeline, with only \~48 hours between the release and the network upgrade epoch, which serves as a deadline by which time all node operators must have upgraded. It is important for the Filecoin community to be able to perform quick upgrades, since critical security issues might need to be fixed on a short timeline. As preparation for such an event, the network underwent various “war game” scenarios during the Space Race competition in September, 2020, shortly before mainnet liftoff.

The community painlessly upgraded to v12 in the 48 hour window, continuing to prove its ability to adopt quick upgrades if needed in the future. A fast turnaround such as this relies on the efficient communication channels in place between the teams implementing the Filecoin protocol and the various node operators including storage miners, storage clients, and exchanges. To keep everyone in the loop, Filecoin community engineers announced upgrade details including upgrade highlights, upgrade epoch and link to implementation release timelines in the [community forum](https://github.com/filecoin-project/community/discussions/74#discussioncomment-642326), and updated the [Filecoin network status page](https://status.filecoin.io/incidents/n5m3x2w07x7k) with subscribable notifications. The dev teams then provided responsive support to ensure everyone upgraded their node smoothly in time across multiple support channels, including [forums](https://github.com/filecoin-project/lotus/discussions/6082), [Slack channels](https://filecoin.io/slack) and others.

Correctly implementing such a change in a shorter timeframe also requires a rigorous testing and release process. The Lotus team was able to do so using the new release checklist that has been developed over the past few months. Additionally, in response to community feedback, the Lotus team was careful to ensure that no untested optional features were introduced in such a mandatory release. Instead, the network upgrading changes were shipped on top of [Lotus v1.6.0](https://github.com/filecoin-project/lotus/releases/tag/v1.6.0), the most recent stable and well-tested version of Lotus. For more adventurous users who wanted the latest features, a release candidate, [Lotus v1.9.0-rc1](https://github.com/filecoin-project/lotus/releases/tag/v1.9.0-rc1) was supplied, which incorporated the network upgrading changes along with newer features.

## Thank You

Pulling off a quick upgrade that delivers significant performance improvements such as this one isn’t easy! It is thanks to the feedback received and improvements made over the past several months that core devs were able to implement, test, and release high-quality code that improves the Filecoin network. Additionally, the constant engagement, dedicated support, and quick responsiveness of the various node operators in the Filecoin community ensure that the network can speedily upgrade if ever needed. Thank you!
