import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/grants.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageSection } from '@/components/PageSection'

import { FeaturedGrantGraduates } from './components/FeaturedGrantGraduates'
import { applicationProcessData } from './data/applicationProcessData'
import { opportunitiesData } from './data/opportunitiesData'
import { submissionCriteriaData } from './data/submissionCriteriaData'
import { FrontmatterSchema } from './schemas/FrontmatterSchema'
import { generateStructuredData } from './utils/generateStructuredData'

import { getFeaturedEcosystemProjects } from '@/ecosystem-explorer/utils/getFeaturedEcosystemProjects'

const {
  header,
  seo,
  featured_grant_graduates: featuredGrantGraduatesPaths,
} = FrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.grants.data.src,
  },
  path: PATHS.GRANTS.path,
  overrideDefaultTitle: true,
})

export default async function Grants() {
  const featuredGrantGraduates = await getFeaturedEcosystemProjects(
    featuredGrantGraduatesPaths,
  )

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.grants}
      >
        <Button href={FILECOIN_FOUNDATION_URLS.grants.github}>Apply Now</Button>
      </PageHeader>

      <PageSection
        kicker="Opportunities"
        title="Grants and Funding Opportunities"
        description="Filecoin Foundation is seeking proposals for developer and data tooling, integrations, research and protocols, storage, retrieval, and the Filecoin Virtual Machine (FVM). These grants fall under the following categories."
      >
        <CardGrid cols="lgThree">
          {opportunitiesData.map((card) => {
            const { title, description, icon, cta } = card

            return (
              <ExploreSectionCard
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
              </ExploreSectionCard>
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Past Recipients" title="Grant Graduates">
        <FeaturedGrantGraduates grantGraduates={featuredGrantGraduates} />
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
              <ExploreSectionCard
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
              </ExploreSectionCard>
            )
          })}
        </CardGrid>
      </PageSection>

      <CTASection
        title="Ready to Apply?"
        description={
          <>
            Please visit our{' '}
            <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.grants.github}>
              GitHub repo
            </ExternalTextLink>{' '}
            to learn more about the proposal process, review process, timeline
            guidance, and more. For other questions, email{' '}
            <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.grants.email.href}>
              {extractEmailAddress(FILECOIN_FOUNDATION_URLS.grants.email.href)}
            </ExternalTextLink>{' '}
            or join our{' '}
            <ExternalTextLink href="https://calendly.com/filecoin-grants/office-hours-ama?month=2024-06">
              monthly office hours
            </ExternalTextLink>
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
