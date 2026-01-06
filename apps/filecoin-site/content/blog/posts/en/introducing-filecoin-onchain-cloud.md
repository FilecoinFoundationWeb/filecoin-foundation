---
title: Introducing Filecoin Onchain Cloud
draft: false
excerpt: >-
  Filecoin Onchain Cloud delivers open, verifiable storage and payments
  onchain—giving developers ownership, transparency, and programmable cloud
  services.
share_image: /uploads/introducing-filecoin-onchain-cloud-hero.webp
image:
  url: /uploads/introducing-filecoin-onchain-cloud-hero.webp
  alt: Filecoin Onchain Cloud launch graphic
date: 2025-11-18T10:18:06.377Z
categories:
  - updates
dim_image: true
---

The centralized cloud is cracking beneath the weight of new demands: AI is generating and consuming data at unprecedented scale, governments are asserting jurisdiction over where data can live, and AI agents are waking up –– autonomous, borderless, and unwilling to rely on vendor gatekeepers.

The next wave of builders aren't asking for permission; they’re demanding proof. They need infrastructure and services that won’t break under Big Cloud’s constraints. The centralized cloud is opaque and fragile. The next cloud must be verifiable, composable, and unstoppable.

## Introducing Filecoin Onchain Cloud

→ Imagine a world where your app’s cloud bills settle themselves onchain, automatically and based on what’s actually delivered.

→ Where service performance, reliability, and uptime aren’t marketing claims but publicly auditable onchain.

→ Where AI agents fetch data directly, pay-per-request, and verify its origin and provenance.

Built for openness and ownership by default, Filecoin Onchain Cloud delivers verifiable storage with content-addressed data, transparent service delivery, programmable payments, and freedom from vendor lock-in. Filecoin Onchain Cloud is built for a world that demands proof, not promises.

With Filecoin Onchain Cloud, developers can now build and operate at cloud scale with onchain guarantees. Every interaction is auditable, every payment conditional, and every service composable. For the first time, builders can run real workloads in an open, verifiable cloud where data, logic, and payments live together onchain. The same guarantees that secure smart contracts now apply to the data they use.

## Why Filecoin Onchain Cloud?

Builders are choosing Filecoin Onchain Cloud because it delivers something traditional cloud can’t: verifiable ownership, programmable performance, and an unstoppable future.

1. **You own what you build.** Ownership is enforced onchain through smart contracts and programmable payments, so your stack is permanent, portable, and fully yours to fork or scale –– without asking permission. Your data lives across a global network of independent storage providers and not in a single company’s data center, so reliability and control are built in from day one. 
2. **You can verify everything you use.** Every file is content-addressed — identified by what it is, not where it’s stored — so data can’t be tampered with or quietly replaced. Each action, from storage to retrieval to payment, produces a matching onchain attestation that creates a transparent, verifiable record of your app’s operations. Ship with confidence and know every component does exactly what it claims, verifiably.
3. **You can program the cloud.** Logic and payments live side by side: pay only if it’s stored and pause billing when proofs fail. The network enforces the rules, so your team can focus on product and not infrastructure. The result? A self-auditing, self-executing cloud that works for you, not the other way around.

## Filecoin Onchain Cloud Building Blocks and Services

Filecoin Onchain Cloud expands Filecoin from a decentralized storage network into the verifiable foundation for a fully decentralized cloud.

Developers can store data on a global decentralized network, pay for services seamlessly via wallet or smart contract, retrieve data through fast delivery services, and verify onchain attestations proving that services were delivered. Together, these capabilities make it possible to build applications that are verifiable, composable, and fully decentralized from the ground up.

The core of this new onchain cloud starts with five open source, verifiable, and composable building blocks:

1. **[Filecoin Pay](https://pay.filecoin.cloud/):** Enabling onchain payments for verifiable service performance.
2. **[Filecoin Warm Storage Service](https://filecoin.cloud/warm-storage-service):** Powered by Proof of Data Possession ([PDP)](https://filecoin.io/blog/posts/introducing-proof-of-data-possession-pdp-verifiable-hot-storage-on-filecoin/) to guarantee your data is actually stored and available.
3. **[Synapse SDK](https://docs.filecoin.cloud/getting-started/):** Connecting builders to Filecoin Onchain Cloud with simple APIs.
4. **[Filecoin Pin](https://pin.filecoin.cloud/):** Bringing IPFS and Filecoin closer than ever for fast, decentralized data persistence.
5. **[Filecoin Beam](https://filbeam.com/):** A service bridging verifiable data movement across onchain and offchain systems.

![Diagram showing the Filecoin Onchain Cloud architecture and service layers](/uploads/filecoin-onchain-cloud-stackanimation.webp)

## Speed Meets Verifiability: New Era of Filecoin Storage Arrives

The new [Filecoin Warm Storage Service](https://filecoin.cloud/warm-storage-service) provides verifiable storage with easy access and keeps data online with proven availability. Warm storage is programmed in smart contracts to handle service details, storage proofs, payments, and verification onchain. The storage capacity behind those services comes from the decentralized network of Filecoin storage providers –– verified every hour by [lightweight proofs](https://filecoin.io/blog/posts/introducing-proof-of-data-possession-pdp-verifiable-hot-storage-on-filecoin/) generated in seconds.

This new storage offering is the data layer of Filecoin Onchain Cloud; it’s the base upon which retrievals, verifiable payments, and future compute and AI services can build upon. Every file, dataset, and proof is part of a live, verifiable storage economy. 

Explore the limited-time pricing for early adopters:

- Storage pricing starts at just $2.50 per TiB per month for a copy (minimum two copies)
- Add-on service: Fast delivery egress via Filecoin Beam for as low as $0.014 per GiB.

→ **[Store](https://filecoin.cloud/warm-storage-service) and verify your data now**

## Filecoin Pay: The Payment Rail for Verifiable Services

Filecoin Pay is the fuel of Filecoin Onchain Cloud –– releasing payments automatically as services are proven onchain. In traditional cloud systems, billing runs on invoices, credit cards, and trust. Filecoin Pay replaces that with smart contract payments that settle each epoch transparently and verifiably.

With Filecoin Pay, billing becomes code. Payments trigger only when onchain proofs confirm that storage, retrieval, or computation was actually delivered. There are no middlemen and just cryptographic attestations and automatic settlement. Customers retain full ownership of their data, and builders can finally monetize infrastructure directly without relying on billing teams or third-party processors.

Under the hood, every Filecoin Onchain Cloud service runs on its own programmable payment rail between clients and service providers, with funds flowing automatically as proofs of service arrive. Depending on service preference, payments can be made in FIL, USDFC (a FIL-backed USD stablecoin), or any ERC-20 token, allowing seamless cross-chain integrations. All balances and transactions are onchain, queryable, and auditable, supporting both one-time jobs and continuous epoch-based payment streams.

As the settlement layer of Filecoin Onchain Cloud, Filecoin Pay connects verifiable services with economic flows. It turns proof into payment, enabling a new class of verifiable, pay-per-use services where work isn’t just promised; it’s proven. Any developer can use Filecoin Pay to build their own verifiable, onchain service.

→ **Start using [Filecoin Pay](https://pay.filecoin.cloud/) to create verifiable, pay-per-use services**

## Synapse SDK: The Developer Interface for the Onchain Cloud

Filecoin Synapse SDK is a simple, easy-to-use Javascript SDK for builders to access Filecoin Onchain Cloud flagship services to power new dApps and smart contracts. It lets developers upload, retrieve, and pay for storage using simple, high-level APIs. Synapse runs anywhere from Node.js to the browser, and is designed to be composable and extensible.

Developers can use it out-of-the-box in a few lines of code:

→ **Build with the [Filecoin Synapse SDK](https://docs.filecoin.cloud/getting-started/)**

## Filecoin Pin: A Simple Path from IPFS to Verifiable and Persistent Storage

[Filecoin Pin](http://pin.filecoin.cloud), built on top of Synapse SDK, delivers on a segment of Filecoin's original vision: to make the InterPlanetary File System (IPFS) truly persistent and backed by cryptographic proofs, onchain payments, and a decentralized community of storage providers. Filecoin Pin connects IPFS and Filecoin, seamlessly storing content-addressed data with a decentralized, verifiable storage network.

Filecoin Pin was built for the thousands of developers who already rely on IPFS to host websites, apps, datasets, or agents. It’s open source, forkable, and built on Filecoin Onchain Cloud. Major IPFS users are already harnessing Filecoin Pin for their own ecosystems:

- **ENS builders** are storing and verifying ENS metadata, websites, and content records directly onchain using Filecoin Pin. Build unstoppable websites with ENS and Filecoin Pin [now](https://www.youtube.com/watch?v=tkDwXAVtnDA&list=PL_0VrY55uV181dWs7RfIpx0ZAUZeNMjE1&index=2).
- **ERC-8004 trustless agent developers** are using Filecoin Pin to persist agent data like registration and validation files, ensuring that autonomous agents’ actions are reproducible and tamper-proof. Get started with the full [ERC-8004 builder guide](https://docs.filecoin.io/builder-cookbook/filecoin-pin/erc-8004-agent-registration).

Filecoin Pin is simple, composable infrastructure: usable like a pinning service, but verifiable like a blockchain and preserved with decentralized storage. When you pin a file through Filecoin Pin, your IPFS content is uploaded to an audited Filecoin storage provider. Each provider must verify continuous data storage and access. Payments and uptime are handled automatically through Filecoin Pay, so if proofs fail, streaming payments pause.

![Diagram illustrating the Filecoin Pin architecture and data flow](/uploads/filecoin-pin-architecture.webp)

Filecoin Pin contains a forkable [demo dapp](https://docs.filecoin.io/builder-cookbook/filecoin-pin/dapp-demo), a [CLI](https://docs.filecoin.io/builder-cookbook/filecoin-pin/filecoin-pin-cli) for custom integrations, a [GitHub Action](https://docs.filecoin.io/builder-cookbook/filecoin-pin/github-action) to back up sites, repos, or frontends automatically, and a [simple web app](https://filecoin-pin-website.vercel.app/) for any IPFS user to upload and pin data directly from the browser.

→ **Try [Filecoin Pin](https://pin.filecoin.cloud/)**

- Check out the [Filecoin Pin Docs](https://docs.filecoin.io/builder-cookbook/filecoin-pin)
- Want to host a website or a personal blog? A repo? An NFT collection? → Start with the [Filecoin Pin Github Action](https://github.com/filecoin-project/filecoin-pin/blob/master/upload-action/README.md)
- Use the [Filecoin Pin CLI](https://docs.filecoin.io/builder-cookbook/filecoin-pin/filecoin-pin-cli) to pin verifiable agent audit logs fully onchain 

## Filecoin Beam: Incentivized Retrievals for the Open Web

[Space Meridian](https://filbeam.com) team is launching [Filecoin Beam](https://filbeam.com/), the first infrastructure business built and run natively on Filecoin Onchain Cloud, showing how developers can create new onchain services on top of the cloud. Filecoin Beam delivers an incentivized data delivery service that measures, verifies, and rewards fast, reliable egress from storage providers while delivering data to end users. For the first time, retrievals are on a path to verifiability and directly tied to onchain payments through Filecoin Pay, making retrieval a measurable, economically-aligned service.

With Filecoin Beam, developers can build:

- **High-performance content APIs** with reliable and low-latency data access to Filecoin.
- **Pay-per-access datasets** and **AI data pipelines** that track retrievals automatically, make content monetizable.
- **dApps** where users have an audit trail of data delivery.

Filecoin Beam users get fast retrieval while providers get paid for onchain attestable egress. Each retrieval request is verified through Beam’s onchain verifier, a smart contract that records delivery metrics like time-to-first-byte, success rate, and egress volume. Those proofs connect directly to Filecoin Pay, streaming payments automatically to providers for verified performance. Beam is fully composable with Filecoin Onchain Cloud’s warm storage, but builders can also use it independently to add retrievals to their applications.

Storage and [retrieval](https://github.com/filbeam/bot) deal checkers continuously test retrievals across the Filecoin network, executing real deals with providers to track latency, success rates, and throughput. [Public dashboards](https://dashboard.filbeam.com) rank providers by performance, giving builders transparent benchmarks and helping the retrieval market stay competitive and accountable.

Filecoin Beam completes the Filecoin data lifecycle by making retrievals as verifiable as storage, transforming content delivery into a performance-based market where speed and quality determine rewards.

→ **Explore [Filecoin Beam](https://filbeam.com) and get started with the SDK**

---

## Who’s Building

![Logos of teams building on Filecoin Onchain Cloud](/uploads/filecoin-onchain-cloud-partners.webp)

A growing number of teams are already integrating and building on Filecoin Onchain Cloud.

### Ecosystem Integrations

From AI agents to trustless frontends, leading Web3 projects from various networks are integrating Filecoin Onchain Cloud to make their data verifiable onchain.

- **[ERC-8004](https://eips.ethereum.org/EIPS/eip-8004):** The Ethereum trustless agent builder community is using Filecoin Pin for onchain agent identity, reputation, and discovery. [Agent0](https://sdk.ag0.xyz/), created by ERC-8004 author [Marco De Rossi](https://x.com/marco_derossi), is an open source SDK that makes it easy for developers to create and manage onchain AI agents. By pinning agents’ 8004 metadata and other agent data on Filecoin Onchain Cloud, Agent0 ensures that every agent’s information is stored verifiably and tamper-free, enabling open discovery without centralized catalogs or gatekeepers.
- **[Ethereum Name Service (ENS)](https://ens.domains/)** and **[SAFE](https://app.safe.global/safe-labs-terms?redirect=%2F):** By combining ENS’s onchain naming system with Filecoin Onchain Cloud’s verifiable storage and Safe’s multi-sig governance, projects can now deploy and manage frontends that remain available, transparent, and owned entirely onchain. Filecoin Onchain Cloud provides persistent, cryptographically proven storage, ENS provides naming, while Safe wallets allow secure, multi-party approvals for updates—ensuring smooth coordination and trusted governance without intermediaries. Together, Filecoin, ENS, and Safe deliver a seamless stack for building resilient, user-controlled web experiences backed by open, verifiable infrastructure.
- **[Monad](https://www.monad.xyz/):** Filecoin Onchain Cloud supports Monad to power decentralized AI infrastructure. As an EVM-based L1 delivering over 10,000 transactions per second, Monad provides a low-latency environment needed for intelligent applications that operate fully onchain. By pairing Monad’s high-speed compute layer with Filecoin Onchain Cloud’s verifiable storage and payment rails, developers can now build, train, and deploy AI models that are transparent, auditable, and self-verifying. As a part of the Monad AI Blueprint program, Monad apps can connect directly to Filecoin’s storage capabilities on Monad, simplifying data management and unlocking powerful new use cases. Anyone can easily deploy their own Filecoin storage endpoints: for example, via Model Context Protocol (MCP) or built-in agents, with full control via their wallet for maximum flexibility and ownership over data workflows. Filecoin and Monad create a verifiable foundation for AI data and compute — bridging high-performance infrastructure with fully open, onchain intelligence.
- **[KYVE](https://www.kyve.network/):** KYVE is using Filecoin Onchain Cloud to resiliently store chain data from [Celestia](https://celestiaproject.space/) and [Story Protocol](https://www.story.foundation/) across a decentralized network of Filecoin storage providers. After starting in the Arweave ecosystem, they’re expanding to a more scalable decentralized storage platform that can support petabytes of chain data with support for fast validator syncing.
- **[Geo Podcasts](https://www.geobrowser.io/):** Geo Podcasts is built on the Geo knowledge graph protocol and helps users discover top podcasts by topic, surfacing the most interesting conversations happening around the world. By storing its podcast data, images, and knowledge-graph records on Filecoin Onchain Cloud, Geo Podcasts ensures that all information is verifiable across applications.

### Storage Services

The first storage services built on Filecoin Onchain Cloud are coming online across regions, extending Filecoin’s verifiable storage network to deliver new, high-performance storage options for developers and clients. This marks a major shift away from off-chain coordination. Filecoin isn’t just powering external networks anymore; it’s powering core Filecoin storage onramps to build, pay, and coordinate storage directly onchain.

- **[Akave Cloud](https://akave.com/):** Is harnessing Filecoin Onchain Cloud’s warm storage service to extend verifiability beyond hot storage into a new decentralized backup and archiving tier. This new tier is designed for AI, IoT, ML, and compliance workloads that need durable, auditable, lower-cost storage. Akave already offers an S3-compatible platform, integrity proofs, and erasure-coded durability and the Filecoin integration expands these guarantees giving users an affordable and more scalable option for long-term retention without compromising verifiability.
- **[Storacha](https://storacha.network/):** Is launching [Forge](https://medium.com/@storacha/the-storage-sweet-spot-enterprises-have-been-waiting-for-59d169958afa) on Filecoin Onchain Cloud, which delivers IPFS-compatible, high-throughput warm storage with UCAN-based programmable access control and onchain proofs of data possession. Proof verifications and payments are anchored on Filecoin Onchain Cloud, ensuring long-term data integrity without reliance on centralized systems. At $5.99 per terabyte per month, Storacha Forge makes cryptographically auditable, owner-controlled storage accessible to any organization managing data at scale.

### Filecoin Onchain Cloud Alpha Builder Cohort

Over [100 early builders](https://app.akindo.io/wave-hacks/1PRjgGzKaTqXaQBBl?tab=overview)have been experimenting with Filecoin Onchain Cloud for the last three months, building new dApps, tools, and communities with onchain, verifiable storage and services. A look at the top projects:

- **[Eastore](https://www.eastore.xyz/):** A chain-agnostic, decentralized drive that gives users private, client-side encrypted storage and data ownership through Filecoin Onchain Cloud.
- **[Filosign](https://app.filosign.xyz):** A decentralized, onchain alternative to DocuSign that gives enterprises cryptographic, verifiable e-signatures stored immutably on Filecoin.
- **[Cha-Ching](https://cha-ching.it):** Turns GitHub activity into rewards, letting organizations reward developers and AI agents for verified contributions.
- **[Groundline](https://groundline.vercel.app/):** A decentralized knowledge-graph database where AI and research teams can query, store, and monetize verifiable graph data directly on Filecoin Onchain Cloud.
- **[Cairn](https://cairn-app-9vb6z.ondigitalocean.app/):** Tracks and rewards reproducible AI research using Filecoin Onchain Cloud for verifiable data storage and Filecoin Pay for impact rewards.

## The Potential

A new era of global, resilient, flexible applications and agents requires composable and programmable building blocks. With Filecoin Onchain Cloud, developers can build smarter by spinning up the exact stack they need instead of compromising with someone else’s architecture and walled gardens. Here’s what Filecoin Onchain Cloud unlocks for builders:

**AI and Autonomous Agents:** Build agents that store and retrieve models, execute tasks, and settle payments automatically. Every action, from inference to data access, is verifiable onchain, creating a foundation for transparent and auditable AI systems.

**DePIN Networks:** Spin up new verifiable infra services –– whether it’s sensors, bandwidth, or mapping –– straight from a smart contract. With Filecoin Onchain Cloud, you can harness onchain storage, retrieval, and payments instead of rebuilding your own network.

**Web3 dApps:** From social platforms and DAOs to media and marketplace apps, builders can guarantee persistence and auditability for everything their app depends on, without centralized pinning or opaque servers in the middle.

**Pay-per-Request APIs:** Developers can launch decentralized APIs, from AI endpoints to NFT metadata feeds, where every query triggers an onchain proof of delivery. Think The Graph meets Stripe, so that usage-based billing is made verifiable and open.

**Research and Compute Marketplaces:** Scientists and engineers can run compute jobs, simulations, or labeling tasks on verifiable infrastructure, with automatic settlement once proofs of computation are posted. Verifiable work can become verifiable payment.

**Local and Sovereign Cloud Infra:** Build your SaaS business or enterprise service on local infrastructure you can audit and govern. Choose storage providers in your local region, audit onchain performance proofs, and serve your customers without dependence on Big Cloud infra.

## Roadmap

Filecoin Onchain Cloud is just the start of a major expansion of the Filecoin network into a fully composable, onchain cloud. We’re excited to continue this journey together! Get involved in the upcoming milestones.

**Automate Repair and Replication:** Upcoming service contracts and replication layers will make storage self-healing and redundant.

**Bring Filecoin Onchain Cloud to Your Chain:** New payment and swapping end points will allow builders to pay in their native token and use Filecoin onchain verifiable storage.

## Start Building

Filecoin Onchain Cloud is live on testnet and launching on mainnet in January 2026. This is the foundation of a verifiable web where developers own the cloud – with storage, retrieval, and payments all running onchain.

The future of the cloud starts with us. Open the cloud.

Visit [Filecoin.cloud](http://filecoin.cloud) to start building.

---

The Filecoin Onchain Cloud team, led by FilOz, the R\&D team advancing the core Filecoin protocol, was formed to expand the Filecoin network to deliver cloud services with onchain guarantees.
