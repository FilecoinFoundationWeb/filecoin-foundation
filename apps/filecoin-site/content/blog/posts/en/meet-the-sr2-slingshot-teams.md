---
aliases:
  - /blog/meet-the-slingshot-teams/
author: ""
categories:
  - updates
date: "2020-10-02T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We’re about a week into the Space Race 2 Slingshot competition, and it is off
  to an exciting start! So far, 370+ participants have made over 125,000 storage
  deals to store valuable data on the Filecoin network, competing for a
  potential 500,000 FIL prize pool.
image:
  alt: Meet The SR2 Slingshot Teams
  url: /uploads/learning-store-data-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/slingshot-meet-teams-social.webp
title: Meet The SR2 Slingshot Teams
_template: blog_detail
---

We’re about a week into the Space Race 2 Slingshot competition, and it is off to an exciting start! So far, 370+ participants have made over 125,000 storage deals to store valuable data on the Filecoin network, competing for a potential 500,000 FIL prize pool. If you haven’t registered yet, it’s not too late! Sign up at [slingshot.filecoin.io/register](https://filecoin.io/blog/posts/the-journey-to-filecoin-mainnet-liftoff/).

This week, we talked to four teams to learn more about their work, how they got involved with Slingshot and why they’re building on Filecoin.

## Team: Fin-File

![Fin-File](/vintage/images/blog/fin-file.png)

**Team Members:** @John_Mc and and @Daniel Kurzweil

**What are you building?** Our app, Fin-File, was initially developed in July during [HackFS](https://hackfs.com/). It’s a Python-Flask app that allows the user to generate price data charts and .xlxs spreadsheets for U.S. stocks and the top 100 cryptocurrency tokens. We are working to make it a financial and digital asset data store where users are able to push and retrieve these datasets for use in investment analysis.

**What was the idea behind your project?** Having worked in the financial services industry for several years previously, and having been involved in the crypto space for several years as well, we have found that a data store where someone could retrieve these data types all in one place would be time-saving and convenient for institutional and individual investors.

**How are you using Filecoin?** Through [Textile](http://textile.io/) [Powergate](https://docs.textile.io/powergate/), [Hub](https://docs.textile.io/hub/), and [Buckets](https://docs.textile.io/buckets/), and the Filecoin community’s expert guidance, we are able to store structured and indexed fundamental (token and project stats) and technical (trading and chart data) datasets that are pushed to the “hot” storage layer (IPFS) for quick, basic data retrieval or to the “cold” layer (Filecoin) for more granular, specific data used to build investment portfolios and analysis reports or develop trading bots.

**Why did you join Slingshot?** We joined the competition to stay close to the Filecoin community, to improve the Fin-File app for better user experience, and for the pure enjoyment of building on Filecoin, which is probably the best community we have dealt with in terms of support in the crypto space.

**What resources have you found useful on your Slingshot journey so far?** The [Master Classes](https://www.youtube.com/watch?v=Id4SRT9_2CM&feature=youtu.be&ab_channel=Filecoin) hosted by Andrew Hill and team have solved my team’s specific difficulties and put us on the right path.

## Team: Yolo

![Yolo](/vintage/images/blog/yolo.png)

**Team member:** @Max

**What are you building?** Yolo stores image datasets in a decentralized fashion, using Filecoin and IPFS. This data is intended to aid in the development of machine learning and artificial intelligence models. We’re planning to store the Open Images Dataset using Powergate, and we’ll continue to enrich and improve it to be a decentralized dataset that anyone can use. Users who have images can also upload them to contribute. There will be some token rewards (in the future) for their contribution after these images have been reviewed.

**How did you come up with your project?** This idea was inspired by my previous work with image recognition using deep learning. We found that the training data is key to the performance of an AI model, but big data right now is mostly in the hands of giant centralized technology companies like Facebook, Twitter, WeChat and Weibo. Users contribute huge amounts of data, but they get very small returns. We believe that a decentralized image dataset built by thousands of people will change this model, and we believe Filecoin will enable this change.

**How are you integrating with Filecoin?** In our project, we are storing data on the Filecoin network as a cold storage layer. We retrieve data from Filecoin and cache that data on IPFS. We built Yolo based on the Open Images dataset, which are all images with labels.

**Why did you join Slingshot?** We believe that Filecoin is the unicorn in the next wave of Web3, and we must join in the ecosystem to be involved in the future.

## Team: Scavenger Hunt

![Scavenger Hunt](https://filecoin.io/vintage/images/blog/scavenger-hunt.png =30%x)

**Team Member:** @jimpick

**Tell us a bit about your project and how you’re using Filecoin.** I’m working on Slingshot Scavenger Hunt, a game in which participants retrieve data from Filecoin, add data to Filecoin, and collaboratively expand an underlying “knowledge graph” based on a small, small subset of Wikipedia. It’s a weekend project, so there’s not currently any game user interface yet.

Initially, I’ve stored a version of the “simple English” Wikipedia built from the Kiwix offline Wikipedia project, which was initially compiled for the Datpedia project. I split that into 697 chunks, each about 5MB each. Then, I chose a small file size to demonstrate retrieval and storage from web browsers, even mobile phones. I can retrieve any web page from the chunked files stored on Filecoin currently. I will be deploying some limited-capability Filecoin nodes for players to use – and each player will have an individual wallet.

**What has your process been like so far?** Most of the effort invested so far has been in developing some scripts to discover what miners are active in the network and the scripts to automate storing enough replicas of each chunk so that they will be retrievable in the app. I’m not using Powergate, so I need to build that functionality myself.

**What inspired you to build this game?** I was previously working at Protocol Labs on the Filecoin team, building the Lotus JS Client libraries to talk to the Lotus JSON-RPC APIs via JavaScript. I want to have a good demo to show what was possible from within a web page using the raw APIs (vs. using something like Powergate).

I’m primarily participating in Slingshot for the experience and for the community. I think the people interested in trying out Slingshot apps will like and understand the game.

## Team: [Decentralized Docker Hub](https://github.com/viraja1/decentralized_docker_hub)

![Decentralized Docker Hub](/vintage/images/blog/decentralized-docker-hub.png)

**Team member:** @viraj

**Tell us about your project.** With Decentralized Docker Hub, you can easily push and pull Docker images from IPFS and Filecoin. It is powered by Powergate and also has support for ENS domain names. Decentralized Docker Hub leverages IPFS for hot storage and Filecoin for cold storage.

I believe that we need an alternative to centralized Docker registries. Relying on a single, centralized source for Docker images is risky, because if an image gets deleted, it will affect all your dependencies.

**What inspired you to join Slingshot?** Slingshot provides an opportunity to test the whole flow before the Filecoin mainnet launch. And the Docker images stored on the Filecoin testnet will be live on the Filecoin mainnet too. It is good to see that the Filecoin ecosystem is building useful products as we approach the mainnet launch.

**Have you found helpful advice within the Slingshot community?** The online sessions and community have been very useful. I’ve found the Textile team to be particularly helpful. The discussions in the Slack groups (e.g., #slingshot, #powergate-users, #buckets-users) have provided answers to any question I’ve encountered.

## Participate in Slingshot

SR2 Slingshot is a community competition that rewards the storage of real, valuable, and usable data on the Filecoin network. We’re especially inspired by the projects that are storing large, culturally or scientifically valuable datasets on Filecoin. And the more data you onboard, the more FIL you earn!

The competition is young, and it’s anyone’s game! Register today at [slingshot.filecoin.io/register](https://filecoin.io/blog/posts/the-journey-to-filecoin-mainnet-liftoff/).
