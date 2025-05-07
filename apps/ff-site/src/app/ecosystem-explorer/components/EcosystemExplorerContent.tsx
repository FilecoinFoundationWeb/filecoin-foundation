import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { useEntryView } from '@filecoin-foundation/hooks/useEntryView'
import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { entryMatchesCategoryQuery } from '@filecoin-foundation/hooks/useFilter/utils'
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
import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { getSortOptions } from '@/utils/getSortOptions'

import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Sort } from '@/components/Sort'

import { CategoryFilters } from '../components/CategoryFilters'
import { CategoryFiltersSlider } from '../components/CategoryFiltersSlider'
import { ecosystemProjectsViewConfigs } from '../constants/viewConfigs'
import { useEcosystemCategoryTree } from '../hooks/useEcosystemCategoryTree'
import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { parseCategoryQueryParam } from '../utils/parseCategoryQueryParam'

type EcosystemExplorerContentProps = {
  searchParams: QueryParams
  ecosystemProjects: Array<EcosystemProject>
}

const categories = getEcosystemCMSCategories()
const sortOptions = getSortOptions(ecosystemProjectsViewConfigs)

export function EcosystemExplorerContent({
  searchParams,
  ecosystemProjects,
}: EcosystemExplorerContentProps) {
  const { searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { viewResults } = useEntryView({
    query: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: ecosystemProjectsViewConfigs,
  })

  const { filteredEntries } = useFilter({
    entries: viewResults,
    filterQuery: parseCategoryQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const categoryTree = useEcosystemCategoryTree({
    entries: viewResults,
    categories,
  })

  const { pageCount, paginatedResults } = usePagination({
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
          searchComponent={<Search />}
          sortComponent={<Sort options={sortOptions} />}
        />

        <FilterContainer.MobileFiltersAndResults
          searchComponent={<Search />}
          sortComponent={<Sort options={sortOptions} />}
          filterComponents={[
            <CategoryFiltersSlider key="category" categories={categoryTree} />,
          ]}
        />
        <FilterContainer.ContentWrapper>
          {filteredEntries.length === 0 ? (
            <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
          ) : (
            <>
              <CardGrid as="section" cols="smTwo">
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
                      as="article"
                      description={{ text: description }}
                      tags={[{ text: category.label }]}
                      cta={{
                        href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
                        text: 'Learn More',
                        icon: {
                          component: BookOpen,
                        },
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
                      title={{
                        text: title,
                      }}
                    />
                  )
                })}
              </CardGrid>
              <FilterContainer.PaginationWrapper>
                <Pagination pageCount={pageCount} />
              </FilterContainer.PaginationWrapper>
            </>
          )}
        </FilterContainer.ContentWrapper>
      </FilterContainer.MainWrapper>
    </FilterContainer>
  )
}
