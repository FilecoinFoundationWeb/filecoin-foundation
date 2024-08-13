import { DEFAULT_CATEGORY } from '@/components/Category'

import { CategoryCounts } from '@/types/categoryTypes'
import { NextServerSearchParams } from '@/types/searchParams'

export function getCountForResetCategory(counts: CategoryCounts) {
  const totalSum = Object.values(counts).reduce((sum, value) => sum + value, 0)

  if (totalSum !== 0) {
    return {
      [DEFAULT_CATEGORY]: totalSum,
    }
  }
}

export function isResetCategoryApplied(searchParams: NextServerSearchParams) {
  return Object.keys(searchParams).length === 0
}
