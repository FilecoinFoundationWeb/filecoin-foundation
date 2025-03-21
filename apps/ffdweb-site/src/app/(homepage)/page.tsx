import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { PATHS } from '@/constants/paths'
import { FFDW_URLS, SEO } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CTALink } from '@/components/CTALink'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { PageSectionWithImage } from '@/components/PageSectionWithImage'

// import { IconCardWithCTA } from './components/IconCardWithCTA'
import { FEATURED_PROJECTS } from './constants/featuredProjects'
// import { learningResources } from './constants/learningResources'
import { getFeaturedProjects } from './utils/getFeaturedProjects'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

export default async function Home() {
  const featuredProjects = await getFeaturedProjects(FEATURED_PROJECTS)
  const featuredBlogPosts = getFeaturedBlogPosts({
    posts: await getBlogPostsData(),
    limit: 6,
  })

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
      <div className="mt-16">
        <PageHeader
          isHomepage
          title="A Better Web for Everyone"
          image={graphicsData.homepage}
          cta={{
            href: PATHS.PROJECTS.path,
            text: 'View Projects',
          }}
        />
      </div>

      <PageSection
        kicker="About FFDW"
        title="FFDW Exists to Help Build a Better Web"
        description={[
          'Filecoin Foundation for the Decentralized Web (FFDW) is the sister nonprofit of Filecoin Foundation. FFDW is a 501(c)(3) nonprofit committed to preserving humanity’s most important information and supporting the development and adoption of decentralized technologies. While Filecoin Foundation stewards the Filecoin network’s future, FFDW promotes the broader development of the decentralized web (DWeb).',
          'FFDW’s work includes supporting open source software and protocols that safeguard critical data from centralized control and single points of failure. FFDW also empowers institutions to preserve vulnerable information by leveraging the resilience of decentralized storage.',
        ]}
      >
        <CTALink href={PATHS.ABOUT.path}>More About FFDW</CTALink>
      </PageSection>

      <PageSection
        isCentered
        kicker="Featured Projects"
        title="Building Decentralized Solutions for Real-World Impact"
      >
        <CardGrid as="section" cols="mdThree">
          {featuredProjects.map(({ title, description, slug, image }) => {
            return (
              <Card
                key={slug}
                as="article"
                title={title}
                description={{ text: description, isClamped: true }}
                cta={{
                  href: `${PATHS.PROJECTS.path}/${slug}`,
                  text: 'Read More',
                  icon: CARET_RIGHT,
                }}
                image={{
                  ...(image || graphicsData.imageFallback.data),
                  alt: '',
                  objectFit: 'contain',
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '350px',
                    md: '470px',
                    lg: '360px',
                  }),
                }}
              />
            )
          })}
        </CardGrid>

        <div className="flex justify-center">
          <Button href={PATHS.PROJECTS.path} className="flex-1 sm:flex-none">
            View All Projects
          </Button>
        </div>
      </PageSection>

      <PageSection
        kicker="Learning Resources"
        title="Discover the Power of Decentralization"
        description={[
          'Learn how decentralized technologies are creating the infrastructure for a better web. Explore educational content, research papers, tutorials, interactive content, and more resources from FFDW and beyond.',
        ]}
      >
        {/*<CardGrid cols="mdThree">
           {learningResources.map(({ icon, title, cta }) => (
            <IconCardWithCTA key={title} icon={icon} title={title} cta={cta} />
          ))} 
        </CardGrid>*/}
        <CTALink href={PATHS.LEARNING_RESOURCES.path}>
          View All Learning Resources
        </CTALink>
      </PageSection>

      <PageSectionWithImage
        kicker="FFDW Digest"
        title="Decentralization and Why it Matters"
        image={graphicsData.dWebDigestCover}
        description={[
          'The DWeb Digest is an online magazine featuring articles from industry experts on topics ranging from cognitive liberty to privacy and crypto policy. The digital publication offers in-depth insights and opinions on the latest trends in decentralization and explores ideas for a better, more decentralized future.',
        ]}
        cta={{
          href: PATHS.DIGEST.path,
          children: 'Read FFDW Digest',
        }}
      />

      <PageSection
        isCentered
        kicker="Latest News"
        title="Updates from FFDW and DWeb Community"
      >
        <CardGrid as="section" cols="smTwoLgThree">
          {featuredBlogPosts.map((post, i) => {
            const { slug, category, title, description, image, publishedOn } =
              post

            const categoryLabel = getCategoryLabel({
              collectionName: 'blog_posts',
              category,
            })

            return (
              <Card
                key={slug}
                as="article"
                title={title}
                description={{ text: description, isClamped: true }}
                metaData={[formatDate(publishedOn)]}
                tags={[{ text: categoryLabel }]}
                cta={{
                  href: `${PATHS.BLOG.path}/${slug}`,
                  text: 'Read Post',
                  icon: CARET_RIGHT,
                }}
                image={{
                  ...(image || graphicsData.imageFallback.data),
                  alt: '',
                  objectFit: 'cover',
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '350px',
                    md: '470px',
                    lg: '360px',
                  }),
                }}
              />
            )
          })}
        </CardGrid>

        <div className="flex justify-center">
          <Button href={PATHS.BLOG.path}>View All News</Button>
        </div>
      </PageSection>

      <CTASection
        kicker="Get Involved"
        title="Join the Conversation and Help Us Build a Better Web"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: SEO.title,
  description: SEO.description,
  path: PATHS.HOME.path,
  image: graphicsData.homepage.data.src,
})
