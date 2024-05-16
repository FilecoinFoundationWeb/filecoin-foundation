import { CategoryOptionType } from '@/types/categoryTypes'
import { NextServerSearchParams } from '@/types/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

import {
  DEFAULT_CATEGORY_OPTION,
  VALID_BLOG_CATEGORY_OPTIONS,
} from '@/constants/categoryConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

type UseCategoryProps = {
  searchParams: NextServerSearchParams
  defaultCategoryOption?: CategoryOptionType
}

function validateCategoryOption(
  normalizedQuery: ReturnType<typeof normalizeQueryParam>,
  defaultCategoryOption: UseCategoryProps['defaultCategoryOption'] = DEFAULT_CATEGORY_OPTION,
): CategoryOptionType {
  if (!normalizedQuery) {
    return defaultCategoryOption
  }

  if (
    VALID_BLOG_CATEGORY_OPTIONS.includes(normalizedQuery as CategoryOptionType)
  ) {
    return normalizedQuery as CategoryOptionType
  }

  return defaultCategoryOption
}

export function useCategory({
  searchParams,
  defaultCategoryOption,
}: UseCategoryProps): {
  categoryQuery: CategoryOptionType
} {
  const normalizedQuery = normalizeQueryParam(searchParams, CATEGORY_KEY)

  const validatedCategoryOption = validateCategoryOption(
    normalizedQuery,
    defaultCategoryOption,
  )

  return { categoryQuery: validatedCategoryOption }
}
