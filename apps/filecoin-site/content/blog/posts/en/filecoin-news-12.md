---
aliases: []
author: ""
categories:
  - updates
date: "2021-02-24T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Welcome to the twelfth issue of Filecoin News!
image:
  alt: ""
  url: /uploads/filecoin-blog-1207x635-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-1207x635.webp
title: >-
  Filecoin News, Issue 12: Fenbushi Ecosystem Fund, Textile, Starling Framework,
  and More
_template: blog_detail
---

**Welcome to the twelfth issue of Filecoin News! If you’d like to chat with us about anything you see here, please visit the [Filecoin Slack](http://filecoin.io/slack).**

## Build

### Fenbushi Ecosystem Fund

In collaboration with Protocol Labs, Fenbushi Capital has announced a $15+ million USD investment fund. The mission of the fund is to drive the growth of the IPFS and Filecoin ecosystems. Fenbushi is planning to raise $15-20 million USD and has committed to raising and deploying all capital in FIL rather than in stablecoins or other crypto assets. Fenbushi has committed $1 million USD to the fund alongside other limited partners. Fenbushi anticipates three primary sources for locating target investment deals; the Slingshot Program, LongHash Filecoin Frontier Accelerator, and the Chinese community. For more information on the fund, please see this [post](https://filecoin.io/blog/posts/the-fenbushi-ecosystem-fund-for-filecoin-development/).

### An Update from Textile

There are a whole lot of Filecoin things going on at Textile! Things you might have missed: Powergate V2 launch, [an open FIL bounty to create a Powergate v2 walk-through video](https://gitcoin.co/issue/textileio/powergate/773/100024745), [feedback on a pinning API for Filecoin](https://github.com/textileio/community/discussions/291), [an exploration of the Filecoin miner index & marketplace](https://github.com/textileio/community/discussions/292), and we are hiring someone to help the ecosystem build with Filecoin, if you’re interested, [apply here](https://textile.breezy.hr/).

## Store

### The Starling Framework

The [Starling Framework for Data Integrity](https://filecoin.io/blog/posts/meet-filecoin-s-collaborators-jonathan-dotan-starling-framework-for-data-integrity/) lets organizations leverage the power of cryptography and distributed systems to authenticate digital video and images. Starling has three modules: capture, storage, and verify. And the IPFS/Filecoin framework is embedded throughout all three.

Spearheaded by the [USC Shoah Foundation](https://sfi.usc.edu/) and Stanford’s Department of Electrical Engineering. The project’s first undertaking is to permanently and immutably catalog the atrocities of genocides, including the Holocaust, the Armenian Genocide, and the Rohingya crisis, by building a tamper-proof ledger of survivor testimonies.

{{< youtube id="FOPRhf8B6wg" title="Starling Case Study: The Testimony of Genocide" >}}

_Starling Case Study: The Testimony of Genocide_

### Starling + Filecoin Case Study: 78 Days

Last week, Starling Labs released _A Photographic Archive of Trust._ The archive is a collection of images captured by Reuters’ photojournalists during the 78 days between the November 2020 US Presidential election and the January 2021 inauguration. The images are uploaded and stored on the Filecoin network, including immutable metadata like location, time, and verification - ensuring a record always exists to protect against tampering and disinformation. To learn more about the initiative, [visit the archive](https://www.starlinglab.org/78days/).

### Filehive

OB1 is nearing completion on the first release of Filehive, a new marketplace for datasets built on top of Textile's Powergate and Filecoin. Filehive makes curating, storing and monetizing the world's data simple. The project is completely open-source under MIT license so you can run it yourself or build your own custom implementation using the platform.

If you want to learn more, check out these helpful links:

- [Website](https://filehive.io/)
- [GitHub repo](https://github.com/OB1Company/filehive)
- [Telegram](https://t.me/filehive)

## Mine

### Development Upgrades

Lotus has released [v1.4.2](https://github.com/filecoin-project/lotus/releases/tag/v1.4.2), which is an optional, but highly recommended release with new features and improvements for lotus miners and deal-making UX. Please see more details and leave any question you have [on GitHub](https://github.com/filecoin-project/lotus/discussions/5595). Additionally, there is another network upgrade scheduled for March, for future updates, please subscribe to [the network announcements](https://github.com/filecoin-project/community/discussions/74) and the [lotus v1.5.0 release and upgrade timeline](https://github.com/filecoin-project/lotus/discussions/5617).

More updates from the Crypto Compute Lab and CryptoNet teams can be found in the latest [dev newsletter](https://github.com/filecoin-project/community/discussions/71#discussioncomment-378972)!

### Welcome Venus to the Filecoin Mainnet

As a decentralized network, Filecoin aims to have multiple independent protocol implementations to ensure the reliability and security of the network. [Venus](https://github.com/filecoin-project/venus) is one of [four protocol implementations](https://docs.filecoin.io/get-started/#filecoin-implementations) currently in development on the Filecoin Network, building a more resilient ecosystem.

Venus, formerly known as go-filecoin, was the first Filecoin implementation in Golang - originally initiated and developed by @anorth, @zenground0, @frrist, @laser, @dignifiedquire, @alexcruikshank, @whyrusleeping & others. But in [August 2020](https://filecoin.io/blog/posts/this-is-a-sample-post/), IPFSForce, a long-time member of the Filecoin community, took over stewardship of the WIP implementation and resumed development in October - renaming it ‘Venus’.

We are excited to announce that at epoch [455673](https://filscan.io/#/tipset/chain?height=455673) (Jan 30th, 2021, 03:16 UTC), miner [f0128788](https://filscan.io/#/tipset/address-detail?address=f0128788) running [Venus v0.9.0](https://github.com/filecoin-project/venus/releases/tag/v0.9.0), mined [its very first block](https://filscan.io/#/tipset/chain?height=455673) on mainnet! This milestone marks a new era of the Filecoin main network with miners running multiple implementations together to add additional security and decentralization to the network.

Want to get involved? We encourage all open-source contributors to help build [Venus](https://github.com/filecoin-project/venus) with the IPFSForce team, making Filecoin stronger and more resilient.

### Filecoin Plus

In order to maximize the amount of useful storage that Filecoin can and will support, the Network innovatively introduced a layer of social trust through Filecoin Plus. Clients use a novel resource, DataCap, to make deals with miners who are greatly incentivized to store their data as it increases their share of block rewards over time.

Filecoin Plus is a pragmatic solution to the technically challenging problem of verifying that a particular set of data is useful in a permissionless, incentive-compatible, pseudonymous network, and presents a path for incentivizing using the Network in productive ways. Learn more about the core concepts, recent progress, and how to get involved in the [Filecoin Plus blog post](https://filecoin.io/blog/posts/filecoin-plus-aligning-participants-with-useful-storage/).

### Filecoin MinerX Fellowship Program

The Filecoin MinerX Fellowship aims to engage a set of geographically diverse, small-to-medium sized Filecoin miners to improve Filecoin’s experience and productivity. Specifically, the goals of this program are to build a solid foundation of globally distributed, reliable, long-term storage options to accelerate the development of tools and services in the ecosystem, while identifying areas to improve the experience of being a miner for the rest of the Filecoin community.

MinerX Fellows will spend the duration of the program accepting storage and retrieval deals, supporting various development efforts, identifying areas of improvement for the network, engaging with the community, and growing their network footprint. If you are interested in learning more about the MinerX Program, please read the [blog post](https://filecoin.io/blog/posts/filecoin-minerx-fellowship-program/).

### Understanding Filecoin’s Circulating Supply

The economic mechanisms embedded in the Filecoin protocol ensure that network activities and stakeholders are fully aligned with the long-term health of the network. Mechanisms such as variable minting based on network growth, vesting structures, token consumption, collateral requirements and more align participant incentives and motivations with the long-term success of the network.

Read our most recent technical blog post on [“Understanding Filecoin Circulating Supply”](https://filecoin.io/blog/filecoin-circulating-supply/) that aims to unpack how Filecoin tokens enter circulating supply, provides more insights on how various stakeholders take part in its economy, and sheds light on how one should approach and think about Filecoin token economics. This post should be paired by reading the paper on [Filecoin’s Economy](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf) and the detailed mechanisms outlined in the [Filecoin Spec](https://spec.filecoin.io/#).

## Community

### Filecoin Community Meetup Program

Filecoin community meetups are an opportunity to meet the people behind the many tools and projects being built in the Filecoin ecosystem. If you missed the February meetup, [catch up on the recording](https://www.youtube.com/watch?v=fpGvQtUoHaw) and be sure to join us on March 9th at 1pm PST for the next virtual meetup - [register here](https://www.meetup.com/Filecoin-San-Francisco/events/276425691/). Additionally, if you are interested in giving a short demo on your project during our March meetup, please [sign up here](https://docs.google.com/forms/d/e/1FAIpQLSc5Ol4Q_FpdnM61gQRQ10DLLrRAy8-j6YrfWUBEbcVVkNQ4mQ/viewform).

## Learn

### DI2F Workshop at IFIP Networking 2021: Decentralizing the Internet with IPFS and Filecoin

The first DI2F workshop, taking place at a premier networking conference, will bring together attendees from academia, industry, and the Filecoin and IPFS ecosystems, as well as the broader decentralized internet communities. The workshop welcomes work-in-progress papers, as well as position statements and project demos. A capstone competition will give attendees the chance to build on top of IPFS and Filecoin and win prizes. The call for papers, demos, and competition projects is open until **March 19th**. To learn more and submit, check out the [Call for Contributions in the IFIP Networking 2021 website](https://networking.ifip.org/2021/workshops/di2f-decentralising-the-internet-with-ipfs-and-filecoin.html).

### Explore Merkle DAGs in ProtoSchool’s latest tutorial

Content-addressed Merkle DAGs, structured using schemas provided by IPLD, are key to the interoperability of Filecoin, IPFS, libp2p, and other distributed protocols. [ProtoSchool’s latest code-free tutorial](https://proto.school/merkle-dags) takes a deep dive into the properties that make Merkle DAGs the backbone of the distributed web, exploring the many benefits that the data structure unlocks, from verifiability to distributability to deduplication. Explore the new tutorial in ProtoSchool’s [Filecoin course](https://proto.school/course/filecoin)!

## Get Involved

Head over to the [Filecoin project on GitHub](https://github.com/filecoin-project) and be sure to take a look at the [community resources](https://github.com/filecoin-project/community). Ask questions in the [Filecoin Slack](http://filecoin.io/slack), discuss issues or new ideas in [the community forum](https://discuss.filecoin.io/), or send us your thoughts [on Twitter by following @Filecoin](https://twitter.com/Filecoin).

[The Filecoin blog](https://filecoin.io/blog/) and our [YouTube channel](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA) are also great sources of information if you’re just getting started. To get this newsletter straight to your inbox, [subscribe to the Filecoin Newsletter](https://mailchi.mp/filecoin.io/subscribe).
