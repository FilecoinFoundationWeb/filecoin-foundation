---
title: 'Solstice: Towards a Filecoin Service Economy'
excerpt: 'A new proposal, Solstice, aims to make one of the most significant changes to Filecoin’s reward system since the network launched. '
share_image: /uploads/blog-solstice.webp
image:
  url: /uploads/blog-solstice.webp
date: 2026-07-17T18:00:56.166Z
categories:
  - updates
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

A new proposal, Solstice, aims to make one of the most significant changes to Filecoin’s reward system since the network launched. It would reshape how storage providers earn rewards and how the network supports services that bring paying customers and data to Filecoin.

The basic idea is straightforward: instead of requiring providers to complete a special approval process to earn higher rewards, network consensus providers would receive full rewards automatically. At the same time, a portion of block rewards would be programmatically directed toward the services that attract customers, onboard data, and work directly with storage providers.

The Filecoin Improvement Proposal (FIP) 0118 is still a draft and is open for community feedback at: [Create fip 0118-solstice.md by irenegia · Pull Request #1270 · filecoin-project/FIPs ](https://github.com/filecoin-project/FIPs/pull/1270)

## Background on the Current System

Today, Filecoin uses a program called Filecoin Plus, or Fil+. The original goal was to reward storage providers for storing useful, verified data rather than simply adding empty capacity to the network.

In practice, Fil+ has introduced a significant amount of operational overhead. To qualify for enhanced rewards, clients need to apply for datacap, which acts as a credit confirming that their data is legitimate. That process involves reviews, approvals, and compliance checks.

Over time, this has made the onboarding sectors pipeline slower and more complex. It has also created opportunities for gaming. The FIP 0118 argues that Fil+ verification has become a weak signal of useful data, so rewards do not always reach the storage providers creating the most value for the network.

Solstice builds on what Fil+ set out to do, rewarding useful storage, and replaces the verification step with a direct signal of customer activity: onchain payment volume. It supports both sides of the marketplace. Storage providers keep earning block rewards for securing and supplying storage, while a share of rewards goes to the services bringing paying customers to the network.

## What Would Change

The proposal introduces two major changes.

First, the Fil+ system would be removed. Every new sector onboards on equal footing, earning consensus rewards in proportion to the storage it commits, with no verified and unverified tiers. Existing sectors keep their current power and terms.

Second, a portion of Filecoin's block rewards would automatically be redirected to fund services that help drive paid network usage. Today, block rewards go entirely to the storage provider that wins the block. Under Solstice, part of that reward would instead go to a new role in the network, Service Orchestrators, who are responsible for bringing paying customers to the Filecoin network.

![](</uploads/L Block Rewards (-20M AL.  year.webp>)

In simple terms, miners continue earning rewards for providing consensus and securing the storage network, while a portion of rewards would also fund the sales, service, and integration layer that brings more paying customers to the network. More demand means more value flowing to the providers already serving it.

## The Opportunity for Storage Providers

The timing of this proposal matters as much as the mechanics. Several forces are converging in the broader market right now, that point toward exactly the kind of infrastructure Filecoin storage providers have already built.

Data growth is outpacing centralized infrastructure. AI, enterprise, and machine-generated workloads are driving demand beyond available cloud capacity and into new geographies, while power grid constraints delay roughly one fifth of planned data center development. The same AI adoption is also shifting what buyers need from storage: verifiability, provenance, and durability, not capacity alone. Filecoin answers both. Its global network of independent providers added more than 59 PiB of raw storage in a single day, and its cryptographic proofs verify what is stored and that it stays stored.

These trends are already producing real deals. Aurora, an SP, is deploying Filecoin-powered storage across 100 megawatt AI compute data centers in Europe, built for multi-petabyte workloads. 375ai and Akave, another SP using Filecoin, with edge infrastructure across more than 40,000 retail, industrial, and logistics locations in the United States, is using Filecoin backed storage as the durability layer for its verifiable AI data pipeline. 

What Solstice does is give the network, for the first time, a protocol level mechanism to reward the service layer that captures this demand. The service stream creates funding that rewards one measurable thing: bringing paying customers to Filecoin and routing their workloads to storage providers. For storage providers, that means the go-to-market work gets done by specialists at scale, keeping them focused on operating their infrastructure, and subsidized by the block reward.

For more on the macro tailwinds shaping this moment, see: [Why Macro Trends Are Moving in Filecoin's Favor](https://filecointldr.io/article/why-macro-trends-are-moving-in-filecoins-favor).

## Governance Tiers and Functions

Solstice introduces two new governed contracts, the Stream Weights Actor and the Service Rewards Actor, that parameterize the built-in reward actor (f02), which does the actual splitting.

Stream Weights Actor (SWA). The SWA controls how each block reward is divided among streams. At launch there are two: the consensus stream, paid to the winning miner each epoch, and the service stream, paid to registered Orchestrators. The SWA manages the weight schedule: consensus share ramps from 95% down to a 50% floor, and service share steps up from 5% in 5 percentage point increments, but only when quarterly on-chain Filecoin Pay volume clears a verifiable USD target. Whatever share leaves consensus but has not been earned by the service stream is burned. Every discretionary SWA change requires a published FIP, sign-off from both Safes operating the first decision-making surface, and a seven day hold enforced at the L1. f02 itself queues and delays the write, so no weight can shift without the community having time to see and object. Gate step-ups are mechanism-executed and not cancellable.

Service Rewards Actor (SRA). The SRA determines how the service stream is split among registered Orchestrators. Each quarter it computes each Orchestrator's share from their verified Filecoin Pay volume and writes the wallet-to-share map directly into f02, which pays each Orchestrator wallet every epoch. The SRA never holds funds and is never on the value path. It also maintains the Orchestrator registry: which entities are admitted, which (payer, operator) pairs are attributed to each Orchestrator, and which stablecoin and Filecoin Pay contract addresses count toward volume. Registry changes require both Safes operating the second decision-making surface and a cancellation hold, but no FIP.

Service Orchestrators. Orchestrators are the registered entities whose on-chain payment activity drives the service stream. Their protocol interaction is narrow: they register the (payer, operator) pairs whose Filecoin Pay volume counts toward them, post their quarterly volume figure to the SRA in stablecoin and FIL components recomputable by anyone from public settlement events, and receive their share of the service stream each epoch directly from f02. They are not a decision-making surface. At launch a single Orchestrator is registered; the second decision-making surface can admit more over time, with permissionless registration as the Phase 2 goal.

Together: f02 splits every block reward by the current weights; the SWA sets those weights and governs when the service share can grow; the SRA determines how that share is divided based on measured volume; and Orchestrators generate the client demand that justifies the funding increasing over time.

## What This Means for Storage Providers

Storage providers are the direct beneficiaries as Filecoin’s service economy grows. The shift Solstice makes is about accelerating the demand side of the network that makes providing storage capacity on the network highly attractive.

The most significant community-advocated change is that the Fil+ system goes away. No more datacap applications, allocator reviews, or compliance overhead. Every sector onboards on equal footing with full rewards from day one. For providers who have spent years navigating that pipeline, this alone is a meaningful operational improvement.

The bigger opportunity is what the service stream funds. As that client pipeline grows, so do the deals and direct revenue storage providers earn from serving real customers. Revenue for storage providers increases because paying customers are coming to the network.

For providers running newer storage proof systems; such as Proof of Data Possession (PDP) for hot data and retrieval workloads; Solstice removes a meaningful barrier. Service funding is not tied to any specific proof system. Whether a storage provider runs PoRep, PDP, or whatever the market demands, the incentive structure accommodates it.

At launch the service portion is 5% of each block reward, with 95% flowing directly to miners as the consensus share. Over roughly nine quarters the consensus share steps down on a published schedule toward a 50% floor, opening up more room for service funding. That room does not fill automatically: the service portion steps up only when payment volume flowing through Filecoin Pay clears a verifiable on-chain target for that quarter. When the target is met the step-up executes automatically, no governance approval required. When it is not, the service portion holds and the gap is burned, permanently removing those tokens from supply. 

This means the burn rate is directly tied to revenue: as the network wins more real paying business, more of the issuance flows to service funding and less is burned. Every step up is therefore evidence that the revenue opportunity for SPs is growing alongside it, and every missed step tightens supply instead of distributing funds the network has not yet earned. 

## Read and Share Your Perspective

Read the full proposal at [Create fip 0118-solstice.md by irenegia · Pull Request #1270 · filecoin-project/FIPs](https://github.com/filecoin-project/FIPs/pull/1270). The discussion is open until later this month. After the feedback period, the authors will incorporate community input into the draft and progress through the FIP process.
