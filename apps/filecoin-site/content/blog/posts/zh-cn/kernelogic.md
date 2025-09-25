---
aliases: []
author: ""
categories: []
date: "2022-09-06T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 很多人和企业都在寻找大数据集存储的去中心化替代方案，让我们看看Filecoin如何通过Kernelogic满足这一需求。
image:
  alt: ""
  url: /uploads/187315453-608d73c3-c051-4ec5-9b57-fbffe0aab98e.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/187315453-608d73c3-c051-4ec5-9b57-fbffe0aab98e.webp
title: 大型数据集：Kernelogic
_template: blog_detail_ch
---

得益于由存储提供者、开发者和生态合作伙伴组成的强大社区，Filecoin目前提供了超过18 EiB的分布式存储。这种[岛屿经济](https://filecoin.io/blog/posts/filecoin-s-island-economy/)正被像Kernelogic这样对保存有益信息的大型数据集感兴趣的客户所利用。

Kernelogic最初是一个独立的存储提供者，后来通过Slingshot竞赛发展成为一个大型数据集用户。该项目专注于将开放数据集转换成Filecoin可以存储的固定大小的扇区脚本。然后，将这些数据集传输给有兴趣存储它们的存储提供者。

## Kernelogic的数据

在其运营过程中，Kernelogic通过与全球50多个不同的存储提供者进行存储交易，现已收录了超过10 PiB的有益且经过验证的数据集。Kernelogic遵循Slingshot规范，并跨不同领域存储免版税的开放数据集。其中包括:

- [NEXRAD](https://registry.opendata.aws/noaa-nexrad/)：下一代天气雷达(NEXRAD)网络的实时和存档数据。
- [NASA NEX](https://registry.opendata.aws/nasanex/)：由NASA维护的地球科学数据集，包括气候变化预测和地球表面的卫星图像。\*[巴西多维数据集](https://registry.opendata.aws/brazil-data-cubes/)：由巴西CBERS-4、Sentinel-2 A/B和Landsat-8卫星图像的分析准备数据(ARD)生成的地球观测(EO)多维数据集。
- [Terra融合数据采样器](https://registry.opendata.aws/terrafusion/)：Terra基本融合数据集是五个Terra仪器的原始1级雷达数据组成的融合数据集。
- [Fly Brain Anatomy](https://registry.opendata.aws/janelia-flylight/)：FlyLight Gen1和Split-GAL4图像。
- [3000水稻基因组](https://registry.opendata.aws/3kricegenome/)：对来自89个国家的3024个水稻品种的基因组进行测序的一项国际工作。

## Kernelogic对Filecoin的使用

将这些有益的科学研究数据复制到许多不同的地点和实体中，那么当发生单点故障或自然灾害时，便可以增加数据保存的机会。作为web3最大的分布式存储系统，Filecoin为AWS提供了一种可行的替代方案。在AWS中，此类重要数据通常依赖于一家公司，并托管在单一的地理位置。

Kernelogic计划继续通过Slingshot程序将数据引入Filecoin网络，并引用[Lotus](https://lotus.filecoin.io/)、[Indexer](https://filecoin.io/blog/posts/how-does-the-network-indexer-work/)和[Boost](https://filecoin.io/blog/posts/introducing-boost-new-capabilities-for-markets-including-http-transfers-web-ui-and-more/)软件在检索方面的不断改进。该项目还开源了一个名为[Singularity](https://github.com/tech-greedy/singularity)的工具集，用于简化大型数据集的数据加载。

Filecoin生态中也有一些激励措施，用来吸引使用网络容量且有意义的数据，如Kernelogic的数据。Slingshot和更广泛的[Filecoin+](https://github.com/filecoin-project/filecoin-plus-client-onboarding#datacap)计划是利用分布式存储数据集的好方法。若您有超过500 TiB的数据，马上在此[申请](https://github.com/filecoin-project/filecoin-plus-large-datasets) Filecoin+ DataCap，即可获得与存储提供者更好的交易。
