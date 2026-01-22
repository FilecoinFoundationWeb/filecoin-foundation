---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-13T14:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt:
  The FVM Bug Bounty program is a chance to make the network’s upcoming smart
  contract capabilities stronger
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-news-39.en.md
related_article_2: content/blog/posts/filecoin-news-38.en.md
related_article_3: content/blog/posts/filecoin-news-20.en.md
share_image: /uploads/blog-filecoin-news.webp
title: Filecoin News 40
---

![](/uploads/filecoin-news-40.webp)

## Announcements

[![](/uploads/fvm-update_hud60c027a439008dcf3bf42e8849e5d71_735992_2000x0_resize_q90_linear_2.webp)](https://filecoin.io/blog/posts/fvm-milestone-0.5-is-complete/)

### FVM Milestone 0.5 Complete

The FVM and implementation team has announced the completion of [FVM Milestone 0.5](https://fvm.filecoin.io/#roadmap-4)! Now all node operators can run their own FVM nodes using the v7 built-in actor to sync with the Filecoin Mainnet! For more details, please read the [announcement blog](https://filecoin.io/blog/posts/fvm-milestone-0.5-is-complete/).

[![](/uploads/fvm-bug-bounty_hue97cccb1b4d7d3531c30c57cbd5036d3_684406_2000x0_resize_q90_linear.webp)](https://filecoin.io/blog/posts/introducing-the-fvm-milestone-1-bug-bounty-program-audits/)

### Introducing the FVM Milestone 1 Bug Bounty Program and Audits

The [Filecoin VM Bug Bounty Program](https://fvm.filecoin.io/#fvm-bug-bounty-program-7) for Milestone 1 is now live! The FVM team invites hackers to help find potential vulnerabilities in the FVM codebase for the upcoming merge of M1 to Filecoin mainnet in May. M1 will transition the Filecoin network to exclusive use of the new Wasm-based FVM by all client implementations. Since this is a completely new codebase, one of the main areas of focus right now is to invite more external developers to help discover a wide range of potential vulnerabilities in FVM M1, in advance of later milestones to add user-programmability and EVM-compatibility in FVM M2, coming this Fall. Learn more in this [blog post](https://filecoin.io/blog/posts/introducing-the-fvm-milestone-1-bug-bounty-program-audits/).

[![](/uploads/network-indexer.webp)](https://filecoin.io/blog/posts/introducing-the-network-indexer/)

### Introducing the Network Indexer

Protocol Labs recently launched the first production [Network Indexer](https://filecoin.io/blog/posts/introducing-the-network-indexer/) to enable searching for content-addressable data available from storage providers, such as those on the Filecoin and IPFS networks. Storage providers can now publish the content IDs ([CID](https://docs.ipfs.tech/concepts/glossary/#cid)s) of their data to the Network Indexer, and clients can query the Network Indexer to learn where to retrieve the content identified by those CIDs. Learn how to use a network indexer and more in this [blog post](https://filecoin.io/blog/posts/introducing-the-network-indexer/).

## Implementations

[![](/uploads/lotuswithtext.webp)](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1)

### Lotus

[Lotus has released v1.15.1](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1) which includes many Snap Deal improvements and bug fixes, **supports FVM 0.5** and allows storage providers to become an index provider to the content addressing network. See the [release notes](https://github.com/filecoin-project/lotus/releases/tag/v1.15.1) for more details! At this stage, we welcome lotus node operators to help find potential bugs in [ref-fvm](https://github.com/filecoin-project/ref-fvm) and [built-in actor](https://github.com/filecoin-project/builtin-actors) by running an FVM node on mainnet, please submit feedback [on GitHub](https://github.com/filecoin-project/lotus/discussions/8334). Stay up to date with all things Lotus by following [@lotus_web3](https://twitter.com/lotus_web3) on Twitter.

## Community

[![](/uploads/the-economics-of-storage-providing_hu5f001c4504c1cf2d362fae7d52a9bd29_778733_2000x0_resize_q90_linear_2.webp)](https://filecoin.io/blog/posts/the-economics-of-storage-providers/)

### The Economics of Storage Providers

Becoming a Storage Provider within the Filecoin Network is a way to participate in the preservation of humanity’s most valuable information, but it can also be a profitable endeavor. The Filecoin community is home to a fast-growing ecosystem of SPs of all sizes and geographic locations. Most of these have successfully applied different strategies and setups that have become financially sound businesses. [Read along](https://filecoin.io/blog/posts/the-economics-of-storage-providers/) and get a better understanding of how the economics of this ecosystem work.

[![](/uploads/0_klbdrg86ewh29waw.webp)](https://blog.chainsafe.io/extending-metamask-a-snap-for-filecoin-692fc5998c0b)

### Filecoin Support on MetaMask

ChainSafe collaborated with the Filecoin community to develop Filsnap, an integration for MetaMask Flask that enables Filecoin support within the browser extension. The project makes use of Snaps, a new feature that allows developers to extend the wallet’s functionality. Filsnap is not yet available but you can read more about it on the ChainSafe [blog](https://blog.chainsafe.io/extending-metamask-a-snap-for-filecoin-692fc5998c0b) or check out the [documentation](https://blog.chainsafe.io/extending-metamask-a-snap-for-filecoin-692fc5998c0b).

[![](/uploads/unnamed-9.webp)](https://github.com/filecoin-project/community/discussions/484)

### Filecoin Community Roadmap – 2022 Q2

Take a look at the [Filecoin Community Roadmap for Q2 2022](https://github.com/filecoin-project/community/discussions/484) to check in on the status and progress of the latest project contributions. The open source reference document is a simple, accessible, and reliable overview that keeps track of all the improvements and tools that will be introduced by the Filecoin community. [Find out more](https://github.com/filecoin-project/community/discussions/484) and see how you can contribute.

[![](/uploads/twitterspaces.webp)](https://twitter.com/i/spaces/1kvJpAjQqabxE?s=20)

### Tachyon’s Build in Public AMA

Recently Tachyon and Protocol Labs hosted a Twitter Space AMA to discuss the Tachyon 6 Filecoin Launchpad Accelerator III’s kick off. The ongoing series “Build in Public” featured Gabriel Anderson and Brad Holden as well as startup founders from the previous cohort. Read this [thread](https://twitter.com/TachyonAccel/status/1511033209441726468?s=20&t=f1ydg-2VXozxIMy5USIuSA) to learn more about what’s next for Tachyon6 and its transition toward a Global Networked Startup Ecosystem DAO or listen to the [recording](https://twitter.com/i/spaces/1kvJpAjQqabxE?s=20).

## Tools

[![](/uploads/_hu63bb858b305d92dba5869f89b7fb87e0_1260610_79032e860a310fc5d90b37d86bb677da.webp)](https://filecoin.io/blog/posts/introducing-boost-new-capabilities-for-markets-including-http-transfers-web-ui-and-more/)

### Introducing Boost: New Capabilities for Markets Including HTTP transfers, Web UI, and More

Boost is a tool for storage providers to manage data storage and retrievals on Filecoin. It replaces the go-fil-markets package in Lotus with a standalone binary that runs alongside a Lotus daemon and Lotus miner. The tool also exposes libp2p interfaces for making storage and retrieval deals, a web interface for managing storage deals, and a graphql interface for accessing and updating real time deal information. Learn more about Boost in this recent [blog post](https://filecoin.io/blog/posts/introducing-boost-new-capabilities-for-markets-including-http-transfers-web-ui-and-more/).

## Events

[![](/uploads/screen-shot-2022-04-12-at-1-54-18-pm.webp)](https://lu.ma/fil-emea)

### Storage Provider Meetup in Amsterdam

Join us for a Filecoin in-person one day meetup in Amsterdam on Monday, April 25th and participate in an open discussion on the Filecoin roadmap and other new released programs. This is a great opportunity to meet with other Storage Providers, ecosystem partners and experts from the Filecoin ecosystem. Juan Benet, Molly Mackinlay, Clara Tsao, Stefaan Vervaet and many European SPs will be joining this event. If you are in Europe, don’t miss this! [Registration required, please register here](https://lu.ma/fil-emea)

![](/uploads/foundation.webp)

### FIL Austin hosted by the Filecoin Foundation

Registration for FIL Austin is now live! On Wednesday, June 8th, the Filecoin Foundation is bringing the Filecoin community together IRL for workshops, panels, networking, and more– all dedicated to expanding the Filecoin network and growing the Web3 ecosystem.

[![](/uploads/faber.webp)](https://filecoin.faber.vc/)

### Faber Filecoin Accelerator

Applications for the [Faber Filecoin Accelerator](https://filecoin.faber.vc) are open until April 18th. Join the fully-remote, 12-week program to work with entrepreneurs and engineers solving the hardest problems in getting new Web3 infrastructure and applications off the ground. [Apply now](https://docs.google.com/forms/d/e/1FAIpQLScNVB9IFo58k3fY3pEDnF4eHybye-9MywIAFmTcsJZjvC4HwA/viewform?usp=pp_url)!

[![](/uploads/full_width.webp)](https://hedera22.devpost.com/)

### Hedera22: Hello Smart Contracts

The Hedera community is celebrating its first Solidity smart contract hackathon. H22 features prizes for the best use cases of Filecoin and IPFS for decentralized storage and projects who use the technology via NFT.storage, web3.storage, Estuary, Fleek, Textile also qualify. The event is underway until May 16th. [Join now](https://hedera22.devpost.com/)!

## Get Involved

Head over to the [**Filecoin project on GitHub**](https://github.com/filecoin-project) and be sure to take a look at the [**community resources**](https://github.com/filecoin-project/community). Ask questions in the [**Filecoin Slack**](http://filecoin.io/slack), discuss issues or new ideas in [**the community forum**](https://discuss.filecoin.io/), follow us on WeChat @Filecoin-Official or send us your thoughts [**on Twitter by following @Filecoin**](https://twitter.com/Filecoin).

[**The Filecoin blog**](https://filecoin.io/blog/) and [**YouTube channel**](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA) are also great sources of information if you’re just getting started.

To receive this newsletter directly to your inbox, [**subscribe**](https://mailchi.mp/filecoin.io/subscribe)!
