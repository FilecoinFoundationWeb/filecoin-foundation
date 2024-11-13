'use client'

import { useEffect, useState } from 'react'

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
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(
    query || DEFAULT_CATEGORY,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    setSelectedCategory(query || DEFAULT_CATEGORY)
  }, [query])

  function handleChange(category: CategoryId) {
    setSelectedCategory(category)
    updateParams(category)
  }

  function updateParams(category: CategoryId) {
    if (category === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: category })
    }
  }

  return (
    <>
      <div className="hidden lg:block">
        <CategorySidebar
          selected={selectedCategory}
          options={options}
          counts={counts}
          onChange={handleChange}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          selected={selectedCategory}
          options={options}
          counts={counts}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
