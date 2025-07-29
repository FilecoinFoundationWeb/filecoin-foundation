import {
  FormField,
  type FormFieldProps,
} from '@filecoin-foundation/ui/FormField'
import { type IconProps } from '@filecoin-foundation/ui/Icon'
import { Listbox } from '@filecoin-foundation/ui/Listbox'
import { ListboxButton } from '@filecoin-foundation/ui/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@filecoin-foundation/ui/Listbox/ListboxOption'
import {
  ListboxOptions,
  type ListboxOptionsProps,
} from '@filecoin-foundation/ui/Listbox/ListboxOptions'
import { type SpacingValue } from '@filecoin-foundation/utils/types/tailwindTypes'


export type FormListboxProps = {
  value: OptionType
  onChange: (value: OptionType) => void
  onBlur: () => void
  options: Array<OptionType>
  placeholder: string
  icon?: IconProps['component']
  buttonWidth?: `w-${SpacingValue}`
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
