---
header:
  title: "Coordinated Disclosure Policy"
  description: ""
seo:
  title: "Coordinated Disclosure Policy"
  description: "Discover the Filecoin Foundation's Coordinated Disclosure Policy. Understand our bug bounty program, disclosure process, and commitment to network security. Report vulnerabilities and earn recognition."
---

**Last Updated: April 05, 2024**

To honor all the security researcher contributions that help us keep the Filecoin network secure, the Filecoin Foundation offers a bug bounty program through Immunefi. As part of that program, you can expect us to work with you to understand and validate your report, respond in a timely manner, work to remediate the discovered vulnerability, and, for qualifying reports, recognize your contribution to improving the Filecoin ecosystem security. In return, we ask that you follow our procedures for coordinated vulnerability disclosure.

## Disclosure Channels

Filecoin is a decentralized storage network designed to store humanity’s most important data. As such, security is of paramount importance to us. To help secure the Filecoin Network and encourage security research done in good faith, we have created a Filecoin Bug Bounty program on Immunefi.

Please report all vulnerabilities through this program, and please do not file a public issue or report the vulnerability through public places like Slack, X/Twitter, etc.

## Process Overview

1. A security researcher reports a vulnerability via Immunefi.
2. Filecoin Foundation security team will designate a Response Manager in charge of a particular report based on expertise and availability, who will acknowledge receipt of the report in an initial response to the researcher.
3. The Response Manager will evaluate the vulnerability and assign an initial OWASP Severity estimate. They may optionally also contact the researcher for more information.
4. Based on the vulnerability’s potential severity, additional security team members will be alerted to review and develop a patch.

   a. The Response Manager designates a private git branch for the patch and proposed severity score.

   b. The report is reviewed by the security team.

   c. The Response Manager drafts a vulnerability announcement for the community where appropriate.

   d. The security team determines a release target and date for the announcement and patch.

   e. The Response Manager communicates with the researcher who submitted the vulnerability:

   - Providing a proposed patch and release date.
   - Asking whether the researcher would like public credit for reporting the bug (anonymous reporting is also supported).
   - Asking for the Reporter’s bounty distribution wallet and KYC information.

5. The security team will make a best effort to complete the above process within 90 days. Completion of this process may take longer depending on a variety of circumstances.

## Community Notifications and Patches

In most circumstances, we will endeavor to notify the community and provide patches as follows:

1. For High or Critical Severity issues, the security team will notify the Filecoin community that a security release is imminent. Notifications can include Filecoin Community Slack announcements, social media posts, or emails to ecosystem collaborators.

   a. We aim to apply security patches and issue new releases within 24 hours following this notification, wherever possible.

2. Medium Severity issues may result in a minor release including the patch.
3. Low Severity issues can be addressed in the next regular release.

## Coordinated Disclosure of Vulnerabilities

Filecoin Foundation supports the publication of vulnerability research so that the community can be aware of vulnerabilities, which helps the whole ecosystem become more secure. Accordingly, we have adopted Immunefi’s Publication Category 1: Transparent, which allows researchers to publish information about their bug reports after the bugs are fixed and the researcher is paid. Please review the complete rules for all the details. In some cases, it may take a while for the network participants to upgrade to the patched version, which will delay publication until the bug is fixed. This delay is necessary to ensure the security of the network and its participants. If you are unsure whether a bug has been fixed yet, please feel free to inquire with us prior to publishing information about your report.

1. We also ask that researchers send any publication they make to us for review in the Immunefi bug report submissions thread. This gives us an opportunity to comment, and if necessary, clarify any matters, and can help make the publication more useful to the community. However, this review is not mandatory.

## Safe Harbor

We consider security research conducted in alignment with our Bug Bounty program and this Disclosure Policy to be protected by Safe Harbor:

1. Authorized in view of any applicable anti-hacking laws, and we will not initiate or support legal action against you for accidental, good faith violations of this policy.
2. Authorized in view of relevant anti-circumvention laws, and we will not bring a claim against you for circumvention of technology controls.
3. Exempt from restrictions in our Terms of Use that would interfere with conducting security research, and we waive those restrictions on a limited basis.
4. Lawful, helpful to the overall security of the Internet, and conducted in good faith.

You are expected to comply with all applicable laws. If legal action is initiated by a third party against you and you have complied with this policy, we will take steps to make it known that your actions were conducted in compliance with this policy. If at any time you have concerns or are uncertain whether your security research is consistent with this policy, please submit a report through Immunefi before going any further. Note that the Safe Harbor applies only to legal claims under the control of the Filecoin Foundation and that the policy does not bind independent third parties.

These are based on recommendations from [disclose.io](https://disclose.io/) to accelerate the adoption of vulnerability disclosure best practices.
