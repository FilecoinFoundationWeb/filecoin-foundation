'use client'

import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import ControlledInput from '@/components/ControlledInput'
import Form from '@/components/Form'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type FormType = z.infer<typeof NewsletterSchema>

export function NewsletterForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState

  async function onSubmit(values: FormType) {
    await new Promise((resolve) => setTimeout(resolve, 10000))
    methods.resetField('email')
  }

  function getError(
    errors: FieldErrors<FormType>,
    name: Extract<keyof FormType, string>,
  ) {
    return errors[name]?.message
  }

  return (
    <Form<FormType> methods={methods} className="relative" onSubmit={onSubmit}>
      <div className="flex items-end space-x-2">
        <ControlledInput
          name="email"
          type="email"
          placeholder="Enter your email"
          isLabelHidden={true}
          error={getError(methods.formState.errors, 'email')}
        />
        <Button className="min-w-44" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing' : 'Subscribe'}
        </Button>
      </div>
    </Form>
  )
}
