---
aliases: []
author: ""
categories:
  - updates
  - interviews
  - awards
  - events
date: "2021-10-05T04:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: Filecoin Plus在Filecoin网络上增加了一层社交信任，以鼓励有用的存储并协助与已验证用户之间达成交易。
image:
  alt: ""
  url: /uploads/filecoin-plus-verified-clients-1.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/filecoin-plus-verified-clients-1.webp
title: "Filecoin Plus: 存储提供者如何与已验证用户互动"
_template: blog_detail_ch
---

_Filecoin Plus在Filecoin网络上增加了一层社交信任，以鼓励有用的存储并协助与已验证用户之间达成交易。可以在_ [_Filecoin Plus文档_](http://docs.filecoin.io/store/filecoin-plus/)_了解更多。这是_ [_2021年９月Filecoin虚拟社区见面会_](https://youtu.be/0dBH_VeZr5s "September 2021 Filecoin Meetup")_上的一篇演讲内容摘要。 加入_ [_Filecoin见面会社区_](https://www.meetup.com/pro/filecoin-community/) _持续关注下次聚会信息！_

作为一个区块链网络，Filecoin提供了一个稳健的分布式平台，任何人都可以在上面存储数据。网络上的存储提供者根据其提供的存储服务的可靠性获得区块奖励。

为了最大化Filecoin可以支持的有用存储数量，[Filecoin Plus](https://filplus.fil.org/ "Filecoin Plus") 作为一个社交信任层被提出来。用户可以使用一个新型的资源DataCap(数据配额)来与特定的存储提供者达成交易提议，这些存储提供者则有强大的激励因素来存储这些数据，因为这会在未来增加他们的区块奖励分成份额。

## 核心机制

Root key holders、公证人、用户和存储提供者通过DataCap的分配和花费来互动。公证人（Notaries）通过社区治理申请，并与Root key holders互动以获取DataCap分配，然后就可以分配给用户。这些用户就可以在与存储提供者达成的交易提议中应用这些DataCap了。

## DataCap

这是Filecoin网络里的一种资源，它从公证人手上流转到可信的用户。除了FIL外，这些用户根据协议价格来使用DataCap来达成存储交易提议。DataCap是一个“一次性积分”，即它一旦使用就会被消耗掉。

这时，DataCap无法在用户地址之间互转。在网络上，存储提供者可以通过提供由DataCap达成的交易提议来获得额外的奖励。

## 存储提供者的激励机制

存储提供者根据其在网络上提供的存储空间赚取回报，而封装扇区的数量和质量都会影响存储提供者的收入。除了那些区块奖励外，以交易提议价格的形式赚取的额外收入是来自为用户实际存储的数据。

此外，被高频取回的有用数据则会产生更多收入。虽然更高的取回频率会带来一些责任，但它们会被协议价格所抵消。

在Filecoin Plus项目里，存储提供者会看到其对验证区块的质量调整倍数（quality adjusted power，QAP）有１０倍增长，相对于封装　_未验证_　的交易提议来说，会更有可能赚取区块回报。由于用户在项目里已经被验证，那么涉及的风险会更低。

根据交易提议的体积，有不同的接收DataCap的方式。在[verify.glif.io](https://verify.glif.io/ "Verify yourself, get verified storage")上有一个近乎实时的流程，让人们通过GitHub来验证（因此必须有一个 [GitHub](https://github.com "GitHub") 账号）。得到许可就会提供32 GiB的DataCap，这对刚熟悉Filecoin的用户或想测试达成交易提议的新人存储提供者来说都是很有用的。

普通验证（General verification）是大多数用户采用的方式：他们与个体的Filecoin Plus公证人合作以获得最高50 TiB的DataCap分配。过程所需的尽职调查是由该公证人和用户完成的。

个体公证人主导了他们尽职调查所需的条件以及采用的流程，有时候他们可能只会在特定地理位置提供服务，或只对特定领域的数据提供服务。

最后，对涉及到PiB级别的大体积交易提议的分配，相关申请会提交到Filecoin Plus社区的全体公证人前，以帮助审计和审查分配和完成交易提议以及数据源事宜。这是为了获取随时间推移分配的大额DataCap.

这个群组里有一定数量的此类申请已经获批，正在分配交易提议，总共有大约20个在申请流程中。

## 存储提供者外联计划

作为一名存储提供者，你能如何寻找已验证用户？我们提供了一个存储提供者表格（Storage Provider Table），你可以在里面添加自己的联系信息、服务位置和其他细节，让用户用于与其他存储提供者对比。这在 [Filecoin Plus Registry](https://plus.fil.org/ "Filecoin Plus Registry")上展示，用户就是在这里开始验证的。

要想被加入到存储提供者表格，只需要在公开的[Filecoin Plus Client Onboarding repo](https://github.com/filecoin-project/filecoin-plus-client-onboarding "Filecoin Plus Client Onboarding repo")库里简单编辑miners.md这个markdown文件并提交合并请求。

存储提供者可以在[Filecoin Slack](https://filecoin.slack.com "Filecoin Slack")频道里进行市场营销和外联： [#fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX) 和 [#fil-deal-market](https://filecoinproject.slack.com/archives/C01KCAAURAN)。这些频道受众面广且较为活跃，里面还有不同类型的公告、问题、人们正开发的工具，以及主动寻找存储提供者的用户。

## 即将来到的改进

持续提升和增加市场营销和商业拓展机会，以及为已验证用户和存储提供者达成更好的交易提议，都是很重要的。

现在有一个“内置存储提供者外联计划（Opt-in to Storage Provider Outreach）”正在开展：一个用户可以在其应用里向公证人表明其想从潜在的存储提供者里获取宣传信息。这能让存储提供者更容易查找拥有DataCap并准备开始达成交易提议的申请者。这样的改进会提升存储提供者查找已验证用户的机制。

请保持关注这个计划，还有其他的一些Filecoin Plus改进计划。

{{< youtube id="0dBH_VeZr5s?t=149" title="Filecoin Plus: 存储提供者如何与已验证用户互动" >}}

## 更多参与

[加入Filecoin Plus社区](https://github.com/filecoin-project/filecoin-plus-client-onboarding "Filecoin Plus onboarding")可以通过参与GitHub issues和讨论的方式来实现。里面有不同的Client Onboarding repo和Filecoin Plus项目repo库。具体来说，你可以每隔两周参与治理会议。[Filecoin Plus治理库](https://github.com/filecoin-project/notary-governance/ "Filecoin Plus Governance")包含了宣告下一次会议的issue，以及未来的所有会议日历。之前提到的Slack频道可能是社区帮助回答各种问题的最佳位置。

通过这些初始步骤，你就可以很快开始与已验证用户取得联系了！
