import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Social } from '@/components/Social'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/governance.md'

import { PageSection } from '@/_components/PageSection'
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
            const {
              heading: { title, icon },
              description,
              cta,
            } = card

            return (
              <HomeExploreSectionCard
                key={title}
                cta={cta}
                heading={{
                  tag: 'h3',
                  variant: 'lg',
                  children: title,
                  iconProps: {
                    component: icon,
                  },
                }}
              >
                {description}
              </HomeExploreSectionCard>
            )
          })}
        </CardLayout>
      </PageSection>

      <PageSection
        kicker="About"
        title="Understanding Governance"
        description={[
          'In the Filecoin ecosystem – which is decentralized and open source – governance refers to the rights, rules, processes, and norms that empower community members to collectively determine the development of the protocol.',
          'The Foundation’s role includes developing and implementing processes and policies for decision-making and managing community engagement and feedback – all to support the development of the ecosystem at large. ',
        ]}
      />

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
    </PageLayout>
  )
}
