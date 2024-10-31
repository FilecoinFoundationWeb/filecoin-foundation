'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxButton as HeadlessUIListboxButton,
  ListboxOptions as HeadlessUIListboxOptions,
  ListboxOption as HeadlessUIListboxOption,
} from '@headlessui/react'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import type { Column } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

type FilterOption = {
  id: string
  name: string
}

type SelectFilterProps = {
  column: Column<AllocatorWithDatacap>
  options: ReadonlyArray<FilterOption>
  defaultOptionLabel: string
}

const DEFAULT_FILTER_ID = ''

export function SelectFilter({
  column,
  options,
  defaultOptionLabel,
}: SelectFilterProps) {
  const currentFilterId = column.getFilterValue()

  const defaultOption: FilterOption = {
    id: DEFAULT_FILTER_ID,
    name: defaultOptionLabel,
  }

  const allOptions = [defaultOption, ...options]

  const selectedOption =
    allOptions.find((option) => option.id === currentFilterId) || defaultOption

  return (
    <HeadlessUIListbox value={selectedOption} onChange={handleOptionChange}>
      <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
        <span className="truncate">{selectedOption.name}</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </HeadlessUIListboxButton>

      <HeadlessUIListboxOptions
        as="ul"
        anchor={{ to: 'bottom start', gap: 12 }}
        className="rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
        {allOptions.map((option) => (
          <HeadlessUIListboxOption
            key={option.id}
            as="li"
            value={option}
            className="group flex cursor-default items-center justify-between gap-12 bg-transparent px-5 py-2 data-[focus]:bg-brand-500"
          >
            <span>{option.name}</span>
            <span className="invisible mb-px group-data-[selected]:visible">
              <Icon component={Check} size={20} />
            </span>
          </HeadlessUIListboxOption>
        ))}
      </HeadlessUIListboxOptions>
    </HeadlessUIListbox>
  )

  function handleOptionChange(newOption: FilterOption) {
    if (newOption.id === DEFAULT_FILTER_ID) {
      resetFilter()
    }
    column.setFilterValue(newOption.id)
  }

  function resetFilter() {
    column.setFilterValue(undefined)
  }
}
