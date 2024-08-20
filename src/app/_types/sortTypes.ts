import {
  DEFAULT_SORT_OPTION_ALPHABETICAL,
  DEFAULT_SORT_OPTION_CHRONOLOGICAL,
  sortTypes,
} from '@/constants/sortConstants'

type SortOptionType = typeof sortTypes

type ChronologicalSort = SortOptionType['chronologicalSort']
type AlphabeticalSort = SortOptionType['alphabeticalSort']

type ChronologicalSortValues = ChronologicalSort['values'][number]
type AlphabeticalSortValues = AlphabeticalSort['values'][number]

export type ChronologicalSortId = ChronologicalSortValues['id']
export type AlphabeticalSortId = AlphabeticalSortValues['id']

export type SortId = ChronologicalSortId | AlphabeticalSortId

export type SortOption = {
  id: SortId
  name: ChronologicalSortValues['name'] | AlphabeticalSortValues['name']
}

export type SortableByDate = {
  publishedOn?: string | Date
  startDate?: string | Date
}

export type SortableAlphetically = {
  title: string
}

export type DefaultSortType =
  | typeof DEFAULT_SORT_OPTION_CHRONOLOGICAL
  | typeof DEFAULT_SORT_OPTION_ALPHABETICAL
