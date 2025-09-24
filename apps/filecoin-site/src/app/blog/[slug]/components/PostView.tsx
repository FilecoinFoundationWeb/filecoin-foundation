'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { BlogPostContainer } from '../../components/BlogPostContainer'
import { BlogPostHeader } from '../../components/BlogPostHeader'
import { generateStructuredData } from '../utils/generateStructuredData'

import { transformBlogPostData } from '@/blog/utils/getBlogPostData'
import type { Post, PostQuery } from '@/tina/__generated__/types'

type PostViewProps = {
  data: PostQuery
  variables: {
    relativePath: string
  }
  query: string
}

export default function PostView(props: PostViewProps) {
  const { data } = useTina(props)
  const post = transformBlogPostData(data.post as Post)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(post)} />

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
            {post.body && <TinaMarkdown content={post.body} />}
          </div>
        </BlogPostContainer>
      </div>
    </>
  )
}
