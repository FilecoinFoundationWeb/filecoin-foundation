---
aliases: []
author: ""
categories:
  - updates
date: "2022-11-22T05:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: "The upcoming Filecoin upgrade to network version 17, “Shark \U0001F988”, will bring a range of improvements and simplifications that set the stage for programmable storage: smart contracts that interact with storage deals and providers."
image:
  alt: ""
  url: /uploads/sharknv17.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/image-2-1.webp
title: "Filecoin Network v17 Shark \U0001F988 Upgrade"
_template: blog_detail
---

The upcoming Filecoin upgrade to network version 17, “Shark 🦈”, will bring a range of improvements and simplifications that set the stage for programmable storage: smart contracts that interact with storage deals and providers. This is currently expected to be the last upgrade before the February launch of the FEVM (EVM runtime on [FVM](https://fvm.filecoin.io/)) slated for network version 18. We’ve been designing and developing these programmability improvements since March 2022 and are excited to be landing this step forward. The upgrade for network version 17 is scheduled for 30 November 2022 (around 14:00 UTC at epoch 2383680) and has already been deployed on the calibration network, for more details see [here](https://github.com/filecoin-project/community/discussions/74?sort=top#discussioncomment-3825422).

The full list of FIPs activating in version 17 is at the end of this post. You can hear more about these from [PL EngRes All Hands deep dive from July](https://www.youtube.com/watch?v=oQTPUE4MN_4&list=PLhuBigpl7lqtkWt7koiW6SvQKzT_O4bvY&index=13), and the Lotus nv17 Overview from October, embedded below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/10TVAH_bseY" title="Introducing Shark - Filecoin Network Version 17" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here are a few highlights.

[FIP-0029](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md) provides for a storage provider **beneficiary address** distinct from its owner. This beneficiary has sole right to withdraw funds from the on-chain miner actor, up to some specified amount and time limit. This beneficiary is fixed until the term or limit are reached, or the beneficiary agrees to a change. This is a key enabler of mechanisms for lending and borrowing of funds for a storage provider’s pledge collateral, both off-chain and, soon, on-chain lending markets. A lender can take financial control of a provider’s on-chain actor, while leaving operational control with the operator.

[FIP-0044](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0044.md) specifies a **standardised authentication** _method_ for actors. This expands the set of entities that can attest to some piece of data from those with cryptographic keys (who attest by signing) to any on-chain actor or smart contract. One immediate benefit is that actors and smart contracts will be able to make storage deals 🎉. Storage deal proposals are usually _signed_ by the deal client. But smart contracts can’t have private keys so they can’t sign things. With FIP-0044, the built-in storage market actor will consult the deal’s client on-chain, and no longer requires it to be an account with a cryptographic key. [Data DAOs](https://filecoin.io/blog/posts/the-future-of-datadaos/), here we come.

[FIP-0045](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md) is the largest change, which decouples the Filecoin Plus verified registry actor from the built-in storage market. As a result of decoupling, storage providers will be able to immediately enjoy:

- no more diluted QA-power – get the full 10x boost for the life of a sector commitment;
- 90 days of extra QA-power than deal duration by default;
- up to 5 years of full QA-power per deal, when serving a client willing to coordinate a term extension—it’s not quite deal renewal, but nearly as good.

At the protocol level, we get:

- a simplified calculation for quality-adjusted power, allowing much more flexible storage;
- removal of barriers to re-use of storage capacity, i.e. repeated ReplicaUpdate to the same sectors—expect re-”[Snap](https://www.youtube.com/watch?v=YIYfKlt2NhE&t=1s)” of sectors early next year;
- decoupling (and thus de-risking) our singleton actors, eventually removing the market actor from the consensus-critical set entirely.

For a deeper understanding, check out [this explainer video](https://www.youtube.com/watch?v=4UaFN-w_OzM) from the Lotus team’s Zenground0.

FIP-0045 is one of two big changes needed to enable **alternative storage markets**: smart contracts that broker deals between clients and providers. The built-in storage market actor currently has a monopoly on brokering deals, but we want to open the field to user-programmed actors and smart contracts to improve and expand on deal capabilities and policies. The built-in market is simple, limited and (frustratingly for us all) can only be improved through infrequent network-wide upgrades. Support for alternative markets will open the path to features like deal extension, multi-sector deals, replication, re-negotiation, deals for future capacity, bounties and auctions, insurance, and more! This field of innovation should and will be open to developers, not limited to network consensus.

Here are all the FIPs included in nv17.

- [FIP-0029](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md): Beneficiary address for storage providers
- [FIP-0034](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md): Set pre-commit deposit independent of sector content
- [FIP-0041](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0041.md): Forward Compatibility for PreCommit and ReplicaUpdate
- [FIP-0044](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0044.md): Standard Authentication Method for Actors
- [FIP-0045](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md): De-couple verified registry from markets

If you’d like to learn more or contribute to future protocol improvements, join the discussion in the [FIP Discussion Forum on GitHub](https://github.com/filecoin-project/FIPs/discussions), or #fil-fips in [Filecoin Slack](http://filecoin.io/slack).
