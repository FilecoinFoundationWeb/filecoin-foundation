import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import {
  AlphabeticalSortId,
  ChronologicalSortId,
  type SortableByDate,
  type SortId,
} from '@/types/sortTypes'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'
import { sortEntriesAlphabetically } from '@/utils/sortEntriesAlphabetically'
import { sortEntriesByDate } from '@/utils/sortEntriesByDate'

import { SORT_KEY } from '@/constants/searchParams'
import {
  alphabeticalSortIds,
  chronologicalSortIds,
  VALID_SORT_IDS,
} from '@/constants/sortConstants'

type UseSortProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  sortBy: keyof SortableByDate & keyof Entry
  sortByDefault: SortId
}

function validateSortId<Entry extends Object>(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  defaultSortBy: UseSortProps<Entry>['sortByDefault'],
) {
  if (!normalizedQuery) {
    return defaultSortBy
  }

  const validSortOption = VALID_SORT_IDS.find(
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
  const validatedSortId = validateSortId(normalizedQuery, sortByDefault)

  const sortedResults = useMemo(() => {
    if (alphabeticalSortIds.includes(validatedSortId as AlphabeticalSortId)) {
      return sortEntriesAlphabetically({
        entries,
        sortId: validatedSortId as AlphabeticalSortId,
      })
    } else if (
      chronologicalSortIds.includes(validatedSortId as ChronologicalSortId)
    ) {
      return sortEntriesByDate({
        entries,
        sortBy,
        sortId: validatedSortId as ChronologicalSortId,
      })
    } else {
      return entries
    }
  }, [entries, sortBy, validatedSortId])

  return {
    sortQuery: validatedSortId,
    sortedResults,
  }
}
