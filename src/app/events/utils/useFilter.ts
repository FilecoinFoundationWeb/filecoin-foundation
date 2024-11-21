import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

export type ApplyEventFilterProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validatedOption: string | undefined
  filterKey: string
}

export function useFilter<Entry extends Object>({
  searchParams,
  entries,
  validatedOption,
  filterKey,
}: ApplyEventFilterProps<Entry>) {
  const filteredResults = useMemo(() => {
    if (!validatedOption) {
      return entries
    }

    return entries.filter((entry) => {
      const fieldValue = getNestedValue(entry, filterKey)
      return fieldValue === validatedOption
    })
  }, [searchParams, entries, filterKey])

  return {
    filterQuery: validatedOption,
    filteredResults,
  }
}

export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}
