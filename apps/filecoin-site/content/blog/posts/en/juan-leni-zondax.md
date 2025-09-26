---
aliases:
  - /blog/community-juan-leni-zondax/
author: ""
categories:
  - interviews
date: "2020-07-08T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Welcome to the fifth installment of the Filecoin Community Highlights series,
  which features users and developers building essential tools and services on
  the Filecoin network. The goal is to inspire others to build world-class tools
  for the distributed web.
image:
  alt: "Juan Leni, Zondax"
  url: /uploads/juan-lenny-main-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-zondax.webp
title: "Juan Leni, Zondax"
_template: blog_detail
---

_Welcome to the fifth installment of the Filecoin Community Highlights series, which features users and developers building essential tools and services on the Filecoin network. The goal is to inspire others to build world-class tools for the distributed web. Check out the_ [_last post_](https://filecoin.io/blog/community-jonathan-schwartz-owl/) _featuring Jonathan Schwartz of Open Work Labs (OWL), a company currently working on web wallet and interoperable tools on the Filecoin network._

Juan Leni is co-founder of [Zondax](https://zondax.ch/), a company based in Zug, Switzerland. Zondax’s consulting work focuses mainly on cryptography, embedded systems, hardware security modules, trusted execution environments (TEEs), and distributed ledger technologies. We chatted with Juan about how Zondax’s work in cryptographic libraries, hardware wallet integrations, ledger apps, and GPU accelerated software for Filecoin are contributing to the path to mainnet launch.

**Tell us more about who you are and how you got involved in blockchain technology.**

_I have been based in Europe for around 15 years, though I grew up in Argentina. In 2011, I moved from London to Zurich for a consulting project involving robotics and machine learning for pharma-related applications. While I had been personally interested in distributed systems and blockchain for many years, it was only around 2017 that I dedicated myself full-time to blockchain projects._

_One of the first projects we worked on at Zondax involved building a chain using post-quantum cryptography from scratch. Since then, we have expanded and worked for at least a couple dozen top projects in the space. The company has grown significantly to become what we are today: a distributed team of around ten people with a strong focus on cryptography, embedded systems, hardware wallets, and protocol development._

**What are you working on with Filecoin?**

_We are helping in different areas. In general, our work for Filecoin is very technical and oriented toward infrastructure._

_The first project we did for Filecoin was the app for hardware wallets (_[_Ledger Nano S and X_](https://github.com/Zondax/ledger-filecoin)_) and the respective integration work. This is something we have done for other projects and we are experienced in this area. Typically, we initially assess the overall design to understand possible design issues that may result in vulnerabilities. Filecoin design was very clear by the time we started, so the development process was relatively smooth. We could also work in parallel to the web wallet team, so communication was quick and the integration was easy to achieve. The app is currently under review, hopefully being released soon._

_Zondax has worked on several Filecoin-specific libraries and tools already. At the moment, we are working on a_ [_cryptography library and custody integration_](https://github.com/Zondax/filecoin-rs)_. In addition, we are doing graphics processing unit acceleration for a zero-knowledge library that will be part of Filecoin soon. We also provided Ledger integration support into the_ [_OWL web wallet_](https://github.com/openworklabs/filecoin-web-wallet)_. Last but not least, we will be providing support during third-party audits on our deliverables._

_It is very interesting that Filecoin builds on top of other big Protocol Labs projects (such as IPFS, IPLD). The Filecoin ecosystem is large! In these cases, making sure everything integrates well can be challenging. The specs team does a great job by keeping specifications well updated and consistent._

_There are a lot of interesting areas where it is possible to contribute, and the Zondax team is very happy to be part of this process._

![Filecoin Ledger app developed by Zondax](https://filecoin.io/vintage/images/blog/filecoin-ledger.jpg) _Filecoin Ledger app developed by Zondax_

**How do you choose the crypto projects that you work with? What do you look for?**

_Most of our work involves direct contact with engineering teams rather than with consumers. We offer consulting services to blockchain projects directly, so we often work through foundations or the blockchain projects themselves. In general, we normally do not focus on web development or smart contract development. Instead, we work on aspects such as cryptography or protocol development._

**Why did you make the shift from the AI world to the blockchain world? What interests you about this technology? Why are you passionate about it?**

_I’m a very curious guy. I was working in AI in the healthcare space and blockchain was an interesting side project for me. There’s something special about blockchain – it’s a very open-source community. The barriers to entry are much lower. Right now in AI, you need a data center and large budget to run your experiments, whereas with blockchain you don’t need as much to start building – at least that’s how it was when I first started building in 2017. And you can do a lot of really interesting technical work. Both areas are extremely active and innovative._

**How big is your team? What’s it like working with a fully remote and distributed team right now?**

_At the moment, we are around eight to ten engineers and we’re mostly distributed around the world. Personally, I love remote work. It provides a lot of flexibility. I think the important thing is that you need to work with people that are responsible enough and passionate enough to be able to work remotely. But from an operational point of view, it’s much more efficient. There’s no commuting costs and everyone can work at their own pace._

_Obviously, there are some social aspects that you need to work hard to recreate. And in the era of COVID-19, it’s harder in some ways to connect, for instance, at conferences._

_Beyond working remotely, I think the biggest change in corporate culture is the concept of Open Source, where you can share code and interact with a huge community. Sometimes in very big companies it’s hard to make progress because information is not accessible, or there’s a lack of interaction between groups, or there are hierarchy and power issues. The open-source community is very different and I love being a part of it._
