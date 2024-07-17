import { getCategorySettings } from '@/_utils/categoryUtils'

import { PATHS } from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('blog')

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryOptions,
  categoryType: 'category',
})
