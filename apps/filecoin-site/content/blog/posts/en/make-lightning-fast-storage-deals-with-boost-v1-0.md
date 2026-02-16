---
aliases: []
author: ""
categories:
  - updates
date: "2022-06-23T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Boost v1.0.0 has officially landed! Boost is a new, standalone replacement for
  the existing Lotus Markets process that enables you to get your data into
  Filecoin up to 20x faster, retry paused deals, watch deal transfer rates, see
  deal logs right from the new Web UI, and much more.
image:
  alt: ""
  url: /uploads/175128330-428270c0-6b0c-4fb5-8d0e-d93acce401d5.webp
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/introducing-boost-new-capabilities-for-markets-including-http-transfers-web-ui-and-more.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/175128330-428270c0-6b0c-4fb5-8d0e-d93acce401d5.webp
title: Make lightning fast storage deals with Boost v1.0
_template: blog_detail
---

[Boost v1.0.0](https://github.com/filecoin-project/boost/releases/tag/v1.0.0) has officially landed! Boost is a new, standalone replacement for the existing Lotus Markets process that enables you to get your data into Filecoin up to 20x faster, retry paused deals, watch deal transfer rates, see deal logs right from the new Web UI, and much more. In addition to new features, and improved reliability, making Boost standalone enables us to decouple from the Lotus release timelines, improving our time to release for Markets specific updates, so we can deliver improvements more often.

So, what’s different about Boost?

## A new version of the Storage Deal Proposal Protocol

Boost introduces the [v1.2.0 Storage Deal Proposal Protocol](https://boost.filecoin.io/boost-architecture/libp2p-protocols#propose-storage-deal-protocol) (SDPP) that enables Storage Clients to specify different transport types over which to transfer their data. The previous version of the protocol, v1.1.0, only had support for Graphsync, the default, and only, data transfer protocol on Filecoin today. Along with the v1.2.0 SDPP, Boost ships with support for HTTP, [libp2p-http](https://github.com/libp2p/go-libp2p-http), and Graphsync data transfer, giving storage clients more options to fit their particular needs. Boost still supports v1.1.0, so Storage Providers can upgrade today and still make deals with existing v1.1.0 clients.

For HTTP transfer, clients can host their CAR files on a public server and include that url in the deal proposal. Boost ships with a client and utility commands to make this process easier. You can take a look at the [tutorial on boost.filecoin.io](https://boost.filecoin.io/tutorials/how-to-store-files-with-boost-on-filecoin) for more information. For users of Textile’s Auctioneer, Bidbot [already released](https://github.com/textileio/bidbot/releases/tag/v0.1.14) support to automatically use HTTP transfers if Boost is available, otherwise it will fallback to the existing API. During [early testing](https://github.com/filecoin-project/boost/discussions/403) Storage Providers saw up to 20x data transfer speed improvements when leveraging the new Boost http client.

Storage clients, such as [Estuary](https://estuary.tech/), that still want to stream data over libp2p can now leverage the libp2p-http protocol, which provides a minimal libp2p protocol for transferring data. Estuary and the [filclient](https://github.com/application-research/filclient) library have also already been updated to leverage the new SDPP protocol with automatic fallback to v1.1.0.

## Why should Storage Providers upgrade

In addition to the new SDPP and data transfer protocols, Boost also includes an internal overhaul of how deals are managed, with an emphasis on idempotency, resiliency, and visibility. Only v1.2.0 deals currently go through the new deal state machine within Boost, while all v1.1.0 deals fallback to the legacy go-fil-markets code base, which we are slowly working to phase out within Boost.

**Better deal state transitions**

When we were redesigning the internals of deal management we wanted to improve the ability to retry recoverable errors in the deal making flow, whether it’s data transfer or not having enough funds allocated for collateral. Boost does this by tracking the last, good state of a deal and only making changes when a successful transition has happened. Errors are inevitable, so we want Boost to be resilient about recovering every deal that is recoverable.

**Improved visibility**

A recurring challenge we had with the existing Markets process was debugging and troubleshooting failures, as Storage Providers weren’t always easily able to get the information we needed to help us track down issues. With Boost we've been working to surface more of this data. Boost ships with a [GraphQL endpoint](https://boost.filecoin.io/graphql-api), that we leverage with the [Boost WebUI,](https://boost.filecoin.io/features#web-ui) to provide visibility into sealing pipelines, storage space, fund allocations, data transfer rates, deal logs, and more.

**Aggregators and tools are ready to leverage Boost today**

As mentioned above, Estuary and Bidbot have already released backward-compatible support for Boost, so you can start benefiting from Boost when using Estuary and Bidbot on v1.2.0 deals (and v.1.1.0 SDPP deals will continue to function as they had before).

[CID gravity](https://www.cidgravity.com/) has also been updated to work with Boost from day 1 and we’re looking forward to continuing our work with the team to expose additional parameters to help further improve the extensible control of deal making.

## What’s next for Boost

These updates are just the beginning. We’ve already begun work focused on the [scalability](https://github.com/filecoin-project/boost/discussions/555) of Boost to meet the large scale needs of Storage Providers for both storage and retrieval. We’re also looking at providing a standalone, http service to make retrieving full CAR files easier, as well as a [doctor command](https://github.com/filecoin-project/boost/issues/582) to help Storage Providers troubleshoot their systems more efficiently.

What would you like to see in Boost? Post your feedback and requests on the [Boost Discussion Board](https://github.com/filecoin-project/boost/discussions) to help shape the future direction of the project.
