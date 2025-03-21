'use client'

import { useSearchParams } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  CATEGORY_KEY,
  PAGE_KEY,
  SEARCH_KEY,
  SORT_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { BookOpen } from '@phosphor-icons/react'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@/constants/filterConstants'
import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { entryMatchesCategoryQuery } from '@/utils/filterUtils'
import { getCategoryLabel } from '@/utils/getCategoryLabel'
import { getSortOptions } from '@/utils/getSortOptions'

import { useFilter } from '@/hooks/useFilter'
import { useListboxOptions } from '@/hooks/useListboxOptions'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { Sort } from '@/components/Sort'

import { blogSortConfigs } from '../constants/sortConfigs'
import type { BlogPost } from '../types/blogPostType'

type BlogContentProps = {
  posts: Array<BlogPost>
}

export function BlogContent({ posts }: BlogContentProps) {
  const sortOptions = getSortOptions(blogSortConfigs)
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: posts,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    sortQuery: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: blogSortConfigs,
  })

  const { filteredEntries } = useFilter({
    entries: sortedResults,
    filterQuery: normalizeQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
  })

  const { optionsWithCount: categoryOptionsWithCount } = useListboxOptions({
    collectionName: 'blog_posts',
    fieldName: 'category',
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
    entries: searchResults,
  })

  return (
    <FilterContainer>
      <FilterContainer.ResultsAndCategory
        category={<CategoryFilter options={categoryOptionsWithCount} />}
      />
      <FilterContainer.MainWrapper>
        <FilterContainer.DesktopFilters
          searchComponent={<Search query={searchQuery} />}
          sortComponent={
            <Sort
              query={sortQuery}
              options={sortOptions}
              defaultQuery={defaultSortQuery}
            />
          }
        />

        <FilterContainer.MobileFiltersAndResults
          searchComponent={<Search query={searchQuery} />}
          filterComponents={[
            <CategoryFilter
              key="category"
              options={categoryOptionsWithCount}
            />,
          ]}
          sortComponent={
            <Sort
              query={sortQuery}
              options={sortOptions}
              defaultQuery={defaultSortQuery}
            />
          }
        />
        <FilterContainer.ContentWrapper>
          {filteredEntries.length === 0 ? (
            <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
          ) : (
            <>
              <CardGrid as="section" cols="smTwo">
                {paginatedResults.map((post, i) => {
                  const {
                    slug,
                    category,
                    title,
                    description,
                    image,
                    publishedOn,
                  } = post

                  const isFirstTwoImages = i < 2
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
                        icon: {
                          component: BookOpen,
                        },
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
              <FilterContainer.PaginationWrapper>
                <Pagination pageCount={pageCount} currentPage={currentPage} />
              </FilterContainer.PaginationWrapper>
            </>
          )}
        </FilterContainer.ContentWrapper>
      </FilterContainer.MainWrapper>
    </FilterContainer>
  )
}
