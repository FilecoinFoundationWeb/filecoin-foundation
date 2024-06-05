import { type EventData } from '@/types/eventTypes'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

export function getCategoryLabel(category: EventData['involvement']) {
  const { fields } = getCollectionConfig('events')
  const categoryOptions = getCMSFieldOptions(fields, 'involvement')
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
