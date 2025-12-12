---
aliases: []
author: ""
categories:
  - updates
date: "2023-02-22T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: "FVM is now live on mainnet, now what? Find out in this week’s Filecoin News. "
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-news-61.en.md
related_article_2: content/blog/posts/filecoin-news-60.en.md
related_article_3: content/blog/posts/filecoin-news-59.en.md
share_image: /uploads/blog-filecoin-news.webp
title: Filecoin News 63
---

![](/uploads/filecoin-news-61.webp)

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Announcements</b></h3>

## FVM is live on Mainnet

On March 14th, the [Filecoin Virtual Machine (FVM)](http://fvm.dev/) officially launched on Filecoin mainnet! Now the network supports smart contracts and user programmability via the FVM, unlocking the enormous potential of an open data economy. This launch is a landmark milestone in Filecoin’s larger roadmap, which aims to bring open access and public verifiability to the three key arms of the data economy (storage, compute and content-delivery). Read all about the major upgrade, the ecosystem partners that are committed to supporting and integrating the FVM, and more in the [announcement blog post](https://filecoin.io/blog/posts/fvm-is-live-on-mainnet/).

## Refreshing the Filecoin Bug Bounty Program

Now that the FVM has launched, the community is excited to announce a refreshed [Filecoin bug bounty program,](https://security.filecoin.io/bug-bounty/) featuring increased rewards up to 500k USD for critical issues and inclusion of programmability features in scope. Post-launch, the community continues to be committed to guaranteeing the security of the Filecoin network, now including its new and updated components: the FVM, the EVM runtime, and its dependencies. With this update, we once again extend an invitation to security researchers, developers, and bug bunters to help us identify latent risks and problems that may remain in the codebase after mainnet launch. Learn more about the program, the updated scope, rules and more in this [post](https://filecoin.io/blog/posts/refreshing-the-filecoin-bug-bounty-program/).

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Community</b></h3>

## FVM Imaginarium: Liquid Staking

As the Filecoin network grows, the demand for FIL as collateral increases, thus underscoring the need for more options for token holders to connect with Storage Providers. The FVM launch paves the way for creating more efficient capital markets via DeFi staking and leasing protocols. In [this blog post](https://filecoin.io/blog/posts/fvm-imaginarium-staking-and-leasing-protocols/), we provide an overview of staking protocols on FVM, and showcase the projects who are soon releasing their solutions!

## Celer Now Supports the FVM

Shortly after FVM launch, [Celer Network](https://celer.network/) announced that they have successfully integrated support for both [cBridge](https://cbridge.celer.network/) asset bridging and Celer Inter-chain Messaging (Celer IM) generic message passing technology for the FVM! This initial integration will allow cross-chain bridging for the following assets: USDC, WETH, WBTC, and USDT between the FVM and Ethereum. Users will be able to transfer these assets seamlessly across all Celer-supported chains, all while enjoying Celer Network’s fast finality, low-costs, and extremely secure services. Read all about the integration in [their announcement](https://blog.celer.network/2023/03/20/celer-cbridge-and-im-support-launched-on-the-filecoin-virtual-machine-fvm/).

## Video Streaming with FVM and Livepeer

The launch of the FVM opens up the opportunity for Livepeer to credibly provide a compelling video archival and storage solution via Filecoin to developers. For the first time, social app developers can retrieve on-chain guarantees that their video assets have been permanently stored on a decentralized network. This is an important primitive that builds trust with end-users who value transparent content ownership and control. For developers of social and creator focused video applications looking to get started with leveraging these video archival capabilities, check out this [template application](https://github.com/suhailkakar/FVM-x-Livepeer-Example-App) showing the Livepeer + FVM integration.

## Molly Mackinlay Shares Filecoin's Future Following FVM Launch in Coindesk TV Interview

In a recent interview with Coindesk TV, Molly Mackinlay, Head of Engineering at Protocol Labs, shared insights into the recent FVM network upgrade that went live on March 14th. Mackinlay spoke about the growing excitement around Filecoin as more and more developers are designing dapps on the platform and utilizing the smart contracts enabled by FVM. Watch the full interview [here](https://www.coindesk.com/video/protocol-labs-exec-on-future-of-filecoin/).

## Colin Evran Discusses Open Data Economy with Nasdaq TradeTalks

Colin Evran, Head of Ecosystem Growth at Protocol Labs, recently sat down with Jill Malandrino from Nasdaq #TradeTalks to discuss the FVM network upgrade's role in enabling the open data economy and how it has the potential to revolutionize how data is captured and valued. Evran highlighted the importance of decentralized technology in enabling more secure and efficient data management solutions. The full interview is available [here](https://www.youtube.com/live/xRDnKXrKmKE?feature=share).

## Ankr’s new Filecoin RPC Connection is live

Ankr is now offering [Filecoin hosted nodes as a service](https://www.ankr.com/rpc/filecoin), allowing Web3 apps and developers to easily communicate with the Filecoin storage network thus strengthening Filecoin’s JSON RPC API layer with the ability to handle vast traffic loads. Additionally, developers can now access Filecoin Public, Premium, and Enterprise RPC endpoints, make API requests, and receive responses that are identical to the results they would get by running a Filecoin node themselves. Learn more about the partnership in [Ankr’s announcement](https://www.ankr.com/blog/ankrs-new-filecoin-rpc-connection-is-live/).

## Announcing the NFT Forever Project by NFT.Storage

[NFT.Storage](http://nft.storage/) has launched the NFT Forever Project, an initiative that aims to guarantee verifiable storage with smart contracts on the FVM. Initially, the NFT Forever Project will provide straightforward smart contract based Filecoin deal renewals. In the future, data monitoring and integrity features will be added until NFT.Storage offers a complete trustless, perpetual storage solution. [Learn more about the NFT Forever Project on GitHub](https://github.com/lotus-web3/dotStorage-deal-renewal) and checkout the [Base Contract Toolkit](https://github.com/filecoin-project/fvm-starter-kit-deal-making) to get started storing data on Filecoin with smart contracts today.

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Tools</b></h3>

## HTTP Retrieval Benchmarks with Boost

Boost recently released a feature which enables storage providers to serve HTTP retrievals (full piece retrieval and range requests) with [booster-http](https://boost.filecoin.io/experimental-features/http-retrieval). Additionally, there is now an option to perform range requests, which means clients can select a range of content in the full piece to retrieve. Learn more about Boost and the retrieval benchmarks tool in this [recent blog](https://filecoin.io/blog/posts/http-retrieval-benchmarks/).

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Events</b></h3>

## Hong Kong Web3 Festival

Headed to the [Hong Kong Web3Festival](https://www.web3festival.org/hongkong2023/home?lang=zh-CN)? Please join us for FIL Hong Kong activities, April 12 through April 15. Mark your calendar for the following events:

- April 12 - 15 - Filecoin x IPFS Booth at [Hong Kong Web3 Festival](https://www.web3festival.org/hongkong2023/home?lang=zh-CN)
- April 12 - 15: FIL Hong Kong Network Base, featuring lightning talks, workshops, networking and more!
- April 15: Filecoin DeStorHK at Hong Kong Web3Festival - DeStor is a forum for Filecoin Storage Providers and Clients to come together to discuss decentralized storage solutions. Apply to attend DeStorHK! Note: you must have a Hong Kong Web3 Festival ticket to attend.

## Sustainable Blockchain Summit

Join us at the 4th international Sustainable Blockchain Summit (SBS) in Boston on April 13th. SBS will bring together hundreds of experts and enthusiasts in ReFi, Energy Systems, Carbon Markets, and Cryptoeconomics to collaborate on projects that align the global economy with the natural world. SBS offers unparalleled opportunities to engage with experts and enthusiasts in the quest for a harmonious balance between web3 technology and the biosphere Prepare for an action-packed day filled with insightful talks, engaging panels, and hands-on workshops, tailored for those eager to make a lasting, positive impact on the world. Don't miss your chance to be a part of this groundbreaking event - secure your spot today by registering at SBS.tech

In addition, seize the opportunity to contribute your skills and expertise to the ongoing [Sustainable Blockchain Hackathon](https://sbsboston.devpost.com/?ref_feature=challenge&ref_medium=discover) leading up to SBS. Join forces with sustainability experts and innovative developers to build transformative solutions at the nexus of web3 and the environment. Delve into advanced tools and datasets, such as CO2.storage, The Filecoin Virtual Machine (FVM), Hyphen, The Guardian by Hedera, and Celo, all while receiving support from the very teams that designed them.

## Filecoin Network Base in Austin, TX

Headed to Consensus? Join the Filecoin community on April 24-26th for the Filecoin Network Base in Austin, Texas hosted by the Filecoin Foundation. The program will feature two days of lightning talks, workshops, and the latest updates on the Filecoin Virtual Machine.

## ✊ Get Involved

Head over to the [**Filecoin project on GitHub**](https://github.com/filecoin-project) and be sure to take a look at the [**community resources**](https://github.com/filecoin-project/community). Ask questions in the [**Filecoin Slack**](http://filecoin.io/slack), discuss issues or new ideas in [**the community forum**](https://discuss.filecoin.io/), follow us on WeChat @Filecoin-Official or send us your thoughts [**on Twitter by following @Filecoin**](https://twitter.com/Filecoin).

[**The Filecoin blog**](https://filecoin.io/blog/) and [**YouTube channel**](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA) are also great sources of information if you’re just getting started.

To receive this newsletter directly to your inbox, [**subscribe**](https://mailchi.mp/filecoin.io/subscribe)!
