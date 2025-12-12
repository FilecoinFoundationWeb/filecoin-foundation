---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2022-01-17T16:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: 使用MetaMask Flask，开发者可直接从Wallet访问Filecoin等Web3工具
image:
  alt: ""
  url: /uploads/fil-blog-2022-xx-xx-metamask-flask-announcement.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-blog-2022-xx-xx-metamask-flask-announcement.webp
title: MetaMask Flask：让Filecoin开发者如虎添翼
_template: blog_detail_ch
---

MetaMask Flask是一片崭新的试验场，聚集Wallet最前沿最新鲜的功能。作为MetaMask的金丝雀版，Flask为开发者与实验性功能提供了空间，期待它们点亮Web3的未来。

任何涉及实际价值管理与转移的应用都需要确保用户资产安全，这离不开安全的UX和稳定的功能。MetaMask选择先在Flask发布新功能，移除部分常规限制措施，让功能经过快速迭代再与广大用户见面。

因此，Flask不具备MetaMask所拥有的API和UX稳定性。我们再次强调，Flask的目标受众是开发者。**参与风险由用户自行承担。本试验场不提供监督指导。**

## Snaps为创新提速

Snaps是通过Flask上线的第一个功能。

**有了Snaps，开发者可以在运行状态下拓展MetaMask的功能，无需MetaMask团队参与。** 也就是说，开发者可以独立向其用户推出自行设计的功能！

**MetaMask是首个为用户提供扩展性的Wallet。Snaps的作用不仅限于Ethereum，而是旨在提升Web3生态的整体创新速度**虽然早期版本的Snaps只允许对MetaMask UI做部分调整，但已实现最重要的一大功能：用snap管理不同协议的用户秘钥。如果协议有[SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) ID，JavaScript签名库和公开可用的节点，开发人员可在MetaMask中增加对协议的支持。

Snaps的开发者资源仅受限于Snaps API，而 MetaMask团队会继续迭代，满足开发者需求。

本质上，MetaMask Snaps包含两部分：

1. MetaMask安全执行第三方MetaMask Snaps代码的方法。
2. 网站和 MetaMask的API，用于和单个Snaps通信。

通信经由JSON-RPC请求与响应建立。通过这种方式，Snaps可以扩展JSON-RPC API，在运行时改变MetaMask应用表现。未来，MetaMask可利用这一点实现对不同区块链、其他去中心化协议、新型加密方式、新型加密资产以及无数新功能的支持。

更多Snaps使用方法可参阅[技术文件](https://docs.metamask.io/guide/snaps.html)。

## Snaps让Filecoin更简单

为最大化新功能的效用，Protocol Labs与Chainsafe合作为MetaMask Flask开发了snap。安装后，snap将为Wallet接入Filecoin集成并附加前端。用户可浏览Filecoin账户、查看余额、发送交易以及使用Filecoin秘钥创建加密签名消息。对用户来说，与Filecoin协议交互变得更加便利，可由MetaMask浏览器集成直接实现。

想了解如何在MetaMask Flask中启用Filecoin Snap，可观看Erik Marks进行的[演示](https://youtu.be/14uEYdgyEr8)。

## 总结

在Flask环境中，MetaMask致力于为所有用户实现稳定、易于维护、安全的功能及API。Snaps让Web3开发者充分发掘MetaMask产品潜力，打造新型dapp。所有开发者都可以创建Snaps，今后，用户也可以自由选择需要的Snaps加入Wallet。

Protocol Labs已经率先运用上述新功能，优化用户与Filecoin的交互体验。

共同创造Web3的未来，从[了解Snaps](https://docs.metamask.io/guide/snaps.html)开始，还有更多相关资源在Filecoin[snap](https://github.com/ChainSafe/filsnap)。祝各位开发者一切顺利！
