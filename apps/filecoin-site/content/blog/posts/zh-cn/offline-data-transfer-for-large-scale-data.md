---
aliases:
  - /zh-cn/blog/用于大型数据的离线数据传输
  - /zh-cn/blog/offline-data-transfer-for-large-scale-data
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-08T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin旨在存储世界上最有价值的信息。在全球范围内，我们每天会生成2.5兆字节的数据。尽管其中有许多数据不需要永久存储，但其中一些数据涵盖了人类在科学、数学、艺术、历史和人文领域创造的最重要的信息。
image:
  alt: Offline Data Transfer
  url: /uploads/offline-data-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/offline-data-english-social.webp
title: 用于大型数据的离线数据传输
_template: blog_detail_ch
---

_这是新系列中的第一篇博客文章，重点介绍了Filecoin协议特有的功能。_

Filecoin旨在存储世界上最有价值的信息。在全球范围内，我们每天会生成[2.5兆字节](https://techstartups.com/2018/05/21/how-much-data-do-we-create-every-day-infographic/)的数据。尽管其中有许多数据不需要永久存储，但其中一些数据涵盖了人类在科学、数学、艺术、历史和人文领域创造的最重要的信息。

Filecoin是基于区块链用来交易分布式存储的市场。区块链的机制保障了安全的存储，而加密货币的机制则创建了动态市场。

正如我们在博客文章[加密经济结构](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/)中所讨论的那样，有时当您处理海量数据时，很难通过互联网传输这些数据以进行保管（非常昂贵和耗费时间）。对于PB级或者更大的数据集，通常最明智的方法是用硬盘来传输数据。Filecoin协议和项目拥有支持所谓的离线数据传输的工具与结构。

## 何时考虑离线数据传输

**费用**和**时间**决定是在线还是离线传输数据的两大要素。

**_费用：_** 想一下就像网络这样的存储程序——数据就像在高速公路上从一个地方传到另一个地方。这种传输很快就会变得非常昂贵。想象一个具有庞大信息的博物馆或者图书馆，想要在分布式网络（dweb）上上传、存储和托管其收藏品。为此，机构/组织可以通过互联网数据流或者使用物理设备来传输数据。

使用互联网数据流来传输，很快就产生传输成本。在今天的云服务上传输PB级数据，就需要通过多个区域发送数据从而产生网费和区域带宽费，如果您需要租用专用线路或者考虑重试需求，则还需要支付额外的费用。粗略算一下成本，仅传输2.5 PB数据所产生的带宽费就约14万美元——如果您想跨区域传输这些数据，则成本会更高。

这些费用会增加档案馆、博物馆和其他非营利机构/组织的开支。[现代艺术馆博物馆收藏](https://www.vice.com/en_us/article/gvy7q3/how-do-you-back-up-the-museum-of-modern-art) 超过90TB数据，预计到2025年将增长到1.2 PB。英文版维基百科包含超过[6 百万](https://en.wikipedia.org/wiki/Wikipedia:Size_of_Wikipedia)篇文章和超过36亿个单词。[CERN’s Open Data](http://opendata.cern.ch/)门户网站在其粒子物理实验中包含了超过1PB的实验数据。伦敦的自然历史博物馆数据门户网站包含了近400万个标本。国家档案馆的电子记录部门拥有[500 TB](https://www.archives.gov/era/about)的数据。这些都是具有巨大价值的数据。

那么考虑到硬盘——一种用于存储和传输数据的物理介质，服务器级别8TB的硬盘价格为200美元。比如传输2.5 PB的数据，您需要将近315个硬盘，总计约6.3万美元。尽管在运输、进口和货币转换方面可能会增加一些单位成本，但这远远低于通过互联网数据流传输数据的成本！

**_时间：_** 现在，假设国家档案馆希望将其电子记录转移到另一台服务器上，以100 Mbps的速度传输500TB的数据将花费[超过1年](https://techinternets.com/copy_calc?do)的时间。通过硬盘来传输相同的数据仅需要耗费下载和运输的时间——大约1个星期就可以完成！在某些情况下，很明显物理传输数据的成本效益更高，并且更快。

## Filecoin怎样进行离线数据传输

对于小型数据传输，当存储用户想和矿工进行交易时，他们会发起一个在Y时间内存储X数据的请求。在矿工和存储用户协商好交易后，通常通过网络进行从用户到矿工的传输。

Filecoin的离线数据传输功能能使拥有庞大数据集的用户可以离线完成数据的传输（例如通过将硬盘从用户手里运送到存储矿工），并按预期的顺序进行交易。这通过一个标识来实现，该标识告诉用户不要通过网络传输。取而代之的是，用户传递一个CID（描述数据的唯一标识符），矿工随后必须匹配该CID才能进行交易。这为用户节点提供了如何灵活地设置交易——例如，把数据在硬盘上的特定位置发给矿工以供他们用来生成分段的CID。

## Filecoin项目如何支持离线数据传输

5月7日，我们推出了Filecoin Discover项目，该项目旨在激励早期矿工订购并且存储硬盘中有价值的开源数据，以此来获取额外的Filecoin奖励。这样可以帮助Filecoin成为人类最重要的数据集集聚地，并使其他人可以访问，从而扩大我们的知识库来产生新想法。矿工可以选择硬盘，并在Filecoin Discover store上签署有保障的合约，其中有PB级重要公共数据目录（还在增长中）。然后矿工将在硬盘上接收数据，通过存储这些数据，矿工获取Filecoin。

此项目开始的最初24小时内，我们收到了600多个硬盘订单，很明显此项目让人感到兴奋。

对于Filecoin Discover这类项目的成功，关键在于降低硬件成本。4月的时候，Filecoin推出了一种存储设备(类似 [AWS雪球](https://aws.amazon.com/snowball/))的RFP提案，以实现更快地离线数据传输。

此提案的目标是创建可备份和低成本硬盘解决方案。矿工可以在设定的期限内租用这些设备以保障数据传输。用户可以将数据上传到这些设备，而矿工在收到数据后将其加载到自己的服务器上。

离线交易也可以在Discover项目之外进行。想一下海上的潜水艇，它收集了PB级有关太平洋水下生物的信息，当它返回陆地时，邮寄那些记录着数据的硬盘而不是依靠在线数据传输。随着我们致力于分布式网络，大量数据的物理传输将在信息传播中发挥至关重要的作用。展望一下，以兆字节为单位的数据传输（例如[AWS Snowmobile](https://aws.amazon.com/snowmobile/#:~:text=AWS%20Snowmobile%20is%20an%20Exabyte,by%20a%20semi%2Dtrailer%20truck.&text=Transferring%20data%20with%20Snowmobile%20is%20more%20secure%2C%20fast%20and%20cost%20effective.))是传输巨量数据进程的下一步。

最终，像离线数据传输这样的解决方案将使Filecoin成为替代传统云存储的更强大的数据存储平台。数据存储是几乎所有商业活动中每个单元都会产生的实际成本。如果降低存储成本，中小企业将节约部分资金用于进行研发或者招聘人才。

这只是Filecoin网络的独特功能帮助企业以更高效、安全和高性价比满足其存储需求的一个案例。在接下来的几周，我们将发布更多描述这些功能的文章。希望您能与我们一同进行这项分布式存储和改善信息访问的任务。
