import { Listbox } from '@filecoin-foundation/ui/Listbox'
import { ListboxButton } from '@filecoin-foundation/ui/Listbox/ListboxButton'
import { ListboxGroupHeader } from '@filecoin-foundation/ui/Listbox/ListboxGroupHeader'
import { ListboxOption } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { ListboxOptions } from '@filecoin-foundation/ui/Listbox/ListboxOptions'

import { FormField } from '@/components/Form/FormField'
import type { FormListboxProps } from '@/components/Form/FormListbox'

export type GroupedOption = {
  label: string
  options: FormListboxProps['options']
}

export type FormListboxWithGroupsProps = Omit<FormListboxProps, 'options'> & {
  groupedOptions: Array<GroupedOption>
}

export function FormListboxWithGroups({
  label,
  hideLabel,
  error,
  groupedOptions,
  value,
  placeholder,
  icon,
  buttonWidth,
  optionsPosition,
  ...rest
}: FormListboxWithGroupsProps) {
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
        <ListboxOptions as="div" position={optionsPosition}>
          {groupedOptions.map(({ label, options }) => (
            <ListboxGroupHeader key={label} label={label}>
              {options.map((option) => (
                <ListboxOption key={option.id} option={option} />
              ))}
            </ListboxGroupHeader>
          ))}
        </ListboxOptions>
      </Listbox>
    </FormField>
  )
}
