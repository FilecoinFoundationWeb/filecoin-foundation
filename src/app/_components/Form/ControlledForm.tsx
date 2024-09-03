import React from 'react'

import type { FieldValues, UseFormReturn, SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

type ExcludedReactHookFormProps = 'onSubmit'

type BaseControlledFormProps = Omit<
  React.ComponentProps<'form'>,
  ExcludedReactHookFormProps
>

interface ControlledFormProps<Type extends FieldValues>
  extends BaseControlledFormProps {
  onSubmit: SubmitHandler<Type>
  methods: UseFormReturn<Type>
}

export function ControlledForm<Type extends FieldValues>({
  methods,
  children,
  onSubmit,
  ...rest
}: ControlledFormProps<Type>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
