import { type SortOptionType, type SortSetting } from '@/types/sortTypes'

export const DEFAULT_SORT_OPTION: SortOptionType = 'newest'

export const sortSettings: SortSetting[] = [
  { id: 'newest', name: 'Newest' },
  { id: 'oldest', name: 'Oldest' },
] as const

export const VALID_SORT_OPTIONS = sortSettings.map((setting) => setting.id)
