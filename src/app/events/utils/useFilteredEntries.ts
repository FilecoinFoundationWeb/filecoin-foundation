import { useMemo } from 'react'

import { type Object } from '@/types/utils'

import { ALL_FILTER_ID } from '@/constants/filterConstants'

import type { NextServerSearchParams } from '@/_types/searchParams'
import { normalizeQueryParam } from '@/_utils/queryUtils'

type QueryValidationProps = {
  searchParams: NextServerSearchParams
  queryParamKey: string
  validFilterValues: Array<string>
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
  const { searchParams, queryParamKey, validFilterValues } = validation
  const { entries, filterKey } = filtering

  const validatedFilterValue = validatedFilterQueryParams({
    searchParams,
    queryParamKey,
    validIds: validFilterValues,
  })

  const filteredResults = useMemo(() => {
    if (!validatedFilterValue || validatedFilterValue === ALL_FILTER_ID) {
      return entries
    }

    return entries.filter((entry) => {
      const fieldValue = getNestedValue(entry, filterKey)
      return fieldValue === validatedFilterValue
    })
  }, [entries, filterKey, validatedFilterValue])

  return {
    filterQuery: validatedFilterValue,
    filteredResults,
  }
}

export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

type ValidatedFilterQueryParamsProps = {
  searchParams: NextServerSearchParams
  queryParamKey: string
  validIds: Array<string>
}

function validatedFilterQueryParams({
  searchParams,
  queryParamKey,
  validIds,
}: ValidatedFilterQueryParamsProps) {
  const normalizedQuery = normalizeQueryParam(searchParams, queryParamKey)

  if (!normalizedQuery || normalizedQuery === ALL_FILTER_ID) {
    return ALL_FILTER_ID
  }
  return validIds.includes(normalizedQuery || '') ? normalizedQuery : undefined
}
