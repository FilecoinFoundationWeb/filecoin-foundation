import { type NextServerSearchParams } from '@/types/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { useFilter } from '@/hooks/useFilter'
import { CATEGORY_KEY, REGION_KEY } from '@/constants/searchParams'
import type { CMSCollectionName } from '@/types/cmsConfig'

const FILTERS = {
  CATEGORY: 'category',
  REGION: 'location.region',
  REGION_PRIMARY: 'location.primary',
} as const

export const useEventFilters = ({
  searchParams,
  entries,
  collectionName,
}: {
  searchParams: NextServerSearchParams
  entries: Array<any>
  collectionName: CMSCollectionName
}) => {
  const { category, location } = getCMSOptions(collectionName)

  const {
    locationQuery,
    categoryQuery,
    filteredByCategory,
    filteredByLocation,
  } = applyFilters({
    searchParams,
    entries,
    categoryValidIds: category.validIds,
    locationValidIds: location.validIds,
  })

  const filteredResults = filteredByCategory

  const dynamicCategoryOptions = category.options.map((option) => {
    const count = filteredByLocation.filter(
      (entry) => entry.category === option.id,
    ).length

    return {
      ...option,
      count,
    }
  })

  const totalCount = dynamicCategoryOptions.reduce(
    (sum, option) => sum + option.count,
    0,
  )
  const allOption = { id: 'all', name: 'All', count: totalCount }
  const finalCategoryOptions = [allOption, ...dynamicCategoryOptions]

  return {
    filteredResults,
    category: {
      query: categoryQuery,
      options: finalCategoryOptions,
    },
    location: {
      query: locationQuery,
      options: location.options,
    },
  }
}

const getCMSOptions = (collectionName: CMSCollectionName) => {
  const { validIds: validCategoryIds, options: categoryOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName,
      fieldName: FILTERS.CATEGORY,
    })

  const { validIds: validLocationIds, options: locationOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName,
      fieldName: FILTERS.REGION,
    })

  return {
    category: { validIds: validCategoryIds, options: categoryOptions },
    location: { validIds: validLocationIds, options: locationOptions },
  }
}

const applyFilters = ({
  searchParams,
  entries,
  categoryValidIds,
  locationValidIds,
}: {
  searchParams: NextServerSearchParams
  entries: Array<any>
  categoryValidIds: string[]
  locationValidIds: string[]
}) => {
  const { filterQuery: locationQuery, filteredResults: filteredByLocation } =
    useFilter({
      searchParams,
      entries,
      validIds: locationValidIds,
      filterKey: {
        searchParamKey: REGION_KEY,
        fieldName: FILTERS.REGION,
      },
    })

  const { filterQuery: categoryQuery, filteredResults: filteredByCategory } =
    useFilter({
      searchParams,
      entries: filteredByLocation,
      validIds: categoryValidIds,
      filterKey: {
        searchParamKey: CATEGORY_KEY,
        fieldName: FILTERS.CATEGORY,
      },
    })

  return {
    locationQuery,
    categoryQuery,
    filteredByCategory,
    filteredByLocation,
  }
}
