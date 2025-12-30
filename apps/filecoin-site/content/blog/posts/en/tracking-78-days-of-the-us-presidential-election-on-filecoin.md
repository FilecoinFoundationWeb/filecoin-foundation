---
aliases: []
author: ""
categories:
  - interviews
  - events
date: "2021-02-10T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The Starling Framework and Adobe’s Content Authenticity Initiative launch a
  photo archive documenting November 2020 to January 2021.
image:
  alt: ""
  url: /uploads/107442680-21b96380-6afd-11eb-9d73-033dac28b49a-1.webp
main_feature_inverted: false
related_article_1: >-
  content/blog/posts/meet-filecoin-s-collaborators-jonathan-dotan-starling-framework-for-data-integrity.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/107442680-21b96380-6afd-11eb-9d73-033dac28b49a.webp
title: Tracking 78 Days of the US Presidential Election on Filecoin
_template: blog_detail
---

Today, the Starling Framework for Data Integrity released _A Photographic Archive of Trust._ The archive is a collection of images captured by Reuters’ photojournalists during the 78 days between the November 2020 US Presidential election and the January 2021 inauguration. The images are uploaded and stored on the Filecoin network, including immutable metadata like location, time, and verification - ensuring a record always exists to protect against tampering and disinformation.

[Visit the Archive](https://www.starlinglab.org/78days/)

![](/uploads/election-on-filecoin.webp)

The archive is a collaboration between Reuters, Filecoin, and the Adobe-led [Content Authenticity Initiative](https://contentauthenticity.org/) (CAI) - including use of technology from Hedera Hashgraph and Numbers Protocol. The collaboration is a proof of concept to use distributed technology to build a record of truth and verification in the face of growing media disinformation and ambiguity.

The Starling Framework for Data Integrity uses a distributed storage solution built with Filecoin. Spearheaded by the USC Shoah Foundation and Stanford’s Department of Electrical Engineering, Starling is a comprehensive set of tools and principles that empowers organizations to securely capture, store and verify human history.

The Content Authenticity Initiative (CAI) was founded in 2019 by Adobe, The New York Times Company and Twitter to develop an industry standard for content attribution and increase trust and transparency online. The CAI is creating an easy way for creators to securely attach important attribution data to digital images by adding a secure layer of tamper-evident data to images, including name, location and edit history.

To create _A Photographic Archive of Trust,_ Reuters photojournalists captured photos using Numbers Protocol, thus creating unique digital fingerprints for each photo. The process began by cryptographically hashing each photo, creating a content identifier (CID). Images were then uploaded and stored on the Filecoin network, which provides a continuous record that the files are secure and have not been tampered with as they are put in long-term cold storage. At the same time, the files were syndicated onto IPFS for rapid retrieval. Finally, the metadata about each image (including its storage hashes) was recorded on a permissioned Hyperledger Fabric database. A cache of those transactions were syndicated on a GUN network database and brought on-chain using the Hedera Consensus Service (HCS), which created an immutable and verifiable record of messages. Using the new CAI standard for image attribution, anyone can [view the image archive](https://www.starlinglab.org/78days/) and check the provenance, timestamp, storage data, and verified edit history for each individual image. The result is an archive of over 250 images collected over the 78 days between the November 2020 US election and the inauguration in January 2021. [Learn more about the image verification process](https://www.starlinglab.org/image-authentication/) for the photographic archive.

The archive is open to anyone in the public, and provides a proof of concept for the utility of blockchain technology in the preservation and verification of digital media. The goal of the archive is not only to provide a record of these 78 critical days in American history, but also to provide a framework for future initiatives around media verification. By establishing transparent standards around verification techniques and blockchain implementation, Project Starling and the CAI aim to promote a collaborative ecosystem of media verification solutions.
