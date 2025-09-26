---
aliases:
  - /blog/announcing-alphanet/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-09-25T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Yesterday, we launched the go-filecoin alphanet, go-filecoin release 0.5.6
  (right on schedule – well actually, a day early!). As we announced in our 2019
  Q2 & Q3 Update, this was our last major interim milestone before our upcoming
  testnet launch in December 2019.
image:
  alt: go-filecoin alphanet launch
  url: /uploads/alphanet-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-2019-q2-q3-update.en.md
related_article_2: content/blog/posts/announcing-lotus-our-first-alternate-filecoin-implementation.en.md
related_article_3: content/blog/posts/filecoin-testnet-is-live.en.md
share_image: /uploads/alphanet-english-social.webp
title: Announcing the go-filecoin alphanet
_template: blog_detail
---

Yesterday, we launched the **go-filecoin** alphanet, [**go-filecoin** release 0.5.6](https://github.com/filecoin-project/go-filecoin/releases/tag/0.5.6) ([right on schedule](https://filecoin.io/blog/update-2019-q2-q3/#1-launches-testnet-on-dec-11-mainnet-in-2020-q1) – well actually, a day early!). As we announced in our [2019 Q2 & Q3 Update](https://filecoin.io/blog/update-2019-q2-q3/), this was our last major interim milestone before our upcoming testnet launch in December 2019.

The **go-filecoin** alphanet integrates a number of significant protocol features, but perhaps one of the most important is that it is a _long-running network_. We [launched our first development networks (devnets)](https://filecoin.io/blog/opening-filecoin-project-repos/) earlier this year, but our devnets have not historically included the full machinery for seamless network upgrades. Therefore, whenever we wanted to release new go-filecoin functionality to one of our devnets, we had to trigger a hard network reset. Nodes that were using older go-filecoin versions could no longer connect to the devnets unless they downloaded the latest release and setup their nodes from scratch. Now, with the alphanet launch, we have implemented much of the functionality for seamless network upgrades. While we may still perform hard network resets when necessary, we won’t be required to in order to expose new features to network nodes. This is a major improvement in the realism of our early networks and in the user experience for those who are willing to test them out.

The alphanet release also includes the implementation of several important protocol features, such as:

- Our updated _Proof-of-Spacetime_ (PoSt) construction – Rational PoSt
- Improvements to our Expected Consensus (EC) algorithm implementation
- Drastically faster chainsync, using [Graphsync](https://github.com/ipfs/go-graphsync)’s IPLD DAG-traversal protocol
- New [HTTP API design](https://github.com/filecoin-project/filecoin-http-api) (still WIP)
- And more!

A more detailed description of the major changes in this release can be found in our [go-filecoin CHANGELOG](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md). (Note: At the time of this writing, the update for release 0.5.6, i.e. the initial alphanet release, is still an [open PR in the go-filecoin repo](https://github.com/filecoin-project/go-filecoin/pull/3490/files). It should merge shortly.)

Now is as good a time as any to begin testing out the Filecoin protocol implementation and networks. Here are a few pointers for how to get started:

- Follow our [getting started instructions](https://docs.filecoin.io/get-started/) on our new documentation site to download the latest release and connect to the alphanet.
- Join our [community chat](https://github.com/filecoin-project/community#chat) to ask questions, chat with others in the community, and collaborate on projects
- If you are a developer who would like to build projects for the Filecoin ecosystem, please reach out on our [discussion forum](https://github.com/orgs/filecoin-project/projects?query=is%3Aopen) to add a project to the Filecoin Shipyard and/or apply for a [Filecoin dev grant](https://filecoin.io/grants/). The deadline for this wave of grant applications is on September 30, 11:59PM PDT.

We’re excited for you to connect to the Filecoin alphanet. Onward!
