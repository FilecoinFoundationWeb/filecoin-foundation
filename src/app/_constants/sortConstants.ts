import { type SortSetting } from '@/types/sortTypes'

export const sortSettings: SortSetting[] = [
  { id: 'newest', name: 'Newest' },
  { id: 'oldest', name: 'Oldest' },
]

export const VALID_SORT_OPTIONS = sortSettings.map((setting) => setting.id)
