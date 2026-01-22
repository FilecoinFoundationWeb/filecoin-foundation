---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-05-19T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  This article provides an update on the Filecoin x BlockScience research
  collaboration, denoting a significant milestone for the Filecoin project. It
  was first published by Blockscience here.
image:
  alt: ""
  url: /uploads/fil-blog-blockscience-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-blockscience.webp
title: Filecoin Network Crosses Baseline Sustainability Target for First Time
_template: blog_detail
---

_This article provides an update on the Filecoin x_ [_BlockScience_](https://block.science) _research collaboration, denoting a significant milestone for the Filecoin project. It was first published by Blockscience_ [_on Medium_](https://medium.com/block-science/sustainability-goal-achieved-filecoin-network-crosses-baseline-target-cec13a3ed8f).

The Network Baseline for Filecoin has crossed the Baseline Target for the first time! This is an important milestone that marks a transition on the path of continued sustainability of the network. **This happened at 05:00 UTC on 02 April 2021 — or 00:00 UTC on 21th December 2020 if we measure through the Network Effective Time, which is a key component of why baseline minting is important.**

![](/uploads/0-9nku_yshdjq4fzmo.webp)

_Figure 1: Network power crosses the baseline_

At that moment, the Filecoin Storage Power as measured in Raw Bytes — which is the total storage capacity of the network — **went to 3898.8 PiB: the exact baseline function value at that instant.**

The practical effect of that crossing is that now the network distributes the issued Block Rewards at full speed, as Baseline Minting is now saturated!

That event signifies a phase shift for the cryptoeconomics of the system, as the network transitions from a goal of capacity building towards being a scalable chain.

Given this new phase, we are writing two reports about what this means for Filecoin’s medium-term future. In this first report, we explain why the phase shift is significant, as well as provide a few near term projections. The second report will dive deep into the technical features, and the consequences of Baseline Minting when looking at both data and models.

All visualizations and projections are based on public Filecoin data and can be found in this [interactive notebook](https://blockscience.github.io/filecoin-metrics/notebooks/baseline_crossing.html).

## Why the Baseline Crossing Is Significant

During the Stage 1 “Capacity Building” phase (cf. Figure 2 below), the emphasis was on the creation of a sound ecosystem. This required applying the scientific ‘first principles’ of the Filecoin cryptoeconomy to ensure that the chicken-and-egg problem of “capacity supplied only if capacity demanded only if capacity supplied” was efficiently resolved through the incentivization of rapid storage provision.

When sufficient storage was provided, both storage providers and clients had engaged with and received value-added from the ecosystem. The cryptoeconomic incentives then commenced a shift toward a more medium-term view in Stage 2, with the chicken-and-egg problem safely in the rearview mirror and a more forward-looking, efficiency-maximizing perspective adopted. The ‘tipping point’ for storage provision was exactly when Filecoin Storage Power exceeded the Network Baseline–the phase shift has now been achieved!

![](/uploads/0-ffo5rmyuzwo2wlar.webp)

_Figure 2: Stages of the Filecoin economy (see more in_ [_Minting Model_](https://spec.filecoin.io/#section-systems.filecoin_token.minting_model)\_

This new stage operates under completely different dynamics from the previous stage. From now onwards, the network rules will put a premium on more efficient operators regarding proofing and retrieval actions. In addition, the storage deal marketplace will be an important consideration regarding the immediate incentives for participating.

This means that **incentives have shifted** from gross capacity building towards having a comprehensive and sustainable capacity that is aligned to both supply and demand.

The final transition from Stage 2 to Stage 3 in Figure 2 above will require the involvement of all Filecoin participants, to allow the network to become ever more useful. In this stage, Filecoin becomes a diverse and useful network for goods and services, allowing the large community of participants to consolidate the network’s productivity and efficacy over a long-term perspective.

## What Is the Network Baseline?

Filecoin has a unique blockchain economic model where minting is performed through a mixture of **Simple Minting**, which is the standard exponential form widely used in cryptocurrency ecosystems, and the innovative **Baseline Minting**, which uses a moving and growing target and distributes rewards according to the existing network capacity.

The usage of two minting mechanisms, one that is independent of the network’s capacity and another that continuously adapts to the current reality allows Filecoin to have incentives that are aligned for a diversity of scenarios, both good and bad. In good times, when the network is operating as intended, growth is rewarded with further growth as more minting opportunities are unlocked faster with Baseline Minting. By contrast, when unanticipated shocks hit the system, such as a sudden capacity constraint, Simple Minting provides dependable minting support that allows participants to ‘weather the storm’, countering and mitigating the effects of short-term volatility, and allowing the system to rebound smoothly and effectively as new storage is brought online.

Specifically, Baseline Minting reserves part of the Filecoin to be issued when activity is low, so that network participation is not disincentivized after the activity rebounds. At the same time, Simple Minting adds an anti-fragility component as it economically incentivizes miners that operate on downturns.

In terms of numbers, **30% (or 330M FIL) of the Filecoin allocated to Storage Mining is distributed through Simple Minting, and 70% (or 770M FIL) is distributed through Baseline Minting.**

It is important to observe, however, that this absolute share of rewards can change with time. Indeed, the share distributed with Simple Minting will always be higher than that distributed with Baseline Minting, due to the unique dynamics of the latter.

Another point of interest is that the current distribution numbers could themselves change, as there’s a 300M FIL reserve that could be used over the future depending on community decisions through Filecoin Improvement Proposals (FIPs).

In the following chart, we can observe the cumulative rewards in Filecoin over time with a daily granularity and for both minting functions.

![](/uploads/0-rt8a_66bkesezb9m.webp)

_Figure 3: Block reward accrual over time_

## What to Expect in the Near Term

One useful property of Baseline Minting is that it allows the Network to have predictability when the Network Capacity is above the Baseline Target.

This is exactly what happens when we project the Total Mining Rewards over time for the next six months. The fact that in all projections the Network Power remains above the Baseline Target generates the consequence of not having any uncertainty at all in regards to the total FIL to be issued and distributed during that time!

![](/uploads/0-hf6-5zdcwy2sapeh.webp)

_Figure 4: Projected cumulative block rewards over 2021_

A full picture of the future is acquired when visualizing how those total rewards are distributed on a daily basis, as well as by taking into account that they represent quantities to be divided among the existing Network Power.

The resulting figure is as follows, that shows the daily Block Rewards over the past and future. Notice that most of the daily rewards decay was due to the simple mechanism waning off, while the baseline minting did keep a constant reward for the miners.

Now that the baseline has been achieved, having increased mining rewards per unit of storage will require making use of the deal marketplace, which will greatly increase the economic incentives of providing capacity through the Deal Rewards and the Filecoin Plus programme.

![](/uploads/0-0eva8kqwb-helg9a.webp)

_Figure 5: Past & projected daily block reward distribution in 2021_

## Conclusion

Filecoin has gone through a phase shift by crossing its Network Baseline, and now Block Rewards that can be used for building capacity are being distributed at full speed!

This marks a transition of incentive alignment, toward having ever-increasing efficiency of providing storage while at the same time increasing the rewards for participating in the Deal Market.

The phase shift and associated incentive transition together act as a Call to Action to the community, towards developing more applications and more business models on top of Filecoin. From these activities we’ll build a sustainable transition to the stage where Filecoin has a strong reputation and suite of products over a wide range of diverse markets!

## References

- Minting Model, Filecoin Spec: [https://spec.filecoin.io/#section-systems.filecoin_token.minting_model](https://spec.filecoin.io/#section-systems.filecoin_token.minting_model "https://spec.filecoin.io/#section-systems.filecoin_token.minting_model")
- Filecoin CryptoEconomics, Filecoin Spec: [https://spec.filecoin.io/algorithms/cryptoecon/](https://spec.filecoin.io/algorithms/cryptoecon/ "https://spec.filecoin.io/algorithms/cryptoecon/")

This article was written by [Danilo Lessa Bernardineli](https://medium.com/u/7de3cb48ff85?source=post_page-----cec13a3ed8f--------------------------------) and Gabriel Lefundes with edits and suggestions by [Jamsheed Shorish](https://medium.com/u/3330e0988b1b?source=post_page-----cec13a3ed8f--------------------------------), [ZX Zhang](https://research.protocol.ai/authors/zixuan-zhang/), [Michael Zargham](https://medium.com/u/bdd1335dfbd?source=post_page-----cec13a3ed8f--------------------------------).

## Further Reading

Read more about Filecoin on the [Filecoin blog](https://filecoin.io/blog/#posts).

Keep up with the latest [BlockScience](https://block.science "https://block.science") research on their [Twitter](https://twitter.com/block_science) and Medium or explore their library of presentations, academic papers and recent media on the [resources page of their website](https://block.science/resources).
