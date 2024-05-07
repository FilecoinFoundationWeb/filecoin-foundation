import { useCallback, useMemo } from 'react'

import {
  DEFAULT_SORT_OPTION,
  type SortOptionType,
} from '@/components/SortListbox'

import { NextServerSearchParams } from '@/types/searchParams'

import { SORT_KEY } from '@/constants/searchParams'

export function useSortQuery(
  searchParams: NextServerSearchParams,
  defaultSortOption: SortOptionType = DEFAULT_SORT_OPTION,
): SortOptionType {
  const validateSortOptionQuery = useCallback(
    (sortQuery: string | string[]): SortOptionType => {
      const validSortOptions: SortOptionType[] = ['newest', 'oldest']
      const queryValue = Array.isArray(sortQuery) ? sortQuery[0] : sortQuery
      const normalizedQuery = queryValue.toLowerCase()

      if (validSortOptions.includes(normalizedQuery as SortOptionType)) {
        return normalizedQuery as SortOptionType
      }

      return defaultSortOption
    },
    [defaultSortOption],
  )

  const sortQuery = useMemo(() => {
    const rawSortQuery = searchParams[SORT_KEY]
    return validateSortOptionQuery(
      rawSortQuery ? rawSortQuery : defaultSortOption,
    )
  }, [searchParams, defaultSortOption, validateSortOptionQuery])

  return sortQuery
}
