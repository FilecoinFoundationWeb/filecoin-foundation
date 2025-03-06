import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS, SEO } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

export default function Home() {
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
        cta={{
          href: PATHS.ABOUT.path,
          text: 'More About FFDW',
        }}
      />

      <PageSection
        isCentered
        kicker="Featured Projects"
        title="Building Decentralized Solutions for Real-World Impact"
        cta={{
          href: PATHS.PROJECTS.path,
          text: 'View All Projects',
          isButton: true,
        }}
      >
        <div className="bg-brand-primary-800 grid h-96 w-full grid-cols-3 gap-4" />
      </PageSection>

      <PageSection
        kicker="Learning Resources"
        title="Discover the Power of Decentralization"
        description={[
          'Learn how decentralized technologies are creating a better future for a better web. Explore educational content, research papers, tutorials, interactive content, and more resources from FFDW and beyond.',
        ]}
        cta={{
          href: PATHS.LEARNING_RESOURCES.path,
          text: 'View All Learning Resources',
        }}
      >
        <div className="bg-brand-primary-800 grid h-96 w-full grid-cols-3 gap-4" />
      </PageSection>

      <PageSection
        kicker="FFDW Digest"
        title="Decentralization and Why it Matters"
        image={graphicsData.dWebDigestCover}
        description={[
          'The DWeb Digest is an online magazine featuring articles from industry experts who teach people from newbies clearly to pique and satisfy their high digital ambition while to digital insights and learnings for digital future developers to build up the community inside DWeb to create a decentralized future.',
        ]}
        cta={{
          href: PATHS.DIGEST.path,
          text: 'Read FFDW Digest',
        }}
      />

      <PageSection
        isCentered
        kicker="Latest News"
        title="Updates from FFDW and DWeb Community"
        cta={{
          href: PATHS.BLOG.path,
          text: 'View All',
          isButton: true,
        }}
      >
        <div className="bg-brand-primary-800 grid h-96 w-full grid-cols-3 gap-4" />
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
