---
title: "Filecoin in 2025: Year in Review"
draft: false
excerpt: >-
  In 2025, the Filecoin ecosystem focused on delivering verifiable, high-quality
  storage services that meet the demands of paying customers and support onchain
  Service Level Agreements (SLAs).
share_image: /uploads/filecoin-space-hero.webp
image:
  url: /uploads/filecoin-space-hero.webp
author: PL Filecoin Impact Fund & Filecoin Foundation
date: 2026-01-12T00:00:00.000Z
categories:
  - updates
dim_image: true
---

From the beginning, Filecoin was built as a decentralized storage network with the capacity to operate at global scale. In the five years since [mainnet launch](https://youtu.be/Yjm8RgqRyS0?si=hnGKwCvaZ__vuMvF), the network has not only met that challenge — Filecoin has become the world's largest decentralized storage network.

Having achieved this initial aim, the Filecoin community's goals have moved beyond storage capacity. In 2025, the focus shifted to delivering verifiable, high-quality storage services that meet the demands of paying customers via onchain paid deals and Service Level Agreements (SLAs).

Last year, the ecosystem focused on driving product-market fit (PMF) in key verticals, including evolving a landscape of specialized data onramps within Web2 enterprises, Web3 object storage, and large data ecosystems. The community also shipped core protocol and governance improvements, and [launched Filecoin Onchain Cloud](/blog/introducing-filecoin-onchain-cloud/), a composable suite of onchain services for storage, retrieval, and payments. Expanding Filecoin to additional cloud services and honing in on a small set of high-value markets has positioned the network as foundational infrastructure for the next generation of the Web.

This post looks back at the network's advancements in 2025, recaps key learnings, and checks in on progress toward ecosystem priorities.

## Expanding Data Services: Onramps and Integrations

As the network matures, Filecoin is delivering more capabilities to support a wider range of storage needs — from self-sovereign storage for Web3-native use cases to workloads that rely on S3 APIs and enterprise SLAs. Onramps have played a critical role in making Filecoin storage work for diverse users and data types, providing fast, verifiable, and persistent storage for each use case.

In 2025, a growing set of specialized Filecoin onramps created products that meet requirements for specific use cases:

- **[Akave](https://akave.com/)** provides a fully managed, S3-compatible storage layer on Filecoin designed for enterprise and analytics workloads. Akave supports Snowflake integration and is used to connect Filecoin-backed storage to Web2 analytics pipelines, data lakes, and application backends.
- **[Storacha](https://storacha.network/)** provides a decentralized hot storage and retrieval network built on the InterPlanetary File System (IPFS) and Filecoin for applications that require fast access to large, frequently used datasets. Storacha is used by infrastructure teams, geospatial and satellite data providers, and other high-throughput workloads where low-latency retrieval is critical.
- **[Ramo](https://ramo.io)** is purpose-built for onboarding high-value, data-rich workloads to Filecoin. Ramo works with research institutions and other data-intensive organizations to prepare and integrate large-scale datasets, including multi-terabyte scientific data.
- **[Lighthouse](https://www.lighthouse.storage/)** offers decentralized, perpetual storage built on IPFS and Filecoin, focused on Web3-native use cases. Lighthouse is used by NFT platforms, DAOs, and AI and DePIN projects to store data that must remain accessible and verifiable over long time horizons.

## New Building Blocks for Web3 Infrastructure: Filecoin Onchain Cloud

[Filecoin Onchain Cloud](https://filecoin.cloud) was unveiled during Devconnect Buenos Aires, marking one of the most important protocol-level expansions in Filecoin's history. It introduced transparent, verifiable, onchain storage and programmable payments. For end users, this means applications where data ownership, service delivery, and payments are transparently enforced onchain, instead of relying on opaque cloud providers and off-chain trust. These new protocol capabilities helped upgrade robust offerings from Filecoin onramps like Storacha and Akave with onchain verification and service provider payments, and unlocked a new class of direct dApp and Web3 builder integrations with the Filecoin network.

Filecoin Onchain Cloud introduces several composable building blocks that make it easier to build, price, and operate verifiable storage services onchain:

- **[Synapse SDK](https://docs.filecoin.cloud/getting-started/)**: Connects builders to Filecoin Onchain Cloud with simple APIs.
- **[Filecoin Pin](https://pin.filecoin.cloud/)**: Developer-friendly IPFS pinning onchain.
- **[Filecoin Pay](https://pay.filecoin.cloud/)**: Enables onchain payments for verifiable service performance.
- **[Filecoin Warm Storage Service](https://filecoin.cloud/warm-storage-service)**: Storage tier that delivers persistent, Filecoin-backed storage with fast, highly-available retrieval.
- **[Filecoin Beam](https://filbeam.com/)**: Service bridging verifiable data movement across onchain and off-chain systems.
- Composable service contracts designed to be forkable, inspectable, and upgradable.

The first months of testnet operation demonstrated clear early traction:

- 170+ unique wallets [transacted](https://pay.filecoin.cloud) with 30+ service providers, resulting in nearly 4,000 onchain service deals.
- 500+ developers [built with](https://npm-stat.com/charts.html?package=%40filoz%2Fsynapse-sdk&from=2025-08-05&to=2025-08-28) the Synapse SDK, validating demand for programmable storage and service primitives.
- [pin.filecoin.cloud](https://pin.filecoin.cloud) enabled frictionless data storage via Filecoin Onchain Cloud with IPFS compatibility.
- Early adopters include established protocols such as ENS, Monad, and KYVE, alongside Filecoin service providers like Storacha and Akave, and 100+ [early-stage builders](https://app.akindo.io/wave-hacks/1PRjgGzKaTqXaQBBl).
- 5,000+ developers engaged with Filecoin Onchain Cloud through targeted builder activations, including Filecoin Orbit and ETHGlobal.
- Filecoin Onchain Cloud's launch reached 1.5M social media impressions, indicating strong developer mindshare.

Filecoin Onchain Cloud is an important next step in the evolution of cloud infrastructure, empowering developers to own both their infrastructure and their economics.

## Strengthening the Protocol: Network Upgrades in 2025

The ecosystem shipped major network innovations in 2025 alongside Filecoin Onchain Cloud, including [Fast Finality in Filecoin (F3), Proof of Data Possession (PDP)](/blog/introducing-proof-of-data-possession-pdp-verifiable-hot-storage-on-filecoin/), and three network upgrades.

### Making Filecoin Faster: Proof of Data Possession and F3

With PDP, the network gained a critical new capability: on-demand verification of hot data. This new proof mechanism enables storage providers to cryptographically prove they possess an immediately available copy of user data. PDP is designed for hot storage scenarios such as retrieval services, dApp frontends, and AI datasets –– where data needs to be ready at a moment's notice.

PDP underpins Filecoin Onchain Cloud's Warm Storage Service –– offering clients and developers verifiable, high-performance data access and creating new revenue opportunities for Filecoin storage providers.

[F3](https://medium.com/@filoz/the-f3-journey-network-version-27-followups-b22b876ae991) represents one of the biggest storage-retrieval lifecycle improvements in the network's history, speeding up finality on the network and making the future of Filecoin fast, secure, and accessible to a wider range of applications than ever before.

### Technical Network Upgrades

[NV25](/blog/filecoins-nv25-teep-network-upgrade-is-here/) streamlined Filecoin's economics and developer experience, making the network more efficient for builders, storage providers, and clients.

Upgrades included:

- Bringing Ethereum-compatible temporary storage ([EIP-1153](https://eips.ethereum.org/EIPS/eip-1153?_bhlid=0006ff67114c0de468ff52ff91b463d3759d5793)) to [FEVM](https://fvm.filecoin.io/) to enable more efficient smart contract patterns.
- Simplifying termination fees to make storage provider economics more predictable.
- Removing the Batch Balancer fee and gas constraints to unlock savings for storage providers and accelerate data onboarding.
- Laying the foundation for single-epoch finality with F3, making Filecoin faster and equipped for a wider range of applications.

After the huge lift of NV25, NV26 completed the [FIP-0100 transition](https://medium.com/@filoz/the-power-of-aggregation-real-savings-for-storage-providers-87f62aa9b018) and continued integrating Fast Finality into the network.

[NV27](https://fil.org/blog/announcing-the-filecoin-network-v27-golden-week-upgrade) strengthened Filecoin's technical foundation with cryptographic upgrades, more protocol cleanups, and onchain dealmaking enhancements:

Upgrades included:

- Enabling faster signature verification and stronger Ethereum compatibility to unlock advanced cryptographic use cases in FEVM.
- Shipping Direct Data Onboarding notifications, real-time smart contract notifications when data is onboarded that enable programmatic deal workflows.
- Standardizing snapshot formatting to prepare the network for F3 integration.
- Creating new storage provider deposit requirements to reduce spam attacks and improve network quality.

## Coordinating Filecoin's Next Phase: FIL Dev Summits 6 & 7

This year's progress was driven by close collaboration across the Filecoin ecosystem, as developers, storage providers, onramps, researchers, and other stakeholders came together at FIL Dev Summit 6 (FDS-6), FIL Dev Summit 7 (FDS-7), and three regional PMF and developer co-working events to forge community alignment and accelerate technical and go-to-market efforts.

[FDS-6](https://youtube.com/playlist?list=PL_0VrY55uV19Fx15jwUdSoPyTqywrhHe7&si=gk85M15BozcMXcSo) in Toronto brought together ecosystem contributors to chart Filecoin's evolution toward programmatic, onchain dealmaking. FDS-6 was a key touchpoint to shape Filecoin Onchain Cloud's engineering path for the remainder of 2025 and introduce key upgrades, like PDP and USDFC (a FIL-backed stablecoin), integral to the Onchain Cloud stack.

Following a virtual summit in October and culminating in Buenos Aires, [FDS-7](https://www.fildev.io/FDS-7) served as the coordination forum for the Filecoin network's next phase.

Takeaways included:

- **Solidifying Filecoin Onchain Cloud as the Key Driver of Onchain Paid Revenue.** Technical, product, and go-to-market (GTM) discussions centered on how the Filecoin network can fully capitalize on emerging PMF for cloud services. The consensus: future Filecoin deals should increasingly flow through a unified, onchain service market rather than fragmented, off-chain mechanisms. Participants aligned on the near-term importance of onboarding developers and deepening integrations with Filecoin Onchain Cloud to drive sustained onchain paid deals.
- **Doubling Down on Priority PMF Markets:** PMF explorations converged on three high-priority markets where the Filecoin network can solve real user needs: Web3 builders, Web2 enterprise, and large public datasets. Following FDS-7, the ecosystem launched specialized "Pods" –– cross-functional working groups to drive tailored GTM strategies for each target market. The Web3 Builders Pod will target use cases at the intersection of AI, DePIN, and Web3 via Filecoin Onchain Cloud. The Web2 Object Storage Pod will leverage high-quality onramps and service providers for enterprise use cases. And the Public Data Pod will focus on onboarding large commons datasets for long-term preservation.
- **Evolving Filecoin's Tokenonomics and Public Goods Funding.** Participants discussed aligning economic incentives, funding programs, and governance reforms to reinforce goals and behaviors that benefit the entire network. Teams agreed to research and model new protocol-level mechanisms –– such as [veFIL](https://youtu.be/aoDJgLNirmw?si=liSGKgFJwubgz9uH), a new governance staking token design –– to validate positive impact on network health, with the goal of introducing FIP discussions in early 2026.

Read more about the discussions and takeaways from [FDS-6](/blog/fil-dev-summit-6-toronto-takeaways-and-next-steps/) and [FDS-7](/blog/behind-the-scenes-in-buenos-aires-/).

## Progress on 2025 Ecosystem-Wide Priorities

In 2025, the Filecoin ecosystem focused efforts on several overarching priorities:

1. **Accelerating Paid Deals**: Boosting paid services (storage, retrieval, compute) on Filecoin to generate cash flow for service providers. This aimed to support more sustainable hardware funding beyond token incentives.
2. **Growing Onchain Activity**: Increasing activity through programmable services, DeFi, and new use cases.
3. **Becoming Indispensable Infrastructure**: Establishing Filecoin as an integral component of other projects and businesses.

Let's review the progress we made toward these goals.

### Accelerating Paid Deals

The Filecoin ecosystem oriented technical, product, and business workstreams toward strengthening the paid deal pipeline and making Filecoin services easier to use.

- Filecoin onramps like Akave, Storacha, Lighthouse, and Ramo were major drivers of paid conversations for Filecoin services through premium, use case-specific offerings for Web2 enterprise, Web3, and large institutional datasets.
- Advancements like [PDP](/blog/introducing-proof-of-data-possession-pdp-verifiable-hot-storage-on-filecoin/) and [Filecoin Warm Storage Service](https://filecoin.cloud/warm-storage-service) unlocked a new class of warm and hot storage applications on Filecoin –– expanding paid services for data-intensive markets requiring low-latency access, like AI and DePIN.
- FF launched and led the Client Success Working Group (CSWG) to strengthen and streamline the client onboarding pipeline. CSWG brought together key contributors to dig deep into onboarding metrics, troubleshoot challenges faced by onramps and clients, and accelerate successful client adoption and retention.
- [Filecoin Pay](https://pay.filecoin.cloud/) enables easy onchain payments for Filecoin services. The token-agnostic service provides a secure billing wallet and smooth integration into smart contracts. Filecoin Pay replaces invoices, credit cards, and trust in billing teams or third-party processors with smart contract payments that settle automatically.

### Growing Onchain Activity

A new suite of programmable, onchain tools enabled greater network activity from developers and users seeking verifiable cloud services.

- USDFC, the Filecoin-backed stablecoin from Secured Finance, deployed to mainnet –– reducing friction when paying for storage deals and putting more FIL to work providing data storage utility. Since launch, testnet transactions have locked 4.5k test-USDFC in \~8,000 onchain storage deals made through Filecoin Onchain Cloud.
- [Filecoin Pay](https://pay.filecoin.cloud/) unlocked onchain and cross-chain stablecoin payments for Filecoin services, enabling clients to purchase services without leaving their native environments.
- EVM contract calls nearly tripled to 4.1 million in 2025, demonstrating that developers are actively building and deploying smart contract applications on Filecoin's programmable infrastructure.

### Becoming Indispensable Infrastructure

The Filecoin ecosystem shipped integrations and data onboarding partnerships with over 20 high-profile Web3 and Web2 organizations, solidifying Filecoin as integral cloud infrastructure for humanity’s information.

- Filecoin Onchain Cloud [launched with thirteen integration partners](/blog/introducing-filecoin-onchain-cloud/), including major cross-ecosystem collaborations with ENS, the ERC-8004 community, Safe, Monad, and KYVE. These integrations positioned the Onchain Cloud as a key enabler of the decentralized naming, trustless agents, decentralized AI, and chain data stacks.
- The cross-chain data bridge [connecting Avalanche's C-Chain to Filecoin's decentralized storage](/blog/new-avalanche-x-filecoin-data-bridge-unlocks-cross-chain-value/) network gives Avalanche builders access to scalable, verifiable, and cost-efficient storage, while reinforcing Filecoin's role as the leading decentralized data layer for Web3.
- In addition to integrations with existing chains, Filecoin Onchain Cloud became the foundation for a host of new applications and tools created by over 100 early alpha builders. The Onchain Cloud underpins use cases from rewards for [GitHub activity](https://cha-ching.it/) and [AI research](https://cairn-app-9vb6z.ondigitalocean.app/) to a [decentralized version](https://app.filosign.xyz/) of DocuSign.
- The [Bluesky Backup App](https://bsky.storage/), built by Storacha, lets users back up their entire Bluesky account data to decentralized storage they fully control.
- Akave Cloud became [the first decentralized object storage solution integrated with Snowflake](https://akave.com/blog/akave-cloud-the-first-decentralized-object-storage-integrated-with-snowflake#), providing resilient storage for analytics, AI capabilities, and machine learning workflows.
- Filecoin via Ramo was chosen as the storage solution for [petabytes of interstellar gas simulation data](https://fil.org/blog/unlocking-the-cosmos-how-cornell-astrophysicist-uses-ramo-to-store-the-universe-on-filecoin) generated by Cornell astrophysicists on the world's fastest supercomputer.
- Filecoin also served as a critical archiving and preservation layer for cultural, historical, and scientific information. Last year, the network onboarded data for long-term preservation from prestigious sources, including the [Smithsonian Institute, MIT Open Learning](https://fil.org/blog/flickr-foundation-internet-archive-and-other-leading-organizations-leverage-filecoin-to-safeguard-cultural-heritage), [Digital Public Library of America](https://fil.org/blog/filecoin-foundation-announces-one-million-cultural-artifacts-preserved-on-the-filecoin-network), [The Defiant](https://thedefiant.io/news/defi/the-defiant-to-preserve-article-archives-on-filecoin), and many more.

## Building Momentum in 2026

2025 was a transformative year for the Filecoin network as the ecosystem honed in on delivering onchain, paid cloud services with real product-market fit. Together, the ecosystem translated years of foundational work into live products, onchain activity, and growing adoption across key sectors.

The progress and learnings from the past year provide a strong foundation for shared focus areas and goals in 2026. While this post looked back at 2025, future posts will cover the future of Filecoin in 2026 and beyond.

Follow along with ecosystem updates in 2026 by subscribing to [Filecoin News](https://filecoin-news.beehiiv.com/subscribe), joining [upcoming events](https://fil.org/events), and keeping up with [Messari reports](https://messari.io/report/filecoin-onchain-cloud-the-network-s-next-evolution).
