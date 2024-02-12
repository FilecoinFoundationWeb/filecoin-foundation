import { WebPage, WithContext } from 'schema-dts'

import PageHeader from '@/components/PageHeader'
import StructuredDataScript from '@/components/StructuredDataScript'

import { BlogPostData } from '@/types/blogPostTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS, CONTENT_PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import BlogClient from './BlogClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.BLOG)

const posts: BlogPostData[] = getMarkdownData(
  CONTENT_PATHS.BLOG.POSTS as string
)

const blogPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  path: PATHS.BLOG,
  description: seo.description,
})

const blogPageStructuredData: WithContext<WebPage> = {
  ...blogPageBaseData,
  publisher: baseOrganizationSchema,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: posts.slice(0, 5).map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        name: post.title,
        description: post.f_description,
        image: post.f_image ? [post.f_image.url] : undefined,
        url: `${BASE_URL}${PATHS.BLOG}/${post.slug}`,
      },
    })),
  },
}

export default function Blog() {
  return (
    <>
      <StructuredDataScript structuredData={blogPageStructuredData} />
      <PageHeader title={title} description={description} />

      <div>
        <BlogClient posts={posts} />
      </div>
    </>
  )
}
