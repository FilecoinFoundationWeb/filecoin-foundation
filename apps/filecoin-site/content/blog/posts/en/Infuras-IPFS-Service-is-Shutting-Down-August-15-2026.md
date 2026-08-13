---
title: Infura's IPFS Service Is Shutting Down. Here’s How to Move to Storage That Can Prove It.
excerpt: 'Infura is ending its IPFS service. Here’s how to rescue your CIDs first. '
date: 2026-08-12T17:00:46.403Z
categories:
  - updates
  - interviews
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

On August 15, 2026, Infura is ending its IPFS service.

After that date, the IPFS API (`ipfs.infura.io:5001`) and every \*`.infura-ipfs.io` dedicated gateway goes offline. New uploads and pinning already stopped on August 3. Only the IPFS product is affected. Infura accounts and the other APIs keep working.

When a pinning service goes away, your data doesn't just need a new home — every link pointing to it breaks. Here's how to get your pins off Infura with their CIDs intact, then put them somewhere that proves it still holds them.

If your app resolves content through an Infura endpoint, or your pins were used as a backup, this is a hard deadline. A block Infura stops serving on August 15 can't be recovered afterwards.

## The Migration Guide

When you download your files, re-upload them somewhere else, and get new CIDs, all of its previous onchain references break. New CIDs mean every existing link, every onchain reference, every pointer embedded in someone else's app is now wrong. You've moved the data and broken the web around it.

Content addressing helps prevent this: the identifier is derived from the data and its structure. Preserve the structure exactly, and the CID stays the same. Re-chunk it, and it doesn't.

To rescue your data at the block level, walk each pinned DAG block by block, verify every block against its CID, and write it to a CAR file, the standard IPFS archive format. That's content plus exact structure, which is what keeps your CIDs unchanged.

`infura-rescue` does that in one command.

## Step 1: Get the Data Out by August 15

See what your account holds first. This writes an inventory to roots.txt and downloads nothing:

npx infura-rescue --project-id \<ID> --project-secret \<SECRET> --list-only

Then run the full rescue:

npx infura-rescue --project-id \<ID> --project-secret \<SECRET>

You need your Infura project ID and project secret, Node.js 18+, and enough free disk. No IPFS node to run. Set the credentials as `INFURA_PROJECT_ID` and `INFURA_PROJECT_SECRET` environment variables rather than pasting a secret into a chat window or a shared doc.

The script writes one deterministic CAR per pinned item under `infura-rescue-out/cars/`, cryptographically verifying every block as it goes. Two runs produce byte-identical archives, so backups are safe to compare and deduplicate.

* **Interrupted?** Re-run the same command. Completed items are skipped.
* **Rate limited?** Drop the parallelism with `--workers 4`.
* **Failures?** `failed-blocks.txt` and `incomplete-roots.txt` list anything unreachable. Re-run until it reports clean — as soon as possible, not on the 15th.
* **Millions of pins?** Pin listing can exceed what a single response handles. If `--list-only` hangs, get in touch rather than hammering it.

When it reports that every pinned DAG is fully saved, your data is on disk. To browse a CAR or serve it over IPFS, import it into any node: `ipfs dag import <file>.car.`

### Step 2: Put the Data Somewhere That Proves It

A folder on your laptop is a backup, not a storage service. The second step has no clock on it, because the data is already safe.

Filecoin Onchain Cloud is live on mainnet. Storage providers hold your data and prove onchain that they still have it with Proof of Data Possession (PDP), not an SLA and a status page. Your content stays retrievable over public IPFS gateways under the same CIDs, so existing links keep working.

CAR files are exactly what Filecoin tooling consumes:

* Filecoin Pin (`filecoin-pin`) — set up payments, then upload each rescue CAR as-is with `filecoin-pin import`. Use `import`, not `add`: add re-chunks files and changes your CIDs, undoing the work of step 1.
* ipfs2foc — bulk migration for large inventories. Feed it your `roots.txt`, and it packs small items into \~1 GiB units to keep onchain costs low, streams to two storage providers, and produces a verifiable receipt.

Storage runs about $4.55 per TB per month across two replicas.

### The pattern behind the deadline

Pinning services get discontinued. Gateways get deprecated. Products get sunset three quarters after the roadmap said otherwise. Every time it happens, the links break and a little more of the web rots.

Filecoin was built as the world's largest decentralized storage network for exactly this failure mode, and the onchain cloud is where that guarantee becomes something you can verify on a public ledger rather than something asserted in a support ticket.

Infura's shutdown is a small instance of a large problem. Fix the small one this week.

**Get started:** [github.com/FilOzone/infura-rescue](https://github.com/FilOzone/infura-rescue)
