import { Listbox } from '@headlessui/react'
import theme from 'tailwindcss/defaultTheme'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'
import { type IconProps } from '@/components/Icon'
import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import {
  ListboxOptions,
  type ListboxOptionsProps,
} from '@/components/Listbox/ListboxOptions'

export type FormListboxProps = {
  value: OptionType
  onChange: (value: OptionType) => void
  onBlur: () => void
  options: Array<OptionType>
  placeholder: string
  icon?: IconProps['component']
  buttonWidth?: `w-${keyof typeof theme.spacing}`
  optionsPosition?: ListboxOptionsProps['position']
  disabled?: boolean
} & FormFieldProps

export function FormListbox({
  label,
  hideLabel,
  error,
  options,
  value,
  placeholder,
  icon,
  buttonWidth,
  optionsPosition,
  ...rest
}: FormListboxProps) {
  return (
    <FormField label={label} hideLabel={hideLabel} error={error}>
      <Listbox
        {...rest}
        as="div"
        value={value}
        invalid={Boolean(error)}
        className={buttonWidth}
      >
        <ListboxButton
          text={value?.name || placeholder}
          leadingIcon={icon}
          hasError={Boolean(error)}
        />
        <ListboxOptions position={optionsPosition}>
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </Listbox>
    </FormField>
  )
}
