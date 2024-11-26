import { useMemo } from 'react'

import type { FilterConfig } from '@/types/filterTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  filterConfig: FilterConfig<Entry>
}

export function useCategory<Entry extends Object>({
  searchParams,
  entries,
  filterConfig,
}: UseCategoryProps<Entry>) {
  const filterSearchParamKeys = Object.keys(searchParams).filter((key) => {
    return filterConfig[key]
  })
  const searchParamsAreEmpty = filterSearchParamKeys.length === 0

  const categorizedResults = useMemo(() => {
    if (searchParamsAreEmpty) {
      return entries
    }

    return entries.filter((entry) => {
      return filterSearchParamKeys.every((searchParamKey) => {
        const filterQuery = normalizeQueryParam(searchParams, searchParamKey)
        const filterFn = filterConfig[searchParamKey]
        return filterFn(entry, filterQuery)
      })
    })
  }, [
    searchParamsAreEmpty,
    entries,
    searchParams,
    filterConfig,
    filterSearchParamKeys,
  ])

  return { categorizedResults }
}
