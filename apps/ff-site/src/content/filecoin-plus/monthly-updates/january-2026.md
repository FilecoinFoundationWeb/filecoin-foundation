---
title: "Fil+ January 2026 Monthly Update"
created-on: 2026-01-20T10:00:00.000Z
updated-on: 2026-01-20T10:00:00.000Z
published-on: 2026-01-20T10:00:00.000Z
description: "A recap of Filecoin Plus activity in January 2026, including DataCap distributions, SLA guidance for allocators, and other governance updates."
add-table-of-contents: false
seo:
  description: "A recap of Filecoin Plus activity in January 2026, including DataCap distributions, SLA guidance for allocators, and other governance updates."
---

Slides: [2026 January 20 Governance Call](https://docs.google.com/presentation/d/1jMBsH8jwq6KX1oJsJX_A9EzWEWQ1AHrOieWUzZto0h4/edit?usp=drive_link)

Recordings: [Available on Youtube](https://www.youtube.com/playlist?list=PLp3zrT1ewY0kYN1hJpERMUxTCbFC4yZwN)

## DataCap Refresh

[January DC distributions](https://github.com/filecoin-project/Allocator-Governance/issues/485)

- Yunphant – 2.5PiB
- LiongLanbs – 5PiB
- SDMR – 5PiB

**January In Progress**

- CoverMe: 1st Refresh – to be posted on Jan 15th
- QC DataCenter: 7th Refresh – 10PiB

## Datacap-bot Internal Server Error [fixed]

Error caused by the inconsistencies in data from our provider caused error on report generation. Issue is now resolved.

## Program Notes

- Reminder of the guidance for Allocators: blog post is coming, please see slide 18 from the [16Dec2025 Community Call](https://docs.google.com/presentation/d/1ccroz2-vYbYBcPzf1udOS3yjQTNrTZewwBc5CyJgK50/edit?usp=drive_link).
- Remember that beginning in Q1 2026 all enterprise clients need to have payment associated with their datasets. **For Open Data Allocators, at least 25% of DC given out in Q1 2026 should have a payment associated with it.**
- [Allocator Scores](https://datacapstats.io/allocators) are key to swift renewals.

## SLAs and Allocator's Role in Monitoring

We are working on a system to enable allocators and SPs to register SLAs between SPs and Clients. For now, whenever a Client requests DataCap you should ask them what Storage Class they expect from SPs. There are three Storage Classes the client can choose:

|                            |                                                                                               | Hot      | Warm     | Nearline |
| :------------------------- | :-------------------------------------------------------------------------------------------- | :------- | :------- | :------- |
| Downloadable by anyone     | % of RPA checks that have to pass                                                             | Over 90% | Over 75% | Over 50% |
| Downloadable by the client | % of full file downloads that have to succeed                                                 | Over 90% | Over 75% | Over 50% |
| TTFB                       | How long before I receive the first byte of my file?                                          |          |          |          |
| Stability                  | How many RPA timeouts are acceptable?                                                         |          |          |          |
| Durability                 | How many window misses are acceptable?                                                        |          |          |          |
| Retention                  | For how long should the SP ensure that the data is available (otherwise known as deal length) |          |          |          |

For now the client application form will be enhanced to include a question about the Storage Class they're purchasing. In the coming months we will be introducing on-chain registration and monitoring of the SLA performance, which will have a direct impact on the renewal decisions. The most important part is that you, the SP and the client know what level of service is expected, and you as an Allocator can interject when the SLAs are not met.

![SLA Guidance](/assets/images/filecoin-plus-january-2026-report.webp)

## Other Governance Items of Note

- [Filecoin Onchain Cloud](https://filecoin.cloud/) is nearing launch!
- [Planning for NV28](https://github.com/filecoin-project/core-devs/discussions/205) has kicked off, now is the time to weigh in for implementers to understand your technical requests for the coming upgrade
- A new [community FIP Dashboard](https://tanisha-fil.github.io/fips-dashboard/fips-dashboard-static.html) is available for Beta testing
- Read more about [Navigating the Future of Filecoin Governance: the Constellation Program](https://fil.org/blog/navigating-the-future-of-filecoin-governance-the-constellation-program)
- [Modernizing Filecoin governance through the Constellation Program with Michael Madoff | DWeb Decoded](https://youtu.be/3tZAiI4Xhls?si=AWXvNt9rZoWKDSx2)
