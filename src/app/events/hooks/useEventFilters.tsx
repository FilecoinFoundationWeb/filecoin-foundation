import { type NextServerSearchParams } from '@/types/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { useCategory } from '@/hooks/useCategory'
import { useLocation } from '@/hooks/useLocation'

export const useEventFilters = ({
  searchParams,
  entries,
}: {
  searchParams: NextServerSearchParams
  entries: Array<any>
}) => {
  const { options: categoryOptions, validIds: validCategoryIds } =
    getCMSFieldOptionsAndValidIds({
      collectionName: 'event_entries',
      fieldName: 'category',
    })

  const { options: locationOptions, validIds: validLocationIds } =
    getCMSFieldOptionsAndValidIds({
      collectionName: 'event_entries',
      fieldName: 'location.region',
    })

  const { categoryQuery, categorizedResults, categoryCounts } = useCategory({
    searchParams,
    entries,
    validCategoryIds,
  })

  const { locationQuery, categorizedLocationResults, locationCounts } =
    useLocation({
      searchParams,
      entries,
      validLocationIds,
    })

  const filters = [
    (entry: any) =>
      locationQuery === '' || categorizedLocationResults.includes(entry),
    (entry: any) => categoryQuery === '' || categorizedResults.includes(entry),
  ]

  const filteredResults = entries.filter((entry) =>
    filters.every((filterFn) => filterFn(entry)),
  )

  return {
    filteredResults,
    category: {
      query: categoryQuery,
      counts: categoryCounts,
      options: categoryOptions,
      validIds: validCategoryIds,
    },
    location: {
      query: locationQuery,
      counts: locationCounts,
      options: locationOptions,
      validIds: validLocationIds,
    },
  }
}
