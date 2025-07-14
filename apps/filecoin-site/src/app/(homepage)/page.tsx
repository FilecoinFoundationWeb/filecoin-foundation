import { BookIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { LinkCard } from '@/components/LinkCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { communityLinks } from './data/communityLinks'
import { networkActions } from './data/networkActions'
import { networkPrinciples } from './data/networkPrinciples'
import { providerBenefits } from './data/providerBenefits'

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
      <PageSection backgroundVariant="transparent">
        <PageHeader
          description="Keep your data accessible, verifiable, and free from centralized control with the world's largest decentralized storage network."
          title="Preserving humanity's most important information"
        />
        <div className="py-8 sm:py-12"></div>
        <CardGrid as="ul" cols="lgThree">
          {networkActions.map(({ title, description, href, icon }) => (
            <LinkCard
              key={title}
              as="li"
              backgroundVariant="light"
              title={title}
              description={description}
              href={href}
              icon={icon}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Build apps better with resilient storage">
          <div>
            <DescriptionText>
              Open. Scalable. Built for the future.
            </DescriptionText>
            <DescriptionText
              children={[
                'Filecoin gives developers a decentralized, verifiable storage layer that scales — perfect for AI pipelines, dApps, data-heavy SaaS platforms, and more. Accelerate development with open source tools, native IPFS integration, instant retrieval, and a permissionless storage marketplace.',
                'Filecoin democratizes data infrastructure, so you can build without compromise — knowing your data belongs to you and your users, not centralized gatekeepers.',
              ]}
            />
            <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primaryDark">
              Explore builder's hub
            </Button>
            <a
              href={PATHS.LEARN.path}
              className="inline-flex items-center gap-2 text-zinc-300"
            >
              <GithubLogoIcon size={24} />
              GitHub
            </a>
            <a
              href={PATHS.BLOG.path}
              className="inline-flex items-center gap-2 text-zinc-300"
            >
              <BookIcon size={24} />
              Documentation
            </a>
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent title="Store your data with confidence">
          <div>
            <p>
              Join leading organizations leveraging Filecoin for a more
              resilient digital future
            </p>
            <p>Secure, verifiable, long-term storage that you control.</p>
            <DescriptionText>
              No matter what you're storing — your data remains tamper-proof and
              verifiable. Filecoin offers cost-effective storage backed by a
              global network of independent data centers with automatic
              replication and lower egress fees.
            </DescriptionText>
            <Button href={PATHS.STORE_DATA.path}>Find storage solutions</Button>
            <Button href="#" variant="ghost">
              Why store on Filecoin
            </Button>
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          centerCTA
          title="Power a more open, resilient web"
          description="Join a global network of independent data centers powering the Filecoin ecosystem."
          cta={[
            <Button
              key="button-1"
              href={PATHS.OFFER_STORAGE.path}
              variant="primaryDark"
            >
              Become a storage provider
            </Button>,
            <Button key="button-2" href={PATHS.LEARN.path} variant="ghostDark">
              Explore documentation
            </Button>,
          ]}
        >
          <CardGrid as="ul" cols="lgThree">
            {providerBenefits.map(({ title, description }) => (
              <Card
                key={title}
                backgroundVariant="dark"
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
          <CardGrid as="ul" cols="smTwo">
            {networkPrinciples.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                backgroundVariant="light"
                title={title}
                description={description}
                icon={{
                  component: icon,
                  position: 'top',
                }}
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
          <CardGrid as="ul" cols="lgThree">
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
                  cta={{
                    href: `${PATHS.BLOG.path}/${slug}`,
                    ariaLabel: `Read more about ${title}`,
                  }}
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
          <CardGrid as="ul" cols="smTwo">
            {communityLinks.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                backgroundVariant="dark"
                title={title}
                href={href}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>
    </>
  )
}
