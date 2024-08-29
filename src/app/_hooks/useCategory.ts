import { useMemo } from 'react'

import { type CategoryCounts, type CategoryId } from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { CATEGORY_KEY } from '@/constants/searchParams'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validCategoryIds: Array<CategoryId>
}

function validateCategoryOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validCategoryIds: Array<CategoryId>,
) {
  if (!normalizedQuery) {
    return undefined
  }

  const validCategoryId = validCategoryIds.find(
    (option) => option === normalizedQuery,
  )

  return validCategoryId
}

export function useCategory<Entry extends Object>({
  searchParams,
  entries,
  validCategoryIds,
}: UseCategoryProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, CATEGORY_KEY)
  const validatedCategoryOption = validateCategoryOption(
    normalizedQuery,
    validCategoryIds,
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

    validCategoryIds.forEach((option) => {
      counts[option] = entries.filter(
        (entry) => entry.category === option,
      ).length
    })

    return counts
  }, [entries, validCategoryIds])

  return {
    categoryQuery: validatedCategoryOption,
    categorizedResults,
    categoryCounts,
  }
}
