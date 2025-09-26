---
aliases:
  - /blog/community-jonathan-schwartz-owl/
author: ""
categories:
  - interviews
cover_feature: false
date: "2020-05-05T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Jonathan Schwartz is the co-founder of Open Work Labs (OWL), a product studio
  based in Brooklyn that builds tools to improve the way people share, organize,
  and archive their work. Most of their time is spent helping other teams
  develop distributed web apps and infrastructure that they hope to eventually
  reuse on their own products.
image:
  alt: Open Work Labs
  url: /uploads/owl-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/owl-english-social.webp
title: "Jonathan Schwartz, Open Work Labs"
_template: blog_detail
---

_Welcome to the fourth installment of the Filecoin Community Highlights series, which features users and developers building essential tools and services on the Filecoin network. The goal is to inspire others to build world-class tools for the distributed web. Check out the_ [**_last post_**](https://filecoin.io/blog/community-ben-fino-radin-sdi/) _featuring Ben Fino-Radin, founder of Small Data Industries._

Jonathan Schwartz is the co-founder of **Open Work Labs** (OWL), a product studio based in Brooklyn that builds tools to improve the way people share, organize, and archive their work. Most of their time is spent helping other teams develop distributed web apps and infrastructure that they hope to eventually reuse on their own products.

**How would you describe Open Work Labs?**

Two words that come to my mind when talking about Open Work Labs are our _hope_, what we want to achieve, and our _epicenter_, what we care about. Our hope is to improve the way people share, organize, and archive their work. We care because if we had a persistent, well-organized, and publicly accessible system for managing all of humanity’s work, we should be able to learn, innovate, and collaborate more efficiently. That’s the appeal behind “open work”.

![an owl](https://filecoin.io/vintage/images/blog/openworklabs-owl-owl.svg)

OWL is currently working on **[Glif](https://www.glif.io/en)** – a set of interoperable tools on the Filecoin network.

![glif wallet](https://filecoin.io/vintage/images/blog/openworklabs-glif-icon.svg)

**Tell us more about Glif!**

Glif is an identity that represents the separate but connected Filecoin tools we’re building. Each tool can be thought of as its own “Glif”.

The web wallet Glif aims to be a simple and intuitive interface to send Filecoin and view your transaction history. It supports Ledger devices, seed phrases, and single private keys. It should work for non technical people, and also have the flexibility to accommodate developers and miners. Throughout its development we’ve published a few JavaScript Filecoin modules that might be helpful to the community, they’re at the bottom of the [**wallet readme**](https://github.com/openworklabs/filecoin-web-wallet#filecoin-modules).

To support the web wallet, we created the second Glif: a set of open-source modules to make it easier for both us and other people to spin up their own Kubernetes managed Filecoin node clusters. The cluster supports basic wallet functionality and load balances requests across nodes. We’ve also hooked in graphing and monitoring to view the cluster’s health. We intend to make it easy for anyone to get started with this setup - all of this work is open source and up on our [**GitHub**](https://github.com/openworklabs/), with more documentation coming soon.

**What were you doing before this project? And how did you get involved with Filecoin?**

Before developing Glif, we were building IPFS-Ethereum integrations into Aragon (e.g. [Quasar](https://github.com/openworklabs/quasar)), which makes it easier for people to create decentralized organizations that run on Ethereum. Prior to that, I was working on Ujo, a platform that helps artists make more money via Ethereum.

I was first introduced to IPFS when I was at Ujo – we were storing “off-chain” data there. In spare time, OWL’s co-founder, Thomas O’Brien, and I would hang at Roberta’s in Brooklyn and talk about the idea of “open work”. We thought Filecoin possessed the right qualities to serve as the persistent storage layer. So we began to familiarize ourselves with the distributed storage space in general, first starting with IPFS. It seemed to make sense for Open Work Labs to be a studio that helps other teams advance their tools by building the infrastructure for more compelling applications.

We have an ongoing company project called Streams, which is our constantly evolving attempt at helping people share, organize, and archive their work. Our current approach is to aggregate the disparate work data produced by standalone applications like GitHub, Zoom, Figma, Notion, et cetera, transform the data into more useful, queryable structures, and allow client applications to fetch, filter, and search through it. Any conversation, no matter if it was said verbally in a Zoom call, written in a GitHub commit, or commented inside a Google Doc, should be easily findable via a simple search.

Our long-term plan has always been to deposit Stream data into the Filecoin network, so your work across any individual app is backed up to a single safe place.

**What do you believe is the most exciting benefit of Filecoin and distributed storage?**

To me, the most exciting benefit is content addressable data. Juan Benet gave an excellent [**talk**](https://www.youtube.com/watch?v=2RCwZDRwk48) on this topic once where he compared location addresses and content addresses through the example of fetching a specific book.

To reiterate Juan’s point, location addressing a book is like me telling you, “Hey! You need to read this book at the NY public library – it’s on the third floor, top shelf, last book on the left!”

There are obvious problems with this approach. What if the book moved? What if the library is closed? What if someone stole a page from the book without anyone else knowing? Location addressing data is how a lot of the web works today.

In theory, content addressing makes much more sense. Referring to the previous example, content addressing a book is like me telling you, “Hey! You need to read this book called _Title_, _Author_, _number of pages_, etc.” By describing the _content_ of the book, you can get it from wherever you want. And amazingly enough, once you get the book, you can verify it was actually what you were looking for! This is a much safer model, free of, for example, bad actors changing things without other people knowing.

An exciting part of content addressing data is that once you know what you’re looking for, you can get it from anywhere! Filecoin is exciting because it incentivizes more people and machines to join in this effort. It’s the fuel that can make a network built on content-addressed data work well at scale. This enables a whole lot of cool things, some we know of (and are trying to build), and others we will probably discover down the road.

<p align="center">
![openworklabs logo](https://filecoin.io/vintage/images/blog/openworklabs-owl-logo.jpg)

**What interests you about Web3 and Filecoin?**

To me, Web3 feels like the right and safe internet. I find it promising that people in developing nations, and also those living under corrupt governments, have an unprecedented appreciation for Web3 applications.

My hope is people living in countries where internet freedom is valued will develop the same appetite for these applications and take the early precautions so that we can set ourselves up for a better, safer, and more robust web and internet. Ultimately, a majority of Web3 tools have a ways to go until they can compete with the world’s current digital experiences. We at Open Work Labs are happy to be a studio that helps to build and advance this infrastructure.

In terms of my interest in Filecoin, I’m familiar with a lot of projects in this space, but funny enough, of all of them, Filecoin made the most sense when I explained it to my _parents_, so that was telling! If they can understand it, then many others can, too.

Lastly, it _feels good_ to build on safer, consumer-focused technology and applications. At the end of the day when I hit a weird bug, or face an uphill technical battle, it’s easy to remind myself that I’m working on (what I believe to be) important problems for the future of the web and internet. No better way to fire me up.
