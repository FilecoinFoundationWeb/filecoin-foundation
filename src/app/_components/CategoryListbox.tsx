'use client'

import { Listbox } from '@headlessui/react'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected: CategoryId | undefined
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryId) => void
}

type OptionWithCategoryCount = {
  options: Array<CategoryOption>
  counts?: CategoryCounts
}

export function CategoryListbox({
  selected,
  options,
  counts,
  onChange,
}: CategoryListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(counts)
  const optionsWithCounts = getOptionsWithCounts({ options, counts })

  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton text="Category" />
      <ListboxOptions>
        {totalCategoryCount && (
          <ListboxOption
            option={{
              id: DEFAULT_CATEGORY,
              name: DEFAULT_CATEGORY,
              count: totalCategoryCount.All,
            }}
          />
        )}
        {optionsWithCounts.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}

function getOptionsWithCounts({ options, counts }: OptionWithCategoryCount) {
  return options.map((option) => ({
    ...option,
    ...(counts && { count: counts[option.id] || 0 }),
  }))
}
