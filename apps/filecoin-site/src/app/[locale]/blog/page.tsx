import { Suspense } from 'react'

import type { LocaleParams } from '@/i18n/types'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { BlogPageHeader } from './components/BlogPageHeader'
import { BlogPostList } from './components/BlogPostList'
import { BLOG_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function Blog({ params }: BlogProps) {
  const { locale } = await params

  const posts = await getBlogPostsData(locale)
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = sortedPosts[0]

  const postsWithoutContent = sortedPosts.map(({ content: _, ...post }) => post)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BLOG_SEO, sortedPosts)}
      />
      <Navigation backgroundVariant="light" />

      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <BlogPageHeader
          title={featuredPost.title}
          description={featuredPost.excerpt}
          slug={featuredPost.slug}
          image={{
            src: featuredPost.image?.url || graphicsData.fallback.data.src,
            alt: '',
          }}
        />
      </PageSection>

      <PageSection backgroundVariant="light" paddingVariant="topNone">
        <Suspense>
          <BlogPostList posts={postsWithoutContent} />
        </Suspense>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: BLOG_SEO.title },
  description: BLOG_SEO.description,
  path: PATHS.BLOG.path,
})
