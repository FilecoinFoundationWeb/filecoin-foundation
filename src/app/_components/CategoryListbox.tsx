'use client'

import { Listbox } from '@headlessui/react'

import { type CategoryCounts, type CategoryOption } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected?: CategoryOption
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryOption) => void
}

type OptionWithCategoryCount = Pick<CategoryListboxProps, 'options' | 'counts'>

export function CategoryListbox({
  selected,
  options,
  counts,
  onChange,
}: CategoryListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(counts)
  const optionsWithCounts = getOptionsWithCounts({ options, counts })

  const allOption = {
    id: DEFAULT_CATEGORY,
    name: DEFAULT_CATEGORY,
    count: totalCategoryCount?.All || 0,
  }

  return (
    <Listbox value={selected || allOption} onChange={onChange}>
      <ListboxButton text={selected?.name || 'Category'} />
      <ListboxOptions>
        {totalCategoryCount && <ListboxOption option={allOption} />}
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
