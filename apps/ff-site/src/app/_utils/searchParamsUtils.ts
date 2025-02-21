import type { NextServerSearchParams } from '@/types/searchParams'

function hasFiltersApplied(searchParams: NextServerSearchParams) {
  return Object.keys(searchParams).length > 0
}

export function hasNoFiltersApplied(searchParams: NextServerSearchParams) {
  return !hasFiltersApplied(searchParams)
}
