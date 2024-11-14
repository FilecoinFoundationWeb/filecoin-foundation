import { PATHS } from '@/constants/paths'

import { getCategorySettings } from '@/utils/categoryUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getCategorySettings({
  collectionName: 'blog_posts',
})

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryIds,
})
