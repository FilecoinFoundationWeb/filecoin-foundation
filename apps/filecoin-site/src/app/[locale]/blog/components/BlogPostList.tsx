'use client'

import { useSearchParams } from 'next/navigation'

import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { EmptyStateCard } from '@filecoin-foundation/ui-filecoin/EmptyStateCard'
import {
  normalizeSearchParams,
  Search,
  useSearch,
} from '@filecoin-foundation/ui-filecoin/Search'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
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
    searchQuery: normalizeSearchParams(searchParams),
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
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center lg:gap-10 xl:gap-20">
          <div className="max-w flex-1">
            <Search />
          </div>

          <div className="flex items-baseline gap-5">
            <div className="flex-1">
              <BlogCategoryFilter />
            </div>
            <div className="block sm:hidden">
              <RSSFeed />
            </div>
          </div>

          <div className="hidden sm:block">
            <RSSFeed />
          </div>
        </div>
        <SectionDivider />
      </div>

      {filteredEntries.length > 0 ? (
        <>
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
            <Pagination
              pageCount={pageCount}
              numberRange={PAGINATION_INDEX_MAX_RANGE}
            />
          </div>
        </>
      ) : (
        <EmptyStateCard
          icon={MagnifyingGlassIcon}
          title="No results found"
          titleTag="h3"
          description="Try changing your search query."
        />
      )}
    </div>
  )
}
