import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  type ListboxProps,
} from '@headlessui/react'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'
import { Icon, type IconProps } from '@/components/Icon'

import { ListboxButtonText } from './ListboxButtonText'
import { ListboxOptionText } from './ListboxOptionText'

export type OptionType = {
  id: string
  name: string
  count?: number
  disabled?: boolean
}

type ExcludedHeadlessUIProps = 'as' | 'className' | 'id' | 'by' | 'invalid'

export type FormListboxProps<Option extends OptionType = OptionType> = {
  options: Array<Option>
  placeholder: string
  icon?: IconProps['component']
} & Omit<ListboxProps<'div', Option>, ExcludedHeadlessUIProps> &
  FormFieldProps

export function FormListbox<Option extends OptionType = OptionType>({
  label,
  hideLabel,
  error,
  options,
  value,
  placeholder,
  icon,
  ...rest
}: FormListboxProps<Option>) {
  return (
    <FormField label={label} hideLabel={hideLabel} error={error}>
      <Listbox<'div', Option>
        {...rest}
        as="div"
        by="id"
        value={value}
        invalid={Boolean(error)}
      >
        <ListboxButton
          className={clsx(
            'inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 px-3.5 py-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400 data-[disabled]:cursor-not-allowed',
            error && 'border-red-400',
          )}
        >
          <ListboxButtonText
            value={value}
            placeholder={placeholder}
            icon={icon}
          />
          <Icon component={CaretDown} size={16} weight="bold" />
        </ListboxButton>
        <ListboxOptions
          as="ul"
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              as="li"
              value={option}
              disabled={option.disabled}
              className="group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
            >
              <ListboxOptionText option={option} />
              <span className="mb-px [.group:not([data-selected])_&]:hidden">
                <Icon component={Check} size={20} />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </FormField>
  )
}