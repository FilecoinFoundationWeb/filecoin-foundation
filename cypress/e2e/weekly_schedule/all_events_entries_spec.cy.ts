import { PATHS } from '@/constants/paths'

import { getCategorySettings } from '@/utils/categoryUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validCategoryIds } = getCategorySettings('event_entries')

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryIds,
})
