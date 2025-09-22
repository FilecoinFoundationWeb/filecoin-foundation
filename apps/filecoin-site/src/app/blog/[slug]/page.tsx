import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'
import { Section } from '@/components/Section'

import { BlogPostContainer } from '../components/BlogPostContainer'
import { BlogPostHeader } from '../components/BlogPostHeader'
import { getBlogPostDataWithTina } from '../utils/getBlogPostDataWithTina'

import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const post = await getBlogPostDataWithTina(slug)

  const { image, categories, author, publishedOn, title, body } = post

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(post)} />
      <Navigation backgroundVariant="light" />
      <Section backgroundVariant="light">
        <div className="space-y-8 pb-30">
          <BlogPostHeader
            image={image}
            categories={categories}
            author={author}
            date={publishedOn}
            title={title}
            slug={slug}
          />

          <BlogPostContainer>
            <div className="prose">
              <TinaMarkdown
                content={body}
                components={tinaField(post, 'body')}
              />
            </div>
          </BlogPostContainer>
        </div>
      </Section>
    </>
  )
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params
  const { image, seo, title } = await getBlogPostDataWithTina(slug)

  return createMetadata({
    path: `${PATHS.BLOG.path}/${slug}`,
    title: { absolute: `${title} | ${ORGANIZATION_NAME}` },
    description: seo?.description || '',
    image: image?.url || graphicsData.fallback.data.src,
    openGraph: { type: 'article' },
  })
}
