---
aliases: []
author: Filecoin Project
categories:
  - updates
  - interviews
  - events
date: "2020-10-02T00:00:01Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  [太空竞赛2:
  Slingshot](http://slingshot.filecoin.io/)已经进行了一周左右，比赛已经有了激动人心的开场！目前，已经有370多名参与者在Filecoin网络上进行了超过12.5万笔存储交易来争夺50万FIL奖池的奖励。如果您还没有注册，现在还不算太晚!
  请登录slingshot.filecoin.io/注册。
image:
  alt: ""
  url: /uploads/sling-blog-meet-teams.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/sling-blog-meet-teams.webp
title: "对话太空竞赛2: Slingshot的团队"
_template: blog_detail_ch
---

太空竞赛2: Slingshot已经进行了一周左右，比赛已经有了激动人心的开场！目前，已经有370多名参与者在Filecoin网络上进行了超过12.5万笔存储交易来争夺50万FIL奖池的奖励。如果您还没有注册，现在还不算太晚! 请登录slingshot.filecoin.io/注册。

本周，我们与四个团队进行了交流来了解他们所做的工作、他们是如何参与到Slingshot中来的以及他们在Filecoin上进行创建的原因。

## Fin-File团队

![Fin-File](/vintage/images/blog/fin-file.png)

**团队成员：** @John_Mc和@Daniel Kurzweil

**正在创建的内容**

我们的应用Fin-File最初是在7月份[HackFS](https://hackfs.com/)期间开发的。这是一个Python-Flask应用，允许用户生成美股和前100名加密货币价格数据图表和Excel。我们正在努力将其打造成一个金融和数字资产数据站，以使用户能够推送和检索这些数据集用于投资分析。

**项目的创意来源**

我之前在金融行业工作了好几年，也在加密领域有许多经验，我们发现如果能有一个数据存储，可以让人在一个地方就能把这些数据类型全部检索出来，对于机构和个人投资者来说，是一件省时又方便的事情。

**如何在Filecoin上进行创建的**

通过[Textile](http://textile.io/)[Powergate](https://docs.textile.io/powergate/)、[Hub](https://docs.textile.io/hub/)和[Buckets](https://docs.textile.io/buckets/)以及Filecoin社区的专家指导，我们能够存储结构化和索引化的基本面(代币和项目统计)和技术面(交易和图表数据)数据集，这些数据集被存储到 "热 "存储层(IPFS)，用于快速的基本数据检索，或推送到 "冷 "存储层(Filecoin)，用于构建投资组合和分析报告或开发交易机器人以使用更精细的特定数据。

**参加Slingshot的原因**

我们加入比赛是为了更贴近Filecoin社区，来改进Fin-File应用以获得更好的用户体验，同时也是为了纯粹享受在Filecoin上进行创建的乐趣，Filecoin可能是我们在加密领域获得最佳支持的社区。

**在参加Slingshot期间你发现了什么特别有帮助的资源**

Andrew Hill和其团队的[精品课程](https://www.youtube.com/watch?v=Id4SRT9_2CM&feature=youtu.be&ab_channel=Filecoin)解决了我们团队的具体困难问题，让我们在正确的道路继续前行。

## Yolo 团队

![Yolo](/vintage/images/blog/yolo.png)

**团队成员：** @Max

**正在创建的内容**

Yolo使用Filecoin和IPFS以分布式的方式存储图像数据集。这些数据旨在帮助开发机器学习和人工智能模型。我们计划使用Powergate来存储公开图像数据集，我们将继续丰富和改进它，使其成为任何人都可以使用的分布式数据集。有图片的用户可以上传图片进行贡献。在这些图片被审核通过后，他们会获得代币奖励（未来）。

**项目的创意来源**

这个想法是受我之前使用深度学习进行图像识别的启发。我们发现，不断训练数据是人工智能模型性能的关键，但现在大部分数据大多掌握在Facebook、Twitter、微信和微博等巨鲸型中心化科技公司手中。用户贡献了大量的数据，但他们得到的回报却非常小。我们相信，由成千上万的人建立的分布式存储图像数据集将改变这种现状，相信Filecoin将实现这种改变。

**你是如何与 Filecoin进行集成的**

在我们的项目中，我们将Filecoin网络作为冷存储层把数据存储在上面。我们从Filecoin检索数据，并将这些数据缓存在IPFS上。我们基于公开图像数据集创建了Yolo，这些数据集中都是带标签的图片。

**参加Slingshot的原因**

我们相信Filecoin是下一波Web3的独角兽项目，我们必须加入到这个生态中参与未来的发展。

**告诉我们有关你的项目的细节以及你是如何使用Filecoin的**

我正在做Slingshot Scavenger Hunt，这是一个游戏，参与者可从Filecoin中检索数据，并将数据添加到Filecoin中，然后基于维基百科的一小部分子集，协作扩展 "知识图谱"。目前这只是短期小项目，所以目前还没有任何游戏用户界面。

最初，我存储了一个从Kiwix离线维基百科项目建立的 "简单英语 "维基百科的版本，它最初是为Datpedia项目编译的。我把它分成了697块，每块约5MB。然后，选择较小的文件来演示从网页浏览器，甚至可以从手机上进行检索和存储。目前我可以从存储在Filecoin上的分块文件中检索各种网页。我将部署几个具有限制的Filecoin节点供玩家使用——每个玩家都会有一个独立的钱包。

**你目前的进展如何**

目前我投入了大部分精力在开发脚本上，以发现网络中活跃的矿工、自动存储每个块的足够数目副本的脚本，以便在应用程序中检索。我没有使用Powergate，所以我需要自己创建这个功能。

**这个游戏的创意来源是什么**

我之前在协议实验室的Filecoin团队工作，负责构建Lotus JS的客户端库以通过JavaScript与Lotus JSON-RPC APIs对话。我希望有一个很棒的demo来展示在网页内使用原始API（类似Powergate的东西）的可能性。

我参加Slingshot主要是为了体验和接触社区。我想有兴趣尝试Slingshot应用的人会喜欢并了解这个游戏。

## [Decentralized Docker Hub](https://github.com/viraja1/decentralized_docker_hub) 团队

![Decentralized Docker Hub](/vintage/images/blog/decentralized-docker-hub.png)

**团队成员：** @viraj

**告诉我们有关你的项目的细节**

通过分布式Docker Hub，你可以轻松地从IPFS和Filecoin上传和获取Docker镜像。它由Powergate提供支持，还支持ENS域名。分布式Docker Hub利用IPFS进行热存储，利用Filecoin进行冷存储。

我认为，我们需要一种替代中心化Docker私有镜像仓库的方法。依靠一个单一、中心化的Docker镜像来源是有风险的，因为如果一个镜像被删除，它将影响所有依赖此镜像的关系文件。

**是什么激发了你参与Slingshot**

Slingshot提供了一个在Filecoin主网启动前测试整个流程的机会。而存储在Filecoi测试网上的Docker镜像也将在Filecoin主网上线。很高兴看到Filecoin生态在临近主网发布时，不断在打造易用的产品。

**你在Slingshot社区发现了什么有帮助的建议**

在线课程和社区支持对我来说都非常有用。我发现 Textile 团队对我的帮助特别大。Slack群组中的讨论（例如#slingshot、#powergate用户、#buckets用户）为我遇到的各种问题提供了支持。

## 快来参与Slingshot

SR2 Slingshot是一个社区竞赛，以奖励在Filecoin网络上存储真实、有价值、有用的数据。我们受到那些在Filecoin上存储大型、文化或科学价值数据集的项目的启发，您存储数据越多，获取的FIL就越多!

竞赛才刚拉开序幕，欢迎大家踊跃报名！今天就到[slingshot.filecoin.io/注册](https://slingshot.filecoin.io/)报名吧。
