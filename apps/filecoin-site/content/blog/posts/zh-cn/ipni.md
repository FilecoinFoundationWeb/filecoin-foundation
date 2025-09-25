---
aliases: []
author: ""
categories:
  - updates
date: "2023-02-27T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: ""
image:
  alt: ""
  url: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
title: 扩展存储提供者的无限可能：无需重新通告即可更新IPNI
_template: blog_detail_ch
---

本文是IPNI系列文章中的第四篇。[第一篇文章](https://filecoin.io/blog/posts/introducing-the-network-indexer/)介绍了IPNI的概念，[第二篇文章](https://filecoin.io/blog/posts/how-does-the-network-indexer-work/)深入探讨了其内部工作方式，以便为数十亿可寻址内容找到内容提供者，[第三篇文章](https://filecoin.io/blog/posts/how-to-be-an-index-provider/)讲解了如何成为索引提供者。

在前一篇文章的基础上，本文将讨论最近添加到IPNI中的新功能——**扩展存储提供者**。

## 数据如何进入IPNI？

IPNI通过处理*Advertisements*来建立索引。通告结构允许*存储提供者*向IPNI提供其CID，一旦通告被处理，这些CID可用于快速查询。除了CID，通告还包含提供者的节点标识符、多地址和可获取数据的协议。如果要在IPNI中[查询CID](https://cid.contact/cid/bafybeia57mwbxw3csprt72a6bd6o4uedazn3vo6tv64xken6fgmaxtiugy)，可以立即看到建立连接和下载数据所需的所有字段。

通告是IPLD对象，它被链接成一个链。当IPNI看到通告时，它可以将链返回至最后一个已知条目，并从该处开始索引所有新数据。

工作流程请参考下图：

![](/uploads/ads-and-indexers.webp)

## 挑战

为像[web3.storage](http://web3.storage/)或[nft.storage](http://nft.storage/)这样的大型存储提供者建立完整的索引很困难。它会消耗大量的时间和计算资源。例如，在编写[cid.contact](http://cid.contact/)时，-少数IPNI部署之一- 有大约 *1.3 万亿个* CID的索引。从头开始重建这样的索引需要几周时间和一个全天候运行的强大服务器。

当下，如果存储提供者想横向扩展该怎么办？一个典型的方法是添加一个具有新libp2p身份的新节点，也许是不同的传输协议，并从该处开始提供相同的数据。但是，IPNI如何知道A提供者的所有数据现在也可以在B提供者获得呢？为一个新身份重新公告所有CID是极其低效的实现方式！而**扩展存储提供者**是最好的答案。

## 扩展存储提供者

扩展提供功能允许存储提供者向其过去和未来的所有通告或具有特定ContextID的单个通告添加额外信息。更重要的是，可以通过发送单个通告来实现，而无需重新发布整个通告链。

## 用例

- 通过添加具有自己libp2p身份的新节点来扩展数据检索，这些节点都服务于同一数据集。这个用例是由[Estuary](https://estuary.tech/)驱动-这是Filecoin上的一个大型数据上载平台，他们将使用扩展存储提供者来提高数据检索能力。
- 在一组新多地址上提供新数据传输协议，正如您所猜测的那样，这些多地址也服务于同一数据集。这个用例由[Boost](https://boost.filecoin.io/)驱动-这是lotus中`go-fil-markets`包的替代品。

## 如何运作

扩展存储提供者(EPs)是通告协议向后兼容的[扩展](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider)。它被定义为新的ExtendedProvider'字段，可以选择性添加至' Advertisement '。

    type Advertisement struct {
        ...
        ExtendedProvider optional ExtendedProvider
        ...
    }

    type ExtendedProvider struct {
        Providers [Provider]
        Override bool
    }

    type Provider struct {
        ID String
        Addresses [String]
        Metadata optional Bytes
        Signature Bytes
    }

扩展存储提供者可以是*chain-level或\_contextual*。chain-level扩展存储提供者应用于提供者的所有过去和未来通告。contextual扩展提供程序只应用于具有特定Context ID的通告。

当遇到这种情况时，IPNI会将'ExtendedProvider'字段解释如下：

- 如果通告没有'ContextID' -这些'提供者'将被视为chain-level。否则，它们将被视为是contextual的，并仅为'ContextID'返回。一些额外的规则如下：
  - 如果' Override '被设置在带有'ContextID'通告的'ExtendedProvider'条目上，它表示不应该为该'ContextID'返回任何指定的chain-level提供者集合。将返回'提供者'。
  - 如果' Override '没有被设置在带有`ContextID`的通告条目上，它将与任何chain-level的'ExtendedProvider'(地址、元数据)合并。

完整规则请参考[说明书](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider)。

例如，如果一个提供者Max想通过Bitswap协议从新peer id `12D3KooWB1b3qZxWJanuhtseF3DmPggHCtG36KZ9ixkqHtdKasdfh`开始提供数据，他可以发布以下通告：

    {
        Provider: "12D3KooWHHzSeKaY8xuZVzkLbKFfvNgPPeKhFBGrMbNzbfwwkpqu", // Max's original peer id
        Addresses: ["/ip4/224.96.85.246/tcp/1481", "/ip4/23.49.80.75/tcp/3339"], // Max's original multiaddresses
        ContextID: "", // Empty ContextID so that Extended Providers are chain-level
        ExtendedProvider: {
                Providers: [
                    {
                        ID: "12D3KooWB1b3qZxWJanuhtseF3DmPggHCtG36KZ9ixkqHtdKasdfh", // Max's new peer id that he wants to use for Bitswap transfers
                        Addresses: ["/ip4/224.96.85.246/tcp/1481"], // Max's new addresses that he wants to serve Bitswap over
                        Metadata: "gBI=" // Metadata that tells that this is a Bitswap protocol
                    }
                ]
        }
    }

一旦该通告被处理-Max的新提供者信息将被返回到任何CID的所有查询中。从API的角度来看，扩展存储提供者的结果与常规提供者的记录无法区分。

*有扩展存储提供者的通告也必须以一种特殊的方式签署，这是由*[*说明书*](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider)\_定义。

## Go SDK示例

最新版本的[index-provider](https://github.com/ipni/index-provider)库中加入了对扩展存储提供者的支持。这样的通告可以使用`xproviders.AdBuilder`来构建，然后使用熟悉的`Engine`接口发布。

    adv, err := xproviders.NewAdBuilder(providerID, priv, addrs).
        WithContextID(contextID).
        WithMetadata(metadata).
        WithOverride(override).
        WithExtendedProviders(extendedProviders).
        WithLastAdID(lastAdId).
        BuildAndSign()

      if err != nil {
        //...
      }

      engine.Publish(ctx, *adv)

## 资源

若您有兴趣参与IPNI或了解更多相关信息，如下资源可能有所帮助：

- [cid.contact](http://cid.contact/)(托管IPNI部署之一)
- [storetheindex](https://filecoinproject.slack.com/archives/C02T827T9N0) (Filecoin slack channel)
- [IPNI implementation](https://github.com/ipni/storetheindex)
- [IPNI Specification](https://docs.google.com/presentation/d/1_xbjDMOezZgIUfIykM_rmlMuZomhJIfqsmjlEG0rOlk/edit#slide=id.g1369cabc519_0_117)
