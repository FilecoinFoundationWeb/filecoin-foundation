import type { SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { Navigation } from '@/components/Navigation/Navigation'

import PostView from './components/PostView'

import client from '@/tina/__generated__/client'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const relativePath = slug.endsWith('.en') ? `${slug}.md` : `${slug}.en.md`
  const result = await client.queries.post({
    relativePath,
  })

  return (
    <>
      <Navigation backgroundVariant="light" />
      <PostView {...result} />
    </>
  )
}
