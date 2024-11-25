import type { CMSCollectionName } from '@/types/cmsConfig'
import { type NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY, LOCATION_KEY } from '@/constants/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { normalizeQueryParam } from '@/utils/queryUtils'

import { ALL_CATEGORIES_OPTION } from '@/_hooks/useCategory'

import { useFilter } from '../utils/useFilter'

type UseEventFiltersProps = {
  searchParams: NextServerSearchParams
  entries: Array<any>
}

type EventFilter = 'category' | 'location.region'

type EventFilters = {
  fields: {
    CATEGORY: EventFilter
    LOCATION: EventFilter
  }
}

const EVENT_COLLECTION_NAME = 'event_entries' as CMSCollectionName
const ALL_LOCATIONS_OPTION = { id: 'all', name: 'All Locations' }

const filters: EventFilters = {
  fields: {
    CATEGORY: 'category',
    LOCATION: 'location.region',
  },
} as const

export const useEventFilters = ({
  searchParams,
  entries,
}: UseEventFiltersProps) => {
  const { category, location } = getFilterOptionsFromCMS(filters)

  const validatedCategoryQuery = getValidatedQuery(
    searchParams,
    CATEGORY_KEY,
    category.validIds,
  )

  const validatedLocationQuery = getValidatedQuery(
    searchParams,
    LOCATION_KEY,
    location.validIds,
  )

  const { filterQuery: locationQuery, filteredResults: filteredByLocation } =
    useFilter({
      entries,
      validatedOption: validatedLocationQuery,
      filterKey: 'location.region',
    })

  const { filterQuery: categoryQuery, filteredResults: filteredByCategory } =
    useFilter({
      entries: filteredByLocation,
      validatedOption: validatedCategoryQuery,
      filterKey: 'category',
    })

  const filteredResults = filteredByCategory

  const finalCategoryOptions = createCategoryOptionsWithCounts(
    category.options,
    filteredByLocation,
  )

  return {
    filteredResults,
    filters: {
      category: {
        query: categoryQuery,
        options: finalCategoryOptions,
      },
      location: {
        query: locationQuery,
        options: [ALL_LOCATIONS_OPTION, ...location.options],
      },
    },
  }
}

const getFilterOptionsFromCMS = (filters: EventFilters) => {
  const { validIds: validCategoryIds, options: categoryOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName: EVENT_COLLECTION_NAME,
      fieldName: filters.fields.CATEGORY,
    })

  const { validIds: validLocationIds, options: locationOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName: EVENT_COLLECTION_NAME,
      fieldName: filters.fields.LOCATION,
    })

  return {
    category: { validIds: validCategoryIds, options: categoryOptions },
    location: {
      validIds: validLocationIds,
      options: locationOptions,
    },
  }
}

function getValidatedQuery(
  searchParams: NextServerSearchParams,
  searchParamKey: string,
  validIds: Array<string>,
) {
  const normalizedQuery = normalizeQueryParam(searchParams, searchParamKey)

  if (!normalizedQuery || normalizedQuery === 'all') {
    return 'all'
  }
  return validIds.includes(normalizedQuery || '') ? normalizedQuery : undefined
}

const createCategoryOptionsWithCounts = (
  categoryOptions: Array<{ id: string; name: string }>,
  entries: Array<any>,
) => {
  const dynamicCategoryOptions = categoryOptions.map((option) => ({
    ...option,
    count: entries.filter((entry) => entry.category === option.id).length,
  }))

  const totalCount = dynamicCategoryOptions.reduce(
    (sum, option) => sum + option.count,
    0,
  )

  return [
    { ...ALL_CATEGORIES_OPTION, count: totalCount },
    ...dynamicCategoryOptions,
  ]
}
