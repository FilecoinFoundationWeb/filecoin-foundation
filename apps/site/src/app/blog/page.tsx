import { Suspense } from 'react'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/blog.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/dateUtils'
import { getFeaturedEntry } from '@/utils/getFeaturedEntry'

import { FeaturedPageFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

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
        isFeatured
        title={featuredPost.title}
        description={featuredPost.description}
        metaData={[formatDate(featuredPost.publishedOn)]}
        image={{
          ...(featuredPost.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
        cta={{
          href: `${PATHS.BLOG.path}/${featuredPost.slug}`,
          text: 'Read Featured Post',
        }}
      />
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
