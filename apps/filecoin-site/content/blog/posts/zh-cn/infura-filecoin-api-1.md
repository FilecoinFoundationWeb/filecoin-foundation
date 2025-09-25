---
aliases: []
author: Protocol Labs
categories:
  - updates
date: "2021-01-19T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin节点引入API使开发者能够轻松地与Filecoin区块链进行交互和查询。了解Infura的Filecoin API如何进一步简化此过程吧！
image:
  alt: ""
  url: /uploads/infura-header-3.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/infura-header-3.webp
title: 开启Infura的Filecoin API之旅
_template: blog_detail_ch
---

_以下是Tim Myers在2020年10月22日Filecoin主网启动周期间的_[_演讲_](https://www.youtube.com/watch?v=prSByA1bQZk)_摘要。_

Filecoin节点实施方案通过开放API为开发者提供了与Filecoin区块链交互的便捷方式。这些API允许开发者既可以查询区块链的信息，也可以发出指令，指示节点在网络上执行交易。

虽然可以直接与开放这些接口的节点连接，但维护一个完整的节点可能会不便，因为区块链需要大量的存储空间，而且节点本身必须始终保持运行以保持与网络同步。这给那些只需要访问API的开发者带来了困扰。

为了帮助开发者解决这个问题，Infura在过去的几年里为一些分布式网络创建了API代理，包括以太坊、IPFS还有在Filecoin主网启动周开启的Filecoin API! [Infura](https://infura.io/) 代表其用户运行节点，在后端将API请求发送到这些节点。这让开发者不需要自己维护的基础设施，使在这些API之上进行开发创建变得非常容易!

![Infura Filecoin API Dashboard](/vintage/images/blog/infura.jpg)

您需要在Infura进行注册以便访问他们的Filecoin API。如果您还没有创建账户，您可以在这里[注册](https://infura.io/register?&utm_source=infurablog&utm_medium=referral&utm_campaign=filecoin_api&utm_content=filecoin_api_blog)。当您开始注册时：

- 点击导航栏中的Filecoin图标
- 点击“Add Me to Waitlist”

除了代理API请求外，Infura还为用户提供了通过密钥限制API访问的能力，以隔离单个项目。他们还为Filecoin API编制了以OpenAPI规范的形式范围广泛而详细的[文档](https://docs.infura.io/infura/networks/filecoin)，并提供了完整的请求和响应示例，以帮助用户快速入门。

像Infura这样的服务为整个Filecoin生态中的开发者赋能，大大减少了与网络交互所带来的困扰。这些工具使人们比以往任何时候都更容易使用Filecoin作为平台，提供了一个进入生态的入口，同时使创建者们可以专注于创建下一代存储服务。
