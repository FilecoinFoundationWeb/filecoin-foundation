---
aliases: []
author: ""
categories:
  - updates
date: "2022-03-31T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Great news: You can now sync the Filecoin blockchain using the Filecoin
  Virtual Machine!
image:
  alt: ""
  url: /uploads/fvm-update.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvm-update.webp
title: "FVM M0.5: Run your own FVM node!"
_template: blog_detail
---

The [Filecoin Virtual Machine (FVM)](https://github.com/filecoin-project/fvm-specs) is a WASM-based execution environment for IPLD data being built into the Filecoin blockchain. It is designed to support native Filecoin actors written in languages that compile to WASM (currently [the Rust builtin actors](https://github.com/filecoin-project/builtin-actors)), as well as smart contracts written for foreign runtimes such as the [Ethereum Virtual Machine (EVM)](https://ethereum.org/en/developers/docs/evm/). Check out the [Introduction of the Filecoin Virtual Machine](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/) for more details.

This most recent milestone, FVM M0.5, adds support to the [Fuhon](https://github.com/filecoin-project/cpp-filecoin), [Forest](https://github.com/ChainSafe/forest), [Lotus](https://github.com/filecoin-project/lotus), and [Venus](https://github.com/filecoin-project/venus) implementations to use the FVM to sync the current Filecoin mainnet ([network version v15 OhSnap](https://github.com/filecoin-project/community/discussions/74#discussioncomment-1922550)). Based on the [FVM roadmap](https://fvm.filecoin.io/#roadmap-4), this puts the project well past the “M0” milestone - at what we’re calling M0.5.

![](/uploads/fvmblog.webp)

Furthermore, Core Devs have scheduled the upcoming M1 milestone for deployment in the next [network upgrade (v16), codenamed Skyr](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151). This version upgrades the network to _exclusively_ use the FVM and [the Rust-based built-in actors](https://github.com/filecoin-project/builtin-actors). Check out the [roadmap here](https://github.com/filecoin-project/lotus/discussions/8347).

## How to use the FVM on mainnet today

Enterprising node operators are invited to use the FVM via any of the following implementations:

- **Fuhon:** anyone who is interested can use the [experimental FVM branch](https://github.com/filecoin-project/cpp-filecoin/tree/experimental/fvm) and enable FVM by setting env `FUHON_USE_FVM_EXPERIMENTAL=1`
- **Forest:** coming soon - follow #fil-forest-announcements in Filecoin Slack for latest updates!
- **Lotus:** Using a Release Candidate for [Lotus 1.15.1](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1-rc4), you can enable the FVM using the `LOTUS_USE_FVM_EXPERIMENTAL=1` environment variable. See the [release notes](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1-rc2) for more information and follow this [FVM 0.5 updates discussion](https://github.com/filecoin-project/lotus/discussions/8347) or #fil-lotus-announcement in [Filecoin Slack](https://filecoin.io/slack) for future updates.
- **Venus:** Using a Release Candidate for [Venus 1.3.0](https://github.com/filecoin-project/venus/releases/tag/v1.3.0-rc1), you can enable the FVM using the `VENUS_USE_FVM_EXPERIMENTAL=1` environment variable.

**Please note that while the FVM-support of mainnet has been tested for several weeks now, the feature is still experimental.** Users are not recommended to enable it in critical production environments.

Feedback is very welcome from all FVM testers and early users. If you discover any bugs, please [file an issue in the ref-fvm repo](https://github.com/filecoin-project/ref-fvm/issues). More general thoughts and reviews can be shared on [the community discussion](https://github.com/filecoin-project/lotus/discussions/8334). We are especially interested in hearing about block validation times and the memory consumption of nodes using the FVM.

## Next steps

As mentioned above, we are working hard to land the M1 milestone on mainnet, currently targeted in the [Filecoin Network v16 Skyr upgrade](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151) (tentatively going live on Filecoin mainnet in May). Current workstreams involve [atomically switching to FVM](https://github.com/filecoin-project/lotus/pull/8209), [finalizing the gas params](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0032.md), [testing the builtin actors](https://github.com/filecoin-project/builtin-actors/issues/22), and more.

The amount of code changing under the hood with this upgrade is substantial (though most user visible changes are coming in M2 with user-programmable smart contracts). To prepare, many Filecoin core devs are focused on hardening and auditing the entire FVM and its dependencies for security and correctness.

## Participate in bug bounties

In addition to internal and external audits - we need your help to find bugs and abuse vectors in the upcoming FVM runtime and [rust built-in actors](https://github.com/filecoin-project/builtin-actors)! In the next weeks, we will be openly inviting the Filecoin community to conduct their own audits and report bugs and issues through secure channels, for a chance to win rewards under the [Filecoin Bug Bounty program](https://security.filecoin.io/bug-bounty/)**. Stay tuned for the announcement!**

## Milestone 2: towards user-programmability

Developers are eager to start deploying custom actors to the Filecoin network! For this reason, we have broken down Milestone 2 into two more fine-grained sub-milestones that can be parallelized into various tracks of work.

- **Milestone 2.1** focuses on enabling user-deployed Wasm actors that integrate deeply with the Filecoin protocol, and on creating the framework to enable the deployment of foreign runtimes.
- **Milestone 2.2** delivers the first foreign runtime: the EVM runtime. Look out for an upcoming Request For Proposals (RFP) for teams well-versed in the EVM, Rust, and Wasm to take this on. We have published the [EVM <> FVM mapping spec](https://github.com/filecoin-project/fvm-specs/blob/main/04-evm-mapping.md) to serve as a starting point.

## Get involved

Further, if you would like to more directly get involved with bringing the FVM to fruition, and making sure it meets the needs of its users, please consider joining the team!

Thank you for your continued interest in, and support for, the FVM project! The upcoming months will bring many exciting moments for the Filecoin community as we see this work go live. Join #fvm in [Filecoin Slack](https://filecoin.io/slack) and follow along this journey!
