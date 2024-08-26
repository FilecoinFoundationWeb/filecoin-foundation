import React from 'react'

import { useFormContext, Controller } from 'react-hook-form'
import type { RegisterOptions, FieldValues } from 'react-hook-form'

import { FormInput, type FormInputProps } from '@/components/Form/FormInput'

type ControlledFormInputProps<FormType extends FieldValues> = {
  name: keyof FormType
  rules?: RegisterOptions
} & FormInputProps

export default function ControlledFormInput<FormType extends FieldValues>({
  name,
  rules,
  type,
  ...props
}: ControlledFormInputProps<FormType>) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormInput
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
