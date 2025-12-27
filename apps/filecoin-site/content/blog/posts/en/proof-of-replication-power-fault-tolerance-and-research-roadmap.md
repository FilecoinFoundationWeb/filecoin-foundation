---
aliases:
  - /blog/proof-of-replication-power-fault-tolerance-research-roadmap/
author: ""
categories:
  - updates
cover_feature: false
date: "2017-07-27T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  At Protocol Labs we are charting a course to the future, but we also know that
  the details make or break the plan.
image:
  alt: "Proof-of-Replication, Power-Fault-Tolerance and Research Roadmap"
  url: /uploads/proof-of-rep-1.svg
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/proof-of-rep.svg
title: "Proof-of-Replication, Power-Fault-Tolerance and Research Roadmap"
_template: blog_detail
---

At Protocol Labs we are charting a course to the future, but we also know that the details make or break the plan. We love thoroughly explaining the reasons we think a decentralized storage network is worth building (and [have!](https://coincenter.org/entry/why-is-decentralized-and-distributed-file-storage-critical-for-a-better-web)). At the same time, we’re also more than willing to openly discuss the challenges of implementing such a system. In fact, since the original Filecoin Paper was posted in 2014, the team has been working on building various logistical and cryptographic components necessary for decentralizing the internet’s storage. In this post, we introduce two of those components: Proof of Replication and Power Fault Tolerance.

[IPFS](https://ipfs.tech/) is the largest and most visible component that we have constructed at Protocol Labs so far. This open source protocol is built on [IPLD](https://ipld.io/) and [libp2p](https://libp2p.io/) (also by Protocol Labs) and serves to efficiently address, locate, and transfer content from peer to peer, as an alternative to the classical (HTTP) web. This protocol is a requisite for a decentralized storage network, and continues to be improved and adopted by an increasingly diverse collection of decentralized applications and data archival groups.

Once we have built an efficient addressing and distribution protocol, it’s clearly necessary to incentivize people to host these files. Our aim has been to develop the most secure and robust reward system while still keeping file transfers efficient. We’ve summarized the results of this effort in the new Filecoin Paper, described [here](https://filecoin.io/vintage/filecoin.pdf). Along the way we had to solve multiple self-contained subproblems within the protocol. Some of this work was done in collaboration with various academic experts at the forefront of cryptography.

In the spirit of open source, we’re posting this blog post with a short roadmap and two technical reports on some of those subproblems. The following documents illustrate our progress to date in developing solutions. We will expand and improve upon them over time.

## [Research Roadmap for 2017](https://filecoin.io/vintage/research-roadmap-2017.pdf)

This document opens with a description of how far Filecoin has come and then describes the results that have been presented this year. We consider the core of the Filecoin protocol design to be stable, though we are open to improvements on some of its pieces.

The remainder of the Research Roadmap is a list of known future work and remaining open problems to be tackled in the remainder of 2017: finishing these papers, implementing Filecoin, making progress on outlined future work, and searching for solutions to a set of open problems.

### Research Roadmap 2017

## [Proof of Replication](https://filecoin.io/vintage/proof-of-replication.pdf)

**Problem:** Clients will require storage providers to store multiple copies of the same data for reliability and availability. Attackers may attempt to get paid for storing multiple copies of data when in reality they only have a single copy. We need miners to prove they’re storing each and every copy of the data they claim they’re storing.

We developed the Proof-of-Replication, which solves this problem and a number of other malicious miner attacks. This involves a new kind of Proof-of-Storage where each physical copy is unique.

### Proof-of Replication

## [Power Fault Tolerance](https://filecoin.io/vintage/power-fault-tolerance.pdf)

**Problem:** In the standard conception of [Byzantine Fault Tolerance](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance), various parties must reach consensus in a protocol where influence over the procedure is distributed equally and discretely. This does not accurately model consensus protocols based on Proof-of-Work, Proof-of-Stake, and others.

We present a formalism of Power Fault Tolerance, which cleanly generalizes Byzantine Fault Tolerance to situations where influence is distributed continuously and unequally.

### Power Fault Tolerance

We welcome your feedback, collaboration, and conversation: [research@protocol.ai](mailto:research@protocol.ai)
