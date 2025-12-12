---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-22T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 我们很高兴宣布，Lurk编程语言的程序库（repository）现向公众开放。
image:
  alt: ""
  url: /uploads/164675419-d7e226dc-8790-4931-9687-23e985eb9777.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/164675419-d7e226dc-8790-4931-9687-23e985eb9777.webp
title: Lurk：一种递归零知识证明zk-SNARKs编程语言
_template: blog_detail_ch
---

我们很高兴宣布，[Lurk编程语言](http://github.com/lurk-lang)的程序库（repository）现向公众开放。Lurk是为递归zk-SNARKs（简洁非交互式零知识证明) 设计的编程语言，能够为SNARKs证明、区块链共识、Filecoin虚拟机、去中心化应用、IPFS和IPLD的数据整合等领域带来新机会。

## 概览

Lurk是[Lisp](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>)语言的一个静态方言（衍生版本），受到了Scheme和Common Lisp这两种方言的影响。它与大多数编程语言的主要区别是，Lurk程序设计的正确运行结果可以直接用zk-SNARKs来证明。这样的证明结果是相对小体积的，能快速验证，并只揭示证明中明确可以公开的信息。

简单说，Lurk是一种简易的编程语言，能够降低程序开发的难度。它让SNARK编程更容易了，因为它能写出比传统SNARK更强大的程序，也降低了这个领域之外的人写程序的准入门槛。

Lurk由PL的高级研究工程师Chhi’mèd Künzang创建，是作为实施Filecoin证明机制的扩展工作而开始的。Filecoin使用SNARKs来作为知识证明机制，它具备高效、基于密码学安全性的特点。 “ZK” (零知识)虽不是Filecoin SNARKs的必要构成部分，但它能让证明者在不公开待证明信息的前提下就能生成证明。Filecoin使用SNARKs来为复制证明Proof of Replication (PoRep) 和时空证明（Proof of Space-time，PoSt）服务，它们都是这个网络所依赖的核心密码学协议。（参见 [ProtoSchool的这篇教程](https://proto.school/verifying-storage-on-filecoin) 来深入了解这些概念。）对Filecoin证明的需求，让我们寻求在以前的SNARKs技术上取得突破，促使我们寻找、识别和发现下一代的新可能。

这就是Lurk的来由了。

与大多数zk-SNARK编写语言不一样，Lurk是图灵完备的，这样就可以用来书写及证明任意类型的计算断言（取决于资源的限制）。因为Lurk是Lisp语言的变种，它的代码是简单的Lurk数据，而Lurk数据可以直接充当一个Lurk程序。Lurk使用SNARK友好的Poseidon哈希算法来组合数据（由Neptune提供），因此它的数据天生就是基于内容寻址的。

Lurk当前支持多种后端证明系统，如[Groth16](https://eprint.iacr.org/2016/260.pdf)结合[SnarkPack+](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)和[Nova](https://github.com/microsoft/Nova)，并支持一系列特性：

- 可验证计算（Verifiable computation）
- 简洁证明（Succinct proofs）
- 零知识（Zero knowledge）
- 图灵完备性（Turing-completeness）
- 任意遍历内容寻址数据
- 高级功能（如作为计算所需的公开输入，带有证明）
- 轻易与[IPFS](https://ipfs.tech/) 和[IPLD](http://ipld.io/)整合的可内容寻址数据。

## Lurk和Filecoin

Lurk能以多种方式支持Filecoin协议的发展。例如，Lurk与[Filecoin虚拟机(FVM)](http://fvm.filecoin.io/)的整合能让Lurk程序和应用在Filecoin区块链上验证。这会让Filecoin智能合约（actors）深入接触到针对应用程序的原生零知识可验证计算能力。Filecoin的actors智能合约能够为针对Filecoin网络里数据展开的长期Lurk任务提供协商、组织和激励机制。此外，对来自多个来源的公开和隐私数据的混合证明需求，它都能满足。这包括Filecoin扇区、隐私存储或链自身的数据。

长期来说，Lurk会改进Filecoin里的[层级化共识（Hierarchical Consensus）](https://github.com/protocol/ConsensusLab/blob/main/docs/b1.pdf)。层级化共识是区块链网络平行扩容方案，能够增加吞吐量和灵活性。在这种共识里，一些用户能够启动具有独立状态和共识算法的子网络，同时还能与系统中的其他子网络无缝互动。子网络通过周期性向主链提交自身状态的证明，实质是利用了主链的安全性。这确保了最新的全局共识，并能向层级里的其他子网络传播信息。在当前的层级化共识版本中，子网络证明的验证，需要对该子网络状态的完全访问权。而Lurk可以完全移除对它的依赖，这是通过为子网络状态变更提供可验证证明的方式来实现的，从而提高系统的可扩展性和灵活性。

## Lurk生态的其他重要合作伙伴

Lurk生态包括了由[协议实验室](http://protocol.ai/)和[Filecoin基金会](http://fil.org/)支持的研究人员和研发团队。

[Nada Amin](https://namin.seas.harvard.edu/)是[哈佛大学工学院](https://seas.harvard.edu/)的计算机科学助理教授,他正将Lurk的Lisp实现方案变成一个可用的、自展开的编程系统。她说道：“这个项目创造了一个通用的电路设计，它实施了为递归零知识证明设计的Lisp语言，这是很厉害的事情，因为它优雅地将Lisp和zk-SNARKs映射起来（如） (如hash-cons映射成cons），有潜力让zk-SNARKs大众化”。

Glow是一个正在开发的编程语言，它与Lurk的整合是由Filecoin基金会资助的。它们的研究人员和工程师正研究专有领域的简易去中心化应用编程语言。“通常来说，一些Glow代码在链下执行（如被Dapps的用户），而另一些则在链上执行（如被共同的共识机制），Glow的开发公司[Mutual Knowledge Systems](https://mukn.io/)的总裁François-René Rideau解释道。“通过将Glow代码编译成Lurk，我们可以在链下生成证明，并只在证明时使用共识机制，这样能够为以Glow编写的Dapps应用降低gas费用、提高隐私性，并提高安全性和可扩展性。”

[Yatima](https://github.com/yatima-inc/yatima)也是由Filecoin基金会注资的。它由Rust语言实现，是一个依赖类型的函数式编程语言及定理证明器，支持亚结构类型、元编程（metaprogramming）和IPFS内容寻址。Yatima的AST使用IPLD格式编码，让Yatima程序能轻易在IPFS网络上分享、在Filecoin上存储、以及在任意WASM平台（包括网站和区块链运行时）上确定性地评估。

Yatima正与Lurk合作，实现任意编译时间计算任务的零知识证明。正式的证明是很有用的，但验证却成本很高。通过将这些正式的证明机制编译到Lurk（然后到zk-SNARKs上），Yatima可以为正式证明（formal proofs）提供时间和空间恒定的证明机制。

有这支杰出的研究人员和工程师团队，以及蓬勃发展的贡献者生态，我们对Lurk的未来很乐观。

## 未来规划

在接下来几个月，我们会推出一个Lurk网站和博客，它会为读者带来对Lurk的更深入的技术分析和历史背景。要保持关注，请在推特上留意[@Filecoin](https://twitter.com/filecoin)和[@ProtoResearch](https://twitter.com/ProtoResearch) 。

要了解更多，请查看[GitHub上的Lurk程序库](http://github.com/lurk-lang)。
