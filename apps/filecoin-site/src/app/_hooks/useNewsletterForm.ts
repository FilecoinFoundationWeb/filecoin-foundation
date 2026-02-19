import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { useNotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'
import {
  createNewsletterFormSchema,
  type NewsletterFormData,
} from '@filecoin-foundation/utils/schemas/NewsletterFormSchema'

export function useNewsletterForm() {
  const t = useTranslations('newsletterForm')
  const schema = createNewsletterFormSchema({
    emailInvalid: t('emailInvalid'),
    emailRequired: t('emailRequired'),
  })

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(schema),
  })
  const dialog = useNotificationDialog()

  async function onSubmit(values: NewsletterFormData) {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      })

      const body = await response.json().catch(() => ({}))
      const message =
        body?.message ?? (response.ok ? undefined : 'Subscription failed')

      if (!response.ok) {
        dialog.open({
          message: message || 'Something went wrong. Please try again.',
          duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
          icon: { component: XCircleIcon, color: 'error' },
        })
        return
      }

      dialog.open({
        message: 'Successfully subscribed!',
        icon: { component: CheckCircleIcon, color: 'success' },
      })
    } catch (err) {
      dialog.open({
        message: 'An error has occurred. Please try again.',
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircleIcon, color: 'error' },
      })
      Sentry.captureException(err)
    } finally {
      form.resetField('email')
    }
  }

  return { form, dialog, onSubmit }
}
