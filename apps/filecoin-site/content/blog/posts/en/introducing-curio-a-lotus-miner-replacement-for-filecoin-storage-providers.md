---
title: "Introducing Curio: A Lotus-Miner Replacement for Filecoin Storage Providers"
draft: false
excerpt: >-
  Meet Curio! It's never been easier for a data center to be a Filecoin Storage
  Provider (SP) than with Curio, which takes care of the responsibilities of
  reliable SP storage proving & sealing with minimal operations time.
share_image: /uploads/CurioBlog.webp
image:
  url: /uploads/CurioBlog.webp
author: Andy Jackson
date: 2024-05-07T17:43:29.927Z
categories:
  - updates
dim_image: true
---

We are thrilled to announce the launch of [Curio Storage](https://curiostorage.org/), a new venture born from the combined expertise of the Lotus-Miner and Boost teams! Curio is designed to be a superior replacement for the Lotus-Miner, offering significant improvements in system redundancy, simplicity, scalability, and overall performance. It's never been easier for a data center to be a Filecoin Storage Provider (SP) than with Curio, which takes care of the responsibilities of reliable SP storage proving & sealing with minimal operations time.

## Why choose Curio

1. Redundant Everything: Curio offers robust redundancy with multiple daemons, worker types, and database nodes, all coordinating seamlessly to eliminate single points of failure. This design ensures maximum uptime and reliability for your storage operations.
2. Simplicity: Curio simplifies your workflow by consolidating all functions into a single binary, removing the need for separate -miner and -worker binaries. The system leverages Yugabyte for database management, but after installation and scaling, no further operational work is needed.
3. Scalability: With its greedy task management system, Curio ensures consistent and superior scaling, allowing your storage operations to grow without hitting bottlenecks.
4. Improved Utilization: Curio’s Mesos-like approach ensures each task uses only the necessary resources, maximizing the value from your hardware. This enables you to get more out of the same resources.
5. Fault Tolerance: Curio's fault-tolerant design leverages redundancy to cover every aspect of your operations, including PoST, sealing, daemon nodes, and Yugabyte database replicas. This holistic redundancy strategy ensures smooth functioning even during disruptions.
6. Fine-or-Coarse Configuration: Curio's flexible configuration layers allow you to tailor the system to your needs, from enabling specific functions to broad categories or even everything. 
7. Support for Multiple Miner IDs: Curio seamlessly manages dozens of miner IDs on the same hardware without requiring additional configuration, making it ideal for large-scale operations.
8. Easy Migration: Our guided setup makes migration simple and efficient, walking you through replacing Lotus-Miner with Curio in just 5 minutes. The setup tool is available in English, Korean, and Mandarin, ensuring a smooth transition for diverse user bases.
9. Task Recovery: In case of any issues, Curio retries tasks a sensible number of times and even shifts them to other available hardware if necessary, preventing losses from hardware failures.
10. GUI: Starting the 'gui' layer launches a comprehensive web-based dashboard, providing real-time monitoring, detailed statuses, and tools to optimize your operations— this works out of the box without signing-in to any service.

## Try Curio for yourself

Curio’s “Lotus Miner V2” architecture brings substantial quality-of-life improvements for SPs, try Curio today!

Step 1: Update your Lotus git repository to the releases/curio-beta branch:

```bash
git pull
git checkout releases/curio-beta
make clean deps all
```

Step 2: On your Lotus-Miner machine (regardless of network: dev, calibration, main), run:

```bash
curio guided-setup
```

## How Curio works

At the core of Curio is the Yugabyte database cluster housing the harmony_task table. Every piece of processing work starts as a “discovery” that a task is needed. Attempts to add will have some task-specific unique index to invalidate secondary additions. Then greedy nodes race to claim the task. Nodes incapable of the work are disqualified while those with undesirable characteristics get delayed. Ultimately, the winner of that bidding round tries the work. 

Failures are reported back to harmony_task and bidding begins again. For outages, the silence is detected and the work gets bid up again. Tasks get a limited number of retries. Also, workers can “complete” a task that makes no sense anymore (such as, trying to PoST when it’s past time). 

Each node can take up to its hardware’s capacity in workload because each job’s maximum resource consumption is subtracted from the machine’s total capacity. Note that some sealing tasks have been split into more steps to more accurately express the resource cost and therefore accomplish more total work. 

Built upon the tasks framework is the familiar Lotus software managing PoSTs and sealing. But the command line is curio. Some chain-specific commands have moved to \`sptool\` which will be the new chain-only UI.

![](</uploads/how-it-works-(1).svg>)

## Learn More

Follow along on Filecoin Slack’s  #fil-curio-dev  or ask questions at  [#fil-curio-announcements](https://filecoinproject.slack.com/archives/C06V5B3B7CJ).
