---
aliases: []
author: Patrick Woodhead
categories: []
date: "2022-07-18T22:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The Retrieval Market Working Group (RMWG) has been hard at work in 2022! This
  report gives a summary of its progress in the first half of 2022, and some
  insights into what to expect in H2 2022.
image:
  alt: ""
  url: /uploads/header-2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/header-2.webp
title: Retrieval Markets Rollup H1 2022
_template: blog_detail
---

**TL;DR:** The Retrieval Markets Working Group (RMWG) has been hard at work in 2022! This report gives a summary of its progress in the first half of 2022, and some insights into what to expect in H2 2022.

**Reading time:** Grab a cup of coffee and enjoy this rollup for 10 mins!

## The Filecoin Network

We will begin with a high-level diagram of the Filecoin Network, which will help to explain what follows.

![](/uploads/network-architecture.webp)

### Storage Flow

Starting at the top left, the Content Publisher (a.k.a Storage Client) speaks to deal services such as Estuary, NFT Storage and Filmine in order to store data. These services make deals with the Storage Providers (SPs), who in turn add the CIDs to the Indexer nodes. This flow is fully operational.

### Retrieval Flow

For the retrieval flow, the Retrieval Client contacts a Retrieval Provider (RP) to fetch some data. If the RP has the data in its cache, then it returns it. Else, it cache-misses to the SPs, or currently to the IPFS Gateway while we work on reliable retrievals from SPs. This flow is under development.

## RMWG Topics

With the network diagram in mind, we can look at each of the topics from H1 2022.

![](/uploads/rm-topics.webp)

### Topic 1: Retrieval Provider Nodes

You can’t launch a retrieval network without building a retrieval provider node (RP). There have been a few different teams building RPs in 2022.

Firstly, Myel has built [Myel PoP](https://github.com/myelnet/pop) (Point of Presence). Before 2022, the team had built Myel PoP in Golang. In H1 2022, they rewrote it in Rust, to provide better safety when developing, and to provide compatibility with WASM and therefore with the browser. The Rust version of Myel PoP is not yet open-sourced but will be soon.

In H1 2022, Protocol Labs began work on the [Saturn network](https://www.notion.so/Filecoin-Saturn-efc122f123f344ff8ff0de6071954dba). This network has two levels of RPs, L1 caches and L2 caches. The [L1 cache node](https://github.com/filecoin-project/saturn-node) is the retrieval client’s entry point to the Saturn retrieval network. It uses Nginx under the hood. The [L2 cache nodes](https://github.com/filecoin-project/saturn-l2) sit as the next cache layer behind the L1s. L2s are designed to run on home computers in home networks, lowering the hardware requirements to join the wider Filecoin network. L2 is built with [libp2p](https://github.com/libp2p/go-libp2p), and written in Golang.

Two other teams have also been working on RPs in 2022. The Titan RP from New Web Group, which will be open-sourced soon, and the [FCR node](https://github.com/wcgcyx/fcr) from WCGCYX, which was open-sourced in the last week of H1 2022.

More on these networks below.

### Topic 2: Cryptoeconomics

The cryptoeconomics of retrieval is a huge topic and one in which we have made incremental progress in H1 2022. Essentially, this workstream aims to answer the following question:

`What incentivises a Retrieval Provider to join the Filecoin Network?`

#### The client pays directly for retrievals

The most simple way to answer this question is to enforce the retrieval client to pay an RP directly per retrieval. At the right price, this will bring RPs to market.

Myel has envisioned a retrieval network based on the assumption that the Retrieval Client will always pay directly for the retrieval.

![](/uploads/naive-retrieval.webp)

This approach makes sense in many cases, in particular, server-to-server retrievals. Some examples of these are

- Paying an index provider,
- Paying a reputation provider,
- An L1 cache paying an L2 cache,
- Potentially web3 browser retrievals (but this will require a paradigm shift from our current browser usage).

This pay-directly approach also has some advantages over retrievals subsidised by a third party. Firstly, each retrieval is a local exchange between two entities: an RC and an RP. This means, by the end of the exchange, both parties have received what they want and there is no need for further arbitration or bookkeeping. Secondly, the financial cost of the transaction to the RC prevents grieving, Sybil or DDOS attacks from the RC towards the RP.

#### The client doesn’t pay directly for retrievals

When the client doesn’t pay directly for retrievals, we must zoom out to the whole network architecture and figure out where the payments might come from.

![](/uploads/value-flow-simple.webp)

In this diagram, the green line indicates the flow of payment, and the white lines indicate the flow of data. If the RC is not paying directly for each retrieval, then the only other entity who will likely pay for data to be accelerated by RPs is the Content Publisher.

Therefore, any attempts to incentivise RPs to join the network must find a mechanism for payments to flow from Content Publishers to RPs.

A few teams are working on different solutions for this scenario where the client doesn’t pay directly for retrievals:

#### Saturn

![](/uploads/saturn-value-flow.webp)

In the Saturn network, each RP self-reports its retrievals to the Saturn orchestrator. The Saturn orchestrator then aggregates over those logs and will reward each RP according to their contribution.

In H1 2022, Saturn launched a private mainnet and is gathering these retrieval logs. In H2 2022, Saturn will make the mainnet public and also determine how much the payouts will be, related to each RP’s contribution.

The obvious issue with self-reporting is that it opens up some attack vectors.

![](/uploads/saturn-attack-vector.webp)

As you can see in the above diagram, an RP can collude with a Retrieval Client, who could fraudulently create thousands of “fake” retrievals to increase the number of logs. Equally, the RP could just send more “fake” logs to the logs endpoint. Or a more thoughtful attack might spin up thousands of RCs and make requests to an RP that they manage.

These attack vectors are well noted; the Saturn team will work with the CryptoEconLab in H2 2022 on a fraud detection module to analyse the Saturn retrieval logs.

#### Titan

New Web Group is working on a retrieval network called Titan Ultra. The team has opted for a different approach from Saturn for proving contributions in the network. In the Titan network, there are validator nodes who perform retrieval tests against the RPs and report these tests back to an (initially) centralised orchestrator.

![](/uploads/titan-architecture.webp)

In this way, it is more difficult for the RPs to act fraudulently in the network as they need to continue providing a good service in case they are tested by the validators. This approach of network measurement is similar to the approach taken by Meson Network, [Media Network](https://media.network), [Theta](https://www.thetatoken.org/), and the [Storage Metrics DAO](https://cryptonet.org/projects/storage-metrics-dao) envisaged by CryptoNetLab.

The Titan network undertook an initial research grant between January and April 2022 and are now working on a follow-on grant to deploy a PoC version of the Titan Ultra network, which will land in Q3 2022.

#### From Proofs to Payments

Regardless of the way in which an RP proves its contribution to the network, all the networks then face the challenge of determining how to manage payouts to RPs based on these proofs. We will see progress on this step in H2 2022.

_Please check out_ [_this video_](https://www.youtube.com/watch?v=tyXwki8cBlg) _and_ [_this video_](https://www.youtube.com/watch?v=joSrArY2DaM&t=14129s) _to hear talks about the Cryptoeconomics of Retrieval._

#### Retrieval Pinning

Beyond payment systems and market creation, a system of penalisation for missed retrievals is the other way to incentivise RPs to provide a reliable service. The project Retrieval Pinning by [CryptoNet](https://cryptonet.org) implements such a system. The two key ingredients are a smart contract and a referee network. The smart contract allows a client and a provider to agree on a “retrievability deal” for a given CID. When the deal is signed, collateral from the provider is locked in the contract. The referees are trusted to retrieve the file from the provider and to activate the smart contract and “slash” them for bad service (i.e. the collateral is lost for the provider).

### Topic 3: Payment Channels

The first half of 2022 has seen lots of progress in the payment channel workstream. [Magmo](https://magmo.com/) has been working on a grant to build [go-nitro](https://github.com/statechannels/go-nitro), a client for multi-hop payment channels in the Filecoin Network. Magmo finished its [initial grant](https://github.com/filecoin-project/devgrants/issues/348) at the end of June 2022. In July 2022, Magmo will begin a follow-up grant to productionize go-nitro, as well as joining the FVM Foundry in order to begin the work on the on-chain component of go-nitro.

![](/uploads/magmo-diagram.webp)

In short, go-nitro is focussed on the moving from the diagram on the left to the one on the right. On the left, when an RC wants to fetch from an SP, they must set up a pairwise payment channel, which is an on-chain transaction. This means we have a huge number of payment channels and every new SP from whom an RC wants to fetch data will require an additional payment channel.

On the right, we envisage a set up where RCs and SPs create a one-off payment channel with their favourite “Hop Hub” (a.k.a. payment channel provider). The hop hubs then all have payment channels with each other. From this setup, we are able to set up an off-chain virtual channel between the RC and the SP. After making this virtual payment, we can reconcile the payment by shifting payments around the three collateralised payment channels. This dramatically reduces the number of on-chain payment channels and results in no on-chain transactions before a payment to a new SP.

Separately, WCGCYX has continued to work on [FCR](https://github.com/wcgcyx/fcr), a proxy payment and retrieval network. The idea here is that if an RP does not have a file, it can ask its neighbours for the file and so on recursively. When the file is located the file can be returned to the client and then the payment channels between all the intermediary providers can be used to proxy the payment, with each provider taking a small cut along the way. We are looking for a team to take on the great work already begun on FCR.

### Topic 4: Reputation Systems

In April 2022, Ken Labs completed a grant to build Pando, an off-chain verifiable data store for network data and metadata.

Ken Labs completed the first grant in March 2022 and immediately moved onto a follow-on grant to integrate Pando with services such as Dealbot, Filecoin Green, Auto-retrieve and others. This follow-on grant will also see Ken Labs build a monitoring system and web UI for Pando. The follow-on grant lasts until September 2022.

Additionally, reputation is closely linked to the cryptoeconomics topic above, where we described how an RP might prove its network contribution to an orchestrator or a validator. The data concerning each of these retrieval tests can be used to form a reputation around SPs and RPs. The CryptoNetLab are looking into this with their [Retrievability Oracle](https://cryptonet.org/projects/data-retrievability) initiative.

### Topic 5: Indexing

#### The Indexer

In March 2022, the Protocol Lab Data Systems team shipped the [indexer](http://filecoin.io/blog/posts/introducing-the-network-indexer). The indexer stores a mapping of CIDs to which SPs are storing them. It is already able to scale to billions of records.

From the RMWG, both [Leeway Hertz](https://www.leewayhertz.com/) and Ken Labs are running an Indexer node and are exploring what else they could build around the indexer relating to tooling and testing.

#### Content Indexing

Between January and March 2022, [ChainSafe](https://chainsafe.io) worked on a research grant to look into content-indexing the Filecoin Network. Although progress was made and [written up](https://hackmd.io/@cilOhZOYSdepMrS71Goxqg/H1CCiPfy9), the decision was made that it was too premature to do content indexing, and we should wait until retrievals from RPs or SPs are more performant and reliable.

### Topic 6: Data transport and transfer protocols

Between January and March 2022, the Myel team worked on a grant to build [JS-graphsync](https://github.com/myelnet/js-graphsync). Between April and June 2022, the Myel team then worked on a grant build to rust-graphsync. This is still closed sourced but will be open sourced soon. The creation of Graphsync in both of these languages provides a crucial building block to both the JS and Rust IPFS and Filecoin stacks.

Between April and June 2022, ChainSafe worked on a WebRTC research [grant](https://docs.google.com/document/d/1Cyo2zjcuk9m39PVhmzGypoZ6cRi8rpUiRRXaFJKYoJo/edit?usp=sharing) to ascertain how well the WebRTC set of protocols work on different browsers. They are writing up their findings to be shared at the end of June 2022.

Additionally, both Titan and Myel performed benchmarking tests on retrievals from a provider behind a NAT in a home network. In both cases, the teams found that the performance is not ideal and multi-threaded retrievals may be the best route forward.

### Topic 7: Browser Retrievals

The Saturn and Myel teams are the two who have spent the most time considering browser retrievals in H1 2022.

Between March and June 2022, the Saturn team built a [service worker](https://github.com/filecoin-project/retrieval-client) that provides incremental verification of a CAR file. This is because a browser must be able to verify the file it is retrieving from a decentralised network, as it has no implicit trust in the server from which it is fetching datas from on initial connection.

Throughout H1 2022, The Myel team has looked into running a Myel POP node in a service worker, as well as in a browser extension. They rewrote their Myel PoP node in Rust in order to have browser compatibility following compilation to WASM.

### Topic 8: Network Monitoring

Between February and June 2022, Leeway Hertz has been working on a Web3 CDN Comparison Dashboard. The team has also written up [an explainer](https://docs.google.com/document/d/1rO_P01eRzvPFv6rbPrbG3WjWfbwzr9Ri/edit?usp=sharing&ouid=110406114636506222356&rtpof=true&sd=true) of the dashboard. Work continues on this dashboard in two directions.

1. Bring more Web3 CDNs into the dashboard.
2. Deploy more retrieval bots, who make retrievals from various locations around the globe.

## Dive in to the RMWG

There are a few places you can find lots more information on the work of the RMWG.

Between February and April 2022, [Onda Studio](https://www.ondastudio.co/) worked on a new website for the RMWG [https://retrieval.market](https://retrieval.market "https://retrieval.market"). On this page, you can find links to all the teams, projects and available opportunities.

Another great place to find information is the [Retrieval Markets Notion folder](https://www.notion.so/Retrieval-Markets-765a9388b86646f38f7a03ee90c9c6c4) that we’ve updated on a weekly basis since the beginning of 2022.

You can also find RM Demo Day recordings on our [Youtube channel](https://www.youtube.com/playlist?list=PL_0VrY55uV19f5zh5ahk10GjlwTV8eEf0), with new content every few weeks throughout H1 2022.

We are always looking for more teams to get involved so please reach out if this is of interest.

**_Looking forward to H2 2022!_**
