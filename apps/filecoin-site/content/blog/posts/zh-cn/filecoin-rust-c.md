---
aliases:
  - /zh-cn/blog/announcing-filecoin-implementations-in-rust-and-c++
author: ""
categories:
  - updates
cover_feature: false
date: ""
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  今天，我们很高兴地宣布，Filecoin协议已上线另外两个实现：forest(由ChainSafe在Rust上实现)和fuhon(由Soramitsu在C++上实现)。这些实现正在积极地开发中，现已完全开放供大家使用。请于GitHub上查看！
image:
  alt: C++ and Rust
  url: /uploads/rust-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/rust-english-social.webp
title: 宣布Filecoin的Rust和C++版本实现
_template: blog_detail_ch
---

今天，我们很高兴地宣布，Filecoin协议已上线另外两个实现：[**forest**](https://github.com/ChainSafe/forest/)(由ChainSafe在Rust上实现)和**fuhon**(由Soramitsu在C++上实现)。这些实现正在积极地开发中，现已完全开放供大家使用。请于GitHub上查看！

## 上线不同实现的重要性

正如我们在[这篇博客文章](https://filecoin.io/blog/announcing-lotus/)里首次提到的那样，上线多种实现的Filecoin网络是我们实现网络安全策略的关键部分。可在同一网络进行互操作的多个实现可减少*一个*实现出现重大错误和破坏整个网络的风险。

此外，任何像Filecoin的开源项目的成功都基于一个强大的并共同参与项目建设和管理的社区。最终，协议实验室将成为**许多**贡献他们能量、才华和资源来使Filecoin成为推动互联网基础架构的重要力量之一。我们非常高兴地看到像ChainSafe和Soramitsu这样杰出的团队构建实现并为更广泛的Filecoin生态系统提供安全性。

今天，Filecoin协议有**四个全节点实现**正在开发过程中，这是提高Filecoin网络安全性和发展Filecoin生态系统巨大的一步！

[![Four Filecoin Implementations](https://filecoin.io/vintage/images/blog/four-implementations.png)](https://filecoin.io/vintage/images/blog/four-implementations.png)

尽管4个实现还没有功能完备，但它们已经非常接近实现了。正如我们在最新路线图更新中所发布的那样，我们的目标是接下来的几周内实现**lotus**和**go-filecoin**之间的网络互操作。同样，**fuhon**和**forest**的互操作也在不久之后发布。同时，您也可以在GitHub上跟踪每个版本的进度：

- [**go-filecoin**](https://github.com/filecoin-project/go-filecoin) (written in Go)
- [**lotus**](https://github.com/filecoin-project/lotus) (written in Go)
- [**fuhon**](https://github.com/filecoin-project/cpp-filecoin) (written in C++)
- [**forest**](https://github.com/ChainSafe/forest) (written in Rust)

## 关于 ChainSafe and Soramitsu

我们选择了ChainSafe和Soramitsu作为我们第一批实现上线资助的合作伙伴，因为这些团队与web 3的使命和价值保持了一致性，并在实施复杂的区块链实现方面具有深厚的经验，我们很高兴能有这些模范团队为Filecoin的生态作出贡献。

## ChainSafe

[ChainSafe Systems](https://chainsafe.io/) 是一家正在为Web 3构建基础架构的区块链研发公司。ChainSafe成立于几年前，由在早期以太坊见面会上认识的开发者组成。从那时起，该团队就在致力于Ethereum, Ethereum Classic, Cosmos, Polkadot和现在Filecoin生态的构建。除了实现Filecoin的Rust版本实现外，ChainSafe还在构建以太坊2.0和Polkadot协议的实现。您可以在此处了解有关团队及其Filecoin Rust版本实现的更多信息。

## Soramitsu

[Soramitsu](https://soramitsu.co.jp/) 是一家日本金融科技公司，具有创建区块链底层架构、支付系统和身份认证解决方案的专业经验与知识。Soramitsu团队在构建企业级金融技术系统方面具有丰富的经验，这种在构建复杂软件（尤其是区块链方面）上对稳健性和高质量的追求是非常重要的。除了Filecoin的C++版本实现实现之外，Soramitsu还在构建Polkadot的C++版本，并且是[libp2p的C++版本](https://github.com/soramitsu/libp2p)的主要维护者。

## 加入合作

随着Filecoin生态的发展，我们会不断寻找目标一致的合作伙伴。如果您想构建或查看我们的提案申请要求，请点击Filecoin DevGrants program！如果您想集思广益并了解其他的参与方式，请点击 [https://discuss.filecoin.io/](https://discuss.filecoin.io/ "https://discuss.filecoin.io/") 发布你的想法。

与往常一样，感谢您一直以来的支持，我们期待您的加入！
