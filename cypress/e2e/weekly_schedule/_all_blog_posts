import { PATHS } from '../../../src/app/_constants/paths'
import { getCategorySettings } from '../../../src/app/_utils/categoryUtils'
import { createCategoryTests } from '../../support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('blog')

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryOptions,
  categoryType: 'category',
})
