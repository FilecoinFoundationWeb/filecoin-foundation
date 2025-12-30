---
aliases:
  - /blog/spark-challenge-one/
author: ""
categories: []
date: "2020-09-08T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In June, we shared the news that Filecoin was participating as a challenge
  partner in the Spark University Hackathon, an eight-week online competition
  focused on the development of novel blockchain solutions.
image:
  alt: "Spark University Hackathon Winners: Challenge One"
  url: /uploads/spark-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: ""
title: "Spark University Hackathon Winners: Challenge One"
_template: blog_detail
---

In June, we shared the news that Filecoin was participating as a challenge partner in the [Spark University Hackathon](https://filecoin.io/blog/spark-university-hackathon/), an eight-week online competition focused on the development of novel blockchain solutions. The hackathon ran from June to August, and we are excited to announce the winners of the first of two Filecoin-focused challenges we sponsored. The challenge had the following prompt:

_Build a system for storing, retrieving, and verifying scientific or other research data on Filecoin. Filecoin will store treasure troves of critically important public data, such as encyclopedias, open access scientific papers, Creative Commons data sets, historical documents, and literature. In this challenge, you will explore those possibilities for storing, using, and distributing public data. You may wish to take advantage of Filecoin’s data integrity & verification capabilities, or reference the Starling Storage project for inspiration._

## Third Place

### Filecoin Research Repository

![Filecoin Research Repository](https://filecoin.io/vintage/images/blog/filecoin-research-repository.jpg)

Our third place winners are the team behind the [Filecoin Research Repository](https://github.com/sarangparikh22/research-app-filecoin). Their project implements a decentralized repository for research papers, aiming to further democratize access to high-quality research, as well as lower the barrier to contribution by making funding more accessible. On their distributed platform, which is implemented using Ethereum smart contracts, research papers are uploaded to the Filecoin network and made freely available. Authors who publish to the platform can solicit grants from readers interested in their work via a built-in crowdsourcing feature, facilitating low-friction, world-wide patronage of interesting research.

[Watch the demo.](https://youtu.be/8cWbiYLk1kM)

## Second Place

### Filecoin Pricing Mechanism

![Filecoin Pricing Mechanism](https://filecoin.io/vintage/images/blog/filecoin-pricing-mechanism.jpg)

A critical concern in the use of the Filecoin network as a repository for research data is the friction involved in selecting and negotiating with suitable storage miners to custody one’s data. The winners of our second-place prize are the team behind the [Filecoin Pricing Mechanism](https://github.com/harnen/FilecoinPricingMechanism) (FPM), which automates this process.

FPM is built as a smart contract on top of the Ethereum blockchain. The platform asks sellers to submit their minimum ask, and buyers to submit their maximum bid. Taking into account additional constraints, such as the length of a desired deal, FPM solves a multi-item auction, deriving an optimal assignment of buyers to sellers, as well as a fair price for each proposed deal.

The solution to the auction is computed off-chain; any node is capable of computing and submitting it. The team behind FPM designed a lightweight verification protocol that enables any other node to quickly verify the correctness of a submitted solution, or else derive a proof of misbehavior that can be verified on-chain.

[Watch the demo.](https://youtu.be/hM1afoJ4KCI)

## First Place

### DeepVerse

![Filecoin Pricing Mechanism](https://filecoin.io/vintage/images/blog/deepverse.jpg)

Finally, our first-place winners: [DeepVerse](https://deepverse.co.uk/)! The DeepVerse team tackled a pressing problem: how, in a world that is both increasingly privacy-conscious and yet eager to glean insights via machine learning, can we work collaboratively to develop better analytical tools without fear of compromising the data of our subjects?

DeepVerse leverages numerous blockchain technologies to build a platform that is both collaborative and competitive. To achieve this, the team exploited the insight that researchers may often be able to share models they derive, even if they can’t share the data used to generate their models. DeepVerse allows researchers to make the machine-learning models they’ve developed publicly available, using the Filecoin network to store and distribute them.

The team also utilizes NuCypher to allow researchers to easily share research data with trusted collaborators. Building on top of this foundation, they implemented smart contracts that facilitate competition among researchers, allowing them to race one another to achieve a predetermined level of model performance on a given set of data.

[Watch the demo.](https://youtu.be/ryuxdeZkeqY)

Congratulations to all of our winners! Our thanks go out to the organizers of the Spark Hackathon, as well as to the hundreds of participants from around the world whose interest and ingenuity made this competition possible. Your creative ideas continue to drive web3 forward!

Stay tuned for a follow-up article featuring the winners of our second challenge!
