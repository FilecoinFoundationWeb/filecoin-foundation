---
aliases: []
author: ""
categories:
  - updates
date: "2021-09-02T08:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Estuary is open-source software allowing simple sending of public data to the
  Filecoin network to be retrieved from anywhere.
image:
  alt: Taking a Look at Estuary
  url: /uploads/fil-blog-2021-estuary-1268x635.webp
main_feature_inverted: false
related_article_1: content/blog/posts/decentralized-storage-estuary-web3.storage-and-nft.storage.en.md
related_article_2: content/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts.en.md
related_article_3: content/blog/posts/introducing-web3-storage.en.md
share_image: /uploads/fil-blog-2021-estuary-1268x635.webp
title: Taking a Look at Estuary
_template: blog_detail
---

_Estuary is open-source software allowing simple sending of public data to the Filecoin network to be retrieved from anywhere._

## What's Estuary?

Estuary is a way to send a lot of publicly-licensed data to the Filecoin network so that it can be retrieved for public good. An open-source project conceptualized by Protocol Labs’ Application Research Group (ARG), it makes Filecoin storage as easy as uploading a file. New users are not required to have a technical background or an understanding of the underlying technology to use Filecoin.

Any software or script can use the API of the [Estuary node hosted by ARG](https://estuary.tech) to store public data on the decentralized Filecoin network, which can then be retrieved from anywhere in the world from any machine. As of August this year, users have uploaded over six million files and have successfully performed over eleven thousand storage deals.

Data can be stored on either the Estuary node that ARG operates or on any Estuary node spun up by a developer or network operator. But what’s an Estuary node?

Estuary nodes provide the capability to pin CIDs to IPFS following the IPFS pinning standard, as well as make automated storage deals against a curated list of storage providers participating in the Filecoin network, two essential components of decentralized storage.

Each Estuary node addresses large scale data transfer and retrieval with a simple solution in which no additional infrastructure is needed by users outside of reliable hardware.

## Background

The Application Research Group saw a need for an open-source, end-to-end stack that demonstrated how Filecoin worked end-to-end at the application layer. Providing an example for the Filecoin ecosystem was seen as important, so developers new to Filecoin could have a working solution to utilize.

Every time a file is uploaded to an Estuary node, these steps take place:

A proposal receipt is provided to confirm the user wants to make a storage deal.

Each deal is proposed for at least a year (in _fil-epochs_), and becomes a verified client deal

To provide a high level of redundancy and guarantee, the deal algorithm will continue to make deals until six storage deals are active, sealed, and on-chain the Filecoin network with six different storage providers on the Filecoin network.

A Filecoin storage deal receipt is provided with duration, storage provider information, information about which providers are preserving the data, and how to access or retrieve the data.

## Estuary vs Cloud Storage

Traditional cloud storage stores information around the world in data centers. This system is designed with some servers at these data centers acting as master control servers, and some others are just purely for storage. These servers are all linked together and, depending upon storage requirements, usage is billed accordingly. Trust is required in whether the company operates the data center transparently and honestly with how data is handled.

Estuary gives people an easy way to use Filecoin. Filecoin is a P2P, distributed storage network that stores files with open source code and built-in economic incentives to ensure files are reliably stored over a long period of time. The data stored on Filecoin is interoperable, verifiable, and provable at any time.

In Filecoin, users pay to store their files on storage providers. Storage providers are computers responsible for storing data and proving that they stored the data. People anywhere in the world can store their files on the Filecoin network today.

One of the major differences between Filecoin and traditional cloud storage is that available storage and the price of that storage is not controlled by any single company. Instead, Filecoin facilitates open markets for storing and retrieving files that anyone can participate in.

Furthermore, all of the mechanics of these features are completely open source, something that may not be true with a traditional cloud storage provider. There are thousands of providers in the Filecon ecosystem today and more participants are onboarding every year.

## Collaborations

Estuary is open-source software and anyone can take anything anytime. Some existing ecosystem collaborators include [Textile](https://www.textile.io/) ([Miner Index](https://docs.textile.io/filecoin/miner-index/)), Fission (Filecoin integration for paying your own deals), QRI and many others in the overall Filecoin storage provider community. Individual contributors are also growing fast, and currently there are more than ten open-source repositories.

## Getting Started

{{< youtube id="AHAMHbpioGw" title="Estuary: Getting Started" >}}

If you have a meaningful public data set and want to use [estuary.tech](https://estuary.tech) to make Filecoin storage deals, the first thing to do is to open an account, and to do that you will need to request an invitation. All of this can be done at the Estuary website.

The invitation request process is in place to ensure that a proposed dataset is vetted to meet a certain standard of quality. After requesting an invitation, the Estuary team will send you an invite key once the aforementioned vetting process is completed.

After you set up an account with the invite key, you’ll be able to either immediately start uploading files to ARG’s hosted Estuary node through its graphic user interface, or you can generate API keys to directly access Estuary with code. For those who want to spin up their own node, Estuary contains a native admin dashboard.

Estuary also runs its own analysis of the Filecoin network along with performance metrics of storage providers. As of the writing of this post, Estuary has over 11K verified deals with about 14.6 tebibytes (TiB) of persistent pinned data and 74 tebibytes of data backed up on Filecoin.

Currently, all of the data that is currently uploaded via HTTP or CURL hits an Estuary node in North America but we hope to see more locations very soon.

## Documentation

Estuary offers robust, complete documentation at [docs.estuary.tech](https://github.com/application-research/estuary "Estuary documentation"). The documentation site offers sample code that can be live edited. If you have already generated an API key, you can even plug that into the sample code to see how it works with every API method that a hosted Estuary node provides..

You can access nearly all of Estuary’s website features through the API. Estuary’s documentation site will continue to grow with the needs of the community. If you have comments or questions, please use the feedback form on the documentation.

## Considerations

The ARG’s Estuary node is designed to store data that is publicly licensed and must meet a certain level of quality determined by the ARG. The node could potentially be used for private data but any encryption of data has to be done by the user, as Estuary itself is not responsible for performing any encryption.

## Conclusion

The Filecoin network is a breakthrough in decentralized storage network infrastructure and protocols. There are many storage solutions on the internet but few are as advanced as Filecoin with regards to decentralization and transparency.

Now, with Estuary, there is an open-source stack for the community to use freely for storing public data on Filecoin. If you’re interested in contributing, reach out on [Twitter at @aresearchgroup](https://twitter.com/aresearchgroup).
