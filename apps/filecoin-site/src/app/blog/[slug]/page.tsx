import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageSection } from '@/components/PageSection'

import { BlogPostHeader } from '../components/BlogPostHeader'
import { Categories } from '../components/Categories'
import { getBlogPostData } from '../utils/getBlogPostData'

import headerImage from '@/assets/images/042425-PDP_BlogHeader.webp'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const data = await getBlogPostData(slug)
  const { title, content } = data

  return (
    <PageSection backgroundVariant="light">
      <BlogPostHeader image={{ src: headerImage.src, alt: '' }}>
        <Categories categories={data.categories} />
        <Categories categories={data.categories} />
      </BlogPostHeader>
      <MarkdownContent>{content}</MarkdownContent>
    </PageSection>
  )
}
