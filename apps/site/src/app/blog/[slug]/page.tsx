import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { ShareArticle } from '@/components/ShareArticle'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getBlogPostData } from '../utils/getBlogPostData'

import { BlogPostHeader } from './components/BlogPostHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: BlogPostProps) {
  const { slug } = await props.params
  const data = getBlogPostData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image.src,
    },
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params
  const data = getBlogPostData(slug)
  const { title, image, content, publishedOn, category } = data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="m-auto max-w-2xl space-y-16">
        <BlogPostHeader
          title={title}
          image={image}
          publishedOn={publishedOn}
          category={category}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
        <ShareArticle
          articleTitle={title}
          path={`${PATHS.BLOG.path}/${slug}`}
          sectionTitle="Share Post"
        />
      </div>
    </PageLayout>
  )
}
