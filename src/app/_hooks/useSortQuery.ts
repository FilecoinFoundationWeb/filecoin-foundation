import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type SortOptionType } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'
import {
  DEFAULT_SORT_OPTION,
  VALID_SORT_OPTIONS,
} from '@/constants/sortConstants'

type UseSortQueryProps = {
  searchParams: NextServerSearchParams
  defaultSortOption?: SortOptionType
}

type UseSortQueryResult = { sortQuery: SortOptionType }

function validateSortOptionQuery(
  sortQuery: NextServerSearchParams['sort'],
): SortOptionType | null {
  if (!sortQuery) {
    return null
  }

  const queryValue = Array.isArray(sortQuery) ? sortQuery[0] : sortQuery

  if (!queryValue) {
    return null
  }

  const normalizedQuery = queryValue.toLowerCase()

  if (VALID_SORT_OPTIONS.includes(normalizedQuery as SortOptionType)) {
    return normalizedQuery as SortOptionType
  }

  return null
}

export function useSortQuery({
  searchParams,
  defaultSortOption = DEFAULT_SORT_OPTION,
}: UseSortQueryProps): UseSortQueryResult {
  const sortQuery = useMemo(() => {
    const rawSortQuery = searchParams[SORT_KEY]
    const validatedSortOption = validateSortOptionQuery(rawSortQuery)

    return validatedSortOption !== null
      ? validatedSortOption
      : defaultSortOption
  }, [searchParams, defaultSortOption])

  return { sortQuery }
}
