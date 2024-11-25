import type { CMSCollectionName } from '@/types/cmsConfig'
import { type NextServerSearchParams } from '@/types/searchParams'

import {
  ALL_CATEGORIES_OPTION,
  ALL_FILTER_ID,
  ALL_LOCATIONS_OPTION,
  type FilterOption,
} from '@/constants/filterConstants'
import { CATEGORY_KEY, LOCATION_KEY } from '@/constants/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { normalizeQueryParam } from '@/utils/queryUtils'

import type { OptionType } from '@/components/ListboxOption'

import { useFilteredEntries } from '../utils/useFilteredEntries'

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
  // 1. get options from CMS
  const { category, location } = getFilterOptionsAndValidIdsFromCMS(
    filters.fields,
  )

  // 2. filter the entries based on the search params
  const { filterQuery: locationQuery, filteredResults: filteredByLocation } =
    useFilteredEntries({
      validation: {
        searchParams,
        queryParamKey: LOCATION_KEY,
        validFilterValues: location.validIds,
      },
      filtering: {
        entries,
        filterKey: filters.fields.LOCATION,
      },
    })

  const { filterQuery: categoryQuery, filteredResults: filteredByCategory } =
    useFilteredEntries({
      validation: {
        searchParams,
        queryParamKey: CATEGORY_KEY,
        validFilterValues: category.validIds,
      },
      filtering: {
        entries: filteredByLocation,
        filterKey: filters.fields.CATEGORY,
      },
    })

  const filteredResults = filteredByCategory

  const categoryOptionsWithCountAndDefault = addCountsAndDefaultToOptions({
    options: category.options,
    entries: filteredByLocation,
    defaultOption: ALL_CATEGORIES_OPTION,
  })

  return {
    filteredResults,
    filters: {
      category: {
        query: categoryQuery,
        options: categoryOptionsWithCountAndDefault,
      },
      location: {
        query: locationQuery,
        options: [ALL_LOCATIONS_OPTION, ...location.options],
      },
    },
  }
}

function getFilterOptionsAndValidIdsFromCMS(filters: EventFilters['fields']) {
  const { validIds: validCategoryIds, options: categoryOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName: EVENT_COLLECTION_NAME,
      fieldName: filters.CATEGORY,
    })

  const { validIds: validLocationIds, options: locationOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName: EVENT_COLLECTION_NAME,
      fieldName: filters.LOCATION,
    })

  return {
    category: { validIds: validCategoryIds, options: categoryOptions },
    location: {
      validIds: validLocationIds,
      options: locationOptions,
    },
  }
}

type AddCountsAndDefaultToOptionsProps = {
  options: Array<OptionType>
  entries: Array<Record<string, any>>
  defaultOption: FilterOption
}

function addCountsAndDefaultToOptions({
  options,
  entries,
  defaultOption,
}: AddCountsAndDefaultToOptionsProps) {
  const dynamicCategoryOptions = options.map((option) => ({
    ...option,
    count: entries.filter((entry) => entry.category === option.id).length,
  }))

  const totalCount = dynamicCategoryOptions.reduce(
    (sum, option) => sum + option.count,
    0,
  )

  return [{ ...defaultOption, count: totalCount }, ...dynamicCategoryOptions]
}
