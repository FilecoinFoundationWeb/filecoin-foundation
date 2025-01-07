import { formatDate } from '@/utils/dateUtils'

import type { BlogPost } from '@/blog/types/blogPostType'

export function getMetaData(publishedOn?: BlogPost['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}
