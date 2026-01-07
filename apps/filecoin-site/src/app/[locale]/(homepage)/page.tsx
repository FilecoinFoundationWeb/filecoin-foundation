import Image from 'next/image'

import type { LocaleParams } from '@/i18n/types'

import { BookIcon } from '@phosphor-icons/react/dist/ssr'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'
import { SEO } from '@/constants/siteMetadata'
import { FILECOIN_DOCS_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

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
import { communityLinks } from './data/communityLinks'
import { filecoinByTheNumbers } from './data/filecoinByTheNumbers'
import { joinVibrantCommunityImages } from './data/joinVibrantCommunityImages'
import { generateStructuredData } from './utils/generateStructuredData'

import { BlogCard } from '@/blog/components/BlogCard'
import type { BlogPost } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function Home({ params }: BlogProps) {
  const { locale } = await params

  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(locale),
    limit: 3,
  })

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />

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

      <PageSection backgroundVariant="dark" paddingVariant="none">
        <LogoSection
          headingTag="h2"
          title="Trusted by industry leaders"
          logos={trustedByLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          centerTitle
          headingTag="h2"
          title="Filecoin by the numbers"
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
        <SectionContent
          headingTag="h2"
          title="Filecoin is reshaping how the world stores data"
        >
          <SplitSectionContent
            title="A better foundation for the next generation of the web."
            description={[
              "Today, a small handful of corporations control most of the world's data, creating centralized gatekeepers that introduce single points of failure and limit transparency.",
              'Filecoin offers a fundamentally different approach to data storage: distributing data across a decentralized, global network protected by cryptographic proofs, ensuring greater security and resilience.',
              'From cultural archives to scientific research, petabytes of data are already stored on Filecoin. The decentralized model empowers users with true autonomy over their information, building a foundation for a more open, resilient, and user-controlled web.',
            ]}
            cta={[
              <Button href={PATHS.STORE_DATA.path} variant="primary">
                Store data
              </Button>,
              <Button href={PATHS.PROVIDE_STORAGE.path} variant="ghost">
                Become a storage provider
              </Button>,
            ]}
          />

          <SectionImage {...graphicsData.classicLibraryInterior} />
        </SectionContent>
      </PageSection>

      <PageSection paddingVariant="none" backgroundVariant="light">
        <SectionContentWrapper>
          <SectionContent
            descriptionColorBase
            headingTag="h2"
            title="The incentive layer for IPFS"
            description={[
              'Filecoin adds incentivized, persistent storage to the InterPlanetary File System (IPFS), a peer-to-peer network for content-addressable data, creating a powerful, versatile, and long-term home for data. ',
              'Filecoin makes it easy for IPFS users to reliably store their data directly on the Filecoin network. The result is a decentralized, storage layer opening up an entirely new class of applications and use cases.',
            ]}
            cta={
              <Button href="https://ipfs.tech/" variant="primary">
                Learn more about IPFS
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
          title="How Filecoin storage stacks up"
          description="How decentralized storage compares to traditional cloud storage"
          cta={[
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Store data
            </Button>,
            <Button href={PATHS.LEARN.path} variant="ghost">
              Learn more about Filecoin
            </Button>,
          ]}
        >
          <div className="m-auto w-full max-w-sm md:max-w-4xl">
            <ComparisonTable />
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="Open, scalable, and built for the future"
        >
          <SplitSectionContent
            title="A decentralized, verifiable storage layer that scales effortlessly."
            description="Power chain storage, dApps, data-heavy SaaS platforms, immutable archives, and beyond. Accelerate development with open source tools, native IPFS integration, cross-chain data bridges, and FEVM for programmable smart contracts. Build without compromise, knowing you control your data, not centralized gatekeepers."
            cta={[
              <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primary">
                Start building
              </Button>,
              <Button
                href={FILECOIN_DOCS_URL}
                variant="tertiary"
                icon={BookIcon}
              >
                Documentation
              </Button>,
            ]}
          />

          <SectionImage {...graphicsData.rocketLaunch} />
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
          title="Join a vibrant community"
          description="Be part of the movement to build a decentralized, efficient, and robust foundation for humanity's information."
        >
          <ImageGrid variant="oneMdThree">
            {joinVibrantCommunityImages.map(({ data, alt }) => (
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

export const metadata = createMetadata({
  title: { absolute: SEO.title },
  description: SEO.description,
  path: PATHS.HOME.path,
  image: graphicsData.classicLibraryInterior.data.src,
})
