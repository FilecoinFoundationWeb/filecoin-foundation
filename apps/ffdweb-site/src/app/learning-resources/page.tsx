import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

import { generateStructuredData } from './utils/generateStructuredData'

export default function LearningResources() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        kicker="Learning Resources"
        title="Explore Decentralized Tech with Content from FFDW and Beyond"
        image={graphicsData.learningResources}
      />

      <CTASection
        kicker="Contribute"
        title="Add to FFDW's Learning Resources Page"
        cta={{
          href: FFDW_URLS.newResourceForm,
          text: 'Submit a Resource',
        }}
      />
    </PageLayout>
  )
}

const seo = {
  metaTitle: 'FFDW Learning Resources | Decentralized Tech & Social Impact',
  metaDescription:
    'Discover case studies, tutorials, and tools on decentralized technologies driving social change. Learn, share, and help shape the future with FFDW.',
  overrideTitle: true,
}

export const metadata = createMetadata({
  ...seo,
  overrideTitle: true,
})
