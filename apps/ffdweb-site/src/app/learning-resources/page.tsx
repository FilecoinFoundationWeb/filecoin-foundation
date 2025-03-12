import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

import { LearningResourcesContent } from './components/LearningResourcesContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getLearningResourcesData } from './utils/getLearningResourceData'

const SEO = {
  metaTitle: 'FFDW Learning Resources | Decentralized Tech & Social Impact',
  metaDescription:
    'Discover case studies, tutorials, and tools on decentralized technologies driving social change. Learn, share, and help shape the future with FFDW.',
} as const

export default async function LearningResources() {
  const resources = await getLearningResourcesData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <PageHeader
        kicker="Learning Resources"
        title="Explore Decentralized Tech with Content from FFDW and Beyond"
        image={graphicsData.learningResources}
      />

      <Suspense>
        <LearningResourcesContent resources={resources} />
      </Suspense>

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

export const metadata = createMetadata({
  ...SEO,
  overrideTitle: true,
})
