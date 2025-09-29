---
title: "Filecoin and Storacha: Spicing Up Decentralized Hot Storage Like Never Before"
draft: false
excerpt: >-
  Storacha revolutionizes decentralized hot storage with Filecoin's PDP,
  ensuring secure, accessible data with top-tier availability and durability.
share_image: /uploads/StorachaFilecoinBlogHeader.webp
image:
  url: /uploads/StorachaFilecoinBlogHeader.webp
author: Emily Vaughan
date: 2024-08-30T17:16:41.297Z
categories:
  - updates
dim_image: true
related_article_1: >-
  content/blog/posts/introducing-storacha---the-future-of-hot-decentralized-data.en.md
---

Disclaimer: This blog post is based on a [presentation](https://www.youtube.com/watch?v=NNYzR_g8N-k) by Storacha co-founder, Hannah Howard, originally shared on YouTube. The content has been adapted and expanded for clarity and context.

{{< youtube id="NNYzR_g8N-k" title="How Storacha Will Use Filecoin by Storacha Co-Founder, Hannah Howard" >}}

We’re cookin’ up something extra spicy over here, and we couldn’t wait to share it with you. Storacha is all about bringing the heat to decentralized storage, and Filecoin is one of our secret ingredients. Ready to dive into how we’re using Filecoin to make our hot storage network sizzle? Let’s get into it!

## How Storacha and Filecoin Are Stirring the Pot

At Storacha, we’re not just any data onboarder — we’re the biggest one in the Filecoin kitchen! We’re throwing up to 10 terabytes of data into the Filecoin pot every day. That’s a lot of spice, right? But here’s the deal: while we make sure your data is easy to grab from (currently) centralized platforms, we’re also backing it up in Filecoin’s decentralized vault. Think of it as having your hot sauce in the fridge and the pantry — always ready when you need it.

## What’s Cooking with Filecoin?

Filecoin isn’t just a storage network; it’s a full-on decentralized storage fiesta with blockchain sauce on top. The magic trick it uses? Something called Proof of Replication (PoRep). This proof makes sure every storage provider in the network is keeping a unique copy of your data, so when you need it, it’s your data — no funny business.

But like any good recipe, PoRep has its quirks. It’s a bit like slow-cooking a stew: it takes time, it’s resource-intensive, and while it’s perfect for saving your data for later, it’s not exactly the fastest when you’re hungry right now.

## Filecoin’s New Recipe: Proof of Data Possession

Now, here’s where things get really interesting. Filecoin is rolling out a new technique called Proof of Data Possession (PDP). With PDP, Storacha can prove that your data is retrievable, ready to be served up piping hot. It’s like having a pizza oven that always has your favorite slice ready to go. PDP is also way less of a hassle to cook up, and it gives us more flexibility with data sizes and storage terms. It’s like adding a bunch of new spices to our pantry — more flavors, more fun!

## Teaming Up for the Ultimate Feast

We know that creating something truly exceptional takes collaboration, which is why we’re partnering with some of the brightest minds in the Filecoin ecosystem. We’re joining forces with [FilOz](https://www.filoz.org/), dedicated public goods team that’s enhancing Filecoin’s core infrastructure and spearheading the development of the PDP we mentioned earlier. In addition, we’re planning to collaborate with the brilliant team behind [Curio](https://curiostorage.org/), who are at the forefront of Filecoin storage provider software, to ensure seamless disk access. Our collaboration doesn’t stop there — we hope to work closely with [Filecoin Incentive Design Lab (FIDL)](https://www.fidl.tech/) to integrate SPARK, a cutting-edge retrieval testing program run by [Station](https://www.filstation.app/), to ensure that every aspect of our operations is running smoothly. Together, we’re cooking up something truly epic, and of course, we’re keeping everything open source so everyone can get involved and grab a taste.

## Serving Up the Storacha Hot Storage Network

Alright, let’s talk about our plan for achieving the world-renowned Michelin star — our Service Level Agreements (SLAs). We’re aiming for 99.9% availability and a durability guarantee of 99.9999999%. That means when you store your data with Storacha, it’s always ready to be served, and we won’t drop a single byte. So how do we get there?

To guarantee 99.9% availability:

- PDP will be our go-to for providing solid, verifiable proof that your data is safe, sound, and ready for retrieval.
- For recovery, we’re working on speeding up unsealing times. If that doesn’t hit the mark, we’ll keep an extra hot copy of all your data, ensuring it’s always accessible when you need it.
- Incentives and testing are baked into the Storacha network to make sure your data isn’t just available — it’s actually being served.

To lock in 99.999999999% durability:

- PoRep is our secret sauce. By storing 10 copies of your data across the Filecoin network, we’re reducing the risk of loss to a minuscule 0.000000001%.
- Sure, we’ll need to validate this further, but when combined with PDP, we’re confident that Storacha can ensure your data isn’t just stored — it’s safe, secure, and retrievable whenever you need it.

## web2 vs. web3: Picking Our Battles

We get it — web2 is a huge market, but it’s crowded and everyone’s fighting for the same piece of pie. We’d rather focus on web3, where the flavors are fresher and the opportunities are juicier. NFTs, gaming, AI, deep end networks — these are the hot new dishes, and we’re ready to serve them up with a side of decentralized goodness. How will we get there? We strive to provide good performance, meet the SLAs mentioned above, provide proper verification of functionality, support the standard object storage terms, and lastly, be callable from smart contracts on most chains.

\[A quick disclaimer: Storacha is currently only achieving its SLAs because the storage is currently on centralized platforms. But that’s not the goal — we’re aiming for a Michelin star in the decentralized storage world.]

## Storage Providers: Keeping Things Smooth and Simple

At Storacha, we’re all about making things easy for storage providers, so they can focus on what they do best while we handle the rest. Here’s how we’re keeping it smooth:

- Independent Node Operation: We’re shipping our node to run independently, no strings attached. This means storage providers can jump in without needing complicated setups.
- Lotus API Integration: Our node needs to chat with the Lotus API for submitting proofs, but don’t worry — it doesn’t have to live on the node itself.
- Coordination with Curio: Just a bit of mild coordination with Curio on disk access to keep everything running like clockwork.

With this approach, we’re ensuring that Storacha’s hot storage network stays efficient and hassle-free for all our storage partners.

## PDP Rollout: Proving Our Sauce

When it comes to rolling out our Proof of Data Possession (PDP) strategy, we’re keeping it straightforward and effective:

- Start with Filecoin L1: We’re using Filecoin’s Layer 1 to kick off PDP proofs, showing that Storacha’s got the chops to keep your data secure and accessible.
- Prove the Use Case: Once PDP is humming on L1, we’ll demonstrate its effectiveness, proving Storacha’s hot storage isn’t just talk — it’s the real deal.
- Scale to L2: As we grow, we’ll move PDP to a Layer 2 contract to handle the heat of scaling up and keep everything running smoothly.

By taking this step-by-step approach, we’re ensuring that Storacha’s hot storage network not only meets but exceeds expectations.

## Storacha’s Long-Term Filecoin Strategy: Cranking Up the Heat

As we continue to spice up the decentralized storage world, our long-term strategy is designed to keep Storacha blazing hot while helping Filecoin reach its full potential:

- Tighter Integration and Optimization with Curio: We’re teaming up with Curio to make sure Storacha’s hot storage solutions are running smoother than melted butter. By fine-tuning our systems together, we’re making sure everything works like a dream, delivering top-notch performance.
- Moving Storacha Logic to Filecoin L2 with IPC: We’re taking Storacha’s brainpower to the next level by moving our logic onto a Layer 2 (L2) network using Interplanetary Consensus (IPC). This will enhance scalability and deepen our integration with Filecoin, making our network even more robust and efficient.
- Utilizing Filecoin Escrow/Payments Framework for Transactions: When it comes to handling transactions, we’re all about keeping things smooth and secure. That’s why we’re tapping into Filecoin’s escrow and payment framework to add an extra layer of security to our spicy sauce, ensuring every transaction is as trustworthy as it gets.

These strategic moves ensure that Storacha isn’t just keeping up — we’re setting the pace and bringing the heat to a whole new level.

## Wrapping It Up with a Bow of Spice

So there you have it — the full recipe for how Storacha is spicing up decentralized storage with Filecoin. We’re in this for the long haul, and we’re committed to bringing you the hottest, most reliable storage network around. Thanks for joining us on this flavor-filled journey, and keep an eye out for more updates as we continue to heat things up!
