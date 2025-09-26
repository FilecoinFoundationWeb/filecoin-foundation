---
aliases: []
author: Filecoin Project
categories:
  - updates
date: "2020-10-09T00:01:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  在过去的两周中，Filecoin社区在Filecoin网络上进行了20多万笔存储交易并存储了超过170
  TiB的宝贵数据。这些数据都是参与者在Slingshot竞赛中存储的，Slingshot竞赛是一个存储用户和开发者将有价值的数据存储到Filecoin网络上的社区竞赛。
image:
  alt: ""
  url: /uploads/slingshot-valuable-datasets.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/slingshot-valuable-datasets.webp
title: 通过Filecoin Slingshot存储有价值的数据集
_template: blog_detail_ch
---

在过去的两周中，Filecoin社区在Filecoin网络上进行了20多万笔存储交易并存储了超过170 TiB的宝贵数据。这些数据都是参与者在[Slingshots竞赛](https://slingshot.filecoin.io)中存储的，Slingshot竞赛是一个存储用户和开发者将有价值的数据存储到Filecoin网络上的社区竞赛。

总而言之，我们看到团队围绕包括科学、文化，娱乐，软件等等各种数据集创建了Dropbox风格的存储应用程序、游戏和UI。让我们来探索本次竞赛中最有趣的数据集！

## [Smartcity](https://github.com/filecoin-project/slingshot/blob/master/participants/Smartcity%20Sensor-based%20network%20and%20data%20analysis%20system.md)团队

**数据集:** 光纤数据

**数据大小:** 约50-100 TiB

Smartcity正在构建一个基于传感器的网络和数据分析系统，该系统使用前置光纤生成的数据来监测全世界城市中光纤周围的温度、压力、振动、声音和其他信息。研究人员、市政经理和交通设施主管可以使用此数据来协助城市规划和建设。它也可以用于构建预测性监控系统，在某些情况下甚至可以帮助预测地震。这些光纤就像是城市的神经系统，Smartcity项目正在利用这些生成的数据来帮助城市更高效地运行。

来自光纤传感器网络的数据存储在Filecoin和IPFS上。深度学习模型将基于此数据进行训练，并将最终用于分析各种信号类型并进行对事件进行分类和预测的模式识别。该团队创建了一个网页来播放从这些传感器收集的声音，并创建了一个查询界面来将这些文件从IPFS和Filecoin发送到执行深度学习处理的远程Web服务器。

## [Zangshell](https://github.com/filecoin-project/slingshot/blob/master/participants/Zangshell%20virtual%20reality.md)团队

**数据集:** 虚拟现实

**数据大小:** 约50 TiB

Zangshell是一个虚拟现实（VR）和增强现实（AR）系统，它从专业相机收集原始视频，然后对其进行处理和存储。该数据最初用于房地产和市政工程。此数据之前存储在中心化的数据中心中，但是团队正在将数据迁移到IPFS和Filecoin网络以节省存储成本。 Zangshell团队打算将其存储和数据处理的流程直接迁移到IPFS和Filecoin上。

Zangshell用户将能够直接在其网络浏览器中观看这些VR / AR图像或视频。他们可以放大或缩小场景，还可以通过使用PC鼠标或移动设备屏幕上的手势从不同角度查看虚拟现实场景。

## [来自云南的Starry Sky](https://github.com/filecoin-project/slingshot/blob/9dc8e4ef3ef2b3cb841ee166506028aaf69d6e78/participants/hlmxy-filecoin.md)团队

**数据集:** 天文和气象数据

**数据大小:** 约200TiB

来自云南的Starry Sky团队正在存储一个天文和气象数据的图表、分析和照片的资料库。这些数据是由云南大学在中国昆明生成、收集和存储的。云南的Starry Sky团队最近与大学合作了几个不同的项目，并讨论了如何将这些数据存储在Filecoin上。 Slingshot的发布使他们有充足的动力开始这个新项目。

该团队认为这些数据对我们子孙后代十分宝贵，并相信Filecoin的使命——存储人类社会最重要信息使Filecoin存储网络成为此数据的极佳存储解决方案。他们计划将大学和其他处理天文和天气数据的组织落地作为第一批用户。

## 其他有价值的数据集

除了Slingshot团队针对特定使用场景存储的数据集外，还有许多[其他重要且可公开获得的数据集](https://github.com/filecoin-project/slingshot/blob/master/datasets.md)鼓励Slingshot团队进行存储。这些数据集有可能向全球用户提供重要的医学、科学和文化信息。这其中一些数据集包括：

- **宇宙空间数据:** [Sloan Digital Sky Survey](https://www.sdss.org/science/)（SDSS）创建了详细的宇宙三维地图，其中包含三分之一星空的深层彩色图像和超过300万个天文体的光谱。 SDSS致力于绘制宇宙地图已有20多年了，并还在继续添加数据。通过利用这些数据已经有了新的发现，包括发现了新的类星体、发现了绕银河系运行的新的“超微弱”矮星系星群以及有关“超高速恒星”的数据，这些恒星距离银河系中心的黑洞极近，并且移动速度如此之快以至于它们几乎要完全逃离银河系。

- **COVID-19数据:** 美国政府和主要研究小组组成的联盟已经准备好公开的[COVID-19开放研究数据集](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge) (CORD-19) ，包括超过20万篇关于COVID-19、SARS-CoV-2和相关冠状病毒的学术文章。该数据集将使全球研究界能够获得新的认知，以支持与COVID-19的斗争并防止未来更大的病毒传播。

- **博物馆数据:** 为了提高政府数据的质量以其教育、个人及商业用途方面的可用性，[台湾故宫博物院](https://theme.npm.edu.tw/opendata/index.aspx?lang=2) 在2015年建立了公共的“数据库搜索”和“图像下载”资源库，以使公众更容易获得博物馆的图像和研究材料。数据包括展览信息以及包括绘画、物品、服装、题词和书法等博物馆文物在内的图像。

我们的世界每天都会产生数十亿字节的数据。这些数据中的大部分有可能帮助回答人类最关键的问题。我们相信Filecoin网络将通过保护、保留我们物种数据并为子孙后代提供访问机会来解决这些重大问题并发挥重要作用。我们很高兴看到Slingshot参与者们共同致力于帮助网络发掘这一潜力。
