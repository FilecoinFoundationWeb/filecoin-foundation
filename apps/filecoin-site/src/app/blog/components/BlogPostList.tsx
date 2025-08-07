'use client'

import { useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { useQueryState, parseAsString } from 'nuqs'

import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { PAGE_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { CardGrid } from '@/components/CardGrid'

import {
  DEFAULT_CATEGORY_KEY,
  type BlogCategoryKey,
} from '../data/blogCategories'
import type { BlogPost } from '../types/blogPostType'
import type { AllowedCategory } from '../types/categoriesType'

import { BlogCard } from './BlogCard'
import { CategoryFilter } from './CategoryFilter'

type BlogPostListProps = {
  posts: Array<BlogPost>
}

const BLOG_POSTS_PER_PAGE = 6
const PAGINATION_INDEX_MAX_RANGE = 6
const URL_SEARCH_PARAM = 'category'

export function BlogPostList({ posts }: BlogPostListProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const [selectedCategory, setSelectedCategory] = useQueryState(
    URL_SEARCH_PARAM,
    parseAsString
      .withDefault(DEFAULT_CATEGORY_KEY)
      .withOptions({ shallow: false }),
  )

  const filteredPosts = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY_KEY) {
      return posts
    }

    return posts.filter((post) =>
      post.categories.includes(selectedCategory as AllowedCategory),
    )
  }, [posts, selectedCategory])

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredPosts,
    entriesPerPage: BLOG_POSTS_PER_PAGE,
  })

  return (
    <div className="space-y-15">
      <CategoryFilter
        selectedCategory={selectedCategory as BlogCategoryKey}
        setSelectedCategory={setSelectedCategory}
      />
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
    </div>
  )
}
