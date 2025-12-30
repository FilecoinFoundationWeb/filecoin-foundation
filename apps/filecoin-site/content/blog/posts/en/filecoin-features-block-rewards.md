---
aliases:
  - /blog/filecoin-features-block-rewards/
author: ""
categories:
  - updates
date: "2020-10-12T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  The Filecoin network boasts a unique economic design that aligns incentives
  among participants and rewards useful work by Filecoin miners.
image:
  alt: "Filecoin Features: Block Rewards"
  url: /uploads/block-rewards-header-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/block-rewards-social.webp
title: "Filecoin Features: Block Rewards"
_template: blog_detail
---

The Filecoin network boasts a unique economic design that aligns incentives among participants and rewards useful work by Filecoin miners. A key component of the [Filecoin economy](https://research.protocol.ai/publications/engineering-filecoins-economy/) is block rewards, which subsidizes storage miners for providing reliable and useful storage capacity and maintaining the Filecoin blockchain.

Most blockchains reward block-producing miners with cryptocurrency tokens for successfully mining a new block in the chain. Filecoin is no different in that regard. The Filecoin blockchain grows through successive rounds of leader elections, and any miner who wins a leader election and is thus selected to mine a new block receives a set amount of Filecoin tokens as a block reward.

But Filecoin’s block reward system is unique, both in the way it determines who wins block rewards and in the incentives it applies to the process of earning them. This improves the usefulness of the Filecoin network for both miners and clients and ensures its long-term health. Let’s see how.

## For the miner: earning block rewards through useful work

Storage power is the engine of the Filecoin blockchain. Miners gain storage power by dedicating hard drive space to the Filecoin network through a process called “sealing.” Sealing partitions storage space into sectors that are committed to storing data on Filecoin. The more storage sectors a miner adds to the network, the more client data they are able to store, and the more Filecoin they are eligible to earn.

Miners earn the right to participate in leader elections by contributing storage power to the network. Block rewards are awarded based on the amount of storage power a Filecoin storage miner is able to provide weighted by the quality multipliers of different deal types in their storage.

Miners receive block rewards in direct proportion to their quality-adjusted power; a miner who contributes 1% of the network’s overall quality-adjusted power can expect to receive roughly 1% of block rewards over time.

Unlike traditional proof-of-work blockchains that require miners to perform computationally intensive but otherwise useless tasks to win block rewards, Filecoin miners earn block rewards by proving that they are providing reliable and useful storage to network clients. And anyone can contribute storage resources to the network and start earning rewards right away. In addition, miners are highly incentivized to store useful data – with the cryptoeconomics heavily subsidizing the storage for real clients on the Filecoin network. This incentivizes legitimate use-cases and underscores Filecoin’s core mission to store humanity’s most important information. So, for example, data sets that help us [study the universe](https://www.sdss.org/science/) or [cure diseases](https://portal.gdc.cancer.gov/) could be given more weight on the network.

## For the client: using block rewards to subsidize reliable storage

The Filecoin network is intended to provide reliable and useful storage to clients. On a traditional proof-of-work blockchain miners are free to go offline whenever they choose to do so. They cease to earn block rewards in this case but are otherwise unaffected. Filecoin miners, by contrast, must provide ongoing storage services to their clients based on their contractual agreement. If a Filecoin miner were to go offline while under contract with a client, it would damage the value of the service for the client and impair the health and reputation of the network.

To incentivize stable service from miners, the Filecoin network requires miners to commit a portion of their block rewards as collateral. If a miner prematurely terminates the contract or goes offline, the miner will be penalized and the collateral will be burned in a process called “slashing.” In this way, the Filecoin protocol uses block rewards not only to incentivize miners to store data in the first place but to do so in a lasting way and uphold their promises to the client and the network.

Storage clients have the power to share the product and offering of the Filecoin network because miners are incentivized to meet client’s needs. It’s also in the best interest of storage miners to meet demand and build applications and tooling on top of Filecoin to better serve client needs.

## For the network: minting block rewards based on network utility

Many blockchains incentivize early adoption by applying a model of exponential decay to the rate at which miners can earn block rewards. That means mining is exponentially more profitable in the early stages of the blockchain’s life, when participation and utility are often the lowest, and then rapidly decreases. This model incentivizes storage miners to over-invest in hardware for the sealing stage of mining to onboard storage as quickly as possible with little regard to the reliability and usefulness of their storage. Additionally, this would result in the majority of network subsidies being paid based wholly on timing, rather than actual storage (and hence value) provided to the network.

To encourage consistent storage onboarding and investment in long-term storage, not just rapid sealing, Filecoin introduces the concept of a network baseline. A notion of “network time” is defined based on how much the network has progressed in meeting its baseline. Instead of minting tokens based purely on elapsed time, block rewards instead scale up based on how much “network time” has elapsed. This preserves the shape of the original exponential decay model, but softens it in the earliest days of the network. The overall result is that Filecoin rewards to miners more closely match the utility they, and the network as a whole, provide to clients.

Specifically, a hybrid exponential minting mechanism is introduced with a proportion of the reward coming from simple exponential decay, “simple minting” and the other proportion from network baseline, “baseline minting”. The total reward per epoch will be the sum of the two rewards. Mining Filecoin should be even more profitable with this mechanism. Simple minting allocation disproportionately rewards early miners and provides counter pressure to shocks. Baseline minting allocation mints more tokens when more value for the network has been created. More tokens are minted to facilitate greater trade when the network can unlock a greater potential. This should lead to increased creation of value for the network and lower risk of minting filecoin too quickly.

There are many features that will make passing the baseline more efficient and economical and unleash a greater share of baseline minting. The community can come together to collectively achieve these goals:

- More performant Proof of Replication algorithms, with lower on chain footprint, faster verification time, cheaper hardware requirement, different security assumptions, resulting in sectors with longer lifetime and enabling sector upgrades without reseal.
- A more scalable consensus algorithm that can provide greater throughput and handle larger volume with shorter finality.
- More deal functionalities that allow sectors to last for longer.

Lastly, it is important to note that while the block reward incentivizes participation, it cannot be treated as a resource to be exploited. It is a common pool of subsidies that seeds and grows the network to benefit the economy and participants. An example of different stages of the economy and different sources of subsidies is illustrated below.

![Chart](https://filecoin.io/vintage/images/blog/filecoin-features-block-rewards-chart.jpg)

## Conclusion

Block rewards are one of the many cryptoeconomic constructions that Filecoin uses to fulfill its mission of building a reliable and useful storage economy where raw materials are converted into valuable storage-related goods and services by its participants. Through a unique block reward structure, the Filecoin protocol aligns the incentives of miners, clients, with the long-term utility of the network.
