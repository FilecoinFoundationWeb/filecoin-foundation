---
title: Monitoring booster-http Retrievals
draft: false
excerpt: >-
  Learn how to monitor and troubleshoot booster-http retrievals as a Filecoin
  Storage Provider.
share_image: /uploads/monitoring.booster.http.retrievals.webp
image:
  url: /uploads/monitoring.booster.http.retrievals.webp
date: 2023-08-01T15:15:08.605Z
categories:
  - updates
dim_image: true
author: Mayank Pandey
related_article_1: content/blog/posts/boost-monitoring-stack.en.md
related_article_2: content/blog/posts/protecting-booster-http-with-nginx.en.md
related_article_3: content/blog/posts/serving-files-with-booster-http.en.md
---

With the recent introduction of [serving files over HTTP](https://boost.filecoin.io/http-retrieval), storage providers will need to monitor the health of booster-http retrievals. To learn more about how to serve HTTP retrievals as a Filecoin storage provider, please reference our earlier blog posts on [serving files with booster-http](https://filecoin.io/blog/posts/serving-files-with-booster-http/) and [protecting booster-http with nginx](https://filecoin.io/blog/posts/protecting-booster-http-with-nginx/). 

Once storage providers have set up their booster-http service, it is important to monitor HTTP retrieval activity to ensure a smooth experience for clients. 

## Setting Up the Monitoring Stack in Boost

Get started by setting up the Boost monitoring stack. Boost [provides an out-of-the-box setup](https://boost.filecoin.io/tutorials/setting-up-a-monitoring-stack-for-boost) based on docker containers, which gives visibility into the Boost processes, including booster-http. Storage providers can also utilize their existing Prometheus and Grafana instances to scrape metrics directly from the different Boost services.

## Monitoring HTTP Retrievals

1. If you are utilizing your own Grafana instance, login. If you set up the monitoring stack based on the above instructions, you can access your Grafana dashboard using SSH forwarding: `ssh -fNL 3333:localhost:3333 <Server IP running the monitoring stack>`
2. Once port forwarding is enabled, the Grafana dashboard can be accessed on your local browser at port [3333](http://localhost:3333/).
3. Login with the following credentials: User - admin; Password - admin
4. Navigate to the Dashboards section in the left menu pane
   ![](</uploads/image-(3).png>)
5. Click on the “Provider Retrievals” item in the list of dashboards. You will see 6 sections:

- boost
- graphsync
- booster-bitswap
- booster-http: ipfs-gateway
- booster-http
- piece reader

For monitoring booster-http, there are two relevant panels: booster-http and booster-http:ipfs-gateway.

### Monitoring booster-http: ipfs-gateway

![](</uploads/image-(4).png>)

#### HTTP Gateway Bytes Served

The “Http Gateway Bytes Served” dashboard shows the number of bytes served over the selected time period. This value can vary depending on the total number of requests received and the size of the required item. Storage providers can gain insight into their low and high bandwidth usage time periods using this graph. It can also be used to better understand rate limiting and network bandwidth allocation for the reverse proxy used by booster-http. 

#### Block Get Requests and Block Get Response Counts

The Get request will be equal to the total number of responses (success and failure). If a high number of failure responses is observed, then we recommend further investigation (please see the section below on "Investigating Booster-http retrievals") to rule out Local Index Directory issues or network indexer ingestion problems.

Both graphs should have a similar pattern, with a slight time delay on the response panel.

#### Block Get Success and Failure Rate

This dashboard provides the success and failure rates of the GET requests received by the booster-http service on the /ipfs path. If the failure rate is high then we recommend further investigation (please see the section below on "Investigating Booster-http retrievals") to understand the root cause of the failures.

### Monitoring Booster-http

![](</uploads/image-(5).png>)

#### Goroutines

The [goroutines](https://go.dev/tour/concurrency/1) dashboard displays the total number of goroutines utilized by the booster-http process (piece retrievals and file retrievals). The value of this dashboard will vary depending on the number of requests being received by the server. Storage providers need to monitor this dashboard for a holistic view of the booster-http process. For example:

- If goroutine activity is high and the corresponding number of retrievals is low, then there are likely goroutine leaks.
- If there’s a steady increase in goroutine activity, but retrieval patterns are not constant, there may be an issue.

All goroutine related problems must be reported in the #boost-help channel in [Filecoin slack](http://filecoinproject.slack.com/), or by [filing a github issue](https://github.com/filecoin-project/boost/issues).

#### Piece by CID Request and Response

These two graphs refer to the number of requests received on the HTTP URL path “/piece” and the corresponding number of responses. If you are seeing many failures in the response panel, it could be due to a number of reasons:

- A retrieval bot is using the network indexer to fetch data from your storage provider, but the network indexer has not yet finished syncing details of your SP or might have encountered an error during the sync.
- Someone may be trying to randomly retrieve data. The aim behind it is unknown, but could be an attempted DDOS attack, or an attempt to overload bandwidth, etc.

Storage providers must check their Local Index Directory page in the Boost UI to ensure that all pieces are locally indexed correctly. They should also verify that the network indexers are actually able to sync and ingest the local copy of the indexes.

#### Piece CID request Duration

Depending upon the piece size, the amount of time it takes to serve a piece will vary. This dashboard can provide insights on the following trends:

- How fast data is being fetched from lotus storage.
- How fast data is being served to the client.
- Latency with serial read vs. random read of a piece from a sector.

### Investigating Booster-http retrievals

If there is a high failure rate in the monitoring dashboards, storage providers can investigate or  troubleshoot to establish a possible root cause. Start with the following: 

- Go to the Local Index Directory page in the Boost UI and check if you have flagged pieces. This indicates that there was some problem when locally indexing the pieces. This can be resolved by re-indexing the flagged pieces from the Local Index Directory page in the Boost UI.
- Storage providers can also see if there are sectors missing unsealed copies. We recommend unsealing these sectors to reliably serve retrievals. Missing unsealed copies could potentially cause a higher failure rate of HTTP retrievals.
- If a storage provider’s Local Index Directory page is healthy, then check the booster-http process logs. Look for patterns of warning or error messages. You can search for the error message text in the [Boost GitHub](https://github.com/filecoin-project/boost). 

During the troubleshooting process, if you are not sure about what to do next, please reach out in #boost-help in Filecoin slack.

You can stay up to date on Boost by following our [GitHub](https://github.com/filecoin-project/boost). Please use the [Boost Discussion Board](https://github.com/filecoin-project/boost/discussions) to provide feedback and requests to help shape the future direction of the project.
