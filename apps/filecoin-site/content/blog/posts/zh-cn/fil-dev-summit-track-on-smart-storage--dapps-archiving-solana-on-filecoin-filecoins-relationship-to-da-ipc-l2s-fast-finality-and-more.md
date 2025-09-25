---
title: ETHDenver 2024 FIL开发者峰会智能存储和dApp专题回顾
excerpt: >-
  第三届FIL开发峰会在EthDenver
  2024举行，本峰会面向开发人员，由开发人员主持，就Filecoin协议和生态核心改进展开了为期一天的协议讨论、研讨会和演讲。智能存储和dApp专题讨论了Filecoin可编程存储和去中心化应用(dApp)的技术现状，以及Filecoin热/快速存储层的未来创新。
share_image: /uploads/0FDS Smart Storage Header.png
image:
  url: /uploads/0FDS Smart Storage Header.png
date: 2024-03-14T23:00:00.000Z
categories:
  - events
dim_image: true
---

第三届[FIL开发峰会](https://fildev.io/)在[EthDenver 2024](https://www.ethdenver.com/)举行，本峰会面向开发人员，由开发人员主持，就Filecoin协议和生态核心改进展开了为期一天的协议讨论、研讨会和演讲。智能存储和dApp专题讨论了Filecoin可编程存储和去中心化应用(dApp)的技术现状，以及Filecoin热/快速存储层的未来创新。

主要收获：

- 正如[Solana案例研究](<[https://www.youtube.com/watch?v=c69ky8YmkSA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=7](https://www.youtube.com/watch?v=c69ky8YmkSA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=7)>)所示，Filecoin是存储其他区块链的理想选择。
- [星际共识(IPC)](http://ipc.space/)的推出使去中心化服务能够建立在基础Filecoin层(如聚合器、热存储和计算网络)之上，这将开辟全新用例。
- 令人兴奋的创新即将落地，包括IPC的快速终结性和普遍可用性。

## 存储其他区块链和数据可用性

**[Brian Long分享了在Filecoin上托管Solana档案](https://www.youtube.com/watch?v=c69ky8YmkSA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=7)**: Brian Long分享了在Filecoin上存储[Solana](http://solana.com/)数据的过程和技术挑战，强调了大规模区块链数据去中心化存储的好处以及此类集成的未来方向。

{{< youtube id="c69ky8YmkSA" title="  0:02 / 17:13  Hosting the Solana Archive on Filecoin - Brian Long" >}}

[Matt frehich分享了数据可用性](<[https://www.youtube.com/watch?v=9EAgiHoco0c&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=15](https://www.youtube.com/watch?v=9EAgiHoco0c&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=15)>):该演讲打破了数据可用性和数据存储之间的差异，并讨论了Filecoin如何在数据可用性需求发展的过程中发挥作用。目前，数据可用性更多的是关于数据的可信发布，而非弹性的长期存储。

![](/uploads/Chart1.webp)

[Dan Mills分享了Avail——长期存储需求与Web3统一](https://www.youtube.com/watch?v=10VBYc4DA50&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=14): Mills介绍了由ZK技术支持的[Avai l](https://www.availproject.org/)数据可用性方法，重点关注其Web3生态中的汇总、流动性和用户体验的影响。会议随后讨论了对Filecoin有直接需求的长期存储和链归档的要求。

![](/uploads/StorageRequirements.webp)

## Filecoin全新创新

[与Alejandro Ranchal-Pedrosa共同探讨Filecoin的快速终结性](<[https://www.youtube.com/watch?v=KC-JIPeTRyQ&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=6](https://www.youtube.com/watch?v=KC-JIPeTRyQ&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=6)>):该会议解释了Filecoin当前共识机制背后的机制以及Filecoin快速终结性的发展，这对于需要快速交易确认的应用程序和桥梁至关重要。

{{< youtube id="KC-JIPeTRyQ" title="F3: Fast Finality in Filecoin with safe and verifiable proofs - Alejandro Ranchal-Pedrosa" >}}

[Raúl Kripalani分享了使用IPC构建Filecoin L2+服务网络](https://www.youtube.com/watch?v=Qh43mdO0ngk&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=3): Kripalani的会议重点是在Filecoin上开发易于部署的临时子网，从而支持游戏和社交网络等弹性用例，通过IPC实现更高效的数据和计算集成。

[Evgeny Ponomarev分享了基于IPC的Fluence无云计算平台](https://www.youtube.com/watch?v=0y-Vr7J8fVo&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=5): Ponomarev分享了Fluence选择在IPC上构建去中心化计算网络的原因。

{{< youtube id="0y-Vr7J8fVo" >}}

由 Stebalien主持的用户数据端到端去中心化存储研讨会:该研讨会涵盖了Filecoin较传统云存储解决方案的优势，重点是透明度、可移植性、价格确定性和可编程性，还讨论了当前的主要挑战——任意大小的写入、快速写入和弹性。

[Hannah Howard分享了Filecoin为何需要交易代理](https://www.youtube.com/watch?v=d_Bo0uf2hqI&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=8): Howard讨论了去中心化市场的发展，以匹配客户需求和存储提供者，强调了交易代理在Filecoin生态系统中简化存储交易的作用。

## 在Filecoin上构建dApp

[Nandit Mehra分享了Lighthouse可编程存储](https://www.youtube.com/watch?v=u17Ef6BOH_E&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=4): Mehra介绍了可编程存储的概念，用户可以在其中配置复制，更新和修复策略，并展示了信用评分DAO和海洋协议集成中的应用程序。

[Matt Hamilton分享了Filecoin上的dApp存储](https://www.youtube.com/watch?v=NEXtqLSDt_U&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=1): Hamilton解决了开发人员期望与Filecoin当前dApp存储能力之间的脱节问题，强调了数据检索时间以及将小数据片段集成至Filecoin网络的挑战。一般而言，开发人员希望能够在智能合约内访问文件，但这并不可行，并且对大多数用例来说实际并不需要。

由Hannah Howard主持的解决dApp开发者痛点的研讨会:该研讨会探讨了dApp开发者在集成Filecoin存储时所面临挑战的解决方案，包括L2网络、存储DAO和web3游戏中的用例。

[Charles Cao分享了Swan去中心化ZK市场与Filecoin集成](https://www.youtube.com/watch?v=hip_wqswaNA&list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ&index=2): Charles Cao解释了Swan的去中心化ZK市场如何为计算提供者提供执行Filecoin证明并赚取额外收入的机会。

## 深入了解

若您想更深入地了解本次会议中的各类讨论、突破和亮点，欢迎前往[Filecoin YouTube频道](https://www.youtube.com/playlist?list=PL_0VrY55uV1_88_dDYcGmhCcK6Y3eRhRJ)观看FIL Dev Summit Denver '24的完整视频集。

同时，在此诚挚邀请您参加将于7月EthCC期间在布鲁塞尔市中心举行的FIL开发峰会。这次聚会将汇聚全球各地的思想家和建设者们，有望成为创新、合作和灵感的纽带。千万不要错过这个交流、学习并为塑造未来做出贡献的机会。更多信息，敬请关注！
