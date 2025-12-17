---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-07T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Bug Bounties are now live for FVM Milestone 1 until the end of May.
image:
  alt: ""
  url: /uploads/fvm-bug-bounty.webp
main_feature_inverted: false
related_article_1: content/blog/posts/fvm-milestone-0.5-is-complete.en.md
related_article_2: content/blog/posts/filecoin-news-30.en.md
related_article_3: >-
  content/blog/posts/introducing-ref-fvm-a-new-fvm-website-and-the-early-builders-program.en.md
share_image: /uploads/fvm-bug-bounty.webp
title: Introducing the FVM Milestone 1 Bug Bounty Program & Audits
_template: blog_detail
---

Following up on [last week’s FVM Milestone 0.5 progress update](https://filecoin.io/blog/posts/fvm-milestone-0.5-is-complete/), we are excited to announce the [FVM Bug Bounty Program](https://fvm.filecoin.io/#fvm-bug-bounty-program-7) and invite bug hunters and community developers to help find vulnerabilities in the FVM Milestone 1 codebase in preparation for May’s FVM M1 release as part of [Filecoin network upgrade v16 Skyr](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151).

The Filecoin Virtual Machine is being added to Filecoin’s mainnet in several milestones. As part of Milestone 1, Filecoin network will be transitioning to exclusive use of the Filecoin Virtual Machine. This represents a substantial change, switching from the current legacy VMs to the adoption of the new Wasm-based reference FVM by all client implementations.

This will also include a new gas model that accounts for Wasm execution costs. For now, only [built-in actors in Rust](https://github.com/filecoin-project/builtin-actors) will be supported for Milestone 1, with user-programmable actors on the horizon for a later Milestone 2 release in September (estimated).

Since this is a completely new codebase, one of our main areas of focus right now is to invite more external developers to audit the M1 codebase for potential bugs in our implementation. Furthermore, we would like to give the Filecoin community a chance to explore our [reference implementation of the FVM](https://github.com/filecoin-project/ref-fvm) and updated [Builtin actors v8](https://github.com/filecoin-project/builtin-actors), to provide us with feedback on their approach.

Apart from incentivizing bug hunters through this program, a first-pass internal audit has been conducted by members from across the Filecoin contributor team and we have initiated audits by external security experts. Several hardening efforts are also underway.

## What’s in scope for FVM M1 Bug Bounties

1. [Reference FVM](https://github.com/filecoin-project/ref-fvm) (ref-fvm)
   - Reference implementation of the Filecoin VM ([specs](https://github.com/filecoin-project/fvm-project)).
   - Written in Rust and intended to be integrated via FFI into non-Rust clients, or directly into Rust clients.

2. [Lotus - Reference FVM integration](https://github.com/filecoin-project/lotus/pull/8293)
   - Integration of the Ref FVM into Lotus via FFI.
   - Written in Go.
   - (The PR listed is merely an entry point into the codebase, but the scope is not limited to it. Please review what's on master and other pending PRs.)

3. [Lotus - Filecoin FFI](https://github.com/filecoin-project/filecoin-ffi/pull/217)
   - The FFI glue code.
   - Written in Go and Rust.
   - (As above, the PR linked is merely an entry point, but the scope is not limited to it.)

4. [Built-in Actors](https://github.com/filecoin-project/canonical-actors)
   - Written in Rust, Wasm-compiled built-in actors are used by all Filecoin clients.
   - An [actors spec](https://spec.filecoin.io/systems/filecoin_vm/actor/) and [test vectors](https://github.com/filecoin-project/specs-actors/tree/master/test-vectors) for actors are available for reference.
   - An executable spec written in Go is available at [filecoin-project/specs-actors](https://github.com/filecoin-project/specs-actors), these power the Filecoin network pre-FVM.
   - Note that auditing actors normally requires Filecoin domain expertise.

## Rewards and What’s Out-of-Scope

The FVM team would like to get as much help as possible in reviewing the code from the community prior to shipping M1. However there are certain known areas whose hardening is in progress. To that end, they’ve made a list of **_Exclusions to Scope including Known Issues_** [listed here on GitHub](https://github.com/filecoin-project/ref-fvm/issues/428) that will be regularly updated. These areas are only eligible for bounties once they’re checked off this list.

Rewards for reporting FVM M1 bugs are the same as regular [bug bounty rewards](https://security.filecoin.io/bug-bounty/#rewards) in the Filecoin Security Program. Similarly, the [Rules](https://security.filecoin.io/bug-bounty/#rules) of the regular Filecoin Security Program apply, including what’s [out of scope](https://security.filecoin.io/bug-bounty/#out-of-scope).

Bugs in Filecoin client implementations (Lotus, Venus, Forest, Fuhon) and the Filecoin Proofs libraries fall under the regular [Filecoin Security Program scope](https://security.filecoin.io/bug-bounty/#scope) and rewards. Finally, previous Filecoin audits can be found in the [audits section in the Filecoin Specs](https://spec.filecoin.io/appendix/audit_reports/).

## Testing Tools

Based on the [Filecoin test vectors](https://github.com/filecoin-project/test-vectors/) which support interoperability testing across node implementations, the [FVM test vectors](https://github.com/filecoin-project/fvm-test-vectors) specifically target the FVM and exercise its entirety. A community developer team is also working on an [integration test framework](https://github.com/filecoin-project/devgrants/issues/492) to test FVM correctness. Various components of the FVM will also be fuzzed.

## Reporting Bugs

To report vulnerabilities, please contact security@filecoin.io to be eligible for bounties. You can use the [confidential reporting guidelines listed here](https://security.filecoin.io/#vulnerability-reporting). Alternatively, the FVM Bug Bounty program is posted on Gitcoin [here](https://gitcoin.co/issue/filecoin-project/community/504/100028707) and on ImmuneFi [here](https://immunefi.com/).

Please **do not** file a public issue or discuss the vulnerability in public places like Slack, Twitter, etc. or it will not be eligible for rewards.

## Looking Ahead

Until the end of May we hope our existing developer community and new external developers will help discover a wide range of potential vulnerabilities in FVM M1, in advance of later milestones to add user-programmability and EVM-compatibility in FVM M2.

This will be one of the most exciting new additions to the Filecoin protocol. With custom actors, developers will be able to leverage a truly wide range of potential use cases that Filecoin can provide, ranging from programmable storage to DeFi, DAOs, subscriptions, insurance and more. Visit the [FVM website](https://fvm.filecoin.io/) to learn about more opportunities.

To prepare for M2’s release, the FVM team will be initiating more security audits and another bug bounty round for the upcoming M2 codebase, likely in July. We have also invited a diverse group of developers to try out the early FVM through our [FVM Foundry Program](https://fvm.filecoin.io/foundry) for early builders including developer workflows, tooling and early dapps.

**_Stay tuned for FVM bug bounties for M2 this Summer!_**
