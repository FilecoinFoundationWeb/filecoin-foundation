import type { TranslationFunction } from '@/i18n/types'

import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'

import type { useNotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

type CreateHubSpotSubmitHandlerConfig = {
  endpoint: `/api/hubspot/${string}`
  dialog: ReturnType<typeof useNotificationDialog>
  t: TranslationFunction
  onSuccess?: () => void
}

export function createHubSpotSubmitHandler({
  endpoint,
  dialog,
  onSuccess,
  t,
}: CreateHubSpotSubmitHandlerConfig) {
  return async (data: Record<string, unknown>) => {
    try {
      const response = await fetch(endpoint, {
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
      onSuccess?.()
    } catch (err) {
      dialog.open({
        message: t('errorMessage'),
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
        icon: { component: XCircleIcon, color: 'error' },
      })
      Sentry.captureException(err)
    }
  }
}
