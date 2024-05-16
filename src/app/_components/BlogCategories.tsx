'use client'

import { useState, useEffect } from 'react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategoryListbox } from '@/components/CategoryListbox'

import { type CategoryOptionType } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY_OPTION } from '@/constants/categoryConstants'
import { SORT_KEY } from '@/constants/searchParams'

export function BlogCategories() {
  const [categoryOption, setCategoryOption] = useState<CategoryOptionType>(
    DEFAULT_CATEGORY_OPTION,
  )
  const updateSearchParams = useUpdateSearchParams()

  useEffect(() => {
    updateSearchParams({ [SORT_KEY]: categoryOption })
  }, [categoryOption, updateSearchParams])

  return (
    <CategoryListbox
      categoryOption={categoryOption}
      onCategoryOptionChange={setCategoryOption}
    />
  )
}
