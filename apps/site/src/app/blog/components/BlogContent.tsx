import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@/constants/filterConstants'
import { PATHS } from '@/constants/paths'
import { CATEGORY_KEY, PAGE_KEY } from '@/constants/searchParams'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'
import { entryMatchesCategoryQuery } from '@/utils/filterUtils'
import { getSortOptions } from '@/utils/getSortOptions'
import { normalizeQueryParam } from '@/utils/queryUtils'

import { useFilter } from '@/hooks/useFilter'
import { useListboxOptions } from '@/hooks/useListboxOptions'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'

import { blogSortConfigs } from '../constants/sortConfigs'
import { getBlogPostsData } from '../utils/getBlogPostData'
import { getMetaData } from '../utils/getMetaData'

type BlogContentProps = {
  searchParams: NextServerSearchParams
  posts: ReturnType<typeof getBlogPostsData>
  sortOptions: ReturnType<typeof getSortOptions>
}

export function BlogContent({
  searchParams,
  posts,
  sortOptions,
}: BlogContentProps) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: posts,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    searchParams,
    entries: searchResults,
    configs: blogSortConfigs,
    defaultsTo: 'newest',
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
            <NoSearchResultsMessage />
          ) : (
            <>
              <CardGrid cols="smTwo">
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
                      title={title}
                      description={description}
                      textIsClamped={true}
                      metaData={getMetaData(publishedOn)}
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
