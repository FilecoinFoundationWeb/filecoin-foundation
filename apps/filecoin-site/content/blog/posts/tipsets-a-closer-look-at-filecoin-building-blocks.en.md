---
aliases:
  - /blog/tipsets-family-based-approach-to-consensus/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-01-13T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Blockchains are built on blocks—chunks of information denoted by a unique
  cryptographic hash and permanently recorded on the blockchain. Strung
  together, these blocks of information constitute the blockchain and carry a
  set of updates to a given system whose state they encode.
image:
  alt: Tipset
  url: /uploads/tipsets-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/tipsets-english-social.webp
title: "Tipsets: A closer look at Filecoin's building blocks"
_template: blog_detail
---

Protocol Labs is built to break molds. We launched IPFS to make the web faster, safer, and more open. Now, with Filecoin, we’re creating a decentralized storage market, built on the blockchain, where users can rent extra storage space.

Blockchains are built on blocks—chunks of information denoted by a unique cryptographic hash and permanently recorded on the blockchain. Strung together, these blocks of information constitute the blockchain and carry a set of updates to a given system whose state they encode. Blockchains use consensus protocols to determine how to extend their ledgers; this includes who the parties that can update/extend the blockchain are, and how they are chosen.

There are about as many consensus protocols out there in the world as there are blockchains, be they BFT or Nakamoto-style, longest-chain or heaviest, Proof-of-Work or Proof-of-Spacetime or some entirely new system. Each one works a little differently. But the overall goal of many of these consensus protocols is to build a scalable and secure, distributed network that fuels its own growth through miner competition and participation.

Bitcoin is built on a simple, linear blockchain. Every block is weighted equally and counts only once. Think of the bitcoin blockchain like a monarchy—power is passed down and extended based on the direct relationship to the genesis block. Miners are encouraged to mine on the longest chain: the one with the most blocks.

As of this writing, the bitcoin blockchain is more than 600,000 blocks long (one for every 10 minutes since genesis, roughly). Sometimes two blocks are mined relatively close to each other (temporally). Bitcoin’s longest-chain rule and the 10-minute block time allow for most of the network to implicitly “vote” on which block they want to use in relatively short order. This choice could depend on factors like which block a miner heard about first and the transactions included in the blocks. It’s up to the miners to decide, the important thing being that the majority of the network eventually agrees which block is mined and which is abandoned. The abandoned block is called an orphan block. Orphan blocks are represented in the purple in the chart below.

[![orphan blocks](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-1.jpg)](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-1.jpg)Orphan blocks above in purple.

Orphans are valid blocks that don’t contribute to the overall length and stability of the chain. Other blockchains, like Ethereum, reward miners who crafted these blocks, known as “uncle blocks”. Miners earn rewards when they mine blocks even if they’re not ultimately included in the chain. This helps offset potential disadvantages a miner faces because of network latency, and disincentivizes centralization in the network: individual or less-well connected miners also get compensated.

[![uncle blocks](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-2.jpg)](https://filecoin.io/vintage/images/blog/tipsets-family-based-approach-diagram-2.jpg)Uncle blocks. Unlike Bitcoin which uses a longest-chain, Filecoin’s consensus  
seeks to make use of as much work as possible as a heaviest-chain algorithm.  
(Original from [https://vas3k.com/blog/ethereum/#scroll240](https://vas3k.com/blog/ethereum/#scroll240 "https://vas3k.com/blog/ethereum/#scroll240"))

With the publication of “Secure High-Rate Transaction Processing in Bitcoin” (Sompolinsky, Zohar) in 2015, the idea of thinking of blockchains not as chains per se, but as directed acyclic graphs (DAGs) was popularized. In that way, rather than look simply at the longest-chain, one may look at the heaviest DAG (or GHOST—Greedy Heaviest-Observed SubTree), that with the most blocks. Filecoin is such a protocol, using both the overall number of blocks as well as the storage power they encode in its chain selection rule.

GHOSTy protocols enable miners to refer back to all observed blocks from the past in order to lend their chain weight. Filecoin’s consensus mechanism is built on a variation of this called tipsets. If Bitcoin operates like a race to produce the longest and most valid chain, Filecoin’s Expected Consensus is election-based and multiple miners can be elected as leaders in a given round. This in turn means multiple valid sibling blocks can be created per round. **With each epoch, a new generation of a family tree can grow, called a tipset, a system unique to our network.**

Blocks in Filecoin are ordered by epoch. Each new block refers back to at least one block (parent) produced in the prior epoch. A tipset is made up of valid blocks that have the same parents and were mined in the same epoch.

The following diagram, simplified _not_ to account for underlying storage power, shows 3 tipsets from the same grandparent block in different colors. Let’s calculate the weights of these tipsets.

![](/uploads/1-tipset-in-epoch-2.webp)

In the first chart below, **grandparents + parents + kids** gives the first tipset in Epoch 2 a total weight of 5.

![](/uploads/2nd-tipset-in-epoch-2.webp)

The second tipset below has a total weight of 4 (one grandparent, two parents, one kid).

![](/uploads/3-tipsets-epoch-2.webp)

And the final tipset (third chart) has a total weight of 3 (one grandparent, one parent, one kid).

_![](/uploads/3rd-tipset-in-epoch-2.webp)_

The final chart offers a comprehensive view of this chain, where the top 1st tipset in epoch 2 wins, although this is not confirmed until the next epoch.

![](/uploads/all-tipsets.webp)

As with Ethereum, this system incentivizes collaboration and increases chain throughput overall by ensuring no work is wasted. Furthermore, because of the tipset requirement that all its blocks have the same parents and are mined at the same height, the chain achieves _rapid convergence_ in case of forks.

**Ultimately Filecoin gives weight to blocks that offer more storage power, because at its core, it’s a storage network. Over time, miners converge on the heaviest chain—those that are creating value.** Lighter chains become orphan blocks.

The more data a Filecoin miner stores, the more that miner’s storage power grows, and greater storage power on the network makes it more likely that a miner can generate new blocks and win block rewards. To learn more about Filecoin’s weighting system, check out [this testnet mining post](https://filecoin.io/blog/filecoin-testnet-mining/), which outlines Filecoin’s storage proof systems.
