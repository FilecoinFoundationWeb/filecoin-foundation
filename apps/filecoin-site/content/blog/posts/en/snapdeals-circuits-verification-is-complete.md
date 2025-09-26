---
aliases: []
author: ""
categories:
  - updates
date: "2022-02-23T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Proper steps were taken to guarantee that their outputs are verifiable and
  trustworthy.
image:
  alt: ""
  url: /uploads/fil-blog-2022-02-23.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2022-02-23.webp
title: SnapDeals Circuits Verification is Complete
_template: blog_detail
---

In January, the Filecoin community [completed](https://filecoin.io/blog/posts/trusted-setup-complete-for-network-v15-upgrade/) the trusted setup ceremony that enabled an important upgrade in the network. We generated secure parameters for four new circuits to be used on mainnet. As many of you know, these new circuits were built to enable [SnapDeals](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s) in the Filecoin Network.

We’re happy to announce that the SnapDeals circuits verification process is now complete. Their outputs can be trusted if the transcript is entirely verifiable, and you would need to trust that **_at least_** one of the participants did not leak their contributed randomness in any way.

For the entire trusted setup ceremony, we managed to gather a diverse group of participants: major contributors from within the Filecoin ecosystem, miners with competing interests, as well as individuals and teams from other parts of the Web3 community. Another key factor was that participants were spread all over the world.

In doing all of this, we aimed to reduce the risk of collusion and increase the probability that at least one contributor per circuit would be deemed as sufficiently trustworthy. This would guarantee the integrity of the output parameters.

To verify that the parameters for our SnapDeals circuits are the same as the output from our participants you can follow the instructions on [GitHub](https://github.com/filecoin-project/phase2-attestations/tree/9cb8bece7611b09ec016c2d3a607e4317e45af54/934fe8c#phase-2-validation).
