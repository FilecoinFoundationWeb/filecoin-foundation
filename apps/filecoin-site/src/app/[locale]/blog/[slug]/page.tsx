import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageSection } from '@/components/PageSection'

import { getBlogPostData, getBlogPostsData } from '../utils/getBlogPostData'

import { BlogPostHeader } from './components/BlogPostHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const data = await getBlogPostData(slug, 'en')
  const { image, categories, author, publishedOn, title, content } = data

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="medium">
        <div className="mx-auto max-w-3xl">
          <BlogPostHeader
            title={title}
            categories={categories}
            author={author}
            date={publishedOn}
            slug={slug}
            image={{
              src: image?.url || graphicsData.fallback.data.src,
              alt: '',
            }}
          />

          <MarkdownContent>{content}</MarkdownContent>
        </div>
      </PageSection>
    </>
  )
}

export async function generateStaticParams() {
  const entries = await getBlogPostsData('en')
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params
  const { image, seo, excerpt } = await getBlogPostData(slug, 'en')

  return createMetadata({
    path: `${PATHS.BLOG.path}/${slug}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME}` },
    description: seo?.description || excerpt,
    image: image?.url,
    openGraph: { type: 'article' },
  })
}
