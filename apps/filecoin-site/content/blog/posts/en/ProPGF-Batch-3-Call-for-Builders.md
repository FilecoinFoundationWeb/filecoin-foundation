---
title: 'ProPGF Batch 3: Call for Builders'
excerpt: 'Filecoin''s FIL-ProPGF Batch 3 offers grants for teams building customer-facing products, SP growth tools, AI infra, and more. '
share_image: /uploads/FIL-ProPGF.webp
author: ProPGF Team
date: 2026-06-07T19:21:29.268Z
categories:
  - updates
  - interviews
related_article_1: content/blog/posts/en/Announcing-Filecoin-ProPGF-Batch-3-General-Track.md
related_article_2: content/blog/posts/en/Announcing-Filecoin-ProPGF-Batch-3-Selection-Committee.md
related_article_3: ''
---

Filecoin is in the middle of one of the most exciting transformations of any decentralized network. [Filecoin's 2026 strategy](https://www.filecoin.io/blog/the-2026-filecoin-network-strategy) sharpens the focus: less talk about how much data the network can hold, more focus on how much data the network is paid to store and serve. The network is moving decisively toward recurring storage revenue, paying customers with real names, and a supply side that is a genuinely attractive business for someone joining today.

[FIL-ProPGF Batch 3](https://filpgf.io/propgf/) is the funding round powering that transformation. The General Track is $2M of grants for outside teams — companies, builder collectives, and independent projects — ready to ship work that advances [Filecoin's 2026 goals](https://www.filecoin.io/blog/the-2026-filecoin-network-strategy) and helps the network capture the moment. A quick note on scope: Batch 3 also funds core infrastructure (the “kernel”) in parallel — the protocol-level and core-client work that keeps Filecoin running. This post and the RFP below are funded via FIL-ProPGF Batch 3 General Track as well. This RFP is a public, opinionated view of the four areas where outside teams can have the biggest impact this year. It's a guide, not a gate. Strong proposals outside these areas will still be read on their merits.

### A Living Document

This RFP is the clear starting set of requests for Batch 3, but we expect to refine it through working sessions at the Filecoin Dev Summit in New York, starting June 9, and in the days following, as ecosystem leaders and the broader community weigh in. Check back after the Summit, and if you see a gap before then, contact us on Telegram or Slack.

### Understanding “Pods”

A pod is a small, mission-focused team inside the Filecoin ecosystem with a specific product or go-to-market mandate. For example, one pod ships Filecoin’s [developer-facing storage platform](https://filecoin.cloud/); another runs [enterprise sales into traditional storage buyers](https://fil.one/); a third focuses on [onboarding very large datasets](https://www.karmahq.xyz/project/large-data-onboarding-pod-ldo-pod/about). Pods own product and revenue for their slice of the ecosystem, and they’re shipping at a faster cadence than ever. The grants below fund work alongside the pods — work that helps them succeed while sitting outside what any one pod should reasonably do on its own.

## Four Focus Areas

### 1. Customer-facing products built on Filecoin

The pods are building Filecoin's underlying storage platforms, and the foundation is increasingly strong. The opportunity now is the layer above: independent teams shipping finished products that end customers buy, with Filecoin as the storage and retrieval substrate. Paying reference customers are what convert a healthy pipeline into recognized revenue — and Filecoin’s properties (verifiability, durability, economics) give product teams a real edge to build on.

#### Scope of Funding

* Products for AI workloads — agent memory, tamper-evident audit logs, training-data provenance, and compliance products sold to AI teams as a finished, supported offering.
* Products for creative, media, and archival data storage — production storage products for studios, media libraries, scientific archives, and cultural institutions where verifiable, long-horizon storage is a contractual requirement.
* Products for compliance and regulated data — verticalized storage products for regulated industries (write-once retention, audit trails, retention locks) sold directly to the compliance buyer.
* Products for real-world-asset and onchain-data teams — finished products for asset issuers, onchain data providers, and protocol teams who need verifiable storage as a feature of their own offering. Strong preference for products with near-to-medium term potential to convert ARR for the network.

Not in scope:  Building or extending the platforms themselves (SDKs, framework adapters, data-migration pipelines, hosted gateways, compatibility plugins) — those sit with the pods. Also out: unvalidated MVPs / demos, acquisitions, channel BD, generic marketing, and research-only projects without a shipped product.

A strong proposal: A creative-tech team ships a verifiable media-archive product to film studios and cultural institutions — built on Filecoin rails, but sold, priced, and supported as the funded team’s own product, with named studios as paying reference customers within six months.

### 2. Storage provider economics and growth

The next phase of Filecoin’s growth depends on making storage-provider participation an increasingly attractive and sustainable business. With paid deals taking off and demand maturing, there’s a real opening to strengthen the foundations that make becoming a Filecoin storage provider a clear and compelling three- to five-year business decision. The pods are recruiting and closing in parallel; this RFP funds the upstream work that compounds those wins.

#### Scope of Funding

* Recruitment programs targeting adjacent differentiated supply — colocation operators, regional cloud providers, operators with decommissioned AI-cluster hardware, and traditional storage operators considering blockchain-backed revenue.
* Retention infrastructure for the existing provider base — onboarding into paid-deal workflows, technical assistance for operators shifting off subsidy-dependent models, and market-making that matches capacity to paying customers.
* Rigorous economic modeling for storage providers — published as an ongoing public resource across hardware vintages, deal types, geographies, and the new paid-deal regime.
* Financial products that reduce capital risk — equipment financing, revenue-sharing arrangements, yield-bearing mechanisms, or insurance-like primitives that make provider economics predictable enough to underwrite.

Not in scope: New mining-hardware ventures, marketing campaigns without an economic-modeling substrate, or one-off incentive programs.

A strong proposal: A project-finance team builds an equipment-financing facility that lets new operators finance hard-drive capacity against contracted paid-deal cashflows — paired with a public economic model underwriters and operators use to size facilities.

### 3. AI infrastructure products on Filecoin

AI is the most significant demand driver for storage infrastructure in a decade, and Filecoin is uniquely positioned to capture it: verifiable, tamper-evident, provenance-preserving storage at scale is something no traditional cloud provider can replicate. The pod focused on Filecoin’s onchain cloud is building a strong developer-facing integration layer. The opportunity this RFP funds is the layer above: independent companies that turn that layer into infrastructure products AI teams pay for.

#### Scope of Funding

* Verifiable-compute and audit services — productized services pairing Filecoin storage with verifiable execution (vector databases, RAG pipelines, inference checkpoints, agent audit trails) sold as managed infrastructure with SLAs.
* Training-data provenance products — commercial offerings that solve the audit, licensing, and provenance problem for AI training corpora — sold to model developers, regulators, or rights-holders.
* Cross-stack verifiable-AI infrastructure — products pairing Filecoin storage with adjacent AI infrastructure (compute attestation, model registries, dataset marketplaces) where the funded team owns the product and customer.
* \* Machine-readable ecosystem knowledge: Services that create, maintain, and improve technical documentation, knowledge bases, and machine-readable content that can be consumed by both developers and AI systems.

Not in scope: General-purpose products that incidentally use Filecoin, research-only projects, or open-source contributions without a customer-facing product are also out.

A strong proposal: An AI-infra team ships a verifiable agent-memory service with tamper-evident audit logs, sold under SLA, with three named regulated-industry customers in production within six months.

### 4. FIL value accrual: burn and lock mechanisms

Filecoin’s transformation toward paid storage is creating something genuinely new: a sustained, growing flow of real revenue moving across the network. The opportunity this area funds is to ensure that the flow strengthens FIL itself through well-designed, near-term deployable mechanisms that burn FIL and lock FIL as a direct function of network activity. The goal is straightforward: as paid storage, retrieval, and ecosystem usage grow, FIL becomes structurally scarcer and more deeply committed inside the protocol. This is a moment to ship, not theorize — proposals here should have a clear, credible path to mainnet (or testnet-to-mainnet) implementation inside the Batch 3 horizon.

#### Scope of Funding

* Fee-and-burn mechanisms on stablecoin payment rails — designs and reference implementations that route a share of stablecoin-denominated storage payments (USDC and the Filecoin-native stablecoin) through a swap-to-FIL-and-burn path. Must include the smart-contract work, economic modeling, and an implementation plan that lands on mainnet within the grant horizon.
* Protocol-level fee burns tied to network activity — mechanisms that direct a portion of protocol fees from paid deals, retrieval, or other measurable network activity into a burn sink. Proposals should specify the exact fee surfaces, the burn rate parameters, and a credible upgrade path through Filecoin’s improvement-proposal process.
* FIL-locking primitives for storage providers and customers — staking, escrow, collateral, and bonding mechanisms that increase the share of FIL locked productively inside the protocol — for example, FIL collateral against paid deals, customer-side lockups that earn service guarantees, or provider-side bonded commitments that scale with paid-deal volume.
* FIL-locking primitives for ecosystem participants — lock-and-earn mechanisms for stablecoin issuers, payment processors, retrieval providers, and other ecosystem participants — designs where access to Filecoin economic rails is tied to a measurable, ongoing FIL lock.
* Measurement, dashboards, and verification — public dashboards and onchain instrumentation that make burn rate, locked supply, and the underlying activity drivers visible in real time. Required as a companion to any of the above; valuable as a standalone proposal if paired with a specific mechanism roadmap.

Not in scope: Pure research papers without an implementation plan; mechanisms with no credible path to mainnet inside the grant horizon; speculative tokenomics redesigns that require broad consensus changes outside the improvement-proposal process; one-off marketing programs around “buy and burn” without a structural mechanism behind them; and any design that depends on a single pod or counterparty rather than a primitive that compounds across the ecosystem.

A strong proposal: A protocol-engineering team ships a fee-and-burn module that routes a fixed share of USDC-denominated storage payments through a Filecoin-native swap-to-FIL-and-burn path — with reference implementation, economic model, and a Filecoin improvement-proposal track ready to land within six months.

#### How to apply

* Applications open: May 26, 2026, on filpgf.io. [(Apply here)](https://filpgf.io/propgf/#funding-round-timeline)
* Funding: $2M total · $300K soft cap per project · \~$200K average grant · six-month default horizon · milestone-based payouts.
* Decision waves: Wave 1 by June 30, 2026; Wave 2 by July 15, 2026. Agreements and compliance are complete by July 30, 2026.
* Review: Three-phase flow — AI-assisted shortlist, committee vetting, final allocation — evaluated against Filecoin’s 2026 network objectives.

Beyond Batch 3: a path to longer-term funding. Delivering on an RFP-aligned proposal isn’t the end of the relationship — it’s the start of one. Teams that ship strong work become natural candidates for longer-term funding through ProPGF, either as a core infrastructure element of the Filecoin ecosystem or as a pod-aligned solution that graduates into ongoing support. Treat Batch 3 as the entry point: deliver here, and the door opens to a multi-batch funding relationship.

Questions? Join the public [ProPGF Telegram channel](https://t.me/+nUc-d7FXmt1kOWVl) or drop into [#propgf](https://filecoinproject.slack.com/archives/C08GGK4DAVC) on the Filecoin Slack.
