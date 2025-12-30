---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-12T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  近期，Protocol Labs推出了首款产生式网络索引器（Network
  Indexer），用于搜索存储提供商提供的内容可寻址数据，例如Filecoin和IPFS网络上的数据。
image:
  alt: ""
  url: /uploads/network-indexer.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/network-indexer.webp
title: 网络索引器（Network Indexer）概述
_template: blog_detail_ch
---

近期，Protocol Labs推出了首款网络索引器（Network Indexer），用于搜索存储提供商提供的内容可寻址数据，例如Filecoin和IPFS网络上的数据。存储提供商如今可以将其数据的内容ID([CID](https://docs.ipfs.tech/concepts/glossary/#cid))发布至网络索引器，客户端可以通过查询网络索引器来检索由这些CID所标识内容的具体位置。

## 基础定义

网络索引器（以下简称“索引器”）是将CID映射到数据拥有者记录（提供者数据记录）的系统，它是为处理Filecoin网络中的数据规模而打造，并可由IPFS网络用于定位数据。

为便于用户查找，存储提供商向索引器发布数据。欲知信息存储具体位置的客户可以使用CID或内容的[多重哈希](https://docs.ipfs.tech/concepts/glossary/#multihash)查询索引器。 索引器向用户响应有关提供者的信息，告诉用户可以从哪里检索以及如何检索内容。网络索引系统架构图请见下方：

![](/uploads/indexer_ecosys.webp)

## 当前状态

**如今网络索引器已开始大规模运行，每秒可以处理超过11000个查询，并已索引了30亿个CID。**随着越来越多的存储提供商索引更多内容，预计以上数字将持续增长。

## 使用方法

网络索引器托管在[cids .contact](http://cid.contact/)上，可以通过HTTP或libp2p向其API发送请求来访问。cid.contact索引器有一个轻量级的web界面，可以用来手动输入CID和查询索引器，它会向 `cid.contact/cid/` 发出请求并显示结果。

## 具体案例

如下是通过cid.contact索引器查找内容的演示：

第一步，浏览Slingshot Recovery页面，查看由存储提供商f08403存储的国家癌症研究所数据。[点击此处](https://slingshot.filecoin.io/)。

第二步，导航至其中一个交易ID，例如[34999166](https://filecoin.tools/3499166)。  
第三步，点击payload CID `uAXASID5qXOLVLSg17P3C9tchE5BzxD4H2iAzwG6cJZL6bcAs` 进入[cid.contact](https://cid.contact/)搜索框。

至此，索引器会给出响应，表明该CID在ID为 `12D3KooWBwUERBhJPtZ7hg5N3q1DesvJ67xx9RLdSaStBz9Y6Ny8` 的存储提供商处被找到，地址为 `/dns4/yablufc.ddns.net/tcp/4567`。如此便可以继续检索数据！在[w3rc github repo](https://github.com/ipfs-shipyard/w3rc)中可以找到一个示例检索客户端。

此检索结果会将提供者信息转回JSON格式：

```json
{
  "MultihashResults": [
    {
      "Multihash": "EiA+alzi1S0oNez9wvbXIROQc8Q+B9ogM8BunCWS+m3ALA==",
      "ProviderResults": [
        {
          "ContextID": "AXESIM51QwYLyeGgLUIOT/Xyk1l+hfqSyj2EwN5wAH9Y3Z5n",
          "Metadata": "gID8AaNoUGllY2VDSUTYKlgoAAGB4gOSICAmwARKsu6MUK4TuhQXqDkXViVlAnKxjUUCEVGRGt78EWxWZXJpZmllZERlYWz1bUZhc3RSZXRyaWV2YWz1",
          "Provider": {
            "ID": "12D3KooWBwUERBhJPtZ7hg5N3q1DesvJ67xx9RLdSaStBz9Y6Ny8",
            "Addrs": ["/dns4/yablufc.ddns.net/tcp/4567"]
          }
        }
      ]
    }
  ]
}
```

该结果还显示CID可以从ID 为 `12D3KooWBwUERBhJPtZ7hg5N3q1DesvJ67xx9RLdSaStBz9Y6Ny8` 的提供商处获得，并可通过地址 `/dns4/yablufc.ddns.net/tcp/4567` 进行访问。元数据字段包含提供者用来定位内容并将其交付给客户端的数据。

若CID标识的内容可由多个提供者使用，则索引器查询结果可能包含多个提供者记录。批量查询还可用于在单个请求中查找多个CID。这就是响应包含一个`MultihashResults` 数组的原因，其目的是为支持查询多个CID。

若需通过多重哈希而非CID查找提供商信息，请使用[cid.contact/multihash/](https://cid.contact/)端点；若需查看索引器拥有数据的提供商列表，请查看[cid.contact/providers](http://cid.contact/providers)端点。

## 用户能否自行运行网络索引器？

没问题！用户可以自行运行网络索引器来索引个人内容。使用如下代码可以在大部分平台上构建索引器：
[https://github.com/filecoin-project/storetheindex](https://github.com/filecoin-project/storetheindex "https://github.com/filecoin-project/storetheindex")。

如何运行和配置个人索引器将是未来讨论的主题。有关向索引器提供数据的技术资源链接如下:

- [向索引器提供数据](https://github.com/filecoin-project/storetheindex/blob/main/doc/ingest.md#providing-data-to-a-network-indexer)
- [创建索引提供程序](https://github.com/filecoin-project/storetheindex/blob/main/doc/creating-an-index-provider.md)

## 未来计划

随着[lotus最新版本](https://github.com/filecoin-project/lotus/releases)发布，存储提供商将很快对Filecoin的大部分内容进行索引，我们很期待看到通过星际网络索引启用内容发现后出现更多用例。

我们计划通过增加网络上的索引器节点集来提高网络索引的弹性。我们希望推动有兴趣的各方运行该软件，您还可以通过[Filecoin Slack](http://filecoin.io/slack)上[#storetheindex](https://filecoinproject.slack.com/archives/C02T827T9N0)联系团队，快快加入吧！
