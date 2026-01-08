import Image from 'next/image'

import type { LocaleParams } from '@/i18n/types'

import { Heading } from '@filecoin-foundation/ui/Heading'
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

import { ImageGrid } from '@/components/ImageGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { SectionImage } from '@/components/SectionImage'
import { SimpleCardWithImage } from '@/components/SimpleCardWithImage'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { COMMUNITY_SEO } from './constants/seo'
import { communityConnectionImages } from './data/communityConnectionImages'
import { ecosystemGroups } from './data/ecosystemGroups'
import { getInvolvedWithCommunity } from './data/getInvolvedWithCommunity'
import { networkUpgrades } from './data/networkUpgrades'
import { socialMedia } from './data/socialMedia'

import { BlogCard } from '@/blog/components/BlogCard'
import type { BlogPost } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function CommunityHub({ params }: BlogProps) {
  const { locale } = await params

  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(locale),
    limit: 3,
  })

  return (
    <>
      <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />

      <div className="relative isolate">
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            variant="highContrast"
            title="Build, connect and grow with the Filecoin community"
            description="A global network of builders, researchers, advocates and creators is shaping the future of Filecoin. Plug into the community and start contributing in your own way."
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
          <Heading tag="h2" variant="2xl" className="sr-only">
            Get involved with the community
          </Heading>

          <CardGrid as="ul" variant="mdOneLgThree">
            {getInvolvedWithCommunity.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
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
          title="Ecosystem groups"
          description="Filecoin is open-source and community-driven. Explore groups advancing the protocol and building the tools that power its ecosystem."
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
          title="Connect with the community"
          description="Connect with a vibrant network of developers building on Filecoin.
          Connect, collaborate, and grow with the ecosystem."
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.events.href}
              variant="primary"
            >
              Explore upcoming events
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
          title="Network upgrades"
          description="Filecoin is governed through an open, community-driven process where technical decisions are discussed in public and implemented through regular upgrades that keep the network secure and evolving."
          cta={[
            <Button
              href="https://github.com/filecoin-project/FIPs/discussions"
              variant="primary"
            >
              Check proposals
            </Button>,
            <Button
              href={FILECOIN_FOUNDATION_URLS.governance.href}
              variant="ghost"
            >
              Learn more about governance
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {networkUpgrades.map(
              ({ title, description, cta, label, image }) => (
                <SimpleCardWithImage
                  key={title}
                  title={title}
                  description={description}
                  cta={cta}
                  image={image}
                  badge={{
                    text: label,
                    variant:
                      label === 'Current upgrade' ? 'primary' : 'secondary',
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
          title="Latest news"
          description="Insights, updates, ecosystem spotlights, and community stories, directly from the teams building Filecoin."
          cta={
            <Button variant="primary" href={PATHS.BLOG.path}>
              View all articles
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoLgThreeWide">
            {featuredBlogPosts.map((post: BlogPost) => {
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
          title="Explore the ecosystem"
          description="Visit Filecoin Foundation's Ecosystem Explorer to discover Filecoin projects, get inspired by what others are building, and find your place in the Filecoin ecosystem."
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}
              variant="primary"
            >
              Visit ecosystem explorer
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

export const metadata = createMetadata({
  title: { absolute: COMMUNITY_SEO.title },
  description: COMMUNITY_SEO.description,
  path: PATHS.COMMUNITY_HUB.path,
})
