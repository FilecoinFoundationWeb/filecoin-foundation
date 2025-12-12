---
aliases:
  - /blog/hackfs-teams-vol-3/
author: ""
categories:
  - updates
date: "2020-08-06T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Welcome to the ninth installment of the Filecoin Community Highlights series,
  and our final post highlighting the HackFS teams building essential tools and
  services on the Filecoin network.
image:
  alt: "Meet the HackFS Teams: Vol. 3"
  url: /uploads/hackfs-teams-vol1-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/hackfs-teams-vol3-social.webp
title: "Meet the HackFS Teams Vol. 3: coeo, IPFS.FPS, Sailplane"
_template: blog_detail
---

_Welcome to the ninth installment of the Filecoin Community Highlights series, and our final post highlighting the_ [_HackFS_](https://hackfs.com/) _teams building essential tools and services on the Filecoin network. We hope these highlights inspire you to join the movement and build world-class tools for the distributed web._

HackFS, a month-long hackathon co-hosted by Protocol Labs and ETH Global, is designed to showcase the power of Web3. In this final week of the hackathon, we talked to three more teams to learn about their work, what they’ve learned through HackFS, and why they’re building on Filecoin.

## Team: [coeo](https://github.com/coeo)

![coeo](https://filecoin.io/vintage/images/blog/hfs-coeo.png)

**Team members:** Yalda Mousavinia, Ola Kohut, and Peter Phillips

**The idea behind coeo:** Coeo is a decentralized platform for communication and grassroots organizing. Our team comes out of Autark, where we built apps for DAOs. We began working on this project at the start of the hackathon, but some of the ideas were inspired by our previous work in the DAO ecosystem.

The idea behind coeo is simple: You can’t make decisions and collaborate without proper communication. And if you want to create a truly decentralized community, there can’t be people who can just wipe or alter the discussions because they founded the organization. We hope to see our tool used by people to find causes they can contribute to; to receive funding for their organizations/causes; and to collaboratively manage their funds. And we hope to do this while striking a balance between easy user onboarding and maintaining strong privacy where it counts – voting and payments.

**How we’re incorporating Filecoin and IPFS:** We’re leveraging [IPFS](https://ipfs.tech/) and [OrbitDB](https://orbitdb.org/), via [3Box](https://3box.io/). The core of the platform is the [3Box Threads Messaging API](https://3boxlabs.com/). We use it for public and private threads, notifications, and signal voting (non-binding off-chain votes). We also use it for storing public and private profile data. And we use [Hedgehog](https://github.com/coeo/hedgehog-php-server) for email/password-based authentication along with [Metamask](https://metamask.io/) for traditional Web3 authentication.

We plan to use [Semaphore](https://github.com/appliedzkp/semaphore) for anonymous, zero-knowledge, on-chain voting, and [Aztec](https://www.aztecprotocol.com/) protocol for zero-knowledge payments. And ultimately, we are envisioning using Filecoin for media sharing, collaborative documents (wikis), or even hosting legal agreements, to ensure data is reliably stored and available to all users who need access.

**Why we’re hacking:** We saw getting involved in HackFS as the perfect opportunity to put our ideas into motion. We really like the concept of hackathons that last over weeks, as opposed to weekends, since we’re interested in investing our time into actually building something that can last beyond the hackathon and we appreciated that ethos from HackFS.

**The future of Web3:** Web3 is a chance to experiment with new ways of organizing. With programmable money, smart contracts, and cryptography, we can route around the traditional gatekeepers and rent seekers and build communities that aren’t bound by geography or corporate/political control. It’s an integral part of a broad movement that seeks to regain autonomy from the hierarchical system in which we’re situated which commodifies, exploits, and extracts wealth from people. With Web 2.0 companies, we’re the product. With Web3, a new social consensus is the product.

## Team: [IPFS.FPS](https://ipfs-fps.on.fleek.co/)

![IPFS.FPS](https://filecoin.io/vintage/images/blog/hfs-ipfsfps-1.png)

**Team Members:** Leon Do and Randy Daniel

**What we’re building:** IPFS.FPS is a decentralized first-person shooter game. Our team wanted to have fun with this hackathon. We were pretty familiar with building wallets and other crypto projects and we wanted to branch out. When we started, there wasn’t much documentation on how to deploy [Unity](https://unity.com/) programs or a Unity engine on IPFS. So our first step was to get this working. The next step is to build in multiplayer features, fully decentralized, and incorporate tokens. That’s where Filecoin comes in. And possibly libp2p, too, so that we can add a chat aspect or peer-to-peer connections.

**Our hackathon experience:** Information-wise, the workshops have been very useful. We all work full-time jobs, so we’re really spending our weekends cranking stuff out. Luckily, a lot of this stuff has been recorded. So we can jump in and watch the videos whenever we can. Also, the [Filecoin Slack](https://filecoin.io/slack) has been really helpful.

Currently, on our website, we use [Fleek](https://fleek.co/). We built the game on Unity, exported it out, and saved it on GitHub. There’s a hook in our GitHub account, so whenever we make updates to GitHub, we would update their side. That’s where Fleek, which is built on IPFS, comes in. And then there’s [Unstoppable Domains](https://unstoppabledomains.com/).

![IPFS.FPS](https://filecoin.io/vintage/images/blog/hfs-ipfsfps-2.png) ![IPFS.FPS](https://filecoin.io/vintage/images/blog/hfs-ipfsfps-3.png)

We have the domain IPFS.FPS.zil, which is an easy way to go to our site. Then we use [Pinata](https://pinata.cloud/) for metatags. That’s a little hack that we realized we can use – when you share a link, it has a picture of a name or a screenshot – and that metadata is from Pinata.

We have two goals for this hackathon. First, we want to create good documentation so other developers and gamers can work off of what we have. It took us a week or two to understand how all these pieces fit together. So hopefully, when other developers read through our docs, they can get through it in half a day. And our second goal of this hackathon is to add more integration: the chat aspect, the use of tokens, and multiplayer.

**The story of .zil:** We started out with the website ipfs.fps.zil, and we sent it to a friend for feedback. This friend isn’t into crypto, so he couldn’t access the site. He needed a plug-in – a Chrome extension – to access crypto domains, like .eth or .zil.

We found this little feature called [ETH.link](http://eth.link/), which lets anyone access any website that ends in “.eth.link,” but that didn’t link to “.zil”. So, we went out and bought a domain, zil.sh. That acts like a bridge to connect Web3 to Web 2.0. So now, if you have your website.zil, you can add a “.sh” to the end and you can send to anyone, regardless of the plugin and it will redirect them to the right IPFS hash.

**Our unexpected surprise in this hackathon:** Hackathons are a good way to reach out to people in different industries. In the first week of HackFS, Juan Benet talked about [Audius](https://audius.co/), a decentralized music network. We looked into it and thought it was really cool.

When we started building our game, the first background music we used was kind of boring. We wanted to find something more interesting. So we went on to Audius and listened to different artists. And we found this one artist in Georgia called [ElectronWarbear](https://audius.co/ElectronWarbear). We reached out and said, “We like this song,” and we were able to put it in our game, with attribution.

## Team: [Sailplane](https://cypsela.github.io/sailplane-web/#/)

![IPFS.FPS](https://filecoin.io/vintage/images/blog/hfs-sailplane.png)

**Team Members:** Steve Dakh, Anders “Tabcat” Bjerg

**What we’re building:** This project started when we met on Discord and wanted to send files to each other. Discord limits file transfer to seven megabytes, and then tells you that your files are too powerful.

So typically with IPFS, people run a local node, and they’ll store files. If somebody else wants to retrieve those files, they have to run a local node as well. The way we created Sailplane, we have all the nodes—the IPFS node actually runs inside of the browser. So as you’re dragging files into the app, the browser is storing the files locally, and pinning them to IPFS, no separate software is required. You can just go on our website and the IPFS node spins up instantly. Longer-term, we have plans to build on Filecoin as we continue to make improvements.

Our goal is to build a web app that requires no signup to start using with a good amount of utility. Also we’re very focused on people being able to self-host the web app and infrastructure it connects to.

**The magic that is IPFS and OrbitDB:** Right now the whole app is built on IPFS and [OrbitDB](https://orbitdb.org/). We’re using IPFS to store the data and then OrbitDB to be able to create a shareable state. So with IPFS, if you upload a file, and then you upload a folder, if you change a file in the folder all the hashes changed, so there’s no way to track that. But with OrbitDB, it keeps a store of all the changes that have happened.

So, for example, if I add some files to a folder, and I share that drive with you, and then you add files to that folder, all that stuff gets handled by OrbitDB, which stores IPFS file CIDs in the structure of a file system. The user is able to interact with this file system and compute directory CIDs. That’s kind of the magic that makes this really cool, because people have created things where you’ve been able to share files, but not been able to change those files later. Now, if I share a folder with you, you can open it and if I start modifying things you can see it live on your screen, the files being changed and added in real time.

**On the importance of dogfooding:** I was having this issue of trying to transfer a big video from my computer to my phone and Apple AirDrop just wasn’t working at all. And so, I ended up using Sailplane. And during this hackathon, we’ve been using Sailplane to send files back and forth between each other. The best is when you find that you’re using your own tools to get the job done!

**Why Web3 and why now?** Web3 allows people to do things that weren’t possible before. Filecoin alone is pretty amazing. To be able to incentivize people who have hard drive space that’s completely unused, and the people who want to store their files. Things like this couldn’t really exist before, because everything was so centralized. You couldn’t have a true, free market. And in the case of data sharing, for example, or decentralized finance, being able to trade options with each other, removing the middleman is amazing. We’ve been big fans of decentralization, since we learned it was even possible. It’s a big disrupter that’s going to change the world because it’s just simply better.
