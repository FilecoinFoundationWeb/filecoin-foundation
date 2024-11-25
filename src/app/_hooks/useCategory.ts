import { useMemo } from 'react'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { ALL_CATEGORIES_OPTION } from '@/constants/filterConstants'
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
  if (!normalizedQuery || normalizedQuery === ALL_CATEGORIES_OPTION.id) {
    return ALL_CATEGORIES_OPTION.id
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
    if (
      !validatedCategoryOption ||
      validatedCategoryOption === ALL_CATEGORIES_OPTION.id
    ) {
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

  const categoryOptionsWithCountAndAll = useMemo(() => {
    const optionsWithCount = validCategoryIds.map((id) => ({
      id,
      name: categoryOptions.find((option) => option.id === id)?.name ?? id,
      count: categoryCounts[id],
    }))

    const totalCount = optionsWithCount.reduce(
      (sum, option) => sum + option.count,
      0,
    )

    return [
      { ...ALL_CATEGORIES_OPTION, count: totalCount },
      ...optionsWithCount,
    ]
  }, [validCategoryIds, categoryCounts, categoryOptions])

  return {
    categoryQuery: validatedCategoryOption,
    categorizedResults,
    categoryOptionsWithCountAndAll,
  }
}
