import { useMemo } from 'react'

import type { SortConfig } from '@/types/sortTypes'
import type { NonEmptyReadonlyArray, Object } from '@/types/utils'

type UseSortProps<
  Entry extends Object,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
> = {
  sortQuery: string | undefined
  entries: Array<Entry>
  configs: Configs
  defaultConfig?: Configs[number]
}

export function useSort<
  Entry extends Object,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
>({
  sortQuery,
  entries,
  configs,
  defaultConfig = configs[0],
}: UseSortProps<Entry, Configs>) {
  const validSortKey = useMemo(() => {
    const validSortKeys = configs.map((config) => config.key)
    const sortKey = validSortKeys.find((key) => key === sortQuery)

    return sortKey || defaultConfig.key
  }, [configs, defaultConfig.key, sortQuery])

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
