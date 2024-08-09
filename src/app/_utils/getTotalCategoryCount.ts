import { DEFAULT_CATEGORY } from '@/components/Category'

import { CategoryCounts } from '@/types/categoryTypes'
import { NextServerSearchParams } from '@/types/searchParams'

export function getTotalCategoryCount(counts: CategoryCounts) {
  const totalSum = Object.values(counts).reduce((sum, value) => sum + value, 0)

  return {
    [DEFAULT_CATEGORY]: totalSum,
  }
}

export function getIsCategoryApplied(searchParams: NextServerSearchParams) {
  return Object.keys(searchParams).length === 0
}
