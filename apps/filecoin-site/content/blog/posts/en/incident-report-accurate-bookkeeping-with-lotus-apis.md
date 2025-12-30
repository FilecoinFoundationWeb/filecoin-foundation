---
aliases: []
author: ""
categories:
  - updates
  - events
date: "2021-03-18T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  On March 18, the Lotus team received a report from an exchange about the
  incorrect use of a Lotus API for evaluating transfers/deposits in the Filecoin
  Network. The team investigated and found no issues with the Filecoin network
  or the RPC API code. The exchange in question has already reverted the
  incorrect transaction (there was no loss of funds) and is reviewing their
  deposit processing logic to correct their API usage.
image:
  alt: ""
  url: /uploads/reputation-system-7.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/reputation-system-6.webp
title: "Incident Report: Accurate Bookkeeping with Lotus APIs"
_template: blog_detail
---

On March 18th, 2021, it was reported that there was a “double-spend” due to a “serious bug” in Filecoin’s remote procedure call (RPC) code. **These statements are incorrect and misleading.**

The Lotus team has investigated the report thoroughly and have **found no issues with the Filecoin network or the RPC API code**. There is no double-spend on the blockchain itself, and no bug in the API code. The exchange in question has already reverted the incorrect transaction in their bookkeeping system (there was no loss of funds), and is reviewing their deposit processing logic to correct their API usage.

## What Happened

- **Issue Report.** Earlier today, the Lotus team received a report that an exchange was incorrectly using the Lotus APIs for evaluating transfers/deposits in the Filecoin Network. This incorrect API usage was discovered when a user reported that their account was incorrectly credited twice for a deposit in the exchange’s bookkeeping system. This has since been reverted in the exchange’s bookkeeping - there was no duplication on the chain itself.
- **API Confusion.** The core of the issue was the improper usage of Lotus’ chain state inspection API, which behaved differently than expected when handling multiple similar messages. Misinterpreting the output of the Lotus API can cause a bookkeeping system to count both the original and a replacement message with the same senders and recipients. So far, we are only aware of one exchange affected by this issue.
- **False reports make headlines**: Inaccurate statements around “double spends” on the network were propagated in social media channels, and made their way into article headlines. Many of these claims have been investigated and determined to be false. The team found no issues with the Filecoin network or the RPC API code. After learning the facts, many groups and media institutions are correcting their coverage.

## Actions Being Taken

- **Exchange affected.** The exchange in question caught this API misuse and has taken immediate action to halt deposits, withdrawals, and transfers. They have reverted the incorrect transaction in question (so no funds were lost in this incident), and are correcting their use of lotus APIs to match the recommended use.
- **Isolated instance.** Other exchanges have been alerted and are reviewing their code to make sure they are not affected. Many of these reviews have already completed -- to our knowledge, at this time, no other exchange has misused this API in this way.
- **Lotus Team.** The Lotus team is actively working with all exchanges to ensure that this behavior is correctly handled, and [improving the API documentation](https://github.com/filecoin-project/lotus/pull/5838) to ensure all others correctly inspect the Filecoin chain state going forward.
- **Community & Media Teams.** A few organizations are working together to reach out to publications & clarify the details and facts of the alleged incident, and to help dispel misinformation.
- **Community Teams**. Community members are creating materials to help others report problems accurately and thoughtfully to avoid accidentally spreading misinformation.

## Technical Details

- **Same messages.** The Lotus team understands that the problem arose from two messages sharing the same sender/receiver details and the same nonce, but with _different_ gas parameters — being included in the same tipset. Two similar messages like this are a common form of message replacement to change the gas fees associated with a message. Such a situation is safely and correctly handled by the Filecoin network, and does not lead to two transfers being made: one of the two messages is executed, the other is ignored.
- **Incorrect use of API.** However, based on how one inspects the chain, this can present the appearance that the transfer is processed twice. Specifically, this exchange was using an inaccurate way of processing the chain state - calling `ChainGetBlockMessages` on every block in a tipset, and then calling `StateGetReceipt` on each of these messages.
- **API Usage Misunderstanding.** The confusion is that when `StateGetReceipt` is called on the two similar messages (one of which is executed, and the other of which is skipped), it will provide the **same** result: both corresponding to the message that _was_ executed. This is admittedly counter-intuitive, but intended, behavior. The primary use-case of the `StateGetReceipt` method is in the [event handler](https://github.com/filecoin-project/lotus/blob/79a8ff04fd5362a367fd7d6469e5287a47baa571/chain/events/events_called.go#L586) used by the Lotus Miner and deal-making process. In the event of a replaced message, these modules do **not** care if the returned receipt corresponds to the original message, or a replacement one — they simply want to know if the message successfully executed on chain. We have added clarification to the documentation here: [https://github.com/filecoin-project/lotus/pull/5838](https://github.com/filecoin-project/lotus/pull/5838 "https://github.com/filecoin-project/lotus/pull/5838").
- **Using the correct APIs.** Most exchanges are correctly using `ChainGetParentMessages` and `ChainGetParentReceipts` for bookkeeping to figure out what messages were executed and succeeded on chain. These are the APIs used by Lotus itself during state computation, so you are guaranteed to correctly reflect chain state this way. Performing `StateReplay` on each of the messages will give you the full invocation result so you can compare the `MsgCid` in the returned `InvocResult` with the CID of the queried message. This is the recommended path for exchanges to correctly inspect chain state and keep their internal reporting systems in sync.
