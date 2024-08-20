import type { Event } from '@/types/eventType'

import type { DynamicBaseData } from '@/schemas/dynamicDataBaseSchema'

export type SortOption = 'newest' | 'oldest'

export type SortSetting = {
  id: SortOption
  name: string
}

export type SortableByDate = {
  publishedOn?: DynamicBaseData['publishedOn']
  startDate?: Event['startDate']
}
