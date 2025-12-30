---
aliases: []
author: ""
categories:
  - updates
date: "2022-04-22T04:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We are excited to announce that the Lurk programming language repositories are
  now open to the public.
image:
  alt: ""
  url: /uploads/164675419-d7e226dc-8790-4931-9687-23e985eb9777.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/164675419-d7e226dc-8790-4931-9687-23e985eb9777.webp
title: "Introducing Lurk: A programming language for recursive zk-SNARKs"
_template: blog_detail
---

We are excited to announce that the [Lurk programming language](http://github.com/lurk-lang) repositories are now open to the public. Lurk is a Turing-complete programming language for recursive zk-SNARKs (zero knowledge Succinct Non-interactive ARguments of Knowledge) that will enable new possibilities for SNARK proofs, blockchain consensus, the Filecoin Virtual Machine (FVM), decentralized apps, data integration with IPFS and IPLD, and more.

## Overview

Lurk is a statically scoped dialect of [Lisp](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>), influenced by Scheme and Common Lisp. Its distinguishing feature relative to most programming languages is that correct execution of Lurk programs can be directly proved using zk-SNARKs. The resulting proofs are relatively small, can be verified quickly, and they reveal only the information explicitly contained in the statement to be proved.

In short, Lurk is an accessible language that makes development of programs to be proved much simpler. It will make SNARK programming more accessible — both because the programs that can be written are more 'powerful' than traditional SNARK programs and because writing those programs will become possible for those who are not domain experts.

Lurk was created by Protocol Labs Senior Research Engineer Chhi'mèd Künzang, as an extension of work done to implement Filecoin proofs. In its proof construction, Filecoin uses SNARKs, which are efficient, cryptographically secure mechanisms for proving knowledge. “ZK” (Zero Knowledge), while not a necessary part of Filecoin SNARKs, means that a prover can generate a proof without revealing any information about what is being proved. Filecoin uses SNARKs for both Proof of Replication (PoRep) and Proof of Space-time (PoSt), which are the core cryptographic protocols on which the network depends. (See [this ProtoSchool tutorial](https://proto.school/verifying-storage-on-filecoin) for a high-level introduction to these concepts.) The demands of Filecoin Proofs required us to stretch the previous generation of SNARKs to their limits — while also priming us to seek, recognize, and discover the possibilities of the next generation.

Enter Lurk.

Unlike most zk-SNARK authoring languages, Lurk is Turing complete, so arbitrary computational claims can be made and proved (subject to resource limitations). Because Lurk is a Lisp, its code is simply Lurk data, and any Lurk data can be directly evaluated as a Lurk program. Lurk constructs compound data using SNARK-friendly Poseidon hashes (provided by Neptune), so its data is naturally content-addressable.

Lurk currently supports multiple backend proving systems, specifically, [Groth16](https://eprint.iacr.org/2016/260.pdf) with [SnarkPack+](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/) and [Nova](https://github.com/microsoft/Nova), and supports a number of key features:

- Verifiable computation
- Succinct proofs
- Zero knowledge
- Turing-completeness
- Arbitrary traversal of content-addressable data
- Higher-order functions (e.g. functions as public inputs to computations, with proof)
- Content-addressable data for natural integration with [IPFS](https://ipfs.tech/) and [IPLD](http://ipld.io/)

## Lurk and Filecoin

Lurk could support the development of Filecoin protocols in multiple ways. Lurk integration with the [Filecoin Virtual Machine (FVM)](http://fvm.filecoin.io/), for example, would allow Lurk programs and applications to be verified on the Filecoin blockchain. This would provide Filecoin smart contracts (or actors) with first-class native access to application-specific zero-knowledge provable computation. Filecoin actors could be used to broker, orchestrate, and incentivise long-running Lurk jobs over data stored in the Filecoin network. Further, it would allow proofs that combine public and private data from multiple sources, including Filecoin sectors, private storage, or the chain itself.

Over a longer timeframe, Lurk will enable improvements to [Hierarchical Consensus](https://github.com/protocol/ConsensusLab/blob/main/docs/b1.pdf) in Filecoin. Hierarchical Consensus is a framework to horizontally scale blockchain networks, increasing their throughput and flexibility. In hierarchical consensus, a subset of users can spawn new subnets with independent states and consensus algorithms, while maintaining the ability to seamlessly interact with any other subnet in the system. Subnets leverage the security of their parent chain by periodically committing proofs of the subnet’s state to the parent. This ensures up-to-date global consensus and propagates messages to other subnets in the hierarchy. In the current implementation of hierarchical consensus, the verification of subnet proofs requires full access to the state of that subnet. Lurk could completely remove this dependency by building self-verifiable proofs of the state changes performed in the subnet, which would improve the scalability and flexibility of the system.

## Other Key Players in the Lurk Ecosystem

The Lurk ecosystem includes researchers and development teams supported by [Protocol Labs](http://protocol.ai/) and the [Filecoin Foundation](http://fil.org/).

[Nada Amin](https://namin.seas.harvard.edu/), Assistant Professor of Computer Science at [Harvard SEAS](https://seas.harvard.edu/), is working on turning the Lisp implementation of Lurk into a usable and bootstrapped programming system. Regarding Lurk, she says, “I find the project of creating a universal circuit that implements a Lisp for recursive zero-knowledge proofs exciting because it’s an elegant mapping of Lisp that fits with zk-SNARKs (e.g. hash-cons for cons) and has the potential to democratize zk-SNARKs.”

Researchers and developers of Glow, an in-development programming language whose integration with Lurk is funded by the Filecoin Foundation, are working on a simple domain-specific language for building decentralized apps (DApps). “Normally, some Glow code executes off-chain (i.e., by the users of the DApp) and some executes on-chain (i.e., by the shared consensus),” explains François-René Rideau, President of [Mutual Knowledge Systems](https://mukn.io/), the company developing Glow. “By compiling Glow code to Lurk, we can build proofs off-chain and use the consensus only for verification, thus lowering gas fees, increasing privacy, and improving security and scalability of DApps written in Glow.”

[Yatima](https://github.com/yatima-inc/yatima), also funded by the Filecoin Foundation, is a dependently typed functional programming language and theorem prover implemented in Rust featuring substructural types, metaprogramming, and content addressing via IPFS. Yatima's AST is encoded using the IPLD format, which allows Yatima programs to be easily shared over the IPFS network, stored in Filecoin, and deterministically evaluated on any WASM platform, including on the web, and in blockchain runtimes.

Yatima is working with Lurk to allow for zero-knowledge verification of arbitrary compile-time computations. Formal proofs are expressive, but can be expensive to verify. By compiling the verifier of these formal proofs to Lurk, and therefore to zk-SNARKs, Yatima can enable constant-time and constant-space verification of formal proofs.

With a talented team of researchers and engineers, and a growing ecosystem of contributors, we are excited about the future of Lurk.

## More to come

Over the next couple of months, we’ll be unveiling a Lurk website and blog, which will dive more deeply into the technical features of and historical background behind Lurk. To stay informed of these developments, be sure to follow [@Filecoin](https://twitter.com/filecoin) and [@ProtoResearch](https://twitter.com/ProtoResearch) on Twitter.

To learn more, visit the [Lurk repos on GitHub](http://github.com/lurk-lang).
