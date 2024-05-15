import { useMemo } from 'react'

import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'
import { WebPage, WithContext } from 'schema-dts'

import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSortQuery } from '@/hooks/useSortQuery'

import { BlogSort } from '@/components/BlogSort'
import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { StructuredDataScript } from '@/components/StructuredDataScript'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

import { type BlogPostData } from '@/types/blogPostTypes'
import { type NextServerSearchParams } from '@/types/searchParams'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getBlogPostsData } from '@/utils/getBlogPostData'
import { sortEntriesByDate } from '@/utils/sortEntriesByDate'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS } from '@/constants/paths'
import { PAGE_KEY } from '@/constants/searchParams'
import { BASE_URL } from '@/constants/siteMetadata'

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

const POSTS_PER_PAGE = 20

export default function Blog({ searchParams }: Props) {
  if (!featuredPost) {
    throw new Error('Featured post not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    data: posts,
  })

  const { sortQuery } = useSortQuery({ searchParams })

  const sortedAndFilteredPosts = useMemo(() => {
    return sortEntriesByDate({
      entries: searchResults,
      sortOption: sortQuery,
      dateField: 'publishedOn',
    })
  }, [searchResults, sortQuery])

  const { currentPage, pageCount } = usePagination({
    totalEntries: sortedAndFilteredPosts.length,
    entriesPerPage: POSTS_PER_PAGE,
    pageQuery: searchParams[PAGE_KEY],
  })

  const firstPostIndex = (currentPage - 1) * POSTS_PER_PAGE
  const lastPostIndex = currentPage * POSTS_PER_PAGE

  const paginatedPosts = useMemo(() => {
    return sortedAndFilteredPosts.slice(firstPostIndex, lastPostIndex)
  }, [firstPostIndex, lastPostIndex, sortedAndFilteredPosts])

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
        <div className="flex w-full justify-end gap-3">
          <Search query={searchQuery} />
          <BlogSort />
        </div>

        {sortedAndFilteredPosts.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <>
            <CardLayout type="blogPost">
              {paginatedPosts.map((post) => {
                const {
                  slug,
                  category,
                  title,
                  description,
                  image,
                  publishedOn,
                } = post

                return (
                  <Card
                    key={slug}
                    tag={category}
                    title={title}
                    description={description}
                    image={{ url: image?.url, alt: image?.alt }}
                    textIsClamped={true}
                    metaData={publishedOn ? [formatDate(publishedOn)] : []}
                    cta={{
                      href: `${PATHS.BLOG.path}/${slug}`,
                      text: 'Read Post',
                      icon: BookOpen,
                    }}
                  />
                )
              })}
            </CardLayout>

            <div className="mx-auto mt-1 w-full sm:mt-6 sm:w-auto">
              <NoSSRPagination
                pageCount={pageCount}
                currentPage={currentPage}
              />
            </div>
          </>
        )}
      </PageSection>
    </PageLayout>
  )
}
