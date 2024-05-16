import {
  type CategoryOptionType,
  type CategorySetting,
} from '@/types/categoryTypes'

export const DEFAULT_CATEGORY_OPTION: CategoryOptionType = 'all'

export const categorySettings: CategorySetting[] = [
  { id: 'all', name: 'All' },
  { id: 'blog', name: 'Blog' },
  { id: 'events', name: 'Events' },
] as const

export const VALID_CATEGORY_OPTIONS = categorySettings.map(
  (setting) => setting.id,
)
