---
aliases:
  - /blog/filecoin-network-economics
author: ""
categories: []
date: "2020-12-22T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Highlights from the Storage Market Summit with Filecoin and ETH Global on Dec.
  11
image:
  alt: Filecoin Network Economics
  url: /uploads/sms-header-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-network-economics-header.webp
title: Filecoin Network Economics
_template: blog_detail
---

Earlier this month, ETH Global and Filecon hosted the Storage Market Summit (SMS). A portion of the day was dedicated to Filecoin Economy Deep Dives. Below are recaps, themes, and conclusions from different talks during this portion of the day.

You can browse the [agenda](https://sms.ethglobal.co/) and check out the [full Collaborative Resource and Risk Management section here](https://www.youtube.com/watch?v=leJHrvz-YY8&).

## Filecoin Economy Deep Dives

_The following is a summary of the talk “Filecoin Economy Deep Dives”, given by ZX Zhang of Protocol Labs at SMS._ [_Watch the full recording here_](http://www.youtube.com/watch?v=leJHrvz-YY8#t=12m36s)_._

The Filecoin network is a complex ecosystem with many different actors. These include the clients, miners, and developers of Filecoin, as well as FIL token holders and ecosystem partners.

The modern storage landscape leaves a lot to be desired. Reliable storage can be expensive; as a result, more data is created than actually stored, and the data that is stored is highly centralized, with the top five providers controlling nearly 77% of the cloud storage market. This creates an environment that makes it difficult for new entrants to gain a foothold in the ecosystem.

Filecoin aims to build an open storage economy that addresses these issues, providing a platform that makes it more feasible for independent actors to compete and innovate in the face of established competition. Its network implements a complete storage and retrieval economy, serving as the basis for a variety of differentiated services.

Every participant in the Filecoin ecosystem has a role to play, as well as a stake in its success. Actors are incentivized to both cooperate and compete in ways that maximize the network’s utility. These roles often overlap; for example, miners remain key contributors to development, and token holder investment in miners and developers is critical to ecosystem growth.

The protocol underlying Filecoin pushes network participants toward behavior that is beneficial for the network. The mechanisms that reward and punish storage miners - actors on the Filecoin network that provide it with storage capacity - are a prime example of this.

Anybody can create a storage miner, but miners are not eligible to earn rewards until they onboard a minimum amount of storage to the network. The onboarded storage operates as a proof of the network’s reliability and capacity, and the network would lose reputation if these storage commitments were easily broken. As such, miners that commit capacity to the network must pledge Filecoin tokens, called FIL, as collateral, which insures against the potential that a miner fails to uphold their pledge.

In return for the risk they incur, storage miners become eligible for block rewards, which are paid out to storage miners in proportion to the amount of storage they provide to the network. Storage miners are also able to make collateralized deals with clients, who pay them FIL in exchange for storing specific data.

The network also empowers clients through [Filecoin Plus](https://www.youtube.com/watch?v=-kxNpRiEd_c), a community-governed notary program that allows approved clients to make special storage deals. These deals carry a multiplier that makes them more valuable to the storage miners that win them, giving clients leverage.

In addition to the storage economy, Filecoin implements all the building blocks necessary for retrieval services, providing the basis for a global content delivery network.

The Filecoin mainnet is now eight weeks old, and experiencing immense growth, both in terms of new miners, and new applications that leverage the platform, targeting emerging business opportunities in both the Web2.0 and Web3 spaces.

## Filecoin Circulating Supply: Mechanisms and Scenario

_The following is a summary of the talk “Filecoin Circulating Supply”, given by ZX Zhang and Colin Evran of Protocol Labs at SMS._ [_Watch the full recording here_](https://www.youtube.com/watch?v=leJHrvz-YY8#t=34m)_._

Modeling the circulating supply of Filecoin tokens is non-trivial: the actual supply is determined by a number of interdependent factors, and any model must necessarily make assumptions about those factors. While any serious modeling should be done in close consultation with the Filecoin economy whitepaper, the Filecoin specification, and the Lotus implementation of Filecoin, we can offer a brief overview of the dominant modeling considerations.

To start, it is important to highlight the difference between the _maximum_ token supply and the _circulating_ token supply. The maximum supply refers to all tokens that will ever be in existence, while circulating supply refers specifically to those tokens available for market transactions at any given point in time.

Filecoin has a fixed maximum supply of two billion FIL; however, many of these tokens have not yet been released. Furthermore, unlike Bitcoin, these outstanding tokens are not tied to a fixed released schedule. Instead, their rate of distribution is tied to the overall utility of the Filecoin ecosystem.

Outstanding tokens, released over time, constitute an inflow of tokens to the circulating supply. There are two sources of unreleased tokens: tokens used to eventually reward storage miners, and tokens owned by SAFT investors, which are vesting on variable timetables.

Seventy percent of Filecoin’s total token supply (1.4 billion tokens) is allocated to reward miners. These tokens are separated into three categories: simple minting rewards (330M), baseline minting rewards (770M), and a mining reserve (300M). Simple minting rewards are time-based, released on a six-year half-life. Baseline minting rewards, however, are performance-based, and target growth in the storage capacity of the network. Block rewards earned by miners are also subject to vesting: while 25% of these rewards are made available immediately to improve miner cash flow, 75% percent rewards vest linearly over 180 days. The mining reserve is not yet scheduled to be released; it will be up to the community to decide how to best distribute these.

There is also an _outflow_ of tokens from the circulating supply. In Filecoin, this occurs when tokens are _locked_, such as when they are provided as collateral for a deal - Filecoin Plus deals, which offer miners ten times the block rewards, also require ten times the collateral. Outflow also occurs through network transaction fees, which see some tokens consumed to compensate for the computation and storage resources to put them on-chain.

Consequently, modeling the circulating supply requires, at a minimum, making assumptions about the growth of the Filecoin network; the breakdown of network capacity into committed capacity, regular storage deals, and Filecoin Plus deals; and daily network transaction fees. Depending on these assumptions, estimates of the circulating supply can differ wildly!

Above all else, it is important to note that the economic mechanisms in the Filecoin ecosystem align stakeholders to long-term participation and investment in the network. The most important goal for the community is to make the network as useful as possible, by increasing its use cases, improving its tooling and infrastructure, and helping it scale.

## Filecoin Economy Q&A

_The following is a summary of the portion of SMS “Block 1 \[Filecoin Economy Deep Dives\] Q&A” with Juan Benet, ZX Zhang, Colin Evran, and of Protocol Labs at SMS._ [_Watch the full recording here_](https://www.youtube.com/watch?v=leJHrvz-YY8#t=1h24m54s)_._

**The Filecoin ecosystem is large and thriving, but what is lacking for there to be more equilibrium and harmony? Where can people help to build out the ecosystem?**

Filecoin is live, but the protocol right now is only on the base layer. There is a tremendous amount that can happen for new capabilities and services to be built on the protocol. In general, there are two broad categories of services that can be built on top of Filecoin. First, products to fastrack Web2 integration. Second, products to interact with Web3 systems.

**Web2.** Web2 in particular could benefit from financial services that allow the average user to interact with crypto. For most people to interact with Filecoin, a smooth experience is important. Discovery platforms are also critical for any thriving economy. We have to answer the question: how do demand and supply meet? And how do we support the reputation of the supply side? Lastly, there is a large opportunity for data services on top of the base protocol. For Web2 users, this also hinges on good UX.

**Web3.** For Web3 interaction, cross-chain integration with other smart contract systems is crucial. With that sort of integration, new products and services can be built; especially if we start thinking about how Filecoin can own and operate data for another network. There’s a tremendous amount of creativity for these ideas in particular.

Overall, however, incredible developer tooling will prove especially game-changing by allowing more developers to use Filecoin. [Powergate](https://docs.textile.io/powergate/) and [Fleek](https://fleek.co/) have done incredible work, and there are many other implementations that can allow developers to join Filecoin and not necessarily need to know everything that’s under the hood.

Storage Market Summit wrapped up on December 11, 2020. [Watch the full recording on YouTube](https://www.youtube.com/watch?v=leJHrvz-YY8).

_Disclaimers:_

- _Nothing in these presentations is investment advice._
- _Any models shown in presentations are based on many assumptions, and should not be relied upon as the source of truth. Any estimates should not be relied upon and are for illustrative purposes only. You should build your own models based on the code and the Filecoin spec._
