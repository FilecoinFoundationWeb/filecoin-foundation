---
aliases: []
author: ""
categories:
  - updates
date: "2021-02-23T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 欢迎来到第12期Filecoin新闻!
image:
  alt: ""
  url: /uploads/filecoin-blog-1207x635-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-blog-1207x635-1.webp
title: "Filecoin News, Issue 12"
_template: blog_detail_ch
---

**欢迎来到第12期Filecoin新闻!如果您想就新闻中的相关内容联系我们，请至**[**Filecoin Slack**](http://filecoin.io/slack)。

## 创建

### ⚡️ 分布式生态基金

分布式资本与协议实验室合作宣布成立1500多万美元的投资基金。该基金的使命是推动IPFS和Filecoin生态的发展。分布式计划筹集1500-2000万美元，并承诺将所有筹资和投资都以FIL的形式，而不是稳定币或其他加密资产。分布式已与其他有限合伙人一起向基金投入了100万美元。分布式预计目标投资交易主要有三个来源：Slingshot项目、LongHash Filecoin Frontier 加速营和中国社区。有关该基金的更多信息，请参见[Blog](https://filecoin.io/blog/posts/the-fenbushi-ecosystem-fund-for-filecoin-development/)。

### 🧑💻 来自Textile的最新消息

Textile在Filecoin上进行了许多创建您可能已经错过其中一些：Powergate V2发布会、[以创建一个Powergate v2演练视频的公开FIL赏金项目](https://gitcoin.co/issue/textileio/powergate/773/100024745)、[Filecoin的pinningAPI反馈](https://github.com/textileio/community/discussions/291)、[Filecoin矿工指数与市场的探索](https://github.com/textileio/community/discussions/292)，我们正在招聘人员帮助Filecoin构建生态，如果您有兴趣，点击[此处申请](https://textile.breezy.hr/)。

## 存储

### 💾 Starling框架

[Starling数据完整性框架](https://filecoin.io/blog/posts/meet-filecoin-s-collaborators-jonathan-dotan-starling-framework-for-data-integrity/)可以让组织/机构能够利用密码学和分布式系统的力量来验证数字视频和图像。Starling有三个模块：采集、存储和验证。而IPFS/Filecoin框架也被嵌入到这三个模块中。

该项目由[南加州大学Shoah基金会](https://sfi.usc.edu/)和斯坦福大学电子工程系牵头。该项目的第一项工作是通过建立幸存者证词的防篡改分类账，永久地、不可篡改地记录灭绝种族的暴行，包括大屠杀、亚美尼亚事件和罗辛亚危机。

{{< youtube id="FOPRhf8B6wg" title="Starling案例研究。灭绝种族罪的证词">}}

Starling案例研究。灭绝种族罪的证词

### 🗓 Starling + Filecoin案例分析:78天

上周，Starling实验室发布了*可信图像档案馆*。该档案是路透社的摄影记者在2020年11月美国总统大选和2021年1月就职典礼之间的78天内拍摄的图片集。这些图像被上传并存储在Filecoin网络上，包括不可更改的元数据，如位置、时间和验证信息 —— 以确保记录始终存在，以防止篡改和虚假信息。要了解更多相关内容，您可点击[此处](https://www.starlinglab.org/78days/)访问该档案库。

### 📂 Filehive

OB1即将完成[Filehive](https://filehive.io/)的第一个版本，Filehive是建立在Textile的Powergate和Filecoin上的新数据集市场。Filehive让数据的策划、存储和货币化变得简单。该项目在MIT许可下完全开源，所以您可以自己运行它或使用该平台构建自己的定制化实施方案。

如果您想了解更多，请查看以下链接。

- [网站](https://filehive.io/)
- [GitHub repo](https://github.com/OB1Company/filehive)
- [Telegram](https://t.me/filehive)

## 挖矿

### ⬆️ 开发升级

Lotus发布了[v1.4.2](https://github.com/filecoin-project/lotus/releases/tag/v1.4.2)，这是一个可选的、但强烈推荐的版本，为Lotus矿工提升了交易体验和提供了新的功能和改进。点击[此处](https://github.com/filecoin-project/lotus/discussions/5595)查看更多相关细节以及在该链接中留下你的问题。另外，3月份还将进行一次网络升级，跟进未来的更新请见[网络公告](https://github.com/filecoin-project/community/discussions/74)和[lotus v1.5.0发布和升级时间表](https://github.com/filecoin-project/lotus/discussions/5617)。

更多来自Crypto Compute Lab和CryptoNet团队的更新可以在最新的[dev newsletter](https://github.com/filecoin-project/community/discussions/71#discussioncomment-378972)中查阅!

### 🪐 **欢迎Venus加入Filecoin主网！**

作为一个去中心化的网络，Filecoin旨在拥有多个独立的协议实现，以确保网络的可靠性和安全性。[Venus](https://github.com/filecoin-project/venus)是Filecoin网络目前正在开发的[四种协议实现](https://docs.filecoin.io/get-started/#filecoin-implementations)之一，该实现构建了一个更具弹性的生态。

Venus，原名go-filecoin，是以Golang语言创建的第一个Filecoin实现--最初由@anorth、@zenground0、@frrist、@laser、@dignifiedquire、@alexcruikshank、@whyrusleeping等人发起并开发。但在[2020年8月](https://filecoin.io/blog/posts/this-is-a-sample-post/)，Filecoin社区的长期成员IPFSForce接管了WIP实施的管理权，并在10月恢复开发--将其更名为 "Venus"。

我们很高兴地宣布，在区块高度[455673](https://filscan.io/#/tipset/chain?height=455673)(2021年1月30日03:16 UTC)，运行[Venus v0.9.0](https://github.com/filecoin-project/venus/releases/tag/v0.9.0)的矿工[f0128788](https://filscan.io/#/tipset/address-detail?address=f0128788)在主网上挖出了[它的第一个区块](https://filscan.io/#/tipset/chain?height=455673)!这个里程碑标志着Filecoin主网进入了一个新的时代，矿工可以共同运行多个实现，为网络增加了额外的安全性和去中心化。

想参与其中吗？我们鼓励所有开源贡献者与IPFSForce团队一起帮助构建[Venus](https://github.com/filecoin-project/venus)，让Filecoin变得更强大、更有弹性。

### ➕ Filecoin Plus

为了最大限度地提高Filecoin能够和将要支持的有用存储量，网络创新性地通过Filecoin Plus引入了一层社会信任。用户使用一种新的方式——DataCap与矿工进行交易，矿工存储数据的积极性大大提高，因为随着时间的推移，矿工的区块奖励份额会增加。

Filecoin Plus是一个技术上具有挑战性的务实解决方案，即验证特定数据集在无权限、激励兼容的假名网络中是否有用，并提出了激励通过生产的方式使用该网络的方法。点击[Filecoin Plus Blog更新](https://filecoin.io/blog/posts/filecoin-plus-aligning-participants-with-useful-storage/)了解更多关于核心概念、近期进展以及如何参与。

### ⚒ Filecoin MinerX 奖学金计划

Filecoin MinerX 奖学金计划旨在让不同地方的多样化中小型Filecoin矿工参与进来，以改善Filecoin的体验和生产力。具体来说，该计划的目标是为全球分布式、可靠的长期存储建立坚实的基础，以加速生态中工具和服务的开发，同时确定改善Filecoin社区其他矿工体验的方向。

MinerX成员将在计划期间接受存储和检索交易，支持各种开发工作，确定网络的改进方向，与社区接触，并增加他们的网络足迹。如果您有兴趣了解更多关于MinerX计划的信息，请阅读[blog文章](https://filecoin.io/blog/posts/filecoin-minerx-fellowship-program/)。

### 🔁 了解Filecoin的流通供应

Filecoin协议中嵌入的经济机制确保网络活动和利益相关者与网络的长期健康发展相匹配。基于网络增长的铸币变量、解锁方式、代币消耗、抵押品要求等机制使参与者的激励和动机与网络的长期成功相匹配。

请阅读我们最新的技术博客文章["了解Filecoin流通供应"](https://filecoin.io/blog/filecoin-circulating-supply/)，该文旨在解读Filecoin代币是如何进入流通供应的，对各种利益相关者如何参与其经济提供了更多的见解，并揭示了人们应该如何对待和思考Filecoin代币经济。这篇文章应该配合阅读[Filecoin的经济](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf)的论文和[Filecoin Spec](https://spec.filecoin.io/#)中概述的详细机制。

## 社区

### 🤝 Filecoin社区见面计划

Filecoin社区见面会是一个认识Filecoin生态中许多工具和项目背后的团队的机会。如果您错过了2月份的见面会，请点击[此处查看记录](https://www.youtube.com/watch?v=fpGvQtUoHaw)，并在3月9日下午1点（太平洋时间）加入我们的下一次线上见面会--[点击此处注册](https://www.meetup.com/Filecoin-San-Francisco/events/276425691/)。此外，如果您有兴趣在3月的见面会上就您的项目做一个简短的演示，请[点击此处申请](https://docs.google.com/forms/d/e/1FAIpQLSc5Ol4Q_FpdnM61gQRQ10DLLrRAy8-j6YrfWUBEbcVVkNQ4mQ/viewform)。

## 学习

### 👨🏫 DI2F研讨会在IFIP Networking 2021举行。利用IPFS和Filecoin实现互联网的去中心化

第一次DI2F研讨会将在重要的网络会议上举行，届时来自学术界、工业界、Filecoin和IPFS生态以及更广泛的分布式网络社区的与会者将齐聚一堂。研讨会欢迎正在进行中的论文以及立场声明和项目演示参与进来。相关竞赛将为与会者提供在IPFS和Filecoin上发展的机会，并赢得奖金。论文、演示和竞赛项目的征集截止到**3月19日**。要了解更多信息和申请，请查看[IFIP Networking 2021网站的投稿征集活动](https://networking.ifip.org/2021/workshops/di2f-decentralising-the-internet-with-ipfs-and-filecoin.html)。

### 💻 在Proto学院的最新教程中探索Merkle DAGs

使用IPLD提供模式结构化的内容寻址的Merkle DAGs是Filecoin、IPFS、libp2p和其他分布式协议互操作性的关键。[Proto学院最新无代码教程](https://proto.school/merkle-dags)深入探讨了使Merkle DAGs成为分布式网络框架的特性，探索了该数据结构所带来的诸多好处，例如从可验证性到可分发性再到重复数据删除。点击此处探索Proto学院[Filecoin课程](https://proto.school/course/filecoin)中的新教程!

### 想参与吗？

请前往[GitHub上的Filecoin项目](https://github.com/filecoin-project)，并一定要查看[社区资源](https://github.com/filecoin-project/community)。在[Filecoin Slack](http://filecoin.io/slack)中提问，或在[社区论坛](https://discuss.filecoin.io/)中讨论问题或新想法，或[在Twitter上关注@Filecoin](https://twitter.com/Filecoin)给我们发送您的想法。

[Filecoin博客](https://filecoin.io/blog/)和我们的[YouTube频道](https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA)也是您刚开始学习的重要信息来源。要想将本期新闻直接发送到您的收件箱，请[订阅Filecoin Newsletter](https://mailchi.mp/filecoin.io/subscribe)。
