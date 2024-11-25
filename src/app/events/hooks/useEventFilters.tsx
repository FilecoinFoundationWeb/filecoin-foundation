import type { CMSCollectionName } from '@/types/cmsConfig'
import { type NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY, LOCATION_KEY } from '@/constants/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { normalizeQueryParam } from '@/_utils/queryUtils'

import { useFilter } from '../utils/useFilter'

type UseEventFiltersProps = {
  searchParams: NextServerSearchParams
  entries: Array<any>
  filters: {
    fields: {
      CATEGORY: string
      LOCATION: string
    }
  }
}

const EVENT_COLLECTION_NAME = 'event_entries' as CMSCollectionName

export const useEventFilters = ({
  searchParams,
  entries,
  filters,
}: UseEventFiltersProps) => {
  const { category, location } = createFilterOptions(filters)

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
        options: [{ id: 'all', name: 'All Location' }, ...location.options],
      },
    },
  }
}

const createFilterOptions = (filters: UseEventFiltersProps['filters']) => {
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

  if (!normalizedQuery) {
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
    { id: 'all', name: 'All', count: totalCount },
    ...dynamicCategoryOptions,
  ]
}
