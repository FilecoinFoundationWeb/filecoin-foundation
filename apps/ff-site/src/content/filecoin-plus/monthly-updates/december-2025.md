---
title: "Fil+ December 2025 Monthly Update"
created-on: 2025-12-16T10:00:00.000Z
updated-on: 2025-12-16T10:00:00.000Z
published-on: 2025-12-16T10:00:00.000Z
description: "A recap of Filecoin Plus activity in December 2025, including allocator scoring, SLA requirements, DataCap refresh updates, and governance highlights."
add-table-of-contents: false
seo:
  description: "A recap of Filecoin Plus activity in December 2025, including allocator scoring, SLA requirements, DataCap refresh updates, and governance highlights."
---

Slides: [December 16 Governance Call](https://docs.google.com/presentation/d/1v9pC66VXoq5XHm7pBIUNFXC6rKXHmI-VpaxEZIvQp-g/edit?usp=drive_link)

Recordings: [Available on YouTube](https://www.youtube.com/watch?v=0equHmXzsAw&list=PLp3zrT1ewY0kYN1hJpERMUxTCbFC4yZwN&index=1)

## DataCapstats.io

We have been tracking and tuning the Allocator Scores based on metrics for performance in the program for the past 2 months. Starting January, the auditing team will start including those in the refresh decisions. If you feel like the weights are unfair – this is the time to speak up!

How does scoring work? We measure a set of metrics that objectively illustrate the quality of cooperation between a customer and their storage provider. Metrics are evaluated daily and aggregated across all customers based on system-generated reports.

To prevent outdated results from disproportionately affecting an allocator's overall score, we apply a time-based exponential decay to each customer's weight, determined by the date of their most recent DataCap allocation. Importantly, this weight never declines to zero – exponential decay ensures that every customer retains a minimal but non-zero influence. As a result, recent performance has the strongest impact on the allocator's current final score, while historical performance remains represented in a diminishing form.

![DataCapstats.io report](/assets/images/filecoin-plus-december-2025-report-1.webp)

## SLAs Coming

Filecoin is moving to a strong tie-in with Product Market Fit efforts. To support this, Fil+ is also aligning by moving toward verifiable performance guarantees, strengthening retrieval reliability and service standards across the network. At a high level, Allocators should be serving as stewards to ensure the program is effective. Allocators are asked to:

- Verify that the Storage Providers suggested by the clients have good retrievability scores and low slashing rate on other datasets.
- Act on client behalf and ensure that the data they want to be publicly accessible is indeed publicly available – test downloadability of datasets throughout.
- Ensure all DataCap that goes to clients is quickly used (avoid "hoarding"). We recommend Smart Contracts as a method to allocate DataCap to give allocators fine control over the DataCap.
- Ensure that your clients are paying for storage services. Ideally this should be simple – they should be able to provide a transaction ID on Filecoin that corresponds to the payment they made to SPs. In absence of a Filecoin transaction, an on-chain payment on another chain can be accepted. If neither is possible – Allocator will need to review the contract and the invoices.

## DataCap Refresh

Recap of Fil+ Allocator's top-ups:

### Public-Open

- [Revelation](https://github.com/filecoin-project/Allocator-Governance/issues/468) (10PiB)
- [YMHB](https://github.com/filecoin-project/Allocator-Governance/issues/469) (2.5PiB)

### Enterprise

- [CFDA](https://github.com/filecoin-project/Allocator-Governance/issues/467) (5PiB)
- [SWST Fil+](https://github.com/filecoin-project/Allocator-Governance/issues/466) (5PiB)
- [HLM Miner](https://github.com/filecoin-project/Allocator-Governance/issues/470) (5PiB)
- [GOME Fil+](https://github.com/filecoin-project/Allocator-Governance/issues/473) (5PiB)

![DataCap Refresh report - Allocated Unused DataCap](/assets/images/filecoin-plus-december-2025-report-2.webp)

## Requirements for Receiving DataCap Refresh

Allocators must meet [baseline requirements](https://github.com/filecoin-project/Allocator-Governance/discussions/329) related to retrievability, client activity, SP performance, and diligence reporting. Using the entire allocation quickly does _not_ guarantee renewal. [Issue #456](https://github.com/filecoin-project/Allocator-Governance/issues/456) was not awarded a refresh due to these reasons. A refresh can only be granted when evidence clearly supports it. In the event that no minimum baseline of distributing DataCap is met, there is no guaranteed continual refresh of DataCap.

![DataCap Refresh report - Best Practices for Allocators](/assets/images/filecoin-plus-december-2025-report-3.webp)

## Future Application Cycles

New allocator cohort ("[V7 applications](https://apply.allocator.tech/)") are now considered open and do not require waiting until an open application period. Applications can be submitted at any time, but currently with over 100+ Manual pathways, prioritization is given to organizations creating something new and valuable other than manual review.

## Other Updates

[Filecoin Onchain Cloud](https://youtu.be/1Q8POPzrnyw?si=HRYjfsOzTFO11wJx) is the network's new decentralized cloud layer, launched in Buenos Aires to bring storage, retrieval, and payments fully onchain with verifiable guarantees and developer owned infrastructure. By turning core cloud functions into programmable services, it establishes a common economic substrate where contracts, proofs, and payment rails all live onchain, creating much clearer levers for pricing, incentives, and accountability across applications and services. As this architecture rolls out on mainnet in 2026, it is expected to become a key platform for future economic governance work, enabling more direct protocol level control over how value flows between clients, operators, and public goods.

The [Constellation Program](https://youtu.be/W9_-O-wgw7A?si=a3lDPPCF7_85UtH5) is a structured, community driven initiative to modernize how decisions are made and how resources are allocated across the Filecoin ecosystem, using phased experimentation instead of a single sweeping overhaul. In the current Nebula phase, the focus is on surfacing pain points, testing new governance modules, and standing up shared infrastructure for participation, accountability, and decision lifecycles that can later be scaled network wide. As the program progresses into later phases, these pilots are expected to evolve into more programmable, protocol level governance for grants and incentives, laying the groundwork for a next wave of economic governance reforms targeted for 2026 and beyond.
