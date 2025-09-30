---
aliases:
  - /blog/filecoin-features-slashing
author: ""
categories: []
date: "2020-11-17T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin’s combination of cryptographic and economic mechanisms are designed
  to align participants’ incentives with the goals and mission of the network.
  With block reward and deal payment as the main incentive drivers, slashing is
  the main form of mitigating bad behavior when participants deviate from the
  promises they made to the network.
image:
  alt: "Filecoin Features: Slashing"
  url: /uploads/filecoin-features-slashing-3.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-features-block-rewards.en.md
related_article_2: content/blog/posts/filecoin-features-distributed-randomness-leader-elections.en.md
related_article_3: content/blog/posts/filecoin-features-gas-fees.en.md
share_image: /uploads/filecoin-features-slashing.webp
title: "Filecoin Features: Slashing"
_template: blog_detail
---

Filecoin’s combination of cryptographic and economic mechanisms are designed to align participants’ incentives with the goals and mission of the network. With block reward and deal payment as the main incentive drivers, slashing is the main form of mitigating bad behavior when participants deviate from the promises they made to the network.

Slashing uses game theory and decision science to help solve one of the most important challenges for a decentralized storage network like Filecoin. In the absence of centralized control, Filecoin needs a built-in way to ensure the integrity of the network and align the incentives of its participants. Slashing helps achieve this by fining miners who seek to maximize their own personal gain at the expense of the broader Filecoin ecosystem. Slashing ensures that, for any miner participating in Filecoin, the most rational choice is always to act in good faith to uphold the network.

## How slashing works

Every miner who commits storage power to the network is required to pledge collateral in the form of Filecoin. If any miner acts negligently or maliciously, the miner will be “slashed,” or forced to forfeit a portion of their collateral. After all, the network’s reputation and reliability are at stake. In this way, slashing discourages bad behavior from miners by creating a strong economic disincentive to it.

Slashing is thus a kind of built-in disincentive that works to keep all miners on the Filecoin network honest and reliable. Miners will have to behave well or risk losing their Filecoin collateral and storage power.

## When does slashing occur?

There are three circumstances under which a Filecoin miner may be slashed. These are:

- When a miner removes data before a storage deal has expired (broken contract slashing).
- When a miner fails to submit their Proof of Spacetime when asked (storage fault slashing).
- When a miner attempts to fork the Filecoin blockchain or manipulate block leader elections (consensus slashing).

In each of these circumstances, a miner fails to act in a manner that fulfills their promises to the network. Let’s examine each in detail.

## Broken contract slashing

Miners store data on the Filecoin network in storage partitions called “sectors.” Within each sector, miners can enter into storage deal contracts with clients and offer a deal collateral to provide guarantee and confidence that deals will be well maintained. There is a minimum deal collateral required by the protocol to provide a basic level of guarantee, and it is slashed if the deal is terminated. However, miners can offer a higher deal collateral to imply a higher level of service and reliability to potential clients.

The Filecoin network expects that miners will continuously store a clients’ files over the set period of time established by their storage contracts: Miners are responsible for keeping all sectors online and continuously available until the end of their contract period. Miners can fail to meet this expectation either by defaulting on a contract before it expires or by neglecting to store a client’s data continuously as promised.

Miners can default on a contract in one of two ways, either by bringing their committed storage sector offline prior to the end date of a contract or by voluntarily terminating a contract prematurely. Miners who voluntarily terminate a contract are required to pay a termination fee. Miners who outright fail to keep their storage sectors online are slashed; they automatically have a portion of their Filecoin collateral confiscated and their storage power is reduced.

## Storage fault slashing

As discussed in a previous [post](https://filecoin.io/blog/filecoin-features-verifiable-storage/), Filecoin uses a cryptographic protocol (proof system) to validate the acts of storage performed by miners for the network and to ensure that miners provide storage as promised. Part of that proof system is Filecoin’s unique Proof-of-Spacetime (PoSt), through which miners are daily issued a random cryptographic challenge (WindoPoSt) that can only be answered if a miner is able to consult the client data they committed to store, to validate that they are actually providing storage.

Miners who fail at least one WindowPoSt are considered by the Filecoin protocol to be in a state of fault. Miners will lose storage power on the sector for which they are found to be at fault. Miners can only recover their sector power after they have successfully responded to a subsequent WindowPoSt.

However, if a miner remains in this state for two consecutive days, a storage fault fee is slashed every day. After all, Filecoin only incentivizes reliable and useful storage and it is of paramount importance for storage clients to know that all data is stored reliably on Filecoin. If a sector reaches the maximum consecutive number of allowable days of failures, all the rewards earned by that sector and its initial pledge collateral will be slashed.

## Consensus slashing

Blocks on the Filecoin blockchain are arranged into epochs. At every epoch, miners participate in leader elections to determine who will mine the next block of the Filecoin blockchain and receive its block rewards. Leaders are elected based on a pool of Filecoin miners selected for their storage power. The protocol by which leader elections are performed is called _Expected Consensus (EC)_.

In a leader election, every miner draws a random seed provided by the [drand beacon](https://filecoin.io/blog/distributed-randomness-and-leader-elections/). Miners then perform an _Election Proof_ function on this random seed. If the value generated by the Election Proof function is valid, then the miner is eligible to mine a block. When miners generate new blocks during EC, these blocks come together to form “tipsets,” families of blocks mined in the same epoch and connected to the same parent blocks from a previous epoch.

Filecoin’s EC is unique in that many miners can win in a leader election: In every epoch, multiple valid blocks can be generated at once by different miners. To avoid splitting, or “forking”, the Filecoin blockchain into multiple competing chains, miners are required to agree that the canonical or true blockchain is the blockchain with the heaviest tipset, that is, the tipset with the most blocks in its history. Learn more about tipsets in [this post](https://filecoin.io/blog/tipsets-family-based-approach-to-consensus/).

Consensus fault consists in mining two different blocks at the same height. When this occurs, miners’ storage is temporarily suspended and there is a penalty.

Unlike storage faults and broken contract faults, consensus faults have to be reported by other miners in the Filecoin network; the process of slashing is not executed automatically in this case. Filecoin miners have an incentive to report consensus faults, however. Any Filecoin miner who detects and reports a consensus fault becomes the slasher. The slasher receives a portion of the slashed miner’s pledge collateral.

## Conclusion

The Filecoin network uses slashing to generate powerful economic disincentives for miner misbehavior. Because misbehaving miners will always sustain the loss of their pledge collateral and their storage power, miners have no good reason to neglect or otherwise compromise the Filecoin network. In this way, slashing helps to give clients confidence that their data will be stored by miners exactly as promised. Slashing is thus a feature of the Filecoin protocol that protects the integrity, reliability, and reputation of the Filecoin ecosystem.
