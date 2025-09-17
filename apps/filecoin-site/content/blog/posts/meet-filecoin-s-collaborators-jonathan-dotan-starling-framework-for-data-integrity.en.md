---
aliases:
  - blog/starling-framework/
author: ""
categories: []
date: "2020-12-18T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  At a time when the internet is overrun with misinformation and valuable data
  is intentionally obscured, it’s more important than ever that we harness
  technology to capture, verify, and preserve our history.
image:
  alt: "Jonathan Dotan, Starling Framework for Data Integrity"
  url: /uploads/starling-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/starling-header.webp
title: >-
  Meet Filecoin’s Collaborators: Jonathan Dotan, Starling Framework for Data
  Integrity
_template: blog_detail
---

At a time when the internet is overrun with misinformation and valuable data is [intentionally obscured](https://www.nytimes.com/2020/02/04/opinion/archives-document-destruction.html), it’s more important than ever that we harness technology to capture, verify, and preserve our history.

The Starling Framework is a distributed storage solution built on Filecoin, using our protocol and core implementation to create an immutable archive. Spearheaded by the [USC Shoah Foundation](https://sfi.usc.edu/), the world’s largest archive of testimony on the Holocaust and other genocides, and Stanford’s Department of Electrical Engineering, the driving force behind Starling is Jonathan Dotan, who holds fellowships with both USC Shoah Foundation and Stanford University.

Dotan’s first undertaking is to permanently and immutably catalog the atrocities of genocides, including the Holocaust, the Armenian Genocide, and the Rohingya crisis, by building a tamper-proof ledger of survivor testimonies.

Starling is a valuable tool for journalists outside conflict zones, too. Reuters journalists used the Starling Framework to capture, store, and verify photos of polling places on Super Tuesday, to monitor voter suppression.

Recently, Dotan shared how he got involved with Starling and Protocol Labs.

**PL: How do you describe Starling? Where does Filecoin fit in?**

**JD:** The Starling Framework for Data Integrity lets organizations leverage the power of cryptography and distributed systems to authenticate digital video and images. Starling has three modules: capture, storage, and verify. And the IPFS/Filecoin framework is embedded throughout all three.

During Capture, a combination of hardware (HTC) and software (IPFS) creates a chain of custody from the cameras to digital platforms. We then pair the image to metadata from an array of sensors on the device to prove footage was taken at a specific time, date, and location. The footage is then cryptographically hashed using IPFS, creating a content identifier (CID) that serves as a unique fingerprint of that footage.

Data is then replicated onto multiple IPFS and Filecoin storage nodes, which natively use content identifiers (CIDs). Content addressing is powerful because if we change a single pixel, the cryptographic algorithm will generate a completely different hash for the footage. When we fetch data using a CID rather than a URL, we’re guaranteed to see the intended version of that data. In essence, Filecoin and IPFS nodes form a decentralized, global network that is far more difficult to hack than a centralized system.

That’s why Protocol Labs is an important collaborator for this project—everything that we’re doing is essentially enabled through a base layer of distributed compute and storage—which is what IPFS and Filecoin provide.

Finally, to deal with all the hashes generated during our capture and storage processes, we’ve designed a hash/certification management system that lets organizations engage multiple experts to verify footage. Each organization can then publish on their ledger and this knowledge graph can be accessed by users on any platform.

Our goal is to work with stakeholders at NGOs, the news media, and industry to develop new tools that help reduce information uncertainty in digital media and create tamperproof historical records.

**PL: Where did the idea for Starling come from? What sparked your interest in genocide awareness and prevention?**

**JD:** Three years ago I co-produced a virtual reality project for USC Shoah Foundation called [_The Last Goodbye_](https://www.wired.com/2017/04/vr-holocaust-history-preservation/). We captured a complete holographic model of a Holocaust concentration camp using photogrammetry and then we layered in a survivors’ testimony. You could virtually walk with him through the camps and see the last spot where he saw his mother and sister. The result was this amazing film that we took to the Tribeca Film Festival and the Venice Film Festival.

As we finished the project and began archiving our files, I learned from Sam Gustman, the USC Shoah Foundation’s CTO, how they safeguard photos and videos of survivor testimonies. Today they store their files in three state-of-the-art storage facilities around the world. While impressive, it occurred to me that more could be done. The content is just so sensitive and vulnerable. So, I got to thinking, we could use distributed computing for this? And that’s what set us off.

The Foundation’s work began with the Holocaust, but then it expanded to other genocides from all over the world. To date, they’ve collected 55,000 testimonies with over 9 petabytes of data. That’s a lot of data. To give you a sense of scale, if you were to take a hard disk from 25 years ago—picture the biggest hard drive you could buy as a consumer—and stack those up, it would be taller than the Pyramids of Giza. What’s really at stake here is preserving these stories like these monuments, for thousands of years —if not perpetuity.

So I was determined to help.

That led me to connect with Protocol Labs at a conference on the decentralized web organized by the Internet Archive in 2018. When I heard about their work, everything aligned. Protocol Labs is filled with alumni from Stanford and has contributions to its protocols from esteemed faculty members at the School of Engineering. So it was a natural fit to bring together these two universities to take on the task with Protocol Labs and a consortium of technology partners.

**PL: How is Starling different from other technologies that verify images and videos, for example tracking hashes and metadata on files, or AI solutions to fake news?**

**JD:** On the market now are many software-based tools that leverage apps or OS features to test whether a file has changed. Starling is a hardware-based system that uniquely signs each photo/video and uses that to create two hashes: one of the image and the other of the metadata. Then, Starling registers the content and it gets pushed off the phone and is included on the Filecoin network. Working with an amazing team in Taiwan, called [Numbers Protocol](https://numbersprotocol.io/), we built the system by contributing to an open source library called [Proof Mode](https://guardianproject.info/apps/org.witness.proofmode/) that was pioneered by the teams the [Guardian Project](https://guardianproject.info/) and [Witness](https://www.witness.org/) and leveraging the great tools at [Textile](https://textile.io/). Then in collaboration with Small Data Industries and Post Light Studios, we built an open source [CLI and set of APIs](http://starlingstorage.io/) to allow users to push files to Filecoin for advanced cryptographic sealing.

Starling is not meant to replace verification that exists today; it’s meant to augment it. And when you think about the challenging task that people at news outlets have today when they’re getting a video and they’ve got hours or minutes —maybe less— to verify it and then publish it.

Journalists who receive content want to be able to verify a number of different things beyond the image. They want to be able to seek additional forms of confirmation that what is happening in the video actually happened.

In the long run, this technology will be invaluable in creating a root of trust to help push back against deep fakes and other misinformation online. We need to cover the basics: create a clear and secure record. We’re starting with the genocide testimonies because we think this is something that is universally understood. It’s a way of getting people engaged with a lot less friction.

**PL: Have you started deploying Starling? What has been the response?**

**JD:** We have a bias to action and wanted to safely deploy the Starling Framework in the field to learn by example. That’s where things started to click.

Earlier this year, we deployed our technology in three case studies to document the testimony of a Holocaust survivor in Los Angeles, Kurdish refugees in Iraq, and Achuar indigenous leaders in the Amazon Rainforest. It was exhilarating. As footage came back it was so powerful to behold how the video was supplemented by powerful metadata to prove —forever— that these videos were taken at a specific time and place. And then as we replicated the files across the dWeb that fact only grew deeper and deeper, with a network of digital attestations. It was like a web of digital signals were all bearing witness to this important testimony.

And this was just a simple test. We’re only at the beginning of understanding all that cryptography can bring to preserving human history and restoring trust in digital media.

Our purpose here is to prevent atrocities in the future and to ensure that we don’t forget atrocities from the past. These are important stories that have very real, human value for us as a civilization and they have to be protected and preserved, and here’s a technology that does that.
