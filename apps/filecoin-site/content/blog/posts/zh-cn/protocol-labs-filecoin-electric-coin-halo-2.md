---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-10-01T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: ""
image:
  alt: ""
  url: /uploads/halo.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/halo.webp
title: 与Protocol Labs、Filecoin基金会、以太坊基金会和Electric Coin公司等共同复兴Halo 2
_template: blog_detail_ch
---

最近[Electric Coin](https://electriccoin.co/ "Electric Coin Co.") (ECC) [宣布](https://electriccoin.co/blog/ethereum-zcash-filecoin-collab/)[Protocol Labs](https://protocol.ai "Protocol Labs")、[Filecoin基金会](https://fil.org/ "Filecoin Foundation")、[以太坊基金会](https://ethereum.org/en/foundation/ "Ethereum Foundation")和ECC公司会协作探索研究和开发[Halo](https://electriccoin.co/blog/halo-recursive-proof-composition-without-a-trusted-setup/) ——　这是一个无需可信设置阶段的递归零知识证明解决方案。

## 基础知识：零知识，递归证明以及Halo

_零知识（Zero knowledge）_ 是密码学的一个分支，主打在无需看到底层数据的情况下验证答案的方法。

想象一下，你需要在纽约的酒吧里证明自己的年龄。在零知识交易里，有两个参与方：the _证明者（prover）_ 和 _验证者（verifier）。_ 证明者是尝试证明某项主张的个人或实体。在这个例子里，就是那个想证明自己达到了法定饮酒年龄的人。验证者则是必须证明该信息真实性的个人或实体，在这个例子里则是酒吧的侍应。

在一个零知识交易里，酒吧侍应可以证明某位顾客达到了法定饮酒年龄，而　_无需_ 知道他的具体年龄或身份证件。他应该可以相信这项主张，而无需看到底层数据（即身份证明文件）。这就是说，在没有 (_零_) _知识,_ 的情况下，他们可以确信地完成交易。

零知识(zk)交易会生成零知识证明（zk-proofs），可用于证明某项交易发生了。当零知识在区块链这样的分布式网络里使用时，这意味着每一个区块都会包含多个零知识证明。

如果一个未来的交易想证明特定信息，最傻的方案则是逐个验证之前的区块。而 _递归证明（Recursive proofs）_ 则提供了一个取巧方案，实现了“证明的证明”（proofs of proofs），即构建相连的证明的历史，这样就只需验证少数证明了。

Halo是ECC公司的一项递归证明研究，最初在２０１９年作为区块链网络上设立递归证明（无需可信设置这个复杂和成本高昂的过程）的解决方案提出的。Halo 2是递归证明研究的下一个迭代品。

## Halo 2实战: Filecoin

或许很多人不知道，Filecoin网络是世界上最大规模的部署零知识证明网络。[零知识是Filecoin网络的基础](https://filecoin.io/blog/posts/zero-knowledge-and-the-filecoin-network/)，在网络的测试链首次发布时就已经发挥作用并提供了关键的可扩展解决方案。

ECC公司、Filecion基金会、以太坊基金会和Protocol Labs的协作会部分关注在探索将Halo 2植入现有的Filecoin证明系统上。

如果成功实施Halo 2的递归证明方案，则意味着能极大地 _减少链上存储的证明数据_ ，将Filecoin网络的空间腾出来以存储更多人类的重要信息。这还意味着更高的网络可扩展性，更容易出现廉价、高效和用户友好的存储解决方案。

[点击这里](https://electriccoin.co/blog/ethereum-zcash-filecoin-collab/) 以了解更多关于这几家机构的合作事宜。
