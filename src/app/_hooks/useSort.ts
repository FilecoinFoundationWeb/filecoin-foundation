import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import type { SortConfig } from '@/types/sortTypes'
import { type Object } from '@/types/utils'

import { SORT_KEY } from '@/constants/searchParams'
import { VALID_SORT_KEYS } from '@/constants/sortConstants'

import { normalizeQueryParam } from '@/utils/queryUtils'

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

  if (!defaultConfig) {
    throw new Error('At least one sort config must be provided')
  }

  const queryParamValue = normalizeQueryParam(searchParams, SORT_KEY)

  const validSortKey = useMemo(() => {
    const sortKey = VALID_SORT_KEYS.find((key) => key === queryParamValue)

    return sortKey || defaultConfig.key
  }, [defaultConfig.key, queryParamValue])

  const sortedResults = useMemo(() => {
    const config = configs.find((config) => config.key === validSortKey)
    const sortConfig = config || defaultConfig

    return sortConfig.sortFn(entries)
  }, [configs, defaultConfig, entries, validSortKey])

  return {
    sortQuery: validSortKey,
    sortedResults,
    defaultSortQuery: defaultConfig.key,
  }
}
