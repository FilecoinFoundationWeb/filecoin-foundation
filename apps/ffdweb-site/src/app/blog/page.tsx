import { Suspense } from 'react'

import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedEntry } from '@filecoin-foundation/utils/getFeaturedEntry'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

const BLOG_SEO = {
  title: 'FFDW Blog | Latest Web3 Insights & Updates',
  description:
    'Stay informed on the newest advancements in decentralized tech, human rights data preservation, and social impact. Discover fresh perspectives from FFDW.',
}

export default async function Blog() {
  const posts = await getBlogPostsData()

  const featuredPost = getFeaturedEntry({
    entries: posts,
    featuredEntryPath: '/blog/ffdw-2024-annual-report',
  })

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(BLOG_SEO)} />

      <PageHeader
        isFeatured
        title={featuredPost.title}
        metaData={[formatDate(featuredPost.publishedOn)]}
        description={featuredPost.description}
        image={{
          ...(featuredPost.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
      >
        <Button href={`${PATHS.BLOG.path}/${featuredPost.slug}`}>
          Read Featured Post
        </Button>
      </PageHeader>
      <Suspense>
        <BlogContent posts={posts} />
      </Suspense>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: BLOG_SEO.title },
  description: BLOG_SEO.description,
  path: PATHS.BLOG.path,
})
