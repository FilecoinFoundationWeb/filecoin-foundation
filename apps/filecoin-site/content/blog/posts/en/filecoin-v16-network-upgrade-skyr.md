---
aliases: []
author: ""
categories:
  - updates
date: "2022-07-10T23:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The Filecoin v16 Skyr upgrade - the deployment of Milestone 1 of the Filecoin
  Virtual Machine to the Filecoin network was successfully completed on
  Wednesday, July 6th at 1400 UTC.
image:
  alt: ""
  url: /uploads/177652994-2ae7db22-7415-4243-a09a-e736b01369c4.webp
main_feature_inverted: false
related_article_1: content/blog/posts/fvm-milestone-0.5-is-complete.en.md
related_article_2: content/blog/posts/introducing-the-filecoin-virtual-machine.en.md
related_article_3: ""
share_image: /uploads/177652994-2ae7db22-7415-4243-a09a-e736b01369c4.webp
title: "Filecoin v16 Network Upgrade: Skyr"
_template: blog_detail
---

**It's here!**

The Filecoin v16 Skyr upgrade - the deployment of Milestone 1 of the Filecoin Virtual Machine to the Filecoin network was successfully completed on Wednesday, July 6th at 1400 UTC.

This upgrade represents the most dramatic transformation of the Filecoin network since its inception nearly two years ago. The centerpiece of this upgrade was [the introduction of the Filecoin Virtual Machine (FVM)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0030.md), and the migration of chain execution to it. The Filecoin Virtual Machine (FVM) is a polyglot, WASM-based execution environment that will add smart contract deployment capabilities (known as actors) to the Filecoin decentralized storage Network.

The Skyr upgrade is the first of two steps on the path to fully enabling on-chain user programmability on Filecoin, bringing with it the possibility for a boundless number of new use cases and features to be implemented on the already robust network. This upgrade means that the core logic of the Filecoin network - implemented in the [built-in actors](https://github.com/filecoin-project/builtin-actors) - is now running atop the FVM M1 (milestone 1) code. And with the next step, users will be able to deploy custom logic to the network, making Filecoin both a storage _and_ computation layer.

## What’s in this upgrade?

The Skyr upgrade delivered three FVM-related [Filecoin Improvement Proposals (FIPs)](https://github.com/filecoin-project/FIPs) to the network — FIP [0030](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0030.md), [0031](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0031.md), and [0032](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0032.md). These FIPs collectively bring us to the first milestone of [the FVM roadmap](https://fvm.filecoin.io/#roadmap-4). At the point of the upgrade, the network atomically switched to using the new WASM-based FVM for chain validation - the specification for which is found [here](https://github.com/filecoin-project/fvm-specs). Currently all clients have adopted the reference FVM implementation ([ref-fvm](https://github.com/filecoin-project/ref-fvm)), which uses [Wasmtime](https://wasmtime.dev/) as its Wasm runtime.

The atomic switch also involved the replacement of the Go-based [specs-actors](https://github.com/filecoin-project/specs-actors) with the Rust-based [builtin-actors](https://github.com/filecoin-project/builtin-actors) (actors in Filecoin are equivalent to smart contracts in other platforms). These built-in actors give rise to the core features of the Filecoin protocol (storage, proving, power accounting, deals, etc.), and they’re at the heart of the protocol.

Built-in actors are compiled to Wasm bytecode, packaged into a [CARv1 file](https://ipld.io/specs/transport/car/carv1/) (bundle), and stamped with a [manifest](https://github.com/filecoin-project/builtin-actors#importable-bundle), which in turn is placed in the system actor’s state. Filecoin clients (e.g. Lotus, Forest, Venus) load these bundles into their blockstores, and that bytecode becomes available during message execution.

Another significant change resulting from the Skyr upgrade is a reworking of the gas model. The network now charges gas for execution logic, performing accounting at the Wasm instruction level. It also charges for syscalls and externs. This results in higher gas-to-time fidelity, conforming to the baseline of 10 gas units per nanosecond of execution.

In addition, the Skyr upgrade also hardened other aspects of the Filecoin protocol. These changes included a new, more secure, version of the [SnarkPack proof aggregation tool](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/), [a migration away from non-UTF-8 strings in chain state](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0027.md), and [a fix to an off-by-one](https://github.com/filecoin-project/lotus/issues/2170) in Filecoin’s use of [Distributed Randomness](https://drand.love/). A complete list of changes may be found [here](https://status.filecoin.io/).

## Testing & Auditing

Given the scope of changes in this upgrade, it was necessary to subject it to an extensive testing process. The FVM itself was tested by making it fully backwards-compatible with network versions 14 and 15. This allowed users to run experimental FVM-based canary nodes and report any observed issues. Various kinks were identified and ironed out through this process —so a big thank you to everyone who participated and contributed! [Test vectors](https://github.com/filecoin-project/test-vectors) were also extracted from Filecoin mainnet itself, and used to validate the correctness of the FVM.

The new builtin-actors suite was the target of a 3-month sprint solely dedicated to writing unit and integration tests. The goal was to achieve testing parity with the now-deprecated specs-actors, with this milestone being achieved in May. In addition to checking for correctness of the actors themselves, this effort also crucially unlocked the ability to make changes to the actors without a high-risk of regression. This is a fundamental prerequisite to being able to quickly issue fixes in the future.

For more end-to-end testing, multiple test networks were spun up. During the active development phase, a “caterpillar” test network was created as needed — often several times a day. This network eventually metamorphosed into “butterflynet” - so named because it was a testnet used to catch bugs. After this period of rapid testing & deployment, Filecoin’s primary and long-lived test network, [calibrationnet](https://docs.filecoin.io/networks/calibration/details/), was updated with the changes in the Skyr upgrade. Members of the community were also invited to participate in these networks, testing their various different node configurations on them, a contribution that was especially valuable for uncovering any platform-specific issues.

In addition to the testing efforts described above, the code itself was subject to multiple auditing efforts. The core team spun up an internal red team audit. Furthermore, two bug bounty programs ran from May 2022 to June 2022 ([Gitcoin](https://gitcoin.co/issue/filecoin-project/community/504/100028707), [Immunefi](https://immunefi.com/) along with the [Filecoin Security bug bounty](https://security.filecoin.io/), open to anyone in the community — thank you to everyone who submitted findings via these programs!

A more formal seven-week audit was conducted by independent contractor [Alex Wade](https://twitter.com/wadeAlexC). This audit covered the entire scope of the FVM M1, and the [audit dashboard can be found here](https://hackmd.io/Z-1BA6MXR3qBluxixvupBw). Potential security risks and minor issues were unearthed (and able to be resolved) thanks to this audit, giving an overall high confidence in the correctness of the changes.

## What’s next?

The FVM core team is now fully focused and committed to working on Milestone 2.1 of the FVM: FEVM - which brings EVM smart contract deployments to the Filecoin network. This much anticipated milestone is possible thanks to the hypervisor-inspired, polyglot design of the FVM.

The prioritization of an EVM-compatible FVM was the result of listening to feedback from the talented web3 developer community. This feedback strongly suggested a preference to be able to leverage and reuse existing Ethereum and Solidity expertise to build on Filecoin. It also signaled a desire to be able to deploy battle-tested, standard EVM contracts like tokens, registries and more to the Filecoin network. Contracts with the capability to serve as building blocks for larger solutions like compute over data, Data DAOs, retrieval markets, smart, automated market deals and boundless other use cases..

Keeping to core open source values to meet developers where they are, this means full compatibility with existing EVM tools such as Hardhat, Foundry, Remix, Truffle and MetaMask is now a top priority for the FVM. An upcoming FVM Foundry Program (F/1) will also be open to applications shortly and will focus on bringing together a community of developers with EVM-compatible FVM use cases and skills, who want to take part in building out the future of FVM - so stay tuned if this is you!

Filecoin Virtual Machine native development will also continue in parallel, with core tooling and infrastructure pieces of the future WASM development experience being built out by the amazing developer teams from the [FVM Foundry Early Builders Program](https://pl-strflt.notion.site/Welcome-to-the-FVM-Foundry-Early-Builders-Program-0c21aa082a3a48b5b9262d122204d141) (FVM Foundry F/0) and funded by an [Open RFP Grant](https://github.com/filecoin-project/devgrants/blob/master/rfps/fvm-open-tools-infra.md). These tools include a high-level Rust SDK, AssemblyScript and TinyGo SDKs, developer toolboxes, testing and debugging tools. The [RFP Grant](https://github.com/filecoin-project/devgrants/blob/master/rfps/fvm-open-tools-infra.md) is also open to those wanting to help build the essential and integral rails of the native FVM - it takes a village!

The next phase of the FVM will also be supported by a dedicated FVM Testnet. Called Wallaby, this testnet will be run by dedicated storage providers and enable test transactions and market deals, smoothing the development path on FVM.

## Acknowledgements

As is evident from this post, a lot of teams worked tirelessly to design, build, audit, test, and deploy the Skyr network upgrade. These include development and testing efforts from teams at [ChainSafe](https://chainsafe.io/), [IPFS Force](https://twitter.com/force_ipfs), [Polyphene](https://polyphene.io/), and [Protocol Labs EngRes](https://www.notion.so/pl-strflt/PL-EngRes-Public-b5086aea86ed4f81bc7d0721c6935e1e); user (large scale) testing from the [SPX group](https://github.com/filecoin-project/lotus/discussions?discussions_q=label%3ASPX), the 1475 development team, and [StorSwift](https://storswift.com/) (among others); everyone that participated in the bug bounties hosted on [Immunefi](https://immunefi.com/) and [Gitcoin](https://gitcoin.co/); [Alex Wade’s](https://twitter.com/wadeAlexC) auditing efforts; key ecosystem tooling and stakeholder support from [Zondax](https://zondax.ch/); and the tireless coordination & planning work of the [Filecoin Foundation](https://fil.org/);. Thanks to all of these individuals and teams, and to the countless passionate members of the community who were part of this milestone in multiple other ways. We hope you’re as excited to unlock full user programmability on Filecoin as we are and will continue on this journey with us!
