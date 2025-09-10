'use client'

import { useSearchParams } from 'next/navigation'

import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { CardGrid } from '@/components/CardGrid'

import { useCategoryState } from '../hooks/useCategoryState'
import type { BlogPostTinaCMS } from '../types/blogPostType'
import { postMatchesCategory } from '../utils/postMatchesCategory'

import { BlogCard } from './BlogCard'
import { BlogCategoryFilter } from './BlogCategoryFilter'

type BlogPostListProps = {
  posts: Array<BlogPostTinaCMS>
}

const BLOG_POSTS_PER_PAGE = 6
const PAGINATION_INDEX_MAX_RANGE = 6

export function BlogPostList({ posts }: BlogPostListProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams?.entries() ?? [])

  const [selectedCategory] = useCategoryState()

  const { filteredEntries } = useFilter({
    entries: posts,
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
      <BlogCategoryFilter />

      <CardGrid as="ul" variant="mdTwoLgThreeWide">
        {paginatedResults.map((post: BlogPostTinaCMS) => {
          const { title, slug, excerpt, categories, image, author, date } = post

          return (
            <BlogCard
              key={slug}
              title={title}
              slug={slug}
              description={excerpt}
              author={author}
              date={date}
              tags={categories}
              image={
                image?.url
                  ? {
                      src: image.url,
                      alt: title,
                    }
                  : undefined
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
