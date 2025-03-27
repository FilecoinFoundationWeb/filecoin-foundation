'use client'

import { useSearchParams } from 'next/navigation'

import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import {
  DEFAULT_CATEGORY_FILTER_OPTION,
  DEFAULT_RESOURCE_FILTER_OPTION,
} from '@filecoin-foundation/hooks/useFilter/constants'
import { entryMatchesCategoryQuery } from '@filecoin-foundation/hooks/useFilter/utils'
import { useListboxOptions } from '@filecoin-foundation/hooks/useListboxOptions'
import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { FilterListbox } from '@filecoin-foundation/ui/FilterListbox'
import { FilterSidebar } from '@filecoin-foundation/ui/FilterSidebar'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import {
  PAGE_KEY,
  SEARCH_KEY,
  CATEGORY_KEY,
  RESOURCE_TYPE_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { ArrowUpRight } from '@phosphor-icons/react'

import { getCategoryLabel } from '@/utils/getCategoryLabel'
import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'

import type { LearningResource } from '../types/learningResourceType'
import { entryMatchesResourceQuery } from '../utils/entryMatchesResourceQuery'

type LearningResourcesContentProps = {
  resources: Array<LearningResource>
}

const LEARNING_RESOURCES_COLLECTION_NAME = 'learning_resources'

const { options: categoryOptions } = getCMSFieldOptionsAndValidIds({
  collectionName: LEARNING_RESOURCES_COLLECTION_NAME,
  fieldName: 'category',
})

const { options: resourceTypeOptions } = getCMSFieldOptionsAndValidIds({
  collectionName: LEARNING_RESOURCES_COLLECTION_NAME,
  fieldName: 'resource-type',
})

export function LearningResourcesContent({
  resources,
}: LearningResourcesContentProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: resources,
    searchBy: ['title', 'description'],
  })

  const { filteredEntries: filteredByCategory } = useFilter({
    entries: searchResults,
    filterQuery: normalizeQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const [categoryOption, setCategoryOption] = useListboxQueryState({
    key: CATEGORY_KEY,
    options: categoryOptions,
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
  })

  const { filteredEntries: filteredByResourceType } = useFilter({
    entries: filteredByCategory,
    filterQuery: normalizeQueryParam(searchParams, RESOURCE_TYPE_KEY),
    filterFn: entryMatchesResourceQuery,
  })

  const [resourceTypeOption, setResourceTypeOption] = useListboxQueryState({
    key: RESOURCE_TYPE_KEY,
    options: resourceTypeOptions,
    defaultOption: DEFAULT_RESOURCE_FILTER_OPTION,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredByResourceType,
  })

  const { optionsWithCount: resourceTypeOptionsWithCount } = useListboxOptions({
    options: resourceTypeOptions,
    defaultOption: DEFAULT_RESOURCE_FILTER_OPTION,
    entries: filteredByCategory,
    countBy: 'resourceType',
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
            options={[DEFAULT_CATEGORY_FILTER_OPTION, ...categoryOptions]}
            onChange={setCategoryOption}
          />
        ),
      }}
      side={{
        desktop: (
          <FilterSidebar
            selected={resourceTypeOption}
            options={resourceTypeOptionsWithCount}
            onChange={setResourceTypeOption}
          />
        ),
        mobile: (
          <FilterListbox
            selected={resourceTypeOption}
            options={resourceTypeOptionsWithCount}
            onChange={setResourceTypeOption}
          />
        ),
      }}
    >
      <CardGrid as="section" cols="smTwo" hasGridAutoRows={false}>
        {paginatedResults.map((resource) => {
          const { slug, title, description, category, resourceType, link } =
            resource

          const categoryLabel = getCategoryLabel({
            collectionName: LEARNING_RESOURCES_COLLECTION_NAME,
            category,
          })

          const resourceTypeLabel = getCategoryLabel({
            collectionName: LEARNING_RESOURCES_COLLECTION_NAME,
            category: resourceType,
            fieldName: 'resource-type',
          })

          return (
            <Card
              key={slug}
              as="article"
              title={title}
              description={{ text: description }}
              tags={[{ text: categoryLabel }, { text: resourceTypeLabel }]}
              cta={{
                href: link,
                text: 'View Resource',
                icon: {
                  component: ArrowUpRight,
                  size: 16,
                  position: 'trailing',
                  weight: 'bold',
                },
              }}
            />
          )
        })}
      </CardGrid>
    </FilterContainer>
  )
}
