import { PATHS } from '@/constants/paths'

import { getFieldSettings } from '@/utils/cmsFieldUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const { validIds: validCategoryIds } = getFieldSettings({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: validCategoryIds,
})
