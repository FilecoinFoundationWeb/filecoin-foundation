import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { Title } from '@/components/PageHeader/Title'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  return <Title backgroundVariant="light">{slug}</Title>
}
