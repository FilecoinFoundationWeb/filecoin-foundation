import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedEntry } from '@filecoin-foundation/utils/getFeaturedEntry'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/blog.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

const { seo, featured_entry } = FeaturedPageFrontmatterSchema.parse(attributes)

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
        sectionDividerTitle="Featured"
        title={featuredPost.title}
        description={{ text: featuredPost.description }}
        metaData={[formatDate(featuredPost.publishedOn)]}
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

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.blog.data.src,
  path: PATHS.BLOG.path,
})
