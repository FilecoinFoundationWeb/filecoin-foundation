import { Listbox } from '@headlessui/react'

import { FormField } from '@/components/Form/FormField'
import type { FormListboxProps } from '@/components/Form/FormListbox'
import { ListboxButton } from '@/components/Listbox/ListboxButton'
import { ListboxGroupHeader } from '@/components/Listbox/ListboxGroupHeader'
import { ListboxOption } from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

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
