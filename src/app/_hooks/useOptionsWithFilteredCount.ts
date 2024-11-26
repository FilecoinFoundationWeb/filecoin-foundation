import { useMemo } from 'react'

import type { FilterConfig } from '@/types/filterTypes'
import type { NextServerSearchParams } from '@/types/searchParams'

import type { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

type CMSOption = ReturnType<
  typeof getCMSFieldOptionsAndValidIds
>['options'][number]

type UseFormattedOptionsProps<Entry extends Record<string, any>> = {
  entries: Array<Entry>
  searchParams: NextServerSearchParams
  options: Array<CMSOption>
  allOption: CMSOption
  filtersConfig: FilterConfig<Entry>
}

type OptionWithCount = CMSOption & { count: number }

export function useOptionsWithFilteredCount<Entry extends Record<string, any>>({
  entries,
  searchParams,
  options,
  allOption,
  filtersConfig,
}: UseFormattedOptionsProps<Entry>): Array<OptionWithCount> {
  const categoryOptionsWithCountAndAll = useMemo(() => {
    const optionsWithCount = options.map((option) => ({
      ...option,
      count: filterFn(entries, option.id).length,
    }))

    const totalCount = optionsWithCount.reduce(
      (sum, option) => sum + option.count,
      0,
    )

    return [{ ...allOption, count: totalCount }, ...optionsWithCount]
  }, [allOption, entries])

  return categoryOptionsWithCountAndAll
}
