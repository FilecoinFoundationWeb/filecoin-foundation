'use client'

import { useState } from 'react'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  type ComboboxProps,
} from '@headlessui/react'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'

import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon } from '@/components/Icon'

type OptionType = {
  id: string
  name: string
  disabled?: boolean
}

type HardCodedProps = 'virtual' | 'onClose'
type MultipleChoice = false

export type FormComboboxProps<Value extends OptionType = OptionType> = {
  options: Array<Value>
} & Omit<ComboboxProps<Value, MultipleChoice>, HardCodedProps> &
  FormLabelProps

export function FormCombobox<Value extends OptionType = OptionType>({
  label,
  hideLabel,
  options,
  ...props
}: FormComboboxProps<Value>) {
  const [query, setQuery] = useState<string>('')

  const filteredOptions = filerOptions(options, query)

  return (
    <Field>
      <FormLabel label={label} hideLabel={hideLabel} />
      <div className="relative">
        <Combobox<Value, MultipleChoice>
          {...props}
          virtual={{
            options: filteredOptions,
            disabled: (option) => !!option.disabled,
          }}
          onClose={resetQuery}
        >
          <ComboboxInput<Value>
            displayValue={(option) => option?.name}
            className="peer w-full rounded-lg border border-brand-300 bg-transparent px-4 py-3 text-brand-300 focus:brand-outline hover:border-brand-400 data-[disabled]:cursor-not-allowed md:min-w-40"
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 px-2.5 text-brand-300 peer-hover:text-brand-400">
            <Icon component={CaretDown} size={16} weight="bold" />
          </ComboboxButton>

          <ComboboxOptions
            transition
            className="absolute z-10 mt-2 w-[var(--input-width)] rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 transition duration-100 ease-in focus:brand-outline empty:invisible data-[leave]:data-[closed]:opacity-0"
          >
            {(props) => {
              const option: Value = props.option

              return (
                <ComboboxOption
                  key={option.id}
                  value={option}
                  className="group flex w-full cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
                >
                  <div className="text-brand-100">{option.name}</div>

                  <div className="invisible text-brand-100 group-data-[selected]:visible">
                    <Icon component={Check} size={20} />
                  </div>
                </ComboboxOption>
              )
            }}
          </ComboboxOptions>
        </Combobox>
      </div>
    </Field>
  )

  function filerOptions(options: Array<Value>, query: string) {
    if (query === '') {
      return options
    }

    return options.filter((option) => {
      return option.name.toLowerCase().includes(query.toLowerCase())
    })
  }

  function resetQuery() {
    setQuery('')
  }
}
