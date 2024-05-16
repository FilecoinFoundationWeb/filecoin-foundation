'use client'

import { useState, useEffect } from 'react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryList } from '@/components/CategoryList'
import { CategoryListbox } from '@/components/CategoryListbox'

import { type CategoryOptionType } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY_OPTION } from '@/constants/categoryConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

export function BlogCategory() {
  const [categoryOption, setCategoryOption] = useState<CategoryOptionType>(
    DEFAULT_CATEGORY_OPTION,
  )
  const updateSearchParams = useUpdateSearchParams()

  useEffect(() => {
    updateSearchParams({ [CATEGORY_KEY]: categoryOption })
  }, [categoryOption, updateSearchParams])

  return (
    <>
      <div className="hidden lg:block">
        <CategoryList
          categoryOption={categoryOption}
          onCategoryOptionChange={setCategoryOption}
        />
      </div>
      <div className="block lg:hidden">
        <CategoryListbox
          categoryOption={categoryOption}
          onCategoryOptionChange={setCategoryOption}
        />
      </div>
    </>
  )
}
