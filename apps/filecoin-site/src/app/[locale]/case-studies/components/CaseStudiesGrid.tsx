import { getTranslations } from 'next-intl/server'

import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'

import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { getCaseStudiesData } from '../utils/getCaseStudyData'

type CaseStudiesProps = {
  featured: Awaited<ReturnType<typeof getCaseStudiesData>>
  upcoming: Awaited<ReturnType<typeof getCaseStudiesData>>
}

export async function CaseStudiesGrid({
  featured,
  upcoming,
}: CaseStudiesProps) {
  const t = await getTranslations(PATHS.CASE_STUDIES.path)

  return (
    <>
      {featured.length > 0 && (
        <PageSection paddingVariant="topNone" backgroundVariant="dark">
          <SectionContent
            headingTag="h2"
            title={t('featured.title')}
            description={t('featured.description')}
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {featured.map(({ title, cardDescription, logo, slug }) => (
                <SimpleCardWithLogo
                  key={slug}
                  title={title}
                  description={cardDescription}
                  logo={logo}
                  cta={{
                    href: `${PATHS.CASE_STUDIES.path}/${slug}`,
                    text: t('featured.readCaseStudy'),
                  }}
                />
              ))}
            </CardGrid>
          </SectionContent>
        </PageSection>
      )}

      {upcoming.length > 0 && (
        <PageSection backgroundVariant="light">
          <SectionContent
            headingTag="h2"
            title={t('upcoming.title')}
            description={t('upcoming.description')}
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {upcoming.map(
                ({ title, cardDescription, logo, website, slug }) => (
                  <SimpleCardWithLogo
                    key={slug}
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
