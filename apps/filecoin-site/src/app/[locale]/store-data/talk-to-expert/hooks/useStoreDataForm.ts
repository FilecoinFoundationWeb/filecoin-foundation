import type { TranslationFunction } from '@/i18n/types'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { useForm } from 'react-hook-form'

import { useNotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

import {
  createStoreDataFormSchema,
  type StoreDataFormSchema,
} from '../schema/StoreDataFormSchema'

export function useStoreDataForm(t: TranslationFunction) {
  const dialog = useNotificationDialog()

  const schema = createStoreDataFormSchema({
    firstNameRequired: t('firstName.error'),
    lastNameRequired: t('lastName.error'),
    companyNameRequired: t('companyName.error'),
    businessEmailInvalid: t('businessEmail.errorInvalid'),
    businessEmailRequired: t('businessEmail.errorRequired'),
    dataVolumeRequired: t('dataVolume.error'),
  })

  const form = useForm<StoreDataFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      communicationOptIn: false,
    },
  })

  async function submitToHubSpot(data: StoreDataFormSchema) {
    try {
      const response = await fetch('/api/hubspot/store-data', {
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
        message: t('errorOccurred'),
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
