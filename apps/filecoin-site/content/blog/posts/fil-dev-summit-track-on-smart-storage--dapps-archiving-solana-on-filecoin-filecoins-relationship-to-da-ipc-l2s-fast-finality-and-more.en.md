---
title: FIL Dev Summit Track on Smart Storage & dApps
excerpt: >-
  Archiving Solana on Filecoin, Filecoin’s relationship to DA, IPC L2s, Fast
  Finality and more.
share_image: /uploads/0FDS-Smart-Storage-Header-2.webp
image:
  url: /uploads/0FDS-Smart-Storage-Header-2.webp
date: 2024-03-15T01:15:33.645Z
categories:
  - updates
  - events
dim_image: true
---

The third edition of [FIL Dev Summit](https://fildev.io/) took place at [EthDenver 2024](https://www.ethdenver.com/) for a full day of protocol discussions, workshops, and presentations on core improvements to the Filecoin protocol and ecosystem - for devs, by devs. The Smart Storage and dApps track featured discussions on the current state of the art of programmable storage and decentralized applications (dApps) on Filecoin and future innovations to come with hot/fast storage layers for Filecoin.

Key Takeaways:

- Filecoin is ideal for archiving other blockchains as seen with the [Solana case study](https://www.youtube.com/watch?v=c69ky8YmkSA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=7). 
- The launch of [InterPlanetary Consensus (IPC)](http://ipc.space/) enables decentralized services to be built upon the base Filecoin layer (such as aggregators, hot storage and compute networks) which will open up new use cases.
- There are exciting innovations landing shortly including fast finality and the general availability of IPC. 

## Archiving other blockchains and data availability

**[Hosting the Solana Archive on Filecoin by Brian Long](https://www.youtube.com/watch?v=c69ky8YmkSA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=7)**: Long shared the journey and technical challenges of archiving [Solana](http://solana.com/) data on Filecoin, highlighting the benefits of decentralized storage for large-scale blockchain data and the future direction of such integrations.

{{< youtube id="c69ky8YmkSA" title="    0:02 / 17:13  Hosting the Solana Archive on Filecoin - Brian Long" >}}

[Data Availability by Matt Frehlich](https://www.youtube.com/watch?v=9EAgiHoco0c&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=15): This talk broke down the differences between data availability and data storage, and discussed how Filecoin could play a role as Data Availability requirements evolve. Currently, data availability is more about trustlessly publishing data rather than resilient long term storage. 

![](/uploads/Chart1.webp)

[Avail - Long Term Storage Needs & Web3 Unification by Dan Mills](https://www.youtube.com/watch?v=10VBYc4DA50&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=14): Mills introduced [Avai](https://www.availproject.org/)l's approach to data availability powered by ZK technology, focusing on its implications for rollups, liquidity, and user experience in the web3 ecosystem. The session then covered the requirements for long term storage and chain archival where there’s immediate demand for Filecoin.

![](/uploads/StorageRequirements.webp)

## New Filecoin Innovations

[Fast Finality in Filecoin with Alejandro Ranchal-Pedrosa](https://www.youtube.com/watch?v=KC-JIPeTRyQ&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=6): This session explained the mechanisms behind Filecoin's current consensus mechanism and the development of fast finality for Filecoin, crucial for applications and bridges requiring quick transaction confirmations.

{{< youtube id="KC-JIPeTRyQ" title="F3: Fast Finality in Filecoin with safe and verifiable proofs - Alejandro Ranchal-Pedrosa" >}}

[Building Filecoin L2+ Service Networks with IPC by Raúl Kripalani](https://www.youtube.com/watch?v=Qh43mdO0ngk&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=3): Kripalani's session focused on the development of easily deployable and temporary subnets on Filecoin to support elastic use cases like gaming and social networks, leveraging IPC for more efficient data and compute integration.

[Fluence Cloudless Computing Platform leveraging IPC by Evgeny Ponomarev](https://www.youtube.com/watch?v=0y-Vr7J8fVo&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=5): Ponomarev shared why Fluence chose to build its distributed compute network on IPC.

{{< youtube id="0y-Vr7J8fVo" >}}

Workshop: End-to-end Decentralized Storage of User Data by Stebalien: This workshop covered the advantages of Filecoin over traditional cloud storage solutions, focusing on transparency, portability, price certainty and programmability.  There was also a discussion of the main current challenges – any size writes, fast writes and resilience.

[Deal Brokering: Why Filecoin Needs It by Hannah Howard](https://www.youtube.com/watch?v=d_Bo0uf2hqI&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=8): Howard discussed the development of a decentralized marketplace to match client needs with storage providers, highlighting the role of deal brokering in the Filecoin ecosystem to streamline storage deals.

## Building dApps on Filecoin

[Programmable Storage with Lighthouse by Nandit Mehra](https://www.youtube.com/watch?v=u17Ef6BOH_E&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=4): Mehra introduced the concept of programmable storage, where users can configure replication, renewal, and repair policies, showcasing applications in credit score DAOs and an Ocean Protocol integration.

[dApp Storage on Filecoin by Matt Hamilton](https://www.youtube.com/watch?v=NEXtqLSDt_U&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=1): Hamilton addressed the disconnect between developer expectations and the current capabilities of Filecoin for dApp storage, highlighting the challenges in data retrieval times and the integration of small data pieces into the Filecoin network. Generally, developers expect that they can access files within smart contracts while that is not feasible and is not actually needed for most use cases.

Workshop: Solving dApp Developer Pain Points by Hannah Howard: The workshop explored solutions to challenges faced by dApp developers when integrating Filecoin storage, including use cases in L2 networks, storage DAOs, and web3 gaming.

[Swan Decentralized ZK Market with Filecoin Integration by Charles Cao](https://www.youtube.com/watch?v=hip_wqswaNA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=2): Cao explained how Swan’s Decentralized ZK Market is giving an opportunity to compute providers to perform Filecoin proofs and earn extra income.

## Want to dive deeper?

Explore the complete collection of videos from FIL Dev Summit Denver ‘24 on the [Filecoin YouTube channel](https://www.youtube.com/playlist?list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ) for a deeper dive into the discussions, breakthroughs, and the vibrant energy that defined the event.

We’d also like to invite you to join us at FIL Dev Summit this July in the heart of Brussels during EthCC. This gathering promises to be a nexus of innovation, collaboration, and inspiration, uniting thinkers and builders from across the globe. Don't miss the opportunity to connect, learn, and contribute to shaping the future. Stay tuned for more information!
