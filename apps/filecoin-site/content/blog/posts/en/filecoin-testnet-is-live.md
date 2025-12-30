---
aliases:
  - /blog/filecoin-testnet-is-live/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-12-11T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Today marks an important milestone for the Filecoin project: the launch of the
  Filecoin testnet (on schedule)! After significant research, design, and
  development, the Filecoin protocol is ready for live network testing. We’re
  thrilled to share it with you.
image:
  alt: "Filecoin Testnet is Live! "
  url: /uploads/testnet_launch_main_header-1.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/testnet_launch_english_social.webp
title: Filecoin Testnet is live
_template: blog_detail
---

Today marks an important milestone for the Filecoin project: the launch of the Filecoin testnet ([on schedule](https://filecoin.io/blog/update-2019-q2-q3/#1-launches-testnet-on-dec-11-mainnet-in-2020-q1))! After significant research, design, and development, the Filecoin protocol is ready for live network testing. We’re thrilled to share it with you.

## What is the Filecoin testnet

The Filecoin testnet is a live test network for interoperable implementations of the Filecoin protocol. It is also a period of significant testing, benchmarking, and optimizations. The purpose of the testnet is to evaluate Filecoin at meaningful scale before we launch mainnet and to fix any issues that may arise. The network is and always will be open for anyone to access and join without restriction, and the Filecoin Project codebase is free and open-source. Anyone can install the software, connect to the network, and explore Filecoin.

The testnet is the most realistic simulation of the Filecoin mainnet to date.

- Prospective storage miners can experience more realistic sealing performance and hardware requirements due to the use of near-final proofs constructions and parameters.
- Prospective storage clients can store and retrieve real data on the testnet. Clients can participate in deal-making workflows and storage + retrieval functionality.
- Developers can begin building applications on top of testnet-compatible implementation APIs.

Currently, the Filecoin testnet operates with one Filecoin implementation: [lotus](https://github.com/filecoin-project/lotus/). The network itself is implementation-agnostic. Several implementations, including go-filecoin, will soon interoperate on the Filecoin testnet. We’ll announce on this blog when more implementations join the network!

IMPORTANT NOTE: The Filecoin protocol is not yet 100% complete or stable. Testnet will not be a stable network; the entire purpose of testnet is for us to find and fix bugs, so this is expected! The network will be restarted at least once, and possibly several times, between now and mainnet launch. Additionally, all Filecoin software implementations, including lotus, will evolve significantly between now and mainnet as we incorporate user feedback, discover new optimizations, and continue to improve the protocol.

Launching the testnet at this stage allows for two important outcomes:

1. You will have an early opportunity to test out the full Filecoin feature set. While the Filecoin protocol and implementations are still changing, testnet provides a good opportunity to learn about general performance and how Filecoin can support your use case (whether you are a miner, storage client, developer, or any other kind of Filecoin user!).
2. You can make suggestions to improve Filecoin before mainnet launch. If you discover an essential missing feature or a critical security vulnerability, please let us know. Your feedback will help us improve the network for everyone. For lotus bugs, file an [issue](https://github.com/filecoin-project/lotus/issues) or post on our [discussion forum](https://discuss.filecoin.io/). For general feedback, you can email [team@filecoin.io](mailto:team@filecoin.io). For security vulnerabilities, please follow the [disclosure guidelines](https://github.com/filecoin-project/community#security-issues-and-disclosures).

We can’t wait for you to join the Filecoin testnet and tell us what you think! Read on for some ways you can participate in making this network successful.

## Getting started with the Filecoin testnet

1. [Join the testnet](https://filecoin.io/blog/filecoin-testnet-is-live/#join-the-testnet)
2. [Join the Filecoin community](https://filecoin.io/blog/filecoin-testnet-is-live/#join-the-filecoin-community)
3. [Participate in our testnet AMA](https://filecoin.io/blog/filecoin-testnet-is-live/#participate-in-our-testnet-ama)
4. [Break the testnet! Report issues!](https://filecoin.io/blog/filecoin-testnet-is-live/#break-the-testnet-report-issues)
5. [Send us product feedback](https://filecoin.io/blog/filecoin-testnet-is-live/#send-us-product-feedback)
6. [Participate in miner testing](https://filecoin.io/blog/filecoin-testnet-is-live/#participate-in-miner-testing)
7. [Build the Filecoin ecosystem](https://filecoin.io/blog/filecoin-testnet-is-live/#build-the-filecoin-ecosystem)

## Join the testnet

We would love for you to participate directly in the Filecoin testnet! Whether you are a miner, storage client, or developer, joining the testnet is the best way to understand how Filecoin actually works and how it can support your use case.

To participate in the Filecoin testnet, read the [lotus docs](https://lotus.filecoin.io/).

## Join the Filecoin community

If you haven’t already, now is a perfect time to join the Filecoin community. Join the conversation, and let us know what is and isn’t working on one of the following community channels:

- [Chat](https://github.com/filecoin-project/community#chat) (Slack or Matrix)
- [Discourse discussion forum](https://discuss.filecoin.io/)
- [GitHub](https://github.com/filecoin-project/)
  - [Lotus issues on GitHub](https://github.com/filecoin-project/lotus/issues)

## Participate in our testnet AMA

On Thursday, December 12, 2019, we will host two Ask Me Anything (AMA) sessions on the [Filecoin Project Slack](https://github.com/filecoin-project/community#chat). We will have leaders from the Filecoin Project online to answer any questions you might have about the testnet and network participation.

**Timing:**

- Date: Thursday, December 12, 2019
- Time Slot 1: 10:00AM CET / 17:00 CST (1 hour slot)
- Time Slot 2: 18:00 CET / 9:00AM PST (1 hour slot)

**How to participate:**

- You must set up an account on the Filecoin Project Slack workspace (instructions linked above in [“Join the Filecoin community”](https://filecoin.io/blog/filecoin-testnet-is-live/#join-the-filecoin-community)) in order to participate in the AMA.
- Join the #fil-AMA channel on the Filecoin Project Slack workspace. We will only monitor these channels during the time slots listed above.
- Please review our community [code of conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md) before the AMA. In general, treat each other with respect.
- This is a time to ask questions about Filecoin technology or the testnet – please do not discuss speculative topics, such as token prices, exchanges, and more.

## Break the testnet! Report issues

We said “break the testnet,” but really we mean “break anything you can” and please let us know when you do! This includes our protocol construction, the lotus implementation, and any network issues. Security is paramount for the Filecoin network and one of our key requirements for the main network launch. In other words, we won’t launch the Filecoin mainnet until we are convinced that our protocol and implementations are secure. Identifying security issues will greatly accelerate us towards this goal – so we have a special place in our hearts for those who help us constructively break things.

- If you find a problem with the protocol, please file an issue on the [specs repo on GitHub](https://github.com/filecoin-project/specs/issues)
- If you find bugs in lotus, please file an issue on the [lotus repo on GitHub](https://github.com/filecoin-project/lotus/issues)
- If you’d like to report a security vulnerability in the protocol or lotus implementation, please follow the [disclosure guidelines](https://github.com/filecoin-project/community#security-issues-and-disclosures)

## Send us product feedback

Once you join the testnet, we would love to hear any and all product feedback you might have.

Some questions to kick things off:

- Does Filecoin storage and retrieval functionality work for your use case? Why or why not? What do you need for Filecoin to work better for you?
- Does Filecoin mining work flexibly for your mining architecture? Why or why not? What do you need for Filecoin to work better for you?
- Are the lotus node APIs well-documented and easy to understand? How could they be better?
- Are our docs clear? How could they be better?

Please post any product and usability feedback you may have on our [discussion forum](https://discuss.filecoin.io/).

- For usability issues with lotus, we recommend posting in the [“Lotus Help” category](https://github.com/filecoin-project/community/discussions) or filing an [issue on GitHub](https://github.com/filecoin-project/lotus/issues)
- For general product issues, please post in the [“Protocol and General Questions” category](https://github.com/filecoin-project/research/blob/master/open-problems.md)

## Participate in miner testing

Many months ago, we started taking sign-ups for our [miner mailing list](https://goo.gl/forms/QWXEKxUQ8XaujysX2) on the Filecoin website. Over the next several weeks, we will identify miners from this list to conduct open-source, volunteer testing on the testnet. Miners selected from this list are **not Filecoin partners** and will not have privileged access to any information or resources. We are looking for volunteers to help us understand network performance at different mining scales and in different geographies. If you are interested in being a volunteer tester, please fill out the [form](https://goo.gl/forms/QWXEKxUQ8XaujysX2) to join the miner mailing list if you haven’t done so already.

Remember the Filecoin network is open for anyone to access and join! Anyone claiming to sell network access is incorrect and should not be trusted.

## Build the Filecoin ecosystem

We are interested in collaborating with groups to build developer tooling and applications for the Filecoin ecosystem. If this describes you, please submit a proposal to the [Filecoin DevGrants program](https://github.com/filecoin-project/devgrants) (the second wave closes on January 15)!

## Thanks

Filecoin has come a long way in 2019. We started this year with a core team, a closed codebase, and a curious community. In February, we transitioned to a new phase for Filecoin – one marked by community, intense research and protocol design, and rapid development. Since then, the Filecoin Project and community have grown tremendously. We have seen hundreds of community ambassador-led meetups, dozens of collaborations with universities and ecosystem partners, 6 grants awarded in the [first wave of Filecoin DevGrants](https://filecoin.io/blog/filecoin-dev-grants-wave-1-recipients-and-new-wave2-rfps/), 5 [go-filecoin releases](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md), the launch of [lotus](https://filecoin.io/blog/announcing-lotus/) and the [go-filecoin alphanet](https://filecoin.io/blog/announcing-alphanet/)and more!

And today, we launched our public testnet. Testnet marks the transition to yet another phase for the Filecoin project. It is a phase of ruthless prioritization, network launch, refining protocol-market fit, and growing the Filecoin ecosystem. We are very excited to take this big step forward. But we are still at the beginning of the decades-long journey that lies ahead to create a decentralized, efficient, and robust foundation for humanity’s information.

Through it all, one thing has remained true: We wouldn’t have made it to this point without early advocates like you. Thank you for your continued support in the growth and evolution of the Filecoin network. We are excited to begin this new chapter with you.
