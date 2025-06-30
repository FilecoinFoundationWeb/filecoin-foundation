import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  return <h1>Blog Post: {slug}</h1>
}
