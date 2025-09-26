---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-09-16T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 通过Textile和Estuary的例子，理解Filecoin和IPFS的结合如何实现分布式存储
image:
  alt: ""
  url: >-
    /uploads/using-filecoin-ipfs-1_huead5e06741560944f57049d5aa67a724_366938_1500x0_resize_q90_linear.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: >-
  /uploads/using-filecoin-ipfs-1_huead5e06741560944f57049d5aa67a724_366938_1500x0_resize_q90_linear.webp
title: Filecoin和IPFS的结合如何实现分布式存储
_template: blog_detail_ch
---

[_Browsers 3000_](https://fil.org/events/) _是一个为期五周的黑客松活动，由Protocol Labs实验室举办，这个活动专注于为Web3未来构建的去中心化解决方案。下面是_ [_Jimmy "Cake" Lee_](https://twitter.com/wwwjim) _所给出的“如何利用Textile的库或在标准浏览器中利用Filecoin”。_ [_在这里查看完整的演讲_](https://www.youtube.com/watch?v=2lwqUsGCTEQ&list=PLuhRWgmPaHtR2MDeMaiUcsBmBqpIBqFEP&index=4)_。_

随着Web浏览器逐渐应用Web3技术，对分布式存储的需求变得越来越明显。不过，浏览器插件和使用[IPFS](https://ipfs.tech "IPFS")这类分布式存储协议时面临越来越多的局限性。标准的Web浏览器并不总能以原生的方式利用IPFS技术。因此就需要有一个中介角色，为有意使用此类存储系统应用来开发应用的开发者提供帮助。

[Estuary](https://estuary.tech/)是很多Web3开发者想寻找的解决方案。它的实质就是一个整合了最小化Filecoin库的IPFS节点。让Filecoin和IPFS一起工作并不难，不过找到正确的步骤还是需要点技巧的。

在这个例子中，[Textile](https://textile.io "Textile")正使用一个架设的中介服务，来让开发者使用标准API将内容pin到IPFS网络上。在理解它们的协作机制之前，我们需要了解一下它们各自的原理。

## IPFS和Filecoin: 区块链世界的天作之合

[Filecoin](http://filecoin.io)是一个分布式网络，它能让人们在任何地方存取数据。用户可以作为网络中的节点出租自己的可用存储空间，通过这些节点上提供的数据存取服务，用户还能赚取Filecoin.

这个结合的另一环节就是IPFS，它是一个Web3文件系统，让开发者能够在网络上存取数据。在非区块链领域能找到最相似的服务就是云计算了，不过IPFS并不是由大公司控制的。

老派的程序员可能还记得在C语言里使用指针的时候。IPFS使用类似的概念即内容标识（CID），通过这个标识就能在可用的节点上访问数据。

要访问文件的时候，你可以引用IPFS的存储服务上的CID标识，而不是使用本地硬盘里的文件地址。不过，由于浏览器并不能原生地理解IPFS，它们需要有将这些CID标识视为文件的方式。这就是Textile这个工具的作用了。

## Textile：永续的IPFS数据仓库

浏览器处理IPFS文件时碰到的问题就是它们并不具有[永续性](https://blog.ipfs.tech/2021-06-03-ipfs-filecoin-content-persistence/)。[Textile](https://www.textile.io/)提供了一个简单的架设服务式解决方案，开发者能够将其添加到任何网站或应用里。虽然IPFS协议在主流的浏览器里并没有得到原生的支持，但Textile可以使用"[Buckets](https://docs.textile.io/buckets/)"作为组织
索引和pin住IPFS数据的方式，从而满足开发者的需求。

设置bucket的步骤很容易，不外乎创建一个本地的秘密文件，用于存储访问[Textile Hub](https://docs.textile.io/hub/)账号所需的秘钥。当你注册一个Textile Hub账号并开发一个应用程序时，你会得到一对公钥和私钥。这个秘钥对需要用以下格式插入文本文件里：

TEXTILE_HUB_KEY = XXXX

TEXTILE_HUB_SECRET = XXXX

IPFS_GATEWAY = [https://ipfs.tech](https://ipfs.tech "https://ipfs.tech")

这个环节可能是最有技术含量的操作了。Textile的命令行CLI工具应该能提供公私钥对的值，让系统能够访问bucket.当开发者完成了这一步，应该就能容易地使用bucket来开发应用程序。你可以通过使用NextJS和Textile Buckets快捷开始项目的模板这个例子了解更多。.

Textile的整合方案支持使用任何语言或框架来进行开发。一些开发者可能希望在产品中使用React或Vue框架，不过Angular或其他JS实施方案其实都是可以的。公私钥对提供了安全架设数据的方式。它们还支持生成一个libp2p身份的操作。

当你的应用程序的用户[设立了一个libp2p秘钥后](https://docs.libp2p.io/concepts/peer-id/)，他们就可以使用通过Textile架设的bucket基础设施，来将数据pin到IPFS网络上。取决于服务器的流量和网络连接的质量，这些文件可能需要等待一小段时间才能被公开访问。

IPFS网络上的特定数据越受欢迎的话，它的取回速度就会更快。如果你的用户正存储的数据需要有长期存储的可验证证明，Textile Bucket还支持一个Filecoin API，让你可以与Filecoin网络里已经熟悉的存储提供者进行存储交易提议。不过，如果你连一个存储提供者都不认识的话，该怎么办？[Estuary](https://estuary.tech)提供了一个更为简便的解决方案，让你可以将数据存储到Filecoin网络上。

## 两重的存储系统

当数据通过Textile添加到一个bucket后，这个数据会被pin到IPFS上并可被其他人访问，但这并不意味着它就一定在Filecoin的链上。通过Textile的IPFS网关所访问的数据需要与一个存储服务提供者达成存储交易提议，才能被添加到Filecoin区块链上。若要将数据pin到Filecoin网路上，则需要[Estuary](https://estuary.tech/)或[Textile’s Bidbot](https://docs.textile.io/)这样的中介服务。

通过Estuary，上传的数据可以进入超过100个节点。不过问题是，你的数据 _真的_ 在链上吗？有几个简单的方法可以进行验证，让你可以获得相关的文件、CID标识号和正存储该数据的服务提供者的信息。

将文件上传到Estuary是很简单的，有以下几个方式：用户可以在其应用中使用 [Estuary的API](https://estuary.tech/) ，或使用命令行，或登录后在浏览器中拖拽文件。

Estuary还支持列出与特定账号关联的数据。这个列表提供了该用户有权访问的文件及CID标识信息，这包括了Filecoin网络上保存了这些数据的存储服务提供者的信息。Estuary提供了简单的React JS整合方式，开发者可以直接复制参考。当然，开发者还需要添加自己的API秘钥，不过大部分情况下从Estuary的手册里参考代码片段就可以满足开发需求了。

## Web存储新范式

IPFS和Filecoin是互补的系统，生态也开发了Textile和Estuary这类工具来帮助两者的协作。随着插件使用的受限程度增加，这些工具对当前浏览器里开发web3应用来说是最佳的解决方案了。以后，当IPFS变得越来越普及，浏览器将支持原生的整合方案（可以参考：[Opera](https://blogs.opera.com/tips-and-tricks/2021/02/opera-crypto-files-for-keeps-ipfs-unstoppable-domains/)和 [Brave](https://brave.com/ipfs-support/)浏览器的例子)。随着浏览器整合方案的继续发展，Textile和Estuary同时也在提供简单的变通方案，让这些系统可以良好并行运作。
