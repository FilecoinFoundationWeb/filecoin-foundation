import { Suspense } from 'react'

import { Button } from '@filecoin-foundation/ui/Button'
import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedEntry } from '@filecoin-foundation/utils/getFeaturedEntry'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/blog.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { PageSection } from '@/components/PageSection'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

import { BASE_DOMAIN } from '@/_constants/siteMetadata'

const { seo, featured_entry } = FeaturedPageFrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo,
  path: PATHS.BLOG.path,
  overrideDefaultTitle: true,
})

export default async function Blog() {
  const posts = await getBlogPostsData()

  const featuredPost = getFeaturedEntry({
    entries: posts,
    featuredEntryPath: featured_entry,
  })

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateStructuredData(posts, seo)}
      />

      <PageHeader
        divider="Featured"
        title={featuredPost.title}
        description={featuredPost.description}
        metaData={[formatDate(featuredPost.publishedOn)]}
        image={{
          ...(featuredPost.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
      >
        <Button
          href={`${PATHS.BLOG.path}/${featuredPost.slug}`}
          baseDomain={BASE_DOMAIN}
        >
          Read Featured Post
        </Button>
      </PageHeader>
      <PageSection
        kicker="Blog"
        title="Filecoin Ecosystem Updates"
        description="Read the latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
      >
        <Suspense>
          <BlogContent posts={posts} />
        </Suspense>
      </PageSection>
    </PageLayout>
  )
}
