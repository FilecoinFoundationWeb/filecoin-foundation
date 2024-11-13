import { PATHS } from '@/constants/paths'

import { getCategorySettings } from '@/utils/categoryUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validCategoryIds } = getCategorySettings('blog_posts')

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryIds,
})
