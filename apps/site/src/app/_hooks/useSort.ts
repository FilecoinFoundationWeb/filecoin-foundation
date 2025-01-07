import { useMemo } from 'react'

import type { NextServerSearchParams } from '@/types/searchParams'
import type { SortConfig } from '@/types/sortTypes'
import type { NonEmptyReadonlyArray, Object } from '@/types/utils'

import { SORT_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

type UseSortProps<
  Entry extends Object,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  configs: Configs
  defaultsTo: Configs[number]['key']
}

export function useSort<
  Entry extends Object,
  Configs extends NonEmptyReadonlyArray<SortConfig<Entry>>,
>({
  searchParams,
  entries,
  configs,
  defaultsTo,
}: UseSortProps<Entry, Configs>) {
  const queryParamValue = normalizeQueryParam(searchParams, SORT_KEY)
  const defaultConfig =
    configs.find((config) => config.key === defaultsTo) || configs[0]

  const validSortKey = useMemo(() => {
    const validSortKeys = configs.map((config) => config.key)
    const sortKey = validSortKeys.find((key) => key === queryParamValue)

    return sortKey || defaultConfig.key
  }, [configs, defaultConfig.key, queryParamValue])

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
