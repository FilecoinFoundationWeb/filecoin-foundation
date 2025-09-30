---
aliases:
  - >-
    /blog/posts/filecoin-and-chainlink-integration-to-bring-advanced-decentralized-storage-solutions-to-web-3.0-developers/
author: ""
categories:
  - updates
date: "2021-03-24T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We're excited to announce that Chainlink—the industry leading decentralized
  oracle solution—is integrating with Filecoin—the world’s largest open-source,
  decentralized storage network— to enable bidirectional connection between the
  Filecoin Network and smart contract enabled blockchains such as Ethereum.
image:
  alt: ""
  url: /uploads/filecoin_banner_v1-jpg.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin_banner_v1-jpg.webp
title: >-
  Filecoin and Chainlink Integration to Bring Advanced Decentralized Storage
  Solutions to Web 3.0 Developers
_template: blog_detail
---

We're excited to announce that [Chainlink](https://chain.link/) — the industry leading decentralized oracle solution—is integrating with [Filecoin](https://filecoin.io/) — the world’s largest open-source, decentralized storage network — to enable bidirectional connection between the Filecoin Network and smart contract enabled blockchains such as Ethereum. As a result, smart contract developers will have a full Web 3.0 infrastructure stack including blockchains for on-chain logic and state changes, Chainlink oracles for off-chain communication and computation, and Filecoin for decentralized storage and data solutions.

By integrating Chainlink into the Filecoin ecosystem, a multitude of bidirectional smart contract capabilities emerge that were previously impossible to achieve. This includes leveraging Chainlink to bridge cryptographically-proven data stored on Filecoin to external smart contract systems as a means of triggering their on-chain applications, as well as using Chainlink oracles to enable smart contracts to trigger Filecoin’s storage capabilities. Some example use cases include paying out an insurance smart contract if an NFT’s content is not available on Filecoin, storing off-chain data onto Filecoin as a historical index based on a cadence set by the dApp, retrieving financial market data stored on Filecoin to trigger the settlement of DeFi markets, and much more.

Chainlink is an optimal oracle solution for any smart contract developer wanting to automate data transfers between Filecoin and external systems. Chainlink has a large collection of security reviewed, Sybil-resistant node operators which can be easily composed into decentralized oracle networks to guarantee strong uptime and tamper-resistance around oracle services. Additionally, Chainlink is blockchain and API agnostic, meaning it can connect the Filecoin Network to any smart contract enabled blockchain or off-chain resource, significantly expanding the types of applications developers can create.

![](/uploads/filecoin-diagram_v1.webp)

## Leveraging Filecoin-Chainlink Oracles to Create Novel Use Cases Around Stored Data

As smart contract applications become more advanced and generate more data, there is an increasing demand from Web 3.0 developers wanting to use Filecoin for decentralized data storage. Enabling this requires a secure and reliable communication protocol between Filecoin and external systems such as other blockchains and traditional Web 2.0 systems.

Chainlink offers a robust set of oracle functionalities that provide a fully-featured connection between the Filecoin ecosystem and other smart contract ecosystems. Chainlink is already the most widely used oracle solution today, relied on throughout DeFi, insurance, gaming, and other blockchain-based markets to secure over $15B+ in on-chain value.

## Combining Filecoin, Chainlink, and Blockchains to Build Advanced, Fully Decentralized Applications

Chainlink opens up bi-directional communication capabilities for Filecoin, meaning it can receive external inputs that trigger Filecoin’s on-chain storage functions or fetch Filecoin’s storage state data to determine actions on other networks. This is enabled through the development of custom [Chainlink External Adapters](https://docs.chain.link/docs/external-adapters), which can read and write data on the Filecoin Network.

Initially, a Filecoin external adapter will be developed to allow Chainlink oracles to read storage state on Filecoin, which can then be combined with other external adapters to write that data on other networks. There are also many other possibilities here, including the writing of data from other blockchain networks directly onto Filecoin.

Some initial use cases being explored include:

1. Filecoin Miner Insurance - Chainlink oracles can monitor the current state of Filecoin miners, and if they go offline or cannot successfully retrieve data from storage, an alert is relayed to an insurance smart contract on another blockchain to automatically execute payouts to policyholders. For example, storing NFT data on Filecoin, with on-chain punishment if it cannot be retrieved in a timely manner.
2. DataDAOs — A DataDAO, or a DAO holding extensive datasets like historical price databases or research data, can leverage Filecoin to store their datasets. Chainlink oracles can then deliver portions of the data to smart contracts on other blockchains, creating new revenue streams for DataDAOs.
3. Data Bounties — Smart contracts that request certain datasets as characterized by their unique CIDs can be stored on Filecoin. Payments can be triggered when the dataset is verifiably proven on Filecoin and relayed through Chainlink.
4. DeFi Data — Leveraging Filecoin for cheaper data storage, Chainlink can enable a large amount of financial market data to be stored on Filecoin long-term, which is then delivered to other blockchains on-demand to support more advanced DeFi applications.
5. Automated Storage — Smart contracts can use Chainlink oracle services to automatically store some type of data on Filecoin at specific intervals, creating tamper-proof and highly efficient data archives. For example, information such as payout schedules and bonding curves—which provide key insights for investors but take up a large amount of storage—can be automatically stored on Filecoin every so many blocks.
