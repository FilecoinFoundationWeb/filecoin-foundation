import { Suspense } from 'react'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'
import { PageSection } from '@/components/PageSection'

import type { Locale } from '@/i18n/locales'
import { routing } from '@/i18n/routing'

import { BlogPageHeader } from './components/BlogPageHeader'
import { BlogPostList } from './components/BlogPostList'
import { BLOG_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

type BlogProps = {
  params: Promise<{ locale: Locale }>
}

export default async function Blog({ params }: BlogProps) {
  const { locale } = await params

  const posts = await getBlogPostsData(locale)
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = sortedPosts[0]

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BLOG_SEO, sortedPosts)}
      />

      <Navigation backgroundVariant="light" />

      <PageSection backgroundVariant="light" paddingVariant="medium">
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

      <PageSection backgroundVariant="light" paddingVariant="compact">
        <Suspense>
          <BlogPostList posts={sortedPosts} />
        </Suspense>
      </PageSection>
    </>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata = createMetadata({
  title: { absolute: BLOG_SEO.title },
  description: BLOG_SEO.description,
  path: PATHS.BLOG.path,
})
