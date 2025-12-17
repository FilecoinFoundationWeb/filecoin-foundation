---
title: Curio简介：Filecoin存储提供者的Lotus-Miner替代方案
excerpt: 我们非常高兴宣布推出Curio Storage，这是由Lotus-Miner和Boost团队共同研发的新产品
share_image: /uploads/CurioBlog.webp
image:
  url: /uploads/CurioBlog.webp
date: 2024-05-06T22:00:00.000Z
categories:
  - updates
dim_image: true
---

我们非常高兴宣布推出[Curio Storage](https://curiostorage.org/)，这是由Lotus-Miner和Boost团队共同研发的新产品！Curio旨在成为Lotus-Miner的卓越替代品，在系统冗余、简易型、可扩展性和整体性能方面都有显著改善。有了Curio，数据中心成为Filecoin存储提供者(SP)变得前所未有的简单，Curio能够以最短的操作时间提供可靠的SP存储证明和封装。

## 为何选择Curio

1.冗余一切:Curio通过多个守护进程、worker类型和数据库节点提供强大的冗余功能，所有这些都可以无缝协调，消除单点故障。种设计确保了存储操作的最长正常运行时间和可靠性。

2.简单性:Curio通过将所有功能整合至单个二进制文件来简化工作流程，无需单独-miner和-worker二进制文件。该系统使用Yugabyte进行数据库管理，但在安装和扩展之后，无需进一步操作。

3.可扩展性:Curio凭借其强大的任务管理系统，确保了稳定而出色的可扩展性，让您的存储业务在增长时不会遇到瓶颈。

4.提高利用率:Curio类似Mesos的方法可确保每个任务只使用必要资源，最大限度地发挥硬件价值，您就能够从相同资源中收获更多。

5.容错性:Curio的容错设计利用冗余来覆盖操作的各个方面，包括PoST、封装、守护进程节点和Yugabyte数据库副本，这种整体冗余策略可确保即使在中断期间也能顺利运行。

6.精细或粗糙配置:Curio灵活的配置层让您能够根据需求定制系统，从启用特定功能到广泛类别，甚至是所有功能。

7.支持多个Miner ID: Curio能够在同一硬件上无缝管理数十个Miner ID，无需额外配置，使之成为大规模操作的理想选择。

8.轻松迁移:我们的引导式设置使迁移变得简单而高效，仅需5分钟即可用Curio替换Lotus-Miner。设置工具提供英文、韩文和中文版本，确保不同用户群的顺畅过渡。

9.任务恢复:如果出现任何问题，Curio会对任务进行合理次数的重试，必要时甚至会将任务迁移到其他可用硬件上，从而防止硬件故障造成损失。

10.GUI:启动“GUI”层会启动一个基于网络的综合仪表盘，提供实时监控、详细状态和优化运行的工具——开箱即用，无需登录任何服务。

## 欢迎您亲自体验

Curio的“Lotus Miner V2”架构为SP带来了生活质量的显著改善，马上体验下吧！

步骤1:将Lotus git存储库更新至release /curio-beta分支:

```bash
git pull
git checkout releases/curio-beta
make clean deps all
```

步骤2:在Lotus-Miner机器上（无论网络如何：dev、calibration、main），运行:

```bash
curio guided-setup
```

## Curio如何运作？

Curio的核心是容纳harmony_task表的Yugabyte数据库集群。每项处理工作都是从 “发现”需要某项任务开始。添加任务的尝试会有一些特定于任务的唯一索引，使二次添加无效。然后，贪婪的节点会争先恐后地申请任务。无法完成任务的节点会被取消资格，而那些具有不良特征的节点则会被延迟。最终，该轮竞标的获胜者会尝试这项工作。

失败将反馈至harmony_task并重新开始竞标。对于中断，系统会检测到静默状态，并且会重新竞价，任务的重试次数有限。此外，worker可以“完成”不再有意义的任务（例如，在时间已过的情况下尝试PoST）。

由于每个任务的最大资源消耗量都是从机器总容量中减去的，因此，每个节点的工作量最多可达其硬件容量。请注意，有些封装任务被拆分成更多步骤，以便更准确地表达资源成本，从而完成更多的总工作量。

建立在任务框架之上的是我们熟悉的Lotus软件，用于管理PoST和封装。但是命令行很奇怪，一些特定于链的命令已经转移至`sptool`，这将是新的链专用用户界面。

## 了解更多

欲知更多信息，或在Filecoin Slack上关注#fil-curio-dev ，以及在[#fil-curio-announcements](https://filecoinproject.slack.com/archives/C06V5B3B7CJ)上提问。
