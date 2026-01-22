---
aliases:
  - /blog/introducing-slingshot-phase-2
author: ""
categories: []
date: "2020-11-09T05:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  In this blog post, we are introducing Phase 2 of the Slingshot competition. If
  you are interested in earning FIL rewards for storing valuable data on the
  Filecoin network, Slingshot is for you!
image:
  alt: Slingshot Phase 2
  url: /uploads/slingshot-phase-2-1.webp
main_feature_inverted: false
related_article_1: content/blog/posts/slingshot-phase-1-recap.en.md
related_article_2: content/blog/posts/slingshot-week-one-recap.en.md
related_article_3: ""
share_image: /uploads/slingshot-phase-2.webp
title: Introducing Slingshot Phase 2
_template: blog_detail
---

[Slingshot](https://slingshot.filecoin.io/) is a community competition for storage clients and developers that rewards the storage of real, valuable, and usable data on the Filecoin network. Phase 1 of the Slingshot competition ran for four weeks. In that time, the Filecoin storage client and developer communities passed several important milestones, including:

- More than 730 TiB data stored across more than 450,000 storage deals to unlock a 50,000FIL prize pool
- 15 events where speakers shared lessons and insights into developer tooling and how to navigate Filecoin as a storage client
- And more! You can read all about Slingshot Phase 1 in our [recap blog post](https://filecoin.io/blog/slingshot-phase-1-recap/)

In this blog post, we are introducing Phase 2 of the Slingshot competition. If you are interested in earning FIL rewards for storing valuable data on the Filecoin network, Slingshot is for you!

## Introducing Slingshot Phase 2

Slingshot Phase 2 is a community competition that rewards the storage of valuable data onto the Filecoin network. In Phase 2, we are looking for **teams that are excited to preserve public, open-access datasets on the Filecoin network.**

Slingshot has the following goals:

- **Preserve humanity's most important datasets on the Filecoin network.** It has always been Filecoin's mission to serve as the foundation for humanity's information. With Slingshot, we are really excited to work with teams who are energized by that same mission so that, together, we can make this vision a reality! This includes telemetry and imaging datasets, historical archives, Creative Commons-licensed media and entertainment datasets, scientific research papers, and more! We currently plan to continue this competition until we hit 10PiB of valuable data stored on the network.
- **Make these important datasets accessible and explorable by anyone in the world.** Storing important datasets to the Filecoin network is a crucial step, but we also want people around the world to be able to access this data, explore it, and potentially use it for their own projects! All participants must store their data in such a way that it can be reused by others, and must provide public-facing documentation that shows exactly how to use the data that has been stored. We provide more specific documentation steps in the rules below.
- **Strengthen the Filecoin storage client and developer experience.** As you participate in this competition, you'll discover ways to improve the overall Filecoin storage client and developer experience. Your feedback is extremely valuable, and we're excited to improve the Filecoin product experience with you!
- **Have fun and build our developer and client communities!** We will have numerous opportunities for community members to connect, showcase their projects, and share insights with one another over the next few months. If you have an idea for a meetup or event, let us know by filing an [issue in the Slingshot repo](https://github.com/filecoin-project/slingshot)!

## How to Participate in Slingshot Phase 2

In this competition, participants are rewarded for storing [curated datasets](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) (i.e. public datasets approved for storage in this competition) in well-documented, thoughtful, and reusable ways.

Slingshot Phase 2 is a very different competition from Slingshot Phase 1. If you are participating in Phase 2, please read this section carefully!

To participate in Slingshot Phase 2, you must store one of the [curated datasets](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) that are listed on the Slingshot GitHub repo. Once you have made your dataset choice and determined a plan for storing this data, you can register to participate in the competition on the Slingshot website: [https://slingshot.filecoin.io](https://slingshot.filecoin.io "https://slingshot.filecoin.io"). Then, continue storing valuable data to earn more rewards.

To be eligible for rewards in this competition, you must follow the Competition Rules:

- Your project must be storing an approved [curated dataset](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) to Filecoin. If you would like to store a dataset that is not on this list, please submit a PR to the [filecoin-project/slingshot GitHub repo](https://github.com/filecoin-project/slingshot). Encrypted data will not count for rewards.
- No more than 30% of your total data can be stored with any one miner. This means that your project must be storing data with 4+ miners, but also that your data cannot be overly centralized to any one individual miner.
- You cannot store any data with your own miner. Data that is stored with your own miner will not be counted for final rewards. This may also be grounds for disqualification. You are allowed to store up to 10 replicas of the same piece of data on the network. If you store more than 10 copies of the same piece of data, we will not count the additional copies in the final rewards. If you store many more than 10 copies of the same piece of data, we may disqualify your team.
- Every data piece you store to the Filecoin network must be retrievable by others. This means you must place some care and thought into how you will be storing your dataset so that it can be retrieved by others. We will be scoring projects on the reusability and retrievability of the data from Filecoin, and adjusting rewards for teams that do not have retrievable data.
- In order to be eligible for rewards, you will need to submit and publish data processing and retrieval **documentation** through your account on the Slingshot website. We will also judge the quality of your documentation as part of the final review process. The documentation must include:
  - Which curated dataset you are storing and a link to the dataset.
  - Exact steps on how you processed the curated dataset and stored it to Filecoin.
  - Links to any tools that you used for pre-processing.
  - Exact steps for another person to retrieve, view, and use any of the stored data.
- In order to be eligible for rewards, you must submit a list of your successful deals that you have made on the Filecoin network. You can submit this list as a CSV upload to your account on the Slingshot website. Please submit this list as a text-based CSV that includes the 8 columns listed below, with the same names and order (example in [Google sheets](https://docs.google.com/spreadsheets/d/1qQzAvrJAtqukWKfGEaBgN5KKmd-KJmMXAA-gk-E4CEw/edit#gid=0), [CSV example on GitHub](https://github.com/filecoin-project/slingshot/blob/master/cid_list.csv)). Incomplete or incorrect lists may lead to disqualification, so please make sure to start preparing these lists as soon as possible. These lists may also be used by other participants in the Slingshot Phase 2 competition to build hacks on top of, so the deal lists must be usable by others.
  - **deal_id**: This is an integer uniquely identifying a deal on the Filecoin network. There may not be multiple rows with the same deal ID in your list submission. The deal ID must be findable on-chain (via `lotus state get-deal <deal_id>`).
  - **miner_id**: The id of form `f0XXXX` of the miner storing this particular deal.
  - **payload_cid**: The CID of the root of the DAG representing either the file or the directory contained in this deal. This is the CID you gave to `lotus client deal` if you are using Lotus.
  - **filename**: The human-readable filename of the resulting content (with any appropriate file extensions).
  - **file_format**: The data format (either mime-type or extension) for how a file recipient should interpret the data.
  - **deal_size_in_bytes**: The size of the deal in bytes.
  - **date**: The timestamp for when the deal was transacted in the following format (YYYY-MM-dd HH:mm).
  - **curated_dataset**: The name of the curated dataset you are storing (from [this list](https://github.com/filecoin-project/slingshot/blob/master/datasets.md)).

If you have questions at any point in the competition, check out:

- **Slingshot website**: [https://slingshot.filecoin.io](https://slingshot.filecoin.io "https://slingshot.filecoin.io"). This website is the source of truth for the entire Filecoin competition. It includes the most up-to-date rules, the competition leaderboard, events, and more!
- **Slingshot repo**: [https://github.com/filecoin-project/slingshot](https://slingshot.filecoin.io "https://slingshot.filecoin.io"). This repo contains important resources for the competition, such as the [datasets](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) that you can choose to store for the competition. You can create a new [Slingshot Discussion](https://github.com/filecoin-project/slingshot/discussions) to ask any questions about the program.
- **Slack**: If you haven't already, please join the [Filecoin Project Slack workspace](https://filecoin.io/slack) and these channels:
  - **#slingshot-announcements** – For major announcements about the Slingshot program
  - **#slingshot** – For debugging help and community conversations

## Rewards

We are excited to announce that Slingshot Phase 2 will distribute at least 500,000 FIL in rewards! This is in addition to the 50,000 FIL that will be distributed for Slingshot Phase 1.

## Storage Rewards

Slingshot reward pools are collaborative and competitive. The more data is stored to the network by Slingshot participants, the more reward pools you will unlock!

| Total Data Onboarded by Slingshot Participants | Reward Pool Unlocked for this Storage Tier (FIL) | Cumulative Reward Pool (FIL) |
| ---------------------------------------------- | ------------------------------------------------ | ---------------------------- |
| 500TiB (Phase 1)                               | -                                                | 50,000                       |
| 1PiB                                           | 50,000                                           | 100,000                      |
| 1.5PiB                                         | 25,000                                           | 125,000                      |
| 2PiB                                           | 25,000                                           | 150,000                      |
| 2.5PiB                                         | 25,000                                           | 175,000                      |
| 3PiB                                           | 25,000                                           | 200,000                      |
| More to be announced                           | -                                                | -                            |

Storage Rewards are distributed every month in which a storage tier has been unlocked. Our plan is to continue this competition for the next several months. We think it would be a lot nicer if we were able to give out rewards on a monthly basis instead of having to wait until the very end of the competition! As a result, we have monthly reward windows that we will use to determine final rewards distribution for the month. All deadlines below are at 1800 UTC.

| Reward Deadline      | Material Submission Deadline | Judging Period  | Winners Announced |
| -------------------- | ---------------------------- | --------------- | ----------------- |
| Dec 9, 2020          | Dec 11, 2020                 | Dec 14-16, 2020 | Dec 18, 2020      |
| Jan 27, 2021         | Jan 29, 2021                 | Feb 1-3, 2021   | Feb 5, 2021       |
| Mar 10, 2021         | Mar 12, 2021                 | Mar 15-17, 2021 | Mar 19, 2021      |
| More to be announced | -                            | -               | -                 |

- Reward Deadline: We will take a snapshot of the competition at this point to determine rankings/data stored. If no prize pools have been unlocked by this date, we will not distribute any rewards in this reward period.
- Material Submission Deadline: This is the deadline to submit additional materials, e.g. CID lists and documentation. Participants will submit this information through the Slingshot website.
- Judging Period: Community Reviewers will review all projects during this period, and determine valid data stored and final rewards.
- Winners Announced: Final rewards are determined and winners are announced. Rewards will be distributed within 1-2 weeks after this date and all rewards vest over 6 months from distribution date.

Storage Rewards will be **distributed proportionally** based on the amount of **new valid data** that Slingshot participants have stored in the reward window. The amount of valid data might be different than the total data you have stored, after accounting for too many redundant copies, unretrievable data, datasets that don't match the curated dataset list, poor documentation, if you have lots of unretrievable data, and more. Some teams may be outright disqualified for not following the rules, so make sure you follow the rules please!

## Booster Rewards

In addition, we will be offering **Booster Prizes** in Slingshot Phase 2! If you follow the rules and store more than 50GiB of **new data** in the reward window, you will receive a 10FIL Booster Prize.

Other prizes may become available over time as well!

Note: All rewards earned will vest linearly over six months from mainnet launch. Additionally, while we don't expect it, in the unlikely event that Protocol Labs or the Filecoin Foundation determine in their sole discretion that legal or regulatory issues prevent the delivery of any portion of rewards, the rewards may be restructured, postponed, or cancelled.

## Thank you

We are excited to continue the Slingshot competition with familiar Phase 1 participants and new faces alike! Your efforts will greatly contribute to continue to grow the amount of real data stored on humanity's largest decentralized storage network. Thank you to the Filecoin storage client, developer, and mining communities. Onward to Slingshot Phase 2!
