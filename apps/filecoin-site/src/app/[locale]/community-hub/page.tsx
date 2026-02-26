import Image from 'next/image'

import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { SimpleCard } from '@filecoin-foundation/ui-filecoin/SimpleCard'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { ImageGrid } from '@/components/ImageGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { SectionImage } from '@/components/SectionImage'
import { SimpleCardWithImage } from '@/components/SimpleCardWithImage'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { communityConnectionImages } from './data/communityConnectionImages'
import { getEcosystemGroups } from './data/ecosystemGroups'
import { getGetInvolvedWithCommunity } from './data/getInvolvedWithCommunity'
import { getNetworkUpgrades } from './data/networkUpgrades'
import { socialMedia } from './data/socialMedia'

import { BlogCard } from '@/blog/components/BlogCard'
import type { BlogPostPreview } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function CommunityHub({ params }: BlogProps) {
  const { locale } = await params
  const t = await getTranslations(PATHS.COMMUNITY_HUB.path)

  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(locale),
    limit: 3,
  })

  const getInvolvedWithCommunity = getGetInvolvedWithCommunity(t)
  const ecosystemGroups = getEcosystemGroups(t)
  const networkUpgrades = getNetworkUpgrades(t)

  return (
    <>
      <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />

      <div className="relative isolate">
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            variant="highContrast"
            title={t('hero.title')}
            description={t('hero.description')}
          />
        </PageSection>

        <Image
          priority
          src={graphicsData.astronautHelmet.data}
          alt={graphicsData.astronautHelmet.alt}
          className="absolute right-0 bottom-0 -z-10 h-full object-cover"
        />

        <PageSection
          backgroundVariant="transparentDark"
          paddingVariant="topNone"
        >
          <CardGrid as="ul" variant="mdOneLgThree">
            {getInvolvedWithCommunity.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                headingTag="h2"
                as="li"
                title={title}
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </PageSection>
      </div>

      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title={t('ecosystemGroups.title')}
          description={t('ecosystemGroups.description')}
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {ecosystemGroups.map(({ title, description, cta, logo }) => (
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

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('connectCommunity.title')}
          description={t('connectCommunity.description')}
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.events.href}
              variant="primary"
            >
              {t('connectCommunity.exploreEvents')}
            </Button>
          }
        >
          <ImageGrid variant="oneMdThreeCollage">
            {communityConnectionImages.map(({ data, alt }) => (
              <Image key={alt} src={data} alt={alt} />
            ))}
          </ImageGrid>

          <CardGrid as="ul" variant="mdTwoLgThreeXlFour">
            {socialMedia.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                href={href}
                icon={{ component: icon }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          headingTag="h2"
          title={t('networkUpgrades.title')}
          description={t('networkUpgrades.description')}
          cta={[
            <Button
              href="https://github.com/filecoin-project/FIPs/discussions"
              variant="primary"
            >
              {t('networkUpgrades.checkProposals')}
            </Button>,
            <Button
              href={FILECOIN_FOUNDATION_URLS.governance.href}
              variant="ghost"
            >
              {t('networkUpgrades.learnGovernance')}
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {networkUpgrades.map(
              ({ title, description, cta, label, labelKey, image }) => (
                <SimpleCardWithImage
                  key={title}
                  title={title}
                  description={description}
                  cta={cta}
                  image={image}
                  badge={{
                    text: label,
                    variant:
                      labelKey === 'Current upgrade' ? 'primary' : 'secondary',
                  }}
                />
              ),
            )}
          </CardGrid>
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
              {t('latestNews.viewAll')}
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoLgThreeWide">
            {featuredBlogPosts.map((post: BlogPostPreview) => {
              const {
                title,
                slug,
                excerpt,
                categories,
                image,
                author,
                publishedOn,
              } = post

              return (
                <BlogCard
                  key={title}
                  slug={slug}
                  title={title}
                  description={excerpt}
                  author={author}
                  date={publishedOn}
                  tags={categories}
                  image={
                    image && {
                      src: image.url,
                      alt: title,
                    }
                  }
                />
              )
            })}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('exploreEcosystem.title')}
          description={t('exploreEcosystem.description')}
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}
              variant="primary"
            >
              {t('exploreEcosystem.visitExplorer')}
            </Button>
          }
        />

        <div className="mt-15">
          <SectionImage {...graphicsData.earthAtNight} />
        </div>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.COMMUNITY_HUB.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.COMMUNITY_HUB.path,
  })
}
