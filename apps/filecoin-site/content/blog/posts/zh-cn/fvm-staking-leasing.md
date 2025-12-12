---
aliases: []
author: ""
categories:
  - updates
date: "2023-03-16T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  FEVM于2023年3月14日推出，完整实施的FVM(Filecoin虚拟机)将彻底改变现有的Filecoin生态，释放开放数据经济的全部潜力。以下是正在构建基于Filecoin虚拟机的DeFi借贷协议项目。
image:
  alt: ""
  url: /uploads/the_fvm_imaginarium_block_explorers_banner2.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/the_fvm_imaginarium_block_explorers_banner2.webp
title: FVM用例探索之旅： 质押(Staking)和借贷(Leasing)协议
_template: blog_detail_ch
---

_FEVM于2023年3月14日推出，完整实施的FVM(Filecoin虚拟机)将彻底改变现有的Filecoin生态，释放开放数据经济的全部潜力。以下是正在构建基于Filecoin虚拟机的DeFi借贷协议项目。_

## 背景

成为Filecoin存储提供者是一项繁琐但有回报的工作。除了购买硬件、运行全栈数据中心、拥有技术专长并寻找客户来存储数据之外，存储提供者还必须质押FIL作为抵押，以证明他们会诚信行事，并且他们的激励与Filecoin经济体的其他方面保持一致。协议要求存储提供者计划在网络上接入更多存储容量或数据，则需要更多的FIL。

随着Filecoin网络在过去的两年半年中不断增长，随着网络吞吐量（即更多的容量和数据接入）的增加，对存储抵押品的需求也随之增加。早在2022年初，就建立了帮助存储提供者访问FIL以用于存储抵押品的计划，包括Filecoin生态与DARMA Capital、Anchorage、CoinList、PalladiumX等之间的合作。这些计划在帮助存储提供者扩展Filecoin网络方面非常成功，我们非常感激这些合作伙伴。

## 其他网络的质押（Staking）协议

Staking在Web3中仍处于早期阶段。今天广泛利用Staking锁定代币用于其各自协议的一些协议包括Cardano、Ethereum、Solana和Polkadot。在其他网络中，Staking为那些网络上的验证者提供了证明他们是良好行为者的机会，以及验证网络上的交易。让我们以Ethereum为例：验证者需要质押32个ETH（今天的等值物约为50K美元）。当验证者想要参与网络，但没有足够的代币进行质押时，网络中的其他参与者可以通过接口（例如Lido、Rocketpool）与该验证者质押他们的代币，并最终为验证者的质押基金做出贡献。

在 Filecoin 网络中，这个工作方式有所不同。存储提供者或数据中心会提供数据存储容量，存储人类最有价值的信息，而不是验证人。这些存储提供者会接收租赁token(leased token)。

## 在 FVM 上引入Staking和借贷

FVM 允许开发者构建新应用程序，利用智能合约并利用用户可编程性，将 Filecoin 区块链与之结合，开启了创新的方式来帮助存储提供者获得用于抵押的 FIL。具体来说，FIL 代币持有人将很快能够通过专门设计的基于智能合约的协议贡献自己的 FIL，以扩大存储提供者的业务。这些协议将有自己的一套标准，以选择要租赁 FIL 的存储提供者。更有效地将 Filecoin 代币持有者与存储提供者联系起来的能力，可以加速网络上载数据的增长。在 FVM 上即将建立的每个协议，以特定的方式实现租赁 FIL 给存储提供者的功能。要了解更多有关特定项目的信息，请参见以下列表：

_免责声明：以下信息是通过 Filecoin 权益质押（Staking）项目列表政策直接提供给第三方项目或通过第三方团队在社交渠道上公开宣布收集的。_

[**Bifrost Finance**](http://bifrost.finance/)

Bifrost 非托管流动质押方案，它允许用户质押他们的 FIL 并以 vFIL（voucher FIL）作为交换。该解决方案将允许用户在他们进行Staking的同时基于他们Stake的FIL获得Staking奖励，同时这也增加了DeFi中使用vFIL的流动性、资本效率和灵活性。Bifrost是Polkadot上最大的跨链流动性质押协议。_将于2023年3月推出_

[**Collectif DAO**](https://collectif.finance/)

Collectif DAO 是一种新颖的 Filecoin 网络抵押要求方法，利用在 FVM 上构建的非托管流动质押协议。使用 Collectif DAO，存储提供商可以覆盖其资本需求以增加存储容量。_将于2023年4月推出_

[**Ezil.Me**](https://ezil.me/)

Ezil.Me正在构建一个分散的、资本高效的 FVM Filecoin 质押协议，旨在解决 Filecoin 网络内的低效率问题。该产品将激励 Filecoin 质押者和存储提供商增加并保护协议。 _将于2023年6月推出_

[**Filet Finance**](https://www.filet.finance/)

Filet 将建立在其现有的去中心化质押服务之上，该服务目前建立在 Binance Chain 上。自 2021 年 5 月推出以来，Filet 协议通过多重签名方法累积了 ~512K FIL 的总锁定价值（TVL）。_将于2023年3月推出_

**FILL Pool**

FILL是一个将在FVM上实施的流动性池。是一个完全开源的、去中心化的、基于算法的借贷平台。FILL促进了一个有效的市场，将FIL代币持有人与需要借入FIL的SP连接起来。SP们通过将他们的受益人地址转移到FILL智能合约来抵押共识质押和锁定奖励，而非抵押法币或其他主流加密货币。 _将于2023年5月推出_

[**Filmine**](https://www.google.com/search?q=filmine&oq=filmine&aqs=chrome..69i57j46i175i199i512j0i10i131i433i512j69i61j69i64l3j69i60.1352j0j7&sourceid=chrome&ie=UTF-8)

Filmine是Filecoin上的基础架构层，为计算和存储网络提供共享的硬件资源层，以运行工作负载，并通过流动质押协议保留将SP与代币持有人连接的能力。Filmine于2022年3月推出。 _智能合约版本将于2023年3月推出_

[**FilPlus Lending**](http://filpluslending.com/)

FilPlus Lending旨在将数据所有者、数据准备者、存储提供者和FILToken持有人汇聚在一起，支持Fil+生态更好发展。存储供应商不仅能通过智能合约获得质押币融资支持，还能获得FIL+真实数据、合作存储供应商等更多资源。 _将于2023年4月推出_

**[Glif Genesis Pools](https://www.glif.io/en)**

Glif Genesis Pools是一个分散的、资本高效的FVM Filecoin权益质押协议，旨在解决Filecoin网络中的低效率问题。该协议激励Filecoin权益质押者和SPs增长和保护协议。 _将于2023年4月推出_

**H2O Data**

H2O Data正在创建psdnFIL，这是一种WrapFIL的方式，以通过向选择的SP质押抵押品进一步增加Token持有人参与Filecoin生态。H2O团队此前已为OCEAN协议创建了类似的wrapper（psdnOCEAN），目前该wrapper持有6.66%的总$OCEAN锁定。_将于2023年4月推出_

[**HashMix**](https://app.hashmix.org/fil/#/)

HashMix自2021年以来一直在促进Filecoin SP借贷，目前池中锁定了519K FIL Token。HashMix团队计划构建一种基于智能合约的解决方案，通过更有效地将SP与Token持有人联系起来，进一步向SP提供FIL。_将于2023年4月推出_

**mFIL DAO**

mFIL DAO是为Filecoin网络提供流动性服务的综合解决方案，以“DAO”形式建立和运作的f分布式自治组织。mFIL汇集了来自整个Filecoin生态的参与者和利益相关者，旨在打破信息不对称、低资源配置效率和资产流动性差的问题，并提供最大化整个Filecoin生态所有参与者价值的流动性解决方案。_将于2023年3月推出_

[**NodeDAO**](https://doc.nodedao.com/)

NodeDAO提供DAO方式的FIL出租服务，将Token持有人和存储提供商通过DAO 连接起来。NodeDAO之前也为以太坊构建过类似的解决方案。 _将在 2023 年第二季度推出_

[**stFIL**](https://www.stfil.io/)

stFIL是FrogHub团队在Filecoin生态中的积极开发者所构建的。stFIL 设计为社区所有、去中心化和不可信，同时也支持存储提供商的增长。 _将在 2023 年 4 月推出_

_此信息仅供参考，不旨在提供投资、金融、法律或其他建议。此信息不构成任何特定服务或产品的认可、提议或推荐。_

_虽然我们尽力确保所有信息准确无误且及时更新，但偶尔也可能出现意外错误和印刷错误。提供给第三方网站的链接仅供参考，我们不对第三方网站上的内容的准确性负责。_
