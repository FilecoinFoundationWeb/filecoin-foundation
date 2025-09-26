---
aliases:
  - /blog/roadmap-update-february-2020/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-02-19T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In this blog post, we cover recent progress since launching Testnet Phase 1
  and updated roadmap information about Testnet Phase 2 and mainnet launch.
  Please review our Roadmap Update Q4 2019 and Testnet Phase 2 Update (in that
  order) for additional context.
image:
  alt: Filecoin February 2020 Roadmap Update
  url: /uploads/feb2020-roadmap-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/feb2020-roadmap-update-english-social.webp
title: Filecoin roadmap update February 2020
_template: blog_detail
---

In this blog post, we cover recent progress since launching Testnet Phase 1 and updated roadmap information about Testnet Phase 2 and mainnet launch. Please review our [Roadmap Update Q4 2019](https://filecoin.io/blog/roadmap-update-2019-q4/) and [Testnet Phase 2 Update](https://filecoin.io/blog/testnet-phase-2-update/) (in that order) for additional context.

## Where we are now

As a reminder, we [launched Testnet Phase 1](https://filecoin.io/blog/filecoin-testnet-is-live/) on December 11, 2019. As of this writing, the testnet has **3.6PiB+** of proven storage capacity. While we expect the Filecoin mainnet to be several orders of magnitude larger, this is a great start! Let’s keep growing the network!

![Recent screenshot of Filecoin testnet stats dashboard](https://filecoin.io/vintage/images/blog/testnet-stats-feb-2020.jpg)

Since launching Testnet Phase 1 two months ago, we have made significant progress towards Testnet Phase 2. Here are a few highlights:

- **🏗️ Engineering:**
  - During this period, we have invested heavily in testing and optimizations to our codebase.
  - **➕ Upgrading the network.** As bugs and network attacks have been found, we have addressed these issues and rolled out changes through fork upgrades. Thank you to the many community members who have participated in finding bugs and diligently rejoining the network after these forks!
  - **⚖️ Chain stability.** We have improved chain sync speeds and chain stability. The optimizations have notably improved the testnet experience for existing and new network participants.
  - **🌐 Additional implementations.** We recently announced two additional implementations of the Filecoin protocol: [**fuhon**](https://github.com/filecoin-project/cpp-filecoin) (being implemented in C++ by Soramitsu) and [**forest**](https://github.com/chainsafe/forest) (being implemented in Rust by ChainSafe). We’re excited to have [Soramitsu](https://soramitsu.co.jp/) and [ChainSafe](https://chainsafe.io/) as early partners in growing the Filecoin ecosystem!
  - **🔗 Interoperable implementations.** It is an important goal for network security for us to have multiple implementations interoperating on the Filecoin mainnet. **lotus** and **go-filecoin** are nearing full interoperability, and we plan to launch an interop network with both implementations within the next few weeks. A few weeks after we launch our first interop network with **lotus** and **go-filecoin**, the **fuhon** and **forest** implementations will also be ready to interoperate on the network.
  - **🏃‍♀️ PoRep optimizations.** We have made considerable improvements to our _Proof-of-Replication_ (PoRep) implementation. We developed a highly efficient implementation of the Poseidon hash function in Rust, and integrated it into our proofs protocols and libraries. We have also made circuit optimizations in our SNARK proofs yielding **2x** faster proving. Ultimately, these and other optimizations have increased the speed and performance of our SDR PoRep implementation.
- **🍥 Protocol:**
  - **🧬 Executable actor spec.** We implemented a fully executable specification for the Filecoin protocol actors, written in Go (the executable spec lives in the [**specs-actors**](https://github.com/filecoin-project/specs-actors) repo). In addition to implementing this executable spec, we have extensively tested the libraries to exercise actor functionality and verify correctness. **lotus** and **go-filecoin** also now directly integrate the **specs-actors** library, greatly increasing our confidence in the correctness and security of the implementation actors, which are security-critical protocol components.
  - **📈 Cryptoecon.** We have made significant progress on cryptoeconomic constructions, narrowing down mechanisms and parameters that will align the network for the long-term. The economic levers under consideration are outlined in the protocol spec under [Cryptoecon Placeholders](https://filecoin-project.github.io/specs/#algorithms__cryptoecon). We are running extensive simulations to validate and finalize the constructions.
  - **🛡️ Protocol security audit.** The Filecoin Research team is deep into a protocol security audit, taking a very close look at Filecoin proofs, consensus, market design, and more. We are committed to launching a secure network. We will address all major issues raised through this audit before we launch Testnet Phase 2.
- **👨‍👩‍👧‍👦 Ecosystem Highlights:**
  - **🌟 Textile.** The [Textile](https://textile.io/) team recently announced several upcoming tools to make it “as easy as 123” to develop applications backed by the Filecoin network. We anticipate this work will lower the barrier to entry for new developers, increasing the variety and quality of applications that will exist on the network at launch and beyond.
  - **🔥 Terminal.co.** Terminal launched recently to make it easy to develop and host websites on IPFS. The team [said they have Filecoin features in their roadmap](https://twitter.com/terminaldotco/status/1227770882904424449). We look forward to using Terminal to host IPFS websites backed up on Filecoin!
  - **🛳️ filscan.io.** Check out [Filscan](https://filscan.io/), a block explorer for the Filecoin testnet! You can use Filscan to observe the progression of the chain, see the contents of each block, see messages and number of blocks mined per miner, and more! It’s a great way to explore activity on the Filecoin network. This project was supported through a grant from the Filecoin Dev Grants program in Wave 1 – we’re excited to see such a useful community resource being actively maintained and used on the testnet.
  - **😎 Ledger Filecoin app.** This week, the [Zondax](https://zondax.ch/) team published a [repo containing a work-in-progress Ledger Filecoin app](https://github.com/Zondax/ledger-filecoin). In addition, Open Work Labs is building a non-custodial web wallet that integrates this Ledger Filecoin library, and [posted a screenshot](https://twitter.com/openworklabs/status/1225882262291378176) showing a local version of Filecoin on Ledger. While this work is still very much in progress, we’re excited for what lies ahead – and hopefully, to see Filecoin on Ledger soon!
  - **❄️ Trustwallet.** [Trustwallet has merged support for Filecoin!](https://github.com/trustwallet/wallet-core/pull/811) The app will be able to support Filecoin tokens at mainnet launch.
  - **💾 Moar miners!** This week, we saw several mining teams post pictures and videos of their mining setups in advance of the Filecoin mainnet launch. Check out some of the setups below! ![Filecoin community mining rigs](https://filecoin.io/vintage/images/blog/mining-rigs.jpg)
  - **👟 Dev Grants.** We recently closed Wave 2 of [Filecoin Dev Grants](https://filecoin.io/grants/). Thank you so much for the thoughtful and creative proposals from community members! We’ll be announcing grant recipients very soon. If you missed this wave, don’t worry – Wave 3 is currently open and we are accepting applications until **March 31, 2020**. We look forward to seeing your proposals!

## Testnet Phase 2: Rescheduling

As a reminder, our next major milestones are:

- **Testnet Phase 2:** Our second phase of testnet will launch with _multiple secure, interoperable implementations_. From our [last roadmap update](https://filecoin.io/blog/roadmap-update-2019-q4/), “Testnet Phase 2 will mark a feature freeze and be a **minimum two-month period** of formal testing, validation, and security audits. As a reminder, our most critical requirement for mainnet launch is that Filecoin is secure; we will not launch an insecure network. If we discover any critical security issues, we may extend this phase.” We will also launch a number of **ecosystem initiatives** during Testnet Phase 2, including the next phase of our trusted setup ceremony.
- **Mainnet launch:** We will have a one-month launch window to complete launch preparations and launch the Filecoin mainnet.

Our team is firing on all cylinders as we gear up for Testnet Phase 2 launch. While we are working to launch Testnet Phase 2 and mainnet as soon as possible, **we have the responsibility to ensure that Filecoin will be secure at launch.** Our teams need some additional time to complete protocol development, cross-implementation interop, internal protocol security audit, and refine our cryptoeconomic constructions.

Additionally, it has come to our attention that many of our communities in China have continued to be affected by the coronavirus outbreak. Some of our Chinese community members have directly asked us to wait to launch Testnet Phase 2 for two or three weeks, until they can safely return to work. We hear you, and your safety is our priority!

We will be delaying Testnet Phase 2 by **approximately 6 weeks** to allow enough time for final protocol convergence and feature freeze. To see the latest timing information, please visit our public [Filecoin Roadmap Gantt chart](https://app.instagantt.com/shared/s/1152992274307505/latest). As always, these dates are **best estimates**, and could potentially shift. We are doing our best to provide accurate timing information, but please understand that this information is not static – it will change. We hope that this 6-week launch delay will afford enough time for the situation to improve in China, and for all of our global communities to participate in the network without compromising their safety.

## What’s next

Our current priorities between now and Testnet Phase 2 are:

- **Launching our first interop network.** As we have mentioned above, launching the network with multiple secure implementations is an important part of our network security strategy. In advance of Testnet Phase 2, we will launch an interop network starting with our two internal implementations, [**lotus**](https://github.com/filecoin-project/lotus) and [**go-filecoin**](https://github.com/filecoin-project/go-filecoin). A few weeks later, [**forest**](https://github.com/chainsafe/forest) and [**fuhon**](https://github.com/filecoin-project/cpp-filecoin) will also interoperate on the testnet. Launching our first interop network will require resetting the testnet with updated versions of both **lotus** and **go-filecoin**. After this network reset, anyone should be able to run either implementation to participate in the Filecoin testnet. This is a huge milestone, and we anticipate launching the interop network within the next few weeks.
- **Protocol security audit.** Before launching Testnet Phase 2, we will complete our internal protocol security audit and address all resulting issues. We anticipate the protocol security audit and resolutions to continue for an additional month.

We’re racing as fast as we can to launch the Filecoin network securely. Moments like these remind us of the bigger picture: security is not just a feature of our protocol; **we care deeply about the security of the people who make this ecosystem what it is.** We are so grateful for our community’s continued support, and are excited to build this ecosystem with you.

Onwards!
