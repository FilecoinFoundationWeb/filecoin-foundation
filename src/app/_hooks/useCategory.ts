import { useMemo } from 'react'

import {
  type CategoryCounts,
  type CategoryOption,
  type CategorizableBy,
} from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { CATEGORY_KEY } from '@/constants/searchParams'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  categorizeBy: keyof CategorizableBy & keyof Entry
  validCategoryOptions: CategoryOption[]
}

function validateCategoryOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validCategoryOptions: CategoryOption[],
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
  categorizeBy,
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
      return entry[categorizeBy] === validatedCategoryOption
    })
  }, [entries, categorizeBy, validatedCategoryOption])

  const categoryCounts = useMemo(() => {
    const counts: CategoryCounts = {}

    validCategoryOptions.forEach((option) => {
      counts[option] = entries.filter(
        (entry) => entry[categorizeBy] === option,
      ).length
    })

    return counts
  }, [entries, categorizeBy, validCategoryOptions])

  return {
    categoryQuery: validatedCategoryOption,
    categorizedResults,
    categoryCounts,
  }
}
