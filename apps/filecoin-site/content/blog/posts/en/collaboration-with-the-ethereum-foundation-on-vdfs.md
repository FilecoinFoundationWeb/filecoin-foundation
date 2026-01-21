---
aliases:
  - /blog/collaboration-on-vdfs/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-04-19T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Today, Protocol Labs is announcing a research collaboration with the Ethereum
  Foundation to design and develop at least one secure, efficient, and usable
  Verifiable Delay Function (VDF) construction.
image:
  alt: Collaboration with the Ethereum Foundation on VDFs
  url: /uploads/ethereum-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: content/blog/posts/building-web3-filecoin-ethereum-better-together.en.md
related_article_2: content/blog/posts/bridging-the-filecoin-and-ethereum-communities.en.md
related_article_3: content/blog/posts/filecoin-news-18.en.md
share_image: /uploads/ethereum-english-social.webp
title: Collaboration with the Ethereum Foundation on VDFs
_template: blog_detail
---

Today, Protocol Labs is announcing a research collaboration with the Ethereum Foundation to design and develop at least one secure, efficient, and usable Verifiable Delay Function (VDF) construction.

VDFs are a recent addition to the set of cryptographic primitives – the first proposed constructions were published in June 2018. At a high level, a VDF is a function that takes at least some amount of time, the “delay,” to **generate** an output (even if you throw a bunch of processors at it), but whose output can be **verified** quickly and easily. For those who are interested in diving deeper, [a succinct written explanation](https://reading.supply/@whyrusleeping/a-vdf-explainer-5S6Ect) and [a video describing VDFs and some candidate constructions](https://www.youtube.com/watch?v=dN-1q8c50q0&list=PLaM7G4Llrb7y075mVXGmSABDP9Nb_PsBq) are available.

Despite being relatively new, VDFs have already started to show up widely in blockchain research. They have been used in proofs of replication, leader election in consensus protocols, and randomness beacons, among other applications. Perhaps more importantly, the design and development of a secure and usable VDF construction would be a major breakthrough in applied cryptography and distributed systems, with applicability even beyond blockchains.

However, additional research is needed in order to design secure and efficient VDF constructions that can be used in practice. One crucial area of security that must be addressed is acceleration from specialized hardware. For most VDF constructions today, actors with access to custom hardware would be able to generate VDF outputs much more quickly than desired, potentially breaking the security of protocols that rely on VDFs.

It is clear that VDFs will be tremendously useful as cryptographic primitives. But much work remains to realize this potential in practice. Filecoin and Ethereum are both exploring the use of VDFs for their respective protocols. However, even beyond the applications to Filecoin, this is an investment towards building publicly-verifiable randomness and VDFs as novel tools in the arsenals of cryptographers and decentralization projects.

## Notes on the collaboration

Protocol Labs and the Ethereum Foundation are evaluating and co-funding grants for preliminary research into the viability of building optimized ASICs for running a VDF.

For any VDF, there is knowable uncertainty around the length of the verifiable delay based on the speed and quality of the hardware being used to generate it. The intent of this collaboration is to reduce that uncertainty by developing VDF hardware optimizations upfront and sharing the hardware designs freely for anyone to use. If these preliminary efforts are successful, later efforts may include:

- Public contests to collaboratively optimize VDF implementation runtimes
- Public multi-party computations to generate the necessary VDF security parameters
- Development of hardware optimized to run VDFs

You can follow the progress of this research and get involved at [vdfresearch.org](https://vdfresearch.org/). We are very interested in collaborating with other research groups and organizations, and will be announcing preliminary research grants soon. Stay tuned!
