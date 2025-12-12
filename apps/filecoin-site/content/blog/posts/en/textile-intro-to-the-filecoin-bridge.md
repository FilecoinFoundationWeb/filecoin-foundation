---
aliases: []
author: ""
categories:
  - updates
  - events
date: "2021-10-21T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  One of the most recent advances in Filecoin's development is the creation of
  the NEAR bridge.
image:
  alt: "Textile: Intro to the Filecoin Bridge"
  url: /uploads/textile-filecoin-bridge-2.webp
main_feature_inverted: false
related_article_1: content/blog/posts/meet-andrew-hill.en.md
related_article_2: content/blog/posts/using-filecoin-with-ipfs.en.md
related_article_3: content/blog/posts/learning-to-store-data-on-filecoin-slingshot-and-beyond.en.md
share_image: /uploads/textile-filecoin-bridge-2.webp
title: "Textile: Intro to the Filecoin Bridge"
_template: blog_detail
---

[_HackFS 2021_](https://ethglobal.com/showcase "HackFS 2021") _was a three-week virtual hackathon focused on building a digital world that is censorship-resistant, decentralized, and trustless. Below is an exploration of the Filecoin bridge as delivered by_ [_Carson Farmer_](https://twitter.com/carsonfarmer?lang=en "Carson Farmer") _of_ [_Textile_](https://textile.io "Textile") _— see the_ [_full recording_](https://www.youtube.com/watch?v=aV8-v-kHZfY&list=PLXzKMXK2aHh5iq_crvYF76EmPsZgcgLki&index=5 "Textile: Introduction to the Filecoin Bridge")_._

## On-Chain or Off-Chain: What Kind of Storage

Anyone looking to do anything on the internet today needs to consider storage. In the past, a hosting company would provide storage to customers then charge them for presenting that hosted data to the internet so anyone else could access it.

The decentralized internet has its own method of dealing with storage provisions. In a decentralized storage vision, storage providers would interact with clients and make deals that help them to get their data on the blockchain.

Unfortunately, on-chain storage is expensive, and off-chain storage is fragile. How can a viable compromise be reached for usage in the everyday internet?

IPFS was created to solve this problem. Instead of storing a digital asset on a hard disk, like contemporary website hosting companies do, data is stored on the IPFS network, distributed among multiple storage providers.

Instead of referencing a file, IPFS develops a [content ID (CID) system](https://docs.ipfs.tech/concepts/content-addressing/ "IPFS Content addressing and CIDs") that allows anyone to use a gateway and access that content, given the CID. IPFS reduces the cost of storing data by keeping the data off-chain but storing the CIDs on-chain. This method of accessing files through IPFS gateways and content addressing from multiple servers creates resiliency and redundancy.

Storage providers are rewarded based on their contribution to the network in terms of storage. Textile is somewhat like a hosting company in that it provides access to the content represented by these CIDs.

Because of the incentive structure, more popular content will generate better returns for the storage providers. Does this mean that content with less demand simply doesn't have a place in the decentralized storage system of the future? Not necessarily.

Small or less popular files can utilize [pinning](https://docs.ipfs.tech/concepts/persistence/ "IPFS Persistence, permanence, and pinning") services to help them fix or "pin" their data onto the network. The downside of his approach is that the files aren't decentralized since you require the pinning service to access them.

Filecoin's cryptoeconomic incentives allow for a more approachable way for storing smaller files or less in-demand content. It accomplishes this via batching: several files are collected together and uploaded to the file system as a batch. The batches are large enough to interest storage providers but still encompass smaller files that get their own content IDs.

## What's a Bridge and What Does it Have to Do With Storage

Bridges are complex creations that take data from one blockchain and create a pathway, "the bridge," for use on another blockchain. The NEAR bridge utilizes NEAR’s blockchain technology and token to pay for transaction fees on the Filecoin network.

This interaction is revolutionary in that it allows users of the NEAR mainnet to take advantage of Filecoin storage using native NEAR tokens to pay for the costs — something that was previously impossible. The NEAR bridge is one of those currently under development and is now in its demo stage.

Other cross-chain bridges include [one to the Ethereum mainnet](https://filecoin.io/blog/posts/bridging-the-filecoin-and-ethereum-communities/) and one that bridges to the Bitcoin blockchain. Bridges are helpful because they provide several inherent benefits:

- **Convenience:** A bridge can help with batching, deal-making, and compiling files to make it easier to interact with Filecoin. Instead of manually assessing contracts and deals, the bridge automates the process, giving the user a much friendlier and cleaner front end. The only concern is the costs.
- **Caching:** Normally, for batch uploads, there is a period of caching. This period allows users to access their files while they're still being uploaded to the Filecoin network. Caching also helps with speedy access to files, reducing the time taken to jump from one chain to another.
- **Other Services:** Depending on how the bridge is built, it can even offer additional services such as content indexing and mapping.

## The NEAR Bridge in Action

At HackFS, Carson [presented a demo](https://www.youtube.com/watch?v=aV8-v-kHZfY&list=PLXzKMXK2aHh5iq_crvYF76EmPsZgcgLki&index=5) of the [NEAR bridge](https://near.org/blog/filecoin-launches-collaboration-with-near-to-accelerate-the-growth-of-the-web3-stack/ "Filecoin Launches Collaboration with NEAR to Accelerate the Growth of the Web3 Stack") that showed off some impressive functionality. The bridge was run on the testnet but still showed a lot of promise for uploading files and interacting with on-chain wallets.

A live-coding session showed a barebones app that could connect to a wallet and execute file uploads from the NEAR mainnet, with all costs paid through NEAR tokens. The result was a file uploaded to the Filecoin network, with a content ID that could be used to access it through a gateway (like Textile).

Seamless integration with web3 applications on the NEAR mainnet may soon be able to leverage the power of Filecoin's decentralized storage system. Other bridges could open up an even wider adoption of decentralized storage across users of different networks.

## How Soon Can We See This In Action

The HackFS demonstration shows that the basic premise works, but a few things still need to be worked out. The team is working on implementing other bridges, with cross-chain functionality being the overarching goal.

It's still early days in bridge development for Filecoin, but from what we've seen demonstrated, likely, we won't have to wait for too long before we have a working mainnet prototype. It's pretty exciting to see this kind of integration happen right before your eyes.

The overall potential for a multi-chain bridge that allows for decentralized storage is immense and world-changing in its scope.
