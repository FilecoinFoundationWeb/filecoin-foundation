import { useMemo } from 'react'

import { type Object } from '@/types/utils'

import { ALL_FILTER_ID } from '@/constants/filterConstants'

import type { NextServerSearchParams } from '@/_types/searchParams'
import { normalizeQueryParam } from '@/_utils/queryUtils'

type QueryValidationProps = {
  searchParams: NextServerSearchParams
  queryParamKey: string
  validOptionIds: Array<string>
}

type FilterEntriesProps<Entry extends Object> = {
  entries: Array<Entry>
  filterKey: string
}

export type UseFilteredEntriesProps<Entry extends Object> = {
  validation: QueryValidationProps
  filtering: FilterEntriesProps<Entry>
}

export function useFilteredEntries<Entry extends Object>({
  validation,
  filtering,
}: UseFilteredEntriesProps<Entry>) {
  const { searchParams, queryParamKey, validOptionIds } = validation
  const { entries, filterKey } = filtering

  const selectedFilterValue = validateFilterQueryParam({
    searchParams,
    queryParamKey,
    validOptionIds,
  })

  const filteredResults = useMemo(() => {
    if (!selectedFilterValue || selectedFilterValue === ALL_FILTER_ID) {
      return entries
    }

    return entries.filter((entry) => {
      const fieldValue = getNestedValue(entry, filterKey)
      return fieldValue === selectedFilterValue
    })
  }, [entries, filterKey, selectedFilterValue])

  return {
    filterQuery: selectedFilterValue,
    filteredResults,
  }
}

export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

type ValidateFilterQueryParamProps = {
  searchParams: NextServerSearchParams
  queryParamKey: string
  validOptionIds: Array<string>
}

function validateFilterQueryParam({
  searchParams,
  queryParamKey,
  validOptionIds,
}: ValidateFilterQueryParamProps) {
  const normalizedQuery = normalizeQueryParam(searchParams, queryParamKey)

  if (!normalizedQuery || normalizedQuery === ALL_FILTER_ID) {
    return ALL_FILTER_ID
  }
  return validOptionIds.includes(normalizedQuery || '')
    ? normalizedQuery
    : undefined
}
