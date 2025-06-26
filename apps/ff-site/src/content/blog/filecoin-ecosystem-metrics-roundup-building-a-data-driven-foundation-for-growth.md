---
title: "Filecoin Ecosystem Metrics Roundup: Building a Data-Driven Foundation
  for Growth"
created-on: 2025-06-26T16:40:00.000Z
updated-on: 2025-06-26T16:40:00.000Z
published-on: 2025-06-26T16:40:00.000Z
category: reports
description: Welcome to the inaugural edition of the Filecoin Ecosystem Metrics
  Roundup, a monthly series designed to align our community around the metrics
  that matter most for sustainable ecosystem growth.
seo:
  description: Welcome to the inaugural edition of the Filecoin Ecosystem Metrics
    Roundup, a monthly series designed to align our community around the metrics
    that matter most for sustainable ecosystem growth.
---
Welcome to the inaugural edition of the Filecoin Ecosystem Metrics Roundup, a monthly series designed to align our community around the metrics that matter most for sustainable ecosystem growth. This series will focus on metrics education, analysis, and optimization to drive data-informed decision making across the Filecoin ecosystem. The goal is to create transparency around key contributors to ecosystem growth, propose actionable next steps, and establish a shared understanding of where our ecosystem stands and where it's headed.

## **The Power of Data-Driven Decision Making**

Before diving into specific metrics, it's crucial to understand why enhancing our data-driven approach matters for the Filecoin ecosystem. Data reporting / analysis in any ecosystem distributes knowledge, drives alignment, cultivates transparency, increases velocity of execution, and supports better decision making.  

The Filecoin ecosystem has reached a critical inflection point where, having successfully bootstrapped supply, the network’s focus has shifted to client demand generation and real-world adoption. This transition requires a more sophisticated approach to metrics that goes beyond simple growth numbers to fully understand the underlying health and sustainability of the network. Below are the guiding goals this blog series will focus on:

* Increase revenue from paid storage deals 
* Increase the number of happy Filecoin clients
* Optimize in-network service activity and value accrual to the Filecoin economy 

## **[The Four Core Metrics](https://github.com/davidgasquez/filecoin-data-portal/issues/128) of Filecoin Ecosystem Health**

After extensive analysis and community input, we've identified four core metrics that best capture the essential dynamics of the Filecoin ecosystem. These metrics provide a comprehensive view of network growth, client satisfaction, revenue generation, and overall economic activity.

## **1. Daily Data Onboarding (Raw PiBs)**

* Daily data onboarding provides the best proxy for actual data storage activity. This metric tracks the daily amount of raw data being onboarded to the Filecoin network, measured in pebibytes (PiBs

The data originates from the [Spacescope API](https://docs.spacescope.io/) and reflects trends in meaningful network usage

## **2. Number of Clients with More Than 1TiB Active Data**

* This metric serves as a proxy for client engagement and satisfaction.
* This metric counts unique client IDs that maintain more than one tebibyte of active data on the network.  1 TiB has been chosen as a baseline as it covers most of the clients that interact with the protocol while removing the noisy ones. The calculation identifies deals that are active at any point in time by ensuring the sector has started and hasn't yet ended or been slashed. 
* This data comes from the [State Market Deals tables in Lily BigQuery](https://lily.starboard.ventures/data/actors/#storage-market-actor).

## **3. Total FIL in Paid Deals**

* This metric exclusively tracks storage deals with a storage cost greater than 0.001 FIL, providing a clear indicator of real revenue generation within the ecosystem. It reflects meaningful demand for decentralized storage and the ecosystem's capacity to generate revenue.
* This metric focuses on State Market Deals where storage providers set meaningful pricing for their services. 
* The price is extracted from the [storage_price_per_epoch](https://lily.starboard.ventures/data/actors/#storage-market-actor) value, converted from attoFIL to FIL, and calculated as [storage_price_per_epoch_fil](https://lily.starboard.ventures/data/actors/#storage-market-actor) multiplied by deal_length_epochs.
