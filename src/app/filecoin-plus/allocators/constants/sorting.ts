const initialTableState = {
  id: 'name',
  desc: false,
} as const

const defaultSortId = initialTableState.desc ? 'desc' : 'asc'

const ascSortOption = { id: 'asc', name: 'Organization (A-Z)' } as const
const descSortOption = { id: 'desc', name: 'Organization (Z-A)' } as const

const NAME_COLUMN_SORT_OPTIONS =
  defaultSortId === 'asc'
    ? [ascSortOption, descSortOption]
    : [descSortOption, ascSortOption]

export const NAME_COLUMN_SORT_CONFIG = {
  initialTableState,
  options: NAME_COLUMN_SORT_OPTIONS,
  defaultOption: NAME_COLUMN_SORT_OPTIONS[0],
} as const
