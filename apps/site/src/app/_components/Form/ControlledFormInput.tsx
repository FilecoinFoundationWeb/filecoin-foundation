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

interface ControlledFormInputProps<
  FormValues extends FieldValues,
  FieldValue extends string | undefined = string,
> extends BaseControlledFormInputProps {
  name: FieldPathByValue<FormValues, FieldValue>
}

export function ControlledFormInput<
  FormValues extends FieldValues,
  FieldValue extends string | undefined = string,
>({ name, ...rest }: ControlledFormInputProps<FormValues, FieldValue>) {
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
