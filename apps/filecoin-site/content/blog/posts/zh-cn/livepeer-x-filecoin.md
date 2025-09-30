---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-23T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 将分布式视频转码与分布式存储一同进行
image:
  alt: ""
  url: /uploads/blog-livepeer-filecoin.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog-livepeer-filecoin.webp
title: 双挖！Livepeer x Filecoin联合挖矿试点
_template: blog_detail_ch
---

们很高兴地宣布[Livepeer](https://livepeer.org/)将携手[Filecoin](https://filecoin.io/)推出联合挖矿试点，这意味着Filecoin矿工可以成为Livepeer视频矿工，并通过存储转码后的视频数据，继续在Filecoin网络上挖矿。

如今，Livepeer视频矿工是分布式视频转码网络的骨干，助力开发者打造可适性视频应用，Filecoin矿工则是分布式存储网络的支柱，保障人们能安全地存储数据、进行数据交互。未来，同一批矿工可以为这两个网络提供基础设施，这不仅给予矿工更多盈利机会，也通过视频转码和数据存储的协同，为Web3应用带来技术和产品上的机会。

试点联合挖矿将：

- 明确想进行双挖的矿工需符合哪些要求
- 明确想进行双挖的矿工可使用的推荐路径

## 动机

Livepeer挖矿（转码）可利用商业GPU内置的专业硬件（例如：ASICs）实现大幅提速。优秀视频矿工应拥有支持快速响应时间的充足带宽，理想情况下应拥有GPU。

Filecoin挖矿也可利用GPU实现大幅提速。此外，在Filecoin检索市场成熟后，矿工理应拥有充足带宽，才能为用户实现快速检索。

鉴于理想情形下Livepeer视频矿工与Filecoin矿工的相似性，Filecoin矿工完全可以成为Livepeer视频矿工并通过存储转码后的视频数据继续在Filecoin网络上挖矿。矿工可获得额外收入来源，Livepeer和Filecoin网络可获得规模更大、地理分布更广、参与矿工人数更多的硬件和带宽资源共享池。

此外，Livepeer和Filecoin联合挖矿将计算（例如：视频转码）置于数据存储地点附近，有望为边缘计算融入Web3应用奠定基础。今后，Web3应用用户可获得丰富流畅的媒体体验，其品质与他们熟悉的Web2应用无异，只不过在后台支撑这一切的，将是分布式网络，矿工会在靠近用户的地方存储、服务和计算数据。

## 矿工资质要求

我们正在寻找一些对试点挖矿感兴趣的Filecoin矿工。参与试点的矿工有资格获得LPT和FIL奖励。

矿工需满足的硬件条件如下：

- 必须拥有符合以下条件的NVIDIA GPU：
  - 有硬件视频编码器和解码器NVENC/NVDEC
  - [支持NVENC/NVDEC的GPU清单](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
  - [经过Livepeer测试的GPU清单](https://github.com/livepeer/wiki/blob/master/GPU-SUPPORT.md)

\*以Volta架构或更新的GPU为宜。

参与试点的矿工需要：

- 通晓如何用GPU运行、配置Filecoin挖矿软件并进行基准测试
- 对Filecoin和Livepeer 挖矿进行基准测试
- 与Livepeer工程师一起分析测试结果，明确联合挖矿的要求和推荐路径
- 在必要情况下，对Filecoin挖矿软件进行微调，以实现上述要求

## 加入我们

我们很高兴能开启联合挖矿试点，它是Web3基础设施不断发展的推进。欢迎对试点感兴趣的矿工[联系我们](https://docs.google.com/forms/d/e/1FAIpQLSeLceG9LEFJPNjLet0AQ98SPFYladerpbjooK9jvzEwEcEG5w/viewform?usp=sf_link)！
