---
aliases:
  - /blog/mainnet-ignition/
author: ""
categories:
  - updates
date: "2020-09-27T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: The Filecoin network has made phenomenal progress over the last few months
image:
  alt: Announcing Mainnet Ignition & Liftoff
  url: /uploads/sr-live-ama-header-7.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-mainnet-is-live.en.md
related_article_2: content/blog/posts/a-look-back-at-filecoin-in-2020.en.md
related_article_3: content/blog/posts/one-more.en.md
share_image: /uploads/mainnet-liftoff-social.webp
title: Announcing Mainnet Ignition & Liftoff
_template: blog_detail
---

The Filecoin network has made phenomenal progress over the last few months:

1. **🛠 Core Protocol Functionality**. In August, we completed our mainnet Proofs [Phase 2 Trusted Setup Program](https://filecoin.io/blog/trusted-setup-complete/), launched the [drand mainnet](https://filecoin.io/blog/distributed-randomness-and-leader-elections/) with partners like Cloudflare and Ethereum, published a [thorough write-up on Filecoin’s cryptoeconomics](https://filecoin.io/blog/introducing-the-filecoin-economy/), and shipped a fully-functional, mainnet-ready Filecoin implementation with [lotus 0.5.0](https://github.com/filecoin-project/lotus/releases/tag/v0.5.0) - including support for storage and retrieval deals in addition to storage mining.
2. **👨‍👩‍👧‍👦 Ecosystem Growth**. An impressive ecosystem of 85+ organizations are currently collaborating on the Filecoin network - building applications, developer tooling, infrastructure and more. The [Filecoin Ignite](https://hub.fil.org/events/) series of hackathons and accelerators onboarded thousands of new community members who are learning, building, and launching projects on Filecoin. Programs include [HackFS](https://hackfs.com/) (run by EthGlobal), [Spark University Hackathon](https://filecoin.io/blog/spark-challenge-two/) (run by En\[code\] Club), [Apollo](https://gitcoin.co/hackathon/filecoin/onboard) (run by Gitcoin), and [Filecoin Launchpad](https://tachyon.xyz/) (run by Tachyon) - which together are nurturing over 230+ new projects and 1000+ talented new builders on Filecoin.
3. **📑 Storage Clients**. Many new storage clients are already onboarding on the Filecoin network as part of [Space Race: Slingshot](https://slingshot.filecoin.io/) - including beautiful new clients like Slate which allow users and applications to store & retrieve files. These clients are building on sleek Filecoin developer APIs and tooling like Fleek’s Storage Daemon, and [Textile’s Powergate](https://docs.textile.io/powergate/).
4. **⛏ Storage Miners**. Over the past 4 weeks, over 400 miners across 34 countries and 6 continents have onboarded an astounding **325+ PiB of storage capacity** onto the Filecoin network. That’s enough space for 90 million 1080p movies, 1,400 full copies of Wikipedia, or 7 times the entire written works of mankind (in all languages) from the beginning of recorded history to the present day. This is truly an extraordinary achievement; never in the history of the internet has a community coordinated to amass this much storage capacity in one trustless decentralized storage network. 🙇‍♀️

![325 PiB on Stats Dashboard](https://filecoin.io/vintage/images/blog/ignition-stats-dashboard.jpg)

## Transition to Mainnet Ignition

Today, we’re excited to share an update on [Filecoin’s launch phases and schedule](https://app.instagantt.com/shared/s/1152992274307505/latest) as we enter our Mainnet Ignition phase and get ready for Filecoin Mainnet Liftoff. Launching a blockchain is an involved and lengthy process. Like many other networks (including [Polkadot](https://polkadot.network/launch-roadmap/), [NEAR](https://near.org/blog/mainnet-roadmap/), and others), Filecoin is taking a phased approach to launching mainnet, with different groups and communities onboarding onto the network over a period of time, leading up to Mainnet Liftoff.

![Launch Phases](https://filecoin.io/vintage/images/blog/mainnet-launch-process.jpg)

Over the next few weeks, various groups within the Filecoin community - including miners, clients, custodians, applications, network services, and more - will be onboarding onto the network in advance of Mainnet Liftoff. This pre-liftoff phase, which we’re calling Mainnet Ignition, gives network participants time to initialize, learn, set up their systems, and optimize their deployments. We’re all counting down to Liftoff, but that doesn’t mean the work is done. We still have a lot of preparation to do to set the network up for an amazing launch:

- **Storage Miners** - continue adding storage to the ignition network, preparing operations for mainnet, and stress-testing storage & retrieval deals.
- **Clients & applications** - participate in [Slingshot](https://slingshot.filecoin.io/), our ongoing Space Race competition to utilize Filecoin’s decentralized storage capacity to power useful, resilient data storage.
- **Custodians & ecosystem partners** - use this time to tune operations and onboard stakeholders onto the network.
- **SAFT Holders** - look out for emails from CoinList and your chosen custodian on how to get set up on the network during the Mainnet Ignition phase ahead of Mainnet Liftoff. Contact [team@coinlist.co](mailto:team@coinlist.co) or [investor-support@protocol.ai](mailto:investor-support@protocol.ai) if you run into any issues.
- **Implementation Developers** - increase testing, hardening, and interoperability across Filecoin implementations including [lotus](https://github.com/filecoin-project/lotus) \[PL\], [forest](https://github.com/ChainSafe/forest) \[ChainSafe\], [fuhon](https://github.com/filecoin-project/cpp-filecoin) \[Soramitsu\], and [go-filecoin](https://github.com/filecoin-project/go-filecoin) \[IPFSForce\].

Mainnet Ignition is also a time to solidify the many pathways for the Filecoin community to engage in network improvement and decision making. Storage miners, community champions, developers, clients, and ecosystem partners can all participate in enhancing the network through the open [Filecoin Improvement Process](https://github.com/filecoin-project/FIPs), upgrading it through cross-implementation discussions in the [biweekly Core Devs meeting](https://github.com/filecoin-project/core-devs), and ratifying new changes via [consensus among miners](https://spec.filecoin.io/#algorithms__expected_consensus). Filecoin is fully functional, but we expect the community to continue improving and evolving the Filecoin network with frequent software updates well beyond Mainnet Liftoff.

## Transitioning to Mainnet

For the past month, the whole Filecoin ecosystem has been fully focused on Space Race - our multi-track incentivized testnet competition. This has been a critical phase for the Filecoin project to tune and upgrade the network in preparation for mainnet - and the whole ecosystem continues to gain valuable knowledge and operational expertise through live stress-testing at scale. Throughout Space Race, more than 500 miners have onboarded over 325 PiB of storage in Orbital Burn, 265 client applications have made >40,000 storage and retrieval deals in [Slingshot](https://slingshot.filecoin.io/), and collectively we’ve thoroughly exercised and tested the network’s functionality, security, and resilience.

We’re excited to build on that solid foundation from Space Race to set the Filecoin network on a great footing. A ton of work (human and mechanical!) went into onboarding the storage capacity that now secures and decentralizes the Filecoin network. Early miners invested heavily in finding bugs, building up operational expertise, and committing significant sealing and storage hardware to the network to lay this foundation. Instead of resetting from scratch (and losing all of that storage capacity), the Space Race testnet will keep running and graduate into the mainnet through protocol upgrades and state transitions over the next 3 weeks. We still have some improvements and state changes in the works ahead of Mainnet Liftoff, but we’ll build those in as chain upgrades instead of hard resets. If you’re a miner who wants to participate in the Filecoin network, [Space Race 2: Orbital Burn](https://filecoin.io/blog/space-race-2/) is a great way to get started today!

## Countdown to Mainnet Liftoff

The culmination of all our hard work is right around the corner. The Filecoin mainnet will officially begin at epoch 148,888 (which means “prosperity for life” in Chinese, chosen to honor the epic contribution by our Chinese mining community to Filecoin’s long-term success ❤️)! We expect this epoch to land around Oct 15, which will begin a period of monitoring and problem solving to ensure the network is nominal (working as expected) after the transition. After a few quiet days, we will hold **Filecoin Mainnet Liftoff: a week of events from October 19-23 celebrating Filecoin’s mainnet launch. 🚀**

![Filecoin Mainnet Liftoff](https://filecoin.io/vintage/images/blog/mainnet-liftoff-launch.jpg)

From cutting-edge cryptography research, to complex protocol design & development discussions, to the many sleepless nights during Space Race debugging the live network - we’ve built something amazing together over the past 3 years. Launching a blockchain is like launching a software rocket, and it’s taken a whole interplanetary community to reach this point. Thank you for being part of this epic journey!

We know Filecoin Mainnet Liftoff is a hotly anticipated milestone, so we want to give the community time to make it special. Excited about Filecoin? This week is a great time to hold online conferences, meetups, and events to celebrate Liftoff and explore the future of the Filecoin network together. We can’t wait to participate in all the events the community has in store to toast Filecoin’s future success. 🥂🍾 If you’d like to plan a local meetup or event (regional health regulations permitting) please get in touch!

Launching a new product, application, or service around Filecoin? Mainnet Liftoff is a great time to highlight the amazing projects joining the network! Consider having your launch at a conference or meetup during Liftoff, or even your own launch event! Reach out at [contact@filecoin.io](mailto:contact@filecoin.io) if we can help promote your event or share your story.

## Looking Past Liftoff

As with any rocket launch, Liftoff is just the beginning. The maximum dynamic pressure (_MaxQ_) on a rocket is AFTER it’s left the ground, not before. Similarly, our greatest challenges as a community lie ahead as we work to upgrade the protocol, support more demanding use cases, and add new capabilities across implementations. To withstand the post-mainnet stressors, we’ll have to chart our upgrade path carefully, respond to issues dynamically, and come together as a diverse community to define the spirit, culture, and future of the Filecoin network. We have a solid launchpad, now it’s up to us to set our course among the stars. ✨

It’s been epic building this rocket alongside you all - now let’s get ready for launch! 😎 🚀

_🚨 NOTICE: Many ecosystems see scams emerge around their launch moments - so please be vigilant! Any offers to buy or sell Filecoin around Mainnet Liftoff should be treated with extreme caution - testnet FIL is **not** mainnet FIL! No one should ever ask you for your private keys or wallet recovery passphrase, or ask you to pay for eligibility for a “giveaway.” During the launch process, official Filecoin communications will be provided only through the official Filecoin Twitter handle and the Filecoin blog. If ever in doubt, please verify through multiple channels before proceeding._
