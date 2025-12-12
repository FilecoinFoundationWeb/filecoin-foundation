---
aliases: []
author: ""
categories:
  - updates
date: "2022-01-19T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Announcing three major updates along the road of the Filecoin Virtual
  Machine’s towards Milestone 1.
image:
  alt: ""
  url: /uploads/fvm-brand-and-website.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fvm-brand-and-website.webp
title: "Introducing ref-fvm, a new FVM website, and the Early Builders Program"
_template: blog_detail
---

We’ve been busy since we [introduced the Filecoin Virtual Machine](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/) back in November 2021. Today, we are thrilled to bring you three announcements. First, we [open sourced the repo](https://github.com/filecoin-project/ref-fvm) for the FVM reference implementation (ref-fvm) earlier this week. Second, we have launched a brand new [FVM website](https://fvm.filecoin.io/). And finally, we’re kicking off the [FVM Early Builders program](https://fvm.filecoin.io/foundry) to onboard the pioneering members to the FVM Foundry. Continue reading to find out more.

## Open sourcing the reference FVM implementation

To begin, we have open sourced [ref-fvm](https://github.com/filecoin-project/ref-fvm), the reference Filecoin Virtual Machine implementation.

ref-fvm is built in Rust, uses [Wasmtime](https://wasmtime.dev/) as a WASM engine (although support for engine pluggability is planned), and implements the core ideas introduced in the [FVM Architecture spec](https://github.com/filecoin-project/fvm-project/blob/main/01-architecture.md). Namely, the extern and kernel boundaries (corresponding to the node <> FVM and FVM <> actor interfaces, respectively), the syscall paradigm, the IPLD interfaces, the call manager and invocation container concepts, and more.

ref-fvm is at a pre-alpha v0 stage (check out the [full maturity roadmap](https://github.com/filecoin-project/ref-fvm#maturity-roadmap)). It supports Filecoin actors v6 and network version 14 onwards. It is passing 100% of the [conformance test vectors](https://github.com/filecoin-project/fvm-test-vectors). That's over 2000 test vectors, but in the next weeks we'll boost coverage even further, leveraging the [tvx](https://github.com/filecoin-project/lotus/tree/master/cmd/tvx) tool to extract vectors directly from mainnet.

ref-fvm v0 is intended to serve as a foundation for the programmable FVM. At this point it only supports built-in actors, with support for user-deployed actors coming in v1.

The logic of built-in actors was forked from the [Forest implementation](https://github.com/ChainSafe/forest/), and adapted to work on the FVM. We're in the process of optimizing bytecode size and performance these days.

As soon as these built-in actors are considered stable, the Filecoin Core Devs will decide whether to spin them off to a separate repo, promote their status to "canonical actors", and adopt them as a common good across all implementations.

## Building a strong FVM ecosystem

This unveiling also marks a broader shift in dynamics within the FVM project.

We are coming out of our initial _incubation period_, and shifting to working entirely in the open. We know that building a strong and participative community is vital for the future of the FVM.

With the opening of the [repo](https://github.com/filecoin-project/ref-fvm), and the launch of our [new website](https://fvm.filecoin.io/), we would like to invite all of you to join us on this journey, and contribute in whichever capacity you’re able to!

If you’re a Rustacean (or on your way to it) and would like to code with us, a good way to get started is by checking out the [issues marked with hint/good-first-issue](https://github.com/filecoin-project/ref-fvm/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Ahint%2Fgood-first-issue) on GitHub.

If you have suggestions or opinions on WASM VMs, gas, IPLD, and other relevant topics, or you’re thinking about use cases and would like some guidance, feel free to open a discussion on the [fvm-specs](https://github.com/filecoin-project/fvm-specs/) repo, and/or on the [Filecoin Slack](https://filecoin.io/slack/) #fvm channel.

## Launching the FVM website

To pair with this important development milestone, we have just launched [fvm.filecoin.io](https://fvm.filecoin.io/), the official home of the Filecoin Virtual Machine project. Visit it to get inspired by all the possibilities and opportunities that the FVM unleashes, learn about the roadmap, and find all developer resources as they become available.

[![https://fvm.filecoin.io/](/uploads/fvm-website.webp "https://fvm.filecoin.io/")](https://fvm.filecoin.io)

## Recruiting Early Builders into the FVM Foundry

We are also launching the [FVM Foundry and the Early Builders program](https://fvm.filecoin.io/foundry).

The FVM Foundry is a long-term collective that brings together web3 devs with core developers from the FVM team to share knowledge, kickstart a Cambrian explosion of innovation on the Filecoin network, and make sure that the FVM meets the technical requirements for the upcoming apps, systems, and platforms that developers want to build on it.

We are seeking individuals with expertise and interest in smart contract programming, large-scale data, compute-over-data, and data governance (data DAOs) to become the pioneering members of the FVM Foundry as Early Builders.

The Foundry’s Early Builders program will run from April-June 2022. We expect FVM Early Builders to participate in monthly workshops with the FVM team, and engage in solution ideation and design, early testing, and developer experience feedback.

Early Builders will receive a one-time stipend in FIL, and extensions and development grants may also be available for continued work.

Apply now at [fvm.filecoin.io](https://fvm.filecoin.io/foundry).

## What's next?

We’re well underway towards [Milestone 1](https://filecoin.io/blog/posts/introducing-the-filecoin-virtual-machine/) (March ’22).

Milestone 1 represents the atomic switch of mainnet from the current built-in VMs to the WASM-based reference FVM. It comes with a brand new gas model that accounts for real WASM execution costs. Milestone 1 paves the way for user programmability, which will be introduced in Milestone 2 (June ’22).

Here are just some of the things to look forward to in the next weeks:

1. Final integration of the FVM into Lotus (the reference Filecoin client).
2. Launching Lotus FVM canary nodes on mainnet.
3. Boosting test coverage through more test vectors extracted from mainnet.
4. A Filecoin Improvement Proposal (FIP) to formally introduce the FVM to mainnet.
5. Another FIP to introduce gas model changes.
6. Forest, Venus and Fuhon switch to the FVM as their execution runtime.
7. A testnet to stage the Milestone 1 upgrade.

## Thanks

The FVM team at Protocol Labs wants to publicly thank the Forest team at ChainSafe, the Fission team, the ARG team, the Filecoin Foundation, Alex Wade, and the Venus & Fuhon teams, for their support and collaboration all the way through this milestone, as well as the many PL labbers that worked side by side with us at various stages of the journey. This is just the beginning!
