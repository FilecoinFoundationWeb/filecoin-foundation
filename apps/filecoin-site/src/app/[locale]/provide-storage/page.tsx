import Image from 'next/image'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Card } from '@filecoin-foundation/ui-filecoin/Card'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { GradientOverlay } from '@/components/GradientOverlay'
import { Navigation } from '@/components/Navigation/Navigation'

import { getGettingStartedWithPDP } from './data/gettingStartedWithPDP'
import { getScalingOperations } from './data/scalingOperations'
import { storageProvidersLogos } from './data/storageProvidersLogos'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function ProvideStorage() {
  const metadata = await getTranslatedMetadata(PATHS.PROVIDE_STORAGE.path)
  const t = await getTranslations(PATHS.PROVIDE_STORAGE.path)

  const gettingStartedWithPDP = getGettingStartedWithPDP(t)
  const scalingOperations = getScalingOperations(t)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />

      <Navigation backgroundVariant="dark" />

      <div className="relative isolate">
        <Image
          priority
          src={graphicsData.colorfulNebula.data}
          alt={graphicsData.colorfulNebula.alt}
          className="absolute top-0 left-0 -z-20 h-full w-[200vw] object-cover object-top lg:w-full"
        />
        <GradientOverlay variant="dual" />

        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title={t('hero.title')}
            description={t('hero.description')}
            cta={[
              <Button href={FILECOIN_URLS.github.href} variant="primary">
                {t('hero.exploreDocs')}
              </Button>,
              <Button
                href={PATHS.PROVIDE_STORAGE_ONBOARDING.path}
                variant="ghost"
              >
                {t('hero.bookCall')}
              </Button>,
            ]}
          />

          <div className="mt-40">
            <LogoSection
              headingTag="h2"
              title={t('logoSection.title')}
              logos={storageProvidersLogos}
              gradientMode="dark"
            />
          </div>
        </PageSection>
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topCompact">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('gettingStarted.title')}
          description={t('gettingStarted.description')}
          cta={[
            <Button
              href={FILECOIN_DOCS_URLS.installAndRunPDP}
              variant="primary"
            >
              {t('gettingStarted.becomePDP')}
            </Button>,

            <Button href={FILECOIN_DOCS_URLS.pdp} variant="ghost">
              {t('gettingStarted.learnMorePDP')}
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="smTwoLgThreeWider">
            {gettingStartedWithPDP.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('scalingOperations.title')}
          description={t('scalingOperations.description')}
          cta={[
            <Button href={FILECOIN_DOCS_URLS.lotusComponents} variant="primary">
              {t('scalingOperations.learnMoreRequirements')}
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="smTwoXlFourWider">
            {scalingOperations.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('needHelp.title')}
          description={t('needHelp.description')}
          cta={
            <Button
              href={PATHS.PROVIDE_STORAGE_ONBOARDING.path}
              variant="primary"
            >
              {t('needHelp.bookCall')}
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.PROVIDE_STORAGE.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.PROVIDE_STORAGE.path,
    image: graphicsData.filecoinStorageDevice.data.src,
  })
}
