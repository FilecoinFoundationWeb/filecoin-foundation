---
aliases:
  - /blog/space-race-ama-3-summary/
author: ""
categories:
  - updates
date: "2020-09-10T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As a part of the Space Race events program, on September 9th the Filecoin team
  hosted another live AMA with the Filecoin community, answering questions on
  Space Race, cryptoeconomics, Filecoin mining. Our engineering team also helped
  miners troubleshoot some common issues.
image:
  alt: "Space Race AMA #2 Summary"
  url: /uploads/sr-live-ama-header-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sr-live-ama-social-1.webp
title: "Space Race AMA #2 Summary"
_template: blog_detail
---

As a part of the Space Race events program, on September 9th the Filecoin team hosted another live AMA with the Filecoin community, answering questions on Space Race, cryptoeconomics, Filecoin mining. Our engineering team also helped miners troubleshoot some common issues.

A summary of the answers from our Q&A is below. We look forward to hosting more sessions like this as mainnet launch approaches! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on Wechat (Filecoin-Official), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

_Most questions and answers are quoted directly, some are edited for readability._

**In the economic model of filecoin, how do small and medium miners succeed?**

The same way as big miners! The economies of scale are actually not that dramatic in Filecoin – its reliance on commodity hardware means that big players don’t have the same scaling advantages as some other networks. It is definitely true that mining Filecoin requires active technical management right now, which could favor better-resourced teams, but this is improving rapidly and will continue to improve into the future. If you have ideas for dev grants to improve miner UX and help small miners, let us know!

**Hi. Which parts/phases of sealing can be done in parallel on a single machine?**

All but PreCommit2 and Commit2, but we are working on making it possible to run those in parallel with other things.

**How do you transfer funds from a miner to a worker?**

The `lotus-miner actor withdraw` CLI command will withdraw any available funds to your owner address. You can then transfer those funds to your worker or control addresses with a simple send.

**On the same miner, how many sectors can be processing in the precommit #1 phase concurrently with 128 GB or 256 GB of RAM? We have lots of swap available.**

Currently each PreCommit1 (for a 32G sector) requires 56GiB of available RAM, and 64GiB of available RAM+Swap. This can be tweaked in extern/sector-storage/resources.go

**As we are approaching the end of week 3, is there any celebration event lined up after the conclusion of the Space Race?**

Yes, we’ll be hosting a closing ceremony on Monday 09/14 at 11pm (UTC) / 4pm (PST) / Tuesday at 7am (CST).

**When is mainnet launch?**

You can consult the [Filecoin August 2020 Roadmap Update](https://filecoin.io/blog/roadmap-update-august-2020/) for the latest, and the latest timeline is also available in the [public project roadmap gantt chart](https://app.instagantt.com/shared/s/1152992274307505/latest). The tentative mainnet launch window as of those posts ends on September 28 2020, but of course that is subject to revisions.

**Do you have any thoughts on what fees/costs are going to be like on mainnet? Wondering how much FIL a miner should expect to have ‘in their coffers’ to start.**

Assuming you are referring to gas fees and cost on Mainnet, BaseFee will be up to the fee market which is a balance between how much the network can process and how much participants are willing to pay. There is also a GasPremium on top of that which is the priority fee that the message sender is willing to pay and that is specified by the sender. We are also exploring ways to improve chain bandwidth resource allocation.

For other fees like fault penalties, they are specified in the recent cryptoecon report. There are updates to parameters that are landing into the code, will likely publish a summary table as well.

**Do official harddrives have any advantages during mainnet mining? Especially at the beginning when the real users may be only a few compared with miners?**

There is no official hard drive. You might be referring to Dumbo Drop which involves hard drives as a cheap and efficient way to transfer data offline but the harddrives themselves will not give miners any additional advantage. Dumbo Drop is one of many verified clients and deals from verified clients will give miners greater quality-adjusted power. Verified client deals will go live after the details are announced.

**Will the mainnet be launched in October on time? Does the space race competition meet your team’s expectation so far?**

The competition has significantly exceeded our expectations. Remember that we are testing the Space Race network very robustly – there are network upgrades, outages, and lots of deals (almost 100,000 so far!). Despite all this, the network is growing at about twice the anticipated rate and many miners have near-100% deal success rates, even before scoring adjustments. We’ve also learned about a ton of bugs and UX improvements to make it easier for clients and smaller miners to operate.

**The hardware requirements are extremely high now, do you see any big improvement after testnet?**

Active research into more efficient PoRep algorithms is ongoing. For example, the SDR -> NSE upgrade path is promising, and would make sealing significantly faster and more efficient, which in turn would allow miners of all sizes to add more storage and the network to collectively exceed the baseline sooner. There are also other benefits such as better retrieval times.

**Will the official team come to Shanghai before mainnet launch?**

The Filecoin team is excited to meet with the Filecoin community across the world once travel restrictions have been lifted and it is safe to do so. In the meantime we’ll be hosting and attending virtual events such as Shanghai Blockchain Week in October.

**Is it profitable to enter as a miner now? Will there be any location difference for rewards during mainnet?**

Miners have to answer the profitability question for themselves but the protocol is designed to consistently and sustainably incentivize participation. There will be verified clients on Mainnet with diverse storage needs and many may favor storage miners that are in different geographic locations with different retrievability guarantees.

**Any plans to integrate Ethereum Name Service to make unstoppable web domains easier?**

We’re working on a number of integrations with partners across the Web3 space and are excited to announce more information soon.

**Is there updated guidance for the configurations given the current scarcity of FIL? This was the default value that came out: MaxWindowPoStGasFee = “50 FIL”**

Chain bandwidth is a limited resource. Message senders bid for that resource allocation through GasFeeCap. Given the abundance of testnet tokens, participants tend to bid up gas fees and hence a MaxWindowPoStGasFee was introduced as a default cap to not overly distort the fee market. Sometimes when the chain is congested, it is not a bad idea for the network to wait for the messages to be processed. With updated gas fees, it looks like miners are having success with MaxWindowPoStGasFee between 3-5 FIL. We are working on ways to improve chain bandwidth resource allocation.

**Your official miner has done well in the Space Race, why? Is there anything that you can share with all the miners?**

We don’t have an official miner. Having a reliable network connection, setting up on-chain miner info and control addresses, and ensuring PoSts are submitted are the key steps.

**How long does lotus daemon –import-snapshot take?**

The command doesn’t take very long to run, however you do need to download a very large file first. That can take several hours, depending on your internet connection.

**Are you satisfied with the state of global participation in the Space Race? Do you think the proportion of Chinese miners is too large?**

We definitely want more participation in every region to grow a healthy, decentralized global network for storage. That said, we’ve seen amazing activity in many parts of the world. We have some programs in the works to encourage further decentralization, but are extremely grateful for Filecoin’s many enthusiastic users so far.

**Asia appeared to be extremely active in the testnet mining while the rewards are equal for all continents. Is this really fair? Will there be any miners in Africa?**

The reward pools are actually balanced to handle this exact scenario – the global reward pool, which is the largest by far, rewards all participants equally, while the smaller regional reward pools provide moderate incentives to spread mining around the world.

**Thoughts on PoSts running >1x/day per sector? Hate to have clients lose data access for 24 hrs if it happened to be down for a few mins of a PoSt window.**

Data access is actually independent of PoSt submission – the PoSt is how the chain knows the data is being stored, but retrieval requests happen directly between the client and the miner.

**Do you have any official recommendations for mining hardwares now? The previous one was unclear. But you also attended the test, so any news?**

Miners are succeeding with a huge variety of hardware setups. [Watch the Miner Show & Tells](https://youtu.be/jO5hJiwKAjA) to learn more. The one strong recommendation we have is [to use AMD processors instead of Intel](https://lotus.filecoin.io/storage-providers/get-started/hardware-requirements/#cpu).

**Will the algorithm be changed after the main network is online?**

We will have network upgrades after mainnet launches that will introduce new proof types, user-defined contracts, specs-actors improvements, etc.

**AMD was said to be better than equivalent Intel CPU during mining, is that true?**

Yes, currently. Filecoin’s current Proof of Replication (PoRep) prefers to be run on AMD processors. More accurately, it runs much much slower on Intel CPUs. It runs competitively fast on some ARM processors, like the ones in newer Samsung phones, but they lack the RAM to seal the larger sector sizes. The main reason that we see this benefit on AMD processors is due to their implementation of the SHA hardware instructions.

**Our miner went offline for 24+ hours and is no longer on the dashboard. Our faulty sectors are recovering now, how long until we reappear on the dashboard?**

Generally you will recover faulty sectors at the next successful PoSt. The dashboard should pick it up shortly thereafter.
