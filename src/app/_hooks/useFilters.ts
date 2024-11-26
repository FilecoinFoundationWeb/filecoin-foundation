import { useMemo } from 'react'

import type { FilterConfig } from '@/types/filterTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseFiltersProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  filtersConfig: FilterConfig<Entry>
}

export function useFilters<Entry extends Object>({
  searchParams,
  entries,
  filtersConfig,
}: UseFiltersProps<Entry>) {
  const filterSearchParamKeys = Object.keys(searchParams).filter((key) => {
    return filtersConfig[key]
  })
  const searchParamsAreEmpty = filterSearchParamKeys.length === 0

  const filteredResults = useMemo(() => {
    if (searchParamsAreEmpty) {
      return entries
    }

    return entries.filter((entry) => {
      return filterSearchParamKeys.every((searchParamKey) => {
        const filterQuery = normalizeQueryParam(searchParams, searchParamKey)
        const filterFn = filtersConfig[searchParamKey]
        return filterFn(entry, filterQuery)
      })
    })
  }, [
    searchParamsAreEmpty,
    entries,
    searchParams,
    filtersConfig,
    filterSearchParamKeys,
  ])

  return { filteredResults }
}
