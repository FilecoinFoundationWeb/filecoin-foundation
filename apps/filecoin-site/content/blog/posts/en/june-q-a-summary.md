---
aliases:
  - /blog/june-q-and-a-summary/
author: ""
categories:
  - events
date: "2020-07-01T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On June 25, 2020, the Filecoin team hosted an AMA with Juan Benet. Over the
  course of an hour, we answered 41 questions, covering topics like testnet
  incentives, the most recent roadmap update, and the path to mainnet launch.
  During the session we were joined by 968 Filecoin community members from
  across the globe. Many thanks to all who participated!
image:
  alt: June Q & A Summary
  url: /uploads/mar-qa-main-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/mar-qa-english-social.webp
title: June Q & A Summary
_template: blog_detail
---

On June 25, 2020, the Filecoin team hosted an AMA with Juan Benet. Over the course of an hour, we answered 41 questions, covering topics like testnet incentives, the most recent roadmap update, and the path to mainnet launch. During the session we were joined by 968 Filecoin community members from across the globe. Many thanks to all who participated!

A summary of the answers from our Q&A is below. We look forward to hosting more sessions like this as mainnet launch approaches! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on Wechat (Filecoin-Official), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

_Most questions and answers are quoted directly, some are edited for readability._

**When should we expect to get the detailed parameters for Filecoin’s cryptoeconomic constructions?**

We are still finalizing our Cryptoecon parameters and they will continue to evolve. We are looking to solidify more final parameters in late July. Let us know if you have more questions on the structural mechanisms themselves.

**Can you confirm that the mainnet launch window is still on track?**

As we said in our [June roadmap update](https://filecoin.io/blog/roadmap-update-june-2020/), we’re continuing to make good progress towards mainnet launch, aiming towards the end of our mainnet launch window. However, all dates are still best-effort optimistic estimates - our top priority is to launch a secure and successful network.

**Will the hard disk of Filecoin Discover catch up with the incentive competition on July 20 in time?**

Filecoin Discover and testnet incentives are not related. Testnet incentives are based on raw byte-power, deal completion, and sector lifecycle participation. Filecoin Discover hard drives, and the verified client mechanism in general, have no impact on incentives.

**How likely is the NSE algorithm to come on line later? Is AMD’s configuration the most consistent with the current SDR algorithm?**

About NSE: NSE is one of the best candidates for a proof upgrade, and teams are working on implementation. But there are other candidates too, which are promising as well. It may be that another algorithm ends up better than NSE – we don’t know yet. Proof upgrades will arrive after mainnet launch and will coexist.

Yes, AMD may be optimal for SDR, see this for why: [https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md](https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md "https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md")

**Will the existence of the Filecoin pool lead to the deviation of centralized storage from the vision of distributed storage?**

No – Filecoin creates a decentralized storage network in part by massively decreasing the barrier to entry to becoming a storage provider. Even if there were some large pools, anyone can join the network and provide storage with just a modest hardware purchase, and we expect clients to store their files with many diverse miners.

Also, note that world location matters for mining: many clients will prefer miners in specific regions of the world, so this enables lots of miners to succeed across the world, where there is storage demand.

**What are the main factors for obtaining orders after Filecoin mainnet launch? Algorithm? Hardware? Is there a difference between Intel and AMD?**

To maximise the deals being made with your miner, you’ll need lots of storage, a good network connection, and reasonably good hardware (AMD works much better, see: [https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md](https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md "https://github.com/filecoin-project/lotus/blob/master/documentation/en/sealing-procs.md")).

**What are the standards and conditions of the verifier, is there a selected institution to verify, can you tell us about this situation?**

There will be several different institutions. We don’t have more updates about Verfiers at this time. We will have more around mid July.

**Will the 4M Testnet Incentive Program start on 20th of July?**

Yes.

**What are the changes to the algorithm and logic layer of lotus and go-filecoin before going online?**

There will be no changes to “algorithm and logic” before we go live - from here on out, all we are doing is fixing bugs (so please report them!), improving performance (our sync is _much_ faster on the latest Testnet), and improving the UX with new APIs and documentation.

**Is there a miner’s KYC certification process, if so how does that work? How will you verify the mining location of miners?**

To receive tokens, miners will be required to verify their identity by providing passports or similar identity documents. We may need to request additional information in rare cases.

We’ll use a variety of technical and non-technical mechanisms. They may also be different for different miners. To avoid cheating, we’re not revealing the specific mechanisms until verification begins.

When we verify miners’ locations, we’ll reach out by email and coordinate a time that the miner will be standing by to provide verification. We’ll ask for some specific evidence and require submission within a short time period.

Location verification is not required to participate in either (i) the global leaderboard or (ii) the regional leaderboard for the most competitive region (i.e., the region with the most storage).

We consider the location of the storage and sealing hardware to be the location of the miner.

Please note that miners who attempt to “spoof” their location will be **_completely ineligible for all rewards_**.

**How will network retrieval of real data be measured and assessed on incentivized testnet?**

During the competition, once your miner has > 0 storage power, many bots will begin attempting storage and retrieval deals with your miner. The competition dashboard will display your deal success rate in near-real time. Miners below a certain high threshold will be ineligible to receive rewards.

We plan to run the bots for one to two weeks before the competition to give miners a chance to test their configuration, and will announce when that begins.

**Has Filecoin confirmed the use of SDR algorithm? Is there any evidence of malicious construction?**

SDR is confirmed for mainnet launch, and we have no evidence of malicious construction. The algorithm is also going through both internal and external security audits.

Add this: If you have any information about any potential security problem or malicious construction, reach out to our team at [security@filecoin.org](mailto:security@filecoin.io).

**We bought a lot of hard drives of data through the Discovery project. When will they be shipped to China?**

There are a number of details that are still being finalized between the verified deals construction and the associated cryptoecon parameters.

Our aim is to allow these details to finalize before shipping, but given timelines we’re considering enabling teams to take receipt of these drives before the parameters are set.

**For the incentive phase, you said a miner has to execute the full sector life cycle and terminate the sectors. What does “terminating” the sectors mean?**

When a CC sector is added to the chain, it can upgrade to a sector with deals, extend its lifetime, or terminate through either faults or voluntary actions. While we don’t expect this to happen very often on Mainnet, a miner may deem it rational to terminate their promise to the network and their clients but accept a penalty for doing so. We want miners to execute the full sector lifecycle to get a flavor of providing long-term and useful storage on Filecoin.

**Does the CC sector still need to be sealed before it upgrades to one with real data?**

For the first iteration of the protocol, yes. We have plans to make it cheaper and more economically attractive after Mainnet with no resealing required and other perks.

**What do miners have to do to change a committed capacity sector into a “real-data” sector?**

We are reusing much of the existing code path for this first iteration. Miners will publish storage deals that they will upgrade the CC sector with, announce to the chain that they are doing an upgrade, and prove to the chain that a new sector has been sealed correctly. We expect to evolve and make this cheaper and more attractive over time after Mainnet.

**How does a committed capacity sector turn into a sector with real client data? Is it automatically covered with real data when there’s a real deal?**

Committed Capacity sectors are like empty Uber cars on a platform economy. Miners commit capacity to the network when there is unmet supply and upgrade them to sectors with deals when demand arrives to earn additional revenue. For the first iteration of the protocol, we will reuse much of the existing code path. Miners will publish their storage deals, announce to the chain that they are doing an upgrade, and prove that the upgrade has been done successfully.

**If someone could bring many ‘verified clients’ or reputable business data users on board, is there any mechanism for rewarding this activity?**

We anticipate that miners will compete for deals from verified clients, and some partnerships could emerge between miners and reputable users.

**Is the plan to use SDR for 6 months after mainnet launch, and then switch to NSE (or something else)?**

We have other constructions in development, NSE and other options. They will be proposed as network upgrades through a FIP (Filecoin Improvement Proposal) after Mainnet launch. We hope to have at least one of these faster and cheaper constructions online within 6-12mo, but the development timeline depends on a lot of different constraints after mainnet launch. Note that new proofs will coexist with SDR, so a new cheaper proof will be optional to miners.

**Are there any updates regarding the security research fellowship? Or any new critical bugs that have been found/submitted?**

In the next couple of weeks, there will be a website to view bug submissions, security research fellows, and submit new reports. We also plan to introduce a public bounty program similar to Ethereum’s.

**Lotus or Go-Filecoin, which is better for miners?**

Lotus is our reference implementation, and getting more developer attention right now.

**What is the mechanism for verified clients? How does one apply to be a verified client?**

Check out this [presentation for the basics of Verified Clients and Verifiers](https://www.youtube.com/watch?v=q5Vwr0cwQuY&feature=youtu.be&t=920) - We don’t have more updates about Verfiers at this time. We will update more later in July.

**At what frequency will the bot try to make deals with miners? Will it depend on the hardware setup?**

The frequency will increase alongside the miner’s rate of adding committed storage. It will be somewhat randomized to simulate real-world behavior.

**Why not implement the scheme that the white paper says “miners and customers automatically match orders through order books”？Is it because the LIMITS of TPS?**

There will be off-chain orderbooks and miner marketplaces – some are in development now from some teams. They will work mostly off-chain, because TPS on chain is not enough for the volume of usage we expect on Filecoin. These orderbooks build on the basic deal-flow on chain. These orderbooks will arrive in their own development trajectory – most likely around or soon after mainnet launch.

**Will it be cheaper to store data on Filecoin than other centralized cloud services? If yes, when it is anticipated to occur?**

Filecoin creates a hyper-competitive market for data storage – there will be many miners offering many prices, rather than one fixed price on the network. We expect Filecoin’s permissionless model and low barriers to entry to result in some very efficient operations and low-priced storage, but it’s impossible to say what exact prices will be until the network is live.

**Will I need a fixed IP address to participate in the incentivized testnet, or in mainnet?**

For mainnet, you will need a public IP address, but it doesn’t need to be fixed (just accessible).

**What would be the potential loss from changes of algorithms after mainnet launch if miners had invested heavily in hardwares?**

We anticipate two kinds of proof upgrades:

1. Optional Efficiency Upgrades, which are just to add new proof constructions that are cheaper or faster
2. Mandatory Security Upgrades, where we discover a problem with an algorithm and have to force the network to move to a new algorithm or a different set of parameters.

For (1) Efficiency Upgrades, we expect these upgrades to be optional and coexist and be used only if miners and clients choose to make use of them. We expect 0, 1 or 2 of these per year.

For (2) Mandatory Security Upgrades, these will come with some sort of transition plan attempting to minimize cost to the network. We don’t expect these, but they may happen.

**How are you working to bootstrap the demand side of the marketplace? The Discover program is nice but who is the target market for users and how do you get them?**

In addition to [Filecoin Discover](https://filecoin.io/blog/intro-filecoin-discover/), a number of groups are actively building tools and services to support adoption of the Filecoin network with developers and clients. For example, [check out the recordings from our Virtual Community Meetup](https://filecoin.io/blog/filecoin-virtual-community-meetup-recap/) to see updates about Textile Powergate and Starling Storage. A number of other programs, like [Filecoin Ignite](https://filecoin.io/blog/announcing-filecoin-ignite-and-hackfs/), will also contribute additional demand, tooling, and usage.

**Will the total of 4 million FIL be split between miners? How much will be actually distributed to miners?**

You can read about the method for distributing Testnet Incentive rewards [in our blog post](https://filecoin.io/blog/announcing-testnet-incentives/). It’s up to miners how much FIL will actually be distributed! Add more storage to unlock more rewards.

**How big will the deals be that the bot tries to make with miners during Incentivized Testnet?**

Expect ranges from a few kilobytes up to full 32GiB sectors.

**What is your recommendation on the right hardware?**

While the Filecoin team does not recommend any specific hardware configuration, we did share some setups ([https://filecoin.io/blog/announcing-testnet-incentives/#hardware](https://filecoin.io/blog/announcing-testnet-incentives/#hardware "https://filecoin.io/blog/announcing-testnet-incentives/#hardware")) we’ve used for various types of testing. However, it is overwhelmingly likely that there are more efficient setups, and we strongly encourage miners to test and experiment to find the best combinations.

**What happens to the existing content on IPFS once Filecoin launches? What if nodes continue to host content for free and undermine the Filecoin incentive layer?**

IPFS will continue to exist as it is, enhanced with Filecoin nodes. There are many use cases that require no financial incentive. Think of it like IPFS is HTTP and Filecoin is a storage cloud like S3 – only a fraction of IPFS content will be there.

People with unused storage who want to earn monetary rewards, should pledge that storage to Filecoin, and clients who want guaranteed storage should store that data with Filecoin miners.

**What if we lost a sector accidentally, is there any way to fix that?**

If you lost the data itself, then no, there’s no way to recover that, and you will be slashed for it. If the data itself is recoverable, though (say you just missed a Windowed PoSt), then the Recovery process will let you regain the sector.

**How will the verified datasets be verified in the testnet incentive competition?**

They will not. Verified clients are not part of the testnet incentive competition.

**If the order book is off chain who is going to host it? Wouldn’t that fragment the marketplace and liquidity into lots of little venues?**

There will be a small number of different, competing orderbook protocols, similar to how there are different orderbooks for DeFi on Ethereum (eg 0x and others). We think this kind of protocol competition is a good thing that will allow innovation in the design space. We are very excited about what some development teams are working on and can’t wait to see them in action after mainnet launches. If you have some ideas for this, we recommend you try building them!

**Will the 5PB Big miner incentive be part of the 4M incentives for Incentivized Testnet?**

The mechanisms for the incentive competition are [in our blog post](/blog/announcing-testnet-incentives/).

**What’s the minimum time period for the storage contract between the provider and the buyer?**

The minimum duration for a deal is set in the miner’s ask. There’s also a practical limitation, because sectors have a minimum duration (currently one month).
