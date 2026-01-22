---
title: Introducing Storacha - The Future of Hot Decentralized Data
draft: false
excerpt: >-
  Storacha transforms web3.storage into a community-driven, decentralized hot
  storage network. Learn how it works and how you can start storing!
share_image: /uploads/StorachaBlog.webp
image:
  url: /uploads/StorachaBlog.webp
author: Storacha Team
date: 2024-07-30T17:02:41.517Z
categories:
  - updates
dim_image: true
---

_Original source [on Medium](https://medium.com/@storacha/welcome-to-the-future-of-super-hot-decentralized-data-scale-storacha-is-coming-at-ya-fd2b2de75bf6)._

[Storacha](https://storacha.network/) is a new decentralized network for data at scale, cooked up by the brains at Protocol Labs. We took the finest ingredients from [web3.storage](https://web3.storage/) and [Saturn](https://saturn.tech/) (dCDN), blended them together, added some salt, and came up with a blazingly fast, user-owned, verifiable hot data storage and retrieval system built on top of Filecoin. Holy wow! — right?! Storacha has already served Petabytes(!) of data to open web projects. It’s the bestest and most production-gradey storage system on the decentralized internet, and we’re not the only ones saying that.

## HALP! Teh data is trapped in the iron grip of centralized providers like AWS and other tech giants

Centralized providers are self appointed gatekeepers desperately holding their barriers closed with their grubby little mitts. They lock you in, control your access, charge sky-high fees, and face little competition. Sure, decentralized storage alternatives have popped up, and they ARE CRUSHED BY THE GIANTS. Ok, not always, but the problem is they cater to niche uses (like archival storage) or can’t keep up with the demand for scalable, retrievable data that users actually own.

![](/uploads/StorachaBlogImage1.webp)

We took the time to categorize (in broad strokes, as you do) some of the alternatives — thank us later. It shakes out something like this:

- Centralized storage: Store in a centralized, managed storage environment typically to ensure SLAs at the tradeoff of reduced decentralization
- On-chain storage: Store data directly in chain state, running all data through consensus and retrieving from full nodes in the network, e.g. Solana
- Data availability: Store ephemeral transaction data for a very short time, with very high availability and guarantees against malicious behavior
- Off-chain storage: decentralized storage networks that have focused on data preservation or p2p data distribution, but may use the chain for checkpointing and coordination, E.g. IPFS, Arweave, Filecoin, Banyan, Akave

…but they’re niches, and we’re looking for something bigger than a niche. A gap, if you will, a great gaping badass hole of a gap. A gap for a production-ready platform for storing and retrieving large-scale (TB-PB scale) verifiable data. That’s us, BTW. We reckon we’re the right shape to fill that gap and support the growth of web3 projects with decentralized storage layers that keep decentralization and ownership at their core! ✊Hell yeah! Go TEAM!

## Tell me more, go deep

Storacha is decentralized hot object storage and retrieval, designed for data at scale on the open web. We selectively leverage the chain to maintain decentralization and resilience but store data trustlessly with participating nodes. Yes! Love it so far — Storacha ensures fast, user-owned, verifiable, and permissioned data storage and retrieval. Uh huh, awesome sauce, go on — Storacha optimizes for highly retrievable storage and production level workloads. Banging! That’s it, and you know what, it’s solving the problems you just read about above with just a few unique approaches:

- User Controlled Authorization Networks (UCAN): These are offline first, crypto keypair based tokens. They empower user-owned storage, and their super-empower is flexible and powerful permissioning.
- Battle-Tested Production Systems: We’ve done this, we’re not starting from scratch. We know how to build systems capable of storing petabytes of data with efficient retrieval performance.
- IPFS Compatibility/Migrations: Seamless integration and migration with IPFS. The IPFS protocol is what we do. We bring and support all the usual good stuff — content addressing as standard, trustless all the things, bitswapper 4 LYFE + more!
- Filecoin Integration: We use Filecoin where it shines — much redundancy, store for long-time, many geographical locations, wow! Seriously though, our verifiable aggregation pipeline with PoDSI proofs is unmatched. Ask us about it.

## Supercharging Filecoin with Scalable Hot Data Storage

If you take only one thing away from this blog post then let it be this: Storacha is going to unleash the full potential of Filecoin. No jokes, this will happen. Storacha allows Filecoin Storage Providers (SPs) to also run as Storacha hot storage nodes! It incentivizes the storage of unsealed data, and rewards fast, efficient retrievals. Yes. Oh yes.

## Storacha Team — who dis?

Protocol Labs pedigree, the Storacha team has all the experience of building web3.storage and Saturn, as well as some of the most robust decentralized storage protocols and products in web3, such as IPFS, libp2p, Bitswap, GraphSync, NFT.Storage, and more.

## Some History. The Great Saturn & web3.storage Merger

We’re better together. Believe! Saturn has been doing great CDN-ing, literally serving billions of content-addressed requests and efficiently retrieving data from Filecoin. Something was missing though, the other side of the bridge! Saturn served data from Filecoin to users, but had no means of getting user data into Filecoin! Facepalm.

![](/uploads/StorachaBlogImage2.webp)

Enter web3.storage (stage left). Like a superhero, web3.storage offers a production-ready, hardware-agnostic open data protocol. It ensures that data is truly owned by users and stored on Filecoin, while also maintaining a copy in hot object storage for quick retrieval.

By decentralizing web3.storage, Storacha introduces incentivized hot storage nodes to the network. These nodes persist data alongside Filecoin, enabling lightning-fast, decentralized retrievals. Filecoin SPs will participate in the Storacha network as well, running hot storage nodes and earning rewards for storing unsealed data and efficient retrievals. This integration unlocks the full potential of Filecoin, making data securely stored, easily accessible, and retrievable via IPFS. By linking Filecoin and IPFS through the Storacha hot storage layer, we create a seamless, high-performance data storage and retrieval ecosystem.

Storacha’s network consists of five main actors:

![](/uploads/StorachaComponents.webp)

1. Storage nodes that persist objects and keep them readily available for download.
2. Indexing nodes that track where the data is stored.
3. Retrieval nodes that act as CDN nodes, caching and serving a large number of requests and data volumes.
4. Fishermen / light nodes that test the network for compliance.
5. Filecoin storage providers that maintain backups for durability and alsorun hot storage nodes 😉.

Storacha will be the data at scale solution for the decentralized internet. Features? Yes it does. Here’s the key ones:

- Verifiability and Data Integrity: Through content-addressing.
- User-Owned Data: Enabled by decentralized identity and permissioning tied to user email.
- Low Latency Retrievals: At CDN-level speed, with discoverability on the IPFS network.
- Redundant Data Storage: On Storacha and Filecoin for durability.
- High Availability: Comparable to Amazon S3.

Storacha is already used by these awesome projects on the open web:

![](/uploads/StorachaBlogImage4.webp)

## The Mission

We want to redefine decentralized storage by offering an intuitive, high-performance solution that matches the reliability of traditional systems. Our goal is to empower the open web with complete autonomy, eliminating reliance on centralized storage and CDN networks. We envision a future where every person can truly own their data, granting access only when it aligns with their interests and agreed uses.

While we recognize the fundamental issues with centralized storage systems and their problematic incentives, we also understand that achieving true decentralization must be balanced with maintaining high performance. Therefore, we take a pragmatic approach, grounded in the following tenets:

- Permissionless Participation: Ensuring anyone can join and contribute to the network.
- Reasonable Power of Exit: Allowing data owners to easily leave or move their data if they choose.

Having observed the decentralized storage landscape over the years, we are committed to building the massively scalable, complete product we set out to create. And yes, our side quest is to have a team member appear on “Hot Ones” with Sean Evans.

![](/uploads/StorachaBlogImage5.webp)

_User ownership over data somehow means more trees and glass, who knew?_

## We’re just getting started

We’re at the foot of what looks to us like a mountain of spicy hot chicken wings. As weird as that sounds, we’re excited to haul our already proven product up that hill, basting it with hot sauce and transforming it into a glorious decentralized network of hot (and tasty) storage providers. It’s in line with our ethos and allows us to offer a more sustainable cost structure, web3-native features, etc. etc.

We hope to open up the network to permissionless participation early 2025 — so stay tuned.

For more, check out the new [Storacha teaser](https://storacha.network/) site, where we will be releasing our roadmap soon! Join our growing community on [Discord](https://discord.gg/jwANgTVjgF) and get involved in the latest discussions. [Follow us on X](https://x.com/storachanetwork) for real-time updates and insights. Stay informed by reading our latest [blog posts](https://medium.com/@storacha) and or build with us on [GitHub](https://github.com/storacha-network). Plus, sign up for the [Storacha mailing list](https://945c6cfe.sibforms.com/serve/MUIFAJsqje9uA4owcVGYYaQWZarreW_oOzT9j0aXOY1QcOdsXQ7ZjvWvrpXKqNm9sBilY3Pum8s9CyPAkA2ELLEyJp3DVvzEDFg-Ov967IegSH6PXRAG6ulFhavIwebzTu3XsMZbpnyWbsDp5hexye1aXcFs4C9oIFFJWX2Aar8ElyUJDCPSsoeMAdj6puyREL1zUrjNpq2ZobYx) for early access!
