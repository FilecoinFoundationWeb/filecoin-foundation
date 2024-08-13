import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type SortableByDate, type SortOption } from '@/types/sortTypes'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'
import { sortEntriesAlphabetically } from '@/utils/sortEntriesAlphabetically'
import { sortEntriesByDate } from '@/utils/sortEntriesByDate'

import { SORT_KEY } from '@/constants/searchParams'
import {
  alphabeticalIds,
  cronologicalIds,
  VALID_SORT_OPTIONS,
} from '@/constants/sortConstants'

type UseSortProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  sortBy: keyof SortableByDate & keyof Entry
  sortByDefault: SortOption
}

function validateSortOption<Entry extends Object>(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  defaultSortBy: UseSortProps<Entry>['sortByDefault'],
) {
  if (!normalizedQuery) {
    return defaultSortBy
  }

  const validSortOption = VALID_SORT_OPTIONS.find(
    (option) => option === normalizedQuery,
  )

  return validSortOption || defaultSortBy
}

export function useSort<Entry extends Object>({
  searchParams,
  entries,
  sortBy,
  sortByDefault,
}: UseSortProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, SORT_KEY)
  const validatedSortOption = validateSortOption(normalizedQuery, sortByDefault)

  const sortedResults = useMemo(() => {
    if (alphabeticalIds.includes(validatedSortOption)) {
      return sortEntriesAlphabetically({
        entries,
        sortOption: validatedSortOption,
      })
    } else if (cronologicalIds.includes(validatedSortOption)) {
      return sortEntriesByDate({
        entries,
        sortBy,
        sortOption: validatedSortOption,
      })
    } else {
      return entries
    }
  }, [entries, sortBy, validatedSortOption])

  return {
    sortQuery: validatedSortOption,
    sortedResults,
  }
}
