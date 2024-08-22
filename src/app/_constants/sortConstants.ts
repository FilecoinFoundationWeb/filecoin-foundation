type SortOption = {
  readonly id: string
  readonly name: string
}

type SortType = {
  readonly default: string
  readonly values: readonly SortOption[]
}

const createSortIds = (sortType: SortType) =>
  sortType.values.map((option) => option.id)

export const SORT_TYPES = {
  chronological: {
    default: 'newest',
    values: [
      { id: 'newest', name: 'Newest' },
      { id: 'oldest', name: 'Oldest' },
    ],
  },
  alphabetical: {
    default: 'a-z',
    values: [
      { id: 'a-z', name: 'Alphabetical (A-Z)' },
      { id: 'z-a', name: 'Alphabetical (Z-A)' },
    ],
  },
} as const

export const CHRONOLOGICAL_SORT_IDS = createSortIds(SORT_TYPES.chronological)
export const ALPHABETICAL_SORT_IDS = createSortIds(SORT_TYPES.alphabetical)

export const VALID_SORT_IDS = [
  ...CHRONOLOGICAL_SORT_IDS,
  ...ALPHABETICAL_SORT_IDS,
]

export const DEFAULT_SORT_OPTION = {
  chronological: SORT_TYPES.chronological.default,
  alphabetical: SORT_TYPES.alphabetical.default,
} as const
