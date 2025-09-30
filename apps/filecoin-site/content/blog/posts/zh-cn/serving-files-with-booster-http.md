---
title: 使用booster-http提供文件
excerpt: Filecoin存储提供者现在可以更灵活地使用booster-http提供文件和区块服务。下文为分步指南！
share_image: /uploads/Boost-Serving-Files.webp
image:
  url: /uploads/Boost-Serving-Files.webp
date: 2023-05-23T16:00:00.000Z
categories:
  - updates
dim_image: true
---

随着booster-http的最新发布，Filecoin存储提供者如今可以通过HTTP协议提供区块和文件。

这意味着存储提供者（SP）可以使用工具生态系统来管理HTTP流量，如负载均衡器和反向代理，用户可以直接从浏览器请求上传的文件。

这些新功能扩展了booster-http现有的为一个片段或一个片段范围服务的功能。请跟随如下分步教程进行尝试。

## 提供Vincent

想象一下，我们想从存储提供者处提供Vincent Van Gogh的维基百科页面。首先需要打开维基百科，把HTML文件和资源保存至桌面上名为vincent的文件夹中。

![](/uploads/Boost-vanGogh.webp)

## 做交易

为了准备上传的文件，我们需要将文件夹转换为CAR文件。我们可以使用[go-car库](https://github.com/ipld/go-car)中的car可执行文件：

```shell
$ go install github.com/ipld/go-car/cmd/car@latest
$ car c --version=1 --file=vincent.car ~/Desktop/vincent
$ car inspect vincent.car

Version: 1

Roots: bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm

Root blocks present in data: Yes

Block count: 110

...
```

我们需要得到这个文件的commp，这样就可以和boost做交易了。我们可以使用[stream-commp](https://github.com/filecoin-project/go-fil-commp-hashhash/tree/master/cmd/stream-commp)工具：

```shell
$ go install github.com/filecoin-project/go-fil-commp-hashhash/cmd/stream-commp@latest
$ stream-commp < vincent.car
CommPCid: baga6ea4seaqjaxked6ovoj5f3bdisfeuwtjhrzh3s34mg5cyzevgoebe7tdckdi
Payload:             1101978 bytes
Unpadded piece:      2084101 bytes
Padded piece:        2097152 bytes
CARv1 detected in stream:
Blocks:       110
Roots:          1
1: bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm
```

Boost需要从web服务器下载文件，需安装一个简单的nodejs网络服务器：

```shell
$ npm install -g serve
$ serve

┌─────────────────────────────────────────┐
│                                         │
│   Serving!                              │
│                                         │
│   - Local:    http://localhost:3000     │
│   - Network:  http://192.168.1.2:3000   │
│                                         │
│   Copied local address to clipboard!    │
│                                         │
└─────────────────────────────────────────┘
```

现在用boost做个交易：

```shell
$ boost deal --verified=false \
--provider=f012345 \
--http-url=https://localhost:3000/vincent.car \
--commp=baga6ea4seaqjaxked6ovoj5f3bdisfeuwtjhrzh3s34mg5cyzevgoebe7tdckdi \
--car-size=1101978 \
--piece-size=2097152 \
--payload-cid=bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm

sent deal proposal
deal uuid: 346157ae-c1f4-4462-9b40-9bcd27754135
storage provider: f012345
client wallet: t3r3hr3xl27unpefvipve2f4hlfvdnq3forgr253z6dqahufvanatdandxm74zikheccvx74ys7by5vzafq2va
payload cid: bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm
url: http://localhost:3000/vincent.car
commp: baga6ea4seaqjaxked6ovoj5f3bdisfeuwtjhrzh3s34mg5cyzevgoebe7tdckdi
start epoch: 135479
end epoch: 653879
provider collateral: 0
```

注意：我们推荐使用[data-prep-tools](https://github.com/filecoin-project/data-prep-tools)为大规模交易做数据准备。

## 发布交易

我们将交易发布在存储提供者上，并等待其被移交给密封子系统。

![](/uploads/Boost-storagedealsscreenshot.webp)

在交易详情页面上，注意交易数据根CID与CAR文件中的有效载荷CID匹配：

![](/uploads/Boost-Deal555.webp)

## 提供交易

首先构建booster-http：

```shell
make booster-http
```

建立与boostd、lotus daemon和lotus-miner的连接：

```shell
$ boostd auth api-info --perm=admin
$ lotus auth api-info --perm=admin
$ lotus-miner auth api-info --perm=admin

Run booster-http:

$ ./booster-http -vv run --api-boost=$BOOST_API_INFO --api-fullnode=$FULLNODE_API_INFO --api-storage=$MINER_API_INFO

2023-04-03T14:20:40.806+0200 INFO booster booster-http/run.go:324 Using boost API at ws://127.0.0.1:1288/rpc/v0
2023-04-03T14:20:40.807+0200 INFO booster lib/api.go:38 Using full node API at ws://127.0.0.1:1234/rpc/v1`
2023-04-03T14:20:40.808+0200 INFO booster lib/api.go:64 Using storage API at ws://127.0.0.1:2345/rpc/v0
2023-04-03T14:20:40.811+0200 INFO booster lib/api.go:106 Miner address: f01000
2023-04-03T14:20:40.868+0200 INFO booster booster-http/run.go:210 Starting booster-http node on port 7777 with base path ''
2023-04-03T14:20:40.869+0200 INFO booster booster-http/run.go:217 serving IPFS gateway at /ipfs/ (serving blocks, CARs)
2023-04-03T14:20:40.869+0200 INFO booster booster-http/run.go:219 serving raw pieces at /piece/
```

现在我们可以通过HTTP获取文件的原始数据：

```shell
$ curl --output /tmp/museum.jpg "http://localhost:7777/ipfs/bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm/vincent/Vincent%20van%20Gogh_files/Caf%C3%A9tafel_met_absint_-_s0186V1962_-_Van_Gogh_Museum.jpg**?format=raw**"

% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
Dload  Upload   Total   Spent    Left  Speed
100 11830  100 11830    0     0   140k      0 --:--:-- --:--:-- --:--:--  175k
$ open /tmp/museum.jpg
```

![](/uploads/Boost-museum.webp)

## 向网络浏览器提供文件

在上方curl请求中，我们在URL中添加了查询参数format=raw来获取文件的原始区块数据。如果我们尝试在网络浏览器中直接打开该文件，没有额外的查询参数，则会得到一个错误消息：

![](/uploads/Boost-error.webp)

默认情况下，booster-http不提供可以被网络浏览器读取的文件格式。这是为了保护存储提供者不提供可能被[标记为非法](https://blog.nft.storage/posts/2022-04-29-gateways-and-gatekeepers)的内容。

为了使文件能够被提供给网络浏览器，请在启动时将--serve-files=true传递给booster-http。如此便可以直接从网络浏览器打开文件：

![](/uploads/Boost-water.webp)

我们还可以浏览CAR档案中的所有文件：

![](/uploads/Boost-IPFS-screenshot.webp)

注意：booster-http(和booster-bitswap)会使用维护在[https://badbits.dwebops.pub/denylist.json](https://badbits.dwebops.pub/denylist.json)上的排除列表自动过滤已知的标记内容。

开始之前，请确保更新至Boost最新版本([v1.7.2](https://github.com/filecoin-project/boost/releases/tag/v1.7.2))并尝试新booster-http功能。您可以参考这篇博文中的示例，或者Boost文档中的[http检索](https://boost.filecoin.io/http-retrieval)。

请关注我们的[GitHub](https://github.com/filecoin-project/boost)来了解Boost的最新信息。为助力项目未来持续发展，请使用[Boost讨论区](https://github.com/filecoin-project/boost/discussions)提供反馈和需求，您的意见有益于项目的茁壮成长，期待您的回复！
