import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { PageHeader } from './components/PageHeader'
import { generateStructuredData } from './utils/generateStructuredData'
import { getCaseStudiesByFeaturedStatus } from './utils/getCaseStudyData'

const TRANSLATION_NAMESPACE = 'case-studies'

type CaseStudiesProps = {
  params: Promise<LocaleParams>
}

export default async function CaseStudies({ params }: CaseStudiesProps) {
  const { locale } = await params

  const { featured: featuredCaseStudies, upcoming: upcomingCaseStudies } =
    await getCaseStudiesByFeaturedStatus(locale)

  const metadata = await getTranslatedMetadata(TRANSLATION_NAMESPACE)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(metadata, featuredCaseStudies)}
      />
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader
          variant="highContrast"
          title="Powering the preservation of critical datasets"
          description="From AI datasets to government archives, leading institutions trust Filecoin to securely and resiliently store their most valuable datasets."
          image={{
            src: graphicsData.nasaHubbleSpaceTelescope.data.src,
            alt: graphicsData.nasaHubbleSpaceTelescope.alt,
          }}
        />
      </PageSection>

      <PageSection paddingVariant="topNone" backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="Organizations preserving their data on Filecoin"
          description="Read full case studies of some of the organizations using Filecoin to preserve their data."
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {featuredCaseStudies.map(
              ({ title, cardDescription, logo, slug }) => (
                <SimpleCardWithLogo
                  key={title}
                  title={title}
                  description={cardDescription}
                  logo={logo}
                  cta={{
                    href: `${PATHS.CASE_STUDIES.path}/${slug}`,
                    text: 'Read case study',
                  }}
                />
              ),
            )}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title="More datasets (case studies coming soon)"
          description="Discover additional teams leveraging Filecoin for data preservation. Full case studies are coming soon."
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {upcomingCaseStudies.map(
              ({ title, cardDescription, logo, website }) => (
                <SimpleCardWithLogo
                  key={title}
                  title={title}
                  description={cardDescription}
                  logo={logo}
                  cta={{
                    href: website,
                    text: 'Visit website',
                  }}
                />
              ),
            )}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="Preserve your most important data with Filecoin"
          description="Join the organizations already protecting their most valuable datasets on the Filecoin network."
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Start storing on Filecoin
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    TRANSLATION_NAMESPACE,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.CASE_STUDIES.path,
  })
}
