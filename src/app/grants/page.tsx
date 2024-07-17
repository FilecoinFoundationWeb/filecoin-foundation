import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { CardGrid } from '@/components/CardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTASection } from '@/components/CTASection'
import { FeaturedGrantsGraduates } from '@/components/FeaturedGrantGraduates'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'

import { attributes } from '@/content/pages/grants.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { applicationProcessData } from './data/applicationProcessData'
import { opportunitiesData } from './data/opportunitiesData'
import { submissionCriteriaData } from './data/submissionCriteriaData'
import { generateStructuredData } from './utils/generateStructuredData'

const ecosystemProjects = getEcosystemProjectsData()
const {
  featured_grant_graduates: grantGraduatesSlugs,
  header,
  seo,
} = attributes
const grantGraduates = ecosystemProjects.filter((item) =>
  grantGraduatesSlugs?.includes(item.slug),
)

export const metadata = createMetadata({
  seo,
  path: PATHS.GRANTS.path,
  overrideDefaultTitle: true,
})

export default function Grants() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.grants}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.grants.github,
          text: 'Apply Now',
        }}
      />

      <PageSection
        kicker="Opportunities"
        title="Grants and Funding Opportunities"
        description="Filecoin Foundation is seeking proposals for developer and data tooling, integrations, research and protocols, storage, retrieval, and the Filecoin Virtual Machine (FVM). These grants fall under the following categories."
      >
        <CardGrid cols="lgThree">
          {opportunitiesData.map((card) => {
            const { title, description, icon, cta } = card

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

      <PageSection kicker="Past Recipients" title="Grant Graduates">
        <FeaturedGrantsGraduates grantGraduates={grantGraduates} />
      </PageSection>

      <PageSection
        kicker="Application Process"
        title="The Filecoin Grants Process"
      >
        <BadgeCardGrid cols="smThree">
          {applicationProcessData.map((card) => {
            const { step, title, description } = card

            return (
              <CardWithBadge
                key={title}
                title={title}
                description={description}
              >
                <Badge number={step} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <PageSection
        kicker="Criteria"
        title="Submission Criteria"
        description="Generally, all projects must meet the following requirements:"
      >
        <CardGrid cols="lgThree">
          {submissionCriteriaData.map((data) => {
            const { title, description, icon } = data

            return (
              <HomeExploreSectionCard
                key={title}
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

      <CTASection
        title="Ready to Apply?"
        description={
          <>
            Please visit our{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.grants.github}>
              GitHub repo
            </TextLink>{' '}
            to learn more about the proposal process, review process, timeline
            guidance, and more. For other questions, email{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.grants.email.href}>
              {extractEmailAddress(FILECOIN_FOUNDATION_URLS.grants.email.href)}
            </TextLink>{' '}
            or join our{' '}
            <TextLink href="https://calendly.com/filecoin-grants/office-hours-ama?month=2024-06">
              monthly office hours
            </TextLink>
            !
          </>
        }
        cta={{
          href: FILECOIN_FOUNDATION_URLS.grants.github,
          text: 'Apply Now',
        }}
      />
    </PageLayout>
  )
}
