import type { QueryParams } from '../../../types/urlTypes'
import { normalizeQueryParam } from '../../../utils/paramsUtils'
import { SEARCH_KEY } from '../Search'

export function normalizeSearchParams(
  params: QueryParams,
  key: string = SEARCH_KEY,
) {
  return normalizeQueryParam(params, key)
}
