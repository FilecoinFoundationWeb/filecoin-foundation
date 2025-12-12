---
aliases:
  - /blog/filecoin-testnet-mining/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-12-10T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Becoming a Filecoin miner is an opportunity for community members to help
  store and preserve access to humanity’s most important information. By
  providing network security and infrastructure, Filecoin miners help build a
  more open, resilient, and trustworthy Internet.
image:
  alt: Filecoin Testnet Mining
  url: /uploads/testnet-mining-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/testnet-mining-english-social.webp
title: Filecoin Testnet mining
_template: blog_detail
---

_Updated as of December 13th, 2019_

Becoming a Filecoin miner is an opportunity for community members to help store and preserve access to humanity’s most important information. By providing network security and infrastructure, Filecoin miners help build a more open, resilient, and trustworthy Internet.

Filecoin mining is a novel opportunity to earn revenue from providing data storage and retrieval services to clients across a vast network. Miners earn fees by storing and retrieving client information on the Filecoin network. **The more client data a Filecoin miner stores, the more that miner’s storage power grows. More storage power on the network means it is more likely a specific miner can generate blocks and win block rewards.** Miners can choose whether to participate in storage power consensus, storage mining, and/or retrieval mining. We anticipate many miners will provide focused, specialized services within these categories.

The mining hardware you put on the Filecoin network will provide useful data storage services for clients in addition to providing network security and block production. This differentiates mining on the Filecoin network from traditional _Proof-of-Work_ networks.

Reallocating excess storage capacity to run Filecoin nodes turns your once latent storage assets into a secure storage service. The block production, storage and retrieval services that miners provide are incredibly valuable to Filecoin’s ecosystem. By bringing many miners and storage providers together in a decentralized network, Filecoin unites storage providers in the first-ever algorithmic marketplace for hiring data storage.

Ready to hear more? Keep reading to understand how to get started.

## How to Join the Filecoin Testnet

To join the upcoming Filecoin testnet, you’ll need appropriate hardware and to install and set up the [lotus](https://github.com/filecoin-project/lotus/blob/master/README.md) implementation. For more information about installation and setup, please see [the lotus docs](https://lotus.filecoin.io/).

Next, you’ll need to pledge filecoin tokens as collateral to set up your miner. “Pledge collateral” is an initial amount of filecoin that is required to join the network as a storage miner. A miner must also deposit more “deal collateral” over time as it enters each additional storage deal with clients. Collateral is deployed on the network to ensure miners behave appropriately, and it is denominated in FIL tokens. Details about collateral will be finalized in the [Filecoin spec](https://filecoin-project.github.io/specs/#pledge-collateral) over the coming weeks. During testnet, you can retrieve test filecoin from our network [faucet](https://faucet.testnet.filecoin.io/) to use as collateral to start mining. Test filecoin do not have any value – the official filecoin tokens will not be released until mainnet launch.

## Protocol Labs’ Standard Hardware Testing Configuration

**_(please read carefully)_**

**CAUTION: This section describes the standard testing configuration the Protocol Labs team has used to test Filecoin storage mining on the lotus implementation. There is no guarantee this testing configuration will be suitable for Filecoin storage mining at mainnet launch. If you need to buy new hardware to join the Filecoin testnet, we recommend to buy no more hardware than you require for testing.**

**Our standard testing configuration is one of many possibilities for Filecoin testnet mining. We expect testnet miners to find additional hardware combinations, some of which might be more efficient than the testing configuration described below. If you’re running lotus with alternate hardware configurations, please run the** [**lotus benchmarking tool**](https://lotus.filecoin.io/storage-providers/operate/benchmarks/) **and post your results in this** [**thread**](https://github.com/filecoin-project/lotus/issues/839)**.**

Sector sizes and minimum pledged storage required to mine blocks are two very important Filecoin testnet parameters that impact hardware decisions. We will continue to refine these parameters (and other proofs parameters) during testnet. **Because of this, our standard testing configuration for Filecoin mainnet may change.**

**Sector Sizes:** If you choose to purchase hardware to test on the Filecoin testnet, we recommend you buy computational hardware that will support sealing 32GiB sectors. Testnet will temporarily support 1GiB “test-sectors” so miners can easily on-board to the network. This small sector size is not realistic for mainnet. We will perform a fork upgrade to discontinue support for 1GiB “test-sectors” after testnet launch, and will announce the timing and mechanics of the upgrade on our blog.

**Miner Size:** To be eligible for block mining during testnet (not just accepting storage deals), a miner must pledge at least **512GiB of disk storage. This requirement will likely increase for Filecoin mainnet.** If you’re only interested in participating in storage deals, you can join the network with less storage. However, your proven storage will not count towards total network power and will not enable you to earn block rewards if you currently have under 512GiB pledged to the network.

Below is the configuration we have tested for sealing 32GiB sectors on lotus. The configuration is based on the steps required in the Filecoin mining process. **We made specific trade-offs related to computational power in our standard testing configuration (i.e., we allocate resources for GPUs instead of more CPU power). It is possible to mine on testnet with other configurations, but since we haven’t tested all of them, we will not cover their viability or performance in this post.**

## Storage

Filecoin rewards miners for the storage they provide to the network. **Miners should be able to use most commodity HDDs, SSDs, or other types of disks to provide bulk storage to the network**, and it is to the miner’s advantage to architect a system that allows for scaling addition of harddrives.

Filecoin is relatively unopinionated about the form of storage provided to the network, however it is important to reiterate that the storage medium used for providing storage to the network **will be read** during Election PoSt. For this reason, we recommend choosing a storage medium that can perform reads quickly (i.e., not cold storage).

Currently in our testing configuration, a commodity harddrive provided sufficient read speeds to fit within the ElectionPoSt epoch window. Miners should consider the time budget allotted for Election PoSt and derive their own requirements based on the speed of their network and compute resources. For more information about Election PoSt, please see [Proof-of-Spacetime](https://filecoin.io/blog/filecoin-testnet-mining/#proof-of-spacetime).

![Storage](https://filecoin.io/vintage/images/blog/dark-servers-center-room-with-computers-storage-systems_117023-894.jpg)

## Proof-of-Replication

We’re testing with a powerful CPU (with at least 8 cores) to replicate client data during _Proof-of-Replication_ (“PoRep”). A powerful CPU allows a miner to process data faster and generate PoReps more quickly to gain power on the network.

The replication process utilizes fast disks for offloading data from memory onto disk. For this we’ve tested with SSDs (512GB) that function as a large cache to store unsealed sectors-in-transit (during the pre-commit and commit phases of PoRep) and to cache during the sealing process.

Our standard configuration also runs with a large amount of RAM (128GB). RAM is needed to compute data replication in memory, and currently has a 2-3x relationship to sector size. The circuits we designed to run during SNARK generation in both PoRep and PoSt are very large and will consume a significant amount of RAM. These large circuits minimize the footprint of the SNARK output of proofs for efficient on-chain submission.

We also use significant GPU power to generate SNARKs in a more time-efficient and cost-effective way. SNARKs are generated on PoRep proofs of each sealed replica and the SNARK output is submitted to the chain. We specifically note the lotus implementation is designed for **NVIDIA-manufactured** GPU chips, however, we anticipate supporting cards from other manufacturers in the future. As we continue to fine-tune our proofs parameters, we expect mainnet circuits to require more computational power than testnet circuits.

We observed in our testing that it can be more efficient to have multiple “sealing machines” working across a range of storage instead of running the entire set of Filecoin mining processes on a single machine (sealing and PoSt). This allows a miner to efficiently run multiple processes at a time.

For more information about how the Proof-of-Replication process relates to mining hardware, see our diagram below:

[![PoRep](https://filecoin.io/vintage/images/blog/porepgraphicv2-watermark.png)](https://filecoin.io/vintage/images/blog/porepgraphicv2-watermark.png)

## Proof-of-Spacetime

Our test configuration accounts for storage overhead – we currently estimate overhead as 2x pledged storage, but this could change for mainnet. We’re currently running \~1.5TB in disk storage for sealed sectors, but we believe there are more efficient ways to configure sealed storage to reduce overhead. We’re also testing with fast and parallelized disk access to sealed sectors for generating tickets to potentially win election tickets for block rewards in _Election Proof-of-Spacetime_(“ElectionPoSt”).

When running PoSt processes, our current testing configuration stores sealed sectors on hard disks that continually operate (24⁄7) due to frequent reads for submitting PoSt.

**SNARKs are run during ElectionPoSt _only if_ a miner has winning election tickets for earning block rewards during a given epoch period.** Our configuration uses GPU power to compute PoSt SNARKs output well within (\~20 seconds) each epoch period each time our miner wins an election ticket. GPU power needed for PoSt largely depends on how many winning election tickets a miner has during any given epoch, which is related to their proportion of storage in the network.

We also suggest a relatively low latency network connection to submit PoSt on time. If a miner fails to submit PoSt on time many times, it could lead to winning fewer block rewards and increase the risk of being slashed.

For more information about how the ElectionPoSt process relates to mining hardware, see our diagram below:

[![ePoSt](https://filecoin.io/vintage/images/blog/testnet-mining-epost-watermark.png)](https://filecoin.io/vintage/images/blog/testnet-mining-epost-watermark.png)

## Filecoin Mining is NOT Proof-of-Work GPU Mining

**Remember, Filecoin mining is based on storage power consensus:** having **more power on the network** (proven storage) is directly related to winning more block rewards. **The amount of a miner’s power on the network is linear with respect to the amount of storage the miner puts on the network, not the amount of GPUs it runs. By comparison, in _Proof-of-Work_ GPU mining, a miner must compete on GPU power to win block rewards. In Filecoin mining, a miner competes on storage power consensus and not GPU power. Miners use GPUs during ElectionPoSt only if they have winning election tickets.** The best and cheapest way to gain power is by adding more useful storage to the Filecoin network.

If you’re a smaller miner worried about the cost of GPUs, rest assured that we’re working to enable miners to securely outsource SNARK computation to third party service providers.

Now that you know about the gear, get ready to put it to work! You’ll have the opportunity to join the lotus testnet soon.

If you’re curious for more detail about the components of the Filecoin network, check out the [Filecoin spec](https://filecoin-project.github.io/specs). Have questions about the topics discussed in this post? Please ask them in the appropriate category in our [discussion forum](https://discuss.filecoin.io/). For real-time troubleshooting around setting up your node, connecting to the Filecoin testnet, and more, please use the help channels in the Filecoin [chat](https://filecoin.io/#community).

Thank you for supporting our team!
