---
aliases:
  - /blog/announcing-the-snark-challenge/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-05-17T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We are excited to announce that Protocol Labs and Filecoin are sponsoring the
  SNARK Challenge, an open challenge to speed up zk-SNARK provers. The SNARK
  challenge is co-hosted by Coinlist, Coda, and Dekrypt Capital, and
  co-sponsored by Tezos and the Zcash Foundation.
image:
  alt: SNARK Challenge
  url: /uploads/snark-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-zk-snarks-zero-knowledge-but-a-lot-of-zero-knowledge.en.md
related_article_2: content/blog/posts/zero-knowledge-and-the-filecoin-network.en.md
related_article_3: content/blog/posts/participate-in-our-trusted-setup-ceremony.en.md
share_image: /uploads/snark-english-social.webp
title: Announcing the SNARK Challenge
_template: blog_detail
---

We are excited to announce that Protocol Labs and Filecoin are sponsoring the SNARK Challenge, an open challenge to speed up zk-SNARK provers. The SNARK challenge is co-hosted by [Coinlist](https://coinlist.co/), [Coda](https://codaprotocol.com/), and [Dekrypt Capital](https://dekrypt.capital/), and co-sponsored by [Tezos](https://tezos.com/) and the [Zcash Foundation](https://www.zfnd.org/).

Zero-knowledge (zk) proofs are cryptographic primitives that allow one party (the prover) to prove to a counterparty (the verifier) that it knows certain pieces of information without having to reveal any bits of that information to the verifier. [zk-SNARKs](https://z.cash/technology/zksnarks/) are a type of zero-knowledge proof construction that have become popular in various blockchain applications, notably to enable private crypto transactions (e.g. shielded transactions on Zcash) and minimize bloat in block sizes, among other applications.

At Filecoin, we use zk-SNARKs in our on-chain Proofs-of-Replication and Proofs-of-SpaceTime. Many of our recent research efforts have focused on improving and optimizing SNARKs – using SNARK aggregation techniques, new vector commitment schemes to reduce the costs of Merkle trees in our SNARKs, and more.

We believe that research in this field is important not only for Filecoin, but also for many other critical applications. zk-SNARKS have tremendous potential to scale blockchains and provide privacy in on-chain transactions. The SNARK Challenge is intended to help us speed up the generation of zk-SNARK proofs and ultimately move this field of research forward.

## The Challenge

The challenge will be broken up into two events that together span 3 months. $100K in prizes will be awarded throughout the event. Each event will have specific challenges aimed at advanced cryptographers and those with experience in high-performance computing.

**Event 1: Initial Event**

- Runs from **May 20 to June 3**
- **$5K** in prizes
- 3 challenges focused on zk-SNARKs basics

**Event 2: Main Event**

- Runs from **June 3 to July 15**
- **$95K** in prizes
- Multiple challenges focused on speeding up the Groth16 SNARK Prover

And yes, there will be swag.

The SNARK Challenge was hosted on the Coinlist platform and has since concluded. We were excited to see what participants came up with!

Separately, but no less importantly, we are constantly looking for new minds to help us push our research work forward. Please reach out to [team@filecoin.io](mailto:team@filecoin.io) if you’re interested in working on SNARK research with us as a collaborator, researcher or developer.
