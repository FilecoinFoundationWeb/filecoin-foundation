import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { BlogPostHeader } from '@filecoin-foundation/ui/BlogPostHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import configData from '@/data/cmsConfigSchema.json'
import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { ShareArticle } from '@/components/ShareArticle'

import { getBlogPostData, getBlogPostsData } from '../utils/getBlogPostData'

import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params
  const data = await getBlogPostData(slug)

  const { title, image, content, publishedOn, category, addTableOfContents } =
    data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <ArticleLayout>
        <BlogPostHeader
          title={title}
          publishedOn={publishedOn}
          category={category}
          configData={configData}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />

        <MarkdownContent addTableOfContents={addTableOfContents}>
          {content}
        </MarkdownContent>

        <ShareArticle
          articleTitle={title}
          path={`${PATHS.BLOG.path}/${slug}`}
          sectionTitle="Share Post"
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const entries = await getBlogPostsData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params
  const data = await getBlogPostData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image?.src || graphicsData.blog.data.src,
    },
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}
