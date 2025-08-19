import { BookIcon } from '@phosphor-icons/react/dist/ssr'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS, SEO } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { Container } from '@/components/Container'
import { LinkCard } from '@/components/LinkCard'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SectionImage } from '@/components/SectionImage'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { Announcement } from './components/Announcement'
import { ComparisonTable } from './components/ComparisonTable/ComparisonTable'
import { communityLinks } from './data/communityLinks'
import { generateStructuredData } from './utils/generateStructuredData'

import { BlogCard } from '@/blog/components/BlogCard'
import type { BlogPost } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

export default async function Home() {
  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(),
    limit: 3,
  })

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />

      <Navigation backgroundVariant="dark" />
      <Section backgroundVariant="dark">
        <Container>
          <div className="space-y-15 pt-24 pb-24 md:pt-32">
            {/* todo look into when we need space-y-15 */}
            <Announcement centered href={PATHS.BLOG.path}>
              Announcing Filecoin Onchain Cloud
            </Announcement>
            <PageHeader
              centered
              title="Preserve humanity's most important information"
              description="Filecoin is the world's largest decentralized storage network, built to keep data verifiable and free from centralized control."
              cta={[
                <Button href={PATHS.STORE_DATA.path} variant="primary">
                  Store data
                </Button>,
                <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="ghost">
                  Start building
                </Button>,
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="dark">
        <div className="overflow-x-clip overflow-y-visible">
          <graphicsData.homepageGradient.data className="w-[200%] -translate-x-1/3 transform overflow-visible" />
        </div>
      </Section>

      <PageSection paddingVariant="none" backgroundVariant="dark">
        <div className="py-12" />
        <LogoSection
          title="Trusted by industry leaders"
          logos={trustedByLogos}
          tag="h3"
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Filecoin by the numbers" />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent title="A decentralized, efficient, and robust foundation for humanity's most important information. ">
          <SplitSectionContent
            title="A decentralized, efficient, and robust protocol."
            description={[
              'A better foundation for the next generation of the web.',
              "Filecoin is reshaping how the world stores data. Today, a small handful of corporations control most of the world's data, creating centralized gatekeepers that introduce single points of failure and limit transparency.",
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

          <SectionImage {...graphicsData.learnLibrarySection} />
        </SectionContent>
      </PageSection>

      <PageSection paddingVariant="none" backgroundVariant="light">
        <SectionContent
          title="The incentive layer for IPFS"
          description="Filecoin makes it easy for IPFS users to reliably store their data directly on the Filecoin network. The result is a decentralized, storage layer opening up an entirely new class of applications and use cases."
          cta={
            <Button href={FILECOIN_URLS.docs} variant="primary">
              Learn more about IPFS
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="How Filecoin storage compares to traditional cloud storage"
          description="Compare decentralized object storage against the traditional cloud storage."
          cta={[
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Store data
            </Button>,
            <Button href="https://github.com/filecoin-project" variant="ghost">
              Learn more
            </Button>,
          ]}
        >
          <ComparisonTable />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Open, scalable, and built for the future">
          <SplitSectionContent
            title="A decentralized, verifiable storage layer that scales."
            description={[
              'Filecoin gives developers a decentralized, verifiable storage layer that scales effortlessly. Power  chain storage, dApps, data-heavy SaaS platforms, immutable archives, and beyond.',
              'Accelerate development with open source tools, native IPFS integration, cross-chain data bridges, and FEVM for programmable smart contracts. Build without compromise, knowing you control your data, not centralized gatekeepers.',
            ]}
            cta={[
              <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primary">
                Start building
              </Button>,
              <Button
                href={FILECOIN_URLS.docs}
                variant="tertiary"
                icon={BookIcon}
              >
                Documentation
              </Button>,
            ]}
          />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          title="Latest news"
          description="Insights, updates, ecosystem spotlights, and community stories, directly from the teams building Filecoin."
          cta={<Button href={PATHS.BLOG.path}>View all articles</Button>}
        >
          <CardGrid as="ul" variant="smTwoXlThreeWidest">
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
          title="Join a vibrant community"
          description="Be part of the movement to build a decentralized, efficient, and robust foundation for humanity's information."
        >
          <CardGridContainer width="4xl">
            <CardGrid as="ul" variant="mdTwoWide">
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
  image: '', // #todo: add image
})
