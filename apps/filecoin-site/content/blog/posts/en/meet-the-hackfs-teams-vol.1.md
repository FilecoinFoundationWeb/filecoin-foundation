---
aliases:
  - /blog/hackfs-teams-vol-1/
author: ""
categories:
  - updates
date: "2020-07-01T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Welcome to the sixth installment of the Filecoin Community Highlights series,
  which features users and developers building essential tools and services on
  the Filecoin network.
image:
  alt: "Meet the HackFS Teams: Vol. 1"
  url: /uploads/hackfs-teams-vol1-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hackfs-teams-vol1-social.webp
title: "Meet the HackFS Teams Vol. 1: Omo Earth, Pygate, Unchained Index, Padlock"
_template: blog_detail
---

_Welcome to the sixth installment of the Filecoin Community Highlights series, which features users and developers building essential tools and services on the Filecoin network. We hope this post, as well as others in this series, inspires you to join the movement and build world-class tools for the distributed web. Check out the last post featuring Juan Leni,_ [_co-founder of Zondax_](https://filecoin.io/blog/community-juan-leni-zondax/)_, which is building cryptographic libraries, hardware wallet integrations, ledger apps, and GPU accelerated software for Filecoin._

This week we’re featuring four teams participating in [HackFS](https://hackfs.com/), a month-long hackathon co-hosted by Protocol Labs and ETH Global, designed to showcase the power of Web3. Participants are building anything and everything that can benefit from decentralized storage, from dapps and games, to dev tools and defi integrations. Throughout the month, we’ll check in with different teams to dive deeper into their work.

This week, we talked to:

1. OMO Earth
2. Pygate
3. Unchained Index
4. Padlock

**If you’re participating in HackFS and want to be featured in next week’s Community Highlights,** [**send us a note**](mailto:rachel@protocol.ai)**.**

**Team members:** Samuel Andert and Philipp Bartels

**What we’re working on:** We’re building a crowdfunding platform that’s offline first, where we can put the business logic of the software that people need in a decentralized network. And with Filecoin, users will be able to back up their data to make sure it’s secure. We discovered Textile last summer. We were building a database based on IPFS – because we didn’t want a central database server. And we started looking around to see if anyone was already working on this. If not, we’d have to build it on ourselves. We were so happy to discover that Textile is working on this at high speed and with great features.

Our goal is to have a full working prototype of the platform by the end of July. We’re building a subscription-based crowdfunding platform, similar to Patreon, where the earlier you sign on as a backer the more benefits there are down the line. And what we’re building is offline-first and built using the Circle Universal Basic Currency protocol. The idea is that every user starts with their own universal basic income (UBI) currency and through trusted connections they’ll be able to pay each other and pay other businesses. We’re growing basic income from the bottom up without depending on a central government. And in this model we’ll rely on Filecoin to back up our data.

## Team: Pygate

![Pygate Diagram](https://filecoin.io/vintage/images/blog/hfs-pygate.png)

**Team members:** Peter Van Garderen, Leonard Ge, Antreas Pogiatzis, Chinonso Eze, and Art Richards

**What we’re building:** Pygate is a HackFS project to build a gateway to the Filecoin network and IPFS technology for [Pythonistas](https://www.pythonistaplanet.com/pythonista/). To date, most of the tooling has been geared toward Javascript and Golang developers.

The project is divided into four phases, each with its own deliverable. The first is a Python gRPC client for Textile’s Powergate API. We’re also building a Flask Web API that uses the gRPC client to expose Powergate functionality via HTTP REST and possibly Web Sockets. Third, we’re working on an Electron desktop application that is a client to the Web API. It allows for uploading and downloading to the Filecoin network. It also manages the Filecoin wallet and monitors storage deals and network redundancy/uptime. And finally, we’re building an Ethereum smart contract that holds funds in escrow and releases them as new Filecoin storage deals are made by the client. Users can set their preferences for how often to renew mining deals and how many nodes to use to accomplish their requirements for pricing and resiliency.

Each project is intended to serve as a stand-alone component that can be used in other projects.

**Team origin:** Peter has been thinking about ways to build on Filecoin since before HackFS launched. He wanted to build his first apps on Filecoin using Python, and when he realized there was not yet Python tooling available \[currently there’s Go, C++, Rust, and Javascript\], his first step was to build a pygate gRPC client for Powergate. Peter notes, “I began scoping out a larger vision, broken into phases. I joined HackFS the weekend before kickoff, posted this idea in the HackFS Slack channels, and within 36 hours had built a team, joining forces with two experienced Python developers Lenoard and Antreas, along with a blockchain expert, Art, and a smart contracts expert, Chinonso. Collectively, the team is working to bring Python tooling to Pythonistas to open up the Filecoin network to new audiences. By quickly putting together a qualified team, we’ve been able to get much further hacking on this project than I would have on my own.”

## Team: Unchained Index

![TrueBlocks](https://filecoin.io/vintage/images/blog/hfs-trueblocks.png)

**Team members:** Thomas Jay Rush and Meriam Zandy

**What we’re building:** We’re building an app that naturally produces deterministic, time-ordered, easily-chunked (or snapshotted) data. IPFS, being a content-addressable file system, is a great fit. We’re trying to create a way to extract data from Ethereum in a way that looks directly at the data on the node, and we’re exploring ways to incorporate Filecoin.

Our project is called [TrueBlocks](https://github.com/Great-Hill-Corporation), which is a blockchain scraper. We look at every block in the blockchain and we extract the addresses that appear anywhere in that block. A few years ago, there might have been four or five addresses in a whole block because there were only one or two transactions. Today, there’s hundreds of transactions and probably 300-400 different addresses in a block. So we’re indexing those blocks for those addresses.

Once we have that index we can look directly at the history of an account in full detail, and extract from the chain all of the data for a specific account. And we’re building applications that take advantage of the fact that we have this index.

**How we got involved:** Thomas has been tracking the progress of content addressable networks for decades. Thomas said, “Twenty years ago, I worked for IBM and there were people there that were working on these kinds of systems, these data stores, but the computers weren’t powerful enough. Still, it made perfect sense back then, and it does today. I joined HackFS with my wife, Meriam Zandi. She’s my partner in this (we’ve been married 32 years!). She recently retired from Goldman Sachs, where she was a financial analyst. She’s really the perfect person to have by my side as we think about these complex systems.”

**The problem we’re trying to solve:** We’re trying to deliver data to our end users with the same high quality and ease-of-use as the old-fashioned Web 2.0 methods, but with none of the downsides, such as privacy invasion, user capture, censorship. All of these things are promised by the Web 3.0 stack, but we don’t see a lot of examples where it’s really working that way.

Thomas says: “I’ve been working in tech for a long time. I was there when we shifted from no web to the web back in the 90s. So I’ve seen a paradigm shift or two in my lifetime. And I jumped right into the full paradigm shift of Web3.”

## Team: Padlock

![Padlock](https://filecoin.io/vintage/images/blog/hfs-padlock.jpg)

**Team members:** Can Kisagun, Taariq Levack, Michal Schachman, Ahmed Tawfeeq, and James Waugh

**What we’re building:** Padlock is a tool to help artists monetize their creative work on the decentralized web. Users can buy or sell access to exclusive content hosted on IPFS and Filecoin. This could be any kind of art, such as music, images, virtual experiences, or written content.

Padlock will generate unique decryption keys for each purchase and store them in the encrypted state of a privacy-preserving “secret contract” on the [Secret Network](https://github.com/enigmampc/SecretNetwork), a proof-of-stake blockchain based on Cosmos SDK and Tendermint. Secret Network is designed to create a scalable and interoperable smart contract system that enables programmable privacy – allowing developers to build applications that run computations with encrypted inputs, outputs, and state, without revealing the data.

Because Padlock is meant to be a generalized solution for paid access control, it must remain modular and flexible in two main ways:

1. in how content is “padlocked” (uploaded + encrypted)
2. in how content is unlocked, involving a secret contract for key management and various methods for payment

**How we got involved with HackFS:** Can, Taariq, and James were looking into use cases for the Secret Network, and it seemed like trust-minimized access control is a versatile building block. Plus, they are familiar with IPFS and have participated in several ETHGlobal hackathons. Michal and Ahmed joined the team after learning about Padlock on Slack.

Interestingly, James helps organize an event called the [Rare Art Festival](https://medium.com/makersplace/virtual-rare-art-festival-2020-b956e521e42e), a unique annual gathering that brings together people from the cryptoart world. Over the years, this event has featured major NFT platforms. Many of them use IPFS, such as SuperRare, KnownOrigin, and OpenSea. We believe leaders in the space are looking for a general solution that can be integrated into existing platforms for buying/selling experiences.

**What we’re hoping to accomplish during HackFS:** In this hackathon, we’re building a reusable mechanism for creators to encrypt anything and sell private keys which unlock that content. The idea is to use Secret keys, which are stored in a privacy-preserving smart contract on Secret Network. We’re intentionally developing a product to be used by existing media platforms in Web2, Web3, and beyond.

[Textile’s Powergate API](https://docs.textile.io/powergate/) is a big part of what we’re doing. We’re aiming to create a framework that developers will use for encryption, storage, and payment. This might be something platforms can leverage within their communities. We want to provide a malleable implementation of Powergate for deploying multi-layered storage across IPFS and Filecoin in order to facilitate potential integrations.
