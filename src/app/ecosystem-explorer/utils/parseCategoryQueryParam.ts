import type { NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'

type CategoryParams = NextServerSearchParams[typeof CATEGORY_KEY]

export function parseCategoryQueryParam(categoryParams: CategoryParams) {
  const categoryIds =
    typeof categoryParams === 'string'
      ? categoryParams.split(CATEGORY_QUERY_SEPARATOR_SYMBOL)
      : null

  return categoryIds
}
