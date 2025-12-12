---
aliases:
  - /blog/filecoin-security-update/
author: ""
categories:
  - updates
date: "2020-10-19T06:00:00Z"
dim_image: false
double_column_inverted: false
double_column_mode: false
excerpt: >-
  Building a strong Security Culture in the Filecoin project has been one of our
  core goals from the beginning of the project, from creating bleeding edge,
  researched, and evaluated mathematical proofs that set the foundation for the
  critical operations executed in the Filecoin Protocol (e.g. Proof of
  Replication & Proof of Space Time), to building a culture of strong security
  habits, secure code development and testing, through working with multiple
  external security specialists, pentesters and researchers to audit our code
  and practices.
image:
  alt: Updates to the Filecoin Security Program
  url: /uploads/updates-security-header.webp
main_feature_inverted: false
related_article_1: ""
related_article_2: ""
related_article_3: ""
share_image: /uploads/updates-security-social.webp
title: Updates to the Filecoin Security Program
_template: blog_detail
---

Building a strong Security Culture in the Filecoin project has been one of our core goals from the beginning of the project, from creating bleeding edge, researched, and evaluated mathematical proofs that set the foundation for the critical operations executed in the Filecoin Protocol (e.g. Proof of Replication & Proof of Space Time), to building a culture of strong security habits, secure code development and testing, through working with multiple external security specialists, pentesters and researchers to audit our code and practices.

With Filecoin’s mainnet launch, **we are excited to announce the new** [**Filecoin Security website**](https://security.filecoin.io/), which includes a listing of all the work done so far, what is to come and the updated Bug Bounty Program!

## Launching [security.filecoin.io](https://security.filecoin.io/)

This site will serve as the central hub for the Filecoin Security Program. On it, you can find details about: **Security Audits**, **Bug Bounty Program**, **Responsible Disclosure Policy** and **Previously reported findings and mitigations.**

You can disclose your findings in two ways: encrypting them with a PGP key and emailing us, or through Keybase. **Detailed instructions are available under “Vulnerability Reporting” on the** [**Filecoin Security**](https://security.filecoin.io/) **website**.

## Security Audits

We’ve been engaging with several reputable third party auditing specialists to ensure that the theory behind the protocol and its implementation delivers the intended value, enabling Filecoin to be a safe and secure network.

We are super thankful to our security partners that have worked with us for the past years to ensure that Filecoin and its dependencies are secure. We are grateful to our valuable Security partners:

- [SigmaPrime](https://sigmaprime.io/)
- [Trail of Bits](https://www.trailofbits.com/)
- [ConsenSys Diligence](https://diligence.consensys.net/)
- [NCC](https://www.nccgroup.com/)
- [Least Authority](https://leastauthority.com/)
- Several independent Security Researchers

You might have stumbled upon previous launches of audit reports from these firms (e.g., [Drand](https://drand.love/blog/2020/08/10/drand-launches-v1-0/#security-audit) & [Gossipsub](https://blog.ipfs.tech/gossipsubv1.1-eval-report-and-security-audit)), and you can now find links to more reports in the [Audit Reports section of the Filecoin Spec website](https://spec.filecoin.io/#section-appendix.audit_reports.audit-reports), with many more to come in the near future. The latest ones include:

- [Filecoin Providing Subsystem Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-07-28-filecoin-proving-subsystem) by SigmaPrime
- [zk-SNARK Proofs Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-07-28-zk-snark-proofs) by Dr Jean-Phillipe Aumasson and Antony Vennard
- [Filecoin Actors Security Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-19-actors-audit) by ConsenSys Diligence
- [**Update, now released!** Filecoin Bellman / BLS Signatures Audit](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-20-filecoin-bellman-and-bls-signatures) by NCC
- To be released soon:
- Filecoin Lotus Implementation Security Audit by Least Authority
- Filecoin Lotus Implementation Security Audit by SigmaPrime, [**UPDATE, now released**](https://spec.filecoin.io/#section-appendix.audit_reports.2020-10-20-lotus-mainnet-ready-security-audit)

## Responsible Disclosure Policy

Ensuring that the protocol continues to be secure for its users requires creating a platform in which findings can be reported, understood, patched, deployed, and users can be informed about updates in a timely manner. For this, we have established the [Filecoin Responsible Disclosure Policy](https://fil.org/security/coordinated-disclosure-policy)

## Bug Bounty Program

Filecoin aims to create a decentralized storage network for humanity’s most important information, so ensuring the network is secure and trustable is paramount to its success. Building a secure network goes beyond rigorous testing and auditing, and we believe that working together with the security community will result in a more secure and stable future for the Filecoin network. That is why we are launching the Filecoin Bug Bounty Program, through which anyone can submit security vulnerabilities found in the network, the core protocol, and its implementations, to be rewarded for their findings.

You can learn all about the [Filecoin Bug Bounty Program](https://security.filecoin.io/bug-bounty) at the [Filecoin Security site](https://security.filecoin.io/). In high level:

- You will have a private channel to report your findings
- As a bounty hunter, you are protected by a Safe Harbor Policy
- ([**UPDATE Oct 23, reward ranges increased**](https://security.filecoin.io/bug-bounty/)) You can win rewards up to $100,000 based on the severity of the issue:
- Critical: up to $100,000
- High: up to $50,000
- Medium: up to $15,000
- Low: up to $2,500
- Note: up to $500
- There is no set end date on the program yet, but we are looking for ways to improve it, please watch this blog and the site for updates and send us your feedback at [security@filecoin.org](mailto:security@filecoin.org)

## A special thanks to the participants of the Security Research Fellowship

Last announcement but definitely not the least! During the Space Race incentivized testnet competition, we worked with several members of the community through the Filecoin Security Research Fellowship Program to enhance the security of the network.

The Bug Bounty Program represents the continuation of this program in mainnet, providing a platform to engage the broader Filecoin community, white hats, and security researchers who are interested in improving the network.

Thank you all. We look forward to collaborating with the security community in keeping Filecoin secure.

Happy bug hunting!
