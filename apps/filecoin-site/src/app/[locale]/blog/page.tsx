import { Suspense } from 'react'

import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { BlogPageHeader } from './components/BlogPageHeader'
import { BlogPostList } from './components/BlogPostList'
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

  const t = await getTranslations(PATHS.BLOG.path)
  const metadata = await getTranslatedMetadata(PATHS.BLOG.path)

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
          badgeText={t('featuredPost.badge')}
          ctaText={t('featuredPost.cta')}
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
  const { title, description } = await getTranslatedMetadata(PATHS.BLOG.path)

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.BLOG.path),
  })
}
