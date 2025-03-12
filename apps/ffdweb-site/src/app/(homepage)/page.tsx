import { Button } from '@filecoin-foundation/ui/Button'
import { Card } from '@filecoin-foundation/ui/Card'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import { FEATURED_PROJECTS } from '@/constants/featuredProjects'
import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN, FFDW_URLS, SEO } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTALink } from '@/components/CTALink'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { PageSectionWithImage } from '@/components/PageSectionWithImage'

import { getProjectsBySlugs } from './utils/getFeaturedProjects'

export default async function Home() {
  const featuredProjects = await getProjectsBySlugs(
    FEATURED_PROJECTS.map((p) => p.slug),
  )
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
      <PageHeader
        isHomepage
        title="A Better Web for Everyone"
        image={graphicsData.homepage}
        cta={{
          href: PATHS.PROJECTS.path,
          text: 'View Projects',
        }}
      />

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
        <CardGrid cols="mdThree">
          {featuredProjects.map(({ title, description, slug, image }) => {
            return (
              <Card
                key={slug}
                title={title}
                description={{ text: description, isClamped: true }}
                cta={{
                  href: `${PATHS.PROJECTS.path}/${slug}`,
                  text: 'Read More',
                  baseDomain: BASE_DOMAIN,
                  icon: {
                    component: CaretRight,
                    size: 16,
                    position: 'trailing',
                    weight: 'bold',
                  },
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
          <Button
            href={PATHS.PROJECTS.path}
            baseDomain={BASE_DOMAIN}
            className="flex-1 sm:flex-none"
          >
            View Projects
          </Button>
        </div>
      </PageSection>

      <PageSection
        kicker="Learning Resources"
        title="Discover the Power of Decentralization"
        description={[
          'Learn how decentralized technologies are creating a better future for a better web. Explore educational content, research papers, tutorials, interactive content, and more resources from FFDW and beyond.',
        ]}
      >
        <div className="bg-brand-primary-800 grid h-96 w-full grid-cols-3 gap-4" />
        <CTALink href={PATHS.LEARNING_RESOURCES.path}>
          View All Learning Resources
        </CTALink>
      </PageSection>

      <PageSectionWithImage
        kicker="FFDW Digest"
        title="Decentralization and Why it Matters"
        image={graphicsData.dWebDigestCover}
        description={[
          'The DWeb Digest is an online magazine featuring articles from industry experts who teach people from newbies clearly to pique and satisfy their high digital ambition while to digital insights and learnings for digital future developers to build up the community inside DWeb to create a decentralized future.',
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
        <div className="bg-brand-primary-800 grid h-96 w-full grid-cols-3 gap-4" />
        <div className="flex justify-center">
          <Button href={PATHS.BLOG.path} baseDomain={BASE_DOMAIN}>
            View All
          </Button>
        </div>
      </PageSection>

      <CTASection
        kicker="Get Involved"
        title="Join the Conversation and Help Us Build a Better Internet"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  ...SEO,
})
