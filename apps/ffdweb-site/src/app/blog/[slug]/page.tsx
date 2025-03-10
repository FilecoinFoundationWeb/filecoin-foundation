import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { BlogPostHeader } from '@filecoin-foundation/ui/BlogPostHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { MarkdownContent } from '@/components/MarkdownContent'

import { getBlogPostData } from '../utils/getBlogPostData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params
  const data = await getBlogPostData(slug)

  const { title, image, content, publishedOn, category } = data

  return (
    <PageLayout gap="large">
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
    overrideTitle: true,
  })
}
