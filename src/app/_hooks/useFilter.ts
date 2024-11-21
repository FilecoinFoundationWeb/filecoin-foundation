import { useMemo } from 'react'

import { type CategoryId } from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseFilterProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validIds: Array<CategoryId>
  filterKey: {
    searchParamKey: string
    fieldName: string
  }
}

function validateOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validIds: Array<CategoryId>,
) {
  if (!normalizedQuery) {
    return undefined
  }

  const validCategoryId = validIds.find((option) => option === normalizedQuery)

  return validCategoryId
}

export function useFilter<Entry extends Object>({
  searchParams,
  entries,
  validIds,
  filterKey: { searchParamKey, fieldName },
}: UseFilterProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, searchParamKey)
  const validatedOption = validateOption(normalizedQuery, validIds)

  const filteredResults = useMemo(() => {
    if (!validatedOption) {
      return entries
    }

    return entries.filter((entry) => {
      const fieldValue = getNestedValue(entry, fieldName)
      return fieldValue === validatedOption
    })
  }, [searchParams, entries, validIds, fieldName])

  return {
    filterQuery: validatedOption,
    filteredResults,
  }
}

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}
