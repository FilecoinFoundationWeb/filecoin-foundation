---
aliases: []
author: Sarah Thiam
categories:
  - updates
date: "2023-01-16T06:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  If you're new to Web3, you might click around and find info about Filecoin or
  IPFS. In those circles, you'll see quite a bit of buzz about the Filecoin
  Virtual Machine (FVM) and the capability it will unlock for all things
  data-related. What does it all mean?
image:
  alt: ""
  url: /uploads/the_filecoin_virtual_machine_explained-1.webp
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/telnyx-builds-innovative-low-cost-object-storage-on-the-filecoin-network.en.md
related_article_2: >-
  content/blog/posts/the-fvm-imaginarium-magmo-brings-state-channels-to-the-filecoin-virtual-machine.en.md
related_article_3: >-
  content/blog/posts/announcing-space-warp-journey-to-fvm-launch-on-filecoin-mainnet-draft-wip.en.md
share_image: /uploads/the_filecoin_virtual_machine_explained-1.webp
title: The Filecoin Virtual Machine Explained
_template: blog_detail
---

If you're new to Web3, you might click around and find info about Filecoin or IPFS. In those circles, you'll see quite a bit of buzz about the [Filecoin Virtual Machine (FVM)](https://fvm.filecoin.io/) and the capability it will unlock for all things data-related. What does it all mean? Let’s start with some context.

## After Storage, Comes Compute

{{< youtube id="1xloqhD5C_8" title="Protocol Labs: Introduction to IPFS & Filecoin" >}}

The Filecoin storage network has been several years in the making, with over 15 exbibytes (EiB) of committed storage capacity, loosely converted to 10M+ years of video calling!

Filecoin is a blockchain protocol that facilitates marketplace operations of storing and receiving data. Storage deals are made when a user, aka the Client, requests to store a piece of data and their proposal is accepted by a [Storage Provider](https://sp.filecoin.io/), who stores the data.

When the deal is made, the Client’s data is given a unique address and the Storage Provider stores the data. Once the Storage Provider gives verifiable proof that the data has been stored, through whatever method they choose to do so, then the storage deal is recorded onto the Filecoin blockchain.

All these components make up the Filecoin storage network, which is the first step of the Filecoin Masterplan:

1. Build the world’s largest decentralized storage network.
2. Onboard and safeguard humanity’s data.
3. Bring retrieval and compute capabilities to the data to build scalable applications.

We’re progressing well on the second step to onboard meaningful datasets and are simultaneously working on the third and final step of bringing computation to the data, where FVM unlocks a significant part.

## Introducing FVM

FVM was created to address Protocol Labs’ ambition of creating a truly decentralized internet. To enable web-scale applications, you need both storage and programmability. FVM was created to bring general programmability to the Filecoin storage network.

FVM combines the power of smart contracts and verifiable storage. Like smart contracts, FVM has the ability to self-execute a certain behavior, once the predetermined conditions are met. Unlike most other smart contracts, FVM has the additional ability to access verified proof of stored data, within the virtual machine’s native environment.

This has huge potential impact because FVM allows web3 applications to function similarly to web2 applications, where applications can automate processes, while referencing large amounts of data to make optimal decisions. The main difference being that FVM enables that in a decentralized space, which comes with its own set of advantages.

The technical rigor applied to building FVM runs deep and we can geek out further in the [docs](https://docs.filecoin.io/smart-contracts/fundamentals/the-filecoin-virtual-machine/). However, an important point of clarification to highlight is that FVM computes over state, not over the data. This means that when accessing verified proof of stored data, it manipulates the metadata of that stored data deal. It does not manipulate the data itself, stored in that deal.

Computation of data can be achieved off-chain, with FVM to coordinate those jobs, like in the example of Protocol Lab’s Compute over Data framework, [Bacalhau](https://github.com/filecoin-project/bacalhau).

## Imagining FVM Use Cases with Perpetual Storage and Data DAOs

Any number of use cases can be imagined with FVM, ranging from infrastructure to tooling to full solutions.

For example, you could have an FVM actor automate the replication of storage deals across the Filecoin network, to ensure a minimum number of copies are backed up at any given time. An FVM actor can automate the renewals of storage deals, based on client preferences. Now, with an improved resilience of stored data, this enables perpetual storage with FVM, which is a foundational need of any storage market.

Data DAOs could leverage that perpetual storage for its DAO’s data portfolio. Additionally, they could have an FVM actor coordinate and govern the upload of data to the DAO, by ensuring certain standards are met, for a scalable and clean dataset.

An FVM actor could then be used to mint tokens and NFTs for participating members of the DAO, to reward participation and incentivize ideal behavior.

Another FVM actor could also provide conditional access control to members, where participation increases opportunities for access for example and here’s a work-in-progress access control tool that Protocol Labs is building with FVM too, called Medusa.

A huge area of interest for Data DAOs is to complement the curation of massive datasets, with decentralized computation. An important distinction here is that FVM computes over metadata of data storage deals, while compute over data refers to computing the data itself, which is stored within the deal. An FVM actor can orchestrate the computation jobs over a decentralized network of computation providers, for a given piece of data. A great example of compute over data is Protocol Lab’s [Bacalhau](https://github.com/filecoin-project/bacalhau) project, a distributed computation framework, which is currently focused on serving data processing and analytics use cases and is working on integrating FVM.

{{< youtube id="Vw9syGiG31c" title="Introducing the Filecoin Virtual Machine" >}}

## The FVM Roadmap

FVM is a work-in-progress which is [incrementally delivered](https://github.com/filecoin-project/ref-fvm/issues/692). We are currently at Milestone 2.1 of 3, of the [full roadmap](https://fvm.filecoin.io/#roadmap-4), which focuses on Ethereum Virtual Machines (EVM) compatibility of FVM, codenamed “FEVM”. By February 2023, FEVM will ship to the Filecoin main network and by mid-year 2023, we aim to complete another milestone and have a fully functional FVM.

FEVM allows EVM developers to utilize familiar Ethereum tooling out-of-the-box to deploy a smart contract instance to FVM, which means an easy transition for many Solidity-written applications to utilize FVM.

FVM is virtual machine-agnostic. The intent is to build FVM with the option to complement a wide and rapidly evolving landscape of blockchain and VM technologies, which we will continue to optimize for alongside the energetic FVM community! The team has picked a specific focus to build for EVM compatibility first because of its popularity with web3 developers.

## Space Warping into the next phase

To invigorate builders and grow the momentum leading up to FEVM’s main network launch in March 2023, we are hosting [Space Warp](https://spacewarp.fvm.dev/)! It is a jam-packed program intended to support the success of developer projects on FEVM, from ideation to deployments to fund raising.

Space Warp includes grants, a huge hackathon, a builders’ leaderboard, and more totaling over $400k in FIL tokens. Don't miss out on the chance to build your ideas at the Space Warp hackathon and be among the first to build on FEVM. With over $150K in prizes and opportunities for mentorship, the Space Warp Hackathon is one of the biggest opportunities for FEVM builders.

Learn more about upcoming rewards in [Space Warp](https://spacewarp.fvm.dev/), [find inspiration for your next project](https://protocollabs.notion.site/Request-for-Startups-FVM-edition-8cd3e76982d14e29b33335ca458fb087) on FVM, and dive into the [docs](https://docs.filecoin.io/fvm/basics/introduction/) to learn more about Filecoin and FVM!

And as always, remember to follow us on [Twitter](https://twitter.com/fvmdev) for all upcoming news, events, and all things FVM.
