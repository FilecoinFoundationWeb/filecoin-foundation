import type { ColumnSort, SortDirection } from '@tanstack/react-table'

import { findOrThrow } from '@/utils/findOrThrow'

import type { TableSortOption } from '../types'

const NAME_INITIAL_TABLE_STATE = {
  id: 'name',
  desc: false,
} as const satisfies ColumnSort

const DEFAULT_SORT_OPTION_ID = (
  NAME_INITIAL_TABLE_STATE.desc ? 'desc' : 'asc'
) satisfies SortDirection

const NAME_SORT_OPTIONS = [
  { id: 'asc', name: 'Organization (A-Z)' },
  { id: 'desc', name: 'Organization (Z-A)' },
] as const satisfies Array<TableSortOption>

export const NAME_SORT_CONFIG = {
  INITIAL_TABLE_STATE: NAME_INITIAL_TABLE_STATE,
  OPTIONS: NAME_SORT_OPTIONS,
  DEFAULT_OPTION: findOrThrow(NAME_SORT_OPTIONS, (option) => {
    return option.id === DEFAULT_SORT_OPTION_ID
  }),
} as const
