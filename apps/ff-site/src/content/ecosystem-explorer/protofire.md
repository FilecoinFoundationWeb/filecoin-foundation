---
title: Protofire
created-on: 2026-08-18T09:20:08.776Z
updated-on: 2026-08-18T09:20:08.776Z
published-on: 2026-08-18T09:20:08.776Z
email: encrypted::U2FsdGVkX1/F3eTzA+xVSaQwKUwrf5TTkEg2xBnpw1PxhHOhV/EaGBOxrd56c3ws
full-name: encrypted::U2FsdGVkX18gBAogt7Lend02W619YuGyqzJK98KJG20=
image:
  src: /assets/images/protofire.png
category: infrastructure
tech:
  - filecoin
  - ipfs
description: Protofire runs public Filecoin RPC infrastructure (Glif) and the open-source CID Checker storage oracle, serving 10M+ developer requests per day.
website: https://protofire.io
year-joined: 2021
repo: https://github.com/protofire/filecoin-rpc-proxy

twitter: https://twitter.com/protofire
seo:
  title: Protofire
  description: Protofire runs public Filecoin RPC infrastructure (Glif) and the open-source CID Checker storage oracle, serving 10M+ developer requests per day.
---

Protofire builds and operates public access infrastructure that lowers the barrier for developers to build on Filecoin. Our work includes:

Glif public RPC endpoint, a shared, high-availability RPC interface (built with Infinite Scroll and referenced in Filecoin's official docs) that lets developers query Filecoin without syncing their own Lotus node.
RPC proxy & caching layer: custom routing and caching (filecoin-rpc-proxy) in front of the nodes to handle concurrent traffic and cut retrieval latency from 3–5s to under 800ms.
CID Checker (storage oracle): an open-source tool and API at filecoin.tools that indexes on-chain deal state and lists CIDs by storage status, enabling real-time verification that data remains stored across providers.

Today this infrastructure serves 10M+ requests per day at 99.95%+ uptime, with Glif API usage up 240%.
