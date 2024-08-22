import { DEFAULT_SORT_OPTION, SORT_TYPES } from '@/constants/sortConstants'

type BaseSortType = typeof SORT_TYPES

type ChronologicalSort = BaseSortType['chronological']
type AlphabeticalSort = BaseSortType['alphabetical']

type ChronologicalSortValue = ChronologicalSort['values'][number]
type AlphabeticalSortValue = AlphabeticalSort['values'][number]

export type ChronologicalSortId = ChronologicalSortValue['id']
export type AlphabeticalSortId = AlphabeticalSortValue['id']

export type SortId = ChronologicalSortId | AlphabeticalSortId

export type SortOption = {
  id: SortId
  name: ChronologicalSortValue['name'] | AlphabeticalSortValue['name']
}

export type SortableByDate = {
  publishedOn?: string | Date
  startDate?: string | Date
}

export type SortableAlphabetically = {
  title: string
}

export type DefaultSortType =
  | (typeof DEFAULT_SORT_OPTION)['chronological']
  | (typeof DEFAULT_SORT_OPTION)['alphabetical']
