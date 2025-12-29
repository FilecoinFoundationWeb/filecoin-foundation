---
aliases: []
author: ""
categories:
  - updates
date: "2023-01-26T06:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In this post we take a look at how a decentralized approach to cloud storage
  is setting a new standard for the industry.
image:
  alt: ""
  url: /uploads/cloudstorageservices.webp
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/filecoin-2022-review-enabling-the-world-s-largest-decentralized-open-data-economy.en.md
related_article_2: >-
  content/blog/posts/case-study-why-nftstar-trusts-decentralized-cloud-storage-for-sports-collectibles.en.md
related_article_3: >-
  content/blog/posts/telnyx-builds-innovative-low-cost-object-storage-on-the-filecoin-network.en.md
share_image: /uploads/cloudstorageservices.webp
title: "Cloud Storage Services: Understanding the Decentralized Storage Approach"
_template: blog_detail
---

_In this post we take a look at how a decentralized approach to cloud storage is setting a new standard for the industry. We examine why decentralized cloud storage is needed, how it works, and its defining characteristics._

To understand decentralized cloud storage it’s necessary to ask “what is cloud storage?” Cloud storage is one of the most popular and widely used methods of storing data. It offers users a way to store, share, and access their files from any place in the world.

As cloud storage technology has evolved with the advent of higher internet speeds, cheaper storage hardware, and better infrastructure, so too have the types of cloud storage services. Over time, they have advanced to include decentralized cloud storage solutions that are powered by blockchain technology.

Decentralized cloud storage is quickly becoming a go-to solution. This is especially true for those looking to protect their data from censorship, single points of failure, potential hackers or malicious actors, or even expensive cloud storage service costs.

By understanding how a decentralized cloud storage service operates and what advantages it offers over its centralized counterparts, developers can leverage these tools to create a more secure, reliable, and user-friendly online experience.

## What is Decentralized Cloud Storage

{{< youtube id="by9koo-A3CU" title="The Decentralized Cloud is Here with Olaf Carlson-Wee" >}}

In simple terms, decentralized cloud storage is a process of storing data across multiple computers or a distributed network. This presents a meaningful alternative to most cloud storage services such as AWS or Google Cloud who store all the data that is entrusted to them into proprietary siloed servers.

The traditional way of storing files in a cloud storage service is to have these servers placed in certain locations that act as hubs or data centers. When users choose to store their files with these types of cloud storage service providers, they rely on a system that finds them according to their geographic location and pay the service provider for the amount of time these are stored.

Since decentralized cloud storage relies on a whole network of computers to store users’ files, this model is replaced by a different one where location becomes irrelevant. Likewise, the cost of cloud storage is handled in a more competitive way.

On a decentralized peer-to-peer cloud storage network files are distributed across independent Storage Providers instead and located by their contents. These Storage Providers are incentivized to maintain copies of their files via a cryptoeconomic market.

Choosing this model over other cloud storage options combines the capabilities of both cloud computing and decentralized technologies to create a secure and reliable online file sharing system. This is an essential step towards building the infrastructure for a more decentralized web.

## Why Is Decentralized Cloud Storage Necessary

{{< youtube id="cZjX1ck_FbI" title="ESPA - Why Public Datasets are Stored on Filecoin" >}}

Since centralized cloud storage is still the norm for most organizations and web services, their disadvantages are still behind many problems in user experience and overall security. Some of these include:

### Censorship

Since a centralized server-based model for cloud storage is usually built by private companies, often these services are subject to pressure from institutions that can lead to censorship in certain jurisdictions.

### Cloud Storage Costs

The competitive landscape of cloud storage costs has created a situation where there are barriers-to-entry for new and independent storage providers. This creates market conditions where incumbents have monopoly privileges that lead to unfair pricing for users of cloud storage services.

### Lack of ownership

While data that is stored with centralized cloud service providers is usually retrievable at will by the customer, these services present certain difficulties when it comes to the transportability of these datasets. Factors such as vendor lock-ins, company-controlled encryption, and other corporate policies often blur the line for users’ ownership over their data.

### Data breaches

Having all the data stored in a handful of data centers means that, in the event of a malicious attack like a data breach, this data can suffer from a “all the eggs in one basket” problem. Hackers often see these servers as “honeypots” that can leak great amounts of data.

### Data outages

Other hacks, such as DDoS attacks, are also a common problem for traditional cloud storage services where a single vulnerability can lead to millions of users being unable to access their data for extended periods of time.

## How Does Decentralized Cloud Storage Work

{{< youtube id="tE4q_Vc8OjY" title="How Filecoin Works: Part 1" >}}

Decentralized cloud storage works by utilizing peer-to-peer (P2P) technology which places the responsibility of data storage and retrieval on individual network participants’ computers. Data is broken into fragments that are redundantly stored across multiple nodes participating in the network.

Furthermore, files are encrypted using cryptographic hashing mechanisms. This guarantees that only those who know the content address of the file can access the information.

To protect against malicious actors, decentralized cloud storage systems typically use what is known as Proof-of-Storage consensus algorithms. More details about this algorithm can be found in Filecoin’s [specifications](https://spec.filecoin.io/algorithms/pos/).

This type of algorithm selects Storage Providers, who act as the network’s miners, based on how much data they contribute to the network. It then utilizes a random verification system to check if Storage Providers are indeed holding the data or not.

In comparison to cloud storage services, decentralized cloud storage provides users with more control over their data and ensures only they are able to access the data. Decentralized cloud storage systems can also provide higher bandwidth speeds due to utilizing participants’ local networks for file transfers.

More so, they make it much harder for cyber attackers to target specific files as there is no central point of failure. This is due to the distributed nature of the system.

## IPFS as a P2P File System for Cloud Storage

The foundation for decentralized cloud storage was laid by the InterPlanetary File System (IPFS). The project was able to successfully introduce a decentralized cloud storage system that combined peer to peer technology like BitTorrent swarms with cryptographic principles as a way for users to share files across a distributed network without data centers or an intermediary.

As described in the [IPFS whitepaper](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf): “IPFS is a peer to peer distributed file system that seeks to connect all computing devices with the same system of files. In some ways, IPFS is similar to the Web, but IPFS could be seen as a single BitTorrent swarm, exchanging objects within one Git repository. In other words, IPFS provides a high throughput content-addressed block storage model, with content-addressed hyperlinks.”

This last sentence is important. It’s necessary to understand content-addressing for cloud storage in order to understand IPFS.

_(For a more detailed explanation of how IPFS works, be sure to visit the [documentation](https://docs.ipfs.tech/concepts/how-ipfs-works/#content-addressing))._

### Content Addressing

Until IPFS, most of the content that was shared online followed the rules of a particular protocol called HTTP. That is why every time a user looks to access a website or any kind of content, it is usually done by typing “http://” first, followed by the address.

The problem is that HTTP is a location-based protocol. It satisfies the request by searching for the server where the content is stored according to its geographical location. Although this has worked well so far, a faster and more secure alternative is possible.

When using content addressing instead of a location-based protocol, files are identified based on a Content Identifier, or [CID](https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid), that is their cryptographic hash values instead of the traditional filename. This method of file identification allows for more efficient storage and retrieval of data as users can reference files without relying on a single physical storage location.

Content addressing provides a number of benefits in terms of security, reliability, and scalability due to its decentralized nature. By referencing files solely via their cryptographic hashes, attackers cannot easily target specific files as there is no central point of failure. This also helps avoid duplication which could lead to inconsistencies within the data set and potential security issues.

## Filecoin and Incentivization for Decentralized Cloud Storage

However, as [explained](https://docs.filecoin.io/developers/introduction/filecoin-and-ipfs/) in the Filecoin documentation, this isn’t enough for a decentralized cloud storage service:

_IPFS alone does not include a built-in mechanism to incentivize the storage of data for other people. This is the challenge Filecoin aims to solve. Filecoin is built on IPFS to create a distributed storage marketplace for long-term storage. Nodes with a large storage capacity can rent their storage to users and get paid for it._

_The Filecoin network ensures that data is safely stored. However, the processes of storing, verifying, and unsealing (referred to as sealing, proving, and retrieving, respectively) are computationally expensive and can take time. This is especially relevant for the retrieval of data, which should happen as fast as possible. For this reason, Filecoin enables an additional retrieval market where dedicated nodes can help quickly deliver content from the network for payment by keeping unsealed, cached copies._

## The Storage and Retrieval Markets for Cloud Storage

{{< youtube id="MbLyVt2rISQ" title="Filecoin Economy Deep Dive - ZX Zhang" >}}

In a nutshell, Filecoin takes the innovations of IPFS a step further by introducing a blockchain network and an incentive system that rewards independent Storage Providers for providing [Storage Power](https://filecoin.io/blog/posts/a-guide-to-filecoin-storage-mining/) and storage capacity to the network as well as retrieving files. These are known as the network’s Storage Market and Retrieval Market, respectively.

### Storage Market

An essential part of the Filecoin economy is the fact that Storage Providers participate in a marketplace where they offer their storage space to clients directly. The network matches these Storage Providers with clients who choose them according to the information they provide about their price, location, and storage time periods.

After a storage deal is made, the client proceeds to transfer their data to the Storage Provider. The network then ensures that Storage Providers meet the deal’s conditions by requiring them to lock up collateral in FIL. This collateral will be “slashed” if the Storage Provider is not able to provide cryptographic proof of its integral and timely storage of the client’s data for the agreed period of time.

Storage Providers are incentivized via storage deals in two ways: they receive FIL payments from clients for successful storage of data and they participate in the opportunity to earn block rewards according to the amount of Storage Power and storage capacity they contribute to the network.

### Retrieval Market

Another way Storage Providers are able to earn FIL is through the retrieval of information they’ve stored. They are able to offer users with data they’ve requested in exchange for small amounts of FIL. The most timely of these are usually favored, adding an extra incentive for nodes in strategic locations to participate in the network.

## Advantages of Filecoin’s Approach to Cloud Storage

This decentralized model makes it possible for anyone with access to the internet to participate in a global decentralized cloud storage market. At the same time, the protocol is able to provide clients with stronger guarantees of file integrity and availability than traditional cloud storage providers.

Filecoin's Proof of Storage algorithm ensures that Storage Providers, the network’s miners, possess complete copies of client data. This provides clients with an even higher level of security than what is offered by most cloud storage providers since Storage Providers are penalized when storage deals are not honored.

Altogether, this means that Filecoin is able to provide [data persistence](https://filecoin.io/blog/posts/ipfs-filecoin-and-content-persistence/).

_(Read through these resources for a more in-depth look at the economics of_ [_Filecoin_](https://filecoin.io/blog/posts/filecoin-network-economics/) _and_ [_Storage Providers_](https://filecoin.io/blog/posts/the-economics-of-storage-providers/)_.)_

### Data Persistence

The combination of content addressing via IPFS with cryptoeconomics of the Filecoin network allows developers to create applications that keep data safe for long-term storage while also allowing quick retrieval and distribution of content. Filecoin excels at storing large amounts of data over an extended period of time without the risk of link rot or even data outages.

As more applications adopt this approach, it will ensure that users have access to their critical data when they need it most. This is one of the reasons why decentralized cloud storage infrastructure can ultimately provide a better user experience.

## Filecoin and IPFS Together

[Together](https://docs.filecoin.io/developers/introduction/filecoin-and-ipfs/), IPFS and Filecoin provide users with a complete decentralized cloud storage service that allows them to securely store data in a distributed manner while also receiving financial rewards for providing this service.

By leveraging the power of both protocols, users can enjoy greater trust, reliability, and decentralization compared to traditional cloud storage services. IPFS helps ensure that the data stored by these miners remains accessible through content addressing, while Filecoin creates an open marketplace where anyone can bid on contracts for storing data long-term with data persistence.

## Characteristics of Decentralized Cloud Storage

The decentralized cloud storage approach is defined by these capabilities and counts on a set of characteristics that differentiate it from other cloud storage types. Mainly, these are:

### Censorship Resistance

Given that decentralized cloud storage on Filecoin makes use of content addressing as a base layer for how it stores information, the network is able to bypass many risks that exist for server-based cloud storage. A jurisdiction or a DDoS attack may be able to censor the data that is stored with one particular Storage Provider, but it cannot censor the data that is stored and distributed redundantly with other Storage Providers across the network.

### Speed

This same system of redundant distribution of data and content addressing also speeds up the retrieval process. When a user wishes to access the data that is stored on the network, this information is pulled from the multiple copies that are stored with nodes across the globe instead of a central server that might be affected by bottlenecks in internet traffic.

### Low Data Storage Costs

Decentralized storage options are always cheaper when compared to what other cloud storage services charge to store data. This is due to the fact that the Filecoin Storage and Retrieval markets are inherently competitive. On the Filecoin blockchain, clients have a diverse set of independent Storage Providers that are available for storage deals that fit their needs. The execution of these deals are always protected by the logic in the network itself without the risk of arbitrary decisions from centralized providers and their high cloud storage cost.

### Privacy and Security

Different from a centralized cloud storage service, the keys to the encrypted data that is stored on Filecoin are never held by or revealed to a third party. Thanks to a peer to peer nature and application of cryptography, Filecoin ensures that only the users who’ve chosen to store their data across the network are able to access and decrypt their information. This is very important for data backup and sensitive data.

### Data Integrity

Moreover, these same capabilities for the application of cryptographic principles mean that copies of clients’ data are always identical to the original. The system is based on the verification of hashes which detect even the most minimal differences between data. Filecoin ensures that the hashes of the data that is stored on the network always match an original version that was uploaded by the client to the was uploaded to the cloud storage space.

### Trustless

Another advantage of Filecoin’s distributed architecture is that it does not require any participant to trust any other participant in order to work properly. The network itself takes care of ensuring that storage deals are executed according to specified conditions and information is always readily available. This eliminates the counterparty risks that exist with the need of trusting a third-party for storage or even the lack of ownership over data that is implied by some company policies.

### Open Source

IPFS and Filecoin are built as open source solutions from the ground up. This is because their development has historically taken a community-based approach that produces more resilient and robust code. Decentralized cloud storage solutions are meant to be easily integrated into other technology stacks and composable with the rest of the growing decentralized web. More so, they’re meant to be auditable by any interested party, adding to the trustlessness characteristic of decentralized cloud storage.

### Programmability

Finally, Filecoin is introducing programmability and compute over data capabilities to its decentralized cloud storage network. This is a major improvement that will expand the network’s use cases beyond cloud storage and introduce decentralized alternatives to similar cloud computing capabilities provided by centralized incumbents. Learn more about these efforts on the Filecoin Virtual Machine (FVM) [website](https://fvm.filecoin.io/).

## Final Thoughts on Filecoin and Decentralized Cloud Storage

{{< youtube id="Lo79KFiEJoI" title="Riding the Megacurrents: How Digital Storage is Decentralizing" >}}

Going back to the original question of “what is cloud storage?” The answer will soon be described by a decentralized approach rather than the current HTTP server-based model for cloud storage that most internet users are familiar with.

Decentralized cloud storage is the next step in the evolution of cloud storage services. As the internet continues to evolve in the direction of decentralization, open source development, and protocol-based solutions, it’s not far-fetched to expect the same principles to apply to data storage infrastructure.

Understanding the decentralized cloud storage approach and how it can be applied to storing and retrieving data in both regular web applications and web3 applications will become essential to product development in the future.

Filecoin, in particular, responds to current needs in the data storage market for privacy, costs, and soon in programmability and computation over data. This is possible thanks to the network’s capacity to build upon IPFS’ content addressing and add data persistence through an incentivized network of Storage Providers and a Proof of Storage consensus algorithm.

## Stay in the Loop

To stay in the loop with the growth of Filecoin and a decentralized cloud storage approach join us on [Slack](https://filecoin.io/slack). You can also dive into all the different channels where the Filecoin community remains active by following any of [these links](https://linktr.ee/filecoinio) to your platform of choice.

Take the decentralized storage approach for your data. [Start onboarding](https://dataonboarding.filecoin.io/) today with cost-effective cloud storage that is reliable and secure.
