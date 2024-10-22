import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getBlogPostData } from '../utils/getBlogPostData'

import { BlogPostHeader } from './components/BlogPostHeader'
import { SharePost } from './components/SharePost'
import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image?.src,
    },
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
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
        <SharePost title="Share post" postTitle={title} />
      </div>
    </PageLayout>
  )
}
