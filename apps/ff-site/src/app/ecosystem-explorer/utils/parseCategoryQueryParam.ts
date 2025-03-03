import { CATEGORY_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'

export function parseCategoryQueryParam(
  searchParams: QueryParams,
  key: typeof CATEGORY_KEY,
) {
  const categoryParams = searchParams[key]

  const categoryIds =
    typeof categoryParams === 'string'
      ? categoryParams.split(CATEGORY_QUERY_SEPARATOR_SYMBOL)
      : undefined

  return categoryIds
}
