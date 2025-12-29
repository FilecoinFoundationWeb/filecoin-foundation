---
aliases:
  - /blog/update-2018-q1-q2/
author: ""
categories:
  - updates
cover_feature: false
date: "2018-08-28T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin 2018 Q1 & Q2 Update
image:
  alt: Filecoin 2018 Q1 & Q2 Update
  url: /uploads/2018-q1q2-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/truffle-suite-launches-nft-development-template-with-filecoin-box.en.md
related_article_2: >-
  content/blog/posts/proof-of-replication-power-fault-tolerance-and-research-roadmap.en.md
related_article_3: content/blog/posts/filecoin-roadmap-update-august-2020.en.md
share_image: /uploads/2018-q1q2-update-english-social.webp
title: Filecoin 2018 Q1 & Q2 update
_template: blog_detail
---

## 1. Filecoin Development Update

Let’s not bury the lead. The most exciting thing going on right now in the Filecoin Project is building the first protocol implementation: **go-filecoin**. We have been hard at work on this for many months, and are thrilled to have reached a point where:

1. The blockchain data structures are implemented (structured as [IPLD](https://ipld.io/))

2. The nodes can establish secure connections to each other ([libp2p](https://libp2p.io/))

3. Message and block propagation work over [libp2p](https://libp2p.io/) pubsub

4. Miners can assemble blocks

5. The nodes validate blocks & achieve consensus on the heaviest chain

6. Messages (transactions) invoke and execute actors (smart contracts, virtual machine)

7. Actor memory is scoped and isolated in the state tree (vm)

8. Accounts, payments, and token basics work

9. The main features of the Storage Market are implemented (asks, bids, deals, storing files)

10. Clients can hire miners, store files, and retrieve them later (!)

11. Actors like Payment Channels work, though not complete

You can take a closer look at completion state of various parts of go-filecoin in [this working document](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/edit?usp=sharing).

### 1.1. Dev Update / Demos of go-filecoin

Along with this update we are publishing 3 demos of go-filecoin in action. The demos are basic, but they show a lot of complex components working in the go-filecoin node. We get to see basic blockchain operations, such as blocks being mined, propagated through the network, and the chain coming to consensus on the best next block. We get to see the resulting blockchain data, including the state tree, the internal data storage for actors, wallet balances, wallet payment transactions, and more. We get to see the decentralized and verifiable Storage Market in action, with bids, asks, and deals storing files. In the future, we will make and release more demos of functionality.

#### Demo 1: go-filecoin & testnet simulator

This demo introduces tools that are used in other demos. It boots up a local test network, spawns several go-filecoin nodes, runs random actions on them, then inspects the resulting blockchain data. The demo shows:

- the **go-filecoin** command-line tool and live filecoin nodes running
- a local test network scheduler running many go-filecoin nodes and issuing lots of random actions
- manually issuing a number of commands to running nodes via the command line
- go-filecoin API and command line output of various commands
- exploring blockchain data structures, market orders, wallet balances, etc

<iframe width="768" height="420" src="https://www.youtube.com/embed/pWj9AQNBjS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Demo 2: Network Vis & Block Explorer

In this demo, we can see a real-time visualization of all the activity in a local test network and its nodes, and a block explorer. We see the following actions

- blocks being mined, propagated, and added to the chain
- the network achieving consensus
- payment transactions sending money from one account to another
- storage market orders being added (asks & bids), and the market depth chart
- deals being made and files being transferred
- internal data storage of actors

<iframe width="768" height="420" src="https://www.youtube.com/embed/clzivvkpKpc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Demo 3: Storage Market Basics

In this demo we walk through a set of storage market operations:

- miners adding asks
- clients adding bids
- clients importing files
- clients sending files to miners
- clients and miners making deals
- other clients retrieving stored files

<iframe width="768" height="420" src="https://www.youtube.com/embed/nqwfAOvlUBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 1.2. Dev Update / Codebase opening up

**Private codebase so far.** We have been developing in a private codebase. This is not our typical way of working – almost all of our work is fully public from the first commit (see IPFS, libp2p, IPLD, and more). We made the hard choice of starting the codebase privately primarily to avoid distractions and to move quickly.

- **Avoid Distractions**. Having an open, public codebase generates lots of questions, issues, pull-requests, and other interactions, all of which require significant developer time investment in aggregate. These distractions can be very frequent for projects with a lot of attention, and can consume large fractions of our team’s time.
- **Move Quickly**. In early stages, projects like go-filecoin need to experiment with interfaces and approaches, to try different things, and to change very quickly. This is hard with a large scale project with a lot of attention – users tend to observe the code as it is being built, ask questions, and maybe even start building applications against it.

**Public codebase and community forums coming soon!** We have passed the critical period when we needed to have the codebase private, and are quickly reaching a point where the implementation would benefit more from being public. Therefore we plan to publish the codebase in the coming months. This will be an exciting time to get involved! At that point, everybody interested can come learn about Filecoin, help build parts of it, and start building on top of it.

- **Similar to IPFS and libp2p**. We will aim for things to function similarly to the IPFS and libp2p projects.
- **Licensing and OSS hygiene**. We will almost certainly license Filecoin using the MIT license, or another permissive open source license.
- **Discussion Forums.** We plan to open up a discussion forum for users, miners, and clients (likely Discourse, as used by IPFS and Zcash).

**Organizing the Community.** We are looking forward to fostering a collaborative and resilient culture to build out the infrastructure for the distributed web. Our discussion forums will field questions, and our codebase will be the place to file issues. In addition, we are setting up some structures to organize collaboration in a scalable and easy to enter way:

- **Working Groups**. We use working groups (similar to IPFS), which are a scalable way to organize people and responsibilities. Interested contributors will be able to join working groups, or start new ones.
- **OKRs.** We use Objectives and Key Results (OKRs) for scalable planning and measuring progress. Protocol Labs has been pioneering this in open source through IPFS, libp2p, and more. We have found them to be an excellent way to plan across working groups, with a great balance of group autonomy and cross-group coordination.
- **Community Management.** We are preparing to meet the needs of a broad and vibrant community from the get-go.

## 2. Filecoin Research Update

The Filecoin Research team has been focused on the following lines of work. We will give a succinct summary here, and dive in-depth in future posts.

- **Supporting Implementation Work.** Our focus has been on getting the first Filecoin implementation (**go-filecoin**) complete for Network Launch.
- **Crypto libraries.** Most of the cryptographic protocols we need are being implemented in a portable way, so that many implementations of Filecoin can share that critical code. This includes algorithms like _Proof-of-Replication_ and _Proof-of-Spacetime_. Having one codebase for these will make it easier to develop, maintain, and audit long-term.
- **Drastic Improvements for _Proof-of-Replication_**. In the recent months, _Proofs-of-Replication (PoReps)_ have improved tremendously. We achieved [formal foundations](https://eprint.iacr.org/2018/678.pdf), [security proofs](https://eprint.iacr.org/2018/678.pdf), and [drastically more efficient constructions](https://eprint.iacr.org/2018/702.pdf). These are excellent developments for Filecoin. This benefits all users, as key properties of PoReps have been formally proved secure. The new constructions also make key functions drastically more efficient, which is great for miners.
- **_Proof-of-Replication_ subfield growing**. Many great researchers have been thinking and writing about _Proof-of-Replication_. Several new constructions are being developed; some are already published. And our RFP Program has funded work in a few.
- **RFP Program**. Earlier this year, [Protocol Labs launched a $5M RFP Program](https://protocol.ai/blog/ann-research-rfp/) to accelerate research into open problems key to our protocols. The first RFPs sought performance improvements to components used in Filecoin. These are improvements, and not necessary for launch. Successes from this program could drastically improve performance characteristics, increase security, or simplify the protocol. All of these directions are very much worth pursuing.
- **Addressing Other Problems.** Our team has also been working on a number of problems important for the future of Filecoin, though these are not as high priority as network launch so they are in the back burner. These include: (a) fully off-chain market orders, (b) chain compression using proofs, (c) user-defined file contracts, (d) scalable consensus, and more.

## 3. Filecoin Project Roadmap

With this update, we are publishing a more detailed project roadmap and a rough optimistic timeline, extending out to many milestones ahead. We plan to keep this roadmap updated in [this document](https://docs.google.com/document/d/1cgss-rifFO2iSJgnMmOsD_tPal40MUp1m7crTFQuVYQ/view).

### 3.1. Roadmap / Optimistic Timeline

**While we cannot commit to any exact dates on this timeline**, we want to give at least an indication of where we are, what’s next, and when next milestones will be reached. We hate giving dates that may turn out to be too optimistic or slip, but we hate the silence and keeping our community in the dark even more. So, against typical mainstream software & product development wisdom, we are publishing this optimistic roadmap with expected dates of targeted milestones, and we plan to revise it as we need. The pros: a much clearer and transparent planning approach, easier coordination across the community, and excitement as milestones get closer. The cons: timelines will certainly have to change – some things may come sooner or later than initially anticipated.

### 3.2. Roadmap / Where are we

In rough terms, this is a high-level view of where we are. (These phases are not equally long)

![](https://filecoin.io/vintage/images/blog/filecoin-roadmap-at-impl.png)

### 3.3. Roadmap / Upcoming Milestones

Our coming milestones are as follows:

- **go-filecoin demos published (2018 Q3)**
  - As part of this update we are publishing a set of demos demonstrating features of **go-filecoin**.
- **go-filecoin collaborator & contributor preview (ETA: 2018 Q4)**
  - We will be inviting a number of collaborators & contributors to our codebases before opening them up. You can [register your interest in this form](https://goo.gl/forms/LHWWjW6mzFkUXbB42).
  - The main goals of this are to improve documentation, take preliminary questions, and make general preparations for a public release.
  - This will also help us transfer knowledge to a broader set of contributors who can help us with the upcoming onslaught of questions, issues, and PRs.
- **Opening up the go-filecoin codebase (ETA: 2018 Q4/2019 Q1)**
  - We will be opening the github repositories hosting the go-filecoin implementation and related tools.
  - This will be a major point of involvement for the community at large, and we strongly encourage the participation of developers interested in developing Filecoin or in building applications on it.
  - In the short term, this will likely slow our implementation pace, as our team will face open source maintainer duties and spend time responding to questions from our broader developer community learning the codebase.
  - In the long run, this will speed up our implementation pace, as the amount of people who can contribute will increase.
- **Launching the first public Filecoin testnet (ETA: 2018 Q4/2019 Q1)**
  - We are getting much closer to launching the first public Filecoin testnet.
  - This will be a testnet of **go-filecoin** nodes, and will gradually scale up – starting with 100s of nodes, and ramping up orders of magnitude to 1,000s, 10,000s, and so on.
  - We will run our testnet in conditions as close to real as we can, so we will be pushing lots of data to testnet miners.
  - We will help onboard miners & clients signed up on our forms ([miner form](https://docs.google.com/forms/d/e/1FAIpQLSfdFpWhJj8OIGA2iXrT3bnLgVK9bgR_1iLMPdAcXLxr_1d-pw/viewform), [early user form](https://docs.google.com/forms/d/e/1FAIpQLSdCOjMenUU7WtT54zeAivCS2nnaWYQIgaXh0eRdIdpi6Pwkew/viewform)). If you have already completed the form, stay tuned!
- **Testing with sets of large scale miners (10 PB+) (ETA: 2019 Q1)**
  - We are getting close to running our first tests with very large scale miners.
  - We will be selecting from miners [signed up on our form](https://docs.google.com/forms/d/e/1FAIpQLSfdFpWhJj8OIGA2iXrT3bnLgVK9bgR_1iLMPdAcXLxr_1d-pw/viewform).
- **go-filecoin v1.0.0 feature freeze (ETA: 2019 Q1/Q2)**
  - Before launch we will reach a feature freeze for the **go-filecoin** codebase, after which only bug fixes and polish before launch.
  - This enables reviews, audits, and preparations for launch.
- **Security Review & Audit (ETA: 2019 Q1/Q2)**
  - Before we can launch, we need to conduct full security reviews and external audits of our codebases.
  - This is a critical step for secure software crypto-systems.
  - If you are interested in reviewing & auditing our code, get in touch.
- **Launching the Filecoin mainnet (ETA: 2019 Q2/Q3)**
  - Once we are certain we are safe to launch, we will set a target launch date.
- **Scaling the network (2019+)**
  - Once launched, we will work closely with miners seeking to onboard.
  - We will work on technology improvements to enable scaling, including solutions to general blockchain scaling problems (off chain, sharding, partition tolerance).
- **Growing the utility of the network (2019+)**
  - Once launched, we will work closely with clients seeking to use Filecoin.
  - We will work on integrations and supporting applications to enable broader uses of Filecoin.
- **Improving the Network (2019+)**
  - We are already researching significant improvements to Filecoin and to blockchains in general.
  - We will continue improving the network, through a standard open source improvement proposal process.
- **Forming the Filecoin Foundation (2019+)**
  - Form and boot up the Filecoin Foundation, to safeguard the network, drive governance, and more.
  - Foundations are critical institutions in blockchain networks, and we have big hopes for ours. If you are interested in working with us on governance questions, driving future research and usage of Filecoin, and public storage utilities, please reach out.
- **And more.**
  - We have many more plans, but we are focused on the milestones listed above now.

## 4. Filecoin Public Talks & Media

We have stayed mostly out of the public sphere this year, as we have been focused on building. We gave a few public talks, and visited a few research groups. Our activity will remain similarly constrained until the lead-up to the launch of the network.

- **Public Talks** _video linked if available_
  - 2018-01: Filecoin: protocol overview, the important results, and new open problems (Juan Benet, BPASE 2018)
  - 2018-01: Proof of Replication using Depth Robust Graphs (Ben Fisch, BPASE 2018)
  - 2018-03: [Filecoin: a robust foundation for human knowledge](https://www.youtube.com/watch?v=6h2WNxEV8q4) (Juan Benet, Blockstack Berlin 2018)
  - 2018-04: [Filecoin and the Rise of Open Services](https://www.youtube.com/watch?v=IfLIoOr4p0A) (Juan Benet, MIT Bitcoin Club 2018)
  - 2018-06: [Good SNARKs are here needed](https://www.youtube.com/watch?v=QII1xq9J7NY) (Nicola Greco, Zcon0)
  - 2018-07: Filecoin as a user of libp2p (Juan Benet, libp2p dev meetings)
  - _Want us to speak at your conference?_ [_Let us know here._](https://goo.gl/forms/xQQRSnWibbC6DTt22)
- **University, Research Group, & Community Visits** _chronologically_
  - [Security Lab](https://seclab.stanford.edu/) @ Stanford CS
  - [Decentralized Information Group](http://dig.csail.mit.edu/) @ MIT CSAIL ([visit](https://www.csail.mit.edu/event/help-us-decentralize-web-overview-ipfs-libp2p-ipld-and-filecoin))
  - Cryptoeconomics Lab @ MIT Sloan
  - [Digital Currency Initiative](https://dci.mit.edu/) @ MIT Media Lab
  - [FilecoinClub Beijing Community Meetup](https://www.youtube.com/watch?v=95p5fJ6_wLY)
  - [CS294-144](https://berkeley-blockchain.github.io/cs294-144-s18/) @ UC Berkeley
  - University College London (UCL)
  - Stanford Graduate School of Business (GSB)
  - Harvard Business School (HBS)
  - [IMDEA Software Institute](https://software.imdea.org/)
  - [Center for Blockchain Research](https://cbr.stanford.edu/) @ Stanford CS
  - Filecoin Demo @ Decentralized Web Summit 2018
  - _Want us to visit & speak with your lab?_ [_Let us know here._](https://goo.gl/forms/BJHIg6r5nJGF5sQ72)

## 5. libp2p update for Filecoin

Filecoin is built on top of and depends heavily on [libp2p](https://libp2p.io/), a project led by Protocol Labs as well. Therefore we include a compressed update from that project tuned for Filecoin.

- **What is libp2p?** A modular peer-to-peer networking library. Check out [this website](https://libp2p.io/) or [this video](https://www.youtube.com/watch?v=U1RSNIFyzWE).
- **Separating from IPFS.** libp2p is also a component for IPFS, so in the past we have spoken about libp2p as bundled into IPFS. Henceforth, we’ll discuss libp2p individually, to showcase the utility it brings to Filecoin and to other blockchain projects.
- **Browser Support.** libp2p has strong browser support, and is able to work entirely in the browser or via protocols like [WebSockets](https://en.wikipedia.org/wiki/WebSocket) and [WebRTC](https://en.wikipedia.org/wiki/WebRTC). This will make the Filecoin Network and its data accessible to browsers from the beginning and without trusting third parties – which is crucial for many dapps and blockchain applications.
- **Other Transports.** libp2p recently added [support for QUIC](https://www.youtube.com/watch?v=4FvMed5iCb4) and Tor transport protocols, which means Filecoin will be able to leverage those protocols. [QUIC](https://en.wikipedia.org/wiki/QUIC) sets up crypto connections very quickly, which will help latency-critical parts of the protocol like the Retrieval Market. [Tor](<https://en.wikipedia.org/wiki/Tor_(anonymity_network)>) improves network traffic anonymity & privacy – which means Filecoin users who use a Tor transport will be able to store and retrieve files with stronger security and privacy guarantees. These are important capabilities for different sets of users.
- **New implementation in Rust joins Go and JS.** libp2p has implementations in [Go](https://github.com/libp2p/go-libp2p), [JavaScript](https://github.com/libp2p/js-libp2p), and now [Rust](https://github.com/libp2p/rust-libp2p). This means that writing Filecoin implementations in those languages is much easier. Rust is a big win for mobile, embedded devices, and other languages via C bindings. Protocol Labs started the Go and JavaScript implementations, and Parity started the Rust implementation. You can [watch a talk about it here](https://www.youtube.com/watch?v=HqSXFlCwgMY). Thank you!
- **Polkadot chooses libp2p!** Polkadot recently adopted libp2p for its network stack. This is an important moment for libp2p, as it means another very significant blockchain and whole blockchain ecosystem will be sharing the stack. The Polkadot team recently shipped their PoC-2, and [wrote about it here](https://medium.com/polkadot-network/polkadot-poc-2-is-here-parachains-runtime-upgrades-and-libp2p-networking-7035bb141c25). It also gives strength to other proponents of using libp2p with other blockchains, like Ethereum.
- **libp2p used for blockchain applications.** [Livepeer](https://livepeer.org/), [Keep Network](https://blog.keep.network/introduction-to-libp2p-57ce6527babe), Paratii, and of course, everybody using [IPFS](https://ipfs.tech/).

## 6. IPFS update for Filecoin

Filecoin is built on top of and depends heavily on [IPFS](https://ipfs.tech/), a project led by Protocol Labs as well. Many users of IPFS aim to also become users of Filecoin, so IPFS capabilities and use cases greatly inform Filecoin. Therefore we include a compressed update from that project tuned for Filecoin.

- **What is IPFS?** A content-addressed hypermedia distribution protocol. Check out [this website](https://ipfs.tech/).
- **IPFS support for Browsers.** IPFS has strong browser support, and is able to work entirely in the browser via [js-ipfs](https://js.ipfs.tech/) and [ipfs-companion](https://github.com/ipfs-shipyard/ipfs-companion). This will make writing web-apps that use Filecoin much easier.
- **Browser support for IPFS.** IPFS protocol handlers (eg `ipfs://`) have been added to Brave and Firefox Nightly. This kind of support from major players makes decentralized technologies much more likely to reach mainstream users.
- **Lots of Releases.** go-ipfs has had [3 releases](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md): [v0.4.15](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0415-2018-05-09), [v0.4.16](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0416-rc3-2018-07-09), [v0.4.17](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0417-2018-07-27). js-ipfs has had [19 releases](https://github.com/ipfs/js-ipfs/releases), including: [v0.28.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.28.0), [v0.29.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.29.0), [v0.30.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.30.0), [v0.31.0](https://github.com/ipfs/js-ipfs/releases/tag/v0.31.0). Check out the links for summaries of what’s new and the full changelogs!
- **Some recent IPFS User Highlights.**
  - [DTube - decentralized video platform](https://d.tube/)
  - [JanusVR viewer for Decentraland (content from ipfs)](https://www.youtube.com/watch?v=841vXBopH68)
  - [Textile Photos - a digital wallet for your photos, end-to-end encrypted](https://www.textile.photos/)
  - Paratii - distributed curation protocol and streaming engine
  - [Peergos - end-to-end encrypted, p2p file storage and sharing](https://peergos.org/)

- **Community Talks, Articles, Tutorials**
  - _Article_: [Textile: Adding the next million peers to IPFS](https://medium.com/textileio/adding-the-next-million-peers-to-ipfs-76d356352d14)
  - _Article_: [Decentralized code distribution for the future of open source](https://medium.com/textileio/decentralized-code-distribution-for-the-future-of-open-source-2dc58f1153b2)
  - _Talk_: [Real serverless with CRDTs and IPFS (scalarconf)](https://www.youtube.com/watch?v=EscG2aytq10)
  - _Talks_: IPFS Lightning Talks at DWeb Summit
  - _Tutorial_: [Building an interplanetary ĐApp from scratch](https://medium.com/textileio/building-an-interplanetary-%C4%91app-from-scratch-51f9b8be5a74)
  - _Tutorial_: [IPFS Cluster Peer Installer for EC2](https://medium.com/textileio/tutorial-series-setting-up-an-ipfs-peer-4056e6c69612)
  - _Tutorial_: [Code a simple P2P blockchain in Go](https://medium.com/@mycoralhealth/code-a-simple-p2p-blockchain-in-go-46662601f417)
  - _Tutorial_: [From Zero to Interplanetary Hero (browser-based ĐApps with IPFS)](https://medium.freecodecamp.org/from-zero-to-interplanetary-hero-7e62f7d4427)

## 7. Changes to the blog and to our updates

We are making some changes to our blog and our updates. In our [last update](https://filecoin.io/blog/update-2017-q4/), we planned to broadcast updates at least once a quarter. We are sorry to have missed that goal – we know this was frustrating for some in the community. Hence, this update is longer than usual, and we’re making the following changes:

1. We plan to switch to a stream of smaller updates. This means our update cadence will no longer be quarterly.
2. We will drop the requirement that our updates "speak for the whole project" and thus avoid blocking on review. Instead, in a more decentralized fashion, we intend for our working groups and individual team members to start publishing their own updates through the blog.
3. We plan to post small articles about individual aspects of Filecoin. This will allow us to write in-depth about exciting features or components of the network.
4. We plan to broaden the set of writers, which will showcase the many fantastic contributions and developments our new team members are making.

## 8. Cautionary Notes

**Miner Caution:** We have noticed a number of companies making and selling "Filecoin Mining Machines" or "Filecoin Mining Hardware". Please note: we have not released official specifications for mining hardware yet, so these systems may turn out to be suboptimal or unnecessarily complex. Once we have a clear idea of optimal constructions for Network Launch, we will publish concrete specifications of system requirements, trade-offs to consider, and hardware recommendations. We recommend holding off on buying Filecoin-specific hardware until we publish those specifications

_What is holding back mining hardware specifications?_ We aim to have as broad compatibility and as minimal system requirements as we can. We want existing storage systems to be able to be near-optimal Filecoin miners with minimal modification (ideally zero). Recent improvements to core components like _Proof-of-Replication_ (which currently require SNARKs) have drastically reduced overheads and improved tradeoffs for such systems, and we may have more improvements like that in the short term

**Investor Caution**: During and after the Filecoin token sale we’ve heard reports of attempts to defraud investors from actors claiming to be selling Filecoin SAFTs or tokens. Similarly, we’ve seen unscrupulous exchanges claiming to list Filecoin and Filecoin derivatives. Remember that the Filecoin token will not be live until network launch, and all the transfer restrictions and other terms of the SAFT still apply. Therefore, any exchange or seller that lists or offers Filecoin, IPFS tokens or related derivatives is likely fraudulent. We will announce [in our official blog](https://filecoin.io/blog) when the Filecoin Network and token go live. Until then we **strongly** recommend staying away from any exchange or entity who claims to be buying, selling, or trading Filecoin tokens or derivatives.

**Legal disclaimer**: This update lays out our current plan for the project. The actual future may, and is likely to, play out differently as things continue to develop. You should not rely on any predictions made here.

## Many Thanks

Thank you for all your support so far, and in the future! And thank you in advance for your referrals, ideas, and suggestions. Your help accelerates our progress.

The Filecoin Team
Protocol Labs
