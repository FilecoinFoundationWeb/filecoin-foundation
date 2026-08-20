---
title: 'Filecoin ProPGF Batch 3: ~$1.4M committed'
excerpt: The Protocol Labs Filecoin Impact Fund (PLFIF) is pleased to announce the results of Filecoin Public Goods Funding (ProPGF) Batch 3
share_image: /uploads/FIL-ProPGF.webp
author: ProPGF Team
date: 2026-08-19T16:12:10.959Z
categories:
  - updates
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

The Protocol Labs Filecoin Impact Fund (PLFIF) is pleased to [announce the results of Filecoin Public Goods Funding (ProPGF) Batch 3](https://app.filpgf.io/programs/1479), with up to \~$1.4M allocated through December 2026 across 19 projects supporting the critical infrastructure and coordination that keep the Filecoin network running.

Batch 3 marks a structural shift in how ProPGF allocates capital. Where Batch 2 was a stability-and-resilience round, Batch 3 is the round in which we formalized the Filecoin Kernel - the set of functions the network cannot operate without and funded against it deliberately.

## About ProPGF

Protocol Labs' Filecoin Public Goods Funding (ProPGF) programs support projects that strengthen the Filecoin ecosystem and its open-source infrastructure.

ProPGF strategically allocates capital towards ecosystem priorities through milestone-based funding and structured review. ProPGF runs in recurring cycles and continues to evolve as Filecoin's capital-formation layer matures.

**What made Batch 3 different**

Batch 3 concentrated on two strategic areas: core infrastructure maintenance and RFP responses supporting the growth of the network. 

To make funding decisions rigorous and repeatable, the committee evaluated every core-infrastructure application against the Filecoin Kernel framework classifying each by its function to network uptime, programmability, accessibility, and persistence, and by security tier.

* **Essential** — network-critical functions where at least one healthy implementation must always exist (client diversity, RPC, indexing, randomness, documentation, data).
* **Important** — load-bearing functions whose silent failure would cascade (coordination, settlement).

Everything outside the Kernel was assessed on the Non-Kernel / RFP track, funded on opportunity and strategic fit rather than as core dependencies.

### Batch 3 at a glance

* 81 total applications
* 36 projects advanced to deep review and calibration
* 19 projects funded
* \~$1.4M committed through December 2026
* 16 Kernel grants · 3 Non-Kernel / RFP grants

The committee ran structured negotiations on scope, milestones, and sizing- repeatedly separating maintenance from research, isolating the critical portion of larger asks, and reconciling redundant functions across providers.

### Meet the funded projects

*(Note: amounts reflect commitments through December 2026.)*

#### Consensus clients & storage-provider software

[Forest](https://app.filpgf.io/applications/APP-P0UD8I92-78VVRM) by ChainSafe — $252,000

An independent Rust Filecoin full node (sync, validation, RPC, snapshot export). Funded to sustain client diversity and network resilience, with a path toward higher-performance RPC and block production.

[Curio](https://app.filpgf.io/manage/funding-platform/1479/applications/APP-HDYJESMD-2WLL00) by FilOz - $213,332

Core storage-provider software for deal-making, PDP, and HTTP retrieval — the runtime SPs rely on. 

#### RPC & Chain Access

[Zondax](https://app.filpgf.io/applications/APP-WVTOW236-LUGH7Y) Core Infra — $79,000

Public RPC, archival nodes, and the Ledger hardware-wallet stack.

[Chain.Love](https://app.filpgf.io/applications/APP-P706QNLF-NLQPG5) — $53,500

Chain sync and public RPC, including full-chain and FEVM archival endpoints.

[Ankr](https://app.filpgf.io/applications/APP-ICVR43KL-H0P3K6) - $28,000

Chain sync and public RPC, providing critical redundancy across the network's endpoint fleet.

#### Indexing & Data

[IPNI](https://app.filpgf.io/applications/APP-O66TN87V-3MDZFT) - $85,000

The network-wide indexer that advertises CID content records so applications, gateways, and storage providers can discover where data is stored — a real dependency for retrieval across the ecosystem.

[Filecoin Data Portal ](https://app.filpgf.io/applications/APP-0QLIOMS2-JSK1EM)- $140,000

Aggregates Filecoin on- and off-chain data into open, queryable datasets and dashboards — a vendor-neutral open-data layer for the ecosystem.

[Goldsky](https://app.filpgf.io/applications/APP-RRMZE7XC-XAVG4W) — $42,996

Chain ETL and indexing, including FEVM subgraph support.

[Beryx](https://app.filpgf.io/applications/APP-ZGCSXHWL-8PJG01) — $12,000

Chain ETL and indexing datasets.

#### Explorers

[BlockScout](https://app.filpgf.io/applications/APP-J8CF3XJY-CG03HL) — $5,000

Mainnet block explorer with strong smart-contract verification (relied on across EVM chains), Lotus archive, indexing, and network-upgrade maintenance.

#### Randomness

[Drand](https://app.filpgf.io/applications/APP-KOZT1PS1-T25XTE) by Randamu — $31,000

High-SLA HTTP and gossipsub relays plus quarterly resharing for the public randomness beacon that underpins Filecoin's block production and liveness.

#### Testnet & Network Stability

[Plumbline](https://app.filpgf.io/applications/APP-U5CX297Z-XKDQDZ) — Calibration Net Stability — $17,000

Calibration testnet stability and calibnet miners, including faucet coordination — an efficiently priced replacement for more expensive faucets.

[Filecoin Infrastructure Services](https://app.filpgf.io/applications/APP-VQC3PIBY-G2UDZJ) by ChainSafe — $8,400

Snapshots, bootstrap nodes, and calibnet support 

#### Documentation

[Filecoin Docs](https://app.filpgf.io/applications/APP-OFZ5ILTO-QC1XCM) — $150,000

Network-wide documentation with source-code availability and source control 

#### Coordination & settlement

[FIL Ponto](https://app.filpgf.io/applications/APP-9PTCWEQL-HVKGV8) — $120,000

Ecosystem coordination.

[FVM Stablecoin Settlement](https://app.filpgf.io/manage/funding-platform/1479/applications/APP-Z1L7URG7-TJ3G5D) — $65,000

Stablecoin settlement infrastructure 

#### Non-Kernel / RFP track

[Synaps3](https://app.filpgf.io/applications/APP-UEB8YF3J-9QMLS2) — $40,000 

RFP-track project supporting the broader Pods ecosystem.

[Open Model](https://app.filpgf.io/applications/APP-41FY6MKU-26HL9O) — $15,000 

Decentralized AI model distribution and compute on Filecoin

[js-libp2p](https://app.filpgf.io/applications/APP-8SSKSC9X-NYY1GT) — $15,000

Maintenance of the JavaScript libp2p networking stack used across the ecosystem.

#### What Batch 3 signals

Compared to earlier cycles, Batch 3 reflects:

A formal Kernel framework guiding what gets funded and at what tier (more on Kernel coming soon).

Consistent separation of maintenance from research, and de-duplication across redundant providers.

### Thank you to the Selection Committee

None of this happens without the Selection Committee. Reviewing 81 applications through a two-pass process - an initial triage followed by deep review, calibration, and scope negotiation with individual teams is a substantial amount of careful, largely invisible work. The committee brought technical depth, hard questions, and a willingness to sit with genuinely difficult trade-offs about what the network can and cannot do without. We're grateful for the rigour and the time.

#### For teams not selected

We recognize the high quality of many proposals that were not funded in this cycle. ProPGF operates within a defined capital envelope and prioritizes strategic alignment, scope readiness, and budget feasibility. Teams whose work sits closer to product, applications, or Pod operations are encouraged to stay engaged and apply in future cycles.

#### What happens next

Agreements and KYB completion

Milestone tracking via Karma

Grantee onboarding

Initial disbursements, beginning shortly

#### Looking ahead

As Filecoin matures, so does its capital-allocation strategy. ProPGF is evolving toward greater funding transparency, stronger milestone accountability, better capital efficiency, and tighter alignment with long-term network KPIs. Batch 3 and the Kernel framework it introduced are another step toward sustainable capital infrastructure around Filecoin.

Batch 3 is also the last round to run under a single "batch" umbrella. Going forward, ProPGF will run category-specific programs - each with its own cadence, review model, and evaluation criteria so that core infrastructure, revenue development, and research funding can operate on the timelines that suit them. Stay tuned for our upcoming blogs to learn more.

#### Stay engaged

To explore the scope of funded work and follow milestone updates, check out the [Funded Projects view](https://app.filpgf.io/projects?programId=1479) on [filpgf.io](http://filpgf.io) to sort through previously funded and active projects. Applicants can access full application details via filpgf.io; for questions on agreements, KYB, or payouts, contact finance\@blueshift.foundation.

We appreciate the ecosystem's continued engagement and look forward to continuing to support the core infrastructure and growth of Filecoin.
