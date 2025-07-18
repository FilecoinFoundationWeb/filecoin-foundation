import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { MarkdownContent } from '@/components/MarkdownContent'
import { Section } from '@/components/Section'

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
  const { image, categories, author, publishedOn, title, content } = data

  return (
    <Section backgroundVariant="light">
      <div className="space-y-8 pb-30">
        <BlogPostHeader
          image={{ url: image?.url || headerImage.src }}
          categories={categories}
          author={author}
          date={publishedOn}
          title={title}
          slug={slug}
        />

        <BlogPostContainer>
          <MarkdownContent>{content}</MarkdownContent>
        </BlogPostContainer>
      </div>
    </Section>
  )
}
