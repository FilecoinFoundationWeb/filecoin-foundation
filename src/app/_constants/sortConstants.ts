export const sortTypes = {
  chronologicalSort: {
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

export const { chronologicalSort, alphabeticalSort } = sortTypes

export const chronologicalSortIds = chronologicalSort.values.map(
  (option) => option.id,
)

export const alphabeticalSortIds = alphabeticalSort.values.map(
  (option) => option.id,
)

export const VALID_SORT_IDS = [
  ...chronologicalSort.values.map((setting) => setting.id),
  ...alphabeticalSort.values.map((setting) => setting.id),
]

export const DEFAULT_SORT_OPTION_CHRONOLOGICAL = chronologicalSort.default
export const DEFAULT_SORT_OPTION_ALPHABETICAL = alphabeticalSort.default
