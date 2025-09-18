---
aliases:
  - /blog/trusted-setup-update/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-06-11T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The trusted setup ceremony is conducted in two phases. The first phase, also
  known as the “powers of tau” ceremony, applies to all Groth16 zk-SNARKs up to
  a given size.
image:
  alt: Trusted setup ceremony update
  url: /uploads/trusted-setup-update-main-header-1.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/trusted-setup-update-english-social.webp
title: "Update: trusted setup"
_template: blog_detail
---

At the end of last year, we successfully completed the first phase of our trusted setup also known as the “powers of tau” ceremony. Since the end of the year, our team has been preparing for Phase 2 of our trusted setup. To learn more about Phase 2 and how you can help contribute, read on!

**If you haven’t signed up previously and would like to participate, please fill out this** [**form**](https://forms.gle/XxLgsHmxdPjb7jJa9)**!**

## Recap of Phase 1

As a brief reminder, the trusted setup ceremony is conducted in two phases. The first phase, also known as the “powers of tau” ceremony, applies to all [Groth16 zk-SNARKs](https://eprint.iacr.org/2016/260.pdf) up to a given size. For our ceremony we generated parameters for a circuit size up to 100 million over the BLS 381 curve – the largest circuit size for the BLS 381 curve!

Over the course of roughly two months participants from all over the world contributed their resources to participate in generating secure parameters along with public attestations for anyone to verify. Special thanks to the [individuals and teams](https://github.com/arielgabizon/perpetualpowersoftau#ceremony-progress) that participated in Phase 1 - we couldn’t move to this next phase without your support!

## Phase 2

As we move closer to mainnet, our team has been preparing for the next phase of the trusted setup. Unlike Phase 1, the parameters generated during Phase 2 are circuit specific. This means that the parameters generated for both proof-of-spacetime (PoST) and proof-of-replication (PoReP) in Phase 2 will be specific to the hashing algorithms, constructions and sector size choices that will be made. It also means that when we make updates to our proofs in the future, we will also need to initiate a new Phase 2 of the trusted setup to generate a new set of secure parameters to use with our upgraded proofs.

For our circuits, we’ll be using a relatively new hashing algorithm, [Poseidon](https://eprint.iacr.org/2019/458.pdf), which allows us to greatly reduce the number of constraints we need for our circuits. Additionally, we’ll be generating parameters using Poseidon for both **32GB** and **64GB** sectors for the following algorithms:

- SDR PoRep
- Windowed PoST
- Winning PoST

## I want to volunteer. What exactly do I need to do?

If you haven’t already, all you need to do is to fill out this [form](https://forms.gle/XxLgsHmxdPjb7jJa9)! By signing up, you’ll add your details to a list of volunteers who the Filecoin team may reach out to prior to this second phase of the trusted setup ceremony. Given the requirements of the ceremony and the windows for the phases it is possible that a volunteer may not be called upon to assist. We’ll be aiming to start community participation in the second phase of trusted setup ceremony **June 29th.**

Similar to our process for Phase 1, the Filecoin team will reach out with a link to schedule a calendar slot to participate in the ceremony. Prior to your window, you’ll receive more detailed instructions for the software you need to download and step by step instructions for what you’ll need to do for your portion of the ceremony. During the actual ceremony, participation will involve downloading several files, running a program (to be provided with instructions), and uploading the output for the next participant.

If you’d like to stay up to date as the next phase progresses, you can also join the **#fil-trustedsetup** room on [Slack](https://join.slack.com/t/filecoinproject/shared_invite/zt-dj58b7fq-weyaTEvjHoYF_ENkQHR6Ig) where we’ll be coordinating with participants.

## How long will participating take? What sort of computer do I need?

Below is an overview of what will happen during your portion of the second phase of the ceremony along with time estimates:

First, you will download the file of the output of the previous participant in the ceremony. Next, you will run the specified software on the data. Note compute time is variable depending on the specs of your machine. For reference, we’re including our sample computation time and specs:

| Proof              | Ram Req | Storage Req | Est. Completion Time |
| ------------------ | ------- | ----------- | -------------------- |
| SDR PoRep 32GB     | 250GiB  | 150GiB      | 36 hrs               |
| SDR PoRep 64GB     | 250GiB  | 150GiB      | 36 hrs               |
| Windowed Post 32GB | 250GiB  | 150GiB      | 36 hrs               |
| Windowed Post 64GB | 250GiB  | 150GiB      | 36 hrs               |
| Winning Post 32GB  | 8GiB    | 0.5GiB      | 10-15 min.           |
| Winning Post 64GB  | 8GiB    | 0.5GiB      | 10-15 min.           |

Lastly, you will upload the processed data. On our side, a verifying node will then check that your submission is valid and ensure the next participant starts with your newly verified contribution.

**Have other questions?** Feel free to reach out to us on [chat](https://github.com/filecoin-project/community#chat) or via email at [trustedsetup@protocol.ai](mailto:trustedsetup@protocol.ai).
