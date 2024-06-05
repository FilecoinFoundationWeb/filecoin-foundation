import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { GovernanceCalendarCards } from '@/components/GovernanceCalendarCards'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/governance.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { governanceDocsData } from './data/governanceDocsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes
export const metadata = createMetadata({
  seo,
  path: PATHS.GOVERNANCE.path,
  useAbsoluteTitle: true,
})

export default function Governance() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={{ type: 'static', ...graphicsData.governance2 }}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.governance.docs,
          text: 'Learn More',
        }}
      />

      <PageSection kicker="Learn More" title="Quickstart">
        <CardGrid cols="smTwo">
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
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="About"
        title="Understanding Governance"
        description={[
          'In the Filecoin ecosystem – which is decentralized and open source – governance refers to the rights, rules, processes, and norms that empower community members to collectively determine the development of the protocol.',
          'Filecoin Foundation’s role includes facilitating the development of processes and policies for decision-making and managing community engagement and feedback.',
        ]}
      />

      <PageSection kicker="Upcoming Events" title="Community Calls">
        <GovernanceCalendarCards />
      </PageSection>

      <CTASection
        title="Connect With Us"
        description={
          <>
            To get involved, visit the{' '}
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.github.href}
            >
              Governance GitHub
            </TextLink>
            , join the conversation in the{' '}
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.slack.href}
            >
              {FILECOIN_FOUNDATION_URLS.governance.social.slack.label} Slack
              channel
            </TextLink>
            , or follow{' '}
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.twitter.href}
            >
              {FILECOIN_FOUNDATION_URLS.governance.social.twitter.label}
            </TextLink>{' '}
            on X.
          </>
        }
      />
    </PageLayout>
  )
}
