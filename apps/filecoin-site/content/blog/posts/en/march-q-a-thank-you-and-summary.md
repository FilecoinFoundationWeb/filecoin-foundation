---
aliases:
  - /blog/march-q-and-a-thank-you/
author: ""
categories:
  - updates
cover_feature: false
date: "2020-03-10T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Thanks to everyone who participated in our March 5 Q&A about the Filecoin
  project! We answered more than 100 questions in our 1-hour session (fast and
  furious typing!). We fielded questions on topics ranging from hardware
  requirements, for mining to our timeline for Testnet Phase 2 and mainnet
  launch, to the inner workings of our proofs constructions.
image:
  alt: Q&A Thank You
  url: /uploads/mining-call-may2020-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/mining-call-may2020-english-social.webp
title: March Q&A thank you and summary
_template: blog_detail
---

Thanks to everyone who participated in our March 5 Q&A about the Filecoin project! We answered more than 100 questions in our 1-hour session (fast and furious typing!). We fielded questions on topics ranging from hardware requirements, for mining to our timeline for Testnet Phase 2 and mainnet launch, to the inner workings of our proofs constructions. You can find an updated summary of the most frequent and relevant questions below.

More than 1,200 Filecoin community members participated in the session or checked the recap on Slido. Special thanks to those who joined us from our mining communities across Asia!

We’re looking forward to having more sessions like these as we get closer to mainnet launch. In the meantime, stay tuned for updates on the [Filecoin Blog](https://filecoin.io/blog/). You can also find us on Wechat (Filecoin-Official), [Filecoin Slack](https://join.slack.com/t/filecoinproject/shared_invite/zt-dj58b7fq-weyaTEvjHoYF_ENkQHR6Ig), and [Twitter](https://twitter.com/Filecoin). Onwards!

## Summarized questions and answers

Most questions and answers are quoted directly, some are edited for readability.

### Roadmap & Timing

**I did not participate in the testnet phase 1. Do you recommend I wait for the start of phase 2 to participate?**

_No, phase 2 will not be drastically different than phase 1. I don’t think it would be a waste of time if you got set up on phase 1 today :)_

**The launch time of the Filecoin main network has been delayed several times. How likely is it that the Filecoin mainnet will launch in July?**

_At present time, the current launch times in the_ [_public gantt chart_](https://app.instagantt.com/shared/s/1152992274307505/latest) _are our best estimates. Latest – we are currently very confident in this timeframe, and do not foresee any further delays. Our team is working around the clock to launch the mainnet in that time frame. We will gain even more confidence as we reach testnet phase 2, and start the mainnet launch countdown._

_Know that we want to launch Filecoin more than anyone. The delays are disappointing for everyone, especially us. But our most critical requirement for mainnet launch is that Filecoin is secure and functions well. Everyone is counting on us to do this._ – Juan

**What is the impact of the worldwide epidemic on the project? And how great might the impact be towards the launch?**

_Great question. We are not sure yet. We have made our plans to work through the epidemic, and don’t anticipate any impact. However it is possible that if the situation gets drastically worse either our development teams or the community of miners may be severely affected. We will see how things develop. We hope everyone will be safe and not get sick! After launch, we won’t be able to do much – the network will go on with whoever is able to participate. Hopefully this epidemic will slow down soon! Stay safe!_ – Juan

**Currently, the barrier for common people to participate in testnet is high. What will you do to lower the barrier and how will you balance mainnet safety and popularity?**

_Three answers:_

- **_Storage Mining_**_: We expect storage miners of many sizes. We expect small storage mining to be possible – in the ranges of 100s of TB. We expect it to get easier as Proofs-of-Replication get cheaper to do. That said, most serious clients will want their data stored in safe, well-maintained storage racks, and not in people’s small computers. Smaller miners may be preferred for their location, for pricing, or to keep additional copies. I would expect larger miners that run very good and reliable operations to be preferred by larger clients. That’s ok because small miners are better tuned for retrieval mining (below)._
- **_Retrieval Mining_**_: Smaller miners that are well located will be able to do retrieval mining – store data and serve it quickly. Think of people with computers in their homes or offices, in densely populated cities – the latency will be much lower to them than to a datacenter in a far-away city or another country. This is less developed right now, since we want to get everything out sooner, but you’ll see some of this working in a more fleshed out way soon. You can already pay for retrieval with payment channels; now anybody can store things and serve them. We expect very small miners to be able to participate to great effect this way._
- **_Other roles:_** _We expect other mining roles to develop over time – many kinds of computation or activity in the network can develop over time. For example things like repair, or caching, or aggregation can become mining roles for smaller miners._

– Juan

**Why are you considering adding support for the go-filecoin client implementation? Can you explain some advantages and disadvantages of go-filecoin and lotus?**

_There will be several implementations of Filecoin._ [_ChainSafe _](https://chainsafe.io/)[_is developing _](https://medium.com/chainsafe-systems/announcing-forest-chainsafes-implementation-of-filecoin-in-rust-675d176be517)[_Forest_](https://github.com/ChainSafe/forest)_,_ [_Soramitsu_](https://soramitsu.co.jp/) _is developing_ [_Fuhon_](https://github.com/filecoin-project/cpp-filecoin)_, and_ [_Protocol Labs_](https://protocol.ai/) _is developing_ [_Lotus_](https://github.com/filecoin-project/lotus) _and_ [_Go-Filecoin_](https://github.com/filecoin-project/go-filecoin)_. Having multiple implementations is common in blockchain networks for security, for feature specialization, and for decentralization. Bitcoin, Ethereum, and other networks have many implementations as well._

_We expect at least two Filecoin clients to be ready by mainnet launch. Lotus and go-filecoin are currently the most advanced, but Fuhon (C++) and Forest (Rust) are both developing rapidly._

- **_Security_**_. Launching the Filecoin network with multiple implementations is a key part of our network security strategy. Having multiple software implementations that interoperate on the same network reduces the risk that a significant bug in one implementation takes down the entire network. We need multiple implementations of the Filecoin protocol in order to have a much safer and resilient network._
- **_Decentralization_**_. In many blockchain networks, having a number of different implementations of a protocol and different development teams is a great way to decentralize access, and ensure network-wide self-selection and agreement to changes to the protocol. If one party wants to change the protocol, all other implementations in wide use, and the miners who run the implementations, need to agree to the change and update their software. No centralized party can control the protocol – it must be the network together which decides to upgrade the protocol, by ratifying the change with their agreement to update all the software and run it._
- **_Feature specialization_**_. We expect implementations to develop differently over time, and to prioritize different kinds of users. They may also get a lot of features that other implementations don’t care about. All the users of Filecoin will have many different and conflicting needs for features. Having many implementations helps specialize the offerings – one development team can move forward and build in features or optimizations that others may not want. We hear that some miners are already working on their own in-house specialized implementations, too._

– Juan

### Hardware recommendations

**Will there be significant changes in the hardware recommendations between the first and second testnet stages? If so, what are the specific changes?**

_This is a very important question. As we replied on similar questions: Filecoin will keep improving over time, and that includes proofs. The current parameters are great for testnet, but we will soon be introducing constructions that would be more secure for mainnet. Over time, contributors will likely identify improvements that can make the network even more secure, performant, or scalable. The core purpose of the network – incentivizing the storage and retrieval of files – will not change. So to be direct: In the next stage we will be introducing a new, secure proof which has a different set of tradeoffs and it is still being optimized._

_The goal of Filecoin is for the cost of storage to dominate over the cost of computation in mining operations. We are making performance improvements and we will make future proof changes with that goal in mind._

_Final important note: **Don’t buy hardware at scale until we announce the final mainnet proofs constructions.**_

**Will the 128GB memory recommendation be a hardware requirement in the future?**

_Great question. Our implementation makes some particular tradeoffs. For example, it prefers using more RAM over doing more computation in order to have “fast” sealing. However, this does not have to be true for all miners. We expect contributors will optimize this code for what works best for them._

_There is a lot of space for tradeoffs, just to give you some examples:_

- _For the DRG graph generation, the current implementation already allows to choose between a faster replication time, at the cost of using more RAM, or a slower replication time with less RAM. This is achieved by either precomputing the graph and keeping it in RAM, or calculating the edges on demand._
- _RAM is very fast for computation. If you are willing to have slower sealing, you could offload more of the data onto other storage devices (e.g NVMe) which could help increase throughput of your CPU and reduce the RAM consumption._

_We cannot guarantee that the above optimizations can lead to useful optimizations for your mining setup. We will also try to explore different tradeoffs with our main implementation._

**Will GPUs be necessary to participate in Filecoin in the future?**

_First of all, just to clarify for the other readers: Filecoin mining is NOT Proof-of-Work GPU mining. As we previously said, Filecoin mining is based on storage power consensus. The more client data a Filecoin miner stores, the more that miner’s storage power grows. When a miner increases its proportion of storage power in the network, that means it is more likely to generate blocks and win block rewards._

_Currently GPUs are used to speed up SNARKs in Filecoin proofs. This part is already optional, depending on the tradeoffs you want to make between CPU and GPU performance and cost. We will explore using GPUs for other parts of the proofs implementation as well, to give more flexibility here as well. GPUs make certain computations much faster and cheaper than CPUs. Our team has currently found this solution best meets our strict criteria for protocol performance and security at this time._

**As we all know, many communities in China have invested thousands of servers in Filecoin’s test network, and the recommended configuration of the main network needs to be determined on April 17. Will the purchased servers be the best configuration?**

_We have recommended, and continue to recommend, that groups not purchase lots of hardware until mainnet proofs constructions have been released. Once mainnet proofs are released, we will publish the performance of our testing setups and any conclusions we’ve been able to draw._

**Does mining consume a lot of electricity? What kind of resources are required?**

_Computers use a lot of electricity! But, in general, much of the electricity powering Filecoin mining operations is contributed to providing storage. It’s different from pure proof-of-work cryptocurrencies in that a large portion of the energy used goes towards both providing a useful real-world service and securing the blockchain._

### Protocol & Security

**Filecoin is counting committed sectors as storage power. The committed sectors could contain real user data and just random data (garbage) only. Will sectors with different data contribute different amounts of power, or they will be counted as the same from the mining power point of view?**

_Miners can indeed put any data they want in Committed Capacity sectors but that won’t be recognized by the protocol as sectors with storage deals and hence none of the benefits with on-chain deals. In addition, self-deals (or deals with garbage) are not real, useful deals. It is a very strong goal to prioritize deals with real clients, for real data. More details are coming as we finalize our cryptoeconomic constructions. Remember that Filecoin is a storage service, aiming to provide useful data storage. Filecoin will move to rewarding **useful** data (not garbage) much more than capacity._ – Juan

**Is there any research to avoid SNARK? I believe it’s too heavy for the hardware requirement.**

_This question, although quick and short, is a very deep and important research question. I took some time to reply and I will split it into two questions:_

**Q1: Can we remove SNARKs from our current proofs?**

_We use SNARKs to “compress” our Merkle tree proofs and checking the correctness of some SHA. If we were not to use SNARKs, our proofs would be in the order of hundreds of kilobytes instead of a hundreds of bytes._

_This is because our vector commitment is a Merkle tree and their inclusion proofs, although logarithmic, are still very large (in our proofs a tree has depth 30, which would mean that a single Merkle tree inclusion proof is about \~1kb - we need hundreds of those!)_

_Replacing Merkle trees with better vector commitment could help us avoid using SNARKs. We actually have active researchers and recently released an update on_ [_ePrint_](https://eprint.iacr.org/2020/149) _on better RSA vector commitment. Unfortunately, they are far away from practical :(_

**Q2: Can we make SNARKs less heavy on the hardware?**

_Yes, although it might be work that happened behind the scenes, (1) we made drastic improvements to our SNARK circuits making them much smaller than any other previous constructions (2) we implemented GPU support to go much faster than CPUs._

_We are very committed both as engineers and as researchers to improve SNARKs (in the past year there have been 2 papers authored by Protocol Labs on SNARK improvements) and the crypto community is making major improvements on the SNARKs._

**Regarding election PoSt (ePoSt): TCO of tape is one-sixth of disk, and tape is more fit for Filecoin, but ePoSt currently requires fast storage reads. Is there any plan for going beyond ePoSt? What about VDFs?**

_Very good question! The current construction requires miners to check a small fraction of their storage to look for “tickets” and generate a winning proof. This means that the storage device should be fast enough to perform random reads on time for the block time. We are prioritizing hard-disks at the moment, since we expect most miners to use those storage devices. We hope future versions of the Filecoin consensus can relax this requirement. We are not testing tape at this time._

_Regarding VDFs, we are part of the VDF Alliance alongside the Ethereum Foundation and other organizations. We are funding and supporting research for VDFs; you can read more about our collaboration_ [_in our blog post_](https://filecoin.io/blog/collaboration-on-vdfs/)_. Our constructions currently do not use VDFs, but may do so in the future._

**How will Filecoin keep from being 51% attacked?**

_We all need to make sure that the mining distribution stays decentralized – it is up to all miners competing to keep the network secure. If one miner achieves 51% in bitcoin, ethereum, or filecoin – that’s a problem. Let’s work together to keep a good distribution! Competition helps!_ – Juan

**Is there any arbitration if some content stored on the mainnet violates the local laws? Will the content be removed?**

_The Filecoin protocol is content-neutral, just like TCP/IP. The network itself is not capable of telling the difference between different types of content. It would be impossible to define a set of rules that would work for all users. Instead, we believe in empowering individual choice and making it easy for people to comply with local laws or just their own preferences. Miners can always choose to decline any storage or retrieval request. We’re working to develop tools that will make it easy for people to share and collaborate on lists of content they prefer not to serve._

### Ecosystem

**At present, IPFS has a thriving ecosystem. When do you expect the storage demand for Filecoin to take shape?**

_Storage demand will come from users and applications – all of them will want to see how easy and cheap it is to store data on filecoin. We are already working with a number of clients to add lots of data to the network: large datasets, applications, and more. Already the 4PB in the testnet are very useful to work with people and organizations hoping to store their data on filecoin. The larger the capacity, better reliability, and cheaper storage, the more clients will come. There will be significant demand at launch, but like any service, we first have to prove out the quality of the service together before huge demand comes. This is why the block reward is there: It provides a strong incentive to build out capacity on the network, and then attract large demand._ – Juan

**How are you going to nurture the dapp market to ensure miners’ incomes continue after block rewards decrease in the future?**

_Clients storing data and storage demand are a critical aspect of the network. The construction of the block reward lets us gather capacity, while the network improves and develops for clients’ use. The network has years to improve before the reward diminishes, but it is important to start strong and grow from Day 1._

_Today, many dapp developers within the IPFS ecosystem are excited and looking forward to using Filecoin. Some are already working on integrations, and they will announce when they’re ready to do so. There are also apps being built directly on top of Filecoin – some are public like_ [_Starling_](https://starlingstorage.io/)_. There are also groups building great developer tools. For example, Textile is_ [_developing a lot of great tools openly_](https://blog.textile.io/)\_.

_Beyond dapps and apps, there is also massive storage demand that will come from big data storage users. Think of the large users and clients of cloud storage services, or data archival services. There are many efforts under way to gather huge volumes of data and store them on Filecoin. If you know of companies or organizations who would be good as early adopters, refer them to the project and tell us about it._

_There is much more news coming around dapps, developer tools, and storage demand on Filecoin. Stay tuned!_ – Juan

### Other

**What gave you the idea for Filecoin? Was it always an extension of IPFS or did you start off with something different?**

_Yes, from the very beginning, I got the sense of using a cryptocurrency to incentivize distribution. I wanted to keep it separate, though, because many information distribution forms do not require money. The old IPFS paper (draft 2 or 3) has an oblique reference to cryptocurrency (and hence filecoin :) )_ – Juan

**What are your thoughts on peer-to-peer architectures for internet connectivity? I’m talking about the ability to access webpages through IPFS instead of the legacy IP stack. Do you see Protocol Labs making any leeway here? (Keep up the awesome work, Juan!)**

_Check out:_ [_libp2p_](https://libp2p.io/)_,_ [_IPFS companion_](https://github.com/ipfs-shipyard/ipfs-companion)_, and IPFS gateway – you can already browse all the IPFS content from all major web browsers, both via ipfs/{tcp,quic}/ip and via http/tcp/ip_

_See_ [_https://ipfs.tech/#install_](https://ipfs.tech/#install "https://ipfs.tech/#install") _– try out companion. Also, the Filecoin website itself is already hosted and served via IPFS through the gateway :)_ – Juan

**Hey Juan! I’m a big fan of your work, especially the Interplanetary File System (IPFS). I loved your talk at the** [**IPFS Ethereum Hackathon**](https://github.com/MetaMask/IPFS-Ethereum-Hackathon) **hosted by MetaMask, Seattle 2017 –** [**“Enter the Merkle Forest”**](https://www.youtube.com/watch?v=Bqs_LzBjQyk) **– and thought it was eye-opening to see what IPLD can accomplish. Would you mind elaborating the grander vision for IPLD and its role in peer-to-peer architectures?**

_Yes! Thank you! The potential for IPLD is huge – think of an internet of data structures, where applications can interlink data, and we can reduce the siloing of information. Imagine having many different applications using the same data sources and adding to your own personal or organizational data repository. This will get easier as things like Textile Threads and 3box develop further. Stay tuned for a lot of exciting developments this year and next. I will try to give a talk about the vision for this in the coming months._ – Juan
