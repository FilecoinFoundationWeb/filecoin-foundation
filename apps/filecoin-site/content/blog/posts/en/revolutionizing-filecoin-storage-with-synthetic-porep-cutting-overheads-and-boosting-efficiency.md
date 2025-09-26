---
title: >-
  Revolutionizing Filecoin Storage with Synthetic-PoRep: Cutting Overheads and
  Boosting Efficiency
draft: false
excerpt: >-
  In this blog post, we delve deep into the challenges posed by PoRep's large
  storage overhead and explore how Synth-PoRep is poised to change the game,
  offering massive storage savings and lower gas costs while synergizing
  seamlessly with SupraSeal optimizations.
share_image: /uploads/0Synthetic-PoRepBlogPost.webp
image:
  url: /uploads/0Synthetic-PoRepBlogPost.webp
date: 2023-10-03T16:04:55.865Z
categories:
  - updates
dim_image: true
author: Jake (@drpetervannostrand)
---

## PoRep’s Large Storage Overhead

Currently, Storage Providers must retain the equivalent of twelve sectors of data while running the PoRep protocol; one sector of encoded user data (called the replica) and eleven sectors worth of byproduct data generated during the replica’s encoding process (specifically, the labels of an eleven-layer stacked depth-robust graph). The one-sector replica produced during PoRep is persisted for a period of time, specified by that replica’s storage deal, following the protocol’s conclusion, whereas the eleven sectors worth of byproduct data are stored only for the protocol’s duration. This large intermediary data, referred to as the protocol’s storage overhead, is sizable enough to negatively impact Storage Providers and serve as a bottleneck to the Filecoin network’s overall PoRep throughput.

Additionally, the PoRep protocol enforces a time delay period of 150 epochs (75 minutes) between its replica and proof generation phases. During which, Storage Providers await the production of on-chain randomness that defines their replica’s PoRep proof challenges. This delay period significantly  prolongs protocol runtime, and thus, prolongs the time that Storage Providers must allocate resources to the storage of PoRep’s large overhead data.

![](/uploads/SynthPoRepBlog3.webp)

Ideally, Storage Providers would not incur this storage overhead as the combined effects from its size and retention time may have negative financial implications, as well as limit Storage Providers’ ability to perform additional PoReps in parallel. Synthetic-PoRep (Synth-PoRep) is a proposed addition to the standard PoRep protocol that greatly reduces storage overhead, while not imposing new costs on Storage Providers or reducing protocol security. Synth-PoRep is a minimally invasive change to the current protocol and is currently implemented as an optional feature, thus its usage will be at the discretion of Storage Providers who wish to take advantage of it in future instances of the PoRep protocol.

## Removing Overhead Data via Preemptive Proof Generation

A naive solution to the storage overhead problem is for a Storage Provider to, immediately after replica production, generate a PoRep proof for every possible PoRep challenge that may be issued for their replica. Retention of PoRep’s large overhead data is necessary only for PoRep proof generation, thus once a Storage Provider has stored proofs for all possible  challenges, their overhead data could be removed from storage. Once these proofs are stored and overhead data freed, the Storage Provider would proceed through the PoRep protocol in the usual fashion: first by sustaining the protocol’s 150-epoch delay, then receiving the challenges for their replica’s PoRep proof. Upon challenge issuance, the Storage Provider would remove all extraneous challenge proofs from disk and compose a final PoRep proof from those requisite challenge proofs retained on disk.

While this strategy of preemptively generating proofs ahead of challenge assignment allows Storage Providers to immediately free PoRep’s overhead data, the set of possible PoRep challenges is so large that the storage consumed by its proofs actually exceeds that of the overhead data freed. Although preemptive proof generation alone does not yield a net reduction in PoRep’s storage requirement, it will be employed by Synth-PoRep to achieve our desired result.

## Synth-PoRep

Synth-PoRep allows Storage Providers to free PoRep’s eleven-sector overhead data almost immediately after replica generation. It accomplishes this by combining the preemptive proof generation strategy above with a secure size reduction in the set of all possible PoRep challenges (referred to as PoRep’s challenge space). Synth-PoRep constrains the standard PoRep challenge space to a great enough extent that preemptively generating proofs for all potential challenges consumes just a small fraction of the eleven sectors worth of storage space freed.

Synth-PoRep uniquely contracts the PoRep challenge space for each replica by employing pseudorandomness, derived from each replica’s cryptographic commitment (called CommR), to sample a smaller subset of the standard challenge space; the challenges issued for a Synth-PoRep replica will be limited to that replica’s sampled subspace of challenges. This sampled subset of challenges for a replica is referred to as that replica’s synthetic challenges.

![](/uploads/SynthPoRepBlog4.webp)

Having introduced the the strategies of preemptive proof generation and challenge space reduction, we can now outline the Synth-PoRep protocol from the perspective of a Storage Provider:

1. The Storage Provider generates a replica
2. A commitment to the replica CommR is generated and published
3. The replica’s synthetic challenges are sampled using randomness inherent in CommR
4. A PoRep proof is generated and stored for each synthetic challenge
5. The eleven sectors worth of overhead PoRep data are freed from storage
6. The 150-epoch PoRep delay period concludes and the replica’s PoRep challenges are issued; these challenges are guaranteed to be a subset of the replica’s synthetic challenges
7. The Storage Provider generates a PoRep proof for the issued challenges using the corresponding proofs previously stored on disk; the PoRep proof is then published to the network
8. The Storage Provider frees all data generated during PoRep excluding the one-sector replica

![](/uploads/SynthPoRepBlog2.webp)

## Storage Savings

The standard PoRep protocol requires the storage of twelve sectors worth of data, eleven of which are allocated to intermediary overhead data. For the standard sector size of 32 GiB, PoRep consumes 384 GiB of storage, 352 GiB of which are overhead. Synth-PoRep allows Storage Providers to free the 352 GiB overhead at the cost of storing a PoRep proof for each of a replica’s synthetic challenges.

The standard PoRep challenge space contains 230 challenges, whereas Synth-PoRep’s reduced challenge space contains 218 challenges. The size of a PoRep proof for a single challenge is roughly 42 KiB, thus the storage consumed by all of a replica’s 218 synthetic challenge proofs is roughly 11 GiB. Trading off storage of PoRep overhead data for synthetic challenge proofs yields a net savings of 341 GiB of storage space; equivalent to a 96% reduction in PoRep storage consumption. For 64 GiB sectors the storage savings are even greater with 704 GiB of overhead data being traded for 11 GiB of synthetic challenge, Synth-PoRep yields a 98% reduction in PoRep storage consumption.

![](/uploads/SynthPoRepBlog5.webp)

## Lower Gas Costs

The storage saved while running Synth-PoRep has the additional benefit of reducing gas costs for Storage Providers. A Storage Provider may perform multiple PoRep protocols in quick succession or parallel, accumulating each’s requisite network messages, then broadcasting those messages as a single batched message. Batched messages have a much lower gas cost per PoRep than unbatched messages, thus Storage Providers can achieve optimal gas usage by batching as many PoReps together as their hardware will allow. However, PoRep’s large storage overhead limits the number of PoReps that a Storage Provider can maintain in storage simultaneously, thus lowering their PoRep batch sizes and resulting in suboptimal gas consumption. Synth-PoRep’s massively reduced storage footprint allows Storage Providers to retain the data of greater numbers of PoReps parallel, thus increasing their maximum PoRep batch sizes and reducing gas costs. Additionally, the Filecoin network as a whole benefits from Synth-PoRep as the maximum number of PoReps that the Network can perform at a given time (PoRep throughput) increases. These benefits are even more impressive considering that they require no changes be made to the hardware currently deployed by Storage Providers.

## Synergy with SupraSeal

Recently, Supranational released SupraSeal, a series of optimizations that greatly improve the efficiency of running both a single PoRep and multiple PoReps in parallel. These optimizations are incredibly valuable, however PoRep’s large storage overhead still serves as a limiting factor to Storage Providers' abilities to maintain the data of multiple PoReps simultaneously. Storage Providers who utilize Synth-PoRep to drastically reduce PoRep’s storage overhead will be able to take maximum advantage of SupraSeal’s highly-efficient parallelized PoRep generation.
