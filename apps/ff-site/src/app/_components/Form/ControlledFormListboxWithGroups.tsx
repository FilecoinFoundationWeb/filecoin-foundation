import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'


import {
  FormListboxWithGroups,
  type FormListboxWithGroupsProps,
} from './FormListboxWithGroups'

type ExcludedReactHookFormProps =
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormListboxProps = Omit<
  FormListboxWithGroupsProps,
  ExcludedReactHookFormProps
>

interface ControlledFormListboxWithGroupsProps<FormValues extends FieldValues>
  extends BaseControlledFormListboxProps {
  name: FieldPathByValue<FormValues, OptionType>
}

export function ControlledFormListboxWithGroups<
  FormValues extends FieldValues,
>({ name, ...rest }: ControlledFormListboxWithGroupsProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormListboxWithGroups
          {...rest}
          value={value}
          error={errors[name]?.message?.toString()}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  )
}
