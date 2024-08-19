const sortOptions = {
  cronologicalSort: {
    default: 'newest',
    values: [
      { id: 'newest', name: 'Newest' },
      { id: 'oldest', name: 'Oldest' },
    ],
  },
  alphabeticalSort: {
    default: 'a-z',
    values: [
      { id: 'a-z', name: 'Alphabetical (A-Z)' },
      { id: 'z-a', name: 'Alphabetical (Z-A)' },
    ],
  },
} as const

function extractSortIds(options: typeof sortOptions) {
  return {
    cronologicalIds: options.cronologicalSort.values.map((option) => option.id),
    alphabeticalIds: options.alphabeticalSort.values.map((option) => option.id),
  }
}

export const { cronologicalIds, alphabeticalIds } = extractSortIds(sortOptions)

export const { cronologicalSort, alphabeticalSort } = sortOptions

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
