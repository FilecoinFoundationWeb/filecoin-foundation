'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
  ListboxOption as HeadlessUIListboxOption,
} from '@headlessui/react'
import { Check } from '@phosphor-icons/react/dist/ssr'
import type { Column } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'

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
      <ListboxButton text={selectedOption.name} />
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
