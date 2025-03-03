import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'

function hasFiltersApplied(searchParams: QueryParams) {
  return Object.keys(searchParams).length > 0
}

export function hasNoFiltersApplied(searchParams: QueryParams) {
  return !hasFiltersApplied(searchParams)
}
