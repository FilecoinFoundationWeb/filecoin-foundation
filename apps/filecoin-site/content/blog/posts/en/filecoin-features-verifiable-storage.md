---
aliases:
  - /blog/filecoin-features-verifiable-storage/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-29T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  With Filecoin, miners’ storage is publicly audited. In other words, our
  storage proofs give every user of the Filecoin network assurance that all
  miners are storing data exactly as promised.
image:
  alt: "Filecoin Features: Verifiable Storage"
  url: /uploads/fc-discover-main-header.webp
main_feature: true
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fc-discover-update-main-header.webp
title: "Filecoin features: verifiable storage"
_template: blog_detail
---

_This is the second blog post in the series highlighting features unique to the Filecoin protocol. Catch up on the_ [_first post_](https://filecoin.io/blog/offline-data-transfer-for-large-scale-data/)_, which explores offline data transfer._

The Filecoin marketplace runs effectively because of the confidence clients can have that storage miners on the network are properly storing their data. This confidence comes from Filecoin’s own unique proof system for ensuring storage on the Filecoin network works as contracted.

With Filecoin, miners’ storage is publicly audited. In other words, our storage proofs give every user of the Filecoin network assurance that all miners are storing data exactly as promised. Storage verification is the glue that holds the Filecoin marketplace together; it ensures the integrity of all data stored on the network.

For these data integrity checks to provide storage users the assurance they desire, the checks must be a part of Filecoin’s most basic protocols. That’s where Filecoin’s proof system comes into play (we wrote another blog post about Filecoin proofs [here](https://filecoin.io/blog/filecoin-proof-system/)).

A proof system is a cryptographic protocol that participants – generally miners – use to validate the storage services. Filecoin’s proof system solves a previously intractable problem for decentralized storage: How can miners _prove_ that they are really storing the data they say they are through time and that they are dedicating unique physical space? To understand this, we need to take a look at how Filecoin implements decentralized storage and what makes its proof system unique.

## How Filecoin implements decentralized storage

In a centralized storage service, we place our trust in well-known companies or entities that guarantee the integrity and security of their systems. This third-party entity is key to maintaining confidence in the network. For example, when we use Amazon S3 for cloud storage, we aren’t really trusting the _network of data servers_ that Amazon employs. Rather, we trust _Amazon_ to guarantee that the network works as promised – that the data we store with Amazon will be secure and available according to the company’s service level agreements.

Trust in a decentralized storage network is harder to achieve. On the Filecoin network, anyone in the world can offer storage space. But to maintain trust on a decentralized network like Filecoin, you need a way to establish trust in the global network _itself_.

Filecoin’s proof system does just that by building trust into the protocol layer of the Filecoin blockchain. The Filecoin protocol utilizes storage proofs as a core mechanism for achieving consensus in the Filecoin blockchain.

On every public blockchain, “consensus” defines agreement about data entries that live on the blockchain. To achieve this consensus, blockchains rely on consensus algorithms to generate new blocks and secure the blockchain from fraudulent data entries. These algorithms establish precisely how miners contribute to building and maintaining the blockchain.

But while other blockchains rely on consensus algorithms that require miners to perform wasteful work (e.g. _Proof-of-Work_ blockchains), Filecoin’s consensus mechanisms enlist miners in the useful work of providing and verifying the integrity of the stored data (various proofs of storage, i.e. _Proof-of-Replication_ and _Proof-of-Spacetime_).

That means the Filecoin blockchain itself verifies the acts of storage performed by miners. This is how Filecoin builds trust into the protocol layer of its decentralized network. At its core, Filecoin’s consensus algorithm is powered by two proof mechanisms that together make data storage publicly verifiable on the Filecoin blockchain: _Proof-of-Replication_ and _Proof-of-Spacetime_.

## Proof-of-Replication and Proof-of-Spacetime

To verify storage on Filecoin’s decentralized network, you need to prove two things. First, you need to prove that the right set of data is stored in a given storage space. Second, you need to prove that the same set of data has been stored continuously over a given period of time.

Filecoin’s proving algorithms perform these verification tasks. _Proof-of-Replication_ proves that a given miner is storing a physically unique copy of a client’s original data, while _Proof-of-Spacetime_ proves that the client’s data is stored continuously over time. Here’s how both proofs work.

_Proof-of-Replication_ (PoRep) begins with a process called “sealing.” A miner dedicates a portion of available storage space, called a “sector,” to store a client’s data. Once this sector is filled, it is sealed. Sealing is a set of operations that gradually transforms the sector into a unique replica of the original data. This replica is associated with the Filecoin miner’s public key. To perform the final PoRep, the miner then submits a cryptographic hash of the replica (its CommR) to the public Filecoin blockchain.

Through PoRep, miners provide public proof that they are storing a unique encoding of a client’s data at the time the proof was performed. Only a miner possessing the original data in its entirety could submit the correct CommR (the on-chain commitment to the replica) to the Filecoin blockchain. But one PoRep alone doesn’t verify that storage is continuous over time.

That’s where _Proofs-of-Spacetime_ (PoSt) comes in. With PoSt, randomly selected miners are asked to provide PoReps for randomly selected storage sectors that they maintain. This is accomplished via a procedure in which miners are issued a cryptographic challenge that can only be correctly answered by consulting a sealed sector directly. The miner must respond to this challenge within strict time limits. Every miner must prove all of their storage daily, and miners are also randomly selected to prove storage in order to win blocks. And the computational difficulty of sealing ensures that miners must maintain ready access to and integrity of the sealed sector.

Taken together, PoRep and PoSt make up Filecoin’s unique proof system, a combination of Proof of Storage and Proof of Space.

In addition to its proof system, the Filecoin network also relies on game-theoretic incentives to discourage malicious or negligent activity. All miners that agree to store data on the Filecoin network must provide collateral in the form of Filecoin at the time of agreement. Any storage miner that fails a PoSt check is penalized, and portions of this collateral are lost whenever a penalty is applied. After too many penalties, all the collateral is lost, and a miner is prevented from offering storage again to clients. You can read more about some of these cryptoeconomic mechanisms [here](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/).

## Conclusion

Designed with novel cryptography, consensus protocols, and game-theoretic incentives, the Filecoin protocol provides a decentralized storage network and marketplace that clients and miners can use with confidence. At the heart of it all is Filecoin’s unique approach to storage verification. You can read more about verifying storage on Filecoin in our latest [ProtoSchool tutorial](https://proto.school/#/verifying-storage-on-filecoin).
