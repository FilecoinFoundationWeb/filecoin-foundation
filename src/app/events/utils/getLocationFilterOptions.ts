import { getCMSOptionsWithDefault } from '@/utils/getCMSOptionsWithDefault'

import {
  FILTERS_CONFIG,
  VIRTUAL_EVENT_FILTER_OPTION,
} from '../constants/constants'

export function getLocationListboxOptions() {
  const locationOptions = getCMSOptionsWithDefault({
    collectionName: FILTERS_CONFIG.location.collectionName,
    fieldName: FILTERS_CONFIG.location.fieldName,
    defaultOption: FILTERS_CONFIG.location.defaultOption,
  })

  return [...locationOptions, VIRTUAL_EVENT_FILTER_OPTION]
}
