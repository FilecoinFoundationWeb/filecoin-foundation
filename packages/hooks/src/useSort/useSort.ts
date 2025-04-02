import { useMemo } from 'react'

import type {
  AnyObject,
  NonEmptyReadonlyArray,
} from '@filecoin-foundation/utils/types/utilTypes'
import type { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import type { SortConfig } from './types/sortTypes'

type UseSortProps<
  Entry extends AnyObject,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
> = {
  sortQuery: ReturnType<typeof normalizeQueryParam>
  entries: Array<Entry>
  configs: Configs
  defaultConfig?: Configs[number]
}

export function useSort<
  Entry extends AnyObject,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
>({
  sortQuery,
  entries,
  configs,
  defaultConfig = configs[0],
}: UseSortProps<Entry, Configs>) {
  const validSortKey = useMemo(() => {
    const validSortKeys = configs.map((config) => config.id)
    const sortKey = validSortKeys.find((id) => id === sortQuery)

    return sortKey || defaultConfig.id
  }, [configs, defaultConfig.id, sortQuery])

  const sortedResults = useMemo(() => {
    const config = configs.find((config) => config.id === validSortKey)
    const sortConfig = config || defaultConfig

    return sortConfig.sortFn(entries)
  }, [configs, defaultConfig, entries, validSortKey])

  return {
    sortQuery: validSortKey,
    sortedResults,
    defaultSortQuery: defaultConfig.id,
  }
}
