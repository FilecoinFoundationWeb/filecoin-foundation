---
title: "DSA Reduces Decentralized Storage Costs by 40%"
excerpt: >-
  The DSA unveils the first advanced software and reference configuration that
  will fundamentally optimize data onboarding for the Filecoin network.
share_image: /uploads/dsa-golden-gate.webp
image:
  url: /uploads/dsa-golden-gate.webp
  alt: "Golden Gate Upgrade: DSA Reduces Decentralized Storage Costs by 40%"
date: 2023-07-14T05:00:00Z
author: Daniel León
categories:
  - updates
dim_image: true
related_article_1: content/blog/posts/introducing-the-decentralized-storage-alliance.en.md
---

_This is a cross-post from the Decentralized Storage Alliance (DSA); the original article was previously published on their website._

**Sealing Optimizations Release (GA) open sourced and ready for testing.**

JUNE 29, 2023 - The Decentralized Storage Alliance (DSA) brings together technology industry leaders to help enterprises make the transition to decentralized storage technologies through education, advocacy, and best practices. The DSA, in collaboration with [Protocol Labs](https://protocol.ai/) and [Supranational](https://www.supranational.net/about), unveil the first release of an advanced software and reference configuration that will fundamentally optimize data onboarding for the [Filecoin network](https://filecoin.io/). The new software significantly reduces costs for network participants, making it easier to both become a [Filecoin Storage Provider](https://sp.filecoin.io/) and onboard data to the network. These network optimizations push forward decentralized storage technologies, advancing the industry and enabling further adoption by enterprises.

**\*[Daniel León](https://www.linkedin.com/in/danielmleon/), Alliance Lead, Protocol Labs**: “The new open source software optimizations have achieved remarkable performance improvements and cost reductions for onboarding data to the Filecoin network. This first DSA release will remove data onboarding bottlenecks and lower the overall cost of storage for the decentralized storage industry by up to 40%.”\*

The Filecoin Network relies on computations performed on the data being onboarded in order to ensure network security and enable cryptographic proving, verifiability, and data immutability. However, the hardware required to execute this process, known as "[sealing](https://docs.filecoin.io/storage-provider/architecture/sealing-pipeline/)," often accounts for more than 50% of the total hardware expenses. This poses a challenge for new Storage Providers aiming to join the network and for existing ones seeking to enhance their data onboarding capacity. To address this issue, we are excited to **announce the release of new software that optimizes data onboarding for the Filecoin network, resulting in sealing server cost reductions of up to 90%**. By leveraging this software, network participants can benefit from decreased compute costs while experiencing increased compute power. Please see below for a breakdown of cost and performance metrics calculations. Although the benchmarks are for CC,  we expect to see similar results for non-CC as well.

![](/uploads/dsa-performance-graph.png.webp)

![](/uploads/dsa-capex-opex-table.webp)

![](/uploads/dsa-performance-metrics-table.webp)

---

![](/uploads/dsa-sealing-server-costs.webp)

---

![](/uploads/dsa-performance-bar-graph.webp)

---

**We are pleased to introduce the new software optimizations along with optimized hardware reference configurations.** The impact on Storage Providers will vary based on individual hardware and setups; nevertheless, the entire ecosystem can anticipate improved performance and reduced costs with 75-85% increased throughput to PC2 and C2 that will be integrated directly into Lotus. **The new optimized software with optimized hardware reduces sealing server costs by up to 90% for Storage Providers, leading to an up to 40% overall cost reduction to decentralized storage.** As an example of cost savings, it used to cost over $200,000 to purchase sealing servers to seal 20 TiBs per day. It will now cost under $25,000 to seal 20 TiBs per day. Furthermore, Storage Providers will benefit from a noticeable reduction in operational costs as a single server can now efficiently handle all sealing tasks, achieving a remarkable 6x+ higher throughput.

**_Kelly Olson, Co-Founder of Supranational: “Improving the performance of the cryptographic operations in Filecoin’s proof-of-replication and zero knowledge proofs is key to enabling new use cases and scaling the network. By dramatically lowering the costs associated with this cryptography, decentralized storage is able to better compete with centralized offerings.”_**

This initial GA early release is open sourced under a permissive license, allowing it to be accessed by all Storage Providers in the Filecoin network today. Network participants can now explore and start testing the new software. Alongside the release of the software, the DSA is releasing optimized hardware reference configurations that will enable Storage Providers and service providers interested in the full suite of optimizations to start planning on establishing optimized hardware configurations for this new optimized software.

While this GA early release provides basic preliminary access to the new software, additional following releases will make it easier for the ecosystem to realize the benefits of the optimizations. Open source orchestration software and DSA reference architectures will make it easier to use the new software off-the-shelf, hardware upgrade instructions will provide guidance on how to update current hardware configurations, and PC2 and C2 optimizations will be integrated directly into Lotus in Q3.

To explore and test this early release, visit the DSA website: [https://dsalliance.io/](https://dsalliance.io/)

DSA Release:

- [SupraSeal](https://github.com/supranational/supra_seal)
- [About DSA](https://dsalliance.io/about)
- [About Supranational](https://www.supranational.net/about)
- [About Protocol Labs](https://protocol.ai/about/)
