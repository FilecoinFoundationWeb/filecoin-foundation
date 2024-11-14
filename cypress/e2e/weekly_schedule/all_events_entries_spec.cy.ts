import { PATHS } from '@/constants/paths'

import { getCategorySettings } from '@/utils/categoryUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getCategorySettings({
  collectionName: 'event_entries',
})

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryIds,
})
