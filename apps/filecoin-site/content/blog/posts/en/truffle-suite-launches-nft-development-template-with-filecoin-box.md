---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-31T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin Box includes everything a developer needs to get started with
  decentralized storage and markets for NFTs, powered by Truffle Ganache.
image:
  alt: ""
  url: /uploads/filecoin-blog-1207x635-5.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-1207x635-4.webp
title: Truffle Suite Launches NFT Development Template with Filecoin Box
_template: blog_detail
---

Filecoin Box is now available in Truffle! Devs can get started with Filecoin Box and have everything they need to create a decentralized art gallery.

## [Try the Filecoin Box](https://www.trufflesuite.com/boxes/filecoin)

[Ganache](https://www.trufflesuite.com/ganache) (part of the Truffle Suite) is a simulator providing developers with a personal, locally running blockchain instance. Developers can use Ganache to build, deploy, and test their Dapps in a secure and realistic environment before launching on public networks. The Filecoin Box is a template to build, deploy, and transact NFTs, using both the Filecoin Ganache and Ethereum Ganache simulators. With the Filecoin Box, Truffle provides a solid foundation for developers to create solutions for NFT storage and continue bridging the Ethereum, IPFS, and Filecoin ecosystems.

The Filecoin Box lets developers build a decentralized art gallery in a test environment. It contains Lotus and IPFS nodes, in addition to an Ethereum node to deploy the ERC-721based NFTs. Additionally, the Filecoin Box includes a front-end environment to view the assets.

In the past, NFT creators and owners have typically relied on risky practices like centralized marketplace storage solutions, or location addressing which has presented [rug-pull issues](https://cointelegraph.com/news/opensea-collector-pulls-the-rug-on-nfts-to-highlight-arbitrary-value). Filecoin and IPFS are quickly becoming the standard for NFT storage because they offer more secure alternatives. Filecoin offers buyers and creators decentralized data storage, and IPFS offers an alternative to typical https:// location-addressing through content-based addressing, which identifies content by its cryptographic hash instead of its location. IPFS even offers a way for creators to [mint and store NFTs](https://docs.ipfs.tech/how-to/best-practices-for-nft-data/) through a simple command-line application called Minty. All of these are ways that Filecoin and IPFS are leading NFT storage safely.

**How It Works**

Running Filecoin Box generates 10 accounts, each with 100 FIL. These accounts can be simulated in the environment to create storage deals, mint NFTs, and upload/retrieve NFTs. Storage deals are agreements between a client (i.e. the developer in the case of Ganache) and a storage miner to store data on the Filecoin network (in this case, the ERC-721 assets). On the public Filecoin network, these deals have to be reached “OTC” - i.e. a deal has to be reached with a miner before any data can be stored. In the Filecoin Box, deals are reached automatically to simulate an active storage marketplace.

With access to a storage market, funded accounts, NFT standards, and a front-end gallery UI, developers can create and test a wide variety of Filecoin and Ethereum interactions, testing out the process of storing and retrieving to continue creating robust dapps to support the decentralized storage ecosystem.
