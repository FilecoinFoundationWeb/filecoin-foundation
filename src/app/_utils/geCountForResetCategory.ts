import { DEFAULT_CATEGORY } from '@/components/Category'

import { CategoryCounts } from '@/types/categoryTypes'

export function getCountForResetCategory(counts: CategoryCounts) {
  const totalSum = Object.values(counts).reduce((sum, value) => sum + value, 0)

  if (totalSum !== 0) {
    return {
      [DEFAULT_CATEGORY]: totalSum,
    }
  }
}
