---
title: New IPFS Tools Launch on Filecoin
excerpt: Migrate pinned CIDs to Filecoin unchanged
date: 2026-09-30T20:12:28.204Z
categories:
  - updates
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

Filecoin was built from day one to persist the InterPlanetary File System (IPFS): cryptographic proof that content-addressed data is actually still there. That's been the idea since before the network existed. Thousands of developers already rely on IPFS to host websites, apps, datasets, and agents, and today new tools make that premise ready to use right now.

## Storing IPFS data? You might be paying too much to pin.

IPFS doesn't promise that your data sticks around on its own. Nothing on the network is obligated to keep a copy, so most people pay a pinning service (such as Pinata, or previously Infura or Storacha) to guarantee their files stay hosted and reachable, the way you'd pay for web hosting. You can now get that same guarantee from Filecoin: your pinned IPFS data, same CIDs, no changes needed, at roughly a third the cost of the cheapest pinning alternative we compared. 

## Step one: [Meet IPFS → Filecoin](http://filecoin.cloud/ipfs2filecoin)

Migrate your existing CIDs from any public IPFS gateway.

* **Your CIDs don't change**. Nothing is re-chunked. Every CID stays byte-identical and keeps resolving from any public IPFS gateway.
* **A fraction of pinning-service pricing**. $2.50 per TiB per month per copy, two copies by default. You pay storage providers directly, streamed per epoch, with no plan tiers and no minimum commitment. 
* **Verifiable proof**. Storage providers prove possession onchain on a schedule. You get a receipt with transaction links, and you can check any piece yourself.
* **Your wallet holds it.** No signup and no vendor account to lose. The data set belongs to your wallet address.
* **Reading never touches your key**. Retrieval works straight from any public IPFS gateway, so your content stays reachable no matter what happens to that wallet.

If you're already paying a vendor to pin data you don't fully control, this is a way to keep the same links working while holding the guarantee yourself, at a fraction of the price.

The process is scriptable, too. You can hand a coding agent like Claude Code or Cursor a single line and let it read the migration guide and run the steps itself. 

## Step two: pin everything new on [Filecoin Pin](https://docs.filecoin.io/build-on-filecoin/cookbook/filecoin-pin) from now on.

**Filecoin Pin** connects IPFS and Filecoin directly, persisting content-addressed data on a verifiable storage network, with no separate migration step required.

It's available now as a CLI, JS library, and GitHub Action, with dedicated [migration guides](https://docs.filecoin.io/build-on-filecoin/cookbook/filecoin-pin/migrate-ipfs-pins) for moving pins from any IPFS gateway, including a [command-line walkthrough](https://docs.filecoin.io/build-on-filecoin/cookbook/filecoin-pin/migrate-ipfs-pins/command-line).

You use Filecoin Pin the way you'd use any pinning service. The difference is what's underneath: proofs run onchain where anyone can check them, and the storage itself is spread across a decentralized network of providers instead of living on one company's servers. 

When you pin a file through Filecoin Pin, your IPFS content is uploaded to an audited Filecoin storage provider. Each provider must verify continuous data storage and access. Payments and uptime are handled automatically through Filecoin Pay. If proofs fail, streaming payments pause.

### Who's already migrating to Filecoin

Teams are already choosing to store their pinned IPFS data on Filecoin, from NFT platforms to institutions with legal and compliance obligations around their data. 

**Large-scale content platforms**. Some products embed IPFS CIDs directly into customer-facing records at a scale where a single point of failure becomes a real production risk. NFT platforms are a great example: metadata and media for millions of live tokens, all needing to keep resolving indefinitely. Moving that volume onto Filecoin trades a vendor's uptime promise for onchain proof and a network of dedicated storage providers. [NFTs2Me](https://nfts2me.com/) is a no-code NFT creation platform with more than 2.17 million IPFS CIDs associated with NFT artwork and metadata, now using Filecoin as its storage layer.

"We're responsible for the metadata behind millions of live tokens, and it all has to keep resolving. Filecoin gives us onchain proof that data is stored and available, backed by a global network." - The NFTs2Me Team

**Legal and institutional recordkeeping**. Some organizations reference IPFS links in legal, regulatory, or fiduciary contexts, where a document that stops resolving can mean a broken chain of evidence. For teams like DI GEA Trusts Confederation, persistence is a requirement. Onchain proof gives them something a standard pinning service can't: independent, checkable evidence that the document is still there, rather than a vendor's word for it. This is what brought [DI GEA Trust Confederation](https://www.digea.org/) storing legal and fiduciary documents referenced in court and tribunal contexts onto Filecoin.

"Our documents get referenced in legal and regulatory contexts years after they're filed, so we need real proof they're still there. Filecoin gives us onchain verification we can check ourselves, which is exactly the guarantee our fiduciary work requires." - The DI GEA Trusts Confederation Team

### The infrastructure IPFS gateways sit on is evolving

IPFS public gateway infrastructure is [changing](https://blog.ipfs.tech/2026-08-beyond-sponsored-gateways/) but whatever happens at the gateway layer, the CIDs themselves don't have to depend on it. Once your data is on Filecoin, it stays stored, verifiable, and retrievable.

Migrate your CIDs to Filecoin here: [https://filecoin.cloud/ipfs2filecoin ](https://filecoin.cloud/ipfs2filecoin)
