---
aliases: []
author: ""
categories:
  - updates
date: "2022-09-27T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Imagining what can be built on the Filecoin Network with the upcoming smart
  contract and compute over data capabilities.
image:
  alt: ""
  url: /uploads/image.webp
main_feature_inverted: false
related_article_1: content/blog/posts/introducing-the-filecoin-virtual-machine.en.md
related_article_2: >-
  content/blog/posts/introducing-ref-fvm-a-new-fvm-website-and-the-early-builders-program.en.md
related_article_3: content/blog/posts/fvm-milestone-0.5-is-complete.en.md
share_image: /uploads/image.webp
title: What the FVM Unlocks
_template: blog_detail
---

Currently, Filecoin is known for being a decentralized storage and retrieval network. It provides over 18 EiB of distributed data storage capacity to the world through thousands of Storage Providers globally.

But storage is only the start. Skyr, the [recently launched](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/) Filecoin v16 Network Upgrade, completed the first milestone in the launch of the Filecoin Virtual Machine (FVM). Once the process is complete, builders will be able to compute and analyze over and with the data on Filecoin!

_FVM = Provable storage + smart contracts._

The FVM will enable you to deploy your own smart contracts (or _actors_, as they are known in the Filecoin ecosystem) that perform on-chain computation over state data in the Filecoin Network. This is a really powerful addition. Allowing users to program on-chain computation over provable distributed storage enables many downstream use cases and applications to emerge both on and off-chain.

Think of storage and retrieval functionality as being Filecoin’s Layer 0 architecture. The ability to perform on-chain computation is now bringing Layer 1 capabilities to the Filecoin stack.

## New Filecoin Use Cases

So what does this mean? Why does this matter? What possibilities will it unlock? The FVM can be used for the creation of a new class of web3 dApps, many of which will have the potential to become 10x improvements to the network’s functionality and beyond.

Members of the Filecoin community are already excited about what can be built with these new capabilities. Some ideas that are being discussed in the community are:

### Tokenized datasets and Data DAOs

Imagine kickstarting the dataset economy where you could capture and represent the value of those datasets to society. You could even exchange those data tokens between peers and request computation services on that data such as validation, joins, analysis, feature detection and extraction moving into machine learning.

### Trustless reputation systems

Imagine an overlay network of nodes that could patrol the network performing random deals with Storage Providers (SPs) in order to gauge key metrics like quality of service guarantees, performance, latency, and region details. These nodes can then store SP reputation scores on-chain making them traceable and verifiable while enabling users to decide on the terms of service of the SPs that they want to use for their data.

### Replication workers

Imagine anyone is able to write a new smart contract that makes new deals to maintain a specific level of replication of that dataset in the network. You could ensure the resiliency of your data by ensuring it is always stored _n_ times automatically.

The smart contract could also be able to transfer your data just once into the filecoin network and have a trustless actor replicate and send that _n_ times to multiple storage locations. You could even create a user defined policy of rules for that data to obey - specifying things like region and location, or latency, and even price. This can all be built right into the smart contract flow in FVM.

### Smarter storage markets

Imagine richer functionality in storage markets with features like auto-renewal of deals or self-repairing deals in the event of sector issues. Another possibility are time-locked or event-driven data deals where retrieval only occurs under a specified timeframe or event trigger.

### The list goes on…

There are many more use cases to unlock with FVM. The only limit is developer imagination. Some other the community could look into are:

- NFTs minted, exchanged, and stored under a single roof
- Storage bounties and auction mechanisms
- Enabling L2 bridges
- Futures and derivatives on storage that compose in DeFi fashion
- Conditional loans for sector pledging

If you have a great use case idea/suggestion, join the discussion on the FVM forum [here](https://github.com/filecoin-project/community/discussions/categories/developers)!

## How Will This Be Possible

The FVM is built on a WASM core with the reference SDK built in Rust. There are several amazing builders in our community working on other SDKs for FVM like an AssemblyScript SDK and an experimental TinyGo SDK.

EVM-compatibility out of the box for the FVM is also [in the works](https://github.com/filecoin-project/ref-fvm/issues/692). This means that any use cases currently on EVM can port over and take advantage of the Filecoin storage layer. Likewise, developers can use their current Solidity skills as well as the Ethereum ecosystem tooling like Hardhat or wallets to develop for FVM.

## What Does The Roadmap Look Like

User-defined smart contracts have always been part of the Filecoin development roadmap.

The priority, though, has been to first develop Layer 0 as the robust, secure, and permissionless decentralized storage network that is Filecoin.

Now, the community is ready to push forward into the next phase of the network’s development. You can take a look at the detailed plan for the launch of these L1 capabilities in the [FVM roadmap](https://fvm.filecoin.io/#roadmap-4).

After completing Milestone 1 with Skyr — the introduction of non-programmable WASM-based FVM — the code has also now been fully audited. This means that scoping for Milestone 2 — programmability for both native FVM and EVM-compatible FVM — is now fully underway.

## Building with the FVM Community

If you’re the type of team or builder that wants to be involved in helping to shape the future of FVM, there are a few ways to get involved:

Help to flesh out the technical details for FVM on [GitHub](https://github.com/filecoin-project/ref-fvm) and join the #fvm [Slack](https://filecoin.io/slack) discussions. The repo and associated [FIPs](https://github.com/filecoin-project/FIPs) have more info on how the FVM is being architectured.

Join the [FVM Early Builders](https://fvm.filecoin.io/foundry) program if you have a use case or tool you’d love to build. There are other amazing builders in the ecosystem to collaborate with, including Zondax, Bloxico, Polyphene, the Venus team, and Glif. The upcoming cohort kicks off in September

Apply for [FVM RFP Grants](https://github.com/filecoin-project/devgrants/blob/master/rfps/fvm-open-tools-infra.md) focused on infrastructure and tooling projects for FVM. Some of the current proposals include teams building high-level Rust SDKs, AssemblyScript and TinyGo SDKs, and a ‘Hardhat for FVM’ called FilHack. However, more proposals for tooling and infrastructure projects on FVM are needed. These could be an Open Zeppelin library or some concepts for _data wallets_.

If you’d like to learn more about the FVM first, you can also watch a [video explanation](https://www.youtube.com/watch?v=Vw9syGiG31c&t=10s) of the project.
