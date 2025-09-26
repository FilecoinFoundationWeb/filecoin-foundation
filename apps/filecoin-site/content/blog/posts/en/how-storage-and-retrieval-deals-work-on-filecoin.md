---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-09T17:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: A short article on how storage and retrieval deals work in Filecoin.
image:
  alt: ""
  url: /uploads/fil-deals-lg.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/storage-deals-for-fil-news.webp
title: How storage and retrieval deals work on Filecoin
_template: blog_detail
---

This blog post explains how Filecoin deals work from the perspective of both the storage providers (also known as miners) and the clients who want to store data on the Filecoin network.

The technical explanations in this post use the JSON-RPC API to interact with the Filecoin network when querying for data. This API is mostly used by applications. As a human, you can use the user friendly `lotus` command line tool, which uses the JSON-RPC API under the hood.

## Introduction

The Filecoin network achieves economies of scale by allowing anyone to participate as a storage provider. Currently the network is made up of [hundreds of storage providers](https://spacegap.github.io/) spread across the globe. Content addressing and cryptographic storage proofs verify that data is being stored correctly and securely over time on miners’ hardware, which creates a robust and reliable service.

This blog post covers the basic stages of the two types of deals in Filecoin, namely _storage deals_ and _retrieval deals_, and details their lifecycle. The cryptographic proofs used to verify that participants in the system are performing their responsibilities according to their commitments are also explained.

## Data on Filecoin

In order to store files on Filecoin, clients must first import them in their local Filecoin node. This step produces a _data CID_ - a content identifier, an ID that uniquely describes the content. Later, the data is transferred to a miner. Another way to store files on Filecoin is via _offline deals_, which is not cover in this post.

Importing data locally to a Filecoin node can be done with the `lotus client import` command. It's important to remember the resulting _data CID_ (it is also available on the local node later on), because it must be used to later retrieve data from miners.

After importing data into the local node, users have to initiate a deal. This can be done with the `lotus client deal` command. The command takes a _data CID_ as input, produces a _Filecoin Piece_, and interactively takes the user through the storage deal flow detailed below.

The _Filecoin Piece_ is the main unit of negotiation for data that users store on the Filecoin network. The _Filecoin Piece_ is not of a specific size, but is upper-bounded by the size of the _Sector_, governed by the [parameters of the network](https://network.filecoin.io/#mainnet). If a _Filecoin Piece_ is larger than the size of a _Sector_ that the miner supports, it has to be split into more pieces so that each piece fits into a sector.

A _Filecoin Piece_ is a _CAR_ file containing an _IPLD DAG_ with its own _data/payload CID_ and _piece CID_.

_CAR_ stands for [_Content Addressable aRchives_](https://github.com/ipld/specs/blob/master/block-layer/content-addressable-archives.md) - a _CAR_ file is a serialised representation of any _IPLD DAG_ as the concatenation of its blocks, plus a header describing the graph in the file (with the _root CID_).

When a client wants to store a file in the Filecoin network, they start by producing the _IPLD DAG_ of the file with [UnixFS](https://github.com/ipfs/specs/blob/master/UNIXFS.md) (this is what the `lotus client import` command does). The hash that represents the root node of the DAG is an IPFS-style [CID](https://github.com/multiformats/cid), called data/_payload CID_.

[UnixFS](https://github.com/ipfs/specs/blob/master/UNIXFS.md) is a protobuf-based format for describing files, directories, and symlinks in IPFS. UnixFS is used in Filecoin as a file formatting guideline for files submitted to the Filecoin network.

The resulting _CAR_ file is padded with extra zero bits in order for the file to make a binary merkle tree.

## The Storage Deal Flow

Users can store data in and retrieve data from the Filecoin network via deals. Participants in the network, miners (supply-side) and clients (demand-side), interact with each other via _storage deals_ and _retrieval deals_.

The lifecycle of a storage deal is as follows:

### 1. **Discovery**

The client identifies miners and determines their current asks, i.e. the price per GiB per epoch (30sec.) in attoFIL (1 attoFIL is equal to 10^-18 \* FIL) that miners want to receive in order to accept a deal. Currently a deal in Filecoin has a minimum duration of 180 days.

You can list all currently active miners by querying the JSON RPC API of a synced node (for test purposes the [_https://api.node.glif.io_](https://api.node.glif.io "https://api.node.glif.io") public endpoint is used), with the _Filecoin.StateListMiners_ method:

    curl -X POST -H "Content-Type: application/json" \
      --data '{ "jsonrpc": "2.0", "method": "Filecoin.StateListMiners", "params": [ null ], "id": 1 }' \
      'https://api.node.glif.io' | jq

    {
      "jsonrpc": "2.0",
      "result": [
        "f011303",
        "f011092",
        ...

You might want to decide on a specific provider based on their reputation or power in the network. Reputation metrics for miners are not part of the Filecoin protocol yet, and not covered in this post.

Once you have chosen a specific miner, you need to fetch its _PeerID_, for example with the _Filecoin.StateMinerInfo_ method, to establish a secure connection to them via libp2p protocol:

    curl -X POST -H "Content-Type: application/json" \
      --data '{ "jsonrpc": "2.0", "method": "Filecoin.StateMinerInfo", "params": [ "f03274", null ], "id": 1 }' \
      'https://api.node.glif.io' | jq

    {
      "jsonrpc": "2.0",
      "result": {
        "Owner": "f03261",
        "PeerId": "12D3KooWP5D9TmqC45i6L2e2qQHYcuxaUwPdYo6CzqUMVmFEH3N9",
        ...

You can then query for a signed _StorageAsk_ with the _Filecoin.ClientQueryAsk_ method. This will establish a direct libp2p connection to the selected miner, and ask for a storage quote:

    curl -X POST https://api.node.glif.io \
         -H "Content-Type: application/json" --data-binary @- << EOF
    {
      "jsonrpc": "2.0", "method": "Filecoin.ClientQueryAsk", "id": 1,
      "params": [
        "12D3KooWP5D9TmqC45i6L2e2qQHYcuxaUwPdYo6CzqUMVmFEH3N9",
        "f03274"
      ]
    }
    EOF

    {
      "jsonrpc": "2.0",
      "result": {
        "Price": "100000000000",
        "VerifiedPrice": "100000000000",
        "MinPieceSize": 256,
        "MaxPieceSize": 34359738368,
        "Miner": "f03274",
        "Timestamp": 148031,
        "Expiry": 1199231,
        "SeqNo": 14
      },
      "id": 1
    }

The result includes details about deals that this miner is willing to accept, such as range for the admitted _Filecoin Piece_ sizes and price per GiB per epoch. Note that making a storage deal proposal which matches the miner’s storage ask is a precondition, but not sufficient to ensure the deal is accepted - the storage provider may run its own decision logic later on.

### 2. **Negotiation and data transfer**

During this phase both parties come to an agreement about the terms of the deal, such as the cost of deal, the duration of deal, the starting epoch of the deal, etc.

Then data is transferred from the client to the miner.

### 3. **Publishing**

The deal is published on-chain, via the `PublishStorageDeals` message, making the storage provider publicly accountable for the deal.

### 4. **Handoff**

Once the deal is published on-chain, it is handed over to the _Storage Mining subsystem_, to pack into a sector which is later _sealed_, and subsequently proven continuously.

## The Storage Mining subsystem

The Storage Mining subsystem ensures miners can effectively commit storage to the Filecoin network and:

1. Participate in the _Filecoin Storage Market_ by taking on client data and participating in storage deals.
2. Participate in _Filecoin Storage Power Consensus_, verifying and generating blocks to grow the Filecoin blockchain and earning block rewards and fees for doing so.

It oversees the following processes:

### Committing new storage and registering new sectors

In order to register a sector in Filecoin, a miner must _seal_ the sector. _Sealing_ is a computation-heavy process that produces a unique representation of the data in the form of a proof, called [Proof-of-Replication](https://spec.filecoin.io/#section-glossary.proof-of-replication-porep) or _PoRep_. Once the proof has been generated, the miner compresses it and submits the result to the blockchain. This is a certification that the miner has indeed replicated a copy of the data they agreed to store.

### Continuously proving storage (see WindowPoSt)

Every storage miner must continuously submit proofs on-chain to prove that they continue to store their sectors.

### Declaring storage faults and recovering from them (see Faults)

Failing to submit the proofs mentioned above for a given sector will result in a fault, and the miner will be subject to penalties.

## Storage miner and client considerations

As covered above, _storage deals_ are published on-chain before they are active and sealed. This is important because publishing a deal locks clients’ funds in escrow on-chain. Thus, the miner has assurance that if they do indeed seal the data in a sector, they will get paid for it.

It helps to think of publishing a deal on-chain as signing a contract, and of sealing and activating a deal as starting to do the work the miner committed to.

From the perspective of a client who wants to store data on Filecoin, the deal passes roughly through the following stages:

1. **Fund a deal** - client locks funds in escrow
2. **Propose a deal** to the miner
3. **Check for intent** to accept deal
4. **Transfer data** for the deal to the miner - this is done via the [GraphSync](https://github.com/ipld/specs/blob/master/block-layer/graphsync/graphsync.md) protocol. GraphSync is a protocol for synchronising IPLD graphs among peers. It allows a host to make a single request to a remote peer for all of the results of traversing an IPLD selector on the remote peer’s local IPLD graph. Lotus uses the [ipfs/go-graphsync](https://github.com/ipfs/go-graphsync) implementation of the GraphSync protocol.
5. **Check for acceptance** - make sure that the miner has accepted the deal and published it on-chain.
6. **Sealing** - deal is on-chain, and miner is currently sealing a sector that contains the deal.
7. **Active** - deal has been sealed and is active. From here on, the storage provider/miner should periodically prove that they continue to store the data. More details in the Proof-of-Spacetime section below.

From the perspective of a miner who provides a service to the client by storing their data, the deal passes roughly through the following stages:

1. **Verify a deal** - receive a proposal for a deal, and check it parameters (size, price, etc.)
2. **Check for locked funds** - make sure that client has locked funds and can pay for the deal.
3. **Wait for data** - receive data from client for the deal.
4. **Pledge collateral** for the deal on chain
5. **Publish the deal** on-chain
6. **Seal the sector**
7. **Activate deal** - from here on, the storage provider/miner periodically submits WindowPoSt proofs, proving that they are continuously storing the data.

## The Retrieval Deal Flow

Retrieval deals, unlike storage deals, happen mostly off-chain facilitated by payment channels. Data transmission is metered, and the client pays the miner incrementally as the data is being transferred. Creating payment channels, and redeeming vouchers, is the only part of the process which involves interacting with the Filecoin blockchain.

This is the overall process:

1. **Discovery** - the client identifies miners who have the data that it needs and requests a retrieval quote from them - price per byte, unseal price, payment interval.
2. **Payment channel setup** - the client sets up a payment channel between them and the miner (if one doesn’t already exist).
3. **Data transfer with payment** - miner sends data to client until payment is required. Payment processing is requested when a certain threshold is reached, and data transfer continues after that. Depending on whether the miner has the data in their _block-store_ or not, they might need to first _unseal_ it - a non-trivial and non-instantaneous operation, which is the opposite of _sealing_ described in the section about storage deals.

The client has not successfully retrieved a full copy of the data.

## Proof-of-Spacetime

The sections above glanced over many details that make Filecoin unique and provide probabilistic guarantees on data to users. This section covers two of the proofs that Filecoin utilises, and also explains how they fit into the protocol and the problems they address.

Proof-of-Spacetime (PoSt) is a procedure by which a storage miner can prove to the Filecoin network they continue to store a unique copy of some data on behalf of the network.

Proof-of-Spacetime manifests in two distinct varieties in Filecoin today:

1. Window Proof-of-Spacetime (WindowPoSt) and
2. Winning Proof-of-Spacetime (WinningPoSt)

## Winning Proof-of-Spacetime

Winning Proof-of-Spacetime (WinningPoSt) is the mechanism by which storage miners are rewarded for their contributions to the Filecoin network. At the beginning of each epoch, a small number of storage miners are elected to each mine a new block. As a requirement for doing so, each miner is tasked with submitting a compressed Proof-of-Storage for a specified sector. Each elected miner who successfully creates a block is granted FIL (a block reward), as well as the opportunity to charge other Filecoin participants fees to include messages in the block.

Storage miners who fail to do this in the necessary window will forfeit their opportunity to mine a block, but will not otherwise incur penalties for their failure to do so.

## Window Proof-of-Spacetime

Window Proof-of-Spacetime (WindowPoSt) is the mechanism by which the commitments made by storage miners are audited by the Filecoin blockchain.

Every storage miner should maintain their _pledged sectors_. These sectors contain deals made with clients or empty sectors. The latter are called _committed capacity_, that is, miners can make capacity commitments, filling a sector with arbitrary data, rather than with client data. Maintaining these sectors allows the storage miner to provably demonstrate that they are reserving space on behalf of the network.

Every day is broken down into an array of _windows_, currently 48 windows, with a duration of 30 minutes (60 epochs, since 1 epoch is equal to 30sec)

Each storage miner’s set of pledged sectors is partitioned into subsets, one subset for each window.

Within a given window (30min), each storage miner must submit a Proof-of-Spacetime for each sector in their respective subset. This requires ready access to each of the challenged sectors, and will result in a zk-SNARK proof published to the Filecoin blockchain as a message in a block. In this way, every sector of pledged storage is audited at least once in any 24-hour period, and a permanent, verifiable, and public record attesting to each storage miner’s continued commitment is kept.

In the diagram above, you can see that a sample miner should submit WindowPoSt proofs in _deadlines 0_ (> 16TB), _deadline 1_ (< 8TB) and _deadline 2_ (< 8TB), with the majority of their sectors falling in _deadline 0_. Deadlines for each miner are randomised, and for this specific miner, start respectively in _epoch 1635_, in _epoch 1695_, and in _epoch 1755_. You can inspect these deadlines and more details about miners on the [SpaceGap](https://spacegap.github.io/#/miners/f02620) tool.

The Filecoin network expects constant availability of stored data. Failing to submit WindowPoSt for a sector will result in a _fault_, and the storage miner supplying the sector will be _slashed_. This incentives storage miners for healthy behaviour.

## Faults

A fault occurs when a proof is not included in the Filecoin blockchain within the proving period, as a result of loss of network connectivity, storage malfunction, or malicious behaviour.

When a fault is registered for a sector, the Filecoin network will slash the storage miner that is supposed to be storing the sector; that is, it will assess penalties to the miner (to be paid out of the collateral fronted by the miner) for their failure to uphold their pledge of storage.

There are three types of sector fault fees:

1. **Sector fault fee** - This fee is paid per sector per day while the sector is in a faulty state. The size of the fee is slightly more than the amount the sector is expected to earn per day in block rewards. If a sector remains faulty for more than 2 consecutive weeks, the sector will pay a **termination fee** and be removed from the chain state.
2. **Sector fault detection fee** - This is a one-time fee paid in the event of a failure if the miner does not report it honestly and instead the unreported failure is caught by the blockchain. Given the probabilistic nature of PoSt checks, this is set to a few days worth of block reward that would be expected to be earned by a particular sector.
3. **Sector termination fee** - A sector can be terminated before its expiration date through automatic faults or miner decisions. A termination fee is charged that is, in principle, equivalent to how much a sector has earned so far, up to a limit in order to avoid discouraging long sector lifetimes.

Read more about faults and economics around them at the [Filecoin Spec website](https://spec.filecoin.io/)

## Conclusion

This post covered some of the concepts related to storing and retrieving data on Filecoin, the protocols that clients and miners engage in to make that happen, and the different proofs and guarantees involved in the process.

It detailed the flow for storage and retrieval deals from the perspective of clients and miners, as well as the penalties that the Filecoin protocol would enforce in case one of the parties misbehaves.

To conclude, it outlined some of the foundations of how the Filecoin protocol governs the Filecoin network resulting in a reliable and trustless decentralised storage network.
