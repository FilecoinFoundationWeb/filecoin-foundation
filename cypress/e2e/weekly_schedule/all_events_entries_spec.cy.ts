import { PATHS } from '@/constants/paths'

import { getFieldSettings } from '@/utils/cmsFieldUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getFieldSettings({
  collectionName: 'event_entries',
  fieldName: 'category',
})

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryIds,
})
