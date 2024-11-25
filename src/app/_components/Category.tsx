'use client'

import { useState, useEffect } from 'react'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryListbox } from '@/components/CategoryListbox'
import { CategorySidebar } from '@/components/CategorySidebar'
import type { OptionType } from '@/components/ListboxOption'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<OptionType>
}

export function Category({ query, options }: CategoryProps) {
  const [categoryId, setCategoryId] = useState<OptionType['id']>(
    query || DEFAULT_CATEGORY,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  const selectedCategory = options.find(
    (option) => option.id === categoryId,
  ) || {
    id: DEFAULT_CATEGORY,
    name: 'Category',
  }

  useEffect(() => {
    setCategoryId(query || DEFAULT_CATEGORY)
  }, [query])

  return (
    <>
      <div className="hidden lg:block">
        <CategorySidebar
          selectedId={categoryId}
          options={options}
          onChange={updateCategoryAndParams}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          selected={selectedCategory}
          options={options}
          onChange={updateCategoryAndParams}
        />
      </div>
    </>
  )

  function updateCategoryAndParams(category: OptionType) {
    setCategoryId(category.id)
    updateParams(category.id)
  }

  function updateParams(categoryId: OptionType['id']) {
    if (categoryId === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: categoryId })
    }
  }
}
