import { useMemo } from 'react'

import { parseAsString, useQueryState } from 'nuqs'

import { DEFAULT_CATEGORY_KEY } from '../data/blogCategories'
import type { BlogPost } from '../types/blogPostType'
import type { AllowedCategory } from '../types/categoriesType'

const URL_SEARCH_PARAM = 'category'

type UseCategoryProps = {
  posts: Array<BlogPost>
}

export function useCategory({ posts }: UseCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useQueryState(
    URL_SEARCH_PARAM,
    parseAsString
      .withDefault(DEFAULT_CATEGORY_KEY)
      .withOptions({ shallow: false }),
  )

  const filteredPosts = useMemo(() => {
    if (selectedCategory === DEFAULT_CATEGORY_KEY) {
      return posts
    }

    return posts.filter((post) =>
      post.categories.includes(selectedCategory as AllowedCategory),
    )
  }, [posts, selectedCategory])

  const hasFilteredPosts = filteredPosts.length > 0

  return {
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
    hasFilteredPosts,
  }
}
