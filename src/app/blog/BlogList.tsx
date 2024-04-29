import { useMemo } from 'react'

import { usePagination } from '@/hooks/usePagination'

import { BlogSearchInput } from '@/components/BlogSearchInput'
import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { Pagination } from '@/components/Pagination'

import { BlogPostData } from '@/types/blogPostTypes'
import { NextServerSearchParams } from '@/types/searchParams'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

const POSTS_PER_PAGE = 20

type BlogListProps = {
  posts: BlogPostData[]
  pageQuery: NextServerSearchParams[string]
  searchQuery: NextServerSearchParams[string]
}

export function BlogList({ posts, pageQuery, searchQuery }: BlogListProps) {
  const cleanSearchQuery = searchQuery
    ? searchQuery.toString().toLowerCase()
    : ''

  const filteredAndSortedPosts = useMemo(() => {
    return posts
      .filter((post) => post.title.toLowerCase().includes(cleanSearchQuery))
      .sort((a, b) => {
        if (!a.publishedOn || !b.publishedOn) return 0

        return (
          new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
        )
      })
  }, [posts, cleanSearchQuery])

  const { currentPage, pageCount } = usePagination({
    totalEntries: filteredAndSortedPosts.length,
    entriesPerPage: POSTS_PER_PAGE,
    pageQuery,
  })

  const firstPostIndex = (currentPage - 1) * POSTS_PER_PAGE
  const lastPostIndex = currentPage * POSTS_PER_PAGE

  const paginatedPosts = useMemo(() => {
    return filteredAndSortedPosts.slice(firstPostIndex, lastPostIndex)
  }, [filteredAndSortedPosts, firstPostIndex, lastPostIndex])

  return (
    <>
      <BlogSearchInput searchQuery={cleanSearchQuery} />

      {filteredAndSortedPosts.length === 0 ? (
        <NoResultsMessage />
      ) : (
        <>
          <CardLayout type="blogPost">
            {paginatedPosts.map((post) => {
              const { image, title, description, slug, publishedOn } = post

              return (
                <Card
                  key={post.slug}
                  title={title}
                  description={description}
                  image={{ url: image?.url, alt: image?.alt }}
                  textIsClamped={true}
                  metaData={[
                    ...(publishedOn ? [formatDate(publishedOn)] : []),
                    ...(post.category ? [post.category] : []),
                  ]}
                  cta={{
                    href: `${PATHS.BLOG.path}/${slug}`,
                    text: 'Read Post',
                  }}
                />
              )
            })}
          </CardLayout>

          <div className="mx-auto mt-1 sm:mt-6">
            <Pagination pageCount={pageCount} currentPage={currentPage} />
          </div>
        </>
      )}
    </>
  )
}
