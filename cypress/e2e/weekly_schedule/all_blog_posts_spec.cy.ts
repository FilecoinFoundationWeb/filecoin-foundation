import { getCategorySettings } from '@/utils/categoryUtils'

import { PATHS } from '@/constants/paths'
import { createCategoryTests } from '@/support/categoryUtils'

const { validCategoryOptions } = getCategorySettings('blog_posts')

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryOptions,
})
