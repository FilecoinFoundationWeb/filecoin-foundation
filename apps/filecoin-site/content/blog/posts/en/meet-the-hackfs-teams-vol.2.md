---
aliases:
  - /blog/hackfs-teams-vol-2/
author: ""
categories:
  - updates
date: "2020-07-24T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Welcome to the seventh installment of the Filecoin Community Highlights
  series, which features users and developers building essential tools and
  services on the Filecoin network.
image:
  alt: ""
  url: /uploads/hackfs-teams-vol1-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hackfs-teams-vol2-social.webp
title: "Meet the HackFS Teams Vol. 2: Kazan, Parcel, EduVault"
_template: blog_detail
---

_Welcome to the seventh installment of the Filecoin Community Highlights series, which features users and developers building essential tools and services on the Filecoin network. We hope this post,_ [_as well as others_](https://filecoin.io/blog/community-jonathan-schwartz-owl/) _in this series, inspires you to join the movement and build world-class tools for the distributed web._

Last week we [highlighted](https://filecoin.io/blog/hackfs-teams-vol-1/) OMO Earth, Pygate, Unchained Index, and Padlock – four bootstrapping teams taking part in [HackFS](https://hackfs.com/), a month-long hackathon co-hosted by Protocol Labs and [ETH Global](https://ethglobal.co/), designed to showcase the power of Web3. This week, we talked to three more teams to learn more about their work, how they got involved with HackFS and why they’re building on Filecoin.

## Team: [Kazan](https://github.com/samikshan/kazan)

![Kazan](https://filecoin.io/vintage/images/blog/hfs-kazan.png)

> _“If I play guitar and put out a track, someone else can add drums, and another person can add vocals, and the collaboration goes on and on. The possibilities are endless.” – Samikshan Bairagya_

**Team member:** Samikshan Bairagya

**What I’m building:** This project is what my mentors call a “scratching-your-own-itch” kind of idea. As an amateur drummer, I tend to pick up drumless soundtracks from SoundCloud and play drums on top of them. It doesn’t help that there is no way right now to listen back to the combined sound and then improve on it or publish the mixed track back if it sounds good enough to me. Kazan can plug this gap.

Kazan is an app that should let musicians discover new tracks to jam to and republish them for maximizing further collaboration, while making sure that content creators maintain direct control over their data. I think Kazan is one of the better use cases for decentralization in the application space for music. And the grand vision is to include other artists, too, like lyricists/poets or people who excel at making album art or even music videos.

**Why Kazan:** “Kazan” means cauldron in Turkish. The imagery of a giant enchanted cauldron brewing music with all the different sound components acting as ingredients inspired the naming of this application.

**How I got involved with HackFS:** I joined the ETH Global mailing list a few months ago and got an email from Trent announcing HackFS. I had leaned toward using a decentralized storage model for this application and thought it would be a great platform for me to take this idea and bring it to fruition. As I learned more about the recent developments in the ecosystem around IPFS and Filecoin, with some powerful APIs from [Textile](https://textile.io/), I realized I could make a feasible prototype during HackFS. This led me to applying to HackFS with this idea and with a goal to build a functioning prototype for a music collaboration application powered by IPFS/Filecoin and the ecosystem around it.

**My HackFS experience to date:** The HackFS workshops did a great job at getting me started initially with the decentralized storage model for the application. Having started with a design utilizing Textile’s Powergate APIs for a tiered storage model on IPFS and Filecoin, I later changed my approach to utilize Textile Hub instead through the use of Buckets and Threads. While my project doesn’t use libp2p directly, I learned about the technicalities around building a decentralized application using libp2p. I also learned a lot through building my application’s user authentication around [Hedgehog](https://hedgehog.audius.co/) (by Audius) and integrating Hedgehog identity with Textile. Other than these, I’ve also been learning the [VueJS](https://vuejs.org/) framework along with [TypeScript](https://www.typescriptlang.org/) and simultaneously writing the frontend on it.

**Why I’m hacking solo:** I haven’t done very many hackathons before. The last one I participated in was in 2018. But I have a clear vision for this application – I’ve been thinking about it for a long time. The truth is, I’m not very proficient in UX and front-end design work, so I’m taking this opportunity to really learn about making an application from a customer point of view. This is really a learning opportunity for me.

**Team members:** Tarun Gupta, Anubhav Girdhar, and Brennan Fife

**What we’re building:** Parcel is a decentralized crypto payroll service with built-in data privacy and end-to-end encryption using Filecoin, IPFS, Textile’s [Powergate](https://docs.textile.io/powergate/) and [Sablier](https://sablier.finance/) for money streaming. We’re using all of the tools available to us to build a service that’s superior to what’s on the market right now. Because today, no one is building anything based on data privacy. And none of the current crypto payroll apps are truly decentralised and seamless.

**Why we joined HackFS:** We developed the initial idea for this during [Hack Money](https://hackathon.money/), also hosted by ETH Global. We wanted to build an app that could work with multiple tokens, but we couldn’t find a product that would work nicely. So we decided to build the app ourselves. We’re interested in the idea of money streaming. We started thinking about how to implement Sablier and use that feature to stream salaries for employees.

Initially, we didn’t intend to build this exclusively for crypto payroll. But over the last month, we looked at what was available on the market and decided this was a hole we could fill. As far as we can tell, there’s currently just one major player out there in the crypto payroll space and it already has over 100 clients. That was the product validation we needed.

**How we’re integrating Filecoin and IPFS:** To build this the right way, company data has to be private and secure. Current systems are prone to attacks and data leakage. We want to build a system where data is stored on IPFS and Filecoin rather than on centralized systems. And we plan to offer end-to-end encryption, so that only the people with keys can access their data. Our goal by the end of this month is to finalize the architecture and build out a proof of concept.

## Team: [EduVault](https://github.com/eduvault)

![EduVault](https://filecoin.io/vintage/images/blog/hfs-eduvault.png)

**Team members:** Jacob Cohen-Rosenthal, Aqeel Mohammad, Monica Kumaran, and Brian Schwartz

**The idea behind EduVault:** We’re starting with the premise that artificial intelligence can be an amazing tool to guide one’s education. But to do that, the AI needs to know everything that you know, which in today’s world would give one company, one platform, a very deep level of insight into your data.

Today, many of the online platforms we use, including EdTech platforms, collect a lot of data about us, and they sell that data to whomever. EduVault essentially creates a private cloud for digital learning data, so that students can tweak lesson plans to meet their needs, without giving information to third parties or advertisers. If you want, as a user, you can sell that data, or you anonymize it and sell it to the ad machines that build recommendations. But the point is, you don’t need to share your data by default.

Ultimately, with EduVault, you’ll be able to bring your data with you between apps, and sync the information between education apps. This interoperability could unlock powerful new use cases and create better learning experiences.

![Eduvault MVP](https://filecoin.io/vintage/images/blog/hfs-eduvault-mvp.png)

Until now, it was very difficult to build a cloud that was private. To truly own your own data you need two things: access control and availability. Access control is achievable by having your data encrypted. Availability means that no one else can take down your data. For example, you could encrypt your database and put it on a centralized cloud storage service, but that service could one day restrict your access.

That is what’s revolutionary about tools like IPFS and Filecoin and Textile’s [ThreadDB](https://textile.io/#threads). With Filecoin, for example, you could put up a contract and have it pinned by multiple sources, ensuring that it’s always pinned somewhere. And you could encrypt it and make sure it’s always available.

**Our goal during HackFS:** Right now we’re using IPFS in a simple way with [Pinata](https://pinata.cloud/) as a backup. The next step is to start using Textile Threads to meet these higher goals of user ownership and sharing. The MVP for HackFS is to start using Textile for our Flashcard app. We’re starting with a mini-version of the Flashcard app and creating a little playground to use Textile and testing it out. And eventually we’ll move Textile to the main app.

We want to leverage Filecoin so that users have an easy way to pay to secure their data. We’re pinning on Textile, replicating on Pinata. And Filecoin will add another layer of robustness.

**Thinking about EdTech in the wake of this global pandemic, as more students learn remotely:** EdTech is such a large ecosystem. If schools adopted something like EduVault it could give parents peace of mind about their kids’ data. But it could also democratize development of apps. A child who wants to build an app or plug-in on top of EduVault could have access to his or her own data to start building.
