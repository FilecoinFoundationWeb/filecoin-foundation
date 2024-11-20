import { PATHS } from '@/constants/paths'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryIds,
})
