---
title: Filecoin Foundation Successfully Deploys InterPlanetary File System
  (IPFS) in Space
created-on: 2024-01-16T02:43:22.627Z
updated-on: 2024-01-16T02:43:22.642Z
published-on: 2024-01-16T02:43:22.656Z
f_description: Filecoin Foundation (FF) successfully completed a
  first-of-its-kind mission deploying the InterPlanetary File System (IPFS) in
  space. The recent demonstration involved sending files from Earth to orbit and
  back using an implementation of the IPFS protocol designed for space
  communications.
f_featured: false
f_image:
  url: /assets/images/01-lockheed.png
f_post-date: 2024-01-16T02:43:22.669Z
tags: blog
layout: "[blog].html"
date: 2024-01-16T02:43:22.681Z
seo:
  noindex: false
  twitter:title: summary
  twitter:card: summary
---
*Mission Sending Files from Earth to a Satellite to Demonstrate How IPFS Can Improve Communications Across Long Distances*

Filecoin Foundation (FF) successfully completed a first-of-its-kind mission deploying the InterPlanetary File System (IPFS) in space. The recent demonstration involved sending files from Earth to orbit and back using an implementation of the IPFS protocol designed for space communications. 

This mission, conducted with Lockheed Martin-developed software, demonstrated how IPFS – a decentralized content distribution system – can bring the benefits of decentralized technologies to space to enable better communications across long distances and resilience in challenging environments. 

As part of the demonstration, [the IPFS white paper](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf) and an image of FF’s mascot (Biscuit, the “FileCorgi”) were transmitted to an orbiting LM LINUSS ™CubeSat and back using a purpose-built IPFS implementation that ran atop [Lockheed Martin’s SmartSat technology](https://www.lockheedmartin.com/content/lockheed-martin/en-us/news/features/2024/smartsat-equipped-satellite-uploads-new-mission-on-orbit.html), a software platform that makes it easier to dynamically add and quickly change missions in orbit through simple app uploads. 

This successful demonstration follows nearly three years of collaboration. FF and Lockheed Martin Space initially [announced the collaboration](https://fil.org/blog/filecoin-foundation-and-lockheed-martin-bring-decentralized-storage-to-space/) in Davos in May 2022, and [announced details of the mission](https://fil.org/blog/ff-x-lockheed-martin-mission-announcement/) in Davos in January 2023. 

“IPFS is called the ‘interplanetary’ file system because, from the beginning, IPFS was envisioned as a technology that could enable networking in space,” said Marta Belcher, president and chair of FF. “We could not be more thrilled to make that vision a reality, thanks to the amazing team at Lockheed Martin Space.” 

This mission demonstrates several key benefits of using IPFS for communications and networking in space: 

*Faster Communications* – Today’s centralized Internet model doesn’t work in space. In a centralized Internet model, data is retrieved from a particular server in a particular place. On Earth, the delay of retrieving that data may not be noticeable. But if you’re on the moon, there will be a multi-second delay each time you retrieve data from Earth. With IPFS, data doesn’t need to go back and forth from Earth with every click. That’s because, with IPFS, data is identified by what it is rather than where it is. Each piece of content has a unique “content ID.” When you look for a piece of content, that content is retrieved from wherever is closest, rather than being retrieved from a particular server in a particular place. That means if someone nearby already has that data, it only has to travel a short distance and can get to you quickly instead of traveling back and forth from Earth with every click.

*Data Verification* – With IPFS, each piece of content has a unique identifier called a “content ID.” If a piece of content is altered, its content ID will be different as a result. That means that, by using IPFS, you can cryptographically verify that data has not been modified. This is also useful for authenticating data from space. For example, if a satellite takes photographs and then transmits them to the ground using IPFS, it is possible to cryptographically prove that those images were not tampered with, and are, in fact, the original images taken by the satellite.  

*Data Resilience* – One challenge with storing data in space is that the data can easily be corrupted by radiation, or the storage hardware can be damaged by debris. In a centralized Internet model, data is stored in a particular location on a particular piece of hardware, and when you are trying to retrieve that data, there is only one place you can retrieve it from. To put it another way: imagine that you recommend a book to a friend, but you don’t tell your friend the name of the book – instead, you tell your friend that the book is in the New York Public Library, on the third floor, on the second shelf from the left, five books over. That’s how today’s centralized Internet model works – you’re looking for content in a particular location on a particular server. But it makes much more sense to tell your friend the name of the book, and let them find it wherever is closest and most convenient. That’s how IPFS works. With IPFS, you can store many copies of the data in many different locations. When you retrieve data using IPFS, you are looking for a particular content ID rather than looking for data at a particular location. That content will be retrieved from wherever is closest – so if there are many copies of the data, it doesn’t matter if some of those copies have been lost or corrupted (as is often the case when data is being stored in space).