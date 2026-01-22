---
aliases:
  - /blog/filecoin-liftoff-ama/
author: ""
categories:
  - events
date: "2020-10-21T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As a part of Filecoin Liftoff Week, the Filecoin team are hosting live AMAs
  with the Filecoin community.
image:
  alt: " Filecoin Liftoff Week AMA"
  url: /uploads/looking-back-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/liftoff-closing-ama-social.webp
title: Filecoin Liftoff Week AMA
_template: blog_detail
---

As a part of Filecoin Liftoff Week, the Filecoin team are hosting live AMAs with the Filecoin community. On October 21st our team hosted the first AMA, answering 20+ questions on Filecoin Launch, cryptoeconomics, and Filecoin mining.

A summary of the Q&As are below. We look forward to hosting more sessions like in the coming weeks! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on [Wechat (Filecoin-Official)](https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

Most questions and answers are quoted directly, some are edited for readability.

**Is there a new testnet now that the Space Race network transitioned into mainnet?**

We plan to run many testnets with different configurations. Calibration net has already been set up as a new long-running testnet that we plan to use to test new releases and state upgrades before they happen in the mainnet. It has the same parameters as mainnet, with the exception of support for 512 MiB sectors for faster testing.

**How does the cost of Filecoin storage compare to alternatives like AWS?**

Check out Filecoin Storage by ConsensysCodefi to see the average FIL price per GiB and a list of miners to make deals with. As of writing, the average price is 0.000043 FIL (or $0.001328 USD), compared to $0.023/GB/month for the base tier of AWS S3.

**What does “market making” mean? How does it affect FIL token price?**

There has been some confusion about market making. Protocol Labs has said publicly before that PL would use tokens “for market stability (buying and selling filecoin on exchanges to provide market liquidity, price stabilization, correcting unbalanced incentives for storage and retrieval miners, etc.)” For this purpose, PL made loans around network launch to independent liquidity providers (commonly known as “market makers”) that help to provide stability for the early hours after launch when prices are at risk of being volatile. To be clear: these are not sales of FIL from PL. These programs are primarily for the benefit of the community. In the first hours of a market, having liquidity available helps to prevent price manipulation, ensure small purchases don’t cause outsized price movements, and helps prices converge between exchanges which prevents speculative trading arbitrage opportunities.

**There are accusations of the PL Filecoin team dumping tokens - what’s the real story?**

These accusations are completely false. Neither PL nor any team member sold FIL as is accused. The FIL in question is part of a market stabilization program which has become an industry standard. These programs engage firms to provide liquidity & stability to the market in the early days after launch, when prices are at risk of being volatile.

Protocol Labs is invested in the long-term success and growth of the Filecoin Network, and we have acted accordingly:

- Our tokens vest linearly over 6 years, which is equal to or longer than the time horizon given to SAFT holders and the Filecoin Foundation.
- PL has no immediate plans to sell FIL and ‌has‌ ‌instituted ‌a‌ ‌“lockup”‌ ‌period for‌ ‌tokens‌ ‌earned by‌ ‌PL‌’s current and former ‌employees and contractors.‌ ‌Lockups‌ ‌are a‌ ‌period ‌of‌ ‌time ‌after‌ ‌a‌ ‌crypto‌ ‌network‌ ‌launches‌ ‌during‌ ‌which‌ ‌the token‌ ‌project’s‌ ‌team‌ ‌members‌ ‌cannot sell ‌or‌ ‌exchange ‌the tokens ‌they‌ ‌have received as‌ ‌part of‌ ‌compensation‌ ‌from‌ ‌the ‌company.‌
- PL is continuing to invest in the long term success of the network and miners by working with a partner (TBA) to provide small loans to miners who seek to grow their operations until broader loan markets take off.

**There were rumors of a “miner strike” over the weekend - is that true?**

We actually haven’t seen any large miners turn off their operations - so we wouldn’t characterize this as a strike. What is happening is that miners are growing slower than before launch. This is in great part because the network is no longer subsidizing their pledge & fee costs – fees cost real money now, and miners need to match growth rate to token flow. Miners are still actively proving their storage capacity - and we’re seeing an additional 2 PiB added every 3-4 hours. While most miners are long-term aligned with the project, there are some miners that are using this excuse to push things and try to get more. Instead of responding to short-term noise from speculators - the priority for Filecoin is to get the mechanisms and long-term ROI right.

**Any interesting light client designs? Many chains have put a lot of effort in this and I would say most haven’t gotten it right w.r.t. incentives and security.**

We're actively working on a light client of our own right now! You can track our progress [on GitHub](https://github.com/filecoin-project/lotus/issues/3532).

**Are smart contracts included in the development plan?**

Yes, it’s definitely something we want, but we don’t have a very firm timeline in mind yet – perhaps in the first half of 2021. Since Filecoin is open source, the community can accelerate the development timelines for smart contracts and any other feature request.

**Where can I learn more about the retrieval market?**

There’s a lot of great work in progress on the Filecoin retrieval market. Just today, there was a panel with David Ansermino, Elizabeth Binks, David Hyland-Wood, Robert Drost, Thomas Chardin, and Mike Goelzer on architecture and next steps during Liftoff Week. [Check out the recording to learn more](https://youtu.be/oYu6cA5VTvQ?t=25282).

**When will FIP004 launch, or it is already launched?**

[FIP-4](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0004.md) was designed in the weeks ahead of mainnet launch with careful consideration of crytpoeconomics and miner profitability. It makes 25% of storage-mining rewards immediately available with no vesting - a balance between short-term miner growth and long-term network alignment. This FIP was approved last week by all 4 Filecoin implementations and is included in Lotus v1.1 that shipped today. [V1.1](https://github.com/filecoin-project/lotus/releases/tag/v1.1.0) is a consensus-breaking upgrade and is scheduled to trigger at block height 170000 (around 10:40pm UTC on Thursday Oct 22).

**Are there some new policies/solutions that could help solve miner’s pledge collateral problem besides the FIP-004?**

Space Race 1 & 2 were expressly designed to help onboard miners and help bootstrap the network. Over 500 miners participated in nearly 2 months of network ramp-up where initial pledge was subsidized and new miners could build up operational expertise and help improve the network.

For those who chose not to participate in Space Race and are getting started now, there are new lending tools in the works from Codefi, Huobi, and others where miners can get up-front collateral to start mining FIL by sharing their future earnings. In the meantime, PL will also be supporting miners with small loans to fund pledge collateral through a third party provider. Lending is a great option for both miners and token holders to grow their investment while benefiting the network - and we hope to see even more participation here soon.

**Why did testnet tokens convert to mainnet tokens?**

We announced on September 27, weeks before mainnet launch, that mainnet would begin as a continuation of the testnet. The Filecoin project stated in a blog post: “the Space Race testnet will keep running and graduate into the mainnet through protocol upgrades and state transitions over the next 3 weeks.” This was a deliberate decision designed to ensure security of the Filecoin network by carrying over the tremendous mining power and community built up during testnet, including the balances and rewards earned throughout Space Race competitions. These tokens converted to mainnet tokens when the network upgraded. These awards aim to recognize the immense contribution of miners big and small who helped stress-test and improve the network over the past few months.

**A few days before mainnet launch, someone was buying a large amount of testnet FILs in (the filecoin wechat) group. Did someone from the filecoin official team know that the testnet FILs will be converting to mainnet FILs and tell some of the largest miners? If not, was there a mole in the official team that cut the leek together with some outside parties?**

We publicly announced on September 27, weeks before mainnet launch, that mainnet would begin as a continuation of the testnet. The Filecoin project stated in a blog post: “the Space Race testnet will keep running and graduate into the mainnet through protocol upgrades and state transitions over the next 3 weeks.” [This is the public blog post announcement](https://filecoin.io/blog/mainnet-ignition/). Everyone got the exact same information.

**Right now, the circulating supply in the market is already 19,000,000FILs, can the official team explain where are they from? The rumor says that it is from successful trading using testnetFIL with exchanges before mainnet(?), is this a real bug? What is the team gonna do with the extra 300,00,000FIL that comes out of nowhere?**

No, there is no bug. The FIL in circulating supply largely comes from three sources: unlocked mining rewards, vested SAFT tokens, and tokens reserved for market making and loans (almost all unused) as disclosed here: [https://protocol.ai/blog/pl-participation-in-the-filecoin-economy/](https://protocol.ai/blog/pl-participation-in-the-filecoin-economy/ "https://protocol.ai/blog/pl-participation-in-the-filecoin-economy/").

**If I’m a miner and I don’t want to dig, how can I get the pledge back?**

Block reward is meant to reward reliable and useful storage. Collateral is there to provide storage and consensus security. Miners can accept a penalty and stop mining any time, but the initial pledge will only be returned when a sector’s promise is fulfilled.

**Are there any rewards for orders with real data after SR2 is finished? How to verify the real data with 10 times computing power?**

Check out [FIP3](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0003.md) for more information!

**When will the loan program be launched? What are the detailed parameters and timeline of the loan model?**

There are several loan programs hosted by various independent organizations - Huobi, CodeFi (coming soon) and many others. Most loan providers evaluate collateral requirements, risk of slashing, general storage reliability, team strength, and other variables that indicate a long-term oriented and reliable storage operation. You can reach out to these organizations at any time.

PL is continuing to invest in the long term success of the network and miners by working with a partner (TBA) to provide small loans to miners who seek to grow their operations until broader loan markets take off.

**When will you establish NSE?**

NSE is in active development and currently undergoing external and internal security audits. Once those are complete, we can move forward with our Trusted Setup and integration work for the various implementations. Right now, this is scheduled to be integrated into Lotus in Q1 or Q2.

**Why does it take a long time for CoinList to reply to investor emails? Some of the investors haven’t received their Filecoin tokens yet.**

Sorry about this, we’re providing ongoing support to CoinList to help them respond to issues as quickly as possible. As far as we’re aware, everyone who submitted information by the deadline has received their tokens, and we’re working hard to handle the many people who submitted information late.

**Are there any incentive programs for new miners joining the network? Can we not do initial pledge but only using block reward as collateral?**

Yes, there are mining accelerators and loan programs in the works for new miners. Initial pledge is there for a good reason. It provides guarantee for storage reliability and consensus security. Filecoin Mining is more similar to hosting on Airbnb than mining on Bitcoin as a global platform economy enabled by a decentralized network. Initial pledge also makes miners owners of the network.

**For onboarding applications to Filecoin, is it necessary to maintain both IPFS and FIlecoin nodes. Are there other solutions?**

Currently, a Filecoin (Lotus) node is needed to develop and onboard applications. We are working on a suite of solutions to make this easier. This will include light client functionality and the ability to make deals without having a synced node.

An IPFS node is not necessary unless the application in question needs one for some reason.

**The cost of maintaining a node is pretty high. Any thoughts on setting up some public nodes?**

Yes, we plan on setting up hosted nodes that users can access. We’re also working on lowering the cost of maintaining a node by introducing snapshots and light clients.

**Could PL think about enabling the use of part of the vested block rewards as pledge collateral?**

Yes, this question has been asked many times. At the moment, there are a few reasons not to do this. First of all, locked block rewards are part of the collateral for the sector that earned them. In the event that a sector disappears prematurely, all rewards earned by the sector will be penalized up to 90 days. If locked funds are to be used as collateral, this will lead to under collateralization of sectors. FIP-0004 is a different but more effective way to address this exact concern on liquidity without sacrificing much of the incentive, storage reliability guarantee for storage clients, and overall utility of the network. The second reason is that without an initial pledge for every sector, the network will not be secure and may be subject to take over at a relatively low cost. After all, storage is cheap and Filecoin mining uses general purpose hardware with high resale value. Initial pledge is there to protect the network from speculative and flash attacks. Lastly, initial pledge can be thought of as a deposit for a host listing on a decentralized Airbnb. It makes miners part owner of the platform economy and be incentive aligned with the success of the network. However, as the network evolves and new technology emerges, future improvement is possible.

**At present, our application (DAPP issued by NFT and transaction) stores metadata on IPFS through Pinata. Recently, we are investigating Arweave and Filecoin; I would like to ask, is there a data storage gateway similar to Pinata on FIL?**

[Filecoin-backed pinning services](https://docs.filecoin.io/store/overview/start-storing/#additional-resources) are a great way for IPFS dapps to smoothly benefit from Filecoin. Pinning services like [Pinata](https://pinata.cloud/), [Infura](https://infura.io/), and others can utilize this design to store data in Filecoin while still serving it on their same gateway.

**With the current economic model, it is very difficult for miners to spend tens of millions of dollars as collateral to start the equipment. Can you take care of those people who have invested all their funds in the machine?**

Collateral requirement is not new and the team has repeatedly advised for many years against over investment in sealing hardware. There are many ways that one can go about this. If all funds have been invested in sealing hardware, one could consider collateralizing the hardware and take out a loan, as Filecoin mining hardware likely has high resale value. Miners can also start slow and ramp up their capacity at a pace that is comfortable to them. The introduction of FIP4 will also help miners improve their cash flow. Onboarding storage capacity is great, but usefulness and quality of the storage matters more to make Filecoin a more robust economy.

**The deal reward is the amount of the price that was originally set after the sector expires, or the amount in the lotus-miner storage-deal list?**

Deal payment is based on the agreement in the deal. It’s the same amount when the deal is published onto the chain. Deal payment is released to storage providers over time as the deal agreement is fulfilled.

**Will Juan’s team come to the Wanxiang Blockchain Week in Shanghai or just labbers in China? What are the specific events?**

Juan cannot make it to the event in Shanghai in person, but will join the summit virtually with a keynote speech on 10-27 and join the panel on technical innovation on public blockchain with Gavin Wood and Vitalik on 10-28. We will also have a Filecoin Open Day event in the morning of 10-26. Please check out the agenda and join us in Shanghai! [https://www.eventbrite.com/e/filecoin-tickets-125845883425](https://www.eventbrite.com/e/filecoin-tickets-125845883425 "https://www.eventbrite.com/e/filecoin-tickets-125845883425")

**Why keep all of the testnet storage power on mainnet? It is unfair to some of us.**

This was a deliberate decision designed to ensure security of the Filecoin network by carrying over the tremendous mining power and community built up during testnet, including the balances and rewards earned throughout Space Race competitions. This also aims to recognize the immense contribution of miners big and small who helped stress-test and improve the network over the past few months.

**There is a collateral for deals, why don’t we let storage clients decide how much the collateral should be? The project only needs to decide the duration for reward or set a minimum for collateral but not the maximum.**

This is already the case. Protocol collateral requirement is the lower bound to provide storage reliability and consensus security guarantee. The intention for the protocol collateral requirement is to establish a base level of reliability (that’s also not too high) which maintains a strong network reputation. Storage clients can and should ask for additional deal collateral from their storage providers for a greater guarantee. Miners can offer higher deal collateral to signal better service quality.
