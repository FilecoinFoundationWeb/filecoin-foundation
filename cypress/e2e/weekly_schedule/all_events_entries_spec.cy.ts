import { getCategorySettings } from '@/utils/categoryUtils'

import { PATHS } from '@/constants/paths'
import { createCategoryTests } from '@/support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('events')

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryOptions,
})
