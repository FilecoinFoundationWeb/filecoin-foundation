---
title: "Preserving Human Rights Data with the Filecoin Network: A Journey into
  the Decentralized Web with HRDAG"
created-on: 2024-04-18T16:50:24.039Z
updated-on: 2024-04-18T16:50:24.046Z
published-on: 2024-04-18T16:50:24.051Z
category: projects
image:
  src: /assets/images/041524-guest-hrdag.png
seo:
  description: "HRDAG explores how Filecoin and IPFS can protect vital human rights data through decentralized storage, ensuring critical evidence remains accessible for future generations."
---

*This is a guest post from FFDW project partner Human Rights Data Analysis Group (HRDAG), written by Patrick Ball, HRDAG’s Director of Research.* 

From documenting human rights abuses to promoting accountability and justice, data serves as the backbone of truth in our collective memory. 

At the core of HRDAG’s work are the datasets it gathers, tidies, and uses for estimation and analysis. The data includes evidence of homicides, disappearances, kidnappings, recruitment of child soldiers, and forced displacement. These are some of the most traumatic events that could happen to anyone, and proof of these events is crucial –– so that societies remember the suffering of the past in order not to repeat it in the future. By remembering, we help to validate the experiences of the survivors, enable social recovery, and provide evidence with which to hold the perpetrators accountable. **It is therefore essential to preserve and protect this information.**

Records of the fight for human rights can be some of the most vulnerable data in the world –– susceptible to tampering or total disappearance on unsecured platforms. We began working with Filecoin Foundation for the Decentralized Web (FFDW) in 2021 to explore how decentralized technologies can support efforts to safeguard this critical data and promote accountability for human rights abuse. 

One way to remember – and safeguard – the data is to replicate it outside of the traditional web, on services that promise resilience to data loss, whether through centralization or single points of failure.

## Exploring Decentralized Storage Solutions 

With FFDW’s support, HRDAG has been experimenting with new mechanisms for data storage, including IPFS and the Filecoin network. 

IPFS, which stands for the InterPlanetary File System, is a decentralized content storage system that makes content available via Content Identifiers (CIDs), rather than traditional location-based URLs (like https links). These CIDs are unique cryptographic hashes of the content being stored. This means when data is requested using a CID, it returns an unforged, unmodified, exact copy of the data that was uploaded –– as long as someone, somewhere in the world is hosting a copy of that data. 

Filecoin combines IPFS with economic incentives –– to provide certainty that data is being stored. With cryptographic proofs, Filecoin ensures storage providers continue storing and serving the data. And because there is redundancy in who is storing and sharing the data, if one node goes down, the data is still accessible. By design, decentralized storage ensures redundancy and resilience, in contrast to the vulnerability of data on centralized servers. 

## HRDAG’s Approach and Insights  

Decentralized storage is a new approach to data longevity –– for the Internet broadly and for HRDAG. 

Some of the information our team at HRDAG has uploaded to IPFS and Filecoin is part of a massive dataset about the 50-year conflict in Colombia. This data was used by Colombia’s truth commission and by the courts granting amnesties to some of the guerrilla and military leaders from the civil war. Because the dataset is an open resource, data scientists, researchers, civil society groups, and others are invited to explore the data to see what else can be learned.

The nature of the data that HRDAG stewards, such as the truth commission data, raises novel questions as we explore how to best leverage decentralized technology to store and share important human rights work

## How should we provide data on the web?

With the usual approach, we put a link to the data files on a page to allow access, and that’s it. On the decentralized web, how to best share stored data is still under discussion. How do you link to data stored on IPFS on a web page? How do you point people to data on IPFS and help them to understand what they’ve found when they locate it? Unlike https links, CID links are not as widely accessible and require an IPFS node or gateway. 

HRDAG’s experiment with decentralized storage began 18 months ago when we put a few older datasets onto IPFS, including data from the Colombian Truth Commission. We made the files available on the [decentralized web](https://hrdag.org/data-publication/) (DWeb) via IPFS, as well as with the usual https web links. 

At its core, IPFS is as its name implies: a file system. One of the easiest and fastest ways to put data onto the network is to just upload files and directories from your laptop. So we created a script that downloaded the datasets from the HRDAG website, put them into a directory, and put that directory onto IPFS with CID links. There’s nothing fancy about this method, and it may not be the best way to organize a long-term archive. But when time is of the essence, as it often is during human rights crises, this can be an effective way to ensure critical data is remembered rather than forgotten. 

## How to host the data?

IPFS works by having people host data for you, which introduces the question – who should host our data?

One advantage of content-addressing is that it doesn’t matter. Unlike with centralized storage, the provider can’t edit or modify the original files without changing the CID, and as long as the data is hosted by somebody, it will be available, which is where the Filecoin network comes in. 

HRDAG uploaded the Colombian data to two Filecoin storage services to ensure greater distribution and redundancy. The upload process was easy: our first uploads were manually done with an early Filecoin web service called Estuary. When Estuary was decommissioned, we switched easily to another service and the unix command line interface w3cli for our work. There are other options provided by other organizations built on top of Filecoin, but the end result is the same: data stored on a decentralized network, accessible through the same CID. We found the process mostly smooth, although in some cases, larger files required us to have a very good internet connection or the upload would fail.

Each of these Filecoin-based services typically partners with different storage providers, meaning data will get replicated to a more diverse set of nodes in different locations. Of note, this diversity can also cause confusion – sometimes data is packaged slightly differently, resulting in different CIDs for what is the same data. 

The data is accessible through the [Filecoin network](https://bafybeibq7ub6qkie62cy2tkoawwsw35jpvtvdl3nrwlhwuz2a4ate65eyq.ipfs.w3s.link/), leveraging IPFS's decentralized storage capabilities. This access point is provided through a web gateway operated by [web3.storage](https://web3.storage), our chosen platform for data uploads. For enhanced accessibility and redundancy, additional public web gateways are available through providers like Cloudflare and [other services](https://docs.ipfs.tech/concepts/public-utilities/#public-ipfs-gateways).

While IPFS is not a single point of failure, the web gateway is a single point of failure – if that link breaks, the data would still be on IPFS but you wouldn’t be able to find it using that specific link. You’d need to pull out the CID and then feed it either to another gateway or connect directly to IPFS by using a client program or a browser that supports it, like Brave or Agregore. Ultimately, our datasets are backed up on Filecoin, which uses cryptocurrency to incentivize long-term storage of the data, but there’s nothing to stop others from providing other stores as a voluntary service.

Another question is how you would go looking for this data without the HRDAG website pointing to it. There is very early work in IPFS search and creating a more interconnected IPFS world –– just as the original Web is interconnected. [InterPlanetary Linked Data](https://ipld.io/) (IPLD) is an ongoing project to create data structures for interconnected data. We didn’t turn our ancient grungy CSV files into an IPLD structure but that would be an option – and perhaps a more natively DWeb approach. 

Exactly how to best structure and store long-term archives of critical data on the Filecoin network is still an open question, one that our colleagues at the [Internet Archive](https://blog.archive.org/2023/10/20/celebrating-1-petabyte-on-the-filecoin-network/) and [Starling Lab](https://www.starlinglab.org/) are exploring, and we’re continuing to discover how the benefits of decentralized storage can better safeguard the human rights data that we curate. 

What did we learn? Well, most people are not using those IPFS links yet, but that’s okay — not many people download our datasets anyway. This method still serves as a backup for data in a way that differs from centralized servers, offering redundancy in how the data is stored. Ironically, we hope that there will be little need in the future to use or reuse evidence of human rights abuses. However, it’s crucial that this evidence remains accessible so we never forget and continue to learn from humanity's gravest mistakes.
