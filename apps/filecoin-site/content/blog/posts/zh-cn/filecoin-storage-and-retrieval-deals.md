---
aliases: []
author: ""
categories:
  - updates
date: "2021-03-09T17:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 本文阐明 Filecoin 中的存储交易和检索交易如何运作。
image:
  alt: ""
  url: /uploads/storage-retrievaldeals.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/storage-retrievaldeals.webp
title: 了解Filecoin 中的存储和检索交易
_template: blog_detail_ch
---

本文从存储提供方（也就是矿工）和使用 Filecoin 网络存储数据的用户的视角，解释 Filecoin 交易的运作原理。

本文的技术性解析部分，使用 JSON-RPC 的 API 格式来与 Filecoin 网络交互，查询数据。该 API 主要由应用程序使用。人工操作时，您可以使用更友好的 `lotus` 命令行工具。其底层也是使用 JSON-RPC API 的。

## 介绍

通过允许任何人作为存储提供者参与，Filecoin网络实现规模经济。目前，该网络由分布在全球各地的[数百个存储提供者](https://spacegap.github.io/)组成。内容寻址和加密存储证明验证了数据在矿工的硬件上长期正确安全地存储，从而创造了一个强大可靠的服务。

本文阐述了Filecoin中两种交易类型，_存储交易_ 和 _检索交易_ 运作的各个阶段，并详解其生命周期。并解释了密码学证明是如何用于验证系统中的参与者是否按照承诺履行职责的。

## Filecoin 上的数据

为在Filecoin上存储文件，用户必须首先在其本地Filecoin节点中导入文件。这一步会产生一个 _数据CID_ ——即内容标识符，描述该内容的唯一ID。之后，数据被传给矿工。另一种在Filecoin上存储文件的方式是通过 _离线交易_，不在本文讨论范围中。

将数据导入本地的Filecoin节点这步，可以通过`lotus client import`命令来完成。要记住所产生的 _数据CID_（之后在本地节点上也可获取），因为以后从矿工那里检索数据时会用到。

将数据导入本地节点后，用户需发起交易。这步通过`lotus client deal`命令来完成。该命令将一个 _数据CID_ 作为输入，产生一个 _Filecoin Piece_ ，并交互式引导用户完成存储交易流程，详见下文。

_Filecoin Piece_ 是用户在Filecoin网络上存储数据的主要协商单位。_Filecoin Piece_ 并没有特定的大小，而是以 _扇区_ 大小为上限，受[网络参数](https://network.filecoin.io/#mainnet)控制。如果一个 _Filecoin Piece_ 大于矿工支持的 _扇区_ 的大小，它必须被分割成更多的碎片，以便每个碎片都适合一个扇区。

每个 _Filecoin Piece_ 是一个 _CAR_ 文件，包含一个 _IPLD DAG_，有对应的 _数据 CID_ 和 _piece CID_。

_CAR_ 即 [_内容可寻址档案（Content Addressable aRchives）_](https://github.com/ipld/specs/blob/master/block-layer/content-addressable-archives.md) - 每个 _CAR_ 文件是一个 _IPLD DAG_ 的序列化表示，即将其数据块串起来，再加上描述DAG图的头部信息（还有 _根CID_ ）。

当用户要在Filecoin网络中存储文件时，首先要用[UnixFS](https://github.com/ipfs/specs/blob/master/UNIXFS.md)制作文件的 _IPLD DAG_ (这就是`lotus client import`命令的作用)。代表DAG根节点的哈希是一个IPFS风格的[CID](https://github.com/multiformats/cid)，称为 _数据 CID_ 。

[UnixFS](https://github.com/ipfs/specs/blob/master/UNIXFS.md)是一种基于protobuf的格式，用于描述IPFS中的文件、目录和软链接。在Filecoin中，UnixFS是文件格式标准，文件以此格式提交给Filecoin网络。

所产生的 _CAR_ 文件用额外的零位来补齐，以便使文件写为二叉merkle树。

## 存储交易流程

用户在 Filecoin 网络中通过交易存取数据。网络的参与者，包括矿工（供给方）和用户（需求方），通过 _存储交易_ 和 _检索交易_ 来与对方交互。

存储交易的生命周期如下：

### 1. **发现**

用户先确定矿工及其定价，即矿工为了接受交易而希望收到的每epoch（30秒）每GiB的价格，单位为attoFIL（1 attoFIL等于10^-18 \* FIL）。目前，Filecoin中一笔交易的最短期限为180天。

您可以通过 JSON RPC API 查询已同步的节点，列出所有当前活跃的矿工（为了测试目的，使用了[https://api.node.glif.io\_](https://api.node.glif.io "https://api.node.glif.io")公共终端节点），使用 _Filecoin.StateListMiners_ 方法。

    curl -X POST -H "Content-Type: application/json" \
      --data '{ "jsonrpc": "2.0", "method": "Filecoin.StateListMiners", "params": [ null ], "id": 1 }' \
      'https://api.node.glif.io' | jq

    {
      "jsonrpc": "2.0",
      "result": [
        "f011303",
        "f011092",
        ...

您可以根据矿工在网络中的信誉和能力进行选择。矿工的信誉指标还未进入 Filecoin 协议，本文亦不涉及。

当您选好矿工之后，可以用诸如 _Filecoin.StateMinerInfo_ 方法来获取矿工的 _PeerID_ ，用于在 libp2p 协议中来与对方建立安全连接。

    curl -X POST -H "Content-Type: application/json" \
      --data '{ "jsonrpc": "2.0", "method": "Filecoin.StateMinerInfo", "params": [ "f03274", null ], "id": 1 }' \
      'https://api.node.glif.io' | jq

    {
      "jsonrpc": "2.0",
      "result": {
        "Owner": "f03261",
        "PeerId": "12D3KooWP5D9TmqC45i6L2e2qQHYcuxaUwPdYo6CzqUMVmFEH3N9",
        ...

接下来，您可以用 _Filecoin.ClientQueryAsk_ 方法获取一个带签名的 _StorageAsk_ 。这将与选定的矿工建立 libp2p 连接，并询问存储报价。

    curl -X POST https://api.node.glif.io \
         -H "Content-Type: application/json" --data-binary @- << EOF
    {
      "jsonrpc": "2.0", "method": "Filecoin.ClientQueryAsk", "id": 1,
      "params": [
        "12D3KooWP5D9TmqC45i6L2e2qQHYcuxaUwPdYo6CzqUMVmFEH3N9",
        "f03274"
      ]
    }
    EOF

    {
      "jsonrpc": "2.0",
      "result": {
        "Price": "100000000000",
        "VerifiedPrice": "100000000000",
        "MinPieceSize": 256,
        "MaxPieceSize": 34359738368,
        "Miner": "f03274",
        "Timestamp": 148031,
        "Expiry": 1199231,
        "SeqNo": 14
      },
      "id": 1
    }

结果包括该矿工愿意接受的交易细节，如接纳的 _Filecoin Piece_ 大小的范围和每GiB每epoch的价格。需要注意的是，提出与矿工的存储要求相匹配的存储交易，只是一个前提条件，但并不足以确保交易被接受 - 存储提供者可能会在之后运行自己的决策逻辑。

### 2. **议价和数据发送**

在这一阶段，双方就交易条款达成协议，如交易成本、交易期限、交易起始时间等。

然后，数据从用户发至矿工。

### 3. **发布**

通过 `PublishStorageDeals` 消息在链上发布交易，使存储提供方对交易公开负责。

### 4. **完成**

交易一旦在链上发布，就会被交给 _挖矿子系统_ ，打包成扇区，随后 _封装_ ，再不断地被证明可用。

## 存储挖矿子系统

存储挖矿子系统确保 Filecoin 网络的数据由矿工有效保存，并且：

1. 参与 _Filecoin 存储市场_ ，承接用户数据，参与存储交易。
2. 参与 _Filecoin 存储算力共识_ ，验证和产出区块，让 Filecoin 区块链增长，并获得区块奖励。

该系统监督以下进程：

### 承诺新存储和注册新扇区

为了在Filecoin中注册一个扇区，矿工必须对该扇区进行 _封装_ 。_封装_ 过程需要大量计算，以证明的形式产生数据的唯一表示，即[复制证明](https://spec.filecoin.io/#section-glossary.proof-of-replication-porep)或 _PoRep_ 。一旦证明生成，矿工会对其进行压缩，并将结果提交给区块链。这就证明矿工确实复制了他们同意存储的数据副本。

### 证明存储持续可用 (见WindowPoSt)

所有存储矿工需要持续提交链上证明，以验证扇区被完整存储。

### 宣布存储故障和从故障中恢复（见故障）

如果扇区所需的上述证明如果未成功提交，将导致故障，矿工会受到处罚。

## 存储矿工和用户的考量

如上文所述，_存储交易_ 是在链上发布后，才会被激活和封装。这一点很重要，因为发布交易会将用户的资金锁定在链上托管。只有如此，在封存数据进扇区之后，矿工的收益才有保障。

可以将在链上发布交易视为签署合同，将封装和激活交易视为开始做承诺的工作。

从用户的角度来看，想要用 Filecoin 存储数据，交易大致经过以下几个阶段：

1. **交易入金** - 用户将资金锁入代管中
2. **向矿工提出** 交易提议
3. **检查意向**来接受交易
4. **数据传输**给矿工来进行交易 - 这是通过[GraphSync](https://github.com/ipld/specs/blob/master/block-layer/graphsync/graphsync.md)协议完成的。GraphSync是节点之间同步IPLD图的协议。该协议允许本地节点向远程节点发出请求，以获取在远程节点的IPLD图上按选择器搜索所得的结果。Lotus使用的是GraphSync协议的实现[ipfs/go-graphsync](https://github.com/ipfs/go-graphsync)。
5. **检查是否接受** - 确保矿工已经接受了交易并在链上发布。
6. **封装** - 交易已在链上，矿工正在封装包含交易的扇区。
7. **激活** - 交易已被封存并处于活跃状态。从这里开始，存储提供商/矿工应定期证明他们继续存储数据。

从矿工的角度来看，通过存储用户的数据来提供服务，交易大致经过以下几个阶段：

1. **验证交易** - 收到交易提议，并检查其参数（大小、价格等）。
2. **检查是否有锁定资金** - 确保用户有锁定资金，可以支付交易。
3. **等待数据** - 接收客户提供的交易数据。
4. **为交易提供抵押** 用于链上交易。
5. **在链上发布交易** 上链。
6. **封装扇区**
7. **激活交易** - 从这里开始，存储提供者（矿工）定期提交WindowPoSt，证明他们在持续存储数据。

## 检索交易流程

检索交易与存储交易不同，使用支付通道，主要链下完成。数据传输是按量计价的，用户在数据传输的过程中逐步向矿工支付费用。整个过程中，只有创建支付通道、兑换凭证，是涉及与 Filecoin 区块链交互的。

整体流程如下：

1. **发现** - 用户找出拥有其所需数据的矿工，并向其索取检索报价详情 - 每字节价格、解封价格、付款间隔。
2. **设立支付通道** - 用户需要和矿工之间设立一个支付通道（如果还不存在的话）。
3. **数据传输与支付** - 矿工向用户发送数据，直到需要支付。当达到一定的阈值时，会要求进行支付处理，之后继续进行数据传输。根据矿工是否在他们的 _区块存储_ 中拥有数据，他们可能需要首先 _解封_ 数据 - 这是一个非常规和非瞬时的操作，这是存储交易一节中描述的 _封装_ 的反向操作。

此时用户还未获取完整数据。

## 时空证明

上面的章节快速列举了许多使 Filecoin 独一无二的细节，在概率上对用户数据提供了保证。本节介绍了 Filecoin 使用的两种证明，并解释了它们是如何成为协议的一部分，以及它们所解决的问题。

时空证明（PoSt）是矿工向 Filecoin 网络提交的证明，证明其正在继续为网络存储数据的唯一副本。

目前，时空证明在 Filecoin 中以两种类型存在：

1. WindowPoSt
2. WinningPoSt

## WinningPoSt

WinningPoSt是奖励存储矿工对 Filecoin 网络贡献的机制。在每个epoch开始时，一小部分存储矿工被选出来，每个矿工挖出一个新的区块。具体要求是，这些矿工提交指定扇区的压缩存储证明。每个成功创建区块的当选矿工都会获得FIL（区块奖励），以及向其他想在区块中包含信息的 Filecoin 参与者收取费用的机会。

存储矿工如果在必要的时间窗口内没按要求做到，将失去生产区块的机会，但不会因为没产出区块而受到其他惩罚。

## WindowPoSt

WindowPoSt是 Filecoin 区块链对存储矿工做出的承诺进行审核的机制。

每个存储矿工都应该维护他们的 _承诺扇区_。这些扇区包含与用户达成的交易，或也可能为空。后者被称为 _承诺容量_，也就是说，矿工可以做出容量承诺，用任意数据填充一个扇区，而非用户数据。维护这些扇区可以让存储矿工证明他们在代网络预留空间。

每一天分成若干 _时间窗口_ ，目前48个时间窗口，每个持续时间为30分钟（60个epoch，因为1个epoch等于30秒）。

每个矿工的承诺扇区分成若干组，每组对应一个时间窗口。

在一个时间窗（30分钟）内，每个存储矿工必须为其该时间窗中的每个扇区提交一份时空证明。这需要随时访问该时间窗轮到的每个扇区，并生成 zk-SNARK 证明加入区块发布到 Filecoin 区块链上。这样，每个承诺存储的扇区在每24小时内至少会被审核一次，并保留一个永久的、可验证的、公开的记录，证明每个存储矿工保守承诺。

在上图例子中，您能看到一个矿工应该在 _deadline 0(> 16TB)、deadline 1(< 8TB) 和 deadline 2_ (< 8TB) 提交窗口时空证明，其中大部分扇区都在 _deadline 0_ 。每个矿工的 deadline 是随机的，对于这个特定的矿工来说，分别从 _epoch 1635、epoch 1695和epoch 1755_ 开始。你可以在[SpaceGap](https://spacegap.github.io/#/miners/f02620)工具上检查这些 deadline 和更多关于矿工的细节。

Filecoin 网络期望所存储的数据持续可用。未能为一个扇区提交WindowPoSt将导致一个 _故障_ ，而供应该扇区的存储矿工将被 _惩罚_ 。这激励存储矿工健康运转。

## 故障

当因为网络连接丢失、存储故障或恶意行为导致证明未在期限内被纳入Filecoin区块链时，故障就发生了。

当一个扇区被登记为故障时，Filecoin 网络将对本应存储该扇区的存储矿工进行惩罚；也就是说，将对矿工未能持续存储的行为进行处罚评估（从矿工预付的抵押品中支付）。

扇区故障费分为三类：

1. **扇区故障费** - 需由每个处于故障状态的扇区每天支付。该费用的大小略高于该扇区每天预计获得的区块奖励额。如果一个扇区连续2周以上处于故障状态，该扇区将支付**终止费**，并从区块链状态中移除。
2. **扇区故障检测费** - 这是一次性支付的费用，如果该故障是由链上机制检测发现而非矿工诚实上报时收取。考虑到时空证明检查的概率性，该收费额设为对应扇区在若干天时间中的区块奖励。
3. **扇区终止费** - 一个扇区可能因为故障或矿工主动而在到期日之前终止。收取的终止费原则上相当于一个扇区当前所产生的收益，且不超过一个限额，以免阻碍长时扇区。

您可在 [Filecoin 规范](https://spec.filecoin.io/) 阅读更多关于故障和处理故障的经济机制。

## 结论

本文描述了关于存储和检索 Filecoin 上数据的一些概念、用户和矿工为存取数据使用的协议以及这些流程中所涉的各类证明和保证。

从用户和矿工的视角，详细介绍存储交易和检索交易的流程；以及在某一方出现恶意行为时， Filecoin 协议对其的惩罚措施。

总结起来，本文概述了 Filecoin 协议如何管理 Filecoin 网络，使之成为一个可靠和无信任的去中心化存储网络。
