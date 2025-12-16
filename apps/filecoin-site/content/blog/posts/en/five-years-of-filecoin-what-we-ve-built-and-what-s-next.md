---
aliases:
  - /blog/five-years-of-filecoin
  - /blog/filecoin-5th-birthday
author: ""
categories:
  - updates
date: "2025-10-15T13:01:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Introducing Filecoin Pin and a Preview of the Filecoin Onchain Cloud
image:
  alt: "Five Years of Filecoin: What We've Built and What's Next"
  url: /uploads/Filecoin5_FilecoinBlog.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/Filecoin5_FilecoinBlog.webp
title: "Five Years of Filecoin: What We've Built and What's Next"
_template: blog_detail
---

October 15 marks five years since the launch of Filecoin mainnet. Since then, Filecoin has grown into the world’s largest decentralized storage network, supporting exbibytes of capacity, thousands of active storage deals, and a thriving community of developers, storage providers, and clients. Together, we’ve unlocked new frontiers for Filecoin, from [scaling chain bandwidth](/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding/) 10-25x in 2021, to launching smart contract programmability in 2023.

Since Liftoff, Filecoin has been on a mission to bring fully verifiable, incentive-aligned, and decentralized storage to the world. The InterPlanetary File System (IPFS) is the open protocol used by a massive community of over half a million developers who use decentralized content IDs (CIDs) for everything from ENS websites to NFTs to trustless onchain agents and beyond. From day one, Filecoin was designed as an open incentive layer for anyone to persist their IPFS content-addressed data across a global network of cryptographically audited storage providers. 

Today, we’re building on Filecoin’s onchain cryptographic proofs, smart contract programmability, and the community of global Filecoin storage providers to finally make that vision a reality. As we celebrate this milestone, we’re looking back at what the ecosystem has built, introducing Filecoin Pin — a new tool and demo for IPFS builders — and sharing the first look at what’s next for the network: the Filecoin Onchain Cloud. 

## Five Years of Filecoin

### 2020 — Mainnet Launch

Filecoin goes live with the mission to create a decentralized, efficient, and robust foundation for humanity’s information. 

> The early Filecoin community, the OGs per se,... were after the pursuit of the truth and the best systems in a way that would protect humanity and the future of civilization. And today, I don’t think we’ve lost that element.

_Jonathan Schwartz, CEO, GLIF_

### 2021 — Global Capacity

Filecoin becomes the largest decentralized storage network in the world with exbibytes of storage capacity and thousands of independent storage provider systems across the globe. 

> Very quickly, we reached multiple exabytes of storage capacity on the network, which was wild because just a few months before, we had been speculating about whether this would ever happen in the decades to come.

_Marta Belcher, President, Filecoin Foundation_

### 2022 — Large Data Onboarding

Public datasets, institutional archives, and scientific and research data flow onto the network from Internet Archive, MuckRock, USC Shoah Foundation, and more. 

> Last month, the Internet Archive demoed a page to me, and I thought, ‘There are no intermediaries here.’ This is just straight up coming from the storage providers on the network. Not only are we achieving what that plan was so many years ago, but it’s getting better

_Danny O’Brien, Senior Fellow, Filecoin Foundation_

### 2023 — Programmability

The Filecoin Virtual Machine (FVM) brings smart contracts, composable data workflows, and Ethereum compatibility to the network. The network welcomes hundreds of projects, thousands of deployed contracts, and new use cases such as perpetual storage, capital markets, and data DAOs.

> Having user programmability gives you a lot more flexibility in saying, ‘How do we just let a thousand flowers bloom?’

_Jonathan Victor, Founder, Ansa Research_

### 2024 — New Frontiers

IPFS deploys into space through a project between Filecoin Foundation and Lockheed Martin Space; the network supports emerging AI data needs; cross-ecosystem integrations expand the network; and storage onramps such as Storacha, Akave, CID Gravity, Lighthouse, and more come online or scale to serve hundreds of clients.

> Nowadays, Filecoin is an end-to-end storage network. I think a lot of folks have missed it, but this network has become way more powerful than it used to be.

_Hannah Howard, CEO, Storacha_

### 2025 — Filecoin Onchain Cloud

The launch of cross-chain data bridges and Proof of Data Possession (PDP) enable verifiable warm storage proofs on Filecoin. Now, in 2025, the network is expanding into a verifiable, programmable, onchain cloud of services. 

> Developers are looking for more than the centralized storage provided by Big Tech. They’re looking for open services they can build on with verifiable guarantees they can trust. That’s where Filecoin Onchain Cloud comes in.

_Molly Mackinlay, CEO, FilOz_

### 2026 and Beyond

A decentralized, verifiable, and programmable data layer for the world. 

> We're talking about truly rights-respecting computing infrastructure, which I think is critical for the future of our civilization

_Juan Benet, Inventor, Filecoin and IPFS_

Hear more reflections from the community in the 5th Filecoin birthday [celebration video](https://youtu.be/Yjm8RgqRyS0). 

## Introducing Filecoin Pin: The Missing Piece, Finally Here

### Filecoin Pin launches today in alpha and with it, the vision that sparked Filecoin’s creation is finally becoming reality

When Filecoin first launched, it had an ambitious goal: to be the incentivized persistence layer for IPFS. Changing how we address content, IPFS moved from fragile location-based URLs to verifiable content identifiers that never break. Without economic incentives or cryptographic guarantees, IPFS content only lasted as long as someone, somewhere, kept hosting it out of goodwill or individual interest. Over time, centralized pinning services emerged to serve demand for IPFS persistence but this created central failure points and vendor lock-in.

Filecoin was designed to answer the question: ”Who keeps the data in IPFS around?” The mission was clear - to transform IPFS from “best-effort pinning” or reliance on centralized providers into truly persistent, verifiable storage backed by economic incentives and onchain payments, and audited with cryptographic proofs. The mission of Filecoin has always been to create a decentralized, efficient, and robust foundation for humanity’s information, starting with IPFS.

### But until now, bridging these two systems has been anything but simple

Developers wanting to combine IPFS’s content addressing with Filecoin’s verifiable storage proofs and incentives faced a maze of specialized storage onboarding flows, third-party vendors, or complex workarounds. A seamless integration of discovery, routing, and delivery at scale promised by the decentralized storage stack remained just out of reach. 

### Today, that changes

With [Filecoin Pin](https://docs.filecoin.io/builder-cookbook/filecoin-pin), developers will be able to persist any file or existing IPFS data on the Filecoin network of decentralized and globally distributed storage providers using familiar workflows and IPFS tooling. IPFS pins now come with Filecoin’s verifiable storage guarantees and the ability to persist IPFS files with crypto wallet payments - no vendors, workarounds, or KYC dependency on credit cards required. The decentralized storage stack is finally coming together!

### How does it work?

When you use Filecoin Pin, your IPFS files are persisted on Filecoin. Storage providers must cryptographically prove that they continue to store and serve your data daily, and customers only pay when these storage proofs are successfully delivered and verified onchain. Your data is directly available from Filecoin storage providers throughout the storage period.

But verifiable persistence is only part of the equation; a complete storage solution also depends on fast, dependable access to data. Filecoin Pin brings this full circle.

With Filecoin, your data remains portable and sovereign: you can choose providers, audit storage proofs, all without depending on a single company or provider. This is the trustless, economically-incentivized persistence layer that was always meant to complement IPFS.

### Built for Builders

These early tools represent what's been missing in Web3 infrastructure: usable, verifiable services built for developers, not intermediaries. Filecoin Pin isn't a full product, it's a proof of concept for what can be built on this foundation of onchain services. It's designed to be cloned, forked, and extended!

Want to host a website or a personal blog? A repo? An NFT collection? → Start with the [Filecoin Pin Github Action](https://github.com/filecoin-project/filecoin-pin/blob/master/upload-action/README.md)

More interested in building out your own IPFS dApp? → Check out the [Filecoin Pin Demo](https://github.com/filecoin-project/filecoin-pin-website) to build your own dApp using Filecoin

Want to build out your own ERC-8004 trustless agent? → Use the [Filecoin Pin CLI](https://docs.filecoin.io/builder-cookbook/filecoin-pin/filecoin-pin-cli) to pin verifiable agent audit logs fully onchain and Web3 native

The original vision of a decentralized storage stack where content addressing and verifiable persistence work seamlessly together is no longer a promise. It's ready for you to build on.

## What’s Next: Filecoin Onchain Cloud

Filecoin Pin, as the very first developer toolkit offered by Filecoin Onchain Cloud, is the first demo of something much bigger. Over the past five years, Filecoin has grown into the world’s largest decentralized storage network, and now, the building blocks are in place for a Cambrian explosion of onchain services - starting with storage and retrieval. 

### What’s Broken in Today’s Cloud

The cloud has powered the last decade of software, but its tradeoffs constrain developer freedom and future growth: 

- Vendor lock-in makes switching providers costly and risky, leaving developers tied to a single ecosystem. 
- Pricing is opaque, and bills are unpredictable, creating price captivity. 
- Proprietary silos limit interoperability and choice. Services operate as black boxes — users are asked to trust that delivery has happened, but there is no independent proof. 

Data sovereignty remains uncertain: where is your data stored, is the data still authentic, and who can access it? For too long, the cloud has been controlled by intermediaries, not builders. 

Developers rent infrastructure but give up control; they rely on centralized terms, opaque pricing, and closed APIs. 

### What Changes with an Onchain Cloud

When service interactions are recorded onchain, delivery becomes auditable and transparent. A programmable, verifiable cloud answers these gaps. 

Developers can write rules such as “replicate copies to three regions” or “only pay if delivered” directly into smart contracts rather than buried in paper agreements. And because services are modular and composable, they can be extended, combined, or reused –– instead of being accessible through specific, constantly changing APIs. 

With [Filecoin Beam](https://filbeam.com/), data access becomes sustainable by tying onchain payments to verified egress and delivery through an incentivized CDN-level retrieval service. This aligns incentives across the network and creates a durable economic foundation for content availability. 

Filecoin Onchain Cloud envisions a world where every layer of cloud infrastructure — storage, compute, retrieval, access control, and beyond — is open, verifiable, and interoperable. It’s the foundation for a decentralized, developer-owned cloud built for the next era of data, AI, and applications.

Developers will gain new levers of control: the ability to detect tampering, prove data provenance, and distribute at scale with portable addressing that doesn’t 404 when the provider decides to move or shut down the server. 

And soon, developers will be able to monetize access to valuable datasets, allow AI agents to programmatically pay for information, and create new revenue streams for data producers, all settled transparently onchain.

### Why is this important?

When you can verify what happens to your data, you truly own it in tangible ways: portability that breaks vendor lock-in, transparent pricing that prevents cost captivity, and open protocols that free you from proprietary silos.

In November, we're releasing the first capabilities of Filecoin Onchain Cloud. This platform marks a major expansion of the network and serves as an entry point for a new generation of builders, advancing Filecoin’s mission to preserve humanity’s information.

Ready to take back the cloud? Join the waitlist at [filecoin.cloud](https://www.filecoin.cloud/).

## Get Involved

- Get started with [Filecoin Pin](https://docs.filecoin.io/builder-cookbook/filecoin-pin) and bring onchain verifiable persistence to your IPFS workflows
- Help celebrate [Filecoin's 5th birthday](http://fil.org/events/filecoins-5th-birthday)
- Learn more at [Virtual FIL Dev Summit 7](https://www.fildev.io/FDS-7), happening October 16 and 17
- Join us for the Filecoin Onchain Cloud Launch at [DePIN Day, co-hosted by Fluence and Filecoin Foundation](https://luma.com/depin-day-ba), on November 18 in Buenos Aires, Argentina, alongside Devconnect
- Join the waitlist at [Filecoin.cloud](https://www.filecoin.cloud/)
