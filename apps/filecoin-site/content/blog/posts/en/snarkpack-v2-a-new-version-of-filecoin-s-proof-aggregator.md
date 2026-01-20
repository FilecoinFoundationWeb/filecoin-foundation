---
aliases: []
author: ""
categories:
  - updates
date: "2022-08-02T19:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In the recent Filecoin Network v16 Skyr Upgrade, a new version of the
  SnarkPack proof aggregation library was released, this post details the
  updates.
image:
  alt: ""
  url: /uploads/181394788-a04113a5-3d11-4588-8cd2-43a3c46e9047.webp
main_feature_inverted: false
related_article_1: content/blog/posts/filecoin-v16-network-upgrade-skyr.en.md
related_article_2: ""
related_article_3: ""
share_image: /uploads/181394788-a04113a5-3d11-4588-8cd2-43a3c46e9047.webp
title: "SnarkPack v2: A New Version of Filecoin’s Proof Aggregator"
_template: blog_detail
---

In the recent [Filecoin Network v16 Skyr Upgrade](https://filecoin.io/blog/posts/filecoin-v16-network-upgrade-skyr/), a new version of the SnarkPack proof aggregation library was released. This version did not introduce any new functionality, but instead hardened the cryptographic protocol itself. This post details what motivated the examination of the SnarkPack library, the issues we discovered, and how they were resolved and shipped into the Filecoin Network.

## What is SnarkPack

At the heart of the Filecoin protocol are a collection of cryptographic proofs, called [Proofs-of-Replication](https://filecoin.io/blog/posts/what-sets-us-apart-filecoin-s-proof-system/) (PoReps). These PoReps make possible the central promise of the Filecoin network: decentralized, **verifiable** storage.

SnarkPack is a cryptographic protocol to aggregate and verify multiple proofs at the same time in an efficient manner. The Filecoin protocol uses the SnarkPark library on Proofs-of-Replication, allowing for faster onboarding of storage to the network. More information on the SnarkPack library can be found by watching the presentation at [Financial Crypto ‘22](https://www.youtube.com/watch?v=fHQW_SIuv2o), and reading [the corresponding paper](https://research.protocol.ai/publications/snarkpack-practical-snark-aggregation/) or the associated [blog post](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/).

Among the many cryptographic techniques that SnarkPark relies on are Fiat-Shamir transformations. Informally speaking, Fiat-Shamir transformations are a cryptographic technique that remove the need for the _verifier_ of a proof to be communicating with the _prover_ of the statement in question. As these transformations are foundational to the aggregated proofs generated through SnarkPack, any issues with the Fiat-Shamir transformations jeopardize the correctness of SnarkPack itself.

## Frozen Heart vulnerabilities

On Apr 13, 2022, [Trail of Bits](https://www.trailofbits.com/) announced the [disclosure of vulnerabilities](https://blog.trailofbits.com/2022/04/13/part-1-coordinated-disclosure-of-vulnerabilities-affecting-girault-bulletproofs-and-plonk/) that broke the soundness of various proof systems. These vulnerabilities, termed “Frozen Heart” vulnerabilities by the Trail of Bits team, centered on insecure implementations of Fiat-Shamir transformations, and could be exploited by malicious agents to “prove” incorrect statements. Since the Frozen Heart vulnerabilities could be used to attack protocols already in production, they were first disclosed to the various affected projects so that they could be securely remediated.

The announcement motivated the Filecoin cryptography teams to audit the SnarkPack implementation for the same vulnerabilities. This inspection revealed issues of a similar nature to the Frozen Heart vulnerabilities, also based on insecure implementations of Fiat-Shamir transformations. Unlike the aforementioned disclosures, however, the cryptography teams working on Filecoin found no direct attack on the Filecoin protocol that could be launched as a result of these issues. Nevertheless, the team resolved to fix these issues in order to adhere to security best practices, and ensure maximum possible soundness of the proofs that are critical to Filecoin’s security.

## Issues in SnarkPack v1

In order to understand the incorrect aspects of the implementation of SnarkPack v1, we need to dive a little deeper into how Fiat-Shamir transformations work. As discussed earlier, these transformations convert _interactive_ proving systems, that involve the verifier of the proof communicating with the prover, to _non-interactive_ ones. The so-called “interactive” step that is replaced is usually the verifier communicating a random value to the prover that serves as a challenge. Fiat-Shamir transformations allow replacing the interaction with what is called a “Random Oracle” to generate the challenge. In practice, the Random Oracle is replaced by a secure hash function, so the prover can simply hash the public information and the partial outputs to that step, and use the result of the hash as the necessary random value (the so-called “challenge”). It is important that the prover feed as much information as possible into the hash; in particular, the prover should feed in all the values that a verifier would have had access to in the interactive version.

While simple in concept, implementations of Fiat-Shamir transformations require delicate care, because any public information that is _not_ included in the hashing step widens the surface area for an attack. A malicious agent could modify any unhashed public information to produce bogus proofs.

In SnarkPack, when aggregating N proofs, there are log2(N) Fiat-Shamir transformations that need to be performed, in turn requiring log2(N) hashes to perform. Each hash computation must take as input all of the elements that the prover has already generated in the proving process. This can be mocked up in pseudo-code as follows:

    rand = H(...)
    ……
    for i in 0…log2(n):
        A    <- generate_proof_step(i)
        rand <- H(rand, A)
        B    <- generate_post_randomness_step(rand)

Once this process is complete (that is, once the loop terminates after log2(N) steps), there is one last hash that needs to be computed – that is, one last randomness to be calculated. This randomness is then fed into the rest of the SnarkPack protocol. In pseudo-code, this is simply:

    KZG_proof(final_randomness, …)
    final_randomness = H(B)

## The issues

The audit by [CryptoNet](https://cryptonet.org/) revealed two main problems with SnarkPack v1’s implementation of this process:

1. Skipping the first hash generation in the loop: When i=0, the code skips the call to the hash function, and instead reuses the previously generated randomness,from the first line. The ramification is that the first proof element A could be changed by the prover, without having the first randomness change.
2. Skipping the very last randomness generation: This means that the KZG_proof would not be “linked” correctly with the previous steps of the proof.

These issues are relatively benign, since the other random values in the loop are still computed correctly. A hypothetical attacker would thus need to find inputs that match the other computed values in order to forge a meaningful proof. However, wanting to follow security best practices, and given the recent attention drawn to exploits of Fiat-Shamir implementations, we decided to adopt the necessary fixes in the next Filecoin network upgrade.

## Introducing SnarkPack v2 to the network

The fix to both issues described above were made in the Bellperson repository by the [Filecoin Crypto](https://www.notion.so/pl-strflt/FilDev-7d2b7aa348164777bf010becf08c25f0#8f795c8cac094050816e6ad3fa2448d7) team, the pull request that implemented the fix can be found [here](https://github.com/filecoin-project/bellperson/pull/273). For readers who wish to look at the corrected code, we share links to the relevant subsections for Issue A ([prover](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/prove.rs#L335), [verifier](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/verify.rs#L391)). Issue B ([prover](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/prove.rs#L186), [verifier](https://github.com/filecoin-project/bellperson/blob/ff5f39e43cc62481cc575adae628cb7d1124bce8/src/groth16/aggregate/verify.rs#L247)).

In order to properly apply the fixes, while preserving backward compatibility, the API was updated to add an AggregateVersion enumeration. This version is used as a flag to indicate whether we're using the new, more secure, code path (SnarkPack v2) or the legacy code path (SnarkPack v1). Aggregated proofs that landed before the Skyr network upgrade were expected to be v1, while those that landed after the upgrade epoch were expected to be v2. The pull request that implemented this versioning in the proofs implementation can be found [here](https://github.com/filecoin-project/rust-fil-proofs/pull/1608), and was released in version 11.1.0.

The [lotus team](https://www.notion.so/pl-strflt/Lotus-8352bbb6c321431abd8790a7a3401ed3) helped share these issues with the rest of the Filecoin Core Devs at a [core dev meeting](https://github.com/filecoin-project/core-devs). The Core Devs reached consensus that the fix should be introduced into the Filecoin network as soon as possible, and so the introduction of SnarkPack v2 to the Filecoin network [was scoped into the Skyr upgrade](https://github.com/filecoin-project/community/discussions/74?sort=new#discussioncomment-2392151). The builtin-actors implementation that supports SnarkPack v2 can be found [here](https://github.com/filecoin-project/builtin-actors/commit/3027c365f516e1cba6f156d4fb9dbd8c893d5b62), and it is consumed by all client implementations; the reference client implementation can be found [he](https://github.com/filecoin-project/lotus/commit/717d592a3b1418bcf80d3e39dbfd37da9703b8b4)re.

## Security in the Filecoin Network

SnarkPack has been audited by cryptographers within the [PLEngRes](https://www.notion.so/pl-strflt/PL-EngRes-Public-b5086aea86ed4f81bc7d0721c6935e1e) teams, and by other experts. Despite that, given the complexity of the protocol, bugs may still exist! As soon as the Trail of Bits blog posts series went out, we decided to revisit the SnarkPack implementation to make sure the proofs that power the Filecoin network are not vulnerable to the same kind of issues. We want to uphold the highest standard of security in the Filecoin network, and that includes keeping up with the latest security developments and cryptographic vulnerabilities. Filecoin also invites all security and cryptographic researchers to join us in maintaining and stewarding the security of the Filecoin Network; learn more about the [Bug Bounty Program here](https://security.filecoin.io/bug-bounty/).
