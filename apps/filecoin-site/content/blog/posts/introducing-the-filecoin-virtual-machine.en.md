---
aliases: []
author: Raúl Kripalani
categories:
  - updates
  - events
date: "2021-11-11T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  A unified, interoperable environment for computation and storage, enabled by
  the Filecoin Virtual Machine.
image:
  alt: ""
  url: /uploads/fil-blog-2021-11-02-fvm-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-11-02-fvm-1.webp
title: Introducing the Filecoin Virtual Machine
_template: blog_detail
---

Today, the Filecoin network is a robust platform to verifiably store and access NFTs, public good datasets, web3 and Metaverse assets, and more. Think of it as the I/O layer of web3. But this is only the tip of the iceberg. There’s a ton more value and potential to be unleashed with the introduction of general smart contract programmability to the Filecoin network. Layering computation on top of storage also opens new dimensions for cross-chain interoperability and integration in a trustless manner.

Recently, Protocol Labs Researcher [Raúl Kripalani](https://twitter.com/raulvk) introduced to the Filecoin community the [Filecoin Virtual Machine](https://www.youtube.com/watch?v=Vw9syGiG31c&list=PL_0VrY55uV1_HE_bE-frkYUPGybjYHbNz&index=7), a core pillar in the next evolution of the decentralized storage ecosystem.

## Why smart contracts in Filecoin

Smart contracts –or actors as we call them in Filecoin– can power intelligent and dynamic storage solutions that are very hard to create with web2 technology. Examples include:

- Decentralized computation over data stored in Filecoin (run the compute where the data is stored, rather than moving it over)
- Crowd-funded dataset preservation (e.g. everyone could fund storing societally important data like crime statistics or environmental warming)
- Smarter storage markets (e.g. dynamically pricing storage by time of day, replication level, or availability within a region)
- Multi-generational storage and permanent custodianship (e.g. storing data that spans multiple generations)
- Data DAOs and tokenized datasets (e.g. modelling the value of data as tokens and forming DAOs to coordinate and broker computation to be performed over it)
- Locally-stored NFTs (i.e. colocating the content of NFTs with the registries that track them)
- Time-locked retrieval (e.g. only unlock this data set when the company’s public results are available)
- Collateral loans (e.g. loans to storage providers for concrete purposes, like accepting FIL+ deals from specific clients, or onboarding capacity within a concrete time window)
- and much more.

They also enable developers to create bridges for cross-chain interoperability as means to share liquidity, and to integrate apps deployed in other chains (e.g. Ethereum, NEAR, Polygon, Solana, Flow, etc.), with the storage capacity and capabilities provided by the Filecoin network.

Read on to understand how the Filecoin Virtual Machine will kickstart a disruption of interoperable storage and compute in the web3 ecosystem at large.

## Storage as the Layer 0

Currently, the Filecoin platform is data storage and retrieval centric. We think of these two features as making up the Layer 0 of the protocol.

![Filecoin FVM storage layers](/uploads/fvm-storage-as-layer-0.webp)

The system is clean and straightforward, but insufficient for developers that seek to build more complex applications and solutions via user-programmable smart contracts.

One layer above, Layer 1, is where smart contract programmability will sit. Currently, the logic of the Filecoin network is hard-coded through system-defined actors. This means user-defined smart contracts are only usable in Filecoin through external bridges to other programmable blockchains like Ethereum and NEAR (via solutions such as Textile Bridges). The Filecoin Virtual Machine brings native user-defined actors to the Filecoin network.

## The Ethereum-compatible Filecoin Virtual Machine

The latest technical discussions started in June 2021, under [Filecoin Improvement Proposal 113](https://github.com/filecoin-project/FIPs/issues/113). The Filecoin Virtual Machine (FVM) aims to be a polyglot VM, drawing inspiration from the concept of [Hypervisors](https://en.wikipedia.org/wiki/Hypervisor) to establish a multi-VM design. Many approaches were considered, including adopting the EVM as-is, LLVM-IR, eBPF, Secure EcmaScript, and others.

At the core, the native runtime of the FVM is [WASM](https://webassembly.org/). We believe that WASM has a strong and promising future in the blockchain space. This choice makes it possible to write native actors in any programming language that compiles to WASM (although not all languages are suitable; the reference SDK is built in Rust). This enables quicker onboarding of web2 developers onto web3, by allowing us to meet them where they are today, and evading language-specific learning curves.

![Filecoin FVM native runtime WASM](/uploads/fvm-wasm.webp)

Furthermore, we are adding support for emulating _foreign runtimes_, the first one being the Ethereum Virtual Machine (EVM). This choice is motivated by community requests from the Filecoin developer community for the FVM to support EVM/Solidity, with zero to minimal changes required to source code. Find here the [current specification](https://github.com/filecoin-project/fvm-project/pull/39).

![Filecoin EVM compatibility](/uploads/fvm-evm.webp)

We have watched the Ethereum community build a massive corpus of useful and –most importantly– audited and battle-tested smart contracts over time, e.g. ERC-20 tokens, NFTs, DAOs, flash loans, etc. Making it possible to reuse these contracts as-is will jumpstart a cambrian explosion of innovative, composable solutions in Filecoin. Furthermore, enabling Solidity developers to connect solutions across chains through bridges and oracles will only augment their collective value and utility.

Also to be noted is that EVM compatibility is targeted at the bytecode layer, hence preserving the ability to fully leverage the mature Ethereum toolchain in the context of Filecoin, e.g. Truffle, Remix, Hardhat, VSCode plugins, and more. Besides deploying existing smart contracts, developers can write new actors in Solidity to get going quickly, or upgrade to use native actors if they require performance optimization.

## Expanding the Impact of the Filecoin Network

With the FVM, the Filecoin network gains computation abilities in addition to the existing storage capabilities. We envision two kinds of computation running on the Filecoin network: on-chain computation over state, and off-chain computation over data. The FVM is a critical building block in both.

![Filecoin FVM dataverse](/uploads/fvm-dataverse.webp)

Some use cases we are excited to see emerge on Filecoin include:

- **Data-centric Decentralized Autonomous Organizations (Data DAOs):** Through the pooling of resources from individuals and organizations, people will be able to incent the preservation, curation, augmentation, and processing of shared-interest and/or public good data sets. Data DAOs use tokens and NFTs as units to represent and compound value, and exchange those tokens to demand services, grant access rights, and more.
- **Replication Clients**: Automated bots that are incentivised to ensure that a certain level of replication is maintained for data in the Filecoin network, according to a user-defined policy.
- **Alternative Storage Markets:** Based on auctions, bounties, or other instruments, storage markets may apply error correction codes to data to ensure its recoverability in case of disruption. They may also enable auto-retrying deals to ensure data delivery.
- **Collateral loans:** trustless and/or purpose-locked collateral loans to providers, e.g. so that loaned funds can only be spent to accept FIL+ deals from specific clients.
- **Computation-over-Data:** A huge problem in mass-scale computation is the transfer of data, which adds cost and latency to every operation. By pushing computational jobs to the storage providers where data is custodied, and rewarding coordinator nodes to strategise/plan the execution across the Filecoin network, it would be possible to execute [embarrassingly parallelizable](https://en.wikipedia.org/wiki/Embarrassingly_parallel) jobs in a highly efficient manner, storing the results back in the Filecoin network, enabling further downstream compute on it.

Furthermore, for the first time, the FVM will make it possible for Layer 2 (L2) solutions operating on the Filecoin network to commit their state onto Layer 1 (L1), thus leading to more secure and traceable side and overlay networks. Content Delivery Networks (CDNs), reputation systems, and payment channel networks are some L2 solutions we’re specifically motivated to see running on Filecoin.

If you’re a developer interested in prototyping any of these use cases, please get in touch!

## Development Roadmap

The near-term phases of FVM’s development roadmap is as follows:

- **Phase 0:** Canary launch of non-programmable FVM on mainnet, behind a feature flag or fork of the reference implementation (Lotus), running only system actors. Compatible with the existing chain and requiring no protocol upgrade. This phase is scheduled to be delivered in Q4 2021.
- **Phase 1**: Protocol forks to introduce preparatory changes ahead of user programmability, including gas schedule and architecture adjustments. By the end of this phase, 100% of the network should be running the FVM-backed system actors. This phase is scheduled to go live in Q1 2022.
- **Phase 2:** User-programmability is introduced for both native and EVM foreign actors. This phase is scheduled to go live in Q2 2022.
- **Phase 3:** Redesign system actors and deeper protocol changes to make it easier to program against system actors. This phase is scheduled to go live in Q2 2022.

![Filecoin fvm development roadmap](/uploads/fvm-roadmap.webp)

If you're interested in helping the development of the FVM or want to learn more about this project, follow the work on the [filecoin-project/fvm-project](https://github.com/filecoin-project/fvm-project) GitHub repo and #fvm channel on [Filecoin Slack](http://filecoin.io/slack).
