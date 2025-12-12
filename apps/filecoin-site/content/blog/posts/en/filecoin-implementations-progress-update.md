---
aliases:
  - /blog/filecoin-implementation-update/
author: ""
categories:
  - updates
date: "2020-10-20T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  One of Filecoin’s launch goals has always been to have multiple independent
  protocol implementations to help secure the network at launch.
image:
  alt: Filecoin Implementations Progress Update
  url: /uploads/virtual-community-main-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/implementations-social.webp
title: Filecoin Implementations Progress Update
_template: blog_detail
---

One of Filecoin’s launch goals [has always been](https://filecoin.io/blog/announcing-lotus/#why-multiple-implementations) to have multiple independent protocol implementations to help secure the network at launch. In this post, we’ll detail the recent progress and next steps for each of the four major implementations: [Forest](https://github.com/ChainSafe/forest), built by Chainsafe; [Fuhon](https://github.com/filecoin-project/cpp-filecoin), developed by Soramitsu; [Venus (previously known as go-filecoin)](https://github.com/filecoin-project/venus), stewarded by IPFSForce; and [Lotus](https://github.com/filecoin-project/lotus), created by Protocol Labs.

## Forest

[Forest](https://github.com/ChainSafe/forest) is a Rust Filecoin implementation developed by ChainSafe. The project is currently focusing on two main goals, the primary of which is syncing and interoperability with mainnet. The team aims to achieve this in stages, first enabling a direct import of the chain, then progressing to syncing the chain over the network. As a secondary goal, the team is working toward full-node functionality.

Some recent progress toward these aims includes:

- Integrating miner actor changes as of [spec actors release 0.9.3](https://github.com/filecoin-project/specs-actors/releases/tag/v0.9.3)
- Releasing a full storage miner implementation
- Incorporating message pool changes, including republishing, revert, and selection logic for messages
- Updating conformance tests to discover and resolve incompatibilities
- Completing a pass-through of the state manager and chain store to identify changes that have occurred since implementation
- Building out a local devnet
- Testing and refactoring the [AMT](https://spec.filecoin.io/#section-systems.filecoin_vm.state_tree.state-tree) implementation

Forest was one of the first users of the recently created [test-vector conformance tests](https://github.com/filecoin-project/test-vectors) designed to ensure compatibility and correctness between different Filecoin implementations, and the [Filecoin specification](https://spec.filecoin.io/). This helped the team move very rapidly toward full interoperability thanks to a diverse corpus of message, tipset, and chain-class vectors - which they also helped amend and improve.

The Forest team is looking to integrate storage and retrieval markets over the next few weeks before testing out the [go-fil-markets interface](https://github.com/filecoin-project/go-fil-markets).

## Fuhon

[Fuhon](https://github.com/filecoin-project/cpp-filecoin) is a C++ Filecoin implementation developed by Soramitsu. The Fuhon team is working towards a standalone devnet, and is currently wrapping up work on a storage miner implementation. As of now, the Fuhon miner and node are compatible with [lotus 0.5.4](https://github.com/filecoin-project/lotus/releases/tag/v0.5.4). The project is also preparing to implement and run conformance tests to ensure interoperability. One particularly noteworthy change is a recent TLS fix that enables connections between Lotus and Forest nodes.

## Venus (previously known as go-filecoin)

Originally developed by Protocol Labs, [go-filecoin](https://github.com/filecoin-project/venus) - now code-named Venus - was graduated to community maintainership in June. We’re excited to welcome IPFSForce, who will be taking stewardship of the project.

The most immediate concern for the project is catching up on all of the changes introduced into the specification and Lotus over the last four months. Syncing the Space Race chain will serve as a first milestone toward this goal. Progress thus far includes:

- Genesis analysis and import
- Updating data structures to reflect recent changes
- Updating election logic (introducing [WinCount](https://spec.filecoin.io/#section-algorithms.expected_consensus.expected-consensus))
- Updating project dependencies (e.g. [DRAND](https://spec.filecoin.io/#section-libraries.drand.drand), used for randomness)
- Test code fixes

At time of writing, the team can partially sync the Space Race chain, but several improvements, particularly around performance, are outstanding. The new team is targeting interoperability with Lotus in one month - an insanely fast timeline. If anyone can achieve it, it’s this team!

## Lotus

For the time being, [Lotus](https://github.com/filecoin-project/lotus) remains the most mature Filecoin implementation. Just yesterday, the Lotus implementation released [v1.0.0](https://github.com/filecoin-project/lotus/releases) along with the mainnet launch last week.

Previously, the implementation was focused on preparing for and testing the [spec actors upgrade](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0) to create a flexible framework for state-breaking upgrades, and the development of [lotus-lite](https://github.com/filecoin-project/lotus/issues/3532#), a gateway-based node without a chain store that implements functionality via a remote node. This provides a wallet that can interface directly with miners, without the need to maintain heavyweight components like a synced chain store. The ultimate aim for this work is to have a client that can run on a phone!

Coming next, the team is working on the state upgrade for [FIP-0004](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0004.md), which was approved last week by all 4 implementations and has seen strong support from the mining community. They are also working on a major improvement to the storage miner code, which is intended to be delivered in incremental improvements over the next few weeks.
