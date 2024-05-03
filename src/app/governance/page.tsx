import { CardLayout } from '@/components/CardLayout'
import { GovernanceCalendarCard } from '@/components/GovernanceCalendarCard'
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

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { communityCallsData } from './data/communityCallsData'
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

      <PageSection kicker="Upcoming Events" title="Community Calls">
        <CardLayout type="blogPost">
          {communityCallsData.map((card) => {
            const { title, startDate, durationInMinutes, cta } = card

            return (
              <GovernanceCalendarCard
                key={title}
                title={title}
                startDate={startDate}
                durationInMinutes={durationInMinutes}
                cta={cta}
              />
            )
          })}
        </CardLayout>
      </PageSection>

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
