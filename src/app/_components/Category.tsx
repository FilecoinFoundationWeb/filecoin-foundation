'use client'

import { useState, useEffect } from 'react'

import { ALL_CATEGORIES_OPTION } from '@/constants/filterConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategorySidebar } from '@/components/CategorySidebar'
import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/ListboxOption'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<OptionType>
}

export function Category({ query, options }: CategoryProps) {
  const [categoryId, setCategoryId] = useState<OptionType['id']>(
    query || ALL_CATEGORIES_OPTION.id,
  )
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  const selectedCategory =
    options.find((option) => option.id === categoryId) || ALL_CATEGORIES_OPTION

  useEffect(() => {
    setCategoryId(query || ALL_CATEGORIES_OPTION.id)
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
        <FilterListbox
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
    if (categoryId === ALL_CATEGORIES_OPTION.id) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: categoryId })
    }
  }
}
