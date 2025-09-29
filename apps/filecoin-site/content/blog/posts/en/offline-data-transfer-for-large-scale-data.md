---
aliases: []
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-08T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As we discussed in our cryptoeconomics constructions blog post, sometimes when
  you’re dealing with huge troves of data, it’s difficult (expensive and
  time-consuming) to transfer those files over the internet for safekeeping. For
  petabyte-scale datasets and larger, the most sensible solutions often involve
  shipping data on hard drives. The Filecoin protocol and project has tools and
  structures to support what’s known as offline data transfers.
image:
  alt: Offline Data Transfer
  url: /uploads/offline-data-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/offline-data-english-social.webp
title: Offline data transfer for large-scale data
_template: blog_detail
---

_This is the first blog post in the new series highlighting features unique to the Filecoin protocol._

Filecoin is designed to store the world’s most valuable information. Globally, we produce [2.5 quintillion bytes](https://techstartups.com/2018/05/21/how-much-data-do-we-create-every-day-infographic/) of data daily. While much of that data doesn’t need to be stored in perpetuity, some of it spans the most important information humans have ever created across the sciences, mathematics, arts, history, and humanities.

Filecoin is a blockchain-based marketplace for buying and selling decentralized storage. The blockchain mechanism offers secure storage assurance, and the cryptocurrency mechanism creates a dynamic marketplace.

As we discussed in our cryptoeconomics constructions blog post, sometimes when you’re dealing with huge troves of data, it’s difficult (expensive and time-consuming) to transfer those files over the internet for safekeeping. For petabyte-scale datasets and larger, the most sensible solutions often involve shipping data on hard drives. The Filecoin protocol and project has tools and structures to support what’s known as offline data transfers.

## When to consider offline data transfer

The two factors to consider when making the decision whether to transfer data online or off are **expense** and **time.**

**_Expense:_** Think about storage programs like a network – as highways of data moving from one place to another. This movement can get very expensive very quickly. Imagine a huge archive of information, such as a museum or library, looking to upload, store, and safeguard its collection on the decentralized web (dweb). In order to do so, the organization can either stream their data over the internet or transfer it using a physical device.

Using the internet to stream data, transfer costs can build very quickly. Transferring petabytes of data in today’s cloud services requires sending the data through multiple regions, incurring interconnection fees, and regional bandwidth fees, as well as additional costs if you choose to rent a dedicated line or account for the need for retries. For a rough sense of cost, just the bandwidth alone to transfer 2.5 petabytes of data would cost about $140,000 – and more if you’re moving this data across regions.

These costs can add up for archives, museums, and other non-profit ventures. The [Museum of Modern Art’s collection](https://www.vice.com/en_us/article/gvy7q3/how-do-you-back-up-the-museum-of-modern-art) is more than 90 terabytes and is projected to grow to 1.2 petabytes by 2025. The English-language Wikipedia contains more than [6 million](https://en.wikipedia.org/wiki/Wikipedia:Size_of_Wikipedia) articles and over 3.6 billion words. [CERN’s Open Data](http://opendata.cern.ch/) portal includes more than one petabyte of data on its particle physics experiments. London’s [Natural History Museum Data Portal](http://data.nhm.ac.uk/) includes nearly 4 million historical specimens. The Electronic Records division of the National Archives holds [500 terabytes](https://www.archives.gov/era/about) of data. These are massive troves of highly valuable data.

Then, consider the cost of a hard drive itself – a physical medium to store and ship the data. A server-grade 8 TB drive costs about $200. To transfer 2.5 petabytes of data, for example, you would need roughly 315 hard drives, totaling approximately $63,000. While you might have slight additional per-unit costs for shipping, import fees, and currency exchange – you’re well below the cost of streaming the data over the internet!

**_Time:_** Now, let’s imagine that the National Archives wants to transfer its electronic records to another server. Transferring 500 TB of data at 100 Mbps would take [more than a year](https://techinternets.com/copy_calc?do). Transferring the same data with hard drives would take just the amount of time to download and ship – likely you’d be done within a week! Bottom line, it’s clear that in some cases, it’s more cost-effective _and_ faster to physically ship data.

## How offline data transfer works with Filecoin

With smaller data transfers, when a storage client wants to make a deal with a miner, they propose a deal to a miner to store “X” data for “Y” length of time. After the miner and the client negotiate a deal, they initiate transfer of the data from client to miner, typically over the network.

Filecoin’s offline data transfer feature allows users with very large datasets to complete the data transfer step offline (e.g. by shipping hard drives from the client to the storage miner), and have the deal work as intended on-chain. It is implemented via a flag that tells the client _not_ to transfer the data over the network. Instead, the client passes a piece CID (a unique identifier describing the data), which a miner must then match for the deal to go through. This gives the client node flexibility in how it can set up the deal – for example, passing miners a specific location on a hard drive for the data they can use to generate the piece CID.

## How the Filecoin Project supports offline data transfer

On May 7, we launched Filecoin Discover, a project that incentivizes early miners to order and store hard drives filled with valuable open-source data, and in exchange, earn additional Filecoin tokens. This is a way to help seed Filecoin as the home for humanity’s most important datasets and make it accessible to others, to grow our knowledge base and forge new ideas. Miners can choose hard drives and sign up for guaranteed contracts in the Filecoin Discover store, a catalog of petabytes of important public data (and growing!). Miners will then receive that data on a drive at cost. In exchange for storing this data, miners earn Filecoin.

We received orders for more than 600 drives in the first 24 hours after the store opened, underscoring the excitement around this project.

The key to program success for a project like Filecoin Discover is to drive down the cost of hardware. In April, Filecoin put out a [request for proposal](https://github.com/filecoin-project/devgrants/pull/131#) for a storage device (similar to [AWS Snowball](https://aws.amazon.com/snowball/)) to enable even faster offline data transfer.

The goal with this RFP is to build an at-cost hard drive solution that’s redundant and secure. Miners could rent these devices for set periods in order to hold onto data transfers. Clients could load data onto these devices and miners offload it onto their own servers upon receipt.

Offline deals can happen outside of the Discover program, too. Consider a submarine at sea collecting petabytes of information about underwater life in the Pacific. It likely makes more sense to mail those hard drives when the ship is back on land, rather than relying on online data transfer. Physical transport of large quantities of data will continue to play an important role in the dissemination of information as we work to decentralize the web. Looking ahead, Exabyte-scale data transfer (e.g. [AWS Snowmobile](https://aws.amazon.com/snowmobile/#:~:text=AWS%20Snowmobile%20is%20an%20Exabyte,by%20a%20semi%2Dtrailer%20truck.&text=Transferring%20data%20with%20Snowmobile%20is%20more%20secure%2C%20fast%20and%20cost%20effective.)) is the next step in this evolution for transferring massive amounts of data.

Ultimately, solutions like offline data transfer will make Filecoin an even stronger alternative to traditional cloud storage platforms for storing data. Data storage is a real cost for almost every business in every sector. If the cost of storage falls, small businesses will save money – money that they can invest in hiring or R&D.

This is just one example of how the unique features of the Filecoin network will help businesses meet their storage needs in more efficient, secure, and affordable ways. In the coming weeks we’ll roll out more posts highlighting these features. We hope you’ll join us on this mission to decentralize storage and improve access to information.
