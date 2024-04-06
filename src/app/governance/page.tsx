import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { Social } from '@/components/Social'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { UpcomingEvents } from '@/components/UpcomingEvents'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/governance.md'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

const { header, seo } = attributes
export const metadata = createMetadata(seo, PATHS.GOVERNANCE.path)

const governancePageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GOVERNANCE.path,
})

export default function Governance() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={governancePageBaseData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: '#',
          text: 'Learn More',
        }}
      />

      <section>
        <Heading tag="h2" variant="xl">
          Improving Filecoin
        </Heading>
        <article>
          <Heading tag="h3" variant="lg">
            What exactly is a FIP
          </Heading>
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
          <Heading tag="h3" variant="lg">
            How are FIPs prioritized?
          </Heading>
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
          <Heading tag="h3" variant="lg">
            Can I submit an FIP?
          </Heading>
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
        <Heading tag="h2" variant="xl">
          Security
        </Heading>
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
        <Heading tag="h2" variant="xl">
          Filecoin Plus
        </Heading>
        <p>
          Filecoin Plus is a pragmatic solution to the technically challenging
          problem of verifying that a particular set of data is useful in a
          permissionless, incentive-compatible, pseudonymous network, and
          presents a path for incentivizing using the network in productive
          ways.
        </p>
        <article>
          <Heading tag="h3" variant="lg">
            How does it work?
          </Heading>
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
          <Heading tag="h3" variant="lg">
            Apply for DataCap
          </Heading>
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
          <Heading tag="h3" variant="lg">
            Filecoin Plus Notary
          </Heading>
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
        <Heading tag="h2" variant="xl">
          Get Involved
        </Heading>
        <Social />
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
        <Heading tag="h2" variant="xl">
          Events & Hackathons
        </Heading>
        <UpcomingEvents />
      </section>
    </PageLayout>
  )
}
