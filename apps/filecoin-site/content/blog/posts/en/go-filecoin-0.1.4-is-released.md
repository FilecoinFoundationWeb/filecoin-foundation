---
aliases:
  - /blog/go-filecoin-0.1.4-release/
author: ""
categories:
  - updates
  - events
cover_feature: false
date: "2019-03-27T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  We’re happy to announce go-filecoin 0.1.4. go-filecoin is the Go
  implementation of the Filecoin protocol. The up-to-date changelog can always
  be found at go-filecoin/CHANGELOG.md.
image:
  alt: go-filecoin 0.1.4 is released
  url: /uploads/gofc-014-main-header.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/gofc-014-english-social.webp
title: go-filecoin 0.1.4 is released
_template: blog_detail
---

We’re happy to announce go-filecoin 0.1.4. go-filecoin is the Go implementation of the [Filecoin protocol](https://github.com/filecoin-project/specs). The up-to-date changelog can always be found at [go-filecoin/CHANGELOG.md](https://github.com/filecoin-project/go-filecoin/blob/master/CHANGELOG.md).

This release contains a better install experience, initial Proof-of-Spacetime integration, more reliable message sending and networking, and many other improvements. Get pumped! 🎁

## Install and Setup

### 💝 Binary releases

Linux and MacOS binaries for go-filecoin are now available! See [Installing from binary](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started#installing-from-binary) for instructions.

### 🍱 Precompiled proofs parameters

Running secure proofs requires parameter files that are several GB in size. Previously, these files were generated at install, an extremely memory-intensive process causing slow or impossible builds for many users. Now, you can download pre-generated files during install by running `paramfetch`. This step is now included in the [Installing from binary](https://github.com/filecoin-project/go-filecoin/wiki/Getting-Started#installing-from-binary) instructions.

### 🦖 Version checking

go-filecoin now checks that it is running the same version (at the same commit) while connecting to a devnet. This is a temporary fix until a model for change is implemented, allowing different versions to interoperate.

## Features

### 💎 Proof-of-Spacetime Integration

Miners now call `rust-fil-proofs` to periodically generate proofs of continued storage. With this major integration in place, you can expect some follow-up (for example, storage mining faults do not yet appear on-chain) and continued optimizations to the underlying Proof-of-Spacetime construction and implementation.

## Performance and Reliability

### 🤝 Networking

We’ve upgraded to [go-libp2p](https://github.com/libp2p/go-libp2p) 6.0.35 which has fixed autorelay reliability issues. We’ve also added a `go-filecoin dht` command for interacting with and debugging our dht.

### 🎈 Better message sending

In the past, if messages failed, they failed silently. go-filecoin would continue to select nonces higher than the sent message, effectively deadlocking message sending. We have now implemented several improvements to message sending: incoming and outgoing queues, better nonce selection logic, and a message timeout after a certain number of blocks. See [message status](https://github.com/filecoin-project/go-filecoin/blob/6a34245644cd62436239b885cd7ba1f0f29d0ca5/commands/message.go) and mpool ls/show/rm commands for more.

### 🔗 Chain syncing is faster

Chain is now faster due to use of bitswap sessions. Woohoo!

### ⌛ Context deadline errors fixed

In the past, the context deadline was set artificially low for file transfer. This caused some large file transfers to time out, preventing storage deals from being completed. Thank you to [@markwylde](https://github.com/markwylde), [@muronglaowang](https://github.com/muronglaowang), [@pengxiankaikai](https://github.com/pengxiankaikai), [@sandjj](https://github.com/sandjj), and others for bug reports.

## Refactors and Endeavors

### 🦊 FAST (Filecoin Automation & System Toolkit)

FAST is a common library of go-filecoin code that can be used in daemon testing, devnet initialization, and other applications like network randomization that involve managing nodes, running commands against them, and observing their state.

Using FAST, we’ve developed localnet, a new tool to quickly and easily set up a local network for testing, debugging, development, and more.

### 👾 Porcelain/Plumbing refactor for node object

Previously, the node object contained both interfaces and internals for much of the core protocol. It was difficult to unit test due to many dependencies and complicated setup. Following the [porcelain and plumbing pattern from Git](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain), we have now decoupled the node object from many of its dependencies. We have also created a separate API for block, storage, and retrieval mining.

## Changelog

A full list of [all 200 PRs in this release](https://github.com/filecoin-project/go-filecoin/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2019-02-14..2019-03-26) can be found on GitHub.

## Contributors

❤️ Huge thank you to everyone that made this release possible! By alphabetical order, here are all the humans who contributed issues and commits in `go-filecoin` and `rust-fil-proofs` to date:

- [@aaronhenshaw](https://github.com/aaronhenshaw)
- [@aboodman](https://github.com/aboodman)
- [@AbelLaker](https://github.com/AbelLaker)
- [@alanshaw](https://github.com/alanshaw)
- [@acruikshank](https://github.com/acruikshank)
- [@anacrolix](https://github.com/anacrolix)
- [@andychen1984](https://github.com/andychen1984)
- [@anorth](https://github.com/anorth)
- [@Byte-Doctor](https://github.com/Byte-Doctor)
- [@coderlane](https://github.com/coderlane)
- [@danigrant](https://github.com/danigrant)
- [@dayou5168](https://github.com/dayou5168)
- [@dignifiedquire](https://github.com/dignifiedquire)
- [@diwufeiwen](https://github.com/diwufeiwen)
- [@ebuchman](https://github.com/ebuchman)
- [@eefahy](https://github.com/eefahy)
- [@firmianavan](https://github.com/firmianavan)
- [@frrist](https://github.com/frrist)
- [@gmasgras](https://github.com/gmasgras)
- [@haoglehaogle](https://github.com/haoglehaogle)
- [@hsanjuan](https://github.com/hsanjuan)
- [@imrehg](https://github.com/imrehg)
- [@jaybutera](https://github.com/jaybutera)
- [@jbenet](https://github.com/jbenet)
- [@jimpick](https://github.com/jimpick)
- [@karalabe](https://github.com/karalabe)
- [@kubuxu](https://github.com/kubuxu)
- [@lanzafame](https://github.com/lanzafame)
- [@laser](https://github.com/laser)
- [@leinue](https://github.com/leinue)
- [@luca8991](https://github.com/luca8991)
- [@madper](https://github.com/madper)
- [@magik6k](https://github.com/magik6k)
- [@markwylde](https://github.com/markwylde)
- [@mburns](https://github.com/mburns)
- [@michellebrous](https://github.com/michellebrous)
- [@mikael](https://github.com/mikael)
- [@mishmosh](https://github.com/mishmosh)
- [@mslipper](https://github.com/mslipper)
- [@muronglaowang](https://github.com/muronglaowang)
- [@nanofortress](https://github.com/nanofortress)
- [@natoboram](https://github.com/natoboram)
- [@nicola](https://github.com/nicola)
- [@ognots](https://github.com/ognots)
- [@olizilla](https://github.com/olizilla)
- [@pacius](https://github.com/pacius)
- [@pengxiankaikai](https://github.com/pengxiankaikai)
- [@pooja](https://github.com/pooja)
- [@porcuquine](https://github.com/porcuquine)
- [@phritz](https://github.com/phritz)
- [@pkrasam](https://github.com/pkrasam)
- [@pxrxingrui520](https://github.com/pxrxingrui520)
- [@raulk](https://github.com/raulk)
- [@rafael81](https://github.com/rafael81)
- [@richardlitt](https://github.com/richardlitt)
- [@rosalinekarr](https://github.com/rosalinekarr)
- [@sandjj](https://github.com/sandjj)
- [@schomatis](https://github.com/schomatis)
- [@shannonwells](https://github.com/shannonwells)
- [@sidka](https://github.com/sidka)
- [@stebalien](https://github.com/stebalien)
- [@steven004](https://github.com/steven004)
- [@sywyn219](https://github.com/sywyn219)
- [@tbaut](https://github.com/tbaut)
- [@thomas92911](https://github.com/thomas92911)
- [@travisperson](https://github.com/travisperson)
- [@vmx](https://github.com/vmx)
- [@waynewyang](https://github.com/waynewyang)
- [@whyrusleeping](https://github.com/whyrusleeping)
- [@windstore](https://github.com/windstore)
- [@woshihanhaoniao](https://github.com/woshihanhaoniao)
- [@xcshuan](https://github.com/xcshuan)
- [@yangjian102621](https://github.com/yangjian102621)
- [@yph152](https://github.com/yph152)
- [@zenground0](https://github.com/zenground0)
- [@zhangkuicheng](https://github.com/zhangkuicheng)
- [@zjoooooo](https://github.com/zjoooooo)

## 🙌🏽 Contribute

Would you like to contribute to the Filecoin project and don’t know how? Here are a few places you can get started:

- Check out the [Contributing Guidelines](https://github.com/filecoin-project/go-filecoin/blob/master/CONTRIBUTING.md)
- Look for issues with the `good-first-issue` label in [go-filecoin](https://github.com/filecoin-project/go-filecoin/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22e-good-first-issue%22+) and [rust-fil-proofs](https://github.com/filecoin-project/rust-fil-proofs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Join the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat), introduce yourself in #\_fil-lobby, and let us know where you would like to contribute

## 🤔 Questions

The best place to ask your questions about go-filecoin, how it works, and what you can do with it is at [discuss.filecoin.io](https://discuss.filecoin.io/). We are also available at the [community chat on Matrix/Slack](https://github.com/filecoin-project/community#chat).
