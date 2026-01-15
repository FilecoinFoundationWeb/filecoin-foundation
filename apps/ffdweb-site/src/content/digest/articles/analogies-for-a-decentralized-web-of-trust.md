---
title: Analogies for a Decentralized Web of Trust
created-on: 2026-01-15T13:43:00.000Z
updated-on: 2026-01-15T13:43:00.000Z
published-on: 2026-01-15T13:43:00.000Z
issue-number: 2
article-number: 2
authors:
  - first-name: Basile
    last-name: Simon
    company: Starling Lab
seo:
  description:
    How analogies from courts, art authentication, and Wikipedia reveal
    why decentralized webs of trust must combine cryptography with human
    judgment.
---

## Introduction: The Authentication Problem

We're fighting the last war. While everyone builds increasingly sophisticated deepfake detectors, the real battle is happening at the moment of creation. The current paradigm — to detect forgeries after they've spread — puts us permanently on defense in a cat-and-mouse game. By the time we've identified a fake, it's already done its damage in courtrooms, newsrooms, and public discourse.

Starling Lab's approach turns this logic on its head: authenticate at creation, not after circulation. Our Principal Investigator and Stanford’s cryptography pioneer, Dan Boneh, frames this as "Glass to Glass": a cryptographically secured chain from the moment a lens or other sensor captures data to the moment it is emitted from your screen display. In between, cryptography makes tampering detectable. This shifts the burden from "prove this isn't fake" to "prove this is real."

Leveraging the Filecoin ecosystem, we can pursue this fundamental reframe of data integrity. Instead of trying to catch lies after they've been told, we can build systems that make lying cryptographically impossible. But there's a catch.

## Problematisation: But Humans Are Still Outside The Glass

The "Glass to Glass" vision offers powerful protection against technical forgery, but it leaves humans outside the cryptographic chain. Someone still decides what to record, how to frame it, when to start rolling. Technical verification can prove that data hasn't been altered — but it can't prove that it matters, that it was captured honestly, or that it represents what it claims to represent.

Even a perfectly authenticated video of unclear events creates a troubling gap between "this data is unaltered" and "this data is meaningful and reliable." Context, interpretation, and significance remain stubbornly human concerns. Technical solutions alone create brittle trust — a cryptographically sealed castle built on sand.

This isn't a flaw in the technology; it's a reminder that trust has always been more than technical. If we want to understand how to build resilient verification systems, we need to examine how humans have always created trust networks that survive both technical failure and malicious attack.

## How Trust _Actually_ Works

### Courtrooms: Corroboration, Authority

Consider a typical criminal trial: rarely does a single piece of evidence decide the outcome. Instead, prosecutors weave together witness testimony, physical evidence, and circumstantial proof, while defense attorneys challenge each thread. This adversarial process isn't a bug — it's the feature that creates resilience. When witnesses contradict each other, the system doesn't break; it forces deeper examination. The jury weighs competing narratives, and truth emerges not from authority but from the collision of perspectives.

What's remarkable is how this creates trust without a central arbiter of truth. Procedural rules — evidence standards, cross-examination rights, and jury instructions — form a protocol that participants trust even when they dispute the outcome. In the U.S., different jurisdictions develop their own variations, creating a federation of legal systems that cross-validate each other's approaches. Appeals courts provide another layer of verification, like consensus mechanisms in distributed networks.

We’ve designed a technical prototype in support of this pluralism. In this setup we call a “Witness Server”: when a researcher triggers the archiving of a web page, multiple independent institutions simultaneously produce their own versions of that archive. These independent crawlers don't coordinate their responses; they operate from different locations, with different infrastructure and crawling engines, sometimes capturing slightly different visual artifacts — a promotional banner here, a cookie notice there.

Rather than treating these discrepancies as system failures, these contradictions are but the whole point. When servers disagree — perhaps due to network delays, geolocation differences, or varying browser behaviors — those variations become data points that help investigators understand what actually happened. Like conflicting witness testimony in court, the differences often reveal important context about how information appears to different observers. The protocol creates trust in the process by making the verification distributed and transparent, even when individual witnesses might capture imperfect snapshots.

### Art Authentication: Soft Consensus Networks

Walk into any major auction house during a Picasso attribution dispute, and you'll witness humanity's most sophisticated trust networks in action. The painting travels between conservation labs, where experts examine brushstrokes under microscopes, and provenance researchers, who trace ownership through decades of private collections. Art historians compare it to verified works from the same period. Meanwhile, in the informal networks of dealers, curators, and collectors, whispered conversations gradually build consensus. No single expert has the final word, but their collective judgment crystallizes into market conviction — or doubt.

What matters isn't just having multiple opinions, but having opinions from institutions and experts whose reputations carry weight. A conservation report from the Metropolitan Museum carries more credibility than one from an unknown lab. Another one of our technical prototypes, a system called Authenticated Attributes (AA), mirrors this reliance on institutional reputation. AA allows verifiers to provide a single signer ledger where they publish metadata, a bit like an RSS or micro social media feed. When we create verifiable metadata attestations — individual facts about digital evidence signed with cryptographic proof — their trustworthiness derives not just from the technical integrity of the signatures and timestamps but from the reputation of the institution making the attestation. Whether it's witness servers operated by Stanford and Harvard, or metadata verified by established news organizations, the cryptographic tools amplify rather than replace the trust networks built on institutional standing over time.

### Wikipedia: Transparent Scepticism at Scale

Consider Wikipedia's article on any controversial political figure — say, a recently deceased dictator. Initially, the page erupts in edit wars as contributors with opposing viewpoints battle over every sentence. Some editors attempt to whitewash the subject's crimes; others push for maximum condemnation. The page gets locked, unlocked, re-edited, and locked again.

Consider Wikipedia's legendary yogurt spelling war — a controversy that lasted seven years and generated over 140,000 words of discussion. The battle wasn't over substance but spelling: should the dairy product be "yogurt" (American) or "yoghurt" (British)? Initially, edit wars erupted as contributors with different linguistic loyalties battled over a single letter. The page got locked, unlocked, re-edited, and locked again for more than a decade.

Our Authenticated Attributes system operates on remarkably similar principles. Like Wikipedia's edit histories that create public archaeological records of how knowledge develops, AA creates cryptographically signed metadata attestations that serve as auditable trails of how evidence was processed and verified. Each attestation — whether describing the location of a photograph or the time a video was captured — functions like a Wikipedia citation, distributing the burden of proof across multiple independent sources rather than relying on a single authority. And just as Wikipedia's transparent editing processes allow anyone to verify how consensus emerged, AA's append-only log ensures that all metadata contributions are permanently attributable to their authors, creating the same kind of collective accountability that makes Wikipedia's chaotic process ultimately trustworthy.

These three systems (legal proceedings, art authentication, and Wikipedia) share profound structural similarities. All create trust through multiplication rather than concentration of authority. A single witness, expert, or editor might be biased, bribed, or simply wrong, but coordinated deception across multiple independent actors becomes exponentially harder. They embrace contradiction as information rather than system failure. When disagreements surface important uncertainties that might otherwise remain hidden, the systems process conflict gracefully, using procedural rules to convert disagreement into collective learning. Most importantly, they survive gaming attempts through transparency and redundancy, making attacks visible and ultimately self-defeating.

## Design Lessons for Decentralized Infrastructure

These analogies reveal why purely technical solutions create brittle trust: they optimize for the wrong variables. Cryptographic verification can prove that data hasn't been altered, but says nothing about whether the data is meaningful, was captured authentically, or accurately depicts reality. The lesson isn't to abandon technical verification but to design systems that scale human wisdom rather than bypassing it altogether.

Witness Servers, Authenticated Attributes, and cryptographic authentication tools more broadly work best when they amplify the patterns that make human trust networks resilient — redundancy, transparency, graceful handling of contradiction — rather than trying to replace human judgment with algorithmic certainty. For the Filecoin ecosystem, this suggests a design philosophy: build infrastructure that makes it easier for humans to verify claims independently rather than building systems that claim to verify truth automatically. This means:

- Creating protocols that surface disagreement rather than hiding it.
- Designing for multiple independent validators rather than single sources of authority.
- Making verification processes comprehensible to the humans who must ultimately decide whether to trust them.
- Supporting verification workflows instead of making them automatic or binary — giving users the tools to understand not just whether something is verified, but how and by whom.

The goal isn't to eliminate human judgment but to give it better tools for seeing clearly. Cryptography gives us powerful tools for establishing provenance and preventing tampering. But humans give us meaning, context, and the collective wisdom to navigate an increasingly complex information landscape. The future of decentralized trust lies not in choosing between technical and human verification, but in weaving them together into systems that honor both the irreducible human element and the power of pluralistic verification networks.
