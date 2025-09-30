---
aliases:
  - /zh-cn/blog/如何成为索引提供者
author: ""
categories:
  - updates
date: "2023-01-27T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 这是关于网络索引器系列文章中的第三篇博文，这篇博文将深入探讨如何成为索引提供者。
image:
  alt: ""
  url: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
title: 如何成为索引提供者
_template: blog_detail_ch
---

这是关于网络索引系列文章中的第三篇博文。[第一篇博文](https://filecoin.io/blog/posts/introducing-the-network-indexer/)介绍了网络索引器的概念，[第二篇博文](https://filecoin.io/blog/posts/how-does-the-network-indexer-work/)则更深入地探讨了内部运作机制，以便为数十亿可寻址的内容找到内容提供者。

在前两篇文章的基础上，这篇博文将深入探讨如何成为网络索引器的索引提供者，助力大家成为**索引提供者**。

## 何为**索引提供者** ?

索引提供者本质上是一个内容提供者，它还做两件事：

1. 通过公布其[多重哈希](https://multiformats.io/multihash/)，告诉网络它的内容
2. 提供如何检索内容的附加信息。

## 流程概述

下面展示了一个典型的索引提供者所采取的步骤概述：
![](/uploads/process-overview.webp)

**内容**：一些新的可寻址内容存储在提供者上，提供程序从内容CID（又称“条目”）中提取多重哈希。

1.**生成广告** ：提供者将条目与关于如何检索内容的元数据集合在一个叫做*广告*的数据结构中。2.**可检索广告** ：提供者像其他内容一样存储广告，并使其可供检索，广告本身就是可寻址的内容。3.**发布（可选）**：提供者向网络宣布有新的广告内容被公布，公告可以通过两种方式发布：1.**Gossipsub公告**：发布在知名的[Gossipsub](https://docs.libp2p.io/concepts/publish-subscribe/)主题上，默认通过libp2p `/indexer/ingest/mainnet`。2. **HTTP公告**：通过HTTP传输协议向已知的网络索引器实例发出明确的' PUT '请求。

索引器节点听取公告信息作出反应，触发广告摄取机制，最终导致网络索引器对内容进行索引。

让我们深入挖掘每一个步骤。

## 生成广告

广告是一种代码数据结构，它将提供者托管的内容信息传递给网络索引器。下面的代码片段以[IPLD模式](https://ipld.io/docs/schemas/)的格式概述了这个数据结构：

```go
type Advertisement struct {
    PreviousID          optional Link
    Provider            String
    Addresses           []String
    Signature           Bytes
    Entries             Link
    ContextID           Bytes
    IsRm                Bool
    ExtendedProviders
}
```

Advertisement [IPLD schema](https://github.com/filecoin-project/storetheindex/blob/main/api/v0/ingest/schema/schema.ipldsch)

以下是这些字段所代表内容的快速概述：

- **前一个ID：** IPLD链接到上一个广告，没有链接表示该广告是链中最早的。
- **提供者：** libp2p内容提供者的Peer ID
- **地址：** 可检索内容的地址列表
- **签名：** 广告签名，由内容提供者的身份签署。
- **条目：** IPLD链接到捕获内容提供者托管的内容哈希值的条目。
- **ContextID：** 唯一标识由内容提供者发布的广告元数据的键。
- **元数据：** 可检索数据协议的编码描述
- **IsRm：** 广告是否删除以前的广告内容。
- **ExtendedProviders：** 数据的替代提供者列表。

## 广告链

这些广告被链接在一起，每个广告实际上是提供者托管的内容的差异。所有广告的集合在一起代表了主机上所有多重哈希的完整列表。下图说明了广告是如何链接在一起的：
![](/uploads/indexprovider.webp)
条目

条目捕获了一个由内容提供者托管的多重哈希列表，结构如下：

- `EntryChunk` , or
- `HAMT`

### Entry Chunk链

'EntryChunk'链使用以下IPLD模式：

```go
type EntryChunk struct {
    Entries   []Bytes
    Next      optional link
}
```

EntryChunk [IPLD schema](https://github.com/filecoin-project/storetheindex/blob/main/api/v0/ingest/schema/schema.ipldsch)

与广告类似，'EntryChunk'也被链接在一起，以方便使用IPLD链接对多重哈希列表进行分页。主要的`Entries`列表是广告中的多重哈希数组。如果一个广告有更多的CID，为了数据传输的目的，它们可以被分成多个块，概念上是一个链接列表，通过使用`Next`作为下一个块的引用。

在具体的限制方面，每个'EntryChunk'应该保持在4MB以下，而一个链接的条目列表不应该超过400个块的长度。超过这些限制，条目列表应该被分割成多个广告。实际上，这意味着每个单独的广告可以容纳大约4000万个多重哈希。

## HAMT

HAMT必须遵循[HAMT ADL](https://ipld.io/specs/advanced-data-layouts/hamt/spec)的IPLD规范。HAMT数据结构[作为一个集合使用](https://ipld.io/specs/advanced-data-layouts/hamt/spec/#use-as-a-set)来捕获正在发布的多重哈希列表。在这里，HAMT中的键表示正在发布的多重哈希，而值则被简单地设置为`true`。

[https://github.com/ipld/go-ipld-adl-hamt](https://github.com/ipld/go-ipld-adl-hamt "https://github.com/ipld/go-ipld-adl-hamt")

[https://ipld.io/specs/advanced-data-layouts/hamt/spec/](https://ipld.io/specs/advanced-data-layouts/hamt/spec/ "https://ipld.io/specs/advanced-data-layouts/hamt/spec/")

### Entry Chunk链Vs.HAMT

您可以使用这两种数据结构中的任何一种来表示广告中的条目，但选择哪一种取决于您的用例。

Entry Chunk链要简单得多：它是一个IPLD节点链，每个节点都有一个多重哈希数组。多重哈希没有被排序；这意味着要获得所有多重哈希的列表，比如带有某个前缀，就必须采集整个链。因为只有一个链接到下一个分块，所以分块遵循严格的顺序，但也不能并行遍历：我们只有通过遍历下一个链接才能知道next后面的链接。

另一方面，HAMT使用一种专门的地图数据结构来组织多重哈希。由于这种专门的组织，它提供了高效搜索，通过地图找到具有特定前缀的多重哈希。例如，当涉及到跨多个节点的责任分配时，这可以变得非常方便；关于这一点，在以后的文章中会有更多介绍。消极的一面是，它是一个更复杂的数据结构，需要了解多重哈希的总数，并进行一些研究，从而选择适当位宽和存储桶容量的HAMT值。

## 元数据

“元数据”捕获关于可检索数据协议的信息。按照惯例，它以`varint`开头，作为协议ID，它提供了如何解码剩余字节的提示。“元数据”被明确设计为可扩展的：它可以支持您喜欢的任何协议，只要数据的检索器理解协议ID。索引器节点简单地将其视为一个字节数组，最大的大小限制为1KiB。

该字段支持对多个协议ID进行编码，其中的要求是协议段应该按照协议ID值的升序出现。目前有两个很好的已知协议ID：

- Bitswap：这只是一个固定的varint值`0x0900`，没有其他字节。
- GraphsyncFileCoinV1：使用协议ID 0x0910，通过封装以下编码为CBOR的信息，指定如何从Filecoin存储提供者下载内容：

```go
type GraphsyncFilecoinV1 struct {
    PieceCID        Link
    VerifiedDeal    Bool
    FastRetrieval   Bool
}
```

GraphsyncFileCoinV1 metadata [IPLD schema](https://github.com/filecoin-project/index-provider/blob/main/metadata/graphsync_filecoinv1.ipldsch)

通常，协议ID被添加至[multicodec CSV table](https://github.com/multiformats/multicodec/blob/master/table.csv#L141)。但并不是严格要求；由于检索客户端理解元数据，您可以自由地用自己定制的非冲突协议ID编码自己的协议。

## 发布广告

广告一旦形成，索引提供者就会发布公告，以公告其存在，从而触发网络索引器对广告实际内容的轮询。公告可以通过两种方式发送：

- GossipSub
- 直接HTTP公告

如果索引器已经知道了发布公告的提供者，那么每个新广告的发布就不是严格必要的了。

## GossipSub公告

GossipSub公告使用libp2p [gossipsub](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md)协议，通过一个大家熟知的主题，叫做`/indexer/ingest/mainnet`。索引器节点监测发布在该主题上的消息，以检测：

1.最新的广告CID是什么2.可以从何处获取

然后他们联系对方，开始获取广告链。

## HTTP公告

直接HTTP公告需要在内容提供者端配置一个大家熟知的索引器端点。一旦广告形成，内容提供者向大家熟知的端点`/ingest/announce`发送`PUT`请求，请求的主体包含与gossipsub消息相同的信息。

在接收到直接通告后，索引节点上的交互是相同的；以“204 Accepted”进行响应，并被动地调用对等节点来获取广告链。

## 获取广告

如前所述，广告链由索引器拉取；这是一个关键的设计决策，可以帮助索引器节点进行扩展，并能够从大量的提供者处获取内容。通过使广告获取被动化，索引器节点有机会在有大量提供者公告的情况下批量获取请求。

它还允许索引器控制要获取的内容：索引器节点将只获取它以前未见过的广告链部分，并在内部跟踪最后处理的广告CID。

为便于获取，提供者需公开索引器节点可以访问的端点。目前支持两种传输协议：

- **HTTP**, and
- **DataTransfer** over **GraphSync**

公告消息将携带内容提供者提供的传输协议的信息。

## 修改公告内容

提供者可以通过特别制作的广告来改变其广告内容的状态，从而降低重新公告条目的需要。这是为了允许有效的修改，而不必每次都重新公告条目。

下面是关于如何通过进一步的广告来修改广告内容的最常见用例的快速概述：

- 内容删除：发布一个新广告，使用特殊的CID ' no-content '作为'Entries'链接，'IsRm'设置为true，' Provider '和'ContextID'与添加内容的广告相同。
- 检索协议更改：发布一个新广告，不指定'Entries'链接，将“IsRm”设置为false，' Provider '和'ContextID'与添加内容的广告相同，只更改新“元数据”。
- 检索地址更改：只需使用新地址发布广告，映射到提供者ID的地址就会更新之前发布的所有内容。

关于如何修改广告内容的更多信息，请参阅[ingest schema documentation](https://github.com/ipni/storetheindex/blob/main/api/v0/ingest/schema/schema.ipldsch)。

请注意，目前不支持删除所有内容。

IPNI还支持**扩展提供者大家庭**。该功能允许提供者扩展至他提供者的列表，可以从其他提供者以及检索协议中检索数据。敬请关注即将发布的专注于扩展提供者大家庭的博文。

## 验证广告

[索引提供者](https://github.com/ipni/index-provider)库提供了一个CLI工具，可用于从内容提供者和索引器端验证广告内容是否正确。它可以检查内容提供者是否正确地公开了链，以便其被网络索引器访问。在索引器端，它可以检查广告内容是否确实被索引器获取，并且可以通过与正确提供者关联的查询API发现。

[在此](https://github.com/ipni/index-provider#install)参阅安装指南，并运行`provider verify-ingest——help`获取更多信息。

## 资源

若您有兴趣参与索引器网络或了解更多关于索引器的信息，以下资源可能会有帮助：

- [cid.contact](http://cid.contact) (content routing homepage)
- [docs.cid.contact](http://docs.cid.contact) (Indexer gitbook)
- [ipni](https://filecoinproject.slack.com/archives/C02T827T9N0) (Filecoin slack channel)
- [Indexer Implementation](https://github.com/filecoin-project/storetheindex)
- [Index Ingestion](https://github.com/filecoin-project/storetheindex/blob/main/doc/ingest.md)
- [Creating an Index Provider](https://github.com/filecoin-project/storetheindex/blob/main/doc/creating-an-index-provider.md)
- [Index Providing Deck](https://docs.google.com/presentation/d/1_xbjDMOezZgIUfIykM_rmlMuZomhJIfqsmjlEG0rOlk/edit#slide=id.g1369cabc519_0_117)
