'use client'

import { useSearchParams } from 'next/navigation'

import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { DEFAULT_CATEGORY_FILTER_OPTION } from '@filecoin-foundation/hooks/useFilter/constants'
import { entryMatchesCategoryQuery } from '@filecoin-foundation/hooks/useFilter/utils'
import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { FilterListbox } from '@filecoin-foundation/ui/FilterListbox'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  CATEGORY_KEY,
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/getCategoryLabel'
import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'

import type { BlogPost } from '../types/blogPostType'

type BlogContentProps = {
  posts: Array<BlogPost>
}

const { options: topicOptions } = getCMSFieldOptionsAndValidIds({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

export function BlogContent({ posts }: BlogContentProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())
  const sortedPosts = sortPostsByDateDesc(posts)

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: sortedPosts,
    searchBy: ['title', 'description'],
  })

  const { filteredEntries } = useFilter({
    entries: searchResults,
    filterQuery: normalizeQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const [categoryOption, setCategoryOption] = useListboxQueryState({
    key: CATEGORY_KEY,
    options: topicOptions,
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
    entriesPerPage: 9,
  })

  return (
    <FilterContainer
      hasResults={Boolean(paginatedResults.length)}
      bottom={<Pagination pageCount={pageCount} currentPage={currentPage} />}
      top={{
        main: <Search query={searchQuery} />,
        secondary: (
          <FilterListbox
            selected={categoryOption}
            options={[DEFAULT_CATEGORY_FILTER_OPTION, ...topicOptions]}
            onChange={setCategoryOption}
          />
        ),
      }}
    >
      <CardGrid as="section" cols="smTwoLgThree">
        {paginatedResults.map((post, i) => {
          const { slug, category, title, description, image, publishedOn } =
            post

          const isFirstTwoImages = i < 3
          const categoryLabel = getCategoryLabel({
            collectionName: 'blog_posts',
            category,
          })

          return (
            <Card
              key={slug}
              as="article"
              title={title}
              description={{ text: description, isClamped: true }}
              metaData={[formatDate(publishedOn)]}
              tags={[{ text: categoryLabel }]}
              cta={{
                href: `${PATHS.BLOG.path}/${slug}`,
                text: 'Read Post',
                icon: CARET_RIGHT,
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
    </FilterContainer>
  )
}
