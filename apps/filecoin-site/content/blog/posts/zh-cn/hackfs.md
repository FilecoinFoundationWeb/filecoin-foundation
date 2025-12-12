---
aliases:
  - /zh-cn/blog/hackfs-teams-vol-1
author: ""
categories:
  - updates
  - events
date: "2020-07-17T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  欢迎来到第六期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。我们希望本文和系列中的其他文章能激发您的兴趣来为分布式网络创建世界一流的工具。查看最近有关Zondax联合创始人胡安勒尼(Juan
  Leni)的文章，该公司
image:
  alt: "走近HackFS黑客松的团队: 第一集"
  url: /uploads/hackfs-teams-vol1-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hackfs-teams-vol1-social.webp
title: "走近HackFS黑客松的团队: 第一集"
_template: blog_detail_ch
---

_欢迎来到第六期Filecoin社区亮点系列，该系列主要针对用户以及在Filecoin网络上创建基本工具和服务的开发者们。我们希望本文和系列中的其他文章能激发您的兴趣来为分布式网络创建世界一流的工具。查看最近有关_[_Zondax联合创始人_](https://filecoin.io/blog/community-juan-leni-zondax/)_胡安勒尼(Juan Leni)的文章，该公司致力于为Filecoin创建密码学库、硬件钱包集成、Ledger应用程序和GPU加速软件。_

本周我们将介绍四个参加[HackFS](https://hackfs.com/)的团队——一场由协议实验室和ETH Global主办的为期一个月、旨在展示Web3强大功能的黑客松活动。参与者可创建基于分布式存储的dapp、游戏、开发工具和DeFi集成等相关内容。期间，我们将与不同的团队交流和深入研究他们的工作。

本周我们采访了以下四个团队：

1. OMO Earth
2. Pygate
3. Unchained Index
4. Padlock

**如果您正在参与HackFS并希望成为下周社区亮点系列的一员，请**[**告诉我们**](mailto:rachel@protocol.ai)**。**

**团队成员：** Samuel Andert和Philipp Bartels

**目前主要工作内容：** 我们正在创建一个离线众筹平台，它可以把消费者有需求的软件的业务逻辑保存在分布式网络中。通过Filecoin，用户可以备份其数据以确保其安全性。去年夏天的时候，我们发现了Textile。我们正在基于IPFS创建数据库，我们并不需要中心化数据库服务器。然后我们调研了一下，看看是否有人已经对此进行了研究，如果没有，我们不得不依靠自己，但我们很高兴地发现Textile在这方面的工作功能强大且速度很快。

我们的目标是在7月底之前能出一个完整的平台工作原型。我们正在创建一个类似Patreon的基于订阅的众筹平台，在该平台上，用户越早注册为赞助者就会获得越多的收益。首先我们创建的这个平台是离线优先且使用的是Circle Universal Basic Currency协议。我们的想法是每个用户都能以自己通用的基本收入货币（UBI）通过可信的联系可以相互支付或者向其他企业付款。在不依靠中心化治理机构的情况下，采用自下而上的方式增加基本收入。在此模型中，我们通过Filecoin来备份数据。

## Pygate 团队

![Pygate Diagram](https://filecoin.io/vintage/images/blog/hfs-pygate.png)

**团队成员：** Peter Van Garderen、Leonard Ge、Antreas Pogiatzis、Chinonso Eze和Art Richards

**我们正在创建的内容：** Pygate是旨在为[Pythonistas](https://www.pythonistaplanet.com/pythonista/)创建连接Filecoin网络和IPFS技术的网关的HackFS项目。到目前为止，创建的大部分工具都是针对Javascript和Golang开发人员的。

该项目分为四个阶段，每个阶段都有可交付的成果。首先是Textile的Powergate API的Python gRPC客户端。我们还将创建Flask Web API，该API可使用gRPC客户端通过HTTP REST 和Web Sockets来获取Powergate各项功能。第三，我们正在开发作为Web API用户端的Electron应用程序。它允许用户上传或下载东西到Filecoin网络，还可以管理Filecoin钱包和监控存储交易及网络备份/运行。最后，我们正在创建一个以太坊的智能合约，该合约可以将资金存放在托管账户中，在用户进行新的Filecoin存储交易时释放资金。用户可以按照自己偏好进行设置来选择多久更新挖矿交易和使用多少个节点来满足定价和弹性需求。

其中每个项目都旨在可以作为其他项目中可使用的独立组件。

**团队起源：** 在HackFS发布之前，Peter就已经在思考基于Filecoin的解决方案。他想使用Python在Filecoin上创建他的第一个应用程序，当他意识到目前尚无可用的Python工具时（目前有Go, C++, Rust, 和Javascript），他第一步要做的是为Powergate构建pygate gRPC客户端。Peter说：“我开始设想更伟大的愿景，然后分阶段实施。我在黑客松开始前的一周加入HackFS，将这个想法发布在HackFS的Slack频道上，并在36小时内迅速组建了一个团队，其中有经验丰富的Python开发者Lenoard和Antreas以及区块链专家Art和智能合约专家Chinonso。团队将致力于将Python工具加入Pythonistas来为Filecoin网络带来新用户。通过快速组建一支高质量的团队，我们能比自己单独参赛获得更多的体验。”

## Unchained Index团队

![TrueBlocks](https://filecoin.io/vintage/images/blog/hfs-trueblocks.png)

**团队成员：** Thomas Jay Rush 和Meriam Zandy

**我们正在创建的内容：** 我们正在创建一个可生成确定性、按时间排序的、易于分块（或快照）的数据应用。IPFS是一种内容可寻址的文件系统，这非常适合我们。我们正在尝试创建可以直接从以太坊上抓取数据以便于在节点上查看数据的方法，并且正在探索可以合并Filecoin的方法。

我们的项目叫做[TrueBlocks](https://github.com/Great-Hill-Corporation)，一个区块链爬虫工具。我们查看区块链中的每个区块，并抓取该区块中的任意地址。几年前，可能一个区块中只有四五个地址，因为可能仅有1到2笔交易。今天，一个区块中包含上百条交易和300到400个不同的地址。因此我们为这些区块建立索引来寻址。

一旦有了索引，我们就可以直接查看账户的全记录，并从链上抓取特定账户的所有数据。而且我们正在创建可利用该功能的应用程序。

**我们怎么参与：** Thomas数十年来一直不断跟进内容寻址网络的进展。Thomas说：“20年前我曾在IBM工作，他们当时正在从事这类系统工作，但是当时计算机功能还不够强大。今天，我和我妻子Meriam Zandi（我们已经结婚32年了）一同加入HackFS。她最近刚从高盛退休，之前她是高盛的金融分析师。当我们讨论复杂系统时，她是最好的交流者”。

**我们要解决的问题：** 我们试图用Web 2.0相同的高质量和易用性方法向终端用户提供数据，但也有许多问题，比如隐私入侵、用户捕获和审查等等。所有这些是Web 3.0技术栈所承诺的，但目前我们还没有看到使用这种方式实现的用例。

Thomas说：“长久以来我一直从事技术工作。90年代时候，我从无网络的时代跨越到有网络的时代，现在我看到了我人生的第二次跨越，跨越到Web 3.0的时代。”

## Padlock团队

![Padlock](https://filecoin.io/vintage/images/blog/hfs-padlock.jpg)

**团队成员：** Can Kisagun、Taariq Levack、Michal Schachman、Ahmed Tawfeeq和James Waugh

**我们正在创建的内容：** Padlock是一个可以帮助创作者在分布式网络上让创作内容获利的工具。用户可以对IPFS和Filecoin上托管的专有内容访问权进行买卖以获利。内容包括任何种类的艺术，比如音乐、图像、虚拟体验或者写作内容。

Padlock将为每次购买生成唯一加密的密钥，并将它们保存在[Secret Network](https://github.com/enigmampc/SecretNetwork)上隐私保护的私密合同中，这是基于Cosmos SDK和Tendermint的PoS链。Secret Network旨在创建可扩展且可互操作的智能合约系统，以实现可编程的隐私——允许开发者创建应用程序，该应用程序在加密环境下进行输入、输出和状态运行的计算，而无需透露数据。

因为Padlock旨在成为付费访问控制的通用解决方案，因此它必须通过两种方式来保持模块化和灵活性：

1. 内容如何“上锁”（上传和加密）
2. 内容如何解锁，涉及密钥管理的私密合同和不同的付款方式。

**我们怎么参与 HackFS的:** Can、Taariq和James正在研究Secret Network的使用场景，并且看起来信任最小化的访问控制是可通用的。此外，他们熟悉IPFS，并参加过几次ETHGlobal举办的黑客松。Michal 和 Ahmed通过Slack了解到Padlock并加入了团队。

有趣的是，James还帮助一个名为[Rare Art Festival](https://medium.com/makersplace/virtual-rare-art-festival-2020-b956e521e42e)的活动，该活动独具特色的聚会把来自加密艺术界的人们聚集在一起。多年来，该活动主要以NFT平台为特色，他们中的许多人都是使用IPFS，比如SuperRare、KnownOrigin和OpenSea。我们相信，该领域的主导者正在寻找通用的解决方案来集成到现有平台上改善购买/售卖体验。

**我们希望在本次HackFS中达到的目标：** 在本次黑客松中，我们正为创作者构建一种可重用的机制，可以售卖可解锁特定内容的私钥。这个想法是使用存储在私密网络上保存隐私的智能合约中的私钥。我们还想开发一种产品，以供Web2.0、Web3.0及更高版本中的现有媒体平台中使用。

[Textile的Powergate API](https://docs.textile.io/powergate/)是我们所做工作的重要组成部分，我们旨在创建一个可供开发者用于加密、存储和付款的框架。这可能是平台可以在其社区中使用的东西。我们希望提供Powergate的可扩展实施方案来在IPFS和Filecoin上进行多层存储部署以促进潜在的功能集成。
