'use client'

import { useCallback, useEffect } from 'react'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryListbox } from '@/components/CategoryListbox'
import { CategorySelect } from '@/components/CategorySelect'

import { CategorySetting, type CategoryOption } from '@/types/categoryTypes'

import { CATEGORY_KEY } from '@/constants/searchParams'

type CategoryProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  settings: CategorySetting[]
}

export function Category({ query, settings }: CategoryProps) {
  const updateSearchParams = useUpdateSearchParams()

  useEffect(() => {
    if (query) {
      updateSearchParams({ [CATEGORY_KEY]: query })
    }
  }, [query, updateSearchParams])

  const handleCategoryChange = useCallback(
    (newValue: CategoryOption) => {
      updateSearchParams({ [CATEGORY_KEY]: newValue })
    },
    [updateSearchParams],
  )

  return (
    <>
      <div className="hidden lg:block">
        <CategorySelect
          categoryOption={query}
          categorySettings={settings}
          onCategoryOptionChange={handleCategoryChange}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          categoryOption={query}
          categorySettings={settings}
          onCategoryOptionChange={handleCategoryChange}
        />
      </div>
    </>
  )
}
