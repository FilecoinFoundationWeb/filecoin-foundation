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
  2021年3月18日，有报道称，由于Filecoin的远程过程调用（RPC）代码存在 "严重漏洞"，出现了 "双花"。这些说法是不正确的且具有强烈误导性。 
  Lotus团队对该报告进行了彻底调查，没有发现任何Filecoin网络和RPC
  API代码的相关问题。链本身不存在双花问题，API代码也没有错误。有关交易所已经修正了该交易所内的错误交易记录，并正在审查他们记账系统中的充值处理逻辑，以改正他们的API使用。
image:
  alt: ""
  url: /uploads/reputation-system-6.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/reputation-system-6.webp
title: 事件回顾报告：利用Lotus API准确记账
_template: blog_detail_ch
---

2021年3月18日，有报道称，由于Filecoin的远程过程调用（RPC）代码存在 "严重漏洞"，出现了 "双花"。**这些说法是不正确的且具有强烈误导性**。

Lotus团队对该报告进行了彻底调查，**没有发现任何Filecoin网络和RPC API代码的相关问题**。链本身不存在双花问题，API代码也没有错误。有关交易所已经修正了该交易所内的错误交易记录，并正在审查他们记账系统中的充值处理逻辑，以改正他们的API使用。

## 事件回顾

- **事件报告** — 今日早前，Lotus团队收到交易所错误使用Lotus API来计算Filecoin网络中的转账/存款。 API错误使用情况是因为用户报告了交易所他们的帐户被交易所记账系统错误地重复记录。这一问题已在交易所记账系统恢复 — 链上本身并没有重复记录。
- **API误解** — 该问题的核心是Lotus的链状态检查API使用不当，在处理多个类似消息时，其处理方式与所期待的不同。误解Lotus API的输出会导致记账系统将原始消息和替换消息都算作相同的发送者和接收者。到目前为止，我们只知道有一个交易所受到这个问题的影响。
- **虚假报道成为文章标题** — 有关网络“双花”的不正确陈述在社交媒体渠道中传播，并进入文章标题。 这些报道中的内容已被调查并确定为错误信息。 团队并没有发现Filecoin网络或RPC API代码的问题。 在了解了事实之后，许多团队和媒体机构正在纠正其报道。

## 正在采取的行动

- **受到影响的交易所** — 有关交易所发现了这对于API的错误使用，并已立即采取行动，停止充值、提现和转账。他们已经恢复了有关的错误交易（所以在这次事件中没有资金损失），并正在纠正他们对Lotus API的使用，以符合推荐的使用方法。
- **偶发案例** — 其他交易所已经收到预警，正在审查他们的代码逻辑，以确保他们不受同样错误的影响。其中许多审查已经完成——据我们所知，目前还没有其他交易所以这种方式错用API。
- **Lotus团队** — Lotus团队正在积极与所有交易所合作，以确保正确处理这一行为，[并改进API文档](https://github.com/filecoin-project/lotus/pull/5838)，确保所有其他交易所正确检查Filecoin的链状态。
- **社区和媒体** — 一些团队正在共同努力，与媒体联系，澄清所称事件的细节和事实，并帮助消除错误信息。
- **社区团队** — 社区成员提供可以帮助其他社区成员准确、周到地报告问题的方法，避免意外传播错误信息。

## 技术细节

- **相同信息** — 就lotus团队所知问题源自于有两条消息有相同的发送者/收到者详细信息、相同的nonce但拥有不同的Gas参数——被包含在同一tipset中。像这样两个类似的消息是非常常见的，比如以改变与消息的Gas费来替代消息就会形成这样两条类似的消息。这样的情况会由Filecoin网络安全、正确地处理，不会导致两次转账：两条消息中的一条会被执行，另一条被忽略。
- **错误使用API** — 然而，根据人们对链的检查方式，这会呈现出消息被处理了两次的样子。具体来说，有关交易所使用了一种错误的处理链状态的方式——在tipset的每个块上调用ChainGetBlockMessages，然后在这些消息上调用StateGetReceipt。
- **错误的API期望** — 容易引发错误的地方是，当StateGetReceipt被调用在两个相似的消息上（其中一个被执行，另一个被跳过），它将提供相同的结果给人感觉两种消息都被执行了。这诚然是一种违背直觉思维的行为，但却是有意为之。StateGetReceipt的主要应用场景是在Lotus矿工和处理交易过程中使用的[事件处理程序](https://github.com/filecoin-project/lotus/blob/79a8ff04fd5362a367fd7d6469e5287a47baa571/chain/events/events_called.go#L586)中。在消息被替换的情况下，这些模块并不关心返回的信息是对应原始消息，还是对应替换的消息——它们只是想知道消息是否在链上成功执行。我们已经在这里的文档中增加了澄清：[https://github.com/filecoin-project/lotus/pull/5838。](https://github.com/filecoin-project/lotus/pull/5838)
- **使用正确的API** — 大多数交易所都是正确使用了ChainGetParentMessages和ChainGetParentReceipts来记账，以计算出链上执行了什么消息、哪些消息成功了。这些都是Lotus本身在链state计算过程中使用的API，以保证使用者能通过这种方式正确反映链状态。对每一条消息执行StateReplay，可以得到完整的调用结果，这样使用者就可以将返回的InvocResult中的MsgCid与查询消息的CID进行比较。这是推荐交易所的正确检查链状态并保持内部报告系统同步的步骤。
