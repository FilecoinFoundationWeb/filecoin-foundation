'use client'

import { useState, useEffect } from 'react'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'
import { LOCATION_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { type OptionType } from '@/components/ListboxOption'
import { LocationListbox } from '@/components/LocationListbox'

type LocationFilterProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<OptionType>
}

export function LocationFilter({ query, options }: LocationFilterProps) {
  const [optionId, setOptionId] = useState<OptionType['id']>(
    query || DEFAULT_CATEGORY,
  )

  console.log({ options })
  const { updateSearchParams, resetSearchParams } = useUpdateSearchParams()

  const selectedCategory =
    options.find((option) => option.id === optionId) || options[0]

  useEffect(() => {
    setOptionId(query || DEFAULT_CATEGORY)
  }, [query])

  return (
    <LocationListbox
      selected={selectedCategory}
      options={options}
      onChange={updateCategoryAndParams}
    />
  )

  function updateCategoryAndParams(category: OptionType) {
    setOptionId(category.id)
    updateParams(category.id)
  }

  function updateParams(optionId: OptionType['id']) {
    if (optionId === DEFAULT_CATEGORY) {
      resetSearchParams()
    } else {
      updateSearchParams({ [LOCATION_KEY]: optionId })
    }
  }
}
