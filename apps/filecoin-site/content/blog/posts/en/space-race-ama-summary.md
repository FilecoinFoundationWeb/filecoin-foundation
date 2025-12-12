---
aliases:
  - /blog/space-race-ama-summary/
author: ""
categories:
  - updates
date: "2020-09-03T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As a part of the Space Race events program, the Filecoin team are hosting
  weekly live AMAs with the Filecoin community.
image:
  alt: Space Race AMA Summary
  url: /uploads/sr-live-ama-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sr-live-ama-social.webp
title: Space Race AMA Summary
_template: blog_detail
---

As a part of the Space Race events program, the Filecoin team are hosting weekly live AMAs with the Filecoin community. On September 2nd our team hosted the first of two AMAs, answering 20+ questions on Space Race, cryptoeconomics, and Filecoin mining. In addition, we helped miners troubleshoot certain issues.

A summary of the answers from our Q&A is below. We look forward to hosting more sessions like this as mainnet launch approaches! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on Wechat (Filecoin-Official), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

_Most questions and answers are quoted directly, some are edited for readability._

**I’m new to Filecoin and Web3 but I know this is the future. What can I do to make sure I’m getting the most out of the APOLLO program?**

The best way to make the most of the [APOLLO program](https://gitcoin.co/hackathon/filecoin/onboard) is to make sure you attend all the sessions (or catch up online if you can’t attend live) and do the associated reading and tutorials. It’s an incredible opportunity to build relationships with other people and teams building on Filecoin!

For those who are unfamiliar, APOLLO is a 6-week program designed for entrepreneurs, builders, and makers interested in the Filecoin ecosystem to either continue their work or start new projects using Filecoin and other Web3 technologies.

**How do we adjust the Filecoin mining scheduler to manage the concurrency of workers?**

The scheduler is designed to automatically manage the concurrency of workers. For a detailed explanation of how it works, [watch this recent workshop](https://youtu.be/rwz8XIs6miE).

We know it isn’t perfect yet! If you notice any issues, especially deadlocks, resource starvation, or workers idling, please submit an issue using the [Sealing Issues template](https://github.com/filecoin-project/lotus/issues/new/choose).

We’re also inviting suggestions on how to improve the scheduler. Please share your suggestions [here](https://github.com/filecoin-project/lotus/issues/3498).

**Why does my miner appear to have lost storage power suddenly?**

Normally this is caused by a failure to submit a PoSt. There can be many reasons for this – your hardware may be too slow or tied up with other tasks as a result of a custom configuration.

If you don’t find any logs in your miner indicating failures to produce or submit PoSts, please file an issue on GitHub, including your Lotus version and miner ID.

**For convenience, would you please leave the link to what are the minimum and recommended specs to start storage mining and are GPUs required?**

You can find our hardware recommendations [here](https://docs.filecoin.io/mine/#hardware-recommendations).

You can also find community produced benchmark results [here](https://github.com/filecoin-project/benchmarks).

A GPU is a must for storage mining (winning block rewards).

**Do sectors go from Removing to Removed? How long does this take?**

Yes, a sector in Removing will automatically go into SectorRemoved (or SectorRemoveFailed). It should happen fairly quickly.

**When will the code freeze?**

We consider Lotus code to be feature-frozen and close to mainnet-ready. At this point, we are entirely focused on fixing bugs, improving performance, and improving UX and documentation. The rate of those changes should go down over the next couple of weeks as we approach mainnet launch!

**When is the last day to register for Space Race?**

Standard registration (for miners already mining) closed at 22:00 UTC, Monday, August 31. Late registration (for new miners not seen on-chain before and who don’t have another miner in the race) is open until 22:00 UTC, Thursday, Sept 10th.

**Can you give us an expanded explanation of EIP 1559 on Filecoin?**

EIP1559 introduced the notion of a network fee and a dynamic fee adjustment mechanism for spam protection. Gas is a measure of how much storage or compute resource an on-chain message consumes. Hence, GasUsage \* BaseFee is burned to compensate the network. In addition, message senders specify a GasPremium which is the priority fee for message inclusion for miners, untethered to the gas usage (this is how Filecoin differs from EIP1559). Hence, miners’ profit from message inclusion did not change and it should become easier to reason about incentive.

**Is each partition capped at 2349 sectors? What are the correlations between the number of storage disks and the number of partitions? I see that they match.**

Partitions are capped at 2349 sectors for 64 GiB deals, the number varies based on sector size. You can find them, and some explanation, [here](https://github.com/filecoin-project/rust-fil-proofs/blob/master/filecoin-proofs/src/constants.rs#L92-L101).

**Does the Space Race deal bot favor particular miners?**

No, the dealbot selects randomly from all miners. For storage deals, the bots select from all miners with at least one sealed sector. For retrieval deals, the bots select from all miners with at least one successful storage deal. Here’s the [dealbot code](https://github.com/Digital-MOB-Filecoin/QABot) if you’d like to see in greater detail.

Remember, the competition rewards deal success _rate_, not deal volume.

**I had my first faulty sector, what are the penalties for faulty sectors? How do we fix them?**

A sector fault fee (2.14 days worth of block reward) is charged for every day that a sector is in the faulty state. This fault fee is set such that once storage reliability goes above a reasonable threshold, the risk imposed by this penalty rapidly decreases. Miners are encouraged to monitor and report faults as soon as possible (currently it’s automatic in Lotus but it is recommended for miners to have their own monitoring and reporting toolchain).

If the chain detects that a sector is at fault, then the miner is penalized a sector fault detection fee for the sector. Miners are incentivized to recover from faults as soon as possible and declare recovery when the sector is fixed.

**If an actor is abandoned and it fails to submit a window post indefinitely, will the actor keep drawing FIL from its owner’s wallet?**

No, if you shut down a miner, it will never draw FIL from either the owner or worker addresses. However, you will be slashed your total sector pledge collateral, as well as your total deal collateral.

**What are the total rewards for Space Race? Why have they increased?**

The total potential reward pool for Space Race is 4.5MM FIL, which increased today from 4.0MM FIL. The additional potential rewards are because participation has greatly exceeded expectations, and we wanted to give miners a stretch goal!

Note that these are all _potential rewards_ - as miners add capacity to the network, they unlock higher reward tiers.

**What is the official end date/time for Space Race?**

Space Race ends on Monday, September 14th at 21:59 UTC. You can see the full rules [here](https://docs.filecoin.io/mine/spacerace/#how-do-i-participate).

We take snapshots of the rankings many times per day, so if the network gets over-excited at the end, don’t worry – we will still have plenty of information available to correctly calculate rewards.
