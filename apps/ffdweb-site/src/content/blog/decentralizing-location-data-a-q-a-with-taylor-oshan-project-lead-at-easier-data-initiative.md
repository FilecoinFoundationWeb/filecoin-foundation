---
title: "Decentralizing Location Data: A Q&A with Taylor Oshan, Project Lead at
  EASIER Data Initiative"
created-on: 2025-08-26T15:10:00.000Z
updated-on: 2025-08-26T15:10:00.000Z
published-on: 2025-08-26T15:10:00.000Z
category: interviews
image:
  src: /assets/images/081425-qa-umd.webp
seo:
  description:
    "In this Q&A, Taylor Oshan, Project Lead at EASIER Data Initiative,
    shares more about how decentralized infrastructure is unlocking new
    possibilities for open science."
---

Our world runs on maps. Every time you check a walking distance, order a ride, or even track a storm, you’re relying on geospatial data. And this reliance is only deepening: from [upticks in natural disaster responses](https://www.worldwildlife.org/stories/is-climate-change-increasing-the-risk-of-disasters) fueled by climate change to the [rising popularity](https://www.fastcompany.com/91381492/instagram-launches-map-feature) of social apps that map friends’ whereabouts. As our world leans more heavily on location-based services, the infrastructure behind this data has never been more critical. But how can we ensure that this information is always accessible, accurate, and trustworthy? 

That’s the challenge the [Decentralized Geospatial Collaborative](https://decentralizedgeo.org/) (DGC) is tackling. A collaboration between EASIER Data Initiative at the University of Maryland, [Astral](https://www.astral.global/), and the Blockchain Domain Working Group within the [Open Geospatial Consortium](https://www.ogc.org/), DCG is reimagining how our geospatial data is stored, shared, and verified. They’re conducting research and developing open source software with the goal of creating a more resilient geospatial data ecosystem leveraging decentralized technologies. 

Through three core focus areas — peer-to-peer data management, proof-of-location, and verifiable geo-computation — the team is developing open-source tools that bring auditability and transparency to the location data we rely on every day. With support from FFDW, DCG is expanding what’s possible with digital geospatial infrastructure.

In this Q&A, we sit down with **[Taylor Oshan](https://x.com/TaylorOshan)**, **Project Lead at EASIER Data Initiative**, to learn more about the vision behind DGC, the technology powering their work, and how decentralized infrastructure is unlocking new possibilities for open science. 

**Can you tell us a little about the mission behind DecentralizedGeo? What inspired this initiative?**

The idea was to create an open and collaborative community to develop the broader ecosystem to support a decentralized geospatial web– that’s the nexus between decentralized web (DWeb) technologies and geospatial web technologies. The two communities are largely non-overlapping, but we found that several decentralized web projects were exploring geospatial elements, and we believe the decentralized web has many benefits for the geospatial community. So it’s a place to bring the two together, reduce effort duplication, build consensus, and share what we have been working on– hopefully bringing on board additional users and contributors to the ecosystem.

**One of the tools you’ve built is the [Web3 Geospatial Dashboard](https://github.com/DecentralizedGeo/web3-geo-dashboard?tab=readme-ov-file). What does it do, and how can others use it?**

On the surface, the dashboard is a visualization tool for exploring geospatial datasets. However, the more unique contribution is that it is built to display datasets that have been enriched with metadata from the geospatial dimension (STAC or Spatial-Temporal Asset Catalog) and the DWeb dimension (IPFS CID, Filecoin storage deal ID). This allows the data to be queried based on geographic area and for the display of retrieval options from traditional endpoints (S3 buckets), directly from IPFS, or the Filecoin storage network. Wherever possible, we built in options to streamline retrieval, and the dashboard was designed so that different datasets could be loaded in and explored. We also developed a Chrome extension to allow users to pin data to IPFS directly through the dashboard after they retrieve it, allowing them to help support the network and contribute towards the maintenance and dissemination of geospatial data. The dashboard provides the first example of how to interweave the geospatial web and decentralized technologies, demonstrating the advantages and potential of each in an interactive and visual manner. Users can explore the data we have prepared, load their own, or explore the underlying technologies and concepts.

**What unique advantages do technologies like IPFS and Filecoin offer for this work? Why did you choose Filecoin decentralized storage for these projects?**

Many geospatial data sets are collected using tax dollars and are considered public goods that are vital for important collective decision-making and research. Therefore, there is a natural need to ensure that these resources remain open and available. Having alternative storage layers, especially those supported by decentralized infrastructure, ensures that this type of data does not have a single point of failure if critical infrastructure goes down, and remains tamper-resistant in the case that a bad-faith actor tries to alter the data. 

**What were some of the biggest technical challenges in building decentralized geospatial tools?**

We’ve come across a few challenges and important lessons. First, there is already some really great geospatial web technology out there, so it’s important to complement that where possible instead of trying to reinvent the wheel. Another challenge lies in the sheer diversity and volume of geospatial data. We always try to develop protocols in the most general way that we can in order to accommodate as many use cases and types of data, and we have had to be creative to scale our data pipelines to grapple with the large amounts of geospatial data worthy of preservation. Finally, there is a human component that makes it challenging to decentralize systems that are already centralized. When storage and stewardship are controlled by a few entities, it may not be straightforward to incorporate decentralized infrastructure or management.

**What role do you see decentralized infrastructure playing in the future of open science?**

There is potentially a really important role for decentralized infrastructure in open science. There seems to be a growing need to preserve not only the raw data used for research and science, but also for tracking the provenance of the scientific process –– data processing, analysis, and interpretation –– in order to ensure the quality and authenticity of contributions over time. It’s not clear that a centralized system could provide the flexibility and level of integrity, provenance, and trust that decentralized technology can.

**What’s next for EASIER Data Initiative’s work on decentralized data infrastructure?**

We have recently been focusing on how to design protocols and systems to make geospatial information interoperable on the decentralized web and provide more certainty about the provenance and reliability in a manner that can be tracked over time. There is a growing need to prove the location of people, events, or goods in an automated and trusted way, especially in the context of the rising agent economy. Towards this, we recently released the [Location Protocol](https://easierdata.org/updates/2025/2025-05-19-location-protocol-spec) and built a reference implementation, using the Ethereum attestation service. The really neat thing is that this essentially turns individual claims about location into rows of a decentralized geospatial database that can be openly contributed to and queried. We are currently working with project partners to build demonstrative applications and have plans to build a suite of tools around this technology to simplify the process of creating compliant geospatial information, querying it, and visualizing it.

As the need for reliable data grows, projects like DGC are helping lay the groundwork: moving us toward a future with verifiable data we can trust. To stay up to date with DGC’s latest work, you can visit <https://decentralizedgeo.org/>.
