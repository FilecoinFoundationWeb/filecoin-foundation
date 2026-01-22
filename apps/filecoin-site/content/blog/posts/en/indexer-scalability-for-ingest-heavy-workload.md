---
aliases: []
author: Andrew Gillis
categories:
  - updates
date: "2023-04-06T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt:
  This post describes a simple strategy for spreading the ingest-heavy indexing
  workload over a pool of indexer nodes, while allowing the pool to grow as needed.
image:
  alt: ""
  url: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
main_feature_inverted: false
related_article_1: content/blog/posts/extended-providers-updating-ipni-without-re-advertising.en.md
related_article_2: content/blog/posts/how-to-be-an-index-provider.en.md
related_article_3: content/blog/posts/how-does-the-network-indexer-work.en.md
share_image: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
title: Indexer Scalability for Ingest-heavy Workload
---

The eventual goal for indexer scale is 10^{15} indexes. This is not bytes of data stored, but rather the number of indexes stored. An index is a map of a CID to content provider data. The actual amount of data is much greater. Currently, we handle around 10^{12} indexes, and over that time we will progress toward the eventual scale goal in a number of steps.

The majority of indexing work is currently dominated by ingesting index data. The incoming data can be more than a single indexer can handle, both in rate and quantity, and is rapidly increasing. So, the most immediate, need to progress toward the scaling goal, is to handle the increasing ingestion load.

## Approach: A Simple Strategy to Handle Index Ingestion

### Data Ingestion

Index data ingestion happens when an indexer receives an “announce” message announcing the availability of new index data advertisement(s) from a publisher, and in response, the indexer subsequently retrieves all index data that has not already been retrieved from the publisher. As the number of publishers increases, at some point a single indexer node will not be able to keep up with the rate at which new index data is published, and may not have sufficient storage on the node to store it all.

### Ingestion Work Distribution

Indexer scaling to handle the ingestion workload is based on a simple strategy of distributing ingestion over a pool of indexers, in a way that allows nodes to be added as additional capacity is required, without needing to move data around to rebalance storage. This starts by assigning different content _publishers_ to different indexer nodes so that each node handles a separate portion of the ingestion work. This is done using a separate, lightweight, Assigner Service that is not part of the critical index ingestion path.

When an indexer reaches its configured storage limit, it stops ingesting new index data, and other indexers in the pool resume ingesting data from the publishers assigned to the full indexer. More indexer nodes are added to the pool as more storage capacity and ingestion work distribution are needed.

The three main components of this scalability strategy are:

- **Assigner Service**: service that assigns publishers to indexers
- **Indexer Frozen Mode**: indexer operating mode where no new content is indexed
- **Handoff of publisher assignments**: re-assignment of publishers from frozen indexer, to active indexers, to resume indexing where frozen indexer stopped

This post will summarize these components. More detailed information is available in the [design document](https://github.com/ipni/storetheindex#indexer-scaling-design-for-ingest-heavy-workload) and in the [design presentation slides](https://docs.google.com/presentation/d/1oPvVNoR5y2CMeo-3ujjz8IsHhIgk8ZqFNMBV9sZ5fSA/edit#slide=id.g179232d2b4e_0_146).

### Pros and Cons of Scaling Strategy

**Pros:**

- Less syncing: no need for every indexer to sync with every publisher
- Metadata not duplicated to multiple indexers (as with key-sharding): metadata only on indexers handling provider.
- No data is shared between indexers. They each manage their own publishers’ chains.
- No need to read advertisements only to check provider (as compared with provider sharding)
- Indexers can have different storage capacities.
- No need for consensus.
- Ingestion work can be redistributed without having to move data between indexers.

**Cons:**

- Uneven distribution: some publishers will index more data than others
- Scatter/gather queries are required: query duplicated to all indexers, responses merged into a single response to the client.
- Provider changing publisher can cause duplicate indexing (as opposed to provider sharding).
- Adding indexers has no effect until an existing indexer reaches the storage limit.

The overall advantage of this approach is that its implementation is relatively simple while still removing limits to ingestion scalability.

## Assigner Service

The Assigner Service (AS) is responsible for assigning publishers to the indexers in its configured pool of indexers. The AS runs as a single instance, for a pool of indexers, on the same network as the indexers it manages assignments for. An indexer may only be a member of one Assigner’s indexer pool.

In addition to assigning new publishers to indexers, the AS also detects when indexers have gone into “frozen” mode, and is responsible for re-assigning the publishers from a frozen indexer to non-frozen indexers. The AS also republishes direct HTTP announcements over gossip pubsub, so that all indexers in the pool can receive them.

The AS is intended for use within a single private deployment due to a number of assumptions: that assignments can be made to any indexer, that the admin API of all indexers is on a private network or similarly protected, and that there is no established means or protocol for different parties to manage nodes being added to or removed from the pool.

![](/uploads/assigner.webp)

### Assigning a Publisher to an Indexer

An AS listens for gossip-sub and direct HTTP messages announcing the availability of new advertisements. It reads the publisher from each message and determines if the publisher is already assigned to the required indexers. If not, the AS selects the indexer with the fewest assignments and assigns the publisher to that indexer. After assignment, indexers receive announcements from the publishers and handle ingestion themselves.

The AS handles indexers going offline in a way that prevents over-assignment within the indexer pool. The AS also supports [configuration](https://pkg.go.dev/github.com/ipni/storetheindex@v0.5.7/assigner/config#Indexer) options for assigning specific publishers to specific indexers.

### Additional Reading

- [No Persisted Assignment State](https://github.com/ipni/storetheindex#no-persisted-assignment-state) means the indexer can be stopped and started at any time
- [An Indexer Pool](https://github.com/ipni/storetheindex#indexer-pool) is a set of indexer nodes at a single deployment
- [Assignment Replication](https://github.com/ipni/storetheindex#replication) assigns publishers to multiple indexers

## Indexer Frozen Mode

When an indexer’s storage usage reaches its configured limit, [FreezeAtPercent](<[https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer](https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer "https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer")>), the indexer automatically enters “frozen” mode. This is a mode of operation where the indexer does not store any new index data, but still processes updates and deletions of index data. A frozen indexer will not accept any new publisher assignments. Internally the indexer tracks where in each ad chain it has read for the purpose of ingesting update and removal ads. The indexer continues to respond to any queries for index data.

An indexer can also be manually frozen using its admin API to request a freeze. This may be done to stop ingestion until the indexer’s storage capacity is increased, or if using an AS, so that continued indexing can be taken over by other indexer nodes.

### Additional Reading

- [Disk Usage Monitoring](https://github.com/ipni/storetheindex#disk-usage-monitoring) is done by each indexer
- [Freeze capability does not depend on AS](https://github.com/ipni/storetheindex#freeze-independent-of-assigner)
- [Unfreeze capability](https://github.com/ipni/storetheindex#unfreeze) allows indexer to resume indexing

## Publisher Handoff

The AS periodically polls indexers, and if it sees that an indexer has become frozen, then the AS does a handoff for each publisher that is assigned to the frozen indexer. A handoff is where a publisher is re-assigned to another indexer in such a way that the indexing continues on the active indexer where it left off on the frozen indexer. During handoff, the active indexer also gets provider and extended provider information from the frozen indexer.

The AS makes the decision about to which indexers to handoff a publisher using the same logic as when deciding where to assign a new publisher. This is done separately for each publisher being handed off, resulting in the frozen indexer’s assignments being redistributed over the available indexers in the pool.

### Additional Reading

- [The AS is able to resume incomplete handoff](https://github.com/ipni/storetheindex#resuming-incomplete-handoff)
- [Publisher data is spread across frozen and active indexers](https://github.com/ipni/storetheindex#publisher-data-spread-across-frozen-and-active-indexers)

## Setting up Indexer Pool with Assigner Service

The steps to deploying an indexer pool with an assigner service are described [on GitHub](https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#setting-up-indexer-pool-with-assigner-service). To summarize these steps:

- [Deploy Indexers](https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#deploy-indexers)
- [Deploy Assigner Service](https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#deploy-assigner-service)
- [Deploy additional Indexers as needed](https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#example-assigner-service-configuration)

A [sample AS configuration](https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#example-assigner-service-configuration) file is also provided.
