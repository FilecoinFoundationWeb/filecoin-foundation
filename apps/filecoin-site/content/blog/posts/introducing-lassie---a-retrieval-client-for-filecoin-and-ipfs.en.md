---
title: Introducing Lassie - a retrieval client for Filecoin and IPFS
excerpt: >-
  We’re excited to share that you can now use a simple retrieval client, named
  Lassie, to retrieve your data from Filecoin and IPFS.
share_image: /uploads/introducing-lassie.webp
author: Brenda Lee
date: 2023-05-12T10:00:00.838Z
categories:
  - updates
dim_image: true
image:
  url: /uploads/introducing-lassie.webp
---

We’re excited to share that you can now use a simple retrieval client, named Lassie, to retrieve your data from Filecoin and IPFS. Lassie makes it easy to fetch your data from both the Filecoin and IPFS Network - it will find and fetch content over the best retrieval protocols available. Due to the diversity of data transport protocols in the IPFS ecosystem, Lassie currently is able to use both the Graphsync or Bitswap protocols, depending on how the requested data is available to be fetched. In the future, Lassie may be able to support additional data transport protocols.

For end users and clients, this means you can easily retrieve your content addressed data (using CIDs) from Filecoin or IPFS using the Lassie client, without having to run your own IPFS node or Filecoin node. Simply download the Lassie binary and start retrieving your data with the simple command -

```javascript
lassie fetch < your CID here >
```

Lassie fetches content in content-addressed archive (CAR) form, so in most cases you will need additional tooling to deal with CAR files. In addition to using Lassie directly to retrieve end user content, application developers can leverage Lassie as a library to fetch content from Filecoin and IPFS directly from within an application. Currently, the Saturn Network (a Web3 CDN in Filecoin’s retrieval market) is using Lassie as a library to retrieve data from Filecoin and IPFS.

Here is an overview of how Lassie came to be and a deeper dive into how Lassie is being used in a decentralized gateway.

{{< youtube id="d5SzSm8NkUU" title="Fetch Content Like A Border Collie: Introducing Lassie - Hannah Howard" >}}

Learn more about Lassie with these resources:

- GitHub: [https://github.com/filecoin-project/lassie](https://github.com/filecoin-project/lassie)
- Overview: [Basic Retrieval](https://docs.filecoin.io/basics/how-retrieval-works/basic-retrieval/)
- Technical documentation: [https://github.com/filecoin-project/lassie/tree/main/docs](https://github.com/filecoin-project/lassie/tree/main/docs)
- Ask questions: #retrieval-help in Filecoin slack

Special thanks to all who have paved the way building out prior retrieval clients ([w3rc](https://github.com/ipfs-shipyard/w3rc), [filclient](https://github.com/application-research/filclient)).

We encourage the community to try it for yourself and share with others who want to retrieve content from Filecoin or IPFS, and look forward to hearing your feedback. You can find us on [GitHub](https://github.com/filecoin-project/lassie) or #retrieval-help in [Filecoin slack](https://www.notion.so/54fffa1b90ff4f6180586e79ff11ae17).
