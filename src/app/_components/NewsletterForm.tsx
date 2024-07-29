'use client'

import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'

import { NewsletterSchema } from '@/_schemas/newsletterSchema'

import { Button } from './Button'
import ControlledInput from './ControlledInput'
import Form from './Form'
import { InputProps } from './Input'

export type FormType = {
  email: string
}

export const newsletterFields: InputProps[] = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
]

export function NewsletterForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState

  const onSubmit: SubmitHandler<FormType> = async (values: FormType) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    methods.resetField('email')
  }

  const getError = (errors: FieldErrors<FormType>, name: keyof FormType) => {
    return errors[name]?.message
  }

  return (
    <Form<FormType> methods={methods} className="relative" onSubmit={onSubmit}>
      <div className="flex items-end space-x-2">
        {newsletterFields.map((newsletterField) => (
          <ControlledInput
            key={newsletterField.id}
            name={newsletterField.id}
            {...newsletterField}
            errors={getError(
              methods.formState.errors,
              newsletterField.id as keyof FormType,
            )}
          />
        ))}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing' : 'Subscribe'}
        </Button>
      </div>
    </Form>
  )
}
