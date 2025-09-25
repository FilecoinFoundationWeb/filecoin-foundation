---
aliases:
  - /blog/eip-1559-in-filecoin
author: ""
categories:
  - updates
date: "2021-01-05T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin incorporates the EIP-1559 transaction pricing model to make
  transaction processing on the network more efficient and easier to navigate.
  This post details the promising impact this decision has had over the course
  of Filecoin's mainnet launch.
image:
  alt: EIP-1559 in Filecoin
  url: /uploads/eip-1559-header-1.webp
main_feature_inverted: false
related_article_1: content/blog/posts/space-race-ama-summary.en.md
related_article_2: content/blog/posts/building-web3-filecoin-ethereum-better-together.en.md
related_article_3: content/blog/posts/bridging-the-filecoin-and-ethereum-communities.en.md
share_image: /uploads/eip-1559-header.webp
title: EIP-1559 in Filecoin
_template: blog_detail
---

_This is a summary of a_ [_talk_](https://www.youtube.com/watch?v=ABhyJXxTnJY&feature=youtu.be) _given by Juan Benet._

In the Filecoin network, the concept of [gas](https://filecoin.io/blog/filecoin-features-gas-fees/) is used to measure the computational resources required to execute a given on-chain transaction. The cost of these resources needs to be paid for, leading to a number of decisions that must be made around who should bear the brunt of these costs, and how transactions, which consume finite resources, should be prioritized.

One approach, for example, might be to run a first-price auction. In such a system, actors that wish to execute a transaction on the blockchain submit bids to block miners. Miners then collect these bids as fees when they include the associated transactions in a mined block. Given a cap on the size of the block or the amount of gas that the transactions that a block can expend, miners prioritize transactions so as to optimize the fees they collect.

While straightforward in concept, such approaches have been shown to have a number of deficiencies. First-price auctions can be complicated to navigate, and can result in significant overpayment by bidders. They can also lead to undesirable behavior during periods of network congestion.

The system detailed above also rewards miners the entirety of the gas fee while ignoring the fact that non-mining participants in the network will also necessarily expend resources to process each transaction.

## EIP-1559

[Ethereum Improvement Proposal (EIP) 1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) is a standard developed in response to many of these issues. Its primary innovation is the introduction of a _base fee_ (per unit of gas) associated with each block. This fee rises and falls in response to network congestion, pushing network traffic back to target levels.

Under EIP-1559, transaction creators specify a _fee cap_ (the maximum they are willing to pay per unit of gas expended to have this transaction included). When the fee cap is less than a block’s base fee, it cannot be included in the block. Transaction creators also specify a _tip_ (also per unit of gas); this tip is collected by the block miner.

Instead of a single-price auction, transaction creators pay the minimum of a) the fee cap and b) base fee plus tip, multiplied by the gas used for the transaction. All revenue from the base fee is burned, creating deflationary pressure that compensates the entire network for the resources expended to execute the transaction.

In turn, miners accrue the minimum of a) the tip and b) the fee cap minus the base fee, multiplied by the gas used by the transaction.

Under this scheme, transaction creators can ensure that their high-priority transactions still make it onto the blockchain, while normally paying much less.

## EIP-1559 in Filecoin

EIP-1559 has a number of compelling properties that align well with design considerations for Filecoin:

- **Efficiency**. EIP-1559 outlines a more efficient model for setting and accounting for gas.
- **User Experience**. Estimation and fee setting is comparatively simpler than participation in a first-price auction.
- **Critical Message Throughput**. WindowPost messages in Filecoin are time-critical, and thus must be processed in a way that is robust to congestion. EIP-1559 offers greater reliability and throughput for such messages.
- **Rewarding Network for Transactions**. The entire network bears the cost of processing transactions, and so should be compensated accordingly.

For all of these reasons, Filecoin has incorporated EIP-1559 into its core protocol, with a small adaptation. Filecoin uses tipsets; its transactions go onto the chain before they are executed, and actual gas usage can’t be determined until that occurs. Filecoin therefore requires users to provide an estimated _gas limit_ on transactions. To properly align incentives, overestimation above a certain margin is penalized via an _overestimation burn_.

## Current Results and Take-aways

EIP-1559 is implemented and live on the Filecoin mainnet. At present, around 100k to 150k FIL are being consumed per day as the result of network transactions. Incorporating the standard has delivered at least two key wins:

- **Fast Lane for High-Value Transactions**. At times, storage onboarding messages have threatened to price out the more time-sensitive WindowPost messages. As expected, however, integrating EIP-1559 has provided Filecoin participants a straightforward mechanism for navigating this congestion without having to pay exorbitant prices all of the time.
- **Network Capacity Management**. So far, the base fee mechanism of EIP-1559 has done very well at keeping network capacity at one hundred percent of its target.

As time has gone on, transaction creators have also gotten much better at estimating the amount of gas their transactions will require, leading to long-term reductions in overestimation burn.

There’s also been some room for improvement: base fee variance has been high, and its change rate has been spiky. This is due to a large amount of congestion as new storage gets onboarded. In the past, this has led to critical WindowPost messages being priced out as well.

There are a number of different approaches the Filecoin community could investigate to address these pricing issues:

- **Gas Control Plane**. One possible means of addressing network congestion is creating a dedicated gas lane for control plane transactions, setting aside a fraction of every block to specific messages critical for the functioning of the blockchain.
- **Message Type Fee Structures**. Another means of addressing this problem may be reducing the cost of WindowPost, or else increasing the cost of other messages, particularly Pre/ProveCommit messages.
- **Base Fee Change Rate**. Spikiness in the base fee over time implies that the rate is not perfectly chosen, and could be smoother.

Additional approaches unrelated to the gas model may be introduced to help relieve congestion:

- **Scaling Proofs**. Ideas for scaling Filecoin’s proof mechanisms include the batch verification of SNARKs, and slash-based verification that reduces the amount of verification that needs to be done up front.
- **Scaling Consensus**. Given the current congestion rate, it’s likely that Filecoin will need to look toward sharding quickly.

## Future Work

Going forward, there is a lot of potential data analysis to be done on the results achieved by the Filecoin network so far, and opportunity for collaboration with other researchers and blockchain communities to build on the ideas of EIP-1559. Some possible areas of investigation include the introduction of queueing theory into the gas model (there are likely inefficiencies in the current model), guaranteeing quality-of-service for certain kinds of messages and transactions, and exploring means of introducing encrypted transactions into the blockchain that can be executed at a future point in time.
