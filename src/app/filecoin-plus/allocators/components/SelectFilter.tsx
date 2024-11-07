'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxButton as HeadlessUIListboxButton,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import type { Column } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'
import { ListboxOption } from '@/components/ListboxOption'

import type { Allocator } from '../schemas/AllocatorSchema'

type FilterOption = {
  id: string
  name: string
}

type SelectFilterProps = {
  column: Column<Allocator>
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
    <HeadlessUIListbox
      value={currentFilterId ?? DEFAULT_FILTER_ID}
      onChange={(selectedOptionId: FilterOption['id']) =>
        handleOptionChange(selectedOptionId)
      }
    >
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
          <ListboxOption key={option.id} option={option} />
        ))}
      </HeadlessUIListboxOptions>
    </HeadlessUIListbox>
  )

  function handleOptionChange(selectedOptionId: FilterOption['id']) {
    selectedOptionId === DEFAULT_FILTER_ID
      ? resetFilter()
      : column.setFilterValue(selectedOptionId)
  }

  function resetFilter() {
    column.setFilterValue(undefined)
  }
}
