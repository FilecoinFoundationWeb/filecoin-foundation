---
aliases: []
author: Filecoin Project
categories:
  - updates
  - interviews
date: "2020-07-24T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  欢迎来到第七期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。我们希望本文和系列中的其他文章能激发您的兴趣来为分布式网络创建世界一流的工具。
image:
  alt: ""
  url: /uploads/hfs-header-vol2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hfs-header-vol2.webp
title: 对话HackFS黑客松团队：第二集
_template: blog_detail_ch
---

_欢迎来到第七期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。我们希望本文和系列中的[其](/blog/community-juan-leni-zondax/)[他](/blog/community-jonathan-schwartz-owl/)[文](/blog/community-ben-fino-radin-sdi/)[章](/blog/community-ben-fino-radin-sdi/) 能激发您的兴趣来为分布式网络创建世界一流的工具。_

上周我们[着重介绍了](/blog/hackfs-teams-vol-1/) OMO Earth、Pygate、Unchained Index和Padlock这4支参与HackFS的团队，HackFS是一场由协议实验室和ETH Global共同举办为期一个月、面向展示Web3强大功能的黑客松活动。本周，我们采访了另外3个团队来了解他们的工作、他们怎样参与HackFS和基于Filecoin进行创建的原因。

## [Kazan](https://github.com/samikshan/kazan)团队

![Kazan](/vintage/images/blog/hfs-kazan.png)

> "如果我弹奏吉他，有人可以加入打鼓，还可以来和声，这种合作是可以一直进行下去的并且有无限可能。我的愿景是能够加入其他的艺术家，比如制作专辑的艺术家和制作音乐视频的艺术家。"
>
> – Samikshan Bairagya

**团队成员:** Samikshan Bairagya

**我正在创建的内容：** 我的导师称这个项目的想法是“解决自己的痒点”。作为一名业余鼓手，我倾向于在SoundCloud选择音轨然后演奏。但目前暂时无法做到回放组合后的声音、改进它或者如果我觉得听起来不错可以发布混合音轨。Kazan可以解决这个问题。

Kazan是一款可以让音乐家发现新曲目并且可以重新发布以最大程度地实现进一步协作、同时确保内容创建者可以直接控制其数据的应用程序。我认为Kazan是分布式音乐应用领域里的最佳使用场景之一。我们的愿景是吸引更多的艺术家，比如作词人、诗人或者制作专辑插图甚至音乐视频的人。

**Kazan的起源：** “Kazan”在土耳其语里的意思是大锅。巨大的锅里可以酿造出迷人的音乐，其中各种不同类型的声音都作为其中的成分存在，因此激发了我们为它起了这个名字。

**我怎么参与 HackFS的:** 几个月前，我加入了ETH Global的邮件清单并且收到一封宣布启动HackFS的邮件。我倾向于在我的应用程序里使用分布式存储模型，并且我认为，对我来说这是一个可以将我的想法付诸于实践的平台。当我了解到IPFS和Filecoin生态的最新发展以及Textile一些具有强大功能的API时，我意识到我可以在HackFS期间开始制作可行的产品原型。因此，我基于这个想法申请了HackFS，并为基于IPFS和Filecoin的生态中的音乐协作应用程序构建了功能原型。

**目前为止我的HackFS经验：** HackFS的研讨会为我开始构建基于分布式存储模型的应用程序带来了很大帮助。我先从使用Textile的Powergate API进行IPFS和Filecoin上的分层存储模型的设计开始，然后我改变了使用Textile Hub的方式，不再通过使用Buckets和Threads。尽管我的项目没有直接使用libp2p，但我了解到了使用libp2p构建分布式应用程序的技术。通过[Hedgehog](https://hedgehog.audius.co/) (由Audius提供)建立应用程序的用户身份验证并将Hedgehog身份与Textile集成在一起，我从中也学习到了很多。除此之外，我还在学习VueJS框架和TypeScript并在其上面编写前端。

**我单独参赛的原因：** 我以前没有参加过几次黑客松。我上次参加黑客是2018年的时候了。但是我对这个应用程序有非常明晰的愿景——为此我已经考虑很久了。事实上，我对UX和前端的设计工作不是很精通，所以我借此机会从用户的角度真正学习了制作应用程序。这次参赛对我来说确实是一个很好的学习机会。

**团队成员：** Tarun Gupta、Anubhav Girdhar和Brennan Fife

**我们正在创建的内容：** Parcel提供分布式加密发薪服务，具有内置的数据隐私功能，并且使用Filecoin、IPFS、[Textile的Powergate](https://docs.textile.io/powergate/) 和[Sablier](https://sablier.finance/)来进行资金流转。我们正在使用所有可用的工具来构建优于当前市场的服务。当前还没有人基于数据隐私来构建工具。目前的加密货币发薪应用程序都没有实现真正的去中心化和无缝对接。

**加入HackFS的原因：** 我们在由ETH Global举办的[Hack Money](https://hackathon.money/)中提出了这个想法。我们想构建一个可使用多种代币的应用程序，但目前市场上没有发现很好的产品，因此我们决定自己构建这个工具。

我们对资金流的想法很感兴趣。因此我们开始考虑如何实施Sablier并使用该功能给我们的员工发薪。

最初，我们并没有打算专门为加密货币发薪做一个应用程序，但是在过去一个月里，我们研究了市场上可用的产品，并确定这是我们可用填补的市场空白。目前在此领域只有一个主要参与者，并且它有超过100个用户了。这是我们需要的产品验证。

**我们如何集成Filecoin和IPFS：** 为了用正确的方式进行构建，公司数据必须是私有且安全的。当前的系统容易受到攻击和泄漏数据。因此我们要构建一个系统，其数据存储在IPFS和Filecoin上，而不是中心化系统上。我们计划提供端口对端口的加密，只有有私钥的人才能访问其数据。我们到本月底之前的目标是确定最终的结构和概念证明。

## EduVault团队

![EduVault](/vintage/images/blog/hfs-eduvault.png)

**团队成员：** Jacob Cohen-Rosenthal、Aqeel Mohammad、Monica Kumaran 和 Brian Schwartz

**EduVault 背后的灵感：**  
我们的前提是，人工智能可以成为指导个人教育的绝佳工具。但要实现这一点，人工智能必须掌握关于你的完整信息——而在当今世界，这通常意味着某一家公司或平台需要对你的数据有非常全面的了解。

如今，我们使用的许多在线平台（包括 EdTech 平台）都会收集大量关于我们的数据，并将这些数据出售给第三方。EduVault 的核心理念是为数字化学习数据创建一个私有云，使学生能够根据自身需求调整学习路径，而无需向第三方或广告商提供个人信息。

如果用户愿意，也可以选择出售这些数据，或者将其匿名化后出售给具备推荐能力的广告商。但关键在于：**默认情况下，用户无需共享任何数据。**

最终，借助 EduVault，用户可以在不同应用之间随时保存数据，并在各类教育应用中同步信息。这种互操作性能够解锁强大的使用场景，并创造更优质的学习体验。

![EduVault MVP](/vintage/images/blog/hfs-eduvault-mvp.png)

到目前为止，构建私有云非常困难。 想要拥有自己的数据需要两个要素：访问控制和可用性。通过对数据进行加密可实现访问控制。可用性意味着没有人可以删除用户的数据。例如，您可以在加密您的数据库然后将其存储在中心化云存储服务上，但此服务可能某天会限制您的访问。

这就是IPFS、Filecoin和Textile的ThreadDB等工具的革命性成果。例如，使用Filecoin，您可以签订合同并保存在多个地方，以确保它始终被存储。您可以对其进行加密，并确保它始终可用。

**HackFS期间我们的目标：** 现在我们以一种简单的方式使用IPFS，并以[Pinata](https://pinata.cloud/)作为备份。下一步是开始使用Textile来实现这些用户所有权和共享的需求。HackFS的MVP将开始为我们的Flashcard应用程序使用Textile。我们从Flashcard应用程序的迷你版本开始，并创建一个小板块来使用Textile并对其进行测试。最后，我们再将Textile移到主应用程序上。

我们希望利用Filecoin以便用户使用一种简单的方式来保护其数据。我们将专注于使用Textile在Pinata上进行备份。Filecoin将增加其另一层面上的系统强健性。

**随着越来越多的学生远程学习，在全球疫情之际考虑使用EdTech吧：** EdTech是一个庞大的生态。如果学校采用类似EduVault的方式，则可让父母对孩子的数据放心。但其也是开发应用程序民主化的过程。想要在EduVault上构建应用程序或插件的孩子可以访问自己的数据开始构建。
