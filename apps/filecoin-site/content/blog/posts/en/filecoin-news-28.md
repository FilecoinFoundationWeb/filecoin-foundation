---
aliases: []
author: ""
categories:
  - updates
date: "2021-10-06T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: "Filecoin Orbit is here: celebrating one year of Filecoin mainnet!"
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-news-27.en.md
related_article_2: content/blog/posts/filecoin-news-26.en.md
related_article_3: content/blog/posts/filecoin-news-20.en.md
share_image: /uploads/blog-filecoin-news.webp
title: "Filecoin News 28: Filecoin Orbit, Proofs v10.0.0, Halo 2, and More"
---

![](/uploads/filecoin-news-28.webp)

## Introducing Filecoin Orbit

[![](/uploads/orbit-announcement-twitter.webp)](https://orbit.filecoin.io/)

### Almost one short year ago, the Filecoin mainnet went live

On October 21-22, the Filecoin community is coming together to celebrate with Filecoin Orbit. Join to hear panels, talks, workshops, and demos from across the ecosystem as people review what has been built in the last year, and what lies ahead. And get an early lead on the activities starting on October 18th with community-organized events.

[Register Now!](https://orbit.filecoin.io/)

## Announcements

[![](/uploads/research-logo-2.webp)](https://github.com/filecoin-project/rust-fil-proofs)

### Proofs v10.0.0

[CryptoComputeLab](https://research.protocol.ai/groups/cryptocomputelab/) released [Proofs v10.0.0](https://github.com/filecoin-project/rust-fil-proofs)! This release contains CUDA support, which shows a noticeable performance improvement over OpenCL, as well as numerous proving updates. We are seeing a major speed-up in various phases of proving including seal pre-commit phase2, commit phase2 and WindowPoSt.

Miners are currently testing and reporting performance gains as well via Lotus v1.11.3rc tags. This release also uses dependencies shared with other teams such as ZCash, rather than our own forked versions of them. The work of feature merging several dependencies will allow a smoother future integration with the Halo recursive proving system.

[![](/uploads/halo.webp)](https://filecoin.io/blog/posts/reviving-halo-2-with-protocol-labs-filecoin-foundation-ethereum-foundation-and-electric-coin-co/)

### Reviving Halo 2 with Protocol Labs, Filecoin Foundation, Ethereum Foundation, and Electric Coin Co

Recently [Electric Coin Co.](https://electriccoin.co/) (ECC) [announced](https://electriccoin.co/blog/ethereum-zcash-filecoin-collab/) that [Protocol Labs](https://protocol.ai/), the [Filecoin Foundation](https://fil.org/), the [Ethereum Foundation](https://ethereum.org/en/foundation/), and ECC would be collaborating to explore research and development of [Halo](https://electriccoin.co/blog/halo-recursive-proof-composition-without-a-trusted-setup/) — a solution to zero knowledge recursive proofs without requiring a trusted setup. [Learn more about the collaboration](https://filecoin.io/blog/posts/reviving-halo-2-with-protocol-labs-filecoin-foundation-ethereum-foundation-and-electric-coin-co/).

## Tools

[![](/uploads/chainlink-grant.webp)](https://filecoin.io/blog/posts/announcing-chainlink-filecoin-joint-grants-for-dapps-combining-decentralized-storage-and-oracles/)

### Extended Deadline for Filecoin-Chainlink Grant

If you’re interested in applying to the [Chainlink](https://chain.link/) and Filecoin joint grant initiative [announced in early August](https://filecoin.io/blog/posts/announcing-chainlink-filecoin-joint-grants-for-dapps-combining-decentralized-storage-and-oracles/), which supports the development of superior hybrid smart contract applications powered by tamper-proof file storage and universal connectivity, the deadline has been extended by two months to December 17th, with applications to be accepted on a rolling basis.

[![](/uploads/lotus-upgrade.webp)](https://github.com/filecoin-project/lotus/releases/tag/v1.11.3)

### Lotus Upgrade v1.11.3

All Lotus users, including node operators, storage providers and clients, are highly recommended to upgrade to the [lotus v1.11.3 feature release](https://github.com/filecoin-project/lotus/releases/tag/v1.11.3) that was made available last week. It includes many enhancements that result in performance improvements in different areas, including functionality to reject new deals if the staging deals area is full, command to list/remove expired sectors locally, and other [features, improvements, and bug fixes](https://github.com/filecoin-project/lotus/releases/tag/v1.11.3).

[![](/uploads/chainsafe-files.webp)](https://files.chainsafe.io/)

### ChainSafe Files

[ChainSafe Files](https://files.chainsafe.io/) is an online platform to store, view, and share files. The product leverages IPFS and Filecoin to give users all the benefits of distributed storage and blockchain technology. [Learn](https://filecoin.io/blog/posts/chainsafe-files-building-privacy-preserving-cloud-storage/) how Chainsafe is revolutionizing what it means for users to have private access to their files while also leveraging decentralized storage, security, and persistence.

## Storage Providers

[![](/uploads/minerx.webp)](https://files.chainsafe.io/)

### MinerX.2 Recap + Next Steps

The MinerX.2 Fellowship Program had an incredibly successful run and wrapped up at the end of September. Around 35 storage providers from Asia, Europe, North America, and Oceania participated in the program over the past four months. Fellows contributed to testing major improvements to deal stability and improved deal making in lotus, actively driving discussions for supporting SPs in the ecosystem, providing feedback and offering insights into the SP experience, and making lots of deals with clients.

We’re really grateful for the productive engagement with the Fellows over the last months! Moving forward, MinerX.3 has officially kicked off, scoped specifically for testing upcoming releases for lotus, and we hope to continue engaging Fellows and members of the community interested in furthering the deal making experience in the new Enterprise Storage Providers WG (join us in [#enterprise-sp-wg](https://filecoinproject.slack.com/archives/C02GQUMFQVA)).

## Community

[![](/uploads/miner-survey-graphic-v2-1.webp)](https://docs.google.com/forms/d/e/1FAIpQLSeiljqOeM0TO2KcmmxyEtvb9pn08zIDg85exfodi48BoeCqsw/viewform)

### Take the Filecoin Community Survey

Calling all members of the Filecoin ecosystem! As we approach the one-year anniversary of Filecoin mainnet launch, the [Filecoin Foundation](https://fil.org/) wanted to use this opportunity to gather some feedback from Filecoin community members. Please [complete this survey](https://docs.google.com/forms/d/e/1FAIpQLSeiljqOeM0TO2KcmmxyEtvb9pn08zIDg85exfodi48BoeCqsw/viewform), which will help guide the direction of protocol research and improvement — what technical enhancements, protocol changes, or research do you dream of seeing? The survey is open now through Oct. 22nd. Thank you in advance for your participation!

### Chocolate Upgrade

[Filecoin Network v14 Chocolate upgrade](https://github.com/filecoin-project/community/discussions/74#discussioncomment-1398542) is a small network upgrade that aims to improve the Filecoin protocol and storage providers' user experience. It's called Chocolate because this upgrade has lots of goodies for the network such as small UX and protocol improvements that the network doesn't need, but really wants!

Currently, the core devs and the community are considering including the following FIPs:

- [\[FIP-0020\]](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0020.md): Add return value to ‘WithdrawBalance’
- [\[FIP-0021\]](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0021.md): Correct quality calculation on expiration
- [\[FIP-0022\]]([FIP-0022]): Bad deals don't fail PublishStorageDeals
- [\[FIP-0023\]](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0023.md): Break ties between tipsets of equal

More network upgrade and implementation release details can be found at the repo under [Discussions](https://github.com/filecoin-project/community/discussions/74#discussioncomment-1398542).

## Events

[![](/uploads/nft-sticker.webp)](http://poap.xyz/)

### POAP NFT Hunt

Explore New York City while collecting NFTs! During the week of the [NFT.NYC](https://www.nft.nyc/) conference in NYC, [POAP](https://poap.xyz/) is hosting an NFT Treasure Hunt! From Oct. 31-Nov. 4, visit tourist attractions, art galleries, bakeries, and the hubs of NYC’s degens to collect branded POAP NFTs and win prizes.

For more information of the sponsors, locations, and prizes up for grabs 👉 [poap.nyc](http://poap.xyz/)

NFT.storage is sponsoring the hunt and will have this beaut of a POAP available for people to claim at the Edison Ballroom in the heart of Times Square.

[![](/uploads/chainlink-hack.webp)](https://research.protocol.ai/blog/2021/consensusday-becomes-consensusdays-21/)

### Chainlink Hackathon

[Register today](https://chain.link/hackathon) to join thousands of developers for the biggest Chainlink hackathon yet. You’ll get the chance to build the next generation of hybrid smart contracts alongside developers, creators, artists, and industry-leading mentors from across the blockchain ecosystem.

A total of $50,000 in prizes are available across exciting new Filecoin and IPFS challenges — including an all new Social Networking category. The Filecoin developer advocates are looking forward to meeting you in the builders’ workshops and to supporting you as you build your projects.

[![](/uploads/browsers3000-winners.webp)](https://blog.ipfs.tech/browsers-3000-hackathon-winners/)

### Browsers 3000 Winners

In mid-September, the Filecoin, IPFS, and Protocol Labs communities came together to bring down the curtain on the [Browsers 3000 Hackathon](https://fil.org/events/) at the official closing ceremony. Browsers 3000 was a six-week hackathon that lasted from July to August. Over 30 projects building on Filecoin and IPFS joined the hackathon to iterate, test, and pitch their solutions to modernize “the browser” for the decentralized web3 world that is coming soon.

At the culmination of the event, three startups ([NetSepio](https://devpost.com/software/netsepio), [Blockforge](https://devpost.com/software/blockforge), and [IPFS WebGL Gaming](https://devpost.com/software/ipfs-webgl-gaming-platform)) were recipients of a total of $18,000 in prizes. You can [watch the full closing ceremony](https://www.youtube.com/watch?v=KL58k7dXj54&list=PLuhRWgmPaHtR2MDeMaiUcsBmBqpIBqFEP), including presentations of the winners and many other amazing projects that participated in the hackathon. Check out this new [blog post](https://blog.ipfs.tech/browsers-3000-hackathon-winners/) for a feature on the winning projects.

## Learn

[![](/uploads/island-economy.webp)](https://filecoin.io/blog/posts/filecoin-s-island-economy/)

### Filecoin’s Island Economy

If you’ve been around the Filecoin ecosystem for a bit, you’ve heard the term “Island Economy” thrown around. But what does it mean specifically, and why is it such a useful way to understand the economics of the Filecoin ecosystem? In a nutshell, an island economy is an economy within an isolated area (physical or virtual) in which you can survive, and thrive, without having to do all the work yourself. Pique your interest? [Learn more here](https://filecoin.io/blog/posts/filecoin-s-island-economy/).

## Get Involved

Head over to the [**Filecoin project on GitHub**](https://github.com/filecoin-project) and be sure to take a look at the [**community resources**](https://github.com/filecoin-project/community). Ask questions in the [**Filecoin Slack**](http://filecoin.io/slack), discuss issues or new ideas in [**the community forum**](https://discuss.filecoin.io/), follow us on WeChat @Filecoin-Official or send us your thoughts [**on Twitter by following @Filecoin**](https://twitter.com/Filecoin).

[**The Filecoin blog**](https://filecoin.io/blog/) and [**YouTube channel**](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA) are also great sources of information if you’re just getting started.

To receive this newsletter directly to your inbox, [**subscribe**](https://mailchi.mp/filecoin.io/subscribe)!
