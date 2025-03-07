'use client'

import { useSearchParams } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
// import { getCategoryLabel } from '@filecoin-foundation/utils/categoryUtils'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import type { BlogPost } from '@filecoin-foundation/utils/types/blogPostType'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Card } from '@/components/Card'

type BlogContentProps = {
  posts: Array<BlogPost>
}

export function BlogContent({ posts }: BlogContentProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: posts,
    searchBy: ['title', 'description'],
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
    entriesPerPage: 12,
  })

  return (
    <>
      <Search query={searchQuery} />

      <CardGrid cols="smTwo">
        {paginatedResults.map((post, i) => {
          const { slug, category, title, description, image, publishedOn } =
            post

          const isFirstTwoImages = i < 2
          // const categoryLabel = getCategoryLabel({
          //   collectionName: 'blog_posts',
          //   category,
          //   configData,
          // })
          const categoryLabel = category

          return (
            <Card
              key={slug}
              title={title}
              description={{ text: description, isClamped: true }}
              metaData={[formatDate(publishedOn)]}
              tags={[{ text: categoryLabel }]}
              cta={{
                href: `${PATHS.BLOG.path}/${slug}`,
                text: 'Read Post',
                icon: BookOpen,
              }}
              image={{
                ...(image || graphicsData.imageFallback.data),
                alt: '',
                priority: isFirstTwoImages,
                objectFit: 'cover',
                sizes: buildImageSizeProp({
                  startSize: '100vw',
                  sm: '350px',
                  md: '470px',
                  lg: '360px',
                }),
              }}
            />
          )
        })}
      </CardGrid>

      <Pagination pageCount={pageCount} currentPage={currentPage} />
    </>
  )
}
