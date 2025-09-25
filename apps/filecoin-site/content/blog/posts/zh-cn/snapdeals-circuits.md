---
aliases: []
author: ""
categories:
  - updates
date: "2022-02-23T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 我们已采取妥善步骤，确保相关的输出是可验证且可信的。
image:
  alt: ""
  url: /uploads/fil-blog-2022-02-23.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2022-02-23.webp
title: SnapDeals Circuits验证已完成
_template: blog_detail_ch
---

在1月份，Filecoin社区[完成了](https://filecoin.io/blog/posts/trusted-setup-complete-for-network-v15-upgrade/) 可信配置环节，让网络的重要升级成为可能。我们生成了安全的参数，用于主网上的四个新circuits的部署。众所周知，这些新的circuits是为了在Filecoin网络上启用 [SnapDeals](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s)。

我们很高兴宣布SnapDeals circuits验证步骤已经完成。如果脚本是完全可验证的，那么相关的输出信息就是可信的，你只需要相信至少有一个参与者没有以任何方式泄露其提交的随机值。

对整个可信配置环节而言，我们设法聚集了不同类型的参与者：Filecoin生态内的主要参与者，利益不一致的存储提供者，以及Web3社区的其他个人和团队。参与者是分布全球的，这也是重要的一点。

这些工作是为了降低合谋的风险，提高在每个circuit上至少有一个贡献者是可信的几率。这会确保输出参数的安全性。

为了验证我们的SnapDeals circuits参数与我们的参与者的输出值是否一致，你可以关注 [GitHub](https://github.com/filecoin-project/phase2-attestations/tree/9cb8bece7611b09ec016c2d3a607e4317e45af54/934fe8c#phase-2-validation)上提供的指令。
