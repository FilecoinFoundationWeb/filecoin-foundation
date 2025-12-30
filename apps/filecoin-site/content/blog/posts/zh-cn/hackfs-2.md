---
aliases: []
author: Filecoin Project
categories:
  - updates
  - interviews
date: "2020-08-06T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  欢迎来到第九期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。这是我们最后一篇重点介绍HackFS团队在Filecoin上创建建基本工具和服务的文章。我们希望本文和系列中的其他文章能激发您为分布式网络创建世界一流工具的兴趣。
image:
  alt: ""
  url: /uploads/hfs-header-vol3.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hfs-header-vol3.webp
title: 对话HackFS黑客松团队：第三集
_template: blog_detail_ch
---

_欢迎来到第九期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。这是我们最后一篇重点介绍[HackFS](https://hackfs.com/) 团队在Filecoin上创建建基本工具和服务的文章。我们希望本文和系列中的其他文章能激发您为分布式网络创建世界一流工具的兴趣。_

HackFS是协议实验室和ETH Global共同主办的为期一个月的黑客松活动，本次活动旨在展示Web 3的强大功能。在黑客松的最后一周，我们采访了另外三个团队有关他们的工作、通过HackFS学到的知识以及选择基于Filecoin开展工作的原因。

## [coeo](https://github.com/coeo)团队

![coeo](/vintage/images/blog/hfs-coeo.png)

**团队成员:** Yalda Mousavinia、Ola Kohut和Peter Phillips

**coeo创意来源:** coeo是一个用于交流和管理组织的去中心化平台。我们团队来自为DAO创建app的团队—— Autark。我们在黑客松开始之时便开始了这个项目，但其中一些想法是我们先前在DAO生态中工作时受到的启发。

coeo背后的想法十分简单：没有合适的沟通就无法制定决策和进行协作。如果要创建一个真正去中心化的社区，那么不能因为谁创建了这个组织或者社区就随意更改讨论意见。

我们希望看到有人使用我们的工具来找到他们在哪里作出贡献、为组织/社区获得资助以及社区可以共同管理资金。我们希望能在方便用户入门和保护重要隐私（投票与支付）之间取得平衡。

**如何与Filecoin和IPFS合作:** 我们通过3Box使用[IPFS](https://ipfs.tech/)和[OrbitDB](https://orbitdb.org/)，平台的核心是[3Box Threads Messaging API](https://3boxlabs.com/)。我们将其用于公共和私有线程、通知和信号投票（非约束性链下投票）。我们还使用它来存储公共和私有配置文件的数据。我们将[Hedgehog](https://github.com/coeo/hedgehog-php-server) 用于基于电子邮件/密码的身份验证并将[Metamask](https://metamask.io/) 用于传统的Web 3身份验证。

我们计划将[Semaphore](https://github.com/appliedzkp/semaphore) 用于匿名、零知识证明、链上投票以及将[Aztec](https://www.aztecprotocol.com/) 协议用于零知识支付。最终，我们设想使用Filecoin进行媒体共享、文件协作(wikis)甚至是托管法律协议，以确保数据被可靠地存储并可供有需要访问的用户使用。

**我们参赛的原因:** 我们认为参与HackFS是将想法付诸于实践的绝佳机会。我们非常喜欢可以持续数周而不是仅一个周末的黑客松活动，因为这样就有兴趣投入时间来创建可以超越黑客松的工具并且我们十分欣赏 HackFS的精神。

**展望Web 3:** Web 3是尝试新型组织方式的机会。借助可编程的资金、智能合约和加密技术，我们可以绕过传统中介和各种关卡建立不受地理位置、公司实体或政治控制与约束的社区。它是一场试图把我们从所处的将人工商品化、剥削并获取财富的分级制度中脱离出来并恢复自主权的运动中不可或缺的一部分。对Web 2.0的公司来说，我们提供了产品。对Web 3 来说，新的社会共识即为产品。

## [IPFS.FPS](https://ipfs-fps.on.fleek.co/)团队

![IPFS.FPS](/vintage/images/blog/hfs-ipfsfps-1.png)

**团队成员:** Leon Do和Randy Daniel

**我们正在创建的内容:** IPFS.FPS是一款以第一人称为视角的去中心化射击游戏。我们团队想要充分享受本次参与黑客松的乐趣。我们对创建钱包和其他加密项目非常熟悉，因此我们想要单独创作。我们开始做的时候，关于如何在IPFS上部署[Unity](https://unity.com/)程序或引擎的文档很少。因此我们工作的第一步就是完善这部分。下一步就是创建可使用代币的去中心化多人游戏功能。这就是引入Filecoin的原因，当然libp2p也可以，因此我们能添加聊天或者点对点连接功能。

**我们的黑客松经验:** 在信息方面，参与研讨会非常有用。我们所有人都有全职工作，因此只能周末来进行一些艰难的工作。幸运的是，很多环节都有记录，因此我们可以随时查看视频。此外，[Filecoin Slack](https://filecoin.io/slack) 确实很有帮助。

目前我们在网站上使用[Fleek](https://fleek.co/)。我们在Unity上创建游戏，将其导出并保存在GitHub上。我们在GitHub账户上进行了标记，因此每当GitHub更新时，我们都对游戏进行更新。这就是基于IPFS创建的Fleek的用处，其次就是[不可拦截的域名](https://unstoppabledomains.com/)了。

![IPFS.FPS](/vintage/images/blog/hfs-ipfsfps-2.png)

![IPFS.FPS](/vintage/images/blog/hfs-ipfsfps-3.png)

我们的域名PFS.FPS.zil是访问我们站点最简便的方法。然后使用[Pinata](https://pinata.cloud/) 进行元标记。这是我们使用的一个小技巧——当您共享链接时，图片或屏幕截图会带有源数据来自Pinata的标注。

本次黑客松我们有两个目标。首先，我们创建完善的文档以便其他开发者和游戏玩家可以使用已有文件。我们花了一两周时间来了解运行机制。因此，希望其他开发者阅读我们的文档时，他们可以在半天之内就可以完成文档所述内容。其次，我们的第二个目标是添加更多的集成：聊天应用、代币应用以及多人游戏。

**.zil的故事:** 我们从ipfs.fps.zil网站开始，把它发给朋友来获得反馈。我们的朋友对加密技术不是很了解，因此他无法访问该网站。他需要一个插件（Chrome扩展程序）来访问像.eth、.zil这样的加密域名。

后来我们发现了[ETH.link](http://eth.link/)，它可以使任何人都能访问以“.eth.link”结尾的网站，但不能链接到“.zil”。因此我们去买了zil.sh的域名。这就像连接Web3和Web2.0的桥梁。因此，如果您有website.zil，那么只需要在末尾添加.sh就可以发给任何人而无需添加插件即可把它们连接到正确的IPFS哈希。

**本次黑客松获得的意外惊喜:** 黑客松是接触不同行业的绝佳途径。在HackFS的第一周，胡安谈到了分布式音乐网络 [Audius](https://audius.co/)。我们研究了一下发现它真的很酷。

当我们开始创建我们的游戏时，第一次使用的背景音乐听起来有点无聊。我们想寻找更有趣的音乐。然后我们在Audius上听到了不同艺术家的作品，并找到了来自乔治亚州的[ElectronWarbear](https://audius.co/ElectronWarbear)，我们取得了联系并告诉他，“我们喜欢这首歌，我们将根据需要把它放进我们的游戏里。”

## [Sailplane](https://cypsela.github.io/sailplane-web/#/)团队

![Sailplane](/vintage/images/blog/hfs-sailplane.png)

**团队成员:** Steve Dakh、Anders “Tabcat” Bjerg

**我们正在创建的内容:** 这个项目始于我们在Discord认识并开始相互发送文件的时候。Discord将文件传输限制在7兆然后告诉你，你的文件太大了。

因此通过使用IPFS，人们可以运行本地节点来存储文件。如果其他人想检索这些文件，他们也必须运行本地节点。我们是如何创建Sailplane的呢，那就是我们拥有全部节点——IPFS节点实际上是在浏览器内部运行。因此当您把文件拖到应用程序里时，浏览器会将文件存储到本地并将其保存在IPFS，因此不需要单独的软件。您只需访问我们的网站，IPFS节点就开始运行。从长远来看，随着我们不断进行改进，我们计划在Filecoin上继续进行改进。

我们的目标是构建一个无需注册即可使用大量应用的Web端应用程序。另外，我们非常关注可以自己托管Web端应用程序和搭建其连接基础架构的工程师们。

**IPFS和OrbitDB的魔力**: 目前整个应用程序都是基于IPFS和[OrbitDB](https://orbitdb.org/)创建的。我们使用IPFS来存储数据，然后使用OrbitDB来创建可共享状态。因此，使用IPFS时，如果先上传文件再上传文件夹，则所有哈希值都会更改，因此无法追踪。但是使用OrbitDB，可以存储已发生的所有更改。

因此，假设我将一些文件添加到文件夹中，并与您共享该驱动器，然后您将文件也添加到此驱动器中，这些内容都由OrbitDB来处理，它将在文件系统的架构中存储IPFS文件的CID码。用户能够能与该文件系统进行交互并可以直接计算出CID码。这就是魔力所在：我们在共享文件中进行了编辑，但发现不能更改这些文件。现在，如果我与您共享一个文件夹，您可以将其打开；如果我开始编辑内容，您可以在屏幕上实时看到这些变化，并可以实时更改和添加文件。

**自食其力的重要性:** 我遇到过尝试将很大的视频从计算机传输到手机的问题，而Apple AirDrop根本无法正常操作。因此，我使用了Sailplane。本次黑客松期间，我们一直使用Sailplane在彼此之间进行传输文件。最棒的事就是当你发现你在用自己的工具来解决问题！

**使用Web 3技术和选择此时机的原因：** Web3可以让人们进行之前做不到的事情。仅Filecoin就是一个伟大的案例。它激励了那些有硬盘存储空间但从来没有用过的人提供空间给想要存储的用户。这样的事情以前不会发生，因为所有都是中心化的，不可能有一个真正自由的市场。例如，在数据共享或去中心化金融的情况下，能够相互交易期权而替代中间商的操作令人惊讶，但现在可以实现这种操作了，这将是对传统的一个巨大颠覆，因为它将世界变得更好。
