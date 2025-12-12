---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-01T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Boost replaces go-fil-markets with a better tool for storage and retrieval.
image:
  alt: ""
  url: >-
    /uploads/1386-blog-header-for-boost-project-announcement-on-blog-filecoin.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/1386-blog-header-for-boost-project-announcement-on-blog-filecoin.webp
title: >-
  Introducing Boost: New Capabilities for Markets Including HTTP transfers, Web
  UI, and More
_template: blog_detail
---

We’re excited to announce the release of Boost! A new, standalone replacement for the existing Lotus markets process is right around the corner. We’re kicking off pre release testing with Storage Providers this week, and are on track for a public launch **this April**.

So, what is Boost and what new features will it have? Boost is a tool for Storage Providers to manage data storage and retrievals on Filecoin. It replaces the go-fil-markets package in Lotus with a standalone binary that runs alongside a Lotus daemon and Lotus miner. Boost exposes libp2p interfaces for making storage and retrieval deals, a web interface for managing storage deals, and a graphql interface for accessing and updating real time deal information.

## Expanded storage deal capabilities

While Boost will be fully backwards compatible, we’re also introducing a new protocol for storage deals that includes support for specifying how you’d like the data to be transferred. Boost will be shipping with support for 2 new transfer protocols including HTTP and HTTP over libp2p. For users that have been making offline deals and transferring CAR files via services like S3, you’ll now be able to make a deal with Storage Providers running Boost and specify the url of your file directly, and Boost will retrieve it automatically!

## Simpler deal making for Storage Clients

To make proposing deals easier for Storage Clients, Boost will also ship with a lightweight client for making deals that can be pointed at public Filecoin API’s for on-chain operations, so there is no need to sync the Filecoin chain. The client that ships with Boost currently supports proposing a deal for http retrieval, as well as utilities for generating CAR files and commp. We are also working on updates to [Estuary](https://github.com/application-research/estuary) and [filclient](https://github.com/application-research/filclient), so they’ll be able to leverage the new Boost features at launch!

## An improved user experience for Storage Providers

In addition to overhauling the internals of how deals are processed, which we’ll cover in more depth in a future post, we also strove to improve the visibility and user experience for Storage Providers to manage their system. To showcase the expanded visibility, Boost ships with a WebUI that will give Storage Providers quick access to manage deals, view in progress data transfers, disk utilization, sealing pipelines and more! We’ll be sharing more walkthroughs and demos of the UI as we prepare for launch to showcase some of the key features available, so keep an eye out for more updates!

If you’re a Storage Provider running Lotus, you can get ready for Boost by ensuring you’ve [split your Lotus processes](https://lotus.filecoin.io/storage-providers/configure/split-markets-miners/). Boost will come with migration support for Providers that have already done this.

You can follow along with Boost as we prepare for launch in the #boost channel on [Filecoin Slack](https://filecoin.io/slack/), or on the [Boost GitHub discussion forum](https://github.com/filecoin-project/boost/discussions).
