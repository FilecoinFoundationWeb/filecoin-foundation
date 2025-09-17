---
aliases:
  - /blog/space-race-2/
author: ""
categories:
  - updates
date: "2020-09-12T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  For the past 3 weeks, miners across the community have been participating in
  the Filecoin Space Race to onboard as much storage as possible to the
  Testnet.
image:
  alt: Announcing Space Race 2
  url: /uploads/sr2-annoucement-header.webp
main_feature_inverted: false
related_article_1: content/blog/posts/welcome-to-the-space-race.en.md
related_article_2: content/blog/posts/getting-ready-for-filecoin-s-space-race.en.md
related_article_3: content/blog/posts/space-race-ama-5-summary.en.md
share_image: /uploads/sr2-annoucement-social.webp
title: Announcing Space Race 2
_template: blog_detail
---

## Space Race Highlights

For the past 3 weeks, miners across the community have been participating in the Filecoin Space Race to onboard as much storage as possible to the Testnet. We’re **thrilled** by the amazing engagement and participation in Space Race. Over 356 miners from 32 countries across all 6 continents have participated - including miners from _Nairobi, Kenya_ - to _Auckland, New Zealand_ - to Sao _Paulo, Brazil_ - to _Oslo, Norway - to Shenzhen, China._

Participation has far outpaced initial expectations, with miners quickly approaching 200 PiB of storage — 2x the original competition target! Even more importantly, the Space Race has enabled massive upgrades to the Filecoin protocol and early implementations. The fast rate of data onboarding during Space Race helped identify improvements to [chain throughput](https://github.com/filecoin-project/lotus/releases/tag/v0.5.0), [data sealing resilience](https://github.com/filecoin-project/lotus/releases/tag/v0.5.5), [message pool spam protection](https://github.com/filecoin-project/lotus/releases/tag/v0.5.5), and [worker selection logic](https://github.com/filecoin-project/lotus/releases/tag/v0.5.7) to help Filecoin support even more miners and data capacity. We also made significant optimizations to the deal-making process as part of learning from the _thousands_ of storage and retrieval deals that competition storage bots made each day – along with adding many new [APIs](https://github.com/filecoin-project/lotus/releases/tag/v0.5.9), [better defaults](https://github.com/filecoin-project/lotus/releases/tag/v0.5.10), and [monitoring tools](https://github.com/filecoin-project/lotus/releases/tag/v0.5.8) to improve miner usability. You can find out more about all the exciting happenings of SpaceRace by watching [the weekly reports and other events](https://www.youtube.com/playlist?list=PL_0VrY55uV19fvIXDyvY5WjZe1cZIvDOn).

One of the main goals of Space Race was to prepare the Filecoin network and operators for the levels of usage, traffic, and performance we might see over time on mainnet. The final week included important stress-testing procedures for the network, including [chain upgrades](https://github.com/filecoin-project/lotus/releases/tag/v0.6.0), [drand outages](https://drand.statuspage.io/incidents/gyhkqf9tm9dh), and [state updates](https://github.com/filecoin-project/lotus/releases/tag/v0.7.0). Preparing everyone for these sorts of real-world challenges helps the network handle situations smoothly – this will make the Filecoin mainnet stronger and more resilient. We learned a lot from these stress tests as a community: how much time we needed to do a coordinated consensus upgrade, what tooling we need to make these upgrades easier, and how operators can recover from problems swiftly and safely. We now have [version dashboards](https://filfox.info/en/stats/lotus), [checkpoint follow logic](https://github.com/filecoin-project/lotus/pull/3680), and [snapshot export tooling](https://github.com/filecoin-project/lotus/pull/3463) thanks to this testing!

Huge thank you to the entire community for such a phenomenal competition so far. We’re honored to be building this network alongside you — here’s hoping we hit the epic 200 PiB milestone and reward tier!

![Space Race 1 dashboard](https://filecoin.io/vintage/images/blog/SP1-dashboard.jpg)

## Bringing the Community Together

The community response and conversations have been amazing! We have seen and heard from hundreds of people participating in the Space Race, from all over the world. Miners have written dozens of blog posts, participated in 3 AMAs, and [9 Filecoin Miners have presented at 3 Show-and-Tells](https://www.youtube.com/playlist?list=PL_0VrY55uV19fvIXDyvY5WjZe1cZIvDOn). Over 1,205 community members are active in the #space-race Slack channel, producing an ocean of discussions about all things Filecoin. 11 especially helpful people won Community Awards for their great contributions. The community participation and momentum is amazing! 🚀

Participants have generated a ton of great feedback throughout Space Race, leading to many lotus features, protocol adjustments, chain explorer improvements, new tools, and much more. Your thoughts and feedback are valuable, as they guide the project and guide the development of many products across the ecosystem. Some of the requests point in conflicting directions – entirely normal in large blockchain communities like ours. But the data also shows some strong common themes.

Among the many insights and feedback, five big requests led to this post today:

1. **Miners and Devs want more time for testing and tuning.** A large number of miners and developers asked for more time to test and improve things all around: miner hardware deployments, miner software systems, filecoin mining UX, filecoin implementation bugs, protocol parameter tuning, economic models for miners big and small, etc. Miners vary in how much time they want: some want a week, some want months. And lots say “we want another Space Race!”
2. **Miners want more opportunities to earn rewards!** During Space Race, miners gained extensive experience and knowledge in how to build and manage storage mining operations. Now that miners know how to do it, many are seeking additional rewards to improve operations or buy more hardware to deploy. “More Space Race! More rewards!”
3. **Miners want message throughput and PoSt reliability to improve.** A high level of chain congestion caused many undesirable effects in Space Race. Faults became hard to recover during chain congestion, causing miners to struggle during upgrades, DDOS attacks, and planned test outages. WindowPosts, Faults, Chain Congestion, and Selfish Packing are manageable on their own, but when they mix and amplify things can get difficult. Continued testing and iteration on a network at scale can help us improve this.
4. **Miners and Devs want more time to improve dealmaking.** The network as a whole managed to reach a good Storage Deal and Retrieval Deal success rate overall, and many miners achieved a near-perfect success rate! Great work! But miners also faced some challenges: network problems, firewall issues, bugs, ISPs and VPNs issues, and more. We still have a lot to improve here to provide a robust, decentralized global storage network. We didn’t make storing user data a big part of the competition, so many miners and users have asked for more testing and improvement of these flows. “Can we do a Space Race for clients and apps?”
5. **Miners and Devs want to use Space Race Sectors in Mainnet.** The 195 PiB of capacity proved so far during Space Race is a hugely valuable asset to the Filecoin Project. We have hoped to use the sectors proved during Space Race in mainnet. The excellent distribution of storage power in Space Race means we could start with large amounts of storage power, decentralized well enough among hundreds of participants, increasing network security. This is also a request we have received from many miners, who have spent lots of resources, money, and energy on sealing Space Race sectors. Being able to use those sectors long-term would make their participation much more worthwhile, and would greatly increase the security of mainnet.

Now, doing another Space Race is asking a lot of the miners, developers, and Space Race staff – many of us are exhausted after 3 fast-paced and intense weeks! The Space Race has been a huge and challenging undertaking for everyone. Miners had to build and run their entire operations, learn how everything worked, improve and optimize their operations, gracefully manage problems and stress-tests, and more. We developed lots of custom software, created competition programs, put on events, staffed the channels 24⁄7 to help people get started and problem solve, and so on. These programs take significant time to plan, put on, and participate in. However, given the valuable opportunities and the strong requests, we decided to give the community what they asked for. ❤️

![Space Race Orbital Burn](https://filecoin.io/vintage/images/blog/sr2-orbital-burn.jpg)

## Introducing Space Race 2

We’re excited to introduce Space Race 2 (or SR2)! Based on all the feedback, we decided to create a second phase of competition building on the massive network grown during Space Race so far. This gives us an opportunity to continue testing and improving Filecoin on a network at scale, as we prepare for mainnet.

**Domain Tracks.** SR2 will be a competition with domain oriented tracks. These tracks let different subsets of the community exercise & test different parts of the network.

- **Track 1: SR2 - Orbital Burn.** A track for storage miners to continue testing and growing the scale of the network. This will pick up where Space Race 1 left off. This track is described below in this post.
- **Track 2: SR2 - Slingshot.** A track for Filecoin clients, application developers, and tooling developers to deploy their products to the testnet. This track will encourage clients and miners to make storage and retrieval deals, and help users of Filecoin storage prepare for mainnet. This track will be described in a blog post early next week.

### Track 1: SR2 - Orbital Burn for Storage Miners

In **SR2: Orbital Burn**, storage miners will receive additional rewards for maintaining and growing their storage. However miners will not need to race towards large storage targets to increase prize pools in limited time. This structure lets miners grow their storage at their own pace. We hope this gives teams time to rest & regroup as they need after the intense competition of SR1. Here is a preview of **SR2: Orbital Burn** competition rules. The final rules will be posted on the website.

- **Goals**
  - **Proper Economic Simulation.** The primary goal of SR2 is to create testing conditions as close to mainnet as we can. While SR1 focused primarily on raw byte storage power, other economic factors such as block rewards and gas fees will play a more realistic role in SR2.
  - **Proper Markets Simulation.** During SR1, deal success was measured by a very limited set of deals. As we head toward the mainnet goal of a robust, global, and decentralized storage network for humanity’s information, SR2 will reward both dealbot deals and storage client deals.
- **Rewards**
  - **Mainnet Sectors.** Miners who succeed in maintaining or growing their sectors throughout SR2 will be able to **transfer/pre-load** a portion of their sectors into Mainnet. This means that storage power earned during Space Race 1 and Space Race 2 will directly improve your storage power for mainnet launch.
  - **Sector Pledge Collaterals.** In addition, miners who succeed in maintaining their sectors throughout SR2 will get those sectors preloaded into mainnet with the corresponding pledge collateral covered by the protocol. This is more than 4.5 million FIL as of the date of this post – more than the rewards of SR1! We hope this will be a big reward for miners who have been deeply involved with Filecoin for many months and years.
  - **FIL prize pool for Block Rewards & Gas Fees won.** At the end of SR2, miners will receive a part of a prize pool **proportional** to the testnet FIL they earned as block rewards and gas fees. This is intended to provide a strong economic incentive to pack blocks properly. The proportion will be chosen by SR2 organizers once SR2 ends and the whole distribution of amounts is better understood.
- **Other Details**
  - **Duration: \~3 weeks (Sep 14 - Oct 5).** We are still finalizing the timing, but we aim to run SR2 for three weeks, as everybody prepares for mainnet launch. We may extend or shorten the duration of SR2 depending on how preparations for mainnet proceed.
  - **Faults:** Normal fault and recovery conditions apply: sectors are considered existent until they are fully terminated (many consecutive faults).
  - **No Storage Capacity Target Prize Pools.** At this time, we do not plan to have any storage capacity target prize pools for SR2.
  - **Open Entry, No Miner Registration.** No registration is required this time. Anybody can create a miner account, start mining, and earn the storage at the end. (Note: if prize pools are added, registration may be required to claim non-sector/collateral rewards).
  - **Deal Success Rates.** We will continue to require deal success rates to qualify, as measured by the deal bots. Deal success has been one of the most challenging criteria for miners, but has yielded tremendous improvements to the storage and retrieval markets and implementations.
  - **Prove Commit Reimbursement.** We plan to continue running the reimbursement faucet during SR2 at reduced capacity, so that miners who wish to add storage can continue growing. We will shut it off or cap its reimbursements if there is any abuse, attempts to game it, or other problems.
  - **New User Faucet.** We will reinstate the new user faucet (OAuth through github) but with much more conservative parameters. We will shut it off or cap its reimbursements if there is any abuse, attempts to game it, or other problems.

## Thank You for Participating

We have often hoped to include Space Race storage in mainnet to support initializing the network with large amounts of useful and well-decentralized storage power. We hope that SR2 will achieve this and stress-test even more pathways, including economic incentive conditions much closer to those expected in mainnet.

Thank you very much for participating in SR1. It has been a fantastic and rewarding experience for all of us, and we have accomplished great things together. We have amassed nearly 200 PiB of storage via a decentralized storage network, powered by a novel blockchain!! We have created a tremendously large distributed storage facility. Though not yet as large as the large centralized cloud companies, we’re well on our way – that is our challenge for the coming years.

Good luck as we reach the end of SR1! And good luck with SR2!

_-The Filecoin SpaceRace Team_
