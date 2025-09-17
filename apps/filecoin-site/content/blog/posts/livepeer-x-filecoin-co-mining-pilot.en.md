---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-23T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Co-locating decentralized video transcoding with decentralized storage.
image:
  alt: ""
  url: /uploads/blog-livepeer-filecoin.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog-livepeer-filecoin.webp
title: Livepeer x Filecoin Co-Mining Pilot
_template: blog_detail
---

We are excited to announce that [Livepeer](https://livepeer.org/) is launching a co-mining pilot with [Filecoin](https://filecoin.io/) to enable Filecoin miners to become Livepeer video miners while continuing to mine on the Filecoin network by storing transcoded video data.

Today, Livepeer video miners serve as the backbone of a decentralized video transcoding network that allows developers to build scalable video applications and Filecoin miners serve as the backbone of a decentralized storage network that allows anyone to securely store and interact with data. In the future, the same miners could provide infrastructure for both networks not only unlocking additional economic opportunities for the miners, but also additional technical and product opportunities for web3 applications via the co-location of video transcoding with data storage.

This co-mining pilot will:

- Identify the requirements for miners interested in co-mining
- Identify the recommended path for miners interested in co-mining

## Motivation

Livepeer mining (transcoding) can be dramatically accelerated using specialized hardware (i.e. ASICs) embedded in commercial GPUs. A high quality video miner should have access to ample bandwidth to support fast response times and ideally should have access to GPUs.

Filecoin mining can also be dramatically accelerated using GPUs. Additionally, as the Filecoin retrieval market matures, miners will be expected to have ample bandwidth to support fast data retrieval for clients.

Given these similarities between the ideal profile of a Livepeer video miner and that of a Filecoin miner, a Filecoin miner could be well positioned to also be a Livepeer video miner while continuing to mine on the Filecoin network by storing transcoded video data. The miner would benefit from an additional revenue stream and the networks would benefit from a larger, more geographically distributed shared pool of hardware and bandwidth resources that more miners can contribute to.

Additionally, Livepeer and Filecoin co-mining could establish a foundation for bringing edge computing to web3 applications by putting compute (i.e. video transcoding) close to where data is stored. In the future, users of web3 applications would be able to enjoy the rich and seamless media experiences that they are accustomed to in web2 applications except under the hood these experiences would be enabled by decentralized networks of miners storing, serving and computing data in close proximity to the user.

## Miner Requirements

We are looking for a small number of Filecoin miners interested in participating in this pilot. Participating miners will be eligible for LPT and FIL grants.

Miners will need to meet the following hardware requirements:

- Must have Nvidia GPUs that:
  - Have the NVENC/NVDEC hardware video encoder and decoder
    - [List of GPUs with NVENC/NVDEC support](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
    - [List of GPUs that have been tested with Livepeer](https://github.com/livepeer/wiki/blob/master/GPU-SUPPORT.md)

\*GPUs from the Volta generation or afterwards are preferred.

Miners participating in this pilot will be expected to:

- Have a good understanding of how to run, configure and benchmark Filecoin mining software using a GPU
- Run tests to benchmark Filecoin and Livepeer mining together
- Work with Livepeer engineers to analyze the results of tests and to identify the requirements and recommended paths for co-mining
- Make tweaks to the Filecoin mining software if necessary to help with the above

## Get Involved

We are excited to run this co-mining pilot as the next step in the evolution of web3 infrastructure. If you are a miner that is interested in participating in this pilot [get in touch](https://docs.google.com/forms/d/e/1FAIpQLSeLceG9LEFJPNjLet0AQ98SPFYladerpbjooK9jvzEwEcEG5w/viewform?usp=sf_link)!
