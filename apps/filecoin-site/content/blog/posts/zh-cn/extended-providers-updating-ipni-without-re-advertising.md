---
title: 为大负荷设计的Filecoin索引器可扩展方案
excerpt: 这篇文章描述了一个简单的策略，可将大量涌入的索引负荷分散到由索引器节点组成的索引池中。同时，它让这个索引池具备可扩展性。
share_image: /uploads/blog_header_for_the_announcement_of_the_ipni.webp
date: 2023-04-05T16:00:00.000Z
categories:
  - updates
dim_image: true
draft: true
---

索引器扩容的最终目标是10^{15} 个索引。这并非存储数据的字节大小，而是存储索引的数量。一个索引实际上就是一张描述了CID标识与内容提供者数据之间关系的映射图。实际的数据规模将会远大于此。目前，我们可处理约10^{12}个索引，随着时间的推移，我们会通过一列步骤向最终的扩容目标前进。
目前，大部分的索引负荷是由涌入的索引数据构成的。新增的数据可能超过单一的索引器能够承受的范围（速率和数量），它还在极速增加。因此，目前扩容路上最迫切的目标，就是处理增加中的涌入负荷。
\## 方案：处理索引涌入的简单策略
\### 数据涌入
一个索引器接收到某个发布者传来的“announce”消息，宣布已经有新的索引数据广告时，就会发生数据涌入。作为回应，该索引器会从发布者那里检索所有尚未检索过的索引数据。随着发布者数量增加，在某个时候，单一的索引器节点将无法跟上新增索引数据发布的速率，也可能没有足够的存储空间来全部存储这些数据。
\### 分散涌入负荷
索引器扩容处理拥堵负载，是基于一个简单策略——将涌入的索引负荷分散到由索引器节点组成的索引池中，这样就能根据容量需求来增加节点，而不需要将数据到处移动来重新达到均衡。它先是分配不同的内容 \_发布者\_ 给不同的索引节点，这样每个节点可以处理涌入负荷的一部分。这是通过使用单独的轻量服务Assigner Service来实现的，后者不属于关键的索引涌入路径的一部分。
当一个索引器达到了配置的存储限制后，它就会停止吸纳新增的索引数据，而索引池里的其他索引器会从分配给完整索引器的发布者那里恢复吸纳数据。如果存储容量和涌入负荷分配需求增加， 池子里就会增加更多的索引器节点。
这个扩容策略的三个主要组件是 **分配服务（Assigner Service）**: 它将发布者分配给索引器。 **索引器冻结模式（Indexer Frozen Mode）**: 这种索引器运作模式里，新内容不会被索引。 **移交发布者任务**: 将冻结中的索引器的发布者任务重新分配给活跃的索引器，以在冻结索引器停止运行后恢复索引。
这篇文章会概括描述这些组件。可以在设计文档 和\[设计展示]\(https://docs.google.com/presentation/d/1oPvVNoR5y2CMeo-3ujjz8IsHhIgk8ZqFNMBV9sZ5fSA/edit#slide=id.g179232d2b4e\_0\_146)中获取更多信息。
\### 扩容策略的优缺点
**优点:** 更少的同步工作：不需要让每一个索引者与每一个发布者同步。 元数据不会重复发送给多个索引器（这跟密钥分片key-sharding一样）：元数据只会在处理提供者的索引器上存在。 索引器之间不会分享数据。它们各自管理自己的发布者链。 不需要只为了检查提供者而去阅读广告（advertisements），这与提供者分片（provider sharding）一样。 索引器可有不同的存储容量。 不需要共识机制。 涌入负荷可重新分配，而无需在索引器之间移动数据。
**缺点：** 不平均的分配：一些发布者可能会比其他发布者索引更多的数据。 查询请求需要分散和合并：查询请求会重复发送给所有索引器，而响应会合并成一个发送给客户。 提供者更改发布者可导致重复索引（这与提供者分片不一样）。 增加索引者不会马上起效，除非一个现有的索引器达到了存储容量限制。
这方案的整体好处是它的实施方案相对简单，也能去除拥堵扩容的限制。
\## 分配服务（ssigner Service）
分配服务（AS）负责将发布者分配给在其配置索引器池中的索引者。对一个索引器池来说，它作为单一实例运行在其管理的索引器所在的同一网络上。一个索引器只能作为一个分配服务的索引器池里的成员。
除了将新的发布者分配给索引器外，分配服务还检测检索器节点是否进入了冻结模式，并负责将发布者从冻结索引器重新分配给非冻结的索引器。索引服务还通过gossip pubsub渠道重新发布直接的HTTP公告，这样池中的所有索引器都能接收到这些信息。
基于几个假设，分配服务是用于单个私有部署中使用：任务可以发给任何索引器，所有索引器的管理API是在私有网络上运行（或类似的受保护网络），而且也没有建立任何方式或协议让不同的参与方管理池子中要添加或移除的节点。
!\[]\(/uploads/assigner.webp)
\### 将一个发布者分配给一个索引器一个索引器接收到某个发布者传来的“announce”消息，宣布已经有新的索引数据广告时分配服务会监听gossip-sub和直接的HTTP消息——这些消息主要是宣布新广告（advertisements）可被获取了。它从每一条消息中读取发布者信息，并判断发布者是否已经分配给需要的索引器。如果答案是否定的，该分配服务就会选择任务量最少的索引器，并将该发布者分配给这个索引器。在分配任务后，索引器会收到来自发布者的公告，并自行处理涌入数据。
索引服务会处理离线的索引器，它所用的方式能避免在索引器池里过度分配任务。索引服务还支持将特定发布者分配给特定索引器的\[配置]\(https://pkg.go.dev/github.com/ipni/storetheindex@v0.5.7/assigner/config#Indexer) 选项。
\### 进一步阅读材料： 非持久化任务状态（No Persisted Assignment State） 意味着索引器能在任何时候停止或重启。 索引器池（An Indexer Pool） 在某个单一部署中的索引器节点的集合。 任务复制（Assignment Replication） 将发布者分配给多个索引器。
\## 索引器冻结模式
索引器存储使用触及到配置 \`\[FreezeAtPercent]\(\<\`\[\`https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer\`]\(https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer "https://pkg.go.dev/github.com/ipni/storetheindex/config#Indexer")\`>)\` 的限制后，索引器自动进入“冻结”模式。这个运作模式里，索引器不再存储新增的索引数据，但还是会处理索引数据的更新或删除。一个冻结的索引器不会接受新的发布者任务。在其内部，该索引器追踪它已读的每一个广告链，目的是纳入（ingesting）广告（与更新和移除任务相关的）。索引器会持续响应对索引数据的查询。
索引器也可以通过其管理(admin) API来手动进行冻结。这可以是为了暂时冻结纳入数据，直到索引器的存储容量提升为止（或使用分配服务）。这样，持续的索引工作可以被其他索引器节点代替。
\### 进一步阅读材料： 磁盘使用监控（Disk Usage Monitoring） 由每一个索引器负责。 冻结的能力不依赖于分配服务（Freeze capability does not depend on AS）。 解除冻结的能力可让索引器恢复索引工作。
\## 发布者移交
分配服务定期统计索引器，要是它发现某个索引器被冻结，它就会将该被冻结的索引器分配的发布者重新移交给其他索引器——活跃的索引器会继续之前冻结索引器上所做的工作。在移交过程中，活跃的索引器也会从冻结的索引器那取得提供者及其相关的进一步信息。
分配服务决定哪一个索引器将接收发布者的移交工作——这与分配新发布者的逻辑一样。每一个发布者的移交过程都会单独进行这一步骤，这样冻结索引器的任务就会分配给池子里的可用索引器。
\### 进一步阅读材料： 分配服务可以恢复不完整的移交任务。 \发布者数据在冻结和活跃索引器之间分发。\
\# 设立带有分配服务的索引器池
\[这里]\(https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#setting-up-indexer-pool-with-assigner-service) 描述了设立带有分配服务的索引器池的过程。可概括为以下步骤： \[部署索引器（Deploy Indexers）]\(https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#deploy-indexers) \[部署分配服务（Deploy Assigner Service）]\(https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#deploy-assigner-service) \[按需部署额外的索引器（Deploy additional Indexers as needed）]\(https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#example-assigner-service-configuration)
这里还提供了\[分配服务配置模板文件]\(https://github.com/ipni/storetheindex/blob/main/doc/assigner-deployment.md#example-assigner-service-configuration) 。
