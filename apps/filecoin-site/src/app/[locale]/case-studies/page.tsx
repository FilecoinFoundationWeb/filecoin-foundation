import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { CaseStudiesGrid } from './components/CaseStudiesGrid'
import { PageHeader } from './components/PageHeader'
import { generateStructuredData } from './utils/generateStructuredData'
import { getCaseStudiesByFeaturedStatus } from './utils/getCaseStudyData'

type CaseStudiesProps = {
  params: Promise<LocaleParams>
}

export default async function CaseStudies({ params }: CaseStudiesProps) {
  const { locale } = await params

  const {
    all: allCaseStudies,
    featured: featuredCaseStudies,
    upcoming: upcomingCaseStudies,
  } = await getCaseStudiesByFeaturedStatus(locale)

  const metadata = await getTranslatedMetadata(PATHS.CASE_STUDIES.path)
  const t = await getTranslations(PATHS.CASE_STUDIES.path)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(metadata, featuredCaseStudies)}
      />
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader
          variant="highContrast"
          title={t('hero.title')}
          description={t('hero.description')}
          image={{
            src: graphicsData.nasaHubbleSpaceTelescope.data.src,
            alt: graphicsData.nasaHubbleSpaceTelescope.alt,
          }}
        />
      </PageSection>

      {allCaseStudies.length > 0 ? (
        <CaseStudiesGrid
          featured={featuredCaseStudies}
          upcoming={upcomingCaseStudies}
        />
      ) : (
        <PageSection backgroundVariant="dark">
          <p>{t('emptyState')}</p>
        </PageSection>
      )}

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('cta.title')}
          description={t('cta.description')}
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              {t('cta.startStoring')}
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.CASE_STUDIES.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.CASE_STUDIES.path),
  })
}
