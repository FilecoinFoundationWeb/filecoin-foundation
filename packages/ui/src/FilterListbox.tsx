'use client'

import { FunnelSimpleIcon } from '@phosphor-icons/react'

import { Listbox } from '@filecoin-foundation/ui/Listbox'
import {
  ListboxButton,
  type ListboxButtonProps,
} from '@filecoin-foundation/ui/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@filecoin-foundation/ui/Listbox/ListboxOption'
import {
  ListboxOptions,
  type ListboxOptionsProps,
} from '@filecoin-foundation/ui/Listbox/ListboxOptions'

type FilterListboxProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
  buttonIcon?: ListboxButtonProps['leadingIcon']
  optionsPosition?: ListboxOptionsProps['position']
}

export function FilterListbox({
  selected,
  options,
  onChange,
  buttonIcon = FunnelSimpleIcon,
  optionsPosition,
}: FilterListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton text={selected.name} leadingIcon={buttonIcon} />
      <ListboxOptions position={optionsPosition}>
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
