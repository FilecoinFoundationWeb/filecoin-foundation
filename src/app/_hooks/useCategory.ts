import { useMemo } from 'react'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  validCategoryIds: Array<CategoryId>
  categoryOptions: Array<CategoryOption>
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
  categoryOptions,
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
    return validCategoryIds.reduce((counts, id) => {
      counts[id] = entries.filter((entry) => entry.category === id).length
      return counts
    }, {} as CategoryCounts)
  }, [entries, validCategoryIds])

  const categoryOptionsWithCount = useMemo(() => {
    return validCategoryIds.map((id) => ({
      id,
      name: categoryOptions.find((option) => option.id === id)?.name ?? id,
      count: categoryCounts[id],
    }))
  }, [validCategoryIds, categoryCounts])

  return {
    categoryQuery: validatedCategoryOption,
    categorizedResults,
    categoryOptionsWithCount,
  }
}
