---
aliases:
  - /blog/sale-update-and-reopen/
author: ""
categories:
  - updates
cover_feature: false
date: "2017-08-11T07:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Wow! We are deeply humbled and grateful for your tremendous support. As soon
  as we opened the sale we were overwhelmed with thousands of investments.
image:
  alt: "First Day Sale Update, Reopening Aug 12, 11:00am PDT"
  url: /uploads/coinlist-filecoin-1.webp
main_feature: false
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/coinlist-filecoin.webp
title: "First Day Sale Update, Reopening Aug 12, 11:00am PDT"
_template: blog_detail
---

_NOTICE: Sale reopens Sat, Aug 12 at 11:00am PDT_

Dear Filecoin Investors, and broader community,

Wow! We are deeply humbled and grateful for your tremendous support. As soon as we opened the sale [we were overwhelmed with thousands of investments](https://coinlist.co/currencies/filecoin/). These last weeks have been a rollercoaster for the team, and your outpouring of support is intensely energizing. Thousands of people in our community rallied together to take part in this important event, as investors, as supporters, as trouble-shooters, and as vocal enthusiasts. The world took notice.

We wanted to give you a thorough update covering the following:

- CoinList service interruptions during the first hour
- our decision to pause the sale
- a few frequent issues we’ve noticed and how to address them
- and our plans for resuming the sale

## Sale Open and CoinList Service Interruptions

The sale opened at 12:00 PDT. Immediately, CoinList experienced massive load, in terms of pageviews, users watching live, and transaction volume.

We hoped to meet great standards for token sales, and set new ones. Zero downtime was unfortunately not one of them. As you probably noticed, we had several short service interruptions during the first hour of the sale, due to high volumes of traffic, thousands of transactions, the very real-time nature of the site, and more. During the first few minutes of interruption – as our infrastructure scaled up to meet the intense demand – investors could not reliably complete their investments on the platform.

The full interruption time was small – 8-16 minutes total – but some users may have observed other failures throughout the hour. In order to make sure everything proceeded correctly, we decided to temporarily pause the sale at 13:10 PDT. We hoped the pause would last only an hour or two, but we later decided to extend the pause to credit some investments for the outage. On the technical side, we figured out how long the initial interruptions lasted, we scaled up our infrastructure to meet any future demand, we further improved caching and scalability of the real-time feeds, and we ran all our checks and verifications.

We also decided to be extremely conservative, and go back through all transaction records and verify that everything proceeded correctly, that the outage did not at all affect the records of investments themselves. Thousands of transactions and hundreds of millions of dollars demand the utmost caution and verification. Thankfully, this is precisely where blockchains shine! CoinList relies on ways of maintaining records that can be verified for perfect consistency, using blockchains: the public blockchains used for payment (+ AngelList bank records for USD), and a transaction blockchain internal to CoinList. _(We hope to detail the inner workings in future technical posts, as they suggest valuable technology and learnings for blockchain tech applications.)_

We are very happy to report that, to our knowledge and as we expected, the CoinList platform correctly accounted all investments as they were made. We did find a number of small issues with a number of unconfirmed investments. Some people have also emailed about clerical mistakes as they made the investment. I will list a few of these issues later below. If your investment falls into any of these, just reach out. It is possible some other minor issues exist, and we will keep updating if we find any.

**Important Note:** during the service outage, the front-end webpages got out of sync with the back-end and the graph may have shown weird and innaccurate behavior. We replaced the real-time update feed as fast as we could, with a static account of the amount raised. Due to the rush to fix the graph, there was a double counting mistake made and the page briefly showed “250M+ raised”, which we corrected after a few minutes to correctly show “150M+ raised”, which was our known lower bound at the time.

## CoinList Customer Support

### We have been handling these types of minor issues through customer support

- **Investors sent too much money, or accidentally paid twice.** Some investors paying with crypto tokens ended up paying too much, either to ensure transactions were done correctly or because of simple mistakes. We are in touch with a few, but if you think this happened to you, let us know. We will confirm with you within 1 week and process such requests and refunds after the sale. Thankfully blockchains are fully publicly auditable (yay decentralized tech!), so it’s quite easy for us to refer to that record.
- **Investors sent too little money.** Some investors had the opposite problem: they thought they sent enough but they ended up sending short amounts. Some of these were drastic underfunding – less than 10% of the proposed investment. Others were due to wallets subtracting network fees from payment amounts, so the final amount confirmed with us came up short by the network fee. We previously warned about this. Please check each of your purchases in the Purchase Dashboard, to figure out whether this happened to you, and so you can complete the investment. Reach out if you need help.
- **USD transaction confirmations**. During service interruptions, a few USD transactions failed to mark as cleared. This would manifest itself as the purchase showing up as still “Awaiting Confirmation”. We have identified these transactions and will count them as confirmed correctly, as we have exact timestamps on when the confirmation should have happened. These should be fixed automatically, but if this problem persists for you, please reach out to filecoin-sale@protocol.ai.
- **Incorrect vesting choices**. A couple of investors emailed to report they failed to pick their vesting choice using the vesting slider. Please refer to the “How to Invest” document, as it shows the vesting slider.

## Crediting Transactions for the Service Interruptions

As we mentioned previously, we feel it is important to credit investors for such a service outage. Therefore, we have decided to give the First Hour Averaging price to transactions that cleared between 13:00:00 - 13:16:00 PDT as well.

Note that, since this is an outage we want to credit and since most investors correctly completed all their investments before 13:00:00, we are not re-pricing the average. Investments confirmed during 13:00:00 - 13:16:00 PDT will be given the price as calculated for transactions between 12:00:00 PDT and 13:00:00 PDT.

This avoids counting the later transactions in the average and raising the price for everyone, something many people would be unhappy about. We believe this is fair to both investors who did manage to make their investments land by 13:00:00 despite the interruptions, and that it is also fair for those few affected by the interruption. Affected investors you will receive an email notice within 1 week, and your purchase dashboard and SAFT will be updated at the end of the sale.

## Resuming the Sale - Sat, Aug 12 at 11:00am PDT

Everybody is excited and anxious to resume the sale. We have received dozens of emails asking us to reopen the sale so they can participate. We estimate many more people are waiting. We wanted to do this as fast as we could, while addressing the minor issues described before, and after we finished all verifications. We are happy that we can do that now. We set the time for **Sat, Aug 12 at 11:00am PDT** to give many hours of notice.

If there are any future outages, **we will give a 2+ hour notice before we resume**, sent via Twitter (@MineFilecoin), [the Protocol Labs blog](https://protocol.ai/blog), and email to users registered on CoinList.

**Warning**: there have been even more scams. Beware of websites and fake Twitter accounts impersonating us. We are doing what we can to take these down as fast as we can, but they do exist and we expect more will happen before our sale concludes. Hopefully they will stop after we stop. :)

## Thanks

Again, thank you for all the amazing support so far, for your patience with the new platform, and for all the cheers of encouragement. We look forward to the journey ahead, as we build Filecoin together. We are tremendously proud to have you backing us, and we hope to make you equally proud with our future work.

Gratefully,

Protocol Labs  
Filecoin Team
