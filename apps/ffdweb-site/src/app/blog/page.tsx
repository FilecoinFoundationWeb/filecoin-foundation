import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'

import { createMetadata } from '@/utils/createMetadata'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

const SEO = {
  metaTitle: 'FFDW Blog | Latest Web3 Insights & Updates',
  metaDescription:
    'Stay informed on the newest advancements in decentralized tech, human rights data preservation, and social impact. Discover fresh perspectives from FFDW.',
} as const

export default async function Blog() {
  const posts = await getBlogPostsData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <TagLabel variant="secondary">Featured</TagLabel>
      <Suspense>
        <BlogContent posts={posts} />
      </Suspense>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  ...SEO,
  overrideTitle: true,
})
