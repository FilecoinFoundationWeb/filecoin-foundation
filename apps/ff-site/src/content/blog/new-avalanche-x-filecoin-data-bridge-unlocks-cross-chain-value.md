---
title: "New Avalanche x Filecoin Data Bridge Unlocks Cross-Chain Value"
created-on: 2025-05-27T13:14:00.000Z
updated-on: 2025-05-27T13:14:00.000Z
published-on: 2025-05-27T13:14:00.000Z
category: news
image:
  src: /assets/images/052125-AvalancheandFilecoin_1.webp
description: In a new cross-ecosystem initiative, Filecoin Foundation and Ava
  Labs are launching a native cross-chain data bridge between Avalanche C-Chain
  and Filecoin via the Filecoin Virtual Machine (FEVM).
seo:
  description: In a new cross-ecosystem initiative, Filecoin Foundation and Ava
    Labs are launching a native cross-chain data bridge between Avalanche
    C-Chain and Filecoin via the Filecoin Virtual Machine (FEVM).
---

In a new cross-ecosystem initiative, Filecoin Foundation and Ava Labs are launching a native cross-chain data bridge between Avalanche C-Chain and Filecoin via the Filecoin Virtual Machine (FEVM). This collaboration stacks Avalanche's high-speed, scalable execution with Filecoin’s verifiable data network, laying the groundwork for modular, cross-chain infrastructure that can scale with enterprise demand.

As Web2 enterprise and traditional financial markets’ interest in building with ecosystems like Avalanche grows, so does the need for verifiable, reliable data infrastructure. Filecoin offers a natural complement: a decentralized archival layer that ensures long-term auditability and data integrity. 

The [cross-chain data storage prototype](https://medium.com/@filoz/under-the-hood-architecture-and-prototype-of-cross-chain-data-storage-6f8ba2c480d6), implemented by [FIL-B](https://fil.builders/) and [FilOz](https://www.filoz.org/), demonstrates how data generated on EVM-compatible chains like Avalanche C-Chain can be efficiently offloaded to Filecoin, while maintaining access and verifiability through onchain mechanisms. Here’s how the storage flow works:

- Data is generated on Avalanche C-Chain
- Smart contract triggers send data to Filecoin for storage
- Content Identifier (CID) commitments and retrieval proofs continuously verify integrity
- Onramp contracts relay storage proof back to the source chain
- Payment is conducted on Avalanche and released once proof of storage is relayed back to the source chain

This composable architecture provides a builder-friendly and real-world-ready foundation to supercharge adoption of these two next-gen L1 ecosystems.

Key benefits for builders and users include:

- **Proven Data Verifiability**: Filecoin’s storage is secured by cryptographic proof systems that verify data is stored continually and unaltered. A transparent and robust record of data provenance, and assurance that data remains unchanged, provides enterprises and devs with the traceability and auditability necessary for business.
- **Compliance-Grade Data Retention:** Filecoin enables immutable storage of Know Your Customer (KYC) records, transaction logs, and audit trails, meeting long-term retention and regulatory requirements without bloating Avalanche’s Layer 1 or C-Chain. The decentralized network stores redundant copies across independent providers, mitigating reliance on single points of failure and offering resilient data availability through emerging hot storage solutions.
- **Lower Costs for C-Chain Projects:** Startups building on Avalanche can significantly cut costs by offloading archival or infrequently accessed data to Filecoin — conducive to Avalanche’s high-speed performance while maintaining verifiability.
- **Cross-Chain Interoperability:** The storage architecture is modular by design, allowing builders to mix and match components across chains without sacrificing performance or data integrity. Developers can stay within their preferred chain and tap into Filecoin’s decentralized storage services, while benefiting from fast, low-cost execution via Layer 2s. This composability unlocks powerful capabilities for multi-chain apps and cross-ecosystem collaboration.
- **Unlocked Market Access:** This integration allows Avalanche builders to access decentralized storage solutions to power high-impact use cases and Filecoin storage providers to activate new demand and revenue streams.

_“This collaboration with Filecoin introduces a modular framework for verifiable, cost-efficient data storage that complements Avalanche’s high-performance execution environment,”_ said Cliff Yeo, Head of Singapore at Ava Labs. _“By enabling developers to offload and validate data through decentralized infrastructure, we’re advancing the tooling required to build scalable, multi-chain applications with enterprise-grade reliability.”_

_“This integration brings together the strengths of the Avalanche and Filecoin ecosystems to build interoperable and decentralized infrastructure tailored to capture high-value enterprise use cases. It’s a major step toward re-architecting our world’s web infrastructure to meet today’s rapidly expanding data demands,”_ said Marta Belcher, president and chair of Filecoin Foundation. 

This collaboration underscores these pioneering ecosystems’ commitment to building interoperable, enterprise-grade infrastructure — designed to onboard more sectors into Web3 and deliver on the promise of a robust, decentralized internet for all.

To see the project in action, [check out](https://github.com/FIL-Builders/dataBridgeDemo) the demo and Github library.

## About Filecoin

Filecoin is a peer-to-peer network to store files, with built-in economic incentives to ensure files are stored reliably over time. It’s designed to create a decentralized, efficient, and robust foundation for humanity’s information.

## About Filecoin Foundation

Filecoin Foundation's mission is to preserve humanity's most important information, as well as to facilitate the open source governance of the Filecoin network, fund research and development projects for decentralized technologies, and support the growth of the Filecoin ecosystem and community.

## About Avalanche

Avalanche is an ultra-fast, low-latency blockchain platform designed for builders who need high performance at scale. The network’s architecture allows for the creation of sovereign, efficient and fully interoperable public and private layer 1 (L1) blockchains which leverage the Avalanche Consensus Mechanism to achieve high throughput and near-instant transaction finality. The ease and speed of launching an L1, and the breadth of architectural customization choices, make Avalanche the perfect environment for a composable multi-chain future. 

Supported by a global community of developers and validators, Avalanche offers a fast, low-cost environment for building decentralized applications (dApps). With its combination of speed, flexibility, and scalability, Avalanche is the platform of choice for innovators pushing the boundaries of blockchain technology.
