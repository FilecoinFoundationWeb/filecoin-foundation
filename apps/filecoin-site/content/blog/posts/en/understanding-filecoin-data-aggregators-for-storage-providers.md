---
aliases: []
author: ""
categories: []
date: "2022-06-01T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  A look at different tools and common metrics that are taken into account for
  Storage Provider operations on the Filecoin Network
image:
  alt: ""
  url: /uploads/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
main_feature_inverted: false
related_article_1: content/blog/posts/a-deep-dive-into-the-storage-provider-ecosystem.en.md
related_article_2: content/blog/posts/why-become-a-filecoin-storage-provider.en.md
related_article_3: ""
share_image: /uploads/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
title: Understanding Filecoin Data Aggregators for Storage Providers
_template: blog_detail
---

The Filecoin ecosystem has an expansive set of tools that are designed to provide accurate information about the network and let participants be active in more effective ways. Many of these are independently developed and maintained by the community and serve the specific needs of different components of the Filecoin island economy.

For Storage Providers, analytics and data aggregation are important resources. They allow SPs to make important decisions around their competitive position in the data storage marketplace, and gauge current client preferences as well as check in on gas fees and the overall status of the network.

## Common Metrics

While there are many resources available that provide specific information, there are common metrics that exist across the board. Let’s take a look at what some of these standard metrics mean:

**Total Storage Power:** The sum of all the available quality adjusted storage space on the network.

**Storage Providers on Chain:** The number of SPs who are currently active and providing storage power on the network.

**24-hour Average Block Reward:** The average FIL value in the last 24 hours expressed as the ratio of total block rewards corresponding to the adjusted storage power.

**Base Fee:** The real-time rate of FIL charged and burned for using the Filecoin Network.

**Total Pledged Collateral:** The total amount of FIL pledged by SPs that serves as a guarantee of their committed capacity.

**Average Block Time:** The average time between mining blocks on the Filecoin Network in the last 24 hours.

**Block Height:** The number of blocks that have been mined on the network.

## A Look at Different Data Aggregators

Aside from these common metrics, every analytics tool and data aggregator can also be more granular and include more specific information. Some of the options available to SPs are:

Filecoin Stats: Built on the Grafana open-source analytics and visualization application, this basic tool takes a look at all the main data points including Total Storage Power, Miners on Chain, Gas Fees, and a list of the current Top SPs.

[Filecoin Reputation System](https://filrep.io/): Filecoin is designed so that every interaction on the network is registered on-chain, allowing for the radical transparency of its participants. For SPs, this means that important information around their business practices can be tracked to inform client decisions for storage deals. This includes their committed capacity and average storage deal price as well as their renewable energy consumption. The aggregate of this information builds a useful picture of each SP’s reputation across the network.

[Filecoin Network Health Dashboard](https://dashboard.starboard.ventures/): This tool offers a more detailed look into certain metrics of the Filecoin Network that might be of special interest to SPs. Some of these include a Sector Onboarding Breakdown by Method, Average Gas Cost of Storage Deal Publishing, and different Daily Active Deal breakdowns. The dashboard is built and maintained by Starboard Ventures, a team focused on Web3 data economies and network analytics.

[Filecoin Storage Provider Reputation Dashboard](https://dashboard.starboard.ventures/dashboard): Similar to the Filecoin Reputation System, this tool is Starboard Ventures’ take on a reputation aggregator for SPs. Besides information on individual SP deals and retrievals, the dashboard also provides a look into interesting metrics such as their Capacity Growth, Gas Efficiency, and Storage Reliability. All this information is taken into consideration to determine an SP’s total score. Starboard also provides a comparison tool for evaluating different SPs side by side.

[Filscan](https://filscan.io/): All the basic data about the Filecoin Network is available on Filscan. However, this network browser also provides important statistics such as a global SP map, Base Fee Variations for gas, and FIL allocation across the network. More importantly for SPs, Filscan counts on a dedicated Storage Provider section for its analytics tools as well as a calculator for determining storage rewards.

[Filfox](https://filfox.info/en): This mobile-friendly network explorer provides a Network Overview of the Filecoin blockchain as well as other common metrics such as SP rankings, gas stats, and a deal list. It acts as an easy-to-use, one-stop platform for Filecoin data services.

Filscout: IPFS Union’s tool provides detailed information and visualizations on important aspects of the Filecoin Network. It expands on other aggregators by including an Orphan Block List and a record of Large Amount Transfers as well as statistics on Gas Cost Trends and a FIL Circulation Analysis.

Be sure to get familiar with these tools as you start or continue on your journey as a Filecoin Storage Provider. For more information on how these tools are applied, read through a deep dive into the SP [ecosystem](https://filecoin.io/blog/posts/a-deep-dive-into-the-storage-provider-ecosystem/) or explore the [economics](https://filecoin.io/blog/posts/the-economics-of-storage-providers/) of SPs.
