import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'
import { CATEGORY_KEY, PAGE_KEY } from '@/constants/searchParams'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { entryMatchesCategoryQuery } from '@/utils/filterUtils'
import { findOrThrow } from '@/utils/findOrThrow'
import { getSortOptions } from '@/utils/getSortOptions'
import { normalizeQueryParam } from '@/utils/queryUtils'

import { useFilter } from '@/hooks/useFilter'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { Pagination } from '@/components/Pagination'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'

import { CategoryFilters } from '../components/CategoryFilters'
import { CategoryFiltersSlider } from '../components/CategoryFiltersSlider'
import { ecosystemProjectsSortConfigs } from '../constants/sortConfigs'
import { useEcosystemCategoryTree } from '../hooks/useEcosystemCategoryTree'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { getEcosystemProjectsData } from '../utils/getEcosystemProjectData'
import { parseCategoryQueryParam } from '../utils/parseCategoryQueryParam'

type EcosystemExplorerContentProps = {
  searchParams: NextServerSearchParams
}

const ecosystemProjects = getEcosystemProjectsData()
const categories = getEcosystemCMSCategories()
const sortOptions = getSortOptions(ecosystemProjectsSortConfigs)

export function EcosystemExplorerContent({
  searchParams,
}: EcosystemExplorerContentProps) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    searchParams,
    entries: searchResults,
    configs: ecosystemProjectsSortConfigs,
    defaultsTo: 'a-z',
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
    paginationQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
  })

  return (
    <FilterContainer>
      <FilterContainer.ResultsAndCategory
        gapSize="wide"
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
            <NoSearchResultsMessage />
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
