import { useMemo } from 'react'

import { type CategoryCounts, type CategoryOption } from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { CATEGORY_KEY } from '@/constants/searchParams'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validCategoryOptions: Array<CategoryOption>
}

function validateCategoryOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validCategoryOptions: Array<CategoryOption>,
) {
  if (!normalizedQuery) {
    return undefined
  }

  const validCategoryOption = validCategoryOptions.find(
    (option) => option === normalizedQuery,
  )

  return validCategoryOption
}

export function useCategory<Entry extends Object>({
  searchParams,
  entries,
  validCategoryOptions,
}: UseCategoryProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, CATEGORY_KEY)
  const validatedCategoryOption = validateCategoryOption(
    normalizedQuery,
    validCategoryOptions,
  )

  const categorizedResults = useMemo(() => {
    if (!validatedCategoryOption) {
      return entries
    }

    return entries.filter((entry) => {
      return entry.category === validatedCategoryOption
    })
  }, [entries, validatedCategoryOption])

  const categoryCounts = useMemo(() => {
    const counts: CategoryCounts = {}

    validCategoryOptions.forEach((option) => {
      counts[option] = entries.filter(
        (entry) => entry.category === option,
      ).length
    })

    return counts
  }, [entries, validCategoryOptions])

  return {
    categoryQuery: validatedCategoryOption,
    categorizedResults,
    categoryCounts,
  }
}
