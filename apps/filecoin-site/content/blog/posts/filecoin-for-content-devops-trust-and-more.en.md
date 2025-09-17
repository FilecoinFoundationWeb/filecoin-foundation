---
aliases: []
author: ""
categories:
  - interviews
  - events
date: "2021-02-25T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  A look at the startups from Filecoin Launchpad Demo Day under the “Enterprise”
  category.
image:
  alt: ""
  url: /uploads/blog-filecoin-news.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-for-media-video-gaming-and-more.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-events-launchpad-socialmedia-enterprise1.webp
title: "Filecoin for Content, DevOps, Trust, and more"
_template: blog_detail
---

The Filecoin Launchpad Accelerator, powered by Tachyon, hosted a Demo Day to showcase 13 startups building more interoperable, open, and programmable tools, applications, and infrastructure for the decentralized web. 33 founders from 11 countries participated in an immersive 12-week program bridging the IPFS, Filecoin and Ethereum communities. This post profiles the startups launched in the “Enterprise” category: Myel, Valist, PowerLoom, and Kotal.

## Myel

_Community powered content delivery network._

{{< youtube id="3vFXeUiAWL4" title="Myel" >}}

**What is Myel?**

Myel offers a decentralized CDN for Web3 applications to retrieve content faster from Filecoin via a secondary retrieval market.

**What does Myel do?**

Web applications are growing more demanding of bandwidth, and emerging technologies such as VR require expensive infrastructure that is slow to scale to meet future demand. Further, to be used beyond cold storage, Filecoin needs a secondary retrieval market so content can be retrieved faster. There is currently no decentralized CDN for Web3 applications, and most rely on Web2 CDNs, which can be central points of failure.

We make it easier for applications to retrieve content stored on Filecoin without needing expensive infrastructure. Users can pay for CDN services directly in FIL and combine it with storage deals.

## Valist

_Secure code signing and global software distribution made easy._

{{< youtube id="DNE7QBplVRo" title="Valist" >}}

**What is Valist?**

[Valist](http://valist.io/) allows developers to publish software and firmware to decentralized storage networks, and tie them to strong access control. Valist also supports universal integrations with existing package managers like NPM and Pip, as well Docker (with many more coming soon).

**What does Valist do?**

Right now, most Web3 tools are still being distributed over Web2. Valist is changing this, while still providing a bridge back to Web2. They eliminate single points of failures like Certificate Authorities, centralized access control systems, and cloud providers.

Valist supports "Multi-Factor Releases" - aka multisig for software releases - where publishing a package requires multiple developers or build servers to sign off on the release before it is published. This reduces the chances for software supply chain attacks, like a build server being compromised, or developers keys being stolen to publish malware.

Valist enables you to distribute software securely using Web3 infrastructure, rather than relying on centralized cloud providers and fragile access control systems. Valist is bringing many of the most popular Web3 and Web2 packages to the Filecoin ecosystem, and reducing the reliance on third parties to maintain software that the world relies on.

**How can I learn more about Valist?**

Valist is currently building out a CLI with first-class CI/CD support. Soon, users will be able to plug Valist into their GitHub Actions, Gitlab Runners, or their current pipeline to publish software directly to Web3 networks. All without a custom backend or setting up storage!

Learn more about Valist on [GitHub](https://github.com/valist-io/valist)!

## PowerLoom

_Scaling trust as the first verification primitive._

{{< youtube id="y0hxjcAYeac" title="PowerLoom" >}}

**What is PowerLoom?**

[PowerLoom](http://powerloom.io/) Protocol aggregates on-chain and off-chain data to generate snapshots with cryptographic proofs in a decentralized manner. It aims to build trust and offer meaningful insights on demand through a rich ecosystem of peers and stakeholders that are incentivized to participate in the protocol.

**What does PowerLoom do?**

With most DeFi protocols, there are a lot of moving pieces, layers, and stakeholders. The complexity is daunting. For the blockchain industry to grow sustainably, seriously and to scale, we must adopt trust based on verification.

The snapshotted data from the PowerLoom protocol is designed to be hot-stored on IPFS and anchored on the Filecoin network. This allows for peers to affordably and easily store/retrieve data vs. centralized services. As an extension, others in the Filecoin ecosystem can also leverage the datasets for their own use and/or further build on top of it.

PowerLoom recently launched [a preview with Polymarket](https://medium.com/powerloom/polymarket-audits-68ec7273ef8c) and recapped their [Gitcoin Grants audits](https://medium.com/powerloom/gitcoin-gr8-audits-eb87a29e21ce).

**How can I learn more about PowerLoom?**

Learn more about PowerLoom at [powerloom.io](https://powerloom.io/) (and, they’re hiring - [check out roles](https://wellfound.com/company/powerloom/jobs)).

## Kotal

_Simplifying blockchain devops._

{{< youtube id="YJHPKc1BjtA" title="Kotal" >}}

**What is Kotal?**

Kotal is an open source, multi-client, cloud-agnostic Blockchain Kubernetes Operator that makes it easy to deploy highly available self-managing, self-healing blockchain infrastructure (networks, nodes, storage clusters) on any cloud.

**What does Kotal do?**

Blockchain devops is very hard, expensive, and time-consuming with lots of overhead and risk. As a result, dapps depend heavily on centralized services to integrate with blockchain protocols. Kotal makes blockchain devops simple, enabling faster development and sustainable decentralization.

With Kotal, you can:

- Deploy highly available blockchain networks and nodes.
- Join public networks like Ethereum and Bitcoin.
- Join test networks like Rinkeby, Ropsten, and Goerli.
- Launch your own validator or baking node,
- Create and join private consortium networks.
- Create decentralized storage clusters.
- Be your own Infura.
