---
aliases: []
author: ""
categories:
  - updates
date: "2021-09-10T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Breaking down the different reasons to use Estuary vs. Web3.storage vs.
  NFT.storage
image:
  alt: "Decentralized Storage: Estuary, Web3.storage, and NFT.storage"
  url: /uploads/decentralized-storage.webp
main_feature_inverted: false
related_article_1: content/blog/posts/taking-a-look-at-estuary.en.md
related_article_2: content/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts.en.md
related_article_3: content/blog/posts/introducing-web3-storage.en.md
share_image: /uploads/decentralized-storage.webp
title: "Decentralized Storage: Estuary, Web3.storage, and NFT.storage"
_template: blog_detail
---

## Filecoin and IPFS

Filecoin is a decentralized storage backup, but where does the data stored on the Filecoin blockchain come from? Data is first added to an IPFS node, allowing for negotiation with storage providers to store the information on Filecoin.

IPFS is a distributed system for storing and accessing files, data, and applications. If you're aware of how file systems usually work, they access data based on the organization of that data. While a FAT file system uses an allocation table to look up data, and an NTFS file system uses hard links and data streams, IPFS uses content IDs (CIDs). When a developer needs to access an application or data stored on the IPFS network, they need to have a copy of that CID.

However, since IPFS isn't natively supported in browsers, an intermediary is the only way to get to this data. IPFS gateways provide that functionality to developers and users. Anyone with a CID can access data stored on the IPFS network. CIDs allow for resiliency in that data.

If, for example, a node goes down for whatever reason, the information is available on other nodes as a backup. The IPFS gateway can simply load the data from another backup node, using the CID to gain access to it.

One can think of Filecoin as a rental system where a developer or user rents long-term file storage from the Filecoin blockchain and pay to store their data. The blockchain is simply the mechanism by which the deals are brokered and secured. Storage providers honor those deals by providing their own storage for use by those developers and users to keep their IPFS data on the chain so that it remains available over the long term.

Understanding how Filecoin and IPFS work together, we can begin to appreciate gateway systems like [**Estuary**](http://estuary.tech)**,** [**Web3.storage**](http://web3.storage)**,** and [**NFT.storage**](http://nft.storage)**.**

## Why Three Different Storage Systems?

Effectively, these three gateways do similar things. They act as intermediaries to accept data to store onto the IPFS system, allow for the collection of CIDs, and provide a way for users to create contracts to store their data on the Filecoin chain.

If they perform the same functions, why do we need three versions of the same thing? Each solution is designed for a particular purpose and a particular audience. To truly get a feel for what each of them does, we need to look at them in detail.

### Estuary

[Estuary](http://estuary.tech) is a way for developers to automate their storage onto the IPFS network and the Filecoin network. It's a simple IPFS node that integrates a Filecoin library inside it to allow for easier access to the functions necessary to interact with IPFS and the Filecoin blockchain. Estuary is focused on making large volumes of storage deals to the Filecoin network, while supporting a developer experience that IPFS developers know.

Estuary is designed for clients who have large data storage needs, the feature set currently supports to making up to six hundred deals per hour and each Estuary node has a storage capacity that pushes the ceiling of what exists in the ecosystem

You can potentially go through the trouble of accessing the IPFS node, negotiating the storage, and then doing the same with the storage providers to manually store it on the Filecoin blockchain. However, doing so can be tedious, especially if you have many files to store. Estuary gives a straightforward way to store your files and negotiate your contracts as a developer, making creating things that much simpler.

The front end of Estuary allows a user to login and upload a file to IPFS with a few clicks. Estuary will contact storage providers and negotiate verified deals with six of them. You have the option of checking the deals for your information directly on Estuary. If the data size is below 3.57 GiB, your data will be held temporarily on a staging area, and the negotiation for a deal will process in a few hours to add the data (along with other packets) to the network as a block.

As soon as the deal is created, you get a link to the CID. You can use this CID in your app or website to retrieve your data from any public IPFS gateway, since your data is now accessible from a globally distributed network. Even if your data is not backed up to Filecoin yet and is still staged on Estuary, you can still retrieve the CID from any IPFS gateway, allowing you to develop seamlessly without worrying about whether data has been added to the Filecoin ecosystem.

Estuary uses the IPFS pinning standard so it is easy to switch from other existing solutions. Estuary is perfect for anyone writing software that requires shuttling large amounts of files of any size. Estuary doesn't require a specific programming language and can be used in a way that feels the most natural to you. Because of its intuitive nature, rollout of apps and websites can be uncomplicated.

[Explore Estuary](https://estuary.tech/) or [read more](https://filecoin.io/blog/posts/taking-a-look-at-estuary/) about it.

### Web3.storage

[Web3.storage](http://web3.storage) is another iteration of the gateways used to interact with the IPFS network and Filecoin blockchain. Similar to Estuary, this service offers a way to store data on the IPFS system. It provides users a chance to access the IPFS network, store data, and retrieve that data for free.

While integrating IPFS and Estuary requires a bit of preparation, Web3.storage offers users a chance to jump right into app development using the storage from the IPFS network and Filecoin without delving into integrations.

Just like Estuary, you will need an API key to access the system, but that's a simple matter of opening a free account and uploading a file. Once you have that file, you can use the API key to access it through curl or directly through the browser.

To make it easier to build a web app, there's a direct JavaScript interface to use IPFS from within your code with just a few lines. The script to build an IPFS node needs the API key to work, but it can be copy-pasted from the documentation on the site.

You can access files directly through their CID and start streamlining your JavaScript app to use data stored on the IPFS network. The simplicity of use makes this an ideal storage solution for developers building JavaScript-based applications who want to use Web3.storage to upload and retrieve their files directly.

[Use web3.storage](http://web3.storage) or [read more](https://filecoin.io/blog/posts/introducing-web3-storage/) about it.

### NFT.storage

Though non-fungible tokens (NFTs) have become some of the hottest properties on the internet today, storing NFTs online still takes a bit of work for many users. [NFT.storage](http://nft.storage) is a specialized interface for storing NFTs on the IPFS network that automatically duplicates to the Filecoin blockchain.

What makes NFT.storage uniquely different from the previously mentioned gateways is that it preserves the metadata essential in the buying and selling of NFTs. Since NFTs are the artworks or collectible cards of the blockchain environment, that metadata is crucial in determining who owns these digital assets and where they've been beforehand. NFTs require long-term survivability, and a decentralized storage system like IPFS offers that for free.

NFT.storage uses many of the same details for storage as Estuary and Web3.storage. It provides CIDs to uploaded data and allows users to check the status of their storage deals on the Filecoin blockchain. Any NFT stored via NFT.storage can be accessed through any IPFS gateway through its content ID. The easy integration of APIs and quick integration with development environments make NFT.storage ideal for NFT creators to get their work uploaded onto a blockchain quickly and easily.

Several prominent NFT marketplaces already power their networks with IPFS and Filecoin. Two of the more well-known names in this space, [Palm](https://palm.io/) and VideoCoin, use IFPS to store and retrieve content. However, NFT.storage offers users a way to interact with the network without going through an intermediary. It empowers NFT creators and affords them the resiliency of storage they'd expect from a robust decentralized storage network like IPFS.

[Explore nft.storage](http://nft.storage) or [read more](https://filecoin.io/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts/) about it.

## What Should I Be Using?

![Estuary vs. Web3.storage vs. NFT.storage](/uploads/nftstorage-web3storage-estuary-comparison.webp)

That depends — what are you building? As a web developer rooted in JavaScript, you may find [Web3.storage](http://web3.storage) easier to use and more suited to your development needs. Suppose you're developing decentralized applications and want more of a handle on how your data is stored. In that case, [Estuary](http://estuary.tech) gives you that power, though with potentially more complexity on the back end. If you're an NFT creator that wants more control over uploaded creations, then [NFT.storage](https://docs.google.com/document/d/1T8LCur4nqDHRrW-4RScV9TNyCDkl2efVBSlctpmLKOk/edit#heading=h.g7e5xa6zn616) is probably what you're looking for. These three tools perform many of the same actions, but each is suited for particular use cases. Whichever you decide, dive in and have fun!
