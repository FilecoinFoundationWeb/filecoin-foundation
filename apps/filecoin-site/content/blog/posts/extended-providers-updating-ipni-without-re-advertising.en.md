---
aliases: []
author: Ivan Schasny
categories:
  - updates
date: "2023-02-28T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: Ivan Schasny
image:
  alt: ""
  url: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
main_feature_inverted: false
related_article_1: content/blog/posts/introducing-the-network-indexer.en.md
related_article_2: content/blog/posts/how-does-the-network-indexer-work.en.md
related_article_3: content/blog/posts/how-to-be-an-index-provider.en.md
share_image: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
title: "Extended Providers: Updating IPNI without re-advertising"
_template: blog_detail
---

This is the fourth blog post in a series of posts on IPNI. The [first blog post](https://filecoin.io/blog/posts/introducing-the-network-indexer/) introduced IPNI as a concept, [the second post](https://filecoin.io/blog/posts/how-does-the-network-indexer-work/) dived deeper into how it works internally in order to enable finding content providers for billions of addressable content out there and the [third](https://filecoin.io/blog/posts/how-to-be-an-index-provider/) explained how to become an Index Provider.

Building on top of the previous articled, this blog post will discuss a new feature that has recently been added to IPNI - **Extended Providers**.

## How does data get into IPNI?

IPNI builds its index by processing _Advertisements_. The Advertisement construct allows a _Storage Provider_ to offer their CIDs to IPNI, which would make these CIDs available for fast lookups once the Advertisement has been processed. Apart from CIDs, Advertisements also contain the provider’s peer id, their multiaddresses and a protocol that the data can be fetched over. If to [look up a CID](https://cid.contact/cid/bafybeia57mwbxw3csprt72a6bd6o4uedazn3vo6tv64xken6fgmaxtiugy) in IPNI, one can instantly see all the required fields for establishing a connection and downloading the data.

Advertisements are IPLD objects, that are linked into a chain. When IPNI sees an Advertisement, it can walk back the chain to the last known entry and index all the new data starting from there.

This workflow is depicted at the diagram below.

![](/uploads/ads-and-indexers.webp)

## The challenge

Building a full index for a large Storage Provider like [web3.storage](http://web3.storage/) or [nft.storage](http://nft.storage/) is hard. It consumes a lot of time and computational resources. For example, at the point of writing [cid.contact](http://cid.contact/) - one of a few IPNI deployments - had about _1.3 trillion_ CIDs indexed. Rebuilding such index from a scratch would take a few weeks and a beefy server running 24/7.

Now what if a Storage Provider wants to scale out horizontally? A typical way would be to add a new node with a new libp2p identity, maybe a different transfer protocol and start serving the same data from there. But how would IPNI know that all data of the provider “A” now is also available at the provider “B”? Re-advertising all CIDs for a new identity would be an extremely inefficient way of achieving that! **Extended Providers** is the answer.

## Extended Providers

The Extended Providers feature allows Storage Providers to add an extra information to all their past and future Advertisements or to a single Advertisement with a specific ContextID. More importantly - that can be done by sending just a single Advertisement without having to re-publish the whole Advertisement chain.

## Usecases

- Scale out data retrievals by adding new nodes with their own libp2p identities that all serve the same dataset. This usecase was driven by [Estuary](https://estuary.tech/) - a large data onboarding platform onto Filecoin, who will use Extended Providers to improve their data retrieval capabilities;
- Offer new data transfer protocols on a new set of multiaddresses that as you might have guessed serve the same dataset too. This usecase was driven by [Boost](https://boost.filecoin.io/) - a replacement for `go-fil-markets` package in lotus.

## How does it work?

Extended Providers (EPs) is a backward compatible [extension](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider) to the Advertisement protocol. It is defined as a new `ExtendedProvider` field that can optionally be add to `Advertisement`.

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

Extended Providers can be _chain-level_ or _contextual_. Chain-level Extended Providers are applied to all past and future Advertisements of the provider. Contextual Extended Providers are applied only to one Advertisement with a specific Context ID.

When encountered, IPNI would interpret the `ExtendedProvider` field as follows:

- If an Advertisement has no `ContextID` - those `Providers` will be considered chain-level. Otherwise they will be considered contextual and returned for that `ContextID` only. Some additional rules are:
  - If `Override` is set on an `ExtendedProvider` entry on an advertisement with a `ContextID`, it indicates that any specified chain-level set of providers should not be returned for that `ContextID`. `Providers` will be returned Instead.
  - If `Override` is not set on an entry for an advertisement with a `ContextID`, it will be combined as a union with any chain-level `ExtendedProvider`s (Addresses, Metadata).

For the full set of rules please refer to the [specification](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider).

For example if a provider Max would like to start serving his data from his new peer id `12D3KooWB1b3qZxWJanuhtseF3DmPggHCtG36KZ9ixkqHtdKasdfh` over the Bitswap protocol, he could publish the following Advertisement:

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

Once that Advertisement has been processed - Max’s new provider info will be additionally returned to all lookups for any of his CIDs. From the API point of view Extended Provider results are indistinguishable from regular provider records.

_Advertisements with Extended Providers have to be signed in a special way too, that is defined by_ [_specification_](https://github.com/ipni/specs/blob/main/IPNI.md#extendedprovider)_._

## Go SDK Example

Support for Extended Providers has been added to the latest version of the [index-provider](https://github.com/ipni/index-provider) library. Such Advertisements can be constructed using `xproviders.AdBuilder` and then published using the familiar `Engine` interface.

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

## Resources

If you are interested in participating in IPNI or learning more about it, you may find these resources helpful:

- [cid.contact](http://cid.contact/) (one of the managed IPNI deployments)
- [storetheindex](https://filecoinproject.slack.com/archives/C02T827T9N0) (Filecoin slack channel)
- [IPNI implementation](https://github.com/ipni/storetheindex)
- [IPNI Specification](https://docs.google.com/presentation/d/1_xbjDMOezZgIUfIykM_rmlMuZomhJIfqsmjlEG0rOlk/edit#slide=id.g1369cabc519_0_117)
