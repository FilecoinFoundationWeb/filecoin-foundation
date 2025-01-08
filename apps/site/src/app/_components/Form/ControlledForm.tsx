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
  form: UseFormReturn<Type>
  onSubmit: SubmitHandler<Type>
}

export function ControlledForm<Type extends FieldValues>({
  form,
  children,
  onSubmit,
  ...rest
}: ControlledFormProps<Type>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
