---
title: Serving Files with booster-http
draft: false
excerpt: >-
  Filecoin storage providers will now have more flexibility with serving files
  and blocks with booster-http. Check out this step by step guide!
share_image: /uploads/Boost-Serving-Files.webp
image:
  url: /uploads/Boost-Serving-Files.webp
author: Dirk McCormick
date: 2023-05-24T11:58:53.075Z
categories:
  - updates
dim_image: true
related_article_1: content/blog/posts/boost-monitoring-stack.en.md
related_article_2: content/blog/posts/protecting-booster-http-with-nginx.en.md
---

With the latest release of booster-http, Filecoin Storage Providers can now serve blocks and files over the HTTP protocol.

That means SPs can take advantage of the ecosystem of tools to manage HTTP traffic, like load balancers and reverse proxies, and clients can request uploaded files directly from their browser.

These new features extend booster-http’s existing functionality of serving a piece or range over a piece. Try it for yourself using this step-by-step tutorial below.

## Serving Vincent

Let’s imagine that we want to serve Vincent Van Gogh’s wikipedia page from our Storage Provider. First let’s go to wikipedia and save the HTML file and assets into a folder on our desktop called vincent.

![](/uploads/Boost-vanGogh.webp)

## Make a Deal

To prepare the files for upload, we need to convert the folder into a CAR file. We can use the car executable in the [go-car library](https://github.com/ipld/go-car):

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

We need to get the commp of the file so we can make a deal with boost. We can use the [stream-commp](https://github.com/filecoin-project/go-fil-commp-hashhash/tree/master/cmd/stream-commp) utility:

```shell
$ go install github.com/filecoin-project/go-fil-commp-hashhash/cmd/stream-commp@latest
$ stream-commp < vincent.car
CommPCid: baga6ea4seaqjaxked6ovoj5f3bdisfeuwtjhrzh3s34mg5cyzevgoebe7tdckdi
Payload:             1101978 bytes
Unpadded piece:      2084101 bytes
Padded piece:        2097152 bytes
CARv1 detected in stream:
Blocks:       110
Roots:          1
1: bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm
```

Boost needs to download the file from a web server. Let’s install a simple nodejs web server:

```shell
$ npm install -g serve
$ serve

┌─────────────────────────────────────────┐
│                                         │
│   Serving!                              │
│                                         │
│   - Local:    http://localhost:3000     │
│   - Network:  http://192.168.1.2:3000   │
│                                         │
│   Copied local address to clipboard!    │
│                                         │
└─────────────────────────────────────────┘
```

Now make a deal with boost:

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

Note: We recommend using [data-prep-tools](https://github.com/filecoin-project/data-prep-tools) to prepare data for deal making at scale.

## Publish the Deal

On the Storage Provider we publish the deal, and wait for it to be handed off to the sealing subsystem.

![](/uploads/Boost-storagedealsscreenshot.webp)

On the detail page for the deal note that the Deal Data Root CID matches the payload CID in the CAR file:

![](/uploads/Boost-Deal555.webp)

## Serve the Deal

First build booster-http:

```shell
make booster-http
```

Set up connections to boostd, lotus daemon and lotus-miner:

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

Now we can fetch the raw data for a file over HTTP:

```shell
$ curl --output /tmp/museum.jpg "http://localhost:7777/ipfs/bafybeidqindpi4ucx7kmrtnw3woc6jtl7bqvyiokrkpbbuy6gs6trn57tm/vincent/Vincent%20van%20Gogh_files/Caf%C3%A9tafel_met_absint_-_s0186V1962_-_Van_Gogh_Museum.jpg**?format=raw**"

% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
Dload  Upload   Total   Spent    Left  Speed
100 11830  100 11830    0     0   140k      0 --:--:-- --:--:-- --:--:--  175k
$ open /tmp/museum.jpg
```

![](/uploads/Boost-museum.webp)

## Serving files to web browsers

In the curl request above we appended the query parameter format=raw to the URL to get the raw block data for the file. If we try to open the file directly in a web browser, with no extra query parameters, we get an error message:

![](/uploads/Boost-error.webp)

By default booster-http does not serve files in a format that can be read by a web browser. This is to protect Storage Providers from serving content that may be [flagged as illicit content](https://blog.nft.storage/posts/2022-04-29-gateways-and-gatekeepers).

To enable serving files to web browsers, pass --serve-files=true to booster-http on startup. Now we can open the file directly from a web browser:

![](/uploads/Boost-water.webp)

We can also browse all files in the CAR archive:

![](/uploads/Boost-IPFS-screenshot.webp)

Note that booster-http (and booster-bitswap) automatically filter out known flagged content using the denylist maintained at [https://badbits.dwebops.pub/denylist.json](https://badbits.dwebops.pub/denylist.json)

To get started, make sure you update to the latest release of Boost ([v1.7.2](https://github.com/filecoin-project/boost/releases/tag/v1.7.2)) to try out the new booster-http functionality. You can follow the example in this blog post, or in Boost documentation on [http retrieval](https://boost.filecoin.io/http-retrieval).

You can stay up to date on Boost by following our [GitHub](https://github.com/filecoin-project/boost). Please use the [Boost Discussion Board](https://github.com/filecoin-project/boost/discussions) to provide feedback and requests to help shape the future direction of the project. Your input is helping make this a great service. We look forward to hearing from you!
