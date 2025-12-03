---
title: Interplanetary Resilience
created-on: 2024-08-27T14:37:00.000Z
updated-on: 2024-08-27T14:37:00.000Z
published-on: 2024-08-27T14:37:00.000Z
issue-number: 1
article-number: 4
authors:
  - first-name: Dietrich
    last-name: Ayala
    company: Filecoin Foundation
image:
  src: /assets/images/interplanetary-resilience.webp
seo:
  description: Discover how Filecoin Foundation and partners successfully deployed IPFS in space, showcasing cryptographic verifiability, open standards, and the future of resilient interplanetary communication.
---

The vision of Filecoin is of verifiably robust storage of data scaling to meet the needs of humanity over centuries. In order to achieve this vision we need to _literally_ aim for the stars.

We’re at a turning point in the intersection of space communications technology and the development of the internet itself. We are seeing a massive increase in satellites and space networks, and multiple industries priming for the changes that will bring. Back on the ground, the terrestrial internet is beyond human (with many non-humans on the way!) capacity and also constantly under threat from both [climate disasters](https://www.scientificamerican.com/article/global-internet-connectivity-is-at-risk-from-climate-disasters/) and [war](https://www.forbes.com/sites/alexknapp/2024/03/08/undersea-internet-cables-are-vulnerable-targets-in-future-wars/). For Filecoin to be successful, one key step along that path is helping the world understand the importance of open and cryptographically verifiable systems. How we consume, share and store data will change radically over the next few years –– which presents an opportunity to set a course for open, interoperable communications standards with these primitives at their core.

## Open Source, Open Standards, and Uncle Sam

Space is increasingly recognized as an important frontier. While [headlines are dominated by a handful of companies](https://electrek.co/2024/03/08/tesla-shipping-cybertruck-tent/), the substance of the industry is driven by government contracts, both civilian and military.

The [lunar economy](https://www.nasa.gov/humans-in-space/growing-the-lunar-economy/) is growing, with no end in sight. Investment continues to grow, and missions being planned today are sometimes targeting well into the 2030s.

![The chart shows the total investment in billions of dollars on the left vertical axis, ranging from $0 to $15 billion, and the number of deals on the right vertical axis, ranging from 0 to 300. The horizontal axis lists the years from 2012 to 2021.](/assets/images/investment-start-up-space.webp "Investment in Start-Up Space Companies")

([Prometheus Space, 2022](https://prometheusspace.com/the-state-of-the-space-startup-companies-in-2022-and-the-way-forward/))

![A stacked bar chart with a line graph showing annual investment sources from 2014 to 2023. Investment types include Other, Corporate, Venture Capital, and Angel/Individual. Both total investment and the number of rounds generally increased, peaking around 2021.](/assets/images/annual-investment-source.webp "Annual Investment Source")

([ARS Technica, 2024](https://arstechnica.com/space/2024/01/taking-stock-private-investment-in-space-companies-rebounded-in-2023/))

As is renewed activity from the public sector (e.g. the Artemis mission).

In recognition of this, the government has been pushing heavily towards open modular systems at all layers of the [stack](https://arstechnica.com/space/2024/03/the-us-government-seems-serious-about-developing-a-lunar-economy/). This is a stark departure from expensive, proprietary, long-term vendor contracts of old: a change now enshrined in law.

This is critical as the industry is _legally_ mandated to work towards open and interoperable standards –– which naturally dovetails with the technologies that have been developed in the broader Web3 community. If we want to help shape the direction of this industry, we need to be a part of the conversation.

## Why IPFS

Two words: Cryptographically verifiable.

Wait, two more words: Transport agnostic.

Hm, actually those four words unlock 1.5 more words: Locationlessness.

Five and half good words which, in the end, describe characteristics of IPFS that combine to form a powerful set of capabilities in the context of the harsh conditions of vacuum, radiation, latency, and [everything that can go wrong](https://www.theverge.com/2024/5/24/24163846/starlink-succumbs-to-russian-electronic-warfare) under the sol. IPFS was _designed_ for when things go wrong.

To unpack how each of these properties are critically useful in space:

### Cryptographically Verifiable

One scenario that's been discussed as a good illustration of what IPFS brings to the table is frenemy satellite communication –– an increasingly important challenge given the rapid increase in space traffic expected over the next decade. Cryptographically-verifiable content-addressing of data means that messages can be exchanged with confidence that they have not been modified by radiation, equipment malfunction, or even a frenemy that you're sharing space with, while still allowing emergency communications.

### Transport Agnosticity

Given the mandate for modularity, there’s a need to have standards and interoperability at the application layer, without needing to know too much about the hardware and transports available. IPFS neatly handles this transport agnosticity because we can _cryptographically verify_ the content as it lands at its destination –– enabling the portability, modularity and extensibility we are used to in terrestrial internet application programming.

### Locationless-ness

Once you can trust that you will receive –– cryptographically, verifiably unmodified –– what you ask for, you no longer have as much concern about where you get it or who from. Locationless-ness means that applications can interact with and operate on data from anywhere reachable, without any prior configuration or knowledge required to find data given the application knows the content address. This can be particularly useful in sharing positioning data in a satellite mesh or broadcasting emergency environmental condition data.

## Mission Accomplished

Filecoin Foundation, Protocol Labs, Lockheed Martin, and Little Bear Labs collaborated to show that IPFS can deliver on this vision, and after a couple of years of planning, design, and testing, the mission completed in October 2023.

The mission goals were to:

- Demonstrate the suitability and benefits of the IPFS protocol for satellite and space communication.
- Lay the groundwork for eventual large scale storage in lunar/space use cases.
- Introduce open standards for decentralized communication and data access in space.
- Introduce and demonstrate cryptographic verifiability as a key component in open, interoperable space applications.

The demonstration was completed in the fall of 2023, putting IPFS into space around its 10th birthday.

The mission was successful, which set the stage for future deployments of the protocol in real world use.

After simulation tests, ground tests, and hundreds of meetings, the IPFS-based application was deployed to both a satellite in geosynchronous orbit and a ground station in Littleton Colorado in the U.S. for a series of tests and transmissions.

![Diagram showing the operation of LINUSS satellites running Myceli with four satellites in orbit and a ground server. Steps illustrate the satellite establishing a radio link, maintaining a strong Line of Sight (LOS) link for data transfer, downloading data, and stopping data transfer when the radio link is broken. Connections to IPFS interface and the open web are indicated.](/assets/images/linuss-satelite.webp "LINUSS Satellite Running Myceli")

The LINUSS satellite is designed to be updatable, and is described as “[the size of a four-slice toaster](https://news.lockheedmartin.com/linuss-small-sats-mission).”

![A satellite orbiting near Earth alongside a floating red toaster. Another satellite is visible in the background. The phrase "Yeah, pretty close I guess" is written in white text next to the Earth.](/assets/images/space.webp "Satellite Near Earth with Toaste")

You can read more about the mission in the [official Filecoin Foundation announcement](/blog/filecoin-foundation-successfully-deploys-interplanetary-file-system-ipfs-in-space).

## Distant Horizons?

IPFS isn't quite _interplanetary_ yet, but it is certainly extra-terrestrial. This is a remarkable accomplishment which shows great promise in IPFS as a part of a resilient, open source, open standards, and interoperable future in space communications.

Cryptographic verifiability is an increasingly important primitive for robust, reliable internet communication. This demonstration shows that we can implement content addressing in the modern space technology stack, and deploy it successfully. This sets the stage for more systems building with cryptographic verifiability, like Filecoin, to be competitive in these emerging markets –– and continue to serve humanity’s information, wherever and whenever it goes.
