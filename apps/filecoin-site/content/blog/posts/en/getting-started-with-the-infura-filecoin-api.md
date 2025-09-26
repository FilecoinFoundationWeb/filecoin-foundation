---
aliases:
  - /blog/infura-api
author: ""
categories:
  - updates
  - events
date: "2021-01-19T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin nodes expose APIs that make it easy for developers to interact with
  and query the Filecoin blockchain. Learn how the Infura Filecoin API
  simplifies the process even further!
image:
  alt: ""
  url: /uploads/infura-header-1.webp
main_feature_inverted: true
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/infura-header.webp
title: Getting Started With the Infura Filecoin API
_template: blog_detail
---

_The following is a summary of a_ [_talk_](https://www.youtube.com/watch?v=prSByA1bQZk) _given by Tim Myers on October 22, 2020 during Filecoin Liftoff Week._

Filecoin node implementations expose APIs to provide developers a convenient way to interact with the Filecoin blockchain. These APIs allow developers to both query for information about the chain, as well as issue commands that instruct the node to execute transactions on the network.

While it is possible to interface directly with the nodes that expose these interfaces, maintaining a full node can be inconvenient, as blockchains can require large amount of storage space, and the nodes themselves must always be kept running to keep in sync with the network. This creates friction for developers that just need access to the API.

To help developers get around this issue, [Infura](https://infura.io/) has spent the last several years building out API proxies for a number of decentralized networks, including Ethereum, IPFS, and, as of Filecoin Liftoff Week, Filecoin! Infura run nodes on behalf of their users, directing API requests to those nodes behind the scenes. This reduces the infrastructure that developers need to maintain themselves, making it significantly easier to create services that build on top of those APIs!

![Infura Filecoin API Dashboard](https://filecoin.io/vintage/images/blog/infura.jpg)

You’ll need to register with Infura in order to access their Filecoin API. If you haven’t created an account yet, you can [sign up here](https://infura.io/register?&utm_source=infurablog&utm_medium=referral&utm_campaign=filecoin_api&utm_content=filecoin_api_blog). Once you’ve registered:

- Log into your [Infura Dashboard](https://infura.io/dashboard/filecoin?&utm_source=infurablog&utm_medium=referral&utm_campaign=filecoin_api&utm_content=filecoin_api_blog)
- Click the Filecoin icon in the navigation bar
- Click “Add Me to Waitlist”

In addition to proxying API requests, Infura provides users with the ability to restrict API access, via keys, to isolate individual projects. They’ve also compiled extensive and fully-detailed [documentation](https://docs.infura.io/infura/networks/filecoin) for their Filecoin API, in the form of an OpenAPI specification complete with sample requests and responses to help users get started.

Services like Infura’s empower developers across the Filecoin ecosystem, greatly reducing the friction involved in interfacing with the network. These tools make it easier than ever to leverage Filecoin as a platform, providing an accessible entrypoint into the ecosystem while freeing creators to focus on building out the next generation of storage services!
