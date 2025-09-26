---
aliases:
  - /blog/resolving-the-chain-halt
author: ""
categories:
  - updates
date: "2021-01-15T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On Dec 19th, 2020, the Filecoin network experienced a chain halt. This post
  describes the issue encountered, the outage impact, the rapid response, and
  what’s next.
image:
  alt: ""
  url: /uploads/retro-20201219-header-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/retro-20201219-header.webp
title: "Resolving the Dec 19 Chain Halt: Cause, Impact, & Take Aways"
_template: blog_detail
---

On Dec 19th, 2020, the Filecoin network experienced a [chain halt](https://status.filecoin.io/incidents/ffhr434cd14c), meaning that for a window of time, new blocks could be created, but miners couldn’t reach consensus on the resulting state, each computing a different value. Thanks to the fast response across community members, miners, and developers - a fix was released within four hours, and the network achieved a full recovery within seven hours. This post describes the issue encountered, the outage impact, the rapid response, and what’s next.

## The Cause

The underlying issue was a latent non-determinism iterating over a map of objects in the storage miner actor implementation. The actors are implemented in Go. Iterating over Go maps is known to be non-deterministic and the actors implemented a pattern of always sorting the result of an iteration before using it (with static analysis enforcement). Unfortunately, an error in the comparison function used in sorting two such maps caused the sort to be ineffective (see [#1335](https://github.com/filecoin-project/specs-actors/pull/1335)). Thus different nodes processed map entries in different orders, resulting in divergent results and gas consumption.

This code path was practically reachable only through (a) a miner declaring multiple sectors terminated at once, or (b) a miner recovering faults spanning multiple partitions at once. (Two other code paths reach this point, but are extremely unlikely in practise). Neither of these paths had been exercised in mainnet prior to this point with multiple sectors/partitions as data to expose the nondeterminism. The halt was triggered by a simultaneous termination of multiple sectors.

Tests for the Filecoin actors cover the code in question, but do not include a mechanism to verify deterministic execution between different test runs. Integration tests for the Lotus node implementation did not cover terminating multiple sectors.

## Outage Impact

Above all else, it should be emphasized that during the outage no data was lost. While the inability to mint new blocks temporarily inhibited transactions on the network, all data residing with storage providers was safe and ready to go once the network resumed operation. Furthermore, it is important to note that the specification for the Filecoin protocol provides for retrieval of data even in the event of a chain halt. Thus, while on-chain transactions were impossible for the duration of the event, the core functionality of the Filecoin network remained intact. Additionally, the fix put in place ensured that mining operations themselves were not penalized for the outage; instead, [consensus slashing](https://filecoin.io/blog/filecoin-features-slashing/) was temporarily suspended to prioritize and encourage network recovery.

## Rapid Response

The speed with which the underlying problem was first detected, identified, fixed, and deployed is also notable:

- Within fifteen minutes of the event, automated monitoring triggered an alert
- Within thirty minutes, miners and implementation developers assembled in response
- Within four hours, developers identified and released a fix for the issue
- Within seven hours, enough nodes adopted the fix to pass the majority consensus-power threshold, putting the network on the road to recovery

This is an incredibly rapid response for a young decentralized network. Even established blockchains experience chain halts and [forks](https://blog.ethereum.org/2016/11/25/security-alert-11242016-consensus-bug-geth-v1-4-19-v1-5-2/) from time to time, and Filecoin’s time to resolution for this incident is [comparable](https://cointelegraph.com/news/binance-pauses-ethereum-withdrawals-as-network-suffers-minor-hard-fork) to that of chains that have been in operation [for several years](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki#What_went_wrong). The entire community should be proud of the speed with which this incident was handled.

This recovery was only possible through the collective efforts of multiple groups working in concert, all over the world. Parties across the ecosystem collaborated to make this happen: miners detected and reported the issue, bringing it to the attention of developers; engineering teams coordinated to develop and release a peer-reviewed patch for the underlying issue while communicating the status of this fix via community channels; and network participants across the globe worked to apply the patch and bring the network back online as quickly as possible. While events requiring such urgency are not something to be repeated, this is a very impressive showcase of the engagement and attentiveness within the Filecoin ecosystem.

## What’s Next

Building a blockchain is like building a software rocket; they’re very complex pieces of technology, and it’s hard to get everything right on the first try. Just like real rockets, things can go wrong in unexpected ways; when that happens, it’s important to have the infrastructure in place to address the issue as quickly as possible, to minimize its impact, and to reduce the likelihood of it occurring again.

To that aim, multiple teams have taken on writing and executing on post mortems, which identify additional improvements to the testing coverage across actors/lotus and the alerting & issue escalation across network infrastructure/communications to help mitigate future incidents.

Thanks to the patience, hard work, and investment of the Filecoin community, the kinks in this novel technology continue to be ironed out. With every problem identified and resolved, the network matures further into a stable, reliable, and flight-proven platform.
