import Image from 'next/image'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { SimpleCard } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { CardGridContainer } from '@/components/CardGridContainer'
import { ImageGrid } from '@/components/ImageGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { SimpleCardWithImage } from '@/components/SimpleCardWithImage'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { getGetInvolvedOptions } from '../community-hub/data/getInvolvedOptions'

import { HeroSection } from './components/HeroSection'
import { getBuildWithFilecoinOnchainCloud } from './data/buildWithFilecoinOnchainCloud'
import { getBuiltOnFilecoin } from './data/builtOnFilecoin'
import { getDeveloperResources } from './data/developerResources'
import { getFilecoinFeatures } from './data/filecoinFeatures'
import { getInvolvedImages } from './data/getInvolvedImages'
import { getQuickstart } from './data/quickstart'
import { getTutorialsAndGuides } from './data/tutorialsAndGuides'
import { getWhatYouCanBuild } from './data/whatYouCanBuild'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function BuildOnFilecoin() {
  const metadata = await getTranslatedMetadata(PATHS.BUILD_ON_FILECOIN.path)
  const t = await getTranslations(PATHS.BUILD_ON_FILECOIN.path)

  const builtOnFilecoin = getBuiltOnFilecoin(t)
  const quickstart = getQuickstart(t)
  const whatYouCanBuild = getWhatYouCanBuild(t)
  const tutorialsAndGuides = getTutorialsAndGuides(t)
  const buildWithFilecoinOnchainCloud = getBuildWithFilecoinOnchainCloud(t)
  const developerResources = getDeveloperResources(t)
  const getInvolvedOptions = getGetInvolvedOptions(t)
  const filecoinFeatures = getFilecoinFeatures(t)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(metadata, filecoinFeatures)}
      />

      <Navigation backgroundVariant="dark" />

      <HeroSection />

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          centerTitle
          headingTag="h2"
          title={t('builtOnFilecoin.title')}
          description={t('builtOnFilecoin.description')}
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}
              variant="primary"
            >
              {t('builtOnFilecoin.visitEcosystem')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {builtOnFilecoin.map(({ title, description, cta, logo }) => (
              <SimpleCardWithLogo
                key={title}
                title={title}
                description={description}
                cta={cta}
                logo={logo}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent headingTag="h2" title={t('quickstart.title')}>
          <CardGrid as="ul" variant="smTwoXlThreeWide">
            {quickstart.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent headingTag="h2" title={t('whatYouCanBuild.title')}>
          <CardGrid as="ul" variant="mdTwo">
            {whatYouCanBuild.map(({ title, description, icon, href }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                description={description}
                href={href}
                icon={{ component: icon }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent headingTag="h2" title={t('tutorials.title')}>
          <CardGrid as="ul" variant="mdTwo">
            {tutorialsAndGuides.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title={t('buildWithFilecoinOnchainCloud.title')}
        >
          <CardGrid as="ul" variant="smTwoXlThreeWide">
            {buildWithFilecoinOnchainCloud.map(
              ({ title, description, cta, image }) => (
                <SimpleCardWithImage
                  key={title}
                  title={title}
                  description={description}
                  cta={cta}
                  image={image}
                />
              ),
            )}
          </CardGrid>
        </SectionContent>
      </PageSection>

      {/* <PageSection backgroundVariant="light" paddingVariant="topNone">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('codeNCorgi.title')}
          description={t('codeNCorgi.description')}
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {codeNCorgiSeries.map(({ title, description, cta, image }) => (
              <SimpleCardWithImage
                key={title}
                title={title}
                description={description}
                cta={cta}
                image={image}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection> */}

      <PageSection backgroundVariant="gray">
        <SectionContent headingTag="h2" title={t('developerResources.title')}>
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {developerResources.map(({ title, description, href, icon }) => (
                <LinkCard
                  key={title}
                  as="li"
                  title={title}
                  headingTag="h3"
                  description={description}
                  href={href}
                  icon={{ component: icon }}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('getInvolved.title')}
          description={t('getInvolved.description')}
        >
          <ImageGrid variant="oneMdThree">
            {getInvolvedImages.map(({ data, alt }) => (
              <Image key={alt} src={data} alt={alt} />
            ))}
          </ImageGrid>

          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {getInvolvedOptions.map(({ title, description, href, icon }) => (
                <LinkCard
                  key={title}
                  as="li"
                  title={title}
                  headingTag="h3"
                  description={description}
                  href={href}
                  icon={{ component: icon, variant: 'filled' }}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.BUILD_ON_FILECOIN.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.BUILD_ON_FILECOIN.path),
    image: graphicsData.spiralGalaxyStarsSpace.data.src,
  })
}
