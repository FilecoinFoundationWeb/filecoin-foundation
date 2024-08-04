import React from 'react'

import { Field } from '@headlessui/react'
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form'

import { InputComponent, InputProps } from '@/components/Input'
import { LabelComponent } from '@/components/Label'

type Props = {
  name: string
  type: string
  rules?: RegisterOptions
  error?: string
  isLabelHidden?: boolean
} & Omit<InputProps, 'onChange' | 'onBlur' | 'value'>

export default function ControlledInput({
  isLabelHidden = false,
  ...props
}: Props) {
  const { name, rules } = props
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Field className="space-y-2">
          <LabelComponent label={name} isHidden={isLabelHidden} />
          <InputComponent
            {...props}
            value={field.value ?? ''}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        </Field>
      )}
    />
  )
}
