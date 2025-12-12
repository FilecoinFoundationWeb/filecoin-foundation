---
aliases: []
author: ""
categories: []
date: "2022-04-26T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  An overview of how developers can get started with Filecoin as the
  decentralized storage solution for their projects.
image:
  alt: ""
  url: /uploads/161842615-0cb25989-3ff0-43a2-b6c5-af5eb3b685ca.webp
main_feature_inverted: false
related_article_1: content/blog/posts/taking-a-look-at-estuary.en.md
related_article_2: content/blog/posts/textile-intro-to-the-filecoin-bridge.en.md
related_article_3: ""
share_image: /uploads/161842615-0cb25989-3ff0-43a2-b6c5-af5eb3b685ca.webp
title: Tools for Building Consumer Applications with Filecoin
_template: blog_detail
---

Integrating Filecoin into applications is getting easier every day. Most developers looking for decentralized storage solutions will find that it is no longer necessary to know the nitty gritty of the network, how it’s built, or how to set up a Lotus node in order to take advantage of it.

There are many services and tools now that streamline the development process by focusing on what’s strictly necessary to get a consumer application up and running quickly and efficiently. After all, their applications will mainly make use of Filecoin for three key tasks: storing data, finding data, or retrieving data. This simplifies their interactions with the network to a few commands.

Every use case will require a different solution. Let’s take a look at some of the ones builders are currently using.

## Storing Standard Application or NFT Data via APIs

These services offer simple, developer-friendly APIs for Filecoin storage. They combine IPFS for fast retrieval with Filecoin for on-chain guarantees.

[**NFT.Storage**](http://nft.storage/)**:** Long-term storage service designed for off-chain NFT data (like images, metadata, and other assets). Data is stored to IPFS nodes and backed up to Filecoin with over 7x redundancy. The resulting IPFS-based URLs and CIDs can be used in NFTs and metadata to ensure the NFT forever actually refers to the intended data. Used by OpenSea, Magic Eden, and other leading NFT marketplaces. JavaScript client library, HTTP API, or drag-and-drop uploader.

[**Web3.Storage**](https://web3.storage/)**:** Sharing a backend with NFT.storage, it offers up to 1TiB of scalable, easy-access storage for all types of data. Developers can use this service via JavaScript or Go client libraries or HTTP API.

[**Chainsafe Storage**](https://storage.chainsafe.io/)**:** Storage service for IPFS and Filecoin with bucket-based file hierarchy and seamless migration from S3. It is an underlying layer of [Chainsafe Files](https://files.chainsafe.io/), an end-to-end encrypted file storage app.

## Storing Large-Scale Data

These tools also provide simple, developer-friendly interfaces for storing and retrieving data across IPFS and Filecoin. They are optimized for large-scale storage and migration.

[**Estuary**](https://estuary.tech/)**:** A decentralized data storage service designed for high-performance, large scale data storage, built by the Application Research Group (ARG). Multiple, geo-redundant copies are stored on the IPFS-based Estuary node and Filecoin, and can be retrieved quickly using IPFS. Estuary adheres to the IPFS Pinning Services API Spec, and provides Filecoin storage deal details. Users seeking more control can also [run their own Estuary node](https://github.com/application-research/estuary#running-your-own-node).

[**Rclone**](https://github.com/application-research/rclone)**:** This fork of the popular CLI tool is able to sync files and directories to [Estuary](http://estuary.tech/) (and thus Filecoin) from different cloud storage providers including AWS, Dropbox, Google Drive, and others.

## Additional Tools for Building with Filecoin

These tools offer more detailed control of Filecoin deals and data, but still offer abstractions for key aspects.

[**Powergate**](https://docs.filecoin.io/build/powergate/#how-to-use-powergate): Powergate is built by [Textile](https://linktr.ee/textileio) for developers who want an easier interface and better performance from Filecoin, but prefer to manage their own nodes. It exposes higher-level APIs for developers that simplify interaction with IPFS and Filecoin nodes, and offers advanced storage configuration options like replication factor, deal renewals, and Storage Provider selector.

**Bridges**: Also built by Textile, this project is being developed as a permissionless bridge between Filecoin and important Layer 1 and Layer 2 networks such as Ethereum, NEAR, and Polygon. This will allow the network’s technology and native token to be on Filecoin.

[**Filclient**](https://github.com/application-research/filclient)**:** A minimal library for interacting with the Filecoin Network built by ARG. It abstracts key processes in storage and retrieval deals such as querying prices, constructing and signing proposals, and getting data.

[**Autoretrieve**](https://github.com/application-research/autoretrieve)**:** A CLI tool for providing Filecoin data to Bitswap clients. Built by ARG, it uses retrieval information from Estuary or indexers.

If you’ve already taken the first steps in developing an application on Filecoin, IPFS, or Libp2p, be sure to check out [Next Step Microgrants](https://github.com/filecoin-project/devgrants/blob/master/Program%20Resources/Microgrants%20README.md). It’s a good way to take it a step further. More ambitious projects that make significant contributions to the ecosystem can also find support in the [Open Grants](https://github.com/filecoin-project/devgrants/tree/master?tab=readme-ov-file#open-grant) program.
