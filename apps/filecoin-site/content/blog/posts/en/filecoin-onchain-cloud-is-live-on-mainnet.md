---
title: Filecoin Onchain Cloud Is Live on Mainnet
excerpt: "Filecoin Onchain Cloud is live on mainnet — verifiable, programmable storage for AI agents and pipelines with onchain proofs, smart contract payments, and two-copy replication."
share_image: /uploads/foc-mainnet-blog.webp
image:
  url: /uploads/foc-mainnet-blog.webp
date: 2026-03-26T10:06:57.636Z
categories:
  - updates
dim_image: true
---

AI is generating data faster than traditional cloud infrastructure was designed to handle. Governments are drawing jurisdictional lines around where that data can live. And AI agents are entering the picture as a new class of cloud users with autonomous systems that need to store, retrieve, and pay for data without humans.

Filecoin Onchain Cloud is built for this moment as a programmable storage and payments layer for developers where data is verified onchain, payments are enforced by smart contract, and every action produces an auditable, verifiable record.

Filecoin Onchain Cloud is now live on mainnet.

## The early signal

When Filecoin Onchain Cloud launched on testnet last November, more than 100 teams started building across AI agents, decentralized frontends, compute pipelines, and data indexing. 

The early numbers from mainnet are coming in with 49.41 TiB of data already stored across 478 active datasets, and 81 payer wallets with payment rails connected onchain via Filecoin Pay.

Now, we're inviting builders to bring early production workloads to mainnet and help shape how Filecoin Onchain Cloud performs for you. 

## What’s new since testnet launch

Two-copy replication is live. By default, every upload using the Synapse SDK lands on two independent storage providers. The second provider pulls directly from the first, so your bandwidth isn't consumed twice. Each copy registers its own onchain proof, giving you verifiable confirmation that your data exists in more than one place. If the secondary provider fails, the system automatically selects a replacement and retries. 

Updated [Synapse SDK](https://docs.filecoin.cloud/getting-started/?utm_source=synapse-sdk&utm_medium=blog&utm_campaign=mainnet). Migrated from [Ethers](https://docs.ethers.org/v5/) to [viem](https://viem.sh/) for cleaner TypeScript support and a faster developer experience. The latest release automatically mirrors uploads across multiple providers without any performance impact. This simplifies adoption and avoids future breaking changes for SDK builders.

Production-grade storage providers are live on mainnet. Storage providers have been onboarded, tested, and approved, and ready to handle real workloads. [DealBot](https://dealbot.filoz.org/), a tool that determines approval eligibility, creates synthetic traffic for storage providers in the onchain registry and monitors performance.  Storage providers must meet criteria across three dimensions: storage success rate of 95%+, PDP fault rate below 1%, and retrieval success rate above 95%. When a storage provider fails any threshold, they get removed. For builders, this means every action produces a verifiable onchain attestation [you can check yourself](http://pdp.vxb.ai/mainnet), your data is CID-based and portable regardless of which provider holds it, and the network runs across multiple independent and global providers. 

Proof of Data Possession (PDP) Explorer is live. With the [PDP Explorer](http://pdp.vxb.ai/mainnet), once your data is stored, anyone can verify proof status, fault history, and individual provider performance in real time. For builders, this enables monitoring of the onchain record of storage provider performance.

## What builders are using it for

AI agents and autonomous systems. Agents need persistent, verifiable storage for data, logs, and artifacts — and they need to pay for it programmatically without credit cards or centralized accounts. Point an AI agent to the [CLI and AI agent skills](https://github.com/FIL-Builders/foc-cli) that have direct access to Filecoin Onchain Cloud to manage wallets, datasets, and storage providers using the Synapse SDK through natural language. 

AI pipelines and data infrastructure. If your pipeline ingests datasets, runs transformations, or stages model checkpoints and you need to prove what touched what and when then that record exists on Filecoin Onchain Cloud, is public, and can't be altered retroactively.

Decentralized applications and websites. [Web3 dApps](https://ens.domains/blog/post/decentralized-websites) storing user-generated content, application state, or frontend assets can guarantee persistence and auditability without centralized pinning or opaque servers. [Filecoin Nova](https://focify.me) is a proof of concept that lets developers host websites directly on Filecoin Onchain Cloud. 

## Why this matters now

Autonomous agents introduce storage constraints that traditional systems simply weren't designed for. Filecoin Onchain Cloud unlocks:

- Verifiable execution logs. Every storage action on Filecoin Onchain Cloud produces an onchain record. Agents can reference transparent, audit-ready logs of what they did, on what data, and when.
- Designed for autonomous workloads. Filecoin Onchain Cloud runs on programmable payment rails with storage agreements that execute onchain, payments that settle automatically as proofs succeed, with no credit cards or no centralized accounts. Built for the day where agents are first-class cloud users.
- No credit cards or centralized accounts. Filecoin Onchain Cloud enables direct onchain storage agreements between agents and providers with no intermediaries.

Filecoin Onchain Cloud is enabling builders to tackle agent observability across sessions, A2A interoperability via ERC-8004, and tamper-evident reasoning traces accessible to other agents. The foundational building blocks are live on mainnet today. For teams actively building in this space, the [Agents: Requests for Startups](https://filecoin.cloud/agents) page outlines open opportunities for builders, from agentic storage SDKs to onchain agent registries to agent reputation systems built on provable data.

For AI pipeline builders, if your pipeline ingests datasets, runs transformations, or stages model checkpoints and you need to prove what touched what and when, that record exists, is public, and can't be altered retroactively. 

For all builders, Filecoin Onchain Cloud continuously tests every participating storage provider against performance thresholds. If any of those fail then the provider is removed. See the full approval [methodology](https://github.com/FilOzone/dealbot/blob/main/docs/checks/production-configuration-and-approval-methodology.md). 

## Start building

Launch your storage workflow in minutes, with the [Synapse SDK](https://docs.filecoin.cloud/getting-started/?utm_source=synapse-sdk&utm_medium=blog&utm_campaign=mainnet). The pipeline runs in three stages:

### Step 1: Upload your first file

Bash:

```shell
npm install @filoz/synapse-sdk viem
```

JavaScript:

```javascript
import { Synapse } from "@filoz/synapse-sdk"
import { mainnet } from "@filoz/synapse-core/chains"
import { privateKeyToAccount } from "viem/accounts"

const synapse = Synapse.create({
  account: privateKeyToAccount("0x..."),
  source: "my-app",
  chain: mainnet,
})

// Prepare account — computes exact deposit and approval for your data size
const prep = await synapse.storage.prepare({
  dataSize: BigInt(file.byteLength),
})
if (prep.transaction) await prep.transaction.execute()

// Upload — stores 2 copies across independent providers
const { pieceCid, copies } = await synapse.storage.upload(file)
console.log(`Stored on ${copies.length} providers | PieceCID: ${pieceCid}`)
```

The Synapse SDK is JavaScript/TypeScript, runs in Node.js and the browser, and has a React integration package.

Try pointing an AI Agent with the [CLI and AI agent skill](https://github.com/FIL-Builders/foc-cli) for direct access to Filecoin Onchain Cloud to manage wallets, datasets, and storage providers using the Synapse SDK through natural language. 

### Step 2: See where your data landed

After uploading your data, you'll get back a storage provider ID. Look up your storage provider and their live performance at [filecoin.cloud/service-providers](https://filecoin.cloud/service-providers).

### Step 3: Verify your proof

Use your DataSet ID to check proof status and confirm your storage provider has not faulted in the [PDP Explorer](http://pdp.vxb.ai/mainnet). This is verifiability in action and the heart of Filecoin Onchain Cloud with onchain proof that the storage provider holds exactly what they're being paid to store.

## What's live, what's coming

Live on mainnet today. Two independent replicas across separate providers. PDP proofs verify data onchain every 24 hours. Payments halt automatically if proofs stop. The Synapse SDK, early access to [Filecoin Pay](https://pay.filecoin.cloud/mainnet), and PDP Explorer are all supported on mainnet.

Cheap early pricing. Storage starts at $2.50 per TiB per month per copy, with two independent copies by default. Take advantage of the lowest cost decentralized storage offering!

Coming soon. SLA hardening from live performance data. Full developer support channels. Deeper tooling for agentic development workflows. Improvements to the payment flow and PDP Explorer.

Post-GA. Automated repair with fault-triggered re-replication from healthy copies without manual intervention.

Further out. Sealed backup copies via Proof of Replication (PoRep) alongside hot replicas for higher durability.

We invite builders running early production workloads to build alongside us! If you’re hitting edge cases or bugs, please tell us what's missing. [Share your feedback and help shape](https://forms.fillout.com/t/2ZrChwnCqAus?utm_source=slack) the roadmap.

## Get started

Build your first storage deal in just 5 minutes with the [Synapse SDK Quickstart](https://docs.filecoin.cloud/getting-started/?utm_source=synapse-sdk&utm_medium=blog&utm_campaign=mainnet).

## Current hackathons

[PL Genesis — Frontiers of Collaboration Hackathon](https://pl-genesis-frontiers-of-collaboration-hackathon.devspot.app/?activeTab=overview) — Deadline is March 31. Two bounties map directly to what's being built on FOC: Agent Only and Agents With Receipts — ERC-8004, which connects directly to the agent identity and observability infrastructure described above. If you're exploring the [Request for Startups program](https://filecoin.cloud/agents?utm_source=blog&utm_medium=owned&utm_campaign=mainnet), this is your on-ramp.

[World Build Labs](https://worldbuildlabs.com) - A Worldcoin program for founders building hyperscale apps on the data layer for AI. Applications are open through April 23. 
