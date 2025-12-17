---
aliases: []
author: ""
categories:
  - updates
date: "2021-09-16T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Understand how complementary systems Filecoin and IPFS come together to create decentralized storage through the lens of Textile and Estuary, tools that help them work together. With the increasing limitations for plugins, these tools are some of the best solutions for developing for Web3 with current browsers.
image:
  alt: Using Filecoin with IPFS
  url: /uploads/using-filecoin-ipfs-1.webp
main_feature_inverted: false
related_article_1: content/blog/posts/taking-a-look-at-estuary.en.md
related_article_2: content/blog/posts/ipfs-filecoin-and-content-persistence.en.md
related_article_3: content/blog/posts/decentralized-storage-estuary-web3.storage-and-nft.storage.en.md
share_image: /uploads/using-filecoin-ipfs.webp
title: Using Filecoin with IPFS
_template: blog_detail
---

_[Browsers 3000](https://fil.org/events/hackathon-browsers-3000) is a five-week hackathon by Protocol Labs focused on decentralized solutions being built for the future of the Web3 browser. Below is a summary of a discussion by [Jimmy "Cake" Lee](https://twitter.com/wwwjim) about how to implement Textile’s libraries or Estuary to utilize Filecoin through a standard web browser. [View the full talk here](https://www.youtube.com/watch?v=2lwqUsGCTEQ&list=PLuhRWgmPaHtR2MDeMaiUcsBmBqpIBqFEP&index=4)._

With web browsers slowly shifting towards using web3, the need for decentralized file storage becomes increasingly more apparent. However, browser plugins are becoming more limited, as does access to distributed storage protocols like [IPFS](https://ipfs.tech "IPFS"). Standard web browsers aren't always able to utilize IPFS natively. As a result, there needs to be an intermediary to help developers who intend to develop apps with these storage systems.

[Estuary](https://estuary.tech/) is the solution sought by many developers who are coding for web3. Estuary is, in essence, an IPFS node with an integrated minimal Filecoin library. Getting Filecoin to work with IPFS should not be a complicated process, but it can be a little finicky to get right.

In this example, [Textile](https://textile.io "Textile") is used as a hosted intermediary to allow developers to pin content to IPFS through a standard API. Before we appreciate how these work along with each other, we need a little background as to what each does.

## IPFS and Filecoin: A Match Made in (Blockchain) Heaven

[Filecoin](http://filecoin.io) is a decentralized network that allows for storing data accessible from virtually anywhere. Users can offer their available storage as nodes on the network and earn Filecoin as data is stored and retrieved on those nodes.

The other side of this equation is IPFS. IPFS is web3's file system for handling storage and retrieval of data across the web for developers. The closest non-blockchain comparison would be the cloud — except not controlled by massive corporations.

Old-school coders might remember using pointers to access variables in the C family of languages. IPFS uses something similar in a content ID (CID) to access data from nodes where they're available.

Instead of utilizing a file address on a local drive, you can refer to the CID address on the IPFS "drive." However, since browsers don't naturally understand IPFS, they need a way to "see" those CIDs as files. For that, there’s a tool called Textile.

## Introducing Textile as a Persistent IPFS Data Store

The issue that browsers have with IPFS files is that they aren't [persistent](https://blog.ipfs.tech/2021-06-03-ipfs-filecoin-content-persistence/). [Textile](https://www.textile.io/) offers a simple hosted solution that developers can add to any website or application. Textile accomplishes this by using "[Buckets](https://docs.textile.io/buckets/)" as a way to organize, index, and pin IPFS data, despite the IPFS protocol not being natively available in every mainstream browser.

Setting up the bucket is a simple matter of creating a local secrets file to store the keys needed to access a [Textile Hub](https://docs.textile.io/hub/) account. When you sign up for a Textile Hub account and start developing an app, you'll receive a public and private key. This key needs to be inserted into the text file in the format:

TEXTILE_HUB_KEY = XXXX

TEXTILE_HUB_SECRET = XXXX

IPFS_GATEWAY = [https://ipfs.tech](https://ipfs.tech "https://ipfs.tech")

This part of the process may be the most technically challenging. Textile's CLI tools should provide the values for the public and private keys for the system to access the bucket. Once a developer gets past this point, it should be simple to develop apps using the bucket.

Textile's integration allows for development using any language or framework. While some developers may prefer to use React or Vue for their product, Angular or any other JS implementation can work just as well. The public and private keys allow for a secure way to host data. They also allow for the generation of a libp2p identity.

Once a user of your application [sets up a libp2p key](https://docs.libp2p.io/concepts/peer-id/), they can begin to pin data to IPFS using bucket infrastructure setup through Textile. Depending on server load and the quality of the connection, files may take a little while before they become accessible.

The more popular data is on the IPFS network, the faster it'll be retrieved. If the data your users are storing needs more verifiable proof that it will be stored for a long time, Textile Buckets supports a Filecoin API that allows you to make storage deals against a storage provider you already know in the Filecoin network. But what do you do if you don’t know any storage providers? [Estuary](https://estuary.tech) can provide an even simpler solution to get your data on to the Filecoin network.

## A Two-Fold Storage System

When data is added to a bucket with Textile, that data is pinned to IPFS and accessible but that data doesn't naturally enter the Filecoin chain. Data accessible through the IPFS gateway that Textile offers needs to work out a storage deal with a provider to be added to the Filecoin blockchain. To get that data pinned to the Filecoin network requires an intermediary like [Estuary](https://estuary.tech/) or [Textile’s Bidbot](https://github.com/textileio/bidbot).

With Estuary, data can be uploaded to access over 100 nodes, but there's still a question about whether your data is _really_ on the chain. There are easy verification methods for this, allowing you to get a readout of the file, the CID, and the providers currently serving the data.

Uploading files to Estuary is easy, as there are many ways to upload a file: a user can use Estuary’s API in their applications, use the command line, or just sign in and drag and drop a file in the browser.

Estuary also allows for the listing of data associated with a particular account. The listing gives a readout of all the files the user has access to and their CIDs including which storage provider has them on the Filecoin network. Estuary provides easy copy-paste integration with React JS for use with apps. Developers need to add in their own API keys, of course, but for the most part, it can be done using snippets directly from Estuary's guides.

{{< youtube id="2lwqUsGCTEQ" title="Browsers 3000: Using Filecoin" >}}

## A New Paradigm for Web Storage

IPFS and Filecoin are complementary systems, and the ecosystem has developed tools like Textile and Estuary to help them work together. With the increasing limitations for plugins, these tools are some of the best solutions for developing for web3 with current browsers. As time goes along and IPFS becomes more accessible, browsers will continue supporting native integration (see: [Opera](https://blogs.opera.com/tips-and-tricks/2021/02/opera-crypto-files-for-keeps-ipfs-unstoppable-domains/) and [Brave](https://brave.com/ipfs-support/)). As these integrations continue, Textile and Estuary give a simple workaround for using the systems alongside one another.
