import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'


import { LearningResourcesContent } from './components/LearningResourcesContent'
import { LEARNING_RESOURCES_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getLearningResourcesData } from './utils/getLearningResourceData'

import { PageHeader } from '@/_components/PageHeader/PageHeader'

export default async function LearningResources() {
  const resources = await getLearningResourcesData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(LEARNING_RESOURCES_SEO)}
      />
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
  title: { absolute: LEARNING_RESOURCES_SEO.title },
  description: LEARNING_RESOURCES_SEO.description,
  image: graphicsData.learningResources.data.src,
  path: PATHS.LEARNING_RESOURCES.path,
})
