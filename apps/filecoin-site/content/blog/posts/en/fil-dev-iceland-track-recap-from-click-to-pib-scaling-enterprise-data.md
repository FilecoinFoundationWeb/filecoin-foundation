---
title: "FIL Dev Iceland Track Recap: From Click to PiB, Scaling Enterprise Data"
draft: false
excerpt: >-
  The Filecoin ecosystem has onboarded over 1.8 EiB of data. Learn how these
  teams are scaling their data onboarding efforts to support enterprise
  customers.
share_image: /uploads/0ScalingEnterpriseData.webp
image:
  url: /uploads/0ScalingEnterpriseData.webp
  alt: Scaling Enterprise Data
author: Andrew Ferrone
date: 2023-11-30T11:39:11.997Z
categories:
  - updates
  - events
dim_image: true
related_article_1: content/blog/posts/retrieving-memories-from-the-fil-dev-summit.en.md
---

Ecosystem members leading the growth in enterprise data onboarding to Filecoin shared the opportunities and challenges they’re experiencing in the field, and attendees collectively brainstormed solutions and next steps. Community members from [Banyan](https://www.banyan.computer/), [Seal Storage](https://sealstorage.io/), [Internet Archive](https://www.youtube.com/watch?v=_5Kq-7Z0C8c), [Storj](https://www.storj.io/), [SteelDome](https://www.steeldomecyber.com/), and [Protocol Labs](https://protocol.ai/) covered topics across enterprise requirements, approaches to durability and availability, evolutions in data onboarding workflows, and new multi-protocol customer experiences for interacting with Filecoin. It was a highly engaging and productive few days in Iceland.

{{< youtube id="_5Kq-7Z0C8c" title="Large-scale institutional data onboarding to Filecoin at Internet Archive" >}}

<p><br>
<br></p>

## Background

From Click to PiB: Scaling Enterprise Data brought together teams bringing Filecoin to enterprise customers to share learnings, opportunities, challenges and insights in scaling enterprise data on Filecoin. With deep industry experience and first-hand customer feedback from the field, sessions covered topics across the product stack. Sessions addressed the need for and potential solutions for data deletion on Filecoin. Other speakers addressed their journey in data preparation and deal-making, and the impact tools like [Singularity](https://singularity.storage/) and [Spade](https://github.com/ribasushi/spade) have had on data-onboarding velocity.

![](/uploads/0spade.webp)

[Seal Storage](https://sealstorage.io/) spoke about the importance of durability and availability in data storage, common approaches in traditional cloud storage platforms, and potential solutions in Filecoin. Community members discussed their challenges using [Fil+](https://filplus.storage/) for enterprise deals, and brainstormed potential solutions to help accelerate enterprise data onboarding. They discussed the importance of an S3-like interface to clients, and the rich app ecosystem that can seamlessly interoperate with any S3-compatible storage target. Last but not least the attendees explored interoperability platforms to seamlessly move data between storage targets with different protocol support, for example SMB, NAS, and Filecoin.

{{< youtube id="MFQ-P3nGZto" title="Designing for Durability and Availability in a Decentralized World" >}}

<p><br>
<br></p>

## Impact

The sessions resulted in several key learnings and next steps:

1. SteelDome and Seal see opportunities to accelerate enterprise adoption by addressing [ransomware protection](https://www.youtube.com/watch?v=nNfpY1rgGCg) and legal hold use cases. Both will follow up and validate these use cases and product requirements with customers.
2. Banyan shared that [current DataCap allocation](https://www.youtube.com/watch?v=uU96bIyruwo) channels present challenges to enterprises who do not want to disclose any data to notaries. They will follow up with the Fil+ team to pursue a new allocator for credentialed data aggregators.
3. Seal shared that [discoverability and compliance of storage providers](https://www.youtube.com/watch?v=MFQ-P3nGZto) is a hurdle to enterprise growth and Fil+ adoption (e.g. SOC2, ISO27001).1 The team will be following up on an enterprise SP credentialing program through the DSA.
4. Supporting access controls (users, groups, collections, policies) is key to landing enterprise adoption at scale, and yet current solutions are closed and proprietary. The Protocol Labs team will explore supporting role-based-access-controls in Boost.
5. Cryptographic verifiability is a key selling point of Filecoin, but it’s not easy to read WindowPoSt events from the chain. The Protocol Labs data onboarding team will assess the feasibility of a service to read WindowPoSt events from SPs.

{{< youtube id="nNfpY1rgGCg" title="Web2 to Web3 Data Gateway: Seamless Interoperability Between Storage Protocols" >}}

<p><br>
<br></p>

## Conclusion

All in all From Click to PiB: Scaling Enterprise Data was a dense, productive, and actionable track of sessions from diverse contributors across the ecosystem. Attendees described the track as having honest discussions with actionable next steps. The most commonly used word to describe the track was “momentum.” Now let’s keep it up!

![](/uploads/0wordmap.webp)

## Watch the Sessions

Catchup on all From Click to PiB, Scaling Enterprise Data track sessions now:

- [Mastering Phase 2: How to Make a Significant Contribution with Onboarding Quality Datasets](https://www.youtube.com/watch?v=WfgCO7i5Dm8); Stefaan Vervaet, Head of Network Growth at Protocol Labs
- [How Banyan makes Filecoin usable for enterprise](https://www.youtube.com/watch?v=uU96bIyruwo); Claudia Richoux, CEO at Banyan
- [Designing for durability and availability in a decentralized world](https://www.youtube.com/watch?v=MFQ-P3nGZto); Richard Herold, Sr. Product Manager at Seal Storage
- [Real world experience in large-scale institutional data onboarding to Filecoin at Internet Archive](https://www.youtube.com/watch?v=_5Kq-7Z0C8c); Arkadiy Kukarkin, Decentralized Tech Lead at Internet Archive
- [Web2 to Web3 Data Gateway: Seamless Interoperability Between Storage Protocols](https://www.youtube.com/watch?v=nNfpY1rgGCg); Jeff Slapp, CTO at SteelDome
- [Storj: An S3-compatible interface to decentralized storage](https://www.youtube.com/watch?v=Vou2KWiyTSI); John Gleeson, COO at Storj
