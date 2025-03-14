import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { BlogPostHeader } from '@filecoin-foundation/ui/BlogPostHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { MarkdownContent } from '@/components/MarkdownContent'

import { getBlogPostData } from '../utils/getBlogPostData'

import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params
  const data = await getBlogPostData(slug)

  const { title, image, content, publishedOn, category } = data

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <ArticleLayout>
        <BlogPostHeader
          title={title}
          publishedOn={publishedOn}
          category={getCategoryLabel({
            collectionName: 'blog_posts',
            category,
          })}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />
        <MarkdownContent>{content}</MarkdownContent>
        <ShareArticle
          articleTitle={title}
          path={`${PATHS.BLOG.path}/${slug}`}
          baseUrl={BASE_URL}
          sectionTitle="Share Post"
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params
  const { title, description } = await getBlogPostData(slug)

  return createMetadata({
    metaTitle: `${title} | FFDW`,
    metaDescription: description,
    path: `${PATHS.BLOG.path}/${slug}`,
    overrideTitle: true,
  })
}
