import { getCategorySettings } from '@/utils/categoryUtils'

import { PATHS } from '@/constants/paths'
import { createCategoryTests } from '@/support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('event_entries')

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryOptions,
})
