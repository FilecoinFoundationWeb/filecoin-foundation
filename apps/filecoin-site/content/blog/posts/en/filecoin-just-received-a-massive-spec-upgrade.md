---
aliases:
  - /blog/filecoin-spec-update/
author: ""
categories:
  - updates
date: "2020-10-13T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Over the last few months, we have made massive progress revamping the Filecoin
  Specification and its custom website!
image:
  alt: Filecoin just received a massive Spec upgrade!
  url: /uploads/specs-upgrade-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/specs-upgrade-social.webp
title: Filecoin just received a massive Spec upgrade!
_template: blog_detail
---

Over the last few months, we have made massive progress revamping the Filecoin Specification and its custom website! There are a myriad of updates, which together made the spec over 6x more accurate than before, achieving an outstanding 85% completeness score with many of the remaining details already in progress. Contributing to the spec and consulting the spec has also been improved dramatically due to new workflows, status badges, search and more.

If you haven’t visited the Filecoin Spec site recently, head over to: [https://spec.filecoin.io/](https://spec.filecoin.io/ "https://spec.filecoin.io/") to see a fully refurbished website, full of updated content!

![header](https://filecoin.io/vintage/images/blog/fil-spec-header.png)

The Spec website went through several “design → implement → deploy” rounds, in order to integrate all the features essential to create a great platform for Filecoin developers, implementers, researchers and ecosystem developers. Additionally, we reduced the complexity required to update the spec content, applied structured dependency management, added features to ensure consistency throughout the spec, added support for new tools, and much more!

## New Filecoin specification contribution workflows

Updating the spec content is now a much simpler and more enjoyable experience that involves “single-touch” edits in markdown files. The backend mechanics take care of the rest, updating the Table of Contents (ToC) and document structure automatically! You can find all the simple instructions needed in order to contribute in the spec’s repo [README file](https://github.com/filecoin-project/specs/blob/master/README.md).

The most noteworthy features of the updated site are split into the following categories:

**Tooling & Syntax:**

1. Seamless control over dependencies with npm and Go Modules
2. Seamless math support through katex
3. New markdown linter with some custom lint rules to ensure consistency in the content markdown, which runs in the CI as a test.

**Diagrams & Code Blocks**

1. Mermaid and Dot processing pipelines (with an option to add more in the future) nicely integrated with Hugo server for development and content editing.
2. Code can be referenced from the specification using symbol shortcodes so that the correct code block is referenced and pulled from the respective repository even if the codebase itself is modified.

**Document Hierarchy**

1. Section numbering is pulled from the ToC, so that the ToC is automatically updated once sections are reorganised. No need to edit separate files to keep things in sync.
2. Section deep-linking integrated.
3. Single page rendering is now stable and section structure is reflected in the ToC.

In addition to these background changes, the website got a facelift too!

![facelilft](https://filecoin.io/vintage/images/blog/fil-spec-facelift.png)

On the content front, we have put a huge amount of effort in updating the description of the protocol. Filecoin is an enormous project. To put our effort into perspective, if printed, **the specification of the protocol would be a \~400-page textbook!**

The Filecoin specification is implementation-agnostic, which means that the text provides a nice description of the algorithmics and protocol interactions that make the network operate, without going into implementation details. The specification provides all the required details that developers need in order to implement the Filecoin in any language. References to the Lotus implementation are provided only where needed.

## Measuring Progress

In our 3-month Spec Project journey there were more than 300 GitHub issues opened and more than 200 PRs merged.

![stats](https://filecoin.io/vintage/images/blog/fil-spec-stats.png)

Today the spec site is 84% up-to-date. In order to keep track of our own progress, as well as the “health” state of the site and protocol, we have incorporated three great tools:

**1. A bright dashboard** that shows the state of each section of the spec in the range of “Incorrect”, “WIP/Draft”, “Reliable” and “Stable”. We have integrated front matter properties in spec markdown files to feed the values automatically into the dashboard, without any extra action needed. It is also worth noting that the dashboard is generated and updated automatically from the ToC. There is no need to edit separate files in order to update the dashboard!

![legend](https://filecoin.io/vintage/images/blog/fil-spec-legend.png)

**2. An “audit-complete” indicator** as a separate column of the dashboard to show whether the specific component of the protocol has been audited. Where an audit report is available, there is a link to the report (or list of previous reports) together with the date when the audit took place.

![dashboard](https://filecoin.io/vintage/images/blog/fil-spec-dashboard2.png)

**3. A stabilisation progress bar** that summarises the state of the whole specification.

![progressbar](https://filecoin.io/vintage/images/blog/fil-spec-progressbar-85.png)

**4. A separate “Implementation Status” dashboard** with status information for all the different Filecoin implementations: Lotus, Fuhon, Forest and go-filecoin. The dashboard integrates hooks to seamlessly pull information from the corresponding repositories and reports CI test success/failure as well as test coverage.

![implementations](https://filecoin.io/vintage/images/blog/fil-spec-implementations.png)

## FIP Integration

After several testing rounds and two impressive Space Race competitions, the protocol has now been fine-tuned and is ready for lift off! From now on, changes to the protocol will take place through [Filecoin Improvement Proposals (FIPs)](https://github.com/filecoin-project/fips). Suggested changes to the protocol have to go through a clearly specified process, detailed in the [FIP repository](https://github.com/filecoin-project/fips).

In most cases, FIPs will require updates to the protocol specification and therefore one of the streams of our ongoing efforts include seamless integration of the Filecoin Spec with the FIP process.

## What’s Next

We are also integrating spec versioning to create a Time Machine of the specification itself such that you can view back in time what the spec was prior to a protocol update. Last but certainly not least, we are integrating tools to pull data from remote sources through an API proxy. This will enable the seamless integration with FIPs but will also allow us to extend the dashboard to include the status of “Conformance Tests”.

If you are a Filecoin developer, researcher, miner, or user, we’d love:

1. Your help contributing to the spec
2. Your feedback on the site and process of updating the spec
3. Ideas on how to improve the user experience even further

There has been significant progress and upgrades to the protocol and its specification during the two rounds of Space Race, and as a result extra effort is now needed to paint all of the spec dashboard cells in Filecoin blue! We are shooting to have 90% reliable content in the next couple of weeks and 100% stable content in the next couple of months.
