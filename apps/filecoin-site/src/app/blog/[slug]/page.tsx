import PostView from './components/PostView'

import client from '@/tina/__generated__/client'

type BlogPostProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const result = await client.queries.post({
    relativePath: `${slug}.md`,
  })

  return <PostView {...result} />
}
