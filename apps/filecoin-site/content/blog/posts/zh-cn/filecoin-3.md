---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-10-13T00:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Filecoin技术规范完成了升级! 如果您最近没有访问Filecoin
  Spec网站，请前往https://spec.filecoin.io/查看更新后的全新网站，该规范现在已经准备好接受社区的咨询，更多更新即将到来!
  请继续阅读本文了解过去几个月来Filecoin技术规范所做的巨大努力。
image:
  alt: ""
  url: /uploads/fil-spec-update-fig.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/fil-spec-update-fig.webp
title: Filecoin刚刚进行了大规模技术规范升级
_template: blog_detail_ch
---

在过去的几个月里，我们在改进Filecoin技术规范及其网站方面取得了巨大的进展! 我们进行了大量的更新，这些更新使规范的准确性比以前提高了6倍以上，达到了85%的完整度，许多剩余的细节还在进行中。 其中新的工作流程、状态徽章、搜索等，也极大地改善了规范和咨询的规范。

如果您最近没有访问Filecoin Spec网站，请前往https://spec.filecoin.io/查看更新后的全新网站。

![Filecoin Spec Header](/vintage/images/blog/fil-spec-header.png)

技术规范网站经历了几轮更新 "设计→实施→部署"，以整合所有必要的功能，为Filecoin开发者、实施者、研究者和生态开发者创建一个伟大的平台。此外，我们还降低了更新规范内容所需的复杂度、依赖应用结构化的软件包管理，增加了确保整个规范一致性的功能，增加了对新工具的支持等等。

## 最新的Filecoin技术规范促进了工作流程的改善

更新规范的内容现在是一个更简单、更愉快的体验，包括在markdown文件中 "仅需点击一次 "即可进行编辑。后台机制会处理剩下的工作，然后自动更新目录(ToC)和文档结构！您可以在规范的repo中找到所有需要的简单说明，以便贡献内容。您可以在规范的repo [README文件](https://github.com/filecoin-project/specs/blob/master/README.md)中找到贡献内容所需的所有简单说明。

以下为更新后的网站最值得关注的几项功能：

**工具 & 语法：**

1. 无缝对接和控制依赖npm与Go模块的软件包
2. 通过katex提供数学算法支持
3. 新的markdown linter带有一些自定义的lint规则，以确保在CI中作为测试运行的markdown内容的一致性。

**图表 & 代码块：**

1. Mermaid和Dot处理通道（可选择在未来添加更多）可与Hugo服务器很好地进行集成，用于开发和内容编辑。
2. 可以使用符号简码从规范中引用代码，这样即使代码库本身被修改，也能从相应的存储库中引用和提取正确的代码块。

**文档层级结构：**

1. 章节编号从ToC中提取，因此一旦章节重构ToC会自动更新。不需要单独编辑文件来保持同步。
2. 章节深度链接集成化。
3. 单页渲染现现已稳定，章节层级结构已反映在ToC中。

除了以上变更之外，网站还进行了其他改善！

![Filecoin Spec Facelift](/vintage/images/blog/fil-spec-facelift.png)

在内容方面，我们在更新协议的描述方面投入了巨大的精力。Filecoin是一个大型的项目。为了让我们的努力更有意义，假如将协议规范打印出来，**那将是一本约400页的教科书！**

Filecoin规范是基于实现不可知的，这意味着文档对使网络运行的算法和协议交互提供了很好的描述，但不涉及实现细节。该规范为开发者提供了在任何语言中实现Filecoin所需的所有细节，对Lotus实施方案的参考仅在某些需要的地方提供。

## 实施过程

在我们3个月的改进技术规范项目历程中，有超过300个GitHub问题被打开，200多个PR被合并。

![Filecoin Spec Stats](/vintage/images/blog/fil-spec-stats.png)

如今，该技术规范网站的更新率已达84%。为了跟踪我们自己的进展情况，以及网站和协议的“健康”状态，我们引入了三个工具：

**1. 透明化的仪表盘** ，显示规范每个部分的状态，范围为 "不正确"、"WIP/草稿"、"可靠 "和 "稳定"。我们已经在规范markdown文件中集成了前端事项属性，以将数值无需任何额外的操作就能自动输入到仪表板中。另外值得注意的是，仪表板是由ToC自动生成和更新的，因此不需要编辑单独的文件来更新仪表盘。

![Filecoin Spec Legend](/vintage/images/blog/fil-spec-legend.png)

**2. “审计完成度” 指标**作为仪表板的单独一栏，显示协议的具体组成部分是否已被审计。在有审计报告的情况下，将标明报告(或以前报告的清单)的链接及审计的日期。

![Filecoin Spec Dashboard](/vintage/images/blog/fil-spec-dashboard2.png)

**3. 稳定的进度条显示** ，用来总结整个规范的状态。

![Filecoin Spec Progressbar](/vintage/images/blog/fil-spec-progressbar-85.png)

**4. 单独用来显示"实施方案状态 "的仪表板** ，包含所有不同版本Filecoin实施方案的状态信息：Lotus、Fuhon、Forest和go-filecoin。该仪表板集成了程序挂钩，可以从相应的资源库中无缝提取信息，并报告CI测试是成功/失败以及测试覆盖率。

![Filecoin Spec Implementations](/vintage/images/blog/fil-spec-implementations.png)

## FIP集成

经过几轮测试和两场令人印象深刻的太空竞赛，现在协议已经完成了微调，准备启动了！从现在开始，对协议的修改将通过[Filecoin改进提案(FIP)](https://github.com/filecoin-project/fips)进行。对协议的修改建议必须经过明确规定的流程，详见[FIP repository](https://github.com/filecoin-project/fips)。

在大多数情况下，FIP需要对协议规范进行更新，因此，我们正在进行的工作之一包括将Filecoin技术规范与FIP流程无缝整合。

## 下一步有什么计划?

我们还整合了规范版本，以创建规范本身的时间机器，这样您就可以在协议更新之前查看规范的最后更新时间。最后，我们正在整合工具，通过API远程提取数据。这将实现与FIP的无缝集成，同时允许我们扩展仪表板来使它包含 "一致性测试 "的状态。

如果您是Filecoin的开发者、研究者、矿工或用户，我们乐于见到您：

1. 帮助改进规范
2. 您对网站和更新规范流程的反馈意见
3. 关于如何进一步改善用户体验的想法

在两轮太空竞赛中，协议及其规范有了重大的进展和升级，因此现在需要额外的努力，将所有规范的仪表盘进度条填满! 我们正在致力于未来几周内有90%的可靠内容以及在未来几个月内有100%的稳定内容呈现给大家！
