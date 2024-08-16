import type { EventData } from '@/types/eventDataType'

import type { DynamicBaseData } from '@/schemas/dynamicDataBaseSchema'

export type SortOption = 'newest' | 'oldest'

export type SortSetting = {
  id: SortOption
  name: string
}

export type SortableByDate = {
  publishedOn?: DynamicBaseData['publishedOn']
  startDate?: EventData['startDate']
}
