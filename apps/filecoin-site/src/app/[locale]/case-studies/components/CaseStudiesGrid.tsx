import type { Locale } from '@/i18n/types'

import { getTranslations } from 'next-intl/server'

import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'

import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { getCaseStudiesByFeaturedStatus } from '../utils/getCaseStudyData'

type CaseStudiesProps = {
  locale: Locale
}

export async function CaseStudiesGrid({ locale }: CaseStudiesProps) {
  const t = await getTranslations(PATHS.CASE_STUDIES.path)

  const { featured: featuredCaseStudies, upcoming: upcomingCaseStudies } =
    await getCaseStudiesByFeaturedStatus(locale)

  return (
    <>
      {featuredCaseStudies.length > 0 && (
        <PageSection paddingVariant="topNone" backgroundVariant="dark">
          <SectionContent
            headingTag="h2"
            title={t('featured.title')}
            description={t('featured.description')}
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
                      text: t('featured.readCaseStudy'),
                    }}
                  />
                ),
              )}
            </CardGrid>
          </SectionContent>
        </PageSection>
      )}

      {upcomingCaseStudies.length > 0 && (
        <PageSection backgroundVariant="light">
          <SectionContent
            headingTag="h2"
            title={t('upcoming.title')}
            description={t('upcoming.description')}
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
                      text: t('upcoming.visitWebsite'),
                    }}
                  />
                ),
              )}
            </CardGrid>
          </SectionContent>
        </PageSection>
      )}
    </>
  )
}
