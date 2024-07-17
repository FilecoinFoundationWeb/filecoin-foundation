import { getCategorySettings } from '@/_utils/categoryUtils'

import { PATHS } from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('events')

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: validCategoryOptions,
  categoryType: 'involvement',
})
