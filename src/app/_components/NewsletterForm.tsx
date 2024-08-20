'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Sentry from '@sentry/nextjs'
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import ControlledFormInput from '@/components/Form/ControlledFormInput'
import Form from '@/components/Form/Form'
import {
  NotificationDialog,
  type StatusType,
} from '@/components/NotificationDialog'

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type FormType = z.infer<typeof NewsletterSchema>

export const NOTIFICATION_DIALOG_DURATION = 5000

const NEWSLETTER_URL = `${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_URL}/publications/${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_PUBLICATION_ID}/subscriptions`
const AUTHORIZATION_HEADER = `Bearer ${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_KEY}`

function postSubscription(email: string): Promise<number> {
  return fetch(NEWSLETTER_URL, {
    method: 'POST',
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((response) => response.status)
}

export function NewsletterForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean
    status?: StatusType
  }>({ isOpen: false })

  async function onSubmit(values: FormType) {
    try {
      await postSubscription(values.email)
      setDialogState({ isOpen: true, status: 'success' })
    } catch (error) {
      setDialogState({ isOpen: true, status: 'warning' })
      Sentry.captureException(error)
    } finally {
      methods.resetField('email')
      setTimeout(() => {
        setDialogState((prev) => ({ ...prev, isOpen: false }))
      }, NOTIFICATION_DIALOG_DURATION)
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
      <NotificationDialog
        status={dialogState.status}
        isOpen={dialogState.isOpen}
        setIsOpen={(isOpen) => setDialogState((prev) => ({ ...prev, isOpen }))}
      />
    </Form>
  )
}
