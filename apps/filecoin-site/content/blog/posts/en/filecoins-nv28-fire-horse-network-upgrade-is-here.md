---
title: Filecoin’s NV28 Fire Horse Network Upgrade is Here
excerpt: >-
  The Filecoin network upgrade NV28 "Fire Horse" is now live on mainnet, making
  the network more usable, trustworthy, and performant for the real businesses
  running real workloads on the network today. 
share_image: /uploads/NV28_Blog_2000x1125.webp
image:
  url: /uploads/NV28_Blog_2000x1125.webp
date: 2026-05-27T00:00:00.000Z
categories:
  - updates
dim_image: true
---

In 2026, Filecoin is charging ahead with paid, onchain storage deals and improving network economics. The Filecoin network upgrade NV28 "Fire Horse" is now live on mainnet, making the network more usable, trustworthy, and performant for the real businesses running real workloads on the network today. Now, smart contracts on Filecoin can verify the health, status, and expiration of any storage sector in real time. Applications can authenticate users with passkeys instead of seed phrases. And the gas fee mechanism now reflects how Filecoin actually produces blocks.

The result is a protocol that is easier to build on, more compatible with how developers already work on other major chains, and with a fee system designed specifically for Filecoin, in direct support of the Filecoin ecosystem's [2026 focus](https://www.filecoin.io/blog/the-2026-filecoin-network-strategy) on driving real, paid usage of the network.

The Filecoin community chose the name Fire Horse, a Chinese zodiac symbol for high energy transformation and forward momentum.

## What does this mean for people using Filecoin?

Users can now log in with the authentication methods they already use, such as Face ID, a fingerprint, or a hardware security key, instead of managing seed phrases and browser extensions. Applications can verify storage conditions directly onchain, enabling features like automatic renewals and storage guarantees. Combined with more predictable transaction costs, these upgrades make Filecoin applications easier to use and more reliable.

More detail on the Filecoin Improvement Proposals (FIPs) in the upgrade:

## [Applications Can Now Verify What's Stored and Act On It](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0112.md) (FIP-0112)

NV28 Fire Horse equips smart contracts to check whether a given sector is active, how healthy it is, and when it expires. This gives applications a verified view of the underlying storage state.

That opens up an entirely new category of storage products built on enforceable guarantees. Imagine a storage insurance contract that can now verify onchain whether your data is actually being stored. Or an SLA enforcement contract that detects a lapsing sector and initiates repairs before you notice an outage. This completes a two-part programmable storage foundation that began with FIP-0109 in NV27. Other applications include automatic renewals, repair markets, and custom payment logic, all running natively on the Filecoin Ethereum Virtual Machine (FEVM). Storage products that customers will pay for require guarantees they can trust and FIP-0112 is what makes those guarantees enforceable.

## [Sign In With Face ID or a Fingerprint With No Seed Phrase Required](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0113.md) (FIP-0113)

Most crypto applications require a seed phrase — a string of random words that serves as the master key to a wallet. Lose it and you lose access permanently. Some enterprise IT teams don’t want to approve software with that risk profile.

FIP-0113 enables Filecoin smart contracts to verify signatures from the passkey systems people already rely on like Face ID, fingerprint readers, and hardware security keys. It does this by adding native support in the FEVM for secp256r1, the cryptographic standard behind passkeys on Apple, Android, and Windows devices, including WebAuthn and FIDO2. The new precompile makes this verification fast and inexpensive at the protocol level.

Passkeys are increasingly the authentication standard that security teams already approve for SaaS procurement. Filecoin applications built on this standard offer login flows with no browser extension and no seed phrase, meeting the bar enterprise IT departments require. For organizations evaluating Filecoin for production workloads, this removes a common procurement blocker.

## [Transaction Costs That Reflect How Filecoin Actually Works](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0115.md) (FIP-0115)

Storage providers need to model their costs to run sustainable operations. Developers need stable economics to price services reliably. Users want to know what a transaction will cost before they submit it. FIP-0115 improves all three by redesigning the base fee mechanism around a signal that actually reflects how congestion works on Filecoin.

Filecoin produces blocks differently than Ethereum with multiple proposers per round rather than one. The previous mechanism measured block utilization, a signal calibrated for single-producer systems. FIP-0115 replaces it with the ratio between tips and the base fee, which more accurately reflects real demand. When tips run disproportionately high relative to the base fee, the mechanism adjusts upward; when tips fall, it adjusts downward.

The result is better price discovery for users, more predictable costs for storage providers, and a more balanced relationship between fees paid to proposers and fees burned by the protocol. You may not notice the mechanics, but you'll notice when apps get cheaper and more reliable.

Storage providers and tooling developers should review gas configurations in light of the new base fee dynamics with updated guidance in [FIP-0115](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0115.md). Predictable provider economics are foundational to the sustainable storage market the network is building.

## [Developer Tools Kept in Step With Ethereum](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0114.md) (FIP-0114)

Adding the Count Leading Zeros (CLZ) opcode to the FEVM matches the same change from Ethereum's Fusaka upgrade. CLZ is a low-level operation that shows up in math-heavy computations, data compression, and zero-knowledge proof systems. This keeps Filecoin's developer tools aligned as both protocols evolve.

## A Community Effort

Fire Horse is the result of collaboration across the core dev teams, the implementation teams at Lotus, Forest, Venus, and Curio, and the broader Filecoin community. Thank you to everyone who contributed code, reviews, testing, and discussion to make this upgrade possible.

## What's Next

Planning for the next upgrade is already underway. Follow along, and find preparation details for any future upgrades, at [https://github.com/filecoin-project/community/discussions/74](https://github.com/filecoin-project/community/discussions/74).
