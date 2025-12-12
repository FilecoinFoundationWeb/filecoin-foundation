---
aliases:
  - /zh-cn/blog/可信配置环节顺利完成
  - /zh-cn/blog/trusted-setup-complete
author: ""
categories:
  - updates
date: "2020-08-28T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  去年年底，我们圆满地完成了可信配置环节的第一阶段，也就是“Powers of
  Tau”。今年7月我们完成了可信配置的第二阶段——为主网将要使用的6个逻辑电路生成安全参数。现在，我们可信配置的两个阶段都可以使用Filecoin主网的最终参数了！感谢所有参与的人！
image:
  alt: 环节
  url: /uploads/trusted-setup-update-main-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/trusted-setup-update-english-social.webp
title: 可信配置环节顺利完成
_template: blog_detail_ch
---

去年年底，我们圆满地完成了可信配置环节的第一阶段，也就是“Powers of Tau”。今年7月我们完成了可信配置的第二阶段——为主网将要使用的6个逻辑电路生成安全参数。现在，我们可信配置的两个阶段都可以使用Filecoin主网的最终参数了！感谢所有参与的人！

## 回顾第一阶段

简要回顾一下，可信配置环节分为两个阶段。第一阶段，也称为“Powers of Tau”环节，适用于[Groth16 zk-SNARKs](https://eprint.iacr.org/2016/260.pdf)可证明的所有计算以及最大的计算量。由SNARK证明的计算用被称为逻辑电路的模型来表示。电路内计算的基本单位称为约束。约束的数量代表计算的大小。在我们的环节中，我们为任何不超过1.3亿个约束的Groth 16电路生成参数。

在两个多月的时间里，来自世界各地的[贡献者](https://github.com/arielgabizon/perpetualpowersoftau#ceremony-progress)参与了生成用于Filecoin证明的安全可验证参数。我们再一次对所有参与和帮助可信配置第一阶段顺利完成的人们表示衷心地感谢！

![Participants](https://filecoin.io/vintage/images/blog/trusted-setup-participants.jpg)

## 回顾第二阶段

6月中旬，我们开始了可信配置环节的第二阶段——该阶段主要为将要用于主网的6条逻辑电路生成安全参数。与第一阶段类似，第二阶段的输出只要链上其中一方是诚实的，其输出结果就是可信的。同样，来自世界各地的参与者参与了为Filecoin的证明生成安全可验证参数。对于第二阶段的参与者，感谢您对Filecoin临近主网中的关键部分作出的支持。 | Participants | |
| ----------------------------- | ---------------------------- |
| Aztec / Ariel Gazibon | Sigma Prime / Mehdi Zerouali |
| Secbit | IPFSMain / Neo |
| Filecoin-vietnam.com | DecentralTech |
| Filecoin / Whyrusleeping | Filecoin / Nemo |
| BoringWang | Benjamin H |
| Supranational | Coinsummer / Cobo / K |
| Hashquark / Allen | Factor8 Solutions / Patrick |
| Filecoin / DrPeterVanNostrand | Finality Labs / Keyvan |
| Justin Drake | Filecoin / Porcuquine |
| Consensys / Joseph Chow | Grandhelmsmen |
| DianCun | IPFSForce |
| Ocean / Alex Corseru | Troels Henriksen / Athas |
| Vulcanize / A. F. Dudley | Kikakkz |
| Filecoin / Magik | Filecoin / Dignifiedquire |
| Zcash / Benjamin Winston | JP Aumussen |
| James Hanson | Angelov |
| Consensys / Alexander Wade | | ## 环节中的这些输出是可信的吗？

对于两个阶段来说，如果转录的部分是可验证的那输出结果就是可信的，可以相信 **_至少_** 有一位参与者没有泄露其贡献的随机性。因此，对于这两个阶段，我们都尝试聚集了各种不同类型的参与者——来自Filecoin生态内部的贡献者、相互竞争的矿工以及Web3社区外部的团队和个人。在此过程中，我们旨在降低串通风险并提高每个逻辑电路至少有一个贡献者是可信的可能性，从而保证输出的参数完整性。

要验证我们主网逻辑电路的参数是否与参与者的输出相同，您可以按照[此处](https://github.com/filecoin-project/phase2-attestations/tree/a5f58bc31efbfdcd93f0207efe475c62a50ae13c/b288702#phase-2-validation)的说明操作.

## 下一步发展

对于主网，不需要任何其他操作——Filecoin的证明部分随时可以使用！

但是，Filecoin团队已经在考虑未来升级我们的证明以提高协议的性能和可用性。当升级进行时，我们将开始可信配置第二阶段的迭代以为新的逻辑电路生成安全参数。

如果您想加入参与者列表，请填写[此表](https://forms.gle/oJaT1v1Kyge4FiK6A)和加入我们[Slack channel](https://filecoin.io/slack)的#fil-trustedsetup频道以跟踪最新动态。
