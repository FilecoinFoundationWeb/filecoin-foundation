'use client'

import { useState, useEffect } from 'react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { type SortOptionType } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

export function BlogSort() {
  const [sortOption, setSortOption] =
    useState<SortOptionType>(DEFAULT_SORT_OPTION)
  const updateSearchParams = useUpdateSearchParams()

  useEffect(() => {
    updateSearchParams({ [SORT_KEY]: sortOption })
  }, [sortOption, updateSearchParams])

  return (
    <SortListbox sortOption={sortOption} onSortOptionChange={setSortOption} />
  )
}
