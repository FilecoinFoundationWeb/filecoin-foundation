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

export function Category({ query, settings, counts }: CategoryProps) {
  const [categoryOption, setCategoryOption] = useState(query || '')
  const { updateSearchParams } = useUpdateSearchParams()

  function handleCategoryChange(newValue: CategoryOption) {
    setCategoryOption(newValue)
    updateSearchParams({ [CATEGORY_KEY]: newValue })
  }

  useEffect(() => {
    const categoryIsReset = !query

    if (categoryIsReset) {
      setCategoryOption('')
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
          categoryOption={categoryOption}
          categorySettings={settings}
          categoryCounts={counts}
          onCategoryOptionChange={handleCategoryChange}
        />
      </div>
    </>
  )
}
