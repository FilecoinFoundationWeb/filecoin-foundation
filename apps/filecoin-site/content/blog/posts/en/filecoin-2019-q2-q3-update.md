---
aliases:
  - /blog/update-2019-q2-q3/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-09-24T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The most important news in this update is that we’re getting very close to
  launching the network. We are delayed from our prior estimates, but – as you
  will read below – we have made tremendous progress on all fronts!
image:
  alt: Filecoin 2019 Q2 & Q3 Update
  url: /uploads/q2q3-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: content/blog/posts/a-look-back-at-filecoin-in-2020.en.md
related_article_2: content/blog/posts/filecoin-roadmap-update-august-2020.en.md
related_article_3: content/blog/posts/filecoin-dev-grants-wave-3-new-rfps-wave-1-2.en.md
share_image: /uploads/q2q3-update-english-social.webp
title: >-
  Filecoin 2019 Q2 & Q3 Update: Testnet & Mainnet Launches, Highlights from
  2019, Roadmap Update, and More
_template: blog_detail
---

## 1. Launches: Testnet on Dec 11, Mainnet in 2020 Q1

The most important news in this update is that we’re getting very close to launching the network. We are delayed from our prior estimates, but – as you will read below – we have made tremendous progress on all fronts! We are close enough that we can decide on the following launch windows:

- Alphanet: Sep 25, 2019
- Testnet: Dec 11, 2019
- Mainnet: March 2020

Note: of course, these windows are best estimates, and could potentially slide. Our community has overwhelmingly requested more frequent, “best estimate” updates, even if they may end up sliding, rather than keeping dates artificially conservative and far out.

## 2. TL;DR: Highlights from 2019

We tend to post very detailed project updates every 2 quarters (see our [Q1/2 2018 update](https://filecoin.io/blog/update-2018-q1-q2/) and [Q3/4 2018 update](https://filecoin.io/blog/update-2018-q3-q4/) as examples). While some folks like diving into the details, others just want a quick summary of the most important bits to pay attention to in the project. For this reason, we’re piloting a TL;DR (too long; didn’t read) section in this update.

Here are our key highlights from 2019:

- 🚀 **New launch dates.** We are launching our testnet on December 11 this year, followed by a mainnet launch in Q1 2020. You can read more about this in our [roadmap update](https://filecoin.io/blog/update-2019-q2-q3/#3-roadmap-update).
- 🌐 **Launching the devnets.** Earlier this year, we [launched development networks](https://github.com/filecoin-project/go-filecoin/wiki/Devnets) for community members to start testing the Filecoin network and protocol. On our network statistics dashboard, we have seen a peak of **500 nodes** connected to our devnets and **17PB of pledged storage capacity**! This is huge for a very early, experimental network. This network gets more and more stable every day – if you’re interested in connecting to the network, please follow [this guide](https://github.com/filecoin-project/go-filecoin/wiki/Devnets).
- 📖 **Opening the Filecoin codebase.** After several months in closed development, we [opened the Filecoin codebase](https://filecoin.io/blog/opening-filecoin-project-repos/) earlier this year. Since then, we have seen many community contributions, and the number of daily active contributors keeps growing.
- 🛫 **Several go-filecoin releases at a steady cadence.** After launching our first devnets, we began a more formal [release process](https://github.com/filecoin-project/go-filecoin/releases) for go-filecoin. That process has resulted in 4 major releases (0.1.4, 0.2.4, 0.3.2, 0.4.6), each with major features, refactors, and UX improvements. See the [CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md) for more details on each release. We’re looking to get more community involvement in the testing phase for future releases. If you’d like to help us out, please follow along [here](https://github.com/filecoin-project/go-filecoin/wiki/Devnets#staging-for-infra-and-pre-release-testing)! [_Read more below…_](https://filecoin.io/blog/update-2019-q2-q3/#4-1-dev-update-go-filecoin-https-github-com-filecoin-project-go-filecoin)
- 💯 **Expected consensus simulations and validation.** Filecoin uses a novel consensus protocol called Expected Consensus. Months of rigorous security analysis and simulation modeling have gone into validating and improving our construction. You can read the latest construction in our [Expected Consensus spec](https://github.com/filecoin-project/consensus/tree/master/specs). [_Read more below…_](https://filecoin.io/blog/update-2019-q2-q3/#5-research-update)
- 👩‍💻 **PoRep optimizations.** Over the last two quarters, we have made many optimizations in our _Proof-of-Replication_ construction and implementation, including [batched SNARK verification techniques (ZEXE)](https://github.com/filecoin-project/rust-fil-proofs/pull/835), [SNARK proving on GPUs](https://github.com/filecoin-project/bellman/pull/4), and [Merkle tree amortization](https://github.com/filecoin-project/rust-fil-proofs/pull/864). If you’d like to contribute your own optimizations to PoRep, please [play the replication game](https://github.com/filecoin-project/replication-game) or contribute to [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs)! [_Read more below…_](https://filecoin.io/blog/update-2019-q2-q3/#4-2-dev-update-rust-fil-proofs-https-github-com-filecoin-project-rust-fil-proofs)
- ❤️ **Filecoin Development Grants.** We recently launched the [Filecoin Grants program](https://filecoin.io/grants)! We have RFPs for dev projects that we’d love community members to tackle as well as an open grant for any community-proposed ideas. We’re excited to fund tons of excellent community work in the Filecoin ecosystem. We hope you’ll apply! [_Read more below…_](https://filecoin.io/blog/update-2019-q2-q3/#6-community-update)
- 🌎 **Ramping up Filecoin Community.** Earlier this year, we held a [mining community call](https://github.com/filecoin-project/community/blob/master/community-calls/mining-calls/mining-calls.md) which had 600+ attendees, met with some of our communities in China, launched our official WeChat account, spoke at a decentralized storage summit attended by 1000s, and continue to have lively community conversation on our [chat](https://github.com/filecoin-project/community/#chat) and [discussion forum](https://github.com/filecoin-project/community/discussions). We also recently launched the [Filecoin Shipyard](https://github.com/filecoin-shipyard), a space for ecosystem projects – reach out to us on the chat/forum if you’d like your project to be in the Shipyard! [_Read more below…_](https://filecoin.io/blog/update-2019-q2-q3/#6-community-update)
- 🦋 **Multiple implementations in development.** Teams are now building additional implementations of the Filecoin protocol, and we’re looking for more. If you are interested in building a Filecoin implementation, please check out our Dev Grants repo [here](https://github.com/filecoin-project/devgrants/issues/43).

We’ve prepared a much more detailed update below, so please read on if you’d like to learn more about any of the above.

## 3. Roadmap Update

In our [last major update](https://filecoin.io/blog/update-2018-q3-q4/#2-filecoin-project-roadmap-update), we announced some revisions to our [public roadmap](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/). We have made another revision to the roadmap to include recent progress made and our updated launch dates.

So far in 2019, we shipped the following 🎉🎉🎉:

- We **opened up** the go-filecoin codebase in 2019 Q1
- We **launched the first public Filecoin devnets** in 2019 Q1
- We have **multiple implementations in development** as of September 2019

Since then, we have been heads down, focusing on:

- Refining our protocol design
- Finalizing our cryptographic proofs constructions
- Launching long-running test networks
- Growing our community

It has been a big year for the team. (There’s a reason folks say building a blockchain is like building a software rocket!) After several months of research and engineering, we are closing in on a protocol construction that meets our security, scalability, and performance requirements and is being actively implemented by our development teams.

As we move closer to launch, we have refined our milestones and have some exciting dates to announce:

- We are launching an alphanet (a long-running Filecoin network) on **September 25, 2019**
- We are launching our testnet on **December 11, 2019**
- We are not yet announcing a mainnet launch date, but we expect it to be 1-2 quarters after our testnet launch. We will post the exact launch date in Q1 2020

We have adjusted our milestones as follows:

| Milestone                                    | Old ETA   | New ETA            |
| -------------------------------------------- | --------- | ------------------ |
| Launching a long-running alphanet:           | N/A       | September 25, 2019 |
| Launching the first public Filecoin testnet: | 2019 Q2   | December 11, 2019  |
| Testing with sets of large scale miners:     | 2019 Q2   | 2019 Q4            |
| Security Review & Audit:                     | 2019 Q2/3 | 2019 Q4            |
| go-filecoin v1.0.0 feature freeze:           | 2019 Q2/3 | 2020 Q1            |
| Launching the Filecoin mainnet:              | 2019 Q3/4 | 2020 Q1            |

In October 2019, we will be publishing the link to a development roadmap on our blog. This document will contain the scope of work remaining for testnet and mainnet launch so that the community can follow along with our progress towards these goals. As noted above, we have also updated the [Roadmap document](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/) according to these new milestone estimates.

Please recall that all our estimates and timelines are optimistic and subject to change. We aim to provide frequent updates about our progress on our blog. By far, the best way to stay on top of project activity is to follow our GitHub repos directly.

## 4. Development Update

So far in 2019, we have launched 4 major [go-filecoin releases](https://github.com/filecoin-project/go-filecoin/releases) and 6 major [rust-fil-proofs releases](https://github.com/filecoin-project/rust-fil-proofs/releases). We also launched and are maintaining community devnets and are soon to launch an alphanet – our last interim milestone before our fully public testnet! You can follow the [go-filecoin CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md) for release notes and more granular development updates. Our [public development roadmap](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.ao6yxxg3c0tn) has also been updated to include development scope for testnet and mainnet launch, and progress towards those milestones.

### 4.1 Dev update [go-filecoin](https://github.com/filecoin-project/go-filecoin)

This year, we have been focused on making **significant development progress** and **engaging the Filecoin community**.

- **🏇 Storage market protocol implementation.** Miners are asked to submit PoSt proofs on a periodic basis to ensure that they are continuing to store their clients’ data correctly. If they fault – i.e. if they do not submit the required information on time – they are penalized. Fault handling and penalties are crucial to ensure that verifiable storage is indeed a property of the Filecoin system. We have implemented fault handling and penalties for late or incorrect PoSt submissions, a major piece of the storage market protocol.
- **🤝 Deal dispute resolution.** We use payment channels for (storage and retrieval) clients to pay (storage and retrieval) miners. In cases when a storage miner faults on a storage deal, clients can file a “claim” that the deal was broken. If the protocol finds that the deal was indeed broken, the payment channel will be cancelled and a portion of the miners’ funds will be slashed. This dispute resolution mechanism uses piece inclusion proofs to show whether or not a particular piece of data is stored on a miner’s machine. We implemented deal dispute resolution and the ability to cancel payment channels using piece inclusion proofs (PIPs) (see [rust-fil-proofs update](https://filecoin.io/blog/update-2019-q2-q3/#4-2-dev-update-rust-fil-proofs-https-github-com-filecoin-project-rust-fil-proofs) for more on PIPs).
- **🔗 _Proof-of-Spacetime_ integration.** We have integrated the _Proof-of-Spacetime_ (PoSt) proving process into the go-filecoin codebase. Miners now regularly compute proofs of continued storage and post these proofs on-chain. Once the PoSt construction has finalized, integrating the final PoSt will be very straightforward thanks to this completed integration work.
- **🌳 Network upgrades.** In preparation for our long-running alphanet and testnet, we have been laying the groundwork for seamless network upgrades. Some of the implementation work that will enable this includes implementing the ability to name networks and have nodes check network names, as well as indicate protocol versions.
- **🍄 Datastore migrations.** In addition to sealed client data, Filecoin nodes also store other data on-disk such as configuration, blockchain blocks, deal state, and encryption keys. As development progresses, we need a way to safely change the type and schema of this data. We have designed and implemented filesystem repo migrations so that nodes can seamlessly update when running in production.
- **⌛ Faster chain syncing.** Faster chain sync is an important software UX feature for Filecoin. Without optimized chain syncing software, it can take days to retrieve a chain that is just 1 month old. Our team made significant progress against this goal, achieving much faster chain syncing via [Graphsync’s](https://github.com/ipfs/go-graphsync) IPLD DAG-traversal protocol.
- **🖇️ Block headers vs blocks.** We now have block headers that point to message and message receipt tries, instead of storing all messages and receipts directly in blocks. This drastically decreases block size, and thus increases block propagation speed.
- **✉️ More reliable messages.** We have implemented features such as an outbound message queue and message expiration to make message sending and nonce generation much more reliable.
- **📬 Improvements to message pools.** Our message pools now have implemented validation rules, message limits, and perform nonce tracking to make sure that messages aren’t replayed.
- **💠 Architecture and modularity.** We have made significant improvements in internal architecture, modularity, and testability, with many more improvements coming! Our goal is to make the codebase as modular as possible so that it is easier to upgrade components and for community members to make contributions.
- **📈 Filecoin Automation & System Toolkit (FAST).** FAST is a tool we built for automated integration and system tests. This used to be a huge pain point during release testing, and has improved significantly since the introduction of FAST. Using FAST, we’ve developed localnet, a new tool to quickly and easily set up a local network for testing, debugging, development, and more.
- **🏡 Open-source!** We opened the [go-filecoin codebase](https://github.com/filecoin-project/go-filecoin) in February 2019. Since then, we have begun making our [project management tools](https://app.zenhub.com/workspaces/filecoin-5ab0036a12f8e82ae4ed60f0/board?repos=113219518&showPipelineDescriptions=false) and [development design docs](https://github.com/filecoin-project/designdocs) default public. Over the next few months, we will continue this shift to better support and grow our open-source community.

### 4.2 Dev update / [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs)

- **👪 Multiple sector sizes.** A sector is a contiguous array of bytes that a miner assembles from storage deal data and seals, and on which the protocol performs _Proofs-of-Spacetime_. In other words, a sector is the unit of data that enables a miner to start earning Filecoin. Sectors could previously only be of one size across the entire network. Now, rust-fil-proofs supports many different sector sizes, allowing miners more flexibility in how they configure their storage operations.
- **⚽ Piece inclusion proofs.** Piece inclusion proofs (PIPs) prove that a piece of data specified in a storage deal is stored in a particular sector (whose commitment is on-chain). The first implementation of PIPs has landed in rust-fil-proofs and has been integrated into go-filecoin.
- **🧠 Reduced memory requirements.** A miner must seal a sector in order to start proving that they are storing the data correctly. The sealing process must be computationally intensive in order to ward off a class of attacks that would reduce protocol security. In order to meet these security requirements, sealing previously consumed very large amounts of memory – i.e. several multiples of a sector size! Recent optimizations have decreased memory requirements for sealing by 8x, so that the memory required (in GiB) is the same as the miner’s sector size. The punchline: this optimization will significantly reduce the cost of hardware for all miners!
- **🔭 Proofs meta-modeling.** As the complexity and scale of our [system](https://github.com/filecoin-project/specs/) has grown significantly, it has become more difficult to reason about different protocol parameters, how they relate to one another, and how they ultimately affect security, scalability and performance requirements of the system. We created a meta-modeling language and backend called [Orient](https://github.com/filecoin-project/orient/) to model all of the parameters and constraints of our evolving system. Our aim is to use this system to help us think better, using computers, as we choose parameters that optimize for system-wide requirements.
- **🖥️ Nearing final hardware requirements.** Our proofs optimizations are still ongoing, but are close to being finalized. Optimizations such as the memory requirement reduction are great news for miners, and are generally worth the wait! We are honing in on our final hardware requirements for miners, and will publish them on this blog as soon as possible. Please don’t purchase any mining hardware until we share these specifications.

## 5. Research Update

- **🎪 Improvements in expected consensus construction.** Over the last several months, thorough security analysis of Expected Consensus (EC) has led to major improvements in the construction and a standalone [specification](https://github.com/filecoin-project/consensus/tree/master/specs). During testnet, we will tune different network-related EC parameters. In addition:
  - We created [simulations](https://github.com/filecoin-project/consensus/tree/master/code/other-sims) to confirm various models for EC adversarial power over chain quality and convergence.
  - While finality analysis is ongoing, our calculations show that to achieve a level of finality on Filecoin similar to the recommended 6-block (1hr) confirmation time for Bitcoin, a user only has to wait for 2 minutes, a huge improvement.
  - We specified the fork choice rule [weighting function](https://github.com/filecoin-project/consensus/issues/71), with final parameters being settled in testnet.
  - EC has improved security over traditional Proof-of-Stake consensus protocols, specifically through limiting adversarial power for nothing-at-stake attacks and through increased resistance to long-range attacks. Paper forthcoming.
- **👩‍💻 _Proof-of-Replication_ optimizations.** There are four categories of optimizations we have been exploring for our _Proof-of-Replication_ (PoRep) construction, and we have made significant strides in all of them: (1) improving SNARK proving time and efficiency using GPUs, (2) decreasing SNARK proof sizes via batched verification (ZEXE), (3) reducing replication time and memory consumption via many engineering optimizations, and (4) reducing proof size via construction-level optimizations (e.g. hybrid and amortized Merkle trees). We are nearing finalization with many of these optimizations, and are shooting to have a final PoRep construction within the next 1-2 months.
- **🔮 _Proof-of-Spacetime_ construction.** We have refined our chosen _Proof-of-Spacetime_ (PoSt) construction, which is called rational PoSt. We are currently performing security analyses to ensure that our rational PoSt construction meets the security requirements of the system.
- **🌌 Papers and talks.** See the [Public Talks & Media section](https://filecoin.io/blog/update-2019-q2-q3/#8-public-talks-media) below.

## 6. Community Update

2019 has been a very big year for Filecoin community! Here are a few of our major community initiatives, listed in chronological order. Note that this list does not include all of our talks and presentations (listed instead in our [Public Talks & Media section](https://filecoin.io/blog/update-2019-q2-q3/#8-public-talks-media)).

- **🌐 Launching the devnets.** Earlier this year, we [launched development networks](https://github.com/filecoin-project/go-filecoin/wiki/Devnets) for community members to start testing the Filecoin network and protocol. On our network statistics dashboard, we have seen a peak of 500 nodes connected to our devnets and 17PB of pledged storage capacity! This is huge for a very early, experimental network. This network gets more and more stable every day – if you’re interested in connecting to the network, please follow [this guide](https://github.com/filecoin-project/go-filecoin/wiki/Devnets).
- **📖 Opening the Filecoin codebase.** After several months in closed development, we [opened the Filecoin codebase](https://filecoin.io/blog/opening-filecoin-project-repos/) earlier this year. Since then, we have seen many community contributions, and the number of daily active contributors keeps growing.
- **💬 Created community forums and chat.** Our community members are having conversations about a wide range of Filecoin topics on our [discussion forum](https://discuss.filecoin.io/) and [community chat](https://github.com/filecoin-project/community#chat). There are \~900 community members across these different communication channels. A big thank you to the many community members who are answering each others’ complex questions!
- **☎️ Hosted our first mining community call.** In May 2019, we hosted our first-ever [Mining Community Call](https://www.youtube.com/watch?v=bpKKgkPmA_w). We received over 1,000 signups and approximately 600 attendees joined from over 55 countries. In the call, we provided a high-level overview of the Filecoin project, including Filecoin’s value proposition, early use cases, roadmap and more. We also provided a short research update and a mining update on how to set up mining and get involved. We also hosted a real-time Q&A on the call where attendees submitted over 180 questions.
- **🗞️ Launched Filecoin News.** In response to the community’s request for more frequent updates, we launched a monthly newsletter called Filecoin News. So far, we have published 3 issues of this newsletter. We hear your requests for more updates, and are working towards providing them more frequently. In the meantime, [subscribe to Filecoin News](https://filecoin.io/#community)!
- **✈️ Filecoin team China trip.** In July 2019, Filecoin team members visited China to attend community events and meet with community members in Shenzhen and Shanghai. We were humbled to have the opportunity to visit many community members in China, learn about their needs, get feedback on the devnets, and more. Over 1,200 community members attended the set of conferences and meetups, and \~30 volunteer community members presented about projects they are working on within the Filecoin and IPFS ecosystems. We do not currently have any future community-specific visits planned, but we will post on our [community repo](https://github.com/filecoin-project/community) if that changes!
- **🚢 Filecoin Shipyard.** The [Filecoin Shipyard](https://github.com/filecoin-shipyard) GitHub org houses projects that help grow the Filecoin ecosystem. Have an idea for something that should be featured in the Shipyard? Post directly on our [discussion forum](https://github.com/orgs/filecoin-project/projects?query=is%3Aopen) and a moderator will set you up!
- **❤️ Filecoin Dev Grants.** We recently launched the [Filecoin Development Grants program](https://filecoin.io/grants/)! Every quarter, we will award grants to groups/individuals who have submitted proposals for development work that will help grow the Filecoin ecosystem. We have scoped RFPs and an open grant category. Our next grant deadline is September 30! [Apply today](https://github.com/filecoin-project/devgrants#-how-to-apply)!
- **🤝 Collaborations:** We have a few ongoing collaborations that we are very excited to support.
  - **VDF Research with the Ethereum Foundation.** As we announced in [this blog post](https://filecoin.io/blog/collaboration-on-vdfs/), we are working with the Ethereum Foundation to co-fund research into hardware acceleration for VDFs. While we do not currently use VDFs in any of our security-critical applications for Filecoin, we may decide to use VDFs in the future. We would like to ensure, for our sake and for the entire industry, that VDFs are well-understood and secure.
  - **Coinlist SNARK Challenge.** As we announced [here](https://filecoin.io/blog/announcing-the-snark-challenge/), we were proud to sponsor the Coinlist SNARK Challenge, which recently ended. The overall winner of the Challenge sped up the Groth16 SNARK prover by 3.6x and open-sourced his solution (visible [here](https://github.com/CodaProtocol/gpu-groth16-prover-3x)).
  - **Stanford Blockchain Center.** We are proud to be ongoing partners and collaborators with the Stanford Blockchain Center, including as sponsors of the [Stanford Blockchain Conference](https://cbr.stanford.edu/sbc19/), which took place earlier this year.
  - We can’t wait to begin many more collaborations through Filecoin Research, the Filecoin Dev Grants Program, and Filecoin Shipyard!

## 7. Policy Update

- **Supporting the best thinkers and advocates in the dweb space**. We continue to work alongside the Blockchain Association and Coin Center, both of whom are leading the charge to educate policymakers and promote sound crypto policy in the United States. We are excited about Coin Center’s work educating policymakers about [the key differentiating traits of open crypto networks](https://coincenter.org/entry/the-differences-between-bitcoin-and-libra-should-matter-to-policymakers), as well as the Blockchain Association’s [sharp analysis](https://medium.com/@BlockchainAssoc/will-the-sec-kik-case-clarify-the-law-f63ad7277724) of industry-affecting legal cases and their discussion for regulators on [the benefits of open source software](https://medium.com/@BlockchainAssoc/open-blockchain-networks-are-incredibly-transparent-and-its-good-public-policy-to-support-them-be1288a74ecd).
- **Helping others understand Filecoin’s potential**. We are engaging with broader industry groups to bring dweb concepts and culture to a wider audience. Most recently, we’ve become startup members of the [Internet Infrastructure Coalition](https://www.i2coalition.com/) and the [Consumer Technology Association](https://www.cta.tech/).

## 8. Public Talks & Media

- **Talks:** _videos/posts linked if available_
  - 2019-02-03. [VDFs and Filecoin](https://www.youtube.com/watch?v=GZZ2G9bPXsM&list=PLaM7G4Llrb7y075mVXGmSABDP9Nb_PsBq) (Jeromy Johnson)
  - 2019-02-09. [Consensus Day 1 Talks](https://www.youtube.com/playlist?list=PLhuBigpl7lqtG6LgQ0FiiR4Pbrph9nocn) (Juan Benet, Henri Stern, Brian Vohaska, Evan Miyazono)
  - 2019-02-12. Filecoin: Open Problems Building Storage-based Consensus Systems (Henri Stern)
  - 2019-07-11. Verifiable Resource Commitments and Hybrid Models for Consensus (Henri Stern)
  - 2019-07-19. [zkSNARKs and the beauty of math](https://www.zeroknowledge.fm/86) (Ariel Gabizon)
  - 2019-08-21. Building Web3 (Juan Benet)
- **Research Papers:** Members of our team have published and presented the following papers over the last few months:
  - Gabizon, A. (2019). AuroraLight: Improved prover efficiency and SRS size in a Sonic-like system. Retrieved from [https://eprint.iacr.org/2019/601.pdf](https://eprint.iacr.org/2019/601.pdf "https://eprint.iacr.org/2019/601.pdf").
  - Gabizon, Ariel, Zachary J Williamson, and Oana Ciobotaru. (2019). “PLONK: Permutations over Lagrange-Bases for Oecumenical Noninteractive Arguments of Knowledge.” Retrieved from [https://eprint.iacr.org/2019/953.pdf](https://eprint.iacr.org/2019/953.pdf "https://eprint.iacr.org/2019/953.pdf").
  - Goldfeder, S., & Nizzardo, L. (2019). Composing hash functions for mining. IEEE Security and Privacy on the Blockchain (IEEE S&B). Stockholm, Sweden.
  - Olivier, B., Kolad, B., Gailly, N., Liochon, N. (2019). Handel: Practical Multi-Signature Aggregation for Large Byzantine Committees. Retrieved from [https://arxiv.org/abs/1906.05132](https://arxiv.org/abs/1906.05132 "https://arxiv.org/abs/1906.05132").
  - Ransil, Alan, and Chhi’mèd Künzang. 2019. “A Dual-Process Approach for Automated Knowledge Creation.” In Metascience 2019, \[poster\]. Stanford, CA, USA.

## 9. libp2p Update for Filecoin

Filecoin is built on top of and depends heavily on components of [libp2p](https://libp2p.io/), a project also led by Protocol Labs. The libp2p Project has had an incredible 2019, with steady technical progress, rising adoption and a growing community. Here is a compressed update from libp2p specifically tuned for Filecoin.

- **What is libp2p?** A modular peer-to-peer networking library. Check out [this website](https://libp2p.io/) or [this video](https://www.youtube.com/watch?v=CRe_oDtfRLw&index=2&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s), or [this one](https://www.youtube.com/watch?v=xqVmEzsin3Y).
- **Libp2p Roadmap and Vision.** Libp2p defined their 2019 [roadmap](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit?ts=5bff9514#), focusing on priorities to harden and evolve the stack forward.
- **🤝 Ethereum adoption of libp2p.** Probably the most significant news on the libp2p front is the official adoption of libp2p as the networking layer for the [Ethereum 2.0 Network Specification](https://github.com/ethereum/eth2.0-specs/pull/1328). Ethereum 2.0 is the next generation of Ethereum. Meeting the requirements of such a large scale blockchain will benefit Filecoin by making libp2p more stable, more scalable, and leading to new feature development.
- **🔗 Proliferation of new interoperable implementations of libp2p.** In the last year, we have seen several new interoperable implementations for libp2p arise in a variety of languages: C++, [Nim](https://github.com/status-im/nim-libp2p), [Kotlin (JVM)](https://github.com/libp2p/jvm-libp2p), and [Python](https://github.com/libp2p/py-libp2p). This is in addition to our Protocol Labs-maintained implementations in [Go](https://github.com/libp2p/go-libp2p) and [JS](https://github.com/libp2p/js-libp2p).
- **📜 Vastly improved specs.** We have undertaken a massive endeavor over the last few months to revamp and complete our [libp2p protocol specifications](https://github.com/libp2p/specs). We introduced categorization for different stages of a spec’s lifecycle, and a documented process for review and improvement. We have now covered around 70% of the existing protocol in our new specs, and are aiming to reach 100% within the next quarter!
- **❤️ Grants and Bounties Program.** The libp2p project has launched [a development grants program](https://github.com/libp2p/devgrants). The initial kick off for the program has already led to several significant features being implemented by the community, including [Noise handshakes in Go](https://github.com/libp2p/devgrants/blob/master/004-noise-handshake-implementations.md) and [Lua Wireshark dissectors](https://github.com/ethberlinzwei/Bounties/issues/20). The bounties program is a great way to get involved in the libp2p project. [Check it out on GitHub](https://github.com/libp2p/devgrants)!
- **⛓️ AutoRelay.** In 2019, we added AutoRelay, a feature that ensures that any user can launch a Filecoin node easily without having to open ports on their router or do anything technically complicated. Relay nodes will handle the relaying of traffic. Coming soon is an automatic upgrade to direct connections from relayed connections.
- **📣 Conferences and Presentations.** Members of the libp2p Core team have presented at a variety of conferences this year, including [EthCC 2](https://www.youtube.com/watch?v=yPOROKQRFPQ), Web3 2019, EthBerlin Zwei and others.

## 10. IPFS Update for Filecoin

Filecoin is built on top of and depends heavily on components of [IPFS](https://ipfs.tech/), a project also led by Protocol Labs. Many users of IPFS aim to also become users of Filecoin, so IPFS capabilities and use cases greatly inform Filecoin. Here is a compressed update from IPFS tuned specifically for Filecoin.

- **What is IPFS?** A content-addressed hypermedia distribution protocol. Check out [this website](https://ipfs.tech/).
- **IPFS Roadmap and 2019 Priorities.** The IPFS Project Mission, Vision, and 2019 Roadmap were presented in [this blog post](https://blog.ipfs.tech/78-ipfs-2019-roadmap/) to focus our work for the year on high-impact improvements to the IPFS network.
- **Held the first IPFS Camp.** 160 community members from 22 countries gathered for the first ever IPFS Camp in June in Barcelona. Content included [deep dives](https://blog.ipfs.tech/2019-08-12-great-calamity-circumvention-assembly-at-ipfs-camp/) and poster sessions on important components of the IPFS stack, [lightning talks](https://blog.ipfs.tech/2019-07-22-ipfs-camp-content-first-batch/) from projects throughout the IPFS community, and [workshops and courses](https://blog.ipfs.tech/2019-09-18-ipfs-camp-course-videos/) to teach attendees about how IPFS work. Check out the [recap](https://blog.ipfs.tech/2019-07-08-ipfs-camp-recap/) to learn more or go watch the [recordings on YouTube](https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew/featured)!
- **Created ProtoSchool.** [ProtoSchool](https://blog.ipfs.tech/63-ipfs-weekly-25/) is an educational program teaching decentralized web protocols and tools through online tutorials and local chapter events to folks across the web. So far there are over 20 ProtoSchool chapters around the world and a growing library of workshops and tools.
- **🛳 Lots of releases across the ecosystem.**
  - Check out the links for summaries of what’s new and the full changelogs!
  - **go-ipfs** had [4 releases](https://github.com/ipfs/go-ipfs/releases) including [v0.4.19](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.19), [v0.4.20](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.20), [v0.4.21](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.21), and [v0.4.22](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.22).
  - Go-ipfs also [revamped its release process](https://blog.ipfs.tech/2019-08-14-ipfs-release-process/) with a regular 6 week cadence and extensive testing process to ensure we ship higher-fidelity features and faster patches as needed.
  - **js-ipfs** had [13 releases](https://github.com/ipfs/js-ipfs/releases), including: [v0.35.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.35.0), [v0.36.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.36.0), [v0.37.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.37.0).
  - **ipfs-cluster** had [4 releases](https://github.com/ipfs/ipfs-cluster/releases/), including: [v0.9.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.9.0), [v0.10.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.10.0), [v0.11.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.11.0).
  - **ipfs-companion** had [28 releases](https://github.com/ipfs-shipyard/ipfs-companion/releases), including: [v2.8.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.0), [v2.8.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1), [v2.8.2](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.2), [v2.8.3](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.3), and [v2.8.4](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.4).
  - **ipfs-desktop** had [7 releases](https://github.com/ipfs-shipyard/ipfs-desktop/releases), including: [v0.7.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.7.0), [v0.8.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.8.0), [v0.9.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0).
- **✨ Awesome feature highlights.**
  - **go-ipfs** got file streaming for efficient large file handling; huge perf/reliability improvements to bitswap, pubsub, datastore, and the DHT; better connection management and memory allocation; TLS1.3 and OpenSSL support; and base32 encoded v1 CIDs by default. Plus a pretty significant refactor of the CoreAPI.
  - **js-ipfs** got huge speedups to DAG nodes and adding content to IPFS (1.5x!); delegated peer and content routing; HAMT support for MFS; mDNS discovery updates; faster stream multiplexing; Pubsub message signing; 50% bundle size cuts; DAG HTTP API endpoints, recursive DNS link lookups by default; and base32 encoding for v1 CIDs. Plus a brand new constructor!
  - The package managers working group published a number of experiments and demos to investigate opportunities and pain points of using IPFS for package management including: npm-on-ipfs, apt-on-ipfs, & ipfs-npm-republish - along with a number of [community prototypes and projects](https://github.com/ipfs/package-managers/tree/master/package-managers).
  - The CRDT consensus layer for ipfs-cluster replaced the RAFT implementation
  - [Go-graphsync](https://github.com/ipfs/go-graphsync) is a new content syncing protocol to make it faster to access files in large directories (like a deeply-nested blockchain)
  - The new and improved [IPFS WebUI](https://github.com/ipfs-shipyard/ipfs-webui#ipfs-web-ui) allows you to connect to specific peers, see your pins, remove pins, add new pins, navigate to any /ipfs/QmHash or /ipns/domain.com path and explore the IPFS world like you never did before.
  - and [more](https://ipfs.tech/blog/)!
- **🛠 Cool new tools.**
  - [IPFS-deploy](https://github.com/ipfs-shipyard/ipfs-deploy) - easily deploy static websites to IPFS
  - [IPFS-cohost](https://github.com/olizilla/ipfs-cohost#ipfs-cohost-) - a tool to co-host websites published to IPFS
  - [Peerpad.net](http://peerpad.net/) - a collaborative markdown editor built on IPFS and peer-base!
- **🌟 Recent IPFS user highlights.**
  - [Microsoft ION](https://techcommunity.microsoft.com/t5/Azure-Active-Directory-Identity/Toward-scalable-decentralized-identifier-systems/ba-p/560168) - a Sidetree-based DID network running on Bitcoin and IPFS
  - [Subdomain-based Cloudflare Gateway](https://blog.cloudflare.com/continuing-to-improve-our-ipfs-gateway/) - gives dapps a secure place to keep user data along with immutability
  - [Radicle](https://radicle.xyz/) - a peer-to-peer stack for code collaboration
  - [IPSE](https://ipse.io/) - a search engine for the IPFS network
  - [Matters.news](https://matters.news/) - Distributed news platform (Chinese)
  - [Tupelo](https://medium.com/@tobowers/under-the-hood-tupelo-uses-ipld-libp2p-and-it-also-makes-use-of-bitswap-2d8007ba664c) - DLT built on IPFS and IPLD
  - [Peergos](https://peergos.org/) - a private, end-to-end encrypted file storage platform
- **🤝 Community talks, articles, tutorials.**
  - [How to Host Your Dapp With IPFS+ENS and Access It Via EthDNS](https://medium.com/the-ethereum-name-service/how-to-host-your-dapp-with-ipfs-ens-and-access-it-via-ethdns-c96046059d87) - Ethereum Name Service
  - [Continuing to Improve our IPFS Gateway](https://blog.cloudflare.com/continuing-to-improve-our-ipfs-gateway/) - Cloudflare
  - [How IPFS peer nodes identify each other on the distributed web](https://medium.com/@carsonfarmer/how-ipfs-peer-nodes-identify-each-other-on-the-distributed-web-8b5b6476aa5e) - Textile
  - [We Made A Dashboard for IPFS Clusters and Now We Want You to Check it Out](https://medium.com/towardsblockchain/we-made-a-dashboard-for-ipfs-clusters-and-now-we-want-you-to-check-it-out-a87234629908) - Towards Blockchain
  - [Making the Web Work Offline](https://www.youtube.com/watch?list=PLuhRWgmPaHtRdiy0HKNy4UZ4dKVUVL_KG&time_continue=7&v=VllPpxVNH5k) - by Molly Mackinlay
  - [IPFS in Azure](https://learn.microsoft.com/en-us/answers/questions/381556/integrate-azure-blockchain-workbench-with-ipfs) - Block Talk
  - [IPFS Hands-On Tutorial](https://www.youtube.com/watch?v=KIEq2FyMczs) - Polycode
  - How Merkle Trees Enable the Decentralized Web! - by Tara Vancil

## 11. Cautionary Notes

- This is not an announcement of testnet or mainnet launch. While we’ve made great strides towards improving the reliability of our devnets, we can’t yet make guarantees about performance, stability, or security.
- None of the economics are live and any tokens involved are only for testing. It is not yet possible to claim, sell, or buy actual tokens. Miners cannot earn actual block rewards.
- Exchanges currently claiming to trade in Filecoin or Filecoin futures are either fraudulent or very confused. There should not be any sales or purchases of Filecoin in any form.
- Nobody should invest in mining hardware based on any specs in the devnet, as these specs will likely change.
- Beware of any potential scams anywhere based on claims contrary to the above. We have unfortunately heard of some potentially fraudulent activity in a few countries in Asia. Please review the [Anti-Fraud Statement](https://filecoin.io/blog/china-antifraud/), which strongly recommends avoiding anyone in Asia claiming to be commercially or officially affiliated with the Filecoin project (or IPFS or Protocol Labs) at this time.
- Please review the [Filecoin FAQs](https://docs.filecoin.io/basics/project-and-community/filecoin-faq/).

## Many Thanks

Thank you for all your support so far, and in the future! And thank you in advance for your referrals, ideas, and suggestions. Your help accelerates our progress.

The Filecoin Team
