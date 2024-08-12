import { SortSetting } from '@/types/sortTypes'

export const cronologicalIds = ['newest', 'oldest']
export const alphabeticalIds = ['a-z', 'z-a']

export const cronologicalSort = {
  default: 'newest' as const,
  ids: cronologicalIds,
  values: [
    { id: cronologicalIds[0], name: 'Newest' },
    { id: cronologicalIds[1], name: 'Oldest' },
  ] as SortSetting[],
}

export const alphabeticalSort = {
  default: 'a-z' as const,
  values: [
    { id: alphabeticalIds[0], name: 'Alphabetical (A-Z)' },
    { id: alphabeticalIds[1], name: 'Alphabetical (Z-A)' },
  ] as SortSetting[],
}

export const sortSettings = [
  ...cronologicalSort.values,
  ...alphabeticalSort.values,
]

export const VALID_SORT_OPTIONS = [
  ...cronologicalSort.values.map((setting) => setting.id),
  ...alphabeticalSort.values.map((setting) => setting.id),
]

export const DEFAULT_SORT_OPTION_CRONOLOGICAL = cronologicalSort.default
export const DEFAULT_SORT_OPTION_ALPHABETICAL = alphabeticalSort.default

export type DefaultSortType =
  | typeof DEFAULT_SORT_OPTION_CRONOLOGICAL
  | typeof DEFAULT_SORT_OPTION_ALPHABETICAL
