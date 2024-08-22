'use client'

import { useEffect, useState } from 'react'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryListbox } from '@/components/CategoryListbox'
import { CategorySelect } from '@/components/CategorySelect'

import type { CategorySetting, CategoryOption } from '@/types/categoryTypes'

import { CATEGORY_KEY } from '@/constants/searchParams'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  settings: CategorySetting[]
  counts?: ReturnType<typeof useCategory>['categoryCounts']
}

export const DEFAULT_CATEGORY = 'All'

export function Category({ query, settings, counts }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(
    query || DEFAULT_CATEGORY,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    setSelectedCategory(query || DEFAULT_CATEGORY)
  }, [query])

  function handleCategoryChange(newCategory: CategoryOption) {
    setSelectedCategory(newCategory)
    updateCategoryParams(newCategory)
  }

  function updateCategoryParams(category: CategoryOption) {
    if (category === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: category })
    }
  }

  return (
    <>
      <div className="hidden lg:block">
        <CategorySelect
          selectedCategory={selectedCategory}
          categoryOptions={settings}
          categoryCounts={counts}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          selectedCategory={selectedCategory}
          categoryOptions={settings}
          categoryCounts={counts}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </>
  )
}
