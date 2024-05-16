// import { type BlogPostData } from '@/types/blogPostTypes'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
// import { getBlogPostsData } from '@/utils/getBlogPostData'

// const posts = getBlogPostsData()

export function getBlogCategories() {
  const { fields } = getCollectionConfig('blog')
  const categoryOptions = getCMSFieldOptions(fields, 'category')
  return categoryOptions
}
