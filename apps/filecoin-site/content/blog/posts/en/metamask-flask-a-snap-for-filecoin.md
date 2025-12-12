---
aliases: []
author: ""
categories:
  - updates
date: "2022-01-18T06:00:00Z"
dim_image: true
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Developers: Use MetaMask Flask to Access Web3 Tools Like Filecoin Directly
  from the Wallet
image:
  alt: ""
  url: /uploads/fil-blog-2022-xx-xx-metamask-flask-announcement.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2022-xx-xx-metamask-flask-announcement.webp
title: "MetaMask Flask: A Snap for Filecoin Devs"
_template: blog_detail
---

MetaMask Flask is the experimental proving ground for the wallet’s most cutting-edge and innovative features. A canary distribution of production MetaMask, Flask is where developers and experimental features ignite to create the future of Web3.

When building an application that manages and transfers real value, secure UX and stable features are essential to safeguard the user’s assets. By rolling out experimental features in Flask, MetaMask can remove some of its usual guard rails and rapidly iterate on them before deploying them to the broader public.

Naturally, Flask does not offer the same API or UX stability guarantees as the main MetaMask applications do, so beware that it is intended for developers only, and **participation is at the users’ own risk. This laboratory is unsupervised.**

## Snapping into Innovation

Snaps is the first feature to be released through Flask.

**Snaps allows developers to expand the functionality of MetaMask at runtime, without the MetaMask team’s involvement.** That’s right — users can add their own features and make them available to their users, all by themselves!

**Since MetaMask is the first wallet to offer extensibility to users, Snaps is poised to accelerate the rate of innovation in not just Ethereum, but the entire Web3 ecosystem.** While the initial version of Snaps can only modify the MetaMask UI in limited ways, it will already enable one of the most powerful capabilities of all: for a Snap to manage the user’s keys for different protocols. If a protocol has a [SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) ID, JavaScript signing libraries, and publicly available nodes, developers can add support for it to MetaMask.

Snaps’s developer capabilities will be limited only by the Snaps API itself, which the MetaMask team will continue to iterate on to meet developer demands.

At a high level, MetaMask Snaps consists of two things:

1. A way for MetaMask to securely execute third-party JavaScript code.
2. APIs for websites and MetaMask to communicate with individual Snaps.

Communication occurs via JSON-RPC requests and responses. In this way, Snaps can expand MetaMask’s JSON-RPC API and change the behavior of the MetaMask application at runtime. Over time, MetaMask will use this to support different blockchains and other decentralized protocols, novel kinds of cryptography, novel kinds of crypto assets, and a countless number of other features.

To learn more about how to use Snaps, read the technical documentation [here](https://docs.metamask.io/guide/snaps.html).

## A Snap for Filecoin

Making the most of these new capabilities, Protocol Labs has partnered with Chainsafe to develop a snap for MetaMask Flask. Once installed, the snap will add a Filecoin integration to the wallet with an accompanying frontend. Here, users can view their Filecoin accounts and balances, send FIL transactions, and create cryptographically signed messages with their Filecoin keys. This provides a more convenient way for them to interact with the Filecoin protocol where it all happens directly from the MetaMask browser integration.

Be sure to check out Erik Marks’s [demo](https://youtu.be/14uEYdgyEr8) to learn more about how to set up the Filecoin Snap on MetaMask Flask.

## In Summary

Flask is the environment where MetaMask works to ensure features and APIs are stable, maintainable, and safe for all users. Snaps is a way to give Web3 developers the opportunity to do more with MetaMask products, and create completely new kinds of dapps. Any developer can create a Snap, and in the future, users will get to decide which Snaps they want to use and integrate into their wallet.

Protocol Labs has taken the lead in using these new features to make it easier for users to interact with Filecoin.

Help create the future of Web3 today by [getting started with Snaps](https://docs.metamask.io/guide/snaps.html) and be sure to check out the repository for the Filecoin [snap](https://github.com/ChainSafe/filsnap). Happy BUIDLing!
