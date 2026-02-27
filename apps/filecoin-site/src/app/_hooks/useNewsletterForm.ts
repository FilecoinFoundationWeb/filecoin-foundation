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

      const body = await response.json()
      const message =
        body?.message ?? (response.ok ? undefined : t('subscriptionFailed'))

      if (!response.ok) {
        dialog.open({
          message: message || t('errorGeneric'),
          duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
          icon: { component: XCircleIcon, color: 'error' },
        })
        return
      }

      const successMessage = body?.isAlreadySubscribed
        ? t('alreadySubscribed')
        : t('successMessage')

      dialog.open({
        message: successMessage,
        icon: { component: CheckCircleIcon, color: 'success' },
      })
      form.resetField('email')
    } catch (err) {
      dialog.open({
        message: t('errorOccurred'),
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircleIcon, color: 'error' },
      })
      Sentry.captureException(err)
    }
  }

  return { form, dialog, onSubmit }
}
