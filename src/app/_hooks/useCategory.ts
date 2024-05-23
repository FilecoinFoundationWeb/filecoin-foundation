import { useMemo } from 'react'

import {
  type CategoryOption,
  type CategorizableBy,
} from '@/types/categoryTypes'
import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { CATEGORY_KEY } from '@/constants/searchParams'

type UseCategoryProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  categorizeBy: keyof CategorizableBy & keyof Entry
  validCategoryOptions: CategoryOption[]
}

function validateCategoryOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  validCategoryOptions: CategoryOption[],
): CategoryOption | undefined {
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
}: UseCategoryProps<Entry>): {
  categoryQuery: CategoryOption | undefined
  categorizedResults: Entry[]
} {
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

  return { categoryQuery: validatedCategoryOption, categorizedResults }
}
