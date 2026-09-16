---
title: Real world assets are onchain. What about the data behind them?
excerpt: 'A reference architecture for verifiable offchain data for tokenized assets using Avalanche, IPFS and Filecoin'
date: 2026-09-16T16:05:42.306Z
categories:
  - updates
double_column_mode: false
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

Tokenizing a real world asset (RWA) puts ownership and transactions onchain. But the token is only one piece of the asset. The information that establishes what it represents, such as deeds, title records, certifications, appraisals, disclosures, and other supporting documentation, typically remains offchain in conventional databases and cloud storage.

That creates a structural infrastructure challenge for RWAs: how do you cryptographically tie an onchain asset to the offchain records supporting it, while letting anyone verify that those records haven’t changed and remain available?

That matters especially for assets like private credit and structured products, where a relatively simple onchain representation can sit above a much larger body of underlying documentation that investors, issuers, and applications may need to inspect over time.

Using Avalanche, Interplanetary File System (IPFS), and Filecoin together, engineers in the Filecoin ecosystem, built a working reference architecture to address that problem and it's now live on public testnets, open source, and free to adapt.

### A hybrid architecture for real world assets

| Layer             | Role                                                     | Output                                             |
| ----------------- | -------------------------------------------------------- | -------------------------------------------------- |
| RWA source record | Deed, title, appraisal, certification, disclosure        | The document                                       |
| IPFS              | Content-addresses the record                             | A CID (content identifier) derived from the bytes  |
| Filecoin          | Persists the underlying data                             | Verifiable storage, backed by cryptographic proofs |
| Avalanche         | References the CID from the onchain asset or application | Onchain state and transactions                     |

The result is a durable link between an onchain asset and the exact offchain data it represents. Verification here means that specific content was persisted and that what you retrieve matches its CID. None of these layers judges whether a deed is legitimate. That's a deliberate boundary: the issuer stays the record of authority.

This builds on the [Avalanche and Filecoin cross-chain data bridge](https://www.filecoin.io/blog/new-avalanche-x-filecoin-data-bridge-unlocks-cross-chain-value), live since May 2025, which connects Avalanche's C-Chain to the Filecoin network.

**See it in action: [a property record](https://sgtpooki.github.io/Avalanche-IPFS-Filecoin-RWA-reference-Architecture/) **

The working example publishes a synthetic property record set for 123 Main Street, Fairview, issued by a fictional county recorder: a deed, a survey, a parcel file and two tax assessments. 

Each document is content-addressed with IPFS, stored on Filecoin, and listed in a manifest whose CID is anchored on Avalanche. It runs live on Avalanche Fuji and Filecoin Calibration (both testnets), and trying it doesn’t require a wallet.

### How it works

1. Store the source record. An issuer adds an offchain record: a deed, appraisal, or certification.
2. Create a content-addressed reference. IPFS derives a CID from the content itself. Change the record, and the CID changes too.
3. Persist it on Filecoin. The data is stored with cryptographic proofs of continued storage.
4. Reference it from Avalanche. The application anchors the CID alongside the relevant asset or transaction.
5. Verify independently. Anyone can retrieve the record and confirm it matches the CID the application referenced.

**What happens if the record changes?**

Because the CID is derived from content, editing the underlying document produces a different identifier:

| Document                            | CID                                                         |
| ----------------------------------- | ----------------------------------------------------------- |
| deed.pdf (original)                 | bafkreidh5qsi5z6uo2thzvynr27ioajoviafqiveunrielhugyj65l6rzu |
| deed-tampered.pdf (one line edited) | bafkreiausintabvl4n4hvgv2jdmazvy35bg26gku2ufu2bosxhrd7dzxqi |

In the demo's "Check a document" view, either file is hashed in the browser and nothing is uploaded. The edited copy comes back flagged as not a document of record. 

Filecoin stores the record and keeps proving it's still there. That lets anyone check it themselves whether the record has been altered.

### Why this matters for RWA

Real world assets often carry more supporting data than belongs directly onchain. The opportunity here is to create a cryptographically verifiable relationship between an onchain asset and the offchain information supporting it.

In a hybrid onchain/offchain architecture, the token can represent ownership or transactions while the underlying evidentiary record remains too large, complex, or sensitive to live directly onchain. A content addressing and verifiable storage layer like Filecoin give applications a way to reference that record without collapsing the two layers together:

* **Integrity**: verify that the supporting record being retrieved is the same content the application originally referenced.
* **Persistence**: keep supporting data available beyond the lifecycle of any single application, database, or cloud account.
* **Portability**: reference the same content-addressed data across applications and infrastructure.

### Build it yourself

The implementation is open source, with a registry contract on Avalanche Fuji and a data set [you can inspect directly](https://pdp.filecoin.cloud/calibration/dataset/54), including its Filecoin storage proofs.

 Verification needs no private key, wallet, or funds:

```
git clone https://github.com/SgtPooki/Avalanche-IPFS-Filecoin-RWA-reference-Architecture.git
cd Avalanche-IPFS-Filecoin-RWA-reference-Architecture
npm ci
npm run verify

```

### Building real world assets on Avalanche?

Available now: the reference architecture for verifiable offchain data for tokenized assets and [working demo](https://docs.filecoin.io/build-on-filecoin/cookbook/rwa-reference-architecture). 

We’re looking for RWA teams to apply this architecture to production data. Talk to the Filecoin team at [filecoin.cloud/contact](https://filecoin.cloud/contact).
