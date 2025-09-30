---
aliases: []
author: ""
categories:
  - events
date: "2021-06-22T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  A look into the past, present, and future of a Lotus node from the Retrieval
  Market Builders Mini-Summit.
image:
  alt: ""
  url: /uploads/fil-retrieval-market-lotus.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-retrieval-market-lotus.webp
title: The Evolution of a Lotus Node
_template: blog_detail
---

## Lotus & Retrieval Markets Builders Summit

The purpose of the Retrieval Market Mini-Summit was to gather all the builders of the multiple Retrieval Market solutions, highlight the progress made so far and identify how the multiple systems can come together in a way to increase the retrieval deals efficacy, efficiency and reliability for users of the network.

All the [talks from the summit were made available on the Filecoin Channel](https://www.youtube.com/playlist?list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2).

In [April’s Retrieval Market Builders Mini-Summit](https://www.youtube.com/watch?v=QuE_NotFCXs&list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2), [Raul Kripalani](https://github.com/raulk) (libp2p and Filecoin core dev) led a deep dive on the architecture of a Lotus node and the changes planned, specifically to the lotus-miner nodes, to better fit the needs of miners and network participants. The full talk is [available here.](https://www.youtube.com/watch?v=cmrLfnqzflk) The talk aimed to highlight the work needed to ensure retrieval deals were highly reliable and scalable for Lotus miners - helping ensure a Filecoin retrieval market would build on a robust foundation.

[Lotus](https://github.com/filecoin-project/lotus) is an implementation of the Filecoin network, written in Go. As the first of Filecoin’s implementations, Lotus is designed to set a solid and resilient foundation for the network as a whole. One of the core functions of any Filecoin node is to enable both storage and _retrieval_ of useful data - and thus set the groundwork for a robust retrieval market on the Filecoin network.

## The Evolution of a Lotus Node

The Filecoin ecosystem is moving quickly, and ecosystem tools like Lotus are constantly evolving to meet the needs of the network and experiment with future opportunities. Retrieval markets in particular will introduce new capabilities to the Filecoin network, including indexing, CDNs, public retrieval, and more.

The issue we have identified is that these new retrieval market capabilities will rely on a robust miner foundation - and today Lotus miners tend to work _around_ certain features they find either unstable or unprofitable. At the end of the day, this is good behavior to witness from miners; it helps the Lotus implementation evolve to meet their needs. When network participants start short-circuiting certain features, it indicates that the software itself should be providing more flexibility and modularity to its users.

Through this observation, we realized that Lotus’ _monolithic binary_ was preventing flexible and robust operations for Lotus miners, and identified opportunities to address the problem.

![](/uploads/pl_lotus1.webp)

### The Monolithic Binary

So far, the architecture of a Lotus node has been largely monolithic. There are two distinct entry points to Lotus: 1) a full node, and 2) a miner. However beyond this, network participants have very little optionality for which responsibilities in the storage lifecycle to take on. Miners, for example, are tasked with mining, proving storage, deal making, and more. These are fundamentally different responsibilities, but they are coupled together by the current lotus-miner architecture.

### The Problems with Monolithic Architecture

Broadly speaking, this monolithic architecture precludes miners from effectively allocating their resources between discrete responsibilities. Forcing combined responsibilities contradicts the core motivation of miners, which is to maximize profit while minimizing operational risk. Specifically, there are a number of problems with the monolithic binary.

**Fragility:** bugs in one area can leak and impact other critical processes when there is no segregation within the architecture. This makes it difficult to segment between critical and non-critical processes, and opens up the entire instance to crashing.

**Increased attack surface:** certain processes of a Lotus miner require exposing public endpoints, which opens up that portion of the system to vulnerabilities. If the architecture is monolithic, a single public endpoint can jeopardize the entire system.

**Feature bloating:** within Filecoin’s mission, miners not only store and serve raw data, but they provide useful services on top of it, such as indexing, discovery, and more. Overloading a single process with new miner-side features causes further apprehension and operational risk.

**Inability to scale:** different capabilities require different features and different upgrade processes. Attempting to manage these different capabilities in a monolithic system is difficult, and leads to slow iteration and growth.

**Lack of fine-grain control:** because miners cannot actively opt-in or opt-out of features, they have to work around them through mechanisms such as refusing deals, setting high prices to dissuade deals, or even forking the codebase.

**Slower iteration:** a monolithic architecture means it’s more difficult to test and innovate, because there exists no easy way to segregate new components and opt-in to an experimental feature without bringing it into the entire system.

### Towards a Modular Miner Architecture

Looking at the responsibilities of a Lotus miner under the hood, two distinct categories emerge: mining operations and markets. These two layers share very different services and SLAs. For example, the mining operation of a Lotus miner is its most economically profitable activity, and also private in nature. The market operation, however, is entirely public and operates under different profitability models.

![](/uploads/pl_lotus2.webp)

[_More responsibilities of lotus miners_](https://github.com/protocol/web3-dev-team/blob/main/proposals/lotus-miner-runtime-segregation.md#context)

Using this initial categorization, the first step towards a modular miner architecture that addresses the downsides of monolithic architecture emerges: _separate the Lotus miner process into 1) the Lotus markets process and 2) other Lotus miner processes._

By separating markets and mining, the architecture of a Lotus node becomes more feature-specific for miners, allowing them to align themselves with the responsibilities that best fit their capabilities and their economic preferences for the network.

![](/uploads/pl_lotus3.webp)

### Design Principles

While proceeding down this new path towards a more modular miner architecture, Lotus will continue to uphold a number of design principles:

**Avoiding microservice architecture-like complexity:** explicitly avoiding complicated webs of interdependencies that quickly translate into spaghetti architectures and require specialised tools like service meshes to govern and debug. This is the wrong level of complexity to introduce to Lotus. Order and hierarchy still belongs, as these processes are still part of a single cohesive unit

**Simple hub/spoke architecture:** Lotus is moving towards a hub and spoke architecture, which is governed by supervisor instances. These supervisors know which capabilities are provisioned in the deployment and which nodes offer them. They also serve as the external API entrypoint into the aggregate.

![](/uploads/pl_lotus4.webp)

**Worth the investment on many fronts:** the new Lotus architecture must be worth the investment. In addition to profitability, some other ROI factors include reliability, security, developer agility, and robustness.

**Robust distributed process lifecycle supervision:** a modular architecture cannot mean an entirely isolated one. If something fails and it means other downstream services are going to fail, then the entire system must be able to notice and react.

To design this new runtime, we are inspiring ourselves in models like Erlang/OTP and actor-oriented programming (e.g. Akka in the JVM world), and borrowing select concepts and abstractions from service meshes and orchestrators, without actually relying on those frameworks wholesale.

## More Resources

To learn more about Lotus and the path towards a modular miner architecture, see:

[Lotus GitHub](https://github.com/filecoin-project/lotus)

[Proposal: Miner Runtime Segregation](https://github.com/protocol/web3-dev-team/blob/main/proposals/lotus-miner-runtime-segregation.md)

[Draft Prototype](https://github.com/filecoin-project/lotus/pull/5983)
