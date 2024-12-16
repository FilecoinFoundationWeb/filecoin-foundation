import { getCMSOptionsWithDefault } from '@/utils/getCMSOptionsWithDefault'

import {
  FILTERS_CONFIG,
  VIRTUAL_EVENT_FILTER_OPTION,
} from '../constants/constants'

export function getLocationListboxOptions() {
  const {
    location: { collectionName, fieldName, defaultOption },
  } = FILTERS_CONFIG

  const locationOptions = getCMSOptionsWithDefault({
    collectionName,
    fieldName,
    defaultOption,
  })

  return [...locationOptions, VIRTUAL_EVENT_FILTER_OPTION]
}
