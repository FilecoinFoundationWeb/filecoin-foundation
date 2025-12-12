---
aliases: []
author: Brenda Lee
categories:
  - updates
date: "2023-02-16T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Monitor your Boost processes with out of the box tooling and dashboards.
image:
  alt: ""
  url: /uploads/boost_1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/boost_1.webp
title: Boost Monitoring Stack
_template: blog_detail
---

Boost is a tool for Storage Providers to manage data onboarding and retrieval on the Filecoin network. It replaces the `go-fil-markets` package in lotus with a standalone binary that runs alongside a Lotus daemon and Lotus miner.

Boost exposes libp2p interfaces for making storage and retrieval deals, a web interface for managing storage deals, and a GraphQL interface for accessing and updating real-time deal information.

## **Monitor your Boost processes with out of the box tooling and dashboards**

Since the initial release of [Boost](https://boost.filecoin.io/) in mid June 2022, we have seen a big increase in the number of storage providers migrating to use Boost to manage storage deals. With the introduction of new ecosystem projects and programs, there is a high demand for additional storage and retrieval options from Filecoin. Based on feedback from the ecosystem, we have added booster-http and booster-bitswap, which enables storage providers to directly serve content to retrieval clients over additional data transfer protocols.

The introduction of these retrieval capabilities has added a number of new processes that run alongside the main Boost process. As a storage provider, it can be challenging to monitor the various Boost processes in additional to the other operational and management work. With this in mind, we are happy to share that we have built a monitoring stack for Boost which storage providers can use out of the box.

The monitoring stack includes the following:

- **Grafana** provides visualization tools and dashboards for all metrics and traces
- **Prometheus** collects metrics and powers dashboards in Grafana.
- **Tempo** collects traces and powers traces search in Grafana with Jaeger.

As a storage provider, you’ll be able to easily monitor memory usage, and additional insight for specific processes (such as success and failure for different retrieval requests).

![](/uploads/screenshot-2023-01-25-at-15-08-31.webp)

To get started, make sure you update to the latest release of Boost ([v1.5.0](https://github.com/filecoin-project/boost/releases/tag/v1.5.0)) to take advantage of the out of the box monitoring stack. You can follow instructions in the Boost documentation on [setting up a monitoring stack](https://boost.filecoin.io/tutorials/setting-up-a-monitoring-stack-for-boost).

You can stay up to date on Boost by following our [GitHub](https://github.com/filecoin-project/boost). Please use the [Boost Discussion Board](https://github.com/filecoin-project/boost/discussions) to provide feedback and requests to help shape the future direction of the project. Your input is helping make this a great service. We look forward to hearing from you!
