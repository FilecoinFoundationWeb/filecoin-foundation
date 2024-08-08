import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxProps,
  // ListboxOptionProps,
} from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
// import { clsx } from 'clsx'

import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon } from '@/components/Icon'

type OptionType = {
  id: string
  value: string
  count?: number
  disabled?: boolean
}

type FormListboxProps<Option extends OptionType> = {
  label: FormLabelProps['label']
  hideLabel?: FormLabelProps['isHidden']
  error?: string
  options: Array<Option>
  selectedOption?: Option
  placeholder: string
  defaultValue?: Option
  onChange?: (option: Option) => void
} & Omit<ListboxProps, 'value' | 'defaultValue' | 'onChange'>

export function FormListbox<Option extends OptionType>({
  label,
  hideLabel,
  error,
  options,
  selectedOption,
  placeholder,
  ...props
}: FormListboxProps<Option>) {
  return (
    <Field className="relative w-full">
      <FormLabel label={label} isHidden={hideLabel} />
      <Listbox
        {...props}
        value={selectedOption}
        invalid={Boolean(error)}
        by="id"
      >
        <ListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400 md:min-w-40">
          <div className="inline-flex items-center gap-2">
            <Icon component={ArrowsDownUp} />
            <span className="hidden md:block">
              {selectedOption?.value || placeholder}
            </span>
          </div>
          <span className="hidden md:block">
            <Icon component={CaretDown} size={16} weight="bold" />
          </span>
        </ListboxButton>
        <ListboxOptions
          as="ul"
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
        >
          {options.map((option) => {
            return (
              <ListboxOption
                key={option.id}
                as="li"
                value={option}
                disabled={option.disabled}
                className="group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
              >
                <span>
                  {option.value}
                  {option.count && (
                    <span className="ml-2 text-sm font-light">
                      ({option.count})
                    </span>
                  )}
                </span>

                <span className="mb-px [.group:not([data-selected])_&]:hidden">
                  <Icon component={Check} size={20} />
                </span>
              </ListboxOption>
            )
          })}
        </ListboxOptions>
      </Listbox>
    </Field>
  )
}
