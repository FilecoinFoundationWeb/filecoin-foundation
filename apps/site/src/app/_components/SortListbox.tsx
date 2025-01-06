'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react'

import {
  ListboxButton,
  type ListboxButtonProps,
} from '@/components/Listbox/ListboxButton'
import { ListboxOption } from '@/components/Listbox/ListboxOption'
import type { OptionType } from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

export type SortListboxProps = {
  onChange: (newOption: OptionType) => void,
  options: ReadonlyArray<OptionType>,
  selected: OptionType,
  buttonIcon?: ListboxButtonProps['leadingIcon']
}

export function SortListbox({
  selected,
  onChange,
  options,
  buttonIcon = ArrowsDownUp,
}: SortListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton
        leadingIcon={buttonIcon}
        text={selected.name}
        compactBelow="md"
      />

      <ListboxOptions position="bottom end">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
