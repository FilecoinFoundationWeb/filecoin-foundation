import { NextServerSearchParams } from '@/types/searchParams'

export function isResetCategoryApplied(searchParams: NextServerSearchParams) {
  return Object.keys(searchParams).length === 0
}
