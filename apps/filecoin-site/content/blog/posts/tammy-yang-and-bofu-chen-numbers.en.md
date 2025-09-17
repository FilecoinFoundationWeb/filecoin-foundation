---
aliases:
  - /blog/community-tammy-yang-bofu-chen-numbers/
author: ""
categories:
  - interviews
cover_feature: false
date: "2020-04-14T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Bofu Chen and Tammy Yang launched Numbers to give people greater access to and
  control of their information – including where and with whom they share it.
  Most recently, they’ve turned their talents to helping track symptoms related
  to the Coronavirus. We asked them why they chose to build on the Filecoin
  network and what’s next for Numbers.
image:
  alt: Numbers
  url: /uploads/numbers-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/numbers-english-social.webp
title: "Tammy Yang and Bofu Chen, Numbers"
_template: blog_detail
---

_Welcome to the second installment of our Filecoin Community Highlights series, where we feature users and developers who are building essential tools and services on the Filecoin network. We hope these stories inspire others to join us in our mission to build world-class tools for the distributed web. Check out our_ [_first interview_](https://filecoin.io/blog/community-andrew-hill-textile/) _with Textile’s Andrew Hill._

[Numbers](https://numbersprotocol.io/) is a company based in Taiwan that’s building technology to protect data integrity. The Numbers framework is an open, transparent, and traceable data system consisting of 3 layers: application, data control, and infrastructure. At each layer, unique features such as site-of-capture fingerprinting, privacy-preserving computation, and data verification all contribute to ensuring data remains trustworthy. Potential applications include evidence preservation, medical device collection, Know Your Customer administration, insurance validation, and other scenarios.

Numbers Co-Founders Bofu Chen and Tammy Yang met on the technical team of an artificial intelligence (AI) and machine learning company. There, they learned the value of user-generated data and began exploring ways to safeguard it. They launched Numbers to give people greater access to and control of their information – including where and with whom they share it. Most recently, they’ve turned their talents to helping track symptoms related to the Coronavirus.

We asked them why they chose to build on the Filecoin network and what’s next for Numbers.

**How did you two come up with the idea for Numbers?**

**Tammy:** Bofu and I met at an AI startup. We always had a question: Given all the data used to train the AI model – who’s authorized to use that data? Is this data really authorized by the person who owns it? Who _should_ own that data? And sometimes it’s impossible to track the origin of that data.

Sometimes I joke that every AI model has a dark history – because every AI model relies on large troves of data. A user may agree, for example, for a university to collect his or her data, but sometimes the data is misused by other groups for AI training.

Our goal is to make data traceable. The integrity of the data is preserved, and then it becomes possible to trace where this data came from.

**What does Numbers do? How does it work?**

**Bofu:** Let me give you an example to explain how we work. Say a journalist sees something on the street, and he takes a photo of it on his mobile phone. The Numbers application uses sensors on that mobile phone to collect metadata about location, time, and network, and generates a [SHA256 hash](https://en.wikipedia.org/wiki/SHA-2) to “fingerprint” that metadata.

Sensor metadata looks like this:

![Metadata Image](https://filecoin.io/vintage/images/blog/community-numbers-metadata.png)

The hashes are used later for verification. We’re also considering using unique content identifiers (CIDs) as hashes to replace SHA256.

We upload all of this information to IPFS, where it gets a CID address and is added to the ledger – Hyperledger (for enterprise solutions) and Ethereum, IOTA (for community solutions).

Our ultimate goal is that when a journalist publishes the digital content online, readers will be able to tap on an icon on the bottom right of the image, and that icon brings up all of the data so that you can confirm that the source is trustworthy and traceable.

When we put all of this information into a verified module, we achieve two things: First, we verify the data integrity, and second, we can trace back to the data source. It’s a basic capture and verify flow.

The published version of Numbers that we’re working on can be used on the [HTC Exodus 1](https://www.htcexodus.com/eu/), a blockchain-enabled smartphone. We’re also working with journalists on another version that can be used with any mobile phone.

![Basic Capture & Verify Flow image](https://filecoin.io/vintage/images/blog/community-numbers-flowchart.png)

**And now you’re using IPFS and Filecoin, too, yes?**

**Tammy:** We leverage [Textile](https://filecoin.io/blog/community-andrew-hill-textile/), and Textile is based on IPFS. What’s great about IPFS is that it gives every piece of digital content a unique ID. When people take photos or videos on their mobile phones, those files are very large. And it can be impractical to add that data directly to the ledger because current ledger technology is not designed to record such a huge amount of digital content.

With IPFS, we only need to register the content ID to the ledger, instead of the entire file of digital content. So for us, it’s a great match between the ledger and the IPFS technology, to make the digital data traceable and trustworthy.

Once we were on board with IPFS, we discovered Filecoin, which is a very interesting technology because it adds an incentive layer to trigger users so that they’re more willing to join the network and share their storage. That’s very helpful, because we’re trying to find ways for users to create trustworthy and traceable digital content. Then this content can be owned by users, and also shared with anyone they trust or just want to share it with.

**How are you applying Numbers technology in the fight against the global Coronavirus pandemic?**

**Tammy:** Right now, it’s very important for people to have a log of their own personal data that they can keep and track themselves. There are ways for governments to track your status/health, but the methods currently in place raise some concerns that they give the government too much power.

We’re collaborating with the [MyData](https://mydata.org/) community to create an application called MyLog14, an app that lets people under quarantine to log simple symptoms such as body temperature, whether you’re coughing, whether you have a runny nose – symptoms related to COVID-19. This data is very personal, and many of us wouldn’t want that information to be sent to a government data server – there are privacy concerns. And also governments don’t necessarily have the infrastructure to receive that data and keep it safe.

It’s really important that people have a log of their own personal data in the wake of Coronavirus. Personal data is really, well, personal. You can keep it on your phone or store it on your laptop, but there are times when you want to be able to share it – securely – with other people, such as medical staff.

MyLog14 lets users log their daily records. It’s similar to the media photographer scenario. You can automatically log the environmental information so in the future it can be reviewed. And there’s a dashboard that shows the logged symptoms and where you have been. This data is uploaded directly from the nodes instead of from the server. We plan to launch at the end of April.
