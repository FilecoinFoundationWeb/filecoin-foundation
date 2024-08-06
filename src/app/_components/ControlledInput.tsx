import React from 'react'

import {
  useFormContext,
  Controller,
  RegisterOptions,
  FieldValues,
} from 'react-hook-form'

import { InputComponent, InputProps } from '@/components/Input'

type ControlledInputProps<FormType extends FieldValues> = {
  name: keyof FormType
  rules?: RegisterOptions
} & InputProps

export default function ControlledInput<FormType extends FieldValues>({
  name,
  rules,
  type,
  ...props
}: ControlledInputProps<FormType>) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputComponent
          {...props}
          type={type}
          value={field.value ?? ''}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  )
}
