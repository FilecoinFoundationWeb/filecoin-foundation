---
title:
  "Filecoin Ecosystem Metrics Roundup: Building a Data-Driven Foundation for
  Growth"
excerpt:
  "Welcome to the inaugural edition of the Filecoin Ecosystem Metrics Roundup, a
  monthly series designed to align our community around the metrics that matter
  most for sustainable ecosystem growth."
share_image: /assets/images/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
image:
  url: /assets/images/170366980-78f835fb-8168-4914-9a75-d62b1a157133.webp
publishedOn: 2025-06-26T13:18:47.060Z
categories:
  - updates
dim_image: true
seo:
  description: "Explore the inaugural Filecoin Ecosystem Metrics Roundup, focusing on key metrics like daily data onboarding, client engagement, paid deals revenue, and economic activity to foster data-driven decisions."
---

Welcome to the inaugural edition of the Filecoin Ecosystem Metrics Roundup, a monthly series designed to align our community around the metrics that matter most for sustainable ecosystem growth. This series will focus on metrics education, analysis, and optimization to drive data-informed decision making across the Filecoin ecosystem. The goal is to create transparency around key contributors to ecosystem growth, propose actionable next steps, and establish a shared understanding of where our ecosystem stands and where it's headed.

## The Power of Data-Driven Decision Making

Before diving into specific metrics, it's crucial to understand why enhancing our data-driven approach matters for the Filecoin ecosystem. Data reporting / analysis in any ecosystem distributes knowledge, drives alignment, cultivates transparency, increases velocity of execution, and supports better decision making.  

The Filecoin ecosystem has reached a critical inflection point where, having successfully bootstrapped supply, the network’s focus has shifted to client demand generation and real-world adoption. This transition requires a more sophisticated approach to metrics that goes beyond simple growth numbers to fully understand the underlying health and sustainability of the network. Below are the guiding goals this blog series will focus on:

- Increase revenue from paid storage deals 
- Increase the number of happy Filecoin clients
- Optimize in-network service activity and value accrual to the Filecoin economy

## [The Four Core Metrics](https://github.com/davidgasquez/filecoin-data-portal/issues/128) of Filecoin Ecosystem Health

After extensive analysis and community input, we've identified four core metrics that best capture the essential dynamics of the Filecoin ecosystem. These metrics provide a comprehensive view of network growth, client satisfaction, revenue generation, and overall economic activity.

### 1. Daily Data Onboarding (Raw PiBs)

- Daily data onboarding provides the best proxy for actual data storage activity. This metric tracks the daily amount of raw data being onboarded to the Filecoin network, measured in pebibytes (PiBs
- The data originates from the [Spacescope API](https://docs.spacescope.io/) and reflects trends in meaningful network usage

![](/assets/images/screenshot-2025-06-24_08_54_26.png)

### 2. Number of Clients with More Than 1TiB Active Data

- This metric serves as a proxy for client engagement and satisfaction.
- This metric counts unique client IDs that maintain more than one tebibyte of active data on the network.  1 TiB has been chosen as a baseline as it covers most of the clients that interact with the protocol while removing the noisy ones. The calculation identifies deals that are active at any point in time by ensuring the sector has started and hasn't yet ended or been slashed. 

This data comes from the [State Market Deals tables in Lily BigQuery](https://lily.starboard.ventures/data/actors/#storage-market-actor).

![](/assets/images/screenshot-2025-06-24_08_54_51.png)

### 3. Total FIL in Paid Deals

- This metric exclusively tracks storage deals with a storage cost greater than 0.001 FIL, providing a clear indicator of real revenue generation within the ecosystem. It reflects meaningful demand for decentralized storage and the ecosystem's capacity to generate revenue.
- This metric focuses on State Market Deals where storage providers set meaningful pricing for their services. 
- The price is extracted from the [storage_price_per_epoch](https://lily.starboard.ventures/data/actors/#storage-market-actor) value, converted from attoFIL to FIL, and calculated as [storage_price_per_epoch_fil](https://lily.starboard.ventures/data/actors/#storage-market-actor) multiplied by deal_length_epochs.

![](/assets/images/screenshot-2025-06-24_08_55_05.png)

### 4. Total Value Transacted Plus Gas Fees

- This metric provides a comprehensive view of network economic activity and demonstrates the broader utility of the Filecoin blockchain beyond storage. This metric becomes increasingly important as the Filecoin ecosystem expands beyond storage to include DeFi applications, with innovations like [USDFC](https://app.usdfc.net/#/) (a FIL-backed stablecoin) helping retain economic activity within the ecosystem.
- Combining two essential economic indicators, this metric captures both the total value of FIL transacted per day and associated gas fees. 

The data originates from [Lily's derived_gas_outputs table](https://lily.starboard.ventures/data/chain/#derived_gas_outputs), which contains raw transaction and gas data joined with manual mappings of actor methods.

![](/assets/images/screenshot-2025-06-24_08_55_25.png)

## Current State: The Data Tells a Story of Transformation

The current metrics paint a picture of an ecosystem in transition. [Network utilization has reached approximately 31%](https://numbers.filecoindataportal.xyz), signaling increased demand for actual storage services rather than speculative capacity building. The storage provider landscape itself reflects this evolution, with a shift from focusing on raw capacity to delivering useful, client-driven storage. 

Early network phases prioritized onboarding maximum storage; this next phase must place a higher emphasis on actual usage and retrievability. Now, as the Filecoin ecosystem focuses on demand generation and adoption, storage providers are adapting by pursuing paid deals and ensuring robust data retrieval capabilities.

This transformation is supported by significant protocol upgrades, including the successful launch of Fast Finality (F3) in April 2025 –– bringing 100x improvements in transaction speeds –– and the deployment of Proof of Data Possession (PDP) in May 2025, enabling efficient hot storage without the overhead of traditional sealing.

## Building a Data-Driven Culture: Next Steps and Actions

The transition to a truly data-driven Filecoin ecosystem requires more than just collecting metrics — it demands the capability to distinguish between routine variation and meaningful signals of change.

Immediate Actions for Ecosystem Participants:

- Learn actively: Check out the [curated directory](https://filecointldr.io/filecoin-data-directory) Ansa Research has compiled of key metrics and data sources.
- Join the conversation: We have a [metrics-focused channel in the Filecoin Slack](https://filecoinproject.slack.com/archives/C03Q3K96BQU) for folks to ask questions and learn more. We will share further content there. 
- Engage in the community: Check out the blogs highlighting upcoming general ecosystem happenings. 

## Appendix: Where to Find the Data

Understanding where to access reliable Filecoin data is crucial for making informed decisions. The ecosystem has developed a robust set of analytics platforms and specialized dashboards that provide different perspectives on network health and performance. Ansa Research has compiled a [curated directory](https://filecointldr.io/filecoin-data-directory) of key metrics and data sources that serve as an excellent starting point for both regular monitoring and comprehensive research. 

- Primary Analytics Platforms  
  - [Spacescope API](https://docs.spacescope.io/) for comprehensive network data
  - [Filecoin In Numbers](https://numbers.filecoindataportal.xyz/) for public dashboards 
  - [Dune Analytics](https://dune.com/kalen/filecoin-daily-metrics) for community-driven metrics
  - [Filecoin Pulse](https://pulse.filecoindataportal.xyz/) for client/provider/allocator level metrics 
  - [Lily BigQuery](https://lilium.sh/) for detailed on-chain data tables
- Specialized Dashboards 
  - [Filecoin Storage Providers Market Dashboard](https://filecoin-project.github.io/filecoin-storage-providers-market/) for SP performance and service class metrics
  - [DataCap Stats](https://datacapstats.io/) for Fil+ program statistics 
  - [Filscan](https://filscan.io/en/) for network browsing with SP analytics and calculators

---

_Sources from AI Labs_

1. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/48967387/ca694285-119a-47be-b4e6-5f3f5ca2bddb/Metrics-Blog-Scaffolding-Doc.pdf](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/48967387/ca694285-119a-47be-b4e6-5f3f5ca2bddb/Metrics-Blog-Scaffolding-Doc.pdf)
2. [https://fil.org/blog/filecoin-foundation-s-vision-and-strategic-priorities-for-2025](https://fil.org/blog/filecoin-foundation-s-vision-and-strategic-priorities-for-2025)
3. [https://filecointldr.io/article/state-of-filecoin-2025](https://filecointldr.io/article/state-of-filecoin-2025)
4. [https://filecointldr.io/article/key-trends-and-takeaways-from-filecoin-q1-2025](https://filecointldr.io/article/key-trends-and-takeaways-from-filecoin-q1-2025)
5. [https://cryptorank.io/news/feed/2c4cf-filecoin-sees-an-increase-in-storage-deals](https://cryptorank.io/news/feed/2c4cf-filecoin-sees-an-increase-in-storage-deals)
6. [https://filecoin-data-onboarding.gitbook.io/filecoin-data-onboarding-guide](https://filecoin-data-onboarding.gitbook.io/filecoin-data-onboarding-guide)
7. [https://cointelegraph.com/news/filecoin-storage-utilization-surpass-7-percent-in-q2-report](https://cointelegraph.com/news/filecoin-storage-utilization-surpass-7-percent-in-q2-report)
8. [https://dune.com/kalen/filecoin-daily-metrics](https://dune.com/kalen/filecoin-daily-metrics)
9. [https://grafana.com/grafana/dashboards/21347-filecoin-api-methods-statistics/](https://grafana.com/grafana/dashboards/21347-filecoin-api-methods-statistics/)
10. [https://filecoin-project.github.io/filecoin-storage-providers-market/](https://filecoin-project.github.io/filecoin-storage-providers-market/)
11. [https://datacapstats.io](https://datacapstats.io/)
12. [https://docs.spacescope.io](https://docs.spacescope.io/)
13. [https://coinstats.app/coins/filecoin/](https://coinstats.app/coins/filecoin/)
14. [https://filecoin.io/blog/posts/understanding-filecoin-data-aggregators-for-storage-providers/](https://filecoin.io/blog/posts/understanding-filecoin-data-aggregators-for-storage-providers/)
15. [https://boost.filecoin.io/monitoring/setting-up-a-monitoring-stack-for-boost](https://boost.filecoin.io/monitoring/setting-up-a-monitoring-stack-for-boost)
16. [https://cointelegraph.com/news/filecoin-lockheed-martin-test-decentralized-data-protocol-in-space](https://cointelegraph.com/news/filecoin-lockheed-martin-test-decentralized-data-protocol-in-space)
17. [https://asq.org/quality-resources/statistical-process-control](https://asq.org/quality-resources/statistical-process-control)
18. [https://en.wikipedia.org/wiki/Statistical_process_control](https://en.wikipedia.org/wiki/Statistical_process_control)
19. [https://www.6sigma.us/six-sigma-in-focus/statistical-process-control-spc/](https://www.6sigma.us/six-sigma-in-focus/statistical-process-control-spc/)
20. [https://www.prosocia.com.au/blog/process-behaviour-charts](https://www.prosocia.com.au/blog/process-behaviour-charts)
21. [https://mitsloan.mit.edu/ideas-made-to-matter/data-literacy-leaders](https://mitsloan.mit.edu/ideas-made-to-matter/data-literacy-leaders)
22. [https://www.linkedin.com/pulse/understanding-your-business-variability-vice-president-at-scmo2](https://www.linkedin.com/pulse/understanding-your-business-variability-vice-president-at-scmo2)
23. [https://uk.indeed.com/career-advice/career-development/statistical-process-control](https://uk.indeed.com/career-advice/career-development/statistical-process-control)
24. [https://pump.academy/articles-and-whitepapers/how-to-build-an-xmr-chart-for-your-kpi/](https://pump.academy/articles-and-whitepapers/how-to-build-an-xmr-chart-for-your-kpi/)
25. [https://fil.org/blog/fresh-from-ff-june-2025](https://fil.org/blog/fresh-from-ff-june-2025)
26. [https://docs.filecoin.io/storage-providers/filecoin-deals/return-on-investment](https://docs.filecoin.io/storage-providers/filecoin-deals/return-on-investment)
27. [https://filecoin.io/blog/posts/filecoin-news-101/](https://filecoin.io/blog/posts/filecoin-news-101/)
28. [https://filecoin.energy](https://filecoin.energy/)
29. [https://bcn.co.uk/resources/statistical-process-control-for-operations-management/](https://bcn.co.uk/resources/statistical-process-control-for-operations-management/)
30. [https://www.moresteam.com/toolbox/statistical-process-control](https://www.moresteam.com/toolbox/statistical-process-control)
