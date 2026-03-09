import Image from 'next/image'

import type { LocaleParams } from '@/i18n/types'

import { BookIcon } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { CardGridContainer } from '@/components/CardGridContainer'
import { GradientOverlay } from '@/components/GradientOverlay'
import { ImageGrid } from '@/components/ImageGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { SectionContentWrapper } from '@/components/SectionContentWrapper'
import { SectionImage } from '@/components/SectionImage'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { ComparisonTable } from './components/ComparisonTable/ComparisonTable'
import { HeroSection } from './components/HeroSection'
import { MetricCard } from './components/MetricCard'
import { getCommunityLinks } from './data/communityLinks'
import { getFilecoinByTheNumbers } from './data/filecoinByTheNumbers'
import {
  getFilecoinColumn,
  getTraditionalCloudColumn,
} from './data/filecoinVsCloudComparison'
import { getJoinVibrantCommunityImages } from './data/joinVibrantCommunityImages'
import { generateStructuredData } from './utils/generateStructuredData'

import { BlogCard } from '@/blog/components/BlogCard'
import { getFeaturedBlogPosts } from '@/blog/utils/getFeaturedBlogPosts'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function Home({ params }: BlogProps) {
  const { locale } = await params

  const t = await getTranslations(PATHS.HOME.path)
  const metadata = await getTranslatedMetadata(PATHS.HOME.path)

  const featuredBlogPosts = await getFeaturedBlogPosts(locale, 3)

  const filecoinByTheNumbers = getFilecoinByTheNumbers(t)
  const communityLinks = getCommunityLinks(t)
  const communityImages = getJoinVibrantCommunityImages(t)
  const filecoinColumn = getFilecoinColumn(t)
  const traditionalCloudColumn = getTraditionalCloudColumn(t)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />

      <div className="relative isolate">
        <Navigation backgroundVariant="transparentDark" />
        <HeroSection />
        <Image
          fill
          priority
          src={graphicsData.earthFromDeepSpace.data}
          alt={graphicsData.earthFromDeepSpace.alt}
          className="absolute bottom-0 -z-10 h-full object-cover object-top"
        />
        <GradientOverlay />
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topCompact">
        <LogoSection
          headingTag="h2"
          title={t('trustedBy.title')}
          logos={trustedByLogos}
          gradientMode="dark"
        />
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerTitle
          headingTag="h2"
          title={t('byTheNumbers.title')}
        >
          <CardGrid as="ul" variant="mdThreeWider">
            {filecoinByTheNumbers.map(({ title, subTitle, description }) => (
              <MetricCard
                key={title}
                title={title}
                subTitle={subTitle}
                description={description}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent headingTag="h2" title={t('reshapingData.title')}>
          <SplitSectionContent
            title={t('reshapingData.subTitle')}
            description={[
              t('reshapingData.paragraph1'),
              t('reshapingData.paragraph2'),
              t('reshapingData.paragraph3'),
            ]}
            cta={[
              <Button href={PATHS.STORE_DATA.path} variant="primary">
                {t('reshapingData.storeDataCta')}
              </Button>,
              <Button href={PATHS.PROVIDE_STORAGE.path} variant="ghost">
                {t('reshapingData.becomeProviderCta')}
              </Button>,
            ]}
          />

          <SectionImage
            {...graphicsData.classicLibraryInterior}
            size="compact"
          />
        </SectionContent>
      </PageSection>

      <PageSection paddingVariant="none" backgroundVariant="light">
        <SectionContentWrapper>
          <SectionContent
            descriptionColorBase
            headingTag="h2"
            title={t('ipfs.title')}
            description={[t('ipfs.paragraph1'), t('ipfs.paragraph2')]}
            cta={
              <Button href="https://ipfs.tech/" variant="primary">
                {t('ipfs.learnMoreCta')}
              </Button>
            }
          />
          <Image
            src={graphicsData.IPFSIllustration.data}
            alt={graphicsData.IPFSIllustration.alt}
            className="h-72 min-w-80 object-contain"
          />
        </SectionContentWrapper>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          centerTitle
          headingTag="h2"
          title={t('comparison.title')}
          description={t('comparison.description')}
          cta={[
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              {t('comparison.storeDataCta')}
            </Button>,
            <Button href={PATHS.LEARN.path} variant="ghost">
              {t('comparison.learnMoreCta')}
            </Button>,
          ]}
        >
          <div className="m-auto w-full max-w-sm md:max-w-4xl">
            <ComparisonTable
              columns={[filecoinColumn, traditionalCloudColumn]}
            />
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent headingTag="h2" title={t('buildForFuture.title')}>
          <SplitSectionContent
            title={t('buildForFuture.subTitle')}
            description={t('buildForFuture.description')}
            cta={[
              <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primary">
                {t('buildForFuture.startBuildingCta')}
              </Button>,
              <Button
                href={FILECOIN_DOCS_URL}
                variant="tertiary"
                icon={BookIcon}
              >
                {t('buildForFuture.documentationCta')}
              </Button>,
            ]}
          />

          <SectionImage {...graphicsData.rocketLaunch} size="compact" />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('latestNews.title')}
          description={t('latestNews.description')}
          cta={
            <Button variant="primary" href={PATHS.BLOG.path}>
              {t('latestNews.viewAllCta')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoLgThreeWide">
            {featuredBlogPosts.map(
              ({ title, slug, excerpt, tags, image, author, publishedOn }) => (
                <BlogCard
                  key={title}
                  slug={slug}
                  title={title}
                  description={excerpt}
                  author={author}
                  date={publishedOn}
                  tags={tags}
                  image={
                    image && {
                      src: image.url,
                      alt: title,
                    }
                  }
                />
              ),
            )}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('community.title')}
          description={t('community.description')}
        >
          <ImageGrid variant="oneMdThree">
            {communityImages.map(({ data, alt }) => (
              <Image key={alt} src={data} alt={alt} />
            ))}
          </ImageGrid>

          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {communityLinks.map(({ title, href, icon }) => (
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
          </CardGridContainer>
        </SectionContent>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(PATHS.HOME.path)

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.HOME.path,
    image: graphicsData.classicLibraryInterior.data.src,
  })
}
