---
aliases: []
author: ""
categories:
  - updates
date: "2022-08-02T19:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 最近的Filecoin 网络v16 Skyr升级发布了SnarkPack证明聚合库的一个新版本。这篇文章详细讲述了相关的更新。
image:
  alt: ""
  url: /uploads/181394788-a04113a5-3d11-4588-8cd2-43a3c46e9047-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/181394788-a04113a5-3d11-4588-8cd2-43a3c46e9047-1.webp
title: "SnarkPack v2: Filecoin证明聚合器的新版本"
_template: blog_detail_ch
---

最近的[Filecoin 网络v16 Skyr升级](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/)发布了SnarkPack证明聚合库的一个新版本。这个版本并没有引入任何新功能，不过对密码学协议本身进行了强化。这篇文章详细讲述了对SnarkPack库进行检视的原因、其中发现的问题，以及如何解决这些问题并整合到Filecoin网络里。

## SnarkPack是什么？

Filecoin协议的核心是一系列密码学证明，这被称为[复制证明即Proofs-of-Replication](https://filecoin.io/blog/posts/what-sets-us-apart-filecoin-s-proof-system/) (PoReps). 这些复制证明实现了Filecoin网络的核心承诺：去中心化、**可验证的**存储。

SnarkPack是一个密码学协议，可以同时高效聚合和验证多个证明。Filecoin协议使用SnarkPark库来实现复制证明，使得上传数据到网络存储的速度更快。要了解关于SnarkPack库的更多信息，可以观看 [Financial Crypto ‘22会议的演讲](https://www.youtube.com/watch?v=fHQW_SIuv2o), 阅读[相应的论文](https://research.protocol.ai/publications/snarkpack-practical-snark-aggregation/)或相关的[博客文章](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)。

Fiat-Shamir变换是SnarkPark依赖的诸多密码学技术之一。非正式地说，Fiat-Shamir变换是一种密码学技术，它不再需要一项证明的 _验证者_ 与某项断言的 _证明者_ 进行通信。鉴于这些转换对通过SnarkPack生成的聚合证明有基础性的作用，Fiat-Shamir变换存在的任何问题都可能危及SnarkPack的正确性。

## Frozen Heart漏洞

在2022年4月13日，[Trail of Bits](https://www.trailofbits.com/)宣布[发现了漏洞](https://blog.trailofbits.com/2022/04/13/part-1-coordinated-disclosure-of-vulnerabilities-affecting-girault-bulletproofs-and-plonk/)，可能会对不同证明系统的可靠性带来冲击。这些漏洞被Trail of Bits团队称为Frozen Heart漏洞，主要是由不安全地实施Fiat-Shamir变换引起的，可能会被恶意的人用于“证明”不正确的断言。鉴于这些漏洞可以被用于攻击已经在产生应用的协议，它们首先被通报给了受影响的项目，那样就可以安全地进行补救了。

这个声明促使Filecoin的密码学团队审计SnarkPack实施方案，来识别同样的漏洞。这次检查发现了与冰冻心脏类似性质的漏洞，这也是由不安全的Fiat-Shamir变换实施方案引起的。与前面的公告不同，Filecoin的密码学团队并没有发现这些问题可以直接用于发起对Filecoin协议的攻击。不过，团队为了遵循安全最佳实践和最大程度确保证明机制的可靠性（这对Filecoin的安全性很重要），还是着力解决了这些问题。

## SnarkPack v1里的问题

为了理解SnarkPack v1实施方案里不正确的部分，我们需要研究一下Fiat-Shamir变换的工作原理。如前述，这些变换会将convert _互动性（interactive）_ 的证明系统（涉及证明的验证者与证明者之间的通信）转换成 _非互动（non-interactive）_ 的类型。被替换的所谓的“互动”步骤，一般是验证者将一个随机值告诉证明者，以此作为一项挑战。Fiat-Shamir变换可以使用随机预言机（Random Oracle）来生成这项挑战，以替换互动步骤。实践中，随机预言机被一个安全的哈希函数替换，因此证明者可以简单对公开信息和这步对应的部分输出信息进行哈希计算，并使用哈希的结果来当成必要的随机值（“挑战”）。那么，证明者往哈希计算中引入尽量多的信息是很重要的；具体说，证明者应该将验证者在互动版本里可以接触到的所有信息都输入进来。

这个概念挺简单，不过Fiat-Shamir变换的实施方案还是要小心对待，因为在哈希计算步骤里 _没有_ 包含进来的信息会增大攻击维度。恶意的人可以修改任何未经哈希计算的公开信息，来生成假证明。

在SnarkPack里，当聚合N个证明时，需要执行log2(N)个Fiat-Shamir变换，这就对应要执行log2(N)次哈希计算。每一个哈希计算都需要将证明者在证明过程中已经生成的所有元素作为输入项。用伪代码来表达的话，如下：

<code>

<p style="padding-left: 50px; display=inline-block">rand = H(...)</p>

<p style="padding-left: 50px; display=inline-block">……</p>

<p style="padding-left: 50px; display=inline-block">for i in 0…log2(n):</p>

<p style="padding-left: 100px; display=inline-block">A &nbsp; &nbsp; &nbsp;<- generate_proof_step(i)</p>

<p style="padding-left: 100px; display=inline-block">rand &nbsp; <- H(rand, A)</p>

<p style="padding-left: 100px; display=inline-block">B &nbsp; &nbsp; &nbsp;<- generate_post_randomness_step(rand)</p>

</code>

这个流程完成后（即在log2(N)步后循环终止），就需要完成最后一次哈希计算，即最后一次的随机数计算。这个随机数就会输入到SnarkPack协议的其他部分。可以用伪代码简单表达：

<code>

<p style="padding-left: 50px;">KZG_proof(final_randomness, …)</p>

<p style="padding-left: 50px;">final_randomness = H(B)</p>

</code>

## 问题

[CryptoNet](https://cryptonet.org/)做的审计揭示了SnarkPack v1在实施这个流程时存在的两个主要问题：

1. 跳过了循环里的首个哈希生成过程：当i=0，代码跳过了对哈希函数的调用，而重用了第一行首次生成的随机数。后果就是，在第一个随机数没有更改的情况下，第一个证明元素A可能会被证明者更改。
2. 跳过了最后的随机数生成过程：这意味着KZG_proof无法与证明的前面步骤正确“链接”起来。

这些问题相对来说是良性的，因为循环里的其他随机值还是会被正确计算。潜在的攻击者需要找到能匹配其他计算值的输入项，才能伪造有意义的证明。然而，鉴于对安全最佳实践的需求，还有Fiat-Shamir实施方案相关漏洞引起的关注度，我们决定在下次Filecoin网络升级时整合必要的修复方案。

## 在网络里引入SnarkPack v2

这两个问题的修复方案是由[Filecoin Crypto](https://www.notion.so/pl-strflt/FilDev-7d2b7aa348164777bf010becf08c25f0#8f795c8cac094050816e6ad3fa2448d7) 团队在Bellperson程序库里提交的，可以在[这里](https://github.com/filecoin-project/bellperson/pull/273)找到整合了这个修复的pull request记录。对那些想查看修改过的代码的读者来说，可以查看问题A ([证明者](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/prove.rs#L335), [验证者](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/verify.rs#L391))的子版块链接。也可以查看问题B ([证明者](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/prove.rs#L186), [验证者](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/verify.rs#L247))的子版块链接。

为了妥善应用这些修复程序并确保向后兼容性，我们升级了API接口来加入AggregateVersion枚举。这个版本用于标识我们到底在使用更安全的新版本代码路径(SnarkPack v2)还是传统的代码路径(SnarkPack v1)。在Skyr网络之前实现的聚合证明应该是v1，而在升级epoch之后实现的聚合证明应该是v2。在证明实施方案里整合了这个版本机制的pull request记录可以在[这里](https://github.com/filecoin-project/rust-fil-proofs/pull/1608)看到，它被包含在11.1.0版里发布。

[lotus团队](https://www.notion.so/pl-strflt/Lotus-8352bbb6c321431abd8790a7a3401ed3) 在一次[核心开发者会议](https://github.com/filecoin-project/core-devs)上帮助其他Filecoin核心开发者了解了这些问题。核心开发者一致认为相关的修复方案应尽快引入Filecoin网络。因此，在Filecoin网络上引入SnarkPack v2的计划被[包含到Skyr升级里](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151)。支持SnarkPack v2的内建actors合约可以在[这里](https://github.com/filecoin-project/builtin-actors/commit/3027c365f516e1cba6f156d4fb9dbd8c893d5b62)找到，其被所有客户端实施方案使用；客户端参考实施方案可以在[这里](https://github.com/filecoin-project/lotus/commit/717d592a3b1418bcf80d3e39dbfd37da9703b8b4)找到。

## Filecoin网络安全性

SnarkPack已经由[PLEngRes](https://www.notion.so/pl-strflt/PL-EngRes-Public-b5086aea86ed4f81bc7d0721c6935e1e) 团队的密码学家和其他专家进行审计。尽管如此，考虑到这个协议的复杂性，还是有可能存在漏洞的！在Trail of Bits的博客文章发布后，我们很快就决定重新审查SnarkPack的实施方案，来确保驱动Filecoin网络的证明机制不会存在同类问题。我们希望在Filecoin网络中坚守最高的安全标准，而这包括了及时关注最新的安全问题进展和密码学漏洞。Filecoin也邀请所有的安全和密码学研究员帮助我们维护和管理Filecoin网络的安全性。可以进一步了解[漏洞赏金项目](https://security.filecoin.io/bug-bounty/)。
