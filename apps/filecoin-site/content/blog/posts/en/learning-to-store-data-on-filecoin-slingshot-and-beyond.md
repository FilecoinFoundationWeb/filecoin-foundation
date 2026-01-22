---
aliases:
  - /blog/slingshot-and-beyond/
author: ""
categories:
  - events
date: "2020-10-16T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Over the last three weeks, members of the Filecoin community have participated
  in Phase 1 of the Slingshot competition, storing 450+ TiB of data through more
  than 350,000 storage deals on the network.
image:
  alt: "Learning to Store Data on Filecoin: Slingshot and Beyond"
  url: /uploads/learning-store-data-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/learning-store-data-social.webp
title: "Learning to Store Data on Filecoin: Slingshot and Beyond"
_template: blog_detail
---

Over the last three weeks, members of the Filecoin community have participated in Phase 1 of the [Slingshot competition](https://slingshot.filecoin.io/), storing 450+ TiB of data through more than 350,000 storage deals on the network. To help the projects in this competition, a number of Filecoin community members gave talks on different topics related to storing data and building on Filecoin. The value of these talks doesn’t stop at Slingshot, though. They’re great for anyone looking to work with Filecoin!

In this post, we’re recapping some of these talks and panels to help you get a running start to store and build on Filecoin.

## [Master Class: Intro to Powergate](https://www.youtube.com/watch?v=synHYG4AnJk&feature=youtu.be)

[Andrew Hill](https://www.linkedin.com/in/andrewxhill/), co-founder and CEO of [Textile](http://textile.io/), led this session. Textile makes tools to make it faster and easier for developers to build decentralized apps on IPFS and Filecoin. In this Master Class, Andrew discussed how to get started with and use [Textile Powergate](https://docs.textile.io/powergate/), a library that manages storage and retrieval across the Filecoin and IPFS networks.

You can run Powergate on your own machine or use one of Textile’s managed instances, and it allows you to store a single piece of data to either or both the IPFS and Filecoin networks with just a few commands! It also triages data retrieval requests across the two networks, where IPFS is generally better for more frequent, “hot” storage and Filecoin for less frequent, “cold” storage.

More generally, Powergate is one of the simplest ways to store on Filecoin, handling many of the details around making Filecoin deals. It has Javascript and Golang clients, as well as a community-developed Python client. To get started, check out the docs [on the Textile documentation site](https://docs.textile.io/powergate/).

Textile also makes [Buckets](https://docs.textile.io/buckets/), an S3-like cloud storage solution with Filecoin features. You can watch Textile's Intro to Buckets Master Class [on YouTube](https://www.youtube.com/watch?v=Id4SRT9_2CM&list=PL_0VrY55uV19nu6orLLCaGCGocsjvpiGZ&index=5).

### The Benefits of Using Powergate

- Ensure data stored on Filecoin is available on the IPFS network easily for fast retrieval.
- Handle long-term storage deal management, including automated renew and repair.
- Make use of network indices to improve miner selection and deal creation.
- Manage Filecoin wallet addresses for one or many users.
- Easily configure, connect, and deploy Powergate, Lotus, and IPFS together.

### Andrew’s Top Tips for Using Powergate

1. **Start with Localnet**. You can start testing your idea with Filecoin in under 5 minutes. No FIL required, end-to-end deals in under a minute, and no network issues.
2. **Follow the leaders**. There are a lot of awesome teams already building on Powergate. So far, we’ve seen them be super open to helping one another out. That can be very valuable to an early team.
3. **Start small**. After you leave Localnet and start making deals on the live network, be careful not to fire your entire pipeline in the first go. Pick a few GiB, start making deals, review the lifecycle, then continue with larger deals.

## [Master Class: Preparing Large Datasets for Filecoin Storage](https://www.youtube.com/watch?v=q2-HuBCBWo4&feature=youtu.be)

[Rod Vagg](https://www.linkedin.com/in/rvagg/), [Mikeal Rogers](https://www.linkedin.com/in/mikealrogers/), and [Chris Hafey](https://www.linkedin.com/in/chafey/), members of the [IPLD](https://docs.ipld.io/) Team at Protocol Labs, spoke to Slingshot participants on thinking about how to store large datasets to Filecoin. IPLD is a [key component of Filecoin](https://docs.filecoin.io/project/related-projects/#ipld), helping data structures across the content-addressed web interoperate.

Rod first gave a basic primer on IPLD called “Content-addressed Data Structures with IPLD.” He discussed Merkle Trees, DAG, CIDS, Codecs, Mutability and other key concepts that underpin Filecoin and many other content-addressable data structures.

Chris’s and Mikael’s presentation, “Preparing Large Datasets for Filecoin Storage with Dumbo Drop” covered the general approach, architecture, and lessons learned for the Filecoin Dumbo Drop project. The goal of Dumbo Drop was to process a large amount of open data in a short amount of time for Filecoin. So far the project has processed over 3PB of data.

### Some of Their Lessons Learned

1. AWS is not 100% reliable at this scale - random failures occur!
2. There are some quirks about using S3 in this context. S3 limits performance based on prefixes, and S3 listobjects are slow and unreliable for large numbers of objects.
3. Lambda can be more flexible and easy to use compared to EC2. Lambda keeps getting cheaper and more accessible. However, Custom Lambdas can be tricky.
4. Compute is cheap, but storage is expensive.

### Top Tips for Filecoin Users

1. **Rod**: “Understand the data primitives, learn the basics of IPLD and the huge potential hiding in Merkle DAG data structures.”
2. **Chris**: “Consider building your own pipeline from the same libraries IPFS/Lotus use.”
3. **Mikael**: “You can store a lot more than just files :) “

## [How We Built This: Package Manager Registries on Filecoin](https://www.youtube.com/watch?v=ZoD0HvBM-bo&feature=youtu.be)

[Brian Hoffman](https://www.linkedin.com/in/brianchoffman/), co-founder and CEO of OB1, discussed their team’s 5MB project, which was made to store and retrieve package manager registries from Filecoin. OB1 was founded by a small team in 2015 after they had been working on OpenBazaar in their spare time for a year. They saw the concept of decentralized trade gain enthusiastic support in the Bitcoin community, and decided to accept venture capital funding in order to build a company and hire a development team to build OpenBazaar into something that could revolutionize ecommerce.

Brian discussed the motivation of and process around building 5MB. He covered the technical nuances the project had to work through when storing versioned data and small files on Filecoin and building a UI to explore the data.

Brain also walked us through the architecture of 5MB, which utilizes Textile Powergate:

- **Stage 1**: Ingestion, where 5MB ingests package repository into Amazon EBS, and data is partitioned into different datasets for further processing
- **Stage 2**: Processing, where a Golang processor server stages data into IPFS, data is assessed for size and structure, and directory objects are broken into buckets.
- **Stage 3**: Archiving and Retrieval, where data buckets are pushed into Filecoin through Powergate and can be accessed through a the UI (a modified version of the IPFS GUI)

### Brian’s Top Three Reasons to Build on Filecoin

1. **Sustainable Data Ecosystem**: We need a way to incentivize data storage infrastructure in a sustainable way with reliable large-scale data sets.
2. **Tools and Applications Needed**: Developers need better and more diverse tools to make the most of the network, and users want easy to use applications to help them get access to the data they want.
3. **IPFS Has Established Credibility**: We’ve used IPFS for years now and understand its strengths and weaknesses. The technology works and we’re excited for Filecoin.

## [How We Built This: Slate](https://www.youtube.com/watch?v=XofZP6YEkhg)

Slate is a storage application and Filecoin network client that allows you to store images, audio, video, and data through a graphical interface or API. [Jim Lee](https://twitter.com/wwwjim?lang=en), one of the Slate cofounders, discussed what Slate is, its evolution going from a simple Filecoin client to a robust media sharing product, and what the future holds. He was looking to share lessons and insights from being a very early adopter of building an application on top of Filecoin.

The product was designed in part with privacy in mind; no one can see what CIDs are uploaded from Slate to the Filecoin network, and the buckets storing your files are encrypted before the data is uploaded. The team plans to build an offline mode where your files are all private.

Jim walked through the current state of the app while giving background on the development and innovation processes. He talked about what it was like working with Filecoin in its early days, how using Textile technologies made things much easier, the team’s ideation and product development, and his experience building an application on cutting edge protocols.

Jim also showed the basics of Slate - for instance, how basic file uploads worked in the browser - as well as showed examples of the potential of an app like Slate, demonstrating how to build a simple application using Slate to store data. He also used Powergate and Slate components to create a really simple application that can send and receive Filecoin.

## [Panel: Road to Broader Adoption](https://www.youtube.com/watch?v=MXmH5JjtGFk&feature=youtu.be)

Projects storing data on Filecoin are diving into the Web3 ecosystem. Though Web3 is still relatively nascent, many think it provides inherent advantages versus the web today, and it’s a good time to check it out and capture first-mover advantages. Slingshot hosted a panel of experts in the Web3 ecosystem, and they discussed how to think about user adoption and expanding the market for Web3 products.

This panel included [Shi Khai Wei](https://www.linkedin.com/in/shikhai/), COO of Longhash Ventures, [Gabriel Anderson](https://www.linkedin.com/in/gabrielkanderson/), MD of Tachyon Accelerator, and [Colin Evran](https://www.linkedin.com/in/colin-evran-9819761), Filecoin Ecosystem Lead. [Pooja Shah](https://www.linkedin.com/in/pooja01/), Filecoin Product Lead, moderated the panel.

Web3 is a movement within software development where applications are shifting from being built on centralized infrastructure to decentralized protocols. Instead of having a single point of control, applications built on Web3 architecture can remove the intermediary, resulting in a number of benefits. Filecoin is a key-pin in the Web3 ecosystem, allowing files to be stored on and retrieved from anyone willing to devote their hardware to the network.

The Web3 ecosystem has come a long way, with many promising projects in the space. With a shift from just building cool tech for technology’s sake to building actual products for users, our panelists encouraged potential builders to start thinking from a more market-focused lens.

### Some insights from the panelists

**Gabriel Anderson:** “We’re early in the Web3 lifecycle, but now some of the applications are starting to take off, and we are seeing some really innovative early use cases. For example, whether you know it or not, everyone has digital assets, and there is an issue with inheriting that. One company is creating a seamless experience for people to pass on their digital assets. There’s also a whole market for video transcription services that has solved the latency issue at a fraction of a price.”

**Colin Evran:** “We shouldn’t discount how powerful the early adopter ethos is in the Web3 space. The kind of innovation catalyzed by these early adopters working in the same space is incredible.”

**Shi Khai:** “As developers, we need to focus on building true users and communities who will stay with us. Look for communities of true users who will give you true feedback, versus just people who think it’s cool right now because it’s new.”

Thank you to all the speakers and participants for these Slingshot events! As we head into the final week of Phase 1 of the competition, we’re excited to see how teams are using what they’ve learned from these events. And we look forward to seeing more generations of developers storing and building on Filecoin.
