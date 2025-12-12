---
aliases: []
author: ""
categories:
  - updates
  - events
date: 2023-04-19T05:00:00.000Z
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Get the details on the expedited nv19 upgrade, FEVM on Brave Wallet, and
  Messari’s latest State of Filecoin report.
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-news-64.en.md
related_article_2: content/blog/posts/filecoin-news-63.en.md
related_article_3: content/blog/posts/filecoin-news-62.en.md
share_image: /uploads/blog-filecoin-news.webp
title: Filecoin News 65
image:
  url: /uploads/blog-filecoin-news.webp
  alt: ""
draft: false
---

![](/uploads/filecoin-news-65.webp)

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Announcements</b></h3>

## **Network v19 Lightening and nv20 Thunder**

In light of the recent degraded chain quality on mainnet, [an expedited nv19 upgrade has been proposed](https://github.com/filecoin-project/core-devs/discussions/123#discussioncomment-5642909) to roll out the market cron mitigation [FIP0060](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0060.md) that will improve block validation times, and hopefully further improve the degraded chain quality currently. We need the community’s support to ensure an expedited but smooth network upgrade, please see below for the key changes and important dates:

- nv19 upgrade on mainnet is moved up from May 11th to April 27th - So that the improvement can be delivered to the network and node operators 10 days sooner.
- Core devs have decided to postpone the activation epoch fixes and [FIP0052 - Extend sector/deal max duration to 3.5 year.](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md) to a later network upgrade.
- By descoping these changes we can greatly de-risk the network upgrade itself by removing a heavy migration that could cause instability for storage providers and node operators during the network upgrade.
- Increase the rollover period for [FIP0061](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md) from 1 week to 3 weeks on mainnet. The rollover period is the duration between nv19 and nv20 which both old proofs (v1) and the new proofs (v1_1) proofs will be accepted by the network.

Please refer to the [implementation announcement channel](https://filecoinproject.slack.com/archives/C01AC6999KQ/p1681830405088089) in Slack for release timelines. For more details, please see the [community discussion](https://github.com/filecoin-project/community/discussions/74#discussioncomment-5376097) in GitHub. Thank you in advance for your understanding and cooperation!

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Community</b></h3>

## **FEVM + Brave Wallet**

The Filecoin EVM (FEVM) — the Ethereum virtual machine virtualized as a runtime on top of FVM — is [now a pre-loaded network on Brave Wallet](https://twitter.com/brave/status/1643717569340227586?s=20)’s latest desktop release (v1.50). This runtime environment makes it easier for developers to port their EVM smart contracts to the Filecoin network and start taking advantage of the FVM’s capabilities. Brave Wallet users can now jump straight into the network and its evolving ecosystem of web3 applications based on decentralized storage.

## **State of Filecoin Q1 2023**

Messari recently shared its quarterly analysis on the Filecoin network. Some key insights include a 105% QoQ growth in storage utilization and a 75% QoQ growth in active deals — a part of which came from a 14% increase in daily new deals. The report also takes a look at the impact that the FVM launch has had on the network and web3 as a whole as well as how its roll out has progressed. It concludes that the growth in onboarding and the next-generation applications enabled by the FVM can position Filecoin as a “prominent provider of decentralized storage and cloud services for Web3 and traditional applications.” [Read the report](https://messari.io/report/state-of-filecoin-q1-2023?utm_medium=organic_social&utm_source=twitter_mihaigrigore&utm_campaign=state_of_filecoin_q1_2023) and share your own conclusions with the community.

## **The FVM Imaginarium: Developer Tooling, Hackathons and other Opportunities for Builders**

The [Filecoin Virtual Machine (FVM)](http://fvm.dev/) went live on mainnet on March 14th and since, builders have launched everything from [Filecoin pledging and leasing solutions](https://filecoin.io/blog/posts/fvm-imaginarium-staking-and-leasing-protocols/) to [token bridging protocols](https://filecoin.io/blog/posts/the-fvm-imaginarium-cross-chain-interoperability/). However, we are still just scratching the surface: storage, retrieval and compute applications, which combined are a 300 billion dollar industry, are now more accessible to tap into for Filecoin Ecosystem developers. The FVM enables developers to build a plethora of decentralized applications (dApps) on the Filecoin network and engender a data economy for a wide range of audiences from decentralized data computation services users to Filecoin Storage Providers and clients. [Read this blogpost](https://filecoin.io/blog/posts/the-fvm-imaginarium-developer-tooling-hackathons-and-other-opportunities-for-builders/) for an overview of developer tools that will help you get started on your journey building with FVM.

## **FVM Growth: STFIL**

FrogHub is one of the many teams that are building one of the exciting new applications enabled by the FVM. Their project, STFIL, is a decentralized liquidity staking protocol for FIL that connects token holders and Storage Providers in more efficient ways. The protocol recently passed 10K in total FIL locked with the help of their leasing features. Learn more about STFIL, the team behind it, and how they’re growing the Filecoin DeFi ecosystem by visiting their [website](https://www.stfil.io/).

## **Filecoin Bug Bounty Program Now Live on Immunefi**

As announced a few weeks ago, the [Filecoin Bug Bounty Program](https://security.filecoin.io/bug-bounty/) has been refreshed and is now [live on Immunefi](https://immunefi.com/bounty/filecoin/). It features increased rewards up to $500k USD for critical issues and inclusion of programmability features in scope. Post-launch, the community continues to be committed to guaranteeing the security of Filecoin. The network now counts with new and updated components: the FVM, the EVM runtime, and its dependencies. With this update, there is an invitation to security researchers, developers, and bug bunters to help the community identify latent risks and problems that may remain in the codebase after mainnet launch. Learn more about the program, the updated scope, rules and more in this [post](https://filecoin.io/blog/posts/refreshing-the-filecoin-bug-bounty-program/).

## **Graph Paper Capital’s GPC1**

Introducing [Graph Paper Capital](http://www.graphpapercapital.xyz/), an early-stage accelerator and networked ecosystem, focused on helping pre-seed/seed-stage web3 startups find PMF and get to default alive. Applications for [GPC1](https://docs.google.com/forms/d/e/1FAIpQLSdimOmLWtAOsdt7mIndLrloKuBnKM3pDY3BMieU2_w6VDaOKw/viewform) Spring ‘23 cohort are now open through April 28th and they are seeking teams building on the Filecoin tech. Check out the [official website](http://www.graphpapercapital.xyz/) for the application, investment terms, cohort dates, 12-week program structure, full network of mentors and investors, FAQs, and more.

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Tools</b></h3>

## **Web3 Architecture and New Solutions for Carbon Offsets**

Alan Ransil, Filecoin Sustainability Lead, recently explained how leading web3 projects are helping to address the climate crisis with game-changing new tools. From direct payments for carbon offsetting communities to satellite-led deforestation monitoring, these solutions are reframing web3’s role in the fight against climate change. Learn more about these initiatives in Alan’s [Forbes piece](https://www.forbes.com/sites/alanransil/2023/04/12/web3-projects-are-rebuilding-carbon-offsets-architecture-of-trust/?sh=278810ce6ec0) and check out what the community is also doing with [Filecoin Green](https://green.filecoin.io/).

## **Indexer Scalability for Ingest-heavy Workload**

There’s a simple strategy to handle index ingestion that requires less syncing and has no need for consensus. It is based on distributing ingestion over a pool of indexers in a way that allows nodes to be added as additional capacity is required. All of this happens without needing to move data around to rebalance storage. Dive into how to apply this strategy — as well as its pros and cons — on the [Filecoin blog](https://filecoin.io/blog/posts/indexer-scalability-for-ingest-heavy-workload/).

<h3 style="margin:3em 0 2em 0;padding-bottom:.5em;color:#888888;border-bottom: 2px solid #808080;"><b>Events</b></h3>

## **Join the VideoJam Hackathon**

There’s still time to join the VideoJam Hackathon happening online until May 3. This two-week event hosted by Huddle01 is dedicated to building innovative video applications and tools for the web3 ecosystem using FVM. It features a prize pool of $21.5K across tracks including Social Platform, Gated Content Platform, Innovative Feature, and LightHouse SDK. [Apply now](https://videojam.devfolio.co/overview)!

## **Sustainable Blockchain Summit and Hackathon Recap**

Another SBS is complete! SBS-Boston featured 30+ expert speakers in blockchain, sustainability, and the growing ReFi movement. Some of the most prominent topics covered included highlighting the real-world applications and utility of blockchain technology on people and planet, how open and decentralized data enables a higher degree of transparency for things like carbon offsets and supply chain traceability, and how we can build the next generation of the internet to be more aligned with the natural world.

Leading up to SBS Boston was a two-stage hackathon with over 400+ participants that aimed to connect the ReFi community with students interested in sustainability and web3, with a goal to seek the best use of Filecoin and CO2.Storage for environmentally focused projects. You can check out the first place winner [OpenTrees](https://devpost.com/software/open-trees), as well as other hackathon winners [here](https://sbsboston.devpost.com/project-gallery)!

## **Announcing SBS-Earth and** **[SBS.VC](http://sbs.vc/)**

We’re excited to announce the next SBS event, SBS-Earth, a completely virtual, global festival of ReFi that will bring even more visibility to on-the ground projects and real-world applications of web3 technologies! [Sign up here](https://airtable.com/shrHLnufwtCcugTtm) to be notified about future SBS updates and stay tuned for more details about SBS-Earth!

Additionally, we’re working to connect web3 sustainability startups to capital with SBS.VC. SBS.VC is an invite-only virtual demo day featuring top ReFi startups affiliated with the Sustainable Blockchain Summit, the premier forum at the intersection of web3 and the environment.

## **Filecoin Network Base in Austin, TX**

Heading to Consensus? Connect with the Filecoin community ahead of the big event on April 24-26. The Filecoin Network Base will be at the Riley Building in downtown Austin. Programming highlights include sessions on Web3 and gaming, developer workshops, and the latest updates on FVM, as well as partner office hours where you can connect with your peers and start building your big idea on the Filecoin network.

There’s also the Filecoin Foundation’s Protocol Village, featuring presentations on the Filecoin Roadmap on Friday, April 28, starting at 1:45 PM CDT.

Finally, don’t miss our happy hours on Monday and Tuesday evenings, from 7-9 PM CDT, with DJ sets featuring vintage deep house vibes.

## **Funding the Commons, July 15-16**

The 6th edition of [Funding the Commons](https://fundingthecommons.io/) will take place on 15-16 July with the beautiful backdrop of Paris, France. This installation of Funding the Commons is timed as the perfect complement to the Ethereum Community Conference, which takes place the following day and just a short walk from the university. Paris will be our key in-person event during 2023 and will be unique in its incorporation of open space technology and other unconference-style programming, in addition to keynote speakers and panel discussions. This format will enable even more connection amongst participants, and lead to the formation of new collaborations and projects. Apply to attend or apply to speak on the [official website](https://fundingthecommons.io/). We look forward to seeing you in Paris!

## ✊ Get Involved

Head over to the **[Filecoin project on GitHub](https://github.com/filecoin-project)** and be sure to take a look at the **[community resources](https://github.com/filecoin-project/community)**. Ask questions in the **[Filecoin Slack](http://filecoin.io/slack)**, discuss issues or new ideas in **[the community forum](https://discuss.filecoin.io/)**, follow us on WeChat @Filecoin-Official or send us your thoughts **[on Twitter by following @Filecoin](https://twitter.com/Filecoin)**.

**[The Filecoin blog](https://filecoin.io/blog/)** and **[YouTube channel](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA)** are also great sources of information if you’re just getting started.

To receive this newsletter directly to your inbox, **[subscribe](https://mailchi.mp/filecoin.io/subscribe)**!
