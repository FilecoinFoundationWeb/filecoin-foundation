import { BookIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS, SEO } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
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

import { ComparisonTable } from './components/ComparisonTable/ComparisonTable'
import { communityLinks } from './data/communityLinks'
import { networkPrinciples } from './data/networkPrinciples'
import { providerBenefits } from './data/providerBenefits'
import { resilientWebLogos } from './data/resilientWebLogos'

import { BlogCard } from '@/blog/components/BlogCard'
import type { BlogPost } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

export default async function Home() {
  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(),
    limit: 6,
  })

  return (
    <>
      <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
      <BackgroundImage
        withOpacity
        src={graphicsData.homepageHero.data.src}
        blurDataURL={graphicsData.homepageHero.data.blurDataURL}
      >
        <Navigation backgroundVariant="dark" />
        <Section backgroundVariant="dark">
          <Container>
            <div className="pt-32 pb-24">
              <span>Announcing Filecoin Onchain Cloud</span>
              <PageHeader
                title="Preserve humanity's most important information"
                description="Filecoin is the world's largest decentralized storage network, built to keep data verifiable and free from centralized control."
                cta={
                  <Button href={PATHS.STORE_DATA.path} variant="primary">
                    Store data
                  </Button>
                }
                // cta={[
                //   <Button href={PATHS.STORE_DATA.path} variant="primary">
                //     Store data
                //   </Button>,
                //   <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="ghost">
                //     Start building
                //   </Button>,
                // ]}
              />
            </div>
          </Container>
        </Section>
      </BackgroundImage>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Filecoin by the numbers" />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent title="A robust foundation for humanity's information">
          <SplitSectionContent
            title="A decentralized, efficient, and robust protocol."
            description={[
              "Filecoin is reshaping how the world stores data. Today, a handful of corporations control most of the world's data, creating centralized gatekeepers that limit transparency and introduce single points of failure.",
              'Filecoin offers a fundamentally different approach to data storage by distributing data across a decentralized, global network, ensuring greater security and resilience.',
              'Petabytes of data, from cultural archives to scientific research, are stored on the network, protected by cryptographic proofs and distributed across nodes worldwide. The decentralized model empowers users with true control over their information, building a more open and resilient foundation for the web.',
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

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="How Filecoin storage stacks up"
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
        <SectionContent title="Build apps better with resilient storage">
          <SplitSectionContent
            title="Open. Scalable. Built for the future."
            description={[
              'Filecoin gives developers a decentralized, verifiable storage layer that scales — perfect for AI pipelines, dApps, data-heavy SaaS platforms, and more. Accelerate development with open source tools, native IPFS integration, cross-chain data bridges, and a permissionless storage marketplace.',
              'Filecoin democratizes data infrastructure, so you can build without compromise — knowing your data belongs to you and your users, not centralized gatekeepers.',
            ]}
            cta={[
              <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primary">
                Explore builder's hub
              </Button>,
              <Button
                href={FILECOIN_URLS.github}
                variant="tertiary"
                icon={GithubLogoIcon}
              >
                GitHub
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

      <PageSection backgroundVariant="light">
        <SectionContent title="Store your data with confidence">
          <LogoSection
            title="Join leading organizations leveraging Filecoin for a more resilient digital future"
            logos={trustedByLogos}
            tag="h3"
          />

          <SplitSectionContent
            title="Secure, verifiable, long-term storage that you control."
            description="No matter what you're storing — your data remains tamper-proof and verifiable. Filecoin offers storage backed by a global network of independent data centers with automatic replication and lower egress fees."
            cta={[
              <Button>
                href={`${PATHS.STORE_DATA.path}#store-on-filecoin`}
                Find storage solutions
              </Button>,
              <Button href={PATHS.STORE_DATA.path} variant="ghost">
                Why store on Filecoin
              </Button>,
            ]}
          />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          centerCTA
          title="Power a more open, resilient web"
          description="Join a global network of independent storage providers powering the Filecoin ecosystem."
          cta={[
            <Button href={PATHS.PROVIDE_STORAGE.path} variant="primary">
              Become a storage provider
            </Button>,
            <Button
              href={`${FILECOIN_URLS.docs}storage-providers/basics`}
              variant="ghost"
            >
              Explore documentation
            </Button>,
          ]}
        >
          <LogoSection logos={resilientWebLogos} />

          <SectionImage {...graphicsData.homepageSection} />

          <CardGrid as="ul" variant="smTwoLgThreeWider">
            {providerBenefits.map(({ title, description }) => (
              <Card
                key={title}
                as="li"
                title={title}
                description={description}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="Mission-driven, built to scale, verifiable by design"
          description="Filecoin offers a fundamentally different approach to data storage and creates a foundation for a more open, resilient, and user-controlled web."
          cta={
            <Button href={PATHS.LEARN.path}>
              Learn more about the Filecoin network
            </Button>
          }
        >
          <CardGrid as="ul" variant="smTwoXlFourWide">
            {networkPrinciples.map(({ title, description, icon }) => (
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
          title="Join the community"
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
