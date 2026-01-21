---
title: "CC Sector Upgrade: Guidelines and Modeling"
draft: false
excerpt: >-
  In this blog post, you will find the different storage pipelines which are
  available in the Filecoin Network today, in addition to models of the cost
  expected when using snapping versus not.
share_image: /uploads/0-CC-Sector.webp
image:
  url: /uploads/0-CC-Sector.webp
date: 2023-07-27T18:33:21.676Z
categories:
  - updates
dim_image: true
author: Irene Giacomelli and Luca Nizzardo
---

## 👨‍🚀 TL;DR

Upgrading existing CC sectors appears to be one of the best opportunities for Filecoin Storage Providers (SPs): If Verifiable Deals and existing CC sectors are available, SPs may consider upgrading those sectors rather than sealing new ones in order to minimise new costs.

More in general, the difference in cost between upgrading a CC sector and adding a new deal native sector is small and should not prevent SPs to consider the upgrading strategy.

Outcomes may vary by SP, so we invite you to do your own research.

## 🥁 Context

👨‍🚀 In this blog post, you will find:

- The different storage pipelines which are available in the Filecoin Network today
- Models of the cost expected when using snapping versus not

In the Filecoin network, a Storage Provider (SP, for short) can seal two different types of sectors

- CC sectors: data set by default to zero
- Deal sectors: data obtained from storage clients

Thanks to FIP0019 (”SnapDeal”) and the introduction of the ReplicaUpdate method, it is possible to inject data into CC sectors. This means that Storage Providers who want to store client data currently have two different options:

- Sealing a deal sector (ie, sealing a new sector with data from clients)
- Upgrading a CC-sector via SnapDeal to inject data from clients. We differentiate between
  - Upgrading an existing CC sector
  - Sealing a new CC sector and then immediately upgrading it (CC sector upgrade pipeline)

Our model aims to compare all the different strategies at Storage Providers' disposal to store client data.

## 🚀 Outcomes

Upgrading an existing CC sector Vs Deal Sector

➡️ Per our model, upgrading existing CC sectors appears to be one of the best opportunities for Filecoin Storage Providers.

Our model estimates the cost of upgrading an existing CC sector to be equivalent or even less than the cost of adding a new deal sector to the network (assuming no FIL leasing cost and not accounting for the past cost of sealing for the existing CC sector). Today (7th July 2023) the difference in cost is of 0.05$ per 32GiB sector (1.6$ per TiB). Since this is based off of dynamic calculations (especially gas price), the mileage may vary. Moreover, future protocol changes (see below) may increase this difference in favour of the upgrading CC sector pipeline.

CC Upgrade Pipeline Vs Deal Sectors

➡️ If no access to verified deals, starting with a CC sector and upgrading later also works.

Indeed, the difference between the CC sector upgrade pipeline and the deal native sector pipeline is NOT remarkable. And moreover, in our current modeling, we do not considering misc. costs such as electricity, bandwidth, labor costs, … We expect the real difference to be considerably closer, given that overall total cost difference will be minimal when introducing misc. costs.

Further Observation on Verified Deals Availability

🔍 If verifiable deals are available but there are no existing CC sectors available, the Storage Provider should consider sealing new sectors with verified deals.

## 📡 Future scenarios

Possible future changes on the CC-Sector Upgrade pipeline

💰Cheaper CC sector acquisition

Our modeling is considering sealing a CC sector and a deal sector to have the same cost. If we assume that acquiring a CC sector is cheaper than sealing a new deal sector, then the CC sector pipeline profit would be closer to (or even higher than) the one for deal sector. Factors that could make CC sector acquisition cheaper than sealing a new deal sector could include:

- SaaS pipeline/improvement focused on CC sectors
- Pre-sealed sector market

⛽ Different gas accounting for deal and sector (re)activation

One of the differences highlighted in the comparison between CC Sector Upgrade and Deal Sector is due to gas fees accounting. In particular, as of today (7th June 2023):

- Single sectors with deals do not pay sector activation and deal activation gas costs (which is subsidized by Cron).
- Sectors sealed through the CC sector pipeline pay sector reactivation and deal activation gas costs.

This fact represents a protocol quirk which prevents the two pipelines from be fairly compared. In the future, there might be changes in order to re-balance the gas accounting for deal activation. See for example, [this discussion](https://github.com/filecoin-project/FIPs/discussions/689#discussioncomment-5680517). In this case, we expect the cost of the CC sector upgrade and the deal sector pipelines to be closer.

✌️ Reducing SnapDeal costs

Another option to improve on CC Sector upgrade pipeline is reducing proving costs of the SnapDeal protocol. There have been some attempts to address this issue (see [FIP discussions 645](https://github.com/filecoin-project/FIPs/discussions/645)).

## 📐 Modeling

In our modeling, we look at the various strategies (i.e. pipelines) available for storing data in the Filecoin network. This modeling computes the estimated costs and rewards of each pipeline using basic SP resources as model inputs and relying on a few realistic assumptions.

### Assumptions

- 32GiB sectors
- Deals with same size as sectors (ie, 32GiB). Note that this is coherent with the status quo (average verified deals size is ~30GiB, see related statistics in [Starboard dashboard](https://dashboard.starboard.ventures/market-deals)).
- Verified deals only, assuming deals duration matching the remaining sector lifetime when they are activated (ie, a sector can be extended if needed).

## Definitions

For more details please check [this webpage](https://cryptonet.org/notebook/q2-2023-cc-sector-upgrade-modeling#63dcc078518b4db3923fe0d6cca13054).
