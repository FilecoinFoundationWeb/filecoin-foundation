import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Social } from '@/components/Social'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { UpcomingEvents } from '@/components/UpcomingEvents'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/governance.md'

import { HomeExploreSectionCard } from '@/_components/HomeExploreSectionCard'
import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { governanceDocsData } from './data/governanceDocsData'

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

      <PageSection kicker="Learn More" title="Quickstart">
        <CardLayout type="governance">
          {governanceDocsData.map((card) => {
            const { heading, description, cta } = card

            return (
              <HomeExploreSectionCard
                key={heading.title}
                cta={cta}
                heading={{
                  tag: 'h3',
                  variant: 'lg',
                  children: heading.title,
                  iconProps: {
                    component: heading.icon,
                  },
                }}
              >
                {description}
              </HomeExploreSectionCard>
            )
          })}
        </CardLayout>
      </PageSection>

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
