---
aliases: []
author: ""
categories:
  - updates
  - events
date: "2022-02-28T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Storage Providers are integral components to the Filecoin Network. A breakdown
  of what the ecosystem looks like.
image:
  alt: ""
  url: /uploads/a-deep-dive-into-the-storage-provider-ecosystem.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/a-deep-dive-into-the-storage-provider-ecosystem.webp
title: A Deep Dive into the Storage Provider Ecosystem
_template: blog_detail
---

**On March 2, 2022,** [**join**](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187) **for the live virtual kickoff event for the Filecoin Storage Provider Bootcamp, hosted by the** [**Enterprise Storage Provider Accelerator (ESPA)**](https://www.web3espa.io/?utm_source=PL&utm_medium=blog&utm_campaign=highlight)**. The event will bring together resources, guides, walkthroughs, and information for prospective Filecoin Storage Providers on how to run and build a business on the Filecoin Network. For those who want to take the next step can apply for the 6-month ESPA Accelerator.** [**Register here!**](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187)

The transition from proprietary services to their decentralized counterparts has already affected many industries and storage space rental is not the exception. Peer-to-peer architectures can take Web 2.0 business models based on centralized servers and turn them into open services on Web3 that rely on an incentivized community.

The Filecoin Network creates an algorithmic marketplace on top of the IPFS protocol that serves as an open and viable alternative to current cloud storage solutions. It’s designed to be a decentralized storage network that solves current client-facing deficiencies such as arbitrarily high prices, vendor lock-ins, and counterparty risks while lowering the barriers to entry for those looking to enter the market as service providers.

To achieve this, the network has the task of aligning the roles of multiple independent actors who sustain its operations. Clients, developers, token holders, ecosystem partners, and storage providers are all part of Filecoin’s [island economy](https://filecoin.io/blog/posts/filecoin-s-island-economy/).

## The Role of Storage Providers

Storage Providers (SPs), in particular, are critical to the Filecoin Network. These are the participants who opt to lend out their excess storage space to others in a decentralized and trustless manner.

On Filecoin, SPs play a [similar role](https://docs.filecoin.io/storage-provider/how-providing-works/) to “miners” in other blockchains. Anybody can join the network as an SP and be responsible for tasks that are central to the network’s operations. Primary among these is to onboard the storage capacity that serves as the network’s primary resource.

When SPs meet a threshold of available storage space greater than 10 PiB they are granted the ability to propose new blocks on the chain that keep track of data storage and retrieval deals. Similar to the mechanism in Proof of Work blockchains, the proposal of new blocks is rewarded by the network. (Filecoin’s consensus, however, is arrived at via a Proof of _Useful_ Work implementation which has further implications explored below.)

Equally important to SP operations is their ability to participate in these storage and retrieval deals. This is where they interact with clients by offering the storage space they've onboarded onto the network in exchange for compensation.

Altogether, SPs form the basis of Filecoin’s decentralized storage marketplace and their operations can be taken as a measure of the network’s robustness. Understanding their ecosystem is critical to understanding the value and the roadmap of the network, as well as the future of decentralized storage.

## Storage Provider Statistics

Since mainnet launch, the Filecoin Network has continued to grow steadily in terms of the [Storage Power](https://filecoin.io/blog/filecoin-guide-to-storage-mining/#storage-power) that is available to users. The number of SPs has reached 3,876 with the largest of these providing up to 147.65 PiB in onboarded storage space. They make a total of over [15.6](https://dashboard.starboard.ventures/storage) EiB of storage available to the network.

![](/uploads/image6.webp)_Increase in Filecoin’s Storage Power over the past year (source:_ [_https://filscan.io/statistics/power_](https://filscan.io/statistics/power "https://filscan.io/statistics/power")_)_

Accordingly, the amount of information stored on the network has also increased with [36.95 PiB](https://dashboard.starboard.ventures/deals) of storage currently in use across 1,623,282 active deals. This is especially true for [Filecoin+](https://www.youtube.com/watch?v=-kxNpRiEd_c) deals which now account for nearly half of that total with 16.1 PiB. (Filecoin+ is a community-governed program that grants SPs a multiplier on deals with approved clients who store verified data.)

![](/uploads/image4.webp)_The growth of successful storage deals on the Filecoin Network since July 2021 (source: Protocol Labs)_

This is all thanks to an engaged global community of storage providers of different sizes and geographical locations.

![](/uploads/image3.webp)_A look at where Filecoin SPs are concentrated around the globe (source: Protocol Labs)_

## Storage Providers of All Sizes

The variety of participants in the SP ecosystem is a result of a number of considerations in the network’s design. Filecoin is a permissionless network that is accessible to anybody and allows for enterprise-grade storage provisioning to thrive while affording smaller individual setups an opportunity to grow as well.

This is partly due to the network’s use of a Proof of Storage consensus algorithm that rewards the employment of useful resources on the network over simple hashrate. The algorithm marks a significant difference between Filecoin and traditional Proof of Work networks where groups of miners can sometimes amass a disproportionate amount of computing power that results in their oversized representation in the mining process.

Filecoin’s solution to this problem is a combination of cryptographic mechanisms known as [Proof of Replication](https://spec.filecoin.io/#section-algorithms.pos.porep) and [Proof of Spacetime](https://spec.filecoin.io/#section-algorithms.pos.post). These mechanisms allow SPs to prove to clients that their data is stored redundantly and persistently on the network. Perhaps more relevant to the diversity of the ecosystem is that they ensure that SPs are taken into consideration for Block Rewards in proportion to the amount of Storage Power they’ve committed to the network by sealing and maintaining deals with clients.

This fosters a healthy ecosystem where small and large storage providers can coexist and meet the storage needs of different user bases. Although certainly advantageous, the ability to gather or pool large storage resources doesn’t necessarily translate into greater success in the network since storage providers are able to close deals at any capacity above the minimum requirements.

## Small and Individual Storage Providers

The [hardware requirements](https://docs.filecoin.io/storage-providers/skills/storage#general-hardware-requirements) for becoming a Filecoin SP are not regularly met by consumer-end setups. Nonetheless, becoming a small or individual SP is certainly feasible. The Filecoin documentation features [examples](https://docs.filecoin.io/storage-provider/storage-provider-architectures/#protocol-labs-example-architecture) to help guide aspiring participants. Storage Provider Benjamin Hoesjbo has also shared a two-video [explanation](https://www.youtube.com/watch?v=LKMjCgo-fkA) of his experimentation with individual setups.

Likewise, Filecoin accommodates different approaches to participating in the network, some of which require less resources than others. Individual and small storage providers don’t have to reach the 10 TiB committed capacity [requirement](https://docs.filecoin.io/networks/) for participating in the consensus process in order to become valuable in the network.

They can still receive rewards for storage and retrieval deals and scale their operations accordingly. BigChungus is a storage provider who recently [shared](https://www.youtube.com/watch?v=e71Jb8QAg7E) its success in becoming a consensus node using this strategy.

The Filecoin community has also developed other tools and programs that allow for individual storage providers to thrive alongside their larger peers.

- [SnapDeals](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s) are a new extension to the network that introduces a quicker way to onboard client data. This allows smaller SP setups to become more competitive by reducing the initial computational overhead of providing storage from an average of six hours down to one.
- The previously mentioned Filecoin+ program benefits small SPs by allowing them to focus on approved clients. Successful deals with these clients grant them a tenfold increase in their Storage Power measurements (and consequently, their chances of participating in the consensus process for Block Rewards).
- By combining both SnapDeals and Filecoin+, small and individual SPs can quickly upgrade their existing storage sectors with Filecoin+ deals and benefit from the multiplier.
- The [Filecoin MinerX Fellowship](https://filecoin.io/blog/posts/filecoin-minerx-fellowship-program/) program is another effort with the specific goal of supporting small SP operations across the globe.

The introduction of SnapDeals and the increasing adoption of Filecoin+ deals in the Filecoin marketplace speak to the equality of opportunities available to SPs of all sizes in the network. Meanwhile, the MinerX Fellowship fosters the ongoing development of the ecosystem by selecting projects that support SP communities.

## Large and Enterprise Storage Providers

Equally important to the Filecoin Storage Provider ecosystem are the actors who service large data needs. They are responsible for storing the valuable information that lies with organizations such as the USC Shoah Foundation, Wikipedia, and Internet Archive who trust the Filecoin Network for persistent storage.

In the past, these large data sets would’ve relied solely on centralized storage providers such as cloud services for their preservation. Filecoin has presented them with a more resilient and cost-effective [alternative](https://www.youtube.com/watch?v=sL1N88QbWNI) thanks to the community of SPs who are able to service them.

Today we have a variety of different-sized SPs within the ecosystem who are capable of meeting these client needs.

![](/uploads/image5.webp)_A look at the SP ecosystem in terms of the amount of Storage Power contributed in PiB (source: Protocol Labs)_

The demand for Storage Power that can address large datasets is also set to increase with the launch of [Project Gravity](https://filecoin.io/blog/posts/filecoin-project-gravity-a-sales-referral-program/), a referral program that rewards community members who bring these clients to the Filecoin Network.

## The Storage Provider Support Ecosystem

The SP ecosystem is large and distributed, and benefits from a robust set of tools, apps, and frameworks that support its participants. Thanks to Filecoin’s open source approach, this support ecosystem emerges organically as SPs and developers grow together.

- [**Lotus**](https://lotus.filecoin.io/)**:** Developed by Protocol Labs, this tool serves as the primary reference node implementation for Filecoin Storage Providers. It is the quintessential tool at their disposal.
- [**FilRep**](https://filrep.io/)**:** A transparency tool that lets anyone verify the historical performance of SPs as well as other important qualifications such as average deal price, committed capacity, and even renewable energy purchases.
- [**Filecoin Green**](https://filecoin.energy/)**:** Filecoin’s ability to base its consensus on Proof of Useful Work already allows it to operate in a more environmentally responsible way than Proof of Work blockchains. The network has also leveraged its other capabilities, such as the FilRep system, in order to promote clean SP operations and lead the network into carbon-neutral, and hopefully, carbon-negative territory.

The Filecoin Green open source dashboard promotes energy transparency by mapping the energy consumption of individual SPs to their unique identifier as well as aggregating data from the whole network.

![](/uploads/image2.webp)_The Filecoin Green dashboard for total energy used monthly YTD (source:_ [_https://filecoin.energy_](https://filecoin.energy "https://filecoin.energy")_)_

- [**PiKNiK**](https://www.piknik.com/): A turnkey service that simplifies the process of providing storage and makes it accessible to SPs without the technical acumen that is usually required for set up. PiKNiK recently launched the Enterprise Storage Provider Accelerator ([ESPA](https://www.web3espa.io/)) program to help enterprise storage providers become successful participants in the network.
  - _If you are interested in joining a virtual bootcamp training to meet peers, gather resources, and learn more from community leaders and training modules,_ [_register_](https://www.eventbrite.com/e/filecoin-storage-provider-bootcamp-by-espa-tickets-273917022187) _for ESPA’s online event on March 2, 2022._
- [**CIDGravity**](https://www.cidgravity.com/): This lightweight and secure tool is developed by the Filecoin community. It provides a pricing and client management solution for SPs with quick deployment and a user-friendly interface.
- [**​​Bitbot**](https://github.com/textileio/bidbot): A sidecar application for SPs that takes care of bidding in storage deal auctions.
- **Filecoin block explorers, data aggregators, and analytics tools**: Sites like [Filscan](https://filscan.io/), Fileapp, Grafana, and the [Filecoin Network Health Dashboard](https://dashboard.starboard.ventures/) provide different visualizations, data points, and sources of insight into the Filecoin Network and its status. They often have entire sections dedicated to SPs and deals.

## Welcoming More Storage Providers

The evolution of the Storage Provider ecosystem in the short time since the Filecoin mainnet launch are great milestones for decentralized storage. As the network grows in global reach and overall capacity, SPs will continue to play key roles in its development. Participants of all sizes, from all parts of the world, will find a supportive and engaged community in Filecoin as they help to advance the ongoing decentralization of the internet.

## Resources

Join the ecosystem. Take your first steps into becoming a Storage Provider on the Filecoin Network by jumping into the core documentation. You can also find other resources to guide you along the way whether you start small or large, in South Asia or Northern Europe.

Learn more about Filecoin Storage Providers:

- Filecoin [whitepaper](https://filecoin.io/filecoin.pdf)
- SP section on Filecoin’s [technical specifications](https://spec.filecoin.io/#section-systems.filecoin_mining)
- Filecoin [documentation](https://docs.filecoin.io/storage-provider) on Storage Providers
- Lotus [documentation](https://lotus.filecoin.io/docs/getting-started/what-is-lotus/)
- Filecoin SP [workshop](https://www.youtube.com/watch?v=rwz8XIs6miE&t=1944s) with Magik6k
- A [playlist](https://youtube.com/playlist?list=PL_0VrY55uV1_Z83vRQq5DsSI20X1YWO4q) dedicated to Filecoin Storage Providers
- ProtoSchool's Verifying Storage on Filecoin [course](https://proto.school/verifying-storage-on-filecoin)
- Engineering Filecoin’s Economy [paper](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf)
- Guides:
  - [A Guide to Filecoin Storage Mining](https://filecoin.io/blog/posts/a-guide-to-filecoin-storage-mining/)
  - [Filecoin's Island Economy](https://filecoin.io/blog/posts/filecoin-s-island-economy/)
  - [Filecoin’s Cryptoeconomic Constructions](https://filecoin.io/blog/posts/filecoin-s-cryptoeconomic-constructions/)

**Explore and stay in touch:**

- [Website](https://filecoin.io/provide)
- [GitHub](https://github.com/filecoin-project)
- [Slack](https://filecoin.io/slack)
- [Twitter](https://twitter.com/Filecoin)
