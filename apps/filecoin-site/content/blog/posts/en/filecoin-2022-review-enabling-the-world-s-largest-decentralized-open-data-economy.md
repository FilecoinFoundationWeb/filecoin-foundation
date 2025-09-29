---
aliases: []
author: ""
categories:
  - updates
date: "2023-01-24T06:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
draft: false
excerpt: >-
  2022 was a tumultuous year for Web3 and the world more broadly. Yet, in spite
  of challenging times, the Filecoin community had a year with many bright
  spots.
image:
  alt: ""
  url: /uploads/filecoin_2022_recap_header.webp
main_feature_inverted: false
related_article_1: content/blog/posts/the-filecoin-masterplan.en.md
related_article_2: content/blog/posts/the-filecoin-virtual-machine-explained.en.md
related_article_3: ""
share_image: /uploads/filecoin_2022_recap_header.webp
title: >-
  Filecoin 2022 Review: Enabling the World’s Largest Decentralized Open Data
  Economy
_template: blog_detail
---

2022 was a tumultuous year for Web3 and the world more broadly. Yet, in spite of challenging times, the Filecoin community had a year with many bright spots, where the community came together to build and where the importance of the mission and vision of the project was reinforced. Notably, Filecoin technology played an important role in verifying the [authenticity of information](https://twitter.com/Filecoin/status/1613238456347418630?s=20) in a year characterized by geopolitical instability and large-scale misinformation campaigns.

Filecoin’s mission is to create a decentralized, efficient, and robust foundation for humanity's information. While many recognize Filecoin as the largest decentralized storage network, the Filecoin community’s vision has always been larger than storage – storage was just the first step. The vision encompasses building decentralized infrastructure to enable programmable storage (via smart contracts), retrieval and large scale computation over data. Once these milestones are achieved, Filecoin will **enable the world’s largest decentralized data economy**, rivaling the **scale** and **suite of services** offered by centralized cloud providers and positioning it as a viable alternative.

Since the launch of the Filecoin mainnet in October 2020, the community has set out on the journey in three sequential steps (which Juan Benet, founder of Protocol Labs, calls “[the Filecoin Masterplan](https://www.youtube.com/watch?v=oY1ot0qD0Rw)”). In 2022, the Filecoin community made remarkable progress on Steps 1 and 2, while 2023 will bring a significant amount of progress in Step 3.

![](/uploads/filecoin-masterplan.webp)  
Some key highlights in the Filecoin growth story in 2022 include:

- In terms of **storage capacity**, Filecoin is now the largest decentralized storage network. >3,800 storage providers globally contribute more than 17M Terabytes of storage capacity. That’s enough to store the entire Internet Archive 275 times over. Offering more than 400x the capacity of its next-largest competitor, this also makes Filecoin the largest decentralized storage network.
- In terms of **network utilization**, client data stored on the network is up 16x in 2022 to >400PiB, with 13.9M active deals across tens of thousands of users, including **new partners,** like MagicEden, [Rarible](https://blog.ipfs.tech/2022-07-21-rarible-and-nftstorage/), [Kitsumon](https://blog.ipfs.tech/2022-07-15-ecosystem-highlight-kitsumon/), and Peeranha and large Web2 datasets from universities like UC Berkeley and USC, and the City of Philadelphia
- 500+ teams and startups are building in the ecosystem, which have raised close to $500M in aggregate and are improving **network utility** with their products and services.

It is with gratitude and humility that we look back in awe that these results were achieved in a particularly challenging time for the industry in 2022.

As we look to 2023, there is so much in the pipeline to look forward to. Crucially, with the launch of [Filecoin’s Virtual Machine (FVM)](https://fvm.filecoin.io), the network will become programmable in Q1’ 23, a critical on-chain upgrade which will allow it to match and eclipse the features of other L1 protocols poised to uniquely capitalize on the opportunities of an open access data economy.

The Filecoin Virtual Machine (FVM) has the potential to enlarge the Filecoin economy, unlock more value for its participants, and increase demand for its blockspace. Anyone can write software on the Filecoin network, allowing more people to participate in the creation and capture of value around data. It will enhance the sophistication of Filecoin’s storage services while unlocking a whole new universe of use cases for the Web3 space. In addition, we also expect strides to be made in initiatives around retrieval (evolving Filecoin into a decentralized content-delivery network), Compute over Data (unlocking opportunities to transform and process data in a decentral manner), and Interplanetary Consensus (to allow for internet-scale use cases) - all key pieces in Step 3 of the [“Filecoin Masterplan”](https://www.youtube.com/watch?v=oY1ot0qD0Rw).

We delve deeper into the ecosystem’s progress in 2022 below, celebrating the successes and hard work of the community that has made all of this possible.

## 2022: Enabling the world's largest open access cloud storage network

![](/uploads/filecoin-2022-recap.webp)

## Research, Engineering and Network Upgrades

### Unlocking programmability, faster on-boarding, and better performance

In 2022, the Filecoin network underwent significant updates. The [first major update](https://filecoin.io/blog/posts/trusted-setup-complete-for-network-v15-upgrade/), v15, was released in early January and enabled the creation of secure parameters for four circuits, known as "SnapDeals.” The [v16 Skyr upgrade](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/) represented a significant transformation for the Filecoin network, introducing the non-programmable version of Filecoin’s Virtual Machine. Subsequently, the [v17 Shark upgrade](https://filecoin.io/blog/posts/filecoin-network-v17-shark-upgrade/) made a range of improvements and simplifications, laying the foundation for programmable storage through the use of smart contracts that interact with storage deals and providers. The upcoming [v18 Hygge update](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-4313888) will further enhance the network by introducing user programmability to Filecoin’s Virtual Machine.

### Retrieval Markets

Retrieval Markets had an incredible year in 2022! Building on the momentum from 2021, the [Retrieval Markets Builders](https://youtube.com/playlist?list=PL_0VrY55uV19f5zh5ahk10GjlwTV8eEf0) held frequent meetings to showcase demo progress in a variety of areas, including data transfer protocols and innovative cryptoeconomic models for retrieval. Special mentions go to:

1. The Magmo team, who worked throughout the year on [multi-hop payment channels](https://github.com/statechannels/go-nitro).
2. The Myel team who delivered [Rust-graphsync](https://github.com/retrieval-markets-lab/rs-graphsync), [JS-Graphsync](https://github.com/retrieval-markets-lab/js-graphsync) and have now joined the Retrieval Markets Lab at PL to continue their great work.
3. The Ken Labs team who worked on Pando, an SQL-enabled verifiable database for IPLD.

In February 2022, the [Saturn initiative](https://strn.network) began with the aim to build a retrieval network for data stored on Filecoin. In May 2022, we officially set up the [RM Lab](https://github.com/retrieval-markets-lab) and launched the [Filecoin Station Initiative](https://filstation.app), a desktop app that allows anyone to contribute to the Filecoin economy.

In October, the RM Lab launched the [Saturn Network](https://strn.network) and the Beta version of [Station](https://filstation.app). By the end of 2022, Saturn already had over 500 nodes worldwide. Furthermore, Retrieval from Filecoin Storage Providers has made orders of magnitude easier with the arrival of [Boost](https://boost.filecoin.io) and the [network indexers](https://cid.contact), which have already indexed 94 billion CIDs.

Head to [retrieval.market](https://retrieval.market) to learn more about the RM Lab and all the teams working in this space.

### FVM Development

[Filecoin Virtual Machine (FVM)](https://fvm.filecoin.io/) made substantial progress on its [roadmap](https://fvm.filecoin.io/#roadmap-4) in 2022. Milestone 1.0 was completed in July to successfully install a [non-programmable version of FVM](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/) on the Filecoin main network. With the Skyr network upgrade, the main network now runs its core logic on FVM.

We launched [FVM Foundry Early Builders](https://filecoin.io/blog/posts/introducing-ref-fvm-a-new-fvm-website-and-the-early-builders-program/) with the inaugural F/0 cohort and worked with 25 project teams from the Protocol Labs Network and community, to build FVM alongside the core team. The cohort yielded impressive projects like FVM SDKs in [Rust](https://github.com/polyphene/fvm-rs-sdk), [Go](https://github.com/ipfs-force-community/go-fvm-sdk), and [AssemblyScript](https://docs.zondax.ch/filecoin-virtual-machine/fvm-as-sdk/), multiple block explorers, and other essential FVM tooling and testing.

Milestone 2.0 began and is in progress to install a user-programmable FVM on the main network, which brings programmability to the Filecoin storage network and unlocks limitless use cases. We completed [90%](https://github.com/filecoin-project/ref-fvm/issues/692) of Milestone 2.1 in 2022 to build the [Ethereum-compatible FVM (FEVM)](https://docs.filecoin.io/developers/smart-contracts/concepts/filecoin-evm/), and built a feature-complete Ethereum JSON-RPC API that enables Ethereum tools like Metamask, Foundry, and Remix to operate against Filecoin.

The goal is a seamless [EVM to FVM](https://docs.filecoin.io/developers/smart-contracts/quickstart/) developer experience, which brought overwhelming response from developers. This attracted 120 project teams to our Early Builders program as well as 400+ hackers at our first ever FVM-dedicated hack, [Hack FEVM](https://ethglobal.com/showcase?events=hackfevm). FEVM will be [launched](https://spacewarp.fvm.dev/) to the main network in March 2023, with many exciting opportunities to participate. Check out the FEVM [Space Warp](https://spacewarp.fvm.dev/) page for more info!

### Compute over Data

[Compute over Data](http://cod.cloud) and the [Bacalhau project](https://www.bacalhau.org/) have had a phenomenal 2022, finishing strong with the shipping of the production network to Beta!

Compute over Data is a community-driven initiative to promote all projects building decentralized computing platforms. By cultivating a collaborative space, Compute over Data helps accelerate innovation through composable, reusable protocols and libraries.

In early 2022, we held the first [Compute over Data](https://www.youtube.com/watch?v=WnTlwXHhbcI&list=PLhuBigpl7lqsg9s4l9TXiIX5vemchi5kz) summit where we presented an early alpha launch. At the same time, we also launched the Compute over Data WG, a collection of like-minded organizations and people who are interested in transforming the way that we can execute data heavy jobs.

In June, the first public job was executed on the Bacalhau network, and we were also able to launch a number of great examples of advanced usage of the Bacalhau Project. Some of these include: [Using Duck DB](https://docs.bacalhau.org/examples/data-engineering/DuckDB/), [Processing Image Data](https://docs.bacalhau.org/examples/data-engineering/image-processing/), and [Running Parallel Workloads](https://docs.bacalhau.org/examples/data-engineering/simple-parallel-workloads/).

Best of all we were able to launch [Bacalhau to Beta](https://blog.ipfs.tech/2022-12-13-bacalhau-beta-v1/)! Tons of new features were released, including a new UX, WASM support, improvements to network reliability, native Filecoin support, and job pipelines from Apache Airflow. We ended the year with a network that could support over 100,000 jobs in just one month!

### Interplanetary Consensus

[Interplanetary Consensus (IPC)](https://fil.space/), a flagship project of ConsensusLab, scales blockchain networks and utilizes a hierarchical, recursive scheme. This scheme is made up of Layer 2+ networks, called subnets, which checkpoint the state of their network to their parent networks, all the way up to a top-level Layer 1 network (e.g., Filecoin, but also others).

In 2022, ConsensusLab [developed a series](https://www.youtube.com/playlist?list=PLhuBigpl7lqtqT8HLuk0mLVeG76Koa9St) of PoCs and MVP of IPC, first as golang-based built-in actors for current Filecoin/Lotus clients and then also as [FVM](https://fvm.filecoin.io/) actors. This culminated on the launch of [Spacenet](https://github.com/consensus-shipyard/spacenet), a public persistent testnet running a modern high-performance consensus protocol called Trantor, built on the [Mir framework](https://github.com/filecoin-project/mir) for modular development of distributed and decentralized protocols. Currently, Spacenet exemplifies how a possible L2+ subnet in future IPC will function, featuring sub-second consensus latencies and high throughput. By February, Spacenet will have support for subnets and FEVM, becoming a full-featured IPC network.

### Drand

The [drand](https://drand.love) ecosystem saw impressive growth in 2022 as the team shifted its focus away from maintenance to research and development. Two new members joined the engineering team, and we announced the release of our [drand-based Timelock encryption scheme](https://github.com/drand/tlock/), launching on Mainnet in February 2023.

Timelock encryption was made possible by the release of the [multi-beacon support](https://drand.love/blog/2022/02/21/multi-frequency-support-and-timelock-encryption-capabilities/) earlier in the year, and we’re excited by the new possibilities created by a practical Timelock encryption scheme. Some of the possibilities include sealed bid auctions and frontrunning prevention, and we’re looking forward to its integration into FVM.

In addition, we’ve seen new blockchain ecosystems starting to rely on drand randomness, including Cosmos through the Nois network and Sui, which will launch in 2023 with immediate [drand support](https://github.com/MystenLabs/sui/pull/5883). Thanks to our community, we’ve planned a network with higher frequency, faster verification time, and smaller signature sizes for the beacon chain launching on Mainnet in February. For more information, check out our [blog](https://drand.love/blog/) and join us on the [drand Slack](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA) workspace!

## Filecoin Ecosystem Development

### [Client Adoption and Data Onboarding](https://app.periscopedata.com/shared/369e23ac-851c-4bbe-b0ec-0b043b2d0848?)

**Customer Data Onboarded in 2022 (PiB)**

2022 has seen explosive growth in the amount of data stored on Filecoin. 460 PiB has been stored with over 1,000 verified clients, growing at **\~25%** every month.

![](/uploads/cado.webp)

Researchers and companies needing to store large data sets are often met with high fees. As an alternative to costly cloud storage, the Filecoin network offers efficiently priced and geographically decentralized storage, minimizing financial barriers and reducing the risk of compromising data by storing it across multiple nodes instead of a central network.

Examples:

1. [GenRAIT](https://fil-foundation.on.fleek.co/hosting/FF-CaseStudy-GenRAIT.pdf): Scientists spend 80% of their time managing and preparing data. GenRAIT uses the Filecoin network as their default archive for non-sensitive genomics and scientific research data. Here, scientists can spend more time analyzing the data than uploading it.
2. [Berkeley](https://www.prnewswire.com/in/news-releases/uc-berkeley-engages-seal-storage-web3-technology-to-advance-innovative-neutrino-physics-research-825550798.html): UC Berkeley Underground Physics Group partnered with [Seal Storage](https://sealstorage.io/), a decentralized cloud storage product built on Filecoin, to store their neutrino physics research data. Putting this data on Filecoin’s blockchain ensures it is verifiable and will help support the development of a novel detection technology.

Transparent ownership of data is a core belief for the Web3 community but the technical ins and outs of uploading data, especially for the creative Web3 community, can still be a barrier to participation. Creatives, collectors, and developers rely on products built on Filecoin to make NFT storage easy and safe.

Examples:

1. [NFT Star](https://filecoin.io/blog/posts/case-study-why-nftstar-trusts-decentralized-cloud-storage-for-sports-collectibles/): They are building an integrated and global sports metaverse platform to create a Web3 community that fosters direct connections between sports stars and their fans. Sports NFT collectors expect their digital assets to be easily traded and exchanged without the risk of losing the data that makes them valuable. The team chose Filecoin because of its ability to provide direct content ownership that is verifiable and secure. In addition to providing storage, the network’s geographic distribution improves the platform’s user experience by reducing time spent on data retrieval.
2. Solana: 3.4 PiB public chain snapshots are onboarding to the network.

### Developer Adoption and Onboarding Platforms

- [NFT.Storage](https://nft.storage) is a data archival project that stores off-chain NFT data as a public good, using content addressing metadata and assets to extend cryptographic guarantees off the blockchain, while storing all data redundantly on the Filecoin network for verifiable and programmatic storage. In 2022, NFT.Storage crossed 110 million uploads! This year, NFT.Storage will further expand in its mission, using innovations with Filecoin onboarding and the Filecoin Virtual Machine to progressively decentralize the service. Learn more on the [NFT.Storage blog](https://blog.nft.storage/posts/2021-11-30-hello-world-nft-storage).
- [web3.storage](https://web3.storage) is a data storage platform that makes it easy to store and read data using decentralized protocols. Its architecture evolved in 2022 to become extremely scalable and reliable, now with over 85 million uploads broadcasting more than 6 billion blocks to the IPFS network. In 2023, web3.storage will release its new upload API and client, [w3up](https://blog.web3.storage/posts/w3up-beta-launch), that reduces friction developers might need to enable Filecoin storage in their applications. Its architecture will also continue to decentralize from not just using decentralized data protocols, but increasingly relying on copies stored in Filecoin itself to reduce costs to users.
- Singularity is an end-to-end solution for onboarding data to the Filecoin network, designed to take a user from petabyte-scale raw datasets through to data storage and retrieval from the Filecoin network. Singularity is open source and is designed to be modular, enabling a user to leverage whatever parts of it are useful on their path to onboarding data to Filecoin. This includes data processing (going from raw data to IPFS/Filecoin compatible formats), metadata management for processed data, data distribution, and deal execution on Filecoin. Since its launch in 2022, it has been used to prepare \~1.5 billion files for onboarding to Filecoin, closing the year out having enabled \~1.5 million storage deals for close to 50 PiB of data.
- Beijing Yiweishi Network Technology Company, Ltd. (commonly referred to as Ewesion) is one of China’s fastest-growing online hosts of photographs, illustrations, and vector files. [The benefits Ewesion is seeing](https://drive.google.com/drive/u/0/folders/1yZ5Yqvq9SpuUaWpObMtrhvQ6Dhx2aosy?_hsmi=227593706&_hsenc=p2ANqtz-8mDPB3tQOwp20Pi1PFPABoSQiZl0FUCPzLaCU-2PAcEOEIsrcfdTZsDVz8Jvl_11AgfEhThnqtmnb8Uecb-2d8KPG84g) by adopting the Filecoin network include lower-cost for storage while maintaining ease of image retrieval for customers; security and peace of mind for its business partners (photographers, illustrators, and designers) in terms of copyright and data ownership challenges; and longer-term storage solutions for the current client base.
- Shanghai Xinshu Information Technology Company Limited (Xinshu Technology for short) is a customized photography products and image sharing company aiming to provide a “Bank of Emotion.” [Xinshu saw the need for a new approach](https://drive.google.com/drive/u/0/folders/1yZ5Yqvq9SpuUaWpObMtrhvQ6Dhx2aosy?_hsmi=227593706&_hsenc=p2ANqtz-8mDPB3tQOwp20Pi1PFPABoSQiZl0FUCPzLaCU-2PAcEOEIsrcfdTZsDVz8Jvl_11AgfEhThnqtmnb8Uecb-2d8KPG84g) to conducting its business. Leveraging Alibaba Cloud — the largest cloud computing service in China — was becoming too complex and costly for the future goals of the company. The limitations in terms of costs, flexibility, and scalability made the co-founders look for new paths.

Estuary ended the year with 11,806,012,578 objects packed within 140,000+ storage deals for a total of 1.34 PiB stored on Filecoin.

What makes Estuary unique is that all data uploaded is obtainable and the data is from real applications. As the Filecoin retrieval layer begins to work better, Estuary will improve at onboarding data. [Learn more](https://txt.dev/jim/estuary-2023) about our team and what we plan to do with FVM, as well as infrastructure people can provision from us, and goals to help with the retrieval challenge the Filecoin Network faces.

### Storage Provider Enablement

The Network Growth Team at Outercore, one of the organizations invested in growing the Filecoin ecosystem, had a productive 2022 furthering tools and resources for Storage Providers. From the launch of the [Storage Provider Landing Page](http://sp.filecoin.io) to the publishing of the IDC whitepaper [“Why Decentralized Storage Based on Web3 Technology Will Ultimately Replace Many Public Cloud-Based Storage Services”](https://hub.filecoin.io/hubfs/White%20Papers/IDC.pdf), the team enabled storage providers to onboard more than 400 EiB of real customer data.

The recently released [Storage Provider Sales Kit](https://hub.filecoin.io/form-resource-request) offers a variety of resources for Storage Providers to leverage as they market their services to potential clients. It contains assets such as battle cards, case studies, email templates, analyst reports, and more. Some examples of the kinds of case studies SPs can expect to find in the sales kit include: [PiKNiK](https://hub.filecoin.io/case-study-piknik), [GREATERHEAT](https://hub.filecoin.io/case-study-greaterheat), [Lucky Storage](https://hub.filecoin.io/case-study-lucky-storage), [DCENT](https://hub.filecoin.io/case-study-dcent), and [Konvergence](https://hub.filecoin.io/case-study-konvergence).

In 2022, the Network Growth team also created the Fil+ Interactive Infographic which outlines the Fil+ program and explains how Block Rewards are used to compensate Storage Providers on the Filecoin Network. It also covers how clients leverage data cap, and what role notaries play in this model. Furthermore, in order to allow SPs to have more in-depth conversations with opportunities in very specific areas, the Network Growth Team created a couple of sales playbooks.

Specifically, 2022 saw the creation of the Life Sciences Playbook and the Environmental Impact Playbook. These playbooks offer case studies and best practices for SPs that want to build a business pipeline for these specialized opportunities. Lastly, the Network Growth Team announced the creation of the [Decentralized Storage Alliance](https://filecoin.io/blog/posts/introducing-the-decentralized-storage-alliance/). The Decentralized Storage Alliance brings together top-tier leaders across Web2 and Web3 to support the adoption of decentralized technologies such as Filecoin, IPFS, and Libp2p by helping them make the transition to Web3 through education, advocacy, and best practices.

### Filecoin Builders & Startups

Across multiple programs, 2022 solidified IPFS and Filecoin’s position as ecosystems that stand unparalleled in their support for builders and founders and for their ability to foster strong community growth.

At the end of 2022, over 500 teams were actively working on projects and startups leveraging IPFS, Filecoin, or both, finding their way into these ecosystems across 50+ hackathons, grants, 20 accelerators cohorts, and other programs tailored to support builders with exactly what they need.

Filecoin remains the strongest player in running accelerator programs globally with the leading partners including Longhash, Tachyon, Techstars, and 20+ additional selected partners. Ventures in the ecosystem receive custom support, including fundraising, recruiting resources, and curated events. One example is FILVC, an invite only Demo Day attended by the 300 leading funds in the industry representing more than 5 Trillion USD in assets under management.

Projects span a variety of use cases ranging from developer tooling, data management services, analytics tools, financial services, and more. The community is energized by the upcoming release of FVM. Startups collectively raised close to $200M in funding signaling strong market validation. Additionally, more than $17M in grant funding were committed by the Filecoin Foundation and Protocol Labs to seed ecosystem growth.

### Token Holders

[Filecoin TL;DR](https://tldr.filecoin.io/) was launched in 2H 2022, with the goal to synthesize contents and updates on Filecoin into short, digestible formats suitable for a non-technical audience. Blog posts are released monthly on the [TL;DR blog](https://medium.com/tldrfilecoin), where we cover topics such as Filecoin tokenomics, the direction of Filecoin, and business models unlocked by FVM. In addition, we increased coverage of Filecoin in several notable media and research outlets like [Messari](https://messari.io/asset/filecoin/research), [The Block](https://www.theblock.co/post/149172/decentralized-storage-a-primer-commissioned-by-w3bcloud), and [IDC](https://hub.filecoin.io/hubfs/White%20Papers/IDC.pdf). For updates, follow the TL;DR blog and [Twitter](https://twitter.com/FilecoinTLDR).

### IPFS Adoption

NFTs found mainstream success in 2022, which resulted in an explosion of IPFS usage and awareness. Out of this growth sprung a number of new services and platforms to meet demand for production-level availability of data on IPFS. The IPFS gateways, which make network data accessible over HTTP, significantly grew, averaging around 1.5 million requests per week. The number of nodes on the public network averaged around 350,000 for most of the year and peaked at nearly 800,000. From this growth, we also saw new and different implementations of the protocol, such as Iroh, a Rust-based ground-up implementation, and Elastic IPFS to meet the high performance demand of large NFT drops. [IPFS þing](https://blog.ipfs.tech/ipfs-ping-2022-recap/) brought together nearly 100 developers focused on new and different approaches to implementing the protocol - the first gathering of its kind.

As demand and usage grew, so did the various nooks and crannies of internet and application infrastructure that IPFS needed to be present in. Efforts to integrate IPFS support in cornerstone open source tools like [Curl](https://daniel.haxx.se/blog/2022/08/10/ipfs-and-their-gateways/) and [FFmpeg](https://blog.ipfs.tech/2022-08-01-ipfs-and-ffmpeg/) were met with interest and are ongoing, and in game engines like [Unreal Engine](https://blog.ipfs.tech/2022-11-15-3s-studio/). In preparation for broader adoption at the very edge, Igalia made significant changes to [Chromium](https://blog.ipfs.tech/14-11-2022-igalia-chromium/), the open source browser that powers Google Chrome, Microsoft Edge, Brave, and Opera, in order to support non-HTTP protocols like IPFS. The year culminated with [IPFS Camp](https://blog.ipfs.tech/2022-11-22-ipfs-camp-22-recap/) in late October in Lisbon, Portugal, where over 500 people joined for three days of talks, workshops, and collaboration, demonstrating the massive growth of the IPFS community while working together to chart the course of the protocol for the future.

### Filecoin Green

Thanks to the [Filecoin Green Energy Dashboard](https://filecoin.energy/), Filecoin has become the most transparent blockchain when it comes to measuring network wide and individual storage provider energy usage.

Additionally, we sourced more renewable energy than the network's total estimated energy use through the end of 2022. In July we hosted our first-ever Sustainable Blockchain Summit hackathon with over 250 participants and 70 projects submitted (check out the winner Ecosoul.xyz!) and we hosted three Sustainable Blockchain Summits (SBS) with over 1,000+ participants and 100 expert speakers. Our $1 million dollar grants round focused on supporting projects in the budding ReFi space as well as helping storage providers make their operations more sustainable. In October, we announced the launch of CO2.Storage, the first-ever decentralized storage solution for digital environmental assets built on IPFS and Filecoin.

## Filecoin Community Growth

### Filecoin Conferences

Members of the Filecoin community participated in over 35 conferences and events in 2022 including ETHDenver, SXSW, ETHCC, and Sustainable Blockchain Summit EU and Bogota. In addition, FIL Singapore was the first-ever major Filecoin conference and largest community gathering in Asia with more than 1,600 in-person attendees and many more tuning in online. It also featured 30 community-led side events and the first-ever FIL.VC with 300+ investors and 26 projects building with decentralized storage.

[FIL Lisbon](https://fil-lisbon.io/) brought together hundreds of attendees from across the Filecoin ecosystem and featured five days of insightful talks from over 50 speakers, with panel discussions from the world's foremost Filecoin ecosystem participants as well as interactive workshops with fellow Web3 co-builders. Community members also hosted events at the Filecoin Foundation x Fission Codes x Lightshift Hacker Base.

FIL Bangalore was another incredible Filecoin conference taking place over two days during India Blockchain Week. In collaboration with 25 community partners, this event brought together over 1,300 attendees to learn about Filecoin from 20 speakers and participate in more than 10 workshops.

### Inaugural FIL.VC

FIL Singapore hosted the first-ever [FIL.VC](https://www.fil.vc/), an invite-only demo day that connected 25 startups in the Filecoin, IPFS, and Protocol Labs ecosystems to over 300+ leading investors in Web3. The event resulted in hundreds of investor intros and many term sheets that have led to strong funding rounds for participating startups. These types of events have helped builders, entrepreneurs and startups get access to more value-added venture capital - so we’ll be running many more of these events in 2023.

2023 is already packed with events designed to help developers shape the future of Web3. Keep an eye out for upcoming accelerators, grant programs, and hackathons!

### Filecoin Orbit & Community Meetups

The Filecoin Orbit program had a successful 2022, with 96 events held worldwide. These events have attracted a large audience, welcoming over 6,762 attendees throughout our events. Filecoin Orbit has communities across 25 different countries, showcasing its global impact. Additionally, the program has also seen the participation of 58 ambassadors, who have played a key role in promoting the program and its objectives of promoting Filecoin, IPFS, and Libp2p. With their efforts, the program has been able to create a strong community of individuals interested in decentralized storage solutions. Filecoin Orbit will focus on creating awareness for FVM in the coming year, where members will host meetups and hackathons for projects built on FVM.

## H1 2023: Empowering the world to unleash the potential of the data economy

### Filecoin Roadmap

{{< youtube id="iPP8kshB0qw" title="FIL Singapore | Look Ahead Filecoin Roadmap 2023" >}}

There were three main components of the Filecoin roadmap in 2022:

1. Capacity and Data Onboarding: Ensure that Filecoin can support onboarding the chain bandwidth that Storage Providers are bringing to the network. Future projects will make it easier, more efficient, cheaper, and more reliable to onboard data and capacity to the network.
2. Data Retrievability: Improve the ability for users to retrieve data stored on the Filecoin network through CDN-quality tools.
3. Programmability and Computation: Implement the Filecoin Virtual Machine to unlock a range of new tooling on the network and introduce the ability to run Compute over Data stored in Filecoin sectors.

2023 will deliver multiple highlights, including the Filecoin Retrieval Market, FVM and FEVM, Compute over Data, L2 Capabilities, and Hierarchical Consensus Sharding.

## FVM Launch and Space Warp

FVM will empower the world to unleash the full potential of the data economy. It will allow anyone to create useful products and services by assembling the fundamental building blocks of Filecoin’s storage network and economy in novel ways.

The ability to write software that governs the storage of data in a web3-native way will not only boost the utility of the Filecoin economy, but also enable more people than ever to participate in the creation and capture of value around data storage while positioning Filecoin as a powerful L1.

For developers and entrepreneurs, there are many compelling reasons to build with FVM:

- Easy on-ramp: With EVM as the first runtime to launch on top of FVM, developers can leverage tried and tested developer tooling infrastructure and build on existing EVM-based smart contracts. Testnets have been live and improving for months, giving early developers a head start in building.
- Thriving community: FVM boosts the utility of the Filecoin network and continues to energize and unite the participants of the Filecoin economy, including storage providers, developers, and token holders providing fertile ground for growth.
- Strong support: Numerous programs have and will continue to inspire and support pioneers to build with FVM with capital and world-class mentorship across FVM-specific grants, hackathons, community events, accelerator programs, and more.
- Open source to the core: Filecoin and FVM continue to foster a radically recombinant ecosystem that’s all about the best ideas. FVM is highly cross-compatible thus accelerating the adoption of Web3 technologies alongside and in partnership with other powerful ecosystems.
- Promising trajectory: The launch of FVM is one of several exciting upcoming upgrades that will continue to solidify Filecoin’s standing as a powerful L1 and uniquely position it to cater to internet-scale use cases.

For those eager to start building, consider joining the [Space Warp](https://spacewarp.fvm.dev/) initiative, a jam-packed program leading up to the launch of FVM, which includes hackathons, bug bounty programs, and microgrants for builders.

## CeFi and DeFi Filecoin Staking Options for Token Holders

Filecoin’s native token FIL plays a critical role as collateral on the network, both for securing the blockchain and for safeguarding user data on the network. As the network continues to grow in quality adjusted power, storage providers are constantly looking for more Filecoin to help secure data on the network and to expand their operations.

Token holders can help support the growth of the network by [staking their tokens](https://tldr.filecoin.io/staking-your-fil/) with storage providers to help accelerate their growth, and in doing so can get compensated. Today, the primary avenue to do so is through CeFi offerings, most notably via programs run by Anchorage, Darma Capital, and Coinlist. Each of these programs come with their own specific terms, but all directly support the growth of the Filecoin economy.

Excitingly, the advent of FVM also brings greater flexibility and optionality for token holders looking to put their tokens to work on the network. FVM will enable a native DeFi economy on Filecoin with protocol based staking of FIL. With protocol based staking, token holders can use staked representation of their tokens inside the Filecoin economy,and move tokens across ecosystems with bridges. A few of the teams building staking options are: Bifrost, Filmine, Fillet, Glif Pools, H2O, PalladiumX, and Secured Finance.

## Growing the Network of Clients & Storage Providers

Anybody can become a Filecoin Storage Provider if they have the requisite collateral, hardware, and technical expertise. For those interested in Filecoin as a Client or Storage Provider, [sign up](https://hub.filecoin.io/form-resource-request) to receive resources, and learn more about providing [Storage on Filecoin](https://hub.filecoin.io/hubfs/White%20Papers/IDC.pdf). In addition, learn more about Filecoin+ and join the community where you can find tools in development, announcements, and other data owners seeking Storage Providers.

## Filecoin Community Events

2022 was a massive year for events! Lab Week 22 introduced the community’s [first ever decentralized conference](https://protocol.ai/blog/get-ready-for-labweek22/), featuring dozens of events over two weeks, including research-focused seminars, engineering workshops, summits, unconferences, and happy hours. We’re looking forward to connecting with the community in 2023! A few events to look forward to are:

- Filecoin Hacker Base: February 28-March 1
- FVM Launch Event: March 1
- FIL Austin: April 25
- Sustainable Blockchain Summit: Boston April 13-14

## Conclusion

2022 was a year filled with turbulence, but the Filecoin community has remained resilient and committed to the mission of transforming Filecoin into the world’s largest decentralized data economy. Thank you for helping us close out a challenging, but incredible year! To stay up-to-date on future events and opportunities in 2023, follow Filecoin on [Twitter](https://twitter.com/Filecoin) and join the community on [Slack](https://filecoin.io/slack/).
