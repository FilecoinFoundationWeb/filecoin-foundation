---
title: Infura's IPFS Service Is Shutting Down. Here’s How to Preserve Your CIDs.
excerpt: 'Infura is ending its IPFS service. Here’s how to rescue your CIDs first. '
date: 2026-08-12T17:00:46.403Z
categories:
  - updates
  - interviews
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

Infura's IPFS service shuts down on August 15. If your application depends on content pinned or served through Infura, you need to move it before then without changing its CIDs.

After that date, the IPFS API (`ipfs.infura.io:5001`) and every `*.infura-ipfs.io` dedicated gateway goes offline. New uploads and pinning already stopped on August 3. Only the IPFS product is affected; Infura accounts and Infura's other APIs will keep working.

Moving your data isn't enough. You need to preserve your CIDs. Those CIDs may already be referenced in applications, smart contracts, metadata, or other systems you don't control. Without careful migration, every one of those references now points to content that doesn't exist. A block Infura stops serving on August 15 can't be recovered afterward.

## Don’t Just Move to Another Pinning Provider

The instinct is to treat this like a change of address: find another pinning service, point your app at it, done. But that just resets the clock. Pinning services get discontinued, gateways get deprecated, and the same failure repeats the next time a vendor changes its roadmap.

Content addressing is what makes the rescue possible in the first place since the identifier is derived from the data and its exact structure, so preserve that structure and the CID holds. That property is the thing worth protecting. It's also the reason where you land matters as much as how you get there.

Filecoin Onchain Cloud is built for exactly this failure mode: storage providers hold your data and prove — onchain, continuously — that they still have it, rather than asserting it in a status page. Moving your CIDs there gets you three things a pinning service can't guarantee:

* **Same CIDs**. Existing IPFS references, onchain or off, keep resolving. Nothing downstream has to change.
* **Verifiable persistence**. Storage providers prove they continue holding your data through Proof of Data Possession (PDP).
* **Open retrieval**. Content stays retrievable through the IPFS ecosystem itself, not a single company's gateway.

That's the difference between migrating and fixing the underlying problem.

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
