'use client'

import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import type { Icon as IconType } from '@phosphor-icons/react'
import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from './Icon'
import { backgroundVariants, useBackground } from './Section/Section'

export type Option = {
  id: string | number
  label: string
  disabled?: boolean
}

type ListboxProps<T extends Option> = {
  Icon: IconType
  options: ReadonlyArray<T>
  selected: T
  setSelected: (option: T) => void
}

export function Listbox<T extends Option>({
  options,
  selected,
  setSelected,
  Icon: IconComponent,
}: ListboxProps<T>) {
  const { theme } = useBackground()

  return (
    <HeadlessListbox value={selected} onChange={setSelected}>
      <ListboxButton className="listbox-button">
        <span className="flex items-center gap-2">
          <Icon component={IconComponent} size={20} />
          {selected.label}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon component={CaretDownIcon} size={20} />
        </span>
      </ListboxButton>

      <ListboxOptions
        transition
        anchor="bottom start"
        className={clsx(
          backgroundVariants[theme],
          'z-50 w-(--button-width) space-y-2 rounded-lg border border-(--color-listbox-border) p-2 shadow-xs transition duration-100 ease-in [--anchor-gap:--spacing(2)] focus:outline-none data-leave:data-closed:opacity-0',
        )}
      >
        {options.map((option) => (
          <ListboxOption
            key={option.label}
            value={option}
            disabled={option.disabled}
            className="group flex cursor-default items-center gap-2 rounded-md px-4 py-3 select-none data-disabled:cursor-not-allowed data-disabled:opacity-60 data-focus:bg-(--color-listbox-option-background-hover)! data-selected:bg-(--color-listbox-option-background)"
          >
            <div className="font-semibold text-(--color-listbox-button-text)">
              {option.label}
            </div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  )
}
