---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-07-29T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: zk-SNARKs与去中心化存储是如何在Filecoin网络上结合的
image:
  alt: ""
  url: /uploads/fil-blog-2021-07-29-snarks.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2021-07-29-snarks.webp
title: 零知识证明如何与Filecoin网络结合
_template: blog_detail_ch
---

最近，Protocol Labs研究团队发布了 [zk-SNARKs for the World site](https://research.protocol.ai/sites/snarks/)网站。这个网站介绍了目前在Filecoin网络上整合零知识证明密码学所完成的工作。这些努力已持续三年，已让Filecoin成为目前最大的zk-SNARK部署网络，并且每天生成了600万到700万个零知识证明。（想了解零知识证明和Filecoin的存储验证流程吗？查看来自Protoschool的[‘在Filecoin上验证存储’教程](https://proto.school/verifying-storage-on-filecoin)）。

## zk-SNARKs对Filecoin网络的价值

为了让Filecoin网络上的存储提供者继续为用户提供服务（并在过程中赚取回报），他们必须定期证明自己在链上持续存储其所承诺存储的数据。将他们放在零知识证明的关系中理解的话，这些存储提供者就成为了 _证明者(provers)_.

这个公式的另一边就是全节点，他们负责为整个Filecoin网络维护共识。这些节点希望确保数据被存储、维护和保管好，而没有疏忽或损坏。这些参与方—— _验证者（verifiers）_ ——必须能确保存储提供者对数据被妥善存储所给出的证明是真实的。这要求在数据易手时，存储提供者和节点之间有一种形式的通讯。

对每一个区块来说，这个过程是（ _将是_ ）对资源要求很高的。今天，个体的存储提供者为验证存储所需要证明的数据是海量的，而且随着时间推移只会增加。Filecoin网络的区块时间是30秒，为了维持这个区块时间并允许可扩展的方法，网络需要一个能提供快速、高效和健壮的验证过程的解决方案。

了解zk-SNARKs。

对 _Filecoin网络_ 来说，zk-SNARKs提升了网络可扩展性和效率，这是通过极大地降低各方验证存储的时间来实现的。这对维持Filecoin的30秒区块时间很重要。

对 _存储提供者_ 来说，zk-SNARKs降低了他们证明存储所需要传输的数据量，从而降低了在网络上提供其服务的成本。

## zk-SNARKs实践

为了在Filecoin上验证存储，会涉及到两个证明： _复制证明——Proof of Replication (PoRep)_ 和 _时空证明——Proof of Spacetime (PoSt)._ 在复制证明中，存储提供者需证明他们正存储一份数据或信息的独特副本。复制证明只会发生一次，这是在用户和存储提供者达成最初存储交易提议且数据首次被存储提供者存储时发生的。每一个被链上记录的复制证明包括了10个独立的的SNARKs证明，它们一起证明了该过程是通过概率挑战（probabilistic challenges）而正确完成的。

另一方面，时空证明用于证明存储提供者随着时间推移依然 _持续_ 存储原始的数据，而没有被操纵或损坏。当一个存储提供者刚开始同意为用户存储数据时，他们必须以FIL的方式投入质押品。如果存储提供者在这个协议中间的任何时点无法提供时空证明，他们会被惩罚并可能损失部分或所有的FIL抵押品。

在 _证明者（prover）_ 和 _验证者（verifier）_ 的链上互动中，它们同意数据已被正确地存储和维护，那么这就是一个 _证明（proof）._　如前所述如果缺乏让这些证明足够小和高效的解决方案，它们就会占据大量的网络带宽并为存储提供者和矿工带来很高的运作成本。不过如果通过使用zk-SNARKs来生成证明，那么所生成的证明就会很小，验证过程也会非常快（因此就很便宜了）。例如，通常要占据几百kb来验证的证明可以使用zk-SNARKs来压缩到192字节。前面已经提到过，每一个复制证明包括了10个SNARKs，这就意味着它只会占据1920字节（10\*192字节）。

## zk在Filecoin的过去和未来

从10月份的发布开始，Filecoin网络对zk-SNARKs的使用就已经上线了。故事是这样的：零知识证明长期是Filecoin网络的一部分，也会继续被证明是网络未来演变的关键一环。随着越来越多的数据在Filecoin上被存储、维护和访问，生态系统需要继续提供高效、划算和安全的验证解决方案。零知识证明是Filecoin网络的游戏规则改变者，将复杂的验证流程的大小降低到原始体积的一小部分，而没有影响安全性、可信性或信心。

Protocol Labs研究团队已长期投入了Filecoin网络上的零知识证明工作。他们的努力已为网络提供了关键的效率解决方案。随着新的验证系统的出现，团队会继续为未来的Filecoin网络实施最有效率的解决方案。

请访问 [zk-SNARKs for the World site](https://research.protocol.ai/sites/snarks/) 网站并深入了解Filecoin上的零知识证明。
