'use client'

import { ArrowsDownUp } from '@phosphor-icons/react'

import { Listbox } from '@filecoin-foundation/ui/Listbox'
import {
  ListboxButton,
  type ListboxButtonProps,
} from '@filecoin-foundation/ui/Listbox/ListboxButton'
import { ListboxOption } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { ListboxOptions } from '@filecoin-foundation/ui/Listbox/ListboxOptions'

export type SortListboxProps = {
  selected: OptionType
  onChange: (newOption: OptionType) => void
  options: ReadonlyArray<OptionType>
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
