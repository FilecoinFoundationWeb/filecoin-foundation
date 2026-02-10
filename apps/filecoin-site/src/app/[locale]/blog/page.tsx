import { Suspense } from 'react'

import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { BlogPageHeader } from './components/BlogPageHeader'
import { BlogPostList } from './components/BlogPostList'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsData } from './utils/getBlogPostData'

const TRANSLATION_NAMESPACE = 'blog'

type BlogProps = {
  params: Promise<LocaleParams>
}

export default async function Blog({ params }: BlogProps) {
  const { locale } = await params

  const posts = await getBlogPostsData(locale)
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = sortedPosts[0]

  const metadata = await getTranslatedMetadata(TRANSLATION_NAMESPACE)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(metadata, sortedPosts)}
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
          <BlogPostList posts={sortedPosts} />
        </Suspense>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    TRANSLATION_NAMESPACE,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.BLOG.path,
  })
}
