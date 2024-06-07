import { type EventData } from '@/types/eventTypes'

import { getCategoryLabelGeneric } from '@/utils/getCategoryLabelGeneric'

export function getInvolvementLabel(involvementType: EventData['involvement']) {
  return getCategoryLabelGeneric<EventData>({
    collectionName: 'events',
    fieldName: 'involvement',
    category: involvementType,
  })
}
