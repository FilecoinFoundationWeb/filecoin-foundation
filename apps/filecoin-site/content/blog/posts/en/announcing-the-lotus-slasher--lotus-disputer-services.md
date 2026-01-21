---
title: Announcing the Lotus Slasher & Lotus Disputer Services
draft: false
excerpt: "The Lotus Team is excited to introduce the new Lotus Slasher and enhanced Lotus Disputer in partnership with our friends over at StorSwift!"
share_image: /uploads/fil-retrieval-market-lotus-1.webp
image:
  url: /uploads/fil-retrieval-market-lotus-1.webp
date: 2023-08-17T14:20:15.121Z
categories:
  - updates
dim_image: true
author: James Bluett
related_article_1: content/blog/posts/the-evolution-of-a-lotus-node.en.md
---

The Lotus Team is excited to introduce the new Lotus Slasher and enhanced Lotus Disputer in partnership with our friends over at [StorSwift](https://storswift.com/)! These two essential services provided by the Filecoin protocol play a crucial role in maintaining the network's integrity, preventing malicious activities, and rewarding active participants.

## Lotus Slasher

The Filecoin protocol enforces penalties for three types of Consensus Faults that can be committed by block producers. With the Lotus Slasher service, any user running a Lotus node can detect and report these faults. This service diligently monitors all incoming blocks for potential Consensus Faults and takes action by invoking the ReportConsensusFaultmethod on the respective miner actor.

When a consensus fault is successfully identified by the Lotus Slasher:

- The block producer responsible for the fault is fined an amount equivalent to 5 times the current epoch’s block reward value.
- They are barred from producing any further blocks for a full finality period of 900 epochs.
- The offending block producer is also prohibited from pre-committing or recovering storage during this period.
- The successful Lotus Slasher operator receives a reward equal to 25% of the current epoch’s block reward value.

## Lotus Disputer

WindowPoSTs are vital daily proofs submitted to ensure the continued storage of all data on the Filecoin network. These proofs are accepted and recorded off-chain to reduce the burden on Storage Providers and network bandwidth. The Lotus Disputer service enables third-party Lotus node operators to verify accepted WindowPoST proofs off-chain using the DisputeWindowedPoSt functionality.

In case a Lotus Disputer successfully challenges an optimistically accepted Window PoST:

- The Storage Provider responsible for the faulty proof is fined based on the proportion of the expected block reward they would have received from each incorrectly proved sector.
- All sectors with incorrect proofs are marked as faulty.
- The successful Lotus Disputer operator is rewarded with a fixed DisputeReward, currently set at 4FIL.

Both the Slasher and Disputer services are designed to be efficient and lightweight, ensuring no detrimental effect on the performance of your Lotus node.

Check out our new [Lotus Slasher and Lotus Disputer video tutorial](https://www.youtube.com/watch?v=akJd6-2kR3Q)!

For detailed information, configurations, and setup instructions, please visit the [official documentation](https://lotus.filecoin.io/lotus/manage/slasher-and-disputer/).
