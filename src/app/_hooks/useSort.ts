import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import type { SortConfig } from '@/types/sortTypes'
import { type Object } from '@/types/utils'

import { SORT_KEY } from '@/constants/searchParams'
import { VALID_SORT_KEYS } from '@/constants/sortConstants'

import { normalizeQueryParam } from '@/utils/queryUtils'

// Maybe add a defaultConfig or defaultKey to make it more explicit
type UseSortProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  configs: ReadonlyArray<SortConfig<Entry>>
}

export function useSort<Entry extends Object>({
  searchParams,
  entries,
  configs,
}: UseSortProps<Entry>) {
  const defaultConfig = configs[0]

  const queryValue = normalizeQueryParam(searchParams, SORT_KEY)

  const validQueryValue =
    VALID_SORT_KEYS.find((key) => key === queryValue) || defaultConfig.key

  const sortConfig = useMemo(() => {
    const config = configs.find((c) => c.key === validQueryValue)
    return config || defaultConfig
  }, [configs, defaultConfig, validQueryValue])

  const sortedResults = useMemo(() => {
    return sortConfig.sortFn(entries)
  }, [sortConfig, entries])

  return {
    sortQuery: validQueryValue,
    sortedResults,
    defaultQuery: defaultConfig.key,
  }
}
