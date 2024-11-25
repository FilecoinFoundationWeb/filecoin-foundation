'use client'

import { useState } from 'react'

import { ALL_LOCATIONS_OPTION } from '@/constants/filterConstants'
import { LOCATION_KEY } from '@/constants/searchParams'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { FilterListbox } from '@/components/FilterListbox'
import { type OptionType } from '@/components/ListboxOption'

type LocationFilterProps = {
  query: ReturnType<typeof useCategory>['categoryQuery']
  options: Array<OptionType>
}

export function LocationFilter({ query, options }: LocationFilterProps) {
  const [optionId, setOptionId] = useState<OptionType['id']>(
    query || ALL_LOCATIONS_OPTION.id,
  )

  const { updateSearchParams } = useUpdateSearchParams()

  const selectedCategory =
    options.find((option) => option.id === optionId) || options[0]

  return (
    <FilterListbox
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
    if (optionId === ALL_LOCATIONS_OPTION.id) {
      updateSearchParams({ [LOCATION_KEY]: false })
    } else {
      updateSearchParams({ [LOCATION_KEY]: optionId })
    }
  }
}
