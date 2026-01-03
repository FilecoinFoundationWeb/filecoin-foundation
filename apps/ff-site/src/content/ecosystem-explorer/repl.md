---
title: Repl
created-on: 2024-01-24T13:41:08.340Z
updated-on: 2024-01-24T13:41:08.357Z
published-on: 2024-01-24T13:41:08.367Z
description:
  "Repl is the first repledging Protocol for pledged FIL assets. It aims
  to enhance the efficiency of pledged FIL, remove idiosyncratic risks among Filecoin
  storage providers, and lower the complexity for people to earn Filecoin rewards."
tech:
  - filecoin
image:
  src: /assets/images/repl_logo_white.png
category: data-storage-management
seo:
  description:
    Repl provides decentralized solutions for data replication and storage
    management.
email: encrypted::U2FsdGVkX18ipIejpZGEzt72vG0IVZJxZcx4nIDmIwc9Q30ZDf2FfaWFBdMSnO1n
full-name: encrypted::U2FsdGVkX19UH8YsCaaIq+pKmJ+dROaqh2biPNK6FTU=
---

Repl tokenizes pledged FIL in the Filecoin Protocol and enables liquidity and extended utilities for these pledged assets.

There are three main components of the Repl Protocol.

Tokenizing Pledged FIL: Any storage provider can pledge a Miner Actor to the Repl Protocol to repledge their locked assets. For every locked FIL that’s considered safe, the storage provider can mint pFIL tokens at a 1:1 ratio.

An Open Market for pFIL: Storage providers can sell their minted pFIL to obtain liquidity, and token holders can acquire pFIL tokens to earn FIL mining return. pFIL tokens can also be used in additional use cases such as restaking to secure new networks on Filecoin.

Risk Recovery and Reward Distribution: When locked FIL is released or pledged Miner Actors earn block rewards, the Repl protocol recovers liquid FIL and buys back pFIL through auctions. The amount of pFIL equivalent to FIL recovered is burned, and excess proceeds are distributed as rewards.

For each of the three components, we use Filecoin and the FVM to mint pFIL tokens, manage risks, and facilitate transactions.
