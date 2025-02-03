import { Listbox } from '@headlessui/react'
import theme from 'tailwindcss/defaultTheme'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'
import { type IconProps } from '@/components/Icon'
import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptionGroup } from '@/components/Listbox/ListboxOptionGroup'
import {
  ListboxOptions,
  type ListboxOptionsProps,
} from '@/components/Listbox/ListboxOptions'

export type FormListboxProps = {
  value: OptionType
  onChange: (value: OptionType) => void
  onBlur: () => void
  options: Array<OptionType | string>
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
  const withGroupedOptions = options.some(
    (option) => typeof option === 'string',
  )

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
        <ListboxOptions
          withGroupedOptions={withGroupedOptions}
          position={optionsPosition}
        >
          {options.map((option) =>
            typeof option === 'string' ? (
              <ListboxOptionGroup key={option} name={option} />
            ) : (
              <ListboxOption
                key={option.id}
                option={option}
                withGroupedOptions={withGroupedOptions}
              />
            ),
          )}
        </ListboxOptions>
      </Listbox>
    </FormField>
  )
}
