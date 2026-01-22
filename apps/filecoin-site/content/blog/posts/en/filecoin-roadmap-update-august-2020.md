---
aliases:
  - /blog/roadmap-update-august-2020/
author: ""
categories:
  - updates
date: "2020-08-31T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Our August 2020 roadmap update covers progress made since the last roadmap update - with a special celebration of today’s launch of the Filecoin Space Race, our incentivized testnet competition. The last two months have seen amazing progress across the project - here are some highlights.
image:
  alt: Filecoin Roadmap Update August 2020
  url: /uploads/whitepaper-main-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/aug2020-roadmap-update-social.webp
title: Filecoin Roadmap Update August 2020
_template: blog_detail
---

Our August 2020 roadmap update covers progress made since the last roadmap update - with a special celebration of today’s launch of the Filecoin Space Race, our incentivized testnet competition. The last two months have seen amazing progress across the project - here are some highlights:

## Space Race

💸 **Space Race**. Earlier today, we launched [the Filecoin Space Race](https://filecoin.io/blog/welcome-to-space-race), our 3 week collaborative competition intended to stress-test the network, encourage participation all over the world, and provide miners with an opportunity to test-drive Filecoin in advance of the mainnet launch. This is a huge milestone for the Filecoin project - marking our last major update before mainnet launch and the culmination of months of hard work to bring the Filecoin protocol and the Lotus implementation into “mainnet-ready” condition. We expect to continue to make many improvements throughout the competition as miners stress-test the network and help discover issues.

🎛 **Calibration Devnet**. Our month-long calibration period helped miners prepare for the Space Race by successfully completing real storage and retrieval deals and executing the full sector life cycle. Over the course of this period, we saw miners reach a 97% success rate on retrieval deals - and 24⁄50 top miners reached a **_100%_** success rate on their storage deals.

![Filecoin success rates](https://filecoin.io/vintage/images/blog/update-success-rates.png)

⛏ **Mining**. The mining community continues to accelerate quickly, with miners all over the world onboarding Petabytes of storage onto the Filecoin Testnet. In the past month, they’ve reached a new high watermark of >25PB of proven storage – a nearly 3x improvement from our last roadmap update! The calibration devnet also saw super fast sealing - over 5PB/day! The Filecoin Testnet was updated to the most recent Space Race code at 3pm PT today (10pm UTC | 6am CST) - and miners are already off to the races. 🎉

![Storage stats that show Filecoin progress](https://filecoin.io/vintage/images/blog/update-storage-stats.jpg)

## Mainnet Functionality

💪 **Mainnet Functionality Hardening**. A major focus for our work has been hardening the lifecycle of storage and retrieval deals in the Filecoin blockchain - including the ability to upgrade committed space with real deals, store multiple deals in one sector, request [fast-retrieval](https://github.com/filecoin-project/lotus/pull/2323) from miners via an unsealed copy, and exchange filecoin for successful deals via payment channels (which saw huge improvements). We also introduced “real” gas costs to VM executions ⛽ - including one of the first implementations of [EIP1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md). See the [Lotus 0.5.0 release](https://github.com/filecoin-project/lotus/releases/tag/v0.5.0) for more details.

💎 **Drand Mainnet**. The Filecoin Network uses Drand (a production-grade distributed randomness beacon network) as an external source of randomness for consensus. As of the drand mainnet launch, this randomness network now includes all participants in the League of Entropy such as Cloudflare, Ethereum, Chainsafe, EPFS, UCL, Truffle, and others. Read more about drand [on the drand blog](https://drand.love/blog/2020/08/10/drand-launches-v1-0/), and learn about how Filecoin uses drand [in our blog post](/blog/distributed-randomness-and-leader-elections/).

🔐 **Phase 2 Trusted Setup**. We completed [Phase 2 of our Trusted Setup Ceremony](https://filecoin.io/blog/trusted-setup-update/) - where participants from all over the world contributed their resources to help generate secure parameters for the Filecoin network, along with public attestations for anyone to verify. We had 15-25 unique participants per circuit (6 total circuits) including organizations like the Ethereum Foundation, Consensys, Supranational, Ocean Protocol, IPFSMain, Sigma Prime, and many others. More coming on this soon - including instructions for any 3rd party to verify the Trusted Setup output.

🔋 **Final Mainnnet Proofs**. Based on the outputs of the Phase 2 Trusted Setup, we released the final SDR Proof-of-Replication parameters for mainnet launch. These proofs have been audited for correctness, completeness, and soundness. You can find them at [https://proofs.filecoin.io](https://proofs.filecoin.io "https://proofs.filecoin.io"). **Note**: Miners should expect Filecoin to regularly upgrade its proofs after launch.

⚖️ **Filecoin’s Cryptoeconomic Constructions**. We made large improvements to defining and solidifying Filecoin’s cryptoeconomic constructions - including updates to the live code in our latest devnets. As part of that, we created an in-depth explainer on how the Filecoin economy works, which we’ll be sharing with miners along with a _CryptoEcon Deep Dive_ during Space Race. We’re still conducting extensive modeling and testing to finalize parameters, and expect to make more changes for mainnet launch.

## Ecosystem Highlights

👨‍👩‍👧‍👦 **Filecoin Ecosystem.** There are now over 70 meaningful organizations building on and collaborating with the Filecoin testnet. Here are just a few recent updates:

- **Textile’s Powergate:** [Powergate](https://docs.textile.io/powergate/) is an API driven solution to deploy multi-tiered storage based on IPFS and Filecoin into systems and applications. Devs can persist data on Filecoin, ensure availability on IPFS, manage one or many Filecoin addresses with access control, monitor long-term storage deals, use multiple supported clients and libraries, and more!
- **Truffle:** Truffle announced their [collaboration with Filecoin](https://www.trufflesuite.com/blog/announcing-collaboration-with-filecoin) and released `truffle preserve`, a command that allows developers to preserve application data from the Truffle CLI. Next up is a [Filecoin-flavored Ganache](https://github.com/trufflesuite/ganache-filecoin-alpha-cli) that developers can use to start a Filecoin simulator. With one command, you get both a Filecoin (simulated Lotus) node and an IPFS server, automatically configured and ready to go. You can use this simulator in place of a real Lotus node or Powergate’s localnet, for much faster development and unit tests. More updates to come!
- **Space:** The Fleek team announced their latest product, Space, an open source file storage, sharing and collaboration platform built on the distributed web. You can think of V1 of Space as a private, encrypted, p2p version of dropbox or google drive, and you can use Space the same way that you would use those products. The big benefit of using Space over those other products is you don’t need to sacrifice your privacy and allow those companies to spy on you and control your files/data, because with Space everything is private, user owned, end-to-end encrypted, and peer-to-peer!
- **Retrieval Markets:** Chainsafe recently demoed an [initial implementation of retrieval markets](https://www.youtube.com/watch?v=eUcsZ1JS9pM&feature=youtu.be&t=7977) during HackFS. Their retrieval tool incorporates a Lotus node into a libp2p [gossipsub](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub)-based peer-to-peer network. This network allows clients to request files from either the peer-to-peer network or the Lotus node and its storage miner peers. Check out [their code](https://github.com/ChainSafe/fil-secondary-retrieval-markets) on GitHub.
- **Custody support:** Token custodians [Gemini](https://gemini.com/blog/upcoming-support-for-filecoin) and [Anchorage](https://medium.com/anchorage/anchorage-to-support-custody-and-unlocking-contracts-for-filecoin-at-launch-b4f514012793) have all announced support for custodianship of Filecoin tokens at mainnet launch. Anchorage will also support unlocking contracts for Filecoin at launch. If you plan to hold Filecoin, check out these custodian options to learn more.

🔥 **Filecoin Ignite**. Filecoin Ignite continues to help support the fast-growing Filecoin ecosystem with a series of hackathons and learning events for the community. HackFS, our first event, was a huge success.

- **HackFS**: HackFS, a 30-day virtual hackathon in collaboration with the ETHGlobal team, helped onboard over 130 projects onto the decentralized web. In total, more than 470 hackers from 50 countries across 19 time zones participated in the event. Dive deeper into the story [behind](https://filecoin.io/blog/hackfs-teams-vol-1/) [10](https://filecoin.io/blog/hackfs-teams-vol-2/) [teams](https://filecoin.io/blog/hackfs-teams-vol-3/) that participated in the hackathon, relive the [HackFS Finale](https://filecoin.io/blog/hackfs-finale/) and find out which teams took home prizes, or learn more about all 134 final projects in the HackFS Showcase.
- **Spark University Hackathon**: is a 6 week virtual hackathon run by [Encode Club](https://www.encode.club/), an online community of university students, academics and developers building in blockchain. Over 50 teams from universities across the world responded to two Filecoin challenges and the winners will be announced at the live final next Monday August 31st.
- **Apollo**: [APOLLO](https://gitcoin.co/blog/apollo/) is a 6 week program run by Gitcoin designed for a community of builders and makers in the Filecoin ecosystem. Think of it as Mission Control for the top InterPlanetary Filecoin developers across space and time! There will be opportunities for 150+ highly talented builders to become pioneers of the Filecoin and Web3 ecosystems together. Applications close on Friday August 28th - [sign up here](https://gitcoin.co/hackathon/filecoin/onboard) today.
- **Filecoin Launchpad**: The [Filecoin Launchpad Accelerator](https://tachyon.xyz/) is a full-time, fully-remote program dedicated to startups building for the distributed and decentralized web. Between 15 and 20 teams will be admitted to the program, and will go through twelve weeks of funding, mentorship, and programming around business and blockchain-specific issues, culminating in a Demo Day. Teams leverage access to the ConsenSys and Protocol Labs networks and expertise, ranging from entrepreneurs and legal advisors to pathbreaking technical researchers. Each team will receive $80,000 USD in investment. The application deadline is now extended to August 28th!
- [Reach out and let us know](https://forms.gle/yhGiSC8rRcAY9YvE8) if you’d like to host an Ignite event! With over 4 Million FIL and 250K USD in prizes spread out across events, now is a great time to start building on Filecoin. 🚀

![Randomness Summit](https://filecoin.io/vintage/images/blog/update-randomness-summit.jpg)

🎲 **Randomness Summit**. Celebrating the launch of the League of Entropy’s production-level drand beacon, the [Randomness Summit](https://randomness2020.com/) took place on 13 August. Speakers included Bryan Ford, Joseph Boneau, Justin Drake, Kelly Olson, and Vitalik Buterin, as well as representatives from LoE partners Cloudflare, Kudelski Security, Protocol Labs, and the University of Chile, with talks ranged from the fundamentals of randomness to the future of VDFs. A [recording of the full summit](https://www.youtube.com/watch?v=661hUozi9oo) is available in Protocol Labs’ YouTube channel.

🛳️ **Filecoin DevGrants Wave 4**. We received a terrific response from community members to [Wave 4 RFPs](https://github.com/filecoin-project/devgrants/tree/master?tab=readme-ov-file#requests-for-proposals-rfps) which has included 28 proposals so far. New proposals are still being accepted on a rolling basis as we gear up for mainnet. A full list of grant projects will be published soon, and Winning Wave 4 proposals so far include Snarks as a Service for miners, integrations with Ceramic Protocol and OrbitDB, improvements to the Bellman library used by Filecoin Proofs, ENS support for Filecoin addresses, and national legislative documents made searchable and archived on Filecoin. More amazing proposals are currently being reviewed. Wave 5 proposals for the Filecoin DevGrants program are due on October 1st and new Wave 5 RFPs will be published soon. – [Apply here](https://filecoin.io/grants/)!

📞 **Community Events.** The community continues to gather regularly to share progress and new ideas. The past two months saw many meetups across the dapp developer, miner, and ecosystem client communities:

- **Storage Devs Show & Tell**: In the third installment of the Filecoin Storage Dev Show & Tell, we had presentations from across the ecosystem. The team from BlockRocket showed us the NFT Snapshot Bot, MetaMask previewed Filecoin Snap, we learned about Filecoin being added to Ocean Protocol commons marketplace and got a sneak peek of the Space Race dashboard and bots. Leandro Barbosa gave us a demo of Voodfy Video Transcoding on IPFS & Filecoin and this was followed by a demo of OpenBazaar’s Filecoin wallet - A [recording of the Dev Show & Tell](https://youtu.be/EPG-Y9Gkg0w) is available on the Filecoin Youtube channel.
- **Filecoin Virtual Community Meetup**: Filecoin community meetups are an opportunity to gather the Filecoin community and showcase the many tools and projects being built in our ecosystem. This month’s meetup featured Figment Networks who talked about Hubble, a reputation system for validators and Datahub which helps developers build on blockchains faster. The team from Fleek then gave a preview of Space Storage, a new file storage, sharing and collaboration platform with a focus on privacy. We then heard from Gitcoin who gave us an overview of the APOLLO program, your mission control to engage with the builders and doers within the Filecoin community. The meetup concluded with an overview of Space Race from Mosh. You can [catch up on all the presentations](https://youtu.be/CxH58f9OIvo) on the Filecoin Youtube channel.
- **Mining Community Call**: In last month’s Mining Community Call we heard from the Filecoin team. Colin shared an ecosystem update and gave an overview of all of the progress that had been made since the last mining community call in May. Ian and Molly talked about how to prepare for Space Race, our incentivized testnet competition starting this week and we finished up with a Q&A moderated by Aayush. A [recording of the Mining Community Call](https://youtu.be/jhRQkEAHofA) can be found on the Filecoin Youtube Channel. We also have lots of great events lined up for our mining community as part of Space Race.
- **Filecoin Master Class**: On August 17th, we kicked off the Master Class series by demonstrating [how to use the Slate API](https://www.youtube.com/watch?v=Rknj2GqvJtg&t=6s) with Filecoin and IPFS. The second session in the Master Class series, Tuesday, September 1 at 9am pst, will cover how to use Fleek’s Space Daemon to build decentralized apps, including a live demo. [Register here](https://www.eventbrite.com/e/filecoin-master-class-registration-118042974715?ref=estw).
- **China Community Events**: Colin and Keren presented in several blockchain community events in China including the [IPFS Ecology Industry Summit](https://play.yunxi.tv/livestream/flash?id=e1eecab932304450b9e332502dbbf490#/) in Hangzhou, [Greater Bay Area Blockchain Summit](https://mp.weixin.qq.com/s/7SbCX1JfOXTPfEiAHNJM2A) in Shenzhen. We shared a Filecoin sizzler of our rapidly growing ecosystem with exciting clips of Filecoin meetups. Colin showed us an update of recent community events and talked about the Filecoin Ignite program including Space Race, HackFS, Apollo project and many more! Keren shared an overview of the Filecoin project, recent achievements and different ways community members can join the Filecoin ecosystem. Ecosystem projects including Textile, Truffle, Fleek and Filecoin devgrant winning teams also presented their products and current progress at the stage.

## Coming Soon: Mainnet Launch

This is it! Our final remaining milestone is the **Filecoin mainnet launch** in mid-to-late September.

As before, we will update the [public project roadmap Gantt chart](https://app.instagantt.com/shared/s/1152992274307505/latest) with the final burndown steps and latest estimates. There has been _phenomenal_ progress over the past month across the entire Filecoin ecosystem - with miners keeping up with \~weekly network updates in the calibration devnet, hundreds of amazing projects being developed in Filecoin Ignite hackathons, and tons of events and improved tools to celebrate.

So many teams have been a part of reaching this new phase for the Filecoin network. Huge thanks to:

- The many **mining communities** that have helped test and improve Filecoin in devnets and testnets for the past 1.5 years.
- The **ecosystem developers** like Textile, Open Work Labs, Fleek, Truffle, Figment, Zondax, Digital Mob, and more who have created tooling and infrastructure to make the Filecoin network stronger and more accessible to many developers.
- The **Filecoin implementation teams**, Chainsafe and Soramitsu, who have been working hard on the [Forest](https://github.com/ChainSafe/forest) and [Fuhon](https://github.com/filecoin-project/cpp-filecoin) implementations to reach full interoperability with Lotus.
- The **network clients and partners** who have created phenomenal applications using Filecoin for decentralized storage - like [Starling](https://starlingstorage.io/), Space, [Slate](https://github.com/filecoin-project/slate), and all the amazing projects from HackFS.
- **Community organizers** like EthGlobal, Gitcoin, Tachyon, Encode Club, and more who have brought this community together and helped onboard many many new contributors.
- And of course **the wider community** - who have helped improve Filecoin in myriad ways (from documentation, to comms, to community support).

You all are what make this network great - and we’re so honored to be working alongside you. 🛠️
