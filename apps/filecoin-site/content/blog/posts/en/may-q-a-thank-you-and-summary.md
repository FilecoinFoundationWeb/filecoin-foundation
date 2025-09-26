---
aliases:
  - /blog/may-q-and-a-thank-you/
author: ""
categories:
  - events
cover_feature: false
date: "2020-05-21T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On May 18, 2020, we hosted another AMA with Juan Benet and other developers of
  the Filecoin Project. Thanks to everyone who joined! Over the course of one
  hour, we received 291 questions and were able to answer 46, ranging from
  roadmap and timing updates to details on verified clients, hardware
  requirements, and the latest on testnet incentives. Nearly 1,400 Filecoin
  community members participated in the session or checked the recap on Slido.
image:
  alt: May Q&A Thank You
  url: /uploads/qa-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/qa-english-social.webp
title: May Q&A thank you and summary
_template: blog_detail
---

On May 18, 2020, we hosted another AMA with Juan Benet and other developers of the Filecoin Project. Thanks to everyone who joined! Over the course of one hour, we received 291 questions and were able to answer 46, ranging from roadmap and timing updates to details on verified clients, hardware requirements, and the latest on testnet incentives. Nearly 1,400 Filecoin community members participated in the session or checked the recap on Slido.

Below, we have included some of the most frequent and relevant questions from our Q&A. We look forward to doing more sessions like this as we gear up for mainnet launch! In the meantime, stay tuned for updates on the [Filecoin Blog](https://filecoin.io/blog/). You can also find us on Wechat (Filecoin-Official), [Filecoin Slack](https://join.slack.com/t/filecoinproject/shared_invite/zt-dj58b7fq-weyaTEvjHoYF_ENkQHR6Ig), and [Twitter](https://twitter.com/Filecoin).

## Summarized questions and answers

Most questions and answers are quoted directly; some are edited for readability.

### Testnet

**When can I join the testnet? When will Testnet Phase 2 start?** _You can join testnet phase 2 today! It started Thursday, May 14, and you can join at any time. Visit the_ [_Filecoin docs site_](https://docs.filecoin.io/) _for instructions on how to get started._

**When will the testnet reset? Will the mainnet launch as scheduled?** _There is still some work to do before the protocol is frozen for mainnet. We are shifting toward work on performance and UX issues, as well as the last sprint of protocol work._

_Safety and security of the Filecoin protocol, implementations, and network is our top priority. We will not launch Filecoin until we are convinced it is safe._

_You can see our most recent_ [_Roadmap Update_](https://filecoin.io/blog/roadmap-update-april-2020/) _for more information on launch estimates. Note: These are **estimates**; mainnet launch is **not scheduled yet**. We will announce on our blog when we have a final launch date._

**What is the current interop status of two interoperable filecoin implementations, filecoin & Lotus?** _Go-filecoin and Lotus are currently interoperating on Testnet Phase 2. We discover issues as they turn up, and patch them, but they are currently fully interoperable._

### Cryptoeconomics

**What do you mean by “committed capacity sector”? How can I avoid committing the wrong committed capacity just for the rewards?** _Glad you asked! When there is no storage demand on the network, miners can choose to prove Committed Capacity sectors that can be later upgraded into a sector with real deals to earn deal payment (with no lock up). It should be more rational for miners to seal Committed Capacity sectors than to self-deal when there is no storage demand._

**What are the parameters of verified data? How does the Filecoin team judge the validity of storage?** _This is a question related to Verified Clients – which we haven’t explained very well yet._

_To answer the question briefly, the verification is not meant to verify the data itself, but verify the client and trust the client to a certain amount of data. This is a pragmatic solution to a very difficult problem of distinguishing malicious fake deals from real client deals, and being able to incentivize correct operation of the network._

_First, please note that data from unverified clients is still just fine and profitable, and acceptable to the network. It just likely won’t be as profitable to mine as data from verified clients._

_Cheating is solved by a network of incentives:_

- _there must be a lot of verifiers_
- _verifiers trust real clients up to some reasonable amount of data based on the client’s application (not unlimited)_
- \_verifiers themselves are checked to be doing accurate work. If they do not, they lose their ability to verify.
  – Juan\_

**NetworkBaseLine setting is critical. What kind of criteria are being considered? e.g. how long do you expect the network could achieve a defined target?** _A lot is going into it and we will finalize network parameters on a later date. It’s great for us to see baseline running in testnet and block reward has 7x since testnet launch! We hope you find it encouraging too._

**When will the details of the cryptoeconomics be released?** _We published a_ [_blog post_](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/) _describing the overall cryptoeconomic structure. Many of these mechanisms are already in testnet and we encourage you to experiment with them! We hope to write up more detailed descriptions of each mechanism on a later date. Parameters will only be finalized after all core mechanisms are completed and tested._

**When will detailed economic model parameters be determined?** _Detailed parameters will only be released after all core features are completed and tested thoroughly on testnet. Current parameters in testnet are temporary placeholders._

### Proofs and Hardware

**Which sector sizes are supported for the official launch and when will the hardware standards be published?** _The sector sizes and hardware standard will be figured out shortly after the final decision between NSE and SDR – as it depends on this._

**Will ASIC chips be officially supported? If so, when? And will the current demand for GPU during sealing process disappear?** _Nobody that we know of is developing ASICs. We specifically chose PoRep algorithms to be good with commodity hardware, not ASICs._

_The only ASIC we have considered to develop in the future is a VDF ASIC, with Ethereum 2._

_Note that PoRep and consensus algorithms will likely change and evolve after Mainnet, so ASICs would probably not work anymore and be wasted – we target commodity hardware – Juan_

**After the current Stacked DRG PoRep (SDR) algorithm is changed to NSE algorithm, does AMD server sealing still have advantages? Would an Intel server have the same performance?** _It’s very difficult to benchmark algorithms before they are fully developed and have final parameters. Once NSE is ready for benchmarking, we will make an announcement in Slack. That said, current constructions do involve SHA hashing at some stages, so CPUs with SHA extensions will benefit during those stages._

**When will we switch to (Narrow Stacked Expander) NSE sealing?** _NSE is work in progress, we are still evaluating. We hope to be done evaluating soon (before testnet2 incentives). We don’t want anybody to waste any money so please be careful and don’t buy lots of hardware one way or another. – Juan_

### Filecoin as a Product

**What’s the status of retrieval mining?** _You can already be paid FIL in exchange for retrieval requests. For some additional retrieval strategies, check out community-developed tools like Textile’s Powergate. We expect more retrieval mechanisms to be proposed and developed in the future, as protocol changes, tools, and services._

**When will Filecoin be able to store warm data?** _Filecoin can already store warm data with the Filecoin payment channels, and with dev tools like the Powergate. That warm data can be served quickly, and we expect that to work very well for Web3 apps. If NSE ends up working out, that will bring Storage Market data to be warmer, though still not warm enough. We expect future PoRep constructions to get faster and faster, and Filecoin researchers already have proposals, but not in time for mainnet._

**Is the customer data stored in the node directly or distributed after slicing?** _Client data is directly sealed into sectors stored by the mining node. Splitting the data into pieces and/or storing multiple copies with different providers is at the discretion of the client. We expect Filecoin client software to emerge that automates redundant long-term storage._

**If a client has a 1GB data to store, will a 32GB sector be independently generated to store it or will it be cobbled together with the data of other users?** _It could be either, at the discretion of the storage miner. There is no explicit mechanism for a client to request a dedicated sector._

**If a miner’s hard disk previously stored his or her own data, could that data be overwritten after getting a deal from a verified user?** _The storage market distinguishes “committed capacity” sectors (with no client deals) from sectors storing client data. Committed capacity sectors will upgradeable to replace the zero data with client data (this mechanism is not yet fully implemented). However, sectors with any deals (regardless if the client is the miner itself) cannot be replaced with “verified deals” – only empty committed capacity sectors can be upgraded._

**How does the Filecoin network handle requests for content removal? If I’m a storage provider, what is my liability here?** _Filecoin is a protocol to help coordinate file storage between a decentralized network of storage providers and clients. The network cannot delete files off participants’ computers. However, we are working on a robust set of tools to help users control the types of data they are willing to store and serve from their own machines._

**If the valid user data stored in the hard disk has expired (the storage period in the storage order has expired), can the miner delete the data?** _Yes, when all deals in a sector have expired and it has reached the end of its declared lifetime, a sector may be terminated and the storage used to seal a new sector._

**If user data is pieced together, metadata must be generated to mark the sector and location where the user data is located. Where does this metadata exist?** _The sector storage module used by Lotus and Go-filecoin stores metadata about sectors and deals in a key-value datastore, separate from the sectors themselves._

### Incentives

**Will you have any incentives for testnet miners? Required/recommended hardware (2TB, 8 core CPU, 128GiB ram) is costly.** _Yes, there will be a testnet competition and miners will have an opportunity to earn significant amounts of Filecoin. To participate, miners should be prepared to store and retrieve real files for clients and perform sector lifecycle upgrades._

**How will you distribute FIL for testnet incentives?** _We will announce the final structure of testnet incentives very soon! If you’re interested in participating, we strongly recommend you set up your mining operation to compete for storage and retrieval deals from real users._

### Other

**In addition to the Filecoin Discover program, are there any other important pre-launch plans for the official launch of the main network?** We are seeing very strong ecosystem activity from a wide variety of groups that want to build on Filecoin. These groups help grow and augment each of the following primary Filecoin stakeholders: developers, clients, token holders, partners, and miners. A few exciting examples include [Textile’s Powergate Platform](https://www.youtube.com/watch?v=aiOTSkz_6aY&feature=youtu.be), [Glif web wallet](https://filecoin.io/blog/community-jonathan-schwartz-owl/), and [Starling Storage](https://starlingstorage.io/). Stay tuned for more announcements in the coming months.

**Will you design and develop official mining software?** The Filecoin Project develops the [sector storage module](https://github.com/filecoin-project/sector-storage) which is used by both Lotus and Go-filecoin. Miner operators are free to customize or re-implement as they see fit.

**How many full-time R&D employees are there in the lotus and go-filecoin projects?** The Filecoin project has about 50 total engineers and researchers on the core team working on the various components of the implementations, not including folks working on supporting protocols like libp2p and IPFS. Apart from the core team, there are dozens of folks in external groups working on various parts of the protocol - from building developer tooling protocol, security audits, performance improvements, etc. Finally, there are hundreds of external contributors in the open-source community that make meaningful contributions to the project.

**What is the biggest technical difficulty at present?** The filecoin protocol is relatively complicated, with many interacting parts. The greatest difficulty is ensuring the many parts are working together in harmony to implement a secure and useful protocol.
