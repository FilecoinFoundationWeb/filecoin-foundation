---
title: "One Year of Programmability, Smart Contracts, and Dapp Growth on Filecoin"
created-on: 2024-03-14T13:04:08.972000Z
updated-on: 2024-03-14T13:04:09.018000Z
published-on: 2024-03-14T13:04:09.031000Z
category: ecosystem
description: "One year ago on March 14, 2023, the launch of the Filecoin Virtual Machine (FVM) brought onchain programmability and smart contracts live on Filecoin mainnet."
image:
  src: /assets/images/031224-fvm-anniversary.png
seo:
  description: "Celebrating one year of programmability on Filecoin. Explore the growth
  of smart contracts and DApps."
---

One year ago at 3:14 PM UTC on March 14, 2023 (epoch 2,683,348), the launch of the [Filecoin Virtual Machine](https://fvm.filecoin.io/) (FVM) brought onchain programmability and smart contracts to Filecoin Mainnet. Dapps can tap into storage primitives on Filecoin with valuable workflows including perpetual storage, data access control, compute-over-data, Data DAOs, and more. These capabilities solidify Filecoin’s position as the Layer-1 blockchain uniquely positioned to power an open data economy.

As of March 2024, 800+ FVM projects from startups, hackathons, and builders on Filecoin created about 680,000 wallets and deployed more than 3,000 total contracts.

Let’s take a look at the tremendous network milestones and brand-new use cases that FVM has unlocked on Filecoin in the last year.

## Unlocking New Use Cases and Possibilities

Over the last year, dapp and smart contract builders developed features, integrations, and resources to enable a wide variety of projects built on Filecoin. Some themes include:

Data onboarding and management tools that automate storage dealmaking. Perpetual data storage contracts allow users to make storage deals once, and their files are stored perpetually with [Lighthouse](/ecosystem-explorer/lighthouse). Enabled by FVM capabilities, Lighthouse also implemented the first Proof of Data Segment Inclusion, which acts like a certificate of authenticity. The [NFT.Storage](/ecosystem-explorer/nft-storage) [NFT Forever Project](https://blog.nft.storage/posts/2023-03-14-announcing-nft-forever-project) guarantees verifiable storage with smart contracts, providing trustless, perpetual storage for NFTs. Plus, [programmatic storage](https://github.com/filecoin-project/community/discussions/676) enables the option for automatic or user-defined conditional upload, retrieval, and management of storage deals on Filecoin.

Compute-over-data networks are uniquely positioned to support large-scale off-chain computation since Filecoin storage providers have compute resources such as GPUs and CPUs colocated with their data. [Web3mine](/ecosystem-explorer/web3mine) is actively building a network that uses the compute resources of storage providers to democratize the process of creating and capturing value. And [CoopHive](/ecosystem-explorer/coophive) is building a marketplace for compute, connecting clients and compute nodes for computational resources.

DataDAOs facilitate the collective creation, curation, and monetization of valuable datasets. Lagrange DAO is a DAO for data value realization and decentralized science (DeSci) which provides data sharing and analytic spaces. Researchers can upload datasets and models to their workspace and share them with the community. And [DALN](/ecosystem-explorer/daln) is developing a DataDAO for user-defined access control and monetizing credit card transaction data.

Cross-chain interoperability. The Filecoin Network has taken a significant leap forward in cross-chain interoperability with the mainnet launch of messaging and token bridging solutions by [Axelar](https://axelar.network/how-axelar-works) and [Celer Network](https://celer.network/). These integrations enable seamless communication and asset transfers between Filecoin and more than 30 other leading Web3 chains, such as Polygon, Ethereum, Binance Smart Chain, Avalanche, and more.

Reward contracts from [Filecoin Saturn](/ecosystem-explorer/filecoin-saturn, a decentralized content delivery network for fast retrievals on Filecoin, and [Filecoin Station](/ecosystem-explorer/filecoin-station), which connects your computer’s idle resources to the Filecoin network and rewards you with FIL.

Important tooling was added with six new block explorers including [Filfox](https://filfox.info/), [Beryx](/ecosystem-explorer/beryx), and [Starboard](/ecosystem-explorer/starboard). And the newly refreshed [Filecoin Dataset Explorer](https://datasets.filecoin.io/) has FVM-enabled retrieval of public datasets for easy discovery of open-access datasets stored on the Filecoin network.

Here are a few more early-stage projects building on FVM to keep an eye on**:**

- [Clover](/ecosystem-explorer/clover) (link previously available but now unavailable): Building a workplace suite dedicated to improving communication and community engagement within DAO organizations.
- [FileMarket](/ecosystem-explorer/filemarket): Assists users of EVM-compatible wallets used for digital content creation to store files directly in the wallet without the risk of unauthorized access, with the ability to monetize through selling access on a public storefront. In the Encrypted FileToken protocol (EFT), FileMarket aims to decentralize the role of the trusted third party responsible for fraud checks.
- Hashcase _(original link no longer available)_: Helping brands create, launch, and distribute digital collectibles to non-Web3 audiences.
- [Eastore](/ecosystem-explorer/eastore): A decentralized solution on Filecoin that stores files directly to the Filecoin network using smart contracts completely onchain.
- [Trustified](https://www.trustified.xyz/): Building a platform to issue forgery-proof digital certificates and badges.
- [Resolutio](https://resolutio.ai/): Blockchain-based stamps to provide irrefutable proof of ownership, safeguarding creative assets from unauthorized use.

## Empowering Builders on Filecoin

There has been incredible builder growth on the Filecoin network since launch. FVM’s full compatibility with the Ethereum Virtual Machine (EVM), helps many new-to-Filecoin developers make rapid progress when deploying their projects on the Filecoin blockchain.

- More than one-third of approved projects of Filecoin Foundation Dev Grants Program in FY23 were to empower FVM, including block explorers, libraries, toolsets, and more.
- At launch, early builders shipped 30+ projects to Mainnet, with 20 of them entering leading accelerator cohorts with Graph Paper Capital, Longhash, and more.
- The [Filecoin Orbit Ambassador program](/blog/orbit-year-in-review-growing-a-global-community-of-builders) hosted more than 30 FVM workshops and over 10 FVM hackathons in just as many cities to introduce builders to Filecoin. These events generated 150 new projects deployed on Filecoin, IPFS, or FVM test- and mainnets, like a voting machine Filecoin dapp from a team in Tanzania.
- The wider dev community demonstrated significant engagement with Filecoin over the past year alongside the launch of FVM. Hundreds of new projects using Filecoin have come in through participation in hackathons with ETHGlobal, ETHDenver, Encode, DevFolio, [Huddle01](/ecosystem-explorer/huddle01), and DoraHacks.

## Advancement of Platform Capabilities

The Filecoin core dev team has been hard at work launching new platform capabilities and laying foundational work to further improve the security and usability of Filecoin. Some highlights include:

- Tracing API in [Lotus](/ecosystem-explorer/lotus), unlocking new network indexing toolings
- Precise gas charging with improved Event Syscall API (also critical for user-deployed WASM actors)
- [IPLD reachability](https://github.com/filecoin-project/ref-fvm/pull/1824) analysis to ensure deterministic state access, which is critical for security as it ensures the state is accessible to the actor that owns this
- Improving the [randomness syscall](https://github.com/filecoin-project/ref-fvm/pull/1842) so it does not rely on clients for hashing
- [Resource management](https://github.com/filecoin-project/ref-fvm/pull/1747) for better performance of execution
- Making self-destruct EVM function [safer to use](https://github.com/filecoin-project/ref-fvm/issues/1837)
- Adding support for [actor upgrades](https://github.com/filecoin-project/ref-fvm/pull/1866) (pending activation in the network)

## Fueling Storage Provider Growth

FVM fueled the growth of the Filecoin storage provider ecosystem. Dapps built on top of FVM have helped connect Filecoin token holders with storage providers to pledge collateral, fueling increased capacity and data on the network.

In just one year, several finance platforms on the Filecoin network have sprung up to support storage provider access to collateral, including projects such as [Glif](https://www.glif.io/en), STFIL, [SFT Protocol](https://www.sftproject.io/), [HashKing](https://www.hashking.fi/), FilFi, [Filet Finance](/ecosystem-explorer/filet-finance)(https://www.filet.finance/), [MineFi](https://www.minefi.io/), [HashMix](/ecosystem-explorer/hashmix), [CollectifDAO](https://www.collectif.finance/), and [FILLiquid](/ecosystem-explorer/filliquid).

Prominent third parties have also launched FVM integrations, including cross-chain bridges ([Axelar](https://axelar.network/blog/filecoin-cross-chain-datadaos-axelar-and-fvm) /Squid Router, [Celer](https://blog.celer.network/2023/03/20/celer-cbridge-and-im-support-launched-on-the-filecoin-virtual-machine-fvm/)) and Wallet services ([Brave](https://brave.com/), [Metamask](https://metamask.io/)).

And recently, [Binance completed the integration of FIL](https://www.binance.com/en/support/announcement/binance-completes-integration-of-filecoin-fil-on-filevm-network-opens-deposits-5af3fc32fe71451ba942799189ae4d0a), allowing token holders to deposit and withdraw using f410 addresses with Binance.

## What’s Next

With user programmability, the network’s capabilities are expanding to new frontiers of creativity and technological advancements within the ecosystem. The FVM launch kicked off step three in the [Filecoin Masterplan](https://filecoin.io/blog/posts/the-filecoin-masterplan/):

1. Build the world’s largest decentralized storage network
2. Onboard and safeguard humanity’s data
3. **Bring retrieval and compute capabilities to the data to build scalable applications**

The coming year will bring even more decentralized services to unleash the utility of the Filecoin network. In addition to FVM, [Interplanetary Consensus (IPC)](https://www.ipc.space/) was also introduced in 2023. IPC is a revolutionary blockchain technology that powers planetary-scale Web3 apps. Teams already building using FVM-based smart contracts, tooling, and dapps can effortlessly transition and harness the power of IPC and scale hot storage layers, compute networks, CDNs, indexing engines, databases, aggregators, storage provider collectives, retrievability networks, QoS evaluators, and more.

Last month at ETHDenver, Fluence announced the upcoming mainnet launch of its IPC-powered decentralized serverless computing platform, which offers cheaper, provable, and truly decentralized computing for Web3 builders. [Fluence](/ecosystem-explorer/fluence) is just one example of a project building a decentralized physical infrastructure network (DePIN) using Filecoin, freeing computation from centralized cloud providers by offering natively decentralized, low-cost, and verifiable compute.

The Filecoin network is now [critical infrastructure](https://twitter.com/duckie_han/status/1765523492706173314) for enabling decentralized AI, compute, and DePIN, sitting at the cross-section of many scarce resources in the world.

So today, we say a big thank you to the developers, builders, teams, and all those who have contributed to the Filecoin network in the last year and are helping us build the next generation of the internet!
