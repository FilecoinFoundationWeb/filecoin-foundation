import { Suspense } from 'react'

import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'
import { omitMarkdown } from '@filecoin-foundation/utils/omitMarkdown'

import { PATHS } from '@/constants/paths'

import { blogPostCollection } from '@/qino/collections/blogPosts'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'

import { BlogContent } from './components/BlogContent'
import { BLOG_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function Blog() {
  const posts = await blogPostCollection.getEntries()

  const featuredPost = findOrThrow(
    posts,
    (post) => post._meta.slug === 'ffdw-2025-annual-report',
  )

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(BLOG_SEO)} />
      <PageHeader
        isFeatured
        title={featuredPost.title}
        metaData={[formatDate(featuredPost.publishedOn)]}
        description={{ text: featuredPost.description, isClamped: true }}
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

      <Suspense>
        <BlogContent posts={posts.map(omitMarkdown)} />
      </Suspense>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: BLOG_SEO.title },
  description: BLOG_SEO.description,
  path: PATHS.BLOG.path,
  image: graphicsData.blog.data.src,
})
