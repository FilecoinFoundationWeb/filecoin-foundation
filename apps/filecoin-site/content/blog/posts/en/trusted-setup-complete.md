---
aliases:
  - /blog/trusted-setup-complete/
author: ""
categories:
  - updates
date: "2020-08-28T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  At the end of last year, we successfully completed the first phase of our
  trusted setup also known as the “powers of tau” ceremony. At the end of July,
  we finished our second phase of the trusted setup – generating secure
  parameters for the 6 circuits that will be used for mainnet. Now, with both
  phases of our setup complete Filecoin’s final parameters for mainnet are
  available. Thank you to everyone who contributed!
image:
  alt: Trusted Setup Complete!
  url: /uploads/trusted-setup-update-main-header-2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/trusted-setup-update-english-social-1.webp
title: Trusted Setup Complete!
_template: blog_detail
---

At the end of last year, we successfully completed the first phase of our trusted setup also known as the “powers of tau” ceremony. At the end of July, we finished our second phase of the trusted setup – generating secure parameters for the 6 circuits that will be used for mainnet. Now, with both phases of our setup complete Filecoin’s final parameters for mainnet are available. Thank you to everyone who contributed!

## Recap of Phase 1

As a brief reminder, the trusted setup ceremony is conducted in two phases. The first phase, also known as the “Powers of Tau” ceremony, applies to all computations proveable by [Groth16 zk-SNARKs](https://eprint.iacr.org/2016/260.pdf) up to a maximum computation size. The computations proved by SNARKs are represented using a model known as circuits. The fundamental unit of computation within circuits is called a constraint. The number of constraints expresses the “size” of a computation. For our ceremony we generated parameters for any Groth16 circuit up to 130 million constraints.

Over two months, participants from all over the world [contributed](https://github.com/arielgabizon/perpetualpowersoftau#ceremony-progress) their resources to participate in generating secure and verifiable parameters for Filecoin’s proofs. Once again, we’d like to extend a sincere thanks to everyone who helped make this first phase of the trusted setup a success!

![Participants](https://filecoin.io/vintage/images/blog/trusted-setup-participants.jpg)

## Recap of Phase 2

In mid-June, we began the second phase of our Trusted setup – where secure parameters were generated for the 6 circuits that will be used for mainnet. Like in Phase 1, the outputs of Phase 2 should be trustable so long as one party in the chain is honest. Again, participants from all over the world contributed their resources to participate in generating secure and verifiable parameters for Filecoin’s proofs. For everyone who participated in this second phase, we’d like to extend a sincere thanks for your support in this critical component of Filecoin’s path to mainnet! | Participants | |
| ----------------------------- | ---------------------------- |
| Aztec / Ariel Gazibon | Sigma Prime / Mehdi Zerouali |
| Secbit | IPFSMain / Neo |
| Filecoin-vietnam.com | DecentralTech |
| Filecoin / Whyrusleeping | Filecoin / Nemo |
| BoringWang | Benjamin H |
| Supranational | Coinsummer / Cobo / K |
| Hashquark / Allen | Factor8 Solutions / Patrick |
| Filecoin / DrPeterVanNostrand | Finality Labs / Keyvan |
| Justin Drake | Filecoin / Porcuquine |
| Consensys / Joseph Chow | Grandhelmsmen |
| DianCun | IPFSForce |
| Ocean / Alex Corseru | Troels Henriksen / Athas |
| Vulcanize / A. F. Dudley | Kikakkz |
| Filecoin / Magik | Filecoin / Dignifiedquire |
| Zcash / Benjamin Winston | JP Aumussen |
| James Hanson | Angelov |
| Consensys / Alexander Wade | | ## How do I trust the output of these ceremonies

For both phases the outputs can be trusted if the transcript is entirely verifiable, and you trust that **_at least_** one of the participants did not leak their contributed randomness in any way. As such, for both ceremonies we attempted to gather a diverse group of participants – both contributors from within the Filecoin ecosystem, miners with competing interests, as well as individuals and teams from outside in adjacent Web3 communities. In doing so, we aim to reduce the risk of collusion and increase the probability that at least one contributor per circuit would be deemed sufficiently trustable - thereby guaranteeing the integrity of the output parameters.

To verify that the parameters for our mainnet circuits are the same as the output from our participants you can follow the instructions [here](https://github.com/filecoin-project/phase2-attestations/tree/a5f58bc31efbfdcd93f0207efe475c62a50ae13c/b288702#phase-2-validation).

## What happens next

For mainnet, nothing more is required – the proofs portion of Filecoin is ready to go!

However, the Filecoin team is already thinking about future upgrades to our proofs to increase the performance and usability of the protocol. When these upgrades happen, we will begin another iteration of the Phase 2 ceremony to generate secure parameters for these new circuits.

If you’d like to add yourself to the list of interested contributors, please fill out this [form](https://forms.gle/oJaT1v1Kyge4FiK6A) and join our #fil-trustedsetup in our [Slack channel](https://filecoin.io/slack) to stay up to date.
