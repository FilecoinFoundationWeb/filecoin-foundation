---
aliases:
  - /blog/miners-guide-liftoff/
author: ""
categories:
  - updates
date: "2020-10-14T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As we count down the final few hours of Space Race 2: Orbital Burn, here are
  some useful tips and FAQs to help miners transition into mainnet smoothly.
image:
  alt: ""
  url: /uploads/journey-to-liftoff-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/miners-guide-social.webp
title: Miner's Guide to Liftoff
_template: blog_detail
---

As crazy as it sounds, Mainnet Liftoff is less than 24 hours away! 🤯 As we count down the final few hours of Space Race 2: Orbital Burn, here are some useful tips and FAQs to help miners transition into mainnet smoothly.

During [Space Race 2: Orbital Burn](https://filecoin.io/blog/space-race-2/#introducing-space-race-2), miners have been onboarding storage faster than ever. Together, the network has reached 530 PiB — the equivalent of over 10 _billion_ YouTube videos! The main goal of SR2: Orbital Burn was to create testing conditions that properly emulated real mainnet network dynamics, so that miners could continue building up their operational expertise and protocol developers could analyze and improve network performance in real-world conditions.

In the past 4 weeks since the end of SR1, we’ve seen huge improvements in network operations, stability, efficiency, and resiliency over the course of [8 massive lotus releases](https://github.com/filecoin-project/lotus/releases). These releases included [our first Filecoin Improvement Proposal (FIP)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0002.md) to decrease Window PoSt Fault Fees ([lotus 0.8.0](https://github.com/filecoin-project/lotus/releases/tag/v0.8.0)), a major migration to make the core actors logic inside Filecoin easier to upgrade cleanly ([lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0)), and even our first state-breaking hot-fix ([lotus 0.10.0](https://github.com/filecoin-project/lotus/releases/tag/v0.10.0)). Miners also made crucial improvements in their storage mining stability, upgradeability, and efficiency - while also stress-testing deal-making as part of [Slingshot](http://slingshot.filecoin.io/). Overall, [SR2: Orbital Burn](https://filecoin.io/blog/space-race-2/#introducing-space-race-2) was a massive success, onboarding an additional **300 PiB** _in under a month_!

![Space Race 1 dashboard](https://filecoin.io/vintage/images/blog/SP2-dashboard.jpg)

## Orbital Burn Rewards

The rewards for SR2: Orbital Burn were designed to emulate real-world network conditions by tracking the sectors stored, pledge collateral committed, and block and gas fees collected throughout the competition. To collect their rewards, miners who participated in SR1 and SR2 simply need to continue operating their miners through the mainnet transition on October 15th. As of the mainnet epoch:

1. All committed sectors will be migrated to mainnet with their corresponding power - helping miners immediately start mining new blocks and earning rewards.
2. Miners will also receive all the pledge collateral for migrated sectors as rewards, which will be vested to miners when their sectors expire (by default 540 days after sealing).
3. Block rewards earned during Space Race will continue to vest linearly over 180 days since the block was mined. (Note: If we land [FIP-0004](https://github.com/filecoin-project/FIPs/blob/fip-0004/FIPS/fip-0004.md) shortly after mainnet pending community approval, future storage mining rewards will make 25% of the reward immediately available with no vesting.)
4. Miners participating in Slingshot will also receive client payments for deals stored and retrieved.

These awards recognize the immense contribution of miners big and small who helped stress-test and improve the network over the past few months. This has been a pivotal and highly productive period in the development of the Filecoin network. Thank you so much for making the Filecoin network and community stronger! 💪

## Faucets & Reimbursement

Over the Space Race period, we’ve run various testnet FIL faucets to reimburse miner onboarding and normal network operations. In preparation for mainnet, and to limit abuse and gaming, we’ve now retired our automatic fault reimbursement service and our pledge reimbursement service (nicknamed the PCR bot), which helped reimburse PreCommit & ProveCommit messages. As of mainnet - it will be up to miners to fund their own continued growth and take full responsibility for managing their miner’s available balance, owner, control and worker balance.

To help with this, we have executed a _one-time_ reimbursement for all miners with negative balance - to top them back up to **net zero** available balance so all miners can enter the mainnet without debts. In addition to this, we have disbursed a _one-time_ **100 FIL bonus** to all Space Race 2 miners who have been actively proving storage on the network within the past week. Normally, we avoid any rewards that encourage people to create sybil nodes - however with this one-time “above and beyond” bonus we especially wanted to recognize and benefit small miners who have worked so hard throughout SR1&2 to reach the 10 TiB Minimum Miner Size for earning block rewards. Thank you for all your stress-testing, issue reports, and bug fixes to help make Filecoin better! 🙏

[Space Race 2: Orbital Burn](https://filecoin.io/blog/space-race-2/#introducing-space-race-2) is concluding as we transition into mainnet, but the [Slingshot](http://slingshot.filecoin.io/) competition is still going strong! To specifically support miners participating in Slingshot to store valuable data on the network, we plan to continue running some small faucets like the PublishDeals and WindowPoSt reimbursement bots for a little while as the network stabilizes. If you're interested in joining Slingshot as a client, you can apply [on the Slingshot website](https://slingshot.filecoin.io/).

## Liftoff FAQ

**What time will the Filecoin Mainnet be launched?**

- The Filecoin mainnet will officially begin at epoch 148,888 (around \~3pm UTC).

**What can I do as a miner on the Filecoin Mainnet?**

- As a storage miner, you can commit new storage capacity to the network by submitting new ProveCommits, you can store data for storage clients by PublishingDeals, and you can continue proving your existing committed storage through WindowPoSts.

**If I’ve been participating in Space Race, will anything change about my mining setup?**

- No, as of the [lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0) upgrade all miners have already been transitioned to mainnet f0xxxx addresses. Your account and miner addresses will all stay the same over the mainnet transition.

**From an operational security perspective, is there anything I should change before Liftoff?**

- As of [lotus 0.9.0](https://github.com/filecoin-project/lotus/releases/tag/v0.9.0) there is a new CLI to manage your miner’s owner address. The wallet associated with the owner address is designed to be kept offline as a cold wallet, given that it should not be used often and it is critical to safeguard the miner’s funds. In production environments, we strongly recommend using separate owner and worker addresses. See the guides [in the Lotus documentation](https://lotus.filecoin.io/tutorials/lotus-miner/run-a-miner/#setup-wallets-for-the-miner).

**How can I help keep my miner stable throughout the Liftoff transition?**

- We recommend all miners set up a [separate control address](https://lotus.filecoin.io/tutorials/lotus-miner/run-a-miner/#setup-wallets-for-the-miner) for submitting window PoSt to the chain to avoid getting critical, time-sensitive messages stuck in the mpool. To mitigate gas-related issues, it’s also important to tune your fee caps for your setup. Read this [blog post](https://filecoin.io/blog/filecoin-features-gas-fees/) to learn more.

**What happens if I stop running my miner during mainnet?**

- If you turn off your miner and stop actively proving the storage and deals you’ve committed to the network, your miner will lose power at the first missed proof and start being fined for missing your proof windows after \~24hrs. With every proving period missed, you’ll owe more fines. If you don’t recover your fines and storage deals within 14 days, your miner’s power will be permanently deleted from the network and all pending rewards burned.

**Given that the original testnet is transitioning into mainnet - will there be a new testnet?**

- We plan to run many testnets with different configurations. [Calibration net](https://network.filecoin.io/#calibration) has already been set up as a new long-running testnet that we plan to use to test new releases and state upgrades before they happen in the mainnet. It has the same parameters as mainnet, with the exception of support for 512 MiB sectors for faster testing. We encourage everyone to run a miner there especially ahead of major upgrades!
