import Image from 'next/image'

import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { FILECOIN_CLOUD_URL, FILECOIN_DOCS_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { SplitSectionContent } from '@/components/SplitSectionContent'
import { getTranslations } from 'next-intl/server'
import { PATHS } from '@/constants/paths'

export async function HeroSection() {
  const t = await getTranslations(PATHS.BUILD_ON_FILECOIN.path)

  return (
    <div className="overflow-x-hidden">
      <PageSection backgroundVariant="dark">
        <header className="grid max-w-full grid-cols-1 lg:grid-cols-3 lg:gap-0">
          <div className="lg:col-span-2 lg:pr-28">
            <PageHeader
              title={t('hero.title')}
              description={t('hero.description')}
              cta={
                <Button href={FILECOIN_DOCS_URL} variant="primary">
                  {t('hero.exploreDocs')}
                </Button>
              }
            />
          </div>

          <Image
            priority
            src={graphicsData.cupolaEarthView.data}
            alt={graphicsData.cupolaEarthView.alt}
            className="relative mx-auto w-3/4 lg:top-25 lg:left-15 lg:w-full lg:scale-[2]"
          />
        </header>

        <div className="lg:mt-80">
          <SectionContent headingTag="h2" title={t('hero.announcingFOC')}>
            <SplitSectionContent
              title={t('hero.focTitle')}
              description={[
                t('hero.focDescription1'),
                t('hero.focDescription2'),
              ]}
              cta={[
                <Button href={FILECOIN_CLOUD_URL} variant="primary">
                  {t('hero.focCta')}
                </Button>,
              ]}
            />
          </SectionContent>
        </div>
      </PageSection>
    </div>
  )
}
