import type { DefaultSortType } from '@/types/sortTypes'

import { SORT_TYPES } from '@/constants/sortConstants'

export function getSortOptions(defaultSortId: DefaultSortType) {
  switch (defaultSortId) {
    case SORT_TYPES.alphabetical.default:
      return SORT_TYPES.alphabetical.values
    case SORT_TYPES.chronological.default:
      return SORT_TYPES.chronological.values
    default:
      throw new Error(`Invalid default sort option: ${defaultSortId}`)
  }
}
