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

import type { Allocator } from '../schemas/AllocatorSchema'

type SortOption = {
  id: string
  name: string
}

type SortListboxProps = {
  column: Column<Allocator>
  options: ReadonlyArray<SortOption>
  resetOptionName: string
}

const EMPTY_FILTER_VALUE = ''

export function SelectFilter({
  column,
  options,
  resetOptionName,
}: SortListboxProps) {
  const currentFilterValue =
    column.getFilterValue()?.toString() || EMPTY_FILTER_VALUE

  const resetOption: SortOption = {
    id: EMPTY_FILTER_VALUE,
    name: resetOptionName,
  }

  const allOptions = [resetOption, ...options]

  const currentOption =
    allOptions.find((option) => option.id === currentFilterValue) || resetOption

  return (
    <HeadlessUIListbox
      value={currentOption}
      onChange={(newOption) => column.setFilterValue(newOption.id)}
    >
      <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
        <span>{currentOption.name}</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </HeadlessUIListboxButton>

      <HeadlessUIListboxOptions
        as="ul"
        anchor={{ to: 'bottom', gap: 8 }}
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
}