---
aliases: []
author: ""
categories:
  - updates
date: "2021-04-29T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  NFT.Storage lets users store their NFT content and metadata seamlessly and securely with IPFS and Filecoin.
  Today we are excited to introduce NFT.Storage, a service backed by Protocol Labs and Pinata specifically for storing NFT data.
image:
  alt: ""
  url: /uploads/fil-blog-nft-storage-notext-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-nft-storage-notext.webp
title: "Introducing NFT.Storage: Free Decentralized Storage for NFTs"
_template: blog_detail
---

NFT.Storage lets users store their NFT content and metadata seamlessly and securely with IPFS and Filecoin.

Today we are excited to introduce [NFT.Storage](https://nft.storage/), a service backed by Protocol Labs and Pinata specifically for storing NFT data. NFT.Storage allows developers to protect their NFT assets and associated metadata through content addressing and decentralized storage -- ensuring that all NFTs follow best practices to stay accessible long-term.

“NFTs are part of humanity’s cultural legacy - and designing their data for long-term accessibility is crucial. Content addressing and distributed storage networks ensure that digital artwork, [basketball cards](https://dappradar.com/blog/50-million-in-sales-makes-nba-top-shot-largest-nft-market), and [virtual real estate](https://decrypt.co/57092/biggest-ever-nft-sale-made-as-single-axie-land-goes-for-1-5-million) are guaranteed to stay secure and available long-term. NFT.storage makes it completely frictionless to mint NFTs following best practices through resilient persistence on IPFS and Filecoin” said [Mikeal Rogers](https://twitter.com/mikeal), Engineering Manager at Protocol Labs.

## What is NFT.Storage

NFT.Storage lets developers store NFT data on decentralized networks easily, securely, and for free! With just a few lines of code, anyone can leverage the power of IPFS and Filecoin to ensure the persistence of their NFTs.

Here’s how it works:

1. **Content Addressing**: Once users upload data on NFT.Storage, they receive an IPFS hash of the content, known as a [CID](https://docs.ipfs.tech/concepts/content-addressing/#content-addressing-and-cids). CIDs are unique fingerprints of the data, universal addresses that can be used to reference the content regardless of how and where it is stored. Since CIDs are generated from the content itself, using CIDs to reference NFT data prevents problems like fragile links and [“rug pulls”](https://cointelegraph.com/news/opensea-collector-pulls-the-rug-on-nfts-to-highlight-arbitrary-value).
2. **Provable Storage**: NFT.Storage uses Filecoin for long-term decentralized data storage - brokering storage and retrieval deals to preserve NFT data long-term. Filecoin provides a permanence layer using cryptographic proofs to ensure the durability and persistence of the NFT data over time.
3. **Resilient Retrieval**: This data stored via IPFS and Filecoin can be fetched directly in the browser via [any public IPFS gateway](https://ipfs.github.io/public-gateway-checker/).

[![](/uploads/screen-shot-2021-04-29-at-1-51-42-pm.webp)](https://nft.storage/)

## What’s next?

NFT.Storage fills the gap for NFT developers **_today_** who are looking for easy APIs and best practices for storing their NFT data securely and resiliently. But it’s just the first step in bringing fully decentralized resilience to humanity’s cultural legacy! Prominent projects like [Palm](https://decrypt.co/63314/consensys-lines-up-damien-hirst-to-launch-new-nft-art-protocol), [VideoCoin](https://venturebeat.com/2021/04/08/videocoin-and-filecoin-will-power-video-nft-marketplace/), and many NFT marketplaces already power their NFT networks with IPFS and Filecoin, and we’re excited to continue evolving our tools and best practices for community data preservation over time.

**To be one of the early participants in NFT.Storage and start storing your NFT data securely for free today, visit https://nft.storage .**

NFT.Storage is just one way that IPFS enables the preservation of NFTs and other important cultural assets. If you’re looking for more resources on NFTs, check out:

- [NFT.Storage Video Tutorial from NFTHack](https://www.youtube.com/watch?v=aNaj9xNF8OU)
- [Best Practices for Storing NFT Data Using IPFS](https://docs.ipfs.tech/how-to/best-practices-for-nft-data/#types-of-ipfs-links-and-when-to-use-them)
- [Minting an NFT with IPFS](https://ipfs.us4.list-manage.com/track/click?u=25473244c7d18b897f5a1ff6b&id=bcae62b60f&e=7fccf7a909)
- [Storing NFTs on IPFS](https://blog.ipfs.tech/2021-04-05-storing-nfts-on-ipfs/)
