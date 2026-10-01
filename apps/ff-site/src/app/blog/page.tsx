import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { PATHS } from '@/constants/paths'

import { blogPageItem } from '@/qino/items/blogPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFeaturedEntry } from '@/utils/getFeaturedEntry'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogContent } from './components/BlogContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const { seo, featured_entry } = await blogPageItem.getEntry()

  const posts = await getBlogPostsData()

  const featuredPost = getFeaturedEntry({
    entries: posts,
    featuredEntryPath: featured_entry,
  })

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={await generateStructuredData(posts, seo)}
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
        <Button href={`${PATHS.BLOG.path}/${featuredPost._meta.slug}`}>
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

export async function generateMetadata() {
  const { seo } = await blogPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.blog.data.src,
    path: PATHS.BLOG.path,
  })
}
