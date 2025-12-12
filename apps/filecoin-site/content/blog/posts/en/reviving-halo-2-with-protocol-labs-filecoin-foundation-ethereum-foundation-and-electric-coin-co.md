---
aliases: []
author: ""
categories:
  - updates
date: "2021-10-01T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The four ecosystems come together to explore the future of recursive zero
  knowledge proofs.
image:
  alt: >-
    Reviving Halo 2 with Protocol Labs, Filecoin Foundation, Ethereum
    Foundation, and Electric Coin Co.
  url: /uploads/halo2-header.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-zk-snarks-zero-knowledge-but-a-lot-of-zero-knowledge.en.md
related_article_2: content/blog/posts/zero-knowledge-and-the-filecoin-network.en.md
related_article_3: content/blog/posts/what-sets-us-apart-filecoin-s-proof-system.en.md
share_image: /uploads/halo2-header-1.webp
title: >-
  Reviving Halo 2 with Protocol Labs, Filecoin Foundation, Ethereum Foundation,
  and Electric Coin Co.
_template: blog_detail
---

Recently [Electric Coin Co.](https://electriccoin.co/ "Electric Coin Co.") (ECC) [announced](https://electriccoin.co/blog/ethereum-zcash-filecoin-collab/) that [Protocol Labs](https://protocol.ai "Protocol Labs"), the [Filecoin Foundation](https://fil.org/ "Filecoin Foundation"), the [Ethereum Foundation](https://ethereum.org/en/foundation/ "Ethereum Foundation"), and ECC would be collaborating to explore research and development of [Halo](https://electriccoin.co/blog/halo-recursive-proof-composition-without-a-trusted-setup/) — a solution to zero knowledge recursive proofs without requiring a trusted setup.

## Quick primer on zero knowledge, recursive proofs, and Halo

_Zero knowledge_ is a branch of cryptography focused on methods of verifying solutions (“answers”) without needing to see the underlying data.

Consider the example of needing to prove your age at a bar in New York. In zero knowledge transactions, there are two parties: the _prover_ and the _verifier._ The prover is the person or entity attempting to, well, prove something — in this case, the individual wanting to prove they are of legal age to drink. The verifier is the person or entity who must verify that information — i.e., the bartender.

In a zero knowledge transaction, the bartender would be able to prove that the patron is of legal age _without_ needing to know the patron's precise age, or even see their ID. They would simply be able to trust the situation without seeing the underlying data (the ID). To drive the point home, with no (_zero_) _knowledge,_ they can complete their transaction confidently.

Zero knowledge (zk) transactions result in zk-proofs, which can be referenced to prove that a transaction occurred. When zk is used within a distributed network like a blockchain, this means each block will have multiple zk proofs within.

Should a future transaction wish to verify information, a naive solution would be to verify each prior block separately. _Recursive proofs_ provide a workaround, allowing essentially “proofs of proofs” — in a sense, creating a connecting history of proofs, so only small numbers of proofs need to be verified.

Halo is ECC’s recursive proof research, initially presented in 2019 as a solution to setting up recursive proofs on blockchain networks without running a trusted setup (a complex and costly process). Halo 2 is the next iteration of recursive proof research.

## Halo 2 in Action: Filecoin

Perhaps not obvious to many, the Filecoin network is the largest deployed zero knowledge network in the world. [Zero knowledge is fundamental to the Filecoin network](https://filecoin.io/blog/posts/zero-knowledge-and-the-filecoin-network/), providing critical scalability solutions that have been in play since the network first launched on testnet.

The engagement between the ECC, the Filecion Foundation, the Ethereum Foundation, and Protocol Labs will partly focus on exploring the integration of Halo 2 into the existing Filecoin proof system.

Successful implementation of Halo 2’s recursive proof solution would mean significantly _less proof data_ stored on-chain, freeing up Filecoin’s network to store more of humanity’s most valuable information. This means greater network scalability and greater access to cheap, efficient, and user-friendly storage solutions.

[Learn more](https://electriccoin.co/blog/ethereum-zcash-filecoin-collab/) about the Protocol Labs x ECC x EF x Filecoin Foundation collaboration.
