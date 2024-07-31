import React from 'react'

import { useFormContext, Controller, RegisterOptions } from 'react-hook-form'

import { Input, type InputProps } from '@/components/Input'

type Props = {
  name: string
  rules?: RegisterOptions
} & Omit<InputProps, 'onChange' | 'onBlur' | 'value'>

export default function ControlledInput(props: Props) {
  const { name, rules } = props
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input
          {...props}
          value={field.value ?? ''}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  )
}
