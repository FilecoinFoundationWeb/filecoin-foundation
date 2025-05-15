---
title: "Announcing the Filecoin NV24 Tuk Tuk Upgrade: Enhancing Filecoin's Efficiency"
created-on: 2024-11-20T23:53:00.000Z
updated-on: 2024-11-19T23:53:00.000Z
published-on: 2024-11-20T23:53:00.000Z
category: ecosystem
description: The Filecoin network has completed its NV24 upgrade, marking another significant step in enhancing the network's security, efficiency, and developer capabilities.
image:
  src: /assets/images/blog-post-header-nv24-upgrade.webp
seo:
  description: The Filecoin network has completed its NV24 upgrade, marking another significant step in enhancing the network's security, efficiency, and developer capabilities.
---

The Filecoin network has completed its NV24 upgrade, marking another significant step in enhancing the network's security, efficiency, and developer capabilities. This upgrade introduces important changes aimed at maintaining the network's stability and future-proofing its infrastructure, all while improving the developer experience for those building on the platform.

The NV24 upgrade addresses key areas such as network pledge security, and smart contract functionality, among other improvements.

## Introduce Lower Bound for Sector Initial Pledge

[View FIP-0081 specification](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0081.md)

A critical enhancement comes with improvements to the sector initial pledge mechanism, ensuring that the network maintains sufficient collateral to secure consensus, even as storage growth fluctuates. By introducing a lower bound to the pledge requirements, this upgrade aims to safeguard Filecoin's economic security and ensures stability in its circulating token supply over the long term.

This change addresses the risk of total network collateral dropping to near zero during slower growth periods, which could otherwise weaken economic incentives for storage providers and reduce network security. By setting a non-zero floor, the Filecoin network ensures a consistent baseline of locked tokens, reinforcing both security and operational returns, regardless of storage demand trends.

## Add Support for EIP-5656 in the FEVM

[View FIP-0094 specification](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0094.md)

On the developer side, the upgrade includes performance boosts for smart contracts running on the Filecoin Ethereum Virtual Machine (FEVM). By adding support for modern memory operations and historical randomness, developers can now create more efficient and secure applications on the Filecoin network. These updates ensure compatibility with the latest Ethereum features, empowering developers to leverage advanced cryptographic functions and improve contract performance.

## Add FEVM Precompile to Fetch Beacon Digest from Chain History

[View FIP-0095 specification](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0095.md)

FIP-0095 introduces a groundbreaking enhancement to the Filecoin EVM (FEVM) by enabling smart contracts to access randomness from prior chain epochs through a newly added precompile. This feature bridges a critical gap, allowing developers to leverage Filecoin's drand beacon for proofs of service, proofs of data possession, and other cryptographic protocols requiring robust, unbiased randomness.

### Why It Matters

The NV24 upgrade combines crucial improvements in network security, performance, and developer functionality, continuing Filecoin's mission to provide a robust and decentralized storage solution to preserve humanity's most important information.

### Learn More and Get Involved

However you choose to participate in Filecoin governance, we hope you will get involved. By joining ongoing governance discussions, reviewing FIPs included in this upgrade and future ones, and staying connected with the latest developments through [our monthly calls](https://calendar.google.com/calendar/embed?src=c_909343f97c15e8f23dda6e2612e62fcdee14bceabd8869abe4a52d793bf42b98%40group.calendar.google.com&ctz=America%2FToronto), [fil-gov Slack channel](https://filecoinproject.slack.com/archives/C0535S9TUUF), and [@Fil_Gov on X](https://x.com/fil_gov), you're supporting community decision-making and collective ownership of the Filecoin technology.
