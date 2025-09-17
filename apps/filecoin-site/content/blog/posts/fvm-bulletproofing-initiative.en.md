---
aliases: []
author: ""
categories:
  - updates
date: 2023-01-20T06:00:00.000Z
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  FVM Bulletproofing is an invite-only initiative that aims to engage experts
  from relevant fields to assess the codebase for latent vulnerabilities and
  earn rewards for new issues they find and report responsibly.
image:
  url: /uploads/fvm-brand-and-website.webp
  alt: ""
main_feature_inverted: false
related_article_1: content/blog/posts/the-filecoin-virtual-machine-explained.en.md
related_article_2: >-
  content/blog/posts/the-fvm-imaginarium-magmo-brings-state-channels-to-the-filecoin-virtual-machine.en.md
related_article_3: >-
  content/blog/posts/announcing-space-warp-journey-to-fvm-launch-on-filecoin-mainnet.en.md
share_image: /uploads/fvm-brand-and-website.webp
title: FVM Bulletproofing Initiative
---

## What is FVM?

The FVM ([Filecoin Virtual Machine](https://fvm.filecoin.io)) brings smart contracts to the Filecoin blockchain, unlocking the world's largest open-access data economy. It enables developers to write and deploy custom code to run on top of the Filecoin blockchain, unleashing the ability to write software that automates the storage, retrieval, and ultimately the transformation of data in a Web3-native way.

## Launching the FVM Bulletproofing initiative

The FVM team at [Protocol Labs](https://protocol.ai/) has been working on [FVM Milestone 2.1](https://fvm.filecoin.io/#roadmap-4), bringing user programmability to the FVM. It is scheduled to go live on Filecoin mainnet on March ‘23, and big things are happening on the journey to mainnet: [Space Warp](https://filecoin.io/blog/posts/announcing-space-warp-journey-to-fvm-launch-on-filecoin-mainnet/).

This milestone adds an EVM runtime to the Filecoin Virtual Machine, support for Ethereum accounts, signatures, and transactions, and an Ethereum JSON-RPC endpoint in [Lotus](https://github.com/filecoin-project/lotus/). This milestone enables users to deploy code to the network for the first time, implying a step function change for the network.

An integral part of this massive development effort is to _guarantee the overall security of the FVM, its EVM runtime, and its various components._ We have designed a dedicated program to engage the wider security community to help us identify latent risks and problems stemming from different user scenarios and potential threat models prior to mainnet launch.

FVM Bulletproofing is an _invite-only_ initiative that aims to engage experts from relevant fields — Wasm, Rust, EVM, blockchain/web3 security — to assess the codebase for latent vulnerabilities and earn rewards for new issues they find and report responsibly.

We are inviting expert security professionals, seasoned Rust developers, maintainers of the OSS libraries used by ref-fvm (e.g. wasmtime), whitehat hackers, auditors, and academics to participate in FVM Bulletproofing.

The rewards pool will be $100k, paid out in FIL tokens, and distributed between qualifying, confirmed, and approved issue reports.

## How we’ve made it easy for you

We understand that you may not be a Filecoin expert, or already have a node up and running you can test against. While testing and validating your potential discoveries against a real [Lotus](https://github.com/filecoin-project/lotus/) node is critical to assess their impact and viability, we know not everyone has the time to learn how to run a Filecoin node from scratch.

So to make things easy, we have set up the [Localnet.Farm](https://github.com/jimpick/localnet-farm) project, which allows you to run a local Lotus devnet with a few clicks. No Filecoin-specific knowledge is required!

## How to participate

- If you have been invited by a member of the Filecoin Foundation or the FVM team, you already have your “invite” and can start auditing right away!

Once you are confirmed, you can start auditing straight away! You can find detailed instructions on how to report findings here: [FVM Bulletproofing - Report an Issue](https://pl-strflt.notion.site/FVM-bulletproofing-initiative-PROGRAM-IS-COMPLETED-NOW-9124fd617a6d4b45bc9c801a5d7a9434).

To learn more, head over to the [FVM Bulletproofing overview page](https://pl-strflt.notion.site/FVM-bulletproofing-initiative-PROGRAM-IS-COMPLETED-NOW-9124fd617a6d4b45bc9c801a5d7a9434) to find out more about rewards, mechanics, and issue classification and to stay updated with news.
