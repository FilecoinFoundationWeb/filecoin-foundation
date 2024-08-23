import { CategoryCounts } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

export function getTotalCategoryCount(counts?: CategoryCounts) {
  if (!counts) return undefined

  const totalSum = calculateTotalSum(counts)

  return totalSum > 0 ? { [DEFAULT_CATEGORY]: totalSum } : undefined
}

function calculateTotalSum(counts: CategoryCounts): number {
  return Object.values(counts).reduce((sum, value) => sum + value, 0)
}
