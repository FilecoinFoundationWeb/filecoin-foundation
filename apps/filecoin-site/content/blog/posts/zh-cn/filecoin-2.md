---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-10-19T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  从一开始，在Filecoin项目中建立强大的安全文化一直是我们的核心目标之一，从创建突破性的、经过研究和评估的数学证明、为Filecoin协议执行关键操作（如复制证明与时空证明）奠定基础，到建立强大的安全习惯文化、安全的代码开发和测试、通过与多个外部安全专家、Pentesters和研究人员合作，通过审计我们的代码和实践方案。
image:
  alt: ""
  url: /uploads/filecoin-security-update.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-security-update.webp
title: Filecoin安全计划更新
_template: blog_detail_ch
---

从一开始，在Filecoin项目中建立强大的安全文化一直是我们的核心目标之一，从创建突破性的、经过研究和评估的数学证明、为Filecoin协议执行关键操作（如复制证明与时空证明）奠定基础，到建立强大的安全习惯文化、安全的代码开发和测试、通过与多个外部安全专家、Pentesters和研究人员合作，共同审计我们的代码和实践方案。

随着Filecoin主网启动，**我们很高兴宣布新的[Filecoin安全网站](https://security.filecoin.io)**，其中包括目前所做的所有工作列表、未来的工作安排以及最新的漏洞赏金计划!

## 发布[security.filecoin.io](https://security.filecoin.io)

这个网站将作为Filecoin安全计划的中心枢纽。在这里您可以查看以下内容：**安全审计**、**漏洞赏金计划**、**负责任的披露政策**和**以往报告的调查结果和解决措施**。

您可以通过两种方式披露您的发现：用PGP密钥加密后发邮件给我们，或者通过Keybase。**相关详细说明可在[Filecoin Security](https://security.filecoin.io/)网站的“漏洞报告”中获得。**

## 安全审计

我们一直在与一些知名的第三方审计专家合作，以确保协议背后的理论及其实施方案能够带来预期的价值，使Filecoin成为一个安全可靠的网络。

十分感谢我们的安全合作伙伴，他们在过去的几年里与我们合作以确保Filecoin及其附件的安全。再次感谢他们：

- [SigmaPrime](https://sigmaprime.io)
- [Trail of Bits](https://www.trailofbits.com)
- [ConsenSys Diligence](https://diligence.consensys.net)
- [NCC](https://www.nccgroup.com)
- [Least Authority](https://leastauthority.com)
- 以及其他几位独立安全研究人员

您可能在某些地方已经看到了这些安全公司之前发布的审计报告（如[Drand](https://drand.love/blog/2020/08/10/drand-launches-v1-0/#security-audit)&[Gossipsub](https://blog.ipfs.tech/gossipsubv1.1-eval-report-and-security-audit)），现在您可以在[Filecoin Spec网站的审计报告栏目](https://spec.filecoin.io/#section-appendix.audit_reports.audit-reports)中找到更多报告的链接，不久还将发布更多的报告。最新的包括：

- 由SigmaPrime提供的[Filecoin Providing Subsystem Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-07-28-filecoin-proving-subsystem)
- 由Jean-Phillipe Aumasson和Antony Vennard提供的[zk-SNARK Proofs Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-07-28-zk-snark-proofs)
- 由ConsenSys Diligence提供的[Filecoin Actors Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-19-actors-audit)
- 由NCC提供的[**最近发布更新的** Filecoin Bellman / BLS Signatures Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-20-filecoin-bellman-and-bls-signatures)
- 即将发布:
- 由Least Authority提供的Filecoin Lotus Implementation Security Audit
- 由SigmaPrime提供的Filecoin Lotus Implementation Security Audit , [**最近发布更新**](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-20-lotus-mainnet-ready-security-audit)

## 负责任的披露

要确保协议对用户持续安全性，就需要创建平台来报告、理解、修补、部署发现的问题，并及时告知用户更新情况。为此，我们制定了[Filecoin负责任披露政策](https://fil.org/security/coordinated-disclosure-policy)。

## 漏洞赏金计划

Filecoin旨在为人类最重要的信息创建一个分布式的存储网络，因此确保网络的安全性和可信性是其成功的首要条件。创建安全的网络不仅仅是严格的测试和审计，我们相信与安全社区的合作将为Filecoin网络带来一个更加稳定的未来。这就是为什么我们要推出Filecoin漏洞赏金计划，通过该计划任何人都可以提交在网络、核心协议及其实施方案中发现的安全漏洞，并通过发现漏洞获得奖励。

您可以在[Filecoin安全网站](https://security.filecoin.io)上的[Filecoin漏洞赏金计划](https://security.filecoin.io/bug-bounty)栏目了解所有相关信息，包括：

- 您将有一个私密频道来报告您的发现
- 作为漏洞赏金参与者，您收到安全港政策保护
- ([**10月23日更新，奖励范围增加**](https://security.filecoin.io/bug-bounty/))根据漏洞的严重程度，您可以赢得最高10万美金的奖励：
- 重大风险: 最高$100,000
- 高级风险: 最高$50,000
- 中级风险: 最高$15,000
- 低级风险: 最高$2,500
- 提示: 最高$500
- 该计划还没有确切的结束日期，但我们正在寻找改进的方法，请关注博客和网站的更新，并将您的反馈意见发送到[security@filecoin.org](mailto:security@filecoin.org)。

## 特别感谢安全研究小组的参与

最后，在太空竞赛测试网激励期间，我们通过Filecoin安全研究小组计划与社区成员们共同合作增强网络的安全性。

漏洞赏金计划代表了这个计划在主网启动后的延续，并提供了一个平台，让更广泛的Filecoin社区、白帽黑客和对改进网络感兴趣的安全研究人员参与进来。

感谢大家。我们期待与安全社区共同合作维护Filecoin的安全。

享受寻找漏洞的乐趣吧！
