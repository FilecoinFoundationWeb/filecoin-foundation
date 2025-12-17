---
aliases:
  - /blog/update-2018-q3-q4/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-02-14T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Good news! After many months building things privately, we are ready to open
  up a number of codebases and community forums. This is right on schedule as
  predicted in our Project Roadmap and last update. Read our announcement blog
  post for more.
image:
  alt: Filecoin 2018 Q3 & Q4 Update
  url: /uploads/2018-q3q4-update-main-header-1.webp
main_feature: false
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/wolfram-blockchain-labs-expanding-storage-functionality-with-ipfs-filecoin-for-dapp-development.en.md
related_article_2: >-
  content/blog/posts/proof-of-replication-power-fault-tolerance-and-research-roadmap.en.md
related_article_3: content/blog/posts/what-sets-us-apart-filecoin-s-proof-system.en.md
share_image: /uploads/2018-q3q4-update-english-social.webp
title: >-
  Filecoin 2018 Q3 & Q4 Update: Development and Research Repos, Roadmap Update,
  Development Update, and More
_template: blog_detail
---

## 1. Opening up development and research repos

Good news! After many months building things privately, we are ready to open up a number of codebases and community forums. This is right on schedule as predicted in our [Project Roadmap](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.ao6yxxg3c0tn) and [last update](https://filecoin.io/blog/update-2018-q1-q2/). Read our [announcement blog post](https://filecoin.io/blog/opening-filecoin-project-repos/) for more.

## 2. Filecoin Project Roadmap Update

In our [last big update](https://filecoin.io/blog/update-2018-q1-q2/), we published a high-level [roadmap](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.ao6yxxg3c0tn), with upcoming optimistic milestones.

We are pleased to report that – so far – we have hit our first two big milestones on time 🎉🎉, and added a third 🎉:

- We started a **go-filecoin collaborator & contributor preview** in 2018 Q4.
- We **opened up the go-filecoin codebase** in 2019 Q1.
- We **launched the first public Filecoin devnets** in 2019 Q1.

Beyond that, our team has been hard at work in the following areas:

- **Developing go-filecoin.** The main effort to implement the Filecoin Protocol. This is the bulk of our development work.
- **Developing rust-fil-proofs.** Implementations and benchmarking of **_Proof-of-Replication_** and **_Proof-of-Spacetime_** algorithms, for use in go-filecoin, other filecoin implementations, and other systems.
- **Writing and refining protocol specs.** We need detailed protocol specifications in order to have multiple independent implementations of the protocol, to have a properly decentralized network, and to assess and verify protocol security.
- **Ancillary product development.** There are a couple dozen ancillary products and tools that need to exist around the Filecoin network: things like chain explorers, network stats visualizers, integrations, and so on.
- **Designing protocol improvements.** There are multiple areas of the filecoin protocol that have improved significantly – in particular chain scalability, performance of proofs, and consensus security.

As we make progress, our visibility and estimates grow clearer. To that end, we have adjusted the upcoming milestones as follows:

| Milestone                                    | Old ETA | New ETA |
| -------------------------------------------- | ------- | ------- |
| Launching the first public Filecoin testnet: | Q1      | Q2      |
| Testing with sets of large scale miners:     | Q1      | Q2      |
| go-filecoin v1.0.0 feature freeze:           | Q1/Q2   | Q2/Q3   |
| Security Review & Audit:                     | Q1/Q2   | Q2/Q3   |
| Launching the Filecoin mainnet:              | Q2/Q3   | Q3/Q4   |

We have updated [the Roadmap document](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.ao6yxxg3c0tn) accordingly. Please recall that all our estimates and timelines are **optimistic** and subject to change. We want to keep the community updated, and give a rough indication of where we are, what's next, and when we currently (if optimistically) expect to achieve our next milestones.

## 3. Filecoin Development Update

This update, we are splitting the news into:

- **demos** - new demos shipping today!
- **go-filecoin** - the first implementation of the Filecoin protocol
- **rust-fil-proofs** - a portable implementation of Filecoin proof systems and other cryptographic components.

### 3.1. Dev Update / demos

We are publishing 2 demos along with this update. The demos show a few of the ways you can get started with testing Filecoin proofs-of-replication (PoReps). PoReps make it possible to ensure that a Filecoin storage miner is storing their clients’ data correctly. They are crucial to the successful operation of the protocol. In the future, we will release more demos of features, go-filecoin installation, and how to use the newly opened devnets and related development tools, such as the network statistics dashboard.

### Demo 1: Proof Benchmarks

In this demo, we show how you can run Proof-of-Replication (PoRep) benchmarks on your local machine. You can use these benchmark tools to observe how different parameters affect data replication and PoRep generation and verification times. You can also use these tools to benchmark any variations on implementations of PoRep. The demo shows:

- cloning rust-fil-proofs and building the benchmarks
- how to run the benchmarking tool for ZigZag-PoRep (our current PoRep implementation)
- generating benchmark running times for ZigZag-PoRep on different data sizes: 1MB, 2MB, and 1GB

### Demo 2: The Replication Game

In this demo, we describe the Replication Game and how to compete. We show how you can create and submit an entry to the Replication Game, and how to check your results on a leaderboard. More specifically, we show how to:

- parse the different parameters that can be passed to the game
- run a play script to generate a Replication Game submission from your local machine or rig and post it to the game server
- check the Replication Game leaderboard
- filter Replication Game leaderboard using the same parameters used to generate your submission

### 3.2. Dev Update / [go-filecoin](https://github.com/filecoin-project/go-filecoin)

- **✅ Completion overview updated.** The [roadmap document](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit) has a section tracking [go-filecoin’s completion](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit#heading=h.j4zh21nd9r1o). We have updated this section with the latest state. Many components advanced from “still todo”, to “work in progress”, and to “mostly done”. We have also added and removed some components.
- **⛽️ Implemented gas for VM execution.** Filecoin actors (the “VM” programs on Filecoin) require a concept of gas to run, similar to Ethereum’s. This key functionality landed in go-filecoin in the last few months.
- **💎 Miner Payments and Payment Channels.** Miner payments are now implemented, with the use of payment channels. The latter ones are a key feature in making the Filecoin network operate faster (off chain protocols), and to scale to an acceptable performance (amount of chain storage per op). The mining cycle is close to complete.
- **🕸 Developer networks.** We have reached the point where persistent networks are useful for development, debugging, and testing. We are not close to the proper **“testnet”** stage, but we already have the need for several small networks our developers, early contributors, and prospective users can work with. Today, we are introducing **“devnets”**, smaller development networks for experimental usage. [Read more here](https://github.com/filecoin-project/go-filecoin/wiki/Devnets).
- **🗃 End-to-end Data Storage.** Storing data in **go-filecoin** is now working end-to-end. Miners (a) pledge storage with collateral, (b) make deals with clients, (c) receive clients’ data, (d) assemble the data into sectors, (e) seal the sectors with _Proof-of-Replication_, (f) gain storage power through sealed sectors, (g) mine on top of sealed sectors, (h) receive clients’ retrieval requests for data, (i) unseal sectors to retrieve clients’ data, (j) serve the data to clients, and (k) and get paid for doing so. From here, we will continue to improve storage performance and usability.
- **🛠Turning prototype code into production code.** Early on, in building systems like go-filecoin, we need to move fast and prototype. We have now moved on to maturing the codebase with principled software engineering practices, clean and clear interfaces, separation of concerns into components, layered APIs, and more. This has been a significant endeavor, key for long-term maintainability, new contributor onboarding, building on go-filecoin, security, and a smoother developer experience.
- **📄 Documentation and Guides.** We created detailed documentation for [getting started with go-filecoin](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started), for [building the projects from source](https://github.com/filecoin-project/go-filecoin/#install-from-source), for [connecting to devnets](https://github.com/filecoin-project/go-filecoin/wiki/Devnets), for [storage mining](https://github.com/filecoin-project/go-filecoin/wiki/Mining-Filecoin), for [storing and retrieving data](https://github.com/filecoin-project/go-filecoin/wiki/Storing-on-Filecoin), for [the network dashboards](https://github.com/filecoin-project/go-filecoin/wiki/Dashboards), for [the block explorer](https://github.com/filecoin-project/go-filecoin/wiki/Block-Explorer), and for [troubleshooting issues](https://github.com/filecoin-project/go-filecoin/wiki/Troubleshooting-&-FAQ). We also wrote up [an overview of go-filecoin’s code](https://github.com/filecoin-project/go-filecoin/blob/master/CODEWALK.md).
- **🎉 Got ready for new contributors!** We structured our [contributing guidelines](https://github.com/filecoin-project/go-filecoin/blob/master/CONTRIBUTING.md), and documented our development processes. We made our [issue tracker](https://github.com/filecoin-project/go-filecoin/issues) approachable to newcomers, with lots of issues with [**help-wanted**](https://github.com/filecoin-project/go-filecoin/issues?q=is%3Aopen+is%3Aissue+label%3AE-help-wanted) or [**good-first-issue**](https://github.com/filecoin-project/go-filecoin/issues?q=is%3Aopen+is%3Aissue+label%3AE-good-first-issue) labels. We refactored and cleaned up APIs. We created **#fil-dev** and other developer [chat channels (on Slack/Riot/Matrix)](https://github.com/filecoin-project/go-filecoin#community). And we got our first pull-requests from outside the Filecoin team! 🎁

### 3.3 Dev Update / [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs)

- **⚙️ Portable fil-proofs effort.** Implementing [**_Proofs-of-Replication_**](https://github.com/filecoin-project/rust-fil-proofs/tree/master/storage-proofs-porep/src) (**PoReps**), [**_Proofs-of-Spacetime_**](https://github.com/filecoin-project/rust-fil-proofs/tree/master/storage-proofs-porep/src) (**PoSTs**), and other cryptographic constructions is a significant feat of engineering. In Q3, we decided to split this into a separate endeavor from **go-filecoin**, in order to (a) increase focus for each effort, (b) work closely with our cryptography researchers in “research-development” mode, and (c) produce an implementation-agnostic library. We decided to write it in Rust, which is a good fit to couple closely with other existing crypto libraries we need (eg Bellman), and to produce code and tooling that is usable to all implementations of the Filecoin Protocol and across a wide variety of systems and devices.
- **🏃‍♀️ DRGs, ZigZag-PoRep, and optimizing implementations.** The main task of the **rust-fil-proofs** effort is to implement practical and usable **PoReps** and **PoSTs**. To achieve this, we needed to implement brand new cryptographic constructions (fresh from [the research press](https://eprint.iacr.org/2018/702)), study and optimize the performance of each proof system, and produce tooling that **go-filecoin** now imports. We discuss the effort in more detail in [these research interviews](https://www.youtube.com/watch?v=Z5cHYItRIoY).
- **⏱ Reaching practical runtimes.** **PoRep** algorithms are meant to be arbitrarily tunable in speed. However, to greatly reduce the size of proofs on chain, we needed to employ constructions that enabled non-interactive and aggregated proofs – namely, verifiable computation systems. In our case, the latest **PoRep** algorithms use zkSNARKs, and are quite slow. In Q3, we implemented algorithms and got the [**Filecoin Proving Subsystem**](https://github.com/filecoin-project/rust-fil-proofs) working end-to-end. During Q4, we managed to speed up the runtime of **PoRep** replication by orders of magnitude! Sealing a 1GB sector took \~150hrs in Oct, and we optimized it to 50hrs in Nov, then 16hrs, then just under 1hr in Dec. 🎉 This is right in our acceptable zone, which is great.
- **🔬 Benchmark Tools.** We developed [benchmarking tools](https://github.com/filecoin-project/rust-fil-proofs#examples) for a number of proof algorithms and cryptographic components. These can be used to measure the real, practical performance of algorithms with some given operations. These tools are great to have, and can be seen in action in [this demo](https://youtu.be/-0GmwhWw05E).
- **👾 The Replication Game.** Last but not least: we made improving replication algorithms into a game! Players in [the Replication Game](https://github.com/filecoin-project/replication-game) can compete to outperform the default implementation of _Proof-of-Replication_, by optimizing algorithms, running on better hardware, and so on. Think you can optimize better than the rest? Prove it by beating others in the leaderboard. This is a fun & rewarding way to participate in building Filecoin. Some results may even beat those generated by our current PoRep implementation. We can’t wait to see what you come up with! See how to make a submission to the Replication Game in [this demo](https://youtu.be/7r2pL53abSA).

## 4. Filecoin Research Update

A lot of important improvements have happened in our research team.

**Research Interviews and Talks.** In an effort to make our work more accessible, we are making a set of interviews with Filecoin researchers and engineers. Check out the first installment of these interviews:

- [Proof-of-Replication](https://youtu.be/L826rIziNMQ), with Ben Fisch and Nicola Greco
- [Implementing and Optimizing Proofs-of-Replication](https://www.youtube.com/watch?v=Z5cHYItRIoY), with Nicola Greco and Friedel Ziegelmayer
- [Storage and Retrieval Markets](https://youtu.be/TzfcqPzSR0s), with Jeromy Johnson and Juan Benet
- [Replication Game Intro](https://youtu.be/2NAKGL0ydiE), with Friedel Ziegelmayer and Nicola Greco

**_Proof-of-Replication_ constructions.** The best _Proof-of-Replication_ (PoRep) we have so far is [ZigZag-PoRep](https://eprint.iacr.org/2018/702.pdf), introduced in the middle of 2018. During Q3 and Q4, we implemented **ZigZag-PoRep**, and other **PoRep** algorithms. Bringing complex cryptographic constructions from theory into practice is a significant feat. Finding practical and application constraints that drive improvements in the theoretical construction is even greater. We achieved this and more with **ZigZag-PoRep**. We are also setting proof parameter choices based on practical limitations. The research work on PoReps led to novel academic results on [Tight Proofs of Space and Replication](https://eprint.iacr.org/2018/702.pdf).

**_Expected Consensus_ formalization and implementation.** One of the key components of Filecoin’s _Storage Power Consensus_(**SPC**) is a protocol named _Expected Consensus_ (**EC**). EC is a protocol inspired by leader-election based proof-of-stake protocols. In the last two quarters, we formalized EC’s properties and studied it in a variety of scenarios. We explored a number of questions through simulation, such as parameter choices, weighing function choices, and incentive compatibility. Significant contributions resulted from this exploration, that changed protocol implementation. Some of this work is of independent interest, and may be published separately. **EC** is now implemented within **go-filecoin’s** **SPC** implementation, and can be seen keeping the Filecoin blockchains stable across our **devnets**.

**VDFs in _Proofs-of-Spacetime_, and VDF Collaboration.** **PoReps** are not the only proof protocols in Filecoin that improved recently. We also have new constructions for **_Proofs-of-Spacetime_** (**PoSTs**) using recent **_Verifiable Delay Function_** (**VDF**) constructions. This is a significant improvement, as **VDFs** give **PoSTs** much stronger timing guarantees than we get from the bare **PoReps**. This is great because it allows us to have longer **PoST** verification cycles, and thus to significantly reduce the amount of data accumulated on-chain. This new direction has led to a [collaboration with the Ethereum Foundation](https://vdfresearch.org/) to drive development, implementation, and optimization of VDFs. Some of Ethereum’s new constructions aim to use VDFs within consensus, a direction Filecoin is also exploring. Ethereum, Filecoin, and a number of next-generation blockchain protocols will benefit greatly from this work. But perhaps the most exciting part is this could yield efficient, world-wide, decentralized, and robust randomness beacons – which would be a major breakthrough in applied cryptography and distributed systems, with wide applicability beyond blockchains.

**RFP: Single Secret Leader Election.** Over the last couple of years, an important problem has surfaced through our exploration of consensus protocols for Filecoin.. Its solution stands to improve random leader election based protocols, such as Filecoin and many other blockchains, particularly Proof-of-Stake systems. We have called this problem **Single Secret Leader Election (SSLE)**, and it involves electing at most one leader, in a fair, unpredictable, and secret way, from a weighted set of participants. We have posted a new Request For Proposals (**RFP**) to solve this problem: [**RFP-6 Single Secret Leader Election**](https://github.com/protocol/research-grants/blob/master/RFPs/rfp-006-SSLE.md). A solution to this problem would constitute a major breakthrough in cryptographic sortition schemes and greatly improve the security, performance, and simplicity of dozens of blockchain protocols, including Filecoin.

## 5. Filecoin Community Update

We have been preparing to meet the needs of a broad and vibrant Filecoin community. Three examples of this include launching the Filecoin Private Preview, supporting Global Filecoin Meetups and collaborating with leading research, engineering, and blockchain organizations.

- **Filecoin Private Preview.** Over the last few months, we invited external research and developer collaborators to test drive the codebases released recently, and our community communication channels. Among other things, this helped us generate or improve the following community resources:
- [**Contributing Guidelines**](https://github.com/filecoin-project/go-filecoin/blob/master/CONTRIBUTING.md), the foundations on how to get started as a Filecoin contributor.
- [**Filecoin Community Channels**](https://github.com/filecoin-project/community), for real-time discussions.
- [**Filecoin Codewalk**](https://github.com/filecoin-project/go-filecoin/blob/master/CODEWALK.md), a high level tour of go-filecoin.
- **Dev Processes,** to integrate PRs and code reviews from non team members into our workflows.
- **Filecoin Meetups and Communities.** The Filecoin team is delighted to engage with and support communities and meetups around the world. These groups come together to learn about, discuss, participate in, and evangelize the Filecoin Network. If you’d like start a Filecoin meetup group, please email [team@filecoin.org](mailto:team@filecoin.org) with your information and we’ll try to help however we can. A few specific events to highlight include:
- **Meetups.** Filecoin meetups occur around the world on a weekly basis. For example, in 2018, around 90 meetup events have been held across 16 cities in China, [Hong Kong](https://www.meetup.com/Hong-Kong-IPFS-Meetup/events/258784575/), and Taiwan (we note this number reflects activity from communities that have specifically reached out to our team). These meetups regularly attract 100-200 attendees and are often formatted as lectures, panels, and [developer salons](https://www.meetup.com/beijing-ipfs/events/255438836/). [Online](https://v.qq.com/x/page/f0755d2q1mz.html) educational streams are also common and generate thousands of views.
- **Universities, Research Communities, and Research Centers.** Community leaders have visited [research centers](http://bccc.msup.com.cn/Bcc/default/cases-detail?courseid=13294), presented to [blockchain student groups](https://twitter.com/RalapXStartUp/status/1064410180899598336), and [visited](https://mp.weixin.qq.com/s/ge_8RMl3J6iMdq6LhJa3-w) [renowned universities](http://www.chuangkem.com/archives/114407).
- **Protocol Labs Events**. Last year, Protocol Labs hosted its first LabDay where the stakeholders in PL’s ecosystem presented, hacked, and worked together. We delivered a presentation about active [Filecoin Communities in China](https://www.youtube.com/watch?v=W-casgpGwy4) and [moderated a panel](https://www.youtube.com/watch?v=ztPi2e21Mw4) that with a few of the community leaders there.
- **Other.** Some community volunteers are actively working to educate local governments about distributed technology. Further, our community members have contributed [translations](https://twitter.com/IPFSMain/status/1034970873277513728), visited [exchanges](https://twitter.com/IPFSMain/status/1041505075275812864), [hosted conferences](http://play.yunxi.tv/livestream/ca260eb6e2df41b6ae83ff319c7098d6) and dev workshops, developed educational curriculums, and even baked filecoin mooncakes!
- **Filecoin Collaborators.** We continue to develop deep relationships with leading research, engineering, distributed systems, and blockchain organizations, including:
- **Parity Technologies.** Protocol Labs and Parity have worked closely for many years. Parity recently created an [implementation of libp2p written in Rust](https://github.com/libp2p/rust-libp2p), which Polkadot, Substrate, and other projects) are using. We look forward to more collaborations between our teams in 2019.
- **Web3 Foundation.** [We actively participated in the 2018 Web3 Summit](https://www.youtube.com/watch?v=l44z35vabvA) in Berlin, which was put on by the Web3 Foundation. Juan Benet and Jutta Steiner, co-founder and CEO of Parity Technologies spoke on [The Grand Opportunities Of Web 3.0](https://www.dld-conference.com/vintage/videos/I2IZAKAuy90) on a panel at DLD 2019.
- **Stanford SBC**. Protocol Labs supported the [2019 Stanford Blockchain Conference](https://cbr.stanford.edu/sbc19/) again this year, which brought together practitioners and researchers in blockchain protocols, distributed systems, cryptography, and computer security. Many of the topics covered within SBC are relevant to Filecoin, including Accumulators for Blockchains, Tight Proofs of Space and Replication and [Betting on Blockchain Consensus with Fantômette](https://youtu.be/oyLV5wl_Ots). We co-hosted several events around SBC this year, including VDF Days, [ConsensusDay](https://www.youtube.com/playlist?list=PLhuBigpl7lqtG6LgQ0FiiR4Pbrph9nocn), and SBC receptions.
- **Ethereum**. The Ethereum Foundation is a close partner of Protocol labs. Recently, we worked together to co-fund VDF Research to drive development, implementation, and optimization of [Verifiable Delay Functions](https://vdfresearch.org/), an endeavor that could make the Filecoin protocol more secure. The Ethereum Foundation has also been experimenting with libp2p, the modular P2P networking library used by Filecoin. Some researchers at EF are considering using libp2p to power [Ethereum 2.0](https://github.com/ethereum/eth2.0-specs/tree/v0.1), and also in the process of evaluating a grant to fund py-libp2p, a new implementation of libp2p in Python.
- **CarbonFive**. Carbon Five is one of Protocol Labs’ development partners. Carbon Five developers are working on Filecoin and participating directly in key working groups.
- And many others

## 6. Filecoin Legal Update

**The Permissive License Stack**. Protocol Labs has developed and adopted a set of open source intellectual property commitments we call [the Permissive License Stack](https://protocol.ai/blog/announcing-the-permissive-license-stack/). These commitments guarantee that the technology PL is building for Filecoin will be usable by the largest possible number of people and projects.

We’re hopeful that sharing our approach will help our colleagues at other companies and organizations to join us and follow this path forward. You can read more about the Permissive Licensing Stack [here](https://protocol.ai/blog/announcing-the-permissive-license-stack/).

**Engaging with policymakers about the decentralized web**. Protocol Labs is a founding member of the [Blockchain Association](https://theblockchainassociation.org/), a new policy advocacy group whose work we believe will advance the goals of the decentralized web. The Blockchain Association has done incredible work educating policymakers, providing critical industry knowledge to improve draft legislation, and promoting productive engagement between the U.S. government and important decentralized software projects. Their writings about [decentralization](https://medium.com/@BlockchainAssoc/understanding-the-secs-guidance-on-digital-tokens-the-hinman-token-standard-dd51c6105e2a), a [recently proposed law in Congress](https://medium.com/@BlockchainAssoc/new-bipartisan-legislation-defines-digital-tokens-paves-way-for-pro-innovation-policy-4833cbfca600), and a [potential administrative law case](https://medium.com/@BlockchainAssoc/the-potential-kik-and-the-kin-foundation-case-has-major-consequences-for-the-open-blockchain-de8ed616a1c) may interest those following US public policy.

We also support [Coin Center](https://coincenter.org/), a nonprofit think tank in Washington, DC educating policymakers on the promise of blockchain technology and why it should remain free and open. Our team provided some comments on their important new paper, [The Case for Electronic Cash: Why Private Peer-to-Peer Payments are Essential to an Open Society](https://coincenter.org/entry/the-case-for-electronic-cash).

In September, the General Counsel of Protocol Labs testified alongside 100 other industry experts to [at a briefing](https://coincenter.org/entry/rep-davidson-hosts-a-roundtable-on-cryptocurrencies) hosted by two Congressmen who later introduced a strongly [pro-cryptocurrency bill](https://www.cnbc.com/2018/12/20/lawmakers-look-to-change-secs-72-year-old-securities-definition-to-exclude-cryptocurrencies.html).

## 7. Filecoin Public Talks & Media

We elected to continue staying out of the public sphere in 2018 and focus on building. That said, our team and our broader Filecoin community gave a few public talks, published a few blog posts and visited a few research groups. Our activity will remain similarly constrained until the lead-up to the launch of the network.

- **Public Talks and Blog posts** _video/posts linked if available_
- 2018-08-03. [**Filecoin live demo**](https://www.youtube.com/watch?v=n8KyTACoj2Y) (Juan Benet, LabDay 1)
- 2018-08-03. [**Communities in China**](https://www.youtube.com/watch?v=W-casgpGwy4) (Colin Evran & Michelle Brous, LabDay 1)
- 2018-08-03. [**Panel: Example Community Leaders in China**](https://www.youtube.com/watch?v=ztPi2e21Mw4) (Moderated by Juan Benet & Colin Evran, LabDay 1)
- 2018-08-03. [**PoReps: Proof of Space on Real Data**](https://www.youtube.com/watch?v=ioesqilxeuE) (Ben Fisch, LabDay 1)
- 2018-08-06. [**Long Term Info-structure**](http://longnow.org/seminars/02018/aug/06/long-term-info-structure/) (Juan Benet, The Long Now Foundation)
- 2018-09-11. [**A Unified Voice for the Blockchain Industry**](https://medium.com/@BlockchainAssoc/a-unified-voice-for-the-blockchain-industry-8b63c93e9651) (Blockchain Association)
- 2018-09-26. [**Congressional Cryptocurrency Roundtable Hosted By Rep. Warren Davidson**](https://coincenter.org/entry/rep-davidson-hosts-a-roundtable-on-cryptocurrencies) (R-OH) (Marvin Ammori)
- 2018-10-22. [**What exactly is web3?**](https://www.youtube.com/watch?v=l44z35vabvA) (Juan Benet, Web3 Summit)
- 2018-10-26. **Cryptocurrency Lunch Q&A** (Marvin Ammori, TechGC Summit)
- **University, Research Group, & Community Visits**
- 2018-09-24. [**Panel on Blockchain Technology at Stanford**](https://twitter.com/colinevran/status/1047685759904436224) (Prof Susan Athey, Doug Galen, Nicolas Kokkalis, Colin Evran @ Stanford Graduate School of Business)
- 2018-10-24. **Introduction to Market Token Networks** (Ian Darrow @ Duke Law School)
- 2018-10-18. **Protocol Labs, Filecoin, and Open Problems.** (Juan Benet, Evan Miyazono @ UCL CS)
- 2018-11-14. **Protocol Labs & The Future of Organizational Structures; Blockchain 101: Building The Internet Of The Future** (Marvin Ammori & Michelle Brous @ Harvard Business School)
- 2018-11-28. **Guest Lecture in Bitcoin & Cryptocurrencies** (Marvin Ammori @ Stanford University CS)

Additionally, we ran a small conference on consensus protocols called [**ConsensusDay**](https://www.youtube.com/playlist?list=PLhuBigpl7lqtG6LgQ0FiiR4Pbrph9nocn). This is the first installment of what we expect to become a regular event. Consensus throughput is one of the major hurdles in blockchain scalability, and we will only realize the full potential of crypto networks if we can scale operations to match the needs of typical consumer-oriented applications. We need to move orders of magnitude beyond the 7-25 tx/s (that’s Bitcoin and Ethereum) to billions of transactions per second. We believe this improvement will come from a combination of off-chain scalability protocols, sharding, hierarchy, and new directions in consensus protocols. We hope that ConsensusDay can stimulate the field, and draw attention to important problems. All the talks from the first ConsensusDay can be [found here](https://www.youtube.com/playlist?list=PLhuBigpl7lqtG6LgQ0FiiR4Pbrph9nocn).

## 8. libp2p update for Filecoin

Filecoin is built on top of and depends heavily on [libp2p](https://libp2p.io/), a project led by Protocol Labs as well. Therefore we include a compressed update from that project tuned for Filecoin.

- **What is libp2p?** A modular peer-to-peer networking library. Check out [this website](https://libp2p.io/) or [this video](https://www.youtube.com/watch?v=CRe_oDtfRLw&index=2&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s), or [this one](https://www.youtube.com/watch?v=xqVmEzsin3Y).
- **Libp2p Roadmap and Vision.** Libp2p defined their 2019 [roadmap](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit?ts=5bff9514#), focusing on priorities to harden and evolve the stack forward.
- **Lots of Releases.**
- **go-libp2p** had [16 releases](https://github.com/libp2p/go-libp2p/releases).
- **js-libp2p** had [6 releases](https://github.com/libp2p/js-libp2p/releases) including [v0.24.0](https://blog.ipfs.tech/55-js-libp2p-0-24/).
- **rust-libp2p** had [6 releases](https://github.com/libp2p/rust-libp2p/releases) including: [v0.1.0](https://github.com/libp2p/rust-libp2p/releases/tag/v0.1.0), [v0.2.0](https://github.com/libp2p/rust-libp2p/releases/tag/v0.2.0), [v0.3.0](https://github.com/libp2p/rust-libp2p/releases/tag/v0.3.0).
- **_Many_ teams are choosing libp2p for their p2p networking needs.** Just js-libp2p alone has over 500 dependent repos on GitHub.
- [**Why libp2p**?](https://medium.com/paritytech/why-libp2p-13085ed0c9c8) Great article about why top projects are choosing to build on libp2p (Pierre Krieger)
- Polkadot [builds on rust-libp2p](https://medium.com/polkadot-network/polkadot-poc-2-is-here-parachains-runtime-upgrades-and-libp2p-networking-7035bb141c25)
- New [jvm-libp2p](https://github.com/web3j/libp2p) implementation by Web3 Labs
- Nervos [builds on rust-libp2p](https://medium.com/nervosnetwork/hello-ckb-17b8c8fdfba2)
- PegaSys (ConsenSys) contributing [native library](https://github.com/libp2p/go-libp2p-daemon/pull/28#issuecomment-449014187) [for daemon](https://github.com/libp2p/go-libp2p-daemon/pull/54)
- Status.im is [experimenting with libp2p](https://www.google.com/url?q=https://our.status.im/status-town-hall-27-february-4-2019/&sa=D&ust=1550102719765000&usg=AFQjCNEGZaoOv8TGCLavbn2FK9Hxo91JEQ) and made [nim-libp2p](https://github.com/status-im/nim-libp2p)
- **Talks and media**
- **libp2p Dev Meetings - 2018-07-12 to 13**
  - [Introduction to rust-libp2p](https://www.youtube.com/watch?v=HqSXFlCwgMY&index=3&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s) (Pierre Krieger)
  - [QUIC in libp2p](https://www.youtube.com/watch?v=4FvMed5iCb4&index=4&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s) (Marten Seeman)
  - [The life of a libp2p connection](https://www.youtube.com/watch?v=zcWHamr5m_k&index=5&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s) (Jacob Heun)
  - [Ethereum Sharding requirements for P2P](https://www.youtube.com/watch?v=27Uv8pRmIaY&index=6&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s) (Kevin MHC)
  - [go-libp2p-gorpc: simple RPC on top of libp2p](https://www.youtube.com/watch?v=hyT91vdeZBk&index=7&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW&t=0s) (Hector Sanjuan)
  - [Sharing data in OpenBazaar with PubSub](https://www.youtube.com/watch?v=_OVsFoK-Cr8&index=8&list=PLX9e-uG608s-O77QyT6QQqm9Mp6DAgjDW) (Chris Pacia)

- **LabDay 1 - 2018-08-03**
  - [Libp2p in OpenBazaar](https://www.youtube.com/watch?v=RZbPSTIhhnk&index=5&list=PLhuBigpl7lqvIymGaM7A_VT4CYZW3R_4Q&t=0s) (Chris Pacia)
  - [The libp2p Project](https://www.youtube.com/watch?v=LahR7BlN8MI&index=7&list=PLhuBigpl7lqvIymGaM7A_VT4CYZW3R_4Q&t=0s) (Mike Goelzer)
  - [Polkadot & Parity Substrate built on rust-libp2p](https://www.youtube.com/watch?v=mRlLSByFxCQ&index=8&list=PLhuBigpl7lqvIymGaM7A_VT4CYZW3R_4Q&t=0s) (Björn Wagner)
  - [Paratii: P2P Video Publishing](https://www.youtube.com/watch?v=QKFOWdOTrpo&index=4&list=PLhuBigpl7lqvIymGaM7A_VT4CYZW3R_4Q&t=0s) (Felipe Sant Ana)

- **Web3Summit - 2018-10-22 to 24**
  - [libp2p, a modular P2P networking stack](https://www.youtube.com/watch?v=xqVmEzsin3Y) (Mike Goelzer)
  - [Implement a payment channel with libp2p](https://www.youtube.com/watch?v=t2qCmwUlY2Q) (Lucas Vogelsang)

- **Other**
  - 2018-09-18. [How to Leverage libp2p for Blockchain Applications](https://www.infoq.com/presentations/blockchain-libp2p) (Chris Pacia, Open Bazaar, InfoQ)
  - And [more](https://libp2p.io/media/).

## 9. IPFS update for Filecoin

Filecoin is built on top of and depends heavily on [IPFS](https://ipfs.tech/), a project also led by Protocol Labs. Many users of IPFS aim to also become users of Filecoin, so IPFS capabilities and use cases greatly inform Filecoin. Therefore, we include a compressed update from that project tuned for Filecoin.

- **What is IPFS?** A content-addressed hypermedia distribution protocol. Check out [this website](https://ipfs.tech/).
- **IPFS Roadmap and 2019 Priorities.** The IPFS Project Roadmap and WG Roadmaps have been [published to github](https://github.com/ipfs/roadmap) and are helping align priorities within and across projects. Check it out to learn more!
- **Lots of releases across the ecosystem.**
- Check out the links for summaries of what’s new and the full changelogs!
- **go-ipfs** released [v0.4.18](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0418-2018-10-26), one of the largest go-ipfs releases in recent history.
- **js-ipfs** had [12 releases](https://github.com/ipfs/js-ipfs/releases), including: [v0.](https://github.com/ipfs/js-ipfs/releases/tag/v0.28.0)[32.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.32.0), [v0.](https://github.com/ipfs/js-ipfs/releases/tag/v0.28.0)[33.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.33.0), [v0.](https://github.com/ipfs/js-ipfs/releases/tag/v0.28.0)[34.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.34.0).
- **ipfs-cluster** had [5 releases](https://github.com/ipfs/ipfs-cluster/releases/), including: [v0.5.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.5.0), [v0.6.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.6.0), [v0.7.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.7.0), [v0.8.0](https://github.com/ipfs/ipfs-cluster/releases/tag/v0.8.0).
- **ipfs-companion** had [10 releases](https://github.com/ipfs-shipyard/ipfs-companion/releases), including: [v2.5.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.5.0), [v2.6.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.0), [v2.7.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.0).
- **ipfs-desktop** released [v0.6.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.6.0).
- **Awesome feature highlights.**
- go-ipfs got [experimental QUIC support](https://github.com/ipfs/go-ipfs/blob/v0.4.18/CHANGELOG.md#quic) and [gossipsub routing](https://github.com/ipfs/go-libipfs) to boost speed and efficiency
- [npm-on-ipfs](https://github.com/ipfs-shipyard/npm-on-ipfs#npm-on-ipfs) - wraps your chosen package manager (e.g. npm or yarn) to install your favourite modules from the central registry using IPFS
- [IPFS WebUI](https://github.com/ipfs-shipyard/ipfs-webui#ipfs-web-ui) - a shiny new interface to check in on your node’s stats, explore the IPLD powered merkle forest, see peers around the world, and manage your files
- [@ipfspin, a Twitter Pinbot](https://twitter.com/ipfspin/status/1053376847596187648) - add and pin your data to IPFS Cluster with just a tweet
- [IPFS Install Manager](https://www.youtube.com/watch?v=C7A3-ycCRWU) - a CLI interface for managing IPFS installs
- and [more](https://ipfs.tech/blog/)
- **Recent IPFS user highlights.**
- [Cloudflare - distributed IPFS gateway](https://blog.cloudflare.com/distributed-web-gateway/)
- [Azure - support for IPFS in consortiums](https://youtu.be/kaueUSiDrc0)
- [Origin - decentralized, secure, and auditable messaging](https://blog.originprotocol.com/introducing-origin-messaging-decentralized-secure-and-auditable-13c16fe0f13e)
- [Pinata - IPFS deployment and pinning service](https://www.pinata.cloud/)
- [IPFSCloud - decentralized storage platform](https://ipfscloud.store/)

- **Community talks, articles, tutorials.**
- Tutorial: [Mozilla Hacks: Building Cooperation and Trust into the Web with IPFS](https://hacks.mozilla.org/2018/08/dweb-building-cooperation-and-trust-into-the-web-with-ipfs/)
- Article: [Thailand used IPFS for blockchain-supported Electronic Voting System in primaries](https://www.nasdaq.com/article/thailand-uses-blockchain-supported-electronic-voting-system-in-primaries-cm1055512)
- Article: [Decentralisation: the next big step for the world wide web](https://www.theguardian.com/technology/2018/sep/08/decentralisation-next-big-step-for-the-world-wide-web-dweb-data-internet-censorship-brewster-kahle)
- Article: [A big tech company is working to free the internet from big tech companies](https://www.technologyreview.com/s/612240/a-big-tech-company-is-working-to-free-the-internet-from-big-tech-companies/)
- Article: [Breaking The Ice: A Crash Course In IPFS, Ethereum And Fat Protocols Of The Future](https://hackernoon.com/breaking-the-ice-a-crash-course-in-ipfs-ethereum-and-fat-protocols-of-the-future-eb9bd15eb96e)
- 2018-11-14. [Telecom Application Development Summit: Protocol Labs and IPFS Project Update](https://www.youtube.com/watch?v=M4W6rzTOtP4) (David Dias)
- 2018-12-18. [OPO.js - NPM on IPFS](https://www.youtube.com/watch?v=umNL2VkIHe8) (Alex Potsides)

## 10. Cautionary Notes

- We are not announcing the testnet or the mainnet. Instead, we are inviting you to review and contribute to this open source work we believe is so important.
- The three devnets are true development networks, and we make no guarantees about performance, stability, and security on the devnets. In fact, we can probably guarantee the opposite.
- None of the economics are live and any tokens involved are only for testing. It is not yet possible to claim, sell, or buy actual tokens.
- Miners cannot earn actual block rewards.
- Exchanges claiming to trade in filecoin or filecoin futures are either fraudulent or very confused. There should not yet be any sales or purchases of devnet filecoin – or any other filecoin.
- Nobody should invest in mining hardware based on any specs in the devnet, as these specs will likely change.
- Beware of any potential scams anywhere based on claims contrary to the above. We have unfortunately heard of some potentially fraudulent activity in China and Hong Kong. Please review [the Anti-Fraud Statement](https://filecoin.io/blog/china-antifraud/), which strongly recommends avoiding anyone in China or Hong Kong claiming to be commercially or officially affiliated with the Filecoin project (or IPFS or Protocol Labs) at this time.

## Many Thanks

Thank you for all your support so far, and in the future! And thank you in advance for your referrals, ideas, and suggestions. Your help accelerates our progress.

The Filecoin Team

Protocol Labs
