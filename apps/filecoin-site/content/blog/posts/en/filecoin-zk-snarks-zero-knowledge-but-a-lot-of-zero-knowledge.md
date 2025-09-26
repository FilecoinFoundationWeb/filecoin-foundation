---
aliases: []
author: ""
categories:
  - updates
date: "2021-07-13T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  CryptoComputeLab created a beautiful zk-SNARKs for the world minisite,
  showcasing that Filecoin is the largest deployed zk-SNARK network to date and
  highlighting the key improvements that allowed a deployment of this scale.
image:
  alt: ""
  url: /uploads/fil-blog-2021-07-13-snarks-website-3.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-07-13-snarks-website-3.webp
title: "Filecoin zk-SNARKs: Zero Knowledge — but a Lot of Zero Knowledge"
_template: blog_detail
---

For the past two years, CryptoComputeLab and CryptoNetLab (two of the Protocol Labs Research Development labs) have been working on bringing zk-SNARKs to the world and to the Filecoin Network. While this journey is far from over, here’s a peek at where they are today.

The [zk-SNARKs for the world](https://research.protocol.ai/sites/snarks/) minisite showcases that Filecoin is the largest deployed zk-SNARK network to date while highlighting some of the key improvements that allowed Filecoin to scale to this level.

zk-SNARKs are a cryptographic technique that allows a prover to efficiently convince verifiers that the prover knows some piece of information without revealing the information itself. This property enables secure and private interaction in a blockchain setting. The main property relied on in Filecoin today, is their efficiency, as the zk-SNARKs allow us to prove the validity of storage in much less space than otherwise possible.

Filecoin avoids wasteful proof of work by allowing miners to win block rewards by provably storing client data, although this requires an enormous volume of proofs. We need both Proof of Replication, to ensure miners store unique copies of claimed data — and Proof of SpaceTime, to ensure they maintain accessible copies of the replicated data continuously over time.

When the community set out to build Filecoin, there was no precedent for the volume of proofs that would be required to secure a network as large as originally envisioned. Thus over the course of development leading up to the network launch, we successively cleared hurdle after hurdle to make the use of zk-SNARKs practical; and since launch the labs have continued to bring new research to bear to improve performance further so that today's Filecoin proofs occupy the intersection of cutting-edge research and boundary-pushing engineering.

For more details and to learn more about how our SNARKs stack up, please check out [the website](https://research.protocol.ai/sites/snarks/) and enjoy!
