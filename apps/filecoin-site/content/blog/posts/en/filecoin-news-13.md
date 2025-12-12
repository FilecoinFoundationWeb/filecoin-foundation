---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - events
date: "2021-03-03T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Welcome to Filecoin News 13!
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog-filecoin-news.webp
title: >-
  Filecoin News 13: Filecoin Launchpad Accelerator, NFT Hackathon, Space Beta,
  and More
_template: blog_detail
---

![](/uploads/00836d4e-221d-44b2-a867-6d47ff775cfc.webp)

<h3 style="margin-top:3em">BUILD</h3>

<img src="/uploads/aa9da583-59a2-44cc-a131-7913efbd460b.webp" style="width:18%;margin-left:0%">

## Filecoin Launchpad Accelerator

33 founders from 11 countries participated in an immersive twelve-week program bridging the IPFS, Filecoin and Ethereum communities. Learn more about the builders and their startups over on the Filecoin blog.

- [Filecoin for Media, Video, Gaming, and more](https://filecoin.io/blog/posts/filecoin-for-media-video-gaming-and-more/)
- [Filecoin for Content, DevOps, Trust, and more](https://filecoin.io/blog/posts/filecoin-for-content-devops-trust-and-more/)
- [Filecoin for Treasuries, Wills, Financial Access and more](https://filecoin.io/blog/posts/filecoin-for-treasuries-wills-financial-access-and-more/)

<img src="/uploads/c2f9cdfc-a335-4ab1-b0fe-adbe819004ed.webp" style="width:40%;margin-left:0%">

## NFT Hackathon: March 19-21

NFTHack is bringing together a virtual collective of passionate creatives and engineers for a weekend NFT hackathon and summit powered by ETHGlobal on March 19-21. The event is a great opportunity to explore this exciting new space. There will be challenges from Zora, Rarible, Ethereum, Filecoin, IPFS, and more! Prizes include limited edition NFTs, exclusive experiences, and over $10k. [**Learn more and register here**](https://nft.ethglobal.co/).

<h3 style="margin-top:3em">STORE</h3>

<img src="/uploads/248952c2-a22e-4425-805c-6d556b5f5df7.webp" style="width:20%;margin-left:0%">

## The Space Beta is Here

Space is an open-source, user-controlled, encrypted file storage and sharing platform built on the open and decentralized web. The Fleek team has announced the launch of Beta for Space, which features an app for personal and distributed file storage and sharing on IPFS & Filecoin. This release is an example of how developers can leverage **Web 3.0 protocols** to create platforms where users, not the app itself, have exclusive control over their accounts and storage.

<h3 style="margin-top:3em">MINE</h3>

<img src="/uploads/49082bd0-a1b4-49a5-91e5-db9ce189f068.webp" style="width:20%;margin-left:0%">

## An Update on Forest from the ChainSafe Team

We're excited to announce that Forest, the Rust implementation of Filecoin, is now interoperable with the Filecoin mainnet! In order to reach this milestone, we first focused on updating to Actors v2 and passing all the [**interoperability test vectors**](https://github.com/filecoin-project/test-vectors). Once we had that, in order to uncover any remaining consensus discrepancies, we attempted to sync with mainnet and fixed any issues that came up. At this point, we have had a node staying in sync with the Filecoin network for several weeks without any issues.

We are now focused on implementing Network Version 10 (including Actors v3) so that we can maintain interoperability even after the upcoming network upgrade is done. That said, Forest is still not production ready; we are currently focusing on improving our code base prior to doing a security audit. Please [**check out our GitHub**](https://github.com/ChainSafe/forest) or [**reach out on Discord**](https://discord.gg/Q6A3YA2) to learn more.

<h3 style="margin-top:3em">⚙️ Development Upgrades</h3>

Lotus v1.5.0 is a mandatory release that introduces the fifth upgrade to the Filecoin network. The network upgrade occurs at height 550321, before which time all nodes must have updated to this release (or later). At this height, [**v3 specs-actors**](https://github.com/filecoin-project/specs-actors/releases/tag/v3.0.0) will take effect, which in turn implements the following two FIPs:

- [**FIP-0007 h/amt-v3**](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0007.md), which improves the performance of the Filecoin HAMT and AMT.
- [**FIP-0010 off-chain Window PoSt Verification**](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0010.md), which reduces the gas consumption of SubmitWindowedPoSt messages significantly by optimistically accepting Window PoSt proofs without verification, and allowing them to be disputed later by off-chain verifiers.

Note that the integration of v3 actors was already completed in [**1.4.2**](https://github.com/filecoin-project/lotus/releases/tag/v1.4.2). This upgrade simply sets the epoch for the upgrade to occur. To learn more about the disputer and changes, see [**the GitHub release**](https://github.com/filecoin-project/lotus/releases/tag/v1.5.0).

<img src="/uploads/4e34038d-eafa-416e-bd7a-a46b629ede54.webp" style="width:40%;margin-left:0%;margin-top:2em">

## Filscan.io has been updated

[**Filscan.io**](http://filscan.io/) now has increased speed, UI improvements, and visual analytics, including: 24hr Base Fee Variations, FIL Distribution, sector ratios, lucky values, and details about transaction lists. [**Check it out!**](https://filscan.io/#/home)

<h3 style="margin-top:3em">COMMUNITY</h3>

Filecoin Community Meetup Program

Filecoin community meetups are an opportunity to meet the people behind the many tools and projectsbeing built in the Filecoin ecosystem. If you missed the February meetup, [**catch up on the recording**](https://www.youtube.com/watch?v=fpGvQtUoHaw) and be sure to join us on March 9th at 1pm PST for the next virtual meetup - [**register here**](https://www.meetup.com/Filecoin-San-Francisco/events/276425691/). Additionally, if you are interested in giving a short demo on your project during our March meetup, please [**sign up here**](https://docs.google.com/forms/d/e/1FAIpQLSc5Ol4Q_FpdnM61gQRQ10DLLrRAy8-j6YrfWUBEbcVVkNQ4mQ/viewform).

<img src="/uploads/33a29e46-4fc2-44a3-916f-b51988547a3b.webp" style="width:18%;margin-left:0%">

## DI2F Workshop at IFIP Networking 2021: Decentralizing the Internet with IPFS and Filecoin

The first DI2F workshop, taking place at a premier networking conference, will bring together attendees from academia, industry, and the Filecoin and IPFS ecosystems, as well as the broader decentralized internet communities. The workshop welcomes work-in-progress papers, as well as position statements and project demos. A capstone competition will give attendees the chance to build on top of IPFS and Filecoin, and win prizes. The call for papers, demos, and competition projects is open until **March 19th**. To learn more and submit, check out the [**Call for Contributions on the IFIP Networking 2021 website**](https://networking.ifip.org/2021/workshops/di2f-decentralising-the-internet-with-ipfs-and-filecoin.html).

<h3 style="margin-top:1em">&nbsp</h3>

{{< youtube id="JQ5YwYgFCv0" title="Data DAOs - Olaf Carlson Wee" >}}

<h3 style="margin-top:3em">The Future of DeFi with Filecoin</h3>

Filecoin is working to make DeFi investing easier by expanding the amount of data apps can process. Sound investing is based on data, but until now, [**it hasn’t been possible to store large data sets on a decentralized network like Ethereum**](https://www.youtube.com/watch?v=JQ5YwYgFCv0). DeFi investors’ ability to gain clear insights into markets has been limited. But Filecoin allows for the analysis of large amounts of data on a decentralized platform native to blockchain. This opens up the ability for DeFi investors to derive the insights they need to invest wisely across this burgeoning sector. [**Watch now**](https://www.youtube.com/watch?v=JQ5YwYgFCv0).

<h3 style="margin-top:3em">✊ Get involved!</h3>

Head over to the [**Filecoin project on GitHub**](https://github.com/filecoin-project) and be sure to take a look at the [**community resources**](https://github.com/filecoin-project/community). Ask questions in the [**Filecoin Slack**](http://filecoin.io/slack), discuss issues or new ideas in [**the community forum**](https://discuss.filecoin.io/), or send us your thoughts [**on Twitter by following @Filecoin**](https://twitter.com/Filecoin).

[**The Filecoin blog**](https://filecoin.io/blog/) and our [**YouTube channel**](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA) are also great sources of information if you’re just getting started. If all else fails, send a reply to this email, and we’ll help you track down an answer.
