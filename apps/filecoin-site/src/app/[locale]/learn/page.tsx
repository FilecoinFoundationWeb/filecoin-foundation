import Image from 'next/image'

import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Card } from '@filecoin-foundation/ui-filecoin/Card'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { backgroundVariants } from '@filecoin-foundation/ui-filecoin/Section/Section'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { SimpleCard } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URL, FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { GradientOverlay } from '@/components/GradientOverlay'
import { Navigation } from '@/components/Navigation/Navigation'
import { SectionImage } from '@/components/SectionImage'
import { SplitSectionContent } from '@/components/SplitSectionContent'
import { YouTubeVideoEmbed } from '@/components/YoutubeVideoEmbed'

import { getDecentralizedByDesign } from './data/decentralizedByDesign'
import { getLearnAboutFilecoinProtocol } from './data/learnAboutFilecoinProtocol'
import { getResilientInternetCta } from './data/resilientInternetCta'
import { getWhatIsFilecoinUsedFor } from './data/whatIsFilecoinUsedFor'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function Learn() {
  const t = await getTranslations(PATHS.LEARN.path)
  const metadata = await getTranslatedMetadata(PATHS.LEARN.path)

  const whatIsFilecoinUsedFor = getWhatIsFilecoinUsedFor(t)
  const decentralizedByDesign = getDecentralizedByDesign(t)
  const learnAboutFilecoinProtocol = getLearnAboutFilecoinProtocol(t)
  const resilientInternetCta = getResilientInternetCta(t)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />
      <div className={clsx('relative isolate', backgroundVariants.dark)}>
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            variant="highContrast"
            title={t('hero.title')}
            description={t('hero.description')}
            cta={
              <Button href={FILECOIN_DOCS_URL} variant="primary">
                {t('hero.exploreDocs')}
              </Button>
            }
          />
        </PageSection>

        <div className="absolute right-0 bottom-0 -z-10 h-[80vh] w-[80vw] xl:origin-bottom-right">
          <Image
            fill
            priority
            src={graphicsData.solarEclipse.data}
            alt={graphicsData.solarEclipse.alt}
            className="object-cover"
          />
        </div>
        <GradientOverlay />
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topNone">
        <SectionContent
          centerCTA
          descriptionColorBase
          headingTag="h2"
          title={t('whatIsFilecoin.title')}
        >
          <SplitSectionContent
            title={t('whatIsFilecoin.subTitle')}
            description={[
              t('whatIsFilecoin.paragraph1'),
              t('whatIsFilecoin.paragraph2'),
              t('whatIsFilecoin.paragraph3'),
            ]}
          />
          <YouTubeVideoEmbed videoUrl={FILECOIN_URLS.video.whatIsFilecoin} />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('usedFor.title')}
          description={t('usedFor.description')}
          cta={
            <Button href={PATHS.CASE_STUDIES.path} variant="primary">
              {t('usedFor.exploreCaseStudiesCta')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoWider">
            {whatIsFilecoinUsedFor.map((card) => (
              <Card key={card.title} as="li" {...card} />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="How data moves through Filecoin"
          description="Users and storage providers interact through onchain deals. The blockchain records and monitors these deals, using publicly verifiable proofs to ensure the data is correctly stored and accessible."
        >
          <SectionImage {...graphicsData.howDataMovesThroughFilecoin} />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('decentralizedByDesign.title')}
          description={t('decentralizedByDesign.description')}
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              {t('decentralizedByDesign.startStoringCta')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoWider">
            {decentralizedByDesign.map((card) => (
              <Card key={card.title} as="li" {...card} />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('protocol.title')}
          description={t('protocol.description')}
          cta={
            <Button href={FILECOIN_DOCS_URL} variant="primary">
              {t('protocol.exploreDocsCta')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="smTwoXlThreeWide">
            {learnAboutFilecoinProtocol.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                headingTag="h3"
                as="li"
                title={title}
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('resilientInternet.title')}
          description={t('resilientInternet.description')}
        >
          <CardGrid as="ul" variant="mdTwo">
            {resilientInternetCta.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                href={href}
                icon={{ component: icon, variant: 'filled' }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(PATHS.LEARN.path)

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.LEARN.path),
  })
}
