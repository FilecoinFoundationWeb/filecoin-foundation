import { Suspense } from 'react'

import { Button } from '@filecoin-foundation/ui/Button'
import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedEntry } from '@filecoin-foundation/utils/getFeaturedEntry'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

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

  const featuredPost = getFeaturedEntry({
    entries: posts,
    featuredEntryPath: '/blog/ffdw-2024-annual-report',
  })

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />

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
        <Button
          baseDomain={BASE_DOMAIN}
          href={`${PATHS.BLOG.path}/${featuredPost.slug}`}
        >
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
  ...SEO,
  overrideTitle: true,
})
