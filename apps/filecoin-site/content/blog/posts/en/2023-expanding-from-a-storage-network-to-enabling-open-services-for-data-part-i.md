---
title: >-
  2023: Expanding from a storage network to enabling open services for data,
  PART I
draft: false
excerpt: >-
  Filecoin's 2023: Landmark FVM launch, 2M terabytes stored, major strides in
  data retrieval, compute networks, and IPC for web3 leadership.
share_image: /uploads/2023FilecoinEOYTechnicalandDevelopmentalAchievements.webp
image:
  url: /uploads/2023FilecoinEOYTechnicalandDevelopmentalAchievements.webp
date: 2024-01-19T01:34:48.925Z
categories:
  - updates
dim_image: true
---

## 2023 Impact Summary

As we bid farewell to 2023, it's a moment of reflection on the transformative journey that unfolded in the Filecoin ecosystem. In a year marked by global shifts and challenges, the Filecoin community stood resilient, collectively advancing towards our goals of building the largest decentralized storage network; onboarding and safeguarding humanity's data; and bringing compute to the data to enable web-scale apps. Below is an overview of five major milestones achieved in 2023 that will pave the path for not only the year ahead, but for the future of decentralization. Additionally, throughout this post you will find an overview of the top technical and development achievements made by the Filecoin ecosystem in 2023. 

### Top 5 Breakthroughs of 2023: 

1. **The Filecoin Virtual Machine (FVM) Launch**: In March 2023, the FVM launch kicked off step 3 in the [Filecoin Masterplan](https://filecoin.io/blog/posts/the-filecoin-masterplan/) and enabled the support of smart contracts and user programmability on the Filecoin network. As of December 2023, 200+ projects are building on FVM with about 635,000 wallets created and 2,400+ unique contracts deployed, further solidifying Filecoin’s position as the Layer-1 blockchain uniquely poised to power an open data economy. Additionally, since the launch, the Total Value Locked has surged to an impressive $280 million (as of December 31, 2023), experiencing a robust monthly growth rate of 46%. In a remarkably short span, Filecoin has solidified its position among the top 25 blockchains, as substantiated by the Total Value Locked metric.
2. **Storage Growth**: Another major goal of the Filecoin network is to onboard and safeguard humanity’s data. In contribution to that goal, since January 2023, total client data onboarded has quadrupled and grown 19x in the last 18 months totaling 2 million terabytes of client data stored on the Filecoin network. Behind that data, are over 1,850 clients that span research, higher education, nonprofits and web3 organizations, such as UC Berkeley, the USC Shoah Foundation, Solana, and CERN. Considering the progress made, in 2024 Filecoin client adoption is ready to cross the chasm into the mainstream market including enterprise, SaaS, and AI clients. ![](/uploads/FilecoinFeaturedClients.webp)
3. **Filecoin Retrievals and Data Availability**: As a stride to improve retrievability of Filecoin data, projects such as [Boost](https://boost.filecoin.io/), [Lassie](https://github.com/filecoin-project/lassie), and [Station](https://www.filstation.app/) were introduced in 2023 with a shared goal to simplify the retrieval process. Via better tooling and visibility into Filecoin data retrievals, the community can now monitor retrieval success rates and speed. Since its inception, Boost has emerged as the dominant storage node for Filecoin storage providers (SPs), marking a significant milestone in the evolution of Filecoin's storage infrastructure. Furthermore, Project SPARK represents an additional layer of innovation, introducing a specialized Storage Provider Retrieval Checker seamlessly integrated with Filecoin Station.
4. **Filecoin as L1 for Compute Networks**: In 2023, Filecoin emerged as the foundational L1 platform for Compute Networks, facilitating the launch of large-scale computation over its robust data infrastructure. This innovation allows diverse L2 compute networks to seamlessly integrate and optimize for various properties, providing a streamlined pathway for web2 applications to transition into web3. Particularly advantageous for applications requiring extensive data processing, this integration marks a significant leap forward in empowering web2 giants to embrace the decentralized landscape of web3. Currently, a dynamic community of over a dozen teams is engaged in crafting innovative solutions for compute networks within the Compute over Data (CoD) Working Group.
5. **Scalability with InterPlanetary Consensus (IPC)**: With [IPC](http://ipc.space/), decentralized applications can reach planetary scale through recursively scalable subnets, sub-second transactions, robust compute workloads, and highly adaptable WebAssembly runtimes tailored to developer requirements. In conjunction with FVM, these projects will fulfill the vision of Filecoin and web3 Scalability enabling web-scale applications to bring their data and interactions on-chain with recursive, regionally-sharded scalability and fast upgradeability.

In this year-end recap, we explore the milestones, challenges, and triumphs that defined Filecoin's progress in 2023, with a vision toward the future of decentralization. But first, a heartfelt thank you to the incredible community and developers who have been a driving force in achieving these huge steps forward for Filecoin. Your hard work and commitment to the Filecoin ecosystem and its continuous growth are the cornerstones of our success. A huge shoutout to each one of you for your invaluable contributions—thank you for being the backbone of Filecoin's journey in 2023!

## 2023: Unleashing the Potential of an Open Data Economy

![](/uploads/2023-in-Review-Stats-Graphic.webp)

### Filecoin Virtual Machine (FVM)

The Dawn of an Era: At precisely 3:14 PM UTC on March 14, 2023 (epoch 2,683,348), the [launch](https://filecoin.io/blog/posts/fvm-is-live-on-mainnet/) of the [Filecoin Virtual Machine](https://fvm.filecoin.io/) (FVM) on Filecoin mainnet brought on-chain programmability and smart contracts live on Filecoin for the first time. This transformational milestone unlocked the promise of an open data economy. For the first time, decentralized applications (dApps) could tap into storage primitives in Filecoin unlocking valuable workflows including perpetual storage, data access control, compute over data and more! 

Fueling DeFi Growth: FVM fueled the rapid growth of a Filecoin DeFi ecosystem, with third parties building staking and lending protocols atop the Filecoin network’s \~140M FIL pledge collateral from Storage Providers. 

- Since its mainnet launch in March, the Total Value Locked has reached \~$280M by the end of 2023!
- dApps built on top of FVM have helped to connect Filecoin token holders with Storage Providers fueling capacity and data to the network. Within just three months of launch, 10 staking pools were launched on FVM that led to 20.9M FIL deposits and 18.3M FIL borrowed to date (live stats [on the FVM Starboard leaderboard](https://fvm.starboard.ventures/explorer/leaderboard)). 

Expanding Horizons with Exciting Use Cases, Applications and Partnerships: Throughout 2023, FVM continued to mature its features, integrations and resources to enable a wide variety of projects to build on Filecoin. 

- FVM made many use cases and applications possible. Some examples include: 
  - Perpetual storage contracts ([Lighthouse](https://www.lighthouse.storage/), [NFT.storage](https://nft.storage/)) 
  - Web3 CDN retrieval reward contracts from [Filecoin Saturn](https://saturn.tech/)
  - Compute and Generative AI L2s (e.g., Stable Diffusion Compute contracts from Waterlily generate and mint new NFTs based on the user’s prompt)
  - [Programmatic storage,](https://github.com/filecoin-project/community/discussions/676) enabling the option for automatic or user-defined conditional upload, retrieval and management of storage deals on Filecoin ([Programmable Storage Contracts via Lighthouse is on mainnet](https://twitter.com/nanditmehra/status/1738259227674890381))
- In support of dApp development, prominent 3rd-party integrations like oracles ([Tellor](https://tellor.io/)), DEXes ([Uniswap](https://uniswap.org/), [Sushiswap](https://www.sushi.com/)), cross-chain bridges ([Axelar](https://axelar.network/blog/filecoin-cross-chain-datadaos-axelar-and-fvm) /Squid Router, [Celer](https://blog.celer.network/2023/03/20/celer-cbridge-and-im-support-launched-on-the-filecoin-virtual-machine-fvm/)) , subgraph services ([TheGraph](https://thegraph.com/)) and Wallet services ([Brave](https://brave.com/), [Metamask](https://metamask.io/), Coinbase f410 withdrawal support) were successfully integrated onto FVM.
- Important tooling was added with [6 FVM block explorers](https://filecoin-io.ipns.dweb.link/blog/posts/the-fvm-imaginarium-block-explorers/) and wrapped tokens ([wFIL](https://github.com/glifio/wfil?tab=readme-ov-file), [celerFIL](https://cbridge.celer.network/314/1/WFIL), axlFIL).

Empowering and Growing Builders: The exciting use cases and applications have been possible thanks to everyone building on FVM: 25% monthly growth in number of unique projects & teams with an increasing variety of use cases from data to DeFi to Infra, and more. The builder growth on the Filecoin network since launch has been phenomenal!  

- The journey began with an [early builder cohort](https://filecoin-io.ipns.dweb.link/blog/posts/filecoin-virtual-machine-fvm-builder-cohort-launches-to-mainnet/) of 60+ teams who were invited to test and iterate with the FVM core dev team pre-launch. 
- At launch, early builders shipped 30+ projects to mainnet, with 20 of them entering leading accelerator cohorts with [Graph Paper Capital](https://www.graphpapercapital.xyz/), Longhash and more. 
- FVM had a significant presence and engagement with the wider dev community. Participating in 17 hackathons with ETHGlobal, ETHDenver, Encode, DevFolio and Huddle01, FVM received over 500 project submissions.
- FVM marked the [Filecoin’s largest hackathon](https://filecoin-io.ipns.dweb.link/blog/posts/the-filecoin-community-s-largest-hackathon-yet/) to date (check out the fun [@fvmdev](https://twitter.com/fvmdev)) and hosted full tracks at Fil Dev Summit Singapore and Iceland to gather dev feedback, identify issues and hack together (see ongoing discussions on [dApp development](https://github.com/filecoin-project/community/discussions/677) and [programmatic storage](https://github.com/filecoin-project/community/discussions/676)).
- More than 4k total contracts deployed, 200+ teams building on FVM and \~640K users with wallets created!

Continuous Evolution of Platform Capabilities: FVM core dev team has been hard at work unlocking new platform capabilities and also doing lots of  foundational work to further  improve the security of FVM! Some of the highlights include:

- Tracing API in Lotus unlocking new partners 
- Deterministic State Access (critical for user-deployed WASM actors) 
- Precise gas charging with improved Event Syscall API (also critical for user-deployed WASM actors) 
- [IPLD reachability](https://github.com/filecoin-project/ref-fvm/pull/1824) analysis which is critical for security as it ensures the state is accessible to the actor which owns this
- Improving the [randomness syscall](https://github.com/filecoin-project/ref-fvm/pull/1842) so it doesn’t rely on clients for hashing
- [Resource management](https://github.com/filecoin-project/ref-fvm/pull/1747) for better performance of execution
- Making self destruct EVM function [safer to use](https://github.com/filecoin-project/ref-fvm/issues/1837)
- Adding support for [actor upgrades](https://github.com/filecoin-project/ref-fvm/pull/1866)

What’s more unbeknownst (hopefully) to its users, core parts of FVM implementation were refactored to make them more maintainable and easier to evolve.

Looking Ahead: As FVM steps into the future, its roadmap is brimming with exciting opportunities. A key focus is preparing FVM for a wider array of new use cases.

- [Pluggable syscalls](https://github.com/filecoin-project/ref-fvm/issues/1787) to support custom functionality needs. Currently, FVM is powering [Fendermint](https://github.com/consensus-shipyard/fendermint), an IPC (Interplanetary Consensus) implementation. It means that the  new networks (subnets in IPC) that are optimized for different use cases can leverage FVM. Pluggable syscalls will enable extending the current set of FVM syscalls without forking the FVM itself.
- User-deployed WASM actors (either in [compiled or interpreted way](https://youtu.be/PgO8BB8WWcM?list=PL_0VrY55uV18-eWt8p-oBtRvAtR1pNrYb&t=192)) which will open the doors for exciting innovations! Examples include:
- User-deployed runtimes
- Further programmability enhancements
- New protocol features
- [Storage-state integration](https://youtu.be/PgO8BB8WWcM?list=PL_0VrY55uV18-eWt8p-oBtRvAtR1pNrYb&t=227)

These developments not only expand the capabilities of FVM but also create new frontiers for creativity and technological advancements within the Filecoin ecosystem.

### DeFi

The launch of the FVM marked a pivotal moment, giving rise to the flourishing domain of decentralized finance (DeFi) on the Filecoin Network. The inception of Filecoin DeFi has proven to be a game-changer, introducing innovative ways to connect Storage Providers with additional opportunities to utilize FIL as collateral, facilitating the seamless onboarding of capacity and storage to the Filecoin Network. Over the span of just 9 months, the Filecoin Network has witnessed an impressive accumulation of more than 20 million FIL tokens, strategically deposited across 10 distinct Filecoin DeFi services.

The Filecoin DeFi ecosystem, including notable platforms such as Glif, stFIL, SFT Protocol, HashKing, FilFi, Filet Finance, MineFi, HashMix, mFIL DAO, and CollectifDAO, has garnered substantial traction. The cumulative value locked (TVL) in the Filecoin Network has surged, surpassing 280 million USD. This meteoric rise has propelled Filecoin to the #25 spot on DeFi Llama's prestigious ranking of top chains by TVL. Participation in the Filecoin DeFi ecosystem has been robust, with approximately 6,000 stakers and nearly 800 Storage Provider systems actively engaging in borrowing activities, as of December 2023. Notably, [Sushiswap went live on the FVM in November](https://www.sushi.com/blog/sushi-is-live-on-filecoin), further enhancing the vibrancy of the Filecoin DeFi space, while the [Uniswap community's approval of integrating v3 on the FVM](https://www.tally.xyz/gov/uniswap/proposal/50?chart=0), with a front-end interface set to launch in early 2024, heralds promising developments on the horizon.

## New Opportunities for Filecoin Scalability

### Compute over Data

This past year saw growing traction for a new paradigm in distributed computing - compute over data networks. The Filecoin ecosystem is full of many different approaches including Fission, Tau, Koii and many more. Incubated within Protocol Labs, the open-source platform [Bacalhau](https://www.bacalhau.org/), which helps builders co-locate storage and computation in decentralized infrastructures, addresses key limitations of existing decentralized compute issues.

Launched in 2022, the Bacalhau open-source community made strides towards production-readiness. Core optimizations improved performance for parallel workloads, with benchmarks showing superior efficiency versus centralized clouds. Modular architecture expanded language support beyond Docker to include Python, JavaScript and more.

In 2023, the platform continued to advance distributed compute architectures, and hit 1.0 in May at the 3rd compute over data conference. Further, advancements in use of GPUs, distributed job execution, and distributed consensus all became part of the core platform. Additionally, at Lab Week in Istanbul, the proof of concept Lilypad network was launched, with over 1000 job executions, making it a top 5 decentralized network in the world. 

Further, partner projects integrated Bacalhau into real-world applications:

- LabDAO is using Bacalhau as a decentralized network for lab management and on-premises decentralized execution.
- Heata utilized Bacalhau in their distributed "green cloud" platform spanning residential computing units. This showcases how decentralized infrastructure can achieve sustainability goals.
- Radix is integrating their platform with Bacalhau to deliver on-premises execution over complicated DAG pipelines.

Developer experience also improved with documentation revamps, tutorials, and discussion forums building an engaged community.

Moving into 2024, convergence around frameworks like Bacalhau is prompting specialized network stacks purpose-built for machine learning, media rendering, industrial edge intelligence and other domains. These promise to connect fragmented pockets of capacity while preserving privacy and user control. If current momentum holds, compute over data infrastructures may fundamentally reshape cloud and web3 landscapes over the coming decade. We welcome all builders aligned with the vision of decentralized computing for the people, by the people. Onwards to an abundant shared future!

### Interplanetary Consensus (IPC)

[InterPlanetary Consensus](https://www.ipc.space/) (IPC) is a revolutionary scalability technology that offers planetary-level performance for web3 applications. It provides a frictionless developer experience, powering a new generation of apps that break web2 limitations. IPC powers planetary-scale decentralized apps with recursively scalable subnets, \<1s transactions, compute workloads, and highly-customizable runtimes for any developer needs. This begins by supercharging developers’ capabilities on the Filecoin network.

IPC aims to be a foundational tech stack for multi-chain, planetary-scale web3 networks, enabling a previously-impossible array of decentralized applications from AI and data science to gaming and social media. Our goal is to bridge the gap between web2's performance and web3's decentralized ethos, making IPC a go-to solution for large-scale, decentralized applications. 

**Key Milestones and Progress**

Over the past year, IPC grew from its roots as a research initiative under ConsensusLab into an engineering project on the verge of productionization. 

- We hit our milestone M1 (IPC Deployment onto Spacenet) in April, with the launch of Spacenet, an IPC-based testnet allowing users to experiment with the stack! M1 enabled developers to use Spacenet to test applications with custom requirements or with high transaction volume.
- M1 was soon followed by M2 (Functional demonstrator on Filecoin mainnet) in July. This marked our move to Solidity actors, enabling anchoring and cross-net messaging with EVM parent networks. 

**Early Users and Community Engagement**

- We hosted IPC tracks at both [FIL Dev Summit Singapore](https://www.youtube.com/playlist?list=PL_0VrY55uV1-vMHz1R9oQXdcC16UW5Izz) and [FIL Dev Summit Iceland](https://www.youtube.com/playlist?list=PL_0VrY55uV1_fvHJifxAnFrTuk57gHfHD), but the flagship event of the year was our Breakthrough Scaling with InterPlanetary Consensus at LabWeek23! 
- During LabWeek23, we launched our new Fendermint stack, with which we’re moving to production, and the [Mycelium Calibration testnet](https://docs.ipc.space/reference/networks). 
- Our events had participation from partners and early adopters, including [Fluence](https://fluence.network/), [Protofire](https://protofire.io/), [Tableland](https://tableland.xyz/), and [Titan](https://www.titannet.io/). 

At both LabWeek and Devconnect, web3 founders were excited to build with IPC to leverage Filecoin further by enabling faster transactions, compute-over-data and regional subnets.

**Looking Ahead**

The IPC team combined forces with FVM in Q4, expanding its world-class talent with more resources in engineering, product, developer experience (DX), and business development (BD); in preparation for our full-scale production deployment in 2024. Also, as part of a significant brand evolution, IPC is transitioning to a new identity, reflecting its broader mission in the web3 space. Stay tuned for our new brand in 2024!

While our roadmap is dynamic, we currently plan a frontier Mycelium Mainnet deployment in late Q1, followed by progressively more feature-rich releases, building towards general availability later in the year.  

Follow our roadmap and updates at the new  [ipc.space](https://www.ipc.space/) website, or join our [Discord server](https://ipc.space/discord)! But why wait? Jump to our [docs website](https://docs.ipc.space/quickstarts) and get started with IPC today!

## Filecoin Ecosystem Development

### Client Adoption

2023 has been marked by strategic initiatives aimed at expanding the reach of the Filecoin network to increase understanding of decentralized storage and Filecoin with web2 audiences. The introduction of [DeStor](https://destor.com/) has played a pivotal role in elevating awareness for decentralized storage. Leveraging organic traffic, the efforts resulted in a substantial 110 PiBs inbound pipeline, demonstrating the growing interest and adoption of Filecoin within the web3 community and beyond.

Additionally, the Filecoin Client Explorer was launched to increase visibility of client data stored on the Filecoin Network. With a remarkable count of 1806 total clients and counting, the Filecoin ecosystem continues to attract a diverse range of users. Notably, the [SETI Institute](https://destor.com/seti) and [Victor Chang Cardiac Research Institute](https://destor.com/victor-chang-cardiac-research-institute-case-study), both exemplifying the Filecoin network’s growing influence and adoption across web2.

### Data Onboarding

In the dynamic landscape of data onboarding, the Filecoin network has witnessed significant growth and improvement over the past 18 months. The platform has successfully added 1.5 exabytes (EiB) of data, facilitated 45 million deals, and incorporated 90 million non-fungible tokens (NFTs). The strategic focus on tooling improvements has been evident through the introduction of [Singularity](https://singularity.storage/), a comprehensive solution streamlining the Filecoin data onboarding process for clients. This end-to-end tool covers dataset integration, data preparation, CAR distribution, deal making, and deal tracking workflows, successfully handling a substantial 150 PiBs of data to date. Notably, Singularity's data preparation module has found widespread adoption, with Solana and over 100 data onboarders utilizing it to process more than 20 PiBs of raw data.

The commitment to advancing data onboarding is further exemplified by the introduction of [Spade](https://github.com/ribasushi/spade), a platform designed to match storage clients with storage providers, facilitating high-throughput and low-friction data onboarding. Launched as a pilot/v0 in 2023, Spade has already onboarded an impressive 4 PiBs on-chain. In parallel, [Filecoin Plus (Fil+)](https://filplus.storage/) has been instrumental in adding a layer of social trust to incentivize the storage of real data. The platform has undergone substantial improvements, including optimizing datacap flow within the Fil+ ecosystem, rendering the Fil+ registry 10 times faster, and introducing tools like quality.datacapstats.io. Additional updates encompass the launch of V1 Filplus client dashboard, quality dashboard, CID checker bot, retrieval bot, and the Dispute Tracker. [FILplus.storage](https://filplus.storage/), a comprehensive platform serving as a central hub, has been introduced to empower clients with information about Fil+ and facilitate the application process for DataCap. Additionally,  the data onboarding team has improved the storage provider experience by, achieving significant sealing cost optimizations and establishing a strategic partnership with Servers.com. This collaboration, featuring pre-defined hardware specifications tailored for Filecoin storage solutions, has reduced time to market for storage providers from 6-12 months to an impressive 6-8 weeks. These initiatives collectively showcase the community’s dedication to enhancing data onboarding processes and fostering a robust ecosystem for clients and storage providers alike.

### Developer Adoption and Onboarding Platforms

Developer adoption and the evolution of onboarding platforms have been pivotal in shaping the Filecoin ecosystem, with a particular focus on platforms like [NFT.Storage](https://nft.storage/) and [web3.storage](https://web3.storage/). NFT.Storage has emerged as a cornerstone solution for ensuring the perpetual availability of NFTs, exemplified by the NFT Forever project, a groundbreaking initiative that guarantees perpetual storage for off-chain NFT data. With 151,000 users uploading data, 32 million uploads, and a staggering 447 terabytes of data stored, NFT.Storage has become the go-to choice for NFT creators and minting platforms seeking reliable and decentralized storage solutions.

Looking ahead, NFT.Storage is set to undergo a transformative shift towards full decentralization, culminating in the transition to the NFT.Storage DAO in early 2024. The platform is actively developing the next iteration that utilizes smart contracts on the Filecoin virtual machine, enhancing decentralization and management of off-chain NFT data. This forward-looking approach underscores the Filecoin community's commitment to staying at the forefront of technological advancements in the NFT space.

On a parallel front, web3.storage has emerged as a developer-centric storage platform, providing one of the easiest pathways to make data accessible on the decentralized web. Over the course of the year, more than 70 million files found their way onto web3.storage. The platform's new upload client and API, introduced this year, seamlessly handle large uploads with features like streaming CAR generation and uploads. Additionally, the use of UCANs (Updatable, Capabilities-based Access Control) enables local-first, delegatable, and decentralized identity, making it a preferred choice for some of the largest projects in the web3 space.

To delve deeper into the innovative features of web3.storage, developers can explore the platform's [docs](https://web3.storage/docs) and [launch blog post](https://blog.web3.storage/posts/the-data-layer-is-here-with-the-new-web3-storage). These advancements in developer adoption and onboarding platforms underscore the Filecoin community's commitment to providing user-friendly, efficient, and decentralized solutions for the ever-evolving needs of the developer community.

### Filecoin Retrievals

#### Retrieval Reliability and Usability

- [Lassie](https://docs.filecoin.io/basics/how-retrieval-works/basic-retrieval#lassie) - a retrieval client for Filecoin and IPFS, launched in 2023. Lassie makes it easy to fetch your data from both the Filecoin and IPFS Network - it will find and fetch content over the best retrieval protocols available. For end users and clients, this means you can easily retrieve your content addressed data (using CIDs) from Filecoin or IPFS using the Lassie client, without having to run your own IPFS node or Filecoin node.
- Boost released [Version 2](https://github.com/filecoin-project/boost/releases/tag/v2.0.0) which enables a Filecoin Storage Provider to horizontally  scale retrievals. 
- Indexer Scaling - The IPNI team accomplished a major goal in scaling the Indexer, handling upwards of 40B CIDs ingested per week , IPFS traffic, large IPFS clusters like web3.storage all while maintaining SLA uptime and reliability.  In addition, the team rolled out double hashing of indices for [reader privacy](https://www.youtube.com/watch?v=Q46zJ_mai2c).
- [Destor REST API](https://destor.com/destor-rest-api-for-filecoin) launched in Beta. The DeStor REST API for Filecoin (DRA) is open source software that provides a simple API for storing data to and retrieving data from Filecoin. It integrates seamlessly with an S3 connector so that those wanting to expose a Filecoin storage tier to their users can do so with the familiar S3 API’s.

#### Saturn

[Saturn](https://saturn.tech/) is a decentralized Content Delivery Network, offering beefy servers with very high bandwidth to accelerate retrievals from IPFS & Filecoin. At the beginning of 2023, Saturn had just a few hundred nodes. Now, Saturn has more than 3000 nodes on the network which are all community run. The global performance is also noteworthy, as Saturn improved its TTFB to sub 70ms and with further smart client routing, even down to 60ms, which makes Saturn the fastest dCDN for content-addressable data in the world. On the busiest day last year, Saturn served 400 Million requests in a single day, proving that it is ready for large scale applications in Web3. In 2023, Saturn launched further network tools, like the overhauled node provider dashboard and the [explorer](https://explorer.saturn.tech/). Additionally, Saturn is now able to fetch content from Filecoin and any public IPFS node.

To conclude an outstanding year in 2023, Saturn launched its private customer beta alongside an entirely new customer portal. If you are keen on becoming a Saturn customer, we invite you to join our exclusive invite-only [private beta](https://tally.so/r/mRo7xp) program.

#### Station

[Station](https://filstation.app/) is a DePIN deployment target for network builders, offering a wide variety of different nodes, from beefy servers to small desktop computers and Raspberry Pis, scattered across the globe. The first network, or “module”,  to run on Station is called Spark, which first launched in July 2023.

[Spark](https://filspark.com/) is a trustless protocol for sampling retrievals from Filecoin Storage Providers. Spark aims to improve the Filecoin retrieval success rate by performing these random samples. If a Storage Provider doesn’t know which CID it will be asked to serve, it has to keep all of them in hot storage ready for fast retrieval.

Spark is the first module that allows Station operators to get paid for running Station. The Station team launched Spark with FIL payouts in November 2023 and saw rapid growth in the number of active Stations, growing 100x from 50 to 5000 daily active Station nodes.

## Engineering and Network Upgrades

### Filecoin Implementation and Upgrades

In 2023, the Filecoin implementations rolled out transformative network upgrades, successfully shipping a total of 15 Filecoin Improvement Proposals (FIPs), along with a multitude of client improvements. Each upgrade marked a significant milestone in our journey towards a more robust Filecoin network and more useful and scalable implementations. Let's delve into these key developments that not only shaped the past year but will also continue to influence the trajectory of the network in the years ahead.

#### [Network Upgrade 18 - Hygge](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-4313888)

On Pi Day, March 14, 2023, the Filecoin network celebrated a significant milestone with the Hygge upgrade. This upgrade introduced the Ethereum compatible Filecoin Virtual Machine (FEVM) to the mainnet, unlocking the potential for smart contracts and user programmability in the network. This transformative step not only enhanced the capabilities of the Filecoin network but also set the stage for a new era of innovation and development in the open data economy. A fitting tribute to the mathematical constant, the day was indeed full of π.

#### [Network upgrade 19 & 20 - Lightning and Thunder](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-5376097)

Just as thunderstorms often arrive earlier than expected, so too did the lightning and thunder network upgrades. The data onboarding on the network continuously climbed over the year, pushing us to expedite the release of network upgrades 19 and 20. These network upgrades were implemented faster than anticipated to alleviate the network from heavy cron execution costs and substantially reducing block validation time. 

By reducing execution costs and validation time, we've made it possible for the network to handle larger volumes of data and deal transactions. This is a crucial step in ensuring that the network can continue to grow and serve an increasing number of users.

The lightning and thunder network upgrades also strengthened network security by introducing new windowPoSt proofs that generate challenges independent of the sector order.

#### [Network upgrade 21 - Watermelon](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-7274188)

The last network upgrade in 2023, codenamed Watermelon, was implemented on December 12th. While watermelons are typically associated with summer, it's always summer somewhere on the planet. In this sweet and juicy upgrade, several key enhancements were introduced.

The upgrade allowed Storage Providers (SPs) to pledge and extend sectors for up to 3.5 years, under a total 5-year sector lifetime. This change also enables clients to make deals that last up to 3.5 years. Furthermore, the upgrade provides SPs and Sealing-as-a-Service providers with the ability to leverage synthetic proofs-of-replication, reducing their disk usage when storing temporary data when sealing. This not only cuts costs but also increases the sealing throughput, making the process more efficient and cost-effective.

Additionally, the network upgrade optimized and reduced gas usage when onboarding deal sectors to the network. 

#### Lotus

In addition to leading the implementation of 15 Filecoin Improvement Proposals (FIPs) with teams and partners like Fil-Proofs, the FVM team and many more, the Lotus client has undergone significant improvements throughout 2023. These enhancements, which have boosted both performance and reliability for network users, span several areas including infrastructure scaling and user experience. Here are some of the key improvements we've made:

- Production ready SplitStore: Early in the year, SplitStore made its way to production ready code after several sprints crushing bugs. The feature enables automatic discarding of older chain data and thereby reducing disk footprint and maintenance for node operators that do not need historical data.
- New client features: Throughout the year, lotus client has built features to support new network improvements delivered through network upgrades, from FEVM client feature, actor events, ETH APIs, as well as client improvements like default grafana dashboards and scalable Lotus chain infrastructure.
- Smoother network migrations: A significant effort has been invested in streamlining complex network migrations, with a focus on reducing pre-migration and migration time. This was clearly demonstrated during Network Upgrade 21, a particularly heavy migration. The effort was successful, as the network transitioned smoothly to the new version.
- Inspection tools: The ability to have network state and client profiling inspection tooling became apparent throughout the year, and Lotus now has the ability to monitor the network state growth over time and detect potential “red flags” earlier to prevent unexpected downgraded performance in the network. Check out an example of Filecoin State Usage Summary, or the Lotus Message Execution Profiling Report.
- Syncing improvements: Over the past year, the Filecoin network has evolved and we have seen new types of load and higher volumes in the network. We have continuously addressed these challenges by fixing bugs and enhancing stability to ensure a seamless synchronization experience for our users.
- Network security tools: The Lotus Slasher and Lotus Disputer tools were launched to maintain network integrity. These tools actively identify and report consensus faults, validate off-chain WindowPoST proofs, and discourage malicious activities in the network, all while remaining efficient and lightweight so it's easy to run. During Q4, the network observed 25 unique slashers and 14 unique disputers, demonstrating their active engagement in maintaining network security.

#### Lotus SP stack

Guided by invaluable feedback from Storage Providers, the SP stack roadmap for 2023 focused on pain points and top requested features with the greatest overall impact for storage providers. We initiated this roadmap in Q1 and continued to implement it throughout the year. Now, let's take a look at some of the key improvements introduced throughout the year:

- Operation Instability Bug Fixing Sprints: Several development sprints were specifically dedicated to addressing and fixing the top bugs causing operational instability for storage providers. These targeted efforts have significantly reduced the time storage providers spend on debugging and general issue resolution.
- Unsealing Enhancements: Significantly improving the unsealing process for storage providers, eliminating the need for manual work to attach workers to where the sealed sectors are stored. Made possible with the help of the proofs team building new proof APIs, this has increased efficiency and reliability in handling large volumes of sealed sectors being unsealed.
- Supranational PC2/C2: In collaboration with the Proofs team, the highly optimized brownfield PC2/C2 sealing proofs from SupraNational was implemented in the Lotus SP stack. This has resulted in a significant reduction in sealing times for the PC2/C2 tasks (by approximately 70+%), lowering energy usage, and reduced operational costs for our storage providers.
- Implementing SyntheticPoReps: In collaboration with the Proofs team, we implemented SyntheticPoReps in the Lotus SP stack. This significantly reduced temporary data storage during the sealing process, increased sealing throughput, and enabled batching larger PreCommit messages, leading to gas savings for storage providers.
- V2 Technical Design for High Availability (HA): Based on community feedback, we developed a V2 technical design to provide a High Availability solution for WindowPoSt/WinningPoSt. The design led to the development of Lotus-Provider, now in alpha state, often referred to as “Lotus-Miner-V2”.
- Lotus-Provider: Currently in alpha state, the lotus-provider binary aims to replace the need to run lotus-miner and lotus-worker in 2024. It consists of many features sought after in everything from small, medium and larger deployments, and tackles architectural challenges from our users feedback. Its a single binary that can easily be shipped across your fleet of servers, and can be started to do the task you want it to do by starting the binary with flags to find the database, and which configuration layers it should use. In alpha it supports High Availability for WindowPoSt and WinningPoSt, and features like multi-MinerID support, sealing and a webUI for your cluster is in active development.

#### Venus

The Venus team achieved significant milestones in 2023, elevating its representation in the Filecoin network from approximately 5% to a notable 15% of the total Qualified Adjusted Power (QAP). This trajectory is poised to reach an impressive 20% shortly, making a substantial impact on client diversity and fortifying network security. Explore below some of the notable features and advancements meticulously crafted by the team throughout the year, contributing to a more robust and engaging Filecoin community. 

1\. **Venus SP Stack Rebranding**: In a strategic move to facilitate a seamless transition for Service Providers (SPs) into the Venus SP stack, the team has rebranded key chain services components. Notably, [Sophon](https://sophon.venus-fil.io/) now represents the chain services, [Damocles](https://damocles.venus-fil.io/) replaces venus-cluster, and [Droplet](https://droplet.venus-fil.io/) takes the place of venus-market. This modularization not only streamlines the onboarding experience but also fosters increased community engagement from SPs of varying scales.

2\. **Production Hardened Node as a Service (NaaS)**: Throughout 2023, the team dedicated efforts to enhance the Node as a Service (NaaS) backed by Sophon. This service enables high-availability deployment of Lotus and Venus nodes, featuring performance improvements and bug fixes. With improved authentication systems for third-party consumption, NaaS not only helps SPs significantly reduce their operational expenses (OPex) but also serves as a cornerstone for many critical Filecoin infrastructures.

3\. **Supranational Proofs Integration**: The Venus SP stack incorporated Supranational proofs into production storage systems. This innovation allows SPs to experience a substantial speed boost in computing proofs for P2, C2, snapdeal, and windowPost. Damocles' innovative architecture facilitates lightning-fast proof integration, providing numerous Venus SPs with a competitive edge in their storage provision businesses.

4\. **Damocles Refactoring**: Responding to constructive feedback and close engagement with Venus SPs, Damocles underwent comprehensive refactoring. Components such as the external processor, configuration manager, windowPost execution, and Lotus compatibility manager were refined and improved. This effort resulted in an outstanding user experience for SPs, effectively reducing operational overhead in managing storage power for the Filecoin network.

5\. **Retrieval Capability Improvements for Droplet**: Various enhancements were introduced to Droplet to elevate its data retrieval capabilities. These include, but are not limited to, HTTP retrieval support, unsealing refactoring, metrics and visualization tools, and storage deal batching. These improvements not only deliver top-notch retrieval experiences to clients but also contribute to minimizing operational expenses and overhead for SPs.

For more in-depth details on these achievements, please refer to the comprehensive documentation provided by the Venus team on [their website](https://venus.filecoin.io/).

#### Forest

Forest, developed by [ChainSafe Systems](https://forest.chainsafe.io/), represents the Rust implementation for the Filecoin network, offering a more lightweight alternative to the Go-based nodes with reduced memory requirements for seamless operation. In the year 2024, Forest stands as the exclusive provider of the most recent snapshots available to the Filecoin community. Notably, ChainSafe Systems currently hosts the complete Filecoin archival data generated by Forest, providing a valuable resource for the broader Filecoin ecosystem. This archival data is freely accessible for download, contributing to enhanced data accessibility within the community.

Looking ahead, Forest's strategic roadmap includes the establishment of a distributed network of bootstrap nodes spanning various regions. These nodes are poised to facilitate the integration of new Filecoin nodes into the network, showcasing Forest's commitment to fostering a robust and accessible Filecoin ecosystem. The Forest team is diligently working on the deployment of public Remote Procedure Call (RPC) nodes, further enhancing community engagement and interaction within the Filecoin network. Anticipate more updates and developments as Forest continues to evolve.

For additional insights and detailed information, please explore the following ChainSafe resources:

- [Blog post on the archival data service  launch](https://blog.chainsafe.io/forest-unlocking-data-accessibility-on-the-filecoin-network-2/)
- [Blog post on the  latest snapshots service launch](https://blog.chainsafe.io/into-the-forest/)
- [Filecoin archival data download link](https://forest-archive.chainsafe.dev/list/)

### Conclusion

As we turn the page on a remarkable 2023, it’s clear that the Filecoin ecosystem stands at a pivotal juncture in its evolution. The year was not just about technological breakthroughs and impressive metrics; it was about the collective spirit and relentless innovation of a community dedicated to shaping a decentralized future. From the landmark launch of the FVM to the expansion of the Filecoin network's storage and retrieval capabilities, each milestone reflects a deeper commitment to creating a robust, open data economy. The growth in developer and client adoption, coupled with the advancements in DeFi, scalability, and compute over data, all point towards a thriving ecosystem that is not just keeping pace with the evolving web3 landscape but actively driving it forward.

Looking ahead, the journey is as exciting as it is challenging. With plans to enhance platform capabilities, expand into new use cases, and deepen community engagement, the Filecoin ecosystem is poised to break new ground in 2024 and beyond. As we step into this future, let's celebrate the collective efforts and shared vision that have brought us this far. A heartfelt thank you to everyone who has been part of this journey – developers, clients, partners, and supporters. Your passion and commitment are the pillars that will continue to propel Filecoin forward. Here's to another year of groundbreaking innovation, community growth, and decentralized empowerment.
