---
title: "Filecoin’s Growth Trajectory: The Role of Fil+ and Compliance"
draft: false
excerpt: >-
  This post discusses the importance of Filecoin Plus (Fil+), an
  incentive-compliance mechanism in the Filecoin network, in promoting data
  decentralization and ensuring network integrity.
share_image: /uploads/FilecoinPlus.webp
date: 2023-09-12T21:23:35.289Z
categories:
  - updates
dim_image: true
image:
  url: /uploads/FilecoinPlus.webp
---

When the Filecoin network began to grow, [Filecoin Plus (Fil+)](https://filplus.storage/) was introduced as an optional layer distinct from the core protocol, providing community members an alternative pathway for data onboarding, while incentivizing storage providers who help onboard client’s data into the network. Today the program offers different pathways and tools to help onboard data to the network. As data continues to be onboarded through Fil+, the program focuses on ensuring deal distribution and retrievability compliance in the deal-making process to enhance the network's integrity and efficacy.

## Why Fil+ Requires Compliance

Incentive-compliance frameworks are essential to define rules of engagement in a peer-to-peer decentralized network such as Filecoin. As the network grows, automation and objective tools to measure compliance and identify risks of incentive abuse become necessary. On Filecoin, we can expect many forms of deal-making. The lack of mechanisms to address centralization risk such as storing data in a single region or with a few storage providers (SPs) can lead to similar challenges that we see in Web2 storage systems. As a social trust layer, Fil+ uses an incentive-compliance mechanism where data clients are incentivized through DataCap (DC) to ensure that data is stored in a distributed manner and has more recently implemented compliance with retrieval of open datasets.

Today, the Filecoin network has proofs such as [PoSt](https://spec.filecoin.io/algorithms/pos/post/) and [PoRep](https://spec.filecoin.io/algorithms/pos/porep/) that address risks of data integrity but not risks of centralization. To promote decentralization, Fil+ pushes clients to replicate the data and to work with multiple SPs to distribute it. With an incentive-compliance pairing like Fil+, SPs are encouraged to store data in a distributed manner and to consistently meet the initial requirements of clients, such as retrievability, ensuring clients maintain a strong position on the network.

Web3 systems are not exclusive to the basics of how marketplaces work. Defining rules of engagement in such marketplaces and ensuring compliance with them is key to ensuring its sustainable growth and protecting the interests of the various stakeholders, who have varying levels of risk tolerance. Fil+ as a program has enabled community-driven processes that define what types of deal-making should be incentivized and what forms of compliance must be ensured to preserve the integrity of the Filecoin network. The program continues to grow and introduces new client use-cases by offering different pathways to DC such as [Glif](https://verify.glif.io/), [Client Onboarding](https://github.com/filecoin-project/filecoin-plus-client-onboarding), [Large Dataset Notary](https://github.com/filecoin-project/filecoin-plus-large-datasets) (LDN) program, and [Enterprise Fil+](https://efilplus.super.site/) (E-Fil+). As new use cases are introduced, the program will need to create new pathways, define new rules of engagement and subsequently, compliance thresholds and mechanisms. 

## Improvements to Compliance Mechanism

While Fil+ is an important layer on top of the Filecoin network, the community has raised that manual interventions and checks can often be cumbersome. To enhance the system with automation and different toolings to support the DataCap process, the [CID Checker bot](https://github.com/data-preservation-programs/filplus-checker) and the [Retrieval bot](https://github.com/data-preservation-programs/RetrievalBot) were deployed to help identify specific compliance related client and SP activities. The CID checker bot provides information on a client’s distribution and data replication of the storage providers that are being used. The Retrieval bot provides information on a framework to perform retrieval testing. According to the quality dashboard, since the launch of the CID Checker bot and the Retrieval bot, the two charts indicate a rising trend in deal distribution and retrievability. As new toolings are being developed and with the program working towards a process of automating the compliance aspect, the [Aggregate Compliance (AC) bot](https://github.com/filecoin-project/notary-governance/issues/976) will be implemented which will be combining the two bots and adding more conditions to support the due diligence process. The AC bot will aggregate data from various sources across multiple systems, which can ensure compliance among clients receiving DC. This tooling will help move the program towards a more permissionless and efficient workflow. If you would like to learn more about the AC bot, read more [here](https://github.com/filecoin-project/notary-governance/issues/976).

## In Conclusion

While the ecosystem researches and experiments robust alternative mechanisms to address risks of data storage centralization, Fil+ as an incentive-compliance mechanism remains crucial for the growth of Filecoin. Fil+ is more than just a social layer; it enables a reliable and efficient decentralized storage solution. By emphasizing compliance, this ensures that data is available when needed and the network remains robust and trustworthy. 

If you would like to stay up to date on what the Filecoin Plus governance team is focusing on, please visit the [Medium](https://medium.com/filecoin-plus) page. Additionally, community members are constantly proposing and discussing ideas to make compliance tracking more open and objective, and this feedback is extremely welcomed. For examples, read more [here](https://github.com/filecoin-project/notary-governance/discussions).

To reach out to the team or to get more involved:

[#fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX)

[#fil-plus-enterprise-wg](https://filecoinproject.slack.com/archives/C03MHVAABFV)

[#fil-plus-trust-wg](https://filecoinproject.slack.com/archives/C0405HANNBT)

[#fil-network-announcements](https://filecoinproject.slack.com/archives/C01AC6999KQ)

[#fil-lobby](https://filecoinproject.slack.com/archives/CEHTVSEG6)
