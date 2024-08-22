import React from 'react'

import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import { FormInput, type FormInputProps } from '@/components/Form/FormInput'

type ControlledProps =
  | 'value'
  | 'defaultValue'
  | 'error'
  | 'onChange'
  | 'onBlur'
  | 'required'
type AvailableInputProps = Omit<FormInputProps, ControlledProps>

type ControlledFormInputProps<FormValues extends FieldValues> = {
  name: FieldPathByValue<FormValues, string>
} & AvailableInputProps

export function ControlledFormInput<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormInputProps<FormValues>) {
  const { control, formState } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = field.value || ''
        const error = formState.errors[name]

        return (
          <FormInput
            {...rest}
            value={value}
            error={error && String(error.message)}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )
      }}
    />
  )
}
