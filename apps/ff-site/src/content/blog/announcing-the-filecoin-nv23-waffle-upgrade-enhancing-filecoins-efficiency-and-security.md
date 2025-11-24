---
title: "Announcing the Filecoin NV23 Waffle Upgrade: Enhancing Filecoin’s
  Efficiency and Security"
created-on: 2024-08-05T16:31:00.000Z
updated-on: 2024-08-05T16:31:00.000Z
published-on: 2024-08-05T16:31:00.000Z
category: news
description: "The NV23 Waffle upgrade for the Filecoin network has successfully
  gone live on August 6, 2024."
image:
  src: /assets/images/blog-header-nv23-upgrade.webp
seo:
  description: The NV23 Waffle upgrade for Filecoin, live on Aug 6, 2024, brings
    streamlined processes, better cryptographic support, and optimized proof
    mechanisms.
---

The NV23 Waffle upgrade for the Filecoin network has successfully gone live on August 6, 2024. This upgrade brings significant enhancements focused on simplified processes, enhanced cryptographic support, optimized proof mechanisms, streamlined sector commitments, and strengthened security.

The upgrade includes several Filecoin Improvement Proposals (FIPs) that address critical aspects of the network's functionality. [FIP0065](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0065.md) simplifies the network's circulating supply calculation by excluding the locked balances of the built-in market actor, preparing for direct data commitments without requiring market deals. By ignoring certain locked balances in the circulating supply calculations, the network now operates more efficiently, laying the groundwork for more flexible data commitment methods.

[FIP0079](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0079.md) introduces BLS (Boneh-Lynn-Shacham) aggregate signatures to the Filecoin Virtual Machine (FVM), enhancing the efficiency of verification processes by allowing multiple parties to sign multiple messages with a single, constant-sized signature.

[FIP0092](https://github.com/filecoin-project/FIPs/tree/master/FIPS/fip-0092.md) introduces the Non-Interactive PoRep (NI-PoRep) protocol, which removes the need for the PreCommit step when onboarding Committed Capacity (CC) sectors. This new protocol simplifies the storage onboarding pipeline by allowing storage providers to locally generate PoRep challenges instead of relying on onchain randomness. NI-PoRep reduces costs, lowers hardware requirements, and supports trustless outsourcing of proving tasks while enhancing the cryptographic security of sector proofs.

We invite the community to continue to review the included FIPs, join discussions, and provide feedback. Participate in our [monthly governance calls](https://lu.ma/filecoin) to stay updated on developments and play an active role in the governance of Filecoin. For more details and to join the conversation, join the [fil-gov Slack channel](https://filecoin.io/slack) and follow [Fil_Gov on X](https://x.com/fil_gov).
