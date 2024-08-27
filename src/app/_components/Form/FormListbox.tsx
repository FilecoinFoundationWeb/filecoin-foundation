import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  type ListboxProps,
} from '@headlessui/react'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon, type IconProps } from '@/components/Icon'

export type OptionType = {
  id: string
  name: string
  count?: number
  disabled?: boolean
}

type HardCodedProps = 'as' | 'className' | 'id' | 'by' | 'invalid'

export type FormListboxProps<Option extends OptionType = OptionType> = {
  options: Array<Option>
  placeholder: string
  icon?: IconProps['component']
} & Omit<ListboxProps<'div', Option>, HardCodedProps> &
  FormLabelProps &
  FormErrorProps

export function FormListbox<Option extends OptionType = OptionType>({
  label,
  hideLabel,
  error,
  hideError,
  options,
  value,
  placeholder,
  icon,
  ...rest
}: FormListboxProps<Option>) {
  return (
    <Field className="relative w-full">
      <FormLabel label={label} hideLabel={hideLabel} />
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
          <ButtonText value={value} placeholder={placeholder} icon={icon} />
          <Icon component={CaretDown} size={16} weight="bold" />
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
                <ListboxOptionText option={option} />
                <span className="mb-px [.group:not([data-selected])_&]:hidden">
                  <Icon component={Check} size={20} />
                </span>
              </ListboxOption>
            )
          })}
        </ListboxOptions>
      </Listbox>
      <FormError error={error} hideError={hideError} />
    </Field>
  )
}

type ButtonTextProps = Pick<FormListboxProps, 'value' | 'placeholder' | 'icon'>

function ButtonText({ value, placeholder, icon }: ButtonTextProps) {
  if (!icon) {
    return <span>{value?.name || placeholder}</span>
  }

  return (
    <div className="inline-flex items-center gap-2">
      {icon && <Icon component={icon} />}
      {value?.name || placeholder}
    </div>
  )
}

type ListboxOptionTextProps = { option: OptionType }

function ListboxOptionText({ option }: ListboxOptionTextProps) {
  const { name, count } = option

  if (typeof count === 'undefined') {
    return <span>{name}</span>
  }

  return (
    <span>
      {name}
      <span className="ml-2 text-sm font-light">({count})</span>
    </span>
  )
}
