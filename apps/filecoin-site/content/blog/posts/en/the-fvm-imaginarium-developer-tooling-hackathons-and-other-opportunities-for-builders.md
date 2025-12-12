---
aliases: []
author: ""
categories:
  - updates
  - events
date: 2023-04-13T04:00:00.000Z
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In this blogpost, you’ll find an overview of developer tools that will help
  you get started on your journey building with FVM.
main_feature_inverted: false
related_article_1: content/blog/posts/the-fvm-imaginarium-block-explorers.en.md
related_article_2: content/blog/posts/the-fvm-imaginarium-cross-chain-interoperability.en.md
related_article_3: ""
share_image: /uploads/fvm_deepdive_devtools.webp
title: >-
  The FVM Imaginarium: Developer Tooling, Hackathons and other Opportunities for
  Builders
image:
  url: /uploads/fvm_deepdive_devtools.webp
  alt: ""
---

The [Filecoin Virtual Machine (FVM)](http://fvm.dev/) went live on mainnet on March 14th and since, builders have launched everything from [Filecoin pledging and leasing solutions](https://filecoin.io/blog/posts/fvm-imaginarium-staking-and-leasing-protocols/) to [token bridging protocols](https://filecoin.io/blog/posts/the-fvm-imaginarium-cross-chain-interoperability/). However, we are still just scratching the surface: storage, retrieval and compute applications, which combined are a 300 billion dollar industry, are now more accessible to tap into for Filecoin Ecosystem developers. The FVM enables developers to build a plethora of decentralized applications (dApps) on the Filecoin network and engender a data economy for a wide range of audiences from decentralized data computation services users to Filecoin Storage Providers and clients.

The FVM is a runtime environment for smart contracts on the Filecoin network. These smart contracts, also called actors, can be written in Solidity. This runtime is fully EVM compatible. This means devs are free to use whatever tool they are most comfortable with. Additionally, you will be able to take advantage of properties of the Filecoin network such as making, monitoring and interacting with storage deals. You can learn more at fvm.filecoin.io.

If you are passionate about leveraging the capabilities of a decentralized storage network like Filecoin to solve real-world problems, we encourage you to build with the FVM.

In this blogpost, you’ll find an overview of developer tools that will help you get started on your journey building with FVM.

## Getting Started with FVM: Starter Kits for Developers

## Starter Kits 101

Are you a developer looking to deploy your first smart contract with the FEVM (Filecoin Ethereum Virtual Machine aka the EVM compatible runtime on the FVM)? Look no further than the FVM Starter Kits! Getting started on the FVM is super easy with Hardhat and Foundry starter kits, that provide you with simple contract templates for storing data on Filecoin with Solidity. Plus, you will also find contract templates for interacting with the filecoin.sol library, which allows seamless interaction with the Filecoin protocol and its built-in system actors, all from your smart contract.

Check out the below starter kits and resources:

1. [Filecoin Solidity Library](https://docs.zondax.ch/fevm/filecoin-solidity) by Zondax
2. [FEVM Hardhat Starter Kit](https://github.com/filecoin-project/FEVM-Hardhat-Kit)
3. [FEVM Foundry kit](https://github.com/filecoin-project/fevm-foundry-kit)

For a more comprehensive list of resources to first build your dapp on Filecoin Hyperspace Testnet, check out the [FVM Hackathon Cheatsheet](https://github.com/filecoin-project/community/discussions/585). This is updated regularly and is an invaluable resource for hackers building on Filecoin for the first time!

## Starter Kits 201

The Filecoin Ethereum Virtual Machine (FEVM) is a groundbreaking platform that allows developers to write logic directly on top of the metadata of storage deals. And, to help developers get started, we've created solution-based starter kits that provide a starting point for developers to build various solutions.

The first of this kit is the [programmable storage deal making kit](https://github.com/filecoin-project/fvm-starter-kit-deal-making). This kit allows developers to use smart contracts to create storage deals automatically on the Filecoin blockchain, and give you the flexibility to customize it the way you want. This kit allows developers to use smart contracts to streamline and add automation to the creation of storage deals on the Filecoin blockchain. It also gives you the flexibility to integrate it as needed, within your dApp.

We will also soon be launching a starter kit for DataDAO and decentralized computation on the FEVM on the [FVM official site](https://fvm.filecoin.io/) - stay tuned.

## Block Explorers

Block Explorers provide essential real-time and historical information about the Filecoin blockchain and state of the network, including data on transactions, addresses, blocks, Filecoin actor interactions, storage providers, etc. Each of the below explorers give you all of these data points, with some differences in UI and SDKs/APIs available for use in your smart contracts.

Beryx, Filfox and Starboard provide contract verification as a feature, allowing users to verify the authenticity and integrity of smart contracts deployed on the Filecoin blockchain by ensuring that its source code has actually generated the bytecode deployed on-chain.

## Beryx Explorer

[Beryx Explorer](https://beryx.zondax.ch/) by the Zondax team is a comprehensive tool to easily extract data about the Filecoin network in a ‘ready to add to your code’ format from the Filecoin network and interact with custom smart contracts. Check out the [Beryx Client tool for JS](https://www.npmjs.com/package/@zondax/beryx) to use in your project. Verify your smart contract via Beryx [here](https://beryx.zondax.ch/contract_verifier).

## Filfox

[Filfox](https://filfox.info/en) is another comprehensive explorer with information about Filecoin Network including messages, transactions, tipsets, mempool, etc. The Filfox [contract verifier](https://filfox.info/en/contract) allows you to pick the compiler version and the License type when you verify your contract.

## Starboard

[Starboard](https://fvm.starboard.ventures/explorer) had various analytics products to give you an insight into the Filecoin Network, including the Block explorer. Use the [Spacescope API](https://spacescope.io/) to get statistics about the Filecoin Network and build data driven applications and dapps for Filecoin Economy participants i.e. Storage providers, clients etc. The Starboard Ventures FVM dashboard recently released their [Contract Verification Tool](https://fvm.starboard.ventures/explorer/verifier/) as well. It allows you to pick the License type too.

## Glif

[Glif](https://www.glif.io) is your go-to tooling option for all information on Filecoin Lotus nodes. The strives to give depth, when it comes to metrics about the network. Check out the [Glif API](https://api.node.glif.io/) for your project.

For more information, check out [this deep dive into all the available Filecoin Block Explorers](https://filecoin.io/blog/posts/the-fvm-imaginarium-block-explorers/) or the [official Block Explorers Docs](https://docs.filecoin.io/networks/mainnet/explorers/).

## Key dApp Building Tools

## Cross Chain Building Blocks

Cross chain solutions make it possible to build a variety of cross chain projects including cross chain swaps, NFT bridging, cross chain lending, and more. Two key actions required when building a dApp are moving tokens from one chain to another and message passing. Regardless of the blockchain your dApp uses, you can utilize its native tokens along with the client contract deal-making kit to create Filecoin Storage deals directly from your dApp This allows you to seamlessly integrate Filecoin functionality into your dApp thus reducing the need to involve a separate storage platform to access data for your dApp.

## Celer

[Celer](https://celer.network/) is a blockchain interoperability protocol enabling a one-click user experience accessing tokens, DeFi, GameFi, NFTs, governance, and more across multiple chains.Two kind of bridging experiences are available on Celer: Liquidity Pool based model, bridging that is based by deep liquidity pools using USDC, USDT and Ethereum and the other model pegged token model where a wrapped FIL is created on the Ethereum blockchain. NFT Bridging is made possible by the NFT bridging framework. Check out the [cBridge documentation](https://cbridge-docs.celer.network/) for all of these and the [GitHub for smart contract examples](https://github.com/celer-network/sgn-v2-contracts) to get started.

## Axelar

[Axelar](https://axelar.network/) delivers secure cross-chain communication for Web3, enabling you to build Interchain dApps that grow beyond a single chain. The Axelar Filecoin integration Axelar is truly decentralized and fully permissionless, and it is built on a proof-of-stake model. They enable cross chain solutions possible by passing messages between chains using a simple payload. Check out the [Axelar documentation](https://docs.axelar.dev/resources/testnet) to start building cross chain projects on FVM Hyperspace testnet.

## Oracle support with Tellor

[Tellor](https://tellor.io/) is a generic oracle that works for any data at any frequency. If you’re building DeFi apps, you can get the price feeds info from the Tellor oracle, and for any other type of apps, real world data is available too. Check out the contract references [here](https://docs.tellor.io/tellor/the-basics/contracts-reference#filecoin-fvm).

## wFIL

​​wFIL is created by depositing FIL into a smart contract that mints an equivalent amount of wFIL on the Ethereum (or another) blockchain. This wFIL can then be used in Ethereum or other DeFi protocols, such as decentralized exchanges, lending and borrowing platforms, and yield farming applications. wFIL support is available via Glif, cBridge and will be available on Axelar soon!

## DEX

We will be announcing a DEX from the community in the coming weeks! Follow the [#fil-builders](https://filecoinproject.slack.com/archives/CRK2LKYHW) channel on [Filecoin Slack](https://filecoin.io/slack) for more information.

## Hackathons, Accelerators & More

![](/uploads/fvm-banner-dapp-radar-landing.webp)

We're excited to announce new builder programs this quarter following the massive success of the [FVM SpaceWarp program](https://spacewarp.fvm.dev/). To continue bringing new builders on board to build on the FVM, we're launching the [FVM Dataverse hackathon](https://fvmdataverse.devpost.com/?utm_source=FVM-devtool-blog&utm_medium=banner&utm_campaign=Organic) today in collaboration with [DevPost](https://devpost.com/). With over $40,000 in prizes, a range of challenge statements, 6+ partner technologies, and ample opportunities to connect with the FVM team, the FVM Dataverse hackathon is the place to be for the Filecoin builder community. The event will take place virtually, offering a great opportunity to build and network. Hacking will commence on May 1, and submissions are due by May 23, 2023 - [apply now](https://fvmdataverse.devpost.com/?utm_source=FVM-devtool-blog&utm_medium=banner&utm_campaign=Organic).

All the sessions will be streamed live on the [FIL Builders Twitch Channel](https://www.twitch.tv/filbuilders). Subscribe to the channel to be notified!

As mentioned, the community recently wrapped Filecoin’s biggest Hackathon to date - the FVM Spacewarp with ETHGlobal. Check out [all of the projects](https://ethglobal.com/showcase?events=spacewarp) built during the hackathon and the winner highlights for inspiration.

For builders ready to take the next step in their entrepreneurial journey, there are several FVM-focused accelerators open for application via the Softnoise platform.

The most time-sensitive of which is [Graph Paper Capital](http://www.graphpapercapital.xyz/), an early-stage accelerator and networked ecosystem, focused on helping pre-seed/seed-stage web3 startups find PMF and get to default alive. Applications for GPC1 Spring '23 cohort are now open through April 28th. Check out the [official website](http://www.graphpapercapital.xyz/) for the application, investment terms, cohort dates, 12-week program structure, full network of mentors and investors, FAQs, and more.

Stay tuned for more programs to be announced to support builders continuing to build on FVM after the FVM Dataverse Hackathon!
