const INITIAL_REACT_TABLE_STATE = {
  id: 'name',
  desc: false,
} as const

const NAME_COLUMN_SORT_OPTIONS = [
  { id: 'asc', name: 'Organization (A-Z)' },
  { id: 'desc', name: 'Organization (Z-A)' },
] as const

export const NAME_COLUMN_SORT_CONFIG = {
  initialReactTableState: INITIAL_REACT_TABLE_STATE,
  options: NAME_COLUMN_SORT_OPTIONS,
  defaultOption: NAME_COLUMN_SORT_OPTIONS[0],
} as const
