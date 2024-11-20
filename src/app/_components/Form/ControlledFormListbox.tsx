import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import type { OptionType } from '@/components/ListboxOption'

import { FormListbox, type FormListboxProps } from './FormListbox'

type ExcludedReactHookFormProps =
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormListboxProps = Omit<
  FormListboxProps,
  ExcludedReactHookFormProps
>

interface ControlledFormListboxProps<FormValues extends FieldValues>
  extends BaseControlledFormListboxProps {
  name: FieldPathByValue<FormValues, OptionType>
}

export function ControlledFormListbox<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormListboxProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormListbox
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
