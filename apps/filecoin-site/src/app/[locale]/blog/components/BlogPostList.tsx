'use client'

import { useSearchParams } from 'next/navigation'

import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'


import { SectionDivider } from '@/components/SectionDivider'

import { useCategoryState } from '../hooks/useCategoryState'
import type { BlogPost } from '../types/blogPostType'
import { postMatchesCategory } from '../utils/postMatchesCategory'

import { BlogCard } from './BlogCard'
import { BlogCategoryFilter } from './BlogCategoryFilter'
import { RSSFeed } from './RSSFeed'

type BlogPostListProps = {
  posts: Array<BlogPost>
}

const BLOG_POSTS_PER_PAGE = 12
const PAGINATION_INDEX_MAX_RANGE = 6

export function BlogPostList({ posts }: BlogPostListProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const [selectedCategory] = useCategoryState()

  const { searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: posts,
    searchBy: ['title', 'excerpt'],
  })

  const { filteredEntries } = useFilter({
    entries: searchResults,
    filterQuery: selectedCategory,
    filterFn: postMatchesCategory,
  })

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
    entriesPerPage: BLOG_POSTS_PER_PAGE,
  })

  return (
    <div className="space-y-15">
      <div className="flex flex-col gap-10">
        <div className="self-end">
          <RSSFeed />
        </div>

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex-1 lg:order-last lg:max-w-md">
            <Search />
          </div>
          <div className="lg:order-first">
            <BlogCategoryFilter />
          </div>
        </div>

        <SectionDivider />
      </div>

      <CardGrid as="ul" variant="mdTwoLgThreeWide">
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
        {filteredEntries.length > 0 ? (
          <Pagination
            pageCount={pageCount}
            numberRange={PAGINATION_INDEX_MAX_RANGE}
          />
        ) : (
          <p className="text-center text-lg">No posts in this category</p>
        )}
      </div>
    </div>
  )
}
