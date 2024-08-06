'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, useForm } from 'react-hook-form'
import useSWR from 'swr'
import { z } from 'zod'

import { Button } from '@/components/Button'
import ControlledInput from '@/components/ControlledInput'
import DialogComponent, { StatusType } from '@/components/Dialog'
import Form from '@/components/Form'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type FormType = z.infer<typeof NewsletterSchema>

const BEEHIIV_API_URL = 'https://stoplight.io/mocks/beehiiv/v2/104190750'

async function getNewsletter(endpoint: string) {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('getNewsletter: Failed to fetch data')
  }

  const data = await response.json()
  return data
}

export function NewsletterForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<StatusType>(null)

  async function onSubmit(values: FormType) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    methods.resetField('email')
    setIsOpen(true)
    setStatus('success')
    // ! add Sentry error
  }

  function getError(
    errors: FieldErrors<FormType>,
    name: Extract<keyof FormType, string>,
  ) {
    return errors[name]?.message
  }

  const { data, error, isLoading, isValidating, mutate } = useSWR('newsletter')

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
      <DialogComponent status={status} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Form>
  )
}
