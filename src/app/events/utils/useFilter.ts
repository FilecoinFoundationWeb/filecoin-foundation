import { useMemo } from 'react'

import { type Object } from '@/types/utils'

import { ALL_FILTER_ID } from '@/constants/filterConstants'

export type ApplyEventFilterProps<Entry extends Object> = {
  entries: Array<Entry>
  validatedOption: string | undefined
  filterKey: string
}

export function useFilter<Entry extends Object>({
  entries,
  validatedOption,
  filterKey,
}: ApplyEventFilterProps<Entry>) {
  const filteredResults = useMemo(() => {
    if (!validatedOption || validatedOption === ALL_FILTER_ID) {
      return entries
    }

    return entries.filter((entry) => {
      const fieldValue = getNestedValue(entry, filterKey)
      return fieldValue === validatedOption
    })
  }, [entries, filterKey, validatedOption])

  return {
    filterQuery: validatedOption,
    filteredResults,
  }
}

export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}
