import React from 'react'

import type { FieldValues, UseFormReturn, SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

type FormProps<Type extends FieldValues> = {
  onSubmit: SubmitHandler<Type>
  methods: UseFormReturn<Type>
} & Omit<React.ComponentProps<'form'>, 'onSubmit'>

export function Form<Type extends FieldValues>(props: FormProps<Type>) {
  const { methods, children, onSubmit, ...rest } = props

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
