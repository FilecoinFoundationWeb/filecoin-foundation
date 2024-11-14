'use client'

import { useState } from 'react'

import type { CategoryOption, CategoryId } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryListbox } from '@/components/CategoryListbox'
import { CategorySidebar } from '@/components/CategorySidebar'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<CategoryOption>
  counts?: ReturnType<typeof useCategory>['categoryCounts']
}

export function Category({ query, options, counts }: CategoryProps) {
  const [categoryId, setCategoryId] = useState<CategoryId>(
    query || DEFAULT_CATEGORY,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  const selectedCategory = options.find((option) => option.id === categoryId)

  return (
    <>
      <div className="hidden lg:block">
        <CategorySidebar
          selectedId={categoryId}
          options={options}
          counts={counts}
          onChange={updateCategoryAndParams}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          selected={selectedCategory}
          options={options}
          counts={counts}
          onChange={updateCategoryAndParams}
        />
      </div>
    </>
  )

  function updateCategoryAndParams(category: CategoryOption) {
    setCategoryId(category.id)
    updateParams(category.id)
  }

  function updateParams(categoryId: CategoryId) {
    if (categoryId === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: categoryId })
    }
  }
}
