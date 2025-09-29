---
aliases: []
author: ""
categories:
  - updates
date: "2022-08-16T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  个人和企业用户都在寻找成本低、效率高的方式，来存储越来越多的数据，实现数据的安全性、永续性和便利的可检索性。让我们看看Filecoin如何通过FileDrive满足这个需求。
image:
  alt: ""
  url: /uploads/184185297-57019017-e3ee-4e58-a7d7-947adba68d44.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/184185297-57019017-e3ee-4e58-a7d7-947adba68d44.webp
title: 大型数据集解决方案：FileDrive
_template: blog_detail_ch
---

目前，Filecoin提供的分布式存储超过了18 EiB，这要得益于其经济体里的强大社区成员——存储提供者、开发者和生态伙伴。他们的工作旨在为基于服务器的云存储服务建造最好的分布式替代方案。

个人和企业用户都在寻找成本低、效率高的方式，来存储越来越多的数据，实现数据的安全性、永续性和便利的可检索性。让我们看看Filecoin如何通过FileDrive满足这个需求。

## FileDrive的数据

服务提供商[FileDrive](https://filedrive.io/)通过促进Filecoin的大型数据集用例，来帮助发布者利用Filecoin的存储市场。目前，它通过[Filecoin Slingshot竞赛（Slingshot Competition）](https://slingshot.filecoin.io/) 和 [Filecoin Plus](https://docs.filecoin.io/store/filecoin-plus/)，已经存储了约10 PiB的数据。

这些信息包含了有意义的公共大型数据集，它们来自科学研究领域。Filecoin网络的内容永续性，会給这些数据集的应用带来很多好处。其中一些数据集包括：

- [“DNA元件百科全书”计划](https://www.encodeproject.org/): 这是由美国国立人类基因组研究所(NHGRI)资助的一个全球性研究组织。
- [3000份水稻基因项目](https://registry.opendata.aws/3kricegenome/): 这是一个国际项目，旨在为来自89个国家的3024个水稻品种进行基因测序。
- [Landsat 8](https://registry.opendata.aws/landsat-8/#usageexamples): 从2013年起的多谱段时间序列卫星成像（针对地球上的所有土地）;
- [基因方舟（Genome Ark）](https://vertebrategenomesproject.org/): Genomic information for the 脊椎动物基因计划(VGP)和其他相关计划的基因信息。

## FileDrive对Filecoin的使用

在2019年，FileDrive开始研究在Filecoin和IPFS上使用分布式数据存储。该团队早就尝试在中心化存储上寻找隐私、安全和数据所有权等现有问题的解决方案。它很快意识到，除了IPFS的内容可寻址性外，使用Filecoin作为激励层来确保重要信息的永续性也是有好处的。

此外，作为一个开源存储市场，Filecoin生态依赖于由其社区开发的一系列重要工具，以及让FileDrive这样的用户更容易参与到网络的项目。[Web3.Storage](https://web3.storage/)和[NFT.Storage](https://nft.storage/)让Filecoin存储日常数据更容易，而FIL+这样的项目能协助寻找具备丰富数据上传经验和高品质服务的Filecoin存储提供者。

Filecoin网络通过大量可用的存储能力，以及由活跃参与社区开发的高效工具，来满足FileDrive在大型数据集上的需要。FileDrive还开发了自己的工具，来帮助像自己这样的客户进行大型数据集网络操作：

- [Filejoy](https://github.com/filedrive-team/filejoy): 轻量的IPFS节点，能更快从原始数据转换成DAG.
- [Go-DS-Cluster](https://github.com/filedrive-team/go-ds-cluster): PiB级别的DAG数据存储。
- [Go-Graphsplit](https://github.com/filedrive-team/go-graphsplit) 这个工具能将大型数据集分割成适合Filecoin网络里达成存储交易提议的图分片。

要进一步了解FileDrive，可关注[推特](https://twitter.com/FileDrive1)，在[Medium](https://medium.com/@FileDrive1)上查看信息，或在[GitHub](https://github.com/filedrive-team)作出贡献。
