---
aliases: []
author: ""
categories:
  - updates
date: "2023-01-05T06:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The Filecoin Retrieval Market is about to see a drastic improvement in
  transaction costs and times with State Channels and micropayment capabilities.
image:
  alt: ""
  url: /uploads/filecoin_blog_header__fvm_imaginarium__magmo.webp
main_feature_inverted: false
related_article_1: content/blog/posts/what-the-fvm-unlocks.en.md
related_article_2: >-
  content/blog/posts/announcing-space-warp-journey-to-fvm-launch-on-filecoin-mainnet-draft-wip.en.md
related_article_3: content/blog/posts/introducing-the-filecoin-virtual-machine.en.md
share_image: /uploads/filecoin_blog_header__fvm_imaginarium__magmo.webp
title: >-
  The FVM Imaginarium: Magmo Brings State Channels to the Filecoin Virtual
  Machine
_template: blog_detail
---

_The launch of the Filecoin Virtual Machine (FVM) is quickly approaching, but there are already amazing projects in development. The FVM Imaginarium Campaign is putting the spotlight on the teams who are building incredible use cases and introducing new opportunities and concepts on FVM._

The Filecoin Virtual Machine (FVM) is coming in February 2023 and will unleash a wave of new possibilities including programmable storage primitives such as storage bounties and auctions, cross-chain interoperability bridges, data-centric DAOs, Layer 2 solutions (reputation systems, computation fabrics, etc.), and more.

Once launched on mainnet, the FEVM will allow Solidity smart contracts on the Ethereum Virtual Machine (EVM) to access Filecoin functionality by invoking built-in actors. Existing Ethereum tooling will also be compatible with Filecoin.

FVM community engagement is growing, and many builders are jumping into repositories and codebases with fresh ideas for what these new capabilities could unlock for the Filecoin network and Web3 in general.

The newly-launched [Space Warp](http://spacewarp.fvm.dev) program is helping the builder community accelerate the development of apps on the Filecoin network. In addition, as the network prepares to advance through the milestones detailed on the [FVM Roadmap](https://fvm.filecoin.io/#roadmap-4), development teams have joined the FVM Foundry Early Builders program, where they are building valuable projects on the FEVM testnet with close guidance from the FVM core team.

## Magmo

One of the teams building on FEVM is [Magmo](https://magmo.com/), a development studio and research team that’s a part of Consensys Mesh. It focuses on building decentralized Web3 scalability solutions for key infrastructure systems.

In the past, Magmo has worked on projects such as [State Channels](https://statechannels.org/) and [SAFE](https://github.com/statechannels/SAFE-protocol/blob/main/doc/SAFE.md). Thanks to the launch of FEVM, the team is now working on porting State Channels to the FVM and enabling key improvements to the network’s scalability.

## State Channels

State Channels scale peer-to-peer blockchain interactions. They’re “[a technology which allows for ultra-low cost, near-zero-latency conditional transfer of crypto assets](https://docs.statechannels.org/)” via an L2 network. In other words, they can drastically minimize transaction costs and times between two parties.

These are two major drawbacks for operations as simple as transferring money or minting an NFT. Users are often left to deal with transaction fees and wait times that don’t translate well to real-world interactions.

The way State Channels solve these issues is similar to a bar tab. A relationship is established with another party where one or both will lock up digital assets in a one-time transaction. After this step, both parties are able to interact with each other in a peer-to-peer fashion without broadcasting their subsequent transactions on the blockchain.

This mechanism allows users to settle a number of transactions instantly without paying gas fees or waiting for blocks to be mined. Once the “tab” is closed, each party will count on cryptographically signed messages that will consolidate the state of their accounts on the blockchain. On Magmo’s internal tests, State Channels currently deliver a **time-to-first-payment of only 100 ms**.

## State Channels on Filecoin

State Channels will fundamentally improve the way the [Filecoin Retrieval Market](https://retrieval.market/) works. Besides storage deals, Filecoin Clients interact with the network by making retrieval deals where they pay a certain amount of FIL to Retrieval Providers in exchange for access to data. Magmo’s State Channels solution will increase the efficiency of these deals by enabling them to take place via micropayments.

Because of State Channels’ low latency and zero-cost transactions, Clients will be able to pay Storage Providers in a constant stream of small amounts of FIL. This is an appealing alternative to the current capabilities of the network where they need to settle transactions exclusively with large sum operations to avoid raising transaction costs.

## State Channels in the Near Future

Magmo’s solution is already deployed on the [Wallaby testnet](https://github.com/filecoin-project/testnet-wallaby) where FEVM capabilities are live and constantly improved upon. It has been able to port from EVM seamlessly. The team counts on the availability of the same dependencies that are found on EVM in order to build a State Channels solution that is optimized for the Filecoin Retrieval Market.

Once mainnet is launched, micropayments with State Channels will enable new models for content distribution using Filecoin as a decentralized storage infrastructure. They could introduce services like _pay-by-the-minute_ streaming and other models where clients and users have more granular control over their data retrieval needs and how they transact with Storage Providers.

## Get Involved

The State Channels project is open to contributions. The team hosts a research-focused forum where you can help with the current efforts to build on Filecoin. You can also learn more about State Channels on the project’s [blog](https://blog.statechannels.org/) or get in touch on [GitHub](https://github.com/statechannels).

Magmo is a beneficiary of the FVM Foundry Early Builders program. The first cohort for relevant FEVM use cases will run until February 2023. Likewise, if you’d like support for a value-adding Filecoin application with Next Step microgrants, be sure to check out the [Space Warp](https://spacewarp.fvm.dev/) program.

Dive deeper into the FVM on [GitHub](https://github.com/filecoin-project/ref-fvm) and check out the [specifications](https://docs.filecoin.io/fvm) for how EVM maps to FVM. If you have any questions or ideas of your own, [share them](https://filecoin.io/slack) with the community!
