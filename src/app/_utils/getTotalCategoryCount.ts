import type { CategoryOption } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

export function getTotalCategoryCountFromOptions(
  options?: Array<CategoryOption>,
) {
  if (!options || options.length === 0) return undefined

  const totalSum = calculateTotalSumFromOptions(options)

  return totalSum > 0 ? { [DEFAULT_CATEGORY]: totalSum } : undefined
}

function calculateTotalSumFromOptions(options: Array<CategoryOption>): number {
  return options.reduce((sum, option) => {
    const count = option.count ?? 0
    return sum + count
  }, 0)
}
