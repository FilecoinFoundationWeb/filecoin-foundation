'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Sentry from '@sentry/nextjs'
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import DialogComponent, { type StatusType } from '@/components/Dialog'
import ControlledFormInput from '@/components/Form/ControlledFormInput'
import Form from '@/components/Form/Form'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type FormType = z.infer<typeof NewsletterSchema>

export const url = `${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_URL}/publications/${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_PUBLICATION_ID}/subscriptions`

export function NewsletterForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState
  const [isOpen, setIsOpen] = useState(false)
  const [notificationStatus, setNotificationStatus] = useState<
    StatusType | undefined
  >()

  async function postSubscription(email: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    return response.status
  }

  async function onSubmit(values: FormType) {
    try {
      await postSubscription(values.email)
      setIsOpen(true)
      setNotificationStatus('success')
    } catch (error) {
      setIsOpen(true)
      setNotificationStatus('warning')
      Sentry.captureException(error)
    } finally {
      methods.resetField('email')
    }
  }

  function getError(errors: FieldErrors<FormType>, name: keyof FormType) {
    return errors[name]?.message
  }

  return (
    <Form<FormType> methods={methods} className="relative" onSubmit={onSubmit}>
      <div className="flex items-end space-x-2">
        <div className="w-72">
          <ControlledFormInput<FormType>
            hideLabel
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            error={getError(methods.formState.errors, 'email')}
          />
        </div>
        <div className="flex min-w-44 [&>*:first-child]:flex-1">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing' : 'Subscribe'}
          </Button>
        </div>
      </div>
      <DialogComponent
        status={notificationStatus}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Form>
  )
}
