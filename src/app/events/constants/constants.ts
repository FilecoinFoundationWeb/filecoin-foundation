import {
  DEFAULT_CATEGORY_FILTER_OPTION,
  DEFAULT_LOCATION_FILTER_OPTION,
} from '@/constants/filterConstants'

export const DEFAULT_CTA_TEXT = 'View Event Details'

export const FILTERS_CONFIG = {
  location: {
    collectionName: 'event_entries',
    fieldName: 'location.region',
    defaultOption: DEFAULT_LOCATION_FILTER_OPTION,
  },
  category: {
    collectionName: 'event_entries',
    fieldName: 'category',
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
  },
} as const
