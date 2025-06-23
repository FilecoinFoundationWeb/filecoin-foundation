'use client'

import { XCircle } from '@phosphor-icons/react'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import {
  NotificationDialog,
  useNotificationDialog,
} from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

type ErrorMessageProps = {
  message: string
}

export function ErrorNotification(props: ErrorMessageProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  const dialog = useNotificationDialog({
    init: 'open',
    message: props.message,
    icon: { component: XCircle, color: 'error' },
    duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
    onClose: resetSearchParams,
  })

  return (
    <NotificationDialog
      isOpen={dialog.isOpen}
      message={dialog.message}
      icon={dialog.icon}
      onClose={dialog.close}
    />
  )
}
