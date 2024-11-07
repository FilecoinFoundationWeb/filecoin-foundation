'use client'

import { useEffect } from 'react'

import {
  Listbox,
  ListboxOptions,
  ListboxOption as HeadlessUIListboxOption,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { Check, CaretDown } from '@phosphor-icons/react/dist/ssr'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { ListboxOptionText } from '@/components/Form/FormListbox/ListboxOptionText'
import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
// import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected: CategoryId | undefined
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryId) => void
}

export type OptionWithCategoryCount = {
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
      <ListboxButton>
        <span>Category</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </ListboxButton>
      <HeadlessUIListboxOptions
        as="ul"
        className="absolute z-10 mt-2 max-h-96 overflow-scroll rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
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
      </HeadlessUIListboxOptions>
    </Listbox>
  )
}

function getOptionsWithCounts({ options, counts }: OptionWithCategoryCount) {
  return options.map((option) => ({
    ...option,
    ...(counts && { count: counts[option.id] || 0 }),
  }))
}
