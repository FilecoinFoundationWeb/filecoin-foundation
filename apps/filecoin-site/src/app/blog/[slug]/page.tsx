import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { Container } from '@/components/Container'
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
  const { image, categories, author, date, title, content } = data

  return (
    <div className="space-y-8 pb-30">
      <BlogPostHeader
        image={image?.url || headerImage.src}
        categories={categories}
        author={author}
        date={date || new Date()}
        title={title}
      />
      <Container>
        <BlogPostContainer>
          <MarkdownContent>{content}</MarkdownContent>
        </BlogPostContainer>
      </Container>
    </div>
  )
}
