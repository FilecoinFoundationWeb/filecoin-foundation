import PageHeader from '@/components/PageHeader'

import { BlogPostData } from '@/types/blogPostTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS, CONTENT_PATHS } from '@/constants/paths'

import BlogClient from './BlogClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.BLOG)

export default function BlogPage() {
  const posts: BlogPostData[] = getMarkdownData(
    CONTENT_PATHS.BLOG.POSTS as string
  )

  return (
    <>
      <PageHeader title={title} description={description} />
      <div>
        <BlogClient posts={posts} />
      </div>
    </>
  )
}
