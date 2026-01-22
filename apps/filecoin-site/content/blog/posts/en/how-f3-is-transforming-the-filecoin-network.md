---
title: How F3 is Transforming the Filecoin Network
excerpt: >-
  Fast Finality in Filecoin (F3) is coming to the network, speeding up finality
  on the network by 450x.
share_image: /uploads/08282024-fastfinality.webp
image:
  url: /uploads/08282024-fastfinality.webp
date: 2024-09-24T19:24:59.903Z
categories:
  - updates
dim_image: true
---

Fast Finality in Filecoin (F3) is coming to the network, speeding up finality on the network by 450X. The [finality period](https://docs.filecoin.io/reference/general/glossary#finality) is the amount of time that must elapse before a block is considered completely immutable. With F3, finalization times are reduced from 7.5 hours (900 epochs) to just minutes, improving user experience and opening the door for applications, exchanges, and interoperability to build on the network.

## How it Works 

Currently, the Filecoin network uses [Expected Consensus](https://spec.filecoin.io/algorithms/expected_consensus/) (EC) as the mechanism to reach an agreement on transactions. On other blockchains, blocks and transactions represent the network's state at any given time, but this structure has drawbacks, such as network latency. Network latency can hinder potential block producers, not all valid work gets rewarded, and decentralization and collaboration in block production are not incentivized.

Unlike other blockchains, Filecoin is essentially a chain of groups of blocks called [tipsets](https://docs.filecoin.io/basics/the-blockchain/blocks-and-tipsets#tipsets), rather than a chain of individual blocks. Since all valid blocks submitted in a given round are included in the consensus, the network benefits from improved efficiency and throughput by incorporating all valid blocks in each round. This ensures incentivized block production, reduced centralization, and more collaboration. Additionally, EC allows for rapid convergence during forks since all blocks within a tipset share the same height and parent.

However, EC can take a long time for finality, creating challenges for applications built on Filecoin, especially for transactions involving smart contracts and bridges with other chains. To address this challenge and reduce finality time, [FIP0086](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md#fast-finality-in-filecoin-f3) was introduced and the change was soft-launched as part of the [NV23 Waffle](https://www.fil.org/blog/announcing-the-filecoin-nv23-waffle-upgrade-enhancing-filecoins-efficiency-and-security) upgrade to enable mainnet readiness testing.

For the Filecoin network, reduced finality times can be achieved in two incremental steps. First, the [Easy Finality Calculator](https://github.com/filecoin-project/FIPs/discussions/919) tool optimizes finality times by analyzing chain conditions and dynamically assessing the confidence level in the current chain state — all without requiring any changes to the core protocol. Second, for more deterministic faster finality, F3 integrates a new consensus protocol called [GossiPBFT](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md#GossiPBFT-Consensushttps://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0086.md#GossiPBFT-Consensus). F3 aims to give the best of both worlds: the properties of EC that give us availability and throughput, along with a dramatically faster finality.

## Why It Matters 

F3 represents one of the [biggest storage-retrieval lifecycle improvements](https://x.com/FilFoundation/status/1816890979032727563), where new onchain storage contracts from other networks can now interface with Filecoin. Thanks to enhanced network efficiency by reducing confirmation periods for Filecoin storage service events, F3 is a game-changing improvement for Filecoin builders. The upgrade creates a more responsive environment for builders to develop a wider variety of applications that require low latency, L2 subnets such as [Interplanetary Consensus](https://docs.filecoin.io/basics/interplanetary-consensus) (IPC), [smart contracts](https://docs.filecoin.io/smart-contracts/fundamentals), [chain bridges](https://docs.filecoin.io/builder-cookbook/dapps/cross-chain-bridges), and more on the network. In addition to speed, F3 and its implementation GossiPBFT provide additional layers of resilience to the network. GossiPBFT, a Byzantine fault-tolerant consensus protocol, provides the typical properties of agreement, validity, and termination. It is simple, leaderless, and designed with the Filecoin network in mind, making it resilient against stronger attacks and adversaries.

## What’s Next? 

The implementation of NV23 enables passive testing of F3 on the network, ensuring a [full implementation in NV24](https://github.com/filecoin-project/core-devs/discussions/150#discussioncomment-10214831) coming later this year.

F3 marks a significant improvement in reducing finality latency and enhancing the usability of the Filecoin network, particularly for applications that demand quick and reliable finality, making the future of Filecoin fast, secure, and accessible to a wider range of applications than ever before.

Thanks to Fil Oz, ConsensusLab, CryptoNet, and all of the teams supporting the development of F3 and fostering the innovation for tools and infrastructure to help make the Filecoin network the foremost decentralized solution for the data economy!\
\
_Original source [on the Filecoin Foundation blog](https://www.fil.org/blog/how-f3-is-transforming-the-filecoin-network)._
