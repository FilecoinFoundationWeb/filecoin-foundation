import {
  alphabeticalSort,
  cronologicalSort,
  DefaultSortType,
} from '@/constants/sortConstants'

export function getSortSettings(defaultSortOption: DefaultSortType) {
  if (defaultSortOption === alphabeticalSort.default) {
    return alphabeticalSort.values
  } else if (defaultSortOption === cronologicalSort.default) {
    return cronologicalSort.values
  } else {
    return []
  }
}
