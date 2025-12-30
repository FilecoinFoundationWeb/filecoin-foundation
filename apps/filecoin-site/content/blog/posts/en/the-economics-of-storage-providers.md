---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-05T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  A look at how the Filecoin economy works for Storage Providers. A full
  presentation on the subject is available thanks to ESPA’s Storage Provider
  Bootcamp.
image:
  alt: ""
  url: /uploads/the-economics-of-storage-providing.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/the-economics-of-storage-providing.webp
title: The Economics of Storage Providers
_template: blog_detail
---

Becoming a Storage Provider on the Filecoin Network is a way to participate in the preservation of humanity’s most valuable information. It can also be a profitable endeavor. The Filecoin community is home to a fast-growing ecosystem of SPs of all sizes and geographic locations. Most of these have successfully applied different strategies and setups that have become financially sound businesses.

To understand how this is possible it’s important to understand the economics of the Filecoin Network for SPs. We’ll go through a few of the basic concepts SPs should be familiar with as they become active members in the Filecoin economy.

## FIL Token

Filecoin’s [_island economy_](https://filecoin.io/blog/posts/filecoin-s-island-economy/) consists of the interactions between five different sectors: clients, developers, token holders, ecosystem partners, and most important to us, SPs. All of these transact with each other using the FIL utility token and SPs are no exception. Therefore, all of the economic operations they participate in within the network are denominated in the token. It’s what gives holders the right to use the network.

## Filecoin Storage Providers’ P&L

SPs have two main sources of revenue in the Filecoin Network: they earn fees charged to end users for the storage and retrieval of data and they have a chance to receive block rewards in FIL.

The first is available to all SPs who meet the [hardware requirements](https://docs.filecoin.io/storage-providers/skills/storage#general-hardware-requirements) for participating in the network. These fees are an essential part of the Filecoin economy since they’re determined by each SP and create a market for storage and retrieval that offers competitive opportunities to small and large participants alike.

The second is limited to SPs who can participate in the network as consensus nodes. To do so, they must meet a minimum of 10 TiB in committed storage capacity. This, however, entitles them to verify the next block in the Filecoin Network in exchange for a reward, much like miners who receive a Coinbase transaction in PoW networks. Their chances of receiving this reward are proportional to the amount of committed capacity they’ve contributed to the total [Storage Power](https://filecoin.io/blog/filecoin-guide-to-storage-mining/#storage-power) available in the network.

In terms of costs, SPs have many factors to consider: purchasing and maintaining performant hardware setups, optimizing sales and marketing operations, power consumption, as well as other expenses and interest payments on borrowed FIL when applicable. Some of these, such as hardware setups and power consumption, can be negotiated.

![](/uploads/pl-_-the-economics-of-storage-providers.webp)

## Collateral

Another economic concept to understand is collateral. This is simply the amount of FIL that SPs have to stake in order to guarantee that they will act in good faith and that their incentives are aligned with the rest of the economy. If they fail to meet their responsibilities to the network their collateral is _slashed_, meaning that they lose a portion of the FIL.

Collateral is taken into account separately from the costs in the P&L since the pledged FIL is paid back after successful storage and deals. However, it is still an important factor to consider since it can be seen as part of an initial investment.

There are three types of collateral:

- **Initial pledge collateral:** The amount of FIL that needs to be staked in order to participate in the Filecoin economy. It is equal to seven days worth of Sector fault fees plus one Sector fault detection fee. See [Filecoin specifications](https://spec.filecoin.io/#section-systems.filecoin_mining) for more information.
- **Block reward as collateral:** The amount of FIL SPs receive for proposing a block in the consensus process. Seventy-five percent of this amount can vest over a period of six months and is subject to _slashing_ if a Sector is terminated before its expiration.
- **SP deal collateral:** The amount of FIL that is _slashed_ if a deal is terminated. Higher collaterals can indicate higher reliability to potential clients.

## Barriers to Entry

The Filecoin community works hard to make the network and its economy accessible to any participant, starting with the fact that the network is designed to be permissionless. Potential barriers to entry such as high collaterals are mitigated by factoring each SPs total storage capacity into their calculation. However, some aspects like minimum hardware requirements and the steep learning curve of setting up a node are still hard problems to tackle for aspiring SPs.

The community has addressed these issues in different ways, including [educational material](https://www.youtube.com/watch?v=LKMjCgo-fkA) on optimizing small and individual hardware setups. Participating in [ESPA’s Storage Provider Bootcamp](https://www.web3espa.io/?utm_source=PL&utm_medium=blog&utm_campaign=highlight) is also a great way to take the steps necessary to become an SP.

## Tools

Since the Filecoin Network is in constant flux and expansion, metrics such as SP costs, block reward amount, and the price of FIL change frequently. The SP community counts on a set of important tools that can help to determine how participating in the Filecoin economy may or may not work for them.

Websites such as [Filfox](https://filfox.info/en) are an important source of information that can help an SP's decision-making process. Filfox tracks a wide range of in-depth metrics including real-time network statistics, storage power distribution, and transaction details.

Another great resource for potential Storage Providers is the new [SP website](https://sp.filecoin.io/), where you can find some informational videos, FAQs, an ROI calculator, connect with a Filecoin expert and much more!

## Further Reading

To learn more about the economics of being a Filecoin SP check out other important resources such as the paper on [Engineering Filecoin’s Economy](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf) and a guide to [Filecoin’s Cryptoeconomic Constructions](https://filecoin.io/blog/posts/filecoin-s-cryptoeconomic-constructions/). Also, be sure to join the community on [Slack](https://filecoin.io/slack) and [Twitter](https://twitter.com/FilecoinSP?s=20&t=Cied9srtVmuumV69dT7NSA).
