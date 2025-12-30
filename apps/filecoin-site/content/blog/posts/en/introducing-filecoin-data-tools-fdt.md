---
title: Introducing Filecoin Data Tools (FDT)
draft: false
excerpt: >-
  The Engineering team within the Filecoin ecosystem has now positioned the
  Filecoin Data Tools (FDT) project to begin large scale onboarding of customer
  data. This platform has demonstrated the ease of use to rapidly and seamlessly
  onboard data through three pilot initiatives and is now ready to begin
  supporting more and more customers within the Filecoin ecosystem.
share_image: /uploads/FDT-Header.webp
date: 2023-05-25T20:34:54.322Z
categories:
  - updates
dim_image: true
image:
  url: /uploads/FDT-Header.webp
author: Corinne Bernett
---

The Engineering team within the Filecoin ecosystem has now positioned the [Filecoin Data Tools (FDT)](https://filecoindata.tools) project to begin large scale onboarding of customer data. This platform has demonstrated the ease of use to rapidly and seamlessly onboard data through three pilot initiatives and is now ready to begin supporting more and more customers within the Filecoin ecosystem.

This announcement represents the next logical progression towards helping our ecosystem companies offer a practical cloud DX/UX for developers around the world.

## What FDT is

FDT (Filecoin Data Tools) is a set of compute and storage technologies built on top of the Filecoin Network. The Filecoin Network is a decentralized storage network with network revenue and incentivisation built in. We recognize that the cloud has a great developer experience, therefore it is an ambition of ours to achieve the benefits of cloud level DX alongside the transparent and open source incentivisation layers decentralized networks can provide.

This technology stack includes various components such as computing, storage, and networking resources that can be used by developers to build decentralized applications.  In fact, there are many teams already building interesting software with the components provided by Filecoin Data Tools that are designed to be scalable, flexible, and secure, making the offering suitable for a wide range of use cases.

## FDT line up

### Estuary

Estuary continues on as a product even though its internals have changed significantly. Additionally, the Estuary Dashboard provides a user-friendly interface for monitoring and managing storage deals on the network. Estuary will continue to offer various developer tools and APIs, such as the Estuary API, which enables developers to build storage applications on top of Filecoin, and the Estuary SDK, which offers a range of libraries and tools for integration with the network.

### Delta Energy Technology Stack

The stack powering products like Estuary and other tools in the ecosystem. The Delta Energy Technology Stack is a suite of open-source tools for creating and managing Filecoin storage network deals. This includes the Delta Deal Making Engine, Delta Dataset Manager for large datasets and Edge-UR Gateway for storing and serving unsealed copies.

#### Explaining Delta

Delta can be used to simplify the process of preparing and managing storage deals on the Filecoin Network. Delta can be used to manage data, include versioning, manage metadata, and track storage deal status, all of which makes it easier for users to publish their data on the Filecoin Network.

The Delta Deal Making Engine enables users to specify the terms of the storage deal, such as the amount of storage space needed, the price, and the conditions for the exchange. The platform then uses smart contracts on the Filecoin Network to enforce the terms of the storage deal and facilitate the transaction.

![](/uploads/FDT-Delta.webp)

Delta can be used to wrap the complexities of preparing a storage deal on the Filecoin Network and provide a seamless experience for users looking to replicate their data on a decentralized storage network.

Features:

- Deal proposal preparation and announcement
- Piece commitment computation and optimization
- E2E/import support (online/offline)
- Auto/manual repair and deal renewal
- Wallet assignment
- Storage provider assignment and selection
- Blockstore cleanup
- Deal status management
- Replication management

#### Delta Dataset Manager

Delta Dataset Manager (Delta DM) is a tool to manage deal replication tracking for onboarding datasets to the Filecoin Network via import storage deals (otherwise known as out-of-band workflow). This provides a solution to quickly make deals for massive amounts of data, where the transfer is better handled out-of-band.

The Delta DM platform enables the streamlined management of datasets through an intuitive web-based interface. It tracks replication and DataCap and offers self-service for Client Service Providers through a pull mechanism for deals.

It is agnostic of data prep and data transfer and can run independently of Boost or Lotus, allowing Delta DM + Delta to operate as a fully standalone solution.

#### Delta Importer

Delta Importer is a stand-alone binary designed to be run on a Storage Provider infrastructure. It automates importing CAR files into Boost from the filesystem. By integrating with Delta DM to request deals from the self-service API, Delta Importer facilitates a fully automated deal-making and deal ingestion pipeline. Delta DM has multiple modes of operation, covering a variety of different data ingestion strategies.

Coming Soon:

- End-to-end tracking of deals back to DM
- Command-line interface for deal tracking
- Retry import of failed deals

### Edge-UR

Edge-UR is a simple solution for high availability data for users who need to access their data even though it is on the Filecoin Network. Edge-UR is a dedicated node that enables customers to upload and retrieve user content on Estuary using the same API keys. Each customer is assigned their own node, which switches the upload protocol for a seamless experience. While data still needs to be uploaded via HTTP, the Edge-UR node facilitates the transfer of the file to a Delta node for making storage deals.  

Using the inexpensive warm retrieval layer provided by edge in conjunction with Filecoin’s free cold archival layer, enterprises can save themselves a significant amount of money on storage costs.  This storage cost saving can be applied to other areas of the IT budget enabling teams to build more powerful IT environments. 

Overall, Edge-UR simplifies the process of uploading and retrieving data on Estuary, while maintaining security and control over user content.

Features:

- Lightweight IPFS node that can peer with other IPFS nodes.
- Upload and retrieve — users will be able to upload and retrieve the file immediately after.
- Asynchronous deal making process using Delta.
- Keeps track of the content and its associated deals.

### Ptolemy

Ptolemy is designed to function as an orchestration engine to process large datasets typically confined to S3 buckets or contiguous filesystems. Ptolemy can package an entire filesystem structure in CAR files for deal making purposes. The goal of Ptolemy is to remove the effort around data preparation for storage providers and end users alike.

Features:

- Quick scan and containerization of entire filesystems and coming soon S3 buckets.
- Commp and Root CID calculations for car files
- Indexing of human readable files names back to corresponding root CIDs
- Horizontal scaling through addition of Ptolemy workers

### FDI

Filecoin Data Infrastructure represents a step towards decentralization and pushes the Filecoin Network forwards by being a blueprint for low cost, reliable compute and storage for deal making engines and other Filecoin technologies and services. It’s an expandable compute cluster, storage system, and virtualization cluster and it includes high availability and Kubernetes.

FDI is also an open set of automation tools and infrastructure-as-code which can be used to build your own “FDI-alikes” and run your own enterprise grade Filecoin client infrastructure on your own hardware and on your own terms. It is adaptable to different hardware, different software and everything is pluggable and open source.

Among other things, FDI enables the provisioning of Customer Provisioned Infrastructure, allowing the engineering team to run infrastructure on behalf of clients in exchange for fiat currencies for the first time. We are helping teams in the Filecoin Ecosystem save on costs while they continue to onboard meaningful data to the network. This work will be discussed in more detail over the coming weeks.

### Storage Market

Storage.market serves as an information hub for data storage products, providing users with analytics on the storage market and up-to-date news related to data storage. This platform can be particularly helpful for businesses and individuals looking to stay informed on industry trends and make informed decisions about storage products and services.

## Client Engagement

To onboard data to the Filecoin Network, users need to use specific tools and applications that enable them to interact with the network and perform various operations, such as uploading, retrieving, and managing data. This is where the Filecoin Data Tools comes in — our engineering team has been working with several clients who are building solutions to onboard data to the Filecoin Network, using the tools and expertise that our team provides.

Working with multiple clients on such projects can be challenging, as each client has unique requirements, use cases, and technical capabilities. However, by leveraging our knowledge of the Filecoin Network’s architecture, protocols, and features, as well as the clients’ needs and expectations, we can develop customized solutions that meet their requirements and help them leverage the benefits of decentralized storage.

### Working with Radiant Earth

[Radiant Earth](https://radiant.earth/) is an innovative organization that is dedicated to promoting positive global impact through the use of machine learning and Earth observation (EO) technologies. They offer a range of high-quality, open resources that are trusted by professionals and researchers around the world.

One of Radiant Earth’s core missions is to cultivate a community of practice that can develop standards around machine learning on EO. This involves bringing together experts in the fields of machine learning, EO, and related areas to collaborate, share knowledge, and develop best practices for using these technologies in a responsible, effective way.

As part of our work with Radiant Earth, we used our technology stack to onboard a small portion of their machine learning and EO data to the Filecoin Network. We understand the necessary steps to achieve this and with our tooling, we ensure that their data is appropriately formatted, securely stored, and easily accessible.

Tools used:

- Ptolemy
- Delta Dataset Manager
- Delta Deal Making Engine
- Delta Importer

Challenges:

- For a relatively small dataset there were an exorbitant amount of small files (roughly 7.719 million) and aligning them into car files manually would take a very long time.
- Small file I/O can be extremely painful so optimizing car file generation is paramount.
- End user sought a seamless download experience as part of the PoC (team delivered).

### Working with SUCHO

[SUCHO](https://www.sucho.org/) is an impressive initiative driven by over 1,500 volunteers from around the world who are working together online to digitize and safeguard Ukraine’s cultural heritage. In response to the ongoing conflict in Ukraine, SUCHO has taken action to preserve more than 5,000 websites and ~40TB of data belonging to Ukrainian cultural institutions, with the goal of preventing these valuable resources from being lost or going offline with 5 different storage providers globally.

Tools used:

- Ptolemy
- Delta Dataset Manager
- Delta Deal Making Engine
- Delta Importer

Challenges:

- A healthy mix of file sizes however a few files exceed 1 TiB in size, efficiently packing them in 32 GiB sectors is not trivial.
- Bandwidth limitations of the free AWS S3 service made getting the data set a long process on a throttled connection.

### Working with Encloud

Encloud specializes in data security and they know the importance of using Filecoin to further their security features while providing the freedom of access to their users.

We are working with Encloud on this initiative and we provided them access to our live Edge-UR node to test their proof-of-concept.

Tools used:

- Delta
- Edge-UR
