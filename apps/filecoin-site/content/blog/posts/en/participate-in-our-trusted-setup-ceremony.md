---
aliases:
  - /blog/participate-in-our-trusted-setup-ceremony/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-10-22T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  As you may have seen in our recent update, the Filecoin team is gearing up to
  launch our testnet in December 2019 and mainnet in March 2020. Prior to
  launch, we need to conduct a secure trusted setup ceremony (read more about
  this below). We are seeking volunteers to participate in our trusted setup
  ceremony and to help us get Filecoin securely off the ground.
image:
  alt: Trusted setup ceremony
  url: /uploads/setup-ceremony-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/setup-ceremony-english-social.webp
title: Participate in our trusted setup ceremony
_template: blog_detail
---

As you may have seen in our [recent update](https://filecoin.io/blog/update-2019-q2-q3/), the Filecoin team is gearing up to launch our testnet in December 2019 and mainnet in March 2020. Prior to launch, we need to conduct a secure trusted setup ceremony (read more about this below). We are seeking volunteers to participate in our trusted setup ceremony and to help us get Filecoin securely off the ground.

**If you already know you’d like to participate in the ceremony, you can fill out** [**this form**](https://forms.gle/sHVYrqMZ8u4Dg1vW7) **directly. Otherwise, read on for more details.**

## What exactly is a trusted setup ceremony and why do we need it

Filecoin mining is based on cryptographic proofs called Proof-of-Replication and Proof-of-Spacetime. We use [zkSNARKS](https://z.cash/technology/zksnarks/) to reduce the size of these on-chain proofs. zkSNARKS require a set of [public parameters](https://electriccoin.co/blog/snark-parameters/) that are known to all parties in the system. These parameters must be generated securely in order for the corresponding zkSNARKS to be secure and to protect the integrity of the Filecoin network.

Zcash pioneered the approach to secure SNARK parameter generation with their Powers of Tau trusted setup ceremony in 2017 (see their [writeup](https://z.cash/technology/paramgen/) or [this Radiolab story](https://www.wnycstudios.org/podcasts/radiolab/articles/ceremony) to learn more). We will be generating our zkSNARK parameters using a “trusted setup ceremony”, which is a specific multiparty computation. The intent of this ceremony is for many members of our ecosystem to participate in parameter generation. Given the mechanics of our particular trusted setup ceremony, the parameters will be securely generated as long as at least one of the participants acts honestly.

The trusted setup ceremony is conducted in two phases:

**Phase 1: Powers of Tau.** In this phase, the ceremony generates SNARK parameters that can be used for all SNARK circuits of a given size. These parameters can be used by any project, and are not specific to Filecoin.

**Phase 2.** The second phase is highly specific to Filecoin circuits, and will generate parameters that will be used only by the Filecoin project.

## I want to volunteer. What do I need to do

For now, all we need is for you to fill out this [form](https://forms.gle/sHVYrqMZ8u4Dg1vW7)! By signing up, you’ll be adding your details to a list of volunteers. Before each of the two phases of the trusted setup ceremony, members of the Filecoin team **may** reach out to ask you to participate in that phase of the setup. Given the specifics of the ceremony and the windows for the phases, it is possible that a volunteer may not be called upon to assist. We will be starting the first phase of the trusted setup ceremony **November 15** - so we will begin reaching out to volunteers to participate starting **November 1**.

If contacted by the Filecoin team, you will receive a link to sign up for a calendar slot to participate in the ceremony. Prior to your window, you’ll receive more detailed instructions for the software you need to download and step-by-step instructions for what you’ll need to do during your portion of the ceremony.

## How long will participating take? What sort of computer do I need

We are still finalizing details for Phase 2 of the ceremony. Here is an overview of what will happen during your portion of the Phase 1 ceremony:

1. First, you will download the latest verified version of the data (\~60 GB).
2. Next, you will run the specified software on the data. _Note: Compute time is variable depending on your machine’s hardware specs. For reference, we’re including our sample hardware and computation time:_

   - RAM: 16GB
   - Processor: AMD Ryzen 1950X (32 thread, 3.5ghz)
   - Number of cores: 16
   - Compute time: 180 min

3. Lastly, you will upload the processed data (\~40 GB).
4. On our side, a verifying node will then check that your submission is valid and ensure the next participant starts with your newly verified contribution.

Our target is for contributors to be able to run their portion of the ceremony within 24 hours for a standard laptop and within 10 hours for more powerful machines. We’re actively working to see if we can reduce the time for participation - we’ll keep volunteers posted as we make progress!

## Aren’t there other projects that have done trusted setups? Why do we need to do this again

We use zkSNARKs ([Groth’s 2016 zkSNARK](https://eprint.iacr.org/2016/260.pdf)) that require a new Phase 2 ceremony for each new application. Phase 1 (Powers of Tau) parameters can be reused, but only if the new application is bounded by the same circuit size as the old application and uses the same elliptic curve.

Zcash conducted a trusted setup ceremony for the same flavor of SNARKs. However, they targeted circuits of size 2 million for their Powers of Tau ceremony. Filecoin circuits will be much larger (we are targeting circuits of size 100 million), and thus the Zcash Powers of Tau parameters are not appropriate for our use case.

Filecoin intends to use the BLS 381 curve [pioneered by Zcash](https://electriccoin.co/blog/new-snark-curve/). While there are other notable attempts to generate parameters suitable for large circuits, these efforts are focused on the BN 254 curve. We made the decision for Filecoin to use the BLS 381 curve based on [expert recommendations](https://eprint.iacr.org/2016/1102.pdf) regarding potential attacks on BN 254.

Therefore, in the Filecoin Phase 1 (Powers of Tau) ceremony, we aim to generate parameters for a circuit size of 100 million over BLS 381. This means that any future project that wants to use a max circuit size of 100 million over this curve would be able to use the outputs of our work. By participating in the Powers of Tau ceremony, you’ll not only be helping Filecoin, but the broader crypto-ecosystem as well!

**Have other questions?** Feel free to reach out to us on [chat](https://github.com/filecoin-project/community#chat) or via email at [trustedsetup@protocol.ai](mailto:trustedsetup@protocol.ai).
