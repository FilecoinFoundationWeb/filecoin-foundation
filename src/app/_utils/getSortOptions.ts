import { DefaultSortType } from '@/types/sortTypes'

import { alphabeticalSort, chronologicalSort } from '@/constants/sortConstants'

export function getSortOptions(defaultSortOption: DefaultSortType) {
  if (defaultSortOption === alphabeticalSort.default) {
    return alphabeticalSort.values
  } else if (defaultSortOption === chronologicalSort.default) {
    return chronologicalSort.values
  } else {
    throw new Error(`Invalid defaultSortOption: ${defaultSortOption}`)
  }
}
