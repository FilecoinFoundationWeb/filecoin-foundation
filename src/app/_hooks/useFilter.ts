import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

type WithCategory = {
  category: string
}

export type UseFilterProps<Entry extends WithCategory> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
}

export function useFilter<Entry extends WithCategory>({
  searchParams,
  entries,
}: UseFilterProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, CATEGORY_KEY)

  const filteredEntries = useMemo(() => {
    if (!normalizedQuery) {
      return entries
    }

    return entries.filter((entry) => {
      return entry.category === normalizedQuery
    })
  }, [entries, normalizedQuery])

  return { filteredEntries }
}
