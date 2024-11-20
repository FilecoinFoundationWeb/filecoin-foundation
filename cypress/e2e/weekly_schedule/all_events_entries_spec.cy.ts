import { PATHS } from '@/constants/paths'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'event_entries',
  fieldName: 'category',
})

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryIds,
})
