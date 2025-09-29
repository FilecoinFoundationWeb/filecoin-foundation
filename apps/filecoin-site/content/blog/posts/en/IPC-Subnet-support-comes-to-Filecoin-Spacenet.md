---
title: IPC Subnet support comes to Filecoin Spacenet
draft: false
excerpt: >-
  The launch of FVM represents a historic achievement for Filecoin but the
  potential for higher transaction volumes and a rapidly changing network
  landscape means that users will need to adapt and leverage every tool at their
  disposal. This is where IPC or Interplanetary Consensus comes in!
share_image: /uploads/IPC-Subnet.webp
image:
  url: /uploads/IPC-Subnet.webp
author: Jorge Soares
date: 2023-04-25T21:50:52.969Z
categories:
  - updates
dim_image: true
---

The [Interplanetary Consensus framework](https://ipc.space/) (IPC), formerly known as Hierarchical Consensus, addresses two challenges of blockchain networks, transaction volume and application heterogeneity. In doing so, it boosts the capabilities of the Filecoin network. Today, after 18 months of development, we’re happy to announce the first public IPC deployment as part of the [Spacenet](https://github.com/consensus-shipyard/spacenet/) testnet. 

We first invite you to ramp up quickly by watching this [two-minute introduction to IPC](https://www.youtube.com/watch?v=aRyj9kOvW7I), which explains the high-level aspects in just two minutes. Then keep reading for more detail!

{{< youtube id="aRyj9kOvW7I" title="Welcome to Interplanetary Consensus!" >}}

## New use cases

The [Filecoin Virtual Machine](https://fvm.filecoin.io/) (FVM) launch unlocked programmability across the Filecoin network. Now, the blockchain can be used for more than storage deals, storage proofs, and simple transactions, and EVM compatibility makes it possible to quickly deploy existing Ethereum smart contracts.

Programmability represents a seismic shift for the Filecoin blockchain, which can now play host to DeFi solutions, [Data DAOs](https://filecoin.io/blog/posts/fvm-imaginarium-bringing-datadaos-to-the-next-level-with-fvm/), metaverse gaming, and much more. Think of all traditional blockchain applications that can be augmented by native storage — or think of adding processing units to the data ocean already on Filecoin. 

The forthcoming surge in activity is not without challenges. Filecoin blocks are seldom full nowadays, making for easy transactions with low fees and delays. However, as FVM activity ramps up, there will be competition for block space, increasing the cost of running applications on Filecoin. Moreover, not all applications can operate in a network with 30-second block times and the resulting latency. 

This is where IPC comes in. By allowing end users and application developers to dynamically spawn hierarchical subnets that execute transactions in parallel, IPC removes excess load from the root network — the Filecoin mainnet — while providing operating conditions better suited to the needs of applications. In addition, IPC provides cross-subnet transactions and mechanisms to secure subnets by leveraging stronger guarantees provided by their parent.

## Under the hood of IPC

IPC is, at its core, a framework that defines the rules for interaction within and between subnets, accompanied by a suite of smart contracts and client software implementing said behaviours. When deployed to the Filecoin mainnet, it will run entirely in userspace, anchoring to the root network via a user-defined actor. 

The basic functionality of IPC involves creating and operating subnets, which are organised in a tree. Spawning is permissionless, and users can decide where to anchor their subnet in the tree. Each subnet is associated with an independent set of validators running a separate consensus instance. Subnets submit frequent state checkpoints to their parent network, from which they, in turn, derive some security guarantees.

Subnets may be deployed for many reasons, for instance, to save on transaction fees or to group interactions along geographical, topical, or application criteria. They can be long-lived or ephemeral, established to coordinate computation and discarded shortly after. 

Subnet consensus is both swappable and configurable. A subnet can run any consensus algorithm: proof-of-stake, proof-of-work, proof-of-storage, classical BFT, or anything else. Along with the IPC framework, we are releasing the implementation of Trantor, a high-performance BFT consensus algorithm that is a good fit for a broad range of applications. While IPC users can implement other consensus algorithms — and we intend to look at out-of-the-box alternatives in the future, many application requirements can be satisfied by merely changing the default parameters of Trantor, for instance, its block frequency.

A key feature of IPC is the transparent cross-subnet communication mechanism provided out of the box. These mechanisms allow for easy transfers of funds in and out of subnets and for interaction with users and state located elsewhere in the IPC tree. 

But how does it all work in practice? The details of how to interact with IPC depend on whether you’re a user, developer, or validator. However, at a high level, a user interacting with IPC locally will rely on the [IPC Agent](https://github.com/consensus-shipyard/ipc-agent/) application and a number of blockchain nodes — one for each subnet. The local applications are complemented by two on-chain smart contracts, which are instantiated for each subnet: [the Interplanetary Subnet Actor and the Interplanetary Gateway Actor](https://github.com/consensus-shipyard/ipc-actors). 

If you’d like to learn more about IPC or its components, proceed to our fresh-off-the-boat docs, including [user documentation](https://docs.filecoin.io/basics/interplanetary-consensus/overview/) and a [technical summary of the framework](https://github.com/consensus-shipyard/IPC-design-reference-spec/raw/main/main.pdf). Please remember that the software, tooling, and documentation are all works in progress — if you hit any roadblocks, a message in Slack or a GitHub issue will get you the fastest support and help us improve.

## What’s next for IPC?

Today’s M1 milestone brings IPC to the final stretch of its road to production. It marks the first time a long-running IPC testnet is available to the public, enabling user, developer, and SP experimentation with subnets and consensus models other than the one the root Filecoin network provides. It is, however, a test deployment, and shouldn’t be used for production applications with value at stake.

Over the coming quarters, we will keep enriching IPC with additional features and increased robustness. As we speak, our partners at Limechain are hard at work translating our actors into [user-defined FEVM Solidity actors](https://github.com/LimeChain/filecoin-ipc-actors-fevm), which we will use for the first mainnet deployment. We will work on a regular release cadence, with new features and improvements every few weeks.

We are also working with launch customers, particularly the Saturn team, to ensure we enable their use cases in milestone M2, scheduled to land in June 2023. M2 will bring IPC to the Filecoin mainnet and allow early users to deploy their applications in production. It will be followed by a full release in Q3, complete with developer tooling and documentation.

Throughout this process, we’re very keen on collecting user feedback. If you have a use case for IPC, would like to work with us to deploy your application or operate as a subnet validator, or would just like to continue the discussion with this nascent community, please join us in #ipc-help on the [Filecoin Slack workspace](http://filecoin.io/slack).
