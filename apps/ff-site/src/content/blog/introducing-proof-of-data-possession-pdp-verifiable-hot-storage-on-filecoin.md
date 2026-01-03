---
title: "Introducing Proof of Data Possession (PDP): Verifiable Hot Storage on
  Filecoin"
created-on: 2025-05-06T13:41:00.000Z
updated-on: 2025-05-06T13:41:00.000Z
published-on: 2025-05-06T13:41:00.000Z
category: news
description: With PDP, the Filecoin network extends its capabilities to
  effectively serve a wider set of storage use cases, moving into the next era
  of Filecoin as a multi-service network for composable cloud services.
image:
  src: /assets/images/042425-pdp_blogheader.webp
seo:
  description: "Today, Filecoin unlocks a new level of utility –– building on a
    foundation of decentralized, verifiable storage at planetary scale with a
    new hot storage tier."
---

Today, Filecoin unlocks a new level of utility –– building on a foundation of decentralized, verifiable storage at planetary scale with a new hot storage tier. 

As the world’s largest decentralized storage network, Filecoin has established itself as the gold standard for archival, decentralized storage. Now, with Proof of Data Possession (PDP) live on mainnet, the network gains a critical new capability: on-demand verification of hot data. PDP allows storage providers to prove that they hold an immediately available copy of a file without needing to retrieve it, unseal it, or aggregate it.

PDP supports verifiable hot storage on the Filecoin network, opening the door to new use cases while preserving the integrity and openness that made Filecoin a standard for storage. The result is a more capable network: cold storage proofs when you need robust, discrete copies, and hot storage when you need fast retrievals.

So, here’s how PDP works, what it unlocks, and how to get started using it.

## What is Proof of Data Possession?

PDP enables storage providers to cryptographically prove they possess an immediately available copy of user data. Unlike Filecoin's first storage tier backed by Proof of Replication (PoRep), which focuses on long-term cold storage of distinct replicas sealed in cryptographically unique sectors, PDP is designed specifically for hot storage scenarios such as retrieval services, dApp frontends, AI datasets, and digital assets –– where data needs to be ready at a moment's notice. 

Here are some useful properties of PDP:

- Lightweight verification: Random sampling challenges require just 160 bytes of data per challenge, regardless of dataset size.
- No sealing/unsealing: Data remains in its raw, accessible form, eliminating the more time-consuming process required by PoRep.
- Mutable collections: Unlike PoRep, PDP proofs can be incrementally added to, deleted, and modified –– avoiding aggregation bottlenecks. 
- Scheduled challenges: Data clients can schedule automated daily verification challenges.
- CPU-friendly: Proving uses standard Secure Hash Algorithm 2 (SHA2) hashing without requiring specialized hardware.
- Efficient retrieval: Sub-second access to data. 
- More client choice: Clients are able to add new data or remove data at their own will. 
- PoRep-compatible data identifiers: Uses the same hashing algorithm as sector CommP/CommD to ensure consistent CIDs. No extra work needed.

## How PDP improves Filecoin

With PDP, the Filecoin network extends its capabilities to effectively serve a wider set of storage use cases, moving into the next era of Filecoin as a multi-service network for composable cloud services.

PDP unlocks verifiable data availability by providing cryptographic assurance that a node has a complete copy of your data, without actually retrieving it. This new storage tier is the ultimate mutable cache space where frequently accessed data can be collected for longer-term archival and persistence.

For storage providers (SPs), PDP lowers the bar for entry to join the Filecoin network, and creates new revenue opportunities for SPs to offer paying customers. For clients, it delivers the confidence that mission-critical data remains immediately accessible exactly when needed. And for builders, PDP offers a foundation for developing web-ready applications that require verifiable, high-performance data access without sacrificing the security benefits of decentralization.

## PDP is Bridging the Gap with Traditional Cloud

PDP is more than just a new proof mechanism –– it’s a critical building block of the next era of Filecoin storage. 

Centralized clouds sit at one end of the spectrum: highly performant but unverifiable, requiring users to trust that their data is safe without any way to audit themselves. Filecoin’s PoRep sits at the other end, offering strong verifiability and guarantees, but with slower access. PDP allows the Filecoin network to complement its higher-security storage offering with a higher-performance option as well.

Whether you're an SP building customized storage SLAs, a data client uploading data that needs frequent access, or a developer building applications that require a quick retrieval response, PDP offers the tools you need for real-world performance on the decentralized web.

## Use Cases Unlocked by PDP

PDP allows for a range of practical use cases accessible via smart contracts, and is composable  with other onchain systems like PoRep.

### AI Model Fine-tuning and Inference

Machine learning workloads require consistent, rapid access to large datasets. PDP ensures these datasets are available when fine-tuning or inference jobs start, without integrity concerns. 

For example, this [demo](https://www.youtube.com/watch?v=IVkwz7WNHZ8) shows how to upload an AI model to a Filecoin PDP storage provider to store the DeepSeek R1 670B parameter model. The parameters are proven to be stored, and the integrity of the model is verifiable with content identifiers & PDP, demonstrating how PDP can provide verifiable and fast access to massive AI datasets.

### Static Asset Delivery

Web content, media, and static assets can now be served from verifiably-available decentralized storage, enabling IPFS-like applications that are fully smart contract-controlled and composable with other protocols. 

This [FilZoo Website Demo](https://www.youtube.com/watch?v=f_9f5pzqumw) walks through how to inspect data secured by PDP on the Filecoin network and build a simple web app that interacts with it, bringing verifiable storage into your browser in just minutes.

### Developer Environments

Application developers can rely on PDP-verified storage for code repositories, dependencies, and environment configurations that need frequent, reliable access.

### Protocol Defined Retention Policies

Application developers can build pipelines to persist the latest data (e.g. last year of DePIN data) in hot tiers –– and roll older data into lower-cost persistent archives to better optimize costs.

## From the Community

“PDP makes it easy to show we're actually doing what we claim — keeping data online and available around the clock. It’s lightweight, reliable, and I was up and running as a PDP storage provider in under an hour.” — James Bluett, Technical Community Engineer, FilOz & PDP-enabled Storage Provider

"For cultural preservation and human rights datasets, it’s critical to have data that is both redundantly preserved and readily available. Filecoin’s Proof of Replication has always been great for proving data is redundantly preserved, and now with Proof of Data Possession we can also get regular cryptographic verification that our data is available." — Ian Davis, Senior Staff Technologist, [Filecoin Foundation](http://fil.org)

"For Storacha, our data has to be available all the time. To onboard at the scale of petabytes, we need confidence it will be immediately available when dApps need it. Filecoin’s PDP unlocks our ability to do this on our decentralized storage network, which we're looking forward to rolling out soon." — Hannah Howard, CTO, [Storacha](https://storacha.network)

“At Checker, we are excited about this new space of Filecoin services, of which PDP is the first. PDP is leading the way in guaranteeing essential service levels for Filecoin through cryptography. We hope many other services can follow in the path of PDP.” — Patrick Woodhead, CEO, [Checker Network](https://www.checker.network)

"PDP in Curio is the first step in making providing storage in Filecoin truly accessible to everyone. It enables clients to store small data with low latency for the first time, and lays the foundation for future innovations in Filecoin storage product experience." — Magik6k, Co-founder, [Curio Storage Inc](https://curiostorage.org)

## What’s Next? The PDP SPX Program: Build the Foundation

To establish a strong foundation for PDP adoption, FilOz is collaborating with Filecoin Foundation to launch the [PDP SPX Program](https://filoznotebook.notion.site/SPX-Program-PDP-Edition-1e6dc41950c180bc89f6fc252e7e036d), running throughout May & June 2025. This initiative will onboard geographically diverse storage providers and data clients with hotter storage needs to stress-test the PDP stack in real-world conditions.

MinerX participants will form the core of a reliable, retrieval-capable network of PDP providers – the essential infrastructure needed for PDP to reach its full potential. This program bridges protocol innovation with production-grade deployment, ensuring PDP launches with proven tooling and trusted infrastructure.

If you're a service provider interested in pioneering this new frontier, the SPX program is an excellent opportunity to differentiate your services and participate in shaping the future of verifiable hot storage on Filecoin.

[Here’s how to join](https://forms.gle/5oszoK7iVoTCY8yv8) - and for the latest updates, onboarding instructions, and announcements throughout May 2025, follow [@\_FilOz](https://x.com/_FilOz) on X.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0oD0J-4lIXg?si=NLmcRfFcQGh_BGxR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Dive Deeper and Get Started

[FilOz](https://www.filoz.org/), a Filecoin network protocol design and development team, has published several technical articles on the PDP Journey series, including:

- [The PDP Journey: A Refresher on Proof of Data Possession and Its Path to Mainnet](https://medium.com/@filoz/the-pdp-journey-a-refresher-on-proof-of-data-possession-and-its-path-to-mainnet-e6b481d9ad9a)
- [The PDP Journey: An In-Depth Look at How PDP Works](https://medium.com/@filoz/the-pdp-journey-an-in-depth-look-at-how-pdp-works-4b6079f4baad)
- [PoRep, PDP, Proof of Delivery: Different Proofs for Different Use Cases](https://medium.com/@filoz/porep-pdp-proof-of-delivery-different-proofs-for-different-use-cases-e6daede195fb)

The FilOz team also created comprehensive documentation to help you get started with PDP:

- [Getting Started with PDP for Filecoin Storage Providers](https://docs.filecoin.io/storage-providers/pdp/install-and-run-pdp#prerequisites)
- [Getting Started with PDP for Storage Clients](https://docs.filecoin.io/storage-providers/pdp)

Stay tuned for more updates, tutorials, and announcements coming soon!
