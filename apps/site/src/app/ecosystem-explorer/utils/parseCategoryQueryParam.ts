import type { NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'

export function parseCategoryQueryParam(
  searchParams: NextServerSearchParams,
  key: typeof CATEGORY_KEY,
) {
  const categoryParams = searchParams[key]

  const categoryIds =
    typeof categoryParams === 'string'
      ? categoryParams.split(CATEGORY_QUERY_SEPARATOR_SYMBOL)
      : undefined

  return categoryIds
}
