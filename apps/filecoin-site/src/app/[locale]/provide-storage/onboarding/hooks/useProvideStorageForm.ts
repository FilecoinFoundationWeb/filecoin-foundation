import type { TranslationFunction } from '@/i18n/types'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { useForm } from 'react-hook-form'

import { useNotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

import {
  createProvideStorageFormSchema,
  type ProvideStorageFormSchema,
} from '../schema/ProvideStorageFormSchema'

export function useProvideStorageForm(t: TranslationFunction) {
  const dialog = useNotificationDialog()

  const schema = createProvideStorageFormSchema({
    firstNameRequired: t('firstName.error'),
    lastNameRequired: t('lastName.error'),
    companyNameRequired: t('companyName.error'),
    businessEmailInvalid: t('businessEmail.errorInvalid'),
    businessEmailRequired: t('businessEmail.errorRequired'),
  })

  const form = useForm<ProvideStorageFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      communicationOptIn: false,
    },
  })

  async function submitToHubSpot(data: ProvideStorageFormSchema) {
    try {
      const response = await fetch('/api/hubspot/provide-storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        dialog.open({
          message: t('errorMessage'),
          duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
          icon: { component: XCircleIcon, color: 'error' },
        })
        Sentry.captureMessage('HubSpot form submission failed', {
          extra: { status: response.status },
        })
        return
      }

      dialog.open({
        message: t('successMessage'),
        icon: { component: CheckCircleIcon, color: 'success' },
      })
      form.reset()
    } catch (err) {
      dialog.open({
        message: t('errorMessage'),
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircleIcon, color: 'error' },
      })
      Sentry.captureException(err)
    }
  }

  return {
    form,
    dialog,
    submitToHubSpot,
    isSubmitting: form.formState.isSubmitting,
  }
}
