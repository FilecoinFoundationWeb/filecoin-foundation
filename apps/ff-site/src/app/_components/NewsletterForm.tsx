'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  NotificationDialog,
  useNotificationDialog,
} from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

import { Button } from '@/components/Button'
import { ControlledForm } from '@/components/Form/ControlledForm'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'

const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type NewsLetterFormType = z.infer<typeof NewsletterSchema>

export function NewsletterForm() {
  const { form, dialog, onSubmit } = useNewsletterForm()

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<NewsLetterFormType>
      form={form}
      className="relative"
      onSubmit={onSubmit}
    >
      <div className="-mb-8 flex items-start space-x-2">
        <div className="w-72">
          <ControlledFormInput<NewsLetterFormType>
            hideLabel
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>
        <div className="flex min-w-36">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Subscribing' : 'Subscribe'}
          </Button>
        </div>
      </div>
      <NotificationDialog
        message={dialog.message}
        isOpen={dialog.isOpen}
        icon={dialog.icon}
        onClose={dialog.close}
      />
    </ControlledForm>
  )
}

function useNewsletterForm() {
  const form = useForm<NewsLetterFormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const dialog = useNotificationDialog()

  async function onSubmit(values: NewsLetterFormType) {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      dialog.open({
        message: 'Successfully subscribed!',
        icon: { component: CheckCircle, color: 'success' },
      })
    } catch (error) {
      dialog.open({
        message: 'An error has occurred. Please try again.',
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircle, color: 'error' },
      })

      Sentry.captureException(error)
    } finally {
      form.resetField('email')
    }
  }

  return {
    form,
    dialog,
    onSubmit,
  }
}
