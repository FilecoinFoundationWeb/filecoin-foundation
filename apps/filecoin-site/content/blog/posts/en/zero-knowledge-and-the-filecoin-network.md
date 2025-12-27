---
aliases: []
author: ""
categories:
  - updates
date: "2021-07-29T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  An overview of how the worlds of zk-SNARKs and decentralized storage come
  together on the Filecoin network.
image:
  alt: ""
  url: /uploads/fil-blog-2021-07-29-snarks.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-zk-snarks-zero-knowledge-but-a-lot-of-zero-knowledge.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-07-29-snarks.webp
title: Zero Knowledge and the Filecoin Network
_template: blog_detail
---

Recently, the Protocol Labs Research team published the [zk-SNARKs for the World site](https://research.protocol.ai/sites/snarks/). The site is a look at the work that has been done on implementing zero knowledge cryptography on the Filecoin network. The effort, which has been underway for three years, has resulted in Filecoin as the largest deployed zk-SNARK network to date, generating 6-7 million zk proofs per day. (Catching up with zero knowledge and Filecoin’s storage verification process? Check out the [‘Verifying Storage on Filecoin’ tutorial](https://proto.school/verifying-storage-on-filecoin) from Protoschool).

## The Value of zk-SNARKs to the Filecoin Network

In order for a storage provider on the Filecoin network to continue to provide service to clients (and earn block rewards in the process), they must regularly prove they are continuing to store the data on-chain they have promised to. Framing them in the relationship of a zero knowledge proof, these storage providers become the _provers._

On the other side of the equation are the full nodes, those who are responsible for maintaining the consensus of the entire Filecoin network. These nodes want to ensure data is being stored, maintained, and secured without being neglected or corrupted. These parties — the _verifiers_ — must be satisfied with the proof the storage providers give that data is being stored. This requires a form of communication between storage providers and nodes whenever data changes hands.

For every block, this process is (or rather, _would be_) resource-heavy. The amount of data that an individual storage provider has to prove today in order to verify their storage is enormous, and will only grow with time. The Filecoin network has a block time of 30 seconds. In order to maintain that blocktime and enable a scalable method, the network needs a solution that allows for quick, efficient, and robust verification.

Enter zk-SNARKs.

For the _Filecoin network_, zk-SNARKs improve network-wide scalability and efficiency by significantly reducing the amount of time needed for parties to verify storage, critical to sustaining Filecoin’s 30 second block time.

For _storage providers_, zk-SNARKs reduce the amount of data they need to transfer for them to prove their storage, reducing the costs associated with operating their services to the network.

## zk-SNARKs in Action

For storage to be verified on Filecoin, two proofs are involved: _Proof of Replication (PoRep)_ and _Proof of Spacetime (PoSt)._ In PoRep, a storage provider proves that they are storing a unique copy of a piece of data or information. PoRep happens just once, when the initial storage deal between client and provider happens and the data is first stored by the miner. Each PoRep that goes on-chain includes 10 individual SNARKs, which together prove that the process was done correctly through probabilistic challenges.

PoSt, on the other hand, serves to prove that the storage provider _continues_ to store the original data over time without manipulation or corruption. When a storage provider first agrees to store data for a client, they must put down collateral in the form of FIL. If at any point during the agreement, the provider fails to prove PoSt, they are penalized and can lose all or some of their posted FIL collateral.

The result of an on-chain interaction in which the _prover_ and _verifier_ agree that data has been stored and maintained in an appropriate manner is a _proof._ As mentioned above, without a solution to make these proofs small and efficient, they would take up a tremendous amount of the network’s bandwidth and deliver high operational costs to both storage providers and miners. By using zk-SNARKs to generate the proofs, however, the resulting proofs are small and the verification process is extremely fast (and thus, cheap). For example, proofs that typically would require hundreds of kilobytes to verify can instead be compressed to just 192 bytes with zk-SNARKs. As mentioned above, each PoRep includes 10 SNARKs, meaning 1920 bytes in each (10\*192 bytes).

## The Past (and Future) of zk on Filecoin

The Filecoin network’s use of zk-SNARKs has been live on mainnet since the launch in October.

The story goes like this: zero knowledge has long been part of the Filecoin network, and it will continue to prove vital to the evolution of the network in the future. As more and more data is stored, maintained, and accessed on Filecoin, the ecosystem needs to continue delivering efficient, cost-effective, and secure solutions to verifying. Zero knowledge is a game-changer for the Filecoin network, reducing complex verification processes to fractions of their original size without compromising security, trust, or confidence.

The Protocol Labs Research team has long been working on zero knowledge for the Filecoin network. Their work has resulted in a critical efficiency solution for the network, and as new proving systems emerge the team will continue implementing the most effective solutions for the future of the Filecoin network.

Visit the [zk-SNARKs for the World](https://research.protocol.ai/sites/snarks/) site and dive deeper into zero knowledge on Filecoin.
