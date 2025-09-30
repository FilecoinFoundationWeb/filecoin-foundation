---
aliases: []
author: ""
categories:
  - interviews
date: "2021-04-15T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: " Filrep.io helps storage clients answer “How can I find the best miners to make storage and retrieval deals with?” by keeping track of storage miner reliability and performance."
image:
  alt: ""
  url: /uploads/filecoin-blog-mob-3.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-mob-3.webp
title: FilRep.io - A Filecoin Miner Reputation System v1 by Digital Mob
_template: blog_detail
---

[Digital MOB](http://digitalmob.ro) has launched the first version of their Filecoin Miner Reputation System available now at [Filrep.io](https://filrep.io/).

A reliable reputation system is crucial for the well-functioning of the Filecoin ecosystem. Storage clients must navigate a sea of storage miners and discover ones that are the best match for their specific needs. The raison d’etre of the reputation system is to help them achieve this.

![](/uploads/filrep-screenshot.webp)

One challenge when building a reputation system is the sheer amount of data available about the activity of a Filecoin storage miner. Their objective was to dig through this data and figure out what data resonates most about the reliability and performance of a miner as the foundation of a reputation score. This is in contrast to what data can be used to differentiate between miners but has no impact on the reputation itself.

The Filrep.io reputation system has two main complementary components:

1. A reputation score that captures the reliability of a miner when making deals (Reliability is understood to mean the ability of a miner to successfully accept and complete storage and retrieval deals).
2. A series of metrics that are important to storage clients when evaluating the best miners for their data requirements (e.g price, location, free space).

![](/uploads/filrep-screenshot-2.webp)

In Filrep.io’s first version, the reputation score only captures aspects related to storage deal reliability. Retrieval aspects of the system will be included in future versions.

[Filrep.io](https://filrep.io/) provides all of its data via a public API and a dashboard. The system is designed to cater to all ecosystem participants: **_developers_** can use the data provided by the public API to improve miner selection options in their storage clients, **_miners_** can use the dashboard to check how they perform in comparison to other miners and gain insight into how to improve their services, and **_storage clients_** can use the dashboard to select the best miners for their needs.

## How a reputation score is calculated

Selecting the metrics and formula that make up a reputation score posed some challenges. A “one score fits all” approach had to be avoided as well as the temptation to include many metrics in the score.

For clarity, Filrep.io’s development team decided to focus only on metrics that speak about how well a miner serves their clients. Another challenging question was the impact of time on a miner’s reputation. Should past activity have the same weight as recent? Forgiveness is a central mechanism that allows humans to let go of distressing things that happen in the past. It was decided that the reputation score should also include a forgiveness mechanism that would give less and less importance to mistakes that happened in the past as time goes by.

Some guiding principles used throughout the design:

- The score should reflect the behavior of a miner _throughout the entire deal-making process_: from preparing to accept deals, to responding to the price request and accepting and completing deals.
- The score should reflect the _quality_ of the services offered by miners. (Quantity is also important and the system provides metrics that express quantity: number of deals, total data stored, etc. But the score should not discriminate against new miners that have just joined the protocol just because they only have a few deals compared to old miners with way more deals. New miners should have the chance of having a perfect reputation score as long as they prove to offer high-quality services to the community despite the low number of deals.)
- The formula should include a time decay mechanism that would give more importance to recent activity of a miner.

![](/uploads/filrep-on-monitor.webp)

Filrep.io’s score is divided into several components to cover all aspects that influence the successful completion of the storage deal.

- The max score that miners can have is 100 points.
- The score is based on 3 main sets of metrics, each set with a different weight in the total score:
  - **Committed sector proofs metrics**: **30% weight**. Before upgrading committed capacity sectors to a sector with deals, miners are rewarded for submitting proofs to the network that they are pledging storage capacity. It is important to have as a few failures as possible in order to be ready to meet storage demand.
  - **Online reachability**: **30% weight**. The first step in initiating a storage deal is to ask a miner about their FIL price. If this request fails, it is impossible to continue the storage process and the miner has to be penalized. The reputation system queries miners periodically. To calculate the reachability score, we look at the distribution of successful/failed requests over time.
  - **Deal metrics: 40% weight.** The 3rd component of the score reflects the success rate at which the miner has successfully completed storage deals. Making storage deals is the bread and butter of a miner and this component has the biggest weight in the score.

For a detailed explanation of how each component of the score is calculated, please visit the methodology section of the Filrep.io reputation website at [https://filrep.io/methodology](https://filrep.io/methodology "https://filrep.io/methodology").

![](/uploads/devindigitalmoboffice.webp)

## Reputation score V2 roadmap

Filrep.io’s ultimate goal is to provide a reliable, fair, and complete reputation system to the Filecoin community. It’s development team is committed to permanently improving the tool by keeping an eye on the protocol improvements and community feedback.

A series of new functionalities and improvements will be added to the current implementation in the next months. The below list is not exhaustive:

- Add retrieval metrics: time to first byte, speed of data retrieval.
- Allow miners to create user accounts and gain access to more functionality:
  - Claim and name a miner (similar to Space Race).
  - Group claimed miners into a company/operation to allow the transfer of the reputation from a machine to the company.
  - Give miners the ability to set maintenance windows for their machines (in the maintenance windows the bot will stop sending query asks thus the reputation score will not be affected).
  - Provide logs for more transparency.
  - Allow miners to set a company page and provide contact information.

## About Digital MOB

![](/uploads/dmob-plus-bucharest-rooftop.webp)

Digital MOB is a multidisciplinary software development company based in Bucharest, Romania, but distributed worldwide, partnering with international clients that value quality of outcome above all else, to create memorable and meaningful experiences. Their extensive team of professionals specialize in web and mobile technologies, product design, system architecture, product development and has years of experience in blockchain tech.

Digital MOB has already created a series of tools for the Filecoin community:

1. [**Filecoin.js.**](https://filecoin-shipyard.github.io/filecoin.js/) A JavaScript library for interacting with the Filecoin blockchain.
2. Filstats. A node telemetry monitoring tool that allows the community to see network statistics in real time.
3. **SpaceRace.** The Filecoin testnet incentives program dashboard supported a collaborative competition intended to stress-test the network, encourage participation all over the world, and help miners get ready to run the world’s biggest decentralized storage network.
4. **Filpoll.** FilPoll is a Filecoin community polling tool for gauging community sentiment on Filecoin Improvement Proposals.
