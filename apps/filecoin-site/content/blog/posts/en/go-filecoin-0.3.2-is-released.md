---
aliases:
  - /blog/go-filecoin-0.3.2-release/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-07-09T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We’re happy to announce go-filecoin 0.3.2. This release is a big step towards
  completing the filecoin storage protocol.
image:
  alt: go.filecoin 0.3.2
  url: /uploads/gofc-032-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/gofc-032-english-social.webp
title: go-filecoin 0.3.2 is released
_template: blog_detail
---

We’re happy to announce go-filecoin 0.3.2. This release is a big step towards completing the filecoin storage protocol. It includes many changes to the miner actor builtin smart contract that will allow the network to securely account for verifiable storage power once fault handling is in place. Many less visible but high impact code and testing improvements ship with this release. 0.3.2 also includes a big UX improvement with the new and improved `go-filecoin deals` command for user friendly management of storage deals. Getting paid as a storage miner is now as simple as a single CLI call.

## Features

### 🏇 Storage protocol nearing completeness

Our number one goal is a network securely powered by verifiable storage. In order for this to work we need to penalize cheating miners who do not prove their storage on time. This release includes most of the groundwork needed, including fundamental data structures and encoding work for tracking sets of sectors, improved power tracking in the miner actor built-in smart contract, and charging fees for late storage proof (PoSt) submissions.

### 👪 Multiple sector sizes

In order for the network to scale gracefully, different miners may choose from a variety of different sector sizes to put data in and prove over: smaller sectors for faster and more nimble storage; larger sectors for slower but efficient storage. This release includes all of the software updates we need to support multiple sector sizes in a single network; however, we plan to properly vet network conditions with much bigger sectors before enabling multiple sectors sizes in the user devnet. Expect 1 GiB sectors on the user devnet in the next release.

### 🤝 Deal management and payments

Both clients and miners can now easily inspect the fine details of all storage deals they have entered into using `go-filecoin deals list` and `go-filecoin deals show`. Miners can get paid for honoring a deal by running `go-filecoin deals redeem`. Additionally this release ships some improvements in payment channel safety for correct arbitration of deal disputes we want down the road.

## Performance and Reliability

### 🌳 Upgrade in place

This release drives home previous work on repo migrations. The `go-filecoin-migrate` tool (included in the go-filecoin source repo) is now complete. This release includes a proof of concept migration: upgrading on-disk chain metadata from JSON to the more compact CBOR. Landing this means we are confident that this major technical challenge is behind us, putting us one step closer to a reliable, persistent testnet.

## Refactors and Endeavors

### 📈Major testing improvements

Testing is the silent champion of reliability and development speed. This release includes [tons of](https://github.com/filecoin-project/go-filecoin/pull/2972) [behind](https://github.com/filecoin-project/go-filecoin/pull/2700) [the scenes](https://github.com/filecoin-project/go-filecoin/pull/2990) [work](https://github.com/filecoin-project/go-filecoin/pull/2919) improving the quality of existing unit and integration tests as well as adding new tests to existing code. Continued improvements to the [FAST](https://github.com/filecoin-project/go-filecoin/tree/master/tools/fast) framework promise to further accelerate integration testing and devnet deployments.

### 💳 Tech debt paydown

This release is not playing around when it comes to paying off technical debt. Fundamental chain refactors include an [improved immutable tipset type](https://github.com/filecoin-project/go-filecoin/pull/2837) and tipset cache sharing are at the top of the list. A major refactor of the [message](https://github.com/filecoin-project/go-filecoin/pull/2798) [handling](https://github.com/filecoin-project/go-filecoin/pull/2796) [system](https://github.com/filecoin-project/go-filecoin/pull/2795) into inbox and outbox queues is also a notable improvement. Don’t forget about a consistent internal attoFIL token type, a sleek new miner deal acceptance codepath, sector builder reliability fixes… the list goes on. We are excited to be shipping higher quality software with each release so that we can move faster towards a robust mainnet.

## Changelog

A full list of [all 207 PRs in this release](https://github.com/search?p=2&q=is%3Apr+merged%3A2019-05-09..2019-07-05+repo%3Afilecoin-project%2Fgo-filecoin+repo%3Afilecoin-project%2Frust-fil-proofs+repo%3Afilecoin-project%2Fspecs&type=Issues), including many bugfixes not listed here, can be found on GitHub.

## CLI diff

| go-filecoin command | change |
| ------------------- | ------------ |
| deals list | added |
| deals redeem | added |
| deals show | added |
| miner pledge | removed |
| mining status | added |
| show block | args changed |

## Contributors

❤️ Huge thank you to everyone that made this release possible! By alphabetical order, here are all the humans who contributed to this release:

- [@a8159236](https://github.com/a8159236) (3 issues, 2 comments)
- [@Aboatlai](https://github.com/Aboatlai) (1 issue)
- [@acruikshank](https://github.com/acruikshank) (6 commits, 8 PRs, 21 issues, 23 comments)
- [@AkshitV](https://github.com/AkshitV) (1 issue, 2 comments)
- [@alanshaw](https://github.com/alanshaw) (1 comment)
- [@AndyChen1984](https://github.com/AndyChen1984) (1 issue, 5 comments)
- [@anorth](https://github.com/anorth) (22 commits, 24 PRs, 40 issues, 163 comments)
- [@arielgabizon](https://github.com/arielgabizon) (1 issue, 2 comments)
- [@benrogmans](https://github.com/benrogmans) (1 issue)
- [@bvohaska](https://github.com/bvohaska) (1 PR, 1 comment)
- [@callmez](https://github.com/callmez) (1 comment)
- [@carsonfly](https://github.com/carsonfly) (2 issues, 7 comments)
- [@chengzhigen](https://github.com/chengzhigen) (2 issues, 2 comments)
- [@chenhonghe](https://github.com/chenhonghe) (1 issue, 5 comments)
- [@chenxiaolin0105](https://github.com/chenxiaolin0105) (1 issue)
- [@chenzhi201901](https://github.com/chenzhi201901) (2 issues, 1 comment)
- [@codecov-io](https://github.com/codecov-io) (57 comments)
- [@Cryptovideos](https://github.com/Cryptovideos) (1 issue)
- [@dannyhchan](https://github.com/dannyhchan) (4 comments)
- [@dayu26](https://github.com/dayu26) (1 issue)
- [@decentralion](https://github.com/decentralion) (3 commits, 1 PR, 6 comments)
- [@deltazxm](https://github.com/deltazxm) (2 comments)
- [@dignifiedquire](https://github.com/dignifiedquire) (76 commits, 25 PRs, 14 issues, 139 comments)
- [@DrPeterVanNostrand](https://github.com/DrPeterVanNostrand) (1 commit, 1 PR, 2 comments)
- [@eshon](https://github.com/eshon) (1 issue, 8 comments)
- [@frrist](https://github.com/frrist) (14 commits, 18 PRs, 10 issues, 46 comments)
- [@gnunicorn](https://github.com/gnunicorn) (23 commits, 3 PRs, 1 issue, 17 comments)
- [@grandhelmsman](https://github.com/grandhelmsman) (3 issues, 2 comments)
- [@idotial](https://github.com/idotial) (1 issue)
- [@imrehg](https://github.com/imrehg) (1 PR, 1 comment)
- [@ingar](https://github.com/ingar) (5 commits, 6 PRs, 7 comments)
- [@ipfsmainofficial](https://github.com/IPFSMain-Official) (1 issue)
- [@jscode017](https://github.com/jscode017) (1 comment)
- [@Kentix](https://github.com/Kentix) (1 issue, 2 comments)
- [@kishansagathiya](https://github.com/kishansagathiya) (1 PR, 2 comments)
- [@Kubuxu](https://github.com/Kubuxu) (1 commit, 1 PR, 1 comment)
- [@laser](https://github.com/laser) (45 commits, 41 PRs, 24 issues, 97 comments)
- [@maybeuright](https://github.com/maybeuright) (1 comment)
- [@meiqimichelle](https://github.com/meiqimichelle) (1 comment)
- [@michellebrous](https://github.com/michellebrous) (1 comment)
- [@mishmosh](https://github.com/mishmosh) (3 commits, 2 PRs, 2 issues, 20 comments)
- [@mslipper](https://github.com/mslipper) (5 commits, 1 PR, 8 comments)
- [@nicola](https://github.com/nicola) (2 commits, 1 PR, 4 issues, 11 comments)
- [@nijynot](https://github.com/nijynot) (1 commit, 1 comment)
- [@no1lcy](https://github.com/no1lcy) (1 issue, 1 comment)
- [@ognots](https://github.com/ognots) (6 commits, 5 PRs, 1 issue, 11 comments)
- [@Peachooo](https://github.com/Peachooo) (2 issues, 1 comment)
- [@pooja](https://github.com/pooja) (12 commits, 5 PRs, 9 issues, 45 comments)
- [@porcuquine](https://github.com/porcuquine) (8 commits, 4 PRs, 7 issues, 42 comments)
- [@R-Niagra](https://github.com/R-Niagra) (1 issue, 1 comment)
- [@ridewindx](https://github.com/ridewindx) (1 commit, 1 PR)
- [@RobQuistNL](https://github.com/RobQuistNL) (2 comments)
- [@rogerlzp](https://github.com/rogerlzp) (1 comment)
- [@rosalinekarr](https://github.com/rosalinekarr) (15 commits, 15 PRs, 3 issues, 36 comments)
- [@schomatis](https://github.com/schomatis) (22 commits, 11 PRs, 3 issues, 28 comments)
- [@shannonwells](https://github.com/shannonwells) (8 commits, 8 PRs, 5 issues, 11 comments)
- [@sidke](https://github.com/sidke) (13 commits, 1 comment)
- [@Stebalien](https://github.com/Stebalien) (1 commit, 1 PR, 1 comment)
- [@sternhenri](https://github.com/sternhenri) (4 PRs, 1 issue, 24 comments)
- [@steven004](https://github.com/steven004) (1 commit, 1 PR, 3 issues, 7 comments)
- [@taoshengshi](https://github.com/taoshengshi) (2 issues, 6 comments)
- [@taylorshuang](https://github.com/taylorshuang) (2 issues, 6 comments)
- [@titilami](https://github.com/titilami) (3 issues, 2 comments)
- [@travisperson](https://github.com/travisperson) (3 commits, 3 PRs, 6 issues, 25 comments)
- [@urugang](https://github.com/urugang) (1 issue)
- [@vhosakot](https://github.com/vhosakot) (1 comment)
- [@vmx](https://github.com/vmx) (3 commits, 4 PRs, 14 comments)
- [@vyzo](https://github.com/vyzo) (1 comment)
- [@warpfork](https://github.com/warpfork) (3 comments)
- [@waynewyang](https://github.com/waynewyang) (3 commits, 4 PRs, 1 issue, 3 comments)
- [@whyrusleeping](https://github.com/whyrusleeping) (72 commits, 15 PRs, 11 issues, 73 comments)
- [@windemut](https://github.com/windemut) (1 issue, 5 comments)
- [@yangjian102621](https://github.com/yangjian102621) (2 issues, 5 comments)
- [@yusefnapora](https://github.com/yusefnapora) (1 comment)
- [@ZenGround0](https://github.com/ZenGround0) (9 commits, 9 PRs, 23 issues, 37 comments)
- [@zixuanzh](https://github.com/zixuanzh) (1 PR)

## 🙌🏽 Want to contribute

Would you like to contribute to the Filecoin project and don’t know how? Here are a few places you can get started:

- Check out the [Contributing Guidelines](https://github.com/filecoin-project/go-filecoin/blob/master/CONTRIBUTING.md)
- Look for issues with the `good-first-issue` label in [go-filecoin](https://docs.google.com/document/d/1dfTVASs9cQMo4NPqJmXjEEX-Ju_M9Vw-4AelN1aHOV8/edit#) and [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs/issues?q=is%3Aissue+is%3Aopen+label%3A "good+first+issue")
- Join the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat), introduce yourself in #\_fil-lobby, and let us know where you would like to contribute
- Join the [user devnet](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started)

## ⁉️ Do you have questions

The best place to ask your questions about go-filecoin, how it works, and what you can do with it is at [discuss.filecoin.io](https://discuss.filecoin.io/). We are also available at the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat).
