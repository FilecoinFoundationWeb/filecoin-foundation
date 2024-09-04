import React from 'react'

import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import { FormInput, type FormInputProps } from '@/components/Form/FormInput'

type ExcludedReactHookFormProps =
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormInputProps = Omit<
  FormInputProps,
  ExcludedReactHookFormProps
>

interface ControlledFormInputProps<FormValues extends FieldValues>
  extends BaseControlledFormInputProps {
  name: FieldPathByValue<FormValues, string>
}

export function ControlledFormInput<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormInputProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value = '', onChange, onBlur } }) => (
        <FormInput
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
