import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { grantsPageItem } from '@/qino/items/grantsPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { FeaturedGrantGraduates } from './components/FeaturedGrantGraduates'
import { submissionCriteriaData } from './data/submissionCriteriaData'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function Grants() {
  const { header, seo, featuredGrantGraduates } =
    await grantsPageItem.getEntry()

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={await generateStructuredData(seo)}
      />
      <PageHeader
        title={header.title}
        image={graphicsData.grants}
        description={{
          text: [
            <>
              For the moment, funding requests are being reviewed through
              ProPGF, the Filecoin network’s public goods funding program, which
              is funded in part by Filecoin Foundation. Upcoming ProPGF
              programs, dates and criteria are posted at{' '}
              <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.grants.propgf}>
                filpgf.io/propgf
              </ExternalTextLink>
              .
            </>,
            ...[header.description].flat(),
          ],
        }}
      >
        <Button href={FILECOIN_FOUNDATION_URLS.grants.propgf}>Apply Now</Button>
      </PageHeader>

      <PageSection kicker="Past Recipients" title="Grant Graduates">
        <FeaturedGrantGraduates grantGraduates={featuredGrantGraduates} />
      </PageSection>

      <PageSection
        kicker="Criteria"
        title="Submission Criteria"
        description="Generally, all projects must meet the following requirements:"
      >
        <CardGrid as="ul" cols="lgThree">
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
          href: FILECOIN_FOUNDATION_URLS.grants.propgf,
          text: 'Apply Now',
        }}
      />
    </PageLayout>
  )
}

export async function generateMetadata() {
  const { seo } = await grantsPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.grants.data.src,
    path: PATHS.GRANTS.path,
  })
}
