---
aliases:
  - /blog/go-filecoin-0.2.2-release/
author: ""
categories:
  - updates
cover_feature: false
date: "2019-05-17T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We’re happy to announce go-filecoin 0.2.2. go-filecoin is the Go
  implementation of the Filecoin protocol. The up-to-date changelog can always
  be found at go-filecoin/CHANGELOG.md.
image:
  alt: go.filecoin 0.2.2
  url: /uploads/gofc-022-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/gofc-022-english-social.webp
title: go-filecoin 0.2.2 is released
_template: blog_detail
---

We’re happy to announce go-filecoin 0.2.2. go-filecoin is the Go implementation of the [Filecoin protocol](https://github.com/filecoin-project/specs). The up-to-date changelog can always be found at [go-filecoin/CHANGELOG.md](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md).

This release is heavy on behind-the-scenes upgrades, including support for filesystem repo migrations and storage disputes, a better message pool, proofs improvements, and bumps to libp2p and go-libp2p-kad-dht versions for more reliable relays and DHTs. User-facing improvements such as new commands and options, better status messages, and lots of bugfixes are also included. Get pumped!

## Install and Setup

### ⌛ Chain syncing status

When a filecoin node is first created, it must download and verify the chain. We call this “chain syncing”. While initial commands (such as tapping the faucet or dashboard streaming) can be run immediately, any other commands (such as mining commands) will return errors until chain syncing is complete. Currently, this can take several hours.

To clarify, we’ve added [wiki updates](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started#wait-for-chain-sync), better status messages, and cleaner console output for chain syncing. In future releases, we’ll also address the underlying problem of slow chain syncing.

### 💠 Sector storage configuration

Where would you like the filecoin node to store client data? You can now choose! There are two ways to specify the location of the sector storage directory: the `sectorbase.rootdir` config entry, or the `--sectordir` option to `go-filecoin init`.

If you don’t specify a location, data is stored in `$HOME/.filecoin_sectors` by default. More details are in the [wiki](https://github.com/filecoin-project/go-filecoin/wiki/Mining-Filecoin#advanced-options).

## Features

### 🍄 Upgradeable repo

In addition to sealed client data, Filecoin nodes also store other data on-disk such as configuration data, blockchain blocks, deal state, and encryption keys. As development progresses, we need a way to safely change the type and schema of this data. In this release, we include an accepted [design](https://docs.google.com/document/d/1THzh1mrNCKYbdk1zP72xV8pfr1yQBe2n3ptrSAYyVI8/) for filesystem repo migrations, and an initial layout for the migration tool. This paves the way for filecoin nodes to seamlessly update when running in production.

For more information, check out the help text:

    tools/migration/go-filecoin-migrate --help

### 💎 Storage payments

This release includes work towards storage protocol dispute resolution. Payment channels can now contain conditions that will query another actor before a voucher is redeemed. Payment channels can also be canceled by the payer. This will trigger an early close if the target of the channel does not redeem a payment. These features can be used together with piece inclusion proofs (coming soon) to enforce proof of storage when storage clients pay storage miners.

### 🐛 New debugging commands

Three new commands (`inspect`, `protocol`, and `bitswap`) are now available for your debugging and exploring adventures:

- `go-filecoin inspect all` prints all the necessary information for opening a bug report on GitHub. This includes operating system details, your current go-filecoin config, and a few other commonly needed stats.
- `go-filecoin protocol` prints details regarding parameters for a node’s protocol, such as autoseal interval and sector size. These are helpful for debugging some of the internals of Filecoin’s proofs and protocol systems.
- `go-filecoin bitswap` prints details about a node’s libp2p bitswap system, such as blocks, data, and messages received and sent. These are commonly used in network debugging.

For more details, run any command followed by the `--help` flag.

## Performance and Reliability

### 🙌 Upgrade libp2p to 0.0.16

libp2p recently landed a bunch of improvements to relay functionality, addressing heavy resource usage in some production relay nodes. We’ve upgraded to [go-libp2p](https://github.com/libp2p/go-libp2p) 0.0.16 to enjoy the same fixes in filecoin.

### 🌳 Upgrade go-libp2p-kad-dht to 0.0.8

After the 0.2.1 release, we found a bug in the dht ([#2753](https://github.com/filecoin-project/go-filecoin/issues/2753)) that caused some nodes to panic. This was fixed by bumping the [go-libp2p-kad-dht](https://github.com/libp2p/go-libp2p-kad-dht) version from 0.0.4 to 0.0.8 ([#2754](https://github.com/filecoin-project/go-filecoin/pull/2754)).

### 📬 Better message validation

We’ve taken several steps to harden the message pool. The pool now rejects messages that will obviously fail processing due to problems like invalid signature, insufficient funds, no gas, or non-existent actor. It also tracks nonces to ensure that messages are correctly sequenced, and that no account has too many messages in the pool. Finally, the pool now limits the total messages it will accept.

### 🔗 Proofs integration

Behind the scenes, much groundwork has been laid for more flexible and powerful storage proofs. This release includes more efficient memory utilization when writing large pieces to a sector. It also includes initial support for piece inclusion proofs, [multiple sector sizes](https://github.com/filecoin-project/go-filecoin/issues/2530), and [variable proof lengths](https://github.com/filecoin-project/go-filecoin/pull/2607).

### 🔮 Proofs performance

Over in `rust-fil-proofs`, progress is accelerating on more complete and efficient implementations. This includes switching to [mmap for more efficient merkle trees](https://github.com/filecoin-project/rust-fil-proofs/pull/529), [abstractions over the hasher](https://github.com/filecoin-project/rust-fil-proofs/pull/543), [limiting parallelism when generating groth proofs](https://github.com/filecoin-project/rust-fil-proofs/pull/582), and [calculating](https://github.com/filecoin-project/rust-fil-proofs/pull/621) and [aggregating](https://github.com/filecoin-project/rust-fil-proofs/pull/605) challenges across partitions.

## Refactors and Endeavors

### 🏁 FAST (Filecoin Automation & System Toolkit)

We have significantly improved the FAST testing system for Filecoin since the last release. FAST now automatically includes relevant log data and messages from testing nodes in the event of a test failure. FAST also has an all-new localnet tool to quickly and easily set up local Filecoin node clusters for testing and experimentation. See [the localnet readme](https://github.com/filecoin-project/devgrants/blob/master/README.md) for details.

### 👾 Go modules

With Go 1.11’s preliminary support for versioned modules, we have switched to [Go modules](https://github.com/golang/go/wiki/Modules) for dependency management. This allows for easier dependency management and faster updates when dealing with updates from upstream dependencies.

### 😍 Design documents

We regularly write [design docs](https://github.com/filecoin-project/designdocs/blob/master/designdocs.md) before coding begins on important features or components. These short documents are useful in capturing knowledge, formalizing our thinking, and sharing design intent. Going forward, you can find new design docs in the [designdocs](https://github.com/filecoin-project/designdocs/) repo.

## Version notice

go-filecoin 0.2.1 was released on May 8, 2019 and included most of the changes above. Shortly after, maintenance release 0.2.2 was created to address a bug in the dht ([#2753](https://github.com/filecoin-project/go-filecoin/issues/2753)) that caused some filecoin nodes to panic.

As a reminder, only the latest version of go-filecoin will connect to the user devnet until model for change work is complete. Users must be running go-filecoin 0.2.2 to connect to the user devnet.

## Changelog

A full list of [all 177 PRs in this release](https://github.com/search?q=is%3Apr+merged%3A2019-03-26..2019-05-10+repo%3Afilecoin-project%2Fgo-filecoin+repo%3Afilecoin-project%2Frust-fil-proofs+repo%3Afilecoin-project%2Fspecs&type=Issues), including many bugfixes not listed here, can be found on GitHub.

## Contributors

❤️ Huge thank you to everyone that made this release possible! By alphabetical order, here are all the humans who contributed to this release via the `go-filecoin`, `rust-fil-proofs`, and `specs` repos:

- [@814556001](https://github.com/814556001) (1 comment)
- [@a8159236](https://github.com/a8159236) (3 issues, 9 comments)
- [@aaronhenshaw](https://github.com/aaronhenshaw) (1 issue, 1 comment)
- [@AbelLaker](https://github.com/AbelLaker) (2 issues, 2 comments)
- [@acruikshank](https://github.com/acruikshank) (47 commits, 24 PRs, 42 issues, 81 comments)
- [@aioloszcy](https://github.com/aioloszcy) (2 issues)
- [@alanshaw](https://github.com/alanshaw) (1 commit, 1 PR, 4 comments)
- [@anacrolix](https://github.com/anacrolix) (2 commits, 2 PRs, 17 comments)
- [@andrewxhill](https://github.com/andrewxhill) (1 issue)
- [@AndyChen1984](https://github.com/AndyChen1984) (5 issues, 9 comments)
- [@anorth](https://github.com/anorth) (61 commits, 65 PRs, 46 issues, 340 comments)
- [@arcalinea](https://github.com/arcalinea) (1 issue, 4 comments)
- [@arielgabizon](https://github.com/arielgabizon) (1 issue)
- [@arsstone](https://github.com/arsstone) (1 PR, 1 issue, 6 comments)
- [@aschmahmann](https://github.com/aschmahmann) (4 comments)
- [@bigs](https://github.com/bigs) (1 comment)
- [@block2020](https://github.com/block2020) (5 issues, 1 comment)
- [@btcioner](https://github.com/btcioner) (2 comments)
- [@bvohaska](https://github.com/bvohaska) (1 commit, 1 PR, 6 issues, 26 comments)
- [@Byte-Doctor](https://github.com/Byte-Doctor) (1 issue)
- [@cgwyx](https://github.com/cgwyx) (2 comments)
- [@comradekingu](https://github.com/comradekingu) (1 commit, 1 PR)
- [@contrun](https://github.com/contrun) (4 commits, 5 PRs, 1 issue, 7 comments)
- [@craigbranscom](https://github.com/craigbranscom) (1 issue)
- [@creationix](https://github.com/creationix) (1 comment)
- [@Cyanglacier](https://github.com/Cyanglacier) (1 issue)
- [@Daniel-Wang](https://github.com/Daniel-Wang) (1 commit, 1 PR, 1 comment)
- [@danigrant](https://github.com/danigrant) (2 commits, 2 PRs)
- [@dayou5168](https://github.com/dayou5168) (6 issues, 17 comments)
- [@dayu26](https://github.com/dayu26) (1 comment)
- [@deaswang](https://github.com/deaswang) (1 comment)
- [@decentralion](https://github.com/decentralion) (1 issue, 12 comments)
- [@deltazxm](https://github.com/deltazxm) (1 issue, 5 comments)
- [@dignifiedquire](https://github.com/dignifiedquire) (49 commits, 32 PRs, 16 issues, 151 comments)
- [@diwufeiwen](https://github.com/diwufeiwen) (3 issues, 3 comments)
- [@djdv](https://github.com/djdv) (2 comments)
- [@DonaldTsang](https://github.com/DonaldTsang) (1 issue)
- [@EbonyBelle](https://github.com/EbonyBelle) (1 comment)
- [@ebuchman](https://github.com/ebuchman) (1 issue)
- [@eefahy](https://github.com/eefahy) (1 comment)
- [@ElecRoastChicken](https://github.com/ElecRoastChicken) (2 comments)
- [@fengchenggang1](https://github.com/fengchenggang1) (1 issue)
- [@firmianavan](https://github.com/firmianavan) (1 commit, 2 PRs, 3 comments)
- [@fjl](https://github.com/fjl) (4 comments)
- [@frrist](https://github.com/frrist) (100 commits, 51 PRs, 44 issues, 111 comments)
- [@gfc-test](https://github.com/gfc-test) (1 PR)
- [@gmas](https://github.com/gmas) (12 commits)
- [@gmasgras](https://github.com/gmasgras) (22 commits, 19 PRs, 14 issues, 35 comments)
- [@gnunicorn](https://github.com/gnunicorn) (1 comment)
- [@haadcode](https://github.com/haadcode) (1 issue)
- [@hango-hango](https://github.com/hango-hango) (1 comment)
- [@haoglehaogle](https://github.com/haoglehaogle) (1 issue)
- [@hsanjuan](https://github.com/hsanjuan) (3 commits, 2 PRs, 7 comments)
- [@ianjdarrow](https://github.com/ianjdarrow) (5 comments)
- [@imrehg](https://github.com/imrehg) (7 issues, 4 comments)
- [@ipfsmainofficial](https://github.com/IPFSMain-Official) (1 issue, 1 comment)
- [@irocnX](https://github.com/irocnX) (1 issue, 1 comment)
- [@jamiew](https://github.com/jamiew) (1 comment)
- [@jaybutera](https://github.com/jaybutera) (1 issue)
- [@jbenet](https://github.com/jbenet) (1 commit, 4 issues, 8 comments)
- [@jcchua](https://github.com/jcchua) (1 issue, 1 comment)
- [@jesseclay](https://github.com/jesseclay) (1 issue, 1 comment)
- [@jhiesey](https://github.com/jhiesey) (1 issue)
- [@jimpick](https://github.com/jimpick) (1 issue, 3 comments)
- [@joshgarde](https://github.com/joshgarde) (4 comments)
- [@jscode017](https://github.com/jscode017) (2 commits, 2 PRs, 4 issues, 17 comments)
- [@karalabe](https://github.com/karalabe) (1 issue, 4 comments)
- [@kishansagathiya](https://github.com/kishansagathiya) (1 issue, 4 comments)
- [@Kostadin](https://github.com/Kostadin) (1 commit, 1 PR)
- [@Kubuxu](https://github.com/Kubuxu) (13 commits, 9 PRs, 8 comments)
- [@lanzafame](https://github.com/lanzafame) (2 commits, 1 PR, 1 issue, 4 comments)
- [@laser](https://github.com/laser) (73 commits, 64 PRs, 77 issues, 178 comments)
- [@leinue](https://github.com/leinue) (1 issue, 1 comment)
- [@lidel](https://github.com/lidel) (3 comments)
- [@lin6461](https://github.com/lin6461) (2 issues, 5 comments)
- [@linsheng9731](https://github.com/linsheng9731) (1 issue)
- [@loulancn](https://github.com/loulancn) (1 issue, 1 comment)
- [@Luca8991](https://github.com/Luca8991) (1 issue)
- [@madper](https://github.com/madper) (1 commit, 1 PR)
- [@magik6k](https://github.com/magik6k) (4 commits, 4 PRs, 9 comments)
- [@MariusVanDerWijden](https://github.com/MariusVanDerWijden) (2 comments)
- [@markwylde](https://github.com/markwylde) (2 issues, 5 comments)
- [@mburns](https://github.com/mburns) (1 PR)
- [@mhammersley](https://github.com/mhammersley) (3 issues, 15 comments)
- [@mikeal](https://github.com/mikeal) (1 PR, 1 issue, 2 comments)
- [@mishmosh](https://github.com/mishmosh) (21 commits, 8 PRs, 35 issues, 159 comments)
- [@mkky-lisheng](https://github.com/mkky-lisheng) (1 issue, 1 comment)
- [@moyid](https://github.com/moyid) (4 comments)
- [@mslipper](https://github.com/mslipper) (9 commits, 11 PRs, 7 issues, 51 comments)
- [@muronglaowang](https://github.com/muronglaowang) (8 issues, 7 comments)
- [@Nanofortress](https://github.com/Nanofortress) (1 issue, 4 comments)
- [@NatoBoram](https://github.com/NatoBoram) (3 issues, 9 comments)
- [@nicola](https://github.com/nicola) (17 commits, 5 PRs, 7 issues, 25 comments)
- [@nijynot](https://github.com/nijynot) (1 PR)
- [@ognots](https://github.com/ognots) (56 commits, 37 PRs, 19 issues, 86 comments)
- [@olizilla](https://github.com/olizilla) (1 commit, 1 PR)
- [@Pacius](https://github.com/Pacius) (1 issue)
- [@pengxiankaikai](https://github.com/pengxiankaikai) (7 issues, 15 comments)
- [@phritz](https://github.com/phritz) (13 commits, 11 PRs, 50 issues, 366 comments)
- [@pkrasam](https://github.com/pkrasam) (1 issue, 1 comment)
- [@pooja](https://github.com/pooja) (5 commits, 1 PR, 11 issues, 95 comments)
- [@porcuquine](https://github.com/porcuquine) (62 commits, 25 PRs, 31 issues, 246 comments)
- [@protocolin](https://github.com/protocolin) (1 issue)
- [@pxrxingrui520](https://github.com/pxrxingrui520) (1 issue)
- [@rafael81](https://github.com/rafael81) (2 commits, 2 PRs, 1 issue, 3 comments)
- [@raulk](https://github.com/raulk) (4 commits, 5 PRs, 22 comments)
- [@redransil](https://github.com/redransil) (1 issue)
- [@RichardLitt](https://github.com/RichardLitt) (1 commit, 1 PR)
- [@ridewindx](https://github.com/ridewindx) (2 commits, 2 PRs)
- [@rjan90](https://github.com/rjan90) (1 comment)
- [@RobQuistNL](https://github.com/RobQuistNL) (1 issue, 7 comments)
- [@rosalinekarr](https://github.com/rosalinekarr) (38 commits, 39 PRs, 48 issues, 157 comments)
- [@sanchopansa](https://github.com/sanchopansa) (2 comments)
- [@sandjj](https://github.com/sandjj) (5 issues, 8 comments)
- [@SaveTheAles](https://github.com/SaveTheAles) (1 issue, 3 comments)
- [@schomatis](https://github.com/schomatis) (47 commits, 22 PRs, 12 issues, 173 comments)
- [@scout](https://github.com/scout) (3 comments)
- [@SCUTVincent](https://github.com/SCUTVincent) (1 issue, 2 comments)
- [@shannonwells](https://github.com/shannonwells) (23 commits, 24 PRs, 43 issues, 68 comments)
- [@sidke](https://github.com/sidke) (79 commits, 22 PRs, 18 issues, 12 comments)
- [@SmartMeshFoundation](https://github.com/SmartMeshFoundation) (1 issue)
- [@songjiayang](https://github.com/songjiayang) (1 comment)
- [@Stebalien](https://github.com/Stebalien) (4 commits, 6 PRs, 18 comments)
- [@sternhenri](https://github.com/sternhenri) (38 commits, 10 PRs, 5 issues, 50 comments)
- [@steven004](https://github.com/steven004) (3 commits, 7 PRs, 4 issues, 11 comments)
- [@sywyn219](https://github.com/sywyn219) (3 issues, 13 comments)
- [@Tbaut](https://github.com/Tbaut) (1 issue)
- [@terichadbourne](https://github.com/terichadbourne) (1 issue, 12 comments)
- [@thomas92911](https://github.com/thomas92911) (1 issue, 1 comment)
- [@travisperson](https://github.com/travisperson) (98 commits, 53 PRs, 40 issues, 190 comments)
- [@tycholiu](https://github.com/tycholiu) (1 comment)
- [@urugang](https://github.com/urugang) (1 PR, 1 issue, 1 comment)
- [@vmx](https://github.com/vmx) (8 commits, 5 PRs, 2 issues, 19 comments)
- [@vyzo](https://github.com/vyzo) (8 comments)
- [@warpfork](https://github.com/warpfork) (6 comments)
- [@waynewyang](https://github.com/waynewyang) (3 commits, 5 PRs, 2 issues, 8 comments)
- [@whyrusleeping](https://github.com/whyrusleeping) (157 commits, 42 PRs, 55 issues, 296 comments)
- [@windstore](https://github.com/windstore) (1 issue, 2 comments)
- [@woshihanhaoniao](https://github.com/woshihanhaoniao) (5 issues, 6 comments)
- [@wyblyf](https://github.com/wyblyf) (1 issue, 6 comments)
- [@xcshuan](https://github.com/xcshuan) (1 issue, 1 comment)
- [@yangjian102621](https://github.com/yangjian102621) (1 PR, 4 issues, 16 comments)
- [@yph152](https://github.com/yph152) (1 issue)
- [@yusefnapora](https://github.com/yusefnapora) (1 comment)
- [@yyh1102](https://github.com/yyh1102) (2 comments)
- [@zebul](https://github.com/zebul) (1 issue)
- [@ZenGround0](https://github.com/ZenGround0) (35 commits, 29 PRs, 85 issues, 128 comments)
- [@zhangkuicheng](https://github.com/zhangkuicheng) (2 issues, 4 comments)
- [@zixuanzh](https://github.com/zixuanzh) (4 comments)
- [@zjoooooo](https://github.com/zjoooooo) (1 issue, 1 comment)

## 🙌🏽 Contribute

Would you like to contribute to the Filecoin project and don’t know how? Here are a few places you can get started:

- Check out the [Contributing Guidelines](https://github.com/filecoin-project/go-filecoin/blob/master/CONTRIBUTING.md)
- Look for issues with the `good-first-issue` label in [go-filecoin](https://github.com/filecoin-project/go-filecoin/issues?q=is%3Aissue+is%3Aopen+label%3A "good+first+issue") and [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs/issues?q=is%3Aissue+is%3Aopen+label%3A "good+first+issue")
- Join the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat), introduce yourself in #\_fil-lobby, and let us know where you would like to contribute

## ⁉️ Questions

The best place to ask your questions about go-filecoin, how it works, and what you can do with it is at [discuss.filecoin.io](https://discuss.filecoin.io/). We are also available at the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat).
