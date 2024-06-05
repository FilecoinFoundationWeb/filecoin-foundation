import { type BlogPostData } from '@/types/blogPostTypes'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

export function getCategoryLabel(category: BlogPostData['category']) {
  const { fields } = getCollectionConfig('blog')
  const categoryOptions = getCMSFieldOptions(fields, 'category')
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
