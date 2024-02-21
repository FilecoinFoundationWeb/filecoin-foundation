import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { UpcomingEvents } from '@/components/UpcomingEvents'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/governance.md'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.GOVERNANCE.path)

const governancePageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GOVERNANCE.path,
})

export default function Governance() {
  return (
    <>
      <StructuredDataScript structuredData={governancePageBaseData} />
      <PageHeader title={title} description={description} />

      <section>
        <h2>Improving Filecoin</h2>
        <article>
          <h3>What exactly is a FIP</h3>
          <p>
            FIPs are standards specifying potential new features or processes
            for Filecoin.
          </p>
          <p>
            FIPs play a central role in how changes happen and are documented on
            Filecoin. FIPs allow the community to propose, debate, and adopt
            changes.
          </p>
          <p>
            Along with providing a technical specification for changes, FIPs are
            the unit around which governance happens in Filecoin.
          </p>
        </article>
        <article>
          <h3>How are FIPs prioritized?</h3>
          <p>
            There are different types of FIPs, such as core FIPs for low-level
            protocol changes that affect consensus and require a network
            upgrade.
          </p>
          <p>
            Every network upgrade consists of a set of FIPs that need to be
            implemented by each Filecoin client on the network. This implies
            that to stay in consensus with other clients on the Filecoin
            mainnet, client developers need to make sure they have all
            implemented the required FIPs.
          </p>
          <p>
            Non-core FIPs don’t have to be adopted by all applications, but core
            FIPs must be widely adopted (because all nodes must upgrade to stay
            part of the same network) — therefore core FIPs require broader
            consensus within the community than non-core FIPs.
          </p>
        </article>
        <article>
          <h3>Can I submit an FIP?</h3>
          <p>
            Yes, anyone is free to propose one, and then various stakeholders in
            the community will discuss to determine whether it should be adopted
            as a standard or included in a network upgrade.
          </p>
          <p>
            To participate, head over to the FIPs section of the Filecoin
            Project repo or connect with the community on Slack.
          </p>
        </article>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          Filecoin is a decentralized storage network for humanity’s most
          important information, so ensuring the network is secure and trustable
          is paramount to its success.
        </p>
        <p>
          Building a strong security culture in the Filecoin project has been
          one of our core goals from the beginning of the project— creating
          cutting edge, well-researched, and carefully evaluated mathematical
          proofs has set the foundation for the critical operations executed in
          the Filecoin Protocol.
        </p>
        <p>
          Building a culture of strong security habits, secure code development
          and testing, through working with multiple external security
          specialists, auditors, and researchers to audit our code and
          practices.
        </p>
        <p>
          Building a secure network goes beyond rigorous testing and auditing.
          Working together with the security community creates a more secure and
          stable future for the Filecoin network.
        </p>
        <p>
          The Filecoin Bug Bounty Program rewards individuals who find and
          report vulnerabilities in the Filecoin network. Anyone can
          participate. Learn more.
        </p>
      </section>

      <section>
        <h2>Filecoin Plus</h2>
        <p>
          Filecoin Plus is a pragmatic solution to the technically challenging
          problem of verifying that a particular set of data is useful in a
          permissionless, incentive-compatible, pseudonymous network, and
          presents a path for incentivizing using the network in productive
          ways.
        </p>
        <article>
          <h3>How does it work?</h3>
          <p>
            Filecoin Plus maximizes the amount of useful storage on Filecoin by
            adding a layer of social trust to the network and introducing a
            novel resource called DataCap.
          </p>
          <p>
            Clients looking to onboard storage onto the network apply to
            community-selected Notaries to receive DataCap, which can be used to
            incentivize storage providers to take storage deals. You can learn
            more in the Filecoin Plus GitHub repo.
          </p>
        </article>
        <article>
          <h3>Apply for DataCap</h3>
          <p>
            If you are looking to apply for DataCap as a client, head over to
            the{' '}
            <TextLink href={FIL_PLUS_URLS.site}>
              Filecoin Plus app portal
            </TextLink>
            .
          </p>
        </article>
        <article>
          <h3>Filecoin Plus Notary</h3>
          <p>
            If you are interested in applying to become a Filecoin Plus notary,
            head to the{' '}
            <TextLink href={FIL_PLUS_URLS.notary}>
              notary governance repository
            </TextLink>
            .
          </p>
        </article>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>Community governance calls happen every other Tuesday.</p>
        <p>
          Visit the{' '}
          <TextLink href={PATHS.EVENTS.path}>
            Filecoin community events hub
          </TextLink>{' '}
          and join the conversation in the{' '}
          <TextLink href={FIL_PLUS_URLS.slack}>
            #fil-plus Slack channel
          </TextLink>
          .
        </p>
        <TextLink href={PATHS.GET_INVOLVED.path}>Get Involved</TextLink>
      </section>
      <section>
        <h2>Events & Hackathons</h2>
        <UpcomingEvents />
      </section>
    </>
  )
}
