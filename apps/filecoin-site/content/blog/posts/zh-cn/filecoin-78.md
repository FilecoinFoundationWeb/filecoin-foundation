---
aliases: []
author: ""
categories:
  - updates
date: "2021-02-10T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Starling 框架与Adobe的内容真实性计划一起，启动了图像档案，记录了2020年11月至2021年1月期间的总统大选。
image:
  alt: ""
  url: >-
    /uploads/107442680-21b96380-6afd-11eb-9d73-033dac28b49a-1_hud3c0b003f78b8d16f84662f45c257ef0_328377_1500x0_resize_q90_linear.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: >-
  /uploads/107442680-21b96380-6afd-11eb-9d73-033dac28b49a-1_hud3c0b003f78b8d16f84662f45c257ef0_328377_1500x0_resize_q90_linear.webp
title: 在 Filecoin 上追踪美国大选的78天
_template: blog_detail_ch
---

今天，Starling数据完整性框架发布了 _可信图像档案_。 该档案是由路透社摄影记者拍摄的图片集，记录了美国总统大选从2020年11月到2021年1月之间的78天。这些照片将上传并保持在 Filecoin 网络，包括不可更改的元数据，如位置、时间、和验证信息，以确保真是记录长期存在，并无法被篡改来散布假消息。

[访问该档案](https://www.starlinglab.org/78days/)

![](/uploads/election-on-filecoin.webp)

该档案项目是路透社、Filecoin和Adobe的[内容真实性计划](https://contentauthenticity.org/) (CAI) 的合作。使用了如Hedera Hashgraph 和 Numbers协议的技术。在媒体虚假和模糊信息日益泛滥的背景下，本次合作将是使用分布式技术来构建真实并可验证的信息记录的一次概念验证。

Starling数据完整性框架使用基于Filecoin的分布式存储技术。由USC的Shoah 基金会和斯坦福电子工程系发起。Starling是一整套工具和原理，让组织/机构安全获取、存储和验证人类历史。

内容真实性计划(CAI)由Adobe、纽约时报和Twitter于2019年创建，旨在为内容归属制定行业标准，并增进线上活动的可信度和透明度。CAI 正为创作者构建一种简单办法，通过在图片上添加安全的防篡改数据层，包括名字、位置和编辑记录，来将重要归属数据附加在图片上。

为了创建_可信图像档案_，路透社记者使用Numbers Protocol 拍摄照片，这样每张照片都会有唯一的数字指纹。这个过程里，首先对每张照片进行密码学哈希，生成内容标识符(CID)。接下来，图片将上传并存储在 Filecoin 网络，这样就能持续证明文件的安全，确保未有篡改，因为这是长期冷存储。同时，这些文件将聚合在IPFS 上供快速检索。最后，每个图片的元数据（包括存储的哈希值）被记录在需要许可访问的Hyperledger Fabric 数据库。这些交易的缓存发布在GUN网络数据库，并使用 Hedera共识服务(HCS)上链。这样就创建了不可更改且可验证的消息记录。使用图片归属新标准CAI，任何人都能[浏览图片档案](https://www.starlinglab.org/78days/)并检查每张图片的出处，时间戳，存储数据，并验证编辑历史。这些工作的成果是超过250张照片的图片集，拍摄于2020年11月美国大选及2021年1月总统就职期间。[了解更多关于档案中图片的验证过程](https://www.starlinglab.org/image-authentication/)。

该档案对所有人开放，并为使用区块链技术保存和验证数字媒体提供了概念验证。该档案目的不仅仅是记录美国历史上这78个关键的日子，而且还在未来对媒体验证相关计划提供一个框架。通过建立基于验证技术和区块链实现的透明标准，Starling和CAI旨在促进媒体验证解决方案的协作生态。
