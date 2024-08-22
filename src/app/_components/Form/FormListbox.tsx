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

type HardCodedProps = 'as' | 'className' | 'id' | 'by'

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
            'inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400 data-[disabled]:cursor-not-allowed md:min-w-40',
            error && 'border-red-400',
          )}
        >
          <div className="inline-flex items-center gap-2">
            {icon && <Icon component={icon} />}
            <span className="hidden sm:block">
              {value?.name || placeholder}
            </span>
          </div>
          <span className="hidden sm:block">
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
                  {option.name}
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
      <FormError error={error} hideError={hideError} />
    </Field>
  )
}
