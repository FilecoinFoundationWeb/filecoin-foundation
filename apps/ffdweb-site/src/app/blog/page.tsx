import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'

import { createMetadata } from '@/utils/createMetadata'

import { BlogContent } from './_components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'

export default function Blog() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <TagLabel variant="secondary">Featured</TagLabel>
      <Suspense>
        <BlogContent />
      </Suspense>
    </PageLayout>
  )
}

const seo = {
  metaTitle: 'FFDW Blog | Latest Web3 Insights & Updates',
  metaDescription:
    'Stay informed on the newest advancements in decentralized tech, human rights data preservation, and social impact. Discover fresh perspectives from FFDW.',
}

export const metadata = createMetadata({
  ...seo,
  overrideTitle: true,
})
