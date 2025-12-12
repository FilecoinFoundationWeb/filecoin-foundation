---
aliases:
  - /blog/filecoin-liftoff-ama-final/
author: ""
categories:
  - events
date: "2020-10-24T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  To conclude Filecoin Liftoff Week, the Filecoin Team hosted a live AMA with
  the Filecoin community.
image:
  alt: Filecoin Liftoff Week Closing AMA
  url: /uploads/looking-back-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/liftoff-closing-ama-social.webp
title: Filecoin Liftoff Week Closing AMA
_template: blog_detail
---

To conclude Filecoin Liftoff Week, the Filecoin Team hosted a live AMA with the Filecoin community. On October 23rd we hosted the final Liftoff Week AMA, answering 10+ questions regarding Filecoin launch, storing, and building on the network.

A summary of the Q&As are below. We look forward to hosting more sessions in the coming weeks! In the meantime, stay tuned for updates on the [Filecoin Community Slack](https://filecoin.io/slack). You can also find us on [Wechat (Filecoin-Official)](https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF), and [Twitter](https://twitter.com/Filecoin).

## Summarized Questions and Answers

_Most questions and answers are quoted directly, some are edited for readability._

**Congratulations on launch! What’s the best way to start storing my data on Filecoin?**

There are lots of different ways of storing on Filecoin! For an overview, check out the [Store documentation](https://docs.filecoin.io/store/) on our documentation site. For a consumer use case, try checking out Slate, [Fleek’s Storage Product](https://fleek.co/storage/) or [Starling Storage](https://docs.filecoin.io/store/tools/starling/). If you’re looking for simple video transcoding and storage, check out [File.video](https://file.video/) or Voodfy.

If you are a developer looking to launch an App on Filecoin, try checking out our [Build Documentation](https://docs.filecoin.io/build/) or [Powergate](https://docs.textile.io/powergate/).

**Can you share an update on verified clients? How will these be selected?**

Check out [FIP3](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0003.md) and the notary [governance repository](https://github.com/filecoin-project/notary-governance) for more details and latest updates. The community can help govern and iterate on the rubrics specified in the repository to best reflect the goals and values of the Principles.

**My lucky value (ratio of actual blocks produced and theoretical value) dropped sharply after the FIP-4 patch. It appears I’m not alone in this. What’s going on?**

There were no changes to block production introduced by the FIP-4 patch, or in anything else introduced in Lotus v1.1.0. Your “lucky value” could be affected by network conditions, or changes to the p2p module.

It would be great if you could open an issue in the Lotus repo with your miner ID, any metrics you can share, as well as other miners who seem to have experienced this.

**How is circulating supply calculated?**

Circulating supply includes all the unlocked tokens in the network. It doesn’t include initial pledge, locked block rewards, or burnt tokens.

**I saw the bug bounty program just updated its rewards format. What are they now?**

Investing in building a secure future for Filecoin is a top priority, and we want to make sure everyone is well incentivized to disclose any vulnerabilities. That’s why we just 4x’d the rewards! You can now earn up to $100,000 for a critical vulnerability report! Learn more here: [https://security.filecoin.io/bug-bounty/](https://security.filecoin.io/bug-bounty/ "https://security.filecoin.io/bug-bounty/")

**How will you be selecting which Filecoin Archives to store on Filecoin?**

The [Filecoin Archives](https://twitter.com/juanbenet/status/1319375340196646913) are a community project to curate, disseminate, and preserve precious information with Filecoin. Anyone can suggest an idea by tweeting it and tagging #FilecoinArchives. The Internet Archive and Protocol Labs will gather your suggestions, publish the full list, and curate a subset for preservation on the Filecoin network - which then anyone can help replicate.

**Where can I submit dataset suggestions for the Filecoin Archive?**

Submit your proposal as a reply to [this tweet](https://twitter.com/juanbenet/status/1319375340196646913) with the name, size, and link to the dataset:

Help retweet your favorites to vote for them!
