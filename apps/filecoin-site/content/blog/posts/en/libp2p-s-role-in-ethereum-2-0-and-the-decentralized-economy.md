---
aliases: []
author: ""
categories:
  - "updates "
date: "2021-03-12T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
draft: true
excerpt: >-
  Breaking down how libp2p helped bring about the Ethereum 2.0 milestone last
  December.
image:
  alt: ""
  url: /uploads/fil-blog-libp2p-eth-03-03-21.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-libp2p-eth-03-03-21.webp
title: libp2p’s Role in Ethereum 2.0 and the Decentralized Economy
_template: blog_detail
---

Filecoin is part of the growing decentralized economy, which has opened up new possibilities for finance, technology, and many other spheres of life. The applications that make up this decentralized universe run on a collection of underlying tools and systems. These infrastructure layers make it possible for multiple parties, nodes, and users to communicate and exchange information and value within and across decentralized ecosystems. One of the most important of these infrastructure systems is libp2p.

libp2p is “[a modular system of protocols, specifications, and libraries that enable the development of peer-to-peer network applications](https://docs.ipfs.tech/concepts/libp2p/).” libp2p grew out of the [IPFS](https://ipfs.tech/) project as its network layer, facilitating key capabilities such as transport, security, peer routing, and content discovery. libp2p has implementations in many programming languages including Go, Rust, JavaScript, Python, and C++.

As anyone who has spent time working in or on decentralized networks knows, these peer-to-peer systems present unique challenges. In traditional networks, a centralized server manages requests from the many computers that use it; these computers are called clients. Centralized systems are stagnant and predictable; servers and clients will always play the same role, and are therefore typically easier to manage.

In a decentralized network like Ethereum (and Filecoin), however, there is no centralized server. Instead, the system is governed by consensus across millions of distributed nodes -- computers performing the blockchain’s crucial work. Regardless of whether they’re acting as users or stakers, any node can act as a peer in these networks. This creates issues around “handshaking” -- which is when two nodes, possibly running different software implementations or speaking different protocols, need to interact within the system in order to carry out a function -- and demands innovative solutions. libp2p enables these many different nodes to interconnect, allowing networks like Ethereum 2 or Filecoin to reach consensus as an interconnected group of diverse peers.

Though borne out of the Protocol Labs portfolio, libp2p’s networking solution is not just limited to the IPFS and Filecoin networks. It has been adopted by developers of other blockchains to improve coordination across their stacks as well. The Ethereum community has found particular utility from libp2p, leveraging it as their networking layer with the launch of Ethereum 2.0 in December 2020.

Ethereum 1.0 uses a “whisper network” for consensus across nodes (a [“whisper network”](https://eth.wiki/concepts/whisper/whisper) refers to a p2p architecture in which messages between users are transmitted on the same network that the blockchain itself runs on). But it was not feasible to carry this model over into Ethereum 2.0, where there are more messages than there are nodes able to handle them. Fortunately, the modularity of libp2p allows developers to leverage its existing protocols and extend or replace the components they need.

Specifically, Ethereum was able to leverage the libp2p [Gossipsub protocol](https://blog.ipfs.tech/2020-05-20-gossipsub-v1.1/) to support the large scale messaging needs of the network. In addition to leveraging its existing protocols, Ethereum was also able to replace the libp2p Kademlia DHT with discv5 to meet their needs for peer and service discovery without the added key / value store.

libp2p’s design made it possible for Ethereum developers to essentially “plug and play” the foundational tools for building decentralized apps. It is modular, meaning different components of it can be used by developers as and where needed. This modularity makes it possible for developers to swap in and out components they find useful, while overall it makes it possible for Ethereum 2.0 to process all of the transactions that take place on the network. Developers’ ability to pick and choose the elements they want to include or ignore also greatly increases the ability to customize the Ethereum ecosystem. And because it’s so easy for builders to tailor to suit their requirements, libp2p is a major driver of the diversity and innovation characteristic of applications growing and thriving on the blockchain.

Ultimately, libp2p is a critical tool allowing decentralized projects like Filecoin to deliver on their missions and goals. Ethereum is leading the growth of an entirely new paradigm for technology, finance, and communication. Its distributed design and peer-to-peer operation are fundamentals that, in turn, make it possible for Filecoin to pioneer a new way for people to store their data. And libp2p is one of the underlying systems that makes it possible for Ethereum itself to operate efficiently -- powering the growing decentralized economy.
