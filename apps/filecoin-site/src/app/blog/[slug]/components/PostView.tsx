'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { BlogPostContainer } from '../../components/BlogPostContainer'
import { BlogPostHeader } from '../../components/BlogPostHeader'

import { transformPost } from '@/blog/utils/getBlogPostDataFromTina'
import type { Post, PostQuery } from '@/tina/__generated__/types'

export default function PostView(props: {
  data: PostQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const post = transformPost(data.post as Post)

  return (
    <div className="space-y-8 pb-30">
      <BlogPostHeader
        image={post.image}
        categories={post.categories}
        author={post.author}
        date={post.publishedOn}
        title={post.title}
        slug={post.slug}
      />

      <BlogPostContainer>
        <div className="prose">
          <TinaMarkdown content={post.body} />
        </div>
      </BlogPostContainer>
    </div>
  )
}
