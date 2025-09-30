import { parseAsStringLiteral, useQueryState } from 'nuqs'

import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import { BLOG_CATEGORY_VALUES } from '../schemas/BlogPostFrontmatterSchema'

const URL_SEARCH_PARAM = 'category'

export function useCategoryState() {
  return useQueryState(
    URL_SEARCH_PARAM,
    parseAsStringLiteral([...BLOG_CATEGORY_VALUES, DEFAULT_FILTER_ID])
      .withDefault(DEFAULT_FILTER_ID)
      .withOptions({ shallow: true }),
  )
}
