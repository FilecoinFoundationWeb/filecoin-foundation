---
title: Announcing the Filecoin Network v27 Golden Week Upgrade
created-on: 2025-09-25T13:30:00.000Z
updated-on: 2025-09-25T13:30:00.000Z
published-on: 2025-09-25T13:30:00.000Z
category: ecosystem
description: The Filecoin network successfully completed the Golden Week upgrade
  (Network v27) on September 24 at epoch 5348280, delivering protocol cleanups
  and enhancements.
image:
  src: /assets/images/nv27.webp
seo:
  description:
    The Filecoin network successfully completed the Golden Week upgrade
    (Network v27) on September 24 at epoch 5348280, delivering protocol cleanups
    and enhancements.
---

The Filecoin network successfully completed the Golden Week upgrade (Network v27) at epoch 5348280 on September 24, 2025 at 23:00 UTC. This upgrade delivered protocol cleanups and enhancements, including cryptographic precompiles for the Filecoin Ethereum Virtual Machine (FEVM), smart contract notifications for Direct Data Onboarding, Fast Finality on Filecoin (F3)-compatible snapshot formatting, and a new deposit requirement for storage provider (SP) creation. All Filecoin implementations — Lotus, Forest, Venus, Curio, and Boost — shipped releases to ensure network compatibility ahead of activation.

## Strengthening the Core Protocol, Empowering Developers 

The Golden Week upgrade deprecates old methods, introduces BLS precompiles, and enables smarter integrations through notifications and snapshots. This ensures that the Filecoin protocol is leaner, more secure, and easier to build on.

### [FIP-0105 Introduces BLS12-381 Precompiles for FEVM (EIP-2537)](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0105.md)

FIP-0105 introduces BLS12-381 precompiles for the FEVM in alignment with Ethereum’s [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537#abstract). EIP-2537 adds precompiled contracts for BLS12–381 curve operations to Ethereum, which enables efficient BLS signature verification. Previously, these operations were slow or incompatible with Filecoin; now this upgrade builds them directly into the network. BLS signatures are widely used in blockchain applications including rollups, identity systems, and consensus mechanisms, which brings Filecoin closer to full compatibility with Ethereum and makes it easier for developers to port their applications.

### [FIP-0077 Adds A Cost Opportunity for New Storage Providers](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0077.md)

This proposal introduces a financial deposit requirement for prospective storage providers on the Filecoin network. Before the upgrade, the near-zero cost of creating a miner actor enabled bad actors to spam the network by creating thousands of fake miner actors causing congestion and increasing the cost of state migrations for everyone.

To remedy this, this improvement requires new SPs to deposit approximate 4 FIL (adjusted for network conditions) to register a storage provider ID on the network, creating a meaningful upfront cost that discourages the creation of storage provider IDs not intended to be used. In effect, this change filters out spam accounts which keeps the network cleaner and more efficient.

## Protocol Maintenance 

### [FIP-0103 Removes the ExtendSectorExpiration Method from the SP Actor](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0103.md)

To reduce the protocol's technical debt, FIP-0103 removes an old, outdated function called **_ExtendSectorExpiration_** from Filecoin's code that allowed storage providers to extend how long they commit to storing data. The function became redundant when a newer, better version called **_ExtendSectorExpiration2_** was introduced, which achieves the same function as the original, plus additional features for handling verified data. The change simplifies Filecoin's codebase, reduces maintenance work, and eliminates potential sources of bugs through having only one method to do the same thing.

### [FIP-0106 Removes the ProveReplicaUpdates Method From the SP Actor](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0106.md)

FIP-0106 removes another outdated function from Filecoin's code called **_ProveReplicaUpdates_** that allowed storage providers to update their sealed storage sectors with new data without having to completely re-seal them (called Snap Deals). Similar to FIP-0103, a newer and better version called **_ProveReplicaUpdates3_** was introduced that achieved the same functionality more efficiently and flexibly. Storage providers will continue to have full Snap Deals functionality through the newer, improved method.

### [FIP-0101 Removes the ProveCommitAggregate Method from the SP Actor](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0101.md)

FIP-0101 removes the deprecated **_ProveCommitAggregate_** method, a batch processing function that occurs when storage providers commit to storing data using aggregate proofs, in favor of a newer method called **_ProveCommitSectors3_** that was previously introduced. Storage providers retain all the same functionality through the newer, more efficient method. This ensures that the Filecoin protocol is easier to maintain while preserving the full set of commit capabilities for storage providers.

## Data Economy Enablement 

The upgrade introduces new notifications that allow smart contracts to respond instantly to data storage events, starting the foundation for trustless data marketplaces and applications.

### [FIP-0109 Enables Smart Contract Notifications for Direct Data Onboarding (DDO)](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0109.md)

Filecoin previously introduced Direct Data Onboarding as part of [FIP-0076](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0076.md) with a notification system that alerts relevant parties when new data gets stored on the network. However, only Filecoin's built-in storage marketplace could receive these notifications about new data being stored. This upgrade generalizes that capability, allowing any smart contract or application to subscribe to notifications. By opening this up, the network is building a path for new data-driven applications on Filecoin, such as custom marketplaces, data DAOs, and data verification services, advancing Filecoin toward becoming a comprehensive marketplace of storage services.  Work to [expose the Sector Status Method to smart contracts](https://github.com/filecoin-project/FIPs/tree/master/discussions/1108) to support self-contained smart contract storage markets based on Proof of Data Replication will follow.

### [FRC-0108 Enhances the Filecoin Snapshot Format](https://github.com/filecoin-project/FIPs/blob/master/FRCs/frc-0108.md#frc-0108-filecoin-snapshot-format)

FRC-0108 expands the Filecoin snapshot format to include F3 finality certificates. Snapshots are compressed copies of Filecoin's current state that new nodes can download to quickly sync instead of processing the entire blockchain history from the beginning. Previously, nodes needed to get the F3 finality certificate chain from peers outside of the snapshot, which could take hours.  Now the F3 state is bundled with the snapshot, both reducing the time and bandwidth required for new nodes to join the network with fast finality. F3-augmented snapshot download URLs can be found in the GitHub issue tracker, issue [#5627](https://github.com/ChainSafe/forest/issues/5627).

## Why It Matters

Filecoin is a decentralized storage network designed to store humanity's most important information. Golden Week supports this mission by streamlining the protocol, strengthening cryptographic foundations, and improving the tools that developers and storage providers can rely on. Each improvement adds resilience to the network, ensuring Filecoin can be the backbone for open, verifiable data.

### Learn More and Get Involved

Network upgrades like Golden Week are shaped in the open. Every element from the upgrade name and timeline, to the FIPs and final scope, was shaped through community input in [Core Devs discussions](https://github.com/filecoin-project/core-devs/blob/master/Core%20Dev%20Meetings/Meeting%200082.md) and the Filecoin [Network Upgrade thread](https://github.com/filecoin-project/core-devs/discussions/196) on Github. Transparency is central to Filecoin’s evolution: where anyone can follow along, give feedback, and help shape the network’s direction.

We want to thank all client implementers, researchers, storage providers, and community contributors who participated in this process. Your collaboration ensures that Filecoin grows stronger through transparent governance and collective effort.

- For deeper tracking of this network upgrade: [Community GitHub Discussion](https://github.com/filecoin-project/community/discussions/74#discussioncomment-14214805)

- To help shape the future of Filecoin governance: [Governance Poll](https://poll.fil.org/dashboard/c/8n7hhjebkb)
