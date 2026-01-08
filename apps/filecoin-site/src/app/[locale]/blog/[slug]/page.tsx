import { routing } from '@/i18n/routing'
import type { LocaleParams } from '@/i18n/types'

import { setRequestLocale } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { MarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import type { SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { getBlogPostData, getBlogPostsData } from '../utils/getBlogPostData'

import { BlogPostHeader } from './components/BlogPostHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<SlugParams & LocaleParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug, locale } = await params

  setRequestLocale(locale)

  const data = await getBlogPostData(slug, locale)
  const { image, categories, author, publishedOn, title, content } = data

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <div className="mx-auto max-w-3xl">
          <BlogPostHeader
            title={title}
            categories={categories}
            author={author}
            date={publishedOn}
            slug={slug}
            image={{
              src: image?.url || graphicsData.fallback.data.src,
              alt: image?.alt || '',
            }}
          />

          <MarkdownContent>{content}</MarkdownContent>
        </div>
      </PageSection>
    </>
  )
}

export async function generateStaticParams() {
  const locales = routing.locales

  const entriesByLocale = await Promise.all(locales.map(getBlogPostsData))

  const params = entriesByLocale.flatMap((entries, index) => {
    const locale = locales[index]
    return entries.map(({ slug }) => ({ slug, locale }))
  })

  return params
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug, locale } = await props.params
  const { image, seo, excerpt } = await getBlogPostData(slug, locale)

  return createMetadata({
    path: `${PATHS.BLOG.path}/${slug}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME}` },
    description: seo?.description || excerpt,
    image: image?.url,
    openGraph: { type: 'article' },
  })
}
