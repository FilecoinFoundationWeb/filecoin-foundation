'use client'

import { Fragment } from 'react'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { type SortOptionType } from '@/types/sortTypes'

import { sortSettings } from '@/constants/sortConstants'

type SortListboxProps = {
  sortOption: SortOptionType
  onSortOptionChange: (selectedSortOption: SortOptionType) => void
}

export function SortListbox({
  sortOption,
  onSortOptionChange,
}: SortListboxProps) {
  const selectedSortSetting =
    sortSettings.find((option) => option.id === sortOption) || sortSettings[0]

  return (
    <Listbox value={sortOption} onChange={onSortOptionChange}>
      {({ open }) => (
        <>
          <Listbox.Button
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Sort options"
            className="border-1 inline-flex items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 hover:border-current hover:text-brand-400 focus:outline-2 focus:outline-brand-100 sm:min-w-40"
          >
            <div className="inline-flex items-center gap-2">
              <Icon component={ArrowsDownUp} />
              <span className="hidden sm:block">
                {selectedSortSetting.name}
              </span>
            </div>
            <span className="hidden sm:block">
              <Icon component={CaretDown} size={16} weight="bold" />
            </span>
          </Listbox.Button>
          <Listbox.Options
            aria-labelledby="listbox-button"
            className="absolute z-10 mt-14 min-w-40 overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-1 text-brand-100 focus-within:outline-2 focus:outline-2 focus:outline-brand-100"
          >
            {sortSettings.map((option) => (
              <Listbox.Option key={option.id} value={option.id} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={clsx(
                      'flex cursor-default items-center justify-between gap-12 px-5 py-2',
                      { 'bg-brand-700': active, 'bg-transparent': !active },
                    )}
                  >
                    {option.name}
                    {selected && <Icon component={Check} size={20} />}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
