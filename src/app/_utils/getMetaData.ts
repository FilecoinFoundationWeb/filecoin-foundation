import { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from './formatDate'

export function getMetaData(publishedOn?: BlogPostData['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}
