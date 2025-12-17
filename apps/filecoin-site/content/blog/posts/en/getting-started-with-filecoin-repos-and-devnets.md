---
aliases:
  - /blog/getting-started-with-filecoin-repos-and-devnets/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-02-14T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As we announced here, we recently opened up the Filecoin project repos on
  GitHub. You can visit the GitHub repos to explore the codebase, development
  tools, community resources, and more.
image:
  alt: Getting Started with Filecoin Repos and Devnets
  url: /uploads/gofc-022-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/devnets-and-repos.webp
title: Getting started with Filecoin repos and devnets
_template: blog_detail
---

![Getting Started with Filecoin Repos and Devnets](https://filecoin.io/vintage/images/blog/getting-started-with-repos-devnets.jpg)

As we announced [here](https://filecoin.io/blog/opening-filecoin-project-repos/), we recently opened up the Filecoin project repos on [GitHub](https://github.com/filecoin-project). You can visit the GitHub repos to explore the codebase, development tools, community resources, and more. If you’re ready to jump straight in, here are some of the ways you can learn more.

1. [Set up a Filecoin node and connect to a devnet](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#1-set-up-a-filecoin-node-and-connect-to-a-devnet)
2. [Visualize the network](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#2-visualize-the-network)
3. [Improve the Filecoin protocol specification](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#3-improve-the-filecoin-protocol-specification)
4. [Collaborate with us to solve open research problems](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#4-collaborate-with-us-to-solve-open-research-problems)
5. [Compete in the Replication Game](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#5-compete-in-the-replication-game)
6. [Join the community](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#6-join-the-community)
7. [Build on top of Filecoin](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#7-build-on-top-of-filecoin)
8. [Join the team](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#8-join-the-team)
9. [Closing thoughts](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#closing-thoughts)

## 1. Set up a Filecoin node and connect to a devnet

As of today, anyone can set up a Filecoin node and connect to a devnet. This is the best way to explore the current command-line interface and the Filecoin decentralized storage market.

Note that the Filecoin project and network are not yet live. The entire project is still a work-in-progress, so we cannot make any performance, stability, or security guarantees.

There is currently one reference implementation for the Filecoin protocol: [go-filecoin](https://github.com/filecoin-project/go-filecoin). There has been tremendous progress made on the go-filecoin implementation. You can get a full development update for go-filecoin [here](https://filecoin.io/blog/update-2018-q3-q4/).

You can connect to one of two devnets:

- **user devnet:** long-running devnet, may be rebooted at random times. Good for testing and playing for the majority of users
- **nightly devnet:** redeployed and rebooted daily at 0600 UTC. Used for development and testing by contributors to go-filecoin

On the devnets, you can store data as a storage client and also try how Filecoin mining works. The devnets are an important development tool for those who anticipate building applications on top of the Filecoin protocol or storing data on the decentralized storage market. While this is still far from a production system, you can begin to get a sense of the different workflows the Filecoin protocol supports and how to integrate them for your application.

You can visit the [go-filecoin repo Wiki](https://github.com/filecoin-project/go-filecoin/wiki) to see the full go-filecoin installation instructions and details on how to connect to a devnet.

## 2. Visualize the network

The network stats dashboard shows a high-level overview of **user devnet** activity. The dashboard aggregates self-reported information and displays total storage capacity on the network, network utilization rate, geographic distribution of nodes, tokens in circulation, and other useful information.

If you _are_ connected to the user devnet, you can stream your node’s activity to this dashboard to see your own activity within the broader network. The full instructions for connecting to the devnet and streaming your node’s activity are on the [go-filecoin Wiki](https://github.com/filecoin-project/go-filecoin/wiki).

## 3. Improve the Filecoin protocol specification

The Filecoin protocol specification (“the spec”) can be found on GitHub in the [filecoin-project/specs](https://github.com/filecoin-project/specs) repo. It is very much an active work in progress, and is far from complete.

We would love comments, questions, and contributions to the spec. You can surface these in [GitHub issues on the specs repo](https://github.com/filecoin-project/specs/issues).

We welcome PRs to the spec. This is one of the most valuable ways to contribute to building the Filecoin network. Improving the protocol specification makes it possible for multiple implementations of the protocol to be built to similar standards of scale and security. Though be warned: it is hard to contribute protocol specification writing without a deep understanding of how it is meant to work. Asking clarifying questions, reviewing and commenting on drafts, and fleshing out details are great ways to get started. Those who want to contribute by writing a section entirely from scratch will require deeper knowledge and close collaboration with out team. Come talk with us on chat (see the [Join the Community](https://filecoin.io/blog/getting-started-with-filecoin-repos-and-devnets/#6-join-the-community) section below)!

## 4. Collaborate with us to solve open research problems

The Filecoin research team has published both an [updated roadmap](https://github.com/filecoin-project/research#filecoin-research-endeavours) and a [list of open research problems](https://github.com/filecoin-project/research/blob/master/open-problems.md). You can collaborate with our team directly if you are interested in solving these problems. Reach out to us at [research@filecoin.org](mailto:research@filecoin.org).

There are also a number of open RFPs for cryptographic and distributed systems available through the Protocol Labs RFP program. Check out the [full listing of RFPs](https://github.com/protocol/research-RFPs) and [how to apply for an RFP](https://github.com/protocol/research-grants/blob/master/FAQ.md) for more information.

## 5. Compete in the Replication Game

The Filecoin protocol uses Proofs-of-Replication (PoReps) to ensure that a storage miner is storing a client’s data correctly. As a result, PoReps are fundamental to the operation of the Filecoin protocol.

The Replication Game is a competition in which individuals compete to submit the fastest replication and PoRep proof generation times. Beating others in the Replication Game (and telling us how you did it) is a great way to help optimize and improve our existing PoRep constructions. This is a valuable contribution to the Filecoin protocol and network, as it can help create better, faster, and more secure proving systems.

Full details for how to compete in the Replication Game are available on [GitHub](https://github.com/filecoin-project/replication-game). You can also watch the [demo video](https://youtu.be/2NAKGL0ydiE) (embedded below) to see how to participate in the replication game and view the current leaderboard.

## 6. Join the community

Come join the discussion! You can participate in our research and development conversations on Filecoin chat, ask for help troubleshooting installation problems on the discussion forums, and visit our [community repo](https://github.com/filecoin-project/community) for information about meetups, calls, and other community resources!

- **Chat channels:** We use channels bridged across several platforms. As a distributed community, these channels are where the vast majority of our communications take place. Please read our [code of conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md) before posting on chat.
  - _Matrix:_ [Filecoin community](https://riot.im/app/#/group/+filecoin:matrix.org) (which contains links to all bridged channels)
  - _Slack:_ Create an account [here](https://join.slack.com/t/filecoinproject/shared_invite/enQtNTUwNTI1Mzk5MDYwLTI2MmMxNzNjYjhlYWM3YjQxM2E4MThmM2ZhY2JkYWIxNGVjMGVmNTg3Y2VhZjQ3OGM5ZTc1OGFmZGZhMzZmMTI)
  - _IRC:_ [Coming soon](https://github.com/filecoin-project/community/issues/4)
- [**Discussion forum**](https://discuss.filecoin.io/): We use the forums for more long-lived questions. When in doubt, you can always post here.

## 7. Build on top of Filecoin

We are interested in collaborating with application developers who want to build massively impactful applications on the decentralized web. If you are interested in exploring potential collaboration opportunities, you can post directly on the [forum](https://discuss.filecoin.io/). These are open by default. As a secondary option, you can email [filecoin-collab@protocol.ai](mailto:filecoin-collab@protocol.ai).

## 8. Join the team

The Filecoin team is _growing_.

Today, the Filecoin team is employed by Protocol Labs. PL is hiring across a variety of functions, including software engineering, distributed systems research, cryptography research, community, business, UX design, and more.

There are other organizations involved in developing Filecoin, and in time we will hear from more of them publicly. We also expect many new groups, companies, and teams to form around Filecoin. This is a great time for the pioneers to start exploring. Feel free to coordinate through the forums, and reach out if we can be helpful. In the future, we will host events to bring the community together and build a larger, more connected team.

## Closing thoughts

So there you have it! There are a number of ways that you can check out the Filecoin Project, what we have been up to for the past several months, and what we look forward to landing in 2019. Building the Filecoin decentralized storage market has been and continues to be extremely meaningful. We are glad to have you with us on this journey.

If you have any questions at all, do not hesitate to join our community on [GitHub](https://github.com/filecoin-project), the [discussion forum](https://discuss.filecoin.io/), or [chat](https://join.slack.com/t/filecoinproject/shared_invite/enQtNTUwNTI1Mzk5MDYwLTI2MmMxNzNjYjhlYWM3YjQxM2E4MThmM2ZhY2JkYWIxNGVjMGVmNTg3Y2VhZjQ3OGM5ZTc1OGFmZGZhMzZmMTI).
