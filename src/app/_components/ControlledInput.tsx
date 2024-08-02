import React from 'react'

import { useFormContext, Controller, RegisterOptions } from 'react-hook-form'

import { InputComponent, InputProps } from '@/components/Input'

type Props = {
  name: string
  type: string
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
        <InputComponent
          {...props}
          value={field.value ?? ''}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  )
}
