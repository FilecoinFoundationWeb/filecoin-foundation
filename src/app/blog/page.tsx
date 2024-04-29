import { WebPage, WithContext } from 'schema-dts'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { BlogPostData } from '@/types/blogPostTypes'
import { NextServerSearchParams } from '@/types/searchParams'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getBlogPostsData } from '@/utils/getBlogPostData'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS } from '@/constants/paths'
import { PAGE_KEY, SEARCH_KEY } from '@/constants/searchParams'
import { BASE_URL } from '@/constants/siteMetadata'

import { BlogList } from './BlogList'

const { featured_post: featuredPostSlug, seo } = attributes

export const metadata = createMetadata(seo, PATHS.BLOG.path)

const posts = getBlogPostsData()
const featuredPost = posts.find((post) => post.slug === featuredPostSlug)

const blogPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  path: PATHS.BLOG.path,
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
        description: post.description,
        image: post.image?.url,
        url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
      },
    })),
  },
}

function getMetaDataContent(post: BlogPostData) {
  if (!post.publishedOn) {
    return []
  }

  const { fields } = getCollectionConfig('blog')
  const categoryOptions = getCMSFieldOptions(fields, 'category')
  const categoryLabel = categoryOptions.find(
    (option) => option.value === post.category,
  )?.label

  const metaDataContent = [formatDate(post.publishedOn)]

  if (categoryLabel) {
    metaDataContent.push(categoryLabel)
  }

  return metaDataContent
}

type Props = {
  searchParams: NextServerSearchParams
}

export default function Blog({ searchParams }: Props) {
  if (!featuredPost) {
    throw new Error('Featured post not found')
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={blogPageStructuredData} />
      <PageHeader
        isFeatured
        title={featuredPost.title}
        description={featuredPost.description}
        metaData={getMetaDataContent(featuredPost)}
        image={featuredPost.image}
        cta={{
          href: `${PATHS.BLOG.path}/${featuredPostSlug}`,
          text: 'Read Featured Post',
        }}
      />

      <PageSection
        kicker="Blog"
        title="Filecoin Ecosystem Updates"
        description="Read the latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
      >
        <BlogList
          posts={posts}
          pageQuery={searchParams[PAGE_KEY]}
          searchQuery={searchParams[SEARCH_KEY]}
        />
      </PageSection>
    </PageLayout>
  )
}
