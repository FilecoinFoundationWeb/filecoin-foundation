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
  hasResetToDefaultCategory?: boolean
}

export const DEFAULT_CATEGORY = 'All'

export function Category({
  query,
  settings,
  counts,
  hasResetToDefaultCategory = false,
}: CategoryProps) {
  const defaultCategoryOption = query || DEFAULT_CATEGORY

  const [categoryOption, setCategoryOption] = useState(defaultCategoryOption)
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  function handleCategoryChange(newValue: CategoryOption) {
    setCategoryOption(newValue)

    if (newValue === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [CATEGORY_KEY]: newValue })
    }
  }

  useEffect(() => {
    const categoryIsReset = !query

    if (categoryIsReset) {
      setCategoryOption(DEFAULT_CATEGORY)
    } else {
      setCategoryOption(query)
    }
  }, [query])

  return (
    <>
      <div className="hidden lg:block">
        <CategorySelect
          categoryOption={categoryOption}
          categorySettings={settings}
          categoryCounts={counts}
          onCategoryOptionChange={handleCategoryChange}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          hasResetToDefaultCategory={hasResetToDefaultCategory}
          categoryOption={categoryOption}
          categorySettings={settings}
          categoryCounts={counts}
          onCategoryOptionChange={handleCategoryChange}
        />
      </div>
    </>
  )
}
