---
aliases: []
author: ""
categories:
  - updates
date: "2021-10-05T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin Plus adds a layer of social trust to the Filecoin network to
  incentivize useful storage and facilitates deals with verified clients.
image:
  alt: "Filecoin Plus: How Storage Providers Can Engage with Verified Clients"
  url: /uploads/filecoin-plus-verified-clients-1.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-plus-aligning-participants-with-useful-storage.en.md
related_article_2: content/blog/posts/understanding-filecoin-circulating-supply.en.md
related_article_3: content/blog/posts/249k-for-17-projects-from-dorahacks-filecoin-grant-hackathon.en.md
share_image: /uploads/filecoin-plus-verified-clients.webp
title: "Filecoin Plus: How Storage Providers Can Engage with Verified Clients"
_template: blog_detail
---

_Filecoin Plus adds a layer of social trust to the Filecoin network to incentivize useful storage and facilitate deals with verified clients. Read more in the_ [_Filecoin Plus docs_](http://docs.filecoin.io/store/filecoin-plus/)_. This is a summary of a presentation given at the_ [_September 2021 Filecoin Virtual Community Meetup_](https://youtu.be/0dBH_VeZr5s "September 2021 Filecoin Meetup")_. Join the_ [_Filecoin Meetup Community_](https://www.meetup.com/pro/filecoin-community/) _so you don’t miss our next gathering!_

As a blockchain network, Filecoin provides a robust and decentralized platform that anyone can use to store data. Storage providers on the network receive block rewards based on the reliable storage they provide.

In order to maximize the amount of useful storage that Filecoin can support, [Filecoin Plus](https://fil.org/filplus/ "Filecoin Plus") was introduced to offer a layer of social trust. Clients use a novel resource, _DataCap_, to make deals with storage providers who are greatly incentivized to store their data as it increases their share of block rewards over time.

## Core mechanism

Root key holders, notaries, clients, and storage providers interact through the allocation and spending of DataCap. Notaries apply through community governance and work with the root key holders to get a grant of DataCap, which they can then allocate out to clients. Those clients are then able to deploy DataCap to the storage providers in deals.

## DataCap

This is a resource within the Filecoin network that goes from notaries to trustworthy clients. These clients are using DataCap to make storage deals (in addition to FIL) based on the deal price. DataCap is a “single-use credit,” meaning it is consumed as it is used.

DataCap cannot be transferred between client addresses at this time: it only flows from notaries to specific client addresses. Storage providers can earn extra rewards on the network by serving deals made with DataCap.

## Storage provider incentives

Storage providers earn rewards based on the storage they make available to the network — both the quantity and the quality of the sealed sectors offered can have an impact on a storage providers’ return. In addition to those block rewards, additional revenue in the form of deal price is earned from actually storing data for clients.

Further, useful data that sees a high frequency of retrieval will result in even more revenue. Although the higher rate of retrieval comes with some liabilities, those are usually offset by the deal price.

In the Filecoin Plus program, storage providers see a tenfold boost to their quality adjusted power (QAP) for verified sectors, which leads to increased likelihood of earning block rewards compared to sealing _unverified_ deals. There is overall less risk of liability as clients have been vetted already through the program.

Based on the size of deals, there are three different paths to receiving DataCap. There’s a nearly instant process using an auto-notary at [verify.glif.io](https://verify.glif.io/ "Verify yourself, get verified storage") for authentication via GitHub (so a [GitHub](https://github.com "GitHub") account is necessary). Approval will offer 32 GiB of DataCap, which is useful as a starting point for clients that are new to Filecoin or for new storage providers testing out ceiling deals.

General verification is the path taken by most clients: they work with an individual Filecoin Plus notary to get an allocation of up to 50 TiB of DataCap. Required due diligence is completed by the notary and client.

Individual notaries have say over what they require for this due diligence and what processes they use — sometimes they may operate only in a specific geographic area or with data associated with specific fields of work.

Finally, for very large deals in the PiB scale of allocations, applications are placed before the entire Filecoin Plus community of notaries to help audit and vet the allocating and sealing deals, as well as their data source. This is to obtain large amounts of DataCap allocated over time.

There are a number of these applications in this group that have been approved and are currently allocating deals, with about 20 total that are in the application process overall.

## Storage provider outreach

As a storage provider, how do you find verified clients? There is a Storage Provider Table where you can add your contact info, locations served, and other details for clients to find and compare with other storage providers. This lives on the [Filecoin Plus Registry](https://plus.fil.org/ "Filecoin Plus Registry"), which is where a client goes to get verified to begin with.

Getting added to the Storage Provider Table requires simply editing and submitting a pull request on the public [Filecoin Plus Client Onboarding repo](https://github.com/filecoin-project/filecoin-plus-client-onboarding "Filecoin Plus Client Onboarding repo") with the miners.md markdown file. Other information is recorded on the Storage Provider Table including reputation score coming from the [Filecoin Reputation System](filrep.io "Filecoin Reputation System").

There are also [Filecoin Slack](https://filecoin.slack.com "Filecoin Slack") channels where storage providers can perform marketing and outreach: [#fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX) and [#fil-deal-market](https://filecoinproject.slack.com/archives/C01KCAAURAN). These channels have wide audience bases with high community engagement with various types of announcements, questions, tools that people are developing, and clients reaching out specifically asking to be connected with storage providers.

## Upcoming improvements

It is important to continue improving and increasing marketing and business development opportunities, and better deal brokering for verified clients and storage providers.

An “Opt-in to Storage Provider Outreach” process is in the works: a client will be able to indicate on their application to a notary that they want to receive outreach communications from potential storage providers. This will allow providers to easily search for applicants that have already been granted DataCap and are ready to start sealing deals. This improvement will help increase the mechanisms for storage providers to find verified clients.

Stay tuned for this and other improvements to the Filecoin Plus program.

{{< youtube id="0dBH_VeZr5s?t=149" title="Filecoin Plus: How Storage Providers Can Engage with Verified Clients" >}}

## Next steps

[Join the Filecoin Plus community](https://github.com/filecoin-project/filecoin-plus-client-onboarding "Filecoin Plus onboarding") by participating in issues and discussions on GitHub. There are various client onboarding repos and Filecoin Plus project repos. In particular, you can join the governance calls that occur every two weeks. The [Filecoin Plus Governance repo](https://github.com/filecoin-project/notary-governance/ "Filecoin Plus Governance") contains the issue announcing the next call as well as a calendar of all calls going forward. The Slack channels mentioned previously are probably the best places where the community can help answer any questions.

With these initial steps, you’ll be on your way to getting connected with verified clients in no time!
