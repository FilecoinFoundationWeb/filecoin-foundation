---
author: ""
categories: []
date: "2020-09-20T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As a part of the Space Race events program, the Filecoin team are hosting
  weekly live AMA’s with the Filecoin community.
image:
  alt: "Space Race AMA #3 Summary"
  url: /uploads/sr-live-ama-header-2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sr-live-ama-social-2.webp
title: "Space Race AMA #3 Summary"
_template: blog_detail
---

As a part of the Space Race events program, the Filecoin team are hosting weekly live AMA’s with the Filecoin community. On September 16th our team hosted our third AMA answering 20+ questions on Space Race 2, cryptoeconomics, and Filecoin mining.

A summary of the answers from our Q&A is below. We look forward to hosting more sessions like this as mainnet launch approaches! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on Wechat (Filecoin-Official), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

Most questions and answers are quoted directly, some are edited for readability.

**When will Space Race 2 begin?**

Space Race 2 has already begun! You can learn more [here](https://filecoin.io/blog/space-race-2/).

**What percentage of sectors completed by miners in Space Race can be converted to sectors in Mainnet?**

The network benefits from as much storage as possible, so ideally we hope to carry over all of it. It would be great to carry over 100%. However, one important principle to keep in mind: we must keep the initialization of mainnet well decentralized. Right now the power distribution is good, but it could get bad in the next two weeks (one miner adding dramatically much more than others, or many miners losing a lot of sectors due to 14 days of faults/termination).

**What is the test target in Space Race 2?**

SR2 tests the network’s continued ability to operate securely and efficiently, store data at large scale, and perform upgrades. It additionally seeks to test storage client workflows at larger scale. For now, we’re in a period for recharging, and miners’ goal in SR2 should be to maintain or grow their storage and perform any required maintenance. We’ll soon announce more concrete targets and incentives for the remainder of SR2.

**Is there real data (or verified data) sealed in Space Race 2？**

SR2 will have storage client data stored as part of track 2: Slingshot, which will be published sometime in the next few days. This is optional for miners, but helps test the demand side of the marketplace.

**Can I use a cloud host to participate in Space Race 2?**

You can do it, but we recommend against it. We strongly recommend that you use the same setup you intend to use to participate at mainnet.

**If miners find an error during Space Race 2 that requires instructions to reproduce, where should we post? SR, mining, lotus, or contact someone to post a github issue?**

For bug reports, an [issue ticket in GitHub](https://github.com/filecoin-project/lotus/issues/new/choose) is most welcomed. Or you can post your questions in #space-race, #fil-lotus, or #fil-help.

**Could you confirm if the New PC1 will remain on a CPU SingleThreaded process or will rely on GPU or Multithreading?**

It will remain CPU single-threaded.

**When can we get the results of Space Race 1 awards?**

Early next week.

**Can Space Race 1 committed capacity sector be converted into sectors with verified client deals?**

Miners can always upgrade their committed capacity sectors to sectors with verified client deals.

**Where does the real data of Space Race 2 come from? Do miners need to find it themselves?**

The SR: Slingshot track rules will be published later this week. Useful data can be found or contributed by any of: clients, miners, or app developers.

**Other than starting a new miner or account, is there any use for the faucet in Space Race 2?**

Yes, the faucet can also be used to test Filecoin storage client and value transfer workflows. If you’re building an application that uses Filecoin storage retrieval, or a wallet, for example, the faucet is there for you.

**SR2 and SR1 are independent. You also said that the computing power of SR1 can be directly transferred to SR2, and you can get the reward of SR2, right?**

Yes, SR1 has completed. SR2 is about maintaining or growing storage (for miners), and about testing real data flows (for clients, miners). Yes, the network continues from SR1 and all that storage can be maintained. SR2 exists in part because we want to save and use the amazing amount of storage we built in SR1. Without that storage, we would likely not have SR2.

**How can we register a miner for Space Race 2? Can a new miner participate without registration?**

Registration is not required for Space Race 2.

**Can you tell us more about Lotus v0.8? What is the purpose? What sorts of metrics will it be used for? What should we (miners) be considering?**

Lotus v0.8 adds functionality to upgrade the actors implementation within Lotus - which will help the network respond quickly in the case of any issues and gracefully take advantage of new improvement proposals by the community. We expect Lotus and the Filecoin network to keep improving over time, and want to validate and test our ability to iterate quickly.

**After Space Race 2 is over, is there time left for miners to adjust hardware and architecture before the mainnet goes online? If so, how long is it？**

We encourage miners to take time during Space Race 2 to adjust their setups as needed. We’re working to add more documentation [here](https://docs.filecoin.io/get-started/lotus/switch-networks/) for how miners can move their data between setups so they can use this time to prepare their hardware and architecture for mainnet.

**After the end of Space Race 2, do you need to keep all the sectors encapsulated during the game to the mainnet, or only a part of them?**

The main miner reward for Space Race 2 is that miners who maintain their storage during this period will get to transition a portion of those sectors sealed during Space Race to mainnet - so we recommend you maintain and continue proving all the sectors you want to be eligible for transition. This answers a lot of miner questions about how they’ll be able to afford pledge collateral in the early days of the network, while continuing to reward the amazing scale of data onboarded onto the network during Space Race.

**Which version of lotus would be used in SR2?**

It has already begun (use Lotus v0.7.x). There will be optional releases along the way, and likely one or more network upgrades.

**How would one fix the problem of miners packing blocks selfishly?**

Message packing is a resource allocation problem at the end of the day. Block producing miners may prioritize their own messages first but that doesn’t mean that there is no incentive for them to include other miner’s messages or these block producing miners can include their own messages for free (base fee is burned for all miners). It’s just that when a block producing miner produces a block, they can pay themselves a close-to-zero gas premium but it might be higher for other miners. Not including other miners’ messages also leaves money on the table since some other miners will earn their gas premium.

**How can a new miner participate in Space Race 2 ?**

There’s nothing special about participating as a new miner. For an outline of the program structure read [here](https://filecoin.io/blog/space-race-2/). To learn how to mine, head to docs.filecoin.io to get started.

**When will the “wdpost failure” be fixed?**

We’re actively working on making Lotus far better at calculating and submitting WindowPoSt messages. This also includes minimizing the damage when something goes wrong – we don’t want one bad sector to cause an entire partition (or worse, an entire deadline!) to get slashed. These improvements are underway (some already in the latest master branch). In addition, the research team is also working hard to make WindowPoSt more tolerant of honest operational risks without sacrificing too much security and quality of service.

**Is the official economic model established now?**

Most mainnet parameter recommendations have landed in the code base. Research team is working on making fault penalties more tolerant of real world operational failures, specially failing WindowPost, and closing some other loose ends. As a reminder, it is expected that economic structures and parameters will evolve and emerge over time after the network goes live.

**How’s the tps issue that caused the mempool stuck or lead to big miners only packing their own data?**

Chain bandwidth is a limited resource like any other blockchain projects. There are many reasons why block producing miners only pack their own messages when the network is congested. However, there is still incentive for them to include other miner’s messages (otherwise other miners will earn the gas premiums) and including their own messages is not free (base fee is burned for all participants).
