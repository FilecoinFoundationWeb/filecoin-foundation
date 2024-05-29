import { BlogPostHeader } from '@/components/BlogPostHeader'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getBlogPostData } from '@/utils/getBlogPostData'
import { generateBlogPostStructuredData } from '@/utils/structuredData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)

  return createMetadata({
    seo: data.seo,
    title: data.title,
    description: data.description,
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)
  const { title, image, content, publishedOn, category } = data

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateBlogPostStructuredData(data)}
      />
      <div className="m-auto max-w-2xl space-y-16">
        <BlogPostHeader
          title={title}
          image={image}
          publishedOn={publishedOn}
          category={category}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
      </div>
    </PageLayout>
  )
}
