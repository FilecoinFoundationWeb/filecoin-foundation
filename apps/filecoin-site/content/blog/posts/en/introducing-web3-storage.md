---
aliases:
  - >-
    /blog/posts/introducing-web3.storage-the-easiest-way-to-store-data-on-filecoin/
author: ""
categories:
  - updates
date: "2021-08-03T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Protocol Labs launches Web3.Storage, a free product for any developer to use
  Filecoin’s decentralized storage network in their applications.
image:
  alt: ""
  url: /uploads/frame-4.webp
main_feature_inverted: false
related_article_1: content/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/frame-4.webp
title: "Introducing Web3.Storage: A simple interface for Filecoin storage"
_template: blog_detail
---

Protocol Labs has launched [Web3.Storage](https://web3.storage/), a simple interface for developers to store and retrieve data from Filecoin’s decentralized storage network! Web3.Storage 一 which will remain free indefinitely 一 gives developers an easy avenue to build applications with redundant, decentralized storage and secure, content addressed data. By handling a ton of the complexity of interacting directly with decentralized storage, it is one of the best ways to integrate with Filecoin storage for all developers, from Web3 newbies to IPFS veterans! [**Try Web3.Storage**](https://web3.storage/)

Web3.Storage contains two main components:

- A service that stores data redundantly across multiple Filecoin miners and the public IPFS network, provides information about where the data is stored, and retrieves data by CID
- An HTTP endpoint, JavaScript client library, and web UI for interacting with the service

![Web3.Storage interface](/uploads/image-8.webp)

Here is a brief overview of these components.

## How Does It Work?

Behind the scenes, content that is sent to Web3.Storage is persistently [stored](https://web3.storage/) across a network of storage providers on Filecoin and pinned redundantly on IPFS. Together, Filecoin and IPFS endow content, data, and applications with [_content addressability_](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/) and [_persistence_](https://filecoin.io/blog/posts/ipfs-filecoin-and-content-persistence/)_. Content addressability_ enables immutable links that are based on the content itself (CIDs), rendering information impossible to change, edit, or compromise without leaving a traceable record of tampering. _Persistence_ ensures the data stored via this service will remain intact and available 一 backed by the robust [economic model](https://filecoin.io/blog/posts/introducing-the-filecoin-economy/) of Filecoin and verifiable proofs regarding the stored data’s integrity.

![Web3.Storage architecture](/uploads/image-5.webp)

More specifically, data sent to Web3.Storage immediately gets pinned to an IPFS Cluster of three geographically distributed nodes that Protocol Labs hosts. From there, it gets queued to be stored on the Filecoin network. While in this queue, it is packaged with other data in a Filecoin deal, and then stored with at least five geographically distributed miners. It also gets pinned to other IPFS pinning services like Pinata for additional redundancy and availability!

## Interacting with the Service

You may be wondering, how do I actually use Web3.Storage? It’s easy! Web3.Storage exposes an HTTP endpoint. You can use it to store data via the web UI or the JavaScript client library.

The web UI lets you create an account and API tokens, upload files, and see a list of all the files you’ve stored and where they’re stored.

The client library uses syntax similar to familiar web APIs like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [File](https://developer.mozilla.org/en-US/docs/Web/API/File). It lets you store data on Filecoin using just a few lines of code 一 just construct the client and use the _put()_ method.

![Example of storing data using put() method in-browser](/uploads/image-6.webp)

_Example of storing data using put() method in-browser._

Once data is sent to Web3.Storage, you can check its status using the query API. By passing a CID, you can get information about where this data is being persisted.

![Example output of query API](/uploads/image-7.webp)

_Example output of query API._

Once your data is stored, how can you retrieve it? The persistence of a given piece of data across the IPFS and Filecoin networks means that the data is accessible in a number of ways 一 through IPFS Gateways, your own IPFS node, Web3.Storage itself, or via Filecoin retrieval. Having multiple options provides flexibility for your application, and, regardless of the means of retrieval, anyone can request a given piece of data through its unique CID! Learn more about the different retrieval options in the Web3.Storage docs.

## Free storage by design

You must be thinking 一 how can this service be free? Though running Web3.Storage involves running some infrastructure, Protocol Labs can offer the service at no cost to users because Filecoin storage providers don’t charge Web3.Storage to store user data. This is due to the economics of the [Filecoin Plus](https://docs.filecoin.io/store/filecoin-plus/) mechanism, which rewards Filecoin storage providers handsomely when they store user data.

To dive briefly into the economics…

Filecoin storage providers commit their hard drive capacity to the Filecoin network, and earn significant block rewards for doing so. This translates into real world profits for storage providers, which incentivizes them to continue committing additional hard disk space to the Filecoin network.

However, when storage providers are storing data from Filecoin users, their likelihood of winning block rewards goes up by a big factor 一 10x! This is such a powerful incentive for Filecoin storage providers to store user data that they tend to be willing to offer free storage and retrieval services in order to get this block reward multiple.

As a result, most storage providers offer free storage and retrieval on Filecoin today and will continue to do so as long as block rewards continue to be a powerful incentive. This should be true for a very long time 一 for example, it is still the case that block rewards are powerful incentives for Bitcoin miners today.

![Free storage by design](/uploads/web3-storage-fil-plus-gif-1.gif)

## What’s next for Web3.Storage?

The Web3.Storage launch is exciting and it will iterate with all of you into an extremely easy to use interface for interacting with Filecoin and IPFS. Some of the planned features on the roadmap include support for DAGs (not just files), a fully documented HTTP API, support for the [IPFS pinning services API](https://ipfs.github.io/pinning-services-api-spec/), scoped auth tokens, and web-wallet based authentication, among others. If you have a feature you’d love to see in Web3.Storage, file an issue in the [GitHub repo](https://github.com/web3-storage/web3.storage)!

What are you waiting for? Get started with [Web3.Storage](http://web3.storage/) today, and join the community in the #web3-storage channel in [IPFS Discord](https://discord.gg/4zEkFVqwms) or [Filecoin Slack](https://app.slack.com/client/TEHTVS1L6/C027XP5BTGB/thread/G01KU7G441Y-1616053098.177800)!
