'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { useForm } from 'react-hook-form'

import {
  NotificationDialog,
  useNotificationDialog,
} from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'
import {
  NewsletterFormSchema,
  type NewsletterFormData,
} from '@filecoin-foundation/utils/schemas/NewsletterFormSchema'

import { Button } from '@/components/Button'
import { ControlledForm } from '@/components/Form/ControlledForm'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'

export function NewsletterForm() {
  const { form, dialog, onSubmit } = useNewsletterForm()

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<NewsletterFormData>
      form={form}
      className="relative"
      onSubmit={onSubmit}
    >
      <div className="-mb-8 flex items-start space-x-2">
        <div className="w-72">
          <ControlledFormInput<NewsletterFormData>
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
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
  })

  const dialog = useNotificationDialog()

  async function onSubmit(values: NewsletterFormData) {
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
        icon: { component: CheckCircleIcon, color: 'success' },
      })
    } catch (error) {
      dialog.open({
        message: 'An error has occurred. Please try again.',
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircleIcon, color: 'error' },
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
