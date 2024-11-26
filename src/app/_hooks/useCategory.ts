import { useMemo } from 'react'

import { type CategoryId } from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import type { ALL_FILTER_ID } from '@/constants/filterConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { normalizeQueryParam } from '@/utils/queryUtils'

type CMSOption = ReturnType<
  typeof getCMSFieldOptionsAndValidIds
>['options'][number]

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  categoryOptions: Array<CMSOption>
  allOption: { id: typeof ALL_FILTER_ID; name: string }
  filterFn: (entries: Array<Entry>, id?: CMSOption['id']) => Array<Entry>
}

export function useCategory<Entry extends Object>({
  searchParams,
  entries,
  categoryOptions,
  allOption,
  filterFn,
}: UseCategoryProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, CATEGORY_KEY)

  const validCategoryIds = useMemo(
    () => categoryOptions.map((option) => option.id),
    [categoryOptions],
  )

  const filtersAreUnset = useMemo(() => {
    return !normalizedQuery || normalizedQuery === allOption.id
  }, [allOption.id, normalizedQuery])

  const validatedCategoryOption = validateCategoryOption(
    normalizedQuery,
    validCategoryIds,
  )

  const categorizedResults = useMemo(() => {
    if (filtersAreUnset) {
      return entries
    }

    return filterFn(entries, validatedCategoryOption)
  }, [filtersAreUnset, validatedCategoryOption, entries, filterFn])

  const categoryOptionsWithCountAndAll = useMemo(() => {
    const optionsWithCount = validCategoryIds.map((id) => ({
      id,
      name: categoryOptions.find((option) => option.id === id)?.name ?? id,
      count: filterFn(entries, id).length,
    }))

    const totalCount = optionsWithCount.reduce(
      (sum, option) => sum + option.count,
      0,
    )

    return [{ ...allOption, count: totalCount }, ...optionsWithCount]
  }, [validCategoryIds, allOption, categoryOptions, filterFn, entries])

  return {
    categorizedResults,
    categoryOptionsWithCountAndAll,
  }

  function validateCategoryOption(
    normalizedQuery: ReturnType<typeof normalizeQueryParam>,
    validCategoryIds: Array<CategoryId>,
  ) {
    if (filtersAreUnset) {
      return allOption.id
    }

    const validCategoryId = validCategoryIds.find(
      (option) => option === normalizedQuery,
    )

    return validCategoryId
  }
}
