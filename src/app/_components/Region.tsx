'use client'

import { useState } from 'react'

import type { CategoryOption, CategoryId } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'
import { REGION_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { RegionListbox } from '@/components/RegionListbox'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<CategoryOption>
  counts?: ReturnType<typeof useCategory>['categoryCounts']
}

export function Region({ query, options, counts }: CategoryProps) {
  const [categoryId, setCategoryId] = useState<CategoryId>(
    query || DEFAULT_CATEGORY,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  const selectedCategory = options.find((option) => option.id === categoryId)

  return (
    <RegionListbox
      selected={selectedCategory}
      options={options}
      counts={counts}
      onChange={updateCategoryAndParams}
    />
  )

  function updateCategoryAndParams(category: CategoryOption) {
    setCategoryId(category.id)
    updateParams(category.id)
  }

  function updateParams(categoryId: CategoryId) {
    if (categoryId === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [REGION_KEY]: categoryId })
    }
  }
}
