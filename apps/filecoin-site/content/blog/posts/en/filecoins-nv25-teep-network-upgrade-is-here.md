---
title: Filecoin’s NV25 Teep Network Upgrade is Here
excerpt: >-
  The Network version 25 "Teep" upgrade introduces improvements that make
  Filecoin more efficient and adaptable, simplifying storage provider economics
  and enhancing developer tooling. Overall these changes make the network more
  flexible, adaptable and dynamic for builders, storage providers, and storage
  clients alike.
share_image: /uploads/NV25_Blog_2000x1125.webp
image:
  url: /uploads/NV25_Blog_2000x1125.webp
date: 2025-04-15T00:56:29.565Z
categories:
  - updates
dim_image: true
---

The Network version 25 "Teep" upgrade introduces improvements that make Filecoin more efficient and adaptable, simplifying storage provider economics and enhancing developer tooling. Overall these changes make the network more flexible, adaptable and dynamic for builders, storage providers, and storage clients alike.

Key improvements include: 

- Straightforward per-sector fee and the removal of the Batch Balancer and gas constraints (FIP-0100)
- Transient storage via EIP-1153 in the FEVM (FIP-0097); 
- A simplified fixed-percentage sector termination fee (FIP-0098); 
- Preparation for F3 activation.

Keep reading for more details on what these improvements mean for the network.

## FIP0100 [Simplifies Filecoin's Economic Model](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0100.md)

FIP0100 addresses three interconnected challenges in the Filecoin protocol. First, it eliminates the Batch Balancer fee, which historically introduced variability and unpredictability to onboarding costs. In place of the Batch Balancer, this FIP introduces a new daily fee structure that provides more predictable and proportional economic incentives to storage providers, including reduced onboarding gas usage by up to 30% and more predictable expense models. And lastly, it removes outdated technical limits on batch sizing, which removes limitations on network growth. 

Together, these changes create a more efficient onboarding process and ensure sustainable economics that align incentives for both the network and its participants. Read this [excellent summary](https://github.com/filecoin-project/FIPs/discussions/1105#discussioncomment-12647755) for more info.

## [Support for EIP-1153 (Transient Storage)](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0097.md)

Support for [EIP-1153](https://link.mail.beehiiv.com/ss/c/u001.WQITBXa8BlDy8iQveXaZRPKYlw94MOpPtJNVpYNLPOBW_i_EG87bFLKyU1Famzdv-HFAakHzNXeXgYxSevMYmQDIbhFNm9-1LF0YT3U5A7EbtADSJvHsJdQccVQ32VSh/4f9/l-VVsNIaQmS1yIhDl75j8A/h6/h001.jXkhAMQETW1SNF_GqI-zLS-2bvosVfyGSUMZL7frMbs) on the [Filecoin Ethereum Virtual Machine](https://fvm.filecoin.io) (FEVM) enables compatibility with Ethereum standards — simplifying the process to port contracts from Ethereum to Filecoin. 

Transient storage behaves exactly like it does on Ethereum: it’s isolated to the current transaction and automatically cleared afterward. This makes it easier to implement secure patterns like reentrancy locks, temporary approvals, and efficient proxies — all without persisting data on-chain.

If you’re a developer using Solidity, this means greater compatibility with modern tooling and libraries. It also closes another gap between FEVM and Ethereum, giving developers more reason to bring their contracts to Filecoin without friction.

## FIP0098 [Simplifies the Termination Fee Calculation to a Fixed Percentage](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0098.md)

Today, calculating a sector’s termination fee is complicated and opaque — especially for developers and DeFi protocols that use miner actors as collateral.

[FIP-0098](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0098.md) changes that by introducing a much simpler rule: the termination fee for a sector is now just a fixed percentage (8.5%) of its initial pledge, with a few bounded exceptions for very young sectors or unusual edge cases.

This makes it dramatically easier for Storage Providers to reason about their liabilities, and for protocols to assess the value of miner collateral in a predictable way. It also simplifies Filecoin’s economic model — while preserving strong incentives for reliable storage.

## Preparing for F3 Mainnet Activation

Fast Finality in Filecoin (F3) will speed up finality on the network by up to 450X, making the future of Filecoin fast, secure, and accessible to a wider range of applications. This change is achieved by introducing a new component called GossiPBFT, which works alongside the existing system to rapidly finalize transactions and allows Filecoin to improve its usability across a wider variety of applications while opening the door for new use cases. 

Since all the learnings from the [NV24 passive testing](https://medium.com/@filoz/the-f3-journey-testing-insights-and-timeline-adjustments-f43acfd4ea72), core improvements have been made that will be [passively tested immediately after the nv25 upgrade](https://github.com/filecoin-project/go-f3/issues/802) and hopefully activated a couple weeks afterwards.  Follow along in the [NV25 passive testing updates](https://github.com/filecoin-project/lotus/discussions/12287) and [F3 activation checklist](https://github.com/filecoin-project/f3-activation-contract/issues/22).  

For more information about F3’s development journey, read FilOz's series on [The F3 Journey](https://medium.com/search?q=FilOz+F3).

## A Community Effort

As always, this upgrade wouldn’t have been possible without contributions across the Filecoin ecosystem. Core dev teams, protocol implementers, and community reviewers all came together to make Teep a reality.

## Up Next 

Immediately following this network upgrade, implementation teams will be [passively testing F3](https://github.com/filecoin-project/go-f3/issues/802), hopefully [activating F3](https://github.com/filecoin-project/f3-activation-contract/issues/22), and exposing [F3-aware APIs for users and builders](https://github.com/filecoin-project/lotus/issues/12987). Per usual, future network upgrade scopes and dates will be posted in [https://github.com/filecoin-project/community/discussions/74](https://github.com/filecoin-project/community/discussions/74).
