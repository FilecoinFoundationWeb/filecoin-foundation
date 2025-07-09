import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { MarkdownContent } from '@/components/MarkdownContent'

import { BlogPostContainer } from '../components/BlogPostContainer'
import { BlogPostHeader } from '../components/BlogPostHeader'
import { getBlogPostData } from '../utils/getBlogPostData'

import headerImage from '@/assets/images/042425-PDP_BlogHeader.webp'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const data = await getBlogPostData(slug)
  const { content, image, categories, date, title } = data

  return (
    <>
      <BlogPostHeader
        image={image?.url || headerImage.src}
        categories={categories}
        author="Emily Vaughan"
        date={date || new Date()}
        title={title}
      />
      <BlogPostContainer>
        <MarkdownContent>{content}</MarkdownContent>
      </BlogPostContainer>
    </>
  )
}
