---
aliases:
  - /blog/community-ben-fino-radin-sdi/
author: ""
categories:
  - interviews
cover_feature: false
date: "2020-04-22T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Ben Fino-Radin is the founder of Small Data Industries, a lab and consultancy
  based in New York City. Small Data’s mission is to safeguard the permanence
  and integrity of the world’s artistic record. Ben and his team work with
  artists, collectors, and cultural heritage institutions around the world to
  preserve and protect art and archives, and they see Filecoin as the key to
  improving their efficiency and creating more secure records.
image:
  alt: Small Data Industries
  url: /uploads/ben-fino-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-community-highlights-slate.en.md
related_article_2: content/blog/posts/announcing-our-first-mining-community-call.en.md
related_article_3: content/blog/posts/meet-the-sr2-slingshot-teams.en.md
share_image: /uploads/ben-fino-english-social.webp
title: "Ben Fino-Radin, Small Data Industries"
_template: blog_detail
---

_Welcome to the third installment of the Filecoin Community Highlights series, where we feature users and developers who are building essential tools and services on the Filecoin network. The goal is to inspire others to join Filecoin in its mission to build world-class tools for the distributed web. Check out the_ [_previous interview in this series_](https://filecoin.io/blog/community-tammy-yang-bofu-chen-numbers/)_, with Bofu Chen and Tammy Yang, co-founders of Numbers._

Ben Fino-Radin is the founder of [Small Data Industries](https://smalldata.industries/), a lab and consultancy based in New York City. Small Data’s mission is to safeguard the permanence and integrity of the world’s artistic record. Ben and his team work with artists, collectors, and cultural heritage institutions around the world to preserve and protect art and archives, and they see Filecoin as the key to improving their efficiency and creating more secure records. We spoke with Fino-Radin about his career path, how he first discovered the Filecoin network, and his vision for leveraging the power of decentralized storage for artists, collectors, and institutions.

![Small Data Industries team](https://filecoin.io/vintage/images/blog/small-data-industries-team.jpg) _The Small Data Industries team_

**How did you get started with Small Data? Where did the inspiration come from?**

I trained as an artist. I studied interdisciplinary studio art in school and did the artist thing for a little while. And then I happened to get a temp job working in an archive for a toy company, and I just fell in love with it. I was cataloging and digitizing products all day. There was just something about that repetitive, very precision-oriented work that ultimately created access and illuminated history that I really, really loved.

Around the same time, new graduate programs were emerging that fused traditional, library and information science skills with digital-native skills. I enrolled in a program at Pratt Institute where I could get my Master of Fine Arts (MFA) in digital art and my Master’s in Information and Library Science at the same time.

In my first semester in this program, I read a white paper about preserving digital art and I had an epiphany. People restore paintings and people restore sculpture. But it had never occurred to me that it was anybody’s job to take care of performance art, film, video, sound, or software. That’s when I realized what I wanted to do with the rest of my life.

After finding my way into the field and working at Rhizome at the New Museum for a couple years, I took a job at MoMA (the Museum of Modern Art) where my main objective was to design and build their digital infrastructure for preservation. At the time, they didn’t really have a purpose-designed system for storage or information management of the digital assets in their collection. There were works of digital art that they had paid, in some cases, a whole lot of money for, and nothing was really protecting that investment.

Digital preservation emerged as early as the ’90s in libraries and archives around the world. But in museums, when I was starting my career around 2011, people and organizations were just beginning to think about digital preservation seriously.

What I realized in my time at MoMA is that the art world – broadly speaking, everyone from artists and studios to estates and galleries to museums of all sizes – needs support when it comes to digital infrastructure and digital preservation.

Outside of the biggest institutions in the art world, there is a pretty significant lack of expertise in digital infrastructure, preservation, and information management.

That’s where [Small Data Industries](https://smalldata.industries/) comes in. Over the last three years, we’ve built a really diversified team. We have a team member who’s a trained art conservator who can just as easily restore a painting or a sculpture as he could a piece of software. And we have a trained archivist who is focused on information management and digital preservation for everything from very small artists’ studios to massive digital archives. The work that we do today falls into two categories. We do a lot of consulting and expertise and knowledge sharing, or even mentorship and coaching for institutions. And then there’s the services side of the business with project-based work.

**Tell us more about what Small Data does.**

We are a mission-driven lab, and our mission is to ensure the permanence and integrity of the world’s artistic record. We want to empower people in support of _their missions_ of preservation, whether it’s an institution, or a studio, or an art collector.

Small Data sees the potential that IPFS and Filecoin have to ultimately solve a lot of our clients’ problems. But for most of them, networks like IPFS and Filecoin are incredibly obscure. They don’t understand (yet) that it’s a critical piece of infrastructure. We’re helping to bridge that gap between infrastructure and user-friendly tools.

A few years ago, I was at the Preservation and Archiving Special Interest Group conference and I met someone who worked on IPFS. I had heard the name thrown around in my field a bit, but I really had no idea what it was. And then this guy Matt Zumwalt from Protocol Labs gave his talk about IPFS for data preservation, and I had another one of these epiphany moments, like, “This kind of technology is the future of our field, no question.”

There were a lot of the archivists in that room. And I looked around and it was clear that some of them had heard about these tools, but at least half of them didn’t seem to get it. Because it’s a _protocol_. It’s infrastructure. It’s not a _product_. It wasn’t something they could just go and start using the next day.

A few months later in New York City, I organized a salon on preservation, and I invited Michelle (Mosh) Lee from PL to join me in conversation with SFMOMA’s then–chief conservator, Jill Sterrett. And on this panel, we had people with incredibly traditional backgrounds, steeped in art conservation, and we had Mosh, who’s at the bleeding edge of core infrastructural technologies. And soon after, Mosh introduced me to some groups who were looking to build tools for data preservation.

**So, how do you describe the tools you’re building today on the Filecoin Network?**

Right now, we’re building [Starling](https://starlingstorage.io/), a storage app that, ultimately, we envision will make Filecoin as simple and easy to use as any other cloud storage network or platform, but with the very high standards for data integrity that the cultural heritage community values.

To date, we’ve built a command line interface and REST API. We really envision Starling as a suite of simplified, user-friendly ways of storing, downloading, and verifying files on the Filecoin network.

For us, specifically, we’re focused on the permanence and integrity of the world’s artistic record. Our stakeholders care very much about the trustworthiness of stories. In cultural heritage, one of the standards that is used for assessing your digital preservation is [ISO 16363](http://www.iso16363.org/), which is the criteria for the certification of trustworthy digital repositories. This is something that originally comes from the space data community. The bar is set very high. You can’t just say, “Oh, yeah. I’ve stored these files and they’re safe.” Stakeholders want to know whether there’s been fixity. They want to know _who_ has the files and _where_ they’re stored. They want to be able to run a check on this to see when it passed last. So the tools we’re building have to be really simple to use, but also really secure. And they have to connect the hashing and verification capabilities of IPFS and Filecoin to the authentication standards that cultural heritage institutions use.

**Last question: What is the best-case scenario for a decentralized archive?**

Today, let’s say you have three art collectors who live in different parts of the world, and who have collected the same exact work of art. They’re independently hiring different art conservators or professionals to help them store and steward those files, and write reports about them. And they each have to think about storage, too. It’s inefficient to have three people storing three redundant copies—each collector is paying for that, so there is a lot of waste from a labor, financial, and even environmental perspective.

Or imagine if six museums own the same exact work of art, and the files that constitute that work of art are exactly the same. If they had a way of knowing that they all own that same work, why should each museum have to spend its resources to have these built-in redundancies that are required for preservation? If it’s bit-for-bit exactly the same, they should be able to rely on one another as a community.

To date, there haven’t been the technological means to enable these efficiencies in a simple and trustworthy way. But technologies like IPFS and Filecoin have the potential and this is why we’re collaborating with Protocol Labs.
