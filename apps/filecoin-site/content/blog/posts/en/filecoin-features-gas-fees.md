---
aliases:
  - /blog/filecoin-features-gas-fees/
author: ""
categories:
  - updates
date: "2020-10-08T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  This is the latest installment in our series highlighting unique features of
  the Filecoin network. This post dives into gas fees – how they operate and why
  they’re important to the Filecoin network.
image:
  alt: "Filecoin Features: Gas Fees"
  url: /uploads/gas-fees-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/gas-fees-social.webp
title: "Filecoin Features: Gas Fees"
_template: blog_detail
---

_This is the latest installment in our series highlighting unique features of the Filecoin network. This post dives into gas fees – how they operate and why they’re important to the Filecoin network._

Filecoin is a blockchain-enabled economy with participants making transactions on a distributed network. Network states are updated through miners recording and processing messages in the blocks that they mine. There are a variety of messages which include storage onboarding, storage deals, ongoing proofs, token transactions, and so on.

However, the number of messages that can be processed in a block is limited as a result of constraints imposed by chain performance, scalability, and verification time. As such, only a subset of messages on the network can make it into a block at any given time.

Moreover, executing messages consumes both computation and storage resources on the network. That’s where “gas” comes into play as a measure of resources consumed by the message. The gas consumed by a message directly affects the cost paid by a sender to submit that message to the blockchain. And the total gas usage of all messages in a block is bounded.

Gas can be thought of as the fuel of the Filecoin blockchain, just like fuel for cars. Before you embark on a road trip, you have to pay for the gasoline that will be consumed while driving the distance and powering the engine up and down hills. Similarly, message senders on Filecoin pay for the gas that “powers” or “fuels” the execution of messages on the Filecoin Blockchain.

## How Filecoin uses Gas

Gas was initially implemented on the Ethereum blockchain as a measure of computational and storage resources consumed by a message. This is where the phrase “GasUnit” originated. Historically in other blockchains, miners specify a GasFee in a unit of native currency and then pay the block producing miners a priority fee based on how much gas is consumed by the message.

But gas consumption is a cost that should be shouldered by the whole network, since every node on the network has to spend storage and computational resources to validate each message and maintain a consistent state of the network. As such, some amount of gas is burned to compensate for the network based on the gas usage of a particular message. Not spreading out this cost creates incentive misalignment as block producing miners may include a computationally expensive message for free at the expense of others.

BaseFee is a concept introduced by Ethereum’s [EIP1559](https://www.google.com/url?q=https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md&sa=D&ust=1602170727749000&usg=AFQjCNG0LWmEPqw9dGWF0XA0X7bD6e6UqQ). BaseFee multiplied by gas usage for a message is “burned”. Burning means that it is sent to an unspendable address and removed from circulation on the network. It is dynamically adjusted based on demand for the network’s bandwidth at a given moment. It goes up as the network gets congested such that message senders whose valuation is lower than the network BaseFee will hold and wait till the congestion is clear. The rate of change in BaseFee is designed to be fast to increase quickly to potential DOS attacks and reduce quickly as the network becomes less busy. Message senders who cause the network to become more congested will also internalize the cost by paying a higher fee. Burning also creates slow deflationary pressure that benefits all network participants.

Going back to our roadtrip analogy, think about gas like gas in your car and the network like usual traffic. If roads are congested, for example during rush hour, and traffic is stop-and-go, your car will consume more gas. In those instances, it may make sense to wait a while before starting your trip. The same theory applies on the Filecoin network – when network traffic is congested, gas fees will be high and it might make sense to wait and try back later.

On top of burning some fees to compensate the network, message senders include a priority fee for the block producing miners that is untethered to the amount of gas consumed by the message. This is called GasPremium and it can be arranged outside of the protocol too.

## A practical guide to Gas

To help readers better understand the gas fee mechanism, the following describes a list of relevant gas concepts for a message and their interactions. These fields can be set by the message senders but are currently automated in lotus and more tooling can be developed.

**GasLimit** – a limit on the amount of gas that a message’s execution can consume, estimated and specified by a message sender. The sum of GasLimit for all messages included in a block must not exceed the BlockGasLimit. This is in the unit of GasUnit.

**GasUsage** – the amount of gas that a message’s execution actually consumes. Current protocol does not know how much gas a message will exactly consume ahead of execution. This is in the unit of GasUnit.

**GasFeeCap** – the maximum token amount that a sender is willing to pay per GasUnit for including a message in a block. A message sender must have a minimum balance of GasFeeCap multiplied by GasLimit when sending a message, even though not all of that will be consumed. This is in the unit of attoFIL/GasUnit.

**GasPremium** – a priority fee that is paid to the block-producing miner per unit of GasLimit. This is capped by GasFeeCap and BaseFee has a higher priority. This is in the unit of attoFIL/GasUnit and can be as low as 1 attoFIL/GasUnit.

**BaseFee** – a network-wide variable that is dynamically adjusted based on the sum of GasLimit of all messages in the previous tipset. It will increase when the total GasLimit exceeds the GasLimit target for a block (signaling network congestion) and decrease when it is below. This is in the unit of attoFIL/GasUnit.

Message senders only need to specify a GasFeeCap and GasLimit for each message. GasUsage multiplied by BaseFee will be burned as on-chain resources are consumed. Subtracting BaseFee from GasFeeCap will yield GasPremium. GasPremium multiplied by GasLimit will go to the block producing miners as a priority fee. Some proportion of the difference between GasLimit and GasUsage will be burned as an overestimation penalty. The remaining will be returned to the message sender.

Currently, the default implementation is that miners select messages based on GasFeeCap/GasLimit to maximize their expected return given the GasLimit of a block. When the network is congested and BaseFee is high, miners can choose to underpack blocks, hence reducing total GasLimit, to bring down the BaseFee, but potentially at the expense of some GasPremium.

## Future work

Research and engineering teams are working to reduce resource consumption of different on-chain messages to reduce gas usage and improve network performance to increase capacity. However, there are currently some messages on Filecoin (like SubmitWindowedPoSt) that must be included into the chain within a relatively short window or otherwise a penalty is incurred. More work is being done to improve the economic structure and enable Quality of Service guarantee for these types of messages. The Filecoin Network as a collective of clients, miners, developers, partners, and token holders will continue to collaborate and evolve the network into better directions. Follow the [Filecoin Lotus docs](https://github.com/filecoin-project/lotus) and the [Filecoin Improvement Protocol](https://github.com/filecoin-project/FIPs) for future improvements.
