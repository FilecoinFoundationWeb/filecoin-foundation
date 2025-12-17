---
aliases:
  - /zh-cn/blog/trusted-setup-update
  - /zh-cn/blog/更新-可信配置
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-11T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  去年年底，我们成功地完成了可信配置的第一阶段，也就是“powers of
  tau”。自年底以来，我们的团队一直在为可信配置的第二阶段做准备。想要了解更多关于第二阶段的信息以及您可以帮助做出哪些贡献，请继续阅读！
  如果您之前没有注册过但想参与的话，请填写此表!
image:
  alt: Trusted setup ceremony
  url: /uploads/trusted-setup-update-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/trusted-setup-update-english-social.webp
title: 更新：可信配置
_template: blog_detail_ch
---

去年年底，我们成功地完成了可信配置的第一阶段，也就是“powers of tau”。自年底以来，我们的团队一直在为可信配置的第二阶段做准备。想要了解更多关于第二阶段的信息以及您可以帮助做出哪些贡献，请继续阅读！

**如果您之前没有注册过但想参与的话，请填写**[**此表**](https://forms.gle/XxLgsHmxdPjb7jJa9)**!**

## 第一阶段回顾

​简单提醒一下，可信配置环节分为两个阶段进行。第一阶段，也被称为“powers of tau”环节，适用于给定大小以下的所有[Groth16 zk-SNARKs](https://eprint.iacr.org/2016/260.pdf)。在我们的环节里，我们生成了BLS 381曲线上高达1亿大小的逻辑线路——目前BLS 381曲线上最大的线路！​在大约两个月的时间里来自时间各地的参与者贡献了自己的资源，参与生成安全参数以及以供所有人验证的公共证明。特別感謝參加第一階段的[個人和團隊](https://github.com/arielgabizon/perpetualpowersoftau#ceremony-progress)-沒有您的支持我們無法進入下一階段。​​

## 第二阶段

随着临近主网启动，我们团队一直在为可信配置的下一阶段做准备。与第一阶段不同，第二阶段生成特定线路的参数。这意味着在第二阶段中，时空证明(PoST)和复制证明(PoReP)的参数都将特定于将要确定下来的的哈希算法、结构和扇区大小。这也意味着当我们将来对证明结构进行更新时，我们还需进行一次可信配置的第二阶段以生成新的安全参数集来与我们升级后的证明一起使用。

对于我们的线路，我们将使用一种相对较新的哈希算法[Poseidon](https://eprint.iacr.org/2019/458.pdf)，该算法可以大大减少我们需要对线路所做的约束。此外，我们将使用Poseidon为**32GB**和**64GB**扇区的以下算法生成参数： _SDR PoRep_ Windowed PoST \* Winning PoST​

## 我想成为志愿者。我需要做什么？

​如果您没有参与过，您只需填写[此表](https://forms.gle/XxLgsHmxdPjb7jJa9)！通过注册，您可以将您的详细信息添加到Filecoin团队在可信配置环节第二阶段之前可能联系的志愿者列表。鉴于环节的各种要求和各阶段的窗口期，也有可能一部分志愿者没有被我们联系加入。我们将在6月29日起开放第二阶段可信配置环节的社区参与。

与我们第一阶段的流程类似，Filecoin团队将发出一个链接来安排参与环节的日程。在您的测试窗口期之前，您会收到有关需要下载的软件的详细说明以及进行环节的逐步说明。在实际的环节中，参与环节涉及下载多个文件、运行程序（将会提供说明）以及为下一个参与者上传输出。

如果您希望与下一个阶段的流程保持同步更新，您可以加入[Slack](https://join.slack.com/t/filecoinproject/shared_invite/zt-dj58b7fq-weyaTEvjHoYF_ENkQHR6Ig)上的 **#fil-trustedsetup** 频道 ——我们将在那与参与者进行协调。​

## 参与需要多长时间？我需要什么样的计算机？

以下概述了环节第二阶段的部分内容以及所需的时间：

_首先，您将下载环节中前一个参与者的输出文件（约60GB）。_

接下来，您需要将数据在指定的软件上运行。

_请注意，计算时间是取决于您计算机的规格。我们下面的样本计算时间和规格仅供参考_

<!-- markdownlint-disable MD060 -->

| 证明               | Ram要求 | 要求   | 预计完成时间 |
| ------------------ | ------- | ------ | ------------ |
| SDR PoRep 32GB     | 250GiB  | 150GiB | 36 hrs       |
| SDR PoRep 64GB     | 250GiB  | 150GiB | 36 hrs       |
| Windowed Post 32GB | 250GiB  | 150GiB | 36 hrs       |
| Windowed Post 64GB | 250GiB  | 150GiB | 36 hrs       |
| Winning Post 32GB  | 8GiB    | 0.5GiB | 10-15 min.   |
| Winning Post 64GB  | 8GiB    | 0.5GiB | 10-15 min.   |

<!-- markdownlint-enable MD060 -->

- 最后，您需要上传处理后的数据（约40GB）。
- 我们这边的验证节点将会检查您提交的内容是否有效并确保下一位参与者可以从经过您验证的贡献开始。​**还有其他问题？**​欢迎随时通过[聊天室](https://github.com/filecoin-project/community)
