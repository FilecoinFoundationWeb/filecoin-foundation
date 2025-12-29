---
aliases:
  - /zh-cn/blog/快来参与我们的可信设置环节
  - /zh-cn/blog/participate-in-our-trusted-setup-ceremony
author: ""
categories:
  - updates
cover_feature: false
date: "2019-10-22T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  您在我们最近更新中看到的那样，Filecoin团队正努力准备在2019年12月发布测试网，并在2020年3月完成主网上线。在这项工作完成之前，我们正在寻找志愿者来参加可信设置环节（了解更多请阅读接下来的内容）一起帮助我们将Filecoin落地实践！
image:
  alt: Trusted setup ceremony
  url: /uploads/setup-ceremony-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/setup-ceremony-english-social.webp
title: 快来参与我们的可信设置环节
_template: blog_detail_ch
---

您在我们[最近更新](https://filecoin.io/zh-cn/blog/update-2019-q2-q3/)中看到的那样，Filecoin团队正努力准备在2019年12月发布测试网，并在2020年3月完成主网上线。在这项工作完成之前，我们正在寻找志愿者来参加可信设置环节（了解更多请阅读接下来的内容）一起帮助我们将Filecoin落地实践！

**若您想参与这个环节，请直接填写**[**此表**](https://docs.google.com/forms/d/e/1FAIpQLSfYrehYIExQJbNLv-m_xsCXGDZM-rHhsBT5xWYy6cHANyBJxw/viewform)**，也可以阅读下面的内容了解更多关于此环节的信息。**

## 什么是可信设置环节？我们为什么需要这样一个环节？

Filecoin的挖矿是基于复制证明和时空证明机制。我们使用[zkSNARKS](https://z.cash/technology/zksnarks/)来减小链上证明的计算大小。zkSNARKS需要设置一组在系统内所有参与方都知道的[公共参数](https://electriccoin.co/blog/snark-parameters/)，为了能保证zkSNARKS和Filecoin网络的完整性，这些公共参数必须安全地生成。

Zcash在2017年的“Powers of Tau”可信设置环节采用了安全生成SNARK参数的方法（您可以在这里了解他们的[writeup](https://z.cash/technology/paramgen/) 和[Radiolab的故事](https://www.wnycstudios.org/podcasts/radiolab/articles/ceremony)）。我们将利用可信设置环节来生成我们的zkSNARK，这也是多方安全计算的方法。该环节的主要目的是让我们生态内的成员来参与参数的生成，鉴于我们特殊的可信设环节机制，只要至少有一名诚实的参与者我们即可安全地生成参数。

可信设置环节分为两个阶段：

**阶段 1: “Powers of Tau”** 。在此阶段环节生成既定大小的所有SNARK线路都可以使用的SNARK参数，这些参数可以被其他任何项目使用，不仅仅限于Filecoin。

**阶段 2：** 仅针对Filecoin的线路，将生成只有Filecoin可用的参数。

## 如果我想参与，需要我做什么呢？

目前，我们只需要您填写[此表](https://docs.google.com/forms/d/e/1FAIpQLSfYrehYIExQJbNLv-m_xsCXGDZM-rHhsBT5xWYy6cHANyBJxw/viewform)。通过注册，您的信息会被添加到志愿者列表中。在可信设置环节的每个阶段之前，Filecoin团队的成员会联系您参与设置。鉴于环节的特殊性和每个阶段的窗口，也有可能不需要志愿者的协助。我们将于**11月15日**开始可信设置环节的阶段一，因此我们将于**11月1日**开始联系志愿者参与。

若您接到Filecoin团队的联系，您将收到一个用于注册参与此环节日程的链接，在进入您的窗口之前，您将收到有关需要下载的软件的详细说明和我们需要您在可信设置环节中需要执行的步骤说明。

## 参与时间将持续多久？我需要什么规格的电脑？

我们还在估算此环节阶段二的细节，因此下面概述了阶段一需要您参与的内容：

1. 首先，您将下载最新验证版本的数据（约60GB）。
2. 然后，您将在数据上运行特定的软件 。_注意：计算时间是不定的，这取决于您电脑的硬件规格，以下是我们示例计算时间和规格，仅供参考：_
   - RAM: 16GB
   - 处理器: AMD Ryzen 1950X (32 thread, 3.5ghz)
   - CPU核数: 16
   - 计算时间: 180 分钟
3. 最后，您需要上传处理后的数据（约40 GB）。
4. 我们的验证节点将检查您提交的内容是否有效并确保下一位参与者可以基于您的贡献开始计算。

我们的目标是贡献者能够使用标准笔记本电脑在24小时之内、高性能电脑在10小时之内运行他们参与环节的部分，我们正在积极的努力减少参与时间，我们会在取得进展的同时随时通知志愿者们。

## 是否已经有其他项目完成了可信设置？为什么我们需要再进行一次？

我们使用zkSNARKs ([Groth’s 2016 zkSNARK](https://eprint.iacr.org/2016/260.pdf))， 因此对于每个新应用都需要一个新的阶段二环节。阶段一(“Powers of Tau”)的参数可以重复使用，但前提是新应用的线路大小必须和旧应用相同，且使用相同的椭圆曲线。

Zcash为类似的SNARK举行了可信设置环节，然而，他们将200万大小的线路用于Powers of Tau环节。Filecoin线路将会更大（我们的目标线路大小为1亿），因此Zcash的Powers of Tau参数不适合我们的应用。

Filecoin打算使用[由Zcash首创](https://electriccoin.co/blog/new-snark-curve/)的BLS 381曲线。尽管还有其他生成大型线路参数的可能，但那些方案都集中在BN 254曲线上。而BN 254有受到潜在攻击的可能，因此我们听取了[专家的建议](https://eprint.iacr.org/2016/1102.pdf) ，决定让Filecoin使用BLS 381曲线。

因此在Filecoin的阶段一“Powers of Tau”环节中，我们致力于为基于BLS 381曲线具有1亿大小的线路来产生参数，这意味着对于使用此曲线且具有最大不超过1亿大小线路的项目，也可以使用我们的工作成果。通过参与“Powers of Tau”环节，您不仅仅是帮助Filecoin，更是为广阔的加密生态添加助力！

**还有其他的问题？** 请联系我们的[聊天室](https://github.com/filecoin-project/community#chat) 或者发邮件至[trustedsetup@protocol.ai](mailto:trustedsetup@protocol.ai)。
