import { CardLayout } from '@/components/CardLayout'
import { CTASection } from '@/components/CTASection'
import { FeaturedGrantsGraduates } from '@/components/FeaturedGrantGraduates'
import { GrantsSectionCard } from '@/components/GrantsSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/grants.md'

import { CardStepProcess } from '@/_components/CardProcess'
import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { applicationProcessData } from './data/applicationProcessData'
import { opportunitiesData } from './data/opportunitiesData'
import { submissionCriteriaData } from './data/submissionCriteriaData'

const { grant_graduates: grantGraduatesSlugs, header, seo } = attributes

const ecosystem = getEcosystemProjectsData()
const grantGraduates = ecosystem.filter((item) =>
  grantGraduatesSlugs?.includes(item.slug),
)

export const metadata = createMetadata(seo, PATHS.GRANTS.path)

const grantsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GRANTS.path,
})

export default function Grants() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={grantsPageBaseData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{ href: FILECOIN_URLS.grants.email, text: 'Apply Now' }}
      />

      <PageSection
        kicker="Opportunities"
        title="Grants and Funding Opportunities"
        description="The Foundation is seeking proposals for developer and data tooling, integrations, research and protocols, storage, retrieval, and the Filecoin Virtual Machine (FVM). These grants fall under the following categories:"
      >
        <CardLayout>
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
        </CardLayout>
      </PageSection>

      <PageSection kicker="Past Examples" title="Grant Graduates">
        <FeaturedGrantsGraduates grantGraduates={grantGraduates} />
      </PageSection>

      <PageSection
        kicker="Application Process"
        title="The Filecoin Grants Process"
      >
        <CardLayout type="grants">
          {applicationProcessData.map((card) => {
            const { step, title, description } = card
            return (
              <CardStepProcess
                key={card.title}
                step={step}
                title={title}
                description={description}
              />
            )
          })}
        </CardLayout>
      </PageSection>

      <PageSection
        kicker="Criteria"
        title="Submission Criteria"
        description="Generally, all projects must meet the following requirements:"
      >
        <CardLayout>
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
        </CardLayout>
      </PageSection>

      <CTASection
        title="Ready to Apply?"
        description={
          <>
            Please visit our{' '}
            <TextLink href={FILECOIN_URLS.grants.github}>GitHub repo</TextLink>{' '}
            to learn more about the proposal process, review process, timeline
            guidance, and more. For other questions, email{' '}
            <TextLink href={FILECOIN_URLS.grants.email}>
              {FILECOIN_URLS.grants.email.replace('mailto:', '')}
            </TextLink>{' '}
            or join our monthly office hours!
          </>
        }
        cta={{
          href: FILECOIN_URLS.grants.email,
          text: 'Apply Now',
        }}
      />
    </PageLayout>
  )
}
