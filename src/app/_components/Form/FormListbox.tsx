import { Listbox } from '@headlessui/react'
import theme from 'tailwindcss/defaultTheme'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'
import { type IconProps } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption, type OptionType } from '@/components/ListboxOption'
import {
  ListboxOptions,
  type ListboxOptionsProps,
} from '@/components/ListboxOptions'

export type FormListboxProps = {
  value: OptionType
  onChange: (value: OptionType) => void
  onBlur: () => void
  options: Array<OptionType>
  placeholder: string
  icon?: IconProps['component']
  buttonWidth?: `w-${keyof typeof theme.spacing}`
  optionsWidth?: ListboxOptionsProps['width']
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
  optionsWidth,
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
        <ListboxOptions width={optionsWidth} position={optionsPosition}>
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </Listbox>
    </FormField>
  )
}
