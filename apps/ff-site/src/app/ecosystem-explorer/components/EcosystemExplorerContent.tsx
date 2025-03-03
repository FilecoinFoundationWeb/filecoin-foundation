import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  CATEGORY_KEY,
  PAGE_KEY,
  SEARCH_KEY,
  SORT_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { entryMatchesCategoryQuery } from '@/utils/filterUtils'
import { findOrThrow } from '@/utils/findOrThrow'
import { getSortOptions } from '@/utils/getSortOptions'

import { useFilter } from '@/hooks/useFilter'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FilterContainer } from '@/components/FilterContainer'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'

import { CategoryFilters } from '../components/CategoryFilters'
import { CategoryFiltersSlider } from '../components/CategoryFiltersSlider'
import { ecosystemProjectsSortConfigs } from '../constants/sortConfigs'
import { useEcosystemCategoryTree } from '../hooks/useEcosystemCategoryTree'
import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { parseCategoryQueryParam } from '../utils/parseCategoryQueryParam'

type EcosystemExplorerContentProps = {
  searchParams: QueryParams
  ecosystemProjects: Array<EcosystemProject>
}

const categories = getEcosystemCMSCategories()
const sortOptions = getSortOptions(ecosystemProjectsSortConfigs)

export function EcosystemExplorerContent({
  searchParams,
  ecosystemProjects,
}: EcosystemExplorerContentProps) {
  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    sortQuery: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: ecosystemProjectsSortConfigs,
  })

  const { filteredEntries } = useFilter({
    entries: sortedResults,
    filterQuery: parseCategoryQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const categoryTree = useEcosystemCategoryTree({
    entries: sortedResults,
    categories,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
  })

  return (
    <FilterContainer>
      <FilterContainer.ResultsAndCategory
        results={<ResultsAndReset results={filteredEntries.length} />}
        category={<CategoryFilters categories={categoryTree} />}
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
            <CategoryFiltersSlider key="category" categories={categoryTree} />,
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
              <CardGrid cols="smTwo">
                {paginatedResults.map((project, i) => {
                  const {
                    slug,
                    title,
                    description,
                    image,
                    category: categoryId,
                  } = project

                  const isFirstTwoImages = i < 2
                  const category = findOrThrow(
                    categories,
                    ({ value }) => value === categoryId,
                  )

                  return (
                    <Card
                      key={slug}
                      title={title}
                      description={description}
                      tags={[{ text: category.label }]}
                      cta={{
                        href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
                        text: 'Learn More',
                        icon: BookOpen,
                      }}
                      image={{
                        ...(image || graphicsData.imageFallback.data),
                        alt: '',
                        objectFit: 'contain',
                        padding: Boolean(image),
                        priority: isFirstTwoImages,
                        sizes: buildImageSizeProp({
                          startSize: '100vw',
                          sm: '320px',
                          md: '440px',
                          lg: '280px',
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
