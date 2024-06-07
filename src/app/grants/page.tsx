import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { FeaturedGrantsGraduates } from '@/components/FeaturedGrantGraduates'
import { GrantsApplicationProcessCard } from '@/components/GrantsApplicationProcessCard'
import { GrantsSectionCard } from '@/components/GrantsSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
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
  useAbsoluteTitle: true,
})

export default function Grants() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={{ type: 'static', ...graphicsData.grants }}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.grants.email.href,
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
            const { title, description, icon } = card

            return (
              <GrantsSectionCard
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
              </GrantsSectionCard>
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
        <CardGrid cols="smThree">
          {applicationProcessData.map((card) => {
            const { step, title, description } = card

            return (
              <GrantsApplicationProcessCard
                key={card.title}
                step={step}
                title={title}
                description={description}
              />
            )
          })}
        </CardGrid>
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
              <GrantsSectionCard
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
              </GrantsSectionCard>
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
              {FILECOIN_FOUNDATION_URLS.grants.email.href.replace(
                'mailto:',
                '',
              )}
            </TextLink>{' '}
            or join our monthly office hours!
          </>
        }
        cta={{
          href: FILECOIN_FOUNDATION_URLS.grants.email.href,
          text: 'Apply Now',
        }}
      />
    </PageLayout>
  )
}
