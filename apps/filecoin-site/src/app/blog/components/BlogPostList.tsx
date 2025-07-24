'use client'

import { useSearchParams } from 'next/navigation'

import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { CardGrid } from '@/components/CardGrid'

import type { BlogPost } from '../types/blogPostType'

import { BlogCard } from './BlogCard'

type BlogPostListProps = {
  posts: Array<BlogPost>
}

const BLOG_POSTS_PER_PAGE = 6
const PAGINATION_INDEX_MAX_RANGE = 6

export function BlogPostList({ posts }: BlogPostListProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: posts,
    entriesPerPage: BLOG_POSTS_PER_PAGE,
  })

  return (
    <>
      <CardGrid as="ul" variant="mdTwo">
        {paginatedResults.map((post: BlogPost) => {
          const {
            title,
            slug,
            excerpt,
            categories,
            image,
            author,
            publishedOn,
          } = post

          return (
            <BlogCard
              key={slug}
              title={title}
              slug={slug}
              description={excerpt}
              author={author}
              date={publishedOn}
              tags={categories}
              image={
                image && {
                  src: image.url,
                  alt: title,
                }
              }
            />
          )
        })}
      </CardGrid>

      <div className="mx-auto mt-20 max-w-2xl">
        <Pagination
          pageCount={pageCount}
          numberRange={PAGINATION_INDEX_MAX_RANGE}
        />
      </div>
    </>
  )
}
