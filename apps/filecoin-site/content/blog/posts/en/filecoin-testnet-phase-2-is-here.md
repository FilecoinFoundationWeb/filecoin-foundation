---
aliases:
  - /blog/filecoin-testnet-phase-2-is-here/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-05-14T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Today is a big day for the Filecoin project. Six months ago, we launched the
  first phase of the Filecoin testnet. Since then, we have been bug fixing,
  conducting protocol reviews, making critical protocol and product
  improvements, performing optimizations, and working towards running networks
  with multiple interoperable nodes. Now, we are ready to launch Testnet Phase
  2!
image:
  alt: Testnet Phase 2 Launch
  url: /uploads/testnet_launch_main_header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/testnet-launch-english-social.webp
title: Filecoin Testnet Phase 2 is here!
_template: blog_detail
---

Today is a big day for the Filecoin project. Six months ago, we launched the first phase of the [Filecoin testnet](https://filecoin.io/blog/filecoin-testnet-is-live/). Since then, we have been bug fixing, conducting protocol reviews, making critical protocol and product improvements, performing optimizations, and working towards running networks with multiple interoperable nodes. Now, we are ready to launch Testnet Phase 2!

## What’s in this release

Testnet Phase 2 is the last major milestone before mainnet launch. Here’s a look at what it offers. The Testnet Phase 2 release includes:

- **Two interoperable Filecoin implementations:** [**go-filecoin**](https://github.com/filecoin-project/go-filecoin) and [**lotus**](https://github.com/filecoin-project/lotus/) can both be used to participate in Testnet Phase 2. Launching a secure network with multiple implementations is a [key part of our network security strategy](https://filecoin.io/blog/announcing-lotus#why-multiple-implementations), and we’re excited to have two interoperable implementations ready for this launch.
- **Secure proofs (WinningPoSt and WindowPoSt):** Previous versions of the Filecoin Proof-of-Spacetime (PoSt) mechanism have relied on probabilistic arguments to justify that a rational miner will maintain all their sectors and correctly store client data over time. Analysis has failed to prove that such mechanisms provide sufficient guarantees for secure storage power-based consensus and a verifiable storage market. The Filecoin protocol and implementations now make use of _WinningPoSt_ and _WindowPoSt_, which require that miners demonstrate availability of all their claimed sectors on a regular basis. This mechanism removes the need for the ElectionPoSt mechanisms that were used in Testnet Phase 1. This, in turn, dramatically reduces the aggregate amount of sector sampling required for node operations, which ultimately reduces the cost and increases the reliability of Filecoin storage. You will soon be able to read a detailed description of WinningPoSt and WindowPoSt in the [Filecoin protocol spec](https://filecoin-project.github.io/specs/).
- **Drand:** [Drand](https://github.com/drand/drand) is a distributed randomness beacon network. Nodes on the Drand network work together to produce collective, publicly verifiable, unbiased, and unpredictable random values at fixed intervals using bilinear pairings and threshold cryptography. These randomness values can be used in applications, like Filecoin, that need unbiased sources of randomness. Filecoin implementations now use Drand as an external source of randomness for leader elections, reducing the risk of grinding and other potential consensus attacks. For now, **go-filecoin** and **lotus** pull Drand values from a Drand testnet. For the mainnet launch, we plan to work with several parties to spin up a mainnet-ready Drand network. We hope this publicly verifiable random beacon can be useful to other protocols in need of unbiasable randomness.
- **Cryptoeconomic structures:** Filecoin uses a combination of existing cryptoeconomic structures and many new ones to meet the network’s unique requirements. We published a [high-level description of these structures](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/) on our blog. For the Testnet Phase 2 release, Filecoin implementations now include a hybrid exponential decay function for block rewards, committed capacity sectors, quality-adjusted storage power, and improved pledge collateral mechanisms. These mechanisms were designed to encourage storage miners to promote the long-term health and service quality of the network. In Testnet Phase 2, we will be testing and refining these mechanisms and updating our cryptoeconomic parameters.
- **New documentation site:** [Our new documentation site](http://docs.filecoin.io/) intends to be a resource for developers, clients, and storage miners alike. It includes conceptual explainers for key concepts in the Filecoin protocol and also provides guidance for how to run **go-filecoin**, **lotus**, and how to join Testnet Phase 2.
- **Security audits:** In addition to thorough and ongoing review by Filecoin team members, we’ve begun working with some of the best security firms in the world to audit more than a dozen of Filecoin’s key libraries and systems before launch.

The Testnet Phase 2 release includes implementations that are nearly feature-complete. Over the next few weeks, we will complete feature development work on **go-filecoin** and **lotus**, upgrade our Proof-of-Replication (PoRep), and continue testing, bug fixes, and performance improvements. You should expect network upgrades and a couple more network resets as we work towards making sure Filecoin is ready for our mainnet launch in a few months.

## How to participate in Testnet Phase 2

**Join the network!** Whether you are a storage miner, client, or developer, running a Filecoin implementation and joining the network is the best way to understand how Filecoin actually works and how it can support your use case. Visit the [Filecoin docs site](https://docs.filecoin.io/) for instructions on how to run **go-filecoin** or **lotus** to join Testnet Phase 2.

**Break the network and report bugs:** If you want to be extra helpful, you can help us find bugs!

- If you find a problem with the protocol, please file an issue on the [specs repo on GitHub](https://github.com/filecoin-project/specs/issues)
- If you find bugs in lotus, please file an issue on the [lotus repo on GitHub](https://github.com/filecoin-project/lotus/issues)
- If you find bugs in go-filecoin, please file an issue on the [go-filecoin repo on GitHub](https://github.com/filecoin-project/go-filecoin/issues)
- If you’d like to report a security vulnerability in the protocol or any implementation, please follow the [disclosure guidelines](https://github.com/filecoin-project/community#security-issues-and-disclosures)

**Start building!** Every week, we see new developers exploring and using Filecoin as the storage platform for their applications. We’ve been featuring some of the use cases and developers in the community who are building essential tools and services through our Filecoin Community Highlights series. For example, [Textile](https://filecoin.io/blog/community-andrew-hill-textile/) is developing plug-and-play tools for Filecoin application developers and [Small Data Industries](https://filecoin.io/blog/community-ben-fino-radin-sdi/) is leveraging the Filecoin network to create tools to archive and preserve the world’s artistic record.

If you’re a developer who is interested in building on the Filecoin network, we’d love to hear from you! Please reach out to us at [filecoin-collab@protocol.ai](mailto:filecoin-collab@protocol.ai).

## Questions

**Join us for our Testnet Phase 2 AMA with Juan Benet.** Join us **Monday, May 18, at 7 PM PST**, for a live Q&A with Juan Benet, founder of the Filecoin Project. For one hour, Juan and several Filecoin developers will be online to answer any questions you might have about Testnet Phase 2 and our path to mainnet.

Here’s how to participate:

- [Set up an account](https://filecoin.io/#community) on the [Filecoin Project Slack](https://filecoinproject.slack.com/).
- To ask questions you will need a special event link from Sli.do. We will post the event link in the **#fil-ama** channel on Slack and in WeChat on May 18, 2020 at 7 PM PST.
- Please review the [Filecoin Community Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md) before the session. In general, treat each other with respect.
- This is an opportunity to ask questions about Filecoin technology and Testnet Phase 2 – please do not discuss speculative topics, such as token prices, exchanges, and more.
- We will answer as many questions as we can during this session, but depending on volume, we may not be able to get to everyone’s questions.
- We will post a summary of the Q&A session on the Filecoin [blog](https://filecoin.io/blog) after the event.

We hope to see you there!

## Thanks

_Thank you_ to the thousands of Filecoin miners, developers, clients, and testers who have been patiently testing and improving Filecoin over these last few months. You have made invaluable contributions to improving the security and performance of the Filecoin network and protocol.

Ultimately, Filecoin’s mission is to create a decentralized, efficient, and robust foundation for humanity’s information. Thanks to your efforts, along with the work of Filecoin’s research and engineering teams, we are all closer than ever to launching a public blockchain powered by useful work, a reliable storage service, and a thriving decentralized economy.

Thank you for being part of this global community. We look forward to continuing to build this technology and ecosystem with you.
