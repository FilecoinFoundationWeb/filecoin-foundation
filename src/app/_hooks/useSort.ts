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
  ALPHABETICAL_SORT_IDS,
  CHRONOLOGICAL_SORT_IDS,
  VALID_SORT_IDS,
} from '@/constants/sortConstants'

type UseSortProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  sortBy: keyof SortableByDate & keyof Entry
  defaultSortId: SortId
}

export function useSort<Entry extends Object>({
  searchParams,
  entries,
  sortBy,
  defaultSortId,
}: UseSortProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, SORT_KEY)
  const validatedSortId = getValidatedSortId(normalizedQuery, defaultSortId)

  const sortedResults = useMemo(() => {
    if (ALPHABETICAL_SORT_IDS.includes(validatedSortId as AlphabeticalSortId)) {
      return sortEntriesAlphabetically({
        entries,
        sortId: validatedSortId as AlphabeticalSortId,
      })
    }

    if (
      CHRONOLOGICAL_SORT_IDS.includes(validatedSortId as ChronologicalSortId)
    ) {
      return sortEntriesByDate({
        entries,
        sortBy,
        sortId: validatedSortId as ChronologicalSortId,
      })
    }

    return entries
  }, [entries, sortBy, validatedSortId])

  return {
    sortQuery: validatedSortId,
    sortedResults,
  }
}

function getValidatedSortId<Entry extends Object>(
  normalizedQuery: string | undefined,
  defaultSortId: UseSortProps<Entry>['defaultSortId'],
): SortId {
  return VALID_SORT_IDS.includes(normalizedQuery as SortId)
    ? (normalizedQuery as SortId)
    : defaultSortId
}
