---
title: Lassie——Filecoin和IPFS检索用户端
excerpt: "我们很高兴在此分享，您现在可以使用一个叫做“Lassie”的简单检索用户端从Filecoin和IPFS检索数据。 "
share_image: /uploads/introducing-lassie.webp
author: Brenda Lee
date: 2023-05-12T10:00:00.838Z
categories:
  - updates
dim_image: true
image:
  url: /uploads/introducing-lassie.webp
---

我们很高兴在此分享，您现在可以使用一个叫做“Lassie”的简单检索用户端从Filecoin和IPFS检索数据。Lassie能够让您轻松地从Filecoin和IPFS网络中获取数据——它将通过现有的最佳检索协议寻找和获取内容。由于IPFS生态系统中数据传输协议的多样性，Lassie目前能够同时使用Graphsync或Bitswap协议，这主要取决于所请求的数据如何被获取。在未来，Lassie可能能够支持更多的数据传输协议。

对于终端用户和用户端来说，这意味着可以使用Lassie用户端轻松地从Filecoin或IPFS检索内容寻址数据(使用CIDs)，而无需运行自己的IPFS节点或Filecoin节点。只需下载Lassie二进制文件，然后用简单的指令开始检索数据。

```javascript
lassie fetch < your CID here >
```

Lassie以内容寻址存档（CAR）的形式获取内容，因此在大多数情况下，需要额外的工具来处理CAR文件。除了直接使用Lassie来检索终端用户的内容外，应用程序开发人员还可以利用Lassie作为库，直接通过应用程序内部从Filecoin和IPFS中获取内容。目前，Saturn网络（Filecoin检索市场中的Web3 CDN）正在使用Lassie作为库，从Filecoin和IPFS中检索数据。

如下视频概述了Lassie如何产生，并深入探讨了Lassie在分布式网关中的应用。

{{< youtube id="d5SzSm8NkUU" title="Fetch Content Like A Border Collie: Introducing Lassie - Hannah Howard" >}}

通过如下资源了解更多关于Lassie的信息：

- GitHub：[https://github.com/filecoin-project/lassie](https://github.com/filecoin-project/lassie)
- 概述：[基本检索](https://docs.filecoin.io/basics/how-retrieval-works/basic-retrieval/)
- 技术文件：[https://github.com/filecoin-project/lassie/tree/main/docs](https://github.com/filecoin-project/lassie/tree/main/docs)
- 提问：#retrieval-help in Filecoin slack

在此特别鸣谢所有为构建此优先检索用户端做出贡献的小伙伴([w3rc](https://github.com/ipfs-shipyard/w3rc)、[filclient](https://github.com/application-research/filclient))。

我们鼓励社区进行尝试，并与希望从Filecoin或IPFS检索内容的小伙伴们分享，期待您的反馈。您可以通过[GitHub](https://github.com/filecoin-project/lassie)以及[Filecoin slack](https://www.notion.so/54fffa1b90ff4f6180586e79ff11ae17)的#retrieval-help联系我们。
