import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'

import { createMetadata } from '@/utils/createMetadata'

import { BlogContent } from './_components/BlogContent'

export default function Blog() {
  return (
    <PageLayout gap={32}>
      <TagLabel variant="secondary">Featured</TagLabel>
      <Suspense>
        <BlogContent />
      </Suspense>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW Blog | Latest Web3 Insights & Updates',
  metaDescription:
    'Stay informed on the newest advancements in decentralized tech, human rights data preservation, and social impact. Discover fresh perspectives from FFDW.',
  overrideTitle: true,
})
