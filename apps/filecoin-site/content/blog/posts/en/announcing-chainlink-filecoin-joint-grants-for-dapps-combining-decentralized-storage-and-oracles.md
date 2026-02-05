---
aliases: []
author: ""
categories:
  - updates
date: "2021-08-06T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Chainlink and Filecoin are launching a joint grant initiative to accelerate
  development of hybrid smart contracts that combine Chainlink decentralized
  oracles and Filecoin decentralized storage within a single application.
image:
  alt: ""
  url: /uploads/frame-57.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-and-chainlink-integration.en.md
related_article_2: content/blog/posts/filecoin-news-15.en.md
related_article_3: content/blog/posts/building-web3-filecoin-ethereum-better-together.en.md
share_image: /uploads/frame-57.webp
title: >-
  Announcing Chainlink-Filecoin Joint Grants for dApps Combining Decentralized
  Storage and Oracles
_template: blog_detail
---

[Chainlink](http://chain.link/) and [Filecoin](https://filecoin.io/) are launching a joint grant initiative to accelerate development of [hybrid smart contracts](https://blog.chain.link/hybrid-smart-contracts-explained/) that combine Chainlink decentralized oracles and Filecoin decentralized storage within a single application.

Hybrid smart contracts leverage code running on the blockchain (on-chain) with data and computation from outside the blockchain (off-chain). Such dual architecture enables advanced forms of economic and social coordination that retain the tamper-proof and immutable properties of blockchains while getting additional capabilities through secure off-chain oracle services such as scalability, confidentiality, and connectivity to real-world data sources or systems.

By bringing together Filecoin and Chainlink, developers can build end-to-end decentralized applications that have cost-efficient and immutable storage capabilities along with a universal and secure connection to external resources.

This grant initiative comes on the heels of several other joint efforts between the Filecoin and Chainlink communities. For starters, Chainlink and Filecoin have been [working on Chainlink External Adapters](https://filecoin.io/blog/posts/filecoin-and-chainlink-integration/) to facilitate bi-directional communication between the two projects. Additionally, the Chainlink Labs team joined the Filecoin Launchpad Accelerator as an advisor for the second cohort of projects, helping them extend the functionality of their applications using oracles.

Filecoin also sponsored prizes in the widely attended Spring 2021 Chainlink Hackathon, with several dual Filecoin- and Chainlink-enabled projects being accepted into the Filecoin Launchpad Accelerator, such as Tamago, Nifty Royale, and [CryptOrchids](https://cryptorchids.io/).

The new joint grant program aims to support and promotes even deeper integrations between Chainlink and Filecoin by encouraging developers to create workflows that directly combine the two networks. This can be achieved in several key ways, all possible via custom-built [Chainlink External Adapters](https://docs.chain.link/docs/external-adapters/):

1. **Smart Contract Inputs** — Use Chainlink oracles to bridge cryptographically-proven data stored on Filecoin into blockchains. The data can then be used as inputs to trigger the execution of a smart contract application on a network like Ethereum.
2. **Smart Contract Outputs** — Allow smart contracts to send outputs to Filecoin as commands for data storage, with Chainlink oracles bridging the two environments.
3. **Smart Contract Automation** — Leverage Chainlink Keepers to trigger an oracle job for inputs or outputs based on predefined conditions, such as regular time-intervals or market activity.

Given the rapid growth of hybrid smart contract applications, it’s logical that they will continue to generate and consume larger amounts of data—necessitating the need for greater storage requirements while maintaining the tamper-resistance and availability guarantees of blockchains. The bi-directional communication capabilities of Chainlink middleware makes communication between Filecoin and external blockchains possible, which extends the immutable data storage capabilities of smart contracts.

## Apply for a Joint Grant From Chainlink and Filecoin

The Chainlink and Filecoin joint grant initiative is supporting up to five teams building superior hybrid smart contract applications powered by tamper-proof file storage and universal connectivity. In essence, the co-sponsored grants are for developers who are extending the Web3.0 stack beyond on-chain computation and into decentralized off-chain computation, data, and storage.

Below are just a few examples of possible hybrid smart contract applications, but all proposals combining Chainlink and Filecoin are encouraged:

- **Filecoin Miner Insurance** — Chainlink oracles can inform external smart contracts when a Filecoin miner is unreliable. If the oracles cannot retrieve data from storage or determine the miner is offline, an insurance payout can be issued automatically to policyholders on another blockchain.
- **Data Bounties** — Smart contracts can pool together funds for the storage of a particular piece of data, as characterized by its unique content identifier (CID). The payment is triggered once the proof that it has been stored on the Filecoin Network is relayed from Chainlink oracles.
- **Perpetual Storage** — Smart contracts on other blockchains can fund and verify storage on Filecoin thanks to the bidirectional connection of Chainlink. Contracts can be built on networks like Ethereum where anyone can deposit and fund the storage of data at specific intervals on Filecoin.
- **DeFi Data** — Smart contracts can use Chainlink’s oracles to store extensive amounts of financial data on Filecoin in a tamper-proof manner, which can be delivered on-demand to smart contracts on various blockchains to create more interoperability.
