'use client'

import {
  Listbox,
  ListboxOption,
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
// import { ListboxOption } from '@/components/ListboxOption'
// import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected: CategoryId | undefined
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryId) => void
}

export function CategoryListbox({
  selected,
  options,
  counts,
  onChange,
}: CategoryListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(counts)

  const optionsWithCounts = options.map((option) => ({
    ...option,
    count: counts?.[option.id] || 0,
  }))

  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton>
        <span>Category</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </ListboxButton>
      <HeadlessUIListboxOptions
        as="ul"
        className="absolute z-10 mt-2 max-h-96 min-w-40 overflow-scroll rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
        {totalCategoryCount && (
          <HeadlessUIListboxOption
            as="li"
            value={DEFAULT_CATEGORY}
            className="group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
          >
            <ListboxOptionText
              option={{
                id: DEFAULT_CATEGORY,
                name: DEFAULT_CATEGORY,
                count: totalCategoryCount.All,
              }}
            />
            <span className="mb-px [.group:not([data-selected])_&]:hidden">
              <Icon component={Check} size={20} />
            </span>
          </HeadlessUIListboxOption>
        )}
        {optionsWithCounts.map((option) => (
          <HeadlessUIListboxOption
            key={option.id}
            as="li"
            value={option.id}
            className="group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
          >
            <ListboxOptionText option={option} />
            <span className="mb-px [.group:not([data-selected])_&]:hidden">
              <Icon component={Check} size={20} />
            </span>
          </HeadlessUIListboxOption>
        ))}
      </HeadlessUIListboxOptions>
    </Listbox>
  )
}
