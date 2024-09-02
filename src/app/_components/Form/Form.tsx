import React from 'react'

import type { FieldValues, UseFormReturn, SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

type ExcludedProps = 'onSubmit'

type UncontrolledFormProps = Omit<React.ComponentProps<'form'>, ExcludedProps>

interface FormProps<Type extends FieldValues> extends UncontrolledFormProps {
  onSubmit: SubmitHandler<Type>
  methods: UseFormReturn<Type>
}

// #Q: ControlledForm?
export function Form<Type extends FieldValues>({
  methods,
  children,
  onSubmit,
  ...rest
}: FormProps<Type>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
