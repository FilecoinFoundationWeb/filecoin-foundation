import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { MarkdownContent } from '@/components/MarkdownContent'
import { Title } from '@/components/PageHeader/Title'

import { getBlogPostData } from '../utils/getBlogPostData'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const data = await getBlogPostData(slug)
  const { title, content } = data

  return (
    <>
      <Title backgroundVariant="light">{title}</Title>

      <MarkdownContent>{content}</MarkdownContent>
    </>
  )
}
