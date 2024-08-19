import { NextServerSearchParams } from '@/types/searchParams'

export function areFiltersReset(searchParams: NextServerSearchParams) {
  return Object.keys(searchParams).length === 0
}
