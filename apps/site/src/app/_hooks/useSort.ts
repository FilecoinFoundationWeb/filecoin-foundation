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
  defaultsTo: Configs[number]['key']
}

export function useSort<
  Entry extends Object,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
>({ sortQuery, entries, configs, defaultsTo }: UseSortProps<Entry, Configs>) {
  const defaultConfig =
    configs.find((config) => config.key === defaultsTo) || configs[0]

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
