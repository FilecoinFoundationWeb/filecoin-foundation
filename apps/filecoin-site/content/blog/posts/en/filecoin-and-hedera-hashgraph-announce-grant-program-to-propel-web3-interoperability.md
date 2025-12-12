---
aliases: []
author: ""
categories:
  - updates
date: "2021-07-27T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Today, Filecoin and Hedera Hashgraph are announcing a joint effort to advance
  the interoperability of Web3.
image:
  alt: ""
  url: /uploads/fil-blog-2021-xx-xx-hedera.webp
main_feature_inverted: false
related_article_1: content/blog/posts/starling-lab-establishing-trust-for-humanity-s-data.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-xx-xx-hedera.webp
title: >-
  Filecoin and Hedera Hashgraph Announce Grant Program to Propel Web3
  Interoperability
_template: blog_detail
---

Today, Filecoin and [Hedera Hashgraph](https://hedera.com/) are announcing a joint effort to advance the interoperability of Web3. Starting with a USD $200,000 grants program and an initial demo implementation for NFT use cases, the long-term vision is a full range of distributed ledger solutions, including distributed consensus, storage, and smart data applications, that combine the strengths of both networks.

The Hedera public network is a fast, low-cost, and eco-friendly distributed ledger technology (DLT), designed for high-volume usages such as supply chain, [verifiable proofs for data](https://hedera.com/users/hala-systems), [payments](https://hedera.com/blog/eftpos-pioneers-new-ecommerce-micropayments-solution-using-hedera-hashgraph), [advertising](https://hedera.com/users/adsdax), [tokenization of assets](https://hedera.com/users/toko-by-dla-piper), and more. The Hedera network is incredibly efficient and lightweight, but it’s not ideal for storing large files or object data due to cost constraints.

Filecoin and Hedera have a history of technical collaboration among various projects. Hedera brings highly efficient DLT capabilities, while Filecoin offers a robust, flexible large-scale storage layer. Combining both networks provides new possibilities to verify the provenance, ownership, and validity of both transactions and their underlying data.

## Providing Decentralized Storage to Hedera NFTs

Hedera Improvement Proposal 10 ([HIP-10](https://github.com/hashgraph/hedera-improvement-proposal/blob/master/HIP/hip-10.md)) offers an ecosystem standard for NFT metadata. To bolster this new functionality, Filecoin (specifically, the [NFT.storage](http://nft.storage/) service) enables decentralized storage of the JSON schema containing those NFT properties and multimedia or localization data.

Combining Filecoin and Hedera delivers a truly decentralized NFT experience. Filecoin acting as a decentralized storage layer for NFTs on the Hedera network ensures a maximum amount of trust for in-game assets, art, music, supply chain, financial applications, and more.

The open-source reference implementation and demo showcase how you can issue NFTs on Heder and store that data on Filecoin using the NFT.storage API: [https://github.com/hashgraph/hedera-hts-demo/](https://github.com/hashgraph/hedera-hts-demo/ "https://github.com/hashgraph/hedera-hts-demo/").

## Starling Lab: Real-world utilization of Filecoin and Hedera

[The Starling Framework for Data Integrity](https://hedera.com/users/starling) is a joint effort developed by the USC Shoah Foundation and Stanford University’s Department of Electrical Engineering. The initiative aims to create a set of tools and principles to be used across non-profit organizations, news outlets, and industry experts to solve challenges regarding the uncertainty of the media we see today and our enduring effort to preserve the truth. Starling leverages multiple decentralized technologies, including Filecoin and Hedera, to store and verify original media assets and their underlying metadata

## More than Just Storage: Unbounded Web3 Potential with Filecoin

By introducing large-scale storage with periodic proofs and bringing storage closer to compute, Filecoin brings a unique building block to the Web3 ecosystem.

- **Content Addressable Data —** Filecoin is a decentralized storage network built on Content Addressable Data at the heart of Web3.
- **Verifiable Storage with Proofs —** The Filecoin blockchain verifies that all data is continuously stored on the network every 24 hours; proof of this can be bridged to other smart contract systems.
- **Decentralized Storage at Scale —** The Filecoin network is onboarding more than 1PiB of storage capacity every hour.
- **Flexible Storage Options —** A global network of storage providers, each offering different features and local optimizations, allow for maximal composability and emergence.

Many new interactions, applications, and business models can emerge at the intersection of Filecoin and smart contract systems such as Hedera. You can find more information about [the business opportunities on Filecoin in this talk](https://www.youtube.com/watch?v=5CPUSPUGOZ0).

## Grants for Filecoin + Hedera Application Development

Filecoin and Hedera are awarding $200,000 in developer grants along two tracks:

### **Decentralized Storage SDK for Hedera & Demo Application**

We want to make it easy for builders using Filecoin and Hedera Token Service (HTS) to integrate the two into their applications. This grant will be awarded for an SDK that seamlessly integrates existing Filecoin and Hedera toolchains. It should enable non-fungible tokenization and allow storage of larger files associated with Hedera Token Service tokens (such as digital art, music, JSON metadata, etc.) on the Filecoin network. Filecoin storage may be accessed via tooling or services such as [Estuary](https://estuary.tech/), [Fleek Space Daemon](https://github.com/FleekHQ/space-daemon), [NFT.storage](https://nft.storage/), or [Textile Powergate.](https://github.com/textileio/powergate/)

The accompanying demo application must use this SDK to build an open source end-to-end NFT marketplace demo application to 1) Showcase the functionality of the Decentralized Storage SDK and 2) Be used by other developers in the community as a reference architecture. The demo application should include:

1. NFTs created on Hedera.
2. Multimedia associated with the NFT stored on Filecoin.
3. [JSON metadata schema](https://github.com/hashgraph/hedera-improvement-proposal/blob/master/HIP/hip-10.md) associated with those NFTs on Filecoin.
4. Accepting HBAR and FIL (at a minimum) for payment of NFTs.

**_Prize: $75,000_**

### **Real-world Applications**

These grants will be awarded to proposals for real-world applications that utilize both [Hedera Token Service (HTS)](http://hedera.com/token-service) and Filecoin decentralized storage. Developers can be as creative as they’d like — there are no strict requirements as to the type of application or use case, but it must utilize both Hedera HTS and Filecoin. Filecoin storage may be accessed via tooling or services such as [Estuary](https://estuary.tech/), [Fleek Space Daemon](https://github.com/FleekHQ/space-daemon), [NFT.storage](https://nft.storage/), or [Textile Powergate.](https://github.com/textileio/powergate/)

**_First prize: $50,000; Second prize: $40,000; Third prize: $20,000; Fourth prize: $10,000; Fifth prize: $5,000;_**

Apply via the [Filecoin Grants program](https://github.com/filecoin-project/devgrants/tree/master). Proposals are due August 30, 2021 for priority consideration.
