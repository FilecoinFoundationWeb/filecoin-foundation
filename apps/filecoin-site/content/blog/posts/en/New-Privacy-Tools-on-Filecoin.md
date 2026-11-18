---
title: "New Privacy Tools on Filecoin: An Easy Way to Protect Your Data"
draft: true
excerpt: The network is public. Your data doesn't have to be.
share_image: /uploads/privacy-tools-on-filecoin-hero.webp
image:
  url: /uploads/privacy-tools-on-filecoin-hero.webp
  alt: A sealed circular vault door with a hand-print lock panel and security displays, set in a bright, futuristic interior
date: 2026-11-18T00:00:00.000Z
categories:
  - updates
seo:
  description: >-
    Privacy tools are now built into the Synapse SDK. Files are encrypted on
    your device before upload, using keys from your own wallet instead of a
    separate key service.
related_article_1: ''
related_article_2: ''
related_article_3: ''
---

*The network is public. Your data doesn't have to be.*

Every team has files they would never leave lying around: client contracts, payroll, the dataset behind next quarter's model. Keeping files like these private on Filecoin just got much simpler. With privacy tools now built into the Synapse SDK, files are encrypted on your device before they're uploaded, using keys from your own wallet instead of a separate key service.

That builds on how the Filecoin network already works. Your data is held by independent storage providers who regularly prove onchain that they still have it. With the new tools, they hold it without being able to read it.

## Encryption built into the Synapse SDK

Privacy on the Filecoin network isn't new. Developers and storage services building directly on the network have long encrypted data themselves before storing it, which usually meant choosing a third-party tool, wiring it in, and building a way to manage keys.

Now it's built into the Synapse SDK. For teams, that means fewer moving parts to set up, maintain, and secure, so keeping sensitive data private becomes part of the normal workflow rather than a separate project. The two pieces that do the work, the Filecoin Encryption Envelope and Keysmith, ship with it.

## How it works, in three steps

1. **Your wallet makes the key.** One approval sets it up, and each file gets a key of its own. There's no password to remember, and keys aren't stored on the network.
2. **Your data is locked before it leaves your device.** Storage providers hold it and prove they still have it, but they can't read it. If a file is altered in storage, it won't open, so tampering doesn't go unnoticed.
3. **You get it back with your wallet.** Each file carries the public details needed to rebuild its key. With the same wallet, you can open your data again from any device.

Most systems rely on a locksmith: a central service that makes everyone's keys and keeps a spare of each one. That works until the locksmith is breached, goes offline, or changes its terms. Here, your wallet acts as your own private keysmith, making the right key when you need it and storing none of them.

For a deeper look at how the key system was designed, read [Keysmith: No Locksmith Required](https://medium.com/@jon.geater/keysmith-no-locksmith-required-bd52bd05c7db).

To build with it, start with the [Encryption Guide in the Filecoin docs](https://docs.filecoin.io/build-on-filecoin/advanced/encryption?utm_source=blog&utm_medium=privacy-launch&utm_campaign=relaunch).

## Sharing on your terms

Share a file and you get a link and an access key. Send them through different channels, the link by email and the key by message, so the link alone opens nothing.

The person you share with doesn't need a wallet, an account, or any software. The file opens in their browser, and your wallet never leaves your hands.

## Why it matters

In the AI era, privacy can't be an add-on to your data stack. Teams, and the agents working for them, handle contracts, customer records, and other sensitive information. Builders working on AI workflows have been clear that they need easy ways to keep that data private on Filecoin. These tools let you store it with independent providers and keep the keys yourself.

They're built for:

- **IT and security teams** that need sensitive data on independent infrastructure, with regular proof it's still stored
- **Companies in finance, tech, and other sensitive sectors** storing contracts, financial records, and customer data
- **Teams sharing documents** with partners, auditors, and advisers
- **Developers building apps and AI agents** that handle private data

## Coming soon: privacy for your AI agents

Agents already store and publish their work on the Filecoin network. New Filecoin agent skills will let them do it privately, with a single request:

- **private-share:** "Share this report privately with Ana." The agent stores the file privately and hands you the link and access key, so only the people you send them to can open it.
- **session-share:** "Save this session." The agent saves a private summary of its work, so a teammate or another agent can pick up where it left off on another machine.

The skills come with safeguards built in:

- Nothing is saved or shared unless you ask.
- Keys never pass through the chat.
- The full transcript is shared only if you opt in.
- A restored handoff is treated as information, not instructions.

## Get started

- **Try it:** [Filecoin Cloud console](https://pay.filecoin.cloud/console?utm_source=blog&utm_medium=privacy-launch&utm_campaign=relaunch)
- **Build with it:** [Filecoin Docs Encryption Guide](https://docs.filecoin.io/build-on-filecoin/advanced/encryption?utm_source=blog&utm_medium=privacy-launch&utm_campaign=relaunch)
- **Go deeper on the design:** [Keysmith: No Locksmith Required](https://medium.com/@jon.geater/keysmith-no-locksmith-required-bd52bd05c7db)
